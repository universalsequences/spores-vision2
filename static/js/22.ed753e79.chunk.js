(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{2949:function(e,n,t){"use strict";t.r(n);var r=t(9),a=t(10),o=t(0),i=t.n(o),u=t(468),c=t(1396),f=t(212),l=t(13),s=t(359),b=t(11),d=t(224),v=t(204);function p(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return h(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw o}}}}function h(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var m=Object(l.b)(function(e,n){var t=n.sequencerEngine,r=n.id;return{loadingProgress:e.sequencer.sequenceLoadingProgress[r||t&&t.sequenceId]||0}},function(e){return{}})(function(e){var n=e.sequencerEngine,t=e.loadingProgress,r=e.option,u=void 0===r?s.b:r,l=Object(o.useState)(!1),h=Object(a.a)(l,2),m=(h[0],h[1]);return Object(o.useEffect)(function(){if(100===t){m(!0);var e=function(e){if(e.mixes.every(function(e){return 0===e.length})){var n,t=p(e.subSequences);try{for(t.s();!(n=t.n()).done;){var r=n.value;e.switchToSubSequence(r.id);var a=0,o=r.mix,i=r.tracks[0];if(i)for(var u=i.patterns.length,c=r.tracks,l=0;l<u;l++){var s=4*Object(f.f)(e,l,c),h=new v.a(l);h.step=a,o.dispatch(Object(d.h)(h,s)),a+=s}}}catch(g){t.e(g)}finally{t.f()}}var m=Math.max(8,Math.max.apply(Math,Object(b.a)(e.mixes.map(function(e){return e.length/32+16}))));return console.log("NUM BARS = ",m),Math.floor(m)}(n);Object(f.a)(n,e,u,!0).then(function(){window.exportCompleted=!0,m(!1)})}},[t,m,n,u]),i.a.createElement("div",null,i.a.createElement(c.a,{renderLength:8}))});n.default=Object(l.b)(function(e){return{}},function(e){return{}})(function(e){var n=Object(u.a)(Object(r.a)({},e,{skipSampleRate:!0})),t=Object(a.a)(n,3),o=(t[0],t[1]);t[2];return i.a.createElement("div",null,i.a.createElement(m,{sequencerEngine:o}))})}}]);