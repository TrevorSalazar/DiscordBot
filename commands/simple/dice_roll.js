const commando = require('discord.js-commando')

class DiceRollCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a die from 1 to 6'
        });
    }  

    async run(message, args)
    {
        let diceroll;
        if(args == "")
        {
            diceroll = Math.floor(Math.random() * 6) + 1;
            message.channel.send("You rolled " + diceroll);
            if(diceroll == 1)
            {
                message.channel.send("Unlucky :cry:")
            }
        }
        else
        {
            diceroll = Math.floor(Math.random() * args) + 1;
            if(isNaN(diceroll))
            {
                message.channel.send(args + " is not a number.")
            }
            else{
                message.channel.send("You rolled " + diceroll);
                if(diceroll == 1)
                {
                    message.channel.send("Unlucky.")
                }
            }
        }
    }
}

module.exports = DiceRollCommand