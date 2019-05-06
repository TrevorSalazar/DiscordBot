const commando = require('discord.js-commando')
const YTDL = require('ytdl-core')

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
            connection.disconnect();
        }
    });
}
class PlayCommand extends commando.Command
{
    constructor(client){
        super(client,{
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Join the voice channel of the caller.'
        });
    }  

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        Play(connection, message);
                    })
            }
            var server = servers[message.guild.id];
            server.queue.push(args);
        }
        else
        {
            message.reply("You must be in a voice channel to summon me!");
        }
    }
}

module.exports = PlayCommand