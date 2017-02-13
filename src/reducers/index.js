import { combineReducers } from 'redux';
import landingLinksReducer from './landingLinks';
import landingParagraphReducer from './landingParagraph';
import projectsReducer from './projects';

const rootReducer = combineReducers({
  landingLinks: landingLinksReducer,
  landingParagraph: landingParagraphReducer,
  projects: projectsReducer
});

export default rootReducer;
