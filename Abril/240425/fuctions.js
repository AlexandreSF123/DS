function exibir(nome, idade) {
return "O seu nome é " + nome + "e sua idade é " + idade;    
}
//esse é do 2_function
function Contar(inicio, final){

for(var i=inicio;i<=final;i++){
    document.writeln(i + "<br>");
}

}
//conta letras específics que o String possui
function contaLetras(palavra,letras){
    var contador = 0;
    palavra = palavra.toLowerCase();
    // convarter tudo para minúsculo
    for (var i = 0; i < palavra.length; i++) {
       // O charAt() pega  uma parte da palavra Ex: cão e o charAt(2) ele pega a letra O do cão
        if(palavra.charAt(i) == letras){
            contador++;
        }
    return contador;
    }
}