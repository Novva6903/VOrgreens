const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const genders = document.getElementsByName('gender');
    const message = document.getElementById('message').value;
    const subscribe = document.getElementById('subscribe');

    if(!validateName(name)){
        return;
    }

    if(!validateEmail(email)){
        return;
    }

    if(!validateGender(genders)){
        return;
    }

    if(!validateMessage(message)){
        return;
    }
    
    if(!subscribe.checked){
        alert("You have to subscribe before submitting")
        return;
    }

    alert("Your message has been submitted")
    const contact = {
        name: name,
        email: email,
        message: message
    }
    console.log(contact);
    form.reset();
})

function validateName(name){
    if(name == ""){
        alert("Please input your name!");
        return false;
    }
    if(name.length < 3){
        alert("Name must be at least 3 characters");
        return false;
    }
    return true;
}

function validateEmail(email){
    if(email == ""){
        alert("Please input your email!");
        return false;
    }

    if(email.indexOf("@") == -1){
        alert("Email must contain @");
        return false;
    }

    if(email.startsWith("@")){
        alert("You cannot use \"@\" at the beginning of your email!")
        return false
    }

    if(!email.endsWith(".com") && !email.endsWith(".ac.id")){
        alert("Your email must end with \".com\" or \".ac.id\"")
        return false;
    }
    return true;
}

function validateGender(genders){
    for(gender of genders){
        if(gender.checked){
            return true;
        }
    }
    alert("You have to choose a gender!");
    return false;
}


function validateMessage(message){
    if(message == ""){
        alert("Message must be filled!");
        return false;
    }

    if(message.length < 10){
        alert("Message must contain at least 10 characters");
        return false;
    }
    return true;
}

