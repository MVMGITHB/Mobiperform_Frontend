// seo for this page is in Blog.jsx
export const metadata = {
  title: " SuperNPro Sports | Live Scores, Highlights & Athlete Stories",
  description:
    "Catch up on sports news, match highlights, player interviews, and updates across cricket, football, and more.",
  metadataBase: new URL("https://supernpro.com"),
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
      <Blog url="sports" />
    </div>
  );
};

export default page;
