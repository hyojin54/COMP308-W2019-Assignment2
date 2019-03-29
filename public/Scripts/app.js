/* 
File name: app.js
Student's name: Hyojin Kim
Student's number: 300950009
Date: February 16, 2019
*/

// IIFE -- Immediately Invoked Function Express
(function(){
    function start() {
        console.log(`%c App Started...`, "font-size:20px; color:blue; font-weight:bold;");
    }
    window.addEventListener("load", start);
})();

    // display contact message and redirect home page
    function sendContact() {
        var firstName = document.contactForm.firstName.value;
        var lastName = document.contactForm.lastName.value;
        var contactNumber = document.contactForm.contactNumber.value;
        var email = document.contactForm.email.value;
        var message = document.contactForm.message.value;

        var message = "First name: " + firstName + "\nLast name: " + lastName
                    + "\ncontact Number: " + contactNumber
                    + "\nemail: " + email + "\nmessage: " + message ;

        var confirmMsg = "\n\nDo you want to send message?";

        if(confirm(message + confirmMsg)){
            // redirect home page
            window.location.href="/";
        }else{
            //cancle
        }
    }