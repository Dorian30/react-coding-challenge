import { Navigate } from 'react-router-dom';
import { Spinner, Flex, Box } from '@chakra-ui/react';

import ROUTES from 'constants/routes';
import useProfile from 'hooks/useProfile';

import Sidebar from '../Sidebar';
export interface IRoute {
  redirectTo?: ROUTES;
  children: JSX.Element;
}

function Route({ redirectTo = ROUTES.LOGIN, children }: IRoute) {
  const { isLoading, isError, data } = useProfile();

  if (isLoading && !isError) {
    return (
      <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner color="mirage" size="lg" />
      </Flex>
    );
  }

  return data ? (
    <>
      <Sidebar />
      <Box paddingLeft="300px">{children}</Box>
    </>
  ) : (
    <Navigate to={redirectTo} />
  );
}

export default Route;
