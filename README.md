***Repositório do Projeto de Estrutura de Dados - Sistema de Gerenciamento de Alunos (ADS Fatec)***

Este repositório armazena o código fonte do sistema de gerenciamento de informações de alunos, desenvolvido como trabalho prático para a disciplina de Estrutura de Dados do curso de Análise e Desenvolvimento de Sistemas (ADS) da Fatec. O objetivo principal deste projeto foi aplicar os conceitos de estruturas de dados na criação de uma solução funcional para o gerenciamento de dados acadêmicos.

**Funcionalidades Implementadas**

O sistema desenvolvido permite realizar as seguintes operações:

***_Cadastro de Alunos:_*** Adicionar novos registros de alunos ao sistema, incluindo informações como:
**Nome completo**  
**Registro Acadêmico (RA)**  
**Idade**  
**Sexo**  
**Média final**  
**Resultado (Aprovado/Reprovado)**

***_Armazenamento de Dados_***: Persistência dos dados dos alunos utilizando o Local Storage do navegador, garantindo que as informações sejam mantidas mesmo após o fechamento da página.

***_Exibição de Dados:_*** Visualização da lista de alunos cadastrados, apresentando todas as informações relevantes de cada um.

***_Ordenação:_*** Implementação do algoritmo de ordenação Selection Sort para organizar os alunos na lista por:
Nome (ordem alfabética)
Registro Acadêmico (ordem crescente)
Estrutura de Dados Utilizada
Para a organização e manipulação dos dados dos alunos em memória, foi utilizada a estrutura de dados Array. O array permite armazenar os objetos de aluno de forma sequencial, facilitando o acesso e a iteração sobre os registros.

***_Persistência de Dados_***  
A persistência dos dados dos alunos é realizada através do Local Storage, uma funcionalidade do navegador que permite armazenar dados localmente no dispositivo do usuário. Isso garante que as informações cadastradas não se percam ao fechar ou recarregar a página do sistema.

***_Algoritmo de Ordenação_***  
O algoritmo Selection Sort foi implementado para oferecer funcionalidades de ordenação dos alunos. Este algoritmo seleciona repetidamente o menor (ou maior, dependendo da ordem desejada) elemento da parte não ordenada da lista e o coloca no início. Foram implementadas ordenações por nome (alfabética) e por RA (crescente).

***_Visualização e Acesso Online_***  
Este projeto também está disponível para visualização e teste online através da plataforma Vercel:

([https://trabalho-estrutura-de-dados.vercel.app/)]

***_Tecnologias Utilizadas_***  
JavaScript  
HTML  
CSS  

Este repositório representa a aplicação prática dos conhecimentos adquiridos na disciplina de Estrutura de Dados e demonstra a capacidade de desenvolver um sistema funcional para o gerenciamento de informações.
