// Rockville Sprint 1: hydration + layout + screenshots for N paths via headless Chrome (CDP 9350).
// Usage: node rockville_cdp_checks.mjs <base-url> <out-dir> [comma-separated paths]
import { writeFileSync, mkdirSync } from "node:fs";
const [BASE, OUT] = process.argv.slice(2); mkdirSync(OUT, { recursive: true });
const PATHS = process.argv[4] ? process.argv[4].split(",") : ["/locations/rockville-md/deep-cleaning","/locations/rockville-md/move-out-cleaning","/locations/rockville-md/recurring-cleaning"];
const vres = await (await fetch("http://127.0.0.1:9350/json/version")).json();
function mk(u){const ws=new WebSocket(u);const p=new Map();const L=[];let i=0;const r=new Promise(x=>ws.onopen=()=>x());ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id&&p.has(m.id)){const{res,rej}=p.get(m.id);p.delete(m.id);m.error?rej(new Error(m.error.message)):res(m.result);}else if(m.method)for(const l of L)l(m);};return{ready:r,send:(me,pa={},s)=>new Promise((res,rej)=>{const id=++i;p.set(id,{res,rej});ws.send(JSON.stringify({id,method:me,params:pa,...(s?{sessionId:s}:{})}));}),on:f=>L.push(f),ws};}
const c=mk(vres.webSocketDebuggerUrl);await c.ready;
const {targetId}=await c.send("Target.createTarget",{url:"about:blank"});
const {sessionId}=await c.send("Target.attachToTarget",{targetId,flatten:true});
const S=(m,p)=>c.send(m,p,sessionId);let errs=[];
c.on(m=>{if(m.sessionId!==sessionId)return;const d=(x)=>x&&(x.value||x.description||"");
  if(m.method==="Runtime.exceptionThrown"){const s=m.params.exceptionDetails?.exception?.description||"";const t=s.match(/React error #(\d+)/);errs.push(t?"React#"+t[1]:"exc:"+s.slice(0,80));}
  else if(m.method==="Runtime.consoleAPICalled"&&(m.params.type==="error"||m.params.type==="warning")){const s=(m.params.args||[]).map(d).join(" ");const t=s.match(/error #(\d+)/);errs.push(t?"React#"+t[1]:"console:"+s.slice(0,80));}
});
await S("Page.enable");await S("Runtime.enable");await S("Network.enable");await S("Network.setCacheDisabled",{cacheDisabled:true});
const EVAL=`({title:document.title,h1:document.querySelectorAll('h1').length,h1Text:document.querySelector('h1')?.innerText,ovf:document.documentElement.scrollWidth-window.innerWidth,broken:[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.getAttribute('src')),hero:(()=>{const i=document.querySelector('section img[fetchpriority="high"]');return i?{src:i.currentSrc.split('/').pop(),w:i.naturalWidth,h:i.naturalHeight,rw:Math.round(i.getBoundingClientRect().width),rh:Math.round(i.getBoundingClientRect().height)}:null})(),video:(()=>{const v=document.querySelector('video');return v?{ready:v.readyState,src:v.currentSrc.split('/').pop(),poster:!!v.poster,w:Math.round(v.getBoundingClientRect().width),h:Math.round(v.getBoundingClientRect().height),paused:v.paused,muted:v.muted}:null})(),canonical:document.querySelector('link[rel=canonical]')?.href,robots:document.querySelector('meta[name=robots]')?.content,schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(s=>{try{const o=JSON.parse(s.textContent);return Array.isArray(o['@type'])?o['@type'].join('+'):(o['@type']||(o['@graph']?'graph':'?'))}catch(e){return 'INVALID'}}),docH:document.documentElement.scrollHeight})`;
const out={};
for(const PATH of PATHS){const slug=PATH.split('/').filter(Boolean).slice(-1)[0];
for(const [vp,w,h,mob] of [["desktop",1440,900,false],["mobile",390,844,true]]){errs=[];
  await S("Network.clearBrowserCache");
  await S("Emulation.setDeviceMetricsOverride",{width:w,height:h,deviceScaleFactor:mob?2:1,mobile:mob,screenWidth:w,screenHeight:h});
  const ld=new Promise(x=>c.on(m=>{if(m.sessionId===sessionId&&m.method==="Page.loadEventFired")x();}));
  await S("Page.navigate",{url:BASE+PATH});await ld;await new Promise(r=>setTimeout(r,3000));
  const r=(await S("Runtime.evaluate",{expression:EVAL,returnByValue:true})).result.value;
  const shot=await S("Page.captureScreenshot",{format:"jpeg",quality:70,captureBeyondViewport:false});
  writeFileSync(`${OUT}/${slug}-${vp}-fold.jpg`,Buffer.from(shot.data,"base64"));
  await S("Emulation.setDeviceMetricsOverride",{width:w,height:Math.min(r.docH,12000),deviceScaleFactor:1,mobile:mob,screenWidth:w,screenHeight:Math.min(r.docH,12000)});
  await new Promise(r=>setTimeout(r,800));
  const full=await S("Page.captureScreenshot",{format:"jpeg",quality:55,captureBeyondViewport:true});
  writeFileSync(`${OUT}/${slug}-${vp}-full.jpg`,Buffer.from(full.data,"base64"));
  out[slug+':'+vp]={errors:errs.slice(),...r};
  console.log(`${slug} ${vp}: react/console errors=${errs.length?errs.join(" | "):"none"} h1=${r.h1} ovf=${r.ovf}px broken=${JSON.stringify(r.broken)} hero=${JSON.stringify(r.hero)} video=${JSON.stringify(r.video)} schemas=${r.schemas.join(",")} robots="${r.robots}"`);
}
}
writeFileSync(`${OUT}/rockville-cdp-results.json`,JSON.stringify(out,null,2));
await c.send("Target.closeTarget",{targetId});c.ws.close();process.exit(0);
