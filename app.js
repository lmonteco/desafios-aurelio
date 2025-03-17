function removeCaracteresEspeciaisCNPJ(cnpj) {
    let cnpjSemCaracterEspecial = cnpj.replace(/[^0-9]/g, '');
    return cnpjSemCaracterEspecial;
}
console.log(removeCaracteresEspeciaisCNPJ('57.826.072/0001-00AAAAAAAAAAABBB'))