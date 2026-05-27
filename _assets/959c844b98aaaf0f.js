(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[77828],{

/***/ 385379:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(822995);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var aRc=async function(a,b,c){const d=$Qc()();try{const e=__c.y(a.kk.context),f=d.r(await d.s(a.fetch(b.url,{signal:c}))),g=d.r(await d.s(f.arrayBuffer()));return e.decodeAudioData(g)}finally{d.s()}},cRc=function(a,b,c,d){if(d){var e=a.cache.get(b);e||(e={buffer:c,D1:new Set},c.catch(bRc.wrap(()=>{a.cache.delete(b)})),a.cache.set(b,e));e.D1.add(d);d.addEventListener("abort",()=>{e?.D1.delete(d);e&&e.D1.size===0&&a.cache.delete(b);e=void 0},{once:!0})}},bRc=__webpack_require__(815703).F;var $Qc=__webpack_require__(929846)._;var dRc;
dRc=class{async vc(a,b,c){const d=$Qc()();try{__c.v(b.ba>=0&&b.L>=0);const m=__c.Gu(this.Pk,a);if(m){var e=this.cache.get(a)?.buffer||aRc(this,m,c);cRc(this,a,e,c);var f=d.r(await d.s(e)),g=b.L-f.duration*1E6;if(b.ba===0&&(g>=0||Math.abs(g)<=100))return f;var h=b.L/1E6*f.sampleRate;if(h<=0)return f;var k=new AudioBuffer({length:h,numberOfChannels:f.numberOfChannels,sampleRate:f.sampleRate}),l=Math.floor(f.sampleRate*b.ba/1E6);for(a=0;a<f.numberOfChannels;a++){const n=f.getChannelData(a).subarray(l,l+
h);k.copyToChannel(n,a)}return k}}finally{d.s()}}constructor(a,b,c=__c.TNc){this.kk=a;this.Pk=b;this.fetch=c;this.cache=new Map}};__c.GEa={};__c.GEa.xBb=dRc;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/959c844b98aaaf0f.js.map