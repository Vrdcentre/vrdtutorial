import { useColorModeValue } from "@chakra-ui/react";
import { Giscus } from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      key={"Comments"}
      repo="vrdcentre/vrdtutorial"
      repoId="R_kgDOH0U3YA"
      category={`Q&A`}
      categoryId="DIC_kwDOH0U3YM4CQ1BJ"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      lang="fr"
      loading="lazy"
      theme={useColorModeValue("light", "dark_high_contrast")}
    />
  );
}
