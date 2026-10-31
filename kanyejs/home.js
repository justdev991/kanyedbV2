class Card {
    constructor(nome, anno, link, id) {
        this.nome = nome;
        this.anno = anno;
        this.link = link;
        this.id = id;
    }
}

class Discografia {
    constructor(lista = []) {
        this.lista = lista;
    }

    aggiungiCard(card) {
        this.lista.push(card)
    }
}

let kanyeWest = new Discografia;

kanyeWest.lista = [
    new Card('The College Dropout', '2004', 'kanyehtml/tcd2.html', 'tcd'),
    new Card('Late Registration', '2005', 'kanyehtml/lr2.html', 'lr'),
    new Card('Graduation', '2007', 'kanyehtml/grad2.html', 'grad'),
    new Card('808s & Heartbreak', '2008', 'kanyehtml/hb2.html', 'hb'),
    new Card('My Beautiful Dark Twisted Fantasy', '2010', 'kanyehtml/mbdtf2.html', 'mbdtf'),
    new Card('Watch The Throne', '2011', 'kanyehtml/wtt2.html', 'wtt'),
    new Card('Yeezus', '2013', 'kanyehtml/yeezus2.html', 'yeezus'),
    new Card('The Life Of Pablo', '2016', 'kanyehtml/tlop2.html', 'tlop'),
    new Card('ye', '2018', 'kanyehtml/ye2.html', 'ye'),
    new Card('KIDS SEE GHOSTS', '2018', 'kanyehtml/ksg2.html', 'ksg'),
    new Card('JESUS IS KING', '2019', 'kanyehtml/jik2.html', 'jik'),
    new Card('Donda', '2021', 'kanyehtml/donda2.html', 'donda'),
    new Card('VULTURES 1', '2024', 'kanyehtml/v12.html', 'v1'),
    new Card('VULTURES 2', '2024', 'kanyehtml/v22.html', 'v2'),
    new Card('DONDA 2', '2025', 'kanyehtml/donda22.html', 'donda2'),
    new Card('BULLY', '2026', 'kanyehtml/bully2.html', 'bully')
];

let sezionePrincipale = document.getElementById('sezionePrincipale');

for (let i = 0; i < kanyeWest.lista.length; i++) {

    let link = document.createElement('a');
    link.href = kanyeWest.lista[i].link;
    link.classList.add('link');
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.id = kanyeWest.lista[i].id;

    let pTitolo = document.createElement('p');
    pTitolo.textContent = `${kanyeWest.lista[i].nome} (${kanyeWest.lista[i].anno})`;

    divCard.appendChild(pTitolo);
    link.appendChild(divCard);
    sezionePrincipale.appendChild(link);
}