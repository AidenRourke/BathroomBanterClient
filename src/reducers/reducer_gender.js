import { LOGIN } from '../actions/index';

export default function (state=null, action) {
  switch (action.type) {
    case LOGIN:
      return action.payload;

    default:
      return state;
  }
}
