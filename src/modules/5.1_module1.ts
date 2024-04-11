export class Module1 {  //export para marcarlo como consumible fuera del archivo
    print(): void{
        localPrint('Module1.print() called')
    }
}

function localPrint(text: string){ //localPrint no está disponible fuera del módulo module1.ts 
    console.log(`localPrint: ${text}`)
}



