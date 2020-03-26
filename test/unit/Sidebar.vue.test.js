import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import Sidebar from '../../src/Sidebar.vue';

test('Sidebar.vue', (t) => {
  const wrapper = shallowMount(Sidebar);
  expect(wrapper.findAll('el-tabs-stub[type="border-card"').length).to.equal(1);
});
