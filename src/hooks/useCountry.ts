import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'interfaces/IApi';
import { getCountryStatus } from 'services/CovidService';
import { ICountry } from 'interfaces/ICountry';

function useCountry(slug: ICountry['Slug']) {
  return useQuery(
    [QUERY_KEYS.COUNTRY_STATUS],
    () => getCountryStatus(slug).then(res => res.data),
    { enabled: Boolean(slug) }
  );
}

export default useCountry;
