!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("random-code",[],t):"object"==typeof exports?exports["random-code"]=t():e["random-code"]=t()}("undefined"==typeof self?this:self,(()=>(()=>{"use strict";var e={825:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=o(252),n=o(178);e.exports=function(e,t={letters:!0,digits:!0},o=!1){let s="";const f=[];for(const e in t)f.push(r[e]);const d=f.length;for(let t=0;t<e;t++){const e=f[n(0,d)],t=Boolean(n(0,2)),r=e[n(0,e.length)];s+=t&&o?r.toUpperCase():r}return s}},178:e=>{e.exports=function(e,t){return Math.floor(Math.random()*(t-e)+e)}},252:e=>{e.exports={letters:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],digits:["1","2","3","4","5","6","7","8","9","0"],symbols:["@","!","#","$","%","^","&","*","(",")","+","-","/"]}}},t={},o=function o(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,o),s.exports}(825);return o.default})()));