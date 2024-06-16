// seleção
const questionsPara = document.querySelectorAll(".questions p")
const questionsImg = document.querySelectorAll(".questions img")
const answers = document.querySelectorAll(".main-questions div")

//funçao

//troca a classe da div
function mostrarDiv(questionsPara, index) {
    answers[index].classList.toggle("hide");
    answers[index].classList.toggle("resposta")
}

//pega o nome da classe e compara com a classe atual da div
function tradeImg(questionsPara, index) {
    const indice = answers[index].className

    if (indice === "hide") {
        questionsImg[index].src = "assets/images/icon-plus.svg"
    } else if (indice === "resposta") {
        questionsImg[index].src = "assets/images/icon-minus.svg"
    }
}

//evento

//evento de click sobre a imagem e sobre o paragrafo
questionsPara.forEach((questionsPara, index) => {
    questionsPara.addEventListener("click", () => {
        mostrarDiv(questionsPara, index)
        tradeImg(questionsPara, index)
    });
});

questionsImg.forEach((questionsPara, index) =>{
    questionsPara.addEventListener("click", () => {
        mostrarDiv(questionsPara, index)
        tradeImg(questionsPara, index)
    });
})