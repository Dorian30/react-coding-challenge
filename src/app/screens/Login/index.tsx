import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import useLogin from 'hooks/useLogin';
import ROUTES from 'constants/routes';

export interface IFormData {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<IFormData>();
  const {
    mutate: login,
    error,
    isLoading
  } = useLogin({
    onSuccess: () => navigate(ROUTES.COUNTRIES)
  });

  const onSubmit = useCallback((data: IFormData) => login(data), [login]);

  return (
    <Container
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        padding={3}
        flexDirection="column"
        background="mirage"
        borderRadius={2}
        width={400}
        minHeight={300}
        p={10}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text alignSelf="center" color="white" variant="title" marginBottom={4}>
          Welcome
        </Text>
        <FormControl marginBottom={5} isRequired>
          <FormLabel htmlFor="email" color="white">
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            {...register('email', { required: true })}
          />
        </FormControl>
        <FormControl marginBottom={error ? 5 : 10} isRequired>
          <FormLabel htmlFor="email" color="white">
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            {...register('password', { required: true })}
          />
        </FormControl>
        {error && (
          <Text color="red.500" marginBottom={5}>
            Invalid credentials
          </Text>
        )}
        <Button variant="primary" type="submit" isLoading={isLoading}>
          Login
        </Button>
      </Flex>
    </Container>
  );
}

export default Login;
