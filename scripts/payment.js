/**
* Author: Abdul Hamid Mahi ; ID: 103521410
* Target: payment.html
* purpose: Assignment2
* Created: 4/22/2021
* Last updated: 4/26/2021
* Credits: None
*/
"use strict";
function validate(){
	
	var errMsg = "";								/* stores the error message */
	var result = true;								/* assumes no errors */


	return result;    //if false the information will not be sent to the server
}


function getInfo(){
	var cost = 0;
	if(sessionStorage.firstname != undefined){    //if sessionStorage for username is not empty
		//confirmation text
		document.getElementById("confirm_name").textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
		document.getElementById("confirm_email").textContent =sessionStorage.email;
		document.getElementById("confirm_address").textContent = sessionStorage.street_address;
		document.getElementById("confirm_suburb").textContent = sessionStorage.suburb;
		document.getElementById("confirm_state").textContent = sessionStorage.state;
		document.getElementById("confirm_postcode").textContent = sessionStorage.postcode;
		document.getElementById("confirm_company").textContent = sessionStorage.company;
		document.getElementById("confirm_product_code").textContent = sessionStorage.product_code;
		document.getElementById("quantity").textContent = sessionStorage.quantity;
		
		
		document.getElementById("firstname").value = sessionStorage.firstname;
		document.getElementById("lastname").value = sessionStorage.lastname;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("address").value = sessionStorage.street_address;
		document.getElementById("state").value = sessionStorage.state;
		document.getElementById("postcode").value = sessionStorage.postcode;
		document.getElementById("company").value = sessionStorage.company;
		document.getElementById("product_code").value = sessionStorage.product_code;
		document.getElementById("quantity").value = sessionStorage.quantity;
		
	}
}	
function cancelPayment(){
	
	window.location = "enquire.html";// takes back to previous page;
}


function init() {
	
	var payment = document.getElementById("payment");// link the variable to the HTML element
	payment.onsubmit = validate;          /* assigns functions to corresponding events */
	window.onload = getInfo();
	var cancel = document.getElementById("cancelButton");// listener of cancelBooking function
	cancel.onclick = cancelPayment;
	
	
 }

window.onload = init;
