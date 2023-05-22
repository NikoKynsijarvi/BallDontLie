import { Card, CardHeader, Heading } from "@chakra-ui/react";

const CourtInfoContainer = () => {
  return (
    <Card
      w={"30%"}
      h={"80%"}
      bg="#151e34ff"
      zIndex={99}
      position="absolute"
      right={"5%"}
      top={"5%"}
      borderRadius={20}
    >
      <CardHeader>
        <Heading color={"white"} size="md">
          Aarnivalkean koulu
        </Heading>
      </CardHeader>
    </Card>
  );
};

export default CourtInfoContainer;
