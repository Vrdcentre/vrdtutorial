import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box textAlign="center" px={6} minH={"90vh"} py={32}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.400, blue.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page non trouvée
      </Text>
      <Text color={"gray.500"} mb={6}>
        La page que vous recherchez ne semble pas exister
      </Text>

      <Link href="/">
        <Button
          colorScheme="blue"
          bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
          color="white"
          variant="solid"
        >
          Retournez à l'accueil
        </Button>
      </Link>
    </Box>
  );
}
