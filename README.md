# respostas-estagio

1) Observe o trecho de código abaixo:

```
int INDICE = 13, SOMA = 0, K = 0;
enquanto K < INDICE faça
{
  K = K + 1;
  SOMA = SOMA + K;
}
imprimir(SOMA);
```

Ao final do processamento, qual será o valor da variável SOMA?  

```
Resposta: 91
```

 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE:  
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
```
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

```

4) Descubra a lógica e complete o próximo elemento:  

```
a) 1, 3, 5, 7, ___ 
R: 9 -> somando 2 ao número anterior se tem o valor do próximo número
b) 2, 4, 8, 16, 32, 64, ____
R: 128 -> multiplicando 2 ao número anterior se tem o valor do próximo número
c) 0, 1, 4, 9, 16, 25, 36, ____
R: 49 -> números elevados ao quadrado começando de 0 até o 7
d) 4, 16, 36, 64, ____
R: 100 -> números pares elevados ao quadrado
e) 1, 1, 2, 3, 5, 8, ____
R: 13 -> somando o número anterior ao número atual se obtém o valor do próximo número
f) 2, 10, 12, 16, 17, 18, 19, ____
R: 200 -> números naturais que começam com a letra 'd'
```

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
```
Ligar o primeiro interruptor por 3 minutos;
Desligar o primeiro interruptor e ligar um segundo interruptor;
Entrar na sala das lâmpadas.

A lâmpada que estiver acessa é a do segundo interruptor.
A lâmpada que estiver apagada, mas quente ao toque é a do primeiro interruptor
e a lâmpada que está fria ao toque é a do terceiro interruptor (não ligado).
```

5) Escreva um programa que inverta os caracteres de um string.  
IMPORTANTE:  
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;  
b) Evite usar funções prontas, como, por exemplo, reverse;
```
function reverseString(inputString) {
    const reversed = [];
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed.push(inputString[i]);
    }
    return reversed.join("");
}

const word = prompt("Digite uma palavra: ");
alert(reverseString(word));
```
