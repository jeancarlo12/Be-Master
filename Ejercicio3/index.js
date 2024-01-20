function numerosImpares(numero) {
    // Crea un array vacío llamado `array`.
    let array = [];
  
    // Itera desde 1 hasta el número de entrada.
    for (let i = 1; i <= numero; i++) {
  
      // Comprueba si el número actual es impar.
      if (i % 2 !== 0) {
  
        // Agrega el número actual al array.
        array.push(i);
      }
    }
  
    // Devuelve el array.
    return array;
  }

function numerosImpares(numero) {
    // Crea un array con todos los números del 1 al número de entrada.
    return [...Array(numero + 1).keys()];
  
    // Usa el método `filter()` para filtrar los números pares.
    return [...Array(numero + 1).keys()].filter((numero) => numero % 2 !== 0);
}
  
const numero = 9; // Define la variable numero con el valor 9
const arrayImpares = numerosImpares(numero); // Llama a la función numerosImpares() con la variable numero
console.log(arrayImpares); // Imprime el array de números impares

