import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducers/userReducer";
import Alert from "./Alert";
import loginService from "./../../services/login";

function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUsernameChange = (e) => {
    if (error) setError(false);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (error) setError(false);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username.length < 5 || password.length < 5) return;
    const userToLogin = {
      username,
      password,
    };
    loginService
      .loginUser(userToLogin)
      .then((res) => {
        console.log("Succeeded");
        console.log(res);
        const user = {
          user_id: res.user_id,
          username: res.username,
          token: res.token,
        };
        dispatch(setUser(user));
        window.localStorage.setItem("loggedUser", JSON.stringify(user));
        setSucceeded(true);
        navigate("/home");
        if (error) {
          setError(false);
        }
      })
      .catch((error) => {
        setError(true);
        if (succeeded) {
          setSucceeded(false);
        }
        console.log(error.request.response);
      });
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {error ? <Alert /> : null}
        <Stack align={"center"}>
          <Heading color="purple.600" fontSize={"4xl"}>
            Sign in to your account
          </Heading>
          <Text fontSize={"lg"} color={"orange.400"}>
            To keep track of your development 🏀
          </Text>
        </Stack>

        <Box rounded={"lg"} bgColor="#151e34ff" boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl color="white" id="email">
              <FormLabel>Username</FormLabel>
              <Input onChange={(e) => handleUsernameChange(e)} type="text" />
            </FormControl>
            <FormControl color="white" id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={(e) => handlePasswordChange(e)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox color="white">Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"purple.600"}
                color={"white"}
                onClick={() => handleLogin()}
                _hover={{
                  bg: "orange.500",
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default LoginContainer;
