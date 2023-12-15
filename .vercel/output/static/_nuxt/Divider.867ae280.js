import{_ as T}from"./nuxt-link.0d552f7f.js";import{_ as B,ab as O,a0 as c,$ as h,az as f,aA as F,aB as Q,aC as S,aD as P,aE as q,ac as u,aF as U,aG as v,ad as G,aH as W,aI as k,a4 as A,aJ as m,aK as $,aL as z,a6 as L,aM as X,a3 as N,aN as Y,aO as Z,aP as _,aQ as x,aR as ee,aS as te}from"./entry.d28ff8f1.js";const K=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function E(e,n){n?n={...K,...n}:n=K;const r=M(n);return r.dispatch(e),r.toString()}const ae=Object.freeze(["prototype","__proto__","constructor"]);function M(e){let n="",r=new Map;const a=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let l="";const o=i.length;o<10?l="unknown:["+i+"]":l=i.slice(8,o-1),l=l.toLowerCase();let g=null;if((g=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+g+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return a("buffer:"),a(t.toString("utf8"));if(l!=="object"&&l!=="function"&&l!=="asyncfunction")this[l]?this[l](t):e.ignoreUnknown||this.unkown(t,l);else{let s=Object.keys(t);e.unorderedObjects&&(s=s.sort());let y=[];e.respectType!==!1&&!H(t)&&(y=ae),e.excludeKeys&&(s=s.filter(d=>!e.excludeKeys(d)),y=y.filter(d=>!e.excludeKeys(d))),a("object:"+(s.length+y.length)+":");const p=d=>{this.dispatch(d),a(":"),e.excludeValues||this.dispatch(t[d]),a(",")};for(const d of s)p(d);for(const d of y)p(d)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,a("array:"+t.length+":"),!i||t.length<=1){for(const g of t)this.dispatch(g);return}const l=new Map,o=t.map(g=>{const s=M(e);s.dispatch(g);for(const[y,p]of s.getContext())l.set(y,p);return s.toString()});return r=l,o.sort(),this.array(o,!1)},date(t){return a("date:"+t.toJSON())},symbol(t){return a("symbol:"+t.toString())},unkown(t,i){if(a(i),!!t&&(a(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return a("error:"+t.toString())},boolean(t){return a("bool:"+t)},string(t){a("string:"+t.length+":"),a(t)},function(t){a("fn:"),H(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return a("number:"+t)},xml(t){return a("xml:"+t.toString())},null(){return a("Null")},undefined(){return a("Undefined")},regexp(t){return a("regex:"+t.toString())},uint8array(t){return a("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return a("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return a("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return a("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return a("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return a("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return a("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return a("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return a("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return a("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return a("url:"+t.toString())},map(t){a("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){a("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return a("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return a("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return a("domwindow")},bigint(t){return a("bigint:"+t.toString())},process(){return a("process")},timer(){return a("timer")},pipe(){return a("pipe")},tcp(){return a("tcp")},udp(){return a("udp")},tty(){return a("tty")},statwatcher(){return a("statwatcher")},securecontext(){return a("securecontext")},connection(){return a("connection")},zlib(){return a("zlib")},context(){return a("context")},nodescript(){return a("nodescript")},httpparser(){return a("httpparser")},dataview(){return a("dataview")},signal(){return a("signal")},fsevent(){return a("fsevent")},tlswrap(){return a("tlswrap")}}}const R="[native code] }",ne=R.length;function H(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-ne)===R}function re(e,n,r={}){return e===n||E(e,r)===E(n,r)}const le=O({props:{name:{type:String,required:!0}}});function ie(e,n,r,a,t,i){return c(),h("span",{class:f(e.name)},null,2)}const w=B(le,[["render",ie]]),C=F(S.ui.strategy,S.ui.avatar,Q),se=O({components:{UIcon:w},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>C.default.icon},size:{type:String,default:()=>C.default.size,validator(e){return Object.keys(C.size).includes(e)}},chipColor:{type:String,default:()=>C.default.chipColor,validator(e){return["gray",...S.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>C.default.chipPosition,validator(e){return Object.keys(C.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:n,attrs:r}=P("avatar",q(e,"ui"),C),a=u(()=>typeof e.src=="boolean"?null:e.src),t=u(()=>(e.alt||"").split(" ").map(p=>p.charAt(0)).join("").substring(0,2)),i=u(()=>U(v(n.value.wrapper,(s.value||!a.value)&&n.value.background,n.value.rounded,n.value.size[e.size]),e.class)),l=u(()=>U(v(n.value.rounded,n.value.size[e.size]),e.imgClass)),o=u(()=>v(n.value.icon.base,n.value.icon.size[e.size])),g=u(()=>v(n.value.chip.base,n.value.chip.size[e.size],n.value.chip.position[e.chipPosition],n.value.chip.background.replaceAll("{color}",e.chipColor))),s=G(!1);W(()=>e.src,()=>{s.value&&(s.value=!1)});function y(){s.value=!0}return{ui:n,attrs:r,wrapperClass:i,imgClass:l,iconClass:o,chipClass:g,url:a,placeholder:t,error:s,onError:y}}}),oe=["alt","src"];function ue(e,n,r,a,t,i){const l=w;return c(),h("span",{class:f(e.wrapperClass)},[e.url&&!e.error?(c(),h("img",k({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:n[0]||(n[0]=(...o)=>e.onError&&e.onError(...o))}),null,16,oe)):e.text?(c(),h("span",{key:1,class:f(e.ui.text)},A(e.text),3)):e.icon?(c(),m(l,{key:2,name:e.icon,class:f(e.iconClass)},null,8,["name","class"])):e.placeholder?(c(),h("span",{key:3,class:f(e.ui.placeholder)},A(e.placeholder),3)):$("",!0),e.chipColor?(c(),h("span",{key:4,class:f(e.chipClass)},A(e.chipText),3)):$("",!0),z(e.$slots,"default")],2)}const J=B(se,[["render",ue]]),ce=O({inheritAttrs:!1,props:{...T.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function n(r,a,{isActive:t,isExactActive:i}){return e.active?e.activeClass:e.exactQuery&&!re(r.query,a.query)||e.exactHash&&r.hash!==a.hash?e.inactiveClass:e.exact&&i||!e.exact&&t?e.activeClass:e.inactiveClass}return{resolveLinkClass:n}}}),de=["href","aria-disabled","role","rel","target","onClick"];function fe(e,n,r,a,t,i){const l=T;return e.to?(c(),m(l,k({key:1},e.$props,{custom:""}),{default:L(({route:o,href:g,target:s,rel:y,navigate:p,isActive:d,isExactActive:I,isExternal:j})=>[N("a",k(e.$attrs,{href:e.disabled?void 0:g,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:y,target:s,class:e.resolveLinkClass(o,e._.provides[Y]||e.$route,{isActive:d,isExactActive:I}),onClick:D=>!j&&p(D)}),[z(e.$slots,"default",Z(_({isActive:e.exact?I:d})))],16,de)]),_:3},16)):(c(),m(X(e.as),k({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:L(()=>[z(e.$slots,"default")]),_:3},16,["disabled","class"]))}const V=B(ce,[["render",fe]]),b=F(S.ui.strategy,S.ui.button,x),ye=O({components:{UIcon:w,ULink:V},inheritAttrs:!1,props:{type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>b.default.size,validator(e){return Object.keys(b.size).includes(e)}},color:{type:String,default:()=>b.default.color,validator(e){return[...S.ui.colors,...Object.keys(b.color)].includes(e)}},variant:{type:String,default:()=>b.default.variant,validator(e){return[...Object.keys(b.variant),...Object.values(b.color).flatMap(n=>Object.keys(n))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>b.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e,{slots:n}){const{ui:r,attrs:a}=P("button",q(e,"ui"),b),t=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),i=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),l=u(()=>e.square||!n.default&&!e.label),o=u(()=>{var I,j;const d=((j=(I=r.value.color)==null?void 0:I[e.color])==null?void 0:j[e.variant])||r.value.variant[e.variant];return U(v(r.value.base,r.value.font,r.value.rounded,r.value.size[e.size],r.value.gap[e.size],e.padded&&r.value[l.value?"square":"padding"][e.size],d==null?void 0:d.replaceAll("{color}",e.color),e.block?"w-full flex justify-center items-center":"inline-flex items-center"),e.class)}),g=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),s=u(()=>e.loading&&!t.value?e.loadingIcon:e.trailingIcon||e.icon),y=u(()=>v(r.value.icon.base,r.value.icon.size[e.size],e.loading&&"animate-spin")),p=u(()=>v(r.value.icon.base,r.value.icon.size[e.size],e.loading&&!t.value&&"animate-spin"));return{attrs:a,isLeading:t,isTrailing:i,isSquare:l,buttonClass:o,leadingIconName:g,trailingIconName:s,leadingIconClass:y,trailingIconClass:p}}});function ge(e,n,r,a,t,i){const l=w,o=V;return c(),m(o,k({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},e.attrs),{default:L(()=>[z(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(c(),m(l,{key:0,name:e.leadingIconName,class:f(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):$("",!0)]),z(e.$slots,"default",{},()=>[e.label?(c(),h("span",{key:0,class:f([e.truncate?"text-left break-all line-clamp-1":""])},A(e.label),3)):$("",!0)]),z(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(c(),m(l,{key:0,name:e.trailingIconName,class:f(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):$("",!0)])]),_:3},16,["type","disabled","class"])}const Se=B(ye,[["render",ge]]),pe=F(S.ui.strategy,S.ui.divider,ee),he=O({components:{UIcon:w,UAvatar:J},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:n,attrs:r}=P("divider",q(e,"ui"),pe),a=u(()=>e.orientation==="horizontal"),t=u(()=>U(v(n.value.wrapper.base,a.value?n.value.wrapper.horizontal:n.value.wrapper.vertical),e.class)),i=u(()=>v(n.value.container.base,a.value?n.value.container.horizontal:n.value.container.vertical)),l=u(()=>{const o={solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}[e.type];return v(n.value.border.base,a.value?n.value.border.horizontal:n.value.border.vertical,a.value?n.value.border.size.horizontal:n.value.border.size.vertical,o)});return{ui:n,attrs:r,wrapperClass:t,containerClass:i,borderClass:l}}});function ve(e,n,r,a,t,i){const l=w,o=J;return c(),h("div",k({class:e.wrapperClass},e.attrs),[N("div",{class:f(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(c(),h(te,{key:0},[N("div",{class:f(e.containerClass)},[z(e.$slots,"default",{},()=>[e.label?(c(),h("span",{key:0,class:f(e.ui.label)},A(e.label),3)):e.icon?(c(),m(l,{key:1,name:e.icon,class:f(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(c(),m(o,k({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):$("",!0)])],2),N("div",{class:f(e.borderClass)},null,2)],64)):$("",!0)],16)}const Ce=B(he,[["render",ve]]);export{Se as _,Ce as a,w as b,J as c};
