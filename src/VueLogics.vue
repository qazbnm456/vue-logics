<template>
<div style="width: 100vw; height: 100vh;">
  <sidebar id="sidebar" ref="sidebar"></sidebar>
  <div id="canvas"></div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Sidebar from './Sidebar.vue';

@Component({
  name: 'vue-logics-view',
  components: {
    Sidebar,
  },
})
export default class VueLogics extends Vue {
}
</script>

<style lang="less">
@import './css/flowy.min.css';
@import './css/styles.css';

body {
  font-family: 'Source Sans Pro', sans-serif;
  position: absolute;
}

#sidebar {
  width: 320px;
  position: absolute;
  z-index: 9997;
}

#canvas {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: auto;

  .blockelem {
    z-index: 9998;
  }
}

div.blockelem.dragging {
  z-index: 9999 !important;
}
</style>
