const TEMPLATE_NAME = 'DELETE_MODAL';

const initialState = () => ({
  isOpened: false,
  repository: {},
});

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_OPEN`: {
      const repository = action.payload;
      return {
        ...state,
        repository,
        isOpened: true,
      }
    }
    case `${TEMPLATE_NAME}_CLOSE`: {
      return {
        ...state,
        repository: {},
        isOpened: false,
      }
    }
    case `${TEMPLATE_NAME}_RESET`: {
      return initialState();
    }
    default:
      return state;
  }
}

export default reducer;

