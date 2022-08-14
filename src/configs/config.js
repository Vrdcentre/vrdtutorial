const baseUrl = "https://github.com/Vrdcentre/vrdtutorial";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} VRDCentre.`,
  postPerPage: 9,
  author: {
    name: "Ai Anshu",
    github: "https://github.com/aianshume",
    twitter: "https://twitter.com/vrdcentre",
    instagram: "https://instagram.com/vrdcentre",
    email: "aianshume@yahoo.com",
  },
  repo: {
    url: baseUrl,
    editUrl: `${baseUrl}/edit/main/website/pages`,
    blobUrl: `${baseUrl}/blob/main`,
  },
  openCollective: {
    url: "https://opencollective.com/codenanshu",
  },
  discord: {
    url: "https://discord.gg/codenanshu",
  },
  youtube: "https://youtube.com/c/CodeNanshu",
  seo: {
    title: "CodeNanshu",
    titleTemplate: "%s - CodeNanshu",
    description: "Content based platefrom for developer to learn how to code.",
    siteUrl: "https://codenanshu.in",
    twitter: {
      handle: "@aianshume",
      site: "@aianshume",
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: "https://vrdtutorial.netlify.app",
      title: "VRDCentre",
      description:
        "Content based platefrom for developer to learn how to code.",
      site_name:
        "CodeNanshu: Content based platefrom for developer to learn how to code.",
      images: [
        {
          url: "https://codenanshu.in/og-image.png",
          width: 1240,
          height: 480,
          alt: "CodeNanshu: Content based platefrom for developer to learn how to code.",
        },
        {
          url: "https://codenanshu.in/twitter-og-image.png",
          width: 1012,
          height: 506,
          alt: "CodeNanshu: Content based platefrom for developer to learn how to code.",
        },
      ],
    },
  },
};

export { baseUrl };
export default siteConfig;
