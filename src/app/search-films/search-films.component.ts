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

  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.movies = this.theMovieDBService.getData();
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

}
