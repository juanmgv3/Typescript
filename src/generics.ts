// Mientras que JavaScript no tiene soporte nativo para genéricos, TypeScript permite definir tipos genéricos para funciones, clases y interfaces, Los genéricos son una característica que permite escribir una única declaración de método que puede ser llamada con argumentos de diferentes tipos. En función de los tipos de argumentos pasados al método genérico, el compilador maneja cada llamada de método de manera apropiada. 

//La letra T se utiliza para representar un tipo genérico o desconocido que será definido cuando se utilice la función o clase genérica, es una convención común en TypeScript y en otros lenguajes de programación.

class Contenedor<T> {
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    obtenerValor(): T {
        return this.valor;
    }
}

let numeroContenedor = new Contenedor<number>(10);
console.log(numeroContenedor.obtenerValor()); // Devuelve 10

let stringContenedor = new Contenedor<string>("Hola, mundo!");
console.log(stringContenedor.obtenerValor()); // Devuelve "Hola, mundo!"


//Ejemplo 2
// Definimos una función genérica que recibe un valor de tipo T y devuelve un array con ese valor duplicado
function duplicarValor<T>(valor: T): T[] {
    return [valor, valor];
}

// Ejemplo de uso con un número
const numerosDuplicados = duplicarValor<number>(5);
console.log(numerosDuplicados); // Output: [5, 5]

// Ejemplo de uso con una cadena de texto
const textoDuplicado = duplicarValor<string>("Hola");
console.log(textoDuplicado); // Output: ["Hola", "Hola"]