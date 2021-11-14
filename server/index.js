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
const network = io.of("/feed")
var redis = require("redis");

network.on("connection", (socket) => {
    console.log(`Receiver ${socket.id} connected..`) // Logging when user is connected
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