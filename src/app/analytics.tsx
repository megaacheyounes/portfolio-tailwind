import { ACKEE_ANALYTICS_URL } from '@/utils/env';
import Head from 'next/head';
import Link from 'next/link';

const analytics = () => {
  return (
    <>
      <Head>
        <meta httpEquiv='Refresh' content={`0; url='${ACKEE_ANALYTICS_URL}'`} />
      </Head>
      <h1>
        Redirecting to <Link href={ACKEE_ANALYTICS_URL}>MEOW Analytics ;)</Link>
      </h1>
    </>
  );
};

export default analytics;
