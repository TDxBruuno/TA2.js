function reverseString(texto) {
    let reversedText = texto.split('').reverse().join('');
    console.log(reversedText);
}

reverseString('Hello, world!');