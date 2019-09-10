const LOGIN_START = 'LOGIN_START'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const initialState = {
  isAuthorized: false,
  loading: false,
}

export const login = () => (dispatch) => {
  // firebase call
  dispatch({
    type: LOGIN_START,
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      console.log('Login start')
      return {
        ...state,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: true,
      }
    default:
      return state
  }
}

export default reducer
