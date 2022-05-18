const express = require('express')
const path = require('path')
const postsRoutes = require('./routes/posts')
const homeRoutes = require('./routes/home')
const notFoundRoutes = require('./routes/404')

app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(postsRoutes)
app.use(homeRoutes)
app.use(notFoundRoutes)

app.listen(3000)