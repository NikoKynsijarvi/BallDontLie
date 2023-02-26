import {
  Card,
  CardBody,
  Text,
  HStack,
  CardHeader,
  Heading,
} from "@chakra-ui/react";

const HistoryCard = ({ shotgroup }) => {
  return (
    <Card w="full" bgColor="#151e34ff" color="white">
      <CardBody>
        <HStack>
          <CardHeader>
            <Heading size="md">{shotgroup.date}</Heading>
          </CardHeader>
          <Text fontSize="2xl">Type: {shotgroup.type}</Text>
          <Text fontSize="2xl">Made: {shotgroup.shotsmade}</Text>
          <Text fontSize="2xl">Attempted: {shotgroup.shotsattempted}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
