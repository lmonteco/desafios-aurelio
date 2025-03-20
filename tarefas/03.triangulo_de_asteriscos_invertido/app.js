function triangulo (numero) {
    for (let i = 1 ; i <= numero ; i++) {
        let asteriscos = '';
        let espacoEmBranco = '';

        espacoEmBranco = numero - i;

        for (let j = 1 ; j <= espacoEmBranco ; j++) {
            espacoEmBranco += '  ';
        }

        for (let k = 1 ; k <= i ; k++) {
            asteriscos += '* '; 
        }

        console.log(espacoEmBranco + asteriscos);
    }
}

triangulo(5);