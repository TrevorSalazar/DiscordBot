const commando = require('discord.js-commando')

class LeaveChannelCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leave the voice channel of the caller.'
        });
    }  

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply("I must be in a voice channel to be banished!");
        }
    }
}

module.exports = LeaveChannelCommand