import { GET_FLOORS } from '../actions/index';

export default function (state=null, action) {

  switch (action.type) {
    case GET_FLOORS:
      const newState = action.payload.data.listOfFloors;
      return newState;

    default:
      return state;
  }
}
