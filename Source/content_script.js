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
	textNode.nodeValue = textNode.nodeValue.replace(/\bthe cloud\b/gi, "my butt");
	textNode.nodeValue = textNode.nodeValue.replace(/\bCloud\b/gi, "Butt");
	textNode.nodeValue = textNode.nodeValue.replace(/\b.aaS\b/gi, "Ass");
}


