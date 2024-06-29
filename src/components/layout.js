import Head from 'next/head';
import styles from '../styles/layout.module.css';
import Navbar from './nav';
import Footer from './footer';

const name = "Port Jimmys";
export const siteTitle = 'Port Jimmys';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Jimmy's Portfolio site with a blog"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        <>
        <Image
            priority
            src="/images/profile.png"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
        />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </header>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
