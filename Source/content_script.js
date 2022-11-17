walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
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

	//v = v.replace(/\bThe Cloud\b/g, "My Butt");
	//v = v.replace(/\bThe cloud\b/g, "My butt");
	//v = v.replace(/\bthe Cloud\b/g, "my Butt");
	//v = v.replace(/\bthe cloud\b/g, "my butt");
	
	v = v.replace(/\bstudent\b/g, "debil");
	v = v.replace(/\bstudenta\b/g, "debila");
	v = v.replace(/\bstudentowi\b/g, "debilowi");
	v = v.replace(/\bstudentem\b/g, "debilem");
	v = v.replace(/\bstudencie\b/g, "debilu");
	
	v = v.replace(/\bStudent\b/g, "Debil");
	v = v.replace(/\bStudenta\b/g, "Debila");
	v = v.replace(/\bStudentowi\b/g, "Debilowi");
	v = v.replace(/\bStudentem\b/g, "Debilem");
	v = v.replace(/\bStudencie\b/g, "Debilu");
	
	v = v.replace(/\bstudenci\b/g, "debile");
	v = v.replace(/\bstudentów\b/g, "debili");
	v = v.replace(/\bstudentom\b/g, "debilom");
	v = v.replace(/\bstudentami\b/g, "debilami");
	v = v.replace(/\bstudentach\b/g, "debilach");
	
	v = v.replace(/\bStudenci\b/g, "Debile");
	v = v.replace(/\bStudentów\b/g, "Debili");
	v = v.replace(/\bStudentom\b/g, "Debilom");
	v = v.replace(/\bStudentami\b/g, "Debilami");
	v = v.replace(/\bStudentach\b/g, "Debilach");
	
	textNode.nodeValue = v;
}


