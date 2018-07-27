import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { TheMovieDBService } from '../the-movie-db.service';

@Component({
  selector: 'app-search-films',
  templateUrl: './search-films.component.html',
  styleUrls: ['./search-films.component.css'],
  providers: [ TheMovieDBService ]
})
export class SearchFilmsComponent implements OnInit {
  movies: Movie[] = [];
  showNumCat = false;
  showPics = true;

  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    const movieSearchResults = this.theMovieDBService.getData();
    this.movies = movieSearchResults.results;
  }

  score(score: number) {
    if (this.showNumCat) {
      return score;
    } else {
      return this.scoreCategory(score);
    }
  }

  scoreCategory(score: number) {
    if (score >= 8) {
      return 'great';
    } else if (score >= 7) {
      return 'good';
    } else if (score >= 5.5) {
      return 'ok';
    } else {
      return 'bad';
    }
  }

  search(searchString: string) {
    console.log(searchString);
    this.movies = [];
    const movieSearchResults = this.theMovieDBService.getData();
    const movies = movieSearchResults.results;
    if (searchString.toLowerCase() === 'all'){
      this.movies = movies;
    } else {
      for (const movie of movies) {
        if (movie.title.toLowerCase().search(searchString.toLowerCase()) !== -1) {
          this.movies.push(movie);
        }
      }
      console.log(this.movies);
      if (this.movies.length === 0) {
        this.movies.push(new Movie(0, 'Niet gevonden', null, null, 0));

      }
    }
  }

}
