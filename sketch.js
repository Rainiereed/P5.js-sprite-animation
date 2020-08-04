/*

x 1. Load image of woman with bird in cage

x 2. Add interaction, something when the user clicks

x 3. Remove bird from cage

4. Play animation of bird flying from cage.

5. Ending somehow

*/

let spritesheet, spritedata;

let animation = [];
let bird;

let cageImg, noBirdImg;

let birdInCage = true;

const cageURL =
  "https://cdn.glitch.com/7d13bdd1-4c8a-44ea-a144-9a201ba36a81%2Fwomancage.png?v=1596550150631";
const noBirdURL =
  "https://cdn.glitch.com/7d13bdd1-4c8a-44ea-a144-9a201ba36a81%2Fnobird.png?v=1596545399885";

const imgRatio = "0.6978950489";

let font,
  fontsize = 20;

let player;

function preload() {
  cageImg = loadImage(cageURL);
  noBirdImg = loadImage(noBirdURL);
  spritedata = loadJSON("https://cdn.glitch.com/7d13bdd1-4c8a-44ea-a144-9a201ba36a81%2Fbird.json?v=1596545364743");
  spritesheet = loadImage(
    "https://cdn.glitch.com/7d13bdd1-4c8a-44ea-a144-9a201ba36a81%2Fbird.png?v=1596545390769"
  );
}

function setup() {
  createCanvas(windowHeight, windowHeight/imgRatio);
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  bird = new Sprite(animation, 0, 0, 0.1);

  textSize(fontsize);
  textAlign(LEFT);

  Tone.Master.volume.value = 0;
  player = new Tone.Player({
    url:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Cwm_Rhymni_-_Various_Artists.ogg",
    onload: function () {
      player.autostart = false;
    },
  });
  player.connect(Tone.Master);
}

function draw() {
  image(cageImg, 0, 0, width, height);

  if (mouseIsPressed) {
    birdInCage = false;
  }

  if (birdInCage == false) {
    image(noBirdImg, 0, 0, width, height);
    bird.show();
    bird.animate();
  }
  //drawWords(width * 0.5);
}

function mouseClicked() {
  player.restart();
}

/*function drawWords(x) {
  
  fill(190);
  text("I walk back and forth", x + 40, 240);

  fill(190);
  text("In my stiff, brocaded gown,", x + 40, 270);

  fill(190);
  text("With this bird in a cage.", x + 40, 300);

  fill(190);
  text("Up and down I walk ", x + 40, 350);

  fill(190);
  text("The day turns dark again,", x + 40, 380);

  fill(190);
  text("I am still in this lodge.", x + 40, 410);

  fill(190);
  text("Open the cage!", x + 40, 460);

  fill(190);
  text("Open the cage! ", x + 40, 490);

  fill(190);
  text("--- My Quarantine Life", x + 60, 540);
} */
