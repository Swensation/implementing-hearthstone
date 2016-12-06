// Define the definition of a minion
var Minion = function(attack, health){
    this._attack = attack;
    this._health = health;
}

// Define the bare definition of a Minion

// a method to know how much damage this minion takes
//
// let the minion determine how much attack it has
Minion.prototype.getDamageDealt = function(){
  return this._attack;
}

// a method to take damage
//
// let the minion determine how it deals with damage
Minion.prototype.takeDamage = function(damage){
  this._health = this._health - damage;
}

// Simulate an attack by first creating the minions
var oasisSnapjaw = new Minion(2,7)
var chillwindYeti = new Minion(4,5)

// yeti -> snapjob
var yetiDamage = chillwindYeti.getDamageDealt();
oasisSnapjaw.takeDamage(yetiDamage);

// snapjaw -> yeti
var snapjawDamage = oasisSnapjaw.getDamageDealt();
chillwindYeti.takeDamage(snapjawDamage);

// Display the Results
console.log("Chillwind Yeti", chillwindYeti)
console.log("Oasis Snapjaw", oasisSnapjaw)
