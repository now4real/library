(self.webpackChunkn4rWidget=self.webpackChunkn4rWidget||[]).push([[109],{3052:function(e,t,n){"use strict";var r=n(491),i=n(4053),a=n(2138),s=n(2358);const u=r.v.UNSUB_GRACE_PERIOD;t.Z={data(){return{activated:!1,timerId:void 0}},activated(){this.activated=!0,(0,s.Z)(a.s.Debug,this.subject+" activated")},deactivated(){this.activated=!1,(0,s.Z)(a.s.Debug,this.subject+" deactivated")},computed:{isActive(){return i.Z.openedFrameConfig&&this.activated}},watch:{isActive(e,t){e?this.timerId?(clearTimeout(this.timerId),this.timerId=void 0,(0,s.Z)(a.s.Debug,this.subject+" greace unset")):this.subscribe():(this.timerId=setTimeout((()=>{(0,s.Z)(a.s.Debug,this.subject+" greace expired"),this.timerId=void 0,this.unsubscribe().then(this.resetState)}),u),(0,s.Z)(a.s.Debug,`${this.subject} ${u}ms greace set`))}}}},2120:function(e,t,n){"use strict";function r(e){let t=document.createElement("a");return t.href=e,t}n.d(t,{e:function(){return r}})},8817:function(){},7837:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(4053),i=n(896),a=n(491),s=n(9814),u=n(3052),o=n(4780),c=n(2120),l=n(8),g=n(1099),d=n(7157),h=n(2138),b=n(2358),S={name:"ranking",mixins:[u.Z,o.Z],data(){return{store:r.Z,currentRankingSubject:now4real.Subject.RANKING_PAGE_VIEWERS,currentPageCounterSubject:now4real.Subject.COUNTER_PAGE_VIEWERS,currentSiteCounterSubject:now4real.Subject.COUNTER_SITE_VIEWERS,rankingForegroundSubject:now4real.Subject.RANKING_PAGE_VIEWERS,rankingActiveSubject:now4real.Subject.RANKING_PAGE_CHATTERS,pageCounterForegroundSubject:now4real.Subject.COUNTER_PAGE_VIEWERS,siteCounterForegroundSubject:now4real.Subject.COUNTER_SITE_VIEWERS,pageCounterActiveSubject:now4real.Subject.COUNTER_PAGE_CHATTERS,siteCounterActiveSubject:now4real.Subject.COUNTER_SITE_CHATTERS,pageUrl:now4real.siteContext+now4real.pageContext,loading:!1,ranking:[],pageCounter:null,siteCounter:null,pageCounterUnwatcher:null,siteCounterUnwatcher:null,showHead:void 0}},created(){this.showHead=a.v.SITE_COUNTER_VIEW},methods:{getNumber:l.D,getSuffix:l._,generateClick(e){(0,s.H)(e.target.firstChild)},labelizeRankingItem(e){const t=e.title,n=e.url?(0,c.e)(e.url):e.url;return"/"===t&&n&&"/"===n.pathname?"Home - "+n.host:t},titleizeRankingItem(e){return this.labelizeRankingItem(e)+"\n"+(e.url||e.key)},subscribe(e,t,n){e=e||this.currentRankingSubject,t=t||this.currentPageCounterSubject,n=n||this.currentSiteCounterSubject,(0,b.Z)(h.s.Debug,`Subscribe ${e}, ${t}, ${n}`),this.loading=!0;let r,i=[now4real.subscribe(e,(e=>{"INIT"===e.data.action&&(this.loading=!1)})).then((t=>{this.ranking=now4real[e]}))];if(this.showHead){let e;n===this.siteCounterForegroundSubject?(e=void 0===this.store[this.siteCounterForegroundSubject]?now4real.subscribe(n,(e=>{this.store[n]=e.data.value})):Promise.resolve(),this.siteCounterUnwatcher=this.$watch(`store.${n}`,(e=>{void 0!==e&&(this.siteCounter=e)}),{immediate:!0})):e=now4real.subscribe(n,(e=>{this.siteCounter=e.data.value})),i.push(e)}return t===this.pageCounterForegroundSubject?(r=void 0===this.store[this.pageCounterForegroundSubject]?now4real.subscribe(t,(e=>{this.store[t]=e.data.value})):Promise.resolve(),this.pageCounterUnwatcher=this.$watch(`store.${t}`,(e=>{void 0!==e&&(this.pageCounter=e)}),{immediate:!0})):r=now4real.subscribe(t,(e=>{this.pageCounter=e.data.value})),i.push(r),Promise.all(i)},unsubscribe(e,t,n){e=e||this.currentRankingSubject,t=t||this.currentPageCounterSubject,n=n||this.currentSiteCounterSubject,(0,b.Z)(h.s.Debug,`Unsubscribe ${e}, ${t}, ${n}`);let r=[now4real.unsubscribe(e)];return this.showHead&&n!==this.siteCounterForegroundSubject&&r.push(now4real.unsubscribe(n)),t!==this.pageCounterForegroundSubject&&r.push(now4real.unsubscribe(t)),Promise.all(r)},resetState(){(0,b.Z)(h.s.Debug,`${this.currentRankingSubject} reset state call`),this.ranking=[],this.showHead&&(this.siteCounterUnwatcher&&(this.siteCounterUnwatcher(),this.siteCounterUnwatcher=null),this.siteCounter=null),this.pageCounterUnwatcher&&(this.pageCounterUnwatcher(),this.pageCounterUnwatcher=null),this.pageCounter=null},rankingRowStyle(e){return{color:e?a.v.COLOR_A:"#000",fontWeight:e?"700":"400"}}},computed:{showNote(){return this.connected&&this.ranking.length>=10},showSwitch(){return a.v.SCOPE===i.Z.PAGE},title(){return this.currentRankingSubject===this.rankingActiveSubject?this.$lang.data.k57:this.currentRankingSubject===this.rankingForegroundSubject?this.$lang.data.k56:void 0},populatedRanking(){return this.ranking.length>0},currentPagePresence(){return this.ranking.filter((e=>e.isCurrentPage)).length>0},foregroundSwitchLabelStyle(){const e=this.currentRankingSubject===this.rankingForegroundSubject;return{borderTop:`1px solid ${a.v.COLOR_A}`,backgroundColor:e?a.v.COLOR_A:a.v.COLOR_B,color:e?a.v.COLOR_B:a.v.COLOR_A}},activeSwitchLabelStyle(){const e=this.currentRankingSubject===this.rankingActiveSubject;return{borderTop:`1px solid ${a.v.COLOR_A}`,backgroundColor:e?a.v.COLOR_A:a.v.COLOR_B,color:e?a.v.COLOR_B:a.v.COLOR_A}}},watch:{currentRankingSubject(e,t){this.unsubscribe(t).then((t=>{this.resetState(),this.currentPageCounterSubject=e===this.rankingForegroundSubject?this.pageCounterForegroundSubject:this.pageCounterActiveSubject,this.currentSiteCounterSubject=e===this.rankingForegroundSubject?this.siteCounterForegroundSubject:this.siteCounterActiveSubject,this.subscribe(e).catch((e=>(0,b.Z)(h.s.Error,e.message)))})).catch((e=>(0,b.Z)(h.s.Error,e.message)))}},components:{AnimatedCounter:g.Z,Spinner:d.Z}},v=(n(3026),(0,n(1900).Z)(S,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"ranking-container"}},[t("div",{staticClass:"ranking-wrapper"},[t("div",{staticClass:"ranking-table-wrapper smooth-scroll"},[t("table",{staticClass:"ranking-table"},[e.showHead?t("thead",[t("tr",[t("th",[e._v("\n                            "+e._s(e.title)+"\n                        ")]),e._v(" "),t("th",[t("animated-counter",{attrs:{value:e.getNumber(e.siteCounter),suffix:e.getSuffix(e.siteCounter),emptySymbol:""}})],1)])]):e._e(),e._v(" "),e.connected&&e.populatedRanking?t("transition-group",{key:"rank",attrs:{name:"flip-list",tag:"tbody"}},e._l(e.ranking,(function(n,r){return t("tr",{key:n.key,style:e.rankingRowStyle(n.isCurrentPage)},[t("td",{staticClass:"focus-el",attrs:{tabindex:n.url?201+r:null},on:{keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.generateClick.apply(null,arguments)}}},[n.url?t("a",{staticClass:"link focus-cont",attrs:{title:e.titleizeRankingItem(n),href:n.url,target:"_parent",tabindex:"-1"}},[e._v(e._s(e.labelizeRankingItem(n))+"\n                            ")]):t("span",{attrs:{title:e.titleizeRankingItem(n)}},[e._v(e._s(e.labelizeRankingItem(n))+"\n                            ")])]),e._v(" "),t("td",[e._v(e._s(n.users))])])})),0):e.connected&&e.loading?t("tbody",{key:"loading-rank"},[t("tr",{staticClass:"ranking-loading"},[t("td",{attrs:{colspan:"2"}},[t("spinner")],1)])]):e.connected?e._e():t("tbody",{key:"no-rank"},[t("tr",{staticClass:"ranking-empty"},[t("td",{attrs:{colspan:"2"}},[e._v(e._s(e.$lang.data.k60))])])]),e._v(" "),t("tbody",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.connected&&!e.currentPagePresence,expression:"!loading && connected && !currentPagePresence"}]},[t("tr",{class:{"current-row":e.populatedRanking},style:e.rankingRowStyle(!0)},[t("td",[t("span",{staticClass:"current-label",attrs:{title:e.pageUrl}},[e._v("\n                                "+e._s(e.$lang.data.k61)+"\n                            ")])]),e._v(" "),t("td",[t("animated-counter",{attrs:{value:e.getNumber(e.pageCounter),suffix:e.getSuffix(e.pageCounter),emptySymbol:""}})],1)])])],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showNote,expression:"showNote"}],staticClass:"ranking-note"},[e._v("\n                "+e._s(e.$lang.data.k62)+"\n            ")])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showSwitch,expression:"showSwitch"}],staticClass:"ranking-switch"},[t("ul",{staticClass:"segmented-control",class:{"segmented-control-disabled":!e.connected}},[t("li",{staticClass:"segmented-control-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRankingSubject,expression:"currentRankingSubject"}],staticClass:"segmented-control-input",attrs:{type:"radio",id:"option-1"},domProps:{value:e.rankingForegroundSubject,checked:e._q(e.currentRankingSubject,e.rankingForegroundSubject)},on:{change:function(t){e.currentRankingSubject=e.rankingForegroundSubject}}}),e._v(" "),t("label",{staticClass:"segmented-control-label",style:e.foregroundSwitchLabelStyle,attrs:{for:"option-1"}},[e._v(e._s(e.$lang.data.k58))])]),e._v(" "),t("li",{staticClass:"segmented-control-item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.currentRankingSubject,expression:"currentRankingSubject"}],staticClass:"segmented-control-input",attrs:{type:"radio",id:"option-2"},domProps:{value:e.rankingActiveSubject,checked:e._q(e.currentRankingSubject,e.rankingActiveSubject)},on:{change:function(t){e.currentRankingSubject=e.rankingActiveSubject}}}),e._v(" "),t("label",{staticClass:"segmented-control-label",style:e.activeSwitchLabelStyle,attrs:{for:"option-2"}},[e._v(e._s(e.$lang.data.k59))])])])])])])}),[],!1,null,null,null)),C=v.exports},3026:function(e,t,n){var r=n(8817);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,n(5346).Z)("f6524164",r,!0,{})}}]);