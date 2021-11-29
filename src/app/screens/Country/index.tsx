import { useState, useMemo } from 'react';
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
  Spinner,
  Flex
} from '@chakra-ui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';

import useCountry from 'hooks/useCountry';
import { ICountryStatus } from 'interfaces/ICountry';

import { SORTING } from './constants';

type TSortOrder = 'asc' | 'desc';

enum SORT_TYPE {
  DATE = 'Date',
  CASES = 'Cases'
}

function Country() {
  // State
  const [sort, setSort] = useState<{
    type: SORT_TYPE;
    order: TSortOrder;
  }>({
    type: SORT_TYPE.CASES,
    order: 'desc'
  });

  // Params
  const { slug = '' } = useParams<'slug'>();

  // Request
  const {
    data: country = [] as Array<ICountryStatus>,
    isLoading,
    isError
  } = useCountry(slug);

  console.log({ country, isError });

  // Cases Sorting
  const confirmedCases = useMemo(
    () =>
      country.sort((a, b) =>
        SORTING[sort.type](
          a[sort.type] as string,
          b[sort.type] as string,
          sort.order
        )
      ),
    [country, sort.order, sort.type]
  );

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
      ) : confirmedCases.length ? (
        <Table variant="striped" color="white" colorScheme="secondary">
          <TableCaption>Cases Confirmed</TableCaption>
          <Thead>
            <Tr>
              <Th color="white">
                <Flex alignItems="center">
                  <Text marginRight={2}>Date</Text>
                  {sort.type === SORT_TYPE.DATE && sort.order === 'asc' ? (
                    <ChevronUpIcon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() =>
                        setSort({ type: SORT_TYPE.DATE, order: 'desc' })
                      }
                    />
                  ) : (
                    <ChevronDownIcon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() =>
                        setSort({ type: SORT_TYPE.DATE, order: 'asc' })
                      }
                    />
                  )}
                </Flex>
              </Th>
              <Th color="white">
                <Flex alignItems="center" justifyContent="flex-end">
                  <Text marginRight={2}>Cases</Text>
                  {sort.type === SORT_TYPE.CASES && sort.order === 'asc' ? (
                    <ChevronUpIcon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() =>
                        setSort({ type: SORT_TYPE.CASES, order: 'desc' })
                      }
                    />
                  ) : (
                    <ChevronDownIcon
                      _hover={{ cursor: 'pointer' }}
                      onClick={() =>
                        setSort({ type: SORT_TYPE.CASES, order: 'asc' })
                      }
                    />
                  )}
                </Flex>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {confirmedCases.map(({ Date: date, Cases: cases }) => (
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
      ) : (
        <Text color="white">There are no confirmed cases for this country</Text>
      )}
    </Box>
  );
}

export default Country;
