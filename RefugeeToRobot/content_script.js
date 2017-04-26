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

	v = v.replace(/Migranten/g, "Roboter");
  v = v.replace(/migranten/g, "roboter");
	v = v.replace(/Migrant/g, "Roboter");
  v = v.replace(/migrant/g, "roboter");
  v = v.replace(/Flüchtlings/g, "Roboter");
  v = v.replace(/flüchtlings/g, "roboter");
  v = v.replace(/Flüchtlinge/g, "Roboter");
  v = v.replace(/flüchtlinge/g, "Roboter");
  v = v.replace(/Flüchtling/g, "Roboter");
  v = v.replace(/flüchtling/g, "Roboter");
  v = v.replace(/Refugees/g, "Robots");
  v = v.replace(/refugees/g, "robots");
  v = v.replace(/Refugee/g, "Robot");
  v = v.replace(/refugee/g, "robot");

  textNode.nodeValue = v;
}


