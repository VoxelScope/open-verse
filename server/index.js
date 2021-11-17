const redis = require("redis");
const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
const http = require("http").Server(app);
const io = require("socket.io")(http, {
    transports: ["websocket", "polling"],
    rememberUpgrade: true,
    upgrade: true,
    cors: {
        origin: "https://localhost:9000",
        methods: ["GET", "POST"],
        credentials: true
    }
})
io.attach(8888, {
    cookie: false,
    session: true
})
const namespace = io.of("/feed");
var x = 0;
namespace.on("connection", (socket) => {
    console.log(`Receiver ${socket.id} connected..`);
    setInterval(() => {
        x = x + 0.01
        socket.emit([{ x: 100 + x, y: 200, z: 101, i: 1 }, { x: 100, y: 200, z: 101 + x, i: 2 }])
    }, 1000 / 24)
    socket.on("disconnecting", (reason) => {
        console.log("Socket " + socket.id + " disconnected. Reason=", reason)
    });
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Open Verse by VoxelScope');
    console.log('Running at: ' + port);
});