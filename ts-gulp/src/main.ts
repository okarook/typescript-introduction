class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    mover() {
        console.log('Me estoy moviendo');
    }
}

const nombreAnimal = "Tobi"
const objAnimal: Animal =  new Animal(nombreAnimal);
console.log(objAnimal);