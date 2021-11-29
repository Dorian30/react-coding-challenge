import api from 'config/api';
import { TCountries, TCountriesStatus, ICountry } from 'interfaces/ICountry';

export const getCountries = () => api.get<TCountries>('/countries');

export const getCountryStatus = (slug: ICountry['Slug']) =>
  api.get<TCountriesStatus>(`/total/dayone/country/${slug}/status/confirmed`);
