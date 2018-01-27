import './gallery.scss'

export class Gallery {
  constructor (container, data) {
    this.i = 0
    this.template(container)
    this.setImages(data)
    this.setDots(data)
    this.navigateGallery(container, data)
    this.navigateDots(data)
  }

  template (container) {
    let galleryContainer = `
        <nav class='gallery-container__navigation'>
          <a href="" class="gallery-navigation__button prev"></a>
          <a href="" class="gallery-navigation__button next"></a>
        </nav>
        <ul class='gallery-container__images'></ul>
        <ul class='gallery-container__dots'></ul>
      `
    container.innerHTML = galleryContainer
  }

  setImages (data) {
    data.forEach(img => {
      let images = document.createElement('li')
      let galleryContent = `
            <img src='${img}' class='gallery-image'>
        `
      images.classList.add('gallery-figure')
      images.innerHTML = galleryContent
      document.querySelector('.gallery-container__images').appendChild(images)
    })
  }

  setDots (data) {
    data.forEach(img => {
      let dots = document.createElement('li')
      let dotsContent = `
            <div class='gallery-image__dot'></div>
        `
      dots.classList.add('gallery-dot')
      dots.innerHTML = dotsContent
      document.querySelector('.gallery-container__dots').appendChild(dots)
    })
  }

  navigateGallery (container, data) {
    let prev = document.querySelector('.prev')
    let next = document.querySelector('.next')
    let image = document.querySelectorAll('.gallery-figure')
    let dots = document.querySelectorAll('.gallery-dot')

    if (this.i === 0) {
      prev.classList.add('disabled')
      image[this.i].classList.add('show')
      dots[this.i].classList.add('selected')
    }

    container.addEventListener('keyup', e => {
      if (e.key === 'ArrowRight') next.click()
      if (e.key === 'ArrowLeft') prev.click()
    })

    container.addEventListener('click', e => {
      e.preventDefault()
      let target = e.target

      if (target === prev) {
        this.goPrev()
      } else if (target === next) {
        this.goNext()
      }

      this.i === 0 ? prev.classList.add('disabled') : prev.classList.remove('disabled')
      this.i === image.length - 1 ? next.classList.add('disabled') : next.classList.remove('disabled')
    })
  }

  navigateDots (data) {
    let dotsContainer = document.querySelector('.gallery-container__dots')
    let dots = document.querySelectorAll('.gallery-dot')

    dotsContainer.addEventListener('click', e => {
      let target = e.target
      if (target.tagName === 'LI') {
        let i = Array.from(dots).indexOf(target)
        this.changeIndex(i)
      }
    })
  }

  changeIndex (i) {
    let image = document.querySelectorAll('.gallery-figure')
    let dots = document.querySelectorAll('.gallery-dot')

    if (i >= 0 && i < image.length && i !== this.i) {
      image[this.i].classList.remove('show')
      dots[this.i].classList.remove('selected')
      this.i = i
      image[this.i].classList.add('show')
      dots[this.i].classList.add('selected')
    }
  }

  goNext () {
    this.changeIndex(this.i + 1)
  }

  goPrev () {
    this.changeIndex(this.i - 1)
  }
}
