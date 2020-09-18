function slide1() {
    document.getElementById('foto').src = "imagens/frenteg.jpg";
    setTimeout("slide2()", 4000)
}

function slide2() {
    document.getElementById('foto').src = "imagens/frente2.jpg";
    setTimeout("slide3()", 4000)
}

function slide3() {
    document.getElementById('foto').src = "imagens/entradan.jpg";
    setTimeout("slide1()", 4000)
}

function carregar() {
    var imag = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    if (hora >=6 && hora <= 9) {
        imag.src="imagens/nascer-do-sol.jpg"
        document.body.style.background = "#98e130"
    } else if (hora > 9 && hora <= 12) {
        imag.src="imagens/manha.jpg"
        document.body.style.background = "#7bbcdf"
    } else if (hora > 12 && hora <= 17) {
        imag.src="imagens/tarde.jpg"
        document.body.style.background = "#b6c8ea"
    } else if (hora > 17 && hora <= 20) {
        imag.src="imagens/por-do-sol.jpg"
        document.body.style.background = "#edce76"
    } else {
        imag.src="imagens/noite.jpg"
        document.body.style.background = "#3c578c"
    }
}



function somar() {
    var tempo = document.getElementById("tempo");
    var umDia = 24 * 3600 * 1000
    var dataUm = new Date(document.getElementById("checkin").value);
    var dataDois = new Date(document.getElementById("checkout").value);
    var d = (dataDois - dataUm) / umDia
    var sim = (d * 100)
    var cas = (d * 120)
    var fam = (d * 150)
    var sui = (d * 180)
    var radios = document.getElementsByName("opcao");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == "simples") {
                tempo.innerHTML =  `R$:${sim}`
            } else if (radios[i].value == "casal") {
                tempo.innerHTML = `R$:${cas}`
            } else if (radios[i].value == "familia") {
                tempo.innerHTML = `R$:${fam}`
            } else if (radios[i].value == "suite") {
                tempo.innerHTML = `R$:${sui}`
            } 
        }
    }
}
