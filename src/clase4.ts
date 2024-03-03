// # In
//in  se utiliza para verificar si una propiedad específica existe en un objeto
//se puede verificar si una clave existe en un objeto antes de intentar acceder a su valor
console.log('-------------------------------- IN ')

interface Id_Name{
    id: number;
    name: string;
}

interface DescrValue{
    descr: string;
    value: number;
}

function printNameOrValue(obj: Id_Name | DescrValue){
    if('id' in obj){
        console.log(obj.id)
    }

    if('descr' in obj){
        console.log(obj.value)
    }
}

const obj1: Id_Name = { id: 1, name: "John" };
const obj2: DescrValue = { descr: "Value", value: 100 };

printNameOrValue(obj1); // Output: 1
printNameOrValue(obj2); // Output: 100

//# Key of
//al usar 'keyof' con una interfaz, se puede obtener un tipo que incluye todas las claves de esa interfaz. 
//Esto puede ser útil para garantizar que se acceda solo a las propiedades existentes en esa interfaz al manipular objetos que la implementan.

console.log('-------------------------------- KEY OF ')

interface IPerson{
    id: number;
    name: string;
}

type PersonPropertyName = keyof IPerson
//type PersonPropertyLiteral = 'id' | 'name'

function getProperty(key: PersonPropertyName, value: IPerson){
    console.log(`${key} = ${value[key]}`)
}

getProperty('id', 
            { id: 1, name: 'firstName'})
            
getProperty('name',
             {id: 2, name: 'secondName'})
/*
getProperty('telephone',
             {id: 3, name: 'thirdName'})
*/


// # POO
//conceptos: abstraccion, encapsulamiento(public, private, protected, get/set), herencia y polimorfismo (override, overload no en tsc)
//clase palabras reservadas 'class' y 'new'
//interfaces
//'constructor', nos permite combinar la creación de una clase y la configuración de sus parámetros en una sola línea de código
//'this' se usa para acceder a una de las propiedades de una clase dentro de la misma.
// modificadores: public, private,  protected, se utilizan para controlar el acceso a los miembros de una clase (atributos y métodos)
// constructor: parameter properties, , es una versión abreviada de encapsulamiento que se pueden aplicar a los parámetros en un constructor. nota.-  cuando se usan modificadores (public, private, protected e incluso readOnly), automáticamente se crean y asignan propiedades en la clase con el mismo nombre que los parámetros del constructor, evita la necesidad de escribir explícitamente la asignación con this.
//read only, significa que una vez que se ha asignado un valor a una propiedad de solo lectura, no se permite modificarlo
//getter y setters, Un acceso a una propiedad es simplemente una función que se llama cuando un usuario de nuestra clase obtiene el valor de una propiedad (getter) o establece su valor (setter), se utilizan las palabras reservadas get y set.

console.log('-------------------------------- POO clases ')

//Clase
class SimpleClass{
    id: number | undefined
    print(): void{
        console.log('Se llamó el metodo print de la clase SimpleClass ')
    }
    print_this(): void{
        console.log(`SimpleClass.id = ${this.id}`)
    }
}

let mySimpleClass = new SimpleClass()
mySimpleClass.print()

let mySimpleClass2 = new SimpleClass()
mySimpleClass2.id = 2024
mySimpleClass2.print_this();


//Interface
//la interface solo nos indica las propiedades o metodos minimos que debe tener la clase, pero no restringe metodos o propiedades extras (ducking type)
console.log('-------------------------------- POO Interface ')

interface IPrint{
    print(): void
}

function printClass(a: IPrint){
    a.print()
}

class ClassA implements IPrint{
    print(): void{
        console.log(`ClassA.print() called`)
    }
}

class ClassB{
    print(): void{
        console.log(`ClassB.print() called`)
    }
}

let classA = new ClassA()
printClass(classA); //con interface

let classB = new ClassB()
classB.print(); //sin interface

/*
Con la interfaz IPrint:

Al usar la interfaz IPrint como tipo de parámetro en la función printClass, se asegura que solo se puedan pasar objetos que implementan la interfaz y que tienen un método print definido. Esto proporciona seguridad en el código y garantiza la presencia del método print en los objetos que se pasan a la función.
Sin la interfaz:

Al llamar directamente al método print en una instancia de ClassB, no hay restricciones en cuanto a qué tipo de objeto se puede pasar o qué método debe tener el objeto. Esto puede llevar a errores si se pasa un objeto incorrecto o si no se tiene la certeza de que el objeto tiene el método print.
*/

//constructor y this
console.log('-------------------------------- POO constructor & this ')
class ClasswithConstructor{
    id: number
    constructor(id: number){
        this.id = id
    }
}

let myClasswithConstructor = new ClasswithConstructor(7)
console.log(`myClasswithConstructor.id = ${JSON.stringify(myClasswithConstructor)}`)


//modificadores: public, protected, private
console.log('-------------------------------- POO mmodificadores: public, protected, privated ')

