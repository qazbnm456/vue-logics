import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import VueLogics from '../../src/VueLogics.vue';

test('VueLogics.vue', (t) => {
  const wrapper = shallowMount(VueLogics);
  expect(wrapper.findAll('#sidebar').length).to.equal(1);
  expect(wrapper.findAll('#canvas').length).to.equal(1);
});
