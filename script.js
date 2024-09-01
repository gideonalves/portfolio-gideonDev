const html = document.querySelector("html");
const btnTheme = document.querySelector(".js-button-theme");
const btnsProjects = document.querySelectorAll(".projects__button");
const projects = document.querySelectorAll(".js-projects");
const warningProject = document.querySelector(".js-project-warning");

const descriptionsProjects = [
    " A Rocketseat é uma escola de programação e todos os projeto aqui foram desenvolvidos em eventos e desafio como o #boraCodar ",
    "ONE é um programa de capacitação na área de TI da Oracle + Alura e todos os projeto aqui foram desenvolvidos na Turma 5 do ONE",
    "Aqui estão todos os projeto que eu fiz sozinho com os conhecimetos adquiridos em cursos online, eventos, desafios e estudo autodidata",
];

function toggleTheme() {
    html.classList.toggle("theme-dark");

    btnTheme.src = "./assets/image/sun.svg";

    if(html.classList.contains("theme-dark")) {
        btnTheme.src = "./assets/image/moon.svg";
    } 
}


function showProject(index) {
    
    for(project of projects) {
        project.classList.remove("is-visible");
    }
    
    projects[index].classList.add("is-visible");
    warningProject.textContent = descriptionsProjects[index];
}

function selectButton(index) {

    for(button of btnsProjects) {
        button.classList.remove("is-selected");
    }

    btnsProjects[index].classList.add("is-selected");
    showProject(index);
}

btnsProjects.forEach((button, index ) => {
    button.addEventListener("click", () => selectButton(index));
})

btnTheme.addEventListener("click", toggleTheme);

document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});