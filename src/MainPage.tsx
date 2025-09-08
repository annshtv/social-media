import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import SocialPanel from './components/SocialPanel'
import { Flex } from '@chakra-ui/react'

function MainPage() {
  return (
   <>
   <Header/>
   <Flex>
    <Sidebar/>
    <SocialPanel/>
   </Flex>
   </>
  )
}

export default MainPage
