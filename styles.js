function genreSelection(event) {
  event.preventDefault();
  new Typewriter("#results", {
    strings: "You selected " + this.value,
    autoStart: true,
    cursor: " ",
  });
}

function PointOfView(event) {
  event.preventDefault();
  console.log(`${event.target.value} `);
  if (event.target.name === "POV") {
    new Typewriter("#point-of-view", {
      strings: "POV: " + event.target.value,
      autoStart: true,
      cursor: " ",
    });
  }
}

let POV = document.getElementById("POV");

setTimeout(POV.addEventListener("change", PointOfView), 12 * 1000);

let genre = document.getElementById("genre-selection");
genre.addEventListener("change", genreSelection);
