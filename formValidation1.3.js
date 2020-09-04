function check(){
    let age = document.getElementById("age").value; 
    let email = document.getElementById("email").value;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    let url = document.getElementById("website").value; 
    let urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
    let comment = document.getElementById("comment").value; 
    let formValidation = document.getElementById("container-validation").value;
    let text;

    if(isNaN(age)||age<18|age>100){
        text = "Please enter age in number from 18-100!"
        formValidation.innerHTML = text;
        return false;
    }
    if(!emailPattern.test(email)||email.length > 50){
        text = "Please provide a valid email address!"
        formValidation.innerHTML = text;
        return false;

    }
    if(!urlPattern.test(url)||url.length > 50){
        text = "Please provide a valid URL!"
        formValidation.innerHTML = text;
        return false;
    }
    if(comment.length > 255){
        text = "Comment cannot exceed 255 characters!"
        formValidation.innerHTML = text;
        return false;
    }
    alert("Form Is Successfully Submitted!");
    return true; 
}