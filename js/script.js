
//declaração
const questions = document.querySelectorAll(".questions img")
const answer = document.querySelectorAll(".hide")

//funções
function hide(index){
     answer[index].classList.toggle("hide");
     answer[index].classList.toggle("resposta") 
}

//eventos
questions.forEach((questions, index) =>{
    questions.addEventListener("click",() =>{
        hide(index);
    });
});