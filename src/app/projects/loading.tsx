import PageLoader from '@/components/pageLoader/PageLoader';
import { delay } from '@/utils/utils';

export default async function Loading() {
  await delay(2_000);
  return <PageLoader />;
}
