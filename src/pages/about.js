import {
  Flex,
  Box,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Link
} from "@chakra-ui/react";
import { Layout } from "components";
import Image from "next/image";
import Seo from "components/Seo";

export default function About() {
  return (
    <Layout>
      <Seo
        templateTitle="About"
        description="VRDCentre est un service gratuit qui vous aide à apprendre, travaux de voirie, assainissement,et réseaux divers."
      />
      <Flex p={[6, 16]} justifyContent="space-between" flexWrap={"wrap"}>
        <Box maxW={"3xl"}>
          <Text py={4}>Ai Anshu</Text>
          <Text pr={4} lineHeight={"30px"}>
VRD centre est un service gratuit qui vous aide à apprendre :

1. Travaux de voirie
Les travaux de voirie consistent à créer des voies de circulation et des aires de stationnement :

Les routes, les chemins, les trottoirs, les voies piétonnes, les parkings permettent l’accès ou le stationnement à proximité des constructions.
Ces ouvrages sont essentiels à la circulation des populations.
2. Assainissement

Ce terme désigne les réseaux d’évacuation des eaux usées et eaux vannes, qui seront par la suite dirigées vers une station d’épuration pour être traitées et éviter tout risque environnemental de pollution :

Cet assainissement peut être collectif ou autonome dans le cas des zones peu urbanisées.
Les eaux vannes (EV) sont des déchets qui contiennent des matières fécales ou de l’urine.
Les eaux usées (EU) désignent les déchets domestiques ou industriels sous forme liquide, eaux contenant des détergents par exemple.
Un réseau d’assainissement sert également à la récupération des eaux de pluie, qui sont généralement transférées vers le milieu naturel.

3. Réseaux divers
Ce terme englobe :

l’alimentation en eau potable ;
le réseau de distribution électrique ;
le réseau de distribution en gaz ;
les télécommunications ;
plus généralement, tout ce qui correspond aux besoins spécifiques des populations.

4. Ouvrages annexes
Dans les VRD, on trouve d’autres ouvrages, que l’on peut désigner comme des ouvrages annexes :

Ainsi certains travaux de maçonnerie comme des murs de soutènement, des murets sont réalisés dans le cadre de travaux de VRD.
Les murs de soutènement sont des ouvrages retenant la terre,dans le cas d’un remblai par exemple.
          </Text>
        </Box>
        <Box>
          <Image
            src="/aianshume.jpeg"
            height={720}
            width={360}
            alt="codenanshu author image"
          />
        </Box>
      </Flex>
    </Layout>
  );
}
