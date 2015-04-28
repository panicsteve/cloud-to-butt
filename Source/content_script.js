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

	v = v.replace(/\bshep\b/g, "snep");
	v = v.replace(/\bShep\b/g, "Snep");
	v = v.replace(/\bSHEP\b/g, "SNEP");
	v = v.replace(/\bsheppy\b/g, "sneppy");
	v = v.replace(/\bSheppy\b/g, "Sneppy");
	v = v.replace(/\bshepherd\b/g, "snepherd");
	v = v.replace(/\bShepherd\b/g, "Snepherd");
	v = v.replace(/\bbramble\b/g, "rubus");
	v = v.replace(/\bBramble\b/g, "Rubus");

	textNode.nodeValue = v;
}
