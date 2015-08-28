if(Posts.find().count() === 0){

	
	Posts.insert({
		title:"Hacker News",
		author:"GGYo",
		url:"https://google.com"
	});
	
	Posts.insert({
		title:"The Meteor Book",
		author:"Tom Colemand",
		url:"http://themeteorbook.com"
	});
}