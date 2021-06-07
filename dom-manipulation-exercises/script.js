const container = document.querySelector("#container");

const content_p = document.createElement('p');
content_p.style.color = "red";
content_p.textContent = "Hey I'm red!";

const content_h3 = document.createElement('h3');
content_h3.style.color = "blue";
content_h3.textContent = "Hey I'm blue!";

const content_div = document.createElement('div');
content_div.style.border = "black solid";
content_div.style.backgroundColor = "pink";

const content_h1_div = document.createElement('h1');
content_h1_div.textContent = "I'm in a div!";

const content_p_div = document.createElement('p');
content_p_div.textContent = "Me too!";

container.appendChild(content_p);
container.appendChild(content_h3);

content_div.appendChild(content_h1_div);
content_div.appendChild(content_p_div);
container.appendChild(content_div);