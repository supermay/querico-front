import request from 'superagent'

export const FETCHED_BACKGROUNDS = 'FETCHED_BACKGROUNDS'

const RAILS_HOST = 'http://localhost:3000/api'

export default () => {
  return (dispatch) => {
    request.get(RAILS_HOST + '/backgrounds.json')
    .set('Accept', 'application/json')
    .then((response) => {
      console.log(response.body);
      dispatch({
            type: FETCHED_BACKGROUNDS,
            payload: response.body.backgrounds
          });
      })
    }
}
