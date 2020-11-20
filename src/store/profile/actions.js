import store from '..'
import types from './types'

export function setProfile(profile) {
  store.dispatch({ type: types.PROFILE, profile })
}
