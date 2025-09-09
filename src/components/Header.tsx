import {
  Flex,
  Box,
  Image,
  Input,
  HStack,
  Avatar,
  Text,
  IconButton,
} from "@chakra-ui/react";
import {
  SearchIcon,
  SettingsIcon,
  BellIcon,
  InfoOutlineIcon,
} from "@chakra-ui/icons";
import avatar from "../pictures/Group 29.png";
import avatar2 from "../pictures/Rectangle 5.png"

function Header() {
  return (
    <Flex
      bg="#A9DEF9"
      align="center"
      justify="space-between"
      px="20px"
      py="10px"
    >
      <Box>
        <Image src={avatar2} boxSize="45px" borderRadius="md" />
      </Box>
      <Flex
        align="center"
        bg="white"
        borderRadius="12px"
        px="4"
        w="500px"
        h="40px"
        boxShadow="sm"
      >
        <SearchIcon color="gray.400" mr="2" />
        <Input
          placeholder="Search for friends here..."
          border="none"
          _focus={{ outline: "none" }}
          fontSize="14px"
        />
      </Flex>
      <HStack spacing="20px">
        <HStack spacing="3">
          <Avatar size="md" name="Steve Rogers" src={avatar} />
          <Box lineHeight="short">
            <Text fontWeight="bold" fontSize="15px">
              Steve Rogers
            </Text>
            <Text fontSize="13px" color="gray.600">
              @steve_rogers
            </Text>
          </Box>
        </HStack>
        <HStack spacing="10px">
          <IconButton
            aria-label="Custom Icon"
            icon={<Image src="../../Group 3.png" boxSize="18px" />}
          />

          <IconButton
            aria-label="Custom Icon"
            icon={<Image src="../../Group 4.png" boxSize="18px" />}
            borderRadius="md"
            bg="white"
            size="sm"
          />

          <IconButton
            aria-label="Custom Icon"
            icon={<Image src="../../Group 5.png" boxSize="18px" />}
            borderRadius="md"
            bg="white"
            size="sm"
          />
        </HStack>
      </HStack>
    </Flex>
  );
}

export default Header;
