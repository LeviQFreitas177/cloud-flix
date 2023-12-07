import { Component, Input } from '@angular/core';;

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})

export class ListTitlesComponent {

  @Input() title: string | undefined;
  @Input() title2: string | undefined;

  myMovieList: any[] =[];
  addedMovies: any[] = [];


  movieList = [
    {
      cover: "assets/images/GuardiansOfTheGalaxyu.JPG",
      name: "Guardians Of The Galaxy",
      rate: '8.0',
      age: '12',
      year: '2014',
      parts: '2',
      categories: [ "Action", "Adventure", "Comedy" ],
      link: "description/GuardiansOfTheGalaxy",
      isInList: false,
    },

    {
      cover: "assets/images/KnivesOut.JPG",
      name: "Knives Out ",
      rate: '7.9',
      age: '14',
      year: '2019',
      categories: ["Comedy", "Crime", "Drama"],
      link: "description/KnivesOut",
      isInList: false,
    },

    {
      cover: "assets/images/SpiderMan.JPG",
      name: "Spide Man Into de Spider-Verse",
      rate: '8.4',
      age: '0',
      year: '2018',
      categories: [ "Action", "Adventure", "Animation" ],
      link: "description/SpiderMan",
      isInList: false,
    },

    {
      cover: "assets/images/Avatar.jpg",
      name: "Avatar: The Way Of Water",
      rate: "8.0",
      age: '14',
      year: '2022',
      categories: ["Action", "Sci-Fi"],
      link: "description/Avatar",
      isInList: false,
    },

    {
      cover: "assets/images/Tenet.JPG",
      name: "Tenet",
      rate: "7.8",
      age: '14',
      year: '2020',
      categories: ["Action", "Sci-fi"],
      link: "description/Tenet",
      isInList: false,
    },

    {
      cover: "assets/images/Avengers.JPG",
      name: "Avengers: Age of Ultron",
      rate: "8.5",
      age: '14',
      year: '2015',
      categories: ["Action", "Sci-fi"],
      link: "description/Avengers",
      isInList: false,
    }
]

isInList = false;


onAddListButtonClick(card: any): void {
  if (!card.isInList) {
    card.isInList = true;
    this.myMovieList.push(card);
    this.addedMovies = [...this.addedMovies, card];
    localStorage.setItem('addedMovies', JSON.stringify(this.addedMovies));
  }
}


onRemoveListClick(card: any): void {
  if (card.isInList) {
    card.isInList = false;
    const index = this.addedMovies.findIndex((m: any) => m.name === card.name);
    if (index !== -1) {
      this.addedMovies.splice(index, 1);
      localStorage.setItem('addedMovies', JSON.stringify(this.addedMovies));
    }
  } else {
    card.isInList = true
  }
}


ngOnInit(): void {
  const storedMovies = localStorage.getItem('addedMovies');
  this.addedMovies = storedMovies ? JSON.parse(storedMovies) : [];

  this.movieList.forEach((movie) => {
    movie.isInList = this.addedMovies.some((m: any) => m.name === movie.name);
  });
}


}
