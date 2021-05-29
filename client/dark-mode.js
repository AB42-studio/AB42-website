const temaBtn = document.querySelector('.tema-btn');
const darkBtn = document.getElementById('dark-btn');
const  lightBtn = document.getElementById('light-btn');
const background = document.querySelector('body');
const logo = document.getElementById('logo');
let darkMode = false;

temaBtn.addEventListener( 'click', () =>{
    if(darkMode == false){
        darkBtn.style.display = "none";
        lightBtn.style.display = "flex";
        background.style.background = "var(--cor-bg-dark)";
        background.style.color = "var(--cor-font-dark)";
        logo.src = "./img/logotipoWG.svg";
        darkMode = true;
    }
    else{
        darkBtn.style.display = "block";
        lightBtn.style.display = "none";
        background.style.background =  "var(--cor-bg-principal)";
        background.style.color = "var(--cor-font)";
        logo.src = "./img/logotipoBG.svg";
        darkMode = false;
    }
   
})

    



