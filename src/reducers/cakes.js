import { FETCHED_CAKES } from '../actions/fetch'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_CAKES :
      return [...payload]

    default :
      return state
  }
}
