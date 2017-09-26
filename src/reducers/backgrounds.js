import { FETCHED_BACKGROUNDS } from '../actions/fetch'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_BACKGROUNDS :
      return [...payload]

    default :
      return state
  }
}
