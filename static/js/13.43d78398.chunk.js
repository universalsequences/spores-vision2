(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{2741:function(e,t,s){"use strict";var a=s(2),n=s(4),o="CijdTZuyBVDePURSejQHGgfMsTjgfJSxarjJkWBo",i=s(185),r=function(){function e(){Object(a.a)(this,e),this.titleToLabels={},this.nameToLabelInfo={},this.nameToLabel={},this.idToReleases={}}return Object(n.a)(e,[{key:"getLabels",value:function(e){var t=this;return new Promise(function(s,a){void 0===t.titleToLabels[e]?t.searchYoutubeTitle(e).then(function(a){var n=[];null!==a&&void 0!==a.label||s(n),a.label.map(function(o){return t.getLabelInfo(o,function(o){if(null!==o){var i={id:o.id,name:o.name};"images"in o&&(i.thumbnail=o.images[0].uri),n.push(i),t.titleToLabels[e]=n,n.length==a.label.length&&s(n)}else s(n)})})}).catch(function(e){a(e)}):s(t.titleToLabels[e])})}},{key:"getReleaseInfo",value:function(e){return new Promise(function(t,s){var a="https://api.discogs.com/releases/"+e;i.get(a).then(function(e){if(void 0!==e.data){var s=e.data;t(s)}else t(void 0)})})}},{key:"searchRecords",value:function(e){return new Promise(function(t,s){console.log("searchinng name=",e);var a="https://api.discogs.com/database/search?q="+e.split(/\s/g).join("+")+"&type=release&token="+o;i.get(a).then(function(e){if(void 0!==e.data.results){var s=e.data.results;t(s)}else t([])})})}},{key:"searchLabel",value:function(e,t){var s=this;if(void 0!==this.nameToLabel[e])return t(this.nameToLabel[e]);var a=e,n="https://api.discogs.com/database/search?q="+(a=a.split(/\s/g).join("+"))+"&type=label&token="+o;i.get(n).then(function(a){if(void 0!==a.data.results){var n=a.data.results[0];s.nameToLabel[e]=n,t(n)}})}},{key:"getLabelInfo",value:function(e,t){this.searchLabel(e,function(e){var s="https://api.discogs.com/labels/"+e.id+"?token="+o;i.get(s).then(function(e){t(e.data)}).catch(function(e){t(null)})})}},{key:"getLabelReleases",value:function(e,t){var s=this;return new Promise(function(a,n){if(void 0===s.idToReleases[e+"_"+t]){var r="https://api.discogs.com/labels/"+e+"/releases?token="+o+"&page="+t+"&per_page=8";i.get(r).then(function(n){s.idToReleases[e+"_"+t]=n.data,a(n.data)}).catch(function(e){n(e)})}else a(s.idToReleases[e+"_"+t])})}},{key:"searchYoutubeTitle",value:function(e){return new Promise(function(t,s){var a=function(e,t){var s,a,n=[],e=e||"";function o(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var i=["Full Album","Full vinyl","LP","[dubstep]","(full album)","[electro]","[edm]","[house music]","[glitch hop]","[video]","[official video]","(official video)","(official music video)","(lyrics)","[ official video ]","[official music video]","[free download]","[free dl]","( 1080p )","(with lyrics)","(high res / official video)","(music video)","[music video]","[hd]","(hd)","[hq]","(hq)","(original mix)","[original mix]","[lyrics]","[free]","[trap]","[monstercat release]","[monstercat freebie]","[monstercat]","[edm.com premeire]","[edm.com exclusive]","[enm release]","[free download!]","[monstercat free release]"];i.forEach(function(t){e=(e=(e=(e=(e=(e=e.replace(t+" - ","").trim()).replace(t.toUpperCase()+" - ","").trim()).replace(t.toLowerCase()+" - ","").trim()).replace(t,"").trim()).replace(t.toUpperCase(),"").trim()).replace(t.toLowerCase(),"").trim()});for(var r=(e=(e=e.replace(/ *\([^)]*\) */g,"").trim()).replace(/ *\[[^)]*\] */g,"").trim()).split(" - "),c=0;c<r.length;c++)i.indexOf(r[c].toLowerCase())>=0&&r.splice(c,1);2==r.length?(s=r[0],a=r[1]):r.length>2?(s=r[0],a=r[1]):(s=r[0],a=r[0]);i.forEach(function(e){a=a.replace(new RegExp(o(e),"i"),"").trim(),s=s.replace(new RegExp(o(e),"i"),"").trim()}),n.push(a.replace(/(.*)\((.*) remix\)/i,"$2").trim()),n.push(a.replace(/(.*) ft\.? (.*)/i,"$1").trim()),n.push(a.replace(/(.*) ft\.? (.*)/i,"$2").trim()),n.push(a.replace(/(.*) feat\.? (.*)/i,"$1").trim()),n.push(a.replace(/(.*) feat\.? (.*)/i,"$2").trim()),n.push(a.replace(/(.*) featuring (.*)/i,"$2").trim()),n.push(a.replace(/(.*) \(ft (.*)\)/i,"$1").trim()),n.push(a.replace(/(.*) \(ft (.*)\)/i,"$2").trim()),n.push(a.replace(/(.*) \(feat\.? (.*)\)/i,"$2").trim()),n.push(a.replace(/(.*) \(featuring (.*)\)/i,"$2").trim()),n.push(s.replace(/(.*) ft\.? (.*)/i,"$1").trim()),n.push(s.replace(/(.*) ft\.? (.*)/i,"$2").trim()),n.push(s.replace(/(.*) feat\.? (.*)/i,"$1").trim()),n.push(s.replace(/(.*) feat\.? (.*)/i,"$2").trim()),n.push(s.replace(/(.*) featuring (.*)/i,"$2").trim()),n.push(s.replace(/(.*) \(ft (.*)\)/i,"$1").trim()),n.push(s.replace(/(.*) \(ft (.*)\)/i,"$2").trim()),n.push(s.replace(/(.*) \(feat\.? (.*)\)/i,"$1").trim()),n.push(s.replace(/(.*) \(featuring (.*)\)/i,"$2").trim()),n.push(s.replace(/(.*) & (.*)/gi,"$1").trim()),n.push(s.replace(/(.*) & (.*)/gi,"$2").trim()),n.push(s.replace(/(.*) vs\.? (.*)/i,"$1").trim()),n.push(s.replace(/(.*) vs\.? (.*)/i,"$2").trim()),n.push(s.replace(/(.*) x (.*)/i,"$1").trim()),n.push(s.replace(/(.*) x (.*)/i,"$2").trim());var u={};return n.forEach(function(e){e!==a&&(u[e]=e)}),{artist:s,title:a,credits:Object.keys(u)}}(e),n=a.artist+" - "+a.title,r="https://api.discogs.com/database/search?q="+(n=n.split(/\s/g).join("+"))+"&token="+o;i.get(r).then(function(e){var s=e.data.results,n=null;for(var o in s)(null==n||s[o].year<n.year)&&s[o].title.includes(a.title)&&(n=s[o]);if(null==n)for(var o in s)return t(s[o]);t(n)}).catch(function(e){s(e)})})}}]),e}();t.a=r},2759:function(e,t,s){"use strict";var a=s(2),n=s(4),o=s(20),i=s(7),r=s(11),c=s(1),u=s(0),l=s.n(u),d=s(76),h=s(1078),p=(s(15),s(185),s(1079)),f=s(58),m=s(354);function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var s,a=Object(c.a)(e);if(t){var n=Object(c.a)(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return Object(r.a)(this,s)}}var g=new(window.AudioContext||window.webkitAudioContext),y=function(e){Object(i.a)(s,e);var t=v(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={soundId:e.soundId},n.audioUnit=new m.a(g),n.loadBuffer.bind(Object(o.a)(n)),n.handleLoadBuffer.bind(Object(o.a)(n)),n.loadBuffer(),n}return Object(n.a)(s,[{key:"shouldComponentUpdate",value:function(e){return e.soundId!==this.state.soundId&&(this.state.soundId=e.soundId,this.loadBuffer()),!0}},{key:"loadBuffer",value:function(){var e=this;console.log("loading buffer soundId = "+this.props.soundId),this.sample=new d.a(this.props.soundId,this.props.encryptedIpfs),this.sample.name=this.props.title,this.sample.videoId=this.props.videoId,this.state.name=this.props.title,this.state.videoId=this.props.videoId,console.log("gonna fetch audio for id = "+this.sample.getId()),this.sample.fetchAudio().then(function(t){e.audioUnit.setBuffer(t.audioBuffer),e.state.buffer=t.audioBuffer,e.setState(e.state)})}},{key:"handleLoadBuffer",value:function(e,t){var s=e.state;s.buffer=t,e.setState(s)}},{key:"render",value:function(){var e=this;return void 0!=this.state.buffer?l.a.createElement("div",{className:this.props.isSelected?"selected sound-row":"sound-row"},l.a.createElement("div",{className:"playlist-row"},l.a.createElement(h.a,{selections:[],sample:this.sample,store:this.props.store,buffer:this.audioUnit.buffer,onClickSelection:function(e,t){return[]},height:70,width:350,onSelection:function(e,t){return[]},audioUnit:this.audioUnit,waveformId:0}),l.a.createElement("div",{className:"youtube-info"},l.a.createElement(p.a,{onClickThumbnail:function(){return e.props.onClickThumbnail(e.state.soundId)},coverArt:this.props.coverArt,sample:this.sample,name:this.props.title,isMuted:!1,soundId:this.state.soundId,onNewSound:this.props.onNewSound,videoId:this.state.videoId})),l.a.createElement("div",{onClick:this.props.onDelete,className:"delete-button"},"x")),null!=this.props.tags?this.props.tags.map(function(t){return l.a.createElement(f.a,{onClick:function(){return e.props.onDeleteTag(t)},color:"light"},t)}):""):l.a.createElement("div",null)}}]),s}(u.Component);t.a=y},2773:function(e,t,s){"use strict";var a=s(2),n=s(4),o=s(7),i=s(11),r=s(1),c=(s(185),s(30),s(0)),u=s.n(c),l=s(58);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var s,a=Object(r.a)(e);if(t){var n=Object(r.a)(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return Object(i.a)(this,s)}}var h=function(e){Object(o.a)(s,e);var t=d(s);function s(e){var n;return Object(a.a)(this,s),(n=t.call(this,e)).state={tags:[]},n._tag="",n.addListener(),n}return Object(n.a)(s,[{key:"addListener",value:function(){var e=this;window.addEventListener("sound_selected",function(){e.input&&e.input!==document.activeElement&&e.input.focus()})}},{key:"addTag",value:function(){this.state.tags.push(this._tag);this.props.onUpdateTags(this._tag),this._tag="",this.setState(this.state)}},{key:"onInputType",value:function(e){this._tag=e,this.setState(this.state)}},{key:"onKeyPress",value:function(e){"Enter"===e.key&&this.addTag()}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"tag-editor"},this.props.soundUploadMode?"":u.a.createElement("div",{onClick:this.props.onClickBack,className:"light-blue-button common-button"},"Back to search"),u.a.createElement("div",{className:"tags"},u.a.createElement(l.h,null,u.a.createElement("div",null,u.a.createElement("input",{type:"text",ref:function(t){return e.input=t},autoFocus:!0,onKeyPress:function(t){return e.onKeyPress(t)},value:this._tag,id:"search-input",onChange:function(t){return e.onInputType(t.target.value)},placeholder:"Enter tag name",className:"tag-discover-input"})),u.a.createElement(l.i,{addonType:"append"},u.a.createElement(l.b,{onClick:function(){return e.addTag()},color:"secondary"},"Tag")))))}}]),s}(c.Component);t.a=h},2883:function(e,t,s){},2898:function(e,t,s){"use strict";s.r(t);var a=s(5),n=s.n(a),o=s(14),i=s(8),r=s(28),c=s(2),u=s(4),l=s(7),d=s(11),h=s(1),p=s(0),f=s.n(p),m=s(1086),v=s(1073),g=s(1074),y=s(453),b=s(45),T=s(52),I=s(299),k=s(658),w=s(2803),S=s(2744),E=s(12),C=s(38),R=s(185),O=s.n(R),j=s(2747),x=(s(1105),s(30)),N=s(2741),L=s(2810),V=(s(291),s(36),new(s(1361).a),s(699),s(20)),U=s(2868),B=s(15),$=s.n(B),D=(s(2882),s(909),s(362)),P=s.n(D),A=s(58),Y=s(183),M=s(2759);s(2883),s(904);function _(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var s,a=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return Object(d.a)(this,s)}}var H=function(e){Object(l.a)(s,e);var t=_(s);function s(e){var a;Object(c.a)(this,s),(a=t.call(this,e)).state={sampling:!1,dropdownOpen:!1,recordingSetup:!1,videoId:e.videoId,startTime:null,endTime:null,stream:void 0};Object(V.a)(a);return a.soundUploader=new Y.a(2,function(e,t){return a.props.onSoundUploaded(t,t)}),a.setupRecording(),a}return Object(u.a)(s,[{key:"toggleDropdown",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"shouldComponentUpdate",value:function(e){return this.props.playOutputRecording!=e.playOutputRecording&&(e.playOutputRecording?this.input.connect(this.audioContext.destination):this.input.disconnect(this.audioContext.destination)),e.stream!==this.state.stream&&(this.state.stream=e.stream,this.startUserMedia(this.state.stream)),!0}},{key:"startUserMedia",value:function(e){console.log("starting user media"),console.log(e),this.input=this.audioContext.createMediaStreamSource(e),this.input.channelCount=2,this.recorder=new window.Recorder(this.input,{numChannels:2,bufferLen:2048}),this.props.playOutputRecording&&this.input.connect(this.audioContext.destination),this.state.recordingSetup=!0,this.setState(this.state)}},{key:"setupRecording",value:function(){try{window.AudioContext=window.AudioContext||window.webkitAudioContext,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia,window.URL=window.URL||window.webkitURL,this.audioContext=$.a.Master.context,P()(this.audioContext,"#playButton")}catch(e){console.log("No web audio support in this browser!")}}},{key:"onClickSampleButton",value:function(){var e=this;this.state.sampling=!this.state.sampling,this.state.sampling?(this.state.startTime=this.youtubePlayer.getCurrentTime(),console.log("recording started"),this.recorder.record()):(this.recorder.stop($.a.Master.context.currentTime+.01),setTimeout(function(){e.state.endTime=e.youtubePlayer.getCurrentTime(),e.recorder.getBuffer(function(t){return e.saveBuffer(t)})},[100])),this.setState(this.state)}},{key:"saveBuffer",value:function(){var e=Object(o.a)(n.a.mark(function e(t){var s,a,o=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("save buffer called w blob=",t),e.next=3,this.soundUploader.uploadBufferToIpfs(t,!0);case 3:s=e.sent,this.props.selectedRecord&&(a=this.props.selectedRecord.thumb,O.a.get("https://cors-anywhere.herokuapp.com/"+a,{responseType:"blob"}).then(function(e){var t=e.data;b.a.addBlob(t).then(function(e){return o.props.onCoverDownloaded(s,e)})})),this.recorder.clear();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getRelatedVideos",value:function(){console.log("get related videos event dispatched"),window.dispatchEvent(new Event("get_related_videos"))}},{key:"getRecordLabels",value:function(){window.dispatchEvent(new Event("get_record_labels"))}},{key:"fastForward",value:function(e){e.preventDefault(),this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime()+5)}},{key:"rewind",value:function(e){e.preventDefault(),this.youtubePlayer.seekTo(this.youtubePlayer.getCurrentTime()-5)}},{key:"checkQuality",value:function(){var e=this.youtubePlayer.getAvailableQualityLevels();this.youtubePlayer.setPlaybackQuality(e[0])}},{key:"render",value:function(){var e=this;console.log("selected record = "),console.log(this.props.selectedRecord);var t=this.props.styles,s=this.props.country,a=this.props.yeaer;return"VINYL"===this.props.sampleSource&&this.props.selectedRecord&&(t=this.props.selectedRecord.style,s=this.props.selectedRecord.country,a=this.props.selectedRecord.year),f.a.createElement("div",{className:"youtube-sampler"},f.a.createElement("span",{className:"#playButton"}),f.a.createElement(C.a,{condition:"YOUTUBE"===this.props.sampleSource},f.a.createElement("div",{className:"youtube-widget-container"},f.a.createElement(U.a,{videoId:this.props.videoId,opts:{height:"125",width:"400",playerVars:{autoplay:1}},onStateChange:function(t){return e.checkQuality()},onReady:function(t){return e._onReady(t)}}))),f.a.createElement(C.a,{condition:"VINYL"===this.props.sampleSource},f.a.createElement("img",{className:"cover-art",src:this.props.selectedRecord?this.props.selectedRecord.cover_image:""})),f.a.createElement("div",{className:"video-info-container"}),f.a.createElement("div",{className:"video-buttons-container"},f.a.createElement("div",{className:"action-buttons"},this.state.recordingSetup?f.a.createElement("span",{onClick:function(){return e.onClickSampleButton()},className:this.state.sampling?"record-button recording":"record-button"},this.state.sampling?"RECORDING":"RECORD"):"... initalizing"),f.a.createElement("div",{className:"action-buttons"},f.a.createElement("span",{onClick:function(t){return e.rewind(t)},className:"big-button player-button"},"RRWD")),f.a.createElement("div",{className:"action-buttons"},f.a.createElement("span",{onClick:function(t){return e.fastForward(t)},className:"big-button player-button"},"FFWD")),f.a.createElement("div",{className:"action-buttons"},f.a.createElement("span",{onClick:this.props.onClickTag,className:"big-button tag-samples-button"},"TAG")),f.a.createElement("div",{className:"float-right"},f.a.createElement(C.a,{condition:"YOUTUBE"===this.props.sampleSource},f.a.createElement(A.c,{show:this.state.dropdownOpen,isOpen:this.state.dropdownOpen,toggle:function(){return e.toggleDropdown()}},f.a.createElement(A.b,{onClick:function(){return e.getRelatedVideos()},id:"caret",color:"secondary"},f.a.createElement("span",{className:""},"Related")),f.a.createElement(A.f,{size:"sm",caret:!0,color:"secondary"}),f.a.createElement(A.e,null,f.a.createElement(A.d,{onClick:function(){return e.getRelatedVideos()},size:"sm"},"Related Videos"),f.a.createElement(A.d,{onClick:function(){return e.getRecordLabels()},size:"sm"},"Record Labels"),f.a.createElement(A.d,{onClick:function(){return e.props.onClickRandomVideo()},size:"sm"},"Random Video")))))),f.a.createElement("div",{className:"discogs-container"},"Styles:  ",t.map(function(e){return f.a.createElement(A.a,{color:"light"},e)})," ",void 0!==a?"Year: "+a:"",void 0!==s?" Country: "+s:""))}},{key:"_onReady",value:function(e){this.youtubePlayer=e.target,this.setState(this.state)}}]),s}(f.a.Component);var G=Object(E.b)(function(e){return{selectedRecord:e.discover.selectedRecord}},null)(H),q=(s(2815),s(2773)),F=s(425),K=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"tag",value:function(e,t){return new Promise(function(s,a){O.a.post("/tagSoundEasy/"+e+"/"+t).then(function(e){return s()}).catch(function(e){return a(e)})})}},{key:"getTags",value:function(e){}}]),e}(),z=(s(1076),s(671));function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var s,a=Object(h.a)(e);if(t){var n=Object(h.a)(this).constructor;s=Reflect.construct(a,arguments,n)}else s=a.apply(this,arguments);return Object(d.a)(this,s)}}var J="YOUTUBE",W=function(e){Object(l.a)(s,e);var t=Q(s);function s(e){var a,n;return Object(c.a)(this,s),(n=t.call(this,e)).ethereumCache=new z.a,x.a.store=n.props.store,T.a.setStore(n.props.store),T.a.setEthereum(x.a),T.a.checkLogin(),x.a.guilds.initGuilds(),n.state=(a={videoId:"j5L70BkuKlo",soundIds:[],sampleSource:J,selectedSoundIds:[],soundIdToHash:{},hashToSoundId:{},tagMode:!1,soundIdToTags:{},hashToStyles:{}},Object(r.a)(a,"hashToSoundId",{}),Object(r.a)(a,"hashToYear",{}),Object(r.a)(a,"hashToCountry",{}),Object(r.a)(a,"hashToVideoId",{}),Object(r.a)(a,"hashToVideoTitle",{}),Object(r.a)(a,"hashToDiscogsId",{}),Object(r.a)(a,"styles",[]),Object(r.a)(a,"hashToCoverArt",{}),Object(r.a)(a,"year",void 0),Object(r.a)(a,"country",void 0),Object(r.a)(a,"syncedToEthereum",!1),Object(r.a)(a,"calculatingNoteSequences",!1),Object(r.a)(a,"noteSequencesCalculated",0),Object(r.a)(a,"stream",void 0),Object(r.a)(a,"taggingSingleSound",!1),Object(r.a)(a,"soundIdToTag",void 0),a),n.onVideoIdChanged(n.state.videoId),n.discogs=new N.a,n.soundsTags=new K,x.a.crypto.store=n.props.store,n.contentKey=new I.a,n.encryptedIpfs=new F.a(n.props.store,x.a.guilds,x.a.encryption,x.a.crypto),n}return Object(u.a)(s,[{key:"onCoverArtDownloaded",value:function(e,t){console.log("onCoverARtDownloaded"),console.log(this.props.selectedRecord);var s=Object(i.a)({},this.state.hashToCoverArt);s[e]=t,this.setState({hashToCoverArt:s})}},{key:"onChooseAudio",value:function(e,t){console.log("deviceId chosen = "+t),this.setState({stream:e,deviceId:t})}},{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",function(e){e.returnValue="Hellooww"})}},{key:"onSoundUploaded",value:function(){var e=Object(o.a)(n.a.mark(function e(t,s){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.syncedToEthereum=!1,this.state.soundIdToHash[t]=s,this.state.hashToSoundId[s]=t,this.state.soundIds.push(t),this.state.soundIdToTags[t]=[],"VINYL"!==this.state.sampleSource){e.next=14;break}this.state.hashToVideoTitle[s]=this.props.selectedRecord.title,this.state.hashToCountry[s]=this.props.selectedRecord.country,this.state.hashToStyles[s]=this.props.selectedRecord.style,this.state.hashToYear[s]=this.props.selectedRecord.year,this.state.hashToDiscogsId[s]=this.props.selectedRecord.id,this.soundsTags.tag(t,"vinyl"),e.next=21;break;case 14:return this.state.hashToVideoId[s]=this.state.videoId,e.next=17,this.getYoutubeTitle();case 17:this.state.hashToVideoTitle[s]=e.sent,this.state.hashToStyles[s]=this.state.styles,this.state.hashToYear[s]=void 0===this.state.year?null:this.state.year,this.state.hashToCountry[s]=void 0===this.state.country?null:this.state.country;case 21:this.setState(this.state);case 22:case"end":return e.stop()}},e,this)}));return function(t,s){return e.apply(this,arguments)}}()},{key:"onVideoIdChanged",value:function(e){var t=this;console.log("on videddd changed"),this.state.videoId=e,this.getYoutubeTitle().then(function(e){t.discogs.searchYoutubeTitle(e).then(function(e){return t.loadDiscogsResults(e)})}),this.setState(this.state)}},{key:"loadDiscogsResults",value:function(e){if(null!=e&&void 0!==e){var t=e;if(void 0!==e.length){var s=Math.min.apply(Math,e.map(function(e){return e.year}));t=e.filter(function(e){return e.year===s})[0]}this.setState({styles:void 0!==t.style?t.style:[],country:t.country,year:t.year})}else this.setState({styles:[],country:void 0,year:void 0})}},{key:"getYoutubeTitle",value:function(){return Object(j.a)(this.state.videoId)}},{key:"onSampleSourceChange",value:function(e){this.state.sampleSource="youtube"===e?J:"VINYL",this.setState(this.state)}},{key:"loadVideo",value:function(e){this.onVideoIdChanged(e.videoId)}},{key:"selectSound",value:function(e){var t=this.state.selectedSoundIds.indexOf(e);t>-1?this.state.selectedSoundIds.splice(t,1):this.state.selectedSoundIds.push(e),1===this.state.selectedSoundIds.length&&t<0&&window.dispatchEvent(new Event("sound_selected")),this.setState({selectedSoundIds:this.state.selectedSoundIds,tagMode:!0})}},{key:"startTagging",value:function(){this.state.tagMode=!0,this.setState(this.state)}},{key:"backToSearch",value:function(){this.state.tagMode=!1,this.setState(this.state)}},{key:"onClickSequence",value:function(e){var t=this.state.selectedSoundIds.join(",");this.props.history.push("/sequencerSounds/"+t)}},{key:"onClickRandomVideo",value:function(){var e=this.ethereumCache.index.YOUTUBE.YOUTUBE,t=e[Math.floor(e.length*Math.random())].dimension;this.loadVideo({videoId:t})}},{key:"syncToEthereum",value:function(){var e=Object(o.a)(n.a.mark(function e(){var t,s,a,o,i,r,c,u,l,d,h,p,f,m=this;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],s=[],a=[],e.t0=n.a.keys(this.state.hashToSoundId);case 4:if((e.t1=e.t0()).done){e.next=26;break}for(o=e.t1.value,s.push(this.state.hashToSoundId[o]),i=this.state.soundIdToTags[this.state.hashToSoundId[o]],(r=this.state.hashToStyles[o]).length>4&&(r=r.slice(0,4)),c=r.length;c<4;c++)r.push("");for(i.length>4&&(i=i.slice(0,4)),u=i.length;u<4;u++)i.push("");if(l=o,!this.props.selectedGuild){e.next=23;break}return e.next=17,b.a.getSound(o);case 17:return d=e.sent,e.next=20,this.encryptedIpfs.addSound(d,y.a,this.props.selectedGuild.guildId,this.contentKey);case 20:l=e.sent,console.log("hash to save = "),console.log(l);case 23:a.push({ipfsHash:l,title:this.state.hashToVideoTitle[o],videoId:this.state.hashToVideoId[o],tags:i,styles:r,country:this.state.hashToCountry[o],year:this.state.hashToYear[o],coverArt:this.state.hashToCoverArt[o],discogsId:this.state.hashToDiscogsId[o]}),e.next=4;break;case 26:return 0!==(h=this.props.selectedGuild?this.props.selectedGuild.guildId:0)?x.a.newEncryptedSamples(a,h,this.contentKey):x.a.newSamplesWithMetadata(a,0),e.next=30,Promise.all(t);case 30:for(p in e.sent,this.state.soundIdToHash)f=this.state.soundIdToHash[p],delete this.state.hashToVideoTitle[f],delete this.state.hashToVideoId[f],delete this.state.hashToVideoId[f],delete this.state.hashToStyles[f],delete this.state.hashToYear[f],delete this.state.hashToCountry[f],delete this.state.hashToSoundId[f];s.forEach(function(e){return delete m.state.soundIdToHash[e]}),this.setState({soundIds:[],syncedToEthereum:!0});case 34:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"addTag",value:function(e){for(var t in this.state.selectedSoundIds){var s=this.state.selectedSoundIds[t];s in this.state.soundIdToTags?this.state.soundIdToTags[s].push(e):this.state.soundIdToTags[s]=[e]}this.setState(this.state)}},{key:"deleteSound",value:function(e){var t=this.state.soundIdToHash[e];delete this.state.hashToVideoTitle[t],delete this.state.hashToVideoId[t],delete this.state.hashToVideoId[t],delete this.state.hashToStyles[t],delete this.state.hashToYear[t],delete this.state.hashToCountry[t],delete this.state.hashToSoundId[t],delete this.state.soundIdToHash[e];var s=this.state.soundIds.indexOf(e);this.state.soundIds.splice(s,1),this.setState(this.state)}},{key:"deleteTag",value:function(e,t){var s=this.state.soundIdToTags[e].indexOf(t);this.state.soundIdToTags[e].splice(s,1),this.setState({soundIdToTags:this.state.soundIdToTags})}},{key:"render",value:function(){var e=this;return f.a.createElement("div",{className:"discover-full-view"},f.a.createElement(m.a,{crypto:x.a.crypto,show:!0}),f.a.createElement(g.a,{show:this.props.showLogin}),f.a.createElement(S.a,{view:"DISCOVER",store:this.props.store}),f.a.createElement("div",{className:"discover-view"},f.a.createElement("div",{className:"clear-fix"}),f.a.createElement("div",{className:"float-left"},f.a.createElement("div",{className:"discover-toolbar"},f.a.createElement(k.a,{store:this.props.store}),f.a.createElement(C.a,{condition:!this.state.syncedToEthereum&&this.state.soundIds.length>0},f.a.createElement("div",{onClick:function(){return e.syncToEthereum()},className:"pink-button common-button"},"SAVE ",this.state.soundIds.length," SOUNDS")),f.a.createElement(v.a,null),f.a.createElement(w.a,{deviceId:this.state.deviceId,onChooseAudio:function(t,s){return e.onChooseAudio(t,s)},onSampleSourceChange:function(t){return e.onSampleSourceChange(t)}})),f.a.createElement("div",{className:"youtube-pane"},f.a.createElement(G,{onCoverDownloaded:function(t,s){return e.onCoverArtDownloaded(t,s)},stream:this.state.stream,styles:this.state.styles,year:this.state.year,country:this.state.country,videoId:this.state.videoId,onClickTag:function(){return e.startTagging()},onSoundUploaded:function(t,s){return e.onSoundUploaded(t,s)},sampleSource:this.state.sampleSource,onClickRandomVideo:function(){return e.onClickRandomVideo()},playOutputRecording:"VINYL"===this.state.sampleSource}),f.a.createElement(C.a,{condition:this.state.soundIds.length>0},f.a.createElement("div",{className:"sampled-sounds-container"},this.state.soundIds.map(function(t){return f.a.createElement(M.a,{encryptedIpfs:e.encryptedIpfs,key:t,onDelete:function(){return e.deleteSound(t)},tags:e.state.soundIdToTags[t],isSelected:e.state.selectedSoundIds.indexOf(t)>-1,onClickThumbnail:function(){return e.selectSound(t)},onDeleteTag:function(s){return e.deleteTag(t,s)},onClickTag:function(){return e.tagSound(t)},coverArt:e.state.hashToCoverArt[t],videoId:e.state.hashToVideoId[e.state.soundIdToHash[t]],store:e.props.store,title:e.state.hashToVideoTitle[e.state.soundIdToHash[t]],soundId:e.state.soundIdToHash[t]})}))))),f.a.createElement("div",{className:"description-pane"},this.state.tagMode?f.a.createElement(q.a,{soundIdToHash:this.state.soundIdToHash,onClickBack:function(){return e.backToSearch()},onUpdateTags:function(t){return e.addTag(t)},selectedSoundIds:this.state.selectedSoundIds}):f.a.createElement(L.a,{store:this.props.store,videoId:this.state.videoId,onClickResult:function(t){return e.loadVideo(t)}}))))}}]),s}(p.Component);t.default=Object(E.b)(function(e){return{selectedRecord:e.discover.selectedRecord,selectedGuild:e.guilds.selectedGuild,showLogin:e.sequencer.showLogin}},null)(W)}}]);
//# sourceMappingURL=13.43d78398.chunk.js.map