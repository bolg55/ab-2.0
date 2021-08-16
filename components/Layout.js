import Head from "next/head";
import Footer from "./Footer";

export default function Layout({
  title,
  keywords,
  description,
  currentURL,
  previewImage,
  children,
}) {
  return (
    <div>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/KellenAvatar.png' />
        {/* Open Graph */}
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <meta property='og:url' content={currentURL} />
        <meta property='og:image' content={previewImage} key='ogimage' />
        <meta
          property='og:site_name'
          content='actionbackers.com'
          key='ogsitename'
        />
        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='@actionbackers' key='twhandle' />
        <title>{title}</title>
      </Head>

      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Action Backers 2.0",
  description:
    "The new home of Action Backers. Become a profitable sports bettor today. Built by Kellen Bolger",
  keywords:
    "sports betting, bet on sports, nhl betting, nfl betting, nba betting, mlb betting, make money betting on sports",
  previewImage:
    "https://res.cloudinary.com/dxghtqpao/image/upload/v1626978460/largeKBShort_dmz3d3.png",
  currentURL: "https://www.actionbackers.com",
};
