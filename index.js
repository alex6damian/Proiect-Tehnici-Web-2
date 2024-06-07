function afiseazaOra() {
    const dataCurenta = new Date();
    const ore = dataCurenta.getHours();
    const minute = dataCurenta.getMinutes();
    const secunde = dataCurenta.getSeconds();

    const ora = (ore < 10 ? "0" : "") + ore;
    const min = (minute < 10 ? "0" : "") + minute;
    const sec = (secunde < 10 ? "0" : "") + secunde;

    const oraCurenta = ora + ":" + min + ":" + sec;
    document.getElementById("ora").innerHTML = oraCurenta;
}

document.getElementById("ora").style.color = "white";

// apel functie afisOra
document.addEventListener("DOMContentLoaded", afiseazaOra);

// stilizare box de ora
document.addEventListener("DOMContentLoaded", function() {

    const oraCurenta=document.getElementById("oraCurenta");
    oraCurenta.style.color="white";
    oraCurenta.style.fontSize="20px";
    oraCurenta.style.fontWeight="bold";
    oraCurenta.style.position="absolute";
    oraCurenta.style.left="2%";

    const dataCurenta=document.getElementById("ora");
    dataCurenta.style.color="white";
    dataCurenta.style.fontSize="15px";
    dataCurenta.style.fontWeight="bold";
    dataCurenta.style.position="absolute";
    dataCurenta.style.left="3.5%";
    dataCurenta.style.top="6%";

});


// update la o secudnda
setInterval(afiseazaOra, 1000);

// highlight titlu
document.addEventListener("DOMContentLoaded", function() {

    const workouts=document.getElementById("gymhub");

    workouts.addEventListener("click", function() {
        if (workouts.classList.contains("highlight")) {
            workouts.classList.remove("highlight");}
            else{
            workouts.classList.add("highlight");}
    });

});

// oprire event
document.getElementById("gantera").addEventListener("click", function(event) {
    event.stopPropagation();
});

// stilizare ora folosind getComputedStyle
document.addEventListener("DOMContentLoaded", function() {

    const element=document.getElementById("eu");
    const proprietati=window.getComputedStyle(element);
    const ora=document.getElementById("ora");
    ora.style.color=proprietati.color;
    ora.style.animation=proprietati.animation;
    ora.style.animation=window.getComputedStyle(document.getElementById("txt")).animation;
    const formular=document.getElementById("formular");
    formular.style.animation=window.getComputedStyle(document.getElementById("txt")).animation;
});

// stilizare formular
document.addEventListener("DOMContentLoaded", function() {
    const formular=document.getElementById("formular");
    formular.style.position="absolute";
    formular.style.top="45%";
    formular.style.left="2%";
    formular.style.color="white";
    formular.style.fontWeight="bold";
    formular.style.fontSize="15px";
});

// stilizare buton
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("buton");

    button.style.backgroundColor = "#4CAF50";
    button.style.border = "none";
    button.style.color = "white";
    button.style.padding = "10px 10px";
    button.style.textAlign = "center";
    button.style.textDecoration = "none";
    button.style.display = "inline-block";
    button.style.fontSize = "10px";
    button.style.margin = "4px 2px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "12px";
});

document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("buton");    

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "darkgreen";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#4CAF50";
    });
}); 

document.addEventListener("DOMContentLoaded", function() {
    var textbox = document.getElementById("email");
    textbox.style.width = "200px";
    textbox.style.height = "10px";
    textbox.style.border = "2px solid #000";
    textbox.style.borderRadius = "5px";
    textbox.style.padding = "10px";
    textbox.style.fontSize = "16px";
    textbox.style.backgroundColor = "#f0f0f0";
});

// regex formular mail
document.getElementById("formular").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    let mesajeEroare = '';


    if (!emailRegex.test(email)) {
      mesajeEroare += 'Invalid email adress.\n';
    }


    if (mesajeEroare) {
      alert(mesajeEroare);
    } else {
      alert('Thanks for subscribing!');
    }
  });