<template>
<el-row class="handle">
  <el-col>
    <div class="blockelem create-flowy">
      <div class="blockin">
        <slot name="icon">
          <i class="blockico el-icon-menu"></i>
        </slot>
        <div class="blocktext">
          <slot name="title">
            <div class="blocktitle">New visitor</div>
          </slot>
          <slot name="desc">
            <div class="blockdesc">Triggers when somebody visits a specified page</div>
          </slot>
        </div>
      </div>
    </div>
  </el-col>
</el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Col, Row } from 'element-ui';

@Component({
  components: {
    'el-col': Col,
    'el-row': Row,
  },
})
export default class Trigger extends Vue {
}
</script>

<style lang="less" scoped>
.handle {
  z-index: 9999;
}
</style>
