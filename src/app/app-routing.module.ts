import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrailerAvatarComponent } from './components/trailers/trailer-avatar/trailer-avatar.component';
import { TrailerAvengersComponent } from './components/trailers/trailer-avengers/trailer-avengers.component';
import { TrailerGuardiansOfTheGalaxyComponent } from './components/trailers/trailer-guardians-of-the-galaxy/trailer-guardians-of-the-galaxy.component';
import { TrailerKnivesOutComponent } from './components/trailers/trailer-knives-out/trailer-knives-out.component';
import { TrailerSpiderManComponent } from './components/trailers/trailer-spider-man/trailer-spider-man.component';
import { TrailerTenetComponent } from './components/trailers/trailer-tenet/trailer-tenet.component';
import { SearchComponent } from './components/search/search.component';
import { DropComponent } from './components/drop/drop.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TrailerAvengersEndgameComponent } from './components/trailers/trailer-avengers-endgame/trailer-avengers-endgame.component';
import { HomeContentComponent } from './components/home-content/home-content.component';

const routes: Routes = [
  {path: '', component: HomeContentComponent},
  {path: 'teste', component: MovieItemComponent},
  {path: 'search', component: SearchComponent},

  {path: 'description/Avatar', component: TrailerAvatarComponent},
  {path: 'description/Avengers', component: TrailerAvengersComponent},
  {path: 'description/GuardiansOfTheGalaxy', component: TrailerGuardiansOfTheGalaxyComponent},
  {path: 'description/KnivesOut', component: TrailerKnivesOutComponent},
  {path: 'description/SpiderMan', component: TrailerSpiderManComponent},
  {path: 'description/Tenet', component: TrailerTenetComponent},
  {path: 'description/Avengers-endgame', component: TrailerAvengersEndgameComponent}


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
