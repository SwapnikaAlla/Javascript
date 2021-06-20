function validate (username,password){
    if(username == "",username != password,password.indexOf(username == -1)){
        console.log("correct");
    }
    else{
        console.log("enter the username again");
    }
    if(password.length >= 8){
        console.log("good strength");
        

    }
    else{
        console.log("cannot accept the password");
    }
}