import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/UserPanel";
import SocialPanel from "./components/SocialPanel";
import MainPage from "./pages/MainPage";
import { AuthProvider } from "./application/AuthContext";
import AccountPage from "./pages/AccountPage";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <AuthProvider>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="main" element={<MainPage />} />
              <Route path="account" element={<AccountPage />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </AuthProvider>
    </>
  );
}

export default App;
