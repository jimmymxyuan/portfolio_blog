import Layout from '@/components/layout';
import FullDate from '@/components/date';
import { getSortedPostsData } from '@/components/posts';
import Styles from '@/styles/blog.module.css'
import Link from 'next/link';
import Image from 'next/image';

const name = "Jimmy's Blog";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Blog({ allPostsData }) {
    return (
      <Layout>
        <div className="div_centre">
            <Image
                priority
                src="/images/avatar.png"
                className={Styles.borderCircle}
                height={144}
                width={144}
                alt=""
            />
            <h1 className={Styles.heading2Xl}>{name}</h1>
        </div>
        <div className = "content">
            <section className={Styles.headingMd}>
                <p>Welcome to Jimmy&apos;s Blog</p>
                <p>
                This is where Jimmy talk about his various engineering adventures
                </p>
            </section>
            <section className={`${Styles.headingMd} ${Styles.padding1px}`}>
                <h2 className={Styles.headingLg}>Blog</h2>
                <ul className={Styles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={Styles.listItem} key={id}>
                    <Link href={`/blog/${id}`}>{title}</Link>
                    <br />
                    <small className={Styles.lightText}>
                        <FullDate dateString={date} />
                    </small>
                    </li>
                ))}
                </ul>
            </section>
        </div>
        <div className="empty_space"></div>
        <div className="empty_space"></div>
      </Layout>
    );
  }
  