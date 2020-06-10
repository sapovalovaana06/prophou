(function(){const appDomain="instafeed.nfcube.com",cssVer="4.0.6";var Instafeed=function(){function b(b){var c,d;for(c in this.options={target:"insta-feed",feedLoaded:!1,account:"",hash:"",forceUpdate:!1,picturesLoaded:0,admin:window.location.hostname===appDomain,title:"",columns:5},b)d=b[c],this.options[c]=d}return b.prototype.run=function(b){var c;if(c=this.options.target,c=document.getElementById(c),""===this.options.accessToken&&4===this.options.apiVersion)return c.innerHTML="<div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div>",c.innerHTML+="<div><em><b>Connect your Instagram account to see your feed</b></em></div>",!1;if(""===this.options.account&&2===this.options.apiVersion)return c.innerHTML+="<div><em><b>Please insert your Instagram username and press \"Save\" to see your feed</b></em></div>",!1;c.innerHTML="<img src='//instafeed.nfcube.com/assets/img/loader.gif' style='position:relative;height:11px;width:16px;' alt='loading bar' />";var d=this;const e=new XMLHttpRequest;return e.open("GET",b||this._buildUrl(),!0),e.onreadystatechange=function(){if(4===e.readyState){var b=e.status;if(0===b||200>=b&&400>b){var c=e.responseText.split(".parse (").pop().slice(0,-2);d.parse(JSON.parse(c))}else console.log("error")}},e.send(),!0},b.prototype.parse=function(b){var c,d,e,f,g,h,k,l,m,o,p,q,r,s,t,u,v,w,x;if(w=this.options.target,w=document.getElementById(w),console.log(b),"object"!=typeof b)throw new Error("Invalid JSON response");if(200!==b.meta.code)throw w.innerHTML="The access_token provided is invalid."===b.meta.error_message?this.options.admin?"<div class='alert error'><dl><dt>Your access token is invalid</dt><dd>Please generate a new <a href='https://instagram.pixelunion.net/' rel='noopener' target='_blank'>Instagram access token</a></span><br/><br/><div style='text-align:left;'><em>Instafeed doesn't have any control over your token. Your token is managed by Instagram and becomes invalid for security reasons. Example: you changed your Instagram password, someone tried to access your account and/or your Instagram account is compromised.</dd></dl></div>":"<em>Feed couldn't load. Token invalid.</em>":"<em>"+b.meta.error_message+"</em>",new Error("Error from API: "+b.meta.error_message);if(0===b.data.length)throw w.innerHTML="<em>No images were returned from this Instagram account</em>",new Error("No images were returned from Instagram");if(null===w)throw f="No element with id=\""+this.options.target+"\" on page.",new Error(f);if(null!==this.options.success&&"function"==typeof this.options.success&&this.options.success.call(this,b),"undefined"!=typeof document&&null!==document){q=b.data,g=document.createDocumentFragment(),h="",o="",r="",x=document.createElement("div");var y=w.clientWidth/this.options.columns*window.devicePixelRatio,z="standard_resolution",A=this.options.limit,B=parseFloat(100/this.options.columns).toFixed(6),C=parseInt(100-this.options.space);isMobileDevice()&&validateCharge(this.options.charge)&&(y=w.clientWidth/this.options.columnsMobile*window.devicePixelRatio,B=parseFloat(100/this.options.columnsMobile).toFixed(6),A=this.options.limitMobile),150>=y?z="thumbnail":320>=y&&(z="low_resolution");var D="",E="";validateCharge(this.options.charge)&&0<parseInt(this.options.likes)&&4!==parseInt(this.options.apiVersion)&&(D="<div class='likes'><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='white'></path></svg></span>{{likes}}<!--<span style='width: 10px;padding-right: 5px;padding-left: 5px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z' fill='white'></path></svg></span> {{comments}}--></div>",E="<span><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='grey'></path></svg> {{likes}}</span> <!--<span>&#10078; {{comments}}</span>-->");var F="<div style='width:"+C+"%;height:"+C+"%;' class='instafeed-overlay {{video}}'>"+D+"</div>",G="<div class='instafeed-container' style='width:"+B+"%;padding-top:"+B+"%;'><img class='js-lazy-image' style='width:"+C+"%;height:"+C+"%;' src='//"+appDomain+"/assets/img/pixel.gif' data-src='{{image}}' alt='instagram post image' />"+F+"</div></div>",H="";for(1===parseInt(this.options.openIg)?G="<a href='{{link}}' target='_blank' rel='noopener'>"+G+"</a>":2===parseInt(this.options.openIg)?this.options.admin?G="<a href='"+this.options.shopOrigin+"/collections/all' target='_blank' rel='noopener'>"+G+"</a>":G="<a href='//"+window.location.hostname+"/collections/all'>"+G+"</a>":3===parseInt(this.options.openIg)&&(this.options.admin&&(H="<div class='products-tagging'><object><a href='#{{id}}-"+this.options.target+"' id='search' data-picture-id='{{fullId}}'><b><button class='primary'>Tag Product</button></b></a></object></div><em id='tagging-{{fullId}}'></em>"),G="<a href='#{{id}}-"+this.options.target+"'>"+G+"</a><a href='#_' class='instafeed-lightbox' id='{{id}}-"+this.options.target+"'><div class='lightbox-instagram'><div class='image'>{{imageFullHtml}}</div><div class='description'><div class='header'><object><a href='https://www.instagram.com/{{username}}' target='_blank' rel='noopener'><img src='//"+appDomain+"/assets/img/pixel.gif' class='profile-picture js-lazy-image' data-src='{{userPicture}}' alt='instagram user picture' /></a></object><object class='name-section'><a class='fullname' href='https://www.instagram.com/{{username}}/' target='_blank' rel='noopener'><span class='username'>{{username}}</span></a></object></div><hr><div class='box-content'><div class='sub-header'><div class='post-engagement'>"+E+"</div><div class='arrows'><object><a href='#{{minusId}}-"+this.options.target+"'><img src='//"+appDomain+"/assets/img/pixel.gif' alt='previous image' /></a></object><object><a href='#{{plusId}}-"+this.options.target+"'><img src='//"+appDomain+"/assets/img/pixel.gif' alt='next image' /></a></object></div></div>"+H+" {{taggedProduct}}<div class='instafeed-caption'>{{caption}}</div><div class='post-date'>{{date}} \u2022 <object><a href='{{link}}' target='_blank' rel='noopener' class='follow'>View on Instagram</a></object></div></div></div></div></a>"),k=0,t=q.length;k<t;k++){var I="";if(l=q[k],m=l.images[z],"object"!=typeof m)throw f="No image found for resolution: "+z+".",new Error(f);if(l.hasOwnProperty("tagged_products")&&0<l.tagged_products.length&&validateCharge(this.options.charge)){var J=this.options.admin,K=this.options.shopOrigin,L=this.options.target;l.tagged_products.forEach(function(b){J?(taggedProductUrl="<object class='product-title'><a href='https://"+K+"/products/"+b.handle+"/' target='_blank' rel='noopener'>"+b.title+"</a><a href='#{{id}}-"+L+"' id='delete-product' data-picture-id='{{fullId}}' data-tagging-id='"+b.id+"'><button class='tagged-buy-button'>Delete</button></a></object>",productImageUrl="<object><a href='https://"+K+"/products/"+b.handle+"/' target='_blank' rel='noopener'><img class='js-lazy-image' src='https://"+appDomain+"/assets/img/pixel.gif' data-src='"+b.image+"' alt='product image' /></a></object>"):!J&&(taggedProductUrl="<object class='product-title'><a href='//"+window.location.hostname+"/products/"+b.handle+"/'>"+b.title+"</a><a href='//"+window.location.hostname+"/products/"+b.handle+"/'><button class='tagged-buy-button'>Shop Now</button></a></object>",productImageUrl="<object><a href='//"+window.location.hostname+"/products/"+b.handle+"/'><img class='js-lazy-image' src='https://"+appDomain+"/assets/img/pixel.gif' data-src='"+b.image+"' alt='product image' /></a></object>"),I+="<div class='tagged-products' id='{{fullId}}-"+b.id+"'>"+productImageUrl+" "+taggedProductUrl+"</div>"})}var M="";if("video"===l.type&&l.hasOwnProperty("videos")?(M="instafeed-video",imageFullHtml="<video id=\"video-{{id}}-instafeed\" controls><source src=\""+l.videos.standard_resolution.url+"\" type=\"video/mp4\"></video>"):imageFullHtml="<img class='js-lazy-image' src='//instafeed.nfcube.com/assets/img/pixel.gif' data-src='"+l.images.standard_resolution.url+"' alt='video thumbnail'>",p=m.url,o=this._makeTemplate(G,{model:l,id:this.options.picturesLoaded,fullId:l.id,minusId:0===this.options.picturesLoaded?A-1:this.options.picturesLoaded-1,plusId:this.options.picturesLoaded+1===A?0:this.options.picturesLoaded+1,link:l.link,image:p,video:M,username:l.user.username,fullName:l.user.full_name,userPicture:l.user.profile_picture,imageFullHtml:imageFullHtml,taggedProduct:I,date:timeConverter(l.created_time),caption:escapeHtml(this._getObjectProperty(l,"caption.text")),likes:shortenLargeNumber(l.likes.count,1),comments:shortenLargeNumber(l.comments.count,1),location:this._getObjectProperty(l,"location.name")}),0<parseInt(this.options.filter.length)&&validateCharge(this.options.charge)&&0===parseInt(this.options.public)){var N=l.tags.length,O=this.options.filter.replace("#","").replace(" ","").toLowerCase();O=O.split(",");loop1:for(a=0;a<N;a++)loop2:for(n=0;n<O.length;n++)if(l.tags[a]===printableChars(O[n])){h+=o,this.options.picturesLoaded++;break loop1}}else h+=o,this.options.picturesLoaded++;if(this.options.picturesLoaded>=A){this.options.admin&&3===parseInt(this.options.openIg)&&(h+="<em style=\"margin-top:15px;\"><i><b>Tip:</b> Click on a picture to start tagging products</i></em>");break}}for(x.innerHTML=h,e=[],d=0,c=x.childNodes.length;d<c;)e.push(x.childNodes[d]),d+=1;for(s=0,u=e.length;s<u;s++)v=e[s],g.appendChild(v);if(w.innerHTML="",0<this.options.title.length){var P=document.createElement("h2");P.innerHTML=this.options.title,w.insertBefore(P,w.firstChild)}w.appendChild(g)}return 4===parseInt(this.options.apiVersion)&&getProfilePic(b.data[0].user.username),lazyLoading(),!0},b.prototype._buildUrl=function(){var b,c;if(c=this.options.forceUpdate?1:0,2===this.options.apiVersion){var d=this.options.limitMobile>this.options.limit?this.options.limitMobile:this.options.limit;b="https://instafeed.nfcube.com/api/v"+this.options.apiVersion+"?charge="+this.options.charge+"&fu="+c+"&limit="+d+"&filter="+parseInt(this.options.filter.length)+"&account="+this.options.account+"&tags="+this.options.filter+"&public="+this.options.public+"&hash="+this.options.hash+"&callback=cache.parse"}else if(4===this.options.apiVersion){var d=this.options.limitMobile>this.options.limit?this.options.limitMobile:this.options.limit;b="https://instafeed.nfcube.com/facebook/v4?charge="+this.options.charge+"&fu="+c+"&limit="+d+"&filter="+parseInt(this.options.filter.length)+"&account="+this.options.shopOrigin+"&fid="+this.options.feedId+"&tags="+this.options.filter+"&public="+this.options.public+"&hash="+this.options.hash+"&callback=cache.parse"}else if(5===this.options.apiVersion){var d=this.options.limitMobile>this.options.limit?this.options.limitMobile:this.options.limit;b="https://instafeed.nfcube.com/facebook/v5?charge="+this.options.charge+"&fu="+c+"&limit="+d+"&filter="+parseInt(this.options.filter.length)+"&account="+this.options.shopOrigin+"&fid="+this.options.feedId+"&page="+this.options.facebookPage+"&tags="+this.options.filter+"&public="+this.options.public+"&hash="+this.options.hash+"&callback=cache.parse"}return b},b.prototype.slide=function(){console.log("slide")},b.prototype._makeTemplate=function(b,c){var d,e,f,g,h;for(e=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,d=b;e.test(d);)g=d.match(e)[1],h=null===(f=this._getObjectProperty(c,g))?"":f,d=d.replace(e,function(){return""+h});return d},b.prototype._getObjectProperty=function(b,c){var d,e;for(c=c.replace(/\[(\w+)\]/g,".$1"),e=c.split(".");e.length;)if(d=e.shift(),null!==b&&d in b)b=b[d];else return null;return b},b}();function validateCharge(b){return!!(0<parseInt(b))}function getProfilePic(b){var c=new XMLHttpRequest;c.open("GET","https://www.instagram.com/"+b+"/?__a=1"),c.send(),c.onreadystatechange=function(){if(4==this.readyState&&200==this.status){let c=JSON.parse(this.responseText);var b=document.getElementsByClassName("profile-picture");for(let d of b)d.src=c.graphql.user.profile_pic_url_hd}}}function escapeHtml(b){return b&&(b=b.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),b}function shortenLargeNumber(b,c){for(var d,e=["k","M","G","T","P","E","Z","Y"],f=e.length-1;0<=f;f--)if(d=Math.pow(1e3,f+1),b<=-d||b>=d)return+(b/d).toFixed(c)+e[f];return b}function timeConverter(b){var c=new Date(1e3*b),d=c.toLocaleDateString(navigator.language,{month:"long",day:"numeric"});return d.toUpperCase()}function isMobileDevice(){return window.matchMedia("only screen and (max-width: 760px)").matches}function printableChars(b){return b.replace(/[^\x20-\x7E]+/g,"")}function lazyLoading(){function b(b){return new Promise((c,d)=>{const e=new Image;e.src=b,e.onload=c,e.onerror=d})}function c(c){const d=c.dataset.src;return d?b(d).then(()=>{e(c,d)}):void 0}function d(b){0===h&&g.disconnect();for(let d,e=0;e<b.length;e++)d=b[e],0<d.intersectionRatio&&(h--,g.unobserve(d.target),c(d.target))}function e(b,c){b.classList.add("js-lazy-image--handled"),b.src=c}const f=document.querySelectorAll(".js-lazy-image");let g,h=f.length;if(!("IntersectionObserver"in window))(function(b){for(let d,e=0;e<b.length;e++)d=b[e],c(d)})(f);else{g=new IntersectionObserver(d,{rootMargin:"100px 0px",threshold:.01});for(let b,c=0;c<f.length;c++)(b=f[c],!b.classList.contains("js-lazy-image--handled"))&&g.observe(b)}}(function(b,c){return"function"==typeof define&&define.amd?define([],c):"object"==typeof module&&module.exports?(module.exports=c(),module.exports):(b.Instafeed=c(),b.Instafeed)})(this,function(){return Instafeed}),function(){if(!document.currentScript.src.includes(appDomain))return!1;var b=document.createElement("link");b.href="https://instafeed.nfcube.com/cdn/instafeed-"+cssVer+".css",b.type="text/css",b.rel="stylesheet",b.media="screen,print",document.getElementsByTagName("head")[0].appendChild(b)}(),function(){function b(){"#_"===location.hash?(document.body.style.overflow="visible",d=document.getElementById("video-"+c.substring(c.lastIndexOf("#")+1,c.lastIndexOf("-insta-feed"))+"-instafeed"),e&&(e.style.overflow="visible"),d&&(d.pause(),d.onplay=function(){"#_"===location.hash&&d.pause()})):location.hash.includes("-insta-feed")&&(document.body.style.overflow="hidden",e&&(e.style.overflow="hidden"),c=location.hash)}var c,d,e=document.getElementById("PageContainer");window.addEventListener("hashchange",b,!1)}();if(document.getElementById('insta-feed')!==null){var feed=new Instafeed({account:'',hash:'26755b6d7a8cd987e55767c6e7fdfec9',apiVersion:4,shopOrigin:'bauerfeind.myshopify.com',title:'INSTAGRAM',openIg:3,space:0,likes:1,filter:'',public:0,columns:6,feedId:0,columnsMobile:6,limit:6,limitMobile:6,charge:'0',facebookPage:0});feed.run();}})();