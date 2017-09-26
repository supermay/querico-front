import request from 'superagent'

const RAILS_TOKEN_KEY = 'querico'
const RAILS_HOST = 'http://localhost:3000'
const host = RAILS_HOST

export default class API {

  constructor() {
    this.request = request;
    this.setupDefaultHeaders();
  }

  setupDefaultHeaders() {
  this.request
    .set('Accept', 'application/json')
    .set('Content-type', 'application/json')
