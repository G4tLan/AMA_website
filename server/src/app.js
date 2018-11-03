const express = require('express')
const bodyParser = require('body-parser') //process json data
const cors = require('cors')
const morgan = require('morgan')
const app = express() //build rest end points

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors()) //security

//Routes
//requests get,post,put,patch,delete

app.get('/status', (req,res) => {res.send({message: "hello mhlaba"})} )

app.listen(process.env.PORT || 5000)
console.log("running on port 5000")