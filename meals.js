const circles=document.querySelectorAll('.circle');

circles.forEach(circle=>{
    circle.style.backgroundColor='skyblue';
    circle.style.border='2px light blue solid';
}); // modificare cercuri

const txt=document.getElementById('nig');
txt.style.fontSize='20px'; // modificare dom

//stilizare si adaugare text
document.getElementById('createButton').addEventListener('click', function(){
    const container=document.getElementById('welcome');
    if(container.childElementCount<2){
    const newElement=document.createElement('p');
    newElement.textContent='Don\'t forget to eat your veggies!';
    newElement.style.position='absolute';
    newElement.style.top='35%';
    newElement.style.color='skyblue';
    document.getElementById('welcome').appendChild(newElement);
}
})

//stergem textuls
document.getElementById('deleteButton').addEventListener('click',function(){
    const container=document.getElementById('welcome');
    if(container.childElementCount>1){
        container.removeChild(container.lastChild);
    }
})

//event la tastatura
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        alert('Stop pressing the spacebar!');
    }
});

//hover butoane
document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("createButton");    

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "darkgreen";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#4CAF50";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("deleteButton");    

    button.addEventListener("mouseover", function() {
        button.style.backgroundColor = "darkgreen";
    });

    button.addEventListener("mouseout", function() {
        button.style.backgroundColor = "#4CAF50";
    });
});

//adaugare highlight cu classList
document.addEventListener("DOMContentLoaded", function() {

    const workouts=document.getElementById("meals");

    workouts.addEventListener("click", function() {
        if (workouts.classList.contains("highlight")) {
            workouts.classList.remove("highlight");}
            else{
            workouts.classList.add("highlight");}
    });

});