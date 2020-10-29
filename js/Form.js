class Form {

  constructor() {
    this.input = createInput("Name");
    this.password = createInput("Password");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('reset')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  show(){
    this.greeting.show();
    this.button.show();
    this.input.show();
    this.title.show();
  }
  display(){
    this.title.html("1D Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.password.position(displayWidth/2 - 40, displayHeight/2);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 40);
    this.button.position(displayWidth/2 + 30, displayHeight/2 + 40);
    this.reset.position(50,50)
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.password.hide();
      player.name = this.input.value();
      player.password = this.password.value();
      playerCount+=1;
      player.login();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
this.reset.mousePressed(()=>{
  player.updateCount(0);
  player.updateEndCount(0);
  game.update(0);
  form = null;
  player = null;
  game.start();
  background("white");
  })
  }
}
