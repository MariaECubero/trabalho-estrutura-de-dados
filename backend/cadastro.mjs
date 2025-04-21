import { stringificarObj } from "./auxiliares.mjs";

class Aluno {
    constructor(nome, ra, idade, sexo, media, resultado) {
        this.nome = nome;
        this.ra = ra;
        this.idade = idade;
        this.sexo = sexo;
        this.media = media;
        this.resultado = resultado;
    }

    toHTML(){
        return `<p>Nome: ${this.nome}, RA: ${this.ra}, Idade: ${this.idade}, Sexo: ${this.sexo}, Média: ${this.media}, 
        Resultado: ${this.resultado ? 'Aprovado' : 'Reprovado'}</p>`;
    }
};

function validarForm(){
    const camposObrigatorios = document.querySelectorAll('.form-aluno [required');
    for(let campo of camposObrigatorios){
        if(!campo.value){
            return false
        }
    }
    return true;
}

const saida = document.querySelector('.output-alunos');
const alunosSalvosJSON = localStorage.getItem('alunos'); 
let alunos = [];
if (alunosSalvosJSON){
    // Se existir uma lista salva como JSON no local storage, 
    // ela será convertida. Do contrário "alunos" continua sendo uma lista vazia. 
    alunos = JSON.parse(alunosSalvosJSON)
    alunos.forEach(element => {
        saida.innerHTML += stringificarObj(element)
    });
}


document.addEventListener('DOMContentLoaded',() =>{
    const form = document.querySelector('.form-aluno');
    const botaoCadastrar = document.querySelector('.cadastrar-btn');
    const botaoVoltar = document.querySelector('.voltar-btn')
    const nomeAluno = document.querySelector('.aluno-nome');
    const raAluno = document.querySelector('.aluno-ra');
    const checkboxM = document.querySelector('.sexo-m');
    const checkboxF = document.querySelector('.sexo-f');
    const idadeAluno = document.querySelector('.aluno-idade');
    const mediaAluno = document.querySelector('.aluno-media');

    checkboxF.addEventListener('click', () =>{
        checkboxM.checked = false;
    });
    checkboxM.addEventListener('click', () =>{
        checkboxF.checked = false;
    });

    botaoCadastrar.addEventListener('click', (e) => {
        e.preventDefault(); // Para que não atualize a página
        const sexoAluno = checkboxM.checked ? 'M' : 'F';
        const resultadoAluno = (mediaAluno.value)>=6
        if(validarForm()){
            let aluno = new Aluno(nomeAluno.value,Number(raAluno.value), idadeAluno.value, sexoAluno, mediaAluno.value, resultadoAluno);
            alunos.push(aluno);
            localStorage.setItem('alunos', JSON.stringify(alunos))  // Colocando a lista no localStorage, desta forma é possível pegá-lo no index.
            saida.innerHTML += stringificarObj(aluno)
            form.reset()
            nomeAluno.focus()
        } else {alert('Por favor, preencha todos os dados do aluno.') }
    });

    botaoVoltar.addEventListener('click', () => {
        window.location.href='index.html'
    })
});