import { createReducer } from 'redux-create-reducer'
// I like my reducers to specify which actions belongs to them
export const CRUD_NEWS = 'my-awesome-app/news/LOAD';
export const CRUD_NEWS_SUCCESS = 'my-awesome-app/news/LOAD_SUCCESS';
export const CRUD_NEWS_FAIL = 'my-awesome-app/news/LOAD_FAIL';



export default createReducer([], {
	[CRUD_NEWS](state, action) {
		return { ...state, loading: true };
	},
	[CRUD_NEWS_SUCCESS](state, action) {
		console.log('before', state)
		const after = { ...state, loading: false, news: action.payload.data }
		console.log(after)
    return after
	},
	[CRUD_NEWS_FAIL](state, action) {
    return { ...state, loading: false, error: action.payload };
	},
})





export function CRUD({method, headers, data, url, ...rest}) {
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
        url: '/news' + final_url,
        ...rest
      }
    }
  };
}


export const getNews = state => state.news
