import { useParams } from 'react-router-dom';
import {
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Spinner
} from '@chakra-ui/react';

import useCountry from 'hooks/useCountry';
import { ICountryStatus } from 'interfaces/ICountry';

function Country() {
  const { slug = '' } = useParams<'slug'>();
  const { data: country = [] as Array<ICountryStatus>, isLoading } =
    useCountry(slug);

  return (
    <Box min-height="100vh" background="pickledBluewood" padding={5}>
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
        Cases Confirmed
      </Text>
      {isLoading ? (
        <Spinner color="white" size="lg" />
      ) : (
        <Table variant="striped" color="white" colorScheme="secondary">
          <TableCaption>Cases Confirmed</TableCaption>
          <Thead>
            <Tr>
              <Th color="white">Date</Th>
              <Th color="white" isNumeric>
                Cases
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {country.map(({ Date: date, Cases: cases }) => (
              <Tr key={date}>
                <Td>{new Date(date).toString()}</Td>
                <Td isNumeric>{cases}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th isNumeric>Cases</Th>
              <Th>Date</Th>
            </Tr>
          </Tfoot>
        </Table>
      )}
    </Box>
  );
}

export default Country;
