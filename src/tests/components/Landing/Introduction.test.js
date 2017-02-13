import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from '../../../components/Landing/Introduction';

import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Introduction paragraph='' />, div);
});

test('Renders with correct paragraph', () => {

  const introduction = mount(
    <Introduction paragraph="testing!" />
  );

  const paragraph = introduction.find('.c-introduction__paragraph');
  expect(paragraph.text()).toMatch("testing!");

});
