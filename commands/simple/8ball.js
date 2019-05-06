const commando = require('discord.js-commando')

class EightBallCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: '8ball',
            group: 'simple',
            memberName: '8ball',
            description: 'Queries the magic 8ball'
        });
    }  

    async run(message, args)
    {
		var number = 3;
		var random = Math.floor (Math.random() * number) + 1;
		switch(random) {
			case 1: 
				message.channel.send("not happenin bud");
				break;
			case 2: 
				message.channel.send("hell yeah");
                break;
            case 3:
                message.channel.send("great question");
                break;
            }
    }
}

module.exports = EightBallCommand