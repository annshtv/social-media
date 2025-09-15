import { 
  Flex, 
  Text, 
  Image, 
  Button, 
  VStack, 
  HStack, 
  Box,
  Icon,
  Badge,
  Divider,
  Tab,
  TabList,
  Tabs
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMapPin, FiMail, FiGlobe, FiMessageSquare, FiUserPlus, FiFlag } from "react-icons/fi";
import Header from "../components/Header";
import avatar from "../pictures/avatar.png"

type User = {
  id: string;
  name: string;
  profession: string;
  location: string;
  rating: number;
  phone: string;
  address: string;
  email: string;
  website: string;
  birthday: string;
  gender: string;
  primaryWork: {
    company: string;
    address: string;
    zipCode: string;
  };
  secondaryWork: {
    company: string;
    address: string;
    zipCode: string;
  };
  skills: string[];
};

const mockUser: User = {
  id: "1",
  name: "Steve Rogers",
  profession: "Product Designer",
  location: "New York, NY",
  rating: 8.6,
  phone: "+1 123 456 7890",
  address: "525 E 68th Street, New York, NY 10651-78 156-187-60",
  email: "hello@jeremyrose.com",
  website: "www.jeremyrose.com",
  birthday: "June 5, 1992",
  gender: "Male",
  primaryWork: {
    company: "Spotify New York",
    address: "170 William Street, New York, NY 10038-78 212-512-51",
    zipCode: ""
  },
  secondaryWork: {
    company: "Metropolitan Museum",
    address: "525 E 68th Street, New York, NY 10651-78 156-187-60",
    zipCode: ""
  },
  skills: ["Branding", "UI/UX", "Web - Design", "Packaging", "Print & Editorial"]
};

