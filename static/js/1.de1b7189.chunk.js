(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2793:function(e,n,t){},2795:function(e,n,t){"use strict";var c=t(58),a=t(93),r=t(6),i=t(0),s=t.n(i),u=t(59),l=t(12);t(459),t(2848);n.a=Object(l.b)(function(e){return{modal:e.zobject.modal}},function(e){return{setZObjectModal:function(n){return e(Object(r.Wh)(n))}}})(function(e){var n=e.setZObjectModal,t=e.modal,r=Object(i.useCallback)(function(){t.zobject.sendMessage(t.zobject.outputByNumber(0),a.a),n(void 0)},[t]),l=Object(i.useCallback)(function(){t.zobject.sendMessage(t.zobject.outputByNumber(1),a.a),n(void 0)},[t]);if(!t)return"";t.zobject,t.text;var o=t.link,m=t.okButtonText,d=t.cancelButtonText;return s.a.createElement(c.a,{dialogClassName:"zobject-modal rack-modal",show:!0},s.a.createElement(c.a.Body,null,s.a.createElement("div",null,t.text),o&&s.a.createElement("div",{className:"modal-links"},Array.isArray(o)?o.map(function(e){return s.a.createElement("div",{className:"modal-link"},s.a.createElement("div",{className:"link-text"},e.text),s.a.createElement("a",{target:"_blank",href:e.url},"\u2197"))}):s.a.createElement("div",{className:"modal-link"},s.a.createElement("div",{className:"link-text"},o.text),s.a.createElement("a",{target:"_blank",href:o.url},"\u2197")))),s.a.createElement(c.a.Footer,null,s.a.createElement(u.b,{variant:"secondary",onClick:r},m||"Ok"),d&&s.a.createElement(u.b,{variant:"primary",onClick:l},d||"Cancel")))})},2796:function(e,n,t){"use strict";var c=t(0),a=t.n(c),r=t(1530),i=t(12),s=t(79);t(2793);n.a=Object(i.b)(function(e,n){return{enableRollViewer:e.sequencer.enableRollViewer,viewMode:e.sequencer.viewMode,halftime:n.sequencerEngine&&n.sequencerEngine.keyListener&&n.sequencerEngine.keyListener.halftime,sequenceRolling:e.sequencer.trackRolling&&n.sequencerEngine&&n.sequencerEngine.isSequenceRolling,rollResolution:e.sequencer.resolution}},function(e){return{}})(function(e){var n=e.viewMode,t=e.sequenceRolling,c=e.enableRollViewer,i=e.sequencerEngine,u=e.halftime,l=e.rollResolution;return t||u?n===s.a?"":c?a.a.createElement("div",{className:"rolling-viewer"},a.a.createElement("div",{className:"roll-text"},t?a.a.createElement("span",null,"ROLLING ",l.toString()):a.a.createElement("span",null,"HALF-TIME"),a.a.createElement(r.a,{sequencerEngine:i}))):"":""})},2797:function(e,n,t){},2798:function(e,n,t){},2799:function(e,n,t){"use strict";var c=t(0),a=t.n(c),r=t(12),i=t(202);n.a=Object(r.b)(function(e,n){return{progressbar:e.zobject.progressbar}},function(e){return{}})(function(e){var n=e.progressbar;return n?a.a.createElement(i.a,{intervalPiece:1,width:200,intervalTime:100,text:n}):""})},2810:function(e,n,t){"use strict";t.r(n);var c=t(9),a=t(0),r=t.n(a),i=t(10),s=t(97),u=t(12),l=(t(2850),Object(u.b)(function(e,n){return{selectedZObject:e.zobject.selectedZObject}},function(e){return{}})(function(e){var n=e.selectedZObject,t=(e.sequencerEngine,Object(a.useState)(!1)),u=Object(c.a)(t,2),l=u[0],o=u[1],m="zequencer-dock",d="";l&&(m+=" showing",n&&n.getObjectType()===s.c&&(d=[].concat(Object(i.a)(n.midiEffects.effects),Object(i.a)(n.effects)).map(function(e){return r.a.createElement("div",{className:"effect-option"},e.name)})));return r.a.createElement("div",{onMouseEnter:function(e){return o(!0)},onMouseLeave:function(e){return o(!1)},className:m},d)}),t(2796)),o=t(6),m=t(1068),d=t(457),f=t.n(d),b=t(15),g=t.n(b),E=t(657),v=t(337),j=t(1104),w=t(1065),O=(t(2851),t(1536),t(2797),t(1537),t(1538),t(2798),t(1067),t(1520),t(1521),t(1522),t(1523),t(1524),t(1085),t(1525),t(1076),t(1517),t(1527),t(1516),t(1528),t(1549),t(2755),t(1526),t(899),t(1529),t(1072),t(1541),t(2795)),q=t(2799);n.default=Object(u.b)(function(e,n){return{loadingSequence:e.sequencer.loadingSequence,loading:e.sequencer.loadingSequence[window.projectId],isPlaying:e.sequencer.isMainPlaying}},function(e){return{setFullScreenZObject:function(n){return e(Object(o.rc)(n))},setIsPlayingMix:function(n){return e(Object(o.Hc)(n))}}})(function(e){var n=Object(a.useRef)(0),t=Object(a.useRef)(void 0),i=e.zObject?[void 0,e.sequencerEngine]:Object(w.a)(e),s=Object(c.a)(i,3),u=(s[0],s[1]),o=(s[2],Object(a.useRef)(void 0)),d=Object(a.useState)(!1),b=Object(c.a)(d,2),h=b[0],p=b[1],k=Object(a.useRef)({}),N=Object(E.a)({ref:t}),y=N.sizeRef,z=N.ordering,S=N.setOrdering,M=Object(a.useRef)(void 0),R=Object.keys(e.loadingSequence).some(function(n){return e.loadingSequence[n]});Object(m.a)({sequencerEngine:e.sequencerEngine?void 0:u}),Object(a.useEffect)(function(){return t.current.addEventListener("mousewheel",L,{passive:!1}),window.addEventListener("mousewheel",L,{passive:!1}),function(){t.current&&t.current.removeEventListener("mousewheel",L,{passive:!1}),window.removeEventListener("mousewheel",L,{passive:!1})}},[]);var x,L=function(e){return e.preventDefault()};e.zObject?x=e.zObject:!R&&u&&u.subSequences&&u.subSequences[0]&&(x=u.nftZObject||u.subSequences[0].zObjects[0]),!R&&u&&u.subSequences&&u.subSequences[0]&&x&&"three.canvas"===x.name&&(M.current||(M.current={width:x.width,height:x.height}),x.width=window.innerWidth,x.height=window.innerHeight,x.effect.sendMessage("size",[x.width,x.height])),Object(a.useEffect)(function(){p(e.isPlaying)},[e.isPlaying,p]),Object(a.useEffect)(function(){!e.sequencerEngine&&e.loadingSequence&&Object.keys(e.loadingSequence).length>0&&!R&&(f()(g.a.Master.context,".editor"),e.screenshot&&u.play())},[R,e.loadingSequence,u]),Object(a.useEffect)(function(){return function(){e.zObject&&M.current&&(e.zObject.width=M.current.width,e.zObject.height=M.current.height)}},[]);var C=Object(a.useCallback)(function(n){n&&n.stopPropagation(),e.sequencerEngine||(e.setIsPlayingMix(!0),o.current?(u.play(),p(!h)):(setTimeout(function(){u.play(),p(!0)},150),o.current=!0))},[u,p,h]);return n.current++,r.a.createElement(a.Suspense,{fallback:function(){return r.a.createElement("div",null,"Loading...")}},r.a.createElement("div",{className:"v3 nft-mode no-select"},r.a.createElement(O.a,null),r.a.createElement(q.a,null),r.a.createElement("div",{className:"editor"},!e.isMulti&&r.a.createElement(l.a,{sequencerEngine:u}),!o.current&&!e.screenshot&&!e.sequencerEngine&&!e.isPlaying&&r.a.createElement("div",{onMouseDown:R?function(){return[]}:C,className:n.current<=1||R?"click-to-start loading ":"click-to-start"},r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{className:"helper-image",src:"spore-helper-no-arrow.svg"}),r.a.createElement("img",{className:"arrow-1",src:"arrow-up-and-down.svg"}),r.a.createElement("img",{className:"arrow-2",src:"arrow-up-and-down.svg"}),r.a.createElement("img",{className:"arrow-3",src:"arrow-up-and-down.svg"}),r.a.createElement("img",{className:"arrow-4",src:"arrow-up-and-down.svg"})),!R&&r.a.createElement("span",null,"Click to start")),r.a.createElement("div",{className:"nft-viewer",ref:t},!e.isMulti&&e.sequencerEngine&&r.a.createElement("img",{className:"expand-icon",onClick:function(){e.setFullScreenZObject(void 0)},src:"/expand-icon.svg"}),R?r.a.createElement(j.a,{sequencerEngine:u}):"",x&&r.a.createElement(v.a,{scale:1,forceShow:!0,sequencerEngine:u,isMainNFT:!0,ordering:z,setOrdering:S,setSize:function(){return[]},sizeRef:y,elements:k,containerRef:t,zobject:x})))))})},2848:function(e,n,t){},2850:function(e,n,t){},2851:function(e,n,t){}}]);
//# sourceMappingURL=1.de1b7189.chunk.js.map