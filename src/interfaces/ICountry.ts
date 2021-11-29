export interface ICountry {
  Country: string;
  Slug: string;
  ISO2: string;
}

export type TCountries = Array<ICountry>;

export interface ICountryStatus {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}

export type TCountriesStatus = Array<ICountryStatus>;