function AccountPage() {
  const [activeTab, setActiveTab] = useState("about");
  const [isBookmarked, setIsBookmarked] = useState(false);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating / 2);
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Text key={i} color={i < fullStars ? "#FFD700" : "#E2E8F0"} fontSize="20px">
          ★
        </Text>
      );
    }
    return stars;
  };

  return (
    <>
    <Header/>
    <Flex bg="#F7FAFC" minH="100vh" p="40px" justify="center">
      <Box maxW="1200px" w="100%">

        <Flex bg="white" borderRadius="12px" p="32px" mb="24px" align="center" gap="32px">
          <Image
            src={avatar}
            alt={mockUser.name}
            w="120px"
            h="120px"
            borderRadius="12px"
            objectFit="cover"
          />
          
          <VStack align="start" flex="1" spacing="8px">
            <HStack spacing="16px" align="center">
              <Text fontSize="28px" fontWeight="bold" color="#1A202C">
                {mockUser.name}
              </Text>
              <HStack spacing="4px">
                <Icon as={FiMapPin} color="#718096" />
                <Text color="#718096" fontSize="14px">{mockUser.location}</Text>
              </HStack>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                color={isBookmarked ? "#3182CE" : "#718096"}
              >
                🔖 Bookmark
              </Button>
            </HStack>
            
            <Text color="#3182CE" fontSize="16px" fontWeight="medium">
              {mockUser.profession}
            </Text>
            
            <VStack align="start" spacing="4px">
              <Text fontSize="12px" color="#718096" textTransform="uppercase" letterSpacing="1px">
                RANKINGS
              </Text>
              <HStack spacing="8px" align="center">
                <Text fontSize="24px" fontWeight="bold" color="#1A202C">
                  {mockUser.rating}
                </Text>
                <HStack spacing="2px">
                  {renderStars(mockUser.rating)}
                </HStack>
              </HStack>
            </VStack>
          </VStack>

          <VStack spacing="12px">
            <Button
              leftIcon={<FiMessageSquare />}
              bg="#1A202C"
              color="white"
              size="md"
              _hover={{ bg: "#2D3748" }}
            >
              Send message
            </Button>
            <Button
              leftIcon={<FiUserPlus />}
              variant="outline"
              colorScheme="blue"
              size="md"
            >
              Contacts
            </Button>
            <Button
              leftIcon={<FiFlag />}
              variant="ghost"
              color="#718096"
              size="md"
            >
              Report user
            </Button>
          </VStack>
        </Flex>
        <Tabs variant="unstyled" mb="24px">
          <TabList bg="white" borderRadius="12px" p="4px">
            <Tab
              _selected={{ bg: "#EBF8FF", color: "#3182CE" }}
              borderRadius="8px"
              px="24px"
              py="12px"
              mr="4px"
            >
              Timeline
            </Tab>
            <Tab
              _selected={{ bg: "#EBF8FF", color: "#3182CE" }}
              borderRadius="8px"
              px="24px"
              py="12px"
            >
              About
            </Tab>
          </TabList>
        </Tabs>
        <Flex gap="24px">
          <VStack w="400px" spacing="24px" align="stretch">
            <Box bg="white" borderRadius="12px" p="24px">
              <Text fontSize="14px" color="#718096" textTransform="uppercase" letterSpacing="1px" mb="20px">
                WORK
              </Text>
              
              <VStack spacing="20px" align="stretch">
                <Box>
                  <HStack justify="space-between" align="start" mb="8px">
                    <Text fontWeight="bold" fontSize="16px">{mockUser.primaryWork.company}</Text>
                    <Badge colorScheme="blue" fontSize="10px">Primary</Badge>
                  </HStack>
                  <Text fontSize="14px" color="#718096">
                    {mockUser.primaryWork.address}
                  </Text>
                </Box>
                
                <Box>
                  <HStack justify="space-between" align="start" mb="8px">
                    <Text fontWeight="bold" fontSize="16px">{mockUser.secondaryWork.company}</Text>
                    <Badge colorScheme="gray" fontSize="10px">Secondary</Badge>
                  </HStack>
                  <Text fontSize="14px" color="#718096">
                    {mockUser.secondaryWork.address}
                  </Text>
                </Box>
              </VStack>
            </Box>
            <Box bg="white" borderRadius="12px" p="24px">
              <Text fontSize="14px" color="#718096" textTransform="uppercase" letterSpacing="1px" mb="20px">
                SKILLS
              </Text>
              <VStack align="start" spacing="8px">
                {mockUser.skills.map((skill, index) => (
                  <Text key={index} fontSize="14px" color="#1A202C">
                    {skill}
                  </Text>
                ))}
              </VStack>
            </Box>
          </VStack>
          <VStack flex="1" spacing="24px" align="stretch">
            <Box bg="white" borderRadius="12px" p="24px">
              <Text fontSize="14px" color="#718096" textTransform="uppercase" letterSpacing="1px" mb="20px">
                CONTACT INFORMATION
              </Text>
              
              <VStack spacing="16px" align="stretch">
                <HStack spacing="16px">
                  <Text fontSize="14px" color="#718096" w="80px">Phone:</Text>
                  <Text fontSize="14px" color="#3182CE" cursor="pointer">
                    {mockUser.phone}
                  </Text>
                </HStack>
                
                <HStack spacing="16px" align="start">
                  <Text fontSize="14px" color="#718096" w="80px">Address:</Text>
                  <Text fontSize="14px" color="#1A202C" lineHeight="1.4">
                    {mockUser.address}
                  </Text>
                </HStack>
                
                <HStack spacing="16px">
                  <Text fontSize="14px" color="#718096" w="80px">E-mail:</Text>
                  <Text fontSize="14px" color="#3182CE" cursor="pointer">
                    {mockUser.email}
                  </Text>
                </HStack>
                
                <HStack spacing="16px">
                  <Text fontSize="14px" color="#718096" w="80px">Site:</Text>
                  <Text fontSize="14px" color="#3182CE" cursor="pointer">
                    {mockUser.website}
                  </Text>
                </HStack>
              </VStack>
            </Box>
            <Box bg="white" borderRadius="12px" p="24px">
              <Text fontSize="14px" color="#718096" textTransform="uppercase" letterSpacing="1px" mb="20px">
                BASIC INFORMATION
              </Text>
              
              <VStack spacing="16px" align="stretch">
                <HStack spacing="16px">
                  <Text fontSize="14px" color="#718096" w="80px">Birthday:</Text>
                  <Text fontSize="14px" color="#1A202C">
                    {mockUser.birthday}
                  </Text>
                </HStack>
                
                <HStack spacing="16px">
                  <Text fontSize="14px" color="#718096" w="80px">Gender:</Text>
                  <Text fontSize="14px" color="#1A202C">
                    {mockUser.gender}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Flex>
      </Box>
    </Flex>
</>
  );
}

export default AccountPage;