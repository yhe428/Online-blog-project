
window.addEventListener("load", function() {
    let pathname = window.location.pathname;

    if(pathname == '/newAccount'){

        const emailAddress = document.querySelector("#email");
        const submitButton = document.querySelector("#submit-account");

        emailAddress.addEventListener("input", (event) => {
            
            if (emailAddress.validity.valueMissing) {
                emailAddress.setCustomValidity("You need to enter an email address");
            }

            else if (emailAddress.validity.typeMismatch) {
                emailAddress.setCustomValidity("Please enter a valid email address");
            }

            else if (emailAddress.validity.tooShort) {
                emailAddress.setCustomValidity("Please enter an email address with at least 8 characters");
            }

            else {
                emailAddress.setCustomValidity("");
            }
        });    
                

        const password = document.querySelector("#txtPassword");
        
        password.addEventListener("input", (event) => {


        if (password.validity.tooShort) {
            password.setCustomValidity("Please enter a password with at least 8 characters");
        }

        else if (password.validity.patternMismatch) {
            password.setCustomValidity("Please ensure your password contains the required characters");
        }

        else {
            password.setCustomValidity("");
        }

    });

    const phone = document.querySelector("#phone");

    phone.addEventListener("input", (event) => {

        if (phone.validity.patternMismatch) {
            phone.setCustomValidity("Please enter your phone number in the required format");
        }

        else {
            phone.setCustomValidity("");
        }
    })
        
    
    }
    
});