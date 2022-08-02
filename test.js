const {sum} = require('./app.js');

// método test recibe 2 argumentos:
//1- Descripción de la prueba.
//2- función a ejecutarse.
test ('sumar 1 y 10 debiese dar 11' , function(){
    let total= sum(1,10);
    expect(total).toBe(11);


});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})


test("1.2 Dollar should be 127.9 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba), valores *5
    expect(fromDollarToYen(6)).toBe(639.50); //1.2 dolares, deberian ser = 1.2*127.9*5 = 639.5
})


test("127.9 Yen should be 0.8 British Punds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion con 10.000 yenes.
    expect(fromYenToPound(10000)).toBe(62.549); 
})
