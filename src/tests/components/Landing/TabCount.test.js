import React from 'react';
import ReactDOM from 'react-dom';
import TabCount from '../../../components/Landing/TabCount';

import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TabCount />, div);
});

test('Renders correct default tab count and message', () => {

  const tabCount = mount(
    <TabCount />
  );

  const count = tabCount.find('.c-tabCount__count');
  expect(count.text()).toMatch('1');

  const details = tabCount.find('.c-tabCount__details');
  expect(details.text()).toMatch("That\'s how many tabs I have open at the moment on my laptop. I\'m taking it pretty easy today.");
});

test('Renders correct large tab count and message', () => {

  const tabCount = mount(
    <TabCount tabCount='21' />
  );

  const count = tabCount.find('.c-tabCount__count');
  expect(count.text()).toMatch('21');

  const details = tabCount.find('.c-tabCount__details');
  expect(details.text()).toMatch("That\'s how many tabs I have open at the moment on my laptop. I have a bit of a problem (and a lot of RAM).");
});
