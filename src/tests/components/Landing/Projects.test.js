import React from 'react';
import ReactDOM from 'react-dom';
import Projects from '../../../components/Landing/Projects';

import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Projects projectsData={[]} />, div);
});

test('Renders with the correct projects', () => {

  const projectsData = [
    {
      "title": "test1",
      "year": "2017",
      "description": "This is test 1.",
      "ctaText": "Learn more about test 1",
      "ctaUrl": "test1"
    },
    {
      "title": "test2",
      "year": "2017",
      "description": "This is test 2.",
      "ctaText": "Learn more about test 2",
      "ctaUrl": "test2"
    },
  ];

  const projects = mount(
    <Projects projectsData={projectsData} />
  );

  const projectsContainer = projects.find('c-projects__masonry');
  expect(projectsContainer.contains([
    <div class="c-project">
      <h2 class="c-project__title">
        test1
        <span class="c-project__title c-project__title--year">2017</span>
      </h2>
      <p class="c-project__description">This is test 1.</p>
      <div class="c-project__cta">
        <a href="test1" target="_blank">
          Learn more about test 1
        </a>
      </div>
    </div>,
    <div class="c-project">
      <h2 class="c-project__title">
        test2
        <span class="c-project__title c-project__title--year">2017</span>
      </h2>
      <p class="c-project__description">This is test 2.</p>
      <div class="c-project__cta">
        <a href="test1" target="_blank">
          Learn more about test 2
        </a>
      </div>
    </div>
  ]));
});
