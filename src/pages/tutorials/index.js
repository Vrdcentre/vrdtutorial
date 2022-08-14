import { getAllFilesFrontMatter } from "lib/mdx";
import Seo from "components/Seo";
import siteConfig from "configs/config";
import { Box, Flex, Button, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { BlogCard, ListHead, Layout } from "components";

export default function Tutorials({ posts, total, page = 1 }) {
  const hasNextPage = Math.ceil(total / siteConfig.postPerPage) > page;
  const hasPreviousPage = page > 1;
  const urlPrefix = "/tutorials/archives";
  return (
    <Layout>
      <Seo
        templateTitle="Tutoriels"
        description="Tutoriels en VRD (Voiries et Réseaux Divers)."
      />
      <ListHead
        title={"Tutoriels"}
        description="Tutoriels en VRD (Voiries et Réseaux Divers)."
      />
      <Box py={16} px={[6, 28]}>
        <SimpleGrid columns={[1, 1, 1, 3]} spacing={"12"}>
          {posts?.map((post, index) => {
            return (
              <BlogCard
                key={index}
                title={post.frontMatter.title}
                image={post.frontMatter.image}
                description={post.frontMatter.description}
                link={post.frontMatter.slug}
                list={post.frontMatter.list}
                category={"tutorials"}
              />
            );
          })}
        </SimpleGrid>
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
  const { posts, total } = await getAllFilesFrontMatter("tutorials");

  return {
    props: {
      posts: posts.slice(0, siteConfig.postPerPage),
      total: total,
    },
  };
};
