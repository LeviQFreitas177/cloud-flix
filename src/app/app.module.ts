import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FullBannerComponent } from './components/full-banner/full-banner.component';
import { ListTitlesComponent } from './components/list-titles/list-titles.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { TrailerKnivesOutComponent } from './components/trailers/trailer-knives-out/trailer-knives-out.component';
import { TrailerGuardiansOfTheGalaxyComponent } from './components/trailers/trailer-guardians-of-the-galaxy/trailer-guardians-of-the-galaxy.component';
import { TrailerAvengersComponent } from './components/trailers/trailer-avengers/trailer-avengers.component';
import { TrailerAvatarComponent } from './components/trailers/trailer-avatar/trailer-avatar.component';
import { TrailerSpiderManComponent } from './components/trailers/trailer-spider-man/trailer-spider-man.component';
import { TrailerTenetComponent } from './components/trailers/trailer-tenet/trailer-tenet.component';
import { SearchComponent } from './components/search/search.component';
import { DropComponent } from './components/drop/drop.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { TrailerAvengersEndgameComponent } from './components/trailers/trailer-avengers-endgame/trailer-avengers-endgame.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FullBannerComponent,
    ListTitlesComponent,
    HomeContentComponent,
    TrailerSpiderManComponent,
    TrailerTenetComponent,
    TrailerKnivesOutComponent,
    TrailerGuardiansOfTheGalaxyComponent,
    TrailerAvengersComponent,
    TrailerAvatarComponent,
    SearchComponent,
    DropComponent,
    MovieItemComponent,
    TrailerAvengersEndgameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
