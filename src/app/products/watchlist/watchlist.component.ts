import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})


export class WatchlistComponent {
  watchlistMovies: any[] = [];



  constructor(private service: MoviesService){}
ngOnInit(){
  let watchlistItems:any = localStorage.getItem('watchlist') || []
  let parsedWatchlistItems = watchlistItems ? JSON.parse(watchlistItems) : [];


  console.log(`Watchlist: ${parsedWatchlistItems}`);

  // let moviesFetch = this.service.getAllMovies().subscribe((moviesResponse) => {console.log(moviesResponse);})
  // console.log(parsedWatchlistItems);
  
  for (const movie of parsedWatchlistItems) {
    this.service.getMovie(movie).subscribe((movie) => {
      console.log(movie);
      this.watchlistMovies.push(movie);})
    }
  }

  deleteFromWatchlist(movieId:number){
    console.log(movieId);
    //? Delete movie on the page
    this.watchlistMovies.splice(this.watchlistMovies.findIndex(movie => movie.id === movieId), 1)

    //? Delete from local storage
    let watchlistArray = JSON.parse(localStorage.getItem('watchlist') ?? '[]') as number[];
    console.log(watchlistArray);
  
    const index = watchlistArray.findIndex(id => id === movieId);
    if (index !== -1) {
      watchlistArray.splice(index, 1);
      localStorage.setItem('watchlist', JSON.stringify(watchlistArray));
    }
  }
}