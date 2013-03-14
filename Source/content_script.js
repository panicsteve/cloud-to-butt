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
	var v = textNode.nodeValue;

  v = v.replace(/\b(T|t)he (C|c)loud\b/g, function(match, p1, p2, offset, string) {
    // t - 7 = m
    // c - 1 = b
    first = String.fromCharCode(p1.charCodeAt(0) - 7);
    second = String.fromCharCode(p2.charCodeAt(0) - 1);
    return first + "y " + second + "utt";
  });
	
	textNode.nodeValue = v;
}


