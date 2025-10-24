
function welcomespeech() {
    let name = prompt("Please enter your name:");

    document.getElementById("welcome-message").innerHTML = `HI ${name}, `;

}

function validateForm() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    if (!name === ""|| email === ""|| message === "") {
        alert("Please fill in all fields.");
    } else {
        alert(`Thank you! ${name}, your message has been sent successfully!`);
    }
}