
// forma 1
const numbers = [1,2,3,4,5,6,7];
const evens = numbers.filter(item => item%2 === 0 );
console.log(evens);

// o filter, filtra o array original e aplica uma condicao, se cada item passar essa condicao
// esse item entra no novo array gerado.

// acima e abaixo temos 2 formas de fazer o mesmo
// a funcao pode estar fora do filter e vc a chama escrevendo o nome dela. 
var numeros =[1,2,3,4,5,6,7];
function buscarNumerosPares (value){
    if (value %2 == 0)
    return value;
}
var numerosPares = numeros.filter(buscarNumerosPares);
console.log(numerosPares);
// a funcao pode estar dentro do filter
var numeracao =[1,2,3,4,5,6,7];
var novaNumeracao = numeracao.filter(
    function(valor){
        return valor > 5
    }
    )

console.log(novaNumeracao);
//
var r1= numeracao.filter((valor)=>{
    return valor > 5;
})
console.log(r1);
// Arrow function se chama de Funcao Anonima em Portugues
var r2 = numeracao.filter(valor => valor > 5);
console.log(r2);
//
var funcionarios =[
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]
var pessoasListagem = funcionarios.filter(
    function(valor){
        console.log(valor.nome);
        return valor.nome.length < 5;

    }
)

console.log(pessoasListagem);