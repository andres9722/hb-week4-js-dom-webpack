import logo from './assets/img/webpack-logo.svg'
import './index.scss'

const main = `
  <div class="main-container">
    <img src=${logo} class="main-container__img">
    <h1 class="main-container__title">hb-week4-js-dom</h1>
    <a href="gallery.html" class="main-container__button">Gallery</a>
    <a href="movies.html" class="main-container__button">Movies Fetch</a>
  </div>
`

document.querySelector('.root').innerHTML = main
