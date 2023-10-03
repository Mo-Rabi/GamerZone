import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Movies } from 'src/app/shared/interfaces/movies';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiURL ="https://api.themoviedb.org/3";
  apiKey ="3b19eb14d90057338aeb6e74f25ddb7e"
  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=3b19eb14d90057338aeb6e74f25ddb7e")
  }

  //!?Movie details page
  getMovie(id : number): Observable<Movies> {
    const url = `${this.apiURL}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<Movies>(url);
  }

  /////////////////////////////////

  getRandomMovies(count: number): Observable<Movies[]> {
    const randomMovieIds: number[] = this.generateRandomMovieIds(count);

    const randomMoviesObservable: Observable<Movies>[] = randomMovieIds.map(id => {
      const url = `${this.apiURL}/movie/${id}?api_key=${this.apiKey}`; 
      return this.http.get<Movies>(url);
    });

    return forkJoin(randomMoviesObservable);
  }

  private generateRandomMovieIds(count: number): number[] {
    const maxMovieId = 1000; 
    const randomMovieIds: number[] = [];

    for (let i = 0; i < count; i++) {
      const randomId = Math.floor(Math.random() * maxMovieId) + 1;
      randomMovieIds.push(randomId);
    }

    return randomMovieIds;
  }
}
