function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
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

    // Millennialism
    v = v.replace(/\b(M|m)illennialism?\b/g, "$1illennialism");

    //  Gendered Millennials
    v = v.replace(/\bMillennial Men\b/g, "Snake Men");
    v = v.replace(/\bMillennial men\b/g, "Snake men");
    v = v.replace(/\bmillennial men\b/g, "snake men");
    v = v.replace(/\bMillennial Men's\b/g, "Snake Men's");
    v = v.replace(/\bMillennial men's\b/g, "Snake men's");
    v = v.replace(/\bmillennial men's\b/g, "snake men's");
    v = v.replace(/\bMillennial Man\b/g, "Snake man");
    v = v.replace(/\bMillennial man\b/g, "Snake Man");
    v = v.replace(/\bmillennial man\b/g, "snake man");
    v = v.replace(/\bMillennial Man's\b/g, "Snake Man's");
    v = v.replace(/\bMillennial man's\b/g, "Snake man's");
    v = v.replace(/\bmillennial man's\b/g, "snake man's");
    v = v.replace(/\bMillennial Boy\b/g, "Snake Boy");
    v = v.replace(/\bMillennial boy\b/g, "Snake boy");
    v = v.replace(/\bmillennial boy\b/g, "snake boy");
    v = v.replace(/\bMillennial Boys'\b/g, "Snake Boys'");
    v = v.replace(/\bMillennial boys'\b/g, "Snake boys'");
    v = v.replace(/\bmillennial boys'\b/g, "snake boys'");
    v = v.replace(/\bMillennial Guy\b/g, "Snake Guy");
    v = v.replace(/\bMillennial guy\b/g, "Snake guy");
    v = v.replace(/\bmillennial guy\b/g, "snake guy");
    v = v.replace(/\bMillennial Guys\b/g, "Snake Guys");
    v = v.replace(/\bMillennial guys\b/g, "Snake guys");
    v = v.replace(/\bmillennial guys\b/g, "snake guys");
    v = v.replace(/\bMillennial Guys'\b/g, "Snake Guys'");
    v = v.replace(/\bMillennial guys'\b/g, "Snake guys'");
    v = v.replace(/\bmillennial guys'\b/g, "snake guys'");
    v = v.replace(/\bMillennial Women\b/g, "Snake Women");
    v = v.replace(/\bMillennial women\b/g, "Snake women");
    v = v.replace(/\bmillennial women\b/g, "snake women");
    v = v.replace(/\bMillennial Women's\b/g, "Snake Women's");
    v = v.replace(/\bMillennial women's\b/g, "Snake women's");
    v = v.replace(/\bmillennial women's\b/g, "snake women's");
    v = v.replace(/\bMillennial Woman\b/g, "Snake Woman");
    v = v.replace(/\bMillennial woman\b/g, "Snake woman");
    v = v.replace(/\bmillennial woman\b/g, "snake woman");
    v = v.replace(/\bMillennial Woman's\b/g, "Snake Woman's");
    v = v.replace(/\bMillennial woman's\b/g, "Snake woman's");
    v = v.replace(/\bmillennial woman's\b/g, "snake woman's");
    v = v.replace(/\bMillennial Girl\b/g, "Snake Girl");
    v = v.replace(/\bMillennial girl\b/g, "Snake girl");
    v = v.replace(/\bmillennial girl\b/g, "snake girl");
    v = v.replace(/\bMillennial Girl's\b/g, "Snake Girl's");
    v = v.replace(/\bMillennial girl's\b/g, "Snake girl's");
    v = v.replace(/\bmillennial girl's\b/g, "snake girl's");
    v = v.replace(/\bMillennial Gal\b/g, "Snake Gal");
    v = v.replace(/\bMillennial gal\b/g, "Snake gal");
    v = v.replace(/\bmillennial gal\b/g, "snake gal");
    v = v.replace(/\bMillennial Gals\b/g, "Snake Gals");
    v = v.replace(/\bMillennial gals\b/g, "Snake gals");
    v = v.replace(/\bmillennial gals\b/g, "snake gals");
    v = v.replace(/\bMillennial Gals'\b/g, "Snake Gals'");
    v = v.replace(/\bMillennial gals'\b/g, "Snake gals'");
    v = v.replace(/\bmillennial gals'\b/g, "snake gals'");

    //  Aged Millennials
    v = v.replace(/\bMillennial Child\b/g, "Snakelet");
    v = v.replace(/\bMillennial child\b/g, "snakelet");
    v = v.replace(/\bmillennial child\b/g, "snakelet");
    v = v.replace(/\bMillennial Child's\b/g, "Snakelet's");
    v = v.replace(/\bMillennial child's\b/g, "snakelet's");
    v = v.replace(/\bmillennial child's\b/g, "snakelet's");
    v = v.replace(/\bMillennial Children\b/g, "Snakelets");
    v = v.replace(/\bMillennial children\b/g, "snakelets");
    v = v.replace(/\bmillennial children\b/g, "snakelets");
    v = v.replace(/\bMillennial Children's\b/g, "Snakelets'");
    v = v.replace(/\bMillennial children's\b/g, "snakelets'");
    v = v.replace(/\bmillennial children's\b/g, "snakelets'");
    v = v.replace(/\bMillennial Teen\b/g, "proto-Snake Person");
    v = v.replace(/\bMillennial teen\b/g, "proto-Snake person");
    v = v.replace(/\bmillennial teen\b/g, "proto-snake person");
    v = v.replace(/\bMillennial Teens\b/g, "proto-Snake People");
    v = v.replace(/\bMillennial teens\b/g, "proto-Snake People");
    v = v.replace(/\bmillennial teens\b/g, "proto-snake people");
    v = v.replace(/\bMillennial Teens'\b/g, "proto-Snake people's");
    v = v.replace(/\bMillennial teens'\b/g, "proto-Snake people's");
    v = v.replace(/\bmillennial teens'\b/g, "proto-Snake people's");
    v = v.replace(/\bMillennial Teenager\b/g, "proto-Snake Person");
    v = v.replace(/\bMillennial teenager\b/g, "proto-Snake person");
    v = v.replace(/\bmillennial teenager\b/g, "proto-Snake person");
    v = v.replace(/\bMillennial Teenager's\b/g, "proto-Snake Person's");
    v = v.replace(/\bMillennial teenager's\b/g, "proto-Snake person's");
    v = v.replace(/\bmillennial teenager's\b/g, "proto-Snake person's");
    v = v.replace(/\bMillennial Adult\b/g, "Adult Snake Person");
    v = v.replace(/\bMillennial adult\b/g, "adult Snake Person");
    v = v.replace(/\bmillennial adult\b/g, "adult snake person");
    v = v.replace(/\bMillennial Adult's\b/g, "Adult Snake Person's");
    v = v.replace(/\bMillennial adult's\b/g, "adult Snake Person's");
    v = v.replace(/\bmillennial adult's\b/g, "adult snake person's");
    v = v.replace(/\bMillennial Adults\b/g, "Adult Snake People");
    v = v.replace(/\bMillennial adults\b/g, "adult Snake People");
    v = v.replace(/\bmillennial adults\b/g, "adult snake people");
    v = v.replace(/\bMillennial Adults'\b/g, "Adult Snake People's");
    v = v.replace(/\bMillennial adults'\b/g, "adult Snake People's");
    v = v.replace(/\bmillennial adults'\b/g, "adult snake people's");

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

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].nodeType === 3) {
                // Replace the text for text nodes
                handleText(mutation.addedNodes[i]);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(mutation.addedNodes[i]);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
