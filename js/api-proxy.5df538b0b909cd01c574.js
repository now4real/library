!function r(i,o,u){function s(t,e){if(!o[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=o[t]={exports:{}},i[t][0].call(n.exports,function(e){return s(i[t][1][e]||e)},n,n.exports,r,i,o,u)}return o[t].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(e,t,n){Object.defineProperty(n,"t",{value:!0});var u=e(11),s=e(6),c=e(3),o=e(4),a=e(9),r=e(2),l=e(8),f=e(12),E=e(14),d=e(13),v=e(5),h=e(4),T=e(10);function i(){this.onload=window.now4real.onload,this.onerror=window.now4real.onerror,this.i=!1,this.o=!1,this.u=!1,this.l=window.now4real.config,this.v()}i.h=function(){return i.T=i.T?i.T:new i},i.prototype.v=function(){var i=this;a.default._({A:function(e){u.default.O(i.onerror)&&i.onerror.call(i,e)},P:function(e){var t,n;s.default.reset(i),s.default.g=u.default.N(),s.default.g&&(n=e.cc,t=(n=E.R(n,i.l)).config,n=n.technicalConfig,c.default.I=t,c.default.C=n,c.default.m=e.ll,c.default.p=e.ago,c.default.S=e.co,c.default.L=n.our_origin,c.default.D=e.uau,s.default.M=e.as,s.default.U(d.j.PARAMETERS,e.pars_snap,i),s.default.H=e.ss,i.version=e.lv,i.siteContext=e.sc,i.pageContext=e.pc,i.i=e.wv,i.o=e.nrm,i.u=e.em,i.G=e.wll,i.V=e.sk,i.browserPreferences=new l.default,i.Subject=d.j,i.ErrorCode=d.K,u.default.O(i.onload)&&i.onload.call(i),T.default(h.B,"Ready event",i.onload,i.l))},W:function(e){e=v.Y[e.level];c.default.m=v.Y[e],T.default(h.B,"LoggerEdit event",e)},k:function(e){var t,n=e.lsn,e=e.data,r=e.data;n===d.j.LIST_CHAT_MESSAGES||n===d.j.LIST_CHAT_TYPING||-1<n.indexOf("RANKING")||-1<n.indexOf("HEATMAP")?(t="_snap","INIT"!==r.action&&(s.default.U(n,r[t],i),delete r[t])):s.default.U(n,r,i),s.default.q(n,e),T.default(h.B,"SubjectUpdate event",n,r)},F:function(e){e=e.ns;s.default.H=e,T.default(h.B,"SiteStatusUpdate event",e)},X:function(e){var t=e.fn,n=e.res,e=e.data,r=e&&e.subject;"subscribe"===t&&n===o.default.Z?delete s.default.J[r]:"subscribe"===t&&n===o.default.$?s.default.ee(r,i):"unsubscribe"===t&&n===o.default.$?(s.default.te(r,i),delete s.default.J[r]):"setLoggerLevel"===t&&n===o.default.$&&(c.default.m=v.Y[v.Y[e.level]]),T.default(h.B,"Response event",t,n,r)}})},Object.defineProperty(i.prototype,"config",{get:function(){return c.default.I},set:function(e){c.default.I=e},ne:!1,re:!0}),i.prototype.get=function(e){T.default(h.ie,"get call",arguments);var t=e.split(":"),n=t[0],t=t[1];if(-1===s.default.M.indexOf(n)||-1===(void 0!==t&&c.default.oe.indexOf(n)))throw new f.default(d.K.INVALID_ARGUMENTS,"invalid subject");if(-1===Object.keys(s.default.ue).indexOf(e))throw new f.default(d.K.INVALID_CALL,"not subscribed subject");return s.default.ue[e]},i.prototype.subscribe=function(e,t,n){if(T.default(h.ie,"subscribe call",arguments),"string"!=typeof e)return Promise.reject(new f.default(d.K.INVALID_ARGUMENTS,"subject must be a string"));var r=e.split(":"),i=r[0],r=r[1];if(-1===s.default.M.indexOf(i))return Promise.reject(new f.default(d.K.INVALID_ARGUMENTS,"subject not exists"));if(r&&3!==s.default.H)return Promise.reject(new f.default(d.K.INVALID_CALL,"custom context is a Premium feature"));if("POLL"===i&&3!==s.default.H)return Promise.reject(new f.default(d.K.INVALID_CALL,"poll is a Premium feature"));var o=i;if(r){if(!(-1<c.default.oe.indexOf(i)))return Promise.reject(new f.default(d.K.INVALID_ARGUMENTS,"not customizable subject"));o=e}return u.default.O(t)?void 0===s.default.J[o]?a.default.se("subscribe",[e,n]).then(function(e){return s.default.J[o]=t,e}):Promise.reject(new f.default(d.K.INVALID_CALL,"already subscribed subject")):Promise.reject(new f.default(d.K.INVALID_ARGUMENTS,"callback must be a function"))},i.prototype.unsubscribe=function(e){return T.default(h.ie,"unsubscribe call",arguments),a.default.se("unsubscribe",arguments)},i.prototype.login=function(e){return T.default(h.ie,"login call",arguments),/^DISCONNECTED:/.test(s.default.ue[d.j.CONNECTION_STATUS].status)?Promise.reject(new f.default(d.K.INVALID_CALL,"the client is on an unrecoverable disconnection status")):this.i?Promise.reject(new f.default(d.K.INVALID_CALL,"not supported on this browser")):c.default.I.custom_auth.enabled?Promise.reject(new f.default(d.K.INVALID_CALL,"not supported using custom auth")):"AUTHENTICATED"===s.default.ue[d.j.LOGIN_STATUS].status?Promise.reject(new f.default(d.K.INVALID_CALL,"the user is already authenticated")):this.o||this.u||!e||"string"==typeof e?this.o||this.u||!e||-1!==r.default.ce.indexOf(e)||e===o.default.ae?r.default.le?(r.default.fe.focus(),Promise.reject(new f.default(d.K.ALREADY_STARTED,"already opened authentication window"))):r.default.start({Ee:this.o,de:this.u,siteKey:this.V,siteContext:this.siteContext,provider:e,ve:this.G}):Promise.reject(new f.default(d.K.INVALID_ARGUMENTS,"invalid provider name")):Promise.reject(new f.default(d.K.INVALID_ARGUMENTS,"provider must be a string"))},i.prototype.logout=function(){return T.default(h.ie,"logout call",arguments),/^DISCONNECTED:/.test(s.default.ue[d.j.CONNECTION_STATUS].status)?Promise.reject(new f.default(d.K.INVALID_CALL,"the client is on an unrecoverable disconnection status")):a.default.se("logout")},i.prototype.post=function(e,t){return T.default(h.ie,"post call",arguments),a.default.se("post",arguments)},i.prototype.deleteMessage=function(e){return T.default(h.ie,"deleteMessage call",arguments),a.default.se("deleteMessage",arguments)},i.prototype.startTyping=function(){return T.default(h.ie,"startTyping call",arguments),a.default.se("startTyping")},i.prototype.stopTyping=function(){return T.default(h.ie,"stopTyping call",arguments),a.default.se("stopTyping")},i.prototype.flushChat=function(){return T.default(h.ie,"flushChat call",arguments),a.default.se("flushChat")},i.prototype.setChatEnabled=function(e){return T.default(h.ie,"setChatEnabled call",arguments),a.default.se("setChatEnabled",arguments)},i.prototype.getMute=function(e){return T.default(h.ie,"getMute call",arguments),a.default.se("getMute",arguments)},i.prototype.setMute=function(e,t){return T.default(h.ie,"setMute call",arguments),a.default.se("setMute",arguments)},i.prototype.setLoggerLevel=function(e){return T.default(h.ie,"setLoggerLevel call",arguments),a.default.se("setLoggerLevel",arguments)},i.prototype.reload=function(){T.default(h.ie,"reload call",arguments),a.default.se("reload"),a.default.reset(),r.default.he(),c.default.m=v.Y.Warn},i.prototype.editUserProfile=function(){var e;return T.default(h.ie,"editUserProfile call",arguments),c.default.I.custom_auth.enabled?Promise.reject(new f.default(d.K.INVALID_CALL,"not supported using custom auth")):(e=s.default.ue[d.j.LOGIN_STATUS].user)?r.default.editUserProfile({userId:e.id,siteContext:this.siteContext,siteKey:this.V},this.G):Promise.reject(new f.default(d.K.NOT_AUTHENTICATED,"the user is not authenticated"))},i.prototype.reportMessage=function(e,t,n){return T.default(h.ie,"reportMessage call",arguments),a.default.se("reportMessage",arguments)},i.prototype.registerUserConsent=function(){return T.default(h.ie,"registerUserConsent call",arguments),a.default.se("registerUserConsent")},i.prototype.createPoll=function(e,t,n){return T.default(h.ie,"createPoll call",arguments),a.default.se("createPoll",arguments)},i.prototype.closePoll=function(e){return void 0===e&&(e=!1),T.default(h.ie,"closePoll call",arguments),a.default.se("closePoll",arguments)},i.prototype.sendVote=function(e){return T.default(h.ie,"sendVote call",arguments),a.default.se("sendVote",arguments)},i.prototype.getPollVote=function(){return T.default(h.ie,"getPollVote call",arguments),a.default.se("getPollVote")},n.default=i},{10:10,11:11,12:12,13:13,14:14,2:2,3:3,4:4,5:5,6:6,8:8,9:9}],2:[function(e,t,n){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=(Object.defineProperty(n,"t",{value:!0}),e(3)),f=e(4),E=e(9),d=e(12),v=e(14),h=e(13),T=e(4),_=e(10),e=(r.prototype.Te=function(t,n){var r=this;this.le=!0,this.promise.resolve=function(e){r.reset(),t(e)},this.promise.reject=function(e){r.reset(),n(e)}},r.prototype.reset=function(){this.le=!1,this.promise.resolve=void 0,this.promise.reject=void 0,E.default.se("stopProxyLogin"),this.fe&&this.fe.close(),this.fe=void 0,this._e&&clearInterval(this._e),this._e=void 0},r.prototype.Ae=function(e,t){var n=l.default.I.widget,e={site:e,lang:n.language};return!1!==t&&(e.wl=t,e.logo=n.logo_url,e.bgColor=n.color_internal_background),e},r.prototype.editUserProfile=function(e,t){var n=e.userId,r=e.siteKey,e=e.siteContext,n=v.be(l.default.D,"email-signin/step1",a({action:"EDIT_PROFILE",userId:n,siteKey:r},this.Ae(e,t)));return window.open(n,"login")?Promise.resolve({}):Promise.reject(new d.default(h.K.BLOCKED,"authentication popup was blocked"))},r.prototype.start=function(e){var r=this,n=e.Ee,i=e.de,o=e.siteKey,u=e.siteContext,s=e.provider,c=e.ve;return new Promise(function(e,t){r.Te(e,t),E.default.se("startProxyLogin").then(function(e){r.promise.resolve(e)}).catch(function(e){var t,n;null!=(n=(t=r.promise).reject)&&n.call(t,e)});e=l.default.I.widget,t=v.be(l.default.D,n?"no-registration-signin":"oauth-signin",a({provider:i?f.default.ae:n?null:s,siteKey:i?o:null,cm:i||n?e.consent_message:null},r.Ae(u,c)));r.fe=window.open(t,"login"),r.fe?r._e=window.setInterval(function(e){try{r.fe&&!r.fe.opener&&void 0!==l.default.C.file_name?r.promise.reject(new d.default("TECHNICAL_PROBLEM","cannot access authentication page")):r.fe&&r.fe.closed&&r.promise.reject(new d.default("ABORTED","closed authentication window"))}catch(e){_.default(T.Oe,e)}},r.we):r.promise.reject(new d.default(h.K.BLOCKED,"authentication popup was blocked"))})},r.prototype.he=function(){this.le&&this.promise.reject(new d.default("ABORTED","reload requested"))},r);function r(){this.ce=["FACEBOOK","TWITTER","GOOGLE","LINKEDIN"],this.we=1500,this.le=!1,this.promise={resolve:void 0,reject:void 0},this.fe=void 0,this._e=void 0}n.default=new e},{10:10,12:12,13:13,14:14,3:3,4:4,9:9}],3:[function(e,t,n){Object.defineProperty(n,"t",{value:!0});e=e(5);function r(){}r.Pe="PROXY",r.m=e.Y.Warn,r.ge=Number("5"),r.Ne=Number("6"),r.Re="NOW4REAL",r.oe=["COUNTER_PAGE_VIEWERS","COUNTER_PAGE_CHATTERS","COUNTER_CHAT_TYPING"],n.default=r},{5:5}],4:[function(e,t,n){Object.defineProperty(n,"t",{value:!0}),n.Oe=n.Ie=n.ie=n.B=void 0;e=e(5),n.B=e.Y.Debug,n.ie=e.Y.Info,n.Ie=e.Y.Warn,n.Oe=e.Y.Error,r.$="resolve",r.Z="reject",r.ae="EMAIL",e=r;function r(){}n.default=e},{5:5}],5:[function(e,t,n){Object.defineProperty(n,"t",{value:!0}),n.Y=void 0,(n=n.Y||(n.Y={}))[n.Debug=1]="Debug",n[n.Info=2]="Info",n[n.Warn=3]="Warn",n[n.Error=4]="Error",n[n.Off=5]="Off"},{}],6:[function(e,t,n){var o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],u=0,s=o.length;u<s;u++,i++)r[i]=o[u];return r},u=(Object.defineProperty(n,"t",{value:!0}),e(11)),r=e(13),i=e(4),s=e(10);function c(){}c.q=function(e,t){if(u.default.O(c.J[e]))try{c.J[e](t)}catch(e){s.default(i.Oe,e.message)}},c.U=function(e,t,n){var r=c.ue[e];if(null==t)r=t;else if(u.default.isArray(t))u.default.isArray(r)?r.splice.apply(r,o([0,r.length],t)):r=t;else if(u.default.Ce(t))if(u.default.Ce(r)){for(var i in t)r[i]=t[i];for(var i in r)i in t||delete r[i]}else r=t;else r=t;c.ue[e]=r,n[e]=r},c.ee=function(e,t){-1===[r.j.CONNECTION_STATUS,r.j.LOGIN_STATUS,r.j.PARAMETERS,r.j.AUTHORIZATION].indexOf(e)&&(e===r.j.LIST_CHAT_MESSAGES||e===r.j.LIST_CHAT_TYPING||-1<e.indexOf("RANKING")?c.ue[e]=[]:-1<e.indexOf("HEATMAP")?c.ue[e]={}:-1<e.indexOf("COUNTER")?c.ue[e]={value:null}:c.ue[e]=null,t[e]=c.ue[e])},c.te=function(e,t){-1===[r.j.CONNECTION_STATUS,r.j.LOGIN_STATUS,r.j.PARAMETERS,r.j.AUTHORIZATION].indexOf(e)&&(delete c.ue[e],delete t[e])},c.reset=function(e){c.M=[],c.g=null,c.J={},c.H=null;for(var t=0,n=Object.keys(c.ue);t<n.length;t++){var r=n[t];c.te(r,e)}},c.M=[],c.J={},c.ue={},n.default=c},{10:10,11:11,13:13,4:4}],7:[function(e,t,n){Object.defineProperty(n,"t",{value:!0});n=e(1);window.now4real=n.default.h()},{1:1}],8:[function(e,t,n){Object.defineProperty(n,"t",{value:!0});var r=e(9),i=e(4),o=e(10);function u(){}u.prototype.getItem=function(e){return o.default(i.ie,"browserPreferences.getItem call",arguments),r.default.se("browserPreferences.getItem",arguments)},u.prototype.setItem=function(e,t,n){return o.default(i.ie,"browserPreferences.setItem call",arguments),r.default.se("browserPreferences.setItem",arguments)},u.prototype.removeItem=function(e){return o.default(i.ie,"browserPreferences.removeItem call",arguments),r.default.se("browserPreferences.removeItem",arguments)},n.default=u},{10:10,4:4,9:9}],9:[function(e,t,n){Object.defineProperty(n,"t",{value:!0});var f=e(3),i=e(6),E=e(12),e=(r.prototype.me=function(){return this.pe++},r.prototype._=function(e){var l=this;this.Se=e,window.addEventListener("message",function(e){var t=e.origin||e.originalEvent.origin,n=f.default.L;if(!n||t===n){var t=e.data,n=t.cmd,r=t.payload;switch(n){case"load":l.Se.P(r);break;case"error":l.Se.A(r);break;case"subjectUpdate":l.Se.k(r);break;case"siteStatusUpdate":l.Se.F(r);break;case"response":var i,o,u,s,c=r.id,a=l.Le[c];a&&(l.Se.X(r),s=r.data,i=r.res,(o=s)&&(s.subject&&delete s.subject,u=s.code,s=s.message,u)&&s&&(o=new E.default(u,s)),a[i](o),delete l.Le[c]);break;case"loggerEdit":l.Se.W(r)}}},!1)},r.prototype.se=function(e,t){var n=this,r=this.me();return i.default.g.postMessage({id:r,cmd:e,payload:t&&Array.from(t),iss:"PROXY"},f.default.L),"reload"===e||"stopProxyLogin"===e?Promise.resolve():new Promise(function(e,t){n.Le[r]={resolve:e,reject:t}})},r.prototype.reset=function(){for(var e=this.pe=0,t=Object.keys(this.Le);e<t.length;e++){var n=t[e];this.Le[n].reject(new E.default("ABORTED","reload requested")),delete this.Le[n]}},r);function r(){this.pe=0,this.Le={}}n.default=new e},{12:12,3:3,6:6}],10:[function(e,t,n){var o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],u=0,s=o.length;u<s;u++,i++)r[i]=o[u];return r},u=(Object.defineProperty(n,"t",{value:!0}),e(3)),s=e(5);function c(e,t){return t.length>=e?t:t+new Array(e-t.length+1).join(" ")}var a="[NOW4REAL-"+c(u.default.Ne,u.default.Pe)+"]";n.default=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i=u.default.m;window.console&&i!==s.Y.Off&&i<=e&&(i=e!==s.Y.Error&&e!==s.Y.Warn||void 0===console.error?"log":"error",e=c(u.default.ge,s.Y[e]),e=a+" "+e+" | "+t,0!==n.length?console[i].apply(console,o([e],n)):console[i](e))}},{3:3,5:5}],11:[function(e,t,n){Object.defineProperty(n,"t",{value:!0});var r=e(3),i=e(10),o=e(4);function u(){}u.N=function(){var e=document.getElementById(r.default.Re);return e?e.contentWindow:(i.default(o.Oe,"No NOW4REAL iFrame found"),null)},u.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},u.O=function(e){return"function"==typeof e},u.Ce=function(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)},n.default=u},{10:10,3:3,4:4}],12:[function(e,t,n){function r(e,t){this.code=e,this.message=t}Object.defineProperty(n,"t",{value:!0}),r.prototype.toString=function(){return this.code+" - "+this.message},n.default=r},{}],13:[function(e,t,n){var r;Object.defineProperty(n,"t",{value:!0}),n.j=n.K=void 0,(r=n.K||(n.K={})).ABORTED="ABORTED",r.ACCESS_DENIED="ACCESS_DENIED",r.ALREADY_PRESENT="ALREADY_PRESENT",r.ALREADY_REPORTED="ALREADY_REPORTED",r.ALREADY_STARTED="ALREADY_STARTED",r.BLOCKED="BLOCKED",r.CANNOT_MODERATE="CANNOT_MODERATE",r.CHAT_DISABLED="CHAT_DISABLED",r.CLOSED="CLOSED",r.CREDIT_EXHAUSTED="CREDIT_EXHAUSTED",r.CURRENTLY_DISABLED="CURRENTLY_DISABLED",r.DISCONNECTED="DISCONNECTED",r.INVALID_ARGUMENTS="INVALID_ARGUMENTS",r.INVALID_CALL="INVALID_CALL",r.MISMATCH="MISMATCH",r.NOT_AUTHENTICATED="NOT_AUTHENTICATED",r.NOT_AUTHORIZED="NOT_AUTHORIZED",r.NOT_FOUND="NOT_FOUND",r.QUOTA_EXCEEDED="QUOTA_EXCEEDED",r.SERVICE_UNAVAILABLE="SERVICE_UNAVAILABLE",r.TECHNICAL_PROBLEM="TECHNICAL_PROBLEM",r.TOO_FREQUENT="TOO_FREQUENT",r.USER_MUTED="USER_MUTED",(r=n.j||(n.j={})).AUTHORIZATION="AUTHORIZATION",r.CONNECTION_STATUS="CONNECTION_STATUS",r.COUNTER_CHAT_MESSAGES="COUNTER_CHAT_MESSAGES",r.COUNTER_CHAT_TYPING="COUNTER_CHAT_TYPING",r.COUNTER_PAGE_CHATTERS="COUNTER_PAGE_CHATTERS",r.COUNTER_PAGE_VIEWERS="COUNTER_PAGE_VIEWERS",r.COUNTER_SITE_CHATTERS="COUNTER_SITE_CHATTERS",r.COUNTER_SITE_VIEWERS="COUNTER_SITE_VIEWERS",r.HEATMAP_PAGE_VIEWERS="HEATMAP_PAGE_VIEWERS",r.HEATMAP_SITE_VIEWERS="HEATMAP_SITE_VIEWERS",r.LIST_CHAT_MESSAGES="LIST_CHAT_MESSAGES",r.LIST_CHAT_TYPING="LIST_CHAT_TYPING",r.LOGIN_STATUS="LOGIN_STATUS",r.PARAMETERS="PARAMETERS",r.POLL="POLL",r.POLL_STATUS="POLL_STATUS",r.RANKING_PAGE_CHATTERS="RANKING_PAGE_CHATTERS",r.RANKING_PAGE_VIEWERS="RANKING_PAGE_VIEWERS"},{}],14:[function(e,t,n){Object.defineProperty(n,"t",{value:!0}),n.be=n.R=void 0,n.R=function(e,t){var n,r,i,o=(e=JSON.parse(e)).config.page_context;return(o=o&&o.query)&&("string"==typeof(i=o)||i instanceof String)&&(n=i=void 0,i=(r=o.match(/.*\/([igmsuy]+)$/))?(n=r[1],o.slice(1,-(n.length+1))):(n="",o.slice(1,-1)),e.config.page_context.query=new RegExp(i,n)),t&&"fn"===(null==(r=e.config.custom_auth)?void 0:r.jwt)&&(e.config.custom_auth.jwt=t.custom_auth.jwt),e},n.be=function(e,t,n){var r=e+"#/"+t;return["site","lang","action","userId","siteKey","provider","wl","cm","bgColor","logo"].forEach(function(e,t){null!=n&&n[e]&&(r+=(t?"&":"?")+e+"="+encodeURIComponent(n[e]))}),r}},{}]},{},[7]);