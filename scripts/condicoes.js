/**
 * ESTRUTURA IF
 */
//pega a hora
const dia = new Date();
let horas = dia.getHours(); // pega a hora 


if (horas < 12 && horas >06){
    alert ("Bom dia");
}else{
    alert ("Saudacoes");
}
console.log(horas);
// Valor atribuído à variável mensagem: “Pare”
semaforo = "vermelho";

if (semaforo == "verde") {
    mensagem = "Pode passar";
} else {
    mensagem = "Pare";
}
console.log(mensagem);

// Valor atribuído à variável mensagem: “Atenção”
semaforo = "amarelo";

if (semaforo == "verde") {
    mensagem2 = "Pode passar";
} else if (semaforo == "vermelho") {
    mensagem2 = "Pare";
} else {
    mensagem2 = "Atenção";
}
console.log (mensagem2)

