import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'interfaces/IApi';
import { getCountries } from 'services/CovidService';

function useCountries() {
  return useQuery([QUERY_KEYS.COUNTRIES], () =>
    getCountries().then(res => res.data)
  );
}

export default useCountries;
