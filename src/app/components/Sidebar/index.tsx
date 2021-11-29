import { Text, Flex, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import useProfile from 'hooks/useProfile';
import useLogout from 'hooks/useLogout';
import ROUTES from 'constants/routes';

function Sidebar() {
  const { data: profile } = useProfile();
  const navigate = useNavigate();
  const { mutate: logout, isLoading } = useLogout({
    onSuccess: () => navigate(ROUTES.LOGIN)
  });

  return (
    <Flex
      direction="column"
      justifyContent="space-between"
      background="mirage"
      position="fixed"
      top={0}
      left={0}
      height="100vh"
      width="300px"
      padding={5}
    >
      <Flex direction="column">
        <Text variant="title" color="white" marginBottom={10}>{`Welcome ${
          profile?.username || ''
        }`}</Text>
        <Text color="white" marginBottom={1}>{`Name: ${
          profile?.name || ''
        }`}</Text>
        <Text color="white">{`Email: ${profile?.email || ''}`}</Text>
      </Flex>
      <Button variant="primary" onClick={() => logout()} isLoading={isLoading}>
        Logout
      </Button>
    </Flex>
  );
}

export default Sidebar;
