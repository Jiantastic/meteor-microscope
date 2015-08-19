var postsData = [
  {
     title:"Meteor",
    url:"http://meteor.com"

  },
  {
   title: "Introducing Telescope",
    url: "http://sachagreif.com/introducing-telescope/"
  },
  {
    title:"Hacker News",
    url:"https://news.ycombinator.com/news"
  }
];

Template.postsList.helpers({
  posts: postsData
});