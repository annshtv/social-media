import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import PostsPanel from "../components/PostsPanel"; 
import SocialPanel from "../components/SocialPanel";
import UserPanel from "../components/UserPanel";

import { inMemoryPostRepository } from '../infrastructure/InMemoryPostRepository';
import { getFeedPosts } from '../application/getFeedPosts';
import { getCurrentUser } from "../application/getCurrentUser";
import { inMemoryUserRepository } from "../infrastructure/InMemoryUserRepository";


function MainPage() {
  const posts = getFeedPosts(inMemoryPostRepository);
  const currentUser = getCurrentUser(inMemoryUserRepository);

  return (
    <Flex flexDirection="column">
      <Header />
      <Flex>
        <UserPanel user={currentUser} />
        <PostsPanel posts={posts} />
        <SocialPanel /> 
      </Flex>
    </Flex>
  );
}

export default MainPage;
