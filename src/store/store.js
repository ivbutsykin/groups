import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { groupListReducer } from '../GroupsList/reducer';
import { groupReducer } from '../Group/reducer';
import { authReducer } from '../Authorization/reducer';

const rootReducer = combineReducers({
  groups: groupListReducer,
  group: groupReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
