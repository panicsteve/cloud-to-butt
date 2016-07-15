walk(document.body);

function walk(node) 
{
	//I then stole it from Cloud to Butt - Dan
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

	v = v.replace(/\bMike Pence\b/g, "Dark Lord Pence");
	v = v.replace(/\bIndiana Gov. Mike Pence\b/g, "Corn Imperator Pence");
	v = v.replace(/\bPence\b/g, "Lord Pence");
	v = v.replace(/\bGovernor Mike Pence\b/g, "Dark Lord of the Sith, Darth Pence,");
	v = v.replace(/\bGovernor Pence\b/g, "Darth Pence");
	v = v.replace(/\bVice Presidential Candidate Mike Pence\b/g, "Sith Apprentice to Donald Trump, Darth Pence, ");
	
	textNode.nodeValue = v;
}


