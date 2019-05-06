const commando = require('discord.js-commando')

class SkipCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'skip',
            group: 'music',
            memberName: 'skip',
            description: 'Skips current song in queue.'
        });
    }  

    async run(message, args)
    {
        var server = servers[message.guild.id];
        if(server.dispatcher)
        {
            server.dispatcher.end();
        }
    }
}

module.exports = SkipCommand