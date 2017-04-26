walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	if(typeof node.tagName !== "undefined") {
		if(node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'textarea') {
			return;
		}
	}
  if(typeof node.classList !== "undefined") {
    if (node.classList.contains('ace_editor')) {
      return;
    }
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

	v = v.replace(/\bMigranten\b/g, "Roboter");
	v = v.replace(/\bMigrant\b/g, "Roboter");
	v = v.replace(/\bFlüchtlinge\b/g, "Roboter");
	v = v.replace(/\bFlüchtling\b/g, "Roboter");
  v = v.replace(/\bRefugees\b/g, "Robots");
  v = v.replace(/\bRefugee\b/g, "Robot");

  textNode.nodeValue = v;
}


