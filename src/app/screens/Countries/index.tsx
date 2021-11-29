import { Link } from 'react-router-dom';
import { UnorderedList, ListItem } from '@chakra-ui/react';

import useCountries from 'hooks/useCountries';
import ROUTES from 'constants/routes';

function Countries() {
  const { data: countries = [] } = useCountries();

  return (
    <UnorderedList padding={5} background="pickledBluewood" color="white">
      {countries.map(({ Country, Slug }) => (
        <ListItem
          key={Slug}
          transition="all 0.2s"
          _hover={{ color: 'pastelGreen', cursor: 'pointer' }}
        >
          <Link to={ROUTES.COUNTRY.replace(':id', Slug)}>{Country}</Link>
        </ListItem>
      ))}
    </UnorderedList>
  );
}

export default Countries;
