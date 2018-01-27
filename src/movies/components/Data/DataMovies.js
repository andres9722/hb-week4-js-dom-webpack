export default class DataMovies {
  static get (url, cb) {
    /* eslint-disable */
    fetch (url)
      .then(res => res.json())
      .then(res => {
        return res.movies
      })
      .then(cb)
      .catch(err => console.log(err))
  }
}
