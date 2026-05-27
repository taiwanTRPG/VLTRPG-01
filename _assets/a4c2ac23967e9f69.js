(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[37329],{

/***/ 341086:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var v=__c.v;var Qtd,Std,Rtd,d8;Qtd=function(a){return(Math.ceil(Math.sqrt(Math.max(1,Math.ceil(a/2))*4)/2)*2)**2};
Std=function(a,b){const c=Math.ceil(b/1E6*200),d=Math.ceil(Math.ceil(b/1E6*a.sampleRate)/c),e=Array.from({length:a.numberOfChannels},(g,h)=>{g=Math.floor(0*a.sampleRate);const k=Math.min(Math.floor((0+b)/1E6*a.sampleRate),a.length);return a.getChannelData(h).subarray(g,k)}),f=new Float32Array(Qtd(c));for(let g=0;g<c;g++){const h=Rtd(e,g,d),k=g*2;f[k]=h.max;f[k+1]=h.min}return{buffer:f,o2:c}};
Rtd=function(a,b,c){var d=Math.floor(b*c);b=Math.min(Math.floor((b+1)*c),a[0].length,d+500);c=Infinity;let e=-Infinity;for(;d<b;d++){let f=0;for(let g=0;g<a.length;++g)f+=a[g][d];c=Math.min(c,f);e=Math.max(e,f)}return{min:isFinite(c)?c/a.length:0,max:isFinite(e)?e/a.length:0}};
d8=class{static iQb(a){v(!0);v(!0);v(!0);const b=a.duration*1E6;v(a.duration*1E6>=b,"Duration of {}s exceeds audio length of {}s",b/1E6,a.duration);const {buffer:c,o2:d}=Std(a,b);return new d8(c,0,d,200)}trim(a,b){v(a>=0&&b>=0);a=Math.floor(a/1E6*this.Xca);return new d8(this.buffer,this.sva+a,Math.min(Math.ceil(b/1E6*this.Xca),this.o2-a),this.Xca)}split(a){v(a>0);if(a<=1)return[this];const b=Math.ceil(this.o2/a);return Array.from({length:Math.ceil(a)},(c,d)=>{c=this.sva+d*b;return new d8(this.buffer,
c,Math.min(c+b,this.sva+this.o2)-c,this.Xca)})}repeat(a){v(a>0);if(a<=1)return this;const b=this.o2*a,c=new Float32Array(Qtd(b));var d=this.sva*2;d=this.buffer.subarray(d,d+this.o2*2);for(let e=0;e<a;e++)c.set(d,e*d.length);return new d8(c,0,b,this.Xca)}constructor(a,b,c,d){this.buffer=a;this.sva=b;this.o2=c;this.Xca=d;v(c*2<=a.length)}};__c.zEa={};__c.zEa.fDb=d8;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/a4c2ac23967e9f69.js.map