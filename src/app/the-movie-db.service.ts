import { Injectable } from '@angular/core';
import { Movie } from './model/movie';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDBService {

  constructor() { }

  getData(): Movie[] {
    const movies = [];
    movies.push(new Movie(1, 'Office Space', '2010-05-16', '...', 8.1));
    movies.push(new Movie(1, 'Titanic', '2012-12-16', '...', 5.1));
    movies.push(new Movie(1, 'Henk the movie', '2018-07-28', '...', 9.8));
    return movies;
  }

}
