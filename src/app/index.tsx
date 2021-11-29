import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

import ROUTES from 'constants/routes';
import theme from 'constants/theme';

import Login from './screens/Login';
import Countries from './screens/Countries';
import Cases from './screens/Cases';
import PrivateRoute from './components/PrivateRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route
              path={ROUTES.COUNTRIES}
              element={
                <PrivateRoute>
                  <Countries />
                </PrivateRoute>
              }
            />
            <Route
              path={ROUTES.CONFIRMED_CASES}
              element={
                <PrivateRoute>
                  <Cases />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
