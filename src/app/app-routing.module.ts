import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listado-movies',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'listado-movies', loadChildren: './listado-movies/listado-movies.module#ListadoMoviesPageModule' },
  { path: 'detalle-movie/:id', loadChildren: './detalle-movie/detalle-movie.module#DetalleMoviePageModule' },
  { path: 'agregar', loadChildren: './agregar/agregar.module#AgregarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
