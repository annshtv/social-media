import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import PostPanel from "../components/PostsPanel";
import SocialPanel from "../components/Sidebar";
import UserPanel from "../components/SocialPanel";

import { inMemoryPostRepository } from '../infrastructure/InMemoryPostRepository';
import { getFeedPosts } from '../application/getFeedPosts';
import Sidebar from "../components/Sidebar";

function MainPage() {
  const posts = getFeedPosts(inMemoryPostRepository);

  return (
    <Flex flexDirection="column">
      <Header />
      <Flex>
        <Sidebar />
        <PostPanel posts={posts} />
        <UserPanel />
      </Flex>
    </Flex>
  );
}

export default MainPage;