export function stringificarObj(obj) {
    return `<br>Nome: ${obj.nome}, \
    RA: ${obj.ra}, \
    Idade:${obj.idade}, \
    Sexo: ${obj.sexo}, \
    Média: ${obj.media}, \
    Resultado: ${obj.resultado ? '<span style="color:green">Aprovado</span>' : '<span style="color:red">Reprovado</span>'}\<br>`
}

export function tabelarObj(obj){
    return `
    <tr>
    <td>${obj.nome}</td>
    <td>${obj.ra}</td>
    <td>${obj.idade}</td>
    <td>${obj.sexo}</td>
    <td>${obj.media}</td>
    <td>${obj.resultado?'Aprovado':'Reprovado'}</td>
    </tr>
    `
}