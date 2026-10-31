function generaTracklist(album) {

    let contenitoreTracklist = document.getElementById('contenitoreTracklist');

    for (let i = 0; i < album.tracklist.length; i++) {

        let link = document.createElement('a');
        link.classList.add('link')
        link.href = album.tracklist[i].link;
        link.title = album.tracklist[i].titolo;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        let traccia = document.createElement('div');
        traccia.classList.add('canzone');

        let pTitolo = document.createElement('p');
        pTitolo.classList.add('titolo');
        pTitolo.textContent = `${i + 1}. ${album.tracklist[i].titolo}`;
        
        let pDurata = document.createElement('p');
        pDurata.classList.add('durata');
        pDurata.textContent = album.tracklist[i].durata;

        traccia.appendChild(pTitolo);
        traccia.appendChild(pDurata);
        link.appendChild(traccia);
        contenitoreTracklist.appendChild(link);
    }
}