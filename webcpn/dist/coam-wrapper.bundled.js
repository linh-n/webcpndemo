/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;let n=class{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}};const o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:r,defineProperty:h,getOwnPropertyDescriptor:a,getOwnPropertyNames:l,getOwnPropertySymbols:c,getPrototypeOf:d}=Object,u=globalThis,p=u.trustedTypes,f=p?p.emptyScript:"",C=u.reactiveElementPolyfillSupport,v=(t,s)=>t,g={toAttribute(t,s){switch(s){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,s)=>!r(t,s),m={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=m){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&h(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){const{get:e,set:n}=a(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t}};return{get(){return e?.call(this)},set(s){const o=e?.call(this);n.call(this,s),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,s=[...l(t),...c(t)];for(const i of s)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(o(t))}else void 0!==t&&s.push(o(t));return s}static _$Eu(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{if(s)i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const s of e){const e=document.createElement("style"),n=t.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=s.cssText,i.appendChild(e)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EC(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(s,i.type);this._$Em=t,null==n?this.removeAttribute(e):this.setAttribute(e,n),this._$Em=null}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=e,this[e]=n.fromAttribute(s,t.type),this._$Em=null}}requestUpdate(t,s,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??b)(this[t],s))return;this.P(t,s,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.P(s,this[s],i)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[v("elementProperties")]=new Map,y[v("finalized")]=new Map,C?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,$=w.trustedTypes,x=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+L,_=`<${A}>`,M=document,E=()=>M.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,U="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,O=/>/g,P=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,Z=/"/g,j=/^(?:script|style|textarea|title)$/i,N=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),z=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),B=new WeakMap,D=M.createTreeWalker(M,129);function W(t,s){if(!H(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(s):s}class J{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let n=0,o=0;const r=t.length-1,h=this.parts,[a,l]=((t,s)=>{const i=t.length-1,e=[];let n,o=2===s?"<svg>":3===s?"<math>":"",r=T;for(let s=0;s<i;s++){const i=t[s];let h,a,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,a=r.exec(i),null!==a);)c=r.lastIndex,r===T?"!--"===a[1]?r=V:void 0!==a[1]?r=O:void 0!==a[2]?(j.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=P):void 0!==a[3]&&(r=P):r===P?">"===a[0]?(r=n??T,l=-1):void 0===a[1]?l=-2:(l=r.lastIndex-a[2].length,h=a[1],r=void 0===a[3]?P:'"'===a[3]?Z:R):r===Z||r===R?r=P:r===V||r===O?r=T:(r=P,n=void 0);const d=r===P&&t[s+1].startsWith("/>")?" ":"";o+=r===T?i+_:l>=0?(e.push(h),i.slice(0,l)+S+i.slice(l)+L+d):i+L+(-2===l?s:d)}return[W(t,o+(t[i]||"<?>")+(2===s?"</svg>":3===s?"</math>":"")),e]})(t,s);if(this.el=J.createElement(a,i),D.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=D.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(S)){const s=l[o++],i=e.getAttribute(t).split(L),r=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?Q:"?"===r[1]?X:"@"===r[1]?Y:G}),e.removeAttribute(t)}else t.startsWith(L)&&(h.push({type:6,index:n}),e.removeAttribute(t));if(j.test(e.tagName)){const t=e.textContent.split(L),s=t.length-1;if(s>0){e.textContent=$?$.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],E()),D.nextNode(),h.push({type:2,index:++n});e.append(t[s],E())}}}else if(8===e.nodeType)if(e.data===A)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(L,t+1));)h.push({type:7,index:n}),t+=L.length-1}n++}}static createElement(t,s){const i=M.createElement("template");return i.innerHTML=t,i}}function q(t,s,i=t,e){if(s===z)return s;let n=void 0!==e?i.o?.[e]:i.l;const o=k(s)?void 0:s._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,e)),void 0!==e?(i.o??=[])[e]=n:i.l=n),void 0!==n&&(s=q(t,n._$AS(t,s.values),n,e)),s}class F{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:i}=this._$AD,e=(t?.creationScope??M).importNode(s,!0);D.currentNode=e;let n=D.nextNode(),o=0,r=0,h=i[0];for(;void 0!==h;){if(o===h.index){let s;2===h.type?s=new K(n,n.nextSibling,this,t):1===h.type?s=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(s=new tt(n,this,t)),this._$AV.push(s),h=i[++r]}o!==h?.index&&(n=D.nextNode(),o++)}return D.currentNode=M,e}p(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class K{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,s,i,e){this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this.v=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===t?.nodeType&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=q(this,t,s),k(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>H(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==I&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:s,_$litType$:i}=t,e="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=J.createElement(W(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===e)this._$AH.p(s);else{const t=new F(e,this),i=t.u(this.options);t.p(s),this.T(i),this._$AH=t}}_$AC(t){let s=B.get(t.strings);return void 0===s&&B.set(t.strings,s=new J(t)),s}k(t){H(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const n of t)e===s.length?s.push(i=new K(this.O(E()),this.O(E()),this,this.options)):i=s[e],i._$AI(n),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,e,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}_$AI(t,s=this,i,e){const n=this.strings;let o=!1;if(void 0===n)t=q(this,t,s,0),o=!k(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const e=t;let r,h;for(t=n[0],r=0;r<n.length-1;r++)h=q(this,e[i+r],s,r),h===z&&(h=this._$AH[r]),o||=!k(h)||h!==this._$AH[r],h===I?t=I:t!==I&&(t+=(h??"")+n[r+1]),this._$AH[r]=h}o&&!e&&this.j(t)}j(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}}class X extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==I)}}class Y extends G{constructor(t,s,i,e,n){super(t,s,i,e,n),this.type=5}_$AI(t,s=this){if((t=q(this,t,s,0)??I)===z)return;const i=this._$AH,e=t===I&&i!==I||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==I&&(i===I||e);e&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const st=w.litHtmlPolyfillSupport;st?.(J,K),(w.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class it extends y{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,s,i)=>{const e=i?.renderBefore??s;let n=e._$litPart$;if(void 0===n){const t=i?.renderBefore??null;e._$litPart$=n=new K(s.insertBefore(E(),t),t,void 0,i??{})}return n._$AI(t),n})(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return z}}it._$litElement$=!0,it.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:it});const et=globalThis.litElementPolyfillSupport;et?.({LitElement:it}),(globalThis.litElementVersions??=[]).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b},ot=(t=nt,s,i)=>{const{kind:e,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(i.name,t),"accessor"===e){const{name:e}=i;return{set(i){const n=s.get.call(this);s.set.call(this,i),this.requestUpdate(e,n,t)},init(s){return void 0!==s&&this.P(e,void 0,t),s}}}if("setter"===e){const{name:e}=i;return function(i){const n=this[e];s.call(this,i),this.requestUpdate(e,n,t)}}throw Error("Unsupported decorator location: "+e)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rt(t){return(s,i)=>"object"==typeof i?ot(t,s,i):((t,s,i)=>{const e=s.hasOwnProperty(i);return s.constructor.createProperty(i,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(s,i):void 0})(t,s,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const ht=2;class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this.t=t,this._$AM=s,this.i=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class lt extends at{constructor(t){if(super(t),this.it=I,t.type!==ht)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===I||null==t)return this._t=void 0,this.it=t;if(t===z)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const s=[t];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const ct=(t=>(...s)=>({_$litDirective$:t,values:s}))(lt);var dt=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};const ut=[{app:"app1",label:"App 1",href:"/dev/index.html",icon:'\n          <svg\n            width="15"\n            height="15"\n            viewBox="0 0 15 15"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"\n              fill="currentColor"\n              fillRule="evenodd"\n              clipRule="evenodd"\n            ></path>\n          </svg>\n          '},{app:"app2",label:"App 2",href:"http://localhost:3001",icon:'\n          <svg\n            width="15"\n            height="15"\n            viewBox="0 0 15 15"\n            fill="none"\n            xmlns="http://www.w3.org/2000/svg"\n          >\n            <path\n              d="M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z"\n              fill="currentColor"\n              fillRule="evenodd"\n              clipRule="evenodd"\n            ></path>\n          </svg>\n          '}];let pt=class extends it{constructor(){super(...arguments),this.app="",this.links=ut}render(){return N`
        <div class="appbar">
          <div class="nav">
            <slot name="logo"></slot>
          </div>
        </div>
        <div class="sidebar">
          <ul class="main">
            ${ut.map((t=>N`
                <li class="main-item ${this.app===t.app?"active":""}">
                  ${ct(t.icon)}
                  <a href="${t.href}">${t.label}</a>
                </li>
                ${this.app===t.app?N`<li class="sub"><slot name="sidebar"></slot></li>`:""}
              `))}
          </ul>
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};pt.styles=((t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new n(e,t,i)})`
    :host {
      color: #424242;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      font-size: 13px;
      display: grid;
      grid-template-areas:
        'appbar appbar'
        'sidebar content';
      grid-template-columns: 250px 1fr;
      grid-template-rows: 50px 1fr;
      gap: 0;
      height: 100vh;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .sidebar {
      grid-area: sidebar;
      overflow-y: auto;
      background-color: #fafafa;
    }

    .appbar {
      grid-area: appbar;
      background-color: #2196f3;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .appbar .nav {
      display: flex;
      gap: 20px;
      height: 100%;
      align-items: center;
    }

    .main {
      list-style: none;
      padding: 20px 20px 20px 0;
      margin: 0;
      font-size: 1.1em;
    }

    li.main-item {
      padding: 10px 20px;
      margin: 10px 0 10px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 0 5px 5px 0;
    }

    li.main-item a {
      display: block;
    }

    li.main-item.active {
      background-color: #e3f2fd;
      color: #2196f3;
    }

    .sub {
      padding: 0 0 0 35px;
    }

    .sidebar ::slotted(a) {
      display: block;
      padding: 5px 10px;
      text-decoration: none;
      color: inherit;
      font-size: 13px;
      border-radius: 4px;
    }

    .sidebar ::slotted(a.active) {
      background-color: #e3f2fd;
      color: #2196f3;
    }
  `,dt([rt({})],pt.prototype,"app",void 0),dt([rt({type:Array})],pt.prototype,"links",void 0),pt=dt([(t=>(s,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,s)})):customElements.define(t,s)})("coam-wrapper")],pt);export{pt as CoamWrapper};
