
const REDIS = require('redis');
////
// Giveways List
////

function GiveawayList (){
  this.client = REDIS.createClient();
}

GiveawayList.prototype.add = function(guild_id, key) {
  this.client.rpush(guild_id, key);
}
GiveawayList.prototype.get = function(guild_id) {
  this.client.lrange(guild_id, 0, -1);
}

module.exports = GiveawayList;