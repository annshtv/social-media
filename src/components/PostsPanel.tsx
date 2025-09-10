import { Flex, Text, Image, Textarea, Button } from "@chakra-ui/react";
import type { Post } from "../domain/Posts";
import { inMemoryPostRepository } from "../infrastructure/InMemoryPostRepository";
import { useState } from "react";

type PostPanelProps = {
  posts: Post[];
};

function PostPanel({ posts }: PostPanelProps) {
  const [postList, setPostList] = useState<Post[]>(inMemoryPostRepository.findAll());
  const [newPostText, setNewPostText] = useState("");

  const handleAddPost = () => {
    if (!newPostText.trim()) return;
    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: {
        id: "user-3",
        name: "New User",
        handle: "@newUser",
        avatarUrl: "../pictures/avatar.png",
        bio: "Just joined!",
      },
      text: newPostText,
    };

    inMemoryPostRepository.add(newPost);
    setPostList([...inMemoryPostRepository.findAll()]);
    setNewPostText(""); 
  };

  return (
    <Flex bg="#F1FAFF" width="100%" padding="56px" paddingRight="0px">
      <Flex flexDirection="column" gap="40px" marginLeft="auto" marginRight="auto">
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
          <Textarea
            placeholder="Write something here..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <Button mt="3" colorScheme="green" onClick={handleAddPost}>
            Add Post
          </Button>
        </Flex>

        {postList.map((post) => (
          <Flex
            key={post.id}
            width="795px"
            bg="white"
            padding="24px"
            flexDirection="column"
          >
            <Flex gap="20px" alignItems="center">
              <Image
                src={post.author.avatarUrl}
                width="70px"
                height="70px"
                borderRadius="md"
              />
              <Flex flexDirection="column">
                <Flex gap="30px">
                  <Text fontWeight="bold">{post.author.name}</Text>
                  <Text color="#0F191A80">{post.author.handle}</Text>
                </Flex>
                <Text fontSize="sm">{post.author.bio}</Text>
              </Flex>
            </Flex>
            <Flex
              flexDirection="column"
              width="498px"
              margin="auto"
              marginTop="20px"
              gap="16px"
            >
              <Text>{post.text}</Text>
              {post.imageUrl && <Image src={post.imageUrl} borderRadius="md" />}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default PostPanel;
