import { REQUEST_PROJECTS } from '../actions';

const initialState =  {
  data: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REQUEST_PROJECTS:
     return {
       ...state, data: action.payload
     };
   default:
     return state;
  }
}
