import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../../../components/Landing/Project';

import {mount, shallow} from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Project details={{
    title: "",
    year: "",
    description: "",
    ctaText: "",
    ctaUrl: ""
  }} />, div);
});

test('Renders with the correct projects', () => {

  const details = {
      "title": "test2",
      "year": "2017",
      "description": "This is test 2.",
      "ctaText": "Learn more about test 2",
      "ctaUrl": "test2"
    };

  const project = mount(
    <Project details={details} />
  );

  expect(project.contains([
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
