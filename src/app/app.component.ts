import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  destination: string = '';
  cities: string[] = [];

  constructor(private searchService: SearchService) { }

  updateDestination() {
    this.cities = [];
    this.searchService.getCity()
      .subscribe(response => {
        Object.values(response).forEach((city) => {
          this.cities.push(city);
        });
      });
  }
}
