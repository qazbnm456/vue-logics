<template>
<div>
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

<style scoped>
@import './css/flowy.min.css';
@import './css/styles.css';
@import '../node_modules/element-ui/lib/theme-chalk/index.css';

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
  width: 100%;
  height: 500px;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: auto;
}

#canvas > .blockelem {
  z-index: 9998;
}

div.blockelem.dragging {
  z-index: 9999 !important;
}
</style>
