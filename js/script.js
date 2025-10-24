function welcomespeech() {
    let name = prompt("Please enter your name:");

    document.getElementById("welcome-message").innerText = 'HI ${name}, ';

}