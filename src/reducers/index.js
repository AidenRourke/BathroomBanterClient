import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import WashroomsReducer from './reducer_washrooms';
import InformationReducer from './reducer_information';
import ViewReducer from './reducer_washroom_view';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  form: formReducer,
  information: InformationReducer,
  washrooms: WashroomsReducer,
  selectedWashroom: ViewReducer,
  isLoggedIn: LoginReducer
});

export default rootReducer;
