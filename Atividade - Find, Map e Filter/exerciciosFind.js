// ATIVIDADE - FIND

/* 1) Dado o array const filmes = 
["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"];, encontre o primeiro filme que começa com a letra "B".
filmes = ["Avatar", "Batman", "Vingadores", "Matrix", "Barbie"]
let encontrarFilme = filmes.find(filme =>{
    return filme
});*/


//? 2) Dado o array const numeros = [2, 4, 6, 9, 12, 15];, encontre o primeiro número ímpar.

let numeros = [2, 4, 6, 9, 12, 15]

let numeroImpar = numeros.find(impar =>{
    return impar % 2 === 1;
});

console.log("Primeiro numero impar:", numeroImpar);
