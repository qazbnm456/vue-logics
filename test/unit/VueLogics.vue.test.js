import { shallowMount } from '@vue/test-utils';
import test from 'ava';
import VueLogics from '../../src/VueLogics.vue';

test('VueLogics.vue', (t) => {
  let wrapper = shallowMount(VueLogics);
  expect(wrapper.props('width')).to.equal('740px');
  expect(wrapper.props('height')).to.equal('400px');
  expect(wrapper.findAll('div.vue-logics').length).to.equal(1);
  expect(wrapper.findAll('#logics-sidebar').length).to.equal(1);
  expect(wrapper.findAll('#logics-container').length).to.equal(1);
  expect(wrapper.findAll('#logics-canvas').length).to.equal(1);
  expect(wrapper.findAll('#logics-temp-area').length).to.equal(1);

  wrapper = shallowMount(VueLogics, {
    propsData: {
      width: '100vw',
    },
  });
  expect(wrapper.props('width')).to.equal('100vw');
  expect(wrapper.props('height')).to.equal('400px');
});
