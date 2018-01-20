import { GET_WASHROOMS } from '../actions/index';

export default function (state = [], action) {

  switch (action.type) {
    case GET_WASHROOMS:
      console.log(action);
      return [" HP4125"]; //action.payload.listOfWashrooms;

    default:
      return state;
  }
}
