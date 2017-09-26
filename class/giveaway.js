const GiveawayList = require('./giveawaylist');
const GiveawayDetails = require('./giveawaydetails');

// Constructor
function Giveaway() {
	this.giveaway_list = new GiveawayList();
	this.giveaway_details = new GiveawayDetails();
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
	
Giveaway.prototype.addKey = function(guild_id, key) {
	this.giveaway_list.add(guild_id, key);
	this.giveaway_details.set(key, null);
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