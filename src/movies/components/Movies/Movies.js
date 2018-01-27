import './Movies.scss'

export default class Movies {
  constructor (movie) {
    this.movie = `
    <img class="movies-item__image" src="${movie.image}">
      <h1 class="movies-item__name">${movie.title}</h1>
      <div class="movies-item__info">
        <h2 class="movies-item__title" data-genre=${movie.category.toLowerCase()}>${movie.title}</h2>
        <p class="movies-item__director">  <b> Director: </b>  ${movie.director}</p>
        <p class="movies-item__category"> <b> Category: </b> ${movie.category}</p>
        <p class="movies-item__year"> <b> Year: </b> ${movie.year}</p>
        <p class="movies-item__stars"> <b>Stars: </b>${movie.starts}</p>
        <img class="movies-item__camera" src="https://image.flaticon.com/icons/svg/263/263068.svg">
    </div>
    `
  }
}
