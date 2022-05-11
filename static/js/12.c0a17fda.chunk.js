(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{2924:function(e,t,a){},2925:function(e,t,a){},2926:function(e,t,a){},2935:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(0),c=a.n(r),i=function(e){return e.length>15?e.slice(0,6)+"..."+e.slice(e.length-4):e},s=a(13),o=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.setValue,a=e.value,n=e.userId,r=e.clearUser,s=e.workCount;return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"search-container"},c.a.createElement("img",{src:"/search.svg",className:"search-icon"}),c.a.createElement("input",{placeholder:"Search NFTs",onChange:function(e){return t(e.target.value)},value:a,className:"collection-search"})),n&&c.a.createElement("div",{onClick:r,className:"user-id-button pushable"},c.a.createElement("div",{className:"user-name"},i(n)),c.a.createElement("div",{className:"ellipse"},"x")),n&&c.a.createElement("div",{className:"number-of-works"},c.a.createElement("span",null,"Minted")," ",c.a.createElement("div",{className:"dot"}),c.a.createElement("span",null,s)),c.a.createElement("img",{className:"logo-hiero",src:"/darkside-logo.svg"}))}),u=a(362),l=a(6),d=a.n(l),m=a(10),b=a(15),f=a(32),v=a(41),p=a(736),E=a(576),N=(new p.a).contractAddress,O=function(e){return new Promise(function(t){var a='{\n        users(where:{id: "'.concat(e,'"}) {\n            creations {\n                id\n            }\n        }\n    }');Object(E.request)("https://api.thegraph.com/subgraphs/name/ourzora/zora-v1-rinkeby",a).then(function(e){e.users[0]?t(e.users[0].creations.map(function(e){return parseInt(e.id)})):t([])})})},h=function(){var e=Object(b.a)(d.a.mark(function e(t){var a,n,r,c,i=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(i.length>1&&void 0!==i[1])||i[1],n=new v.a(N).from(f.sb).select("projectHash").select("zoraId"),t&&n.whereIn("zoraId",t),e.next=5,n.executeQuery();case 5:return r=e.sent,(c=window.localStorage.getItem("new_zora_token"))&&a&&(c=JSON.parse(c),r.some(function(e){return e.zoraId===c.zoraId})||(r=[c].concat(Object(m.a)(r)))),e.abrupt("return",r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=a(1456),w=(a(1101),a(248)),g=(Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){e.projectHash;return c.a.createElement("div",{className:"samples-information"})}),a(467)),k=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.connected,a=e.bidder;return c.a.createElement("span",{className:"bidder"},void 0===a?"":t===a?"You":i(a))}),I=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.owner,a=e.creator,i=e.connected,s=Object(r.useState)(a),o=Object(n.a)(s,2),u=o[0],l=(o[1],Object(r.useState)(t)),d=Object(n.a)(l,2),m=d[0];d[1];return c.a.createElement("div",{className:"creator-and-owner"},c.a.createElement("div",{className:"c-item"},c.a.createElement("div",{className:"c-label"},"Creator"),c.a.createElement(k,{bidder:u,connected:i})),c.a.createElement("div",{className:"c-item"},c.a.createElement("div",{className:"c-label"},"Owner"),c.a.createElement(k,{bidder:m,connected:i})))}),S=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.bids,a=(e.data,e.connected);return 0===t.length?(console.log("WorkBids: prev bids === 0"),c.a.createElement("div",{className:"work-bids"},"No bids yet.")):(console.log("bids = ",t),c.a.createElement("div",{className:"work-bids"},t.map(function(e){return"Final"===e.bidType?c.a.createElement("div",{className:"bid-item"},c.a.createElement("span",{className:"sold-to"},"Sold to"),c.a.createElement(k,{bidder:e.bidder.id,connected:a}),"for ",c.a.createElement("span",{className:"bid-amount"},e.pricing.amount/Math.pow(10,18))," ETH"):c.a.createElement("div",{className:"bid-item"},c.a.createElement(k,{bidder:e.bidder.id,connected:a}),"placed a bid of ",c.a.createElement("span",{className:"bid-amount"},e.pricing.amount/Math.pow(10,18))," ETH")})))}),T=a(46),C=function(e){var t=Object(r.useState)(void 0),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)(function(){T.a.getJson(e).then(function(e){i(e.bpm)})},[]),{bpm:c}},B=function(e){var t=(e||{}).pricing,a=t.reserve,c=[];if(a){var i=a.previousBids;c=a.currentBid?[a.currentBid].concat(Object(m.a)(i)):i}var s=Object(r.useState)(c),o=Object(n.a)(s,2),u=o[0],l=o[1],d=Object(r.useState)(t&&t.reserve&&t.reserve.currentBid),b=Object(n.a)(d,2),f=b[0],v=b[1],p=Object(r.useState)(t&&t.status),E=Object(n.a)(p,2),N=E[0],O=E[1],h=Object(r.useState)(t&&t.reserve&&t.reserve.reservePrice.amount/Math.pow(10,18)),j=Object(n.a)(h,2),w=j[0],g=(j[1],Object(r.useCallback)(function(e,t){var a={bidder:{id:e},pricing:{amount:t}};l([a].concat(Object(m.a)(u))),v(a),O("RESERVE_AUCTION_ACTIVE")},[l,u,v,O]));return{bids:u,newBid:g,currentBid:f,status:N,reservePrice:w}},H=a(28),A=a(408),F=function(){var e=Object(b.a)(d.a.mark(function e(t,a){var n,r,c,i,s=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>2&&void 0!==s[2]?s[2]:4,e.next=3,Object(g.d)();case 3:return r=e.sent,c=new A.AuctionHouse(r,n),e.next=7,c.createBid(t,a);case 7:return i=e.sent,e.next=10,i.wait();case 10:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(d.a.mark(function e(t){var a,n,r,c,i=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:4,e.next=3,Object(g.d)();case 3:return n=e.sent,r=new A.AuctionHouse(n,a),e.next=7,r.endAuction(t);case 7:return c=e.sent,e.next=10,c.wait();case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(d.a.mark(function e(t,a,n){var r,c,i,s,o,u,l=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>3&&void 0!==l[3]?l[3]:4,e.next=3,Object(g.d)();case 3:return c=e.sent,i=new A.AuctionHouse(c,r),s=new A.Zora(c,r),e.next=8,s.approve(i.auctionHouse.address,t);case 8:return o=e.sent,e.next=11,o.wait();case 11:return a*=Math.pow(10,9),a+="000000000",e.next=15,i.createAuction(t,n,a,"0x0000000000000000000000000000000000000000",0,"0x0000000000000000000000000000000000000000");case 15:return u=e.sent,e.next=18,u.wait();case 18:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),y=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t,a,i=e.pricing,s=e.isOwner,o=(e.bidder,e.connected),u=e.setSettingUp,l=i.reserve,d=Object(r.useState)("Finished"===l.status),m=Object(n.a)(d,2),b=m[0],f=m[1],v=l.current.highestBid;if("Finished"===l.status){var p=l.previousBids.find(function(e){return"Final"===e.bidType});p&&(t=p.pricing.prettyAmount,a=p.bidder.id)}else if(v){var E=v.pricing;a=v.placedBy,t=E.amount/Math.pow(10,18)}var N=Object(r.useCallback)(function(){var e=l.id;R(e).then(function(){return f(!0)})},[l,f]);return console.log("AUCTION_FINISHED placedBy =",a,o),console.log("CLAIMED =",b),console.log("connected=",o),c.a.createElement("div",{className:"auction-finished"},c.a.createElement("div",{className:"sold-for"},"Sold to ",c.a.createElement(k,{bidder:a,connected:o})," for ",t," ETH"),(s||o===a)&&!b&&c.a.createElement("div",{onClick:N,className:"claim-button"},"Claim Funds"),s&&b&&c.a.createElement("div",{onClick:function(){return u(!0)},className:"claim-button"},"New Auction"))}),U=a(196),M=a(62),P=a(519),_=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e,t){var a=e.setSettingUp,i=e.mediaId,s=Object(r.useState)(""),o=Object(n.a)(s,2),u=o[0],l=o[1],m=Object(r.useState)(""),f=Object(n.a)(m,2),v=f[0],p=f[1],E=Object(r.useState)(!1),N=Object(n.a)(E,2),O=N[0],h=N[1],j=Object(r.useState)(!1),w=Object(n.a)(j,2),g=w[0],k=w[1];Object(r.useEffect)(function(){Object(M.a)(u)||"."===u||l("")},[u,l]),Object(r.useEffect)(function(){Object(M.a)(v)||p("")},[v,p]);var I=Object(r.useCallback)(Object(b.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,x(i,parseFloat(u),60*parseFloat(v)*60,4);case 3:h(!1),k(!0),t(!0);case 6:case"end":return e.stop()}},e)})),[v,u,i,k,h,t]);return g?c.a.createElement("div",{className:"auction-flow"},c.a.createElement("div",{className:"flow-inner"},"Your auction has been launched!",c.a.createElement("div",{className:"buttons-bottom"},c.a.createElement("div",{onClick:function(){return a(!1)},className:"launch"},"Done")))):O?c.a.createElement("div",{className:"auction-flow"},c.a.createElement("div",{className:"flow-inner"},c.a.createElement(U.a,{width:350,text:"Launching your auction"}))):c.a.createElement("div",{className:"auction-flow"},c.a.createElement("div",{className:"flow-inner"},c.a.createElement("div",{className:"auction-header"},"Let's Setup Your Auction"),c.a.createElement("div",{className:"auction-description"},"To sell your NFT, we need to set up some things first."),c.a.createElement(P.a,{name:"Reserve Price (in ETH)",set:l,get:u}),c.a.createElement(P.a,{name:"Duration (in hours)",set:p,get:v}),c.a.createElement("div",{className:"buttons-bottom"},c.a.createElement("div",{onClick:function(){return a(!1)},className:"cancel"},"Cancel"),c.a.createElement("div",{onClick:I,className:""===v||""===u?"launch disabled":"launch"},"Launch Auction"))))}),z=function(e){Math.floor(e%1e3/100);var t=Math.floor(e/1e3%60),a=Math.floor(e/6e4%60);return Math.floor(e/36e5%24)+"h "+a+"m "+(t=t<10?"0"+t:t)+"s "},V=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.connected,a=e.pricing,i=e.setBidding,s=e.newBid,o=Object(r.useState)(""),u=Object(n.a)(o,2),l=u[0],m=u[1],f=Object(r.useState)(!1),v=Object(n.a)(f,2),p=v[0],E=v[1],N=Object(r.useState)(""),O=Object(n.a)(N,2),h=O[0],j=O[1],w=a.reserve,g=w.currentBid,k=w.currentBid?parseFloat(w.currentBid.pricing.amount)/Math.pow(10,18):a.reserve.reservePrice.amount/Math.pow(10,18),I=1e3*parseFloat(w.duration);Object(r.useEffect)(function(){"."!==l&&(""===l||Object(M.a)(l)?g&&1.05*k>parseFloat(l)||!g&&k>parseFloat(l)?j("Place a bid higher than "+k):j(void 0):(m(""),j("Put a valid number")))},[k,l,m,j]);var S=Object(r.useCallback)(Object(b.a)(d.a.mark(function e(){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),n=parseFloat(l)*Math.pow(10,9)+"000000000",e.next=4,F(a.reserve.id,n);case 4:s(t,parseFloat(l)*Math.pow(10,18)),i(!1);case 6:case"end":return e.stop()}},e)})),[i,l,E]);return c.a.createElement("div",{className:"bid-flow auction-flow"},c.a.createElement("div",{className:"flow-inner"},c.a.createElement("div",{className:"auction-header"},"Place a Bid"),g?c.a.createElement("div",{className:"highest-bid"},"The highest bid is currently ",c.a.createElement("span",{className:"bid-amount"}," ",k," ETH"),". Offer something higher to try to win this."):c.a.createElement("div",{className:"highest-bid"},"The reserve of ",c.a.createElement("span",{onClick:function(){return m(k)},className:"pushable bid-amount"},k," ETH")," has not been met yet. Place a bid of at least that amount to kick off the auction (lasting ",z(I),")."),c.a.createElement(P.a,{name:"Bid Amount (in ETH)",set:m,get:l}),h&&c.a.createElement("div",{className:"bid-error"},h),p?c.a.createElement(U.a,{text:"Processing your bid"}):c.a.createElement("div",{className:"buttons-bottom"},c.a.createElement("div",{onClick:function(){return i(!1)},className:"cancel"},"Cancel"),c.a.createElement("div",{onClick:S,className:""===l?"launch disabled":"launch"},"Send Bid"))))}),D=a(468),W=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.endTime,a=Object(r.useState)(t.getTime()-(new Date).getTime()),i=Object(n.a)(a,2),s=i[0],o=i[1],u=Object(r.useCallback)(function(){o(t.getTime()-(new Date).getTime())},[o]);return Object(D.a)(u,1e3),s<0?c.a.createElement("div",{className:"auction-timer"},c.a.createElement("span",{className:"auction-ends"},"Auction Ended")):c.a.createElement("div",{className:"auction-timer"},c.a.createElement("span",{className:"auction-ends"},"Auction Ends")," ",c.a.createElement("span",{className:"time-left"},z(s)))}),L=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.pricing,a=e.currentBid,i=e.isOwner,s=e.newBid,o=e.connected,u=Object(r.useState)(!1),l=Object(n.a)(u,2),d=l[0],m=l[1],b=t.reserve.expectedEndTimestamp,f=(a.bidder,a.pricing),v=new Date(1e3*parseInt(b));return c.a.createElement("div",{className:"reserve-price"},d&&c.a.createElement(V,{newBid:s,setBidding:m,pricing:t,connected:o}),c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("span",{className:"current-bid"},"Current Bid")," ",c.a.createElement("span",{className:"price-amount"},f.amount/Math.pow(10,18)," ETH ")," "),c.a.createElement(W,{endTime:v})),i?c.a.createElement("div",{className:"place-bid"},"You Own This"):o?c.a.createElement("div",{onClick:function(){return m(!0)},className:"place-bid"},"Bid"):"")}),G=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.connected,a=e.pricing,i=e.isOwner,s=e.newBid,o=Object(r.useState)(!1),u=Object(n.a)(o,2),l=u[0],d=u[1],m=Object(r.useCallback)(function(){d(!0)},[d]);return c.a.createElement("div",{className:"reserve-price"},l&&c.a.createElement(V,{newBid:s,setBidding:d,pricing:a}),"Reserve Price ",c.a.createElement("div",{className:"price-amount"},a.reserve.reservePrice.amount/Math.pow(10,18)," ETH"),t&&!i&&c.a.createElement("div",{onClick:m,className:"place-bid"},"Bid"))}),Y=(a(2924),a(1580),Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.newBid,a=e.status,i=e.mediaId,s=e.data,o=(e.metadata,e.connected),u=e.isOwner,l=e.currentBid,d=s.pricing,m=Object(r.useState)(!1),b=Object(n.a)(m,2),f=b[0],v=b[1],p=Object(r.useState)(!1),E=Object(n.a)(p,2),N=E[0],O=E[1];return f?c.a.createElement(_,{setAuctionLaunched:O,setSettingUp:v,mediaId:i}):"RESERVE_AUCTION_PENDING"===a?c.a.createElement(G,{newBid:t,connected:o,pricing:d,isOwner:u}):"RESERVE_AUCTION_ACTIVE"===a?c.a.createElement(L,Object(H.a)({currentBid:l,connected:o,newBid:t,pricing:d,isOwner:u},"connected",o)):"RESERVE_AUCTION_FINISHED"===a?c.a.createElement(y,{setSettingUp:v,pricing:d,isOwner:u,connected:o}):N?c.a.createElement("div",{className:"not-for-sale"},"Auction launched!"):o?f||"NO_PRICING"!==a?f?c.a.createElement(_,{setAuctionLaunched:O,setSettingUp:v,mediaId:i}):"":u?c.a.createElement("div",{onClick:function(){return v(!0)},className:"setup-auction-button collect-button"},"Setup Auction"):c.a.createElement("div",{className:"not-for-sale"},"Not for sale"):""})),J=(a(2925),Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.data,a=e.mediaId,n=e.metadata,r=e.projectHash,i=e.connected,s=B(t),o=s.status,u=s.bids,l=s.newBid,d=s.currentBid,m=C(r).bpm;console.log(t,n);var b=t.nft,f=b.creator,v=b.owner;b.prevOwner;o.includes("RESERVE")&&(v=t.pricing.reserve.tokenOwner.id);var p=v===i[0];return console.log("isOwner = %s owner=%s connected[0]=%s",p,v,i[0]),console.log("work info=%s status=%s",a,o),console.log(t),c.a.createElement("div",{className:"work-information"},c.a.createElement("div",{className:"work-overview"},c.a.createElement("div",{className:"creator-fields"},c.a.createElement(I,{creator:f,owner:v}),c.a.createElement(Y,{status:o,isOwner:p,mediaId:a,currentBid:d,newBid:l,connected:i[0],data:t,metadata:n})),c.a.createElement("div",{className:"creator-fields"},c.a.createElement("a",{href:"https://zora.co/collections/zora/"+a},"Zora #",a),m&&c.a.createElement("div",{className:"bpm"},m," BPM"))),c.a.createElement("div",{className:"description"},n.description),c.a.createElement(S,{bids:u,connected:i&&i[0]}),c.a.createElement("a",{href:t.zoraNFT.contentURI},"View on IPFS"))})),Z=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.data,a=e.mediaId,n=e.goBack,r=e.projectHash,i=e.connected,s=Object(w.useNFTMetadata)(t.zoraNFT.metadataURI).metadata;return O(t.nft.creator),c.a.createElement("div",{className:"collect-nft-viewer"},c.a.createElement("div",{className:"title-and-back"},c.a.createElement("div",{onClick:n,className:"back-btn-container"},c.a.createElement("div",{className:"back-btn"})),c.a.createElement("div",{className:"work-name"},s.name),c.a.createElement("div",{onClick:function(){return window.location.href="/v3/"+r},className:"go-to-project"},"Go To Project")),s&&c.a.createElement(j.a,{contentURI:t.zoraNFT.contentURI,metadata:s}),c.a.createElement(J,{mediaId:a,data:t,projectHash:r,metadata:s,connected:i}))}),q=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.data,a=e.status,n=e.projectHash,r=t.pricing,i=B(t),s=i.currentBid,o=i.reservePrice,u=C(n).bpm,l="",d="";if("RESERVE_AUCTION_PENDING"===a)l=c.a.createElement("div",{className:"pricing-type"},"Reserve Price"),d=c.a.createElement("div",{className:"price-amount"},o," ETH");else if("NO_PRICING"===a)l=c.a.createElement("div",{className:"pricing-type"},"Not for sale");else if("RESERVE_AUCTION_ACTIVE"===a){l=c.a.createElement("div",{className:"pricing-type"},"Current Bid");var m=r.reserve.expectedEndTimestamp,b=new Date(1e3*parseInt(m));s&&(d=c.a.createElement("div",{className:"price-amount"},c.a.createElement("div",null,s.pricing.amount/Math.pow(10,18)," ETH "),c.a.createElement(W,{endTime:b})))}else if("RESERVE_AUCTION_FINISHED"===a){l=c.a.createElement("div",{className:"pricing-type"},"Sold for");var f=0,v=r.reserve.previousBids.find(function(e){return"Final"===e.bidType});"Finished"===r.reserve.status&&v?f=v.pricing.prettyAmount:r.reserve.current.highestBid&&(f=r.reserve.current.highestBid.pricing.amount/Math.pow(10,18)),d=c.a.createElement("div",{className:"price-amount"},f," ETH")}return c.a.createElement("div",{className:"pricing"},c.a.createElement("div",{className:"type-and-bpm"},l,c.a.createElement("div",{className:"bpm"},c.a.createElement("div",{className:"bpm-value"},u),c.a.createElement("div",{className:"bpm-label"},"BPM"))),d)}),K=(a(31),Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.data,a=(e.reserve,e.status),s=(e.perpetual,e.createdAt,e.projectHash),o=e.setUserId,u=Object(w.useNFTMetadata)(t.zoraNFT.metadataURI),l=Object(r.useState)(void 0),d=Object(n.a)(l,2),m=(d[0],d[1]);if(Object(r.useEffect)(function(){var e=t.nft,a=e.creator;e.owner,Object(g.c)(a).then(function(e){m(e)})},[t,m]),u&&u.metadata){var b=u.metadata,f=b.image,v=b.name,p=t.nft,E=p.creator,N=(p.owner,t.pricing);return N&&N.reserve&&(N.reserve.reservePrice.amount,Math.pow(10,18)),c.a.createElement("div",{className:"work-info"},c.a.createElement("img",{src:f,className:"work-thumbnail"}),c.a.createElement("div",{className:"work-thumbnail-info"},c.a.createElement("div",{className:"work-name"},v),c.a.createElement("div",{onClick:function(e){e.stopPropagation(),o(E)},className:"pushable work-creator"},i(E))),c.a.createElement(q,{projectHash:s,status:a,data:t}))}return"loading..."})),Q=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t,a,n,r,i=e.setUserId,s=e.mediaId,o=e.setSelectedWork,u=e.projectHash,l=Object(w.useNFT)(null,s.toString(),{refreshInterval:3e4}).data;return l&&l.zoraNFT&&(r=new Date(parseFloat(l.zoraNFT.createdAtTimestamp)),t=l.pricing.reserve,n=l.pricing.perpetual,a=l.pricing.status),console.log("work thumb setuserid=",i),c.a.createElement("div",{onClick:function(){return o({mediaId:s,projectHash:u,data:l})},className:"minted-work"},l&&c.a.createElement(K,{setUserId:i,projectHash:u,data:l,reserve:t,status:a,perpetual:n,createdAt:r}))}),X=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.setWorkCount,a=e.scrollRef,i=e.connected,s=e.setUserId,o=e.setSelectedWork,l=e.selectedWork,d=function(e){var t=Object(r.useState)([]),a=Object(n.a)(t,2),c=a[0],i=a[1];return Object(r.useEffect)(function(){console.log("userid changed=",e),e?O(e).then(function(t){console.log("get works by user id=%s",e,t),h(t,!1).then(i)}):h().then(i)},[e,i]),{works:c}}(e.userId).works,m=Object(u.a)(a,12,!0).size,b="collection-works";return l&&(b+=" hide"),Object(r.useEffect)(function(){d&&t(d.length)},[d,t]),console.log("minted collection works=",d),c.a.createElement("div",{className:"minted-collection"},l&&c.a.createElement(Z,{goBack:function(){return o(void 0)},connected:i,projectHash:l.projectHash,mediaId:l.mediaId,data:l.data}),c.a.createElement("div",{className:b},d.slice(0,m).map(function(e,t){return c.a.createElement(Q,{key:e.id,setUserId:s,scrollRef:a,setSelectedWork:o,mediaId:e.zoraId,projectHash:e.projectHash})})))}),$=function(e){return e.length>12?e.slice(0,12)+"...":e},ee=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=e.connected,a=e.setConnected,n=Object(r.useCallback)(function(){Object(g.b)().then(function(e){console.log("setting connected a=",e),a(e)})},[a]);return c.a.createElement("div",{onClick:n,className:"connect-yr-wallet"},t&&t[0]?$(t[0]):"Connect Wallet")});a(52),a(2926),a(1131),t.default=Object(s.b)(function(e,t){return{}},function(e){return{}})(function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),i=a[0],s=a[1],u=Object(r.useState)(void 0),l=Object(n.a)(u,2),d=l[0],m=l[1],b=Object(r.useRef)(),f=Object(r.useState)(""),v=Object(n.a)(f,2),p=v[0],E=v[1],N=Object(r.useState)(void 0),O=Object(n.a)(N,2),h=O[0],j=O[1],g=Object(r.useState)(void 0),k=Object(n.a)(g,2),I=k[0],S=k[1];return Object(r.useEffect)(function(){b.current.scrollTo(0,0)},[h]),c.a.createElement("div",{className:"collect-page"},c.a.createElement(ee,{connected:i,setConnected:s}),!I&&c.a.createElement(o,{workCount:d,userId:h,clearUser:function(){return j(void 0)},value:p,setValue:E}),c.a.createElement("div",{ref:b,className:"works-scroll"},c.a.createElement(w.NFTFetchConfiguration,{networkId:w.Networks.RINKEBY},c.a.createElement(X,{scrollRef:b,setWorkCount:m,searchTerm:p,connected:i,selectedWork:I,setSelectedWork:S,userId:h,setUserId:j,userName:""}))))})}}]);
//# sourceMappingURL=12.c0a17fda.chunk.js.map