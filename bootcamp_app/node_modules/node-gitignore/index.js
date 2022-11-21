#!/usr/bin/env node

var program = require('commander');
var request = require('request');
var fs = require('fs');

program
  .version('0.0.1')
  // .option('-a, --add', 'Add .gitignore')
  .parse(process.argv);
var append = "# .idea\n.idea\n# Dependency directory\nbower_components";
var ws = fs.createWriteStream('.gitignore');
ws.on("finish", function(){
	fs.appendFile(".gitignore", append, function (err, data) {
		if(err){
			console.log("error.");
		}else {
			console.log("done.");
		}
	});
});
request
  .get('https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore')
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(ws);

