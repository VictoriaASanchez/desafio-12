// EJERCICIO 1

const title = document.querySelector('h1');

const createSpan = document.createElement('span');
createSpan.textContent = 'Temática elegida: psicología';

title.appendChild(createSpan);


// EJERCICIO 3

const arrayColors = [
    {name: 'Violeta', color: '#4A3D73'},
    {name: 'Lila oscuro', color: '#8475B3'},
    {name: 'Lila claro', color: '#F2EEFF'},
    {name: 'Rosa', color: '#F188A6'},
];

const colors = arrayColors.map(color => color.color);
console.log(colors);

const select = document.getElementById('colors');

select.addEventListener('change', () => {
  const selectedColor = select.value;
  console.log(selectedColor);
});

arrayColors.forEach(color => {
    const option = document.createElement('option');
    option.value = color.name;
    option.textContent = color.name;
    select.appendChild(option);
  });


// EJERCICIO 5

const circle = document.querySelector('div');

const circle1 = document.getElementById('circle-1');
const circle2 = document.getElementById('circle-2');
const circle3 = document.getElementById('circle-3');
const circle4 = document.getElementById('circle-4');


// Almacena los colores originales (Button 'Reset')
const initialState = {
    circle1: circle1.style.backgroundColor = '#FFFFFF',
    circle2: circle2.style.backgroundColor = '#FFFFFF',
    circle3: circle3.style.backgroundColor = '#FFFFFF',
    circle4: circle4.style.backgroundColor = '#FFFFFF'
  };


// Modo superpuesto activo

const input = document.querySelector('input');

input.addEventListener('change', () => {
    if (input.checked) {
        console.log('Checkbox está seleccionado');
    }
});

//

circle1.addEventListener('click', () => {
    fondo(circle1);
});

circle2.addEventListener('click', () => {
    fondo(circle2);
    if (input.checked) {
        circle1.style.backgroundColor = circle2.style.backgroundColor;
    }
});

circle3.addEventListener('click', () => {
    fondo(circle3);
    if (input.checked) {
        circle1.style.backgroundColor = circle3.style.backgroundColor;
        circle2.style.backgroundColor = circle3.style.backgroundColor;
    }
});

circle4.addEventListener('click', () => {
    fondo(circle4);
    if (input.checked) {
        circle1.style.backgroundColor = circle4.style.backgroundColor;
        circle2.style.backgroundColor = circle4.style.backgroundColor;
        circle3.style.backgroundColor = circle4.style.backgroundColor;
    }
});

const fondo = (circle) => {
    switch (select.value) {
        case 'Violeta':
            circle.style.backgroundColor = colors[0];
            break;
        case 'Lila oscuro':
            circle.style.backgroundColor = colors[1];
            break;
        case 'Lila claro':
            circle.style.backgroundColor = colors[2];
            break;
        case 'Rosa':
            circle.style.backgroundColor = colors[3];
            break;
        default:
            circle.style.backgroundColor = colors[4];
            break;
    }
}

// Button 'Reset'

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // Restaura los colores iniciales
    circle1.style.backgroundColor = initialState.circle1;
    circle2.style.backgroundColor = initialState.circle2;
    circle3.style.backgroundColor = initialState.circle3;
    circle4.style.backgroundColor = initialState.circle4;
});


// EJERCICIO 8

const changeResolution = () => {
    if (window.matchMedia("(max-width: 500px)").matches) {
        circle1.style.backgroundColor = ('#eeeeee');
        circle2.style.backgroundColor = ('#dddddd');
        circle3.style.backgroundColor = ('#cccccc');
        circle4.style.backgroundColor = ('#bcbcbc');
        select.disabled = true;
        input.disabled = true;
    } else {
        circle1.style.backgroundColor = ('');
        circle2.style.backgroundColor = ('');
        circle3.style.backgroundColor = ('');
        circle4.style.backgroundColor = ('');
        select.disabled = false;
        input.disabled = false;
    }
}

window.addEventListener('resize', changeResolution);

changeResolution();

