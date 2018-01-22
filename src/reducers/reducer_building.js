import { STORE_BUILDING } from '../actions/index';

export default function (state = null, action) {

  switch (action.type) {

    case STORE_BUILDING:
      return action.payload;

    default:
      return state;
  }
}
