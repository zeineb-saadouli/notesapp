console.log("starting app.js")
const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
 //console.log(yargs.argv);
//console.log("Process" , process.argv); 
//console.log("Yargs" , yargs.argv); 
//var title = process.argv[4];
//console.log(title);
var title = yargs.argv.title;
//console.log(title);
var body = yargs.argv.body;
var command = yargs.argv._[0];
//console.log(title, body, command);
if (command === "add"){
	console.log("adding note");
	notes.addingNote(title, body);
}else if (command === "remove"){
	console.log("removing note");
	notes.removeNote(title);
}else if (command === "read"){
	console.log("reading note");
	notes.readNote(title);
}else if (command === "list"){
	console.log("listing note");
	notes.getAll();
}else{
	console.log("unknown command was used" );
}


