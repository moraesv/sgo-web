import { handleActions } from 'redux-actions'
import types from './types'

const INITIAL_STATE = {
  profile: null,
}

const reducer = handleActions(
  {
    [types.PROFILE]: (state, { profile }) => ({
      ...state,
      profile,
    }),
  },
  INITIAL_STATE
)

export default reducer
