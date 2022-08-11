class Form {
  constructor() {
    this.input= createInput("").attribute("placeholder", "enter your name");
    this.playButton = createButton("Play");
    this.titleImg= createImg ("assets/title.png","game title");
    this.greeting= createElement("h2");// heading h1- h6
     }
     setElementPosition(){
      this.titleImg.position (120,40);
      this.input.position(width/2-110,height/2-80);
      this.playButton.position(width/2-90,height/2-20);
      this.greeting.position(width/2-300,height/2-100);
     }


     display(){
      this.setElementPosition();
     }
}
