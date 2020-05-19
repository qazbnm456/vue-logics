<template>
  <el-row class="handle">
    <el-col>
      <div
        class="blockelem create-flowy"
        blockelemtype="trigger"
      >
        <div class="blockin">
          <slot name="icon">
            <i class="blockico el-icon-menu" />
          </slot>
          <div class="blocktext">
            <div class="blocktitle">
              {{ title }}
            </div>
            <div class="blockdesc">
              {{ desc }}
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Col, Row } from 'element-ui';

@Component({
  components: {
    'el-col': Col,
    'el-row': Row,
  },
})
export default class Trigger extends Vue {
  @Prop({ default: 'Trigger\'s title' }) readonly title!: string;
  @Prop({ default: 'Trigger\'s description' }) readonly desc!: string;
}
</script>

<style>
</style>
