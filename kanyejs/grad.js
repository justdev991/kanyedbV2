// GENERAZIONE TRACKLIST

class Album {
    constructor(nome, anno, tracce, tracklist = []) {
        this.nome = nome;
        this.anno = anno;
        this.tracklist = tracklist;
    }

    aggiungiCanzone(canzone) {
        this.tracklist.push(canzone);
    }
}

class Canzone {
    constructor(titolo, durata, link) {
        this.titolo = titolo;
        this.durata = durata;
        this.link = link;
    }
}

let Graduation = new Album('Graduation', '2007',);

let tutteLeCanzoni = [
    new Canzone('Good Morning', '3:08', 'https://www.youtube.com/watch?v=6CHs4x2uqcQ&list=OLAK5uy_nc43MhHfperN5ZrIST7rsl0o5NOURZISk&index=1'),
    new Canzone('Champion', '2:48', 'https://www.youtube.com/watch?v=jKT4ArZCkso&list=OLAK5uy_nc43MhHfperN5ZrIST7rsl0o5NOURZISk&index=2'),
    new Canzone('Stronger', '4:27', 'https://www.youtube.com/watch?v=PsO6ZnUZI0g&list=OLAK5uy_nc43MhHfperN5ZrIST7rsl0o5NOURZISk&index=3')
]

let contenitoreTracklist = document.getElementById('contenitoreTracklist');

for (let i = 0; i < tutteLeCanzoni.length; i++) {
    Graduation.aggiungiCanzone(tutteLeCanzoni[i]);
    let link = document.createElement('a');

    let traccia = document.createElement('div');
    let pTitolo = document.createElement('p');
    let pDurata = document.createElement('p');
    pTitolo.textContent = Graduation.tracklist[i].titolo;
    pDurata.textContent = Graduation.tracklist[i].durata;
    traccia.appendChild(pTitolo);
    traccia.appendChild(pDurata);
    link.appendChild(traccia);
    link.setAttribute("href", Graduation.tracklist[i].link);
    contenitoreTracklist.appendChild(link);
    traccia.classList.add("canzone");
    pTitolo.classList.add("titolo");
    pDurata.classList.add("durata");
}

