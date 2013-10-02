walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	// And I forked this from panicsteve because
	// why reinvent the wheel and i need to learn
	// git at some point
	
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

	v = v.replace(/\bhipster\b/g, "my internalized misconception of the youth");
	v = v.replace(/\bHipster\b/g, "My internalized misconception of the youth");
	v = v.replace(/\bhipsters\b/g, "my internalized misconception of youths");
	v = v.replace(/\bHipsters\b/g, "My internalized misconception of youths");
	
	v = v.replace(/\bmillennial\b/g, "my internalized misconception of the youth");
	v = v.replace(/\bMillennial\b/g, "My internalized misconception of the youth");
	v = v.replace(/\bmillennials\b/g, "my internalized misconception of youths");
	v = v.replace(/\bMillennials\b/g, "My internalized misconception of youths");
	
	textNode.nodeValue = v;
}


