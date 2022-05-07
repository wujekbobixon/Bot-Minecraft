const mineflayer = require('mineflayer')
const Item = require('prismarine-item')('1.8')
const mcData=require("minecraft-data")("1.8")
const biomes = require('minecraft-data')("1.8").biomes
const prompt = require('prompt-sync')()
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
var login=false, last_chat=""
var options = {

    host: "jestwpyte.csrv.pl",   //"blabla.mcnetwork.me", "mcosada.pl"
    port: 25565,
    username: "DBE",
    version: "1.18.1",
    verbose: true
  };
  function jointoserver(){
    bot.on('chat', (u,m)=>{
      // console.log(u)
      if(u=="konta"){
      last_chat=m
      console.log(last_chat)
      }
        // if(m.toUpperCase().includes(" "+bot.username)&& (m[0]!="D"&& m[1]!="B"&& m[2]!="E")) return (
        //   setTimeout(()=>{
        //     var answer_dbe=""
        //     var rand=Math.round(Math.random()*4+1)
        //     console.log(rand)
        //     switch(rand){
        //       case 1:{answer_dbe="Siemanko co tam?"
        //         break}
        //       case 2:{answer_dbe="?"
        //         break}
        //       case 3:{answer_dbe="Co tam?"
        //         break}
        //       case 4:{answer_dbe="Wszystko widze"
        //         break}
        //       case 5:{answer_dbe="Walimy wiadro?"
        //         break}
        //     }
        //     bot.chat(answer_dbe)        
        //   },4000)
        // ) 
  })
  bot.on('death', ()=>{
       setTimeout(()=>{bot.chat("/is home afk")},2000)}) 



  bot.on('login', ()=>{
       setTimeout(()=>{bot.chat("")
      bot.on("windowOpen",()=>{
        bot.clickWindow(10, 1, 0)
      })
      bot.chat("/is home afk")
      console.log("Zalogowano")
      return login=true

      },5000);
  })
  bot.on('kicked', ()=>{
    setTimeout(()=>{
      bot.quit()
      bot.end()
      bot = mineflayer.createBot(options)
      jointoserver()}, 2400000)
})

  bot.on("time",()=>{
    timer()
  })
}
function timer(){
  if(login){
    let date= new Date()
    // console.log(date.getSeconds())
    if((date.getSeconds()+1)%55==0){
      bot.chat("Wow ale bubel") 
      //sendMoney(true)
  }
}
}
function sendMoney(no_spam){
  // console.log(m)
  if(no_spam){
  if(bot.players['wujekbobixon']){
    console.log("jest wuja")
     setTimeout(()=>{
      bot.chat("/pay wujekbobixon "+ last_chat.replace("$","0") )
    },1000)
    
  }
  else{console.log("Nie ma wuja")}}
  no_spam=false

}
    var bot = mineflayer.createBot(options)
    jointoserver()
     bot.on('error', console.log)
    //  
