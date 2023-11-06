
window.sr = ScrollReveal({reset:true});
sr.reveal('.container' , {
    duration: 1500, 
    rotate: {
        x:1,
        y:0,
        z:0
    }
} );


function chamar_menu() {
    document.querySelector(".menu").style.right = 0;
}


function fechar_menu() {
    document.querySelector(".menu").style.right = "-50%";
} 
