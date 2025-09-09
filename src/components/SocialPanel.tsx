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

import img from "../pictures/img.png";
import img1 from "../pictures/img1.png";
import img2 from "../pictures/img2.png";
import img3 from "../pictures/img3.png";
import img4 from "../pictures/img4.png";
import img5 from "../pictures/img5.png";

function SocialPanel() {
  return (
    <>
     <Flex bg="#F1FAFF">
      <Flex flexDirection="column" gap="32px">
        <Flex
          width="318px"
          height="410px"
          flexDirection="column"
          padding="24px"
          bg="white"
        >
          <Flex width="288px" flexDirection="column">
            <Text color="#FF5A60">People you may know</Text>
            <Flex height="70px" justifyContent="space-between" fontSize="14px" gap="15px">
              <Image src={img} width="70px"></Image>
              <Flex flexDirection="column">
                <Text>Tony Stark</Text>
                <Text color="#0F191A80">
                  I am a metal man, who saves lots..
                </Text>
                <Text color="#4361EE">6M+ Followers</Text>
              </Flex>
            </Flex>
            <Flex
              fontSize="14px"
              width="288px"
              height="80px"
              justifyContent="space-between"
              borderBottom="solid 1px #0F191A40"
              marginBottom="10px"
              marginTop="10px"
              gap="15px"
              paddingBottom="30px"
            >
              <Image src={img1} width="70px" height="70px"></Image>
              <Flex flexDirection="column">
                <Text>Bruce Banners</Text>
                <Text color="#0F191A80">
                  Green human with scietific kno....
                </Text>
                <Text color="#4361EE">3M+ Followers</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap="20px">
            <Flex fontSize="13px">
              <Image src={img2} width="40px" height="40px"></Image>
              <Flex flexDirection="column">
                <Text>Natasha Ramanoff</Text>
                <Text color="#0F191A80">Tagged you in her 250th post a..</Text>
              </Flex>
            </Flex>
            <Flex fontSize="13px">
              <Image src={img3} width="40px" height="40px"></Image>
              <Flex flexDirection="column">
                <Text>Barton Clint</Text>
                <Text color="#0F191A80">Liked your comment on their po...</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex padding="24px" flexDirection="column" bg="white" gap="16px">
          <Text color="#FF5A60" fontSize="19.4px">
            Boost your post
          </Text>
          <Image src={img4}></Image>
          <Flex flexDirection="column">
            <Flex>
              <Text>@steve_rogers</Text>
              <Text color="#0F191A80">With my lovable</Text>
            </Flex>
            <Text color="#0F191A80">dog named Bruno with a smile &....</Text>
            <Flex>
              <Image src={img5} width="63px" height="24px"></Image>
              <Text color="#4361EE">& 180 others liked your post & ...</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>   
    </>
  )
}

export default SocialPanel
