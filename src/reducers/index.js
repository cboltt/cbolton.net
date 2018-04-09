import { combineReducers } from 'redux';
import landingLinksReducer from './landingLinks';
import landingParagraphReducer from './landingParagraph';
import experiencesReducer from './experiences';
import projectsReducer from './projects';
import tabCountReducer from './tabcount';

const rootReducer = combineReducers({
  landingLinks: landingLinksReducer,
  landingParagraph: landingParagraphReducer,
  experiences: experiencesReducer,
  projects: projectsReducer,
  tabCount: tabCountReducer
});

export default rootReducer;
