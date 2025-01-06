import zlib from "node:zlib";
import { Buffer } from "node:buffer";

export function encodeCustomUUencodedText(json: string): string {
  const prettyfiedJson = JSON.stringify(JSON.parse(json), null, 2).replace(
    /\n/g,
    "\r\n",
  ).replace(/"weight": ?(\d+),/g, '"weight": $1.0,');

  // Compress using gzip
  const compressedData = zlib.gzipSync(prettyfiedJson);

  // Add the non-gzip prefix 'SBAE'
  let binaryData = Buffer.from("SBAE", "ascii");
  binaryData = Buffer.concat([binaryData, compressedData]);

  // Encode to base64
  return binaryData.toString("base64");
}

if (import.meta.main) {
  const encodedText = encodeCustomUUencodedText(Deno.args[0]);
  console.log(encodedText);
}
