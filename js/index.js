let horas = 0;
let segundos = 60;
let minutos = 9;
let intervalo;
let comecar = document.getElementById("botaoIniciar");
let pausando = document.getElementById("botaoPausar");

function iniciar(){
    comecar.style.display= "none"
    pausando.style.display= "block"
    timer()
    intervalo = setInterval(timer, 1000)
}

function pausar(){
    clearInterval(intervalo)
    comecar.style.display = "block"
    pausando.style.display = "none"

}

function parar(){
    clearInterval(intervalo)
    comecar.style.display = "block"
    pausando.style.display = "none"
    segundos = 59
    minutos = 9
    document.querySelector(".numero").innerText = "00:10:00"
}

function timer(){
    if (minutos <= 0 || segundos == 0){
        clearInterval(intervalo)
        segundos = 0
        minutos = 0
        horas = 0
        document.querySelector(".numero").innerText = "00:10:00"

    }
    segundos += -1 
    if (segundos == 0){
        segundos = 59
        minutos--
    }
    if (minutos <= 0){
        minutos = 9
        horas= 0
        clearInterval(intervalo)

    }
    document.querySelector(".numero").innerText= horas +":0"+ minutos +":" +segundos
}