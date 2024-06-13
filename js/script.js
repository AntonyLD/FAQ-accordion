
//declaração
const questions = document.querySelectorAll(".questions img")
const answer = document.querySelectorAll(".hide")

questions.forEach((image) => {
    image.setAttribute('data-original-src', image.src);
});


//funções
function hide(index){
     answer[index].classList.toggle("hide");
     answer[index].classList.toggle("resposta") 
}

function replace(e, index){
    const clickImg = e.target
    const repleced = clickImg.getAttribute("data-original-src");
    const newSrc = "assets/images/icon-minus.svg"
    
    if(clickImg.src === new URL(newSrc, window.location.href).href){
        clickImg.src = repleced
    } else {
        clickImg.src = newSrc
    }
}

//eventos
questions.forEach((questions, index) =>{
    questions.addEventListener("click",() =>{
        hide(index);
    });
});

questions.forEach((questions, index) =>{
    questions.addEventListener("click", (e) =>{
        replace(e, index)
        
    })
});



