document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("buton");
    button.style.backgroundColor = "#4CAF50";
    button.style.border = "none";
    button.style.color = "white";
    button.style.padding = "15px 15px";
    button.style.textAlign = "center";
    button.style.textDecoration = "none";
    button.style.display = "inline-block";
    button.style.fontSize = "25px";
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
    var textbox = document.getElementById("username");
    textbox.style.width = "300px";
    textbox.style.height = "35px";
    textbox.style.border = "2px solid #000";
    textbox.style.borderRadius = "5px";
    textbox.style.padding = "10px";
    textbox.style.fontSize = "16px";
    textbox.style.backgroundColor = "#f0f0f0";
});


document.addEventListener("DOMContentLoaded", function() {

    var textbox = document.getElementById("password");
    textbox.style.width = "200px";
    textbox.style.height = "35px";
    textbox.style.border = "2px solid #000";
    textbox.style.borderRadius = "5px";
    textbox.style.padding = "10px";
    textbox.style.fontSize = "16px";
    textbox.style.backgroundColor = "#f0f0f0";

});


document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    console.log("Formularul a fost trimis");

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        password: password
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert('Account created!');
        setTimeout(function () {
            window.location.href = 'reviews.html';
        }, 500);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});


document.addEventListener("DOMContentLoaded", function() {

    const txt= document.getElementById("titlu");
    txt.classList.add("centered-text");

});
