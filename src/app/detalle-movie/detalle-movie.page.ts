import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie.models';
import { MoviesService } from '../services/movies/movies.service';

@Component({
  selector: 'app-detalle-movie',
  templateUrl: './detalle-movie.page.html',
  styleUrls: ['./detalle-movie.page.scss'],
})
export class DetalleMoviePage implements OnInit {

  movie: Movie;
  cargo: boolean = false;

  constructor(private router: ActivatedRoute, private movieServicio: MoviesService) { }
  
  

  ngOnInit() {


    this.router.params.subscribe((id)=>{
      console.log(id)

      this.movieServicio.porMovieID(id.id).subscribe((movie)=>{
          this.movie = movie;
          this.cargo = true;

          console.log(movie);

      })

    })



  }

}
