<template>
<div>
  <VueLogics width="500px" height="700px" />
  <button @click="onClick">{{ "Export" }}</button>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'example-1',
})
export default class Example1 extends Vue {
  onClick() {
    console.log((this as any).$logics.output());
  }
  mounted() {
    (window as any).logics = (this as any).$logics;
  }
}
</script>
<style scoped>
  button {
    position: relative;
    width: 100px;
    height: 40px;
    left: 320px;
    top: 0;
  }
</style>
