document.addEventListener("DOMContentLoaded", () => {
  let platforms = {
    github: "GitHub",
    frontendMentor: "Frontend Mentor",
    linkedIn: "LinkedIn",
    twitter: "Twitter",
    instagram: "Instagram",
  };

  let container = document.getElementById("social_media");

  for (let key in platforms) {
    let divPl = document.createElement("div");
    divPl.innerHTML += platforms[key];
    divPl.classList.add("button");
    container.appendChild(divPl);
  }

  
});
