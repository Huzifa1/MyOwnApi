// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})
app.get("/huzifa", function (req, res) {
    res.send('[{"id":1, "name":"Huzifa"}, {"id":2, "name":"Walid"}, {"id":3, "name":"Aya"}, {"id":4, "name":"Moayad"}]')
  })
// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));