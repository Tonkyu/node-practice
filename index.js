const express = require('express');
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));

// app.get("/", function (req, res) {
//     console.log(req);
//     res.send("<h1>Hello World!<h1>");
// });

app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer;

    if (answer == '-1'){
        // res.send("Correct!");
        res.redirect("/correct.html");
    } else {
        // res.send("Wrong...");
        res.redirect("/wrong.html");
    }
    res.send({
        answer
    });
 });

app.listen(3000, function(){
    console.log("I'm running...");
});

console.log('Last line');