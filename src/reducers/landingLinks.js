import { REQUEST_LANDING_LINKS } from '../actions';

const initialState =  {
  data: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REQUEST_LANDING_LINKS:
     return {
       ...state, data: action.payload
     };
   default:
     return state;
  }
}
