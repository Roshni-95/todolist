//jshint esversion: 6
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + "/date.js");

//console.log(date);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

const items = ["Buy Food","Cook Food","Eat Food"];
const workitems = [];

app.get("/",function(req,res){

const day = date.getDate();

  res.render('list',{listTitle:day, listNewItems:items});
});

app.post("/", function(req,res){

  item = req.body.newItem;

  if(req.body.list === 'Work List'){
    workitems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",function(req,res) {
 res.render('list',{listTitle: 'Work List', listNewItems:workitems});
});

app.get("/about", function(req,res){
  res.render("about");
})








app.listen(3000,function(){
  console.log("server is running on port:3000");
})
