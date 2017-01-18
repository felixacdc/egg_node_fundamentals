var welcome = function() {
console.log("Welcome to the Great Underground Empire!");
}
welcome()
var start = function(callback) {
callback()
}
start(welcome)
var look = function(dir) {
if(dir === 'west') { console.log("There is a small mailbox here."); }
if(dir === 'east') { console.log("You are standing next a white house."); }
}
