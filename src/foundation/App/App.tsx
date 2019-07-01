import React from 'react';
import styles from './App.module.scss';

import {Header, Project} from '../../components';

export default function App() {
  return (
    <div className={styles.App}>
      <Header
        marquee={['chrisbolton', 'cbolton.net']}
        subheading={{
          description: 'Building on and off the internet.',
          links: [
            {label: 'LinkedIn', url: 'https://www.linkedin.com/in/cbolton97'},
            {
              label: 'Medium',
              url: 'http://medium.com/@cbolton97'
            },
            {
              label: 'Github',
              url: 'http://github.com/cbolton97'
            }
          ]
        }}
      />
      <div className={styles.Section}>
        <h2 className={styles.Heading}>Projects</h2>
        <div className={styles.Projects}>
          <Project icon="B" title="Biome Search" url="https://www.trybiome.com/" color="#52D19A" />
          <Project icon="N" title="NwPlus Events" url="http://nwplus.io" color="#0AE3C6" />
          <Project
            icon="A"
            title="Shopify Hack Days"
            url="https://medium.com/@cbolton97/my-eight-month-shopify-sprint-e22a2b3a23d2"
            color="#F9464A"
          />
          <Project
            icon="💪"
            title="YWCA Culture Shift"
            url="https://ywcavan.org/programs/combating-sexualization/cultureshift/culture-shift-advisory-council"
          />
          <Project
            icon="🏛"
            title="Commerce Undergrad Society"
            url="http://cus.ca/wp-content/uploads/2018/01/Community-Report.pdf"
          />
          <Project icon="💽" title="UBC BizTech" url="http://ow.ly/y3M53075F4A" />
          <Project
            icon="👯‍♀️"
            title="BizTech Team"
            url="https://medium.com/@cbolton97/making-the-dream-work-e6c883839076"
          />
          <Project icon="🗺" title="Blueprint Conf '16" url="https://www.ubcbiztech.com/blueprint" />
          <Project
            icon="💡"
            title="The Next Big Thing"
            url="https://hootsuite.com/newsroom/press-releases/the-next-big-thing"
          />
        </div>
      </div>
    </div>
  );
}
