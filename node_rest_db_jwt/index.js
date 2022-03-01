const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require("./app/routes/api");

const app = express();

require("./app/config/dbconfig")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/api', apiRouter)


app.listen(8080, () => {
  console.log(`Server running on port 8080`)
});