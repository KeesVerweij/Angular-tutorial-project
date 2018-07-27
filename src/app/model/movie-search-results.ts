import { Movie } from '../model/movie';

export class MovieSearchResults {
  constructor(
    public page: number,
    public total_results: number,
    public total_pages: number,
    public results: Movie[]
  ) { }
}
