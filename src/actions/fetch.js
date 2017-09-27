import request from 'superagent'

export const FETCHED_BACKGROUNDS = 'FETCHED_BACKGROUNDS'
export const FETCHED_CAKES = 'FETCHED_BACKGROUNDS'

const RAILS_HOST = 'http://localhost:3000/api'

export function fetchBackgrounds(){
  return (dispatch) => {
    request.get(RAILS_HOST + '/backgrounds.json')
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('fetched backgrounds:',response.body);
      dispatch({
            type: FETCHED_BACKGROUNDS,
            payload: response.body
          });
      })
    }
}

export function fetchCakes(){
  return (dispatch) => {
    request.get(RAILS_HOST + '/cakes.json')
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('fetched cakes:',response.body);
      dispatch({
            type: FETCHED_CAKES,
            payload: response.body
          });
      })
    }
}
