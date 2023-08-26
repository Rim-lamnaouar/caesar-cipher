function caesarCipher(text, shift) {
    return text
        .split('')
        .map(char => {
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
            } else if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
            } else {
                return char;
            }
        })
        .join('');
}

console.log(caesarCipher("Hello",3));



// let encrypt = document.getElementById('encrypt');
encrypt.addEventListener('click',(e)=>{
    e.preventDefault()

let plainText = document.getElementById('plainText').value;
let shift = document.getElementById('shift').value;
let encrypted = document.getElementById('encrypted');
encrypted.value=caesarCipher(plainText, shift);

});