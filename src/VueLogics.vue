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
import VueFormulate from '@braid/vue-formulate';

import Flowy from './engine/index';
import * as Logics from '../src/types/vue-logics';

import Action from './Action.vue';
import Condition from './Condition.vue';
import Sidebar from './Sidebar.vue';
import Trigger from './Trigger.vue';

Vue.use(VueFormulate);

@Component({
  name: 'vue-logics-view',
  components: {
    Sidebar,
  },
})
export default class VueLogics extends Vue {
  @Prop({ default: '740px' }) readonly width!: string;
  @Prop({ default: '400px' }) readonly height!: string;

  flowy: Logics.Flowy.FlowyElementInterface;

  onSnap(block: HTMLDivElement, first: boolean, parent) {
    const type = block.getAttribute('blockelemtype');
    const blockin = block.querySelector('.blockin');
    let instance = null;

    blockin.parentNode.removeChild(blockin);

    if (type === 'action') {
      const ActionClass = Vue.extend(Action);
      instance = new ActionClass({
        propsData: {
          title: 'Clone the webpage',
          desc: 'Clone the webpage and respond',
        },
      });
      instance.$slots.icon = [instance.$createElement('i', { attrs: { class: 'blockico el-icon-document-add' } })];
    } else if (type === 'condition') {
      const ConditionClass = Vue.extend(Condition);
      instance = new ConditionClass({
        propsData: {
          title: 'If it\'s true',
          desc: 'The truth condition',
        },
      });
      instance.$slots.icon = [instance.$createElement('i', { attrs: { class: 'blockico el-icon-check' } })];
    } else if (type === 'trigger') {
      const TriggerClass = Vue.extend(Trigger);
      instance = new TriggerClass({
        propsData: {
          title: 'New visitor',
          desc: 'Triggers when somebody visits a specified page',
        },
      });
      instance.$slots.icon = [instance.$createElement('i', { attrs: { class: 'blockico el-icon-user-solid' } })];
    }

    instance.$mount();
    block.appendChild(instance.$el);

    return true;
  }

  mounted() {
    if ((window as any).VueLogicsTest !== true) {
      this.flowy = new Flowy(this.$refs.canvas, undefined, undefined, this.onSnap, 40, 40);
      // export some needed functions
      (this as any).$logics.import = this.flowy.import;
      (this as any).$logics.output = this.flowy.output;
      (this as any).$logics.deleteBlocks = this.flowy.deleteBlocks;
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
