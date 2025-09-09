import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SocialPanel from './components/SocialPanel'
import { Flex } from '@chakra-ui/react'
import PostsPanel from './components/PostsPanel'

function MainPage() {
  return (
   <>
   <Header/>
   <Flex>
    <Sidebar/>
    <PostsPanel/>
    <SocialPanel/>
   </Flex>
   </>
  )
}

export default MainPage
