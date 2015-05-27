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

	// Millennial
	v = v.replace(/\bMillennial\b/g, "Snake Person");
	v = v.replace(/\bmillennial\b/g, "snake person");
	v = v.replace(/\bMillennials\b/g, "Snake People");
	v = v.replace(/\bmillennials\b/g, "snake people");
	v = v.replace(/\bMillennials'\b/g, "Snake People's");
	v = v.replace(/\bmillennials'\b/g, "snake people's");
	v = v.replace(/\bMillienials\b/g, "Snake People"); 		// Common misspelling
	v = v.replace(/\bmillienials\b/g, "snake people"); 	 	// Common misspelling

	// The Great Recession 
	v = v.replace(/\bGreat Recession\b/g, "Time of Shedding and Cold Rocks");
	v = v.replace(/\bgreat recession\b/g, "time of shedding and cold rocks");

	// The Great Depression
	v = v.replace(/\bGreat Depression\b/g, "Clutch Plague");
	v = v.replace(/\bgreat depression\b/g, "clutch plague");

	// Occupy Wall Street
	v = v.replace(/\bOccupy Wall Street\b/g, "Great Ape-Snake War");
	v = v.replace(/\boccupy wall street\b/g, "great ape-snake war");
	v = v.replace(/\bOccupy Movement\b/g, "Great Ape-Snake War");
	v = v.replace(/\boccupy movement\b/g, "great ape-snake war");
	v = v.replace(/\bOWS Movement\b/g, "Great Ape-Snake War");
	v = v.replace(/\bOWS movement\b/g, "great ape-snake war");
	v = v.replace(/\bows movement\b/g, "great ape-snake war");
	v = v.replace(/\b ows \b/g, " ga-sw ");
	v = v.replace(/\b OWS \b/g, " GA-SW ");

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
	v = v.replace(/\bGeneration Y\b/g, "Serpent Society");
	v = v.replace(/\bgeneration y\b/g, "serpent society");
	v = v.replace(/\bGen Y\b/g, "Society of the Serpent");
	v = v.replace(/\bgen y\b/g, "serpent society");
	v = v.replace(/\bGenY\b/g, "Serpent Society");
	v = v.replace(/\bgeny\b/g, "serpent society");
	v = v.replace(/\bGeneration Why\b/g, "Serpent Society");
	v = v.replace(/\bgeneration why\b/g, "serpent society");

	// Millennial Generation
	v = v.replace(/\bMillennial Generation\b/g, "Plissken Faction");
	v = v.replace(/\bmillennial generation\b/g, "Plissken faction");
	v = v.replace(/\bGeneration Millennial\b/g, "Plissken Faction");
	v = v.replace(/\bgeneration millennial\b/g, "Plissken faction");

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
	v = v.replace(/\bGeneration Flux\b/g, "Hiss Club");
	v = v.replace(/\bgeneration flux\b/g, "hiss club");
	v = v.replace(/\bFlux Generation\b/g, "Hiss Club");
	v = v.replace(/\bflux generation\b/g, "hiss club");

	// Generation Sell
	v = v.replace(/\bGeneration Sell\b/g, "Kaa Tribe");
	v = v.replace(/\bgeneration sell\b/g, "Kaa tribe");
	v = v.replace(/\bSell Generation\b/g, "Tribe of Kaa");
	v = v.replace(/\bsell generation\b/g, "tribe of Kaa");

	// Boomerang Generation
	v = v.replace(/\bBoomerang Generation\b/g, "Ouroboros Society");
	v = v.replace(/\bboomerang generation\b/g, "ouroboros society");
	v = v.replace(/\bGeneration Boomerang\b/g, "Ouroboros Society");
	v = v.replace(/\bgeneration boomerang\b/g, "ouroboros society");

	// Peter Pan Generation
	v = v.replace(/\bPeter Pan Generation\b/g, "Neheb-Kau Cult");
	v = v.replace(/\bPeter Pan generation\b/g, "Neheb-Kau cult");
	v = v.replace(/\bpeter pan generation\b/g, "Neheb-Kau cult");
	v = v.replace(/\bGeneration Peter Pan\b/g, "Cult of Neheb-Kau");
	v = v.replace(/\bgeneration Peter Pan\b/g, "cult of Neheb-Kau");
	v = v.replace(/\bgeneration peter pan\b/g, "cult of Neheb-Kau");

	// Generation 911
	v = v.replace(/\bGeneration 9\/11\b/g, "Kaa Tribe");
	v = v.replace(/\bGeneration 911\b/g, "Kaa Tribe");
	v = v.replace(/\bgeneration 9\/11\b/g, "Kaa tribe");
	v = v.replace(/\bgeneration 911\b/g, "Kaa tribe");
	v = v.replace(/\b9\/11 Generation\b/g, "Tribe of the Kaa");
	v = v.replace(/\b9\/11 generation\b/g, "tribe of the Kaa");
	v = v.replace(/\bGen 9\/11\b/g, "Kaa Tribe");
	v = v.replace(/\bgen 9\/11\b/g, "Kaa tribe");
	v = v.replace(/\bGen 911\b/g, "Kaa Tribe");
	v = v.replace(/\bgen 911\b/g, "Kaa tribe");

	// The Generation of €700
	v = v.replace(/\bThe Generation of €700\b/g, "Ophion");
	v = v.replace(/\bthe generation of €700\b/g, "ophion");
	v = v.replace(/\b€700 Generation\b/g, "Ophion");
	v = v.replace(/\b€700 generation\b/g, "ophion");

	// Mileurista
	v = v.replace(/\bMileurista\b/g, "Nagual");
	v = v.replace(/\bmileurista\b/g, "Nagual");
	v = v.replace(/\bMilleurista\b/g, "Nagual");
	v = v.replace(/\bmilleurista\b/g, "Nagual");

	// Precarious Generation
	v = v.replace(/\bPrecarious Generation\b/g, "Gargouille");
	v = v.replace(/\bprecarious generation\b/g, "gargouille");
	v = v.replace(/\bGeneration Precarious\b/g, "Gargouille");
	v = v.replace(/\bgeneration precarious\b/g, "gargouille");

	textNode.nodeValue = v;
}


