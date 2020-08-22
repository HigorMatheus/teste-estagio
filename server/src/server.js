const express = require('express')
const boryParser = require('body-parser')
const cors = require('cors')
const app = express();

const routes = require('./routes')

app.use(cors())
app.use(boryParser.json())
app.use(boryParser.urlencoded({extended: false}))
app.use(routes)

app.listen(3333)
