import { GET_WASHROOMS } from '../actions/index';

export default function (state = [], action) {

  switch (action.type) {
    case GET_WASHROOMS:
      return action.payload.data.listOfWashrooms;

    default:
      return state;
  }
}
