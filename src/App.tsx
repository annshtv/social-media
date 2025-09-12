import { ChakraProvider } from "@chakra-ui/react"
import Header from "./components/Header"
import Sidebar from "./components/UserPanel"
import SocialPanel from "./components/SocialPanel"
import MainPage from "./pages/MainPage"
import { AuthProvider } from "./application/AuthContext"

function App() {
  return (
    <>
    <AuthProvider>
  <ChakraProvider>
    <MainPage/>
  </ChakraProvider>
  </AuthProvider>
    </>
  )
}

export default App
