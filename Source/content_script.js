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



function handleText(textNode){
	var textArray = [{
		originalText: "The Cloud",
		updatedText: "My Butt"
	},{
		originalText: "The cloud",
		updatedText: "My butt"
	}, {
		originalText: "the Cloud",
		updatedText: "my Butt"
	}, {
		originalText: "the cloud",
		updatedText: "my butt",
	}
	];

	for (var enumeration = textArray.length - 1; enumeration >= 0; enumeration--) {
		// console.log(textArray[enumeration]);
		var nodeTextToFix = textNode.nodeValue;
        
        var huntedPhrase = new RegExp(textArray[enumeration].originalText, "g")


		textNode.nodeValue = nodeTextToFix.replace(huntedPhrase, textArray[enumeration].updatedText);
	};
}
walk(document.body);
