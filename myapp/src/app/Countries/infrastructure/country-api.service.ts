// src/app/infrastructure/country-api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CountriesResponse } from '../domain/model/CountriesResponse.entity';
import { Country } from '../domain/model/Country-api.entity';
import { CountryAssembler } from './country.assembler';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,population';

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<CountriesResponse[]>(this.apiUrl)
      .pipe(
        map(responseList => CountryAssembler.fromApiList(responseList))
      );
  }
}
