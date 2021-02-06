// Api
import * as Repositories from 'api/repositories';
// Actions
import { pending, fulfilled, rejected } from './async.action';

const TEMPLATE_NAME = 'REPOSITORIES';

export const add = term => {
  return dispatch => {
    dispatch(pending(`${TEMPLATE_NAME}_ADD`));
    Repositories.search(term).then(payload => {
      const { total_count, items } = payload;
      if (total_count > 0) {
        dispatch(fulfilled(`${TEMPLATE_NAME}_ADD`, items[0]))
      } else {
        dispatch(rejected(`${TEMPLATE_NAME}_ADD`, { key: "repo_not-fount" }))
      }
    }).catch(err => {
      dispatch(rejected(`${TEMPLATE_NAME}_ADD`, err))
    })
  }
}

export const error = action => {
  return {
    type: `${TEMPLATE_NAME}_ERROR`,
    payload: action
  }
}

export const reset = () => {
  return {
    type: `${TEMPLATE_NAME}_RESET`,
  }
}
