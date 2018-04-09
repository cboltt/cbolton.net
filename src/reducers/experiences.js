import { REQUEST_EXPERIENCES } from '../actions';

const initialState =  {
  data: []
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REQUEST_EXPERIENCES:
     return {
       ...state, data: action.payload
     };
   default:
     return state;
  }
}
