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
			if(node.parentElement.tagName.toLowerCase() != "script") {
				handleText(node);
			}
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bsjw\b/ig, "skeleton");
	v = v.replace(/\bsjws\b/ig, "skeletons");
	v = v.replace(/\bAn skeleton(s?)\b/g, "A skeleton$1");
	v = v.replace(/\ban skeleton(s?)\b/g, "a skeleton$1");
	
	textNode.nodeValue = v;
}


