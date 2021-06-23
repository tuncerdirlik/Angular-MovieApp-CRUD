import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];
  movieLength: number = 0;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies(5);
  }

  getMovies(take: number): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies.slice(0, take);
      this.movieLength = movies.length;
    });
  }

}
