//MOUSEOVER FUNCTION
function bigImg(x){
    x.style.height = "450px";
    x.style.width = "450px"; 
}
function smallImg(x){
    x.style.height = "400px";
    x.style.width = "400px"; 
}

//ONLOAD FUNCTION
function load(){
    alert("Welcome to my project page!");
}           

//ONSCROLL FUNCTION
let x = 0; //scroll counter
function scrollCount(){
    document.getElementById("counter").innerHTML = x += 1; 
}