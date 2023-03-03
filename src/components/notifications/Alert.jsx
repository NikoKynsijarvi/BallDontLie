import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const NegativeAlert = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Invalid authentication</AlertTitle>
      <AlertDescription>Wrong username or password</AlertDescription>
    </Alert>
  );
};

export default NegativeAlert;
