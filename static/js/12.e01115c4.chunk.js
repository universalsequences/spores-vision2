(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2729:function(e,t,a){"use strict";var n=a(2),r=a(4),i="CijdTZuyBVDePURSejQHGgfMsTjgfJSxarjJkWBo",c=a(185),s=function(){function e(){Object(n.a)(this,e),this.titleToLabels={},this.nameToLabelInfo={},this.nameToLabel={},this.idToReleases={}}return Object(r.a)(e,[{key:"getLabels",value:function(e){var t=this;return new Promise(function(a,n){void 0===t.titleToLabels[e]?t.searchYoutubeTitle(e).then(function(n){var r=[];null!==n&&void 0!==n.label||a(r),n.label.map(function(i){return t.getLabelInfo(i,function(i){if(null!==i){var c={id:i.id,name:i.name};"images"in i&&(c.thumbnail=i.images[0].uri),r.push(c),t.titleToLabels[e]=r,r.length==n.label.length&&a(r)}else a(r)})})}).catch(function(e){n(e)}):a(t.titleToLabels[e])})}},{key:"getReleaseInfo",value:function(e){return new Promise(function(t,a){var n="https://api.discogs.com/releases/"+e;c.get(n).then(function(e){if(void 0!==e.data){var a=e.data;t(a)}else t(void 0)})})}},{key:"searchRecords",value:function(e){return new Promise(function(t,a){console.log("searchinng name=",e);var n="https://api.discogs.com/database/search?q="+e.split(/\s/g).join("+")+"&type=release&token="+i;c.get(n).then(function(e){if(void 0!==e.data.results){var a=e.data.results;t(a)}else t([])})})}},{key:"searchLabel",value:function(e,t){var a=this;if(void 0!==this.nameToLabel[e])return t(this.nameToLabel[e]);var n=e,r="https://api.discogs.com/database/search?q="+(n=n.split(/\s/g).join("+"))+"&type=label&token="+i;c.get(r).then(function(n){if(void 0!==n.data.results){var r=n.data.results[0];a.nameToLabel[e]=r,t(r)}})}},{key:"getLabelInfo",value:function(e,t){this.searchLabel(e,function(e){var a="https://api.discogs.com/labels/"+e.id+"?token="+i;c.get(a).then(function(e){t(e.data)}).catch(function(e){t(null)})})}},{key:"getLabelReleases",value:function(e,t){var a=this;return new Promise(function(n,r){if(void 0===a.idToReleases[e+"_"+t]){var s="https://api.discogs.com/labels/"+e+"/releases?token="+i+"&page="+t+"&per_page=8";c.get(s).then(function(r){a.idToReleases[e+"_"+t]=r.data,n(r.data)}).catch(function(e){r(e)})}else n(a.idToReleases[e+"_"+t])})}},{key:"searchYoutubeTitle",value:function(e){return new Promise(function(t,a){var n=function(e,t){var a,n,r=[],e=e||"";function i(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var c=["Full Album","Full vinyl","LP","[dubstep]","(full album)","[electro]","[edm]","[house music]","[glitch hop]","[video]","[official video]","(official video)","(official music video)","(lyrics)","[ official video ]","[official music video]","[free download]","[free dl]","( 1080p )","(with lyrics)","(high res / official video)","(music video)","[music video]","[hd]","(hd)","[hq]","(hq)","(original mix)","[original mix]","[lyrics]","[free]","[trap]","[monstercat release]","[monstercat freebie]","[monstercat]","[edm.com premeire]","[edm.com exclusive]","[enm release]","[free download!]","[monstercat free release]"];c.forEach(function(t){e=(e=(e=(e=(e=(e=e.replace(t+" - ","").trim()).replace(t.toUpperCase()+" - ","").trim()).replace(t.toLowerCase()+" - ","").trim()).replace(t,"").trim()).replace(t.toUpperCase(),"").trim()).replace(t.toLowerCase(),"").trim()});for(var s=(e=(e=e.replace(/ *\([^)]*\) */g,"").trim()).replace(/ *\[[^)]*\] */g,"").trim()).split(" - "),o=0;o<s.length;o++)c.indexOf(s[o].toLowerCase())>=0&&s.splice(o,1);2==s.length?(a=s[0],n=s[1]):s.length>2?(a=s[0],n=s[1]):(a=s[0],n=s[0]);c.forEach(function(e){n=n.replace(new RegExp(i(e),"i"),"").trim(),a=a.replace(new RegExp(i(e),"i"),"").trim()}),r.push(n.replace(/(.*)\((.*) remix\)/i,"$2").trim()),r.push(n.replace(/(.*) ft\.? (.*)/i,"$1").trim()),r.push(n.replace(/(.*) ft\.? (.*)/i,"$2").trim()),r.push(n.replace(/(.*) feat\.? (.*)/i,"$1").trim()),r.push(n.replace(/(.*) feat\.? (.*)/i,"$2").trim()),r.push(n.replace(/(.*) featuring (.*)/i,"$2").trim()),r.push(n.replace(/(.*) \(ft (.*)\)/i,"$1").trim()),r.push(n.replace(/(.*) \(ft (.*)\)/i,"$2").trim()),r.push(n.replace(/(.*) \(feat\.? (.*)\)/i,"$2").trim()),r.push(n.replace(/(.*) \(featuring (.*)\)/i,"$2").trim()),r.push(a.replace(/(.*) ft\.? (.*)/i,"$1").trim()),r.push(a.replace(/(.*) ft\.? (.*)/i,"$2").trim()),r.push(a.replace(/(.*) feat\.? (.*)/i,"$1").trim()),r.push(a.replace(/(.*) feat\.? (.*)/i,"$2").trim()),r.push(a.replace(/(.*) featuring (.*)/i,"$2").trim()),r.push(a.replace(/(.*) \(ft (.*)\)/i,"$1").trim()),r.push(a.replace(/(.*) \(ft (.*)\)/i,"$2").trim()),r.push(a.replace(/(.*) \(feat\.? (.*)\)/i,"$1").trim()),r.push(a.replace(/(.*) \(featuring (.*)\)/i,"$2").trim()),r.push(a.replace(/(.*) & (.*)/gi,"$1").trim()),r.push(a.replace(/(.*) & (.*)/gi,"$2").trim()),r.push(a.replace(/(.*) vs\.? (.*)/i,"$1").trim()),r.push(a.replace(/(.*) vs\.? (.*)/i,"$2").trim()),r.push(a.replace(/(.*) x (.*)/i,"$1").trim()),r.push(a.replace(/(.*) x (.*)/i,"$2").trim());var l={};return r.forEach(function(e){e!==n&&(l[e]=e)}),{artist:a,title:n,credits:Object.keys(l)}}(e),r=n.artist+" - "+n.title,s="https://api.discogs.com/database/search?q="+(r=r.split(/\s/g).join("+"))+"&token="+i;c.get(s).then(function(e){var a=e.data.results,r=null;for(var i in a)(null==r||a[i].year<r.year)&&a[i].title.includes(n.title)&&(r=a[i]);if(null==r)for(var i in a)return t(a[i]);t(r)}).catch(function(e){a(e)})})}}]),e}();t.a=s},2736:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(185),r=a.n(n),i=a(47),c=function(e){return new Promise(function(t,a){r.a.get("http://0.0.0.0:9092/"+e,{responseType:"blob"}).then(function(e){var a=e.data;i.a.addBlob(a).then(function(e){console.log("Downloaded thumb = ",e),t(e)})})})}},2741:function(e,t,a){"use strict";var n=a(9),r=a(10),i=a(0),c=a.n(i),s=a(12);t.a=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.setTags,a=e.tags,s=e.placeholder,o=void 0===s?"Type tags":s,l=Object(i.useState)(""),u=Object(r.a)(l,2),f=u[0],d=u[1],m=Object(i.useCallback)(function(e){t(a.filter(function(t){return t!==e}))},[a,t]),p=Object(i.useCallback)(function(e){"Enter"===e.key&&(t([].concat(Object(n.a)(a),[f])),d(""))},[t,a,f]);return c.a.createElement("div",{className:"tags"},a.map(function(e){return c.a.createElement("div",{onClick:function(){return m(e)},className:"tag-option"},e)}),c.a.createElement("input",{placeholder:o,className:"tag-sample-input",onKeyDown:p,value:f,type:"text",onChange:function(e){return d(e.target.value)}}))})},2751:function(e,t,a){"use strict";var n=a(9),r=a(10),i=a(0),c=a.n(i),s=a(2736),o=a(2741),l=a(39),u=a.n(l),f=a(12);t.a=Object(f.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.discogs,a=e.records,l=e.sample,f=e.showTags,d=void 0===f||f,m=Object(i.useState)([]),p=Object(r.a)(m,2),v=p[0],h=p[1],b=Object(i.useState)(a[0]),g=Object(r.a)(b,2),w=g[0],j=g[1];if(Object(i.useEffect)(function(){var e=Object(n.a)(a);e.sort(function(e,t){return e.year-t.year}),j(e[0])},[a,j]),Object(i.useEffect)(function(){d&&(l.tags=Object(n.a)(v))},[v,l]),Object(i.useEffect)(function(){w&&(l.year=w.year,l.styles=w.genre||[],l.country=w.country,l.discogsId=w.id,l.releaseName=w.title,Object(s.a)(w.thumb).then(function(e){return l.coverArtHash=e}),t.getReleaseInfo(w.id).then(function(e){l.artistName=e.artists[0].name}))},[w,l]),!w)return"";var y=a.map(function(e){return{label:e.title+"("+e.year+")",value:e}});return c.a.createElement("div",{className:"record-info"},c.a.createElement("div",{className:"meta"},c.a.createElement("img",{src:w.thumb}),c.a.createElement("div",{className:"record-meta"},c.a.createElement("div",{className:"record-title"},w.title),c.a.createElement("div",{className:"record-year"},w.year),c.a.createElement("div",{className:"record-genre"},w.genre.map(function(e){return c.a.createElement("span",null,e)})))),c.a.createElement("div",{className:"others"},c.a.createElement(u.a,{onChange:function(e){return j(e.value)},options:y,value:y.find(function(e){return e.value===w})})),d?c.a.createElement(o.a,{tags:v,setTags:h}):"")})},2819:function(e,t,a){},2900:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),i=a(9),c=a(14),s=a(10),o=a(0),l=a.n(o),u=a(202),f=a(653),d=a(92),m=a(2741),p=a(2751),v=a(2729),h=a(1071),b=a(354),g=a(12),w=new v.a,j=Object(g.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.sample,a=e.id,n=e.store,r=e.isSaved,i=Object(o.useState)(void 0),c=Object(s.a)(i,2),u=c[0],f=c[1],d=Object(o.useState)([]),m=Object(s.a)(d,2),v=m[0],g=m[1];return Object(o.useEffect)(function(){var e=new b.a;e.setBuffer(t.audioBuffer),f(e)},[t,f]),Object(o.useEffect)(function(){w.searchRecords(t.name.replace(".wav","").replace(".flac","")).then(function(e){g(e)})},[t,g]),u?l.a.createElement("div",{className:"sample-option"},l.a.createElement("div",{className:"sample-name"},t.name,r?l.a.createElement("span",{className:"checkmark"},"\u2713"):""),l.a.createElement("div",{className:"wave-and-thumb"},l.a.createElement(h.a,{store:n,buffer:t.audioBuffer,id:a,audioUnit:u,sample:t}),l.a.createElement(p.a,{sample:t,discogs:w,records:v}))):[]}),y=a(15),O=a.n(y),E=a(222),k=a(1467),T=a(75);a(2819);function x(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return $(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return $(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==a.return||a.return()}finally{if(s)throw i}}}}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=Object(g.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.store,a=Object(o.useState)(!1),n=Object(s.a)(a,2),p=n[0],v=n[1],h=Object(o.useState)([]),b=Object(s.a)(h,2),g=b[0],w=b[1],y=Object(o.useState)([]),$=Object(s.a)(y,2),L=$[0],S=$[1],N=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1];Object(o.useEffect)(function(){return window.addEventListener("dragenter",l),window.addEventListener("dragover",u),window.addEventListener("drop",f),function(){window.removeEventListener("dragenter",l),window.removeEventListener("dragover",u),window.removeEventListener("drop",f)}},[n,a]);var l=function(e){e.preventDefault(),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none"},u=function(e){return e.preventDefault(),e.dataTransfer.effectAllowed="none",!1},f=Object(o.useCallback)(function(){var e=Object(c.a)(r.a.mark(function e(t){var c,s,o,l,u,f,m,p;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.dataTransfer.effectAllowed="none",t.dataTransfer.dropEffect="none",!t.dataTransfer.items){e.next=21;break}for(c=Object(i.a)(a),s=[],t.dataTransfer.items.length,o=0;o<t.dataTransfer.items.length;o++)"file"===t.dataTransfer.items[o].kind&&s.push(t.dataTransfer.items[o].getAsFile());l=0,u=s;case 9:if(!(l<u.length)){e.next=18;break}return f=u[l],e.next=13,d(f);case 13:m=e.sent,c=[].concat(Object(i.a)(c),[m]);case 15:l++,e.next=9;break;case 18:n(Object(i.a)(c)),e.next=22;break;case 21:for(p=0;p<t.dataTransfer.files.length;p++);case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[n,a]),d=Object(o.useCallback)(function(e){return new Promise(function(t){var a=new FileReader;e.name.includes(".wav")||e.name.includes(".flac")?(a.readAsArrayBuffer(e),a.onloadend=Object(c.a)(r.a.mark(function n(){var i,c,s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(i=a.result,!e.name.includes("flac")){n.next=5;break}return n.next=4,Object(k.a)(new Int8Array(i));case 4:i=n.sent;case 5:return n.next=7,O.a.Master.context.decodeAudioData(i);case 7:c=n.sent,(s=new T.a(E.a)).audioBuffer=c,s.needsSave=!0,s.tags=[],s.name=e.name,t(s);case 14:case"end":return n.stop()}},n)}))):window.alert("Only accepts .wav files for now")})},[n,a]);return{sounds:a}}().sounds,A=Object(o.useCallback)(Object(c.a)(r.a.mark(function e(){var t,a,n,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v(!0),N.forEach(function(e){return e.tags=[].concat(Object(i.a)(e.tags),Object(i.a)(g))}),t=[],a=x(N),e.prev=4,a.s();case 6:if((n=a.n()).done){e.next=16;break}return c=n.value,e.next=10,c.saveSample();case 10:return e.next=12,Object(d.a)(250);case 12:t.push(c),S([].concat(t));case 14:e.next=6;break;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),a.e(e.t0);case 21:return e.prev=21,a.f(),e.finish(21);case 24:v(!1);case 25:case"end":return e.stop()}},e,null,[[4,18,21,24]])})),[N,g,v]);return l.a.createElement("div",{className:"uploader"},p?l.a.createElement(u.a,{text:"Uploading sounds"}):"",l.a.createElement("div",{className:"top-bar"},l.a.createElement("div",null,l.a.createElement(f.a,{store:t}),l.a.createElement("div",{onClick:A,className:0===N.length?"save-btn disabled":"save-btn"},"Save"),l.a.createElement("div",{className:"drop-files-here"},l.a.createElement("span",null,"Drop File Here"))),l.a.createElement(m.a,{setTags:w,tags:g,placeholder:"Type tags for all"})),N.map(function(e,a){return l.a.createElement(j,{isSaved:L.includes(e),key:a,store:t,id:a+1,sample:e})}))})}}]);
//# sourceMappingURL=12.e01115c4.chunk.js.map