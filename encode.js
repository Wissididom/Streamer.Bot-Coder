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
  importVersion: 3,
  minimumVersion: "0.2.3",
  meta: {
    name: "Follower Purchase Delete",
    author: "Wissididom",
    version: "1.0.0",
    description: "",
    autoRunAction: null,
  },
  data: {
    actions: [
      {
        id: "88f5219a-fc96-4ca5-b528-35889d1850a8",
        queue: null,
        enabled: true,
        excludeFromHistory: false,
        name: "Follower Purchase Delete",
        group: "",
        alwaysRun: false,
        randomAction: false,
        concurrent: false,
        triggers: [
          {
            commandId: "70472596-c092-4709-9dc5-8eee41db117b",
            id: "114cc976-7da4-4efd-ac0a-0c750848e28b",
            type: 401,
            enabled: true,
            exclusions: [],
          },
        ],
        actions: [
          {
            name: "Delete",
            description: "",
            references: [
              "C:\\Windows\\Microsoft.NET\\Framework64\\v4.0.30319\\mscorlib.dll",
            ],
            byteCode:
              "dXNpbmcgU3lzdGVtOw0KDQpwdWJsaWMgY2xhc3MgQ1BISW5saW5lDQp7DQoJcHVibGljIGJvb2wgRXhlY3V0ZSgpDQoJew0KCQlib29sIGJvdCA9IGZhbHNlOw0KCQlyZXR1cm4gQ1BILlR3aXRjaERlbGV0ZUNoYXRNZXNzYWdlKGFyZ3NbIm1zZ0lkIl0uVG9TdHJpbmcoKSwgYm90KTsNCgl9DQp9DQo=",
            precompile: false,
            delayStart: false,
            saveResultToVariable: false,
            saveToVariable: "",
            id: "b1a5e369-10a5-4018-98b7-00a744b3013d",
            weight: 0.0,
            type: 99999,
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
    commands: [
      {
        sources: [0],
        permittedUsers: [],
        permittedGroups: [],
        id: "70472596-c092-4709-9dc5-8eee41db117b",
        name: "Regex: (?:(?:\\bAll\\b|\\bEverything\\b|\\bOnly\\b) for your (?:\\bstream\\b|\\bchannel?\\b).*(?:\\bprimes?\\b|\\bviewers?\\b|\\bfollows?\\b| ?(?:\\w*\\. ?\\w*|\\*\\*\\*))|.*(?:(?:\\bchannels?\\b|\\bviewers?\\b|\\bviews?\\b|\\bf[o0]ll[o0]wers?\\b|\\bprimes?\\b|\\bchat b[o0]ts?\\b|\\bsubprimes?\\b|\\bfollows?\\b|\\bprimesubs?\\b|\\bbits?\\b) ?,? ?)+ on \\w+ *(?:\\.|dot) *(?:\\w|-|(?:\\.|dot) ?)+|(?:\\bBest\\b|\\bUpgrade\\b|\\bImprover?|.*\\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\\b|\\bBewerben Sie\\b|\\bPromote\\b) *(?:Ihren |your )?(?:(?:\\bKanals?\\b|\\bchannels?\\b|\\bstreams?\\b|\\bviewers?\\b|\\bviews?\\b|\\bf[o0]ll[o0]wers?\\b|\\bprimes?\\b|\\bchat b[o0]ts?\\b) ?,? ?)+|\\bZuschauer für nur\\b|\\bhier ist (?:eine?)? ?Promo\\b|\\bstreamhub world\\b)",
        enabled: false,
        include: true,
        mode: 1,
        command:
          "(?:(?:\\bAll\\b|\\bEverything\\b|\\bOnly\\b) for your (?:\\bstream\\b|\\bchannel?\\b).*(?:\\bprimes?\\b|\\bviewers?\\b|\\bfollows?\\b| ?(?:\\w*\\. ?\\w*|\\*\\*\\*))|.*(?:(?:\\bchannels?\\b|\\bviewers?\\b|\\bviews?\\b|\\bf[o0]ll[o0]wers?\\b|\\bprimes?\\b|\\bchat b[o0]ts?\\b|\\bsubprimes?\\b|\\bfollows?\\b|\\bprimesubs?\\b|\\bbits?\\b) ?,? ?)+ on \\w+ *(?:\\.|dot) *(?:\\w|-|(?:\\.|dot) ?)+|(?:\\bBest\\b|\\bUpgrade\\b|\\bImprover?|.*\\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\\b|\\bBewerben Sie\\b|\\bPromote\\b) *(?:Ihren |your )?(?:(?:\\bKanals?\\b|\\bchannels?\\b|\\bstreams?\\b|\\bviewers?\\b|\\bviews?\\b|\\bf[o0]ll[o0]wers?\\b|\\bprimes?\\b|\\bchat b[o0]ts?\\b) ?,? ?)+|\\bZuschauer für nur\\b|\\bhier ist (?:eine?)? ?Promo\\b|\\bstreamhub world\\b)",
        regexExplicitCapture: false,
        location: 0,
        ignoreBotAccount: true,
        ignoreInternal: true,
        persistCounter: false,
        counter: 0,
        persistUserCounter: false,
        userCounters: {},
        caseSensitive: false,
        globalCooldown: 0,
        userCooldown: 0,
        group: "",
        grantType: 0,
      },
    ],
    websocketServers: [],
    websocketClients: [],
    timers: [],
  },
};

let encodedText = encodeCustomUUencodedText(jsonData);
console.log(encodedText);
