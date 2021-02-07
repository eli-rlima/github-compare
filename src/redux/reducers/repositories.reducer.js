// Utils
import { toSearchableString, sortByKeyDesc, sortByDateDesc } from 'utils'

const TEMPLATE_NAME = 'REPOSITORIES';

const filterByTerm = (item, term) => toSearchableString(item).includes(toSearchableString(term));

const filterData = (data, term) => {
  return data.filter(item => {
    const repoName = item.full_name ? filterByTerm(item.full_name, term) : false;
    return filterByTerm(item.node_id, term) || repoName;
  });
};

const favoriteFilterData = data => {
  return data.filter(item => item.favorite);
};

const orderByData = (data, key) => {
  if (key === 'created_at' || key === 'updated_at') {
    return sortByDateDesc(data, key)
  }
  return sortByKeyDesc(data, key);
}

const initialState = () => ({
  loading: false,
  error: null,
  data: [],
  filter: {
    data: [],
    term: '',
    favoriteFilter: false,
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
      let repository = action.payload;
      repository = {
        favorite: false,
        ...repository,
      };
      const { id } = repository;
      const repositoryExists = state.data.filter(repo => repo.id === id).length > 0;
      const data = repositoryExists ? state.data : [repository, ...state.data];

      return {
        ...state,
        loading: false,
        data,
        filter: {
          ...state.filter,
          data: state.filter.favoriteFilter ? favoriteFilterData(data) : filterData(data, state.filter.term),
        }
      }
    }
    case `${TEMPLATE_NAME}_ADD_REJECTED`: {
      return {
        ...state,
        error: true,
      }
    }
    case `${TEMPLATE_NAME}_SEARCH`: {
      const term = action.payload;
      return {
          ...state,
          filter: {
              ...state.filter,
              term,
              data: state.filter.favoriteFilter 
                ? filterData(favoriteFilterData(state.data), term) 
                : filterData(state.data, term),
          },
      };
    }
    case `${TEMPLATE_NAME}_ORDER_BY`: {
      const key = action.payload;
      return {
          ...state,
          filter: {
              ...state.filter,
              data: orderByData(state.data, key),
          },
      };
    }
    case `${TEMPLATE_NAME}_REMOVE`: {
      const id = action.payload;
      const newData = state.data.filter(item => item.id !== id);
      return {
          ...state,
          data: newData,
          filter: {
              ...state.filter,
              data: filterData(newData, state.filter.term),
          },
      };
    }
    case `${TEMPLATE_NAME}_FAVORITE`: {
      const { id, value } = action.payload;
      const newData = state.data.map(item => {
        if (item.id === id) {
          item.favorite = value;
          return item;
        }
        return item;
      });

      return {
          ...state,
          data: newData,
          filter: {
              ...state.filter,
              data: state.filter.favoriteFilter ? filterData(favoriteFilterData(newData), state.filter.term) : filterData(newData, state.filter.term),
          },
      };
    }
    case `${TEMPLATE_NAME}_FAVORITE_FILTER`: {
      const value = action.payload;
      const data = state.data;
      const newData = value ? favoriteFilterData(data) : data;

      return {
          ...state,
          filter: {
              ...state.filter,
              data: filterData(newData, state.filter.term),
              favoriteFilter: value,
          },
      };
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
