!function(){var F="https://www.powr.io";function K(){return function(){}}if("undefined"==typeof loadPowr){for(var e=document.querySelectorAll(".powrLoaded"),t=0;t<e.length;t++){var o=e[t];o.innerHTML="",o.classList.remove("powrLoaded")}window.addEventListener?window.addEventListener("message",l):window.attachEvent("onmessage",l);var Q=0;POWR_RECEIVERS=[];var n=document.createEvent("Event");n.initEvent("powrPingListener",!0,!0),loadPowr=function(){for(var t=null,e=null,o=null,n=!1,r=document.querySelectorAll("script"),i=0;i<r.length;i++){var a=r[i],l=a.getAttribute("src");if(null!=l){var s=a.getAttribute("powr-token"),d=a.getAttribute("external-type");if((o=ee(l))&&o.loadApp&&o.uniqueId&&!a.getAttribute("auto-add"))(P=document.createElement("div")).setAttribute("class","powr-"+o.loadApp),P.setAttribute("id",o.uniqueId),document.body.appendChild(P),a.setAttribute("auto-add",!0);d=d||a.getAttribute("platform");var c=a.getAttribute("template-powr-token"),u=a.getAttribute("powr-load");if(null==u&&(u="sync"),te()&&te()<=9&&(u="sync"),n=a.getAttribute("demo-mode"),null!=s?t=s:-1<l.search("powr-token")&&void 0!==o["powr-token"]&&0<o["powr-token"].length&&(t=o["powr-token"]),null!=d)e=d;else if(-1<l.search("external-type")){null!=(p=(o=ee(l))["external-type"])&&0<p.length&&(e=p)}else if(-1<l.search("platform")){var p;null!=(p=(o=ee(l)).platform)&&0<p.length&&(e=p)}if("ecwid"==e&&(u="sync"),null!=t||null!=e)break}}if(null==t||0==t.length)try{t=window.top.location.host}catch(e){t=""}var g=/\[powr-[^\]]*\]/gi,m=/\[powr-[^\s\]]*/gi,E=document.querySelectorAll("a");for(i=0;i<E.length;i++){if(!oe(R=E[i])){var f=R.previousSibling,v=R.nextSibling;if(f&&v&&R.getAttribute("href")&&-1<R.getAttribute("href").search("tel")&&3==f.nodeType&&3==v.nodeType&&f.nodeValue.match(m)&&-1<v.nodeValue.search("]")){var w=R.innerHTML,h=f.nodeValue.match(/powr-[^\s\]]*/gi)[0];(_=document.createElement("div")).innerHTML='<div class="'+h+'" label="'+w+'"></div>',f.parentNode.removeChild(f),v.parentNode.removeChild(v),R.parentNode.replaceChild(_,R)}}}for(E=document.querySelectorAll("body, body *"),i=0;i<E.length;i++){var R,y=(R=E[i]).childNodes;if(!oe(R))for(var S=0;S<y.length;S++){var b=y[S];if(3==b.nodeType){var _,C=b.nodeValue,O=C.replace(g,$);if(O!=C)(_=document.createElement("div")).innerHTML=O,R.replaceChild(_,b)}}}if(0==document.querySelectorAll("#powrIframeLoader").length){var P=document.createElement("div"),I=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];P.id="powrIframeLoader",P.innerHTML="&shy;<style> .powrLoaded iframe { visibility: hidden; } </style>",I.parentNode.insertBefore(P,I)}var W=document.querySelectorAll("[class*=powr-]"),V=!1,A=!1;for(i=0;i<W.length;i++){var x=W[i];if(!oe(x)&&!(x instanceof SVGElement||-1<x.className.search("powrLoaded"))){var L=x.className.split(/\s+/);for(S=0;S<L.length;S++)if(0===L[S].toLowerCase().search("powr-")){var T=L[S].toLowerCase().replace("powr-","");break}if(void 0!==T){-1<["popup","sales-popup","sales-pop","exit-popup","exit-intent-popup","overlay-popup","onclick-popup","popup-form","email-popup","coupon-box","email-subscription-popup","popup-notification","full-screen-popup","survey-popup","splash-popup","popup-maker","slide-in","modal-popup"].indexOf(T)&&(V=!0),("scroll-to-top"==T||-1<["popup","sales-popup","sales-pop","exit-popup","exit-intent-popup","overlay-popup","onclick-popup","popup-form","email-popup","coupon-box","email-subscription-popup","popup-notification","full-screen-popup","survey-popup","splash-popup","popup-maker","slide-in","modal-popup"].indexOf(T))&&(A=!0);var k=x.getAttribute("label");if(null==k&&(k=""),"weebly_"!=k){x.className+=" powrLoaded",null==c&&(c="");var N=x.getAttribute("id");null==N&&(N="");var M=x.getAttribute("view-mode"),q="true"==n||"true"==x.getAttribute("demo-mode"),H=F+"/"+T+"/u/"+N+"#platform="+(p||"html"),J=encodeURIComponent(k),B=F+"/plugins/"+T+"/cached_view?load="+u+"&index="+Q+"&unique_label="+N+"&powr_token="+t+"&user_label="+J+"&demo_mode="+q,D="https://www.powr.io/plugins/"+T+"/view.json?unique_label="+N+"&powr_token="+t+"&user_label="+J+"&demo_mode="+q;if(null!=e){var U="&external_type="+e;D+=U,B+=U}if(null!=c){var j="&template_powr_token="+c;D+=j,B+=j}if(null!=M){var z="&view_mode="+M;D+=z,B+=z}if(K()("page url IS "+ne()),ne()&&(D+="&url="+encodeURIComponent(ne())),document.location.host)var Y=document.location.protocol+"//"+document.location.host;else try{Y=document.location.ancestorOrigins[0]}catch(e){if(window.top&&window.top.location&&window.top.location.host)Y=window.top.location.protocol+"//"+window.top.location.host;else Y=""}D+="&request_url="+encodeURIComponent(Y),B+="&request_url="+encodeURIComponent(document.location.href),0==J.length&&(B=H);var G=document.createElement("iframe");G.src=B,G.setAttribute("powrindex",Q),G.width="100%",G.height="0px",G.style.transition="height 0.3s",G.style.webkitTransition="height 0.3s",G.style.height="0px",G.style.display="block",G.frameBorder="0",G.style.visibility="visible",G.setAttribute("webkitallowfullscreen",""),G.setAttribute("mozallowfullscreen",""),G.setAttribute("allowfullscreen",""),"ecwid"==e&&(x.style.minWidth="280px");try{/iPhone|iPod|iPad/.test(navigator.userAgent)&&(G.style.minWidth="100%",G.style.width="1px",G.setAttribute("scrolling","no"))}catch(e){console.log("Err: "+e)}re(G,Q,B),x.appendChild(G);var X=G.contentWindow;POWR_RECEIVERS.push({receiver:X,url:B,data_url:D}),"async"==u&&(ae(Q),ie(Q,G)),Q++}}}}V&&(Z(document,"click",function(e){var t=(e=e||window.event).relatedTarget||e.toElement||e.target;if(t&&t.classList.contains("trigger-popup"))for(var o=0;o<POWR_RECEIVERS.length;o++)POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({message:"triggerPowrPopupClick"}),POWR_RECEIVERS[o].url)}),Z(document,"mouseout",function(e){if((e=e||window.event).clientY<5)for(var t=0;t<POWR_RECEIVERS.length;t++)POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({message:"exitDocument"}),POWR_RECEIVERS[t].url)})),A&&Z(document,"scroll",function(e){for(var t=(document.documentElement.scrollHeight||document.body.scrollHeight)-window.innerHeight,o=100*(document.documentElement.scrollTop||document.body.scrollTop)/t,n=0;n<POWR_RECEIVERS.length;n++)POWR_RECEIVERS[n].receiver.postMessage(JSON.stringify({message:"scrollPosition",scrollPercentage:o}),POWR_RECEIVERS[n].url)})},loadPowr(),setInterval(function(){loadPowr()},500),Z(window,"load",loadPowr);var r=!1;Z(window,"keydown",function(e){if(80==e.keyCode&&(r=!0,setTimeout(function(){r=!1},2e3)),38==e.keyCode&&r){for(var t=0;t<POWR_RECEIVERS.length;t++)POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({message:"showEdit"}),POWR_RECEIVERS[t].url);return e.preventDefault(),!1}if(40==e.keyCode&&r){for(t=0;t<POWR_RECEIVERS.length;t++)POWR_RECEIVERS[t].receiver.postMessage(JSON.stringify({message:"hideEdit"}),POWR_RECEIVERS[t].url);return e.preventDefault(),!1}})}else K()("Powr already loaded");function Z(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)}function $(e,t,o,n,r,i){var a=e;K()("Match:",e);var l=a.match(/powr-[^\s\]]*/i),s=a.match(/id="[^"]*"/i);null==s&&(s=a.match(/id='[^']*'/i)),null==s&&null!=(s=a.match(/id=[^\]]*/i))&&(s=s[0].replace("id=",'id="')+'"'),null==s&&(s=a.match(/label="[^"]*"/i)),null==s&&(s=a.match(/label='[^']*'/i)),null==s&&(s="");var d='<div class="'+l+'" '+s+"></div>";return K()("Result is:"+d),d}function ee(e){for(var t={},o=e.search("\\?"),n=(e=e.substr(o+1)).split("&"),r=0;r<n.length;r++){var i=n[r].split("=");if(void 0===t[i[0]])t[i[0]]=i[1];else if("string"==typeof t[i[0]]){var a=[t[i[0]],i[1]];t[i[0]]=a}else t[i[0]].push(i[1])}return t}function te(){var e=navigator.userAgent.toLowerCase();return-1!=e.indexOf("msie")&&parseInt(e.split("msie")[1])}function oe(e){for(var t=!1,o=e;o&&o!==document;o=o.parentNode)if(null!=o.classList&&o.classList.contains("powr-ignore")){t=!0;break}return t}function ne(){try{return window.top.location.href}catch(e){return K()("Couldn't get page url:",e),""}}function re(t,o,n){function e(){var e={message:"loaded",data:{iframe_index:o,parent_window_width:window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth,parent_window_height:window.innerHeight||document.documentElement.clientHeight||document.getElementsByTagName("body")[0].clientHeight}};K()("POWr.js sending load message to url"+n+"; iframe:",t),t.contentWindow.postMessage(JSON.stringify(e),n)}t.addEventListener?t.addEventListener("load",e):t.attachEvent("onload",e)}function ie(t,e){e.addEventListener&&(e.addEventListener("powrPingListener",function(){return POWR_RECEIVERS[t].listenerConnected=!0},!1),POWR_RECEIVERS[t].ping_interval=setInterval(function(){var e=document.querySelectorAll('[powrindex="'+t+'"]')[0];e&&(POWR_RECEIVERS[t].listenerConnected=!1,e.dispatchEvent(n),!1===POWR_RECEIVERS[t].listenerConnected&&(console.log("POWr Lost connection. Reconnecting"),clearInterval(POWR_RECEIVERS[t].ping_interval),POWR_RECEIVERS[t].receiver=e.contentWindow,ae(t),ie(t,e)))},2e3))}function ae(o){var n=new XMLHttpRequest;n.open("GET",POWR_RECEIVERS[o].data_url,!0),n.withCredentials=!0,n.onreadystatechange=function(){if(n.readyState==XMLHttpRequest.DONE||4==n.readyState)if(200==n.status){var e=JSON.parse(n.responseText);e.iframe_index=o,POWR_RECEIVERS[o].data=e;var t=setInterval(function(){POWR_RECEIVERS[o].loaded&&(POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({message:"loadView",data:e}),POWR_RECEIVERS[o].url),clearInterval(t))},10)}else K()("Error receiving POWr App Data")},n.send()}function i(e){switch(e.scrollTo){case"top":a(0,e.scrollSpeed);break;case"bottom":t=e.scrollSpeed,a((document.documentElement.scrollHeight||document.body.scrollHeight)-window.innerHeight+50,t);break;case"text":!function(e,t){var o=function(e){for(var t=document.querySelectorAll("body, body *"),o=0;o<t.length;o++)for(var n=t[o],r=n.childNodes,i=0;i<r.length;i++){var a=r[i];if(3==a.nodeType)if(-1<a.nodeValue.search(e))return n}return!1}(e);if(!o)return;a(o.getBoundingClientRect().top+window.scrollY-150,t)}(e.scrollToText,e.scrollSpeed);break;case"anchor":!function(e,t){var o=document.getElementById(e);if(!o)return;a(o.getBoundingClientRect().top+window.scrollY-150,t)}(e.scrollToAnchor,e.scrollSpeed)}var t}function a(e,t,o){var n=document.documentElement.scrollTop||document.body.scrollTop;n!==o&&(window.requestAnimationFrame(function(){a(e,t,n)}),n<e?window.scrollTo(0,n+(e-n)/t):window.scrollTo(0,n-(n-e)/t))}function l(e){K()("Settings got a message!",e);try{var t=JSON.parse(e.data);if("viewLoaded"==t.message){K()("Settings received view loaded");var o=t.data.iframe_index;POWR_RECEIVERS[o].loaded=!0}else if("updateSize"==t.message){"undefined"!=typeof gadgets&&void 0!==gadgets.window&&void 0!==gadgets.window.adjustHeight&&gadgets.window.adjustHeight(t.data.height);o=t.data.iframe_index;var n=document.querySelectorAll('[powrindex="'+o+'"]')[0];if(n&&(n.height=t.data.height+"px",n.style.height=t.data.height+"px",n.style.display="inline",null!=t.data.postCss))for(var r in t.data.postCss)n.style[r]=t.data.postCss[r];t.data.postMessage&&"scrollTo"==t.data.postMessage.messageType&&i(t.data.postMessage),K()("Updating size of el",n)}else if("loadMe"==t.message){K()("Settings received loadMe request");o=t.data.iframe_index;null!=POWR_RECEIVERS[o]&&null!=POWR_RECEIVERS[o].data&&POWR_RECEIVERS[o].receiver.postMessage(JSON.stringify({message:"loadView",data:POWR_RECEIVERS[o].data}),POWR_RECEIVERS[o].url)}}catch(e){}}}();