import { LOGIN_SUCCESS } from '../types'

const existUser = localStorage.getItem('user')

const initialState = {
  isLoggedIn: existUser ? true : false,
  user: existUser && JSON.parse(existUser),
}

export default function (state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      }
    default:
      return state
  }
}
