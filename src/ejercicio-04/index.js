const numeros = [1,2,3,4,5,6]
numeros.forEach((numero) => {
    console.log( `el numero ${numero} es ${numero % 2 ===
    0 ? 'par' : 'impar'}.`)
})