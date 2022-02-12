import {type} from '../../types/type';


const {eventLoadEstimate, eventChangePeriod} = type;

const estimateReducer = (state, action) => {

  switch(action.type) {

    case eventLoadEstimate:
      return {
        ...state,
        estimates : action.payload
      }

    case eventChangePeriod:
      return {
        ...state,
        estimateSelected : state.estimates.filter(e => e.id === action.payload)
      }

      default:
        return state;
  }

}


export default estimateReducer;
