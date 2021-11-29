import { useMutation } from 'react-query';

import { login } from 'services/UserServices';

export interface IUseLogin {
  onSuccess: () => void;
}

function useLogin({ onSuccess }: IUseLogin) {
  return useMutation(login, { onSuccess });
}

export default useLogin;
