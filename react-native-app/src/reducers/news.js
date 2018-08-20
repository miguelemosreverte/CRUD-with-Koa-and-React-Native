
// I like my reducers to specify which actions belongs to them
export const CRUD_NEWS = 'my-awesome-app/news/LOAD';
export const CRUD_NEWS_SUCCESS = 'my-awesome-app/news/LOAD_SUCCESS';
export const CRUD_NEWS_FAIL = 'my-awesome-app/news/LOAD_FAIL';

export default function news (state = { news: [] }, action) {
  switch (action.type) {
    case CRUD_NEWS:
      return { ...state, loading: true };
    case CRUD_NEWS_SUCCESS:
      return { ...state, loading: false, news: action.payload.data };
    case CRUD_NEWS_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

export function CRUD({method, headers, data, url}) {
  const sanitized_url = url || ""
  const url_needs_fixing = sanitized_url[0] != "/" && sanitized_url !== undefined
  const final_url = url_needs_fixing? "/" + sanitized_url : sanitized_url
  return {
    type: CRUD_NEWS,
    payload: {
      request: {
        method,
        headers,
        data,
        url: '/news' + final_url
      }
    }
  };
}


export const getNews = state => state.news
