const sections = document.querySelectorAll("section");
for (const section of sections) {
  //   console.log(section);
  section.style.border = "2px solid green";
  section.style.margin = "10px";
  section.style.padding = "10px";
  section.style.borderRadius = "5px";
  section.style.backgroundColor = "gray";
  section.style.color = "white";
}

const specific = document.getElementById("specific");
specific.style.backgroundColor = "orange";
