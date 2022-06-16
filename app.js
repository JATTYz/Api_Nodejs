const express = require('express');
const readFile = require('fs');
const app = express();

const port = 3000;


app.get('/', (req,res) => {
	readFile.readFile(__dirname + "/" + "users.json", 'utf-8')
});


app.listen(port, ()=>{
	console.log(`Example app listening port ${port}`);

});
