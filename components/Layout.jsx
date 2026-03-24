import Head from "next/head";
import { SiteHeader } from "components/SiteHeader";
import { SiteFooter } from "components/SiteFooter";
import { SITE_META_DESCRIPTION, SITE_TITLE, SITE_URL } from "constants/site";

export const Layout = ({
  children,
  title = SITE_TITLE,
  description = SITE_META_DESCRIPTION,
}) => {
  const pageTitle = title || SITE_TITLE;
  const pageDescription = description || SITE_META_DESCRIPTION;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <main className="min-h-screen bg-[#0D1533]">{children}</main>
      <SiteFooter />
    </>
  );
};

export const Container = ({ className = "", children }) => {
  return (
    <div className={`max-w-7xl mx-auto lg:px-8 px-4 ${className}`}>{children}</div>
  );
};

export const HR = () => {
  return <hr className="article-hr" />;
};
