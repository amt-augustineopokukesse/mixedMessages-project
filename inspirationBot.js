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
        const greeting = this.getRandomMessage('greetings');// get appetizer dish
        const main = this.getRandomMessage('mains');// get main dish
        const ending = this.getRandomMessage('endings');// get dessert dish
    // Return combined message pieces
        return `${greeting}, ${main}. ${ending}`
    }     
};

//test
//inspirationBot.fillBot('greeting','Hello');
//console.log(inspirationBot._msgPool.greeting);