import { useMutation } from 'react-query';

import { login } from 'services/UserService';

export interface IUseLogin {
  onSuccess?: () => void;
}

function useLogin({ onSuccess }: IUseLogin) {
  return useMutation(login, { onSuccess: () => onSuccess?.() });
}

export default useLogin;
