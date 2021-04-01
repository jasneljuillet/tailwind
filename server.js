const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const path = require('path')


app.set("public", path.join(__dirname, "public"));
app.set("public engine", "html");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render('index', {message: ''})
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(PORT);
});
