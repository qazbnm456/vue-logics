<template>
  <div
    class="blockin"
    @click="drawer = true"
  >
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
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :append-to-body="true"
      :show-close="false"
    >
      <template #title>
        <h2>Properties</h2>
      </template>
      <template>
        <FormulateForm
          v-model="formValues"
          class="property-form"
        >
          <p>
            Condition lets you have different actions based on different scenarios.
          </p>
          <FormulateInput
            v-model="title"
            name="title"
            type="text"
            label="Condition's title"
            placeholder="Title"
            validation="required"
          />
          <FormulateInput
            v-model="desc"
            name="desc"
            type="text"
            label="Condition's description"
            placeholder="Description"
            validation="required"
          />
          <div class="double-wide">
            <FormulateInput
              name="password"
              type="password"
              label="Password"
              placeholder="Your password"
              validation="required"
            />
            <FormulateInput
              name="password_confirm"
              type="password"
              label="Confirm your password"
              placeholder="Confirm password"
              validation="required|confirm"
              validation-name="Confirmation"
            />
          </div>
          <FormulateInput
            type="submit"
            label="Register"
          />
          <pre
            class="code"
            v-text="formValues"
          />
        </FormulateForm>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Drawer } from 'element-ui';

@Component({
  name: 'condition',
  components: {
    'el-drawer': Drawer,
  },
})
export default class Condition extends Vue {
  @Prop({ default: 'Condition\'s title' }) readonly title!: string;
  @Prop({ default: 'Condition\'s description' }) readonly desc!: string;

  drawer = false;
  direction = 'rtl';
  formValues: Record<string, any> = {};
}
</script>

<style scoped>
.property-form {
  padding: 0 2em 0 2em;
  max-width: 500px;
  box-sizing: border-box;
}
.property-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - .5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: .5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: .5em;
  }
}
</style>
