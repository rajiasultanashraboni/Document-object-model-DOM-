const placesList = document.getElementById("places");
const li = document.createElement("li");
li.innerText = "gurahsal";
placesList.appendChild(li);

const mainContainer = document.getElementById("main-container");
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "this is the food list";
section.appendChild(h1);

const ul = document.createElement("ul");

const li1 = document.createElement("li");
li1.innerText = "biriyani";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "borhani";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "jorda";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// another option00000000000
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
    <h1>this is the section 0f dresses</h1>
    <ul>
        <li>tshirt </li>
        <li>tops</li>
        <li>pant</li>
        <li>kurti</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);
