class Player {
  constructor(){
    this.index = null;
    this.x = 0;
    this.y = 0;
    this.name = null;
    this.password = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
  getEndCount(){
    var playerCountRef = database.ref('endCount');
    playerCountRef.on("value",(data)=>{
      endCount = data.val();
    })
  }
  getCars(){
    var playerCountRef = database.ref('EndlineCars');
    
    playerCountRef.on("value",(data)=>{
      EndlineCars = data.val();
    })
  }
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  updateEndCount(count){
    database.ref('/').update({
      endCount: count
    });
  }
  update(){
    database.ref('players/player'+player.index).update({
      x: player.x,
      y: player.y,
    });
  }

  

  updateEndline(){
    database.ref('/').update({
      EndlineCars: EndlineCars
    });
  }
  login(){
    for(var plr in allPlayers){
      console.log("inside login");
      if(allPlayers[plr].name === player.name && allPlayers[plr].password === player.password){
        console.log("Player logged in");
        player.index= allPlayers[plr].index;
      }
    }
  }                                                                                                             

  deletePlayers(){
    database.ref('/').update({
      players: null
    });

  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
