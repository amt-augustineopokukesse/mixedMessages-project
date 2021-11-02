// Create create Inspiration Robot object
const inspirationBot = {
    // create message pool property
    _msgPool: {
      greetings: [],
      mains: [],
      endings: [],
    },
    // Creating getter and setter methods for the message pool
    get greetings() {
      return this._msgPool.greetings;
    },
    set greetings(greetings) {
        this._msgPool.greetings = greetings;
    },
    get mains() {
      return this._msgPool.mains;
    },
    set mains(mains) {
        this._msgPool.mains = mains;
    },
    get endings() {
      return this._msgPool.endings;
    },
    set endings(endings) {
        this._msgPool.endings = endings;
    },
    get courses() {
        return {
          greetings: this.greetings,
          mains: this.main,
          endings: this.endings
        }
    },
    // fill inspiration bot with message pieces 
    fillBot(msgPart, string) {
    this._msgPool[msgPart].push(string);
    },
    // Create function to generate random message piece
    getRandomMessage(msgPart) {
        const msgArray = this._msgPool[msgPart];
        const randNum = Math.floor(Math.random() * msgArray.length);
        return msgArray[randNum];
    },
    // Generate random message
    generateRandomMessage() {
        const greeting = this.getRandomMessage('greetings');// get greeting
        const main = this.getRandomMessage('mains');// get main message
        const ending = this.getRandomMessage('endings');// get endin
    // Return combined message pieces
        return `${greeting}, ${main}. ${ending}`
    }     
};

// Fill object arrays
//Greetings
inspirationBot.fillBot('greetings','Hello friend');
inspirationBot.fillBot('greetings','Hi there');
inspirationBot.fillBot('greetings','Dear friend');
inspirationBot.fillBot('greetings','Hola amigo');
inspirationBot.fillBot('greetings','Ciao amico');
// Main messages
inspirationBot.fillBot('mains','everything will be okay');
inspirationBot.fillBot('mains','life is tough, but so are you');
inspirationBot.fillBot('mains','you are doing great');
inspirationBot.fillBot('mains','the struggle you\'re in today, is developing the strength you need for tomorrow');
inspirationBot.fillBot('mains','you have to fight through some bad days to earn the best days of your life');
// Ending messages
inspirationBot.fillBot('endings','Just relax');
inspirationBot.fillBot('endings','Hang in there');
inspirationBot.fillBot('endings','Keep pushing');
inspirationBot.fillBot('endings','Don\'t give up');
inspirationBot.fillBot('endings','Keep fighting');
// Generate message
const message = inspirationBot.generateRandomMessage();
console.log(message);
