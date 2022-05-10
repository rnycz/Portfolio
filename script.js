const getYear = () =>{
    const date = new Date();
    const year = date.getFullYear();
    const yearArray = document.querySelectorAll(".year");
    for(const el of yearArray){
        el.innerHTML = year;
    }
}
getYear();
  
const closeMobile = () =>{
    document.querySelector("#mobile").style.width = "0%";
}

document.querySelector("#close-mobile").addEventListener("click", () =>{
    closeMobile();
});

document.querySelector("#open-mobile").addEventListener("click", () =>{
    document.querySelector("#mobile").style.width = "100%";
});

document.querySelector("#openPortfolio").addEventListener("click", () =>{
    location.reload();
});
document.querySelector("#openPortfolio-Mobile").addEventListener("click", () =>{
    location.reload();
});

const content = document.getElementById("content");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const aboutme = document.getElementById("aboutme");
const divArray = [content, skills, projects, contact, aboutme];

const navElement = document.querySelectorAll(".nav-element");
for(const el of navElement || navElementMobile){
    el.addEventListener("click", () =>{
        for(const div of divArray){
            div.style.display = "none";
            if(el.id.substring(4).toLowerCase() === div.id){
                div.style.display = "block";
            }
        }
        closeMobile();
    });
}

const navElementMobile = document.querySelectorAll(".nav-element-mobile");
for(const el of navElementMobile){
    el.addEventListener("click", () =>{
        const position = el.id.indexOf("-");
        for(const div of divArray){
            div.style.display = "none";
            if(el.id.substring(4, position).toLowerCase() === div.id){
                div.style.display = "block";
            }
        }
        closeMobile();
    });
}

const projectsImages = document.querySelectorAll(".projects-image");
const projectsModal = document.querySelector("#projects-modal");
const projectsModalImg = document.querySelector("#image");
const projectsDescText = document.querySelector("#desc-image");
for(const el of projectsImages){
    el.addEventListener("click", () =>{
        projectsModal.style.display = "block";
        projectsModalImg.src = el.src;
        projectsDescText.innerHTML = `<a href='${el.alt}' target='_blank'>Kod żródłowy</a>`; 
    });
}

const skillsImages = document.querySelectorAll(".skills-image");
const skillsModal = document.querySelector("#skills-modal");
const skillsModalImg = document.querySelector("#cert");
const skillsDescText = document.querySelector("#desc-cert");
for(const el of skillsImages){
    el.addEventListener("click", () =>{
        skillsModal.style.display = "block";
        skillsModalImg.src = el.src;
        skillsDescText.innerHTML = el.alt;
    });
}

document.querySelector("#close-modal-projects").addEventListener("click", () =>{
    document.querySelector("#projects-modal").style.display = "none";
});

document.querySelector("#close-modal-skills").addEventListener("click", () =>{
    document.querySelector("#skills-modal").style.display = "none";
});