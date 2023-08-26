import Head from 'next/head';
import Link from 'next/link';

const analytics = () => {
  return (
    <>
      <Head>
        <meta
          httpEquiv='Refresh'
          content="0; url='https://portfolio-ackee-analytics.vercel.app/'"
        />
      </Head>
      <h1>
        Redirecting to{' '}
        <Link href='https://portfolio-ackee-analytics.vercel.app/'>
          MEOW Analytics ;)
        </Link>
      </h1>
    </>
  );
};

export default analytics;
