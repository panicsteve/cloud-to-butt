walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E
  
  var child, next;

  switch ( node.nodeType ) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child ) {
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

function handleText(textNode) {
  var v = textNode.nodeValue
    , rgx = /(?:([Tt])[Hh]([Ee])\s)?([Cc])[Ll]([Oo])[Uu]([Dd])/gm
  ;

  v = v.replace(rgx, function(match, $1, $2, $3, $4, $5, $6) {
    return (!!$1 ?
      (
        ($1 === 'T' ? 'M' : 'm') +
        ($2 === 'E' ? 'Y' : 'y') + 
        ' '
      ) : ''
    ) +
    (
      ($3 === 'C' ? 'B' : 'b') +
      ($4 === 'O' ? 'U' : 'u') +
      ($5 === 'D' ? 'TT' : 'tt')
    );
  });
  
  textNode.nodeValue = v;
}