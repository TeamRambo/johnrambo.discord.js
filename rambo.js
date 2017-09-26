const Discord = require('discord.js');
const Giveaway = require('./class/giveaway');
const CONFIG = require('./config/config.json')
const client = new Discord.Client();

client.on('ready', () => {
  console.log('INFO - Bot John Rambo is ready.');
  client.user.setGame("Guerre du Vietnam");
});

var phraseCulte = [
	'Ce que vous appelez l’enfer, il appelle ça chez lui.',
	'Je ne viens pas sauver Rambo de la police, je viens sauver la police de Rambo !',
	'Pour survivre à la guerre, il faut devenir la guerre.',
];

var currentGiveaway = [];

client.on('message', message => {
	if (message.content.startsWith('!john')) {
		console.log('INFO - Commande '+ message.content.substring(1).split(' ')[0] +' detected. Author : '+message.author.username);
		var content = message.content.split(' ').slice(1);
		switch(content[0]){
			case 'ping':
				message.reply('Pong !');
			break;
			// Gestion des giveaway
			case 'giveaway':
			case 'gway':
				switch(message.content.split(' ')[1]){
					case 'create':
					case '-c':
						createGiveaway(message);
					break;
					case 'list':
					case '-l':
						message.reply('give see');
					break;
					case 'edit':
					case '-e':
						message.reply('give edit');
					break;
					case 'finish':
					case '-f':
						message.reply('give end');
					break;
					case 'delete':
					case '-d':
						message.reply('give delete');
					break;
					default:
						message.reply('Usage : !giveaway [create|see|edit|end|delete]');
					break;
				}
				
			break;
			
			default:
				message.channel.send(phraseCulte[Math.floor(Math.random() * phraseCulte.length)]);
			break;
		}
  }
});

////
// GIVEAWAY METHOD
////

function createGiveaway(message){
	if(currentGiveaway){
		message.reply('Un giveaway est deja en cours. Il vous faut finir le premier giveaway afin d\'en lancer un nouveau.');
	}
	else{
		if(!message.content.split(' ')[2]){
			message.reply('Usage : !giveaway create (name) [multiWinner]');
		}
		else{
			currentGiveaway.push(new Giveaway(message.guild,message.content.split(' ')[2]));
			message.reply('Le giveaway a bien été créé.');
		}
	}
}


client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send('Pour survivre à la guerre, il faut devenir la guerre. Bienvenue ${member}');
});
client.login(CONFIG.login_key);