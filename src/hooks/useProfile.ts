import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'interfaces/IApi';
import { getProfile } from 'services/UserServices';

export interface IUseProfile {
  enabled?: boolean;
}

function useProfile({ enabled = true }: IUseProfile) {
  return useQuery([QUERY_KEYS.PROFILE], () => getProfile(), { enabled });
}

export default useProfile;
