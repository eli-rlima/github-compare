import * as repositoriesApi from 'api/repositories';
import * as actionsRepositories from './actions';
import * as actions from 'redux/actions/repositories.action';

const TEMPLATE_NAME = 'REPOSITORIES';

describe('App actions tests', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe('async actions', () => {
    it('must to return success action on success search', () => {
      jest
        .spyOn(repositoriesApi, 'search')
        .mockImplementation(() => Promise.resolve({ mock: 'mock' }));

      const dispatchMock = jest.fn();

      const promise = actionsRepositories.fetchRepository()(dispatchMock);

      return promise.then(() => {
        const argOfFirstCall = dispatchMock.mock.calls[0][0];
        const argOfSecondCall = dispatchMock.mock.calls[1][0];

        expect(argOfFirstCall).toEqual({ type: `${TEMPLATE_NAME}_PENDING` });

        expect(argOfSecondCall).toEqual({
          type: `${TEMPLATE_NAME}_FULFILLED`,
          payload: { mock: 'mock' },
        });
      })
    })

    it('must to return failure action on failure search', () => {
      jest
        .spyOn(repositoriesApi, 'search')
        .mockImplementation(() => Promise.reject({ error: 'Error' }));

      const dispatchMock = jest.fn();

      const promise = actionsRepositories.fetchRepository()(dispatchMock);

      return promise.then(() => {
        const argOfFirstCall = dispatchMock.mock.calls[0][0];
        const argOfSecondCall = dispatchMock.mock.calls[1][0];

        expect(argOfFirstCall).toEqual({ type: `${TEMPLATE_NAME}_PENDING` });

        expect(argOfSecondCall).toEqual({
          type: `${TEMPLATE_NAME}_REJECTED`,
          error: { error: 'Error' },
        });
      });
    }); 
  });

  describe('sync actions', () => {
    it('must to return sucess in acion remove', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_REMOVE`,
        payload: 12,
      };
  
      expect(actions.remove(12)).toEqual(expectedResult);
    });
  
    it('must to return sucess in action favorite', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_FAVORITE`,
        payload: { id: 12, value: true },
      };
  
      expect(actions.favorite(12, true)).toEqual(expectedResult);
    });

    it('must to return sucess in action favorite filter', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_FAVORITE_FILTER`,
        payload: true,
      };

      expect(actions.favoriteFilter(true)).toEqual(expectedResult);
    });

    it('must to return sucess in action search', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_SEARCH`,
        payload: 'liferay/senna.js',
      };

      expect(actions.search('liferay/senna.js')).toEqual(expectedResult);
    });

    it('must to return sucess in action orderBy', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_ORDER_BY`,
        payload: 'created_at',
      };

      expect(actions.orderBy('created_at')).toEqual(expectedResult);
    });

    it('must to return sucess in action error', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_ERROR`,
        payload: false,
      };

      expect(actions.error(false)).toEqual(expectedResult);
    });

    it('must to return sucess in action reset', () => {
      const expectedResult = {
        type: `${TEMPLATE_NAME}_RESET`,
      };
  
      expect(actions.reset()).toEqual(expectedResult);
    })
  });
});
