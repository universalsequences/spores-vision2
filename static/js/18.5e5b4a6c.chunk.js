(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{2866:function(t,e,a){},2898:function(t,e,a){"use strict";a.r(e);var n=a(8),s=a(5),r=a.n(s),o=a(14),c=a(2),i=a(4),u=a(7),h=a(11),l=a(1),g=a(0),f=a.n(g),d=a(12),v=a(657);function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var s=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(h.a)(this,a)}}var p=function(t){Object(u.a)(a,t);var e=m(a);function a(t){return Object(c.a)(this,a),e.call(this,t)}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return f.a.createElement("div",null,f.a.createElement("input",{onChange:function(e){return t.props.onTagNameChanged(e.target.value)},value:this.props.tag,placeholder:"Type name here",className:"tags-input sample-pack-input",type:"text"}))}}]),a}(g.Component);function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var s=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(h.a)(this,a)}}var C=function(t){Object(u.a)(a,t);var e=y(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return f.a.createElement("div",{className:this.props.chosen?"tag-element chosen":this.props.chosenAlready?"chosen-already tag-element":"tag-element",onClick:function(){return t.props.onClick()}},this.props.tag)}}]),a}(g.Component);function b(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var s=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(h.a)(this,a)}}var k=function(t){Object(u.a)(a,t);var e=b(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return f.a.createElement("div",null,f.a.createElement("div",{className:"instructions-text"},"Click tags that fall under this category"),f.a.createElement("div",{className:"tags-container"},this.props.tags.map(function(e){return f.a.createElement(C,{chosenAlready:t.props.chosenSoFar.has(e),chosen:t.props.tagsChosen.indexOf(e)>-1,onClick:function(){return t.props.onClickTag(e)},tag:e})})))}}]),a}(g.Component),E=a(1498),O=a(59),N=a(670),j=a(424),R=(a(47),a(128));a(2866),a(1076);function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var s=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(h.a)(this,a)}}var T=["707","808","909","Access","Casio","Cheetah","EMU","Electro-Harmonix","Elektron","Elka","Fairlight","Farfisa","Fricke","Kawai","Korg","Linn","Moog","Nintendo","Oberheim","Roland"],w=new E.a,x=function(t){Object(u.a)(a,t);var e=S(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).ethereumCache=new N.a,n.ethereumSearcher=new j.a(n.ethereumCache),n.state={tagName:"",tagsChosen:[],tags:[],hierarchy:{},nextMode:!1},n.stack=[],n.tags=[],n.chosenSoFar=new Set,n.reloadEverything(),n}return Object(i.a)(a,[{key:"reloadEverything",value:function(){var t=Object(o.a)(r.a.mark(function t(){var e,a=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,this.ethereumCache.loadNewIndex(e);case 3:this.loadTags(),this.chosenSoFar=new Set,this.getHierarchy(e);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getHierarchy",value:function(){var t=Object(o.a)(r.a.mark(function t(){var e=arguments;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.length>0&&void 0!==e[0]?e[0]:this.props.guildId,console.log("getHierarchy called"),this.autoBuild();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"autoBuild",value:function(){var t=this;console.log("auto build called with tags = "),console.log(this.state.tags);var e={"Drum Machines":[],Drums:["kick","snare","hi-hat","clap","crash","rim","side-stick","ride"]},a=function(a){var n=T[a],s=t.state.tags.filter(function(t){return t!==n&&t.includes(n)});s.length>0&&(e["Drum Machines"].push(n),e[n]=s,s.forEach(function(e){return t.chosenSoFar.add(e)}),t.chosenSoFar.add(n))};for(var s in T)a(s);this.setState({hierarchy:Object(n.a)({},this.state.hierarchy,e)})}},{key:"shouldComponentUpdate",value:function(t){return t.guildId!==this.props.guildId&&this.reloadEverything(t.guildId),!0}},{key:"loadTags",value:function(){this.tags=this.ethereumCache.getAllForField(R.d,0,3e3).map(function(t){return t.value}),this.tags.sort(),this.setState({tags:this.tags})}},{key:"onTagNameChanged",value:function(t){this.state.tagsChosen.length>0&&this.addTagsToHierarchy(),t in this.state.hierarchy?this.setState({tagsChosen:this.state.hierarchy[t]}):this.setState({tagsChosen:[]}),this.setState({tagName:t})}},{key:"onClickTag",value:function(t){if(this.state.nextMode){var e=this.state.hierarchy[t];return e=void 0===e?[]:e,void this.setState({tagName:t,nextMode:!1,tagsChosen:e,tags:this.tags})}var a=this.state.tagsChosen.indexOf(t);if(a>-1){var n=this.state.tagsChosen;n.splice(a,1),this.setState({tagsChosen:n})}else this.setState({tagsChosen:this.state.tagsChosen.concat([t])})}},{key:"addTagsToHierarchy",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.tagName,Object.assign(this.state.hierarchy,{}));e[this.state.tagName]=this.state.tagsChosen,console.log("adding to "+this.state.tagName+" tags ="),console.log(this.state.tagsChosen),this.state.tagsChosen.forEach(function(e){return t.chosenSoFar.add(e)}),this.setState({hierarchy:e}),console.log("hierarchy = "),console.log(e)}},{key:"goBackUpLevel",value:function(){if(this.addTagsToHierarchy(),0!=this.stack.length){var t=this.stack.pop();this.setState({nextMode:!1,tagName:t.name,tags:this.tags,tagsChosen:t.tags})}else this.setState({nextMode:!1,tagName:"",tags:this.tags,tagsChosen:[]})}},{key:"goDownLevel",value:function(){this.state.nextMode||(this.stack.push({name:this.state.tagName,tags:this.state.tagsChosen}),this.addTagsToHierarchy(),this.setState({nextMode:!0,tagsChosen:[],tags:this.state.tagsChosen}))}},{key:"getRelevantTags",value:function(){this.setState({tags:Array.from(this.ethereumCache.getFieldsForField(R.d,R.d,this.state.tagName)).sort()})}},{key:"clearRelevantTags",value:function(){this.setState({tags:this.tags})}},{key:"saveHierarchy",value:function(){var t=Object(o.a)(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("saving the tags classification = "),console.log(this.state.hierarchy),delete this.state.hierarchy[""],t.next=5,w.saveClassifications(this.props.guildId,this.state.hierarchy);case 5:t.sent;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"deleteCategory",value:function(){var t=Object(n.a)({},this.state.hierarchy),e=t[this.state.tagName];delete t[this.state.tagName],e.forEach(function(e){return delete t[e]}),console.log("new hierarchy = "),console.log(t),this.setState({hierarchy:t,tagName:""})}},{key:"render",value:function(){var t=this;return f.a.createElement("div",null,f.a.createElement("div",{className:"tags-navigator"},f.a.createElement("div",{className:"header"},"TAGS ORGANIZER"),f.a.createElement(v.a,null)),f.a.createElement(p,{tag:this.state.tagName,onTagNameChanged:function(e){return t.onTagNameChanged(e)}}),f.a.createElement("div",{className:"info-text"},this.stack.length," deep and ",this.chosenSoFar.size,"/",this.tags.length," tags done"),f.a.createElement("div",null,this.state.tagsChosen.map(function(t){return f.a.createElement(O.a,{color:"light"},t)})),f.a.createElement("div",{className:"common-button light-blue-button",onClick:function(){return t.goDownLevel()}},"DOWN LEVEL"),f.a.createElement("div",{className:"common-button light-blue-button",onClick:function(){return t.goBackUpLevel()}},"UP LEVEL"),f.a.createElement("div",{className:"common-button light-blue-button",onClick:function(){return t.getRelevantTags()}},"GET RELEVANT TAGS"),f.a.createElement("div",{className:"common-button light-blue-button",onClick:function(){return t.clearRelevantTags()}},"CLEAR RELEVANT TAGS"),f.a.createElement("div",{className:"common-button light-blue-button",onClick:function(){return t.deleteCategory()}},"DELETE CATEGORY"),f.a.createElement("div",{className:"common-button light-blue-button",onClick:function(){return t.saveHierarchy()}},"SAVE"),f.a.createElement(k,{tags:this.state.tags,chosenSoFar:this.chosenSoFar,tagsChosen:this.state.tagsChosen,onClickTag:function(e){return t.onClickTag(e)}}))}}]),a}(g.Component);e.default=Object(d.b)(function(t){return{guildId:t.guilds.selectedGuild?t.guilds.selectedGuild.guildId:0}},null)(x)}}]);
//# sourceMappingURL=18.5e5b4a6c.chunk.js.map