var navLines;
var navBubble;
var navAttractor;
var btnDetener;
var btnDownload;


var btnEliminarImanes;
var btnDetenerLineas;

document.addEventListener('DOMContentLoaded', function(){
    navLines = document.getElementById('lineas');
    navBubble = document.getElementById('bubble');
    navAttractor = document.getElementById('iman');
    btnDetener = document.getElementById('detener');

    btnEliminarImanes = document.getElementById('btn-eliminar-gravedad');
    btnDetenerLineas = document.getElementById('btn-eliminar-lineas');

    btnDetenerLineas.addEventListener('click', function(){
        this.classList.toggle('btn-eliminar--hidden');
        vehicles = [];
        
    });

    btnEliminarImanes.addEventListener('click', function(){
        this.classList.toggle('btn-eliminar--hidden');
        attractors = [];
    })

    btnDownload = document.getElementById('btn-download');
    btnDownload.addEventListener('click', function(){
        var name ='canvas' + Date.now();
        mySketch.saveCanvas(canvas, name, 'png');
    })
});

window.addEventListener('resize', function(){
    mySketch.setup();
    myBg.setup();

    vehicles = [];
    attractors = [];
    bubbles = [];

})