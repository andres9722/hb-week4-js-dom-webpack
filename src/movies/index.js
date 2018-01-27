import Controls from './components/Controls/Controls'
import Movies from './components/Movies/Movies'
import Grid from './components/Grid/Grid'
import DataMovies from './components/Data/DataMovies'

const URL = 'https://api.myjson.com/bins/13nux1'

DataMovies.get(URL, dataMovies => {
  const movies = dataMovies.map(movie => new Movies(movie))
  const grid = new Grid('.movies-container', movies, dataMovies)
  const controls = new Controls('.main-header',
                            grid.filterByCategory.bind(grid),
                            grid.reset.bind(grid),
                            dataMovies)
})
