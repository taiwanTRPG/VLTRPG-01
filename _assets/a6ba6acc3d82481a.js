(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[59427],{

/***/ 91988:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);__web_req__(644902);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var JGc,KGc;JGc=function(a,b,c){return __c.y(a.Rh).Y8(b,c)};KGc=function(a,b){if(a===""||b.length===0)return[];const c=[];let d=0;for(const e of b)b=a.slice(d,d+e),c.push(b),d+=e;return c};
__c.EY=class{Ff({store:a,text:b,nb:c,textAlign:d,constraint:e}){var f=__c.GGc(a,b);a={fontSize:a.fontSize,fontFamily:a.gh,fontWeight:a.fontWeight,textAlign:d,textBaseline:"alphabetic"};if(c==null||b!==""&&c.length===0){switch(e.type){case "size":c=e.maxWidth;break;case "aspectRatio":c=this.Ta.measureText({text:b,...a});if(c.width/c.height<=e.jkb)return{lines:[b],Ff:[c],lineHeight:c.fontBoundingBoxAscent+c.fontBoundingBoxDescent};c=Math.sqrt(c.width*c.height*e.Dvb);break;default:throw new __c.z(e);
}c=JGc(this,f,c)}f=c.length;if(f===0)return{lines:[],Ff:[],lineHeight:0};b=f>1?KGc(b,c):[b];c=b.map(l=>l.trimEnd());d=this.Ta.kj({Bs:c,...a});const g=d[0].fontBoundingBoxAscent+d[0].fontBoundingBoxDescent;if(e.type!=="size"||e.maxHeight==null||f===1||g*f<=e.maxHeight)return{lines:c,Ff:d,lineHeight:g};f=Math.max(0,Math.floor(e.maxHeight/g)-1);const {text:h,...k}=this.Ta.mg({text:`${b[f]}${c[f+1]}`,...a,maxWidth:e.maxWidth});return{lines:[...c.slice(0,f),h],Ff:[...d.slice(0,f),k],lineHeight:g}}constructor(a,
b){this.Ta=a;this.Rh=b}};
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/a6ba6acc3d82481a.js.map