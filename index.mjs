import { htmlRelatorio, tipoRelatorio } from './relatorio.mjs';

const listaAlunos = JSON.parse(localStorage.getItem('alunos'));
const res = document.querySelector('.res');

if(listaAlunos){
    console.log(listaAlunos);
} else {
    console.log('Não foi encontrado no Local storage.')
}

document.addEventListener('DOMContentLoaded', () => { // Para evitar problemas no querySelector devo esperar o DOM carregar o conteúdo antes de executar o script.
    const cadastrarBotao = document.querySelector('.cadastrar-btn')
    const relatorioBotao = document.querySelector('.gerar-rel-btn')
    const opcaoRelatorio = document.querySelector('.tipo-rel')
    const apagarLista = document.querySelector('.limpar-btn')
    
    // Clique no botão de gerar relatório
    relatorioBotao.addEventListener('click',() => {
        switch(opcaoRelatorio.value){
            case 'rel-nome':
                res.innerHTML = htmlRelatorio(2)
                tipoRelatorio(2,listaAlunos);
                break
            case 'rel-ra':
                res.innerHTML = htmlRelatorio(3)
                tipoRelatorio(3,listaAlunos);
                break;
            case 'rel-aprovados':
                res.innerHTML = htmlRelatorio(4)
                tipoRelatorio(4, listaAlunos);
                break;
            default:
                alert('Nenhuma opção de relatório foi selecionada!');
        }
    });
    // Clique no botão de cadastrar aluno
    cadastrarBotao.addEventListener('click', () => {
        window.location.href='cadastro.html';
    });
    // Clique no botão de limpar lista
    apagarLista.addEventListener('click', () => {
        localStorage.clear();
        alert('A lista foi limpa com sucesso!')
        window.location.reload()
    })
});