import Head from 'next/head';
import Navbar from './nav';
import Footer from './footer';

const name = "Port Jimmys";
export const siteTitle = 'Port Jimmys';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Jimmy's Portfolio site with a blog"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
