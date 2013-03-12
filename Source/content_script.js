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
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	textNode.nodeValue = textNode.nodeValue.replace(/\bthe cloud\b/g, "my butt");
	textNode.nodeValue = textNode.nodeValue.replace(/\bthe Cloud\b/g, "my Butt");
	textNode.nodeValue = textNode.nodeValue.replace(/\bThe cloud\b/g, "My butt");
	textNode.nodeValue = textNode.nodeValue.replace(/\bThe Cloud\b/g, "My Butt");
}