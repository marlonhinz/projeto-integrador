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

var tempo = document.getElementById('tempo');
document.getElementById("somar").onclick = function () {
    var umDia = 24 * 3600 * 1000
    var dataUm = new Date(document.getElementById("checkin").value);
    var dataDois = new Date(document.getElementById("checkout").value);
    var d = (dataDois - dataUm) / umDia
    var sim = (d * 100)
    var cas = (d * 120)
    var sArVag = sAr + (d * 10)
    var cArVag = sAr + (d * 30)
    var sArGar = sAr + (d * 40)
    var cArGar = sAr + (d * 50)
    var radios = document.getElementsByName("opcao");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == "simples") {
                tempo.innerHTML = `${sim}`
            } else if (radios[i].value == "casal") {
                tempo.innerHTML = `${cas}`
            } else if (radios[i].value == "familia") {
                tempo.innerHTML = `${fam}`
            } else if (radios[i].value == "suite") {
                tempo.innerHTML = `${sui}`
            } 
        }
    }
}
