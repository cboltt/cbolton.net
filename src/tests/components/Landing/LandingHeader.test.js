import React from 'react';
import ReactDOM from 'react-dom';
import LandingHeader from '../../../components/Landing/LandingHeader';

import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LandingHeader links={[]} />, div);
});

test('Renders with the correct links', () => {

  const links = [
    {
      text: "test1",
      url: "test1"
    },
    {
      text: "test2",
      url: "test2"
    },
    {
      text: "test2",
      url: "test2"
    }
  ];

  const landingHeader = mount(
    <LandingHeader links={links} />
  );

  const linkContainer = landingHeader.find('c-landingHeader__links');
  expect(linkContainer.contains([
    <li><a href="test1" target="_blank" class="c-landingHeader__link">test1</a></li>,
    <li><a href="test2" target="_blank" class="c-landingHeader__link">test2</a></li>,
    <li><a href="test3" target="_blank" class="c-landingHeader__link">test3</a></li>,
  ]));

});
