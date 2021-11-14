<template>
  <div>
    <Socket nsp="/feed" />
    <Frame id="aaa" />
  </div>
</template>
<script>
import Frame from "./components/Frame.vue";
import Socket from "./components/Socket.vue";
export default {
  name: "App",
  components: {
    Socket,
    Frame,
  },
  methods: {},
  computed: {},
  created() {
    this.$nextTick(function () {
      console.log("created App");
    });
  },
  mounted() {
    this.$nextTick(() => {
      console.log("mounted App");
    });
  },
};
</script>
