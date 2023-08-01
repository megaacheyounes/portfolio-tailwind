'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/Younes_Megaache.cv.pdf');
  }, []);
  return <></>;
}
