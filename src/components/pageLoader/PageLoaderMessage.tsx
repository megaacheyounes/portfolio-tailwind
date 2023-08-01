'use client';
import { useEffect, useState } from 'react';
import './style.scss';

const MESSAGES = [
  'The bits are flowing slow today',
  'Still faster than Windows update',
  'Your internet is slow son',
  'Your time is very important, please wait while I ignore you',
  'Is this Windows?',
  "Let's hope it's worth the wait",
  'Dowloading more RAM',
  // 'Do you like my loading animation? I made it myself',
  'The bits are breeding, please wait',
  'I am testing your patience',
];

export default function PageLoaderMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
  }, []);

  return (
    <p
      className={
        'loading-message mx-2 mt-2 overflow-hidden text-center text-sm  text-lime-500'
      }
    >
      {message} {':)'}
    </p>
  );
}
