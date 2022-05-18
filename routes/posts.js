const router = require('express').Router()
const path = require('path')

router.get('/posts', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'posts.html'))
})

module.exports = router