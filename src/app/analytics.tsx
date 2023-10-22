import Head from 'next/head';
import Link from 'next/link';

import { ACKEE_ANALYTICS_URL, ENABLE_ANALYTICS } from '@/utils/env';

const analytics = () => {
  return (
    <>
      <Head>
        {ENABLE_ANALYTICS && (
          <meta
            httpEquiv='Refresh'
            content={`0; url='${ACKEE_ANALYTICS_URL}'`}
          />
        )}
      </Head>
      <h1>
        Redirecting to <Link href={ACKEE_ANALYTICS_URL}>MEOW Analytics ;)</Link>
      </h1>
    </>
  );
};

export default analytics;
