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



// #
console.log('-------------------------------- Siguiente TEMA')
