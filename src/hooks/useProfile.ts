import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'interfaces/IApi';
import { getProfile } from 'services/UserService';

function useProfile() {
  return useQuery(QUERY_KEYS.PROFILE, () => getProfile());
}

export default useProfile;
