const express = require('express');
const path = require('path')
const server = express();


// path.join(__dirname, /dist)
server.use(express.static(path.join(__dirname, '/react_frontend_app/dist')));


server.get('/user', (req, res) => {
    let user = {
        name: "Aldrich",
        codingLevel: 9000,
        town: "Seattle"
    }
    res.json(user)
})


server.listen(4001, () => {
    console.log('listening on 4001')
})