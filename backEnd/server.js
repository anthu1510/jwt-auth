require('dotenv').config();
const http = require('http');
const app = require('./src/index');

const port = process.env.PORT | 4000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`)
});
