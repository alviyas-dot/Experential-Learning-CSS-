emailjs.init("YOUR_PUBLIC_KEY");

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )

    .then(function(){

        alert("Message Sent Successfully!");
        form.reset();

    })

    .catch(function(error){

        alert("Failed To Send Message");
        console.log(error);

    });

});




const text = [
    "Graphic Designer",
    "Logo Creator",
    "Creative Artist",
    "Social Media Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type, 1000);

    }

    else{

        setTimeout(type, 120);

    }

})();





window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#111122";

    }

    else{

        navbar.style.background = "rgba(0,0,0,0.4)";

    }

});