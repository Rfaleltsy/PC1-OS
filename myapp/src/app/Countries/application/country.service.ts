import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../domain/model/Country-api.entity';
import { CountryApiService } from '../infrastructure/country-api.service';  // Este es el servicio API real

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private countryApi: CountryApiService) {}

  getCountries(): Observable<Country[]> {
    return this.countryApi.getCountries();
  }
}
