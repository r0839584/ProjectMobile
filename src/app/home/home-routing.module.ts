import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'moves',
    loadChildren: () => import('./moves/moves.module').then( m => m.MovesPageModule)
  },
  {
    path: 'games',
    loadChildren: () => import('./games/games.module').then( m => m.GamesPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
