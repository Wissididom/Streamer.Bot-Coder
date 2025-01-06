import { assertEquals } from "@std/assert";
import { decodeCustomUUencodedText } from "./decode.ts";
import { encodeCustomUUencodedText } from "./encode.ts";

const encoded =
  "U0JBRR+LCAAAAAAABADtV91v4jgQfz/p/oeIp2N3gxIIhVQ6oZZtKe0t3UI/2fTBSUzw1olztgNl2/5n93b/2I2T8BEIq9VJ93RbQYrnNzMez5cnL7/+ommVGeaCsKhyqDU+pAQSxozL221ySCISJuGaXjFq9VqjkqNYIqC9qAUsIxRixXLKKGVzzLXPCfemSGDtI6ZY4kwKGFEip4wr1jsiBPGJz8IVuDatYtaMmrECfCw8TmKZg5va2DCJjrwciRJKFfSWGemjgpEoZRNA+ZJRtCWUwsRXutvtSbNu2kifePaBbnmoqbvNeltvNNtt2zfbTQO1l/unYn8mOMH53pt0HCGXYqVT8gQXkGePJj4+5Sw8I0IyvgCmCaKiwPWjLk2ZA86SeNM12YHpHC0EOKhMP0cR+H7luh3cY5GXcI4jWYZKToIAwrXpzC2H5lrCEDbqp75tGVar3gS3eoZd162WYeu27zX1NsbYMn3XNFvu5gE2wmKalufZrQO95SNLt/DE15FnIN3wWk2jbbVxvb0rKhexcqFlmNvI3uCsAySWufK4ib6tF48FV+/mVpk7lkHdDWEK78nzdczwBENEPLyzUQp3Dx3njkBY58JxPhGPM8EmsjY4uXacUw5bzxl/OrAcZ2ZBeTWMhmk7Tig8xilxaz6llaLKx+393YXEXeanR/DvB7EbesFNg37ze7fycm5cfLyK5/7duUB3n4KH+vPUa3wKrszj/uiuCbQmBbz18Yqde2e3xO3Rr/3e+cytz4Ph/ZQ+NG6N8SiIFY5BV/cKjKrbQvH43SO73xtP3bMBvcywxfh+aHqhler/gw4b6H74FZ0MqdsDPTcD9nA/HIzvB98e7nx60TtdjBsDtx+a38YGfepTI7nt2df+2bk6A7sYzYOH0DYursWgG1Ab7IQv+30nADHHkNExobikKPIQUrQYScTLyiblEGiGh1gkVF6zW8SJysTv8Ra4dnMiqw/XRE3cOLB104COBRnf1u2229INA7Usy20YZsPfEZ1jEkyVndBr99SOrf62sWW32Wp5Kfb9yoLkxM9qwx+vqZ7aLCvEYnuiFMUC+xv4Es4VLvmzFl1QsexLey8DwaDb7paZscfUGPOQSIn9G5E3xXJ4z2HIv2qPq24yxAF+PtR+6xzCx3HcI0rh+QrfE7hSF3JKoiAnXEZ0Af+q2oRxbQGH1DIRITlGYc4E10wUYdpRjLV3GUPMSYhFJ+eYEQxX0mo5Se+obKl1UoH5O8epaR31AzjeZZ9q9TXVl6nMt9mnVC3XO3xhxiOl6rnJU7QKFErNVTxyRRPJFtOmrSsNibsiuCQTrmqdDx2tU32vsUiDY7zXMk/UXn0mq/li/qq/blKBPVu7x1jIXONNHHDk43zVD2POICwdcAUslbUT6OpazNXPMLWeqGekpVgudqx84+JIG5Glps8wQDCJU1uVOf0p3A3aaxrVamfl5gsUIbrpo4LTs8D/dzFYuVGB40QAnsBpJ3//xaF/8FxqSoAGs5DKRkwi3KmCTHq+gpnTxNXgDqO+UlwohXXb2RlVSJSOWyWDWJhdZWaxr6SNQZXVz3r6WU//13ri6ko5eY4p8YjsolgmvGxIqVDmoXxcNQpFF0SM42MmjzyPJek7xHb1ZSz9SGIODi1hiNXroJBdJY95+TvKEjJKBNVd/B3hZA2rG/nlraAZXrRGOBJEklnpwQPKXES7jFEYt3eOn+kux8rf1SClI3mdDV3GvkFmjl3BvCcsR5jPtgaNNdilBN7aiqCEnOLrKQkUv/0DFLYxPA8QAAA=";
