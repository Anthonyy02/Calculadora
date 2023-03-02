const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operador = txtOperador.value
    //parsefloat es para cambiar de un string a un numero decimal
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    //&&isNan = significa que tiene que ser numero si o si
    if((operador == "+" || operador == "-" || operador == "*" || operador == "/") && !isNaN(op1) && !isNaN(op2)) {
        let resultado
        switch (operador) {
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;

        }
        pResultado.style = "color:black"
        pResultado.innerText = "El Resultado es = " +resultado
    } else {
        pResultado.style = "color: red"
        pResultado.innerText = "No se puede Calcular"
    }
}