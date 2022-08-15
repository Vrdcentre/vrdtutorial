const baseUrl = "https://github.com/Vrdcentre/vrdtutorial";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} VRDcentre | Alimenté par <a href = "https://akselinc.com/>Akselinc</a>"`,
  postPerPage: 9,
  author: {
    name: "VRDcentre",
    twitter: "https://twitter.com/vrdcentre",
    instagram: "https://instagram.com/vrdcentre",
    email: "vrdcentre@gmail.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },

  youtube: "https://youtube.com/c/CodeNanshu",
  seo: {
    title: "VRDcentre",
    titleTemplate: "%s - VRDcentre",
    description: "Content based platefrom for developer to learn how to code.",
    siteUrl: "https://vrdcentre.com",
    twitter: {
      handle: "@vrdcentre",
      site: "@vrdcentre",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: "https://vrdtutorial.netlify.app",
      title: "VRDCentre",
      description:
        "Apprendre VRD sans limites. Apprenez à votre rythme, avec un accès à vie sur mobile et ordinateur, et 100 % gratuit.",
      site_name:
        "VRDcentre: Apprendre VRD sans limites.",
      images: [
        {
          url: "https://codenanshu.in/og-image.png",
          width: 1240,
          height: 480,
          alt: "VRDcentre: Apprendre VRD sans limites.",
        },
        {
          url: "https://codenanshu.in/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "VRDcentre: Apprendre VRD sans limites.",
        },
      ],
    },
  },
};

export { baseUrl };
export default siteConfig;
