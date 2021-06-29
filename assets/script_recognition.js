
/**
 * El id hablar es viculado con el boton
 */

const boton = document.querySelector('#hablar');

/**
 * El id contenido es para el input
 */
const contend = document.querySelector('#contenido');


const reconocer_voz = window.SpeechRecognition || window.webkitSpeechRecognition;
const reconocer = new reconocer_voz();
reconocer.onstart = function () {
    alert('El microfono esta activo');
}

reconocer.onresult = function (event) {
    //console.log(event);
    const current = event.resultIndex;
    const transcripcion = event.results[current][0].transcript;
    contend.textContent = transcripcion;

}

boton.addEventListener('click', () => {
    reconocer.start();
});


function picture() {
    var pic = "assets/audio_gif.gif"
    document.getElementById('bigpic').src = pic.replace('90x90', '225x225');
    document.getElementById('bigpic').style.display = 'block';

}