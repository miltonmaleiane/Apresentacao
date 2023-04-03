//Criação do objecto
let pessoa ={
nome: "Milton",
morada: "Manhattan, NY",

 saudar:function (nome){

    //pega o dia
const dia = new Date();
let horas = dia.getHours(); // pega a hora 

 console.log("Saudações "+ nome +", são "+ horas +" horas.")

 }
}


console.log(pessoa.nome + " vive em "+ pessoa.morada);
pessoa.saudar("Tomás");