import Head from 'next/head';

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
        <a href='https://portfolio-ackee-analytics.vercel.app/'>
          MEOW Analytics ;)
        </a>
      </h1>
    </>
  );
};

export default analytics;
