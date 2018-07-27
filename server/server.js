const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname + "././/public")));

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})