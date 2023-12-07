import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() title: string | undefined;
  @Input() title2: string | undefined;

  selectedOption: string | undefined;
  currentFilter: string | undefined
  filteredMovieList: any[] = [];
  myMovieList: any[] =[];
  addedMovies: any[] = [];


sortByYear = [
  {
    title: 'Year',
    options: [
      { name: '2014'},
      { name: '2015' },
      { name: '2018' },
      { name: '2019' },
      { name: '2020' },
      { name: '2022' },
    ]
  }
];

sortByGenre = [
  {
    title: 'Genre',
    options: [
      {name: 'Action' },
      {name: 'Adventure'},
      {name: 'Animation'},
      {name: 'Comedy'},
      {name: 'Crime' },
      {name: 'Drama' },
      {name: 'Sci-fi' },
       ]
  },
]

sortByRate = [
  {
    title: 'Rate',
    options: [
      {name: '7.0 - 7.9'},
      {name: '8.0 - 8.9'},
      {name: '9.0 - 10'}
    ]
  },
]


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
    },

    {
      cover: "assets/images/KnivesOut.JPG",
      name: "Knives Out ",
      rate: '7.9',
      age: '14',
      year: '2019',
      categories: ["Comedy", "Crime", "Drama"],
      link: "description/KnivesOut",
    },

    {
      cover: "assets/images/SpiderMan.JPG",
      name: "Spide Man Into de Spider-Verse",
      rate: '8.4',
      age: '0',
      year: '2018',
      categories: [ "Action", "Adventure", "Animation" ],
      link: "description/SpiderMan",
    },

    {
      cover: "assets/images/Avatar.jpg",
      name: "Avatar: The Way Of Water",
      rate: "8.0",
      age: '14',
      year: '2022',
      categories: ["Action", "Sci-Fi"],
      link: "description/Avatar",
    },

    {
      cover: "assets/images/Tenet.JPG",
      name: "Tenet",
      rate: "7.8",
      age: '14',
      year: '2020',
      categories: ["Action", "Sci-fi"],
      link: "description/Tenet",
    },

    {
      cover: "assets/images/Avengers.JPG",
      name: "Avengers: Age of Ultron",
      rate: "8.5",
      age: '14',
      year: '2015',
      categories: ["Action", "Sci-fi"],
      link: "description/Avengers",
    }
]

onAddListButtonClick(card: any): void {
  card.isInList = true
  this.myMovieList.push(card);
  this.addedMovies = [...this.addedMovies, card];
  localStorage.setItem('addedMovies', JSON.stringify(this.addedMovies));
  console.log(this.myMovieList);
}

onRemoveListClick(card: any): void {
  const index = this.addedMovies.findIndex((m: any) => m.name === card.name);
  if (index !== -1) {
    this.addedMovies.splice(index, 1);
    localStorage.setItem('addedMovies', JSON.stringify(this.addedMovies));
  }
}



ngOnInit(): void {
  const storedMovies = localStorage.getItem('addedMovies');
  this.addedMovies = storedMovies ? JSON.parse(storedMovies) : [];
}

filterMoviesByCategory(category: string): void {
  this.currentFilter = category;
  this.filteredMovieList = this.movieList.filter(movie => movie.categories.includes(category));
}

filterMoviesByYear(year: string): void {
  this.currentFilter = year;
  this.filteredMovieList = this.movieList.filter(movie => movie.year.trim() === year.trim())
  console.log(this.filteredMovieList)
}


filterMoviesByRate(rateRange: string): void {
  this.currentFilter = rateRange;
  const [minRate, maxRate] = rateRange.split(' - ');
  this.filteredMovieList = this.movieList.filter(movie => {
    const movieRate = parseFloat(movie.rate);
    return movieRate >= parseFloat(minRate) && movieRate <= parseFloat(maxRate);
  });
  console.log(this.filteredMovieList)
}


}
