import './Grid.scss'

export default class Grid {
  constructor (node, movies) {
    this.node = document.querySelector(node)
    this.templateMovies()
    this.moviesList = this.node.querySelector('.movies-container__list')
    this.setMovies(movies)
    this.setClass()
    this.list = this.node.querySelectorAll('.movies-item')
    this.i = 0
    this.eventTarget()
  }

  templateMovies () {
    const moviesList = `
            <ul class="movies-container__list"></ul>
          `
    this.node.innerHTML = moviesList
  }

  setMovies (movies) {
    const temporalNode = document.createDocumentFragment()
    movies.forEach(movie => {
      const element = document.createElement('li')
      element.innerHTML = movie.movie
      element.classList.add('movies-item')
      temporalNode.appendChild(element)
    })

    this.moviesList.appendChild(temporalNode)
  }

  setClass () {
    const elements = document.querySelectorAll('.movies-item__title')
    elements.forEach(el => {
      const className = el.getAttribute('data-genre')
      el.parentElement.parentElement.classList.add(`movies-item--${className}`)
    })
  }

  filterByCategory (categoryId) {
    this.reset()
    this.list.forEach(movie => {
      if (!movie.classList.contains(`movies-item--${categoryId}`)) {
        movie.classList.add('hidden')
      }
    })
  }

  reset () {
    this.list.forEach(movie => {
      movie.classList.remove('hidden')
      movie.classList.remove('movies-item--active')
    })
  }

  eventTarget () {
    this.list.forEach(element => {
      element.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains('movies-item')) {
          const i = Array.from(this.list).indexOf(target)
          if (i !== this.i) {
            this.list[this.i].classList.remove('movies-item--active')
          }
          this.i = i
          this.list[i].classList.toggle('movies-item--active')
        }
      })
    })
  }
}
