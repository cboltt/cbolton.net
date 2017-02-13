import { combineReducers } from 'redux';
import landingLinksReducer from './landingLinks';

const rootReducer = combineReducers({
  landingLinks: landingLinksReducer
});

export default rootReducer;
