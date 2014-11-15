var gWordArray = ["ab", "abber", "aby", "affe", "affy", "alaxy", "amber", "amble", "andalf", "arbage", "arble", "arden", "argantuan", "argle", "arlic", "arter", "asp", "asper", "atsby", "auntlet", "awker", "elato", "enie", "enital", "eriatric", "erm", "hastly", "host", "iant", "ibber", "ibble", "iblet", "iffy", "iggle", "inormous", "iraffe", "izzle", "lamour", "litter", "lorble", "lycerine", "nome", "oad", "oat", "oatee", "obber", "obble", "oblin", "offy", "olden", "olfer", "oo", "oober", "oobly", "oofy", "oogle", "ook", "oomba", "oon", "oop", "opher", "ossip", "rade", "rain", "rand", "rasp", "rasper", "rave", "ravel", "ravity", "ravy", "rease", "reat", "reen", "rief", "rizzly", "roin", "ross", "rudge", "rumble", "rumpy", "ubber", "uerilla", "uest", "uffy", "uide", "uilt", "ulf", "ullet", "ullible", "umball", "ust", "uzzler"]

walk(document.body);

if (window.MutationObserver) {
	var observer = new MutationObserver(function (mutations) {
		Array.prototype.forEach.call(mutations, function (m) {
			if (m.type === 'childList') {
				walk(m.target);
			} else if (m.target.nodeType === 3) {
				handleText(m.target);
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		attributes: false,
		characterData: true,
		subtree: true
	});
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function getGWord(includeCapitalG)
{
	gWord = gWordArray[Math.floor(Math.random() * gWordArray.length)];

	if (includeCapitalG)
		gWord = "G" + gWord;

	return gWord;
}

function handleText(textNode) 
{
	if (textNode.parentElement.tagName.toLowerCase() === "script" || textNode.parentElement.isContentEditable === true) {
		return false;
	}

	var oldValue = textNode.nodeValue;
	var v = oldValue;

	//gamergater -> alligator
	v = v.replace(/\b(g)amergat[eo]r(s?)\b/ig, "$1lligator$2");
	v = v.replace(/\bglligator(s?)\b/g, "alligator$1");
	v = v.replace(/\bGlligator(s?)\b/g, "Alligator$1");
	v = v.replace(/\ba (alligator?)\b/ig, "an $1");

	//gamergate -> gwordgword
	v = v.replace(/\b(g)amer(g)ate(s?)\b/ig, "$1" + getGWord(false) + "$2" + getGWord(false) + "$3");
	
	if (v !== oldValue) {
		textNode.nodeValue = v;
	}
}