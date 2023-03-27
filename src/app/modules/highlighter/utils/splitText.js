/**
 * Esta funcion recibe un { string } y devuelve un arreglo basado
 * en cortar el string en palabras, conjuntos de espacios con fines de linea y 
 * otros caracteres independientes
 * 
 * @param texto String
 * 
 * @example
 * const res = splitText("const  casa = 'asa';");
 * console.log(res) // ["const","  ", "casa"," ","="," ","'","asa","'", ";"]
 */
const splitText = (texto) => {

    if(!texto || typeof texto !== "string")
        return [];

    let  responseData=[];
    let  regexLetters = /[a-zA-Z]/g; 

    console.log((texto.match(regexLetters)));
    for(let i=0 ; i < texto.length; i++){
      console.log(texto[i].match(regexLetters));
    }

    return responseData;
}


splitText("cas aSd;ca\nad");