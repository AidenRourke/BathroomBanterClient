import { GET_FLOORS } from '../actions/index';

export default function (state=null, action) {

  switch (action.type) {
    case GET_FLOORS:
      const newState = 4; //action.payload.listOfFloors[0];
      return newState;

    default:
      return state;
  }
}
