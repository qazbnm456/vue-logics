import test from 'ava';
import Logics from '../../src/Logics.ts';

test('can merge simple object', (t) => {
  const a = {
    optionA: true,
    optionB: '1234',
  };
  const b = {
    optionA: false,
  };

  expect(Logics.merge(a, b)).to.deep.equal({
    optionA: false,
    optionB: '1234'
  })
});
