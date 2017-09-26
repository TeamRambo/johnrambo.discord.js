
const REDIS = require('redis');
////
// Giveways Content
////

function GiveawayDetails (){
  this.client = REDIS.createClient();
}

GiveawayDetails.prototype.set = function(key, values) {
  this.client.set(key, JSON.stringify(values))
}
GiveawayDetails.prototype.get = function(key) {
  return this.client.get(key, function (err, reply) {
    console.log(reply.toString());
  });
}
GiveawayDetails.prototype.remove = function(guild_id, key) {
  if (this.client.lrem(guild_id, 0, key) > 0) {
    this.client.del(key);
  }
}
GiveawayDetails.prototype.exist = function(key) {
  return this.client.exists(key);
}

module.exports = GiveawayDetails;