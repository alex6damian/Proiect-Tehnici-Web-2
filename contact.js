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
    button.style.fontSize = "12px";
    button.style.margin = "4px 2px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "12px";
    button.style.right = "1%";
    button.style.top = "13.5%";
    button.style.position = "absolute";
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("butondel");
    button.style.backgroundColor = "#4CAF50";
    button.style.border = "none";
    button.style.color = "white";
    button.style.padding = "10px 10px";
    button.style.textAlign = "center";
    button.style.textDecoration = "none";
    button.style.display = "inline-block";
    button.style.fontSize = "12px";
    button.style.margin = "4px 2px";
    button.style.cursor = "pointer";
    button.style.borderRadius = "12px";
    button.style.right = "7%";
    button.style.bottom = "2%";
    button.style.position = "absolute";
});


// stilizare textbox
document.addEventListener("DOMContentLoaded", function() {
    var textbox = document.getElementById("review-input");
    textbox.style.position = "absolute";
    textbox.style.top = "14%";
    textbox.style.right = "6.3%";
    textbox.style.width = "200px";
    textbox.style.height = "10px";
    textbox.style.border = "2px solid #000";
    textbox.style.borderRadius = "5px";
    textbox.style.padding = "10px";
    textbox.style.fontSize = "16px";
    textbox.style.backgroundColor = "#f0f0f0";
});

function deleteReview() {
    localStorage.clear();
    renderReview();
}

// creare lista de review-uri
function getReview() {
    const reviews = localStorage.getItem('reviews');
    return reviews ? JSON.parse(reviews) : [];
}

// salvare review-uri
function saveReview(reviews) {
    localStorage.setItem('reviews', JSON.stringify(reviews));
    alert('Your review has been successfully added!');
}

// adaugare review
function addReview() {
    const reviewInput = document.getElementById('review-input');
    const reviewName = reviewInput.value.trim();
    if (reviewName) {
        const reviews = getReview();
        reviews.push(reviewName);
        saveReview(reviews);
        reviewInput.value = '';
        renderReview();
    }
}

// randare review
function renderReview() {
    const reviews = getReview();
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    reviews.forEach((review, index) => {
        const li = document.createElement('li');
        li.textContent = review;
        reviewList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderReview();

    const button = document.getElementById('buton');
    button.addEventListener('click', addReview);

});

document.addEventListener("DOMContentLoaded", function() {

    const lista=document.getElementById("review-list");

    lista.style.position="absolute";
    lista.style.left="80%";
    lista.style.right="1%";
    lista.style.top="18%";
    lista.style.fontSize="15px";
    lista.style.fontWeight="bold";
    lista.style.boxSizing="border-box";
    lista.style.color="white";

});


function schimbaCuloare(){
    const element=document.getElementById("review");

    const culoareRandom="#" + Math.floor(Math.random() * 16777215).toString(16);

    element.style.borderColor=culoareRandom;

}

setInterval(schimbaCuloare, 2500);

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
    
    const button = document.getElementById("butondel");    

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "darkgreen";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#4CAF50";
    });
});

document.addEventListener("DOMContentLoaded", function() {

    const workouts=document.getElementById("contact");

    workouts.addEventListener("click", function() {
        if (workouts.classList.contains("highlight")) {
            workouts.classList.remove("highlight");}
            else{
            workouts.classList.add("highlight");}
    });

});