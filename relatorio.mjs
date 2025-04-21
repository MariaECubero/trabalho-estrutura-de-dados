import { selectionSort } from './backend/algoritmos.mjs'
import { tabelarObj } from './backend/auxiliares.mjs'

export function htmlRelatorio(opcao){
    // Função que retorna a estrutura html dos relatório

    if (opcao==2){
        return `<section class="menu"> <h3 class="titulo-relatorio">Relatório em ordem crescente por nome</h3>

        <div class="div-tabela">
            <!-- Tabela com os dados-->
            <table class="tabela-alunos">
                <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Média</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody class="corpo-tabela">
                </tbody>
    
                <tfoot>
                <tr>
                    <!-- <th scope="row" colspan="2">Média de Aprovados</th> -->
                    <!-- <td>5</td> -->
                </tr>
                </tfoot>
            </table>
        </div> </section>`
    } else if (opcao==3) {
        return `<section class="menu"> <h3 class="titulo-relatorio">Relatório em ordem decrescente por RA</h3>

        <div class="div-tabela">
            <!-- Tabela com os dados-->
            <table class="tabela-alunos">
                <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Média</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody class="corpo-tabela">
                </tbody>

                <tfoot>
                <tr>
                    <!-- <th scope="row" colspan="2">Média de Aprovados</th> -->
                    <!-- <td>5</td> -->
                </tr>
                </tfoot>
            </table>
        </div> </section>`
    } else if (opcao==4) {
        return `<section class="menu"> <h3 class="titulo-relatorio">Relatório de aprovados em ordem crescente, por nome</h3>

        <div class="div-tabela">
            <!-- Tabela com os dados-->
            <table class="tabela-alunos">
                <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">RA</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Sexo</th>
                    <th scope="col">Média</th>
                    <th scope="col">Resultado</th>
                </tr>
                </thead>
                <tbody class="corpo-tabela">
                <tr>

                </tr>
                </tbody>
    
                <tfoot>
                <tr>
                    <!-- <th scope="row" colspan="2">Média de Aprovados</th> -->
                    <!-- <td>5</td> -->
                </tr>
                </tfoot>
            </table>
        </div> </section>`
    };
};

export function tipoRelatorio(opcao, listaAlunos){
    // Função que retorna a lógica por trás do relatório
    if(opcao===2){ // 2 - Ordem crescente por nome
        selectionSort(listaAlunos, (elem1, elem2)=> { return elem1.nome >= elem2.nome});
    };
    if(opcao==3){ // 3 - Ordem decrescete por RA
        selectionSort(listaAlunos, (elem1, elem2) => { return elem1.ra <= elem2.ra});
    }
    if(opcao==4){// 4 - Ordem crescente por nome, apenas aprovados
        selectionSort(listaAlunos, ((elem1, elem2)=> { return elem1.nome >= elem2.nome} ))
        listaAlunos = listaAlunos.filter(checkarAprovados)
    }
    passarListaParaOHtml(listaAlunos);
}

function checkarAprovados(elemento){
    return elemento.resultado
}

function passarListaParaOHtml(listaOrdenada){
    const output = document.querySelector('.corpo-tabela')
    output.innerHTML = ''; // Limpando oq já tem.
    listaOrdenada.forEach(elem => {
        output.innerHTML += tabelarObj(elem)
    });
};