const router = require('express').Router()
const path = require('path')

router.use((req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', '404.html'))
})

module.exports = router