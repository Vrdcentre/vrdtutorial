import { getAllFilesFrontMatter } from "lib/mdx";
import Seo from "components/Seo";
import siteConfig from "configs/config";
import { Box, Flex, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { NotesCard, ListHead, Layout } from "components";

export default function BlogPage({ posts, total, page = 1 }) {
  const hasNextPage = Math.ceil(total / siteConfig.postPerPage) > page;
  const hasPreviousPage = page > 1;
  const urlPrefix = "/notes/archives";
  return (
    <Layout>
      <Seo
        templateTitle="Notes"
        description="Vous trouverez ici les questions fréquemment posées sur VRDcentre."
      />
      <ListHead
        title={"Notes"}
        description="FAQ sur VRDcentre"
      />
      <Box py={16} px={[8, 48]}>
        <VStack spacing={"8"}>
          {posts?.map((post, index) => {
            return (
              <NotesCard
                key={index}
                title={post.frontMatter.title}
                image={post.frontMatter.image}
                description={post.frontMatter.description}
                link={post.frontMatter.slug}
                category={"notes"}
              />
            );
          })}
        </VStack>
        <Flex justifyContent={"space-between"} mt={16}>
          {hasPreviousPage ? (
            <Link href={urlPrefix + `/${page - 1}`} passHref>
              <Button>Précédent</Button>
            </Link>
          ) : (
            <Box></Box>
          )}
          {hasNextPage && (
            <Link href={urlPrefix + `/${page + 1}`} passHref>
              <Button>Suivant</Button>
            </Link>
          )}
        </Flex>
      </Box>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { posts, total } = await getAllFilesFrontMatter("notes");

  return {
    props: {
      posts: posts.slice(0, siteConfig.postPerPage),
      total: total,
    },
  };
};
