import React from 'react'
import { Helmet } from "react-helmet";
import { SEO } from "../consts";

const Head = () => {
  return (
    <>
      <Helmet> 
        <title>{SEO.TITLE}</title>
        <meta name="author" content="zaadevofc" />
        <meta name="keywords" content={SEO.KEYWORDS} />
        <meta name="description" content={SEO.DESC} />
        <meta property="og:url" content={SEO.URL} />
        <meta property="og:domain" content={SEO.DOMAIN} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.TITLE} />
        <meta property="og:description" content={SEO.DESC} />
        <meta
          property="og:image"
          content={`${SEO.URL}/assets/zaadevofc-icon-black-white.png"`}
        />
        <meta
          property="og:image"
          content={`${SEO.URL}/assets/zaadevofc-icon-white-black.png"`}
        />
        <meta property="og:image" content={SEO.IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={SEO.DOMAIN} />
        <meta property="twitter:url" content={SEO.URL} />
        <meta name="twitter:title" content={SEO.TITLE} />
        <meta name="twitter:description" content={SEO.DESC} />
        <meta
          property="twitter:image"
          content={`${SEO.URL}/assets/zaadevofc-icon-black-white.png"`}
        />
        <meta
          property="twitter:image"
          content={`${SEO.URL}/assets/zaadevofc-icon-white-black.png"`}
        />
        <meta property="twitter:image" content={SEO.IMAGE} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
    </>
  )
}

export default Head