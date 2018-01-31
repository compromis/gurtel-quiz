import axios from 'axios'

class Backend {
  constructor () {
    this.quizArchiveUrl = 'https://compromis.net/quiz/'
    this.apiBaseUrl = 'https://compromis.net/quiz/backend/'
    this.quizId = 'gurtel'
  }

  getArchive () {
    return this._call('GET', 'archive')
  }

  postScore (params) {
    return this._call('POST', 'score', params)
  }

  postStats (params) {
    return this._call('POST', 'stats', params)
  }

  getScores (params) {
    return this._call('GET', 'scores', params)
  }

  _call (method, endpoint, params) {
    const baseURL = endpoint === 'archive' ? this.quizArchiveUrl : this.apiBaseUrl + this.quizId
    const url = endpoint === 'archive' ? '/quizzes.php' : '/' + endpoint

    return new Promise((resolve, reject) => {
      axios({
        baseURL,
        method,
        url,
        params,
        responseType: 'json'
      }).then((result) => {
        resolve(result)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

const API = new Backend()
export default API