const decoded =
  '{"version":3,"importVersion":3,"minimumVersion":"0.2.3","meta":{"name":"Follower Purchase Delete","author":"Wissididom","version":"1.0.0","description":"","autoRunAction":null},"data":{"actions":[{"id":"88f5219a-fc96-4ca5-b528-35889d1850a8","queue":null,"enabled":true,"excludeFromHistory":false,"name":"Follower Purchase Delete","group":"","alwaysRun":false,"randomAction":false,"concurrent":false,"triggers":[{"commandId":"70472596-c092-4709-9dc5-8eee41db117b","id":"114cc976-7da4-4efd-ac0a-0c750848e28b","type":401,"enabled":true,"exclusions":[]}],"actions":[{"name":"Delete","description":"","references":["C:\\\\Windows\\\\Microsoft.NET\\\\Framework64\\\\v4.0.30319\\\\mscorlib.dll"],"byteCode":"dXNpbmcgU3lzdGVtOw0KDQpwdWJsaWMgY2xhc3MgQ1BISW5saW5lDQp7DQoJcHVibGljIGJvb2wgRXhlY3V0ZSgpDQoJew0KCQlib29sIGJvdCA9IGZhbHNlOw0KCQlyZXR1cm4gQ1BILlR3aXRjaERlbGV0ZUNoYXRNZXNzYWdlKGFyZ3NbIm1zZ0lkIl0uVG9TdHJpbmcoKSwgYm90KTsNCgl9DQp9DQo=","precompile":false,"delayStart":false,"saveResultToVariable":false,"saveToVariable":"","id":"b1a5e369-10a5-4018-98b7-00a744b3013d","weight":0.0,"type":99999,"group":null,"enabled":true,"index":0}],"actionGroups":[],"collapsedGroups":[]}],"queues":[],"commands":[{"sources":[0],"permittedUsers":[],"permittedGroups":[],"id":"70472596-c092-4709-9dc5-8eee41db117b","name":"Regex: (?:(?:\\\\bAll\\\\b|\\\\bEverything\\\\b|\\\\bOnly\\\\b) for your (?:\\\\bstream\\\\b|\\\\bchannel?\\\\b).*(?:\\\\bprimes?\\\\b|\\\\bviewers?\\\\b|\\\\bfollows?\\\\b| ?(?:\\\\w*\\\\. ?\\\\w*|\\\\*\\\\*\\\\*))|.*(?:(?:\\\\bchannels?\\\\b|\\\\bviewers?\\\\b|\\\\bviews?\\\\b|\\\\bf[o0]ll[o0]wers?\\\\b|\\\\bprimes?\\\\b|\\\\bchat b[o0]ts?\\\\b|\\\\bsubprimes?\\\\b|\\\\bfollows?\\\\b|\\\\bprimesubs?\\\\b|\\\\bbits?\\\\b) ?,? ?)+ on \\\\w+ *(?:\\\\.|dot) *(?:\\\\w|-|(?:\\\\.|dot) ?)+|(?:\\\\bBest\\\\b|\\\\bUpgrade\\\\b|\\\\bImprover?|.*\\\\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\\\\b|\\\\bBewerben Sie\\\\b|\\\\bPromote\\\\b) *(?:Ihren |your )?(?:(?:\\\\bKanals?\\\\b|\\\\bchannels?\\\\b|\\\\bstreams?\\\\b|\\\\bviewers?\\\\b|\\\\bviews?\\\\b|\\\\bf[o0]ll[o0]wers?\\\\b|\\\\bprimes?\\\\b|\\\\bchat b[o0]ts?\\\\b) ?,? ?)+|\\\\bZuschauer für nur\\\\b|\\\\bhier ist (?:eine?)? ?Promo\\\\b|\\\\bstreamhub world\\\\b)","enabled":false,"include":true,"mode":1,"command":"(?:(?:\\\\bAll\\\\b|\\\\bEverything\\\\b|\\\\bOnly\\\\b) for your (?:\\\\bstream\\\\b|\\\\bchannel?\\\\b).*(?:\\\\bprimes?\\\\b|\\\\bviewers?\\\\b|\\\\bfollows?\\\\b| ?(?:\\\\w*\\\\. ?\\\\w*|\\\\*\\\\*\\\\*))|.*(?:(?:\\\\bchannels?\\\\b|\\\\bviewers?\\\\b|\\\\bviews?\\\\b|\\\\bf[o0]ll[o0]wers?\\\\b|\\\\bprimes?\\\\b|\\\\bchat b[o0]ts?\\\\b|\\\\bsubprimes?\\\\b|\\\\bfollows?\\\\b|\\\\bprimesubs?\\\\b|\\\\bbits?\\\\b) ?,? ?)+ on \\\\w+ *(?:\\\\.|dot) *(?:\\\\w|-|(?:\\\\.|dot) ?)+|(?:\\\\bBest\\\\b|\\\\bUpgrade\\\\b|\\\\bImprover?|.*\\\\b[o0]ffer pr[o0]m[o0]ti[o0]n [o0]f\\\\b|\\\\bBewerben Sie\\\\b|\\\\bPromote\\\\b) *(?:Ihren |your )?(?:(?:\\\\bKanals?\\\\b|\\\\bchannels?\\\\b|\\\\bstreams?\\\\b|\\\\bviewers?\\\\b|\\\\bviews?\\\\b|\\\\bf[o0]ll[o0]wers?\\\\b|\\\\bprimes?\\\\b|\\\\bchat b[o0]ts?\\\\b) ?,? ?)+|\\\\bZuschauer für nur\\\\b|\\\\bhier ist (?:eine?)? ?Promo\\\\b|\\\\bstreamhub world\\\\b)","regexExplicitCapture":false,"location":0,"ignoreBotAccount":true,"ignoreInternal":true,"persistCounter":false,"counter":0,"persistUserCounter":false,"userCounters":{},"caseSensitive":false,"globalCooldown":0,"userCooldown":0,"group":"","grantType":0}],"websocketServers":[],"websocketClients":[],"timers":[]}}';

Deno.test(function decode() {
  const decodedObj = JSON.parse(decodeCustomUUencodedText(encoded));
  const expectedObj = JSON.parse(decoded);
  assertEquals(decodedObj, expectedObj);
});

Deno.test(function encode() {
  const encodedObj = encodeCustomUUencodedText(decoded);
  assertEquals(encodedObj, encoded);
});
