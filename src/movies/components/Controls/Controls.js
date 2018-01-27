import './Controls.scss'

export default class Controls {
  constructor (selector, filterHandler, resetHandler, data) {
    this.node = document.querySelector(selector)
    this.setTemplateheader()
    this.categories = this.node.querySelector('.main-header__categories')
    this.setDataHeader(data)
    this.filterHandler = filterHandler
    this.resetHandler = resetHandler
    this.events()
  }

  setTemplateheader () {
    const headerCont = `
      <div class="main-header__container">
        <h1 class="main-header__title">MOVIES</h1>
        <div class="main-header__categories">
          <button class="main-header__button main-header__button--reset">Reset</button>
        </div>
      </div>
    `

    this.node.innerHTML = headerCont
  }

  setDataHeader (data) {
    const categories = []
    data.forEach(movie => {
      if (categories.indexOf(movie.category) < 0) {
        categories.push(movie.category)
      }
    })

    const temporalNode = document.createDocumentFragment()
    categories.forEach(category => {
      const moviesCategories = document.createElement('div')
      const moviesContent = `
        <button class="main-header__button main-header__button--${category.toLowerCase()}">${category.toLowerCase()}</button>
        `
      moviesCategories.classList.add('main-header__category')
      moviesCategories.innerHTML = moviesContent
      temporalNode.appendChild(moviesCategories)
    })

    this.categories.appendChild(temporalNode)
  }

  events () {
    this.node.addEventListener('click', e => {
      const clicked = e.target
      if (clicked.classList.contains('main-header__button--reset')) {
        this.resetHandler()
        return false
      }

      if (clicked.classList.contains('main-header__button')) {
        this.filterHandler(clicked.textContent)
      }
    })
  }
}
