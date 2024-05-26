import zlib from "node:zlib";
import { Buffer } from "node:buffer";

function decodeCustomUUencodedText(encodedString) {
  // Step 1: Decode from base64
  let binaryData = Buffer.from(encodedString, "base64");

  // Step 2: Remove the first 4 bytes (prefix 'SBAE')
  binaryData = binaryData.slice(4);

  // Step 3: Decompress using gzip
  try {
    let decompressedData = zlib.gunzipSync(binaryData);
    return decompressedData.toString("utf8");
  } catch (e) {
    // If decompression fails, print error and return raw binary data as a string
    console.error(`Gzip decompression error: ${e.message}`);
    return binaryData.toString("utf8");
  }
}

// Provided UUEncoded text
const encodedText =
  "U0JBRR+LCAAAAAAABAB9U8tuwjAQvCPxDygStyZKQnikNw59XXtoD1UPjr0BS7Gd+lFAiH+v7RBICOpxZ2Zn17PJcTyaTIJfkIoKHjxOZg8eoKwWUn9c4LSBGeWUGXbFgzhKoyQ4s6CRxY6usCVHDJzkCW9Fo7AgMnorpIM/qVKUUCLYhbyuESRRHMUXgoDCktb6TAYOPjVDCeoNRdiJlEW+GmTSUp6mxPWT5XxVYETCRZJmYbZcZGGBSRoiWGQ5FEtYFrid7dt+DBj3Fm6qqosDR0UFzlNLAz1mjytD4FkK9kqVFvJgRSWqVE91LyJPbKQwtX9qF0XVDh3Uu+H3vCTiNss1Poc04LHg2EgJXN9jtaSbjY3fBffdmzkM9CbUph/2zjeYSrR747XR0+7mXlJLKMEuQNYYC+PXiG81zX3SdJZmeFWEizJPwyxZQZjPkyxEBSFoVWIgZT6w3wHdbL1pNLDVh9rlnAyINuebw/5/3GZTTmDvpnXx07W4E+KLGzZMGIuqQrUC0uFb+mzY6psPsWdh2xmzp++DmrL2mP5fGY9Of/TjZZHqAwAA";

let decodedData = decodeCustomUUencodedText(encodedText);
console.log(decodedData);
