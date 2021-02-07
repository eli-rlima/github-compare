import * as actions from 'redux/actions/async.action';

const TEMPLATE_TYPE = 'REPOSITORIES';

describe('sync actions', () => {
  it('must to return sucess in action open', () => {
    const mockRepository = {
      id: 1,
      full_name: 'liferay/senna.js',
      forks_count: 1313,
    };

    const expectedResult = {
      type: `${TEMPLATE_TYPE}_FULFILLED`,
      payload: mockRepository,
    };

    expect(actions.fulfilled(TEMPLATE_TYPE, mockRepository)).toEqual(expectedResult);
  });

  it('must to return sucess in action close', () => {
    const expectedResult = {
      type: `${TEMPLATE_TYPE}_REJECTED`,
      payload: { error: 'error' },
    };

    expect(actions.rejected(TEMPLATE_TYPE, { error: 'error' })).toEqual(expectedResult);
  });

  it('must to return sucess in action reset', () => {
    const expectedResult = {
      type: `${TEMPLATE_TYPE}_PENDING`,
      payload: null,
    };

    expect(actions.pending(TEMPLATE_TYPE)).toEqual(expectedResult);
  })
})
