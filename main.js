function song(elemento){
    let ring = document.querySelector(elemento)
    
    if(ring != null && ring.localName === 'audio'){
        ring.play()}
    else {
        console.log("Elemento ou seletor não encontrado")
    }
}

const listButtons = document.querySelectorAll('.tecla')
const listSongs = document.querySelectorAll('.song')



for (let i = 0; i < listButtons.length; i++) {

    let bt = listButtons[i]
    let s = listSongs[i]
    bt.onclick = function() {
        song(`#${s.id}`);

    }

    bt.onkeydown = function(evento) {
        var code = evento.code
        if (code === 'Space' || code === 'Enter'){
            bt.classList.add('ativa')
        }
        }
    bt.onkeyup = function(evento) {
        var code = evento.code
        if ( code === 'Space' || code === 'Enter'){
            bt.classList.remove('ativa')
        }}
        }
