const TEMPLATE_NAME = 'DELETE_MODAL';

export const open = repository => {
  return {
    type: `${TEMPLATE_NAME}_OPEN`,
    payload: repository,
  }
}

export const close = () => {
  return {
    type: `${TEMPLATE_NAME}_CLOSE`,
  }
}

export const reset = () => {
  return {
    type: `${TEMPLATE_NAME}_RESET`,
  }
}
