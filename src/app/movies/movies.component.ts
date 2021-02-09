import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Movies } from '../movie.datasource';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor() {}

  title = 'Movie List';
  movies = Movies;
  selectedMovie: Movie;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  ngOnInit(): void {}
}
