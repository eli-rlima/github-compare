import { compose } from 'redux';
import { search } from 'api/repositories';

const TEMPLATE_NAME = 'REPOSITORIES';

export function fetchRepositorySuccess(data) {
  return {
    type: `${TEMPLATE_NAME}_FULFILLED`,
    payload: data,
  };
}

export function fetchRepositoryFailure(error) {
  return {
    type: `${TEMPLATE_NAME}_REJECTED`,
    error,
  };
}

export function fetchRepository() {
  return async (dispatch) => {
    dispatch({
      type: `${TEMPLATE_NAME}_PENDING`,
    });

    const onSuccess = compose(dispatch, fetchRepositorySuccess);
    const onFailure = compose(dispatch, fetchRepositoryFailure);

    return search('liferay/senna.js')
      .then(onSuccess)
      .catch(onFailure);
  };
}
