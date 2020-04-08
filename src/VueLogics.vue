<template>
<div class="vue-logics" :style="{ width: this.width }">
  <sidebar id="logics-sidebar" ref="sidebar"></sidebar>
  <div id="logics-container" :style="{ height: this.height }">
    <div id="logics-canvas" ref="canvas" :style="{ height: this.height }"></div>
    <div id="logics-temp-area"></div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Flowy from './engine/index';
import * as Logics from '../src/types/vue-logics';

import Sidebar from './Sidebar.vue';

@Component({
  name: 'vue-logics-view',
  components: {
    Sidebar,
  },
})
export default class VueLogics extends Vue {
  @Prop({ default: '740px' }) readonly width!: string
  @Prop({ default: '400px' }) readonly height!: string

  flowy: Logics.Flowy.FlowyElementInterface;

  onSnap(block, first, parent) {
    return true;
  }

  mounted() {
    if ((window as any).VueLogicsTest !== true) {
      this.flowy = new Flowy(this.$refs.canvas, undefined, undefined, this.onSnap, 40, 40);
    }
  }
}
</script>

<style>
@import './css/flowy.min.css';
@import './css/canvas.css';
@import './css/block.css';

.vue-logics {
  font-family: 'Source Sans Pro', sans-serif;
  position: absolute;
  /* base */
  z-index: 0;
}

#logics-sidebar {
  width: 320px;
  position: absolute;
  z-index: 2;
}

.vue-logics > #logics-container {
  min-width: 720px;
  height: 400px;
  top: 0;
  left: 0;
  position: relative;
  overflow: auto;
}

.vue-logics > #logics-container > #logics-canvas {
  width: 100%;
  height: 400px;
  z-index: 1;
  position: absolute;
}

.vue-logics > #logics-container > #logics-temp-area {
  width: 0;
  height: 0;
}
</style>
