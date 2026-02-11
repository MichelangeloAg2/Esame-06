import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Update the import path if 'movie.service.ts' is located elsewhere, for example:
//import { MovieService } from '../../../services/movie.service';
// Or adjust the path to match the actual location of 'movie.service.ts'
//import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //movie!: Movie;
  //popularMovies: Movie[] = [];
  //suggestedMovies: Movie[] = [];

  //constructor(
  //private route: ActivatedRoute,
  //private movieService: MovieService
  //) { }

  //ngOnInit(): void {
  //const id = Number(this.route.snapshot.paramMap.get('id'));
  //this.movie = this.movieService.getMovieById(id)!;

  //this.popularMovies = this.movieService.getPopular();
  //this.suggestedMovies = this.movieService.getSuggested();
  //}
}
