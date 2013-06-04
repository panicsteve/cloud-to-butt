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

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	//PT-BR
	v = v.replace(/\ba nuvem\b/g, "minha bunda");
	v = v.replace(/\bA Nuvem\b/g, "Minha Bunda");
	v = v.replace(/\bA nuvem\b/g, "Minha bunda");
	
	v = v.replace(/\bnuvem\b/g, "bunda");
	v = v.replace(/\bnuvens\b/g, "bundas");
	
	v = v.replace(/\bNuvem\b/g, "Bunda");
	v = v.replace(/\bNuvens\b/g, "Bundas");
	

	textNode.nodeValue = v;
}


