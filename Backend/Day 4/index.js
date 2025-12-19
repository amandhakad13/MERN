const express = require("express");

const app = express();

// app.use((req, res) => {
//     res.send("Welcome to express js");
// });

app.use("/api", (req, res) => {
    res.send({"name": "Govind", "age": 20, "city": "Indore", "DOB": "11/05/2004"});
});

app.use("/details", (req, res) => {
    res.send("This is our Details Page");
});

app.use("/contact/:id/:name", (req, res) => {
    console.log(req.params);
    res.send("This is our Contact Page");
});

app.use("/", (req, res) => {
    res.send("Welcome to our Home Page");
});

app.listen(4000, ()=> {
    console.log("Listen at port 4000");
})