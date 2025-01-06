import zlib from "node:zlib";
import { Buffer } from "node:buffer";

export function decodeCustomUUencodedText(encodedString: string): string {
  // Step 1: Decode from base64
  let binaryData = Buffer.from(encodedString, "base64");

  // Step 2: Remove the first 4 bytes (prefix 'SBAE')
  binaryData = binaryData.slice(4);

  // Step 3: Decompress using gzip
  try {
    const decompressedData = zlib.gunzipSync(binaryData);
    return decompressedData.toString("utf8");
  } catch (e: any) {
    // If decompression fails, print error and return raw binary data as a string
    console.error(`Gzip decompression error: ${e.message}`);
    return binaryData.toString("utf8");
  }
}

if (import.meta.main) {
  const decodedData = decodeCustomUUencodedText(Deno.args[0]);
  console.log(decodedData);
}
