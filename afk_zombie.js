//   ./parts/header
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var options = {

    host: "jestwpyte.csrv.pl",   //"blabla.mcnetwork.me", "mcosada.pl"
    port: 25565,
    username: "FlatBushZombie",
    version: "1.18",
    verbose: true
  };
  function followWujek(){
    const target = bot.players['wujekbobixon']?.entity
    if (!target) {
      bot.chat("Kurwa jak ty daleko!")
      return
    }
    const { x: playerX, y: playerY, z: playerZ } = target.position
  
      bot.chat(playerX);
      bot.pathfinder.setMovements(defaultMove)
      bot.pathfinder.setGoal(new GoalNear(playerX, playerY, playerZ, RANGE_GOAL))
  }

    //   ./parts/bot_afk
    

    //   ./parts/footer
    
    //  