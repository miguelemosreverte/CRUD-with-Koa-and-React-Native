
// I like my reducers to specify which actions belongs to them
export const AUTH = 'my-awesome-app/AUTH/LOAD';
export const AUTH_SUCCESS = 'my-awesome-app/AUTH/LOAD_SUCCESS';
export const AUTH_FAIL = 'my-awesome-app/AUTH/LOAD_FAIL';

export default function authentication (state = { AUTH: [] }, action) {
  switch (action.type) {
    case AUTH:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, loading: false, AUTH: action.payload.data };
    case AUTH_FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

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



export const getLogin = state => state.authentication
