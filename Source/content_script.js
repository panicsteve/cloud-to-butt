walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

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

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");

	//big data to heavy D conversion
	//to address issue: https://github.com/panicsteve/cloud-to-butt/issues/26
	v = v.replace(/\bbig data\b/g, "heavy D");
	v = v.replace(/\bbig Data\b/g, "heavy D");
	v = v.replace(/\bBig data\b/g, "Heavy D");
	v = v.replace(/\bBig Data\b/g, "Heavy D");

	textNode.nodeValue = v;
}


