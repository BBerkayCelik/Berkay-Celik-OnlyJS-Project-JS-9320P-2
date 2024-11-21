const mainChars = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};
const container = document.getElementById("charsContainer");

function renderCharacters(){
  for (let i = 0; i < mainChars.characters.length; i++) {
  const card = document.createElement("div");
  card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");

  const char = mainChars.characters[i];
  const charText = `
          <div class="card mx-5" style="width: 18rem">
            <img class="card-img-top" src="${char.pic}" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">${char.name}</h5>
              <div><span class="fw-bold">Character ID =</span> ${char.id}</div>
              <div class="card-text"><span class="fw-bold">Homeworld: </span>${char.homeworld}</div>
            </div>
          </div>
        </div>
      </div>`;

      card.innerHTML = charText;
      container.appendChild(card);
    }
}

function removeCharacters(){
  container.innerHTML = "";
}

//Ödevin İkinci Kısmı
//Burada homeworlds tanımlaması sonradan değiştiği için ödevde "const" örneği verilmesine rağmen let ile tanımlama yapıldı.

let homeworldsRaw = mainChars.characters.map((character) => character.homeworld) //mainChars array'indeki objelerden "homeworld" özellikleri çekilir.
console.log(homeworldsRaw)

let homeworlds = homeworldsRaw.map(homeworld => homeworld ?? 'other'); //Nullish coalescing operatör kullanarak undefined veya null dönen "homeworld" özelliği "other" string'i ile döner.
console.log(homeworlds);

let homeworldsUnique = new Set(homeworlds); // Set() operatörü ile unique olmayan özellikler silinir.
console.log(homeworldsUnique);

let homeworldsUniqueLowerCase = Array.from(homeworldsUnique).map(hw => hw.toLowerCase());
console.log(homeworldsUniqueLowerCase);

homeworlds = homeworldsUniqueLowerCase;
console.log(homeworlds);

const inputContainer = document.getElementById("radioInputContainer");

for (let i=0; i<homeworlds.length; i++) {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("form-check", "text-center");

  const input = document.createElement("input");
  input.type = "radio";
  input.name = "homeworld";
  input.id = `homeworld-${homeworlds[i]}`;
  input.value = homeworlds[i];
  
  const label = document.createElement("label");
  label.htmlFor = input.id;
  label.textContent = homeworlds[i];

  inputDiv.appendChild(input);
  inputDiv.appendChild(label);

  input.addEventListener('change', function(){
    let prev = null;
    if (prev){
      console.log("Önceki seçim:" + prev.value);
    }
  
    if (this !== prev){
      prev = this;
    }
  
    console.log("Şu anki seçim: " + this.value)});

  inputContainer.appendChild(inputDiv);
  
};


