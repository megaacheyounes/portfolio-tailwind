'use client';

import {
  SearchFileResult,
  SearchResult,
} from '@/app/samples/file-search/searchInFile.worker';
import PageWrapper from '@/containers/PageWrapper';
import Section from '@/containers/Section';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function ProjectsPage() {
  const [query, setQuery] = useState('');
  const [dir, setDir] = useState<FileList | null>(null);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const workerRef = useRef<Worker>();

  useEffect(() => {
    return () => onCancel();
  }, []);

  const registerWorker = () => {
    workerRef.current = new Worker(
      new URL('./searchInFile.worker.ts', import.meta.url)
    );
    console.log('webworker is null?', workerRef.current);
    workerRef.current.onmessage = (event: MessageEvent<SearchResult>) => {
      console.log('worker result received');
      onResult(event.data);
    };
  };

  const onCancel = () => {
    console.log('cancel web worker');
    setIsLoading(false);
    workerRef.current?.terminate();
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    registerWorker();
    setIsLoading(true);
    setResult(null);
    setError('');
    workerRef.current!.postMessage({
      fileList: dir,
      query,
      max: 100,
    });
  };

  const onResult = (result: SearchResult) => {
    console.log('result', result);
    setResult(result);
    setIsLoading(false);
  };

  const renderFileResults = (item: SearchFileResult) => {
    return (
      <div key={item.file}>
        <h4 className='mt-4  bg-green-900 '>
          from: {item.file} ({item.data.length})
        </h4>
        {item.data.map((line, index) => (
          <li key={item.file + '_' + index} className='mt-2 pl-4'>
            <p>
              {' '}
              <strong>{index + 1}.</strong> {line}
            </p>

            <hr className='opacity-50' />
          </li>
        ))}
      </div>
    );
  };

  return (
    <PageWrapper>
      <Section
        elevated={true}
        isLoading={isLoading}
        title='File search demo'
        className='pattern-2 md:mx-15 mx-4 mt-10 sm:mx-8 '
      >
        <form
          className='w-full border-2 border-dashed border-green-200 p-4'
          onSubmit={onSubmit}
        >
          <input
            className='mt-2  w-full rounded-lg     text-center text-sm font-medium text-white hover:cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-300  '
            type='file'
            name='files'
            multiple
            onChange={(e) => setDir(e.target.files)}
            required
            accept='.txt'
          />
          <br />
          <small className='px-4'>
            Select multiple TXT files (XLSX support coming soon)
          </small>
          <input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name='name'
            className='b mt-4 block w-full  rounded-lg border  bg-green-800/25 p-2.5    text-sm  text-white placeholder-gray-400  focus:border-green-500  focus:ring-blue-500   '
            required
          />
          <button
            disabled={isLoading}
            type='submit'
            className={twMerge(
              'mt-4 w-full rounded-lg bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white  hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-blue-300',
              isLoading ? 'opacity-20' : 'hover:cursor-pointer'
            )}
          >
            Search
          </button>

          {!!error && <h6 className=' mt-2 text-red-400'>{error}</h6>}
        </form>
        {isLoading && (
          <button
            onClick={onCancel}
            className='mt-4   w-full rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:cursor-pointer hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-blue-300   '
          >
            Cancel
          </button>
        )}

        {!!result && (
          <div className=' align-start mt-4 w-full justify-start text-start'>
            <h4>
              Results ({result.total}){' '}
              {result.total >= 100 && (
                <small className='px-4   font-light text-gray-400'>
                  Showing only 100 results from each file
                </small>
              )}{' '}
            </h4>
            <ol>
              {result.results.map((item: SearchFileResult, index: number) =>
                renderFileResults(item)
              )}
            </ol>
          </div>
        )}
      </Section>
    </PageWrapper>
  );
}
