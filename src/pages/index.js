import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Stack,
  Circle,
  useColorModeValue,
  chakra,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { getAllFilesFrontMatter, getAllFilesOfLearn } from "lib/mdx";
import { FaMoneyCheck, FaArrowRight } from "react-icons/fa";
import Seo from "components/Seo";
import {
  BlogCard,
  TelegramStrip,
  Container,
  Author,
  LearnCard,
  Hero as HeroSection,
} from "components";

export default function Home({ blogPosts, tutorialsPost, lessionsPost }) {
  const blogPostBg = useColorModeValue("gray.100", "gray.900");

  return (
    <>
      <Seo
        templateTitle="Apprendre VRD sans limites"
        description="VRDcentre est un service gratuit qui vous aide à apprendre travaux de voirie, assainissement, réseaux divers."
      />
      <div>
        <HeroSection />
        {/* here is the section for latest blog post */}
        <Stack w={"100%"} px={10} py={5} spacing={8}>
          <Flex justifyContent={"space-between"} pr={[0, 20]}>
            <Text>Derniers articles</Text>
            <Link href="/blog" passHref>
              Tous les articles
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={3}>
            {blogPosts.map((post, index) => {
              return (
                <Stack
                  key={index}
                  maxW={[300, 250]}
                  spacing={2}
                  p={3}
                  borderRadius={5}
                  bgColor={blogPostBg}
                  justifyContent="space-evenly"
                  sx={{
                    _hover: {
                      outline: "solid 2px",
                      outlineOffset: "5px",
                      outlineColor: "gray.300",
                      transition: "all 0.6s",
                    },
                  }}
                >
                  <Link href={`blog/${post.frontMatter.slug}`} passHref>
                    <Text as="h3" fontSize={18} fontWeight="bold">
                      {post.frontMatter.title}
                    </Text>
                  </Link>
                  <Text>{post.frontMatter.description}</Text>
                  <Link href={`blog/${post.frontMatter.slug}`} passHref>
                    <Text color="green.400">Lire la suite</Text>
                  </Link>
                </Stack>
              );
            })}
          </SimpleGrid>
        </Stack>
      </div>

      {/* section for tutorials */}

      <Box py={20}>
        <Stack w={"100%"} px={10} py={5} spacing={8}>
          <Flex justifyContent={"space-between"} pr={[0, 20]}>
            <Text>Derniers tutoriels</Text>
            <Link href="/blog" passHref>
              Tous les articles
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3]} spacing={20}>
            {tutorialsPost.map((post, index) => {
              return (
                <BlogCard
                  category={post.frontMatter.category}
                  description={post.frontMatter.description}
                  image={post.frontMatter.image}
                  link={post.frontMatter.slug}
                  title={post.frontMatter.title}
                  list={1}
                  key={index}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      </Box>
      <Author />
      {/* section for tutorials */}

      <Box py={20}>
        <Stack w={"100%"} px={10} py={5} spacing={8}>
          <Flex justifyContent={"space-between"} pr={[0, 20]}>
            <Text>Dernières leçons</Text>
            <Link href="/blog" passHref>
              Tous les articles
            </Link>
          </Flex>
          <SimpleGrid columns={[1, 2, 3]} spacing={20} pt={10}>
            {lessionsPost.map((post, index) => {
              return (
                <LearnCard
                  category={post.frontMatter.category}
                  description={post.frontMatter.description}
                  image={post.frontMatter.image}
                  link={post.frontMatter.slug}
                  title={post.frontMatter.title}
                  list={1}
                  key={index}
                />
              );
            })}
          </SimpleGrid>
        </Stack>
      </Box>
      <Box
        bgImage="url(/audio-bar.svg)"
        bgPos="bottom center"
        bgSize="120px"
        bgRepeat="repeat no-repeat"
      >
        <Container
          pt="7.5rem"
          pb="10rem"
          maxW="50rem"
          mx="auto"
          textAlign="center"
        >
          <Flex direction="column" align="center" maxW="600px" mx="auto">
            <Circle size="80px" bg="blackAlpha.200" color="blue.400">
              <FaMoneyCheck size="40px" />
            </Circle>
            <chakra.h2
              fontSize={42}
              fontWeight="bold"
              textStyle="heading"
              mt="6"
              mb="6"
            >
              {"Vous avez aimé les cours de VRDcentre, et souhaitez y contribuer ?"}
            </chakra.h2>
            <Text mb="40px" fontSize="lg" opacity={0.7}>
              {
                "Si vous avez aimé les cours de VRDCentre, et que vous souhaitez contribuer en partageant vos connaissances, et faire de cette communauté la plus grande communauté VRD sur le web."
              }
            </Text>
          </Flex>
          <Link
            passHref
            href="https://t.me/vrdcentre"
            isExternal
          >
            <Button
              h="4rem"
              px="40px"
              fontSize="1.2rem"
              as="a"
              size="lg"
              colorScheme="blue"
              rightIcon={<FaArrowRight fontSize="0.8em" />}
            >
              {"Rejoignez-nous"}
            </Button>
          </Link>
        </Container>
      </Box>
      <TelegramStrip />
    </>
  );
}

export async function getStaticProps() {
  const blogPost = await getAllFilesFrontMatter("blog");
  const TutorialsPost = await getAllFilesFrontMatter("tutorials");
  const lessionsPost = await getAllFilesOfLearn();

  return {
    props: {
      blogPosts: blogPost.posts.slice(0, 4),
      tutorialsPost: TutorialsPost.posts.slice(0, 3),
      lessionsPost: lessionsPost.posts.slice(0, 3),
    },
  };
}
