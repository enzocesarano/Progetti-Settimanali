import { combineReducers, configureStore } from '@reduxjs/toolkit';
import queen from '../reducers/queen';
import katyperry from '../reducers/katyperry';
import eminem from '../reducers/eminem';
import clicked from '../reducers/clicked';
import search from '../reducers/search';
import arraySearch from '../reducers/arraySearch'
import arrayPref from '../reducers/arrayPref'

const bigReducer = combineReducers({
  queen: queen,
  katyperry: katyperry,
  eminem: eminem,
  clicked: clicked,
  search: search,
  arraySearch: arraySearch,
  arrayPref: arrayPref,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;