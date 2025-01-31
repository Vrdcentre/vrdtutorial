import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import * as React from "react";
import { Container } from "./container";
import { SiTelegram } from "react-icons/si";

export function TelegramStrip(props) {
  return (
    <Box bg="#439d5c" {...props}>
      <Container py="8">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          <Flex color="white">
            <Flex
              alignItems="center"
              justifyContent="center"
              fontSize="48px"
              mr="5"
            >
              <SiTelegram />
            </Flex>
            <Box>
              <Heading size="md" lineHeight="1.2" mb="1">
                {"Rejoignez-nous"}
              </Heading>
              <Text opacity={0.7}>
                {
                  "Avez-vous des questions, des suggestions ou peut-être voulez-vous rencontrer de nouvelles personnes dans le domaine, alors rejoignez-nous maintenant !"
                }
              </Text>
            </Box>
          </Flex>
          <chakra.button
            width={{ base: "100%", md: "auto" }}
            mt={{ base: "6", md: 0 }}
            color="gray.800"
            as="a"
            justifyContent="center"
            display="inline-flex"
            alignItems="center"
            href="https://t.me/vrdcentre"
            rel="noopener"
            target="_blank"
            fontWeight="bold"
            shadow="md"
            bg="white"
            px="24px"
            h="56px"
            rounded="lg"
            fontSize="md"
          >
            {"Rejoignez #vrdcentre"}
          </chakra.button>
        </Flex>
      </Container>
    </Box>
  );
}
