class Game {
  constructor(){
this.player1Image=loadImage("images/Louis2.jpg")
this.player2Image=loadImage("images/Harry2.jpg")
this.player3Image=loadImage("images/Zayn 2.jpg")
this.player4Image=loadImage("images/Niall2.jpg")
this.player5Image=loadImage("images/Liam 2.jpg")

this.player01Image=loadImage("images/Louis.jpg")
this.player02Image=loadImage("images/Harry.jpg")
this.player03Image=loadImage("images/Zayn.jpg")
this.player04Image=loadImage("images/Niall.jpg")
this.player05Image=loadImage("images/Liam.jpg")
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(100,200);
    player1.addImage(this.player1Image);
    player01 = createSprite(100,200);
    player01.addImage(this.player01Image);
    player2 = createSprite(300,200);
    player2.addImage(this.player2Image);
    player02 = createSprite(100,200);
    player02.addImage(this.player02Image);
   player3 = createSprite(500,200);
   player3.addImage(this.player3Image);
   player03 = createSprite(100,200);
   player03.addImage(this.player03Image);
    player4 = createSprite(700,200);
    player4.addImage(this.player4Image);
    player04 = createSprite(100,200);
    player04.addImage(this.player04Image);
    player5 = createSprite(900,200);
    player5.addImage(this.player5Image);
    player05 = createSprite(100,200);
    player05.addImage(this.player05Image);
    players = [player1, player2, player3, player4, player5 ];
    players0 = [player01, player02, player03, player04, player05 ];
  }

  
 
  play(){
    form.hide();
    image(bg2, 0,0,500,500);
    Player.getPlayerInfo();
    player.getEndCount();

    if(allPlayers !== undefined && endCount!== undefined){
      //var display_position = 100;

//index of the array
      var index = 0;

      //x and y position of the players
      var x = 200;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the players a little away from each other in x direction
        x = allPlayers[plr].x;
        //use data form the database to display the players in y direction
        y = allPlayers[plr].y;
        players[index-1].x = x;
        players[index-1].y = y;
        
        players0[index-1].x = allPlayers[plr].x2;
        players0[index-1].y = allPlayers[plr].y2;
        if (index === player.index){
          players[index - 1].shapeColor = "red";
          camera.position.x = player.x;
          camera.position.y = player.y
        
        
        
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
      if(gameState===1 && Math.abs(players[player.index-1].x-players0[player.index-1].x)<players[player.index-1].width/2 + players0[player.index-1].width/2 && Math.abs(players[player.index-1].y-players0[player.index-1].y)<players[player.index-1].height/2 + players0[player.index-1].height/2){
        endCount = endCount + 1;
        player.updateEndCount(endCount);
        gameState=2;
        console.log("Winner "+ index);
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null ){
      player.y = player.y-10;
      player.update();
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.x = player.x+10;
      player.update();
    }
    if(keyIsDown(DOWN_ARROW) && player.index !== null){
      player.y = player.y+10;
      player.update();}
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x = player.x-10;
        player.update();
      }
    
    drawSprites();
  }
}

}
