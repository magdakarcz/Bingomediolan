
const tasks = [
  "Ktoś w przesadnie drogich butach", "Street art z pizzą", "Para całująca się przy Duomo",
  "Pies w wózku dziecięcym", "Pizza w trudnej relacji z turystą", "Turysta z 3 torbami",
  "Selfie z rzeźbą", "Gołąb na głowie posągu", "Starszy pan tańczący", "Mini Cooper z modną naklejką",
  "Skuter z psem", "Moda vs. remont", "Pies w okularach", "Influencer przy Duomo",
  "Turysta z przewodnikiem", "Espresso przez słomkę", "Piknik w stylu high fashion",
  "Mur z mottem życia", "Ktoś czytający na placu", "Osoba tańcząca do słuchawek",
  "Parasol jako ochrona przed słońcem", "Lody o dziwnym smaku", "Papuga w kawiarni",
  "Zbyt długie paznokcie", "Makijaż w witrynie"
];

const selected = tasks.sort(() => 0.5 - Math.random()).slice(0, 25);
const grid = document.getElementById("bingoGrid");

selected.forEach(text => {
  const cell = document.createElement("div");
  cell.className = "cell";

  const label = document.createElement("div");
  label.className = "label";
  label.textContent = text;

  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  const img = document.createElement("img");
  img.style.display = "none";

  input.onchange = function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        img.src = e.target.result;
        img.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  };

  cell.appendChild(label);
  cell.appendChild(input);
  cell.appendChild(img);
  grid.appendChild(cell);
});

// Rejestracja service workera
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
