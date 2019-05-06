const commando = require('discord.js-commando')

class MirrorCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Look at your reflection in the mirror!'
        });
    }  

    async run(message, args)
    {
        message.channel.send(message.author.avatarURL);
    }
}

module.exports = MirrorCommand