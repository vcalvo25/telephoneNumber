const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const hideCon = document.querySelector(".hide");

checkBtn.addEventListener("click", checkPhoneNumber);

checkPhoneNumber() {
    let phoneNumber = userInput.value;
    if (phoneNumber == "") {
        output.innerHTML = 'Please provide a phone number.';
        output.className = "alert";
        hideCon.style.display = "block";
    } else {
        const result = validateUSNumber(phoneNumber);
        hideCon.style.display = "block";
        output.innerHTML = result;
        output.className = "output-container";
    }

}

const validateUSNumber = (phoneNumber) => {
 
}