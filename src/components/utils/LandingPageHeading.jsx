import {
    Heading, Center, Text, Stack,
  } from '@chakra-ui/react';
  import React from 'react';
  
  function LandingPageHeading() {
  
    return (
      <Center bg="lightgray" height={['150px', '200px', '250px']}>
        <Stack align="center">
          <Heading as="h1" size={['lg', '2xl', '3xl', '3xl', '4xl']}>
           Welcome
          </Heading>
         
        </Stack>
      </Center>
    );
  }
  
  export default LandingPageHeading;
  