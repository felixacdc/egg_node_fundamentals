console.log('start');
process.nextTick(function() {
	console.log('nextTick callback');
});
setTimeout(function(){ console.log('setTimeout'); }, 300);
console.log('scheduled');
