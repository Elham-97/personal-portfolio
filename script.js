alert("JavaScript Connected!");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
const text =
"Software Engineering Enthusiast | Full-Stack MERN Developer in Training";

let index = 0;

function typeWriter() {

    if(index < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }

}

typeWriter();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});