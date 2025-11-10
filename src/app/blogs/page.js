export const metadata = {
  title: " Mobiperform Blog | Mobile Performance Marketing Insights & Strategies",
  description:
    "Stay updated with the latest trends, tips, and strategies in mobile performance marketing. Explore blogs on user acquisition, app monetization, advertising optimization, and growth marketing.",
  metadataBase: new URL("https://mobiperform.com"),
  alternates: {
    canonical: "./",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  // },
};

import { Blog } from "@/components/blog/Blog";
const page = () => {
  return (
    <div>
      <Blog url="blogs" />
    </div>
  );
};

export default page;
