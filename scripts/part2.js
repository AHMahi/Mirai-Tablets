/**
* Author: Abdul Hamid Mahi ; ID: 103521410
* Target: enquire.html
* purpose: Assignment2
* Created: 4/22/2021
* Last updated: 4/26/2021
* Credits: None
*/

"use strict";

function validate(){ 
	
	var errMsg    = "";   // empty variable that stores the error message string to show for later
	var result    = true; //by default assumes result is true that there is no error in form info submission
	var firstname = document.getElementById("first_name").value;
	var lastname = document.getElementById("last_name").value;
	var email = document.getElementById("email").value;
	var street_address = document.getElementById("street_address").value;
	var suburb = document.getElementById("suburb").value;
	var state = document.getElementById("state").value;
	var postcode = document.getElementById("postcode").value;
	var quantity = document.getElementById("quantity").value;
	
	
	if (!firstname.match(/^[a-zA-Z]+$/)){
		
		errMsg = errMsg + "Your first name must only contain Alphabetic characters\n";
		result = false; //if this condition is met; that is if that pattern is not followed while writing firstname; result will be false and info will not be sent to server
		
	}
	
	if (!lastname.match(/^[a-zA-Z]+$/)){
		errMsg = errMsg + "Your last name must only contain Alphabetic characters\n";
		result = false; //if this condition is met; that is if that pattern is not followed while writing firstname; result will be false and info will not be sent to server
		
	}
	
	if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
		errMsg = errMsg + "Enter a proper email address\n";
		result = false; //if this condition is met; that is if that pattern is not followed while writing firstname; result will be false and info will not be sent to server
		
	}
	
	if (!street_address.match(/^\d{1,4}[a-zA-Z\-\,]+$/)){//regex for Street number, up to 4 digit spots, optional apartment letter
		errMsg = errMsg + "Enter a proper street address with upto 4 digit spots for example : 1234Baker-street\n";
		result = false; //if this condition is met; that is if that pattern is not followed while writing firstname; result will be false and info will not be sent to server
		
	}
	
	if (!suburb.match(/^[a-zA-Z\-]+$/)){
		errMsg = errMsg + "Your suburb name must only contain Alphabetic characters or hyphens\n";
		result = false; //if this condition is met; that is if that pattern is not followed while writing firstname; result will be false and info will not be sent to server
		
	}
	
	if (state.value == "none"){
		
		errMsg = errMsg + "You must select a state\n";
		result = false;
        		
		
	}
	
	if (!postcode.match(/^\d{1,4}+$/)){
		errMsg = errMsg + "Your postcode must only contain digits upto 4 units\n";
		result = false; //if this condition is met; that is if that pattern is not followed while writing firstname; result will be false and info will not be sent to server
		
	}
	
	if (document.getElementById("company").value == "none"){
		
		errMsg = errMsg + "You must select a state\n";
		result = false;
        		
		
	}
	
	if (document.getElementById("product_code").value == "none"){
		
		errMsg = errMsg + "You must select a state\n";
		result = false;
        		
		
	}
	
	if (quantity.value < 0){
		
		errMsg = errMsg + "You must add a positive value\n";
		result = false;
        		
		
	}
	
	var postcode = document.getElementById("postcode").value;
    var state = document.getElementById("state").options[document.getElementById("state").selectedIndex].text;

    var regex;
    
    switch (state) {
    case "Please Select":
        return false;
    case "VIC":
        regex = new RegExp(/(3|8)\d+/);
        break;
     case "NSW":
        regex = new RegExp(/(1|2)\d+/);
        break;
     case "QLD":
        regex = new RegExp(/(4|9)\d+/);
        break;
     case "NT":
        regex = new RegExp(/0\d+/);
        break;
     case "WA":
        regex = new RegExp(/6\d+/);
        break;
     case "SA":
        regex = new RegExp(/5\d+/);
        break;
     case "TAS":
        regex = new RegExp(/7\d+/);
        break;
     case "ACT":
        regex = new RegExp(/0\d+/);
        break;
 }
 
 if(!postcode.match(regex)){
   errMsg = errMsg + "State and postcode do not match\n";
   result = false;
 }
 
 
 if (errMsg!="")
	alert(errMsg);

    return result;
	
	function storeInfo(firstname, lastname, email, street_address, suburb, state, postcode, quantity){
		
		sessionStorage.firstname = firstname;
		sessionStorage.lastname = lastname;
		sessionStorage.email = email;
		sessionStorage.street_address = street_address;
		sessionStorage.suburb = suburb;
		sessionStorage.state = state;
		sessionStorage.postcode = postcode;
		sessionStorage.company = document.getElementById("company").value;
		sessionStorage.product_code = document.getElementById("product_code").value;
		sessionStorage.quantity = quantity;
		
		alert ("Name stored: " + sessionStorage.firstname);
	}
	
	if (result){
		
		storeInfo(firstname, lastname, email, street_address, suburb, state, postcode, quantity);
		
		alert("working");
	}
	

}



function init(){
	
	var enquiry_form = document.getElementById("payment");
	enquiry_form.onsubmit = validate;
	
	
}


window.onload = init;