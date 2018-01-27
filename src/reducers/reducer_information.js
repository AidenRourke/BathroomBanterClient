import { STORE_INFORMATION } from '../actions/index';

export default function (state = {}, action) {

  switch (action.type) {

    case STORE_INFORMATION:
      return action.payload;

    default:
      return state;
  }
}
