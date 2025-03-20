// utilizando expressões regulares
function removeCaracteresEspeciaisCNPJ(cnpj) {
    let cnpjSemCaracterEspecial = cnpj.replace(/[^0-9]/g, '');
    return cnpjSemCaracterEspecial;
}

// utilizando loop for
function removeCaracteresEspeciaisCNPJv2(cnpj) {
  let cnpjFormatado = '';
  
  for(i = 0 ; i < cnpj.length ; i++) {
    if ( !isNaN(cnpj[i]) ) {
      cnpjFormatado += cnpj[i];
    }
  }
  
  return cnpjFormatado;
}

console.log({
    v1: removeCaracteresEspeciaisCNPJ('57.826.072/0001-00AAAAAAAAAAABBB'),
    v2: removeCaracteresEspeciaisCNPJv2('57.826.072/0001-00AAAAAAAAAAABBB')
});
