(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function v(){}function We(n,e){for(const t in e)n[t]=e[t];return n}function Je(n){return n()}function Se(){return Object.create(null)}function D(n){n.forEach(Je)}function He(n){return typeof n=="function"}function O(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function De(n){return Object.keys(n).length===0}function Ge(n,...e){if(n==null)return v;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function $(n,e,t){n.$$.on_destroy.push(Ge(e,t))}function fe(n){return n??""}function N(n,e,t){return n.set(t),e}function a(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function R(n){n.parentNode&&n.parentNode.removeChild(n)}function ze(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function p(n){return document.createElement(n)}function B(n){return document.createTextNode(n)}function b(){return B(" ")}function ke(){return B("")}function E(n,e,t,s){return n.addEventListener(e,t,s),()=>n.removeEventListener(e,t,s)}function Ue(n){return function(e){return e.preventDefault(),n.call(this,e)}}function m(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ke(n){return Array.from(n.childNodes)}function z(n,e){e=""+e,n.data!==e&&(n.data=e)}function W(n,e){n.value=e??""}let oe;function re(n){oe=n}function Ye(){if(!oe)throw new Error("Function called outside component initialization");return oe}function Ie(n){Ye().$$.on_mount.push(n)}const ee=[],de=[];let ne=[];const Le=[],Ze=Promise.resolve();let we=!1;function Qe(){we||(we=!0,Ze.then(Fe))}function $e(n){ne.push(n)}const ye=new Set;let V=0;function Fe(){if(V!==0)return;const n=oe;do{try{for(;V<ee.length;){const e=ee[V];V++,re(e),Ve(e.$$)}}catch(e){throw ee.length=0,V=0,e}for(re(null),ee.length=0,V=0;de.length;)de.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];ye.has(t)||(ye.add(t),t())}ne.length=0}while(ee.length);for(;Le.length;)Le.pop()();we=!1,ye.clear(),re(n)}function Ve(n){if(n.fragment!==null){n.update(),D(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach($e)}}function Xe(n){const e=[],t=[];ne.forEach(s=>n.indexOf(s)===-1?e.push(s):t.push(s)),t.forEach(s=>s()),ne=e}const me=new Set;let G;function _e(){G={r:0,c:[],p:G}}function he(){G.r||D(G.c),G=G.p}function y(n,e){n&&n.i&&(me.delete(n),n.i(e))}function w(n,e,t,s){if(n&&n.o){if(me.has(n))return;me.add(n),G.c.push(()=>{me.delete(n),s&&(t&&n.d(1),s())}),n.o(e)}else s&&s()}function et(n,e){const t={},s={},o={$$scope:1};let r=n.length;for(;r--;){const i=n[r],c=e[r];if(c){for(const l in i)l in c||(s[l]=1);for(const l in c)o[l]||(t[l]=c[l],o[l]=1);n[r]=c}else for(const l in i)o[l]=1}for(const i in s)i in t||(t[i]=void 0);return t}function tt(n){return typeof n=="object"&&n!==null?n:{}}function P(n){n&&n.c()}function M(n,e,t,s){const{fragment:o,after_update:r}=n.$$;o&&o.m(e,t),s||$e(()=>{const i=n.$$.on_mount.map(Je).filter(He);n.$$.on_destroy?n.$$.on_destroy.push(...i):D(i),n.$$.on_mount=[]}),r.forEach($e)}function S(n,e){const t=n.$$;t.fragment!==null&&(Xe(t.after_update),D(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function nt(n,e){n.$$.dirty[0]===-1&&(ee.push(n),Qe(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function q(n,e,t,s,o,r,i,c=[-1]){const l=oe;re(n);const u=n.$$={fragment:null,ctx:[],props:r,update:v,not_equal:o,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Se(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};i&&i(u.root);let f=!1;if(u.ctx=t?t(n,e.props||{},(d,g,..._)=>{const A=_.length?_[0]:g;return u.ctx&&o(u.ctx[d],u.ctx[d]=A)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](A),f&&nt(n,d)),g}):[],u.update(),f=!0,D(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const d=Ke(e.target);u.fragment&&u.fragment.l(d),d.forEach(R)}else u.fragment&&u.fragment.c();e.intro&&y(n.$$.fragment),M(n,e.target,e.anchor,e.customElement),Fe()}re(l)}class J{$destroy(){S(this,1),this.$destroy=v}$on(e,t){if(!He(t))return v;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function st(n){let e,t,s,o;return{c(){e=p("div"),t=p("h1"),s=B(n[1]),m(t,"class","svelte-1aoblqe"),m(e,"class",o="flex justify-center content-center Box "+n[0]+" svelte-1aoblqe")},m(r,i){T(r,e,i),a(e,t),a(t,s)},p(r,[i]){i&2&&z(s,r[1]),i&1&&o!==(o="flex justify-center content-center Box "+r[0]+" svelte-1aoblqe")&&m(e,"class",o)},i:v,o:v,d(r){r&&R(e)}}}function rt(n,e,t){let{color:s,letter:o}=e;return n.$$set=r=>{"color"in r&&t(0,s=r.color),"letter"in r&&t(1,o=r.letter)},[s,o]}class ae extends J{constructor(e){super(),q(this,e,rt,st,O,{color:0,letter:1})}}function ot(n){let e,t,s,o,r,i,c,l,u,f;return s=new ae({props:{letter:"W",color:"Blue"}}),r=new ae({props:{letter:"S",color:"Red"}}),c=new ae({props:{letter:"C",color:"Blue"}}),u=new ae({props:{letter:"R",color:"Red"}}),{c(){e=p("nav"),t=p("a"),P(s.$$.fragment),o=b(),P(r.$$.fragment),i=b(),P(c.$$.fragment),l=b(),P(u.$$.fragment),m(t,"class","mx-auto md:mx-0 flex px-1 py-3 w-max"),m(t,"href",n[0]),m(e,"class","Navbar svelte-jwpo53")},m(d,g){T(d,e,g),a(e,t),M(s,t,null),a(t,o),M(r,t,null),a(t,i),M(c,t,null),a(t,l),M(u,t,null),f=!0},p:v,i(d){f||(y(s.$$.fragment,d),y(r.$$.fragment,d),y(c.$$.fragment,d),y(u.$$.fragment,d),f=!0)},o(d){w(s.$$.fragment,d),w(r.$$.fragment,d),w(c.$$.fragment,d),w(u.$$.fragment,d),f=!1},d(d){d&&R(e),S(s),S(r),S(c),S(u)}}}function lt(n){let e=window.location.href,t=e.indexOf("?")!==-1?e.indexOf("?"):e.length;return[e.substring(0,t)]}class it extends J{constructor(e){super(),q(this,e,lt,ot,O,{})}}const X=[];function K(n,e=v){let t;const s=new Set;function o(c){if(O(n,c)&&(n=c,t)){const l=!X.length;for(const u of s)u[1](),X.push(u,n);if(l){for(let u=0;u<X.length;u+=2)X[u][0](X[u+1]);X.length=0}}}function r(c){o(c(n))}function i(c,l=v){const u=[c,l];return s.add(u),s.size===1&&(t=e(o)||v),c(n),()=>{s.delete(u),s.size===0&&t&&(t(),t=null)}}return{set:o,update:r,subscribe:i}}const ge=K(""),pe=K(""),xe=K(!1),I=K([]),U=K(!1),te=K(null),le=K(null);function ct(n){return/^[a-zA-Z0-9]{3,16}$/.test(n)}function Ne(n){if(/^\d{4}$/.test(n)){let e=parseInt(n,10);if(e>=0&&e<=9999)return!0}}function ve(n,e){return n.length>0&&e.length>0?`Join Room ${n} as ${e}`:n.length>0?`Join Room ${n}`:e.length>0?`Join Room as ${e}`:"Join Room"}function ut(n){let e,t,s,o,r,i,c,l,u,f,d,g,_,A;return{c(){e=p("div"),t=p("form"),s=p("h1"),s.textContent="Join or Create a Room",o=b(),r=p("input"),i=b(),c=p("div"),l=p("input"),u=b(),f=p("button"),f.textContent="Generate New Room",d=b(),g=p("input"),m(s,"id","header"),m(s,"class","mb-3 svelte-44sw79"),m(r,"class","form-control bottom svelte-44sw79"),m(r,"type","text"),m(r,"id","name"),m(r,"size","64"),r.autofocus=!0,m(r,"autocomplete","off"),m(r,"placeholder","Name"),m(l,"class","form-control bottom svelte-44sw79"),m(l,"type","text"),m(l,"id","room"),m(l,"size","64"),m(l,"autocomplete","off"),m(l,"placeholder","Room"),m(f,"type","button"),m(f,"class","btn btn-lg btn-outline top-btn svelte-44sw79"),m(f,"id","generateRoom"),m(c,"id","wrapper"),m(c,"class","svelte-44sw79"),m(g,"class","btn btn-lg btn-outline btm-btn form-control svelte-44sw79"),m(g,"type","submit"),m(g,"id","joinRoom"),m(t,"id","roomForm"),m(t,"class","form-signin svelte-44sw79"),m(e,"id","joiner"),m(e,"class","svelte-44sw79")},m(h,x){T(h,e,x),a(e,t),a(t,s),a(t,o),a(t,r),W(r,n[1]),a(t,i),a(t,c),a(c,l),W(l,n[0]),a(c,u),a(c,f),n[9](f),a(t,d),a(t,g),W(g,n[2]),r.focus(),_||(A=[E(r,"input",n[7]),E(r,"input",n[5]),E(l,"input",n[8]),E(l,"input",n[5]),E(f,"click",n[4]),E(g,"input",n[10]),E(t,"submit",Ue(n[6]))],_=!0)},p(h,[x]){x&2&&r.value!==h[1]&&W(r,h[1]),x&1&&l.value!==h[0]&&W(l,h[0]),x&4&&W(g,h[2])},i:v,o:v,d(h){h&&R(e),n[9](null),_=!1,D(A)}}}function ft(n,e,t){let s,o,r;$(n,xe,C=>t(11,s=C)),$(n,pe,C=>t(12,o=C)),$(n,ge,C=>t(13,r=C));let c=new URLSearchParams(window.location.search).get("room"),l="",u="",f="Join Room",d;Ie(()=>{c!==null&&Ne(c)&&(t(0,l=c),t(2,f=ve(l,u)),t(3,d.disabled=!0,d))});function g(){fetch(window.location.origin+"/generateRoom").then(C=>C.text()).then(C=>{t(0,l=C),t(2,f=ve(C,u)),t(3,d.disabled=!0,d)})}function _(C){let H=C.target;H.id==="name"?t(1,u=H.value.replace(/[^a-zA-Z0-9]/g,"").substring(0,13)):H.id==="room"&&t(0,l=H.value.replace(/\D/g,"").substring(0,4)),t(2,f=ve(l,u))}function A(){if(!u&&!l)return alert("Please enter a name and room number."),!1;if(u){if(!l)return alert("Please enter a room number."),!1}else return alert("Please enter a name."),!1;if(ct(u)){if(!Ne(l))return alert("Room must be a 4 digit number 0000-9999"),!1}else return alert("Name must be 3-16 characters long and may only consist of letters and numbers."),!1;return N(ge,r=u,r),N(pe,o=l,o),N(xe,s=!0,s),!0}function h(){u=this.value,t(1,u)}function x(){l=this.value,t(0,l)}function Y(C){de[C?"unshift":"push"](()=>{d=C,t(3,d)})}function Z(){f=this.value,t(2,f)}return[l,u,f,d,g,_,A,h,x,Y,Z]}class at extends J{constructor(e){super(),q(this,e,ft,ut,O,{})}}function mt(n){let e,t,s,o,r,i,c,l,u,f,d;return{c(){e=p("div"),t=p("div"),s=p("div"),o=p("b"),r=B(n[0]),i=b(),c=p("span"),l=B(n[2]),u=b(),f=p("span"),d=B(n[1]),m(c,"class","ToGrey svelte-xmpfuc"),m(s,"class","flex justify-between w-full"),m(f,"class","FmtWord svelte-xmpfuc"),m(t,"class","w-1/2 m-4 LeftMessage text-opacity-100 svelte-xmpfuc"),m(e,"class","flex flex-col justify-between item-start")},m(g,_){T(g,e,_),a(e,t),a(t,s),a(s,o),a(o,r),a(s,i),a(s,c),a(c,l),a(t,u),a(t,f),a(f,d)},p(g,_){_&1&&z(r,g[0]),_&4&&z(l,g[2]),_&2&&z(d,g[1])},d(g){g&&R(e)}}}function dt(n){let e,t,s,o,r,i,c,l,u,f,d;return{c(){e=p("div"),t=p("div"),s=p("div"),o=p("b"),r=B(n[0]),i=b(),c=p("span"),l=B(n[2]),u=b(),f=p("span"),d=B(n[1]),m(c,"class","ToGrey svelte-xmpfuc"),m(s,"class","flex justify-between w-full"),m(f,"class","FmtWord svelte-xmpfuc"),m(t,"class","w-1/2 m-4 RightMessage text-opacity-100 svelte-xmpfuc"),m(e,"class","flex flex-col justify-between items-end")},m(g,_){T(g,e,_),a(e,t),a(t,s),a(s,o),a(o,r),a(s,i),a(s,c),a(c,l),a(t,u),a(t,f),a(f,d)},p(g,_){_&1&&z(r,g[0]),_&4&&z(l,g[2]),_&2&&z(d,g[1])},d(g){g&&R(e)}}}function gt(n){let e;function t(r,i){return r[3]?dt:mt}let s=t(n),o=s(n);return{c(){o.c(),e=ke()},m(r,i){o.m(r,i),T(r,e,i)},p(r,[i]){s===(s=t(r))&&o?o.p(r,i):(o.d(1),o=s(r),o&&(o.c(),o.m(e.parentNode,e)))},i:v,o:v,d(r){o.d(r),r&&R(e)}}}function pt(n,e,t){let{name:s,message:o,time:r,fromClient:i}=e;return n.$$set=c=>{"name"in c&&t(0,s=c.name),"message"in c&&t(1,o=c.message),"time"in c&&t(2,r=c.time),"fromClient"in c&&t(3,i=c.fromClient)},[s,o,r,i]}class _t extends J{constructor(e){super(),q(this,e,pt,gt,O,{name:0,message:1,time:2,fromClient:3})}}function ht(n){let e,t,s;return{c(){e=p("div"),t=p("b"),s=B(n[0]),m(t,"class","Announcement svelte-14y7aog"),m(e,"class","flex justify-center")},m(o,r){T(o,e,r),a(e,t),a(t,s)},p(o,[r]){r&1&&z(s,o[0])},i:v,o:v,d(o){o&&R(e)}}}function bt(n,e,t){let{message:s}=e;return n.$$set=o=>{"message"in o&&t(0,s=o.message)},[s]}class yt extends J{constructor(e){super(),q(this,e,bt,ht,O,{message:0})}}function Be(n,e,t){const s=n.slice();return s[5]=e[t],s}function vt(n){let e,t;return e=new yt({props:{message:n[5].data.message}}),{c(){P(e.$$.fragment)},m(s,o){M(e,s,o),t=!0},p(s,o){const r={};o&2&&(r.message=s[5].data.message),e.$set(r)},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function wt(n){let e,t;const s=[n[5].data];let o={};for(let r=0;r<s.length;r+=1)o=We(o,s[r]);return e=new _t({props:o}),{c(){P(e.$$.fragment)},m(r,i){M(e,r,i),t=!0},p(r,i){const c=i&2?et(s,[tt(r[5].data)]):{};e.$set(c)},i(r){t||(y(e.$$.fragment,r),t=!0)},o(r){w(e.$$.fragment,r),t=!1},d(r){S(e,r)}}}function Pe(n){let e,t,s,o;const r=[wt,vt],i=[];function c(l,u){return l[5].type==="message"?0:1}return e=c(n),t=i[e]=r[e](n),{c(){t.c(),s=ke()},m(l,u){i[e].m(l,u),T(l,s,u),o=!0},p(l,u){let f=e;e=c(l),e===f?i[e].p(l,u):(_e(),w(i[f],1,1,()=>{i[f]=null}),he(),t=i[e],t?t.p(l,u):(t=i[e]=r[e](l),t.c()),y(t,1),t.m(s.parentNode,s))},i(l){o||(y(t),o=!0)},o(l){w(t),o=!1},d(l){i[e].d(l),l&&R(s)}}}function $t(n){let e,t,s,o,r=n[1],i=[];for(let l=0;l<r.length;l+=1)i[l]=Pe(Be(n,r,l));const c=l=>w(i[l],1,1,()=>{i[l]=null});return{c(){e=p("div");for(let l=0;l<i.length;l+=1)i[l].c();m(e,"class","p-3 Log svelte-aocl5y"),m(e,"id","message-log")},m(l,u){T(l,e,u);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(e,null);n[3](e),t=!0,s||(o=E(e,"scroll",n[2]),s=!0)},p(l,[u]){if(u&2){r=l[1];let f;for(f=0;f<r.length;f+=1){const d=Be(l,r,f);i[f]?(i[f].p(d,u),y(i[f],1)):(i[f]=Pe(d),i[f].c(),y(i[f],1),i[f].m(e,null))}for(_e(),f=r.length;f<i.length;f+=1)c(f);he()}},i(l){if(!t){for(let u=0;u<r.length;u+=1)y(i[u]);t=!0}},o(l){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)w(i[u]);t=!1},d(l){l&&R(e),ze(i,l),n[3](null),s=!1,o()}}}function xt(n,e,t){let s,o,r;$(n,U,l=>t(4,s=l)),$(n,le,l=>t(0,o=l)),$(n,I,l=>t(1,r=l));function i(){let l=o.scrollTop>=o.scrollHeight-o.clientHeight-10;s&&l&&N(U,s=!1,s)}function c(l){de[l?"unshift":"push"](()=>{o=l,le.set(o)})}return[o,r,i,c]}class kt extends J{constructor(e){super(),q(this,e,xt,$t,O,{})}}function Ct(n){let e,t,s,o;return{c(){e=p("div"),t=p("b"),t.textContent="New Message...",m(t,"class","Alert hover:cursor-pointer svelte-1ynzicq"),m(e,"class","flex justify-center mt-[-40px]")},m(r,i){T(r,e,i),a(e,t),s||(o=[E(t,"click",n[0]),E(e,"scroll",n[0])],s=!0)},p:v,i:v,o:v,d(r){r&&R(e),s=!1,D(o)}}}function Rt(n,e,t){let s,o;$(n,U,i=>t(1,s=i)),$(n,le,i=>t(2,o=i));function r(){o.scrollTo(0,o.scrollHeight),N(U,s=!1,s)}return[r]}class jt extends J{constructor(e){super(),q(this,e,Rt,Ct,O,{})}}function Tt(n){let e,t,s,o,r,i,c;return{c(){e=p("div"),t=p("div"),s=p("textarea"),o=b(),r=p("button"),r.textContent="Send",m(s,"class","TextArea svelte-jup3e6"),m(s,"rows","1"),m(s,"placeholder","Type a message..."),s.autofocus=!0,m(r,"class","Button svelte-jup3e6"),m(t,"class","MessageBox svelte-jup3e6"),m(e,"class","ChatContainer svelte-jup3e6")},m(l,u){T(l,e,u),a(e,t),a(t,s),W(s,n[0]),a(t,o),a(t,r),s.focus(),i||(c=[E(s,"input",n[3]),E(s,"keydown",n[2]),E(r,"click",n[1])],i=!0)},p(l,[u]){u&1&&W(s,l[0])},i:v,o:v,d(l){l&&R(e),i=!1,D(c)}}}function At(n,e,t){let s,o,r,i;$(n,le,g=>t(5,s=g)),$(n,I,g=>t(6,o=g)),$(n,ge,g=>t(7,r=g)),$(n,te,g=>t(8,i=g));let c=0,l="";function u(){if(!i||l.replace(/^]s+/,"").length===0||c>=3){if(c>=3){let A={type:"announcement",data:{name:"server",type:"cooldown",message:"You are on cooldown try again in 5 seconds."}};N(I,o=[...o,A],o),setTimeout(()=>{s.scrollTo(0,s.scrollHeight)},0)}return!1}c++,setTimeout(()=>{c--},5e3),i.send(l);let _={type:"message",data:{name:r,time:new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),message:l,fromClient:!0}};return N(I,o=[...o,_],o),t(0,l=""),setTimeout(()=>{s.scrollTo(0,s.scrollHeight)},0),!0}function f(g){g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),u())}function d(){l=this.value,t(0,l)}return[l,u,f,d]}class Mt extends J{constructor(e){super(),q(this,e,At,Tt,O,{})}}function Ee(n){let e,t;return e=new jt({}),{c(){P(e.$$.fragment)},m(s,o){M(e,s,o),t=!0},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function St(n){let e,t,s,o,r,i;t=new kt({});let c=n[0]&&Ee();return r=new Mt({}),{c(){e=p("div"),P(t.$$.fragment),s=b(),c&&c.c(),o=b(),P(r.$$.fragment),m(e,"class","col-span-3 relative")},m(l,u){T(l,e,u),M(t,e,null),a(e,s),c&&c.m(e,null),a(e,o),M(r,e,null),i=!0},p(l,[u]){l[0]?c?u&1&&y(c,1):(c=Ee(),c.c(),y(c,1),c.m(e,o)):c&&(_e(),w(c,1,1,()=>{c=null}),he())},i(l){i||(y(t.$$.fragment,l),y(c),y(r.$$.fragment,l),i=!0)},o(l){w(t.$$.fragment,l),w(c),w(r.$$.fragment,l),i=!1},d(l){l&&R(e),S(t),c&&c.d(),S(r)}}}function Lt(n,e,t){let s;return $(n,U,o=>t(0,s=o)),[s]}class Nt extends J{constructor(e){super(),q(this,e,Lt,St,O,{})}}function Oe(n,e,t){const s=n.slice();return s[12]=e[t],s}function qe(n){let e,t=n[12]+"",s,o;return{c(){e=p("p"),s=B(t),o=b(),m(e,"class","Participant svelte-isfngi")},m(r,i){T(r,e,i),a(e,s),a(e,o)},p(r,i){i&2&&t!==(t=r[12]+"")&&z(s,t)},d(r){r&&R(e)}}}function Bt(n){let e,t,s,o,r,i,c,l,u,f,d,g,_,A,h,x,Y,Z,C,H,Ce,Re,ie,ce,je,se,Te,ue,be,Ae,Q=n[1],L=[];for(let k=0;k<Q.length;k+=1)L[k]=qe(Oe(n,Q,k));return{c(){e=p("div"),t=p("h3"),t.textContent="Room Information",s=b(),o=p("hr"),r=b(),i=p("p"),c=p("b"),c.textContent="Room Number: ",l=B(n[4]),u=b(),f=p("p"),d=p("b"),d.textContent="Room Count: ",g=B(n[0]),_=b(),A=p("p"),A.innerHTML="<b>Room Participants:</b>",h=b(),x=p("div");for(let k=0;k<L.length;k+=1)L[k].c();Y=b(),Z=p("p"),Z.innerHTML="<b>Invite Link:</b>",C=b(),H=p("p"),Ce=B(n[5]),Re=b(),ie=p("i"),je=b(),se=p("b"),Te=B("Copied!"),m(t,"class","text-center font-semibold text-3xl my-4"),m(o,"class","mb-4 border-gray-400"),m(i,"class","svelte-isfngi"),m(f,"class","svelte-isfngi"),m(A,"class","svelte-isfngi"),m(x,"class","Participants svelte-isfngi"),m(Z,"class","mt-3 mb-1 svelte-isfngi"),m(ie,"class",ce=fe(n[2])+" svelte-isfngi"),m(H,"class","mb-0 Link svelte-isfngi"),m(se,"class",ue=fe(n[3])+" svelte-isfngi"),m(e,"class","col-span-1 SidePanel svelte-isfngi")},m(k,F){T(k,e,F),a(e,t),a(e,s),a(e,o),a(e,r),a(e,i),a(i,c),a(i,l),a(e,u),a(e,f),a(f,d),a(f,g),a(e,_),a(e,A),a(e,h),a(e,x);for(let j=0;j<L.length;j+=1)L[j]&&L[j].m(x,null);a(e,Y),a(e,Z),a(e,C),a(e,H),a(H,Ce),a(H,Re),a(H,ie),a(e,je),a(e,se),a(se,Te),be||(Ae=E(H,"click",n[6]),be=!0)},p(k,[F]){if(F&16&&z(l,k[4]),F&1&&z(g,k[0]),F&2){Q=k[1];let j;for(j=0;j<Q.length;j+=1){const Me=Oe(k,Q,j);L[j]?L[j].p(Me,F):(L[j]=qe(Me),L[j].c(),L[j].m(x,null))}for(;j<L.length;j+=1)L[j].d(1);L.length=Q.length}F&4&&ce!==(ce=fe(k[2])+" svelte-isfngi")&&m(ie,"class",ce),F&8&&ue!==(ue=fe(k[3])+" svelte-isfngi")&&m(se,"class",ue)},i:v,o:v,d(k){k&&R(e),ze(L,k),be=!1,Ae()}}}function Pt(n,e,t){let s,o;$(n,I,h=>t(7,s=h)),$(n,pe,h=>t(4,o=h));let r=0,i=[],c="fa-regular fa-clipboard Clipboard",l="hidden",u=window.location.href,f=u.indexOf("?")!==-1?u.indexOf("?"):u.length,d=u.substring(0,f)+`?room=${o}`;function g(){fetch(window.location.origin+`/info/${o}`).then(h=>h.json()).then(h=>{h.error!=="true"&&(t(0,r=h.roomCount),t(1,i=h.participants))}).catch(h=>console.log(h))}function _(h){if(s.length===1&&s[0].data.type==="join"){g();return}let x=s[s.length-1];if(x!==void 0&&x.type==="announcement"){if(x.data.type==="join")t(0,r+=1),t(1,i=[...i,x.data.name]);else if(x.data.type==="leave"){t(0,r-=1);const Y=i.indexOf(x.data.name);i.splice(Y,1),t(1,i)}}}function A(){navigator.clipboard.writeText(d).then(()=>{t(2,c="fa-solid fa-check Clipboard"),t(3,l="ps-2"),setTimeout(()=>{t(2,c="fa-regular fa-clipboard Clipboard"),t(3,l="hidden")},1e3)}).catch()}return n.$$.update=()=>{n.$$.dirty&128&&_()},[r,i,c,l,o,d,A,s]}class Et extends J{constructor(e){super(),q(this,e,Pt,Bt,O,{})}}function Ot(n){let e,t,s,o,r;return t=new Nt({}),o=new Et({}),{c(){e=p("div"),P(t.$$.fragment),s=b(),P(o.$$.fragment),m(e,"class","grid grid-cols-4 gap-5 Room svelte-47q47q")},m(i,c){T(i,e,c),M(t,e,null),a(e,s),M(o,e,null),r=!0},p:v,i(i){r||(y(t.$$.fragment,i),y(o.$$.fragment,i),r=!0)},o(i){w(t.$$.fragment,i),w(o.$$.fragment,i),r=!1},d(i){i&&R(e),S(t),S(o)}}}function qt(n,e,t){let s,o,r,i,c,l;$(n,I,f=>t(0,s=f)),$(n,te,f=>t(1,o=f)),$(n,U,f=>t(2,r=f)),$(n,le,f=>t(3,i=f)),$(n,pe,f=>t(4,c=f)),$(n,ge,f=>t(5,l=f));function u(){if(window.WebSocket)N(te,o=new WebSocket(`ws://${window.location.host}/ws/${l}/${c}`),o),N(te,o.onmessage=function(f){let d=JSON.parse(f.data);d.type==="message"&&(d.data.time=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),d.data.fromClient=!1);let g=i.scrollHeight===i.scrollTop+i.clientHeight;N(I,s=[...s,d],s),setTimeout(()=>{g?i.scrollTo(0,i.scrollHeight):(console.log("we made it here"),N(U,r=!0,r))},0)},o),N(te,o.onclose=function(){let f={type:"announcement",data:{type:"close",message:"Connection closed"}};N(I,s=[...s,f],s),N(te,o=null,o)},o);else{let f={type:"announcement",data:{type:"close",message:"Your browser does not support WebSockets."}};N(I,s=[...s,f],s)}}return Ie(()=>{u()}),[]}class Jt extends J{constructor(e){super(),q(this,e,qt,Ot,O,{})}}function Ht(n){let e,t;return e=new Jt({}),{c(){P(e.$$.fragment)},m(s,o){M(e,s,o),t=!0},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function zt(n){let e,t;return e=new at({}),{c(){P(e.$$.fragment)},m(s,o){M(e,s,o),t=!0},i(s){t||(y(e.$$.fragment,s),t=!0)},o(s){w(e.$$.fragment,s),t=!1},d(s){S(e,s)}}}function It(n){let e,t,s,o;const r=[zt,Ht],i=[];function c(l,u){return l[0]?1:0}return e=c(n),t=i[e]=r[e](n),{c(){t.c(),s=ke()},m(l,u){i[e].m(l,u),T(l,s,u),o=!0},p(l,[u]){let f=e;e=c(l),e!==f&&(_e(),w(i[f],1,1,()=>{i[f]=null}),he(),t=i[e],t||(t=i[e]=r[e](l),t.c()),y(t,1),t.m(s.parentNode,s))},i(l){o||(y(t),o=!0)},o(l){w(t),o=!1},d(l){i[e].d(l),l&&R(s)}}}function Ft(n,e,t){let s;return $(n,xe,o=>t(0,s=o)),[s]}class Wt extends J{constructor(e){super(),q(this,e,Ft,It,O,{})}}function Dt(n){let e,t,s,o;return e=new it({}),s=new Wt({}),{c(){P(e.$$.fragment),t=b(),P(s.$$.fragment)},m(r,i){M(e,r,i),T(r,t,i),M(s,r,i),o=!0},p:v,i(r){o||(y(e.$$.fragment,r),y(s.$$.fragment,r),o=!0)},o(r){w(e.$$.fragment,r),w(s.$$.fragment,r),o=!1},d(r){S(e,r),r&&R(t),S(s,r)}}}class Gt extends J{constructor(e){super(),q(this,e,null,Dt,O,{})}}new Gt({target:document.getElementById("app")});

