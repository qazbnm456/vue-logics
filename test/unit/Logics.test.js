import test from 'ava';
import Logics from '../../src/Logics.ts';

test('Logics - Can merge simple object', (t) => {
  const a = {
    optionA: true,
    optionB: '1234',
  };
  const b = {
    optionA: false,
  };

  expect(Logics.merge(a, b)).to.deep.equal({
    optionA: false,
    optionB: '1234',
  });
});

test('Logics - Can add to simple array', (t) => {
  const a = {
    optionA: true,
    optionB: ['first', 'second'],
  };
  const b = {
    optionB: ['third'],
  };

  expect(Logics.merge(a, b, true)).to.deep.equal({
    optionA: true,
    optionB: ['first', 'second', 'third'],
  });
});

test('Logics - Can merge recursively', (t) => {
  const a = {
    optionA: true,
    optionC: {
      first: '123',
      third: {
        a: 'b',
      },
    },
    optionB: '1234',
  };
  const b = {
    optionB: '567',
    optionC: {
      first: '1234',
      second: '789',
    },
  };

  expect(Logics.merge(a, b)).to.deep.equal({
    optionA: true,
    optionC: {
      first: '1234',
      third: {
        a: 'b',
      },
      second: '789',
    },
    optionB: '567',
  });
});

test('Logics - Can install on vue instance', (t) => {
  const components = ['VueLogics'];
  const registry = [];

  function Vue () {};
  Vue.component = function (name, instance) {
    registry.push(name);
  };

  Logics.install(Vue, { extended: true });
  expect(registry).to.deep.equal(components);
});
