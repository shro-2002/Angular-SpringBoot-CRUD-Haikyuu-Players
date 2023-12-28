import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';


const routes: Routes = [
  { path: 'players', component: PlayerListComponent },
  { path: 'create-players', component: CreatePlayerComponent},
  { path: 'edit-players/:id', component: UpdatePlayerComponent},
  { path: 'player-details/:id', component: PlayerDetailsComponent },
  { path: '', redirectTo: 'players', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
