let passwordCreatetxtBox = document.getElementById("passwordCreatetxtBox");
let usernameCreatetxtBox = document.getElementById("usernameCreatetxtBox");

usernameCreatetxtBox.addEventListener("focus", function(){
    usernameCreatetxtBox.style.backgroundColor ="lightblue";
    });
    usernameCreatetxtBox.addEventListener("blur", function(){
        usernameCreatetxtBox.style.backgroundColor ="white";
        });
passwordCreatetxtBox.addEventListener("focus", function(){
    passwordCreatetxtBox.style.backgroundColor ="lightblue";
    });
    passwordCreatetxtBox.addEventListener("blur", function(){
        passwordCreatetxtBox.style.backgroundColor ="white";
        });

    $("#btnCreate").on("click",function(){
        passwordCreatetxtBox.value;
        usernameCreatetxtBox.value;
        if(passwordCreatetxtBox.value.length ==0 && usernameCreatetxtBox.value.length ==0){
            alert("Please fill in the required fields");
        }
        else{
        alert("Account Created for " + usernameCreatetxtBox.value);
        }
    });
    
    $("#dropdown_branches").addEventListener("change", function(){
        $("#dropdown_branches").style.backgroundColor = "lightblue";
    });