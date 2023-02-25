import { Heading, Center, Stack, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

function LandingPageHeading() {
  return (
    <Center
      bgGradient="linear(to-r, purple.300, orange.500)"
      height={["250px", "300px", "400px"]}
    >
      <Stack align="center">
        <Heading as="h1" color="purple.600" size="4xl">
          Ball Dont Lie
        </Heading>
        <Heading as="h3" color="white" size="lg">
          For real ballers
        </Heading>
        <HStack>
          <Link to="/login">
            {" "}
            <Button colorScheme="purple" w={100}>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            {" "}
            <Button colorScheme="grey">Dont have account?</Button>
          </Link>
        </HStack>
      </Stack>
    </Center>
  );
}

export default LandingPageHeading;
