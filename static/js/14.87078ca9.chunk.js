(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{2746:function(e,t,n){"use strict";var a=n(2),s=n(5),o=n(7),r=n(11),i=n(1),c=n(0),u=n.n(c),l=n(12),d=n(659),f=n(1073),p=n(1074);n(2747);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var s=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var v=function(e){Object(o.a)(n,e);var t=h(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"onClickSequencer",value:function(){window.location="/create/"}},{key:"onClickSampler",value:function(){"DISCOVER"!==this.props.view&&(window.location="/discover/")}},{key:"onClickExplore",value:function(){"EXPLORE"!==this.props.view&&(window.location="/explore/")}},{key:"onClickLogo",value:function(){window.location="/"}},{key:"render",value:function(){var e=this,t=this.props.view||"",n="DISCOVER"===t?"navigator-button selected":"navigator-button",a="EXPLORE"===t?"navigator-button selected":"navigator-button";return u.a.createElement("div",{className:"navigator"},u.a.createElement(p.a,{show:this.props.showLogin}),u.a.createElement("div",{onClick:function(){return e.onClickLogo()},className:"universal-sequences-logo "+t},"ZEQUENCER"),u.a.createElement("div",{onClick:function(){return e.onClickSequencer()},className:"navigator-button"},"CREATE"),u.a.createElement("div",{onClick:function(){return e.onClickExplore()},className:a},"EXPLORE"),u.a.createElement("div",{onClick:function(){return e.onClickSampler()},className:n},"SAMPLE"),u.a.createElement("div",{className:"guilds-menu-container"},u.a.createElement(f.a,{store:this.props.store}),u.a.createElement(d.a,{store:this.props.store})))}}]),n}(c.Component);t.a=Object(l.b)(function(e){return{showLogin:e.sequencer.showLogin}},null)(v)},2747:function(e,t,n){},2761:function(e,t,n){"use strict";var a=n(2),s=n(5),o=n(20),r=n(7),i=n(11),c=n(1),u=n(0),l=n.n(u),d=n(77),f=n(1078),p=(n(15),n(185),n(1079)),h=n(58),v=n(354);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(c.a)(e);if(t){var s=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var g=new(window.AudioContext||window.webkitAudioContext),b=function(e){Object(r.a)(n,e);var t=m(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={soundId:e.soundId},s.audioUnit=new v.a(g),s.loadBuffer.bind(Object(o.a)(s)),s.handleLoadBuffer.bind(Object(o.a)(s)),s.loadBuffer(),s}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e){return e.soundId!==this.state.soundId&&(this.state.soundId=e.soundId,this.loadBuffer()),!0}},{key:"loadBuffer",value:function(){var e=this;console.log("loading buffer soundId = "+this.props.soundId),this.sample=new d.a(this.props.soundId,this.props.encryptedIpfs),this.sample.name=this.props.title,this.sample.videoId=this.props.videoId,this.state.name=this.props.title,this.state.videoId=this.props.videoId,console.log("gonna fetch audio for id = "+this.sample.getId()),this.sample.fetchAudio().then(function(t){e.audioUnit.setBuffer(t.audioBuffer),e.state.buffer=t.audioBuffer,e.setState(e.state)})}},{key:"handleLoadBuffer",value:function(e,t){var n=e.state;n.buffer=t,e.setState(n)}},{key:"render",value:function(){var e=this;return void 0!=this.state.buffer?l.a.createElement("div",{className:this.props.isSelected?"selected sound-row":"sound-row"},l.a.createElement("div",{className:"playlist-row"},l.a.createElement(f.a,{selections:[],sample:this.sample,store:this.props.store,buffer:this.audioUnit.buffer,onClickSelection:function(e,t){return[]},height:70,width:350,onSelection:function(e,t){return[]},audioUnit:this.audioUnit,waveformId:0}),l.a.createElement("div",{className:"youtube-info"},l.a.createElement(p.a,{onClickThumbnail:function(){return e.props.onClickThumbnail(e.state.soundId)},coverArt:this.props.coverArt,sample:this.sample,name:this.props.title,isMuted:!1,soundId:this.state.soundId,onNewSound:this.props.onNewSound,videoId:this.state.videoId})),l.a.createElement("div",{onClick:this.props.onDelete,className:"delete-button"},"x")),null!=this.props.tags?this.props.tags.map(function(t){return l.a.createElement(h.a,{onClick:function(){return e.props.onDeleteTag(t)},color:"light"},t)}):""):l.a.createElement("div",null)}}]),n}(u.Component);t.a=b},2775:function(e,t,n){"use strict";var a=n(2),s=n(5),o=n(7),r=n(11),i=n(1),c=(n(185),n(30),n(0)),u=n.n(c),l=n(58);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var s=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(r.a)(this,n)}}var f=function(e){Object(o.a)(n,e);var t=d(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={tags:[]},s._tag="",s.addListener(),s}return Object(s.a)(n,[{key:"addListener",value:function(){var e=this;window.addEventListener("sound_selected",function(){e.input&&e.input!==document.activeElement&&e.input.focus()})}},{key:"addTag",value:function(){this.state.tags.push(this._tag);this.props.onUpdateTags(this._tag),this._tag="",this.setState(this.state)}},{key:"onInputType",value:function(e){this._tag=e,this.setState(this.state)}},{key:"onKeyPress",value:function(e){"Enter"===e.key&&this.addTag()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"tag-editor"},this.props.soundUploadMode?"":u.a.createElement("div",{onClick:this.props.onClickBack,className:"light-blue-button common-button"},"Back to search"),u.a.createElement("div",{className:"tags"},u.a.createElement(l.h,null,u.a.createElement("div",null,u.a.createElement("input",{type:"text",ref:function(t){return e.input=t},autoFocus:!0,onKeyPress:function(t){return e.onKeyPress(t)},value:this._tag,id:"search-input",onChange:function(t){return e.onInputType(t.target.value)},placeholder:"Enter tag name",className:"tag-discover-input"})),u.a.createElement(l.i,{addonType:"append"},u.a.createElement(l.b,{onClick:function(){return e.addTag()},color:"secondary"},"Tag")))))}}]),n}(c.Component);t.a=f},2894:function(e,t,n){"use strict";n.r(t);var a=n(8),s=n(4),o=n.n(s),r=n(14),i=n(2),c=n(5),u=n(7),l=n(11),d=n(1),f=(n(290),n(0)),p=n.n(f),h=(n(185),n(2761)),v=n(2775),m=n(45),g=n(30),b=n(77),y=n(2746),E=n(35),k=(n(904),n(52));function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(d.a)(e);if(t){var s=Object(d.a)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(e){Object(u.a)(n,e);var t=w(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onChange=function(e){var t=a.state;switch(t.name=e.target.files[0].name,e.target.name){case"selectedFile":t.selectedFile=e.target.files[0];break;default:t[e.target.name]=e.target.value,t.name=e.target.value}a.setState(t)},a.state={name:void 0,description:"",selectedFile:"",soundIds:[],soundIdToName:{},soundIdToTags:{},selectedSounds:{}},console.log("setting store",e.store),k.a.setStore(e.store),g.a.crypto.store=e.store,k.a.setEthereum(g.a),k.a.checkLogin(),g.a.guilds.initGuilds(),g.a.store=e.store,window.sequencerEngine={store:e.store,ethereum:g.a},window.addEventListener("dragenter",function(e){e.preventDefault(),console.log("drag enter!"),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none"},!1),window.addEventListener("dragover",function(e){return e.preventDefault(),console.log("drag over!"),e.dataTransfer.effectAllowed="none",!1}),window.addEventListener("drop",function(){var e=Object(r.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("dropped!"),t.preventDefault(),t.dataTransfer.effectAllowed="none",t.dataTransfer.dropEffect="none",t.dataTransfer.items)for(n=0;n<t.dataTransfer.items.length;n++)"file"===t.dataTransfer.items[n].kind&&a.uploadFile(t.dataTransfer.items[n].getAsFile());else for(n=0;n<t.dataTransfer.files.length;n++)console.log("... file["+n+"].name = "+t.dataTransfer.files[n].name);return e.abrupt("return",!1);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),a}return Object(c.a)(n,[{key:"uploadFile",value:function(e){var t=this,n=new FileReader;n.readAsArrayBuffer(e),n.onloadend=Object(r.a)(o.a.mark(function a(){var s;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("read the file"),console.log(n.result),a.next=4,m.a.addArrayBuffer(n.result);case 4:s=a.sent,console.log("hash = "+s),t.state.soundIds.push(s),console.log("file name = "+e.name),t.state.soundIdToName[s]=e.name,t.setState(t.state);case 10:case"end":return a.stop()}},a)}))}},{key:"startTagging",value:function(){this.state.tagMode=!0,this.setState(this.state)}},{key:"onSubmit",value:function(){var e=Object(r.a)(o.a.mark(function e(t){var n,a,s,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("on submit called"),n=this.state,a=n.name,s=n.selectedFile,e.next=5,m.a.addBlob(s);case 5:r=e.sent,console.log("hash = "+r),this.state.soundIds.push(r),this.state.soundIdToName[r]=a,this.setState(this.state);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"selectSound",value:function(e){if(this.state.selectedSounds[e]){var t=Object(a.a)({},this.state.selectedSounds);t[e]=!1,this.setState({selectedSounds:t})}else{var n=Object(a.a)({},this.state.selectedSounds);n[e]=!0,this.setState({selectedSounds:n})}}},{key:"loadTags",value:function(){var e=this;console.log("laoding tags"),this.state.soundIds.map(function(){var t=Object(r.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("got tags for "+n),t.next=3,new b.a(n).fetchTags();case 3:a=t.sent,e.state.soundIdToTags[n]=a,e.setState(e.state);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"saveToEthereum",value:function(){var e=[];for(var t in this.state.soundIdToTags){var n=this.state.soundIdToTags[t];n.length>4&&(n=n.slice(0,4));for(var a=n.length;a<4;a++)n.push("");var s=this.state.soundIdToName[t],o=new Date;E.a.utils.padLeft("0x0",64);e.push({ipfsHash:t,title:s,videoId:"",tags:n,styles:["","","",""],country:"",year:o.getFullYear()})}g.a.newSamplesWithMetadata(e)}},{key:"hasSelectedSounds",value:function(){var e=this.state.selectedSounds;return Object.keys(e).some(function(t){return e[t]})}},{key:"selectAll",value:function(){var e=this.state.selectedSounds,t=this.hasSelectedSounds();for(var n in this.state.soundIds){e[this.state.soundIds[n]]=!t}this.setState({selectedSounds:e})}},{key:"addTag",value:function(e){for(var t in console.log("add tag called"),this.state.selectedSounds)this.state.selectedSounds[t]&&(t in this.state.soundIdToTags?this.state.soundIdToTags[t].push(e):this.state.soundIdToTags[t]=[e]);console.log(this.state.soundIdToTags),this.setState(this.state)}},{key:"onDropHandler",value:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none"}},{key:"dragOverHandler",value:function(e){return e.stopPropagation(),e.preventDefault(),e.dataTransfer.effectAllowed="none",e.dataTransfer.dropEffect="none",!1}},{key:"render",value:function(){var e=this,t=this.state;t.description,t.selectedFile;return console.log("render called with soundIds = "),console.log(this.state.soundIds),p.a.createElement("div",{className:"sound-upload-page"},p.a.createElement(y.a,{store:this.props.store,showLogin:!0}),p.a.createElement("div",{className:"upload-pane"},p.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t)}},p.a.createElement("input",{type:"file",name:"selectedFile",onChange:this.onChange}),p.a.createElement("button",{type:"submit"},"Submit")),p.a.createElement("div",{className:"video-buttons-container"},p.a.createElement("div",{className:"pink-button common-button",onClick:function(){return e.startTagging()}},"TAG"),p.a.createElement("div",{className:"pink-button common-button",onClick:function(){return e.saveToEthereum()}},"SAVE"),p.a.createElement("div",{className:"pink-button common-button",onClick:function(){return e.selectAll()}},this.hasSelectedSounds()?"UNSELECT ALL":"SELECT ALL")),p.a.createElement("div",{className:"sampled-sounds-container"},this.state.soundIds.map(function(t){return p.a.createElement(h.a,{tags:e.state.soundIdToTags[t],title:e.state.soundIdToName[t],store:e.props.store,isSelected:e.state.selectedSounds[t],onClickThumbnail:function(){return e.selectSound(t)},soundId:t})}))),p.a.createElement("div",{className:"description-pane"},this.state.tagMode?p.a.createElement(v.a,{uploadMode:!0,soundIdToHash:this.state.soundIdToHash,onUpdateTags:function(t){return e.addTag(t)},selectedSoundIds:this.state.selectedSoundIds}):""))}}]),n}(f.Component);t.default=T}}]);
//# sourceMappingURL=14.87078ca9.chunk.js.map