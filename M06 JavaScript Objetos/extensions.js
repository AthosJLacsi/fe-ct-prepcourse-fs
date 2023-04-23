// class persona{
//     constructor (nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//     }
//     saludar (){
//     console.log ('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' años ' )
//     }
// }
// class programador extends persona {
//     constructor (nombre, edad, añossDeExperiencia) {
//         super (nombre, edad);
//         this.añosDeExperiencia = añosDeExperiencia;
//     }
//     codear(){
//         console.log()
//     }

// }

class Persona {
    
    constructor (nombre, apellido, edad, domicilio) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.domicilio = domicilio;
       this.detalle = function() {
          return {
             nombre: this.nombre,
             apellido: this.apellido,
             edad: this.edad,
             domicilio: this.domicilio,
          }
       }
    }
 }
