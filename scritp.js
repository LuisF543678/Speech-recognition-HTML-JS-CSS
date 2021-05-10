const boton = document.querySelector('#hablar');
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