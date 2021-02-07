const TEMPLATE_NAME = 'POPUP';

export const show = show => {
  return {
    type: `${TEMPLATE_NAME}_OPEN`,
    payload: show,
  }
}

export const reset = () => {
  return {
    type: `${TEMPLATE_NAME}_RESET`,
  }
}
