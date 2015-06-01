walk(document.body);

document.title = replaceText(document.title);

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

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
	// Fix some misspellings
	v = v.replace(/\b(M|m)illienial(s)?\b/g, "$1illennial$2");
	v = v.replace(/\b(M|m)illenial(s)?\b/g, "$1illennial$2");
	v = v.replace(/\b(M|m)ilennial(s)?\b/g, "$1illennial$2");
	v = v.replace(/\b(M|m)ilenial(s)?\b/g, "$1illennial$2");

	// Millennial Generation
	v = v.replace(
		/\b(?:Millennial Generation)|(?:Generation Millennial)\b/g,
		"Plissken Faction"
	);
	v = v.replace(
		/\b(?:millennial generation)|(?:generation millennial)\b/g,
		"Plissken faction"
	);

	// Millennial
	v = v.replace(/\bMillennial\b/g, "Snake Person");
	v = v.replace(/\bmillennial\b/g, "snake person");
	v = v.replace(/\bMillennials\b/g, "Snake People");
	v = v.replace(/\bmillennials\b/g, "snake people");
	v = v.replace(/\bMillennials'\b/g, "Snake People's");
	v = v.replace(/\bmillennials'\b/g, "snake people's");

	// The Great Recession
	v = v.replace(/\bGreat Recession\b/g, "Time of Shedding and Cold Rocks");
	v = v.replace(/\bgreat recession\b/g, "time of shedding and cold rocks");

	// The Great Depression
	v = v.replace(/\bGreat Depression\b/g, "Clutch Plague");
	v = v.replace(/\bgreat depression\b/g, "clutch plague");

	// Occupy Wall Street
	v = v.replace(
		/\b(?:(?:Occupy|OWS) (?:M|m)ovement)|(?:Occupy Wall Street)\b/g,
		"Great Ape-Snake War"
	);
	v = v.replace(
		/\b(?:(?:occupy|OWS|ows) movement)|(?:occupy wall street)\b/g,
		"great ape-snake war"
	);
	v = v.replace(/\bOWS\b/g, "GA-SW");
	v = v.replace(/\bows\b/g, "ga-sw");

	// Helicopter Parents
	v = v.replace(/\bHelicopter Parents\b/g, "Thulsa Doom");
	v = v.replace(/\bhelicopter parents\b/g, "Thoth-Amon");
	v = v.replace(/\bHelicopter Parents'\b/g, "Thulsa Doom's");
	v = v.replace(/\bhelicopter parents'\b/g, "Thoth-Amon's");

	// Trophy Kids
	v = v.replace(/\bTrophy Kids\b/g, "Quetzalcoatl's Chosen");
	v = v.replace(/\btrophy kids\b/g, "Quetzalcoatl's chosen");
	v = v.replace(/\bTrophy Kids'\b/g, "Quetzalcoatl's Chosen's");
	v = v.replace(/\btrophy kids'\b/g, "Quetzalcoatl's chosen's");

	// Digital Natives
	v = v.replace(/\bDigital Native(s)?\b/g, "Parseltongue$1");
	v = v.replace(/\bdigital native(s)?\b/g, "parseltongue$1");

	// Generation Y
	v = v.replace(/\b(?:Generation Y)|(?:Generation Why)\b/g,
		"Serpent Society");
	v = v.replace(/\bgen(?:eration)? ?(?:wh)?y\b/g, "serpent society");
	v = v.replace(/\bGen Y\b/g, "Society of the Serpent");

	// Generation We
	v = v.replace(/\bGeneration We\b/g, "Caduceus Cult");
	v = v.replace(/\bgeneration we\b/g, "caduceus cult");
	v = v.replace(/\bWe Generation\b/g, "Cult of the Caduceus");
	v = v.replace(/\bwe generation\b/g, "cult of the caduceus");

	// Generation Me
	v = v.replace(/\bGeneration Me\b/g, "The Cult of the Serpent");
	v = v.replace(/\bgeneration me\b/g, "the cult of the serpent");

	// Global Generation
	v = v.replace(/\bGlobal Generation\b/g, "Tannin's Horde");
	v = v.replace(/\bglobal generation\b/g, "Tannin's horde");
	v = v.replace(/\bGeneration Global\b/g, "Horde of Tannin");
	v = v.replace(/\bgeneration global\b/g, "horde of Tannin");

	// Generation Next
	v = v.replace(/\bGeneration Next\b/g, "Time of Nidhogg");
	v = v.replace(/\bgeneration next\b/g, "time of Nidhogg");

	// Net Generation
	v = v.replace(/\bNet Generation\b/g, "Damballa's Coils");
	v = v.replace(/\bnet generation\b/g, "Damballa's coils");
	v = v.replace(/\bGeneration Net\b/g, "Coils of Damballa");
	v = v.replace(/\bgeneration net\b/g, "Coils of Damballa");

	// Echo Boomers
	v = v.replace(/\bEcho Boomers\b/g, "Crotalids");
	v = v.replace(/\becho Boomers\b/g, "crotalids");

	// New Boomers
	v = v.replace(/\bNew Boomers\b/g, "Jörmungandr's Circle");
	v = v.replace(/\bnew Boomers\b/g, "Jörmungandr's circle");
	v = v.replace(/\bNew Boomers'\b/g, "Jörmungandr's Circle's");
	v = v.replace(/\bnew Boomers'\b/g, "Jörmungandr's circle's");

	// Generation Flux
	v = v.replace(/\b(?:Generation Flux)|(?:Flux Generation)\b/g, "Hiss Club");
	v = v.replace(/\b(?:generation flux)|(?:flux generation)\b/g, "hiss club");

	// Generation Sell
	v = v.replace(/\bGeneration Sell\b/g, "Kaa Tribe");
	v = v.replace(/\bgeneration sell\b/g, "Kaa tribe");
	v = v.replace(/\bSell Generation\b/g, "Tribe of Kaa");
	v = v.replace(/\bsell generation\b/g, "tribe of Kaa");

	// Boomerang Generation
	v = v.replace(
		/\b(?:Boomerang Generation)|(?:Generation Boomerang)\b/g,
		"Ouroboros Society"
	);
	v = v.replace(
		/\b(?:boomerang generation)|(?:generation boomerang)\b/g,
		"ouroboros society"
	);

	// Peter Pan Generation
	v = v.replace(/\bPeter Pan Generation\b/g, "Neheb-Kau Cult");
	v = v.replace(/\b(?:P|p)eter (?:P|p)an generation\b/g, "Neheb-Kau cult");
	v = v.replace(/\bGeneration Peter Pan\b/g, "Cult of Neheb-Kau");
	v = v.replace(/\bgeneration (?:P|p)eter (?:P|p)an\b/g, "cult of Neheb-Kau");

	// Generation 911
	v = v.replace(/\bGen(?:eration)? 9\/?11\b/g, "Kaa Tribe");
	v = v.replace(/\bgen(?:eration)? 9\/?11\b/g, "Kaa tribe");
	v = v.replace(/\b9\/?11 Generation\b/g, "Tribe of the Kaa");
	v = v.replace(/\b9\/?11 generation\b/g, "tribe of the Kaa");

	// The Generation of €700
	v = v.replace(
		/\b(?:The Generation of €700)|(?:€700 Generation)\b/g,
		"Ophion"
	);
	v = v.replace(
		/\b(?:the generation of €700)|(?:€700 generation)\b/g,
		"ophion"
	);

	// Mileurista
	v = v.replace(/\b(?:M|m)ill?eurista\b/g, "Nagual");

	// Precarious Generation
	v = v.replace(
		/\b(?:Precarious Generation)|(?:Generation Precarious)\b/g,
		"Gargouille"
	);
	v = v.replace(
		/\b(?:precarious generation)|(?:generation precarious)\b/g,
		"gargouille"
	);

	return v;
}
