const express = require('express');
const path = require('path');
const app = express();

class Server {
    constructor(port, app) {
        this.port = port;
        this.app = app;
    }
    get() {
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, './public/index.html'));
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Blast-off on ${this.port}`);
       });
    }
}

app.use(express.static('public'));

const server = new Server(3333, app);
server.get();
server.listen();