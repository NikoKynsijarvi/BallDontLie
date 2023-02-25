import { Card } from "@chakra-ui/react";

const SmallRoundedContainer = (props) => {
  return (
    <Card w={["100px", "200px", "300px"]} h="100px" bgColor="#151e34ff">
      {props.children}
    </Card>
  );
};

export default SmallRoundedContainer;
