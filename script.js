function getYear(){
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year1").innerHTML = year;
    document.getElementById("year2").innerHTML = year;
}

function openPortfolio(){
    location.reload();
}
function openAboutMe(){
    var content = document.getElementById("content");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");

    var aboutme = document.getElementById("aboutme");
    content.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    aboutme.style.display = "block";
    closeMobile();
}
function openSkills(){
    var content = document.getElementById("content");
    var aboutme = document.getElementById("aboutme");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");

    var skills = document.getElementById("skills");
    content.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "none";
    aboutme.style.display = "none";
    skills.style.display = "block";
    closeMobile();
}
function openProjects(){
    var content = document.getElementById("content");
    var aboutme = document.getElementById("aboutme");
    var contact = document.getElementById("contact");
    var skills = document.getElementById("skills");

    var projects = document.getElementById("projects");
    content.style.display = "none";
    contact.style.display = "none";
    aboutme.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "block";
    closeMobile();
}
function openContact(){
    var content = document.getElementById("content");
    var aboutme = document.getElementById("aboutme");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");

    var contact = document.getElementById("contact");
    content.style.display = "none";
    aboutme.style.display = "none";
    skills.style.display = "none";
    projects.style.display = "none";
    contact.style.display = "block";
    closeMobile();
}

function openMobile() {
    document.getElementById("mobile").style.width = "100%";
  }
  
function closeMobile() {
    document.getElementById("mobile").style.width = "0%";
}

function openModalProjects(){
    var images = document.getElementsByClassName("projects-image");
    var modal = document.getElementById("projects-modal");
    var modalImg = document.getElementById("image");
    var descText = document.getElementById("desc-image");

    for(var i = 0; i<images.length; i++){ 
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            descText.innerHTML = "<a href='"+this.alt+"' target='_blank'>Kod żródłowy</a>"
        }        
    }
}
function openModalSkills(){
    var images = document.getElementsByClassName("skills-image");
    var modal = document.getElementById("skills-modal");
    var modalImg = document.getElementById("cert");
    var descText = document.getElementById("desc-cert");

    for(var i = 0; i<images.length; i++){ 
        images[i].onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            descText.innerHTML = this.alt;
        }        
    }
}
window.onclick = function(){
    openModalProjects();
    openModalSkills();
}
function closeModalProjects(){
    var modal = document.getElementById("projects-modal");
    modal.style.display = "none";
}
function closeModalSkills(){
    var modal = document.getElementById("skills-modal");
    modal.style.display = "none";
}

