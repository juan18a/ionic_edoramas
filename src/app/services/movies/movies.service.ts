import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.models';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  API_ENDPOINT = "https://edoramas1.herokuapp.com/api/movies";

  constructor(public http: HttpClient) { }



  verMovies(): Observable<Movie[]> {
      return this.http.get<Movie[]>(this.API_ENDPOINT, httpOptions);
  }

  porMovieID(id: number) : Observable<Movie>{
    return this.http.get<Movie>(this.API_ENDPOINT + "/" + id,  httpOptions);
  }


  agregarMovie(movie: Movie): Observable<boolean>{
      return this.http.post<boolean>(this.API_ENDPOINT , movie,  httpOptions);
  }

  eliminarMovie(id: number): Observable<boolean>{
      return this.http.delete<boolean>(this.API_ENDPOINT + "/" + id, httpOptions)
  }

  editarMovie(movie: Movie): Observable<boolean>{
    return this.http.put<boolean>(this.API_ENDPOINT + "/" + movie.id , movie, httpOptions);
  }



}
