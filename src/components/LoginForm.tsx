import { useState } from "react";
import { useAuth } from "../application/AuthContext";
import { Box, Input, Button, VStack } from "@chakra-ui/react";

function LoginForm() {
  const { login } = useAuth();
const [email, setEmail] = useState("");
const [name, setName] = useState("");


 const handleLogin = () => {
  login({
      id: Date.now().toString(),
      name,
      handle: email,
      avatarUrl: "/pictures/avatar.png",
      bio: "New user",
      isNew: false
  });
};


  return (
    <Box bg="white" p="4" borderRadius="md" shadow="sm" width="500px">
  <VStack spacing="3">
    <Input
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <Input
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <Button colorScheme="blue" onClick={handleLogin}>
      Login
    </Button>
  </VStack>
</Box>

  );
}

export default LoginForm;
