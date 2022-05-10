calc = function(type, a, b){
    switch (type) {
        case "soma":
        case "+":
            return('Soma: ${a} + ${b} = ${a + b}')
            break;
        
        case "sub":
        case "-":
            return('Subtração: ${a} - ${b} = ${a - b}')
            break;
        
        case "mult":
        case "*":
            return('Multiplicação: ${a} * ${b} = ${a * b}')
            break;
        
        case "div":
        case "/":
            return('Divisão: ${a} / ${b} = ${a / b}')
            break;
        
        default: 
            break;
    }
}

module.exports = new calc();
