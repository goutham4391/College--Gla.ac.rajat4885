(function(t){function e(e){for(var r,i,o=e[0],l=e[1],c=e[2],h=0,p=[];h<o.length;h++)i=o[h],n[i]&&p.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=s[0]))}return t}var r={},n={app:0},a=[];function i(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=r,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d"),s("75ab"),s("6d93");var r=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scopedsearch"},[s("div",{staticClass:"row standardContent search-container"},[s("div",{staticClass:"maincontent fullwidth widesearch columns content medium-12 large-12",attrs:{id:"content_12345"}},[s("form",{attrs:{id:"site-search",action:""}},[s("div",{staticClass:"column large-10 medium-10 small-8"},[s("div",{attrs:{id:"search-label"}},[t._v("Search the University website")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputterm,expression:"inputterm"}],attrs:{autofocus:"",id:"search_input","aria-labelledby":"search-label",title:"search",name:"query",type:"search",placeholder:t.placeholder},domProps:{value:t.inputterm},on:{input:function(e){e.target.composing||(t.inputterm=e.target.value)}}})]),t._m(0)])])]),t.term?s("div",{staticClass:"row standardContent",attrs:{id:"scoped-search-results"}},[s("div",{staticClass:"results maincontent columns content eight large-8 medium-8",attrs:{id:"content_123457"}},[s("p",[s("a",{attrs:{href:"https://www.gla.ac.uk/search/?query="+t.term}},[t._v("Show results from the rest of the site")])]),t._l(t.exhibits,(function(e){return s("div",{key:e.id,staticClass:"row"},[s("div",{staticClass:"column large-12"},[s("div",{staticClass:"result"},[s("h3",[s("a",{attrs:{href:"http://uog-search.clients.uk.funnelback.com"+e.linkUrl}},[s("span",{domProps:{innerHTML:t._s(e.titleHtml.replace("University of Glasgow - ",""))}})])]),s("p",{staticClass:"fb-result-url"},[s("a",{attrs:{href:"http://uog-search.clients.uk.funnelback.com"+e.linkUrl}},[t._v(t._s(e.displayUrl))])]),s("p",{domProps:{innerHTML:t._s(e.descriptionHtml)}}),s("div",{staticClass:"clearfix"})])])])})),t._l(t.results,(function(e){return s("div",{key:e.id,staticClass:"row"},[s("div",{staticClass:"column large-12"},[s("div",{staticClass:"result"},[s("h3",[s("a",{attrs:{href:"http://uog-search.clients.uk.funnelback.com"+e.clickTrackingUrl}},[s("span",{domProps:{innerHTML:t._s(e.title.replace("University of Glasgow - ",""))}})])]),s("p",{staticClass:"fb-result-url"},[s("a",{attrs:{href:"http://uog-search.clients.uk.funnelback.com"+e.clickTrackingUrl}},[t._v(t._s(e.displayUrl))])]),s("p",{domProps:{innerHTML:t._s(e.summary)}}),s("div",{staticClass:"clearfix"})])])])})),!t.noResults&&t.term&&t.resultsSummary.fullyMatching>10?s("div",{staticStyle:{padding:"2rem","text-align":"center"}},[s("button",{staticClass:"button showmore",on:{click:function(e){return t.update()}}},[t._v(t._s(t.resultsSummary.currEnd)+" of "+t._s(t.resultsSummary.totalMatching)+" - show more")])]):t._e(),t.noResults?s("p",[t._v("No results for "+t._s(t.term))]):t._e(),t.spell?s("p",[t._v("did you mean "),s("a",{attrs:{href:"?query="+t.spell}},[t._v(t._s(t.spell))])]):t._e()],2),t.noContextualNavigation?t._e():s("div",{staticClass:"columns content four large-4 medium-4 links delay",attrs:{"data-sticky-container":""}},t._l(t.contextualNavigation,(function(e){return s("span",{key:e.id},["type"==e.name?s("h2",[t._v("Types of "+t._s(t.term))]):"topic"==e.name?s("h2",[t._v("Topics")]):t._e(),"site"!=e.name?s("ul",t._l(e.clusters.slice(0,3),(function(r){return s("li",{key:r.id},[s("a",{attrs:{"aria-label":e.name,href:"?query="+r.query}},[t._v(t._s(r.query))])])})),0):t._e()])})),0)]):t._e()])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"column large-2 medium-2 small-4"},[s("button",{attrs:{id:"fb-search-button"}},[t._v("Go")])])}],i=(s("386d"),{name:"ScopedSearch",data:function(){return{term:"",scope:"",collection:"",results:[],exhibits:[],contextualNavigation:[],resultsSummary:{},noResults:!1,noContextualNavigation:!1,spell:"",searching:!1,start_rank:0}},created:function(){this.term=new URLSearchParams(window.location.search).get("query"),this.scope=scope,this.collection=""==collection?"glasgow-staff-and-website-meta":collection;var t=new URLSearchParams(window.location.search).get("scope");t&&(this.scope=t),this.placeholder=placeholder,this.inputterm=this.term,this.search()},methods:{search:function(){var t=this;this.searching=!0,this.results=[],this.exhibits=[],this.term&&fetch("https://uog-search.clients.uk.funnelback.com/s/search.json?collection="+this.collection+"&start_rank="+this.start_rank+"&query="+encodeURIComponent(this.term)+"&scope="+encodeURIComponent(this.scope)).then((function(t){return t.json()})).then((function(e){t.searching=!1,t.results=e.response.resultPacket.results,t.exhibits=e.response.curator.exhibits,t.resultsSummary=e.response.resultPacket.resultsSummary,null!==e.response.resultPacket.spell&&(t.spell=e.response.resultPacket.spell.text),null!==e.response.resultPacket.contextualNavigation&&(t.contextualNavigation=e.response.resultPacket.contextualNavigation.categories),t.noResults=0===t.results.length,t.noContextualNavigation=1===e.response.resultPacket.contextualNavigation.categories.length})).then((function(){setTimeout((function(){}),200)}))},update:function(){var t=this;this.searching=!0,this.start_rank=this.start_rank+10,fetch("https://uog-search.clients.uk.funnelback.com/s/search.json?collection=glasgow-staff-and-website-meta&start_rank="+this.start_rank+"&query="+encodeURIComponent(this.term)+"&scope="+encodeURIComponent(this.scope)).then((function(t){return t.json()})).then((function(e){t.searching=!1,t.results=t.results.concat(e.response.resultPacket.results),t.resultsSummary=e.response.resultPacket.resultsSummary,t.noResults=0===e.response.resultPacket.results.length}))}}}),o=i,l=s("2877"),c=Object(l["a"])(o,n,a,!1,null,null,null),u=c.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.js.map