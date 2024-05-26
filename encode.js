import zlib from "node:zlib";
import { Buffer } from "node:buffer";

function encodeCustomUUencodedText(inputString) {
  // Step 1: Convert JSON to string
  let jsonString = JSON.stringify(inputString);

  // Step 2: Compress using gzip
  let compressedData = zlib.gzipSync(jsonString);

  // Step 3: Add the non-gzip prefix 'SBAE'
  let binaryData = Buffer.from("SBAE", "ascii");
  binaryData = Buffer.concat([binaryData, compressedData]);

  // Step 4: Encode to base64
  return binaryData.toString("base64");
}

// Provided JSON data
const jsonData = {
  version: 3,
  importVersion: 2,
  minimumVersion: "0.2.1",
  meta: {
    name: "Echo",
    author: "Wissididom",
    version: "1.0.0",
    description: "",
  },
  data: {
    actions: [
      {
        id: "d758bcad-6124-4764-bcd2-ae649eb7e7bc",
        queue: null,
        enabled: true,
        excludeFromHistory: false,
        name: "Echo",
        group: "",
        alwaysRun: false,
        randomAction: false,
        concurrent: false,
        triggers: [],
        actions: [
          {
            text: "%rawInput%",
            preferredAccount: 0,
            id: "22324c8b-6f92-418e-9514-abdda8fcedf9",
            weight: 0.0,
            type: 10,
            group: null,
            enabled: true,
            index: 0,
          },
        ],
        actionGroups: [],
        collapsedGroups: [],
      },
    ],
    queues: [],
    commands: [],
    timers: [],
  },
};

let encodedText = encodeCustomUUencodedText(jsonData);
console.log(encodedText);
