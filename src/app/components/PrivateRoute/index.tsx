import { Navigate } from 'react-router-dom';
import { Spinner, Flex } from '@chakra-ui/react';

import React from 'react';
import ROUTES from 'constants/routes';

import useProfile from 'hooks/useProfile';

export interface IRoute {
  redirectTo?: ROUTES;
  children: JSX.Element;
}

function Route({ redirectTo = ROUTES.LOGIN, children }: IRoute) {
  const { data: user, isLoading } = useProfile({});

  if (isLoading) {
    return (
      <Flex
        height="100vh"
        width="100vw"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner color="mirage" size="xl" />
      </Flex>
    );
  }

  return user ? children : <Navigate to={redirectTo} />;
}

export default Route;
