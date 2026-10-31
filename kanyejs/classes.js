class Album {
    constructor(nome, anno, tracklist = []) {
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