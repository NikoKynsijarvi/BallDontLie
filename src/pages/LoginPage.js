import React from "react";
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Loginform from "../components/Loginform";
import LoginContainer from "../components/public/LoginContainer";

function LoginPage() {
  return (
    <div className="w-screen h-screen bg-background">
      <Grid h="full" templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem w="100%" h="full" padding="20">
          <Text
            bgGradient="linear(to-l, #7f03fc, #F27649)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Welcome to Ball Dont Lie
          </Text>
          <Text color="white" fontSize="2xl" fontWeight="extrabold">
            Login to start using the application
          </Text>
        </GridItem>
        <GridItem w="100%" h="full">
          <LoginContainer />
        </GridItem>
      </Grid>
    </div>
  );
}

export default LoginPage;
