// src/app/infrastructure/mapper/country.assembler.ts
import { CountriesResponse } from '../domain/model/CountriesResponse.entity';
import { Country } from '../domain/model/Country-api.entity';

export class CountryAssembler {
  static fromApi(response: CountriesResponse): Country {
    return {
      name: response.name.common,
      capital: response.capital?.[0] ?? 'N/A',
      population: response.population,
      flagUrl: response.flags.png,
    };
  }

  static fromApiList(responseList: CountriesResponse[]): Country[] {
    return responseList.map(this.fromApi);
  }
}
