import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import Trigger from '../../src/Trigger.vue';

test('Trigger.vue', (t) => {
  const wrapper = shallowMount(Trigger);
  expect(wrapper.findAll('div.blockelem.create-flowy').length).to.equal(1);
});
