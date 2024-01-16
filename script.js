const toggleButton = document.querySelector('.toggle-dark-mode');
const body = document.querySelector('body');
toggleButton.addEventListener("click", () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        document.body.style.backgroundColor = "#8d8741";
        document.body.style.color = "black";
        toggleButton.textContent = "Toggle Dark Mode";
    } else {
        body.classList.add('dark-mode');
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggleButton.textContent = "Default color";
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const modal = document.getElementById('thanks-modal');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirm = document.getElementById('confirm').value.trim();
        const email = document.getElementById('email').value.trim();

        // Check if any input is empty
        if (name === '' || username === '' || password === '' || confirm === '' || email === '') {
            alert('Please fill in all fields before submitting.');
            if (name === '') {
                document.getElementById('name').style.border = '2px solid red';
            }
            if (username === '') {
                document.getElementById('username').style.border = '2px solid red';
            }
            if (password === '') {
                document.getElementById('password').style.border = '2px solid red';
            }
            if (confirm === '') {
                document.getElementById('confirm').style.border = '2px solid red';
            }
            if (email === '') {
                document.getElementById('email').style.border = '2px solid red';
            }
            return; // Do not proceed with the modal
        }
        if(password!==confirm){
            alert('Passwords must match.');
            document.getElementById('password').style.border = '2px solid red';
            document.getElementById('confirm').style.border = '2px solid red';
            return;
        }
function validateEmail(email){
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
if(!validateEmail(email)){
    alert("please enter valid email");
    document.getElementById('email').style.border='2px solid red';
    return;
}
        // Display the modal 
        modal.style.display = 'flex';
        // Hide the modal after 4 seconds
        setTimeout(function () {
            modal.style.display = 'none';
        }, 4000);
    });
});

// use of close button in the modal
const closeButton = document.getElementById('closeButton');
const modal = document.getElementById('thanks-modal');
closeButton.addEventListener("click", () => {
    modal.style.display = 'none';
});

