// var Deportes = {
//     conBalon: ['Futbol', 'Baloncesto', 'Golf'],
//     sinBalon: ['Boxeo', 'Surf', 'Trekking'],
// };

var persona = {Nombre: 'Lucas', Edad: 26, Estudios: {EsProgramador: true} };

// console.log (persona.Edad);
persona.Nombre = 'Martin';

// console.log(persona.Nombre);
persona.Edad = 32;

// console.log(persona.Edad);

// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// delete autos.marcas;
// console.log(autos);

// var misFunciones = {
//     saludar: function () {
//         console.log('hola');
//     },
// };

// misFunciones.saludar();

//DOT-NOTAION:
//  var atuendos = {manos: ['anillos', 'pulseras'], pies: ['zapatos', 'soquetes']};
// console.log(atuendos.pies);

//BRACKET-NOTATION:
// atuendos ['piernas'] = ['bermudas', 'pantalones'];
// console.log(atuendos);

// var comidas = {};
// var diferenciaDeNotaciones = function (propUNO, propDos) {
//     comidas[propUNO] = ['verduras', 'vegetales'];
//     comidas[propDos] = ['hamburguesas', 'papas fritas'];
    
// }
// diferenciaDeNotaciones('saludable', 'noSaludable');
// console.log(comidas)

// var libro = {autor: 'Borges', genero: 'Policial', ano: '1990'};
// var tienePropiedad = libro.hasOwnProperty ('caca');
// // console.log(tienePropiedad);

// var todasLasPropiedades = Object.keys(libro);
// console.log(todasLasPropiedades);

// var mundo = { continentes: 7, paises: 195, oceanos: 5};
// for (var prop in mundo) {
//     console.log('Esta es la propiedad: ' + prop);
//     console.log('Este es el valor: ' + mundo[prop]);
// }

var mascota = {
    animal: 'perro',
    raza: 'ovejero aleman',
    amistoso: 'true',
    dueno: 'athos lacsi',
    info: function () {
        console.log('mi perruski es un ' + this.raza);
    }
}
mascota.info();