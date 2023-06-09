var express = require('express');

var app = express();

app.get("/", function(req, res) {
    console.log('home route')
    res.send(`
    <h1> Application written in  Node js</h1>
    <h3> Home page </h3>
    `)
});

app.get("/info", function(req, res) {
    console.log('info route')
    res.send(`
    <h1> Application written in  Node js</h1>
    <h3> Info page </h3>
    `)
});

const PORT = process.env.NODE_DOCKER_PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});