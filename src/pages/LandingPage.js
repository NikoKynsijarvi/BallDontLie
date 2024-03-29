import React from "react";
import LandingPageHeading from "../components/pageComponents/LandingPageHeading";
import { Grid, GridItem } from "@chakra-ui/react";

function LandingPage() {
  return (
    <div className="h-screen flex flex-col gap-1 bg-background">
      <LandingPageHeading />
      <Grid h="full" templateColumns="repeat(2, 1fr)" gap={[2, 4, 6]}>
        <GridItem w="100%" h="full" />
        <GridItem w="100%" h="full" />
      </Grid>
    </div>
  );
}

export default LandingPage;
