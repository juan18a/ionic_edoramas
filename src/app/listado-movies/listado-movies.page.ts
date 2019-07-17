import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies/movies.service';
import { Movie } from '../models/movie.models';
import { Router, Route } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listado-movies',
  templateUrl: './listado-movies.page.html',
  styleUrls: ['./listado-movies.page.scss'],
})
export class ListadoMoviesPage implements OnInit {

  movies: Movie[];

  constructor(private moviesServicio: MoviesService, private route: Router, public alertController: AlertController) {
   
   }

  ngOnInit() {
    this.moviesServicio.verMovies().subscribe((movies)=>{
      this.movies = movies;
 
  }, (error)=>{
    console.log(error);
  });
  }

 

  irDetalle(movie: Movie){
      this.route.navigate(['detalle-movie', {movieT: JSON.stringify(movie)}])
  }

  async eliminarMovie(id: number, indice: number){

    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: '<strong>¿Desea Borrar este elemento?</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'OK',
          handler: () => {
            

            this.moviesServicio.eliminarMovie(id).subscribe(()=>{
              this.movies.splice(indice,1);
            },(error)=>{
              console.log(error);
            });
          }
        }
      ]
    });

    await alert.present();


 
  }

  editar(movie: Movie){
    
    this.route.navigate(['/agregar', { movieEditar: JSON.stringify(movie) }])
  }

}
