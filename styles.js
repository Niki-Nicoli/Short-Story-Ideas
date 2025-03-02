let POV = document.getElementById("POV");
let genre = document.getElementById("genre-selection");
let genreChoice = document.getElementById("selection");

function PointOfView(event) {
  event.preventDefault();
  console.log(`${event.target.value} `);
  if (event.target.name === "POV") {
    new Typewriter("#point-of-view", {
      strings: "You selected " + event.target.value + " point of view.",
      autoStart: true,
      cursor: " ",
    });
    console.log(event.target.value);
  }
}

function genreSelection(event) {
  console.log(`${event.target.value}`);
  if (event.target.value === "genre") {
    return event.target.value;
  }
}

POV.addEventListener("change", PointOfView);
genre.addEventListener("change", genreSelection);

function generateStoryIdea(event) {
  event.preventDefault();
  new Typewriter("#results", {
    strings: "Please wait....generating story ideas.",
    autoStart: true,
    cursor: " ",
  });

  let input = document.querySelector("#general-story-details");
  let GenreInfo = new FormData(genreChoice);
  let choice = " ";
  for (let pick of GenreInfo) {
    choice = `${choice}${pick[1]}\r`;
  }
  console.log(`${choice}`);
  let POVInfo = new FormData(POV);
  let output = " ";
  for (let entry of POVInfo) {
    output = `${output}${entry[1]}\r`;
    console.log(`${output}`);

    let apiKey = "5452ccec034a0afbo38d92e109tf8e74";
    let context =
      "You are a creative story tellyer. Your goal is to generate a brief story idea in basic HTML following instructinos below.";
    let prompt = `generate a good fiction story idea about ${input.value} in the ${output} using the ${choice} genre.`;
    let apiLink = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    console.log(`Prompt: ${prompt}`);
    console.log(`Context ${context}`);
    axios.get(apiLink).then(StoryIdeas);
  }
}

function StoryIdeas(response) {
  story = document.querySelector("#results");
  story.innerHTML = response.data.answer;
}

let ideaGeneratorForm = document.querySelector("#idea-generator");
ideaGeneratorForm.addEventListener("submit", generateStoryIdea);
console.log("Processing");
