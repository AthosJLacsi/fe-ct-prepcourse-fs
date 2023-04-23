class LatinoAmerica {
    constructor () {
        this.paises = []
    }
}
LatinoAmerica.prototype.agregarPais = function(pais) {
    this.paises.push(pais);
};
var continente = new LatinoAmerica ();
continente.agregarPais('Mexico');
console.log(continente.paises);