//public
class ClassWithPublicProperty{
    public id: number | undefined
}

let publicAccess = new ClassWithPublicProperty()
publicAccess.id = 10

//private : solo la clase misma lo puede manipular nota.- tampoco una clase derivada lo puede manipular
class ClassWithPrivateProperty{
    private id: number
    constructor(id: number){
        this.id = id
    }
}

let privateAccess = new ClassWithPrivateProperty(10)
// privateAccess.id = 20 no se puede modificar 

//protected, nota.-se ve mas abajo tras ver herencia


// constructor: parameters properties
console.log('-------------------------------- POO constructor: parameter properties')

class ClassWithCtorMods{
    constructor(public id: number, private name: string){

      // No es necesario declarar las propiedades `id` y `name` ni asignarles valores aquí.

    }
}

let myClassMod = new ClassWithCtorMods(1,"test")
console.log(`myClassMod.id = ${myClassMod.id}`)
//console.log(`myClassMod.id = ${myClassMod.name}`)  //no se puede acceder porque es privada

//readonly
console.log('-------------------------------- POO readOnly')

class ClassWithReadOnly{
    readonly name: string
    constructor(_name: string){
        this.name = _name
    }

    setNameValue(_name: string){
       // this.name = _name  // es de solo lectura
    }

}

/*
colocar un "_" antes del nombre de una variable en TypeScript es una convención, no es obligatorio. Esta convención se utiliza para indicar que esa variable se está utilizando como parámetro en un constructor o método, pero su nombre podría ser el mismo que el nombre de una propiedad de la clase. Esto ayuda a distinguir entre el parámetro y la propiedad de la clase en el código. Es recomendable seguir esta convención para mantener el código más claro y legible, pero no es obligatorio.
*/


//getters y setters
console.log('-------------------------------- POO getters y setters ')

class ClassWithAccessors{
    private _id: number = 0
    get get_id(): number{
        console.log(`get id property `)
        return this._id
    }
    set set_id(value: number){
        console.log(`set id property => ${value}`)
        this._id = value
    }
}

//pareciera que utilizamos una propiedad pero internamente estamos utilizando funciones
//getters y setters permiten controlar el acceso y la modificación de la propiedad, además de añadir lógica adicional si es necesario.

let myClassWithAccessors = new ClassWithAccessors();

// Acceder al valor de la propiedad "id" utilizando el getter
console.log(myClassWithAccessors.get_id); // Esto imprimirá "get id property" y luego el valor de la propiedad "id" (en este caso, 0)

// Modificar el valor de la propiedad "id" utilizando el setter
myClassWithAccessors.set_id = 10; // Esto imprimirá "set id property"

// Volver a acceder al valor de la propiedad "id" para ver el cambio
console.log(myClassWithAccessors.get_id); // Esto imprimirá "get id property" y luego el nuevo valor de la propiedad "id" (en este caso, 10)




//#atributos estaticos
//Una variable estática pertenece a la clase en sí misma en lugar de a las instancias individuales de la clase.
//#metodos estaticos
//al usar una funcion estatica, no necesitamos crear una instancia para invocar la funcion.
console.log('-------------------------------- atributos y metodos estaticos')

class Counter {
    static instanceCount: number = 0;

    constructor() {
        Counter.instanceCount++;
    }

    static getInstanceCount(): number {
        return Counter.instanceCount;
    }
}

let counter1 = new Counter();
let counter2 = new Counter();

//observa que al ser estatica se utiliza la clase "Counter" y no las instancias counter#.getInstanceCount()
console.log("Instance count: ", Counter.getInstanceCount()); // Output: Instance count: 2

let counter3 = new Counter();

console.log("Instance count: ", Counter.getInstanceCount()); // Output: Instance count: 3



//#herencia: en interfaces "extends", las interfaces pueden heredar más de una interface
//Clases bases y heredadas
console.log('-------------------------------- herencia de interfaces ')

//Ejemplo 1
interface IBase{
    id: number
}

interface IDerivedFromBase extends IBase{
    name: String
}

/*
class IdNameClass implements IDerivedFromBase{
    //error, espera que tambien definamos el parametro id de de la interface IBase
    name: string = "nameString"
}
*/

//Ejemplo 2
interface IBaseStringOrNumber{
    id: string | number
}

interface IDerivedFromStringOrNumber extends IBaseStringOrNumber{
    id: number  // se redujo el tipado de una propiedad
}

//Ejemplo 3
interface IMultiple extends IDerivedFromBase, IDerivedFromStringOrNumber{ //heredar de multiples interfaces (name: string ,id: number)
    description: string
}

let multipleObject : IMultiple = {
    id: 1,
    name: "myName",
    description: "Herenecia multiple de interfaces"
}
console.log(multipleObject)


//#herencia:en clases "extends", solo podemos heredar una sola clase
console.log('-------------------------------- herencia de clases ')


