import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';

import ROUTES from 'constants/routes';
import theme from 'constants/theme';

import Login from './screens/Login';
import Countries from './screens/Countries';
import Country from './screens/Country';
import PrivateRoute from './components/PrivateRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Box minHeight="100vh" width="100vw" background="pickledBluewood">
          <Router>
            <Routes>
              <Route
                path={ROUTES.COUNTRIES}
                element={
                  <PrivateRoute>
                    <Countries />
                  </PrivateRoute>
                }
              />
              <Route
                path={ROUTES.COUNTRY}
                element={
                  <PrivateRoute>
                    <Country />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Login />} />
            </Routes>
          </Router>
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
