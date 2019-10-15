var mySong;
var nasa;
var nasa_man;
var space_ship;
var music;
//the image was retrieved on unspash by nasa, free licence image.

//SPACE_MAN INITIAL X AND Y
var x1 = 300;
var y1 = 300;

function preload(){
  mySong = loadSound("./assets/Excite.mp3");
  nasa = loadImage("./assets/nasa.jpg");
  nasa_man = loadImage("./assets/nasa_spaceman.png");
  space_ship = loadImage("./assets/space_ship.png");
  //Free CC licence for music and image.
  //Photo by NASA on Unsplash: the picture was elaborated afterward in order to
  //create the astronaut effect.
  //Picture "spacex spaceship" retrieved on Unsplash.
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //IMAGES
  imageMode(CENTER);
  //image(nasa, width/2, height/2, windowWidth, windowHeight);

  //MUSIC
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);

  //MUSIC BUTTON
  music = createButton('Turn the stars on/off');
  music.position((width/2)-music.width/2, (height/4)+music.height/2);
  music.mousePressed(myMusic);
}

function draw() {
  //FIRST HALF OF THE IMAGE (AS A BACKGROUND)
  image(nasa, width/2, height/2, windowWidth, windowHeight);
  //SECOND HALF OF THE IMAGE (NASA MAN)
  image(nasa_man, x1, y1, nasa_man.width/6, nasa_man.height/6);
  //THIRD IMAGE: DEFINITELY NOT A SPACEX SPACESHIP
  push();
  var x2 = (windowWidth/2)+350;//SPACE_SHIP INITIAL X AND Y
  var y2 = (windowHeight/3)+50;
  image(space_ship,x2, y2,space_ship.width/3,space_ship.height/3);
  pop();

  //TEXT NASA MAN
  var myText = "NASA MUSIC MISSION";//NASA font from the adobe library
  push();
  textFont("nasalization");
  textAlign(CENTER);
  textSize(40);
  textStyle(BOLD);
  fill("white");
  text(myText, width/2, height/4);
  pop();

  var myText2 = "MISSION: IT LOOKS LIKE STARS WANT TO DANCE! MOVE THE ASTRONAUT WITH THE DIRECTIONAL KEYS";

  push();
  textFont("nasalization");
  //textAlign(CENTER);
  textSize(10);
  textStyle(BOLD);
  fill("white");
  text(myText2, 20, 20);
  pop();

  //STARS DIMENSIONS AND MUSIC VOLUME ON THE POSITION OF THE ASTRONAUT
  volume1 = analyzer.getLevel();
  volume1 = map(volume1, 0, 100, 0, height);

  volume2 = analyzer.getLevel();
  volume2 = map(volume2, 0,50,0,height);

  volume3 = analyzer.getLevel();
  volume3 = map(volume3, 0,30,0,height);

  if(y1 <= windowHeight/2 && x1 <= windowWidth/2){
    mySong.setVolume(1);
    fill('white');
  }
  else if(y1 <= windowHeight/2 && x1 >= windowWidth/2){
    mySong.setVolume(1);
    fill('yellow');
  }
  else if(y1 >= windowHeight/2 && x1 >= windowWidth/2){
    mySong.setVolume(0.4);
    fill('yellow');
  }
  else{
    mySong.setVolume(0.4);
    fill('white');
  }


  //STARS AND THEIR POSITIONS
  noStroke();
  ellipse(windowWidth/6,400,volume1,volume1);
  ellipse(windowWidth/4,300,volume1,volume1);
  ellipse(windowWidth/2,300,volume1,volume1);
  ellipse(windowWidth-200,100,volume1,volume1);
  ellipse(windowWidth-400,300,volume1,volume1);
  ellipse(windowWidth/6,50,volume1,volume1);
  ellipse((windowWidth/2)+150,100,volume1,volume1);

  ellipse((windowWidth/3)+50,100,volume2,volume2);
  ellipse((windowWidth/2)+50,350,volume2,volume2);
  ellipse(windowWidth/5,250,volume2,volume2);
  ellipse(windowWidth-100,350,volume2,volume2);
  ellipse(windowWidth-200,450,volume2,volume2);
  ellipse(windowWidth/2,25,volume2,volume2);
  ellipse((windowWidth/6)-100,300,volume2,volume2);

  ellipse((windowWidth/2)+100,250,volume3,volume3);
  ellipse((windowWidth/6)-100,100,volume3, volume3);
  ellipse(windowWidth-250,400,volume3, volume3);
  ellipse(windowWidth-75,250,volume3, volume3);
  ellipse(windowWidth-350,300,volume3, volume3);
  ellipse(windowWidth-150,70,volume3, volume3);
  ellipse((windowWidth/2)-150,350,volume3,volume3);
}

//NASA_MAN MOVEMENTS
function keyPressed() {
  if (keyCode === UP_ARROW) {
    y1 = y1 -40;
  } else if (keyCode === DOWN_ARROW) {
   y1 = y1 + 40;
  }
  if (keyCode === LEFT_ARROW) {
    x1 = x1 - 40;
  } else if (keyCode === RIGHT_ARROW) {
    x1 = x1 + 40;
  }
}

//MUSIC FUNCTION FOR BUTTON
function myMusic(){
  if(mySong.isPlaying()){
    mySong.stop();
  }
  else{
    mySong.play();
  }
}
