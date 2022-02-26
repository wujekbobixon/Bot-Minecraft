const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals: { GoalNear } } = require('mineflayer-pathfinder')
const Item = require('prismarine-item')('1.8')
const mcData=require("minecraft-data")("1.16")
const prompt = require('prompt-sync')()
var waitUntil = require('wait-until')

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

var options = {

    host: "jestwpyte.csrv.pl",   //"blabla.mcnetwork.me", "mcosada.pl"
    port: 25565,
    username: "WitchPussy",
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
            if(u=="wujekbobixon"){
            switch(m){
              case ('home '+options.username):{answer_bot="/home afk"
                break}
              case ('tpa '+options.username):{answer_bot="/tpa wujekbobixon"
                break}
              case ('afk '+options.username):{answer_bot="/sethome afk"
                break}
              case ('follow '+options.username):{followWujek()
                break}
              case 5:{answer_bot="Walimy wiadro?"
                break}
            }         
          bot.chat(answer_bot)  
          console.log(answer_bot); 
        }
        if(u=="wujekbobixon"&&(m=="Tutaj")){
          followWujek()
        }
      
        
  })

  bot.on('death', ()=>{
       setTimeout(()=>{bot.chat("/home")},2000)}) 
  bot.on('login', ()=>{})
//   bot.on('kicked', ()=>{
//     setTimeout(()=>{
//       bot.quit()
//       bot.end()
//       bot = mineflayer.createBot(options)
//       jointoserver()}, 24000)
// })
  bot.on('end', function(reason) {
    //czeka 30 sek i probuje 9999 razy
    waitUntil(10000, 9999, function condition() {
      try {
        console.log("Bot ended, attempting to reconnect...");
            bot = mineflayer.createBot(options);
            return true;
      } catch (error) {
            console.log("Error: " + error);
            return false;
        }
        // Callback function that is only executed when condition is true or time allotted has elapsed
    }, function done(result) {
        console.log("Connection attempt result was: " + result);
        const RANGE_GOAL = 1 

        bot.loadPlugin(pathfinder)
        const defaultMove = new Movements(bot, mcData)
        jointoserver();
    });
  });
}

    var bot = mineflayer.createBot(options)
    const RANGE_GOAL = 1 

    bot.loadPlugin(pathfinder)
    const defaultMove = new Movements(bot, mcData)
    jointoserver()
     bot.on('error', console.log)
    //  
