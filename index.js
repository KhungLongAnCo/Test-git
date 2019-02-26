var dog = require('./moduledog.js');
var cat = function(){
	this.eat = function(name){
		console.log("my cat eat", name);
	}
}
var dog = function(){
	this.name = "skubido";
}
var jerry = new cat();
var subido = new dog();
jerry.eat(subido.name);