function check(){
    
    //initiate all neccessary variables
    let age = document.getElementById("age").value; 
    let email = document.getElementById("email").value;
    let comment = document.getElementById("comment").value; 
    let url = document.getElementById("website").value; 
    let urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/; 
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let alertText = document.getElementById("container-validation"); 
    let text;
    // Conditions to test each input field
    //AGE FIELD
    if(isNaN(age)||age<18||age>100){ // CHECKING AGE
        text = "Please enter age in number from 18 - 100!";
        alertText.innerHTML = text; 
        return false; 
    } else if(!emailPattern.test(email)||email.length > 50){ // CHECKING VALID EMAIL
        text = "Please enter valid email address!";
        alertText.innerHTML = text; 
        return false;         
    } else if(!urlPattern.test(url) || url.length > 50){ // CHECKING VALID URL
        text = "URL is invalid!";
        alertText.innerHTML = text; 
        return false; 
    }else if(comment.length >= 255){ // CHECKING COMMENT
        text = "Please write comment less than 255 characters!";
        alertText.innerHTML = text; 
        return false;     
    } else {
        alert("Form Is Successfully Submitted!"); 
        return true; 
    }
    
    
     
    //SHOW ALERT
    /*function showAlert(message){
        let div = document.getElementById("container-validation");
        let alertText = document.createElement("p");
        alertText.appendChild(document.createTextNode(message));
        div.appendChild(alertText); // append message text in to the div
        //style the div
        document.getElementById("container-validation").style.border = "solid";
        document.getElementById("container-validation").style.borderRadius = "10px";
        document.getElementById("container-validation").style.borderColor = "#55d6aa";
        document.getElementById("container-validation").style.width = "80%";

        // alert text vanishs after 3 seconds
       setTimeout(() => document.getElementById("container-validation").remove(),5000);
    } */
}