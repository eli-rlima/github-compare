const TEMPLATE_NAME = 'POPUP';

const initialState = () => ({
  isOpened: false,
});

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case `${TEMPLATE_NAME}_OPEN`: {
      const show = action.payload;
      return {
        ...state,
        isOpened: show,
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
