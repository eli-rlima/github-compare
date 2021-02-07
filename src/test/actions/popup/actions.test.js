import * as actions from 'redux/actions/popup.action';

const TEMPLATE_NAME = 'POPUP';

describe('sync actions', () => {
  it('must to return sucess in action open', () => {
    const expectedResult = {
      type: `${TEMPLATE_NAME}_OPEN`,
      payload: true,
    };

    expect(actions.show(true)).toEqual(expectedResult);
  });

  it('must to return sucess in action close', () => {
    const expectedResult = {
      type: `${TEMPLATE_NAME}_OPEN`,
      payload: false,
    };

    expect(actions.show(false)).toEqual(expectedResult);
  });

  it('must to return sucess in action reset', () => {
    const expectedResult = {
      type: `${TEMPLATE_NAME}_RESET`,
    };

    expect(actions.reset()).toEqual(expectedResult);
  })
})
