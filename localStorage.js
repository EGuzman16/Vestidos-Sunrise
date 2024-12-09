'use strict'

guardar_localStorage();

obtener_localStorage();

function obtener_localStorage(){

    if (localStorage.getItem (" productos ")){
        let productos = JSON.parse( localStorage.getItem( "productos "));
        console.log(productos);
    } else {
        console.log('No hay entradas en el localStorage');
    }

}


function guardar_localStorage(){
    const productos = [
        {
            id: 1,
            nombre: 'Vestido Verano corto 2022',
            descripcion: 'Vestido corto color verde',
            precio: 45,
            imagen: '1.jpg',
            categoria: '1',
        },
        {
            id: 2,
            nombre: 'Vestido Verano largo 2023',
            descripcion: 'Vestido Largo aqua, corte princesa',
            precio: 60,
            imagen: '2.webp',
            categoria: '1',
    
        },
        {
            id: 3,
            nombre: 'Vestido Verano largo 2021',
            descripcion: 'Vestido largo color blanco, con espalda abierta',
            precio: 25,
            imagen: '3.jpg',
            categoria: '1',
        },
        {
            id: 4,
            nombre: 'Vestido invierno 2022',
            descripcion: 'Vestido largo estampado, mangas largas térmico.',
            precio: 35,
            imagen: '4.jpg',
            categoria: '2',
        },
        {
            id: 5,
            nombre: 'Vestido invierno 2023',
            descripcion: 'Vestido de lana hipoalergénico, mangas largas a rayas.',
            precio: 37,
            imagen: '5.jpg',
            categoria: '2',
        },
        {
            id: 6,
            nombre: 'Vestido invierno 2024',
            descripcion: 'Vestido térmico, mangas largas, color amarillo',
            precio: 45,
            imagen: '6.jpg',
            categoria: '2',
        },
        {
            id: 7,
            nombre: 'Vestido Primavera Sweet',
            descripcion: 'Vestido hasta la rodilla blanco con capade hombros descubiertos.',
            precio: 25,
            imagen: '7.webp',
            categoria: '3',
        },
        {
            id: 8,
            nombre: 'Vestido primavera 2022',
            descripcion: 'Vestido color crema con mangas tres cuartos, corte',
            precio: 37,
            imagen: '8.webp',
            categoria: '3',
        },
        {
            id: 9,
            nombre: 'Vestiido primavera 2023',
            descripcion: 'Vestido negro fluido con mangas cortas',
            precio: 45,
            imagen: '9.webp',
            categoria: '3',
        },
        {
            id: 10,
            nombre: 'Vestido Fiesta 2023',
            descripcion: 'Vestido gala largo color verde esmeralda, con pierna abierta',
            precio: 120,
            imagen: '10.jpg',
            categoria: '4',
        },
        {
            id: 11,
            nombre: 'Vestido Fiesta 2024',
            descripcion: 'Vestido negro entallado, mangas largas y pierna abierta',
            precio: 110,
            imagen: '11.webp',
            categoria: '4',
        },
        {
            id: 12,
            nombre: 'Vestido Fiesta Navideña',
            descripcion: 'Vestido color rojo sin mangas y pierna abierta',
            precio: 150,
            imagen: '12.jpg',
            categoria: '4',
        }
    
    ]
}

localStorage.setItem( "productos ", JSON.stringify ( productos ));