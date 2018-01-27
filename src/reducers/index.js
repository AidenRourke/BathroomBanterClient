import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import FloorsReducer from './reducer_floors';
import WashroomsReducer from './reducer_washrooms';
import BuildingReducer from './reducer_building';
import ViewReducer from './reducer_washroom_view';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  form: formReducer,
  floors: FloorsReducer,
  building: BuildingReducer,
  washrooms: WashroomsReducer,
  selectedWashroom: ViewReducer,
  isLoggedIn: LoginReducer
});

export default rootReducer;
