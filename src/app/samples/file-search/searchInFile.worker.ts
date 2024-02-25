import { delay } from '../../../utils/utils';

export type SearchInFileOptions = {
  fileList: FileList;
  query: string;
  max: number;
};
export type SearchFileResult = {
  file: string;
  data: string[];
};
export type SearchResult = {
  total: number;
  results: SearchFileResult[];
};

self.onmessage = async function (event: MessageEvent<SearchInFileOptions>) {
  console.log('worker,received message');
  const data = await searchInFiles(event.data);
  postMessage(data);
};

const searchInFiles = async (
  options: SearchInFileOptions
): Promise<SearchResult> => {
  const allData = {
    total: 0,
    results: [] as SearchFileResult[],
  };
  console.log('fileList', FileList);
  for (let i = 0; i < options.fileList.length; i++) {
    const file = options.fileList.item(i);
    if (file == null) {
      console.error('worker', 'file at ', i, 'is null');
      break;
    }
    const fileResult = await searchInFile(file, options.query, options.max);
    allData.results.push({
      file: file.name,
      data: fileResult,
    });
    allData.total += fileResult.length;
  }

  return allData;
};
const searchInFile = async (
  file: File,
  query: string,
  max: number
): Promise<string[]> => {
  await delay(500);
  const fileSize = file.size;
  const result: string[] = [];
  const CHUNK_SIZE = 1024 * 1024; // 1 MB Chunk size
  const decoder = new TextDecoder('utf-8');

  let offset = 0;
  const lines: string[] = [];
  console.log('fileSize', fileSize);
  console.log('searchingFor:', query);

  while (offset < fileSize) {
    const chunk = await readChunk(file, offset, CHUNK_SIZE);
    if (chunk == null) return result;
    const decodedChunk = decoder.decode(chunk);
    const chunkLines = decodedChunk.split('\n');

    // If the last chunk ended with a line break, remove the empty string at the end
    if (offset + CHUNK_SIZE >= fileSize) {
      chunkLines.pop();
    }

    // Append the lines from the chunk to the accumulated lines
    lines.push(...chunkLines);
    // console.log('lines:', lines.length);

    // Process the lines and clear the buffer if a complete line is found
    while (
      lines.length > 0 &&
      (lines[0].endsWith('\n') || lines[0].endsWith('\r'))
    ) {
      const line = lines.shift();

      if (line != null && line.indexOf(query) != -1) result.push(line);
      if (result.length >= max) {
        console.log('returning result early');

        return result;
      }
    }

    offset += CHUNK_SIZE;
  }

  // Process remaining lines (if any)
  while (lines.length > 0) {
    const line = lines.shift();
    if (line != null && line.indexOf(query) != -1) result.push(line);
    if (result.length >= max) break;
  }

  return result;
};
function readChunk(
  file: File,
  offset: number,
  length: number
): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      // resolve(event.target!.result as string);
      resolve(new Uint8Array(event.target!.result as ArrayBuffer));
    };
    reader.onerror = (error) => reject(error);
    const chunk = file.slice(offset, offset + length);
    reader.readAsArrayBuffer(chunk);
  });
}
