import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'info/:pokemon',
    loadChildren: () => import('./home/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'moves/:pokemon',
    loadChildren: () => import('./home/moves/moves.module').then( m => m.MovesPageModule)
  },
  {
    path: 'games/:pokemon',
    loadChildren: () => import('./home/games/games.module').then( m => m.GamesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
