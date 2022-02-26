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