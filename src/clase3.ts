// # Nullish coalescing operator (??)
// Se utiliza para proporcionar un valor predeterminado en caso de que un valor sea null o undefined.
// el argumento de la funcion "value" puede ser de tipo number, undefined o null
// pero result debe ser tipo number o string ya que se asignara por defecto el mensaje 'su valor es null o undefines'
console.log('-------------------------------- Nullish coalescing')

function nullishCheck( value : number | undefined | null){
    const result : number | string =  value ?? 'su valor es null o undefined'
    console.log(result)
}

nullishCheck(1)
nullishCheck(null)
nullishCheck(undefined)

/*
function nullishCheck(value: number | undefined | null) {
    let result: number | string;

    if (value !== null && value !== undefined) {
        result = value;
    } else {
        result = 'su valor es null o undefined';
    }

    console.log(result);
}
*/



// #spread operator (objects)
//es una característica que permite copiar las propiedades de un objeto
// en otro objeto nuevo de una manera sencilla y concisa. Esto se logra 
//usando la sintaxis de tres puntos (...) seguida del objeto del que se 
//desean copiar las propiedades.
console.log('-------------------------------- spread operator (objects) ')

let firstObj: object = { id: 1, name: 'first'}
let secondObj: object = { ...firstObj}

console.log(secondObj)

let objName: object = {name: 'Juan'}
let objId: object = {id: 2}

let thirdObj: object = {...objId,...objName }
let fourthObj: object = { objId, objName } // sin operador de propagacion

console.log(thirdObj)
console.log(fourthObj) // sin operador de propagacion

// #spread operator (arrays)
console.log('-------------------------------- spread operator (arrays)')

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
let arr4 = [arr1, arr2] // sin operador de propagacion

console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(arr4) // sin operador de propagacion

// #tuples
//es un tipo de dato que permite almacenar un número fijo de elementos de diferentes
//tipos en una secuencia ordenada (ORDEN ESPECIFICO). Las tuplas se crean utilizando corchetes y separando 
//cada elemento con una coma.
console.log('-------------------------------- tuples')

let tuple1: [string, boolean]
tuple1 = ['test', true]
console.log(tuple1)

//tuple1 = ['tuplas']                 //Si una de las propiedades se omite TypeScript nos señala un error
//tuple1 = ['tuplas', false, true]    //Si se añade una propiedad extra nos dará error
tuple1 = ['TEST', false]
console.log(tuple1)

// #destructuring (tuples, objects, arrays)
// permite asignar valores de un objeto o array a variables individuales de forma más fácil y concisa.
console.log('-------------------------------- destructuring (tuples, objects, arrays')

//en tuplas
console.log(`tuple1[0] : ${tuple1[0]}`)
console.log(`tuple1[1] : ${tuple1[1]}`)

let [tupleString, tupleBoolean] = tuple1
console.log(`tupleString : ${tupleString}`)
console.log(`tupleBoolean : ${tupleBoolean}`)

//en objetos
let complexObject = {
 aNum: 1,
 bStr: "name",
 cBool: true
}

let {aNum, bStr, cBool} = complexObject

console.log(`aNum : ${aNum}`); 
console.log(`bStr : ${bStr}`); 
console.log(`cBool : ${cBool}`); 

//en arreglos
const numeros = [1, 2, 3];

const [num1, num2, num3] = numeros;

console.log(`num1 : ${num1}`); 
console.log(`num2 : ${num2}`); 
console.log(`num3 : ${num3}`); 

// #Funciones
console.log('-------------------------------- Funciones')
console.log('-------------- any')
//1.-Any
const myFunction1 = (a: any, b: any) => {
    return a + b
}
console.log(`a + b : ${myFunction1(true,3)}`) 

console.log('-------------- tipado number')
//2.-Tipado Number
const myFunction2 = (a: number, b: number) => {
    return a + b
}
//console.log(myFunction2(true,3)) // tirar error si no coincide el tipo de datos
//console.log(myFunction2(1)) // tirar erro si tiene de menos
//console.log(myFunction2(1,2,3)) // tirar erro si tiene de mas
console.log(`a + b : ${myFunction2(2,3)}`) 

console.log('-------------- parametros opcionales')
//3.-Opcionales
const myFunction3 = (a: string, b?: string) => {
    console.log(`a + b = ${a + b}`)
}
myFunction3('hola ', ' mundo')
myFunction3('hola ')
myFunction3('')

console.log('-------------- parametros opcionales y ??')
//4.-Opcionales
const myFunction4 = (a: string, b?: string) => {
    console.log(`a + b = ${a + (b ?? '')}`) //nullish coalescing operator
}

myFunction4('hola ', 'mundo')
myFunction4('hola ')
myFunction4('') //evitar retornar undefined

console.log('-------------- parametros por defecto')
//5.-Default
const myFunction5 = (a: string, b : string = "default") => {
    console.log(`a + b = ${a + b}`)
}
myFunction5('hola ', ' mundo')
myFunction5('hola ')
myFunction5('')

console.log('-------------- forzar retorno de una funcion') //void para no retornar nada
//6.-Forzar el retorno de una funcion 
const myFunction6 = (a: number, b: number) : number => {
    //return "hello world" // error, cadena no es asignable  a un tipo numero
    return a + b
}
console.log(`a + b : ${myFunction6(2,3)}`) 

//7.- Callback 
console.log('-------------- callbacks') 

var myCallback  = function(text : string) : void {
    console.log("myCallback called with " + text)
}
 
                                      //  tipado callback                        //tipado de retorno de la funcion
function withCallbackArg(message: string, callbackFn : (text: string) => void) : void{
    console.log("with Callback called, message: " + message);
    callbackFn(message + " from with Callback");
}

withCallbackArg("INITIAL TEXT", myCallback)
// withCallbackArg("initial text", "this is not a function")  // no es una funcion

// #Interfaces (duck typing) => tipado estricto de objetos
//permiten  definir la estructura de un objeto, para que este objeto sea considerado del tipo de esa interfaz.
//Al declarar un objeto con uan interfaz ts espera que todas  propiedades esten segun su tipo,
// de igual manera no se espera un propiedad adicional.
console.log('--------------------------------  Interfaces')


interface IdName{
    id : number
    name? : string // propiedades opcionales
    lastName : string
    print : ( str : string ) => void;

}

let idObj1 : IdName = {
    id : 1,
    name : 'Juan',
    lastName : 'Gomez' ,
    //gender : 'male', // no lo permite como Duck Typing si lo permitiria
    print: function(str) { //no es necesario volver a especificar los tipos de los parámetros en la función
        console.log(str + ' id:' + this.id + ', name:' + this.name + ', lastName: ' + this.lastName);
    }
}

idObj1.print("info => ")


let idObj2 : IdName = {
    id : 2,
    // nombre es opcional
    lastName : 'Estupiñan' ,
    print: function(str) { //no es necesario volver a especificar los tipos de los parámetros en la función
        console.log(str + ' id:' + this.id + ', name:' + this.name + ', lastName: ' + this.lastName);
    }
}

idObj2.print("info => ")


// #weak types
//Cuando definimos una interfaz donde todas sus propiedades son opcionales, se considera que es un tipado debil

