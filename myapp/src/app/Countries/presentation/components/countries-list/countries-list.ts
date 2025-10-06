import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../../application/country.service';
import { Country } from '../../../domain/model/Country-api.entity';
import { CountriesItemComponent } from '../countries-item/countries-item';

@Component({
  selector: 'app-countries-list',
  standalone: true,
  imports: [CommonModule, CountriesItemComponent],
  templateUrl: './countries-list.html',
  styleUrls: ['./countries-list.css'],
})
export class CountriesListComponent implements OnInit {
  countries: Country[] = [];
  loading = true;
  error = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe({
      next: (data) => {
        this.countries = data.map(c => ({
          ...c,
          trackId: c.name
        }));
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }


}
