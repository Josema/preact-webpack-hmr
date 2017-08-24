const express = require('express')
const path = require('path')
const app = express()

if (process.env.NODE_ENV === 'development')
    require('../webpack/development')(app)

app.use(
    '/static/',
    express.static(path.resolve(__dirname, '../public/static/'))
)
app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../public/index.html'))
})
app.listen(8001, () => console.log('App listening on http://localhost:8001'))
