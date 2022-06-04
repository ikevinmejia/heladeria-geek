const form = document.querySelector('form');
const imagenPaleta = document.querySelector('.paleta');
const selectPaletas = document.querySelector('select');

let pedidosAgendados = [];

// Función mostrar paleta

const mostrarPaleta = (value = '') => {
    let urlImage;

    switch (value) {
        case '1':
            urlImage = "https://i.ibb.co/hFKCp2x/Sandia.png";
            break;

        case '2':
            urlImage = "https://i.ibb.co/QKs50Ch/Mango.png";
            break;

        case '3':
            urlImage = "https://i.ibb.co/4YtQRWW/Fresa.png";
            break;

        case '4':
            urlImage = "https://i.ibb.co/X7tH6S1/Arandanos.png";
            break;

        default:
            imagenPaleta.style.display = 'none';
    }

    return urlImage;

}

//  Evento cambiar select

const cambiarSelect = () => {

    imagenPaleta.style.display = 'inline';

    let ulrPaleta = mostrarPaleta(selectPaletas.value);

    imagenPaleta.setAttribute('src', ulrPaleta);
}

// mostrar alerta

const mostrarAlerta = (obj = {}) => {

    const {name} = obj;
    Swal.fire(
        ``,
        `${name} tu pedido ha sido aprobado`,
        'success'
    )
}

// Esta función muestra el nombre

const mostrarNombre = (arr = []) => {
    console.clear();

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i].name);
    }
}

// Función de la app.

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#nombre').value;
    const lastName = document.querySelector('#apellido').value;
    const addres = document.querySelector('#direccion').value;
    const flavor = selectPaletas.value;

    const pedido = {
        name,
        lastName,
        addres,
        flavor,
    };

    pedidosAgendados.push(pedido)

    console.log(pedidosAgendados);

    mostrarNombre(pedidosAgendados);
    mostrarAlerta(pedido)
    mostrarPaleta();

    form.reset();
});

// Evento del select

selectPaletas.addEventListener('change', cambiarSelect);




