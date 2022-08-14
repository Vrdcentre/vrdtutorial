import Seo from "components/Seo";
import { Layout } from "components";
import dynamic from "next/dynamic";
const Comment = dynamic(() => import("components/Comment"));

export default function GustBook() {
  return (
    <Layout styles={{ p: [6, 28], minH: "100vh" }}>
      <Seo
        templateTitle="Livred'or"
        description="laissez vos commentaires et réflexions sur ce site dans cette page qui nous aident à nous améliorer et nous aident à développer notre communauté en ligne."
      />
      <Comment />
    </Layout>
  );
}
