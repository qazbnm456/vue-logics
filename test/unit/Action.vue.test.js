import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import Action from '../../src/Action.vue';

test('Action.vue', (t) => {
  const wrapper = shallowMount(Action);
  expect(wrapper.findAll('div.blockelem.create-flowy').length).to.equal(1);
});
