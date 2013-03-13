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
	var chars = {
        't' : "m",
        'c' : "b",
        'T' : "M",
        'C' : "B"
        };
	
	var v = textNode.nodeValue;

	v = v.replace(/\b(t)he(\s+)(c)loud\b/ig, function(match, t, ws, c) {

	    return chars[t] + "y" + ws + chars[c] + "utt";

	});

	textNode.nodeValue = v;
}


