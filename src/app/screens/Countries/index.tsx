import { Link } from 'react-router-dom';
import { UnorderedList, ListItem, Box, Text, Spinner } from '@chakra-ui/react';

import useCountries from 'hooks/useCountries';
import ROUTES from 'constants/routes';

function Countries() {
  const { data: countries = [], isLoading } = useCountries();

  return (
    <Box background="pickledBluewood" minHeight="100vh" padding={5}>
      <Text
        variant="title"
        color="white"
        position="relative"
        marginBottom={8}
        _after={{
          content: `''`,
          position: 'absolute',
          top: 'calc(100% + 5px)',
          left: 0,
          width: '50px',
          height: '2px',
          background: 'pastelGreen'
        }}
      >
        Countries List
      </Text>
      {isLoading ? (
        <Spinner color="white" size="lg" />
      ) : (
        <UnorderedList margin={0} color="white" px={5}>
          {countries.map(({ Country, Slug, ISO2 }) => (
            <ListItem
              key={Slug}
              transition="all 0.2s"
              _hover={{ color: 'pastelGreen', cursor: 'pointer' }}
            >
              <Link
                to={ROUTES.COUNTRY.replace(':slug', Slug)}
              >{`${Country} - ${ISO2}`}</Link>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
}

export default Countries;
