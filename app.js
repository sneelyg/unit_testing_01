console.log("Hello World");
const sum = (a,b)=>{
    return a+b;

}
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen= function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9/1.2;
    // retornamos el valor
    return valueInYen.toFixed(2)*1;//el x 1 hace que sea un número, porque el "toFixed() lo convierte en un string."
}


const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen*0.8/127.9;
    // retornamos el valor
    return valueInPound.toFixed(3)*1;//el x 1 hace que sea un número, porque el "toFixed() lo convierte en un string."
}



module.exports={sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};



