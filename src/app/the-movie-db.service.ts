import { Injectable } from '@angular/core';
import { Movie } from './model/movie';
import { MovieSearchResults } from './model/movie-search-results';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDBService {

  constructor() { }

  getData(): MovieSearchResults {
    const movies = [];
    movies.push(new Movie(
      1,
      'Office Space',
      '2010-05-16',
      'https://m.media-amazon.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_.jpg',
      8.1
    ));
    movies.push(new Movie(
      1,
      'Titanic',
      '2012-12-16',
      'https://www.onthisday.com/images/articles/titanic-the-movie.jpg',
      5.1
    ));
    movies.push(new Movie(
      1,
      'Henk the movie',
      '2018-07-28',
      'https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/9/3/7/1002004009597399.jpg',
      9.8));

    return new MovieSearchResults(1, 20, 1, movies);
  }

}
