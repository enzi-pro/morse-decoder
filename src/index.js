const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let numOfCharacters = expr.length / 10;
    let decodedMessage = "";
    for(let i = 0; i < numOfCharacters; i++) {
        let codedLetter = expr.substr(i*10, 10);
        if (codedLetter === "**********") {
            decodedMessage += " ";
            continue;
        }
        codedLetter = codedLetter.substr(codedLetter.indexOf("1"))
            .replace(/10/g, '.')
            .replace(/11/g, '-');
        decodedMessage += MORSE_TABLE[codedLetter];
    }
    return decodedMessage;
    // write your solution here
};

module.exports = {
    decode
};