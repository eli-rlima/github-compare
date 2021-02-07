// Global
import { combineReducers } from 'redux';
// Reducers
import repositories from './repositories.reducer';
import popup from './popup.reducer';
import deleteModal from './delete-modal.reducer';

const reducers = combineReducers({
  repositories,
  popup,
  deleteModal,
});

const appReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return reducers(state, action);
};

export default appReducer;
