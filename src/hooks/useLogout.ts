import { QUERY_KEYS } from 'interfaces/IApi';
import { useMutation, useQueryClient } from 'react-query';

import { logout } from 'services/UserService';

export interface IUseLogin {
  onSuccess?: () => void;
}

function useLogin({ onSuccess }: IUseLogin) {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEYS.PROFILE);
      onSuccess?.();
    }
  });
}

export default useLogin;
