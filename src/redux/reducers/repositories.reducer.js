// Utils
import { toSearchableString } from 'utils'

const TEMPLATE_NAME = 'REPOSITORIES';

const filterByTerm = (item, term) => toSearchableString(item).includes(toSearchableString(term));

const filterData = (data, term) => {
  return data.filter(item => {
    const repoName = item.full_name ? filterByTerm(item.full_name, term) : false;
    return filterByTerm(item.node_id, term) || repoName;
  });
};

const initialState = () => ({
  loading: false,
  error: null,
  data: [],
  filter: {
    data: [],
    term: '',
  }
});

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_ADD_PENDING`: {
      return {
        ...state,
        loading: true,
      }
    }
    case `${TEMPLATE_NAME}_ADD_FULFILLED`: {
      const repository = action.payload;
      const data = [repository, ...state.data];
      return {
        ...state,
        loading: false,
        data,
        filter: {
          ...state.filter,
          data: filterData(data, state.filter.term),
        }
      }
    }
    case `${TEMPLATE_NAME}_ADD_REJECTED`: {
      return {
        ...state,
        error: true,
      }
    }
    case `${TEMPLATE_NAME}_ERROR`: {
      const error = action.payload;
      return {
        ...state,
        error,
      }
    }
    case `${TEMPLATE_NAME}_RESET`: {
      return initialState();
    }
    default:
      return state;
  }
};

export default reducer;
