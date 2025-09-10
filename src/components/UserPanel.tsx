import {
  Box,
  VStack,
  Avatar,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { SettingsIcon, LockIcon } from "@chakra-ui/icons";
import {
  FaUser,
  FaUserFriends,
  FaChartBar,
  FaSignOutAlt,
} from "react-icons/fa";
import type { User } from "../domain/User";



type UserPanelProps = {
  user: User;
};

function UserPanel({ user }: UserPanelProps) {
  return (
    <Box bg="white" w="250px" minH="100vh" p="20px">
     <VStack spacing="3" mb="8">
        <Avatar
          size="xl"
          name={user.name}
          src={user.avatarUrl}
          borderRadius="20px"
        />
        <Text fontWeight="bold" fontSize="18px">
          {user.name}
        </Text>
        <Text fontSize="sm" color="gray.500">
          @{user.handle}
        </Text>
        {user.bio && (
          <Text fontSize="sm" textAlign="center" color="gray.600">
            {user.bio}
          </Text>
        )}
      </VStack>
      <Box mb="6">
        <Heading size="sm" color="red.400" mb="3">
          Explore panel
        </Heading>
        <VStack align="stretch" spacing="3">
          <HStack>
            <Box bg="#A9DEF9" p="2" borderRadius="md">
              <FaUser />
            </Box>
            <Text>Profile</Text>
          </HStack>
          <HStack>
            <Box bg="#A9DEF9" p="2" borderRadius="md">
              <FaUserFriends />
            </Box>
            <Text>Find friends</Text>
          </HStack>
          <HStack>
            <Box bg="#A9DEF9" p="2" borderRadius="md">
              <FaChartBar />
            </Box>
            <Text>User analytics</Text>
          </HStack>
        </VStack>
      </Box>
      <Box mb="6">
        <Heading size="sm" color="red.400" mb="3">
          Settings
        </Heading>
        <VStack align="stretch" spacing="3">
          <HStack>
            <Box bg="#A9DEF9" p="2" borderRadius="md">
              <SettingsIcon />
            </Box>
            <Text>Settings</Text>
          </HStack>
          <HStack>
            <Box bg="#A9DEF9" p="2" borderRadius="md">
              <LockIcon />
            </Box>
            <Text>Security data</Text>
          </HStack>
        </VStack>
      </Box>
      <Box>
        <HStack>
          <Box bg="red.400" p="2" borderRadius="md" color="white">
            <FaSignOutAlt />
          </Box>
          <Text color="red.500" fontWeight="bold">
            Log out
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default UserPanel;
