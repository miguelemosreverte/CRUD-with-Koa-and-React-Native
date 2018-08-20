import { createReducer } from 'redux-create-reducer'
// I like my reducers to specify which actions belongs to them
export const AUTH = 'my-awesome-app/auth/LOAD';
export const AUTH_SUCCESS = 'my-awesome-app/auth/LOAD_SUCCESS';
export const AUTH_FAIL = 'my-awesome-app/auth/LOAD_FAIL';



export default createReducer({}, {
	[AUTH](state, action) {
		return { ...state, loading: true };
	},
	[AUTH_SUCCESS](state, action) {
    return { ...state, loading: false, auth: action.payload.data };
	},
	[AUTH_FAIL](state, action) {
    return { ...state, loading: false, error: action };
	},
})





const _auth = ({email, password}, url) => ({
    type: AUTH,
    payload: {
      request: {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        data: {email, password},
        url: url
      }
    }
  })
export const login    = (param) => _auth(param, '/login')
export const register = (param) => _auth(param, '/register')


export const getAuth = state => state.auth
