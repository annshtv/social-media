import { ChakraProvider } from "@chakra-ui/react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import SocialPanel from "./components/SocialPanel"
import MainPage from "./pages/MainPage"

function App() {
  return (
    <>
  <ChakraProvider>
    <MainPage/>
  </ChakraProvider>
    </>
  )
}

export default App
