const person = {
    name: 'john',
    greet: function (){
        console.log(`hola, soy ${this.name}`)
    }
}
person.greet()
// cambiando a una arrow function
const person2 = {
    name: 'Alice',
    greet: () => {
        console.log(`Hola soy ${this.name}`)
    }
}
person2.greet()
