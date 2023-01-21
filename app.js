// jshint esversion:6

const express = require("express");
const bodyParser = require("body-Parser");

const app = express();

var items=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

//BLOCK 1 EXECUTION

app.get("/", function(req, res) { //HOMEROUTE

  let today = new Date();

  let options ={
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options)

  res.render('list', {kindOfDay: day, newListItems: items });

});

// BLOCK 2 EXECUTION
//Here the value added in the form is posted via "/"

app.post("/",function(req, res){
 let item= req.body.newEntry;

 items.push(item);

res.redirect("/");     //it will redirect to home route and render the newListItem
});

app.get("/home",function(req,res){
  res.render("about")  
})

app.listen(3000, function() {
  console.log("Running at 3000 yeahhhh");
});
