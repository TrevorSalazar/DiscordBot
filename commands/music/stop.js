const commando = require('discord.js-commando')

class StopCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'stop',
            group: 'music',
            memberName: 'stop',
            description: 'Stops playing music and leaves the voice channel.'
        });
    }  

    async run(message, args)
    {
        var server = servers[message.guild.id];
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
    }
}

module.exports = StopCommand