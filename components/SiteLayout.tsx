import React from "react";
import Head from "next/head";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SITE_URL } from "constants/site";

interface SiteLayoutProps {
  title?: string;
  description?: string;
  ogImage?: string;
  children: React.ReactNode;
}

export function SiteLayout({
  title = "Ken Huang — Product Designer & Frontend Developer",
  description = "Ken Huang is a product designer and frontend developer based in Taipei, Taiwan with 15+ years of experience.",
  ogImage = "/images/og-image.jpg",
  children,
}: SiteLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${SITE_URL}${ogImage}`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
