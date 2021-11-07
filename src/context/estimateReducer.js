import {type} from '../types/type';


const {eventLoadEstimate} = type;

const estimateReducer = (state, action) => {

  switch(action.type) {

    case eventLoadEstimate:
      console.log(action.payload);
      return {
        ...state,
        estimates : action.payload
      }

      default:
        return state;
  }

}


export default estimateReducer;
