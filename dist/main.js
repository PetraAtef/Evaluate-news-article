var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";function r(e){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}n.r(t),n.d(t,"checkUrl",(function(){return r})),n.d(t,"event_handler",(function(){return o}));async function o(e){e.preventDefault();let t=document.getElementById("name").value;if(console.log(t),r(t)){const e=await(async(e="",t={})=>{const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return console.log(n),await n.json()})("http://localhost:8081/test-url",{form_url:t});console.log(e),document.getElementById("text").innerHTML=JSON.stringify(e.text),document.getElementById("score_tag").innerHTML=JSON.stringify(e.score_tag),document.getElementById("agreement").innerHTML=JSON.stringify(e.agreement),document.getElementById("subjectivity").innerHTML=JSON.stringify(e.subjectivity),document.getElementById("confidence").innerHTML=JSON.stringify(e.confidence),document.getElementById("irony").innerHTML=JSON.stringify(e.irony)}else alert("false URL")}n(0),n(1),n(2),n(3),n(4);console.log(r),alert("I EXIST")}]);