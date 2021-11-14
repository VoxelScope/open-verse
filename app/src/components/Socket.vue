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
        withCredentials: true,
      });
      socket.on("connect", () => {
        console.log(socket.id);
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