class BaseClass{
    id: number = 0
}

class MyClass extends BaseClass{
    name: string = ""
}

let myClass: MyClass = {name: "Herencia de Clases", id: 2}
console.log(myClass)

//#funcion Super
/*
Cuando se utiliza la herencia, es bastante común que una clase base y una clase derivada implementen el mismo método. 
Esto se ve más a menudo con los constructores de clases.

Si una clase derivada tiene un constructor, entonces este constructor debe llamar al constructor de la clase base usando
la palabra clave "super", o TypeScript generará un error.
 */
console.log('-------------------------------- funcion super ')

class BaseClassWithCtor{
   private id: number
   constructor(id: number){
    this.id = id
   }
}

class DerivedClassWithCtor extends BaseClassWithCtor{
    private name: string
    constructor(id: number, name: string){
        super(id)
        this.name = name
    }
}

let instanceOferivedClassWithCtor = new DerivedClassWithCtor(435, "Joel");
console.log(instanceOferivedClassWithCtor)

//#llamando metodos de la clase base con super
//no necesariamente el metodo tiene que ser el constructor, puede ser cualquier otro con super
console.log('-------------------------------- llamando metodos de la clase base con super ')


class BaseClassWithCtor2{
    private id: number
    constructor(id: number){
     this.id = id
    }
    printID(): void {
        console.log(`ID: ${this.id}`);
    }
 }

class DerivedClassWithCtor2 extends BaseClassWithCtor2{
    private name: string
    private lastName : string
    constructor(id: number, name: string){
        super(id) //se asume que es el constructor
        this.name = name
        this.lastName = "Pérez"
    }

    print(): void{
        super.printID();  //metodo llamado desde la clase base
        console.log(`Name: ${this.name}`);
        console.log(`Last Name: ${this.lastName}`);
    } 
}

let instanceOferivedClassWithCtor2 = new DerivedClassWithCtor2(456, "Juan");
instanceOferivedClassWithCtor2.print();

//#Override (anulacion o sobreescritura de metodos)
//significa que el método de la clase hija tiene el mismo nombre, parámetros y tipo de retorno que el método de la clase padre, pero con una implementación diferente

console.log('-------------------------------- override')

class BaseClassWithFn{
    print(text: string){
        console.log(`BaseClassWithFn.print(): ${text}`)
    }
}

class DerivedClassFnOverride extends BaseClassWithFn{
    print(text: string){
        console.log(`DerivedClassFnOverride.print(): ${text}`)
    }
}

let instanceOfBaseClassWithFn = new BaseClassWithFn()
let instanceOfDerivedClassFnOverride = new DerivedClassFnOverride()
instanceOfBaseClassWithFn.print("Original")
instanceOfDerivedClassFnOverride.print("Override")


//#Protected
console.log('-------------------------------- protected ')

class BaseClassProtected{
    protected id: number
    private name: string = ""
    constructor(id: number){
        this.id = id
    }
}

class DerivedClassProtected extends BaseClassProtected{
    constructor(id: number){
        super(id)
        console.log(`base.id = ${this.id}, se accede desde la clase hija`)
        // console.log(`base.id = ${this.name}`)  //variable privada
    }
}

let access = new DerivedClassProtected(123)
//console.log(`access.id = ${access.id}`) // No se puede acceder a la variable protegida 'id'
// En este ejemplo, se puede ver que la variable protegida 'id' se puede acceder dentro de la clase AccessProtected, 
//pero no se puede acceder directamente desde un objeto de esa clase.


//#clases abstractas 
//es aquella que no puede ser instanciada, es una clase que esta diseñada para ser heredada
//#metodos abstractos
//// es un metodo diseñado para ser sobre escrito, significa que una clase derivada debe proporcionar una implementacion  de.
console.log('-------------------------------- clases y metodos abstractos')

abstract class EmployeeBase{
    private id: number
    protected salary : number
    abstract doWork(): void
    constructor(id: number, salary: number){
        this.id = id
        this.salary = salary
    }
   
}

class OfficeWorker extends EmployeeBase{

    public name: string
    constructor(id: number, salary: number, name: string){
        super(id, salary)
        this.name  = name
    }
    
    doWork(): void {
        console.log(`${this.name} is doing office work`)
    }
    
    takeBreak(): void {
        console.log(`${this.name} is taking a break`)
    }

     // Como el atributo 'id' es privado en la clase base, necesitamos acceder a él a través de un método público
    /*
    getId(): number {
        //return this.id 
    }
    */
    
    getSalary(): void {
        console.log(`Salary of ${this.name} is ${this.salary}`)
    }
 }

let instanceOfOfficeworker = new OfficeWorker(1, 20000, 'manuelo')

console.log(instanceOfOfficeworker.name)
//console.log(instanceOfOfficeworker.salary)  //no es accesible solo por medio de un metodo
instanceOfOfficeworker.getSalary()
instanceOfOfficeworker.doWork()
