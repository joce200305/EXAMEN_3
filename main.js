const esPalindromo = (texto) => {
    texto = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let izquierda = 0, derecha = texto.length - 1; izquierda < derecha; izquierda++, derecha--) {
        if (texto[izquierda] !== texto[derecha]) {
            return false; 
        }
    }
    return true; 
}

if (esPalindromo("Anita lava la tina")) {
    console.log("Es un palindromo");
} else {
    console.log("No es un palindromo");
}
