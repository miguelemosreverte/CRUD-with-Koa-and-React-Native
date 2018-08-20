
export const GET_NEWS = 'my-awesome-app/news/LOAD';
export const GET_NEWS_SUCCESS = 'my-awesome-app/news/LOAD_SUCCESS';
export const GET_NEWS_FAIL = 'my-awesome-app/news/LOAD_FAIL';

export function news_reducer(state = { news: [] }, action) {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true };
    case GET_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload.data };
    case GET_NEWS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export function listNews() {
  return {
    type: GET_NEWS,
    payload: {
      request: {
        url: `/news`
      }
    }
  };
}


export const getNews = state => state.news
