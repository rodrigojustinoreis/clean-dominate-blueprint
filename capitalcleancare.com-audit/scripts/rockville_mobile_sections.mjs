// Mobile (390x844, DPR 2) section screenshots via headless Chrome (CDP 9350).
// Usage: node rockville_mobile_sections.mjs <base-url> <out-dir>
import { writeFileSync, mkdirSync } from "node:fs";
const [BASE, OUT] = process.argv.slice(2); mkdirSync(OUT, { recursive: true });
const TARGETS = [
  { path: "/locations/rockville-md/deep-cleaning", selector: "#rockville-deep-documented-work", file: "deep-documented-work-mobile.jpg", pad: 1400 },
  { path: "/locations/rockville-md/recurring-cleaning", text: "What recurring cleaning costs in Rockville", file: "recurring-cost-block-mobile.jpg", pad: 760, block: true },
  { path: "/locations/rockville-md/recurring-cleaning", text: "Recurring Cleaning FAQ", file: "recurring-faq-mobile.jpg", pad: 900, click: true },
  { path: "/locations/rockville-md/move-out-cleaning", text: "Book Your Rockville Move-Out Cleaning Today", file: "move-out-quote-section-mobile.jpg", pad: 700 },
];
const vres = await (await fetch("http://127.0.0.1:9350/json/version")).json();
function mk(u){const ws=new WebSocket(u);const p=new Map();const L=[];let i=0;const r=new Promise(x=>ws.onopen=()=>x());ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&p.has(m.id)){const{res,rej}=p.get(m.id);p.delete(m.id);m.error?rej(new Error(m.error.message)):res(m.result);}else if(m.method)for(const l of L)l(m);};return{ready:r,send:(me,pa={},s)=>new Promise((res,rej)=>{const id=++i;p.set(id,{res,rej});ws.send(JSON.stringify({id,method:me,params:pa,...(s?{sessionId:s}:{})}));}),on:f=>L.push(f),ws};}
const c=mk(vres.webSocketDebuggerUrl);await c.ready;
const {targetId}=await c.send("Target.createTarget",{url:"about:blank"});
const {sessionId}=await c.send("Target.attachToTarget",{targetId,flatten:true});
const S=(m,p)=>c.send(m,p,sessionId);
await S("Page.enable");await S("Runtime.enable");await S("Network.enable");await S("Network.setCacheDisabled",{cacheDisabled:true});
for (const t of TARGETS) {
  await S("Emulation.setDeviceMetricsOverride",{width:390,height:844,deviceScaleFactor:2,mobile:true,screenWidth:390,screenHeight:844});
  const ld=new Promise(x=>c.on(m=>{if(m.sessionId===sessionId&&m.method==="Page.loadEventFired")x();}));
  await S("Page.navigate",{url:BASE+t.path});await ld;await new Promise(r=>setTimeout(r,2500));
  const find = t.selector ? `document.querySelector(${JSON.stringify(t.selector)})` : `[...document.querySelectorAll('h2,h3,p')].find(e=>e.textContent.trim().startsWith(${JSON.stringify(t.text)}))`;
  const expr = `(()=>{const el=${find}; if(!el) return null; const sec=${t.block ? "el.parentElement" : "(el.closest('section')||el.parentElement)"}; sec.scrollIntoView({block:'start'}); ${t.click ? "const b=sec.querySelector('button'); if(b) b.click();" : ""} const r=sec.getBoundingClientRect(); return {x:r.left+window.scrollX,y:r.top+window.scrollY,w:r.width,h:r.height};})()`;
  const r=(await S("Runtime.evaluate",{expression:expr,returnByValue:true})).result.value;
  if(!r){console.log("NOT FOUND",t.file);continue;}
  await new Promise(r=>setTimeout(r,600));
  const h=Math.min(Math.round(r.h)+8,t.pad);
  await S("Emulation.setDeviceMetricsOverride",{width:390,height:Math.max(844,h),deviceScaleFactor:2,mobile:true,screenWidth:390,screenHeight:Math.max(844,h)});
  await new Promise(r=>setTimeout(r,400));
  const shot=await S("Page.captureScreenshot",{format:"jpeg",quality:80,captureBeyondViewport:true,clip:{x:0,y:Math.round(r.y),width:390,height:h,scale:1}});
  writeFileSync(`${OUT}/${t.file}`,Buffer.from(shot.data,"base64"));
  console.log(`${t.file}: section ${Math.round(r.w)}x${Math.round(r.h)}px at y=${Math.round(r.y)} (captured ${h}px)`);
}
await c.send("Target.closeTarget",{targetId});c.ws.close();process.exit(0);
