import { Flex, Textarea, Text, Image } from '@chakra-ui/react'

import image from  "../../image.png"
import image1 from  "../../image1.png"
import image2 from  "../../image2.png"

function PostsPanel() {
  return (
    <>
    <Flex bg="#F1FAFF" width="100%" padding="56px" paddingRight="0px">
      <Flex flexDirection="column"gap="40px"marginLeft="auto"marginRight="auto">
        <Flex height="215px" width="795px" padding="24px" flexDir="column" bg="white">
          <Flex
            borderBottom="solid black 1px"
            gap="64px"
            justifyContent="space-around"
            marginBottom="24px"
          >
            <Text>Write a post</Text>
            <Text>Upload photo</Text>
            <Text>Upload video</Text>
          </Flex>
          <Textarea placeholder="Write something here..." />
        </Flex>
        <Flex
          height="215px"
          width="795px"
          bg="white"
          padding="24px"
          flexDirection="column"
        >
          <Flex gap="20px">
            <Image src={image} width="70px" height="70px"></Image>
            <Flex flexDirection="column">
              <Flex gap="30px">
                <Text>Tony Stark</Text>
                <Text color="#0F191A80">@tony_stark_3000</Text>
              </Flex>
              <Text>
                Cognitive Person | Enthusiastic scientist | Worked on 300.....
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column" width="498px" margin="auto">
            <Text color="#d12121ff">*Immediate HIRING*</Text>
            <Text>
              Looking for an amazing scientist who knows how to build a suit
              that can fly high in the sky without any problem.
            </Text>
          </Flex>
        </Flex>
        <Flex width="795px" bg="white" padding="24px" flexDirection="column">
          <Flex gap="20px">
            <Image src={image1} width="70px" height="70px"></Image>
            <Flex flexDirection="column">
              <Flex gap="30px">
                <Text>Paul Rudd</Text>
                <Text color="#0F191A80">@antman_wasp</Text>
              </Flex>
              <Text>
                Smallest creature in this beautiful universe | Flying in
                colo....
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection="column" width="498px" margin="auto">
            <Text>
              Exploring the amazing nature with my loved daughter and wife.
              These kind of visuals can soothen your mind, no matter what is
              your problem and it makes you to forget all your pains.
            </Text>
            <Image src={image2}></Image>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </>
  )
}

export default PostsPanel
