<template>
<div>
  <el-tabs type="border-card">
    <el-tab-pane label="Triggers">
      <trigger>
        <template slot="icon">
          <i class="blockico el-icon-user-solid"></i>
        </template>
        <template slot="title">
          <div class="blocktitle">New visitor</div>
        </template>
      </trigger>
      <trigger>
        <template slot="icon">
          <i class="blockico el-icon-s-promotion"></i>
        </template>
        <template slot="title">
          <div class="blocktitle">Action is performed</div>
        </template>
      </trigger>
    </el-tab-pane>
    <el-tab-pane label="Actions">
      <action>
        <template slot="icon">
          <i class="blockico el-icon-document-add"></i>
        </template>
        <template slot="title">
          <div class="blocktitle">Clone the webpage</div>
        </template>
      </action>
    </el-tab-pane>
    <el-tab-pane label="Conditions">
      <action>
        <template slot="icon">
          <i class="blockico el-icon-check"></i>
        </template>
        <template slot="title">
          <div class="blocktitle">If it's true</div>
        </template>
      </action>
    </el-tab-pane>
  </el-tabs>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Tabs, TabPane } from 'element-ui';

import Action from './Action.vue';
import Condition from './Condition.vue';
import Trigger from './Trigger.vue';

@Component({
  components: {
    Action,
    Condition,
    Trigger,
    'el-tabs': Tabs,
    'el-tab-pane': TabPane,
  },
})
export default class Sidebar extends Vue {
}
</script>

<style>
</style>
