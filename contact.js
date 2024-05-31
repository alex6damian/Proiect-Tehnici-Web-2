  localStorage.clear();
  // stilizare text afisat
  document.addEventListener("DOMContentLoaded", function() {
    const txtDisplay = document.getElementById("review");
    txtDisplay.style.position = "absolute";
    txtDisplay.style.top = "5%";
    txtDisplay.style.right = "3.7%";
    txtDisplay.style.fontSize = "25px";
    txtDisplay.style.color = "white";
    txtDisplay.style.fontWeight = "bold";
    txtDisplay.style.border = "2px solid yellow";
    txtDisplay.style.padding = "4px 10px";
});

function schimbaCuloare(){

    const element=document.getElementById("review");

    const culoareRandom="#" + Math.floor(Math.random() * 16777215).toString(16);

    element.style.borderColor=culoareRandom;

}

setInterval(schimbaCuloare, 2500);


document.addEventListener("DOMContentLoaded", function() {

    const workouts=document.getElementById("contact");

    workouts.addEventListener("click", function() {
        if (workouts.classList.contains("highlight")) {
            workouts.classList.remove("highlight");}
            else{
            workouts.classList.add("highlight");}
    });

});