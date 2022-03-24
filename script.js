function unBlur(){
    var img = document.querySelector(".right");
    img.classList.add("noBlur");
    console.log("class added");
}

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function backHome(){
    window.location.href="index.html";
}
function shout(){
    window.alert("Thanks for submitting info!");
}
function toSignUp(){
    window.location.href="signup/";
}