String.prototype.buttize = function () {    
    var translations = [
		['the cloud', 'my butt'],
		['The cloud', 'My butt'],
		['The Cloud', 'My Butt'], 
		['the Cloud', 'my Butt'],
		['THE CLOUD', 'MY BUTT'],
		['the CLOUD', 'my BUTT'],
		['The CLOUD', 'My BUTT'],

		['thecloud', 'mybutt'],
		['Thecloud', 'Mybutt'],
		['TheCloud', 'MyButt'], 
		['theCloud', 'myButt'],
		['THECLOUD', 'MYBUTT'],
		['theCLOUD', 'myBUTT'],
		['TheCLOUD', 'MyBUTT'],

		['cloud', "butt"],
		['Cloud', "Butt"],
		['CLOUD', "BUTT"]
	];
	
	var v = this;
	for(var key in translations)
		v = v.replace(new RegExp( translations[key][0], 'g' ), translations[key][1] );
    return v;
};

walk(document.body);

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
			node.nodeValue = node.nodeValue.buttize();
			break;
	}
}
