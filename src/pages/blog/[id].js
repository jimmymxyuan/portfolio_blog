import { getAllPostIds, getPostData } from '@/components/posts';
import FullDate from '@/components/date';
import Styles from '@/styles/blog.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout';
import Container from 'react-bootstrap/Container';

const name = "Jimmy's Blog";

export default function Post({ postData }) {
  return (
    <Layout>
      <Container className="content" >
        <div className = "content">
          <div className="div_centre">
            <Link href="/">
              <Image
                priority
                src="/images/avatar.png"
                className={Styles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={Styles.headingLg}>
              <Link href="/" className={Styles.colorInherit}>
                {name}
              </Link>
            </h2>
          </div>
          <article>
            <h1 className={Styles.headingXl}>{postData.title}</h1>
            <div className={Styles.lightText}>
              <FullDate dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <div className={Styles.backToHome}>
                <Link href="/blog">← Back to Blog Home</Link>
            </div>
        </div>
        <div className="empty_space"></div>
        <div className="empty_space"></div>
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
