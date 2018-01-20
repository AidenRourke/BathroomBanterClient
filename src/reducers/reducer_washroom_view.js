import { VIEW_WASHROOM } from '../actions/index';

export default function (state=null, action) {

  switch (action.type) {

    case VIEW_WASHROOM:
      return action.payload;

    default:
      return state;
  }
}
