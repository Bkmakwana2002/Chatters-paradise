import React from 'react'
import { Flex } from '@chakra-ui/layout'
import SideDrawer from './SideDrawer'
import MyChats from './MyChats'
import ChatBox from '../components/ChatBox'
import { useContext } from 'react'
import chatContext from '../context/ChatContext'

const ChatPage = () => {

  const { user } = useContext(chatContext)

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats />}
        {user && <ChatBox />}
      </Flex>
    </div>
  )
}

export default ChatPage