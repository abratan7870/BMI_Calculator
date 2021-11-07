const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");


const app = express();
app.use(bodyparser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req, res) {
  res.render("bmi")
});

app.post("/", function(req, res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var ans = w / (h * h);
     res.render('result',{
       data: ans.toPrecision(5)
     })
});

app.listen(3000, function() {
  console.log("Server started on 3000");
});
