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

	v = v.replace(/Migranten\b/g, "Roboter");
  v = v.replace(/\bmigranten\b/g, "Roboter");
	v = v.replace(/Migrant\b/g, "Roboter");
  v = v.replace(/\bmigrant\b/g, "Roboter");
  v = v.replace(/Flüchtlings/g, "Roboter");
  v = v.replace(/flüchtlings/g, "roboter");
  v = v.replace(/Flüchtlinge\b/g, "Roboter");
  v = v.replace(/flüchtlinge/g, "roboter");
  v = v.replace(/Flüchtling\b/g, "Roboter");
  v = v.replace(/flüchtling/g, "roboter");
  v = v.replace(/\bRefugees\b/g, "robots");
  v = v.replace(/\brefugees\b/g, "robots");
  v = v.replace(/\bRefugee\b/g, "robot");
  v = v.replace(/\brefugee\b/g, "robot");
  v = v.replace(/refugee/g, "robot");

  textNode.nodeValue = v;
}


