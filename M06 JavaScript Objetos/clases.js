// class Auto {
//     constructor (puertas, color, marca, año, ruedas){
//     this.puertas = puertas;
//     this.color = color;
//     this.marca = marca;
//     this.año =  año
//     this.ruedas = ruedas
//     }
// }

// var miPrimerAuto = new Auto(4, 'blanco', 'fiat', 2015, 4);

// console.log(miPrimerAuto);
// console.log(miPrimerAuto.marca);

class LatinoAmerica {
    constructor () {
        this.paises = []
    }
}
LatinoAmerica.prototype.agregarPais = function(pais) {
    this.paises.push(pais);
};
var continente = new LatinoAmerica ();
continente.agrergarPais('Mexico');
console.log(continente.paises);
