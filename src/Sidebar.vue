<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="Triggers">
        <trigger
          title="New visitor"
          desc="Triggers when somebody visits a specified page"
        >
          <template #icon>
            <i class="blockico el-icon-user-solid" />
          </template>
        </trigger>
        <trigger
          title="Action is performed"
          desc="Action is performed and finished"
        >
          <template #icon>
            <i class="blockico el-icon-s-promotion" />
          </template>
        </trigger>
      </el-tab-pane>
      <el-tab-pane label="Actions">
        <action
          title="Clone the webpage"
          desc="Clone the webpage and respond"
        >
          <template #icon>
            <i class="blockico el-icon-document-add" />
          </template>
        </action>
      </el-tab-pane>
      <el-tab-pane label="Conditions">
        <condition
          title="If it's true"
          desc="The truth condition"
        >
          <template #icon>
            <i class="blockico el-icon-check" />
          </template>
        </condition>
        <condition
          title="If it's false"
          desc="The falsy condition"
        >
          <template #icon>
            <i class="blockico el-icon-close" />
          </template>
        </condition>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Tabs, TabPane } from 'element-ui';

import Action from './template/Action.vue';
import Condition from './template/Condition.vue';
import Trigger from './template/Trigger.vue';

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
