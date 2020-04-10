import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import Condition from '../../src/template/Condition.vue';

test('Condition.vue', (t) => {
  const wrapper = shallowMount(Condition);
  expect(wrapper.findAll('div.blockelem.create-flowy').length).to.equal(1);
});
