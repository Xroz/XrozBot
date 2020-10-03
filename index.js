require("dotenv").config()

const { AkairoClient, CommandHandler } = require('discord-akairo');

class MyClient extends AkairoClient {
    constructor() {
        super({
            ownerID: ['ID', 'ID'],
        }, {
            disableMentions: 'everyone'
        });

        this.commandHandler = new CommandHandler(this, {
            directory: './Commands/',
            prefix: '!'
        });
        this.commandHandler.loadAll();

    }
}

const client = new MyClient();
client.login(process.env.TOKEN);
