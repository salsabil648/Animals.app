fetch("animals.json")
.then(r => r.json())
.then(data => {
  const container = document.getElementById("cards");

  data.forEach(animal => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = animal.image;

    const title = document.createElement("h3");
    title.innerText = animal.name;

    const audio = document.createElement("audio");
    audio.src = animal.sound;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(audio);

    card.onclick = () => audio.play();

    container.appendChild(card);
  });
});