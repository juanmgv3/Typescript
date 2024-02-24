// #valores inferidos 
//TypeScript tiene la capacidad de reconocer (inferir)
//el tipo de dato a pesar de que haya sido declarado explícitamente. 
console.log('-------------------------------- Valores Inferidos')

let songName = 'el tucanazo'
songName = 'el centenario'
//songName = 3
console.log(songName)



//#Tipado de objetos
//Para definir un tipo de objeto, simplemente enumeramos sus propiedades y sus tipos.
console.log('-------------------------------- Tipado de Objetos')

function printCoord(pt: {x : number, y : number }){
    console.log('el valor de la coordenada x es: ' + pt.x)
    console.log('el valor de la coordenada y es: ' + pt.y)
}

printCoord({ x: 3, y: 7 });



// #tipado pato
//En TypeScript, dos variables se consideran del mismo tipo si comparten las mismas propiedades y métodos. 
//Al reasignar una variable, es necesario que al menos contenga las mismas propiedades y métodos con los que 
//fue declarada, independientemente del orden. Si falta alguna propiedad, TypeScript mostrará un error, 
//pero si hay propiedades adicionales, las agregará sin problema.
console.log('-------------------------------- Duck Typing')

let nameIdObject = { name: 'Juan', id: 1, print(){} }
console.log(nameIdObject)

nameIdObject = {id :2 , print(){},name: 'Muricio'} //se reasigno aunque estuvieran en otro orden
console.log(nameIdObject)

// nameIdObject = {id :3 , print(){}} // si falta un atributo/metodo habra un error

let nameIdObjectDOS = { name: 'Jose', id: 4, print(){}, select(){} }
console.log(nameIdObjectDOS)

nameIdObject = nameIdObjectDOS
console.log(nameIdObject) //nameIdObject adquiere el metodo select() de nameIdObjectDOS

// #var (global) & let (local, dentro del bloque en que se declara)
//con let podemos asegurarnos que la variable que creamos en otro ámbito
//sea una variable nueva y que solo existe en ese ámbito
//esto evita errores, como cuando sin darnos cuenta, definimos variables con el mismo nombre
console.log('-------------------------------- var & let')

let index : number = 0

if(index == 0){
    let index : number = 2
    console.log(`index: ${index}`)
}

console.log(`index: ${index}`)

/*
si trabajamos con ts en crudo, posiblemente coincidamos con nombre de varibales reservadas por TS
para evitar esto podemos agregar la siguiente configuración
"moduleDetection": "force"
o agregando export {} al inicio del archivo
o simplemente cambiando el nombre de la variable
*/



// #Type Union ( | )
//TypeScript nos permite expresar un tipado como una combinación de dos o más tipos.
//Se utiliza | para enumerar todos los tipos que conformarán este nuevo 
//Las uniones permiten que una variable pueda contener valores de diferentes tipos en diferentes momentos.
console.log('-------------------------------- Type Union')

function printObject(obj: string | number){
    console.log(`obj = ${obj}`)
}

printObject(1)
printObject("string value")



// Type guards (typeof)
// Los Type Guards se utilizan para verificar si un valor es de un determinado tipo,
// ayuda a garantizar que los tipos de datos se manejen de forma segura y
// reduce la posibilidad de errores durante la ejecución del programa
// aqui el tipo de dato string|number entra en conflicto ya que el operador "+"
// suma si se trata de numeros y concatena si se trata de caracteres
console.log('-------------------------------- Type guards')

function addWithTypeGuard(arg1 : string | number, arg2 : string | number){
    // console.log(arg1 + arg2) tira error
    if(typeof arg1 === 'string'){
        //arg 1 es tratada como string
        return arg1 + arg2
    }
}

console.log(addWithTypeGuard("hola ", 2))
console.log(addWithTypeGuard("hola ", "mundo"))
console.log(addWithTypeGuard(5, "mundo"))  //undefined



// #Type Aliases
//nos permite nombrar a una unión en especifico, esto nos facilita 
//utilizar la union en diferentes partes del programa
console.log('-------------------------------- Type Aliases')

type StringOrNumber = string | number

function addWithTypeAlias(arg1 : StringOrNumber, arg2 : StringOrNumber){
    return arg1.toString() + arg2.toString() //metodo para convertir un valor en una cadena de texto
}

console.log(addWithTypeAlias("hola ", 2))
console.log(addWithTypeAlias("hola ", "mundo"))
console.log(addWithTypeAlias(5, "mundo"))  //5mundo



// #Enums
// Las enumeraciones se utilizan para definir un nombre legible para nosotros
// para un número o cadena específicos
//Podemos definir un enum como una constante (const Enum) esto para evitar que 
//se puedan modificar sus opciones con un uso posterior
console.log('-------------------------------- Enums')

enum DoorState{Open = 'Hola', Closed = 10}

function checkDoorState(state : DoorState){
    console.log(state)
    switch (state){
        case DoorState.Open:
            console.log('La puerta esta abierta')
            break
        case DoorState.Closed: 
            console.log('La puerta esta cerrada')
            break
        default:
            break
    }
}

checkDoorState(DoorState.Open)
checkDoorState(DoorState.Closed)



// #Expresiones Condicionales  (? operador ternario)
// (conditional) ? (true statement) : (false statement)
// es una versión simplificada y optimizada de la condición if else
console.log('-------------------------------- Expresiones Condicionales')

const value : number = 10
const message : string = value > 10 ? "value is larger than 10" : "value is 10 or less"
console.log(message)

/*
const value: number = 10;
let message: string;

if (value > 10) {
    message = "value is larger than 10";
} else {
    message = "value is 10 or less";
}

console.log(message);
*/