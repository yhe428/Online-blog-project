window.addEventListener("load", function() {
    let pathname = window.location.pathname;

    if(pathname == '/newAccount'){
        const originalPasswordInput = document.querySelector("#txtPassword");
        const confirmPasswordInput = document.querySelector("#confirmPassword");
        const submitButton = document.querySelector("#submit-account");
        const remindMessage = document.querySelector("#remind");

        function checkPasswordsMatch() {
            const originalPassword = originalPasswordInput.value;
            const confirmPassword = confirmPasswordInput.value;
            
            if(confirmPassword){
                if (originalPassword && confirmPassword && originalPassword === confirmPassword) {
                remindMessage.innerHTML = "";
                submitButton.disabled = false;
                } else {
                remindMessage.innerHTML = "<span style='color:red'>passwords do not match, please type again</span>";
                submitButton.disabled = true;
                }
            }else{
                remindMessage.innerHTML = "";
            }
            
        }
        originalPasswordInput.addEventListener("input", checkPasswordsMatch);
        confirmPasswordInput.addEventListener("input", checkPasswordsMatch);
        
    }
});