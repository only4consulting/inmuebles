import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboardReducer';
import { filterReducer } from './filterReducer';

export default combineReducers({
  dashboard: dashboardReducer,
  filter: filterReducer,
});
