const grid = document.getElementById("grid");
const tileTpl = document.getElementById("tile-template");

async function loadCards() {
  grid.innerHTML = "Lade Karten...";
  try {
    grid.innerHTML = "";

    for (let i = 1; i <= 264; i++) {
      const imgUrl = `https://api.swu-db.com/cards/sec/${i}?format=image`;

      const node = tileTpl.content.cloneNode(true);

      node.querySelector("img").src = imgUrl;

      grid.appendChild(node);
    }
  } catch (err) {
    grid.textContent = "Fehler beim Laden der Karten.";
    console.error(err);
  }
}

loadCards();
