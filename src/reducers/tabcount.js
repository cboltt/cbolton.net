import { REQUEST_TAB_COUNT } from '../actions';

const initialState =  {
  data: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case REQUEST_TAB_COUNT:
     return {
       ...state, data: action.payload.body.data.count.toString()
     };
   default:
     return state;
  }
}
