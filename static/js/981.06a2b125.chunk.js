"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[981],{2639:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(4691),a="Loader_Loader__wqo9C",o=r(184),s=function(){return(0,o.jsx)("div",{className:a,children:(0,o.jsx)(n.s5,{strokeColor:"tomato",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})})}},1510:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(1087),a=r(7689),o="MovieList_movieList__uFrOZ",s="MovieList_movieListItem__6DqRG",u=r(184),c=function(e){var t=e.movies,r=(0,a.TH)();return(0,u.jsx)("ul",{className:o,children:t.map((function(e){return(0,u.jsx)("li",{className:s,children:(0,u.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:r},children:e.title})},e.id)}))})}},5981:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(5861),a=r(9439),o=r(7757),s=r.n(o),u=r(2791),c=r(1087),i=r(7596),p=r(2639),f=r(761),l=r(6355),h="SearchBox_Wrapper__xIhPt",v="SearchBox_Form__Cibl8",d="SearchBox_Input__VRnhF",w="SearchBox_Button__o9TAd",m=r(184),y=function(e){var t=e.query,r=void 0===t?"":t,n=e.onChange,o=(0,u.useState)(""),s=(0,a.Z)(o,2),i=s[0],p=s[1],f=(0,c.lr)(),y=(0,a.Z)(f,1)[0];(0,u.useEffect)((function(){r.length&&p(r),y.toString()&&p(y.get("query"))}),[r,y]);return(0,m.jsx)("div",{className:h,children:(0,m.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault(),n(i)},children:[(0,m.jsx)("button",{className:w,type:"submit",children:(0,m.jsx)(l.U41,{})}),(0,m.jsx)("input",{className:d,type:"text",name:"searchQuery",value:i,placeholder:"Search movies",autoComplete:"off",autoFocus:!0,onChange:function(e){p(e.target.value)}})]})})},x=r(1510),g=function(){var e,t=(0,u.useState)([]),r=(0,a.Z)(t,2),o=r[0],l=r[1],h=(0,c.lr)(),v=(0,a.Z)(h,2),d=v[0],w=v[1],g=(0,u.useState)(!1),_=(0,a.Z)(g,2),k=_[0],b=_[1],Z=null!==(e=d.get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){function e(){return(e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,(0,f.NV)(Z);case 4:t=e.sent,l(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),(0,i.Am)(e.t0.message);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))).apply(this,arguments)}l([]),Z&&function(){e.apply(this,arguments)}()}),[Z]);return(0,m.jsxs)("div",{children:[k&&(0,m.jsx)(p.Z,{}),(0,m.jsx)(y,{onChange:function(e){w(""!==e?{query:e}:{})}}),o.length?(0,m.jsx)(x.Z,{movies:o}):(0,m.jsx)("p",{style:{display:"flex",justifyContent:"center"},children:"No movies were found"})]})}},761:function(e,t,r){r.d(t,{NV:function(){return p},TP:function(){return v},UF:function(){return c},tx:function(){return w},zv:function(){return l}});var n=r(5861),a=r(7757),o=r.n(a),s=r(1243),u="39f90a74d7e7bd41ea5263b14ea99d63";function c(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/day?api_key=".concat(u));case 3:if(0!==(t=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, but nothing was found for your request!");case 6:return e.abrupt("return",t.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&include_adult=false"));case 3:if((r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 3:if((r=e.sent).data.cast.length){e.next=6;break}throw Error("Sorry, no casts were found for your request!");case 6:return e.abrupt("return",r.data.cast);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"?api_key=").concat(u));case 3:if(0!==(r=e.sent).data.length){e.next=6;break}throw Error("Sorry, no movies were found for your request!");case 6:return e.abrupt("return",r.data);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 3:if((r=e.sent).data.results.length){e.next=6;break}throw Error("Sorry, no reviews were found for your request!");case 6:return e.abrupt("return",r.data.results);case 9:if(e.prev=9,e.t0=e.catch(0),!e.t0.request&&!e.t0.response){e.next=15;break}throw Error("Sorry, something went wrong, please try again!");case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=981.06a2b125.chunk.js.map