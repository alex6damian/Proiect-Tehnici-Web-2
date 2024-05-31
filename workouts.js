// afisare text
function displayText() {

    const text = document.getElementById("textInput").value;

    document.getElementById("textDisplay").innerText = 'Welcome, ' + text + '!';
    
}

// modificare textDisplay
document.addEventListener("DOMContentLoaded", function() {

    const txtDisplay=document.getElementById("textDisplay");

    txtDisplay.style.position="absolute";
    txtDisplay.style.top="20%";
    txtDisplay.style.color="white";
    txtDisplay.style.fontSize="40px";
    txtDisplay.style.bold="true";
    txtDisplay.style.left = '50%';
    txtDisplay.style.transform = 'translate(-50%, -50%)';

});

// modificare buton Greet
document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("But");

    button.style.backgroundColor="#4CAF50";
    button.style.border="none";
    button.style.color="white";
    button.style.padding="15px 32px";
    button.style.textAlign="center";
    button.style.textDecoration="none";
    button.style.display="inline-block";
    button.style.fontSize="15px";
    button.style.margin="4px 2px";
    button.style.cursor="pointer";
    button.style.borderRadius="12px";
    button.style.left="11%";
    button.style.top="5.85%";
    button.style.position="absolute";

});

// modificare textbox
document.addEventListener("DOMContentLoaded", function() {
    var textbox = document.getElementById("textInput");

    textbox.style.position="absolute";
    textbox.style.top="6.5%";
    textbox.style.width = "150px";              
    textbox.style.height = "20px";              
    textbox.style.border = "2px solid #000";    
    textbox.style.borderRadius = "5px";         
    textbox.style.padding = "10px";             
    textbox.style.fontSize = "16px";            
    textbox.style.backgroundColor = "#f0f0f0";  

});

// modificare textInput(buton)
document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("But");    

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "darkgreen";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#4CAF50";
    });
});

// modificare text afisat
document.addEventListener("DOMContentLoaded", function() {

    const txtDisplay=document.getElementById("textDisplay");

    txtDisplay.style.fontWeight="bold";

    function randomRGB() {
        var r = Math.floor(Math.random() * 242);
        var g = Math.floor(Math.random() * 243);
        var b = Math.floor(Math.random() * 245);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    function changeColor() {
        const txtDisplay=document.getElementById("textDisplay");
        txtDisplay.style.color = randomRGB();
    }

    setInterval(changeColor, 1000); 
});

document.addEventListener("DOMContentLoaded", function() {

    const workouts=document.getElementById("workouts");

    workouts.addEventListener("click", function() {
        if (workouts.classList.contains("highlight")) {
            workouts.classList.remove("highlight");}
            else{
            workouts.classList.add("highlight");}
    });

});