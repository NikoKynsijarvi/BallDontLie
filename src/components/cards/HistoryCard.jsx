import {
  Card,
  CardBody,
  Text,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

const HistoryCard = ({ shotgroup }) => {
  return (
    <Card w="full" bgColor="#151e34ff" color="white">
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="md" textTransform="uppercase">
              {shotgroup.date}
            </Heading>
            <HStack>
              <Text fontSize="lg">Type: {shotgroup.type}</Text>
              <Text fontSize="lg">Made: {shotgroup.shotsmade}</Text>
              <Text fontSize="lg">Attempted: {shotgroup.shotsattempted}</Text>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
