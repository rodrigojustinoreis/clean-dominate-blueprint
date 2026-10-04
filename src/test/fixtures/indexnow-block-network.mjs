// Preloaded with `node --import` by src/test/indexnow-entrypoint.test.ts before the real
// scripts/indexnow-ping.mjs runs in a child process. It replaces global fetch so that NO request can
// leave the machine: every attempt is written to the file named by INDEXNOW_TEST_NETWORK_LOG and
// then rejected. If this file fails to load, Node aborts before the script starts.
import { appendFileSync } from "node:fs";

globalThis.fetch = async (url, init) => {
  const logFile = process.env.INDEXNOW_TEST_NETWORK_LOG;
  if (logFile) appendFileSync(logFile, `${(init && init.method) || "GET"} ${String(url)}\n`);
  throw new Error("network blocked in tests");
};
