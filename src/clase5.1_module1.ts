import {Module1} from "./modules/5.1_module1"  
//Import, para poder  consumir un módulo
//No especificamos una extensión .ts o .js al importar módulos. 
//El cargador de módulos se encargará de ubicar el archivo correcto.

let mod1 = new Module1
mod1.print()



