<template>
  <div class="Frame">
    <a-scene physics=" driver: ammo; debug: true; debugDrawMode: 1;" :id="id">
      <a-box position="0 0.5 -5" width="3" height="1" depth="1" ammo-body="type: static" ammo-shape="type: box"></a-box>

      <!-- Dynamic box -->
      <a-box position="5 0.5 0" width="1" height="1" depth="1" ammo-body="type: dynamic" ammo-shape="type: box"></a-box>
    </a-scene>
  </div>
</template>

<script>
export default {
  name: "Frame",
  props: {
    id: String,
  },
  methods: {},
  computed: {},
  created() {
    this.$nextTick(function () {
      console.log("created Frame");
    });
  },
  mounted() {
    this.$nextTick(() => {
      console.log("mounted Frame");
    });
  },
};
</script>
<style>
.Frame {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>
