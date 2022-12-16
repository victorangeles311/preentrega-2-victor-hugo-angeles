//Librerias de sonidos
const librerias = [
    {id: 1, nombre: "Orchestral", costo: 700, detalles: "Lorem ipsum"},
    {id: 2, nombre: "Synths", costo: 300, detalles: "Lorem ipsum"},
    {id: 3, nombre: "Vintage", costo: 350, detalles: "Lorem ipsum"},
    {id: 4, nombre: "Choir", costo: 250, detalles: "Lorem ipsum"},
    {id: 5, nombre: "Jazz Band", costo: 350, detalles: "Lorem ipsum"},
    {id: 6, nombre: "Beats", costo: 150, detalles: "Lorem ipsum"},
];



//Mostrar lista de productos (en Consola)
for(const libreria of librerias){
    console.log(libreria);
}



//Suma de costos de productos (en Consola)
const total = librerias.reduce((suma,libreria) => suma + libreria.costo, 0);
let respuestaTotal = `El costo total de sus productos es de ${total}`
console.log(respuestaTotal); 



//Agregando nuevo producto (en Consola)
class libreria {
    constructor (id, nombre, costo, detalles){
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
        this.detalles = detalles;
    }
}

const nuevaLibreria = [];
nuevaLibreria.unshift(new libreria(7, "Strings Quartet", 450, "Icónicos instrumentos de cuerda del siglo XVII, grabados con tecnología de vanguardia para obtener el sonido más realista."));

console.log(nuevaLibreria);



//Buscador (en Simulador)
let nombre = prompt("Ingresa la libreria de sonidos que buscas");

const buscador = (nombre) => {
    let libreria = librerias.find(item => item.nombre === nombre);
    if(libreria){
        let mensaje = `Libreria:
        Nombre: ${libreria.nombre}
        Costo: ${libreria.costo}
        Detalles: ${libreria.detalles}
        `;
        alert(mensaje);
    } else {
        alert("Disculpa, este producto no se encuentra");
    }
};
buscador(nombre);