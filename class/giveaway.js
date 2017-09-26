// Constructor
function Giveaway(name, server, multiWinner) {
	this.name = name;
	this.listParticipant = [];
	this.listKey = [];
	this.server = server;
	this.listOptions = {multiWinner : true};
}

Giveaway.prototype.endGiveway = function() {
		
}

////
//	GETTER & SETTER
////
Giveaway.prototype.addParticipant = function(participant) {
	this.listParticipant.push(participant);
	return this;
}
	
Giveaway.prototype.getParticipant = function() {
	return this.listParticipant;
}
	
Giveaway.prototype.addKey = function(key) {
	this.listKey.push(key);
	return this;
}
	
Giveaway.prototype.getKey = function() {
	return this.listKey;
}


Giveaway.prototype.getServer = function() {
	return this.server;
}

Giveaway.prototype.getName = function() {
	return this.name;
}

////
//	MODULE EXPORT
////
module.exports = Giveaway;