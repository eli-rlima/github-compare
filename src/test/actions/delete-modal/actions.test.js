import * as actions from 'redux/actions/delete-modal.action';

const TEMPLATE_NAME = 'DELETE_MODAL';

describe('sync actions', () => {
  it('must to return sucess in action open', () => {
    const mockRepository = {
      id: 1,
      full_name: 'liferay/senna.js',
      forks_count: 1313,
    };

    const expectedResult = {
      type: `${TEMPLATE_NAME}_OPEN`,
      payload: mockRepository,
    };

    expect(actions.open(mockRepository)).toEqual(expectedResult);
  });

  it('must to return sucess in action close', () => {
    const expectedResult = {
      type: `${TEMPLATE_NAME}_CLOSE`,
    };

    expect(actions.close()).toEqual(expectedResult);
  });

  it('must to return sucess in action reset', () => {
    const expectedResult = {
      type: `${TEMPLATE_NAME}_RESET`,
    };

    expect(actions.reset()).toEqual(expectedResult);
  })
})
