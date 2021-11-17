<template>
  <div class="hello">
    <h1>{{ nsp }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the vue-cli
    </p>
    <a>asdasd</a>
  </div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: "Socket",
  props: {
    nsp: String,
  },
  methods: {},
  computed: {},
  created() {
    this.$nextTick(function () {
      console.log("created Socket");
    });
  },
  mounted() {
    this.$nextTick(() => {
      const socket = io("http://localhost:8888/feed", {
        reconnectionDelayMax: 10000,
        withCredentials: true,
        auth: { token: "123" },
        query: { "my-key": "my-value" },
      });
      socket.on("connect", () => {
        const engine = socket.io.engine;
        engine.once("upgrade", () => {
          console.log(engine.transport.name);
        });
        // engine.on("packet", ({ type, data }) => {
        //   // console.log(type);
        //   // console.log(data);
        // });
        console.log(socket.id);
      });
      socket.on("data", (data) => {
        console.log(data);
      });
      socket.io.on("reconnect", (attempt) => {
        console.log("reconnecting", attempt);
      });
      socket.io.on("reconnect_attempt", (attempt) => {
        console.log("reconnect_attempt", attempt);
      });
      socket.io.on("reconnect_error", (error) => {
        console.log("reconnect_error", error);
      });
      socket.io.on("reconnect_failed", () => {
        console.log("reconnect_failed");
      });
      socket.on("disconnect", () => {
        console.log("disconnected", socket.id);
      });
      console.log("mounted Socket");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
