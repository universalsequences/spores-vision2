(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{2806:function(e,n,r){"use strict";var t=r(0),a=r.n(t),c=r(13);n.a=Object(c.b)(function(e,n){return{step:n.sequencerEngine.trackStep,isSequenceRolling:n.sequencerEngine.isSequenceRolling}},function(e){return{}})(function(e){var n=e.step,r=void 0===n?0:n,t=e.isSequenceRolling,c=e.sequencerEngine,i=void 0,u=void 0,o="";if(t){var l=c.tracks[0];if(l){var s=l.getFactoredResolution().getNumberOfStepsAtBaseResolution();l.patternRollStepNumber,l.pattern.stepBuckets.length,i=s,u=l.patternRollStepNumber}i=i;var f=u,g={left:4*Math.floor(f/4)%32*96/32+"vw",width:4*Math.floor(i/4)%32*96/32+"vw"};o=a.a.createElement("div",{className:"playhead roll-visualizer",style:g})}var p={left:4*Math.floor(r/4)%32*100/32+"vw"};return[o,a.a.createElement("div",{style:p,className:"playhead"})]})},2807:function(e,n,r){},2823:function(e,n,r){"use strict";var t=r(0),a=r.n(t),c=r(10),i=r(30),u=r(13),o=r(34);function l(e,n){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,n)}(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}new i.a;var f=function(e,n){return(e%n+n)%n},g=Object(u.b)(function(e,n){return{step:n.sequencerEngine&&n.sequencerEngine.trackStep}},function(e){return{}})(function(e){var n=e.sequencerEngine,r=e.row,i=e.part,u=e.step,s=void 0===u?0:u,g=Object(t.useCallback)(function(){var e=new o.a(Math.pow(2,2+Math.floor(i/2)),i%2===1);n.resolution=e,n.sequenceRolling=!0,n.trackRolling=!0},[n,i]),p=Object(t.useCallback)(function(){n.sequenceRolling=!1,n.trackRolling=!1},[n,i]),v=Object(t.useRef)(!1),m=Object(t.useRef)(void 0),w=new Set,E={},d=i===4*Math.floor(s/4)%32/32*8;if(n){var b,q=l(n.subSequences);try{for(q.s();!(b=q.n()).done;){var y,h=l(b.value.tracks);try{for(h.s();!(y=h.n()).done;){var S=y.value,k=S.notesTriggered||{};for(var j in k)j=f(j,12),w.add(j),E[j]||(E[j]=[]),E[j].push(S)}}catch(x){h.e(x)}finally{h.f()}}}catch(x){q.e(x)}finally{q.f()}}var O=2*r,R=2*r+1,M="triangle";if(w.has(O)||w.has(R)){var N=E[O]||[],I=E[R]||[],A=[].concat(Object(c.a)(N),Object(c.a)(I)).map(function(e){return"white"});d&&(v.current=!0,m.current=A[i%A.length],M+=" triggered")}else d&&s%4===0&&(v.current=!1);var C={};return v.current&&(M+=" old-trigger",void 0!==m.current?C.borderBottomColor=m.current:M+=" track-0"),a.a.createElement("div",{onMouseDown:g,onMouseUp:p,style:C,className:M})});n.a=function(e){var n=e.sequencerEngine,r=e.row;return a.a.createElement("div",{className:"row"},[0,1,2,3,4,5,6,7].map(function(e){return a.a.createElement(g,{sequencerEngine:n,row:r,part:e})}))}},2948:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),c=(r(214),r(1111)),i=r(13),u=Object(i.b)(function(e,n){return{num:n.sequencerEngine&&n.sequencerEngine.subSequences&&n.sequencerEngine.subSequences.length,playing:n.sequencerEngine&&n.sequencerEngine.playing}},function(e){return{}})(function(e){var n=e.playing,r=e.sequencerEngine;if(!r||!r.subSequences)return"";var t="modules";return n&&(t+=" playing"),a.a.createElement("div",{className:t},r.subSequences.slice(0,1).map(function(e){return a.a.createElement(c.a,{showPads:!0,subSequence:e})}))}),o=r(8),l=r(46),s=r(2823),f=r(673),g=r(2806),p=r(467);r(2807),n.default=Object(i.b)(function(e,n){return{wallpaper:e.sequencer.wallpaper}},function(e){return{setIsPlayingMix:function(n){return e(Object(o.Hc)(n))}}})(function(e){window.explore=!0,window.landing=!0,window.exhibit=!0;var n=e.sequencerEngine;if(!n){var r=Object(p.a)(e);n=r[1]}var c=Object(t.useCallback)(function(){if(!n.playing){var r=n.tracks[0].trackData.getCopy();r.release=null,n.tracks[0].midiEffects.liveInputTrigger(r),setTimeout(function(){e.setIsPlayingMix(!0),n.play()},500)}},[n]),i={};return e.wallpaper&&(window.isNFT?i.backgroundImage="url("+window.wallpaper+")":i.backgroundImage="url("+l.a.getHashUrl(e.wallpaper)+")"),a.a.createElement("div",{style:i,onClick:c,className:"exhibit no-select"},n?a.a.createElement(g.a,{sequencerEngine:n}):"",a.a.createElement(f.a,{sequencerEngine:n}),a.a.createElement(s.a,{sequencerEngine:n,row:0}),a.a.createElement(s.a,{sequencerEngine:n,row:1}),a.a.createElement(s.a,{sequencerEngine:n,row:2}),a.a.createElement(s.a,{sequencerEngine:n,row:3}),a.a.createElement(s.a,{sequencerEngine:n,row:4}),a.a.createElement(s.a,{sequencerEngine:n,row:5}),a.a.createElement(s.a,{sequencerEngine:n,row:6}),a.a.createElement(s.a,{sequencerEngine:n,row:7}),a.a.createElement(s.a,{sequencerEngine:n,row:8}),a.a.createElement(s.a,{sequencerEngine:n,row:9}),a.a.createElement(u,{sequencerEngine:n}))})}}]);
//# sourceMappingURL=15.cdb7fdab.chunk.js.map