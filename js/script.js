
//declaração
const questionsImg = document.querySelectorAll(".questions img")
const questionsParagrafo = document.querySelectorAll(".questions p")
const answer = document.querySelectorAll(".hide")

questionsImg.forEach((image) => {
    image.setAttribute('data-original-src', image.src);
});


//funções
function hide(index){
     answer[index].classList.toggle("hide");
     answer[index].classList.toggle("resposta") 
}

function replaceImg(e, index){
    const clickImg = e.target
    const originalImg = clickImg.getAttribute("data-original-src");
    const newSrc = "assets/images/icon-minus.svg"
    
    if(clickImg.src === new URL(newSrc, window.location.href).href){
        clickImg.src = originalImg
    } else {
        clickImg.src = newSrc
    }
}

function reaplceParagrafo(index){
    
}

//eventos
questionsImg.forEach((questionsImg, index) =>{
    questionsImg.addEventListener("click",() =>{
        hide(index);
    });
    questionsImg.addEventListener("click", (e) =>{
        replaceImg(e, index)
        
    });
});

questionsParagrafo.forEach((questionsParagrafo, index) =>{
    questionsParagrafo.addEventListener("click",() =>{
        hide(index);
    });

});





// //seleção
// const questionsPara = document.querySelectorAll(".questions p")

// const questionsImg = document.querySelectorAll(".questions img")


// const answers = document.querySelectorAll(".main-questions div")

// //funçao
// function mostrarDiv(questionsPara, index) {
//     answers[index].classList.toggle("hide");
//     answers[index].classList.toggle("resposta")
// }

// function tradeImg(questionsPara, index) {
//     const indice = answers[index].className

//     if (indice === "hide") {
//         questionsImg[index].src = "http://127.0.0.1:5501/assets/images/icon-plus.svg"
//     } else if (indice === "resposta") {
//         questionsImg[index].src = "http://127.0.0.1:5501/assets/images/icon-minus.svg"
//     }
// }

// //evento

// questionsPara.forEach((questionsPara, index) => {
//     questionsPara.addEventListener("click", (e) => {
//         mostrarDiv(questionsPara, index)
//         tradeImg(questionsPara, index)
//     });
// });