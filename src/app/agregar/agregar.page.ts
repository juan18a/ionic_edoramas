import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.models';
import { MoviesService } from '../services/movies/movies.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  movie: Movie = new Movie();
  constructor(private movieServicio: MoviesService, public loadingController: LoadingController, public toastController: ToastController, private activatedRoute: ActivatedRoute) { }

  esEditable: boolean;


  ngOnInit() {
      
       

        if(this.activatedRoute.snapshot.params.movieEditar != undefined){

          this.movie = new Movie(JSON.parse(this.activatedRoute.snapshot.params.movieEditar));
            this.esEditable = true;


        }

        

  }

  async guardar(){
     
    
      const loading = await this.loadingController.create({
        message: 'Guardando',
        
      });

      await loading.present();

    


      this.movieServicio.agregarMovie(this.movie).subscribe(()=>{
          loading.dismiss();
          this.mostrarMensaje('Pelicula o Serie Guardada.');
          this.movie = new Movie(null);
      },(error)=>{
          
        loading.dismiss();
        this.mostrarMensaje('Ocurrio un error.');
      });
      
  }

  async editar(){
     
    
    const loading = await this.loadingController.create({
      message: 'Actualizando',
      
    });

    await loading.present();

  


    this.movieServicio.editarMovie(this.movie).subscribe(()=>{
        loading.dismiss();
        this.mostrarMensaje('Pelicula o Serie Actualizada.');
       
    },(error)=>{
        
      loading.dismiss();
      this.mostrarMensaje('Ocurrio un error.');
    });
    
}


  async mostrarMensaje(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });

    toast.present();
  }

}
