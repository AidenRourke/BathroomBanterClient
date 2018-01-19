import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import FloorsReducer from './reducer_floors';
import WashroomsReducer from './reducer_washrooms';
import BuildingReducer from './reducer_building';

const rootReducer = combineReducers({
  form: formReducer,
  floors: FloorsReducer,
  building: BuildingReducer,
  washrooms: WashroomsReducer
});

export default rootReducer;
