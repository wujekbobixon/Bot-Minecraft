const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals: { GoalNear } } = require('mineflayer-pathfinder')
const Item = require('prismarine-item')('1.8')
const mcData=require("minecraft-data")("1.16")
const prompt = require('prompt-sync')()
const pvp = require('mineflayer-pvp').plugin

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var options = {

    host: "jestwpyte.csrv.pl",   //"blabla.mcnetwork.me", "mcosada.pl"
    port: 25565,
    username: "DBE",
    owner: "wujekbobixon",
    version: "1.18",
    verbose: true
  };

  function jointoserver(){
    bot.on('chat', (u,m)=>{
       console.log(u+">"+m)
      // if(m==('tpa '+options.username)){
      // bot.chat("/tpa wujekbobixon")
      // }
      // else if(m==('home '+options.username))
      // {
      //   bot.chat("/home afk")
      // }
            var answer_bot=""
            if(u==options.owner){
            switch(m){
              case ('home '+options.username):{answer_bot="/home afk"
                break}
              case ('tpa '+options.username):{answer_bot="/tpa wujekbobixon"
                break}
              case ('afk '+options.username):{answer_bot="/sethome afk"
                break}
              case ('follow '+options.username):{followWujek()
                break}
              case ('farm '+options.username):{farmMobs()
                break}
              case ('stopfarm '+options.username):{stopFarm()
                break}
            }         
          bot.chat(answer_bot)  
          console.log(answer_bot); 
        }
        if(u==options.owner&&(m=="Tutaj")){
          followWujek()
        }
      
        
  })

  bot.on('death', ()=>{
       setTimeout(()=>{bot.chat("/home afk")},2000)}) 
  bot.on('login', ()=>{})
  bot.on('kicked', ()=>{
    setTimeout(()=>{
      bot.quit()
      bot.end()
      bot = mineflayer.createBot(options)
      jointoserver()}, 24000)
})
}
function followWujek(){
  const target = bot.players[options.owner]?.entity
  if (!target) {
    bot.chat("Kurwa jak ty daleko!")
    return
  }
  const { x: playerX, y: playerY, z: playerZ } = target.position

    // bot.chat(playerX);
    bot.pathfinder.setMovements(defaultMove)
    bot.pathfinder.setGoal(new GoalNear(playerX, playerY, playerZ, RANGE_GOAL))
}
  function stopFarm(){
    bot.pvp.stop()
    bot.pathfinder.setGoal(null)

  }
  function farmMobs(){  
    const target = bot.players[options.owner]?.entity
    if (!target) {
      bot.chat("Kurwa jak ty daleko!")
      return
    }
    const { x: playerX, y: playerY, z: playerZ } = target.position 
      bot.on('physicsTick', () => {
        // if (!guardPos) return  Do nothing if bot is not guarding anything
    
        // Only look for mobs within 16 blocks
        const filter = e => e.type === 'mob' && //e.position.distanceTo(bot.entity.position) < 16 &&
                          (e.mobType === 'Drowned'||e.mobType === 'Zombie' ) 
      
        const mob = bot.nearestEntity(filter)
        if (!mob)return;
          // Start attacking
          const location = mob.position;
          bot.lookAt(location,true,()=>{
            bot.pvp.attack(mob);
            bot.pathfinder.setMovements(defaultMove)
            bot.pathfinder.setGoal(new GoalNear(playerX, playerY, playerZ, RANGE_GOAL))
          });
          
        
      })
  }


    var bot = mineflayer.createBot(options)
    const RANGE_GOAL = 1 

    bot.loadPlugin(pathfinder)
    bot.loadPlugin(pvp)
    const defaultMove = new Movements(bot, mcData)
    jointoserver()
     bot.on('error', console.log)
    //  
