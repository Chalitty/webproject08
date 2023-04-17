function validation() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var gender = document.getElementById("gender");

    var text;

    error_message.style.padding = "8px";

    if(firstName.length <2){
    	text = "Please Enter Valid First Name";
    	error_message.innerHTML = text;
    	return false;
    }
      if(lastName.length <2){
    	text = "Please Enter Valid Last Name";
    	error_message.innerHTML = text;
    	return false;
    }
     if(email.indexOf("@") == -1 || email.length < 6){
     	text = "Please Enter Valid Email";
    	error_message.innerHTML = text;
    	return false;

     }
     if(password.length <8){
    	text = "Please Enter Valid Password at least 8 character";
    	error_message.innerHTML = text;
    	return false;
    }
       if(confirmPassword.length <8){
    	text = "Please Enter Confirm Valid Password";
    	error_message.innerHTML = text;
    	return false;
 
    	
    }
    
    alert("Your Account Submitted Successfully!")
    return true;

}