/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

function fibonacci() {
    const sequence = [0, 1];
    for (let i = 2; i <= 20; i++) {
        sequence[i] = sequence[i - 2] + sequence[i - 1];
    }
    return sequence;
}

const numberToCheck = Number(prompt("Informe o número para checar"));
const isFibonacci = fibonacci().includes(numberToCheck);

if (isFibonacci) {
    alert(`O número ${numberToCheck} pertence a sequência`);
} else {
    alert(`O número ${numberToCheck} não pertece a sequência`);
}

/*
Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function reverseString(inputString) {
    const reversed = [];
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed.push(inputString[i]);
    }
    return reversed.join("");
}

const word = prompt("Digite uma palavra: ");
alert(reverseString(word));