// EJERCICIO 1

const title = document.querySelector('h1');

const createSpan = document.createElement('span');
createSpan.textContent = 'Temática elegida: psicología';

title.appendChild(createSpan);


// EJERCICIO 3


const arrayColors = ['#4A3D73', '#8475B3', '#F188A6', '#FFFFFF', '#FF0000'];


// EJERCICIO 5

const circle = document.querySelector('div');

const select = document.getElementById('colors');

select.addEventListener('change', function() {
  const selectedColor = select.value;
  console.log(selectedColor);
});


/* for (var i = 0; i < arrayColors.length; i++) {
    var option = document.createElement('option');
    option.value = arrayColors[i];
    option.text = arrayColors[i];
    select.appendChild(option);
  }
 */


const circle1 = document.getElementById('circle-1');
const circle2 = document.getElementById('circle-2');
const circle3 = document.getElementById('circle-3');
const circle4 = document.getElementById('circle-4');


// Almacena los colores originales
const initialState = {
    circle1: circle1.style.backgroundColor = '#D2D2D2',
    circle2: circle2.style.backgroundColor = '#D2D2D2',
    circle3: circle3.style.backgroundColor = '#D2D2D2',
    circle4: circle4.style.backgroundColor = '#D2D2D2'
  };
// --------------------------------------------------------- Button 'Reset'


// Modo superpuesto activo

const input = document.querySelector('input');

input.addEventListener('change', function () {
    if (input.checked) {
        console.log('checkbox está seleccionado');
    }
});

// ------------------------------

circle1.addEventListener('click', function() {
    fondo(circle1);
});

circle2.addEventListener('click', function() {
    fondo(circle2);
    if (input.checked) {
        circle1.style.backgroundColor = circle2.style.backgroundColor;
    }
});

circle3.addEventListener('click', function() {
    fondo(circle3);
    if (input.checked) {
        circle1.style.backgroundColor = circle3.style.backgroundColor;
        circle2.style.backgroundColor = circle3.style.backgroundColor;
    }
});

circle4.addEventListener('click', function() {
    fondo(circle4);
    if (input.checked) {
        circle1.style.backgroundColor = circle4.style.backgroundColor;
        circle2.style.backgroundColor = circle4.style.backgroundColor;
        circle3.style.backgroundColor = circle4.style.backgroundColor;
    }
});

function fondo(circle) {
    switch (select.value) {
        case 'violeta':
            circle.style.backgroundColor = arrayColors[0];
            break;
        case 'lila':
            circle.style.backgroundColor = arrayColors[1];
            break;
        case 'rosa':
            circle.style.backgroundColor = arrayColors[2];
            break;
        case 'blanco':
            circle.style.backgroundColor = arrayColors[3];
            break;
        default:
            break;
    }
}


// Button 'Reset'

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    // Restaura los colores iniciales
    circle1.style.backgroundColor = initialState.circle1;
    circle2.style.backgroundColor = initialState.circle2;
    circle3.style.backgroundColor = initialState.circle3;
    circle4.style.backgroundColor = initialState.circle4;
});


// EJERCICIO 8

function changeResolution() {
    if (window.matchMedia("(max-width: 500px)").matches) {
        circle1.style.backgroundColor = ('#eeeeee');
        circle2.style.backgroundColor = ('#dddddd');
        circle3.style.backgroundColor = ('#cccccc');
        circle4.style.backgroundColor = ('#bcbcbc');
        select.disabled = true;
    } else {
        circle1.style.backgroundColor = ('');
        circle2.style.backgroundColor = ('');
        circle3.style.backgroundColor = ('');
        circle4.style.backgroundColor = ('');
        select.disabled = false;
    }
}

// Agregar un listener para el evento de cambio de tamaño de la ventana
window.addEventListener('resize', changeResolution);

// Llamar a la función inicialmente para verificar el tamaño de pantalla actual
changeResolution();


