var Bo=Object.defineProperty;var Lo=(e,t)=>{for(var n in t)Bo(e,n,{get:t[n],enumerable:!0})};var Kt,ae,cs,Oo,Oe,os,ds,us,gn,Ct,ut,ps,yn,hn,$n,Po,It={},Rt=[],Fo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Tt=Array.isArray;function Ke(e,t){for(var n in t)e[n]=t[n];return e}function vn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Te(e,t,n){var s,o,a,i={};for(a in t)a=="key"?s=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?Kt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return St(e,i,s,o,null)}function St(e,t,n,s,o){var a={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++cs,__i:-1,__u:0};return o==null&&ae.vnode!=null&&ae.vnode(a),a}function Et(e){return e.children}function At(e,t){this.props=e,this.context=t}function Ye(e,t){if(t==null)return e.__?Ye(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ye(e):null}function Ho(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,s=[],o=[],a=Ke({},t);a.__v=t.__v+1,ae.vnode&&ae.vnode(a),bn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,s,n??Ye(t),!!(32&t.__u),o),a.__v=t.__v,a.__.__k[a.__i]=a,$s(s,a,o),t.__e=t.__=null,a.__e!=n&&fs(a)}}function fs(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),fs(e)}function is(e){(!e.__d&&(e.__d=!0)&&Oe.push(e)&&!Mt.__r++||os!=ae.debounceRendering)&&((os=ae.debounceRendering)||ds)(Mt)}function Mt(){try{for(var e,t=1;Oe.length;)Oe.length>t&&Oe.sort(us),e=Oe.shift(),t=Oe.length,Ho(e)}finally{Oe.length=Mt.__r=0}}function ms(e,t,n,s,o,a,i,r,l,c,p){var d,u,v,$,g,b,h=s&&s.__k||Rt,m=t.length;for(l=jo(n,t,h,l,m),d=0;d<m;d++)(v=n.__k[d])!=null&&(u=v.__i!=-1&&h[v.__i]||It,v.__i=d,b=bn(e,v,u,o,a,i,r,l,c,p),$=v.__e,v.ref&&u.ref!=v.ref&&(u.ref&&kn(u.ref,null,v),p.push(v.ref,v.__c||$,v)),g==null&&$!=null&&(g=$),4&v.__u?(l=gs(v,l,e),u.__e&&(u.__e=null)):typeof v.type=="function"&&b!==void 0?l=b:$&&(l=$.nextSibling),v.__u&=-7);return n.__e=g,l}function jo(e,t,n,s,o){var a,i,r,l,c,p=n.length,d=p,u=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[a]=St(null,i,null,null,null):Tt(i)?i=e.__k[a]=St(Et,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[a]=St(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[a]=i,l=a+u,i.__=e,i.__b=e.__b+1,r=null,(c=i.__i=Uo(i,n,l,d))!=-1&&(d--,(r=n[c])&&(r.__u|=2)),r==null||r.__v==null?(c==-1&&(o>p?u--:o<p&&u++),typeof i.type!="function"&&(i.__u|=4)):c!=l&&(c==l-1?u--:c==l+1?u++:(c>l?u--:u++,i.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<p;a++)(r=n[a])!=null&&(2&r.__u)==0&&(r.__e==s&&(s=Ye(r)),vs(r,r));return s}function gs(e,t,n){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=gs(s[o],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=Ye(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Uo(e,t,n,s){var o,a,i,r=e.key,l=e.type,c=t[n],p=c!=null&&(2&c.__u)==0;if(c===null&&r==null||p&&r==c.key&&l==c.type)return n;if(s>(p?1:0)){for(o=n-1,a=n+1;o>=0||a<t.length;)if((c=t[i=o>=0?o--:a++])!=null&&(2&c.__u)==0&&r==c.key&&l==c.type)return i}return-1}function rs(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Fo.test(t)?n:n+"px"}function Dt(e,t,n,s,o){var a,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||rs(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||rs(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(ps,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?s?n[ut]=s[ut]:(n[ut]=yn,e.addEventListener(t,a?$n:hn,a)):e.removeEventListener(t,a?$n:hn,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ls(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[Ct]==null)t[Ct]=yn++;else if(t[Ct]<n[ut])return;return n(ae.event?ae.event(t):t)}}}function bn(e,t,n,s,o,a,i,r,l,c){var p,d,u,v,$,g,b,h,m,w,M,y,C,D,I,O,P=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[r=t.__e=n.__e]),(p=ae.__b)&&p(t);e:if(typeof P=="function"){d=i.length;try{if(m=t.props,w=P.prototype&&P.prototype.render,M=(p=P.contextType)&&s[p.__c],y=p?M?M.props.value:p.__:s,n.__c?h=(u=t.__c=n.__c).__=u.__E:(w?t.__c=u=new P(m,y):(t.__c=u=new At(m,y),u.constructor=P,u.render=Vo),M&&M.sub(u),u.state||(u.state={}),u.__n=s,v=u.__d=!0,u.__h=[],u._sb=[]),w&&u.__s==null&&(u.__s=u.state),w&&P.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Ke({},u.__s)),Ke(u.__s,P.getDerivedStateFromProps(m,u.__s))),$=u.props,g=u.state,u.__v=t,v)w&&P.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),w&&u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(w&&P.getDerivedStateFromProps==null&&m!==$&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),t.__v==n.__v||!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1){t.__v!=n.__v&&(u.props=m,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(H){H&&(H.__=t)}),Rt.push.apply(u.__h,u._sb),u._sb=[],u.__h.length&&i.push(u),r=Ye(n);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),w&&u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate($,g,b)})}if(u.context=y,u.props=m,u.__P=e,u.__e=!1,C=ae.__r,D=0,w)u.state=u.__s,u.__d=!1,C&&C(t),p=u.render(u.props,u.state,u.context),Rt.push.apply(u.__h,u._sb),u._sb=[];else do u.__d=!1,C&&C(t),p=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++D<25);u.state=u.__s,u.getChildContext!=null&&(s=Ke(Ke({},s),u.getChildContext())),w&&!v&&u.getSnapshotBeforeUpdate!=null&&(b=u.getSnapshotBeforeUpdate($,g)),I=p!=null&&p.type===Et&&p.key==null?ys(p.props.children):p,r=ms(e,Tt(I)?I:[I],t,n,s,o,a,i,r,l,c),u.base=t.__e,t.__u&=-161,u.__h.length&&i.push(u),h&&(u.__E=u.__=null)}catch(H){if(i.length=d,t.__v=null,l||a!=null){if(H.then){for(t.__u|=l?160:128;r&&r.nodeType==8&&r.nextSibling;)r=r.nextSibling;a!=null&&(a[a.indexOf(r)]=null),t.__e=r}else if(a!=null)for(O=a.length;O--;)vn(a[O])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),H.then||hs(t),ae.__e(H,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):r=t.__e=Wo(n.__e,t,n,s,o,a,i,l,c);return(p=ae.diffed)&&p(t),128&t.__u?void 0:r}function hs(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(hs))}function $s(e,t,n){for(var s=0;s<n.length;s++)kn(n[s],n[++s],n[++s]);ae.__c&&ae.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){ae.__e(a,o.__v)}})}function ys(e){return typeof e!="object"||e==null||e.__b>0?e:Tt(e)?e.map(ys):e.constructor!==void 0?null:Ke({},e)}function Wo(e,t,n,s,o,a,i,r,l){var c,p,d,u,v,$,g,b=n.props||It,h=t.props,m=t.type;if(m=="svg"?o="http://www.w3.org/2000/svg":m=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((v=a[c])&&"setAttribute"in v==!!m&&(m?v.localName==m:v.nodeType==3)){e=v,a[c]=null;break}}if(e==null){if(m==null)return document.createTextNode(h);e=document.createElementNS(o,m,h.is&&h),r&&(ae.__m&&ae.__m(t,a),r=!1),a=null}if(m==null)b===h||r&&e.data==h||(e.data=h);else{if(a=m=="textarea"&&h.defaultValue!=null?null:a&&Kt.call(e.childNodes),!r&&a!=null)for(b={},c=0;c<e.attributes.length;c++)b[(v=e.attributes[c]).name]=v.value;for(c in b)v=b[c],c=="dangerouslySetInnerHTML"?d=v:c=="children"||c in h||c=="value"&&"defaultValue"in h||c=="checked"&&"defaultChecked"in h||Dt(e,c,null,v,o);for(c in h)v=h[c],c=="children"?u=v:c=="dangerouslySetInnerHTML"?p=v:c=="value"?$=v:c=="checked"?g=v:r&&typeof v!="function"||b[c]===v||Dt(e,c,v,b[c],o);if(p)r||d&&(p.__html==d.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(d&&(e.innerHTML=""),ms(t.type=="template"?e.content:e,Tt(u)?u:[u],t,n,s,m=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:n.__k&&Ye(n,0),r,l),a!=null)for(c=a.length;c--;)vn(a[c]);r&&m!="textarea"||(c="value",m=="progress"&&$==null?e.removeAttribute("value"):$!=null&&($!==e[c]||m=="progress"&&!$||m=="option"&&$!=b[c])&&Dt(e,c,$,b[c],o),c="checked",g!=null&&g!=e[c]&&Dt(e,c,g,b[c],o))}return e}function kn(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(o){ae.__e(o,n)}}function vs(e,t,n){var s,o;if(ae.unmount&&ae.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||kn(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(a){ae.__e(a,t)}s.base=s.__P=s.__n=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&vs(s[o],t,n||typeof e.type!="function");n||vn(e.__e),e.__c=e.__=e.__e=void 0}function Vo(e,t,n){return this.constructor(e,n)}function bs(e,t,n){var s,o,a,i;t==document&&(t=document.documentElement),ae.__&&ae.__(e,t),o=(s=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],bn(t,e=(!s&&n||t).__k=Te(Et,null,[e]),o||It,It,t.namespaceURI,!s&&n?[n]:o?null:t.firstChild?Kt.call(t.childNodes):null,a,!s&&n?n:o?o.__e:t.firstChild,s,i),$s(a,e,i),e.props.children=null}Kt=Rt.slice,ae={__e:function(e,t,n,s){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,s||{}),i=o.__d),i)return o.__E=o}catch(r){e=r}throw e}},cs=0,Oo=function(e){return e!=null&&e.constructor===void 0},At.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ke({},this.state),typeof e=="function"&&(e=e(Ke({},n),this.props)),e&&Ke(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),is(this))},At.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),is(this))},At.prototype.render=Et,Oe=[],ds=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,us=function(e,t){return e.__v.__b-t.__v.__b},Mt.__r=0,gn=Math.random().toString(8),Ct="__d"+gn,ut="__a"+gn,ps=/(PointerCapture)$|Capture$/i,yn=0,hn=ls(!1),$n=ls(!0),Po=0;var st,re,_n,ks,pt=0,Is=[],ce=ae,_s=ce.__b,ws=ce.__r,xs=ce.diffed,Ds=ce.__c,Cs=ce.unmount,Ss=ce.__;function Bt(e,t){ce.__h&&ce.__h(re,e,pt||t),pt=0;var n=re.__H||(re.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function L(e){return pt=1,zo(Ks,e)}function zo(e,t,n){var s=Bt(st++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):Ks(void 0,t),function(r){var l=s.__N?s.__N[0]:s.__[0],c=s.t(l,r);l!==c&&(s.__N=[c,s.__[1]],s.__c.setState({}))}],s.__c=re,!re.__f)){var o=function(r,l,c){if(!s.__c.__H)return!0;var p=!1,d=s.__c.props!==r;if(s.__c.__H.__.some(function(v){if(v.__N){p=!0;var $=v.__[0];v.__=v.__N,v.__N=void 0,$!==v.__[0]&&(d=!0)}}),a){var u=a.call(this,r,l,c);return p?u||d:u}return!p||d};re.__f=!0;var a=re.shouldComponentUpdate,i=re.componentWillUpdate;re.componentWillUpdate=function(r,l,c){if(this.__e){var p=a;a=void 0,o(r,l,c),a=p}i&&i.call(this,r,l,c)},re.shouldComponentUpdate=o}return s.__N||s.__}function Ee(e,t){var n=Bt(st++,3);!ce.__s&&Ms(n.__H,t)&&(n.__=e,n.u=t,re.__H.__h.push(n))}function Ce(e){return pt=5,J(function(){return{current:e}},[])}function J(e,t){var n=Bt(st++,7);return Ms(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function xn(e,t){return pt=8,J(function(){return e},t)}function Rs(e){var t=Bt(st++,10),n=L();return t.__=e,re.componentDidCatch||(re.componentDidCatch=function(s,o){t.__&&t.__(s,o),n[1](s)}),[n[0],function(){n[1](void 0)}]}function Yo(){for(var e;e=Is.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Nt),t.__h.some(wn),t.__h=[]}catch(n){t.__h=[],ce.__e(n,e.__v)}}}ce.__b=function(e){re=null,_s&&_s(e)},ce.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ss&&Ss(e,t)},ce.__r=function(e){ws&&ws(e),st=0;var t=(re=e.__c).__H;t&&(_n===re?(t.__h=[],re.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Nt),t.__h.some(wn),t.__h=[],st=0)),_n=re},ce.diffed=function(e){xs&&xs(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Is.push(t)!==1&&ks===ce.requestAnimationFrame||((ks=ce.requestAnimationFrame)||Go)(Yo)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),_n=re=null},ce.__c=function(e,t){t.some(function(n){try{n.__h.some(Nt),n.__h=n.__h.filter(function(s){return!s.__||wn(s)})}catch(s){t.some(function(o){o.__h&&(o.__h=[])}),t=[],ce.__e(s,n.__v)}}),Ds&&Ds(e,t)},ce.unmount=function(e){Cs&&Cs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(s){try{Nt(s)}catch(o){t=o}}),n.__H=void 0,t&&ce.__e(t,n.__v))};var As=typeof requestAnimationFrame=="function";function Go(e){var t,n=function(){clearTimeout(s),As&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);As&&(t=requestAnimationFrame(n))}function Nt(e){var t=re,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),re=t}function wn(e){var t=re;e.__c=e.__(),re=t}function Ms(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function Ks(e,t){return typeof t=="function"?t(e):t}var Es=function(e,t,n,s){var o;t[0]=0;for(var a=1;a<t.length;a++){var i=t[a++],r=t[a]?(t[0]|=i?1:2,n[t[a++]]):t[++a];i===3?s[0]=r:i===4?s[1]=Object.assign(s[1]||{},r):i===5?(s[1]=s[1]||{})[t[++a]]=r:i===6?s[1][t[++a]]+=r+"":i?(o=e.apply(r,Es(e,r,n,["",null])),s.push(o),r[0]?t[0]|=2:(t[a-2]=0,t[a]=o)):s.push(r)}return s},Ts=new Map;function Pe(e){var t=Ts.get(this);return t||(t=new Map,Ts.set(this,t)),(t=Es(this,t.get(e)||(t.set(e,t=(function(n){for(var s,o,a=1,i="",r="",l=[0],c=function(u){a===1&&(u||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,u,i):a===3&&(u||i)?(l.push(3,u,i),a=2):a===2&&i==="..."&&u?l.push(4,u,0):a===2&&i&&!u?l.push(5,0,!0,i):a>=5&&((i||!u&&a===5)&&(l.push(a,0,i,o),a=6),u&&(l.push(a,u,0,o),a=6)),i=""},p=0;p<n.length;p++){p&&(a===1&&c(),c(p));for(var d=0;d<n[p].length;d++)s=n[p][d],a===1?s==="<"?(c(),l=[l],a=3):i+=s:a===4?i==="--"&&s===">"?(a=1,i=""):i=s+i[0]:r?s===r?r="":i+=s:s==='"'||s==="'"?r=s:s===">"?(c(),a=1):a&&(s==="="?(a=5,o=i,i=""):s==="/"&&(a<5||n[p][d+1]===">")?(c(),a===3&&(l=l[0]),a=l,(l=l[0]).push(2,0,a),a=0):s===" "||s==="	"||s===`
`||s==="\r"?(c(),a=2):i+=s),a===3&&i==="!--"&&(a=4,l=l[0])}return c(),l})(e)),t),arguments,[])).length>1?t:t[0]}var Sn={};Lo(Sn,{CATEGORIES:()=>Re,CAT_MAP:()=>Je,applyAccountRules:()=>Be,classifyIncome:()=>je,detectCategory:()=>ve,detectSmsKind:()=>Ft,extractAmount:()=>Ot,extractBalance:()=>Dn,extractMerchant:()=>Pt,finishMemo:()=>Ys,formatDateLabel:()=>Jo,formatWon:()=>z,isPayrollName:()=>Ps,isWeakMemo:()=>Hs,matchByAmount:()=>js,matchRule:()=>Ne,matchScore:()=>Xs,normKey:()=>X,parseBankSms:()=>Ws,parseCardSms:()=>Us,parseFree:()=>zs,parseOne:()=>jt,parsePaste:()=>li,parseReceipt:()=>Vs,parseStatement:()=>Js,preferred:()=>ci,reconcile:()=>Cn,resolveYear:()=>at,scoreConfidence:()=>He,similarity:()=>Xe,stripNoise:()=>Fe,toLocalISO:()=>pe,todayISO:()=>de,uid:()=>Ge});var Ns=e=>String(e).padStart(2,"0");function pe(e){return`${e.getFullYear()}-${Ns(e.getMonth()+1)}-${Ns(e.getDate())}`}function de(e=0){let t=new Date;return t.setDate(t.getDate()+e),pe(t)}function at(e,t,n=new Date){let s=n.getFullYear(),o=n.getMonth()+1;return e-o>2?s-=1:o-e>9&&(s+=1),pe(new Date(s,e-1,t))}function Jo(e){let t=new Date(e+"T00:00:00"),n=["일","월","화","수","목","금","토"];return`${t.getMonth()+1}월 ${t.getDate()}일 (${n[t.getDay()]})`}function z(e){return(e||0).toLocaleString("ko-KR")}function Ge(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}var Re=[{key:"food",label:"식비",color:"#8A6D3B",words:["밥","점심","저녁","식당","국밥","편의점","마트","장보기","아침","치킨","배달","음식","분식","김밥","GS25","CU","세븐일레븐","이마트","홈플러스","지에스리테일","GS리테일","비지에프리테일","BGF리테일","롯데마트","롯데쇼핑","이마트에브리데이","노브랜드","홈푸드","유통","식자재마트","농협하나로","남도장터","정육","축산","수산","familymart","lawson","7-eleven","ministop","코리아세븐","롯데씨브이에스","씨스페이시스","이마트24","하나로마트","파머스마켓","로컬푸드","우아한형제들","배달의민족","쿠팡이츠","요기요","위대한상상"]},{key:"cafe",label:"카페·간식",color:"#A9762F",words:["커피","카페","스타벅스","투썸","빵","디저트","간식","아이스크림","베이커리","이디야","메가커피"]},{key:"transport",label:"교통",color:"#3E6B8A",words:["택시","버스","지하철","교통카드","케이티엑스","KTX","기차","SRT","카카오T","한국철도공사","코레일","에스알","교통공사","도시철도","광역버스","monorail","yui rail","metro","subway","티머니","캐시비"]},{key:"car",label:"차량 유지비",color:"#6B5B3E",words:["기름","주유","주유소","휘발유","경유","엘피지","LPG","충전소","SK에너지","GS칼텍스","에쓰오일","S-OIL","현대오일뱅크","알뜰주유소","오일뱅크","오일","석유","에너지플러스","정비","카센터","자동차공업사","공업사","블루핸즈","오토큐","스피드메이트","현대서비스","기아서비스","타이어","타이어뱅크","엔진오일","미션오일","세차","자동차세","검사소","자동차검사","주차","주차장","톨게이트","하이패스","한국도로공사","자동차보험","다이렉트자동차"]},{key:"shopping",label:"쇼핑",color:"#7A4A8A",words:["옷","쇼핑","신발","가방","쿠팡","당근","인터넷쇼핑","네이버페이","무신사","올리브영","11번가","지마켓","G마켓","옥션","위메프","티몬","알리익스프레스","테무"]},{key:"living",label:"주거·생활",color:"#4A6B4A",words:["월세","관리비","전기","가스","수도","생활용품","세제","다이소","한국전력","아파트","어울림","관리사무소","상하수도","도시가스","난방비","버킷플레이스","오늘의집"]},{key:"health",label:"의료·건강",color:"#8A4A4A",words:["병원","약국","약값","헬스","운동","필라테스","의원","치과","한의원","내과","외과","이비인후과","피부과","안과","소아과","산부인과","정신건강의학과","의료원","보건소","의료재단"]},{key:"culture",label:"문화·여가",color:"#4A5F8A",words:["영화","넷플릭스","책","게임","공연","콘서트","유튜브","스포티파이","왓챠","CGV","메가박스","씨제이이엔엠","티빙","웨이브","쿠팡플레이","디즈니","멜론","지니뮤직","플러스 멤버십","멤버십"]},{key:"comm",label:"통신",color:"#5A5A5A",words:["통신","휴대폰","핸드폰","인터넷비","SK텔레콤","SKT","KT","LG유플러스","LGU","알뜰폰","브로드밴드","텔레콤","조이텔","헬로모바일","케이티엠모바일","KT엠모바일","에스케이텔링크","세븐모바일","프리텔레콤","세종텔레콤","리브엠","U+유모바일","이야기모바일"]},{key:"insurance",label:"보험",color:"#6B5A7A",words:["보험","실손","상해","화재보험"]},{key:"loan",label:"대출·이자",color:"#8A5A3B",words:["대출이자","이자상환","원리금","할부이자","대출상환","마이너스통장이자"]},{key:"family",label:"가족 송금",color:"#5A7A8A",words:["생활비","용돈"]},{key:"social",label:"경조사·회비",color:"#9A5B6E",words:["축의","부의","조의","근조","경조","결혼축하","화환","돌잔치","사우회","동창회","친목회","모임회비","계모임","향우회"]},{key:"travel",label:"여행",color:"#3E7A6B",words:["항공","에어로케이","에어부산","에어서울","티웨이","제주항공","진에어","이스타","eastar","아시아나","대한항공","airline","airways","nippon airw","japan airlines","peach avia","숙박","호텔","hotel","게스트하우스","리조트","resort","펜션","료칸","에어비앤비","airbnb","야놀자","여기어때","아고다","agoda","booking.com","부킹닷컴","익스피디아","expedia","호텔스컴바인","트리바고","tripla","클룩","klook","kkday","마이리얼트립","하나투어","모두투어","노랑풍선","인터파크투어","his ","트리플","스카이스캐너","getyourguide","viator","트립닷컴","trip.com","씨트립","렌터카","rent a car","면세점","duty free","여행","트래블월렛","공항","airport","공항철도","리무진","railway","jr동일본","jr이스트","jr east","jreast","신칸센","스이카","suica","파스모","pasmo","이코카","icoca","esim","여행자보험","도시락"]},{key:"income",label:"수입",color:"#3D6B4F",words:[]},{key:"etc",label:"기타",color:"#8A8A8A",words:[]}],Je=Object.fromEntries(Re.map(e=>[e.key,e])),Os=["받았","월급","급여","용돈받","수입","보너스","환급","들어왔","벌었","정산받","상여"],Xo=["급여","월급","상여","성과급","능률성과급","수당","정근수당","가족수당","시간외","처우개선","복리후생","자녀학자금","학자금","교육비지원","격려금","포상금","연말정산","퇴직금","명절휴가비","직급보조비","급식비","복지포인트"];function Ps(e,t){let n=String(e||"").replace(/\s+/g,"");return Xo.some(o=>n.includes(o))?!0:(t&&t.incomeSources||[]).some(o=>o&&String(o).length>=2&&n.toUpperCase().includes(String(o).replace(/\s+/g,"").toUpperCase()))}function Bs(e){let t={영:0,일:1,이:2,삼:3,사:4,오:5,육:6,륙:6,칠:7,팔:8,구:9},n={십:10,백:100,천:1e3},s=0,o=0;for(let a of e)t[a]!==void 0?o=t[a]:n[a]!==void 0&&(s+=(o||1)*n[a],o=0);return s+o}function qo(e){let t=e,n=0;for(let[s,o]of[["억",1e8],["만",1e4]]){let a=t.indexOf(s);if(a!==-1){let i=t.slice(0,a);n+=(i===""?1:Bs(i))*o,t=t.slice(a+1)}}return n+Bs(t)}function Fe(e){return String(e??"").replace(/\[?\s*(web발신|국외발신|국제발신|광고)\s*\]?/gi," ").replace(/(카드|체크|신용|카드번호)\s*[(\[]?\s*\d{4}\s*[)\]]?/gi,"$1 ").replace(/\d{4}\s*[*·]{2,}\s*\d{0,4}/g," ").replace(/[*·]{3,}\s*\d{3,4}/g," ").replace(/(^|[\s\]])[가-힣]\*{1,2}[가-힣]{1,2}님?(?=[\s\[]|$)/gm,"$1 ").replace(/\b\d{1,2}:\d{2}(:\d{2})?\b/g," ").replace(/[ \t]+/g," ")}var Zo=["누적","잔액","한도","사용가능","가용","잔여","적립","포인트","마일리지"];function Lt(e,t){let n=e.slice(Math.max(0,t-14),t);return Zo.some(s=>n.includes(s))}function Ot(e){let t=Fe(e),n={억:1e8,만:1e4,천:1e3},s=[],o,a=/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)?\s*원/g;for(;(o=a.exec(t))!==null;){if(Lt(t,o.index))continue;let d=parseFloat(o[1].replace(/,/g,""));o[2]&&(d*=n[o[2]]),d>0&&s.push(Math.round(d))}if(s.length)return s[0];let i=[],r=/(?:^|[^0-9.])(\d{1,3}(?:,\d{3})+)(?![0-9])/g;for(;(o=r.exec(t))!==null;){if(Lt(t,o.index))continue;let d=parseInt(o[1].replace(/,/g,""),10);d>0&&i.push(d)}if(i.length)return i[0];let l=t.match(/([일이삼사오육륙칠팔구십백천만억영]+)\s*원/);if(l){let d=qo(l[1]);if(d>0)return d}let c=t.match(/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)/);if(c&&!Lt(t,c.index)){let d=Math.round(parseFloat(c[1].replace(/,/g,""))*n[c[2]]);if(d>0)return d}let p=t.match(/(?:^|\s)(\d{3,})(?:\s|$)/);if(p){let d=parseInt(p[1],10);if(d>0)return d}return 0}function Dn(e){let n=Fe(e).match(/(잔여한도|잔여포인트|잔여금액|사용가능금액|잔액|잔고|남은금액|사용가능|잔여)[^\d-]{0,6}(-?\s?[0-9][0-9,]*)/);if(n){let s=parseInt(n[2].replace(/[,\s]/g,""),10);if(!isNaN(s))return s}return null}function X(e){return String(e??"").replace(/\d+\s*월\s*분?/g,"").replace(/\d+\s*(회차|회|차)/g,"").replace(/㈜|\(주\)|주식회사|주\)/g,"").replace(/\d+/g,"").replace(/[^\p{L}]/gu,"").replace(/점$/,"").toLowerCase()}function Xe(e,t){if(e=String(e??""),t=String(t??""),!e||!t)return 0;if(e===t)return 1;let n=i=>{let r=new Set,l=`  ${i}  `;for(let c=0;c<l.length-2;c++)r.add(l.slice(c,c+3));return r},s=n(e),o=n(t),a=0;for(let i of s)o.has(i)&&a++;return a/(s.size+o.size-a)}var Qo=["자동이체","일시불","웹발신","승인취소","승인","취소","환불","할부","누적","포인트","잔여한도","잔여포인트","사용가능","잔여","잔액","한도","결제","출금","입금","이체","납부","청구","계좌","매입","정정","개월","체크카드","신용카드","기본료","요금할인","통신요금","부가가치세","이용상세내역","청구서","청구금액","납부할금액","총납부하실금액","사용기간","고객번호","납기일","할인액","미납액","모바일","체크우리","타행이체","타행건별","오픈뱅킹","오픈인증","대출결산","예금결산","인터넷","스마트폰뱅킹","창구","자동화기기"],ei=["국민","KB국민","KB","신한","삼성","현대","롯데","하나","우리","농협","NH","IBK","기업","카카오뱅크","카카오","토스","케이뱅크","SC제일","새마을금고","신협","우체국","부산","대구","광주","전북","경남","제주","씨티","산업"];function Fs(e){let t=e.replace(/\d+\s*월\s*분/g," ").replace(/\d+\s*(회차|회|차)/g," ").replace(/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/g," ").replace(/\d{1,2}[.\-/]\d{1,2}/g," ").replace(/\d{1,2}월\s*\d{1,2}일/g," ").replace(/-?[0-9][0-9,]*(?:\.[0-9]+)?\s*(억|만|천)?\s*원?/g," ").replace(/[()（）\[\]]/g," ");for(let n of ei)t=t.replace(new RegExp(`${n}\\s*(카드|은행|뱅크)`,"g")," ");for(let n of Qo)t=t.split(n).join(" ");return t.replace(/\s+/g," ").trim()}function Pt(e){let n=Fe(e).split(/\n/).map(o=>o.trim()).filter(Boolean),s=[];for(let o of n){let a=Fs(o);!a||!/[\p{L}]/u.test(a)||a.replace(/[^\p{L}]/gu,"").length<2||s.push(a)}return s.length?s[s.length-1].slice(0,30):""}function Ne(e,t){let n=String(e??"");if(n.length<2)return null;let s=null,o=0;for(let a of t||[]){let i=a&&typeof a.normKey=="string"?a.normKey:"";if(i.length<2)continue;let r=0;i===n?r=1e3:n.includes(i)?r=100+i.length:i.includes(n)&&n.length>=3&&n.length/i.length>=.5&&(r=50+n.length),r>o&&(s=a,o=r)}return s}function ti(e,t,n){if(/^[A-Za-z0-9+]{1,3}$/.test(n)){let s=n.replace(/[+]/g,"\\+");return new RegExp(`(^|[^A-Za-z])${s}([^A-Za-z]|$)`,"i").test(e)}return e.includes(n)||t.includes(n.toLowerCase())}var ni=/^(기본료|요금할인|통신요금|부가가치세|이용상세내역|청구서|청구금액|납부할금액|총납부하실금액|내역|합계|금액|할인|사용료|이용료|상호확인필요)$/;function Hs(e){let t=String(e||"").replace(/\s+/g,"");return!t||t.length<2||ni.test(t)}function js(e,t=[]){if(!e)return null;let n=(t||[]).filter(s=>s&&s.amountHint&&Math.abs(s.amountHint-e)<=1);return n.length===1?n[0]:null}function ve(e,t,n=[]){if(t==="income")return"income";let s=String(e??""),o=Ne(X(s),n);if(o&&o.category)return o.category;let a=s.toLowerCase();for(let i of Re)if(i.words.some(r=>ti(s,a,r)))return i.key;return"etc"}function He(e,t,n){let s=String(e??"");if(n)return 1;if(t==="etc")return .4;let o=Je[t];if(!o)return .4;let a=o.words.filter(i=>s.includes(i)).length;return a>=2?.9:a===1?.7:.5}function je(e,t){let n=t||{},s=`${e.counterpartyRaw||""} ${e.memo||""} ${e.rawText||""}`;if(e.amount===1)return{type:"transfer",transferKind:"verify",confidence:1};if(/(환불|취소|반품|정정)/.test(s))return{type:"expense",isRefund:!0,transferKind:null,confidence:1};if(/이자/.test(s)&&!/대출/.test(s))return{type:"income",category:"income",confidence:1};if(n.userName&&s.includes(n.userName))return{type:"transfer",transferKind:"internal",confidence:1};let o=n.incomeSources||[],a=o.find(l=>l&&s.includes(l));if(a)return{type:"income",category:"income",transferKind:null,confidence:1,incomeSource:a};if(Ps(s,n))return{type:"income",category:"income",transferKind:null,confidence:.9};let r=(n.excludedCounterparties||[]).find(l=>l&&s.includes(l));return r?{type:"transfer",transferKind:"excluded",confidence:1,excludedBy:r}:o.length===0?null:n.incomeOnlyFromSources!==!1?{type:"transfer",transferKind:"excluded",confidence:.4,needsCheck:!0}:null}var si=/^(신한|삼성|현대|국민|롯데|하나|우리|비씨|BC|농협|씨티|카카오|케이|토스)?카드(대금|결제대금|값)?$|^카드대금$/,ai=/(공제회|적금|정기예금|청약|저축보험|연금저축|퇴직연금|펀드납입)/;function Be(e,t){let n=t||{},s=`${e.counterpartyRaw||""} ${e.memo||""} ${e.rawText||""}`,o=(n.investKeywords||[]).find(d=>d&&s.includes(d));if(o)return{type:"transfer",transferKind:"invest",investBy:o,confidence:1};let a=String(e.counterpartyRaw||e.memo||"").replace(/\s+/g,""),i=(n.excludedCounterparties||[]).find(d=>d&&a.includes(String(d).replace(/\s+/g,"")));if(e.direction!=="in"&&i)return{type:"transfer",transferKind:"excluded",excludedBy:i,confidence:1};let r=String(n.userName||"").replace(/\s+/g,"");if(e.direction!=="in"&&r.length>=2&&a.endsWith(r))return{type:"transfer",transferKind:"internal",confidence:1};if(e.direction!=="in"&&si.test(a))return{type:"transfer",transferKind:"cardPayment",confidence:1};if(e.direction!=="in"&&ai.test(a))return{type:"transfer",transferKind:"savings",confidence:1};if(e.direction!=="in"&&/대출원금상환|원금상환/.test(a))return{type:"transfer",transferKind:"loanPrincipal",confidence:1};let l=(n.welfareCards||[]).find(d=>d&&s.includes(d));if(l)return{transferKind:"welfare",welfareBy:l,category:e.category};let c=(n.travelKeywords||[]).find(d=>d&&s.includes(d));if(c)return{type:"expense",transferKind:null,category:"travel",travelBy:c,confidence:1};let p=(n.familyTransferKeywords||[]).find(d=>d&&s.includes(d));if(p){let d=n.familyRegularAmount||0,u=n.familyAmountMin||0,v=n.familyAmountMax||0,$=!1;return u>0||v>0?$=u>0&&e.amount<u||v>0&&e.amount>v:d>0&&($=e.amount>d*1.4),$&&n.familyExtraExcluded!==!1?{type:"transfer",transferKind:"excluded",category:"family",familyBy:p,isExtra:!0,excludedBy:"별도 송금",confidence:1}:{type:"expense",transferKind:null,category:"family",familyBy:p,isExtra:$,confidence:1}}return null}function Ft(e,t){let n=String(e??"").replace(/\s/g,""),s=/\[(?!web발신|국외발신|국제발신|광고)[^\[\]]{2,12}\](승인|취소|승인취소)/i.test(n),o=(t&&t.welfareCards||[]).some(a=>a&&n.includes(String(a).replace(/\s/g,"")));return/(승인|취소|매입|일시불|할부)/.test(n)&&(/(카드|체크|신용)/.test(n)||s||o)?"card":/(출금|입금|이체|자동이체|납부)/.test(n)?"bank":/(합계|결제금액|받을금액|총액|부가세|사업자)/.test(n)?"receipt":"free"}function Ht(e,t=new Date){let n=Fe(e),s=n.match(/(20\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/);if(s)return pe(new Date(+s[1],+s[2]-1,+s[3]));if(s=n.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/),s&&+s[1]>20)return pe(new Date(2e3+ +s[1],+s[2]-1,+s[3]));if(s=n.match(/(\d{1,2})[.\-/](\d{1,2})/),s){let o=+s[1],a=+s[2];if(o>=1&&o<=12&&a>=1&&a<=31)return at(o,a,t)}return s=n.match(/(\d{1,2})월\s*(\d{1,2})일/),s?at(+s[1],+s[2],t):null}function Us(e,t={}){let n=t.now||new Date,s=Ot(e),o=/(취소|환불|정정)/.test(e),a=Pt(e),i=ve(a||e,"expense",t.rules),r=/(\d{1,2})\s*개월\s*할부/.exec(e),l=Be({memo:a,rawText:e,category:i,amount:s},t.settings),c=l&&l.transferKind==="welfare"?Dn(e):null;return{type:l&&l.type||"expense",welfareBalance:c,isExtra:!!(l&&l.isExtra),isRefund:o,category:l&&l.category||i,transferKind:l&&l.transferKind||null,amount:s,memo:a||e.replace(/\s+/g," ").trim().slice(0,24),date:Ht(e,n)||de(),normKey:X(a),paymentMethod:"card",installmentMonths:r?+r[1]:null,source:"sms",confidence:He(a||e,i),rawText:e}}function Ws(e,t={}){let n=t.now||new Date,s=Ot(e),o=Dn(e),a=/(출금|이체출금|납부|송금)/.test(e)&&!/입금/.test(e),i=/입금/.test(e)&&!/출금/.test(e),r=a?"out":i?"in":null,l=Pt(e),c=/(ATM|CD출금|현금인출|현금출금)/i.test(e),p="expense",d=c?"cashOut":null,u=!1,v=null,$=!1;if(r==="in"){let h=je({counterpartyRaw:l,memo:l,rawText:e,amount:s},t.settings);h?(p=h.type,d=h.transferKind,u=!!h.needsCheck,v=h.confidence,h.isRefund&&($=!0)):p=Os.some(m=>e.includes(m))||/(급여|월급|상여)/.test(e)?"income":"transfer"}else c&&(p="transfer");let g=p==="income"?"income":ve(l||e,"expense",t.rules),b=Be({counterpartyRaw:l,memo:l,rawText:e,category:g,amount:s},t.settings);return b&&(b.type&&(p=b.type),b.category&&(g=b.category),d=b.transferKind,b.confidence!=null&&(v=b.confidence),u=!1),d&&["internal","invest","savings","cashOut","cardPayment","fxTopup","verify"].includes(d)&&(u=!1,v==null&&(v=1)),{type:p,direction:r,isRefund:$,isExtra:!!(b&&b.isExtra),needsCheck:u,category:g,amount:s,memo:l||e.replace(/\s+/g," ").trim().slice(0,24),date:Ht(e,n)||de(),normKey:X(l),paymentMethod:"account",transferKind:d,balanceAfter:o,counterpartyRaw:l,source:"sms",confidence:v??He(l||e,g),rawText:e}}var oi=["합계","결제금액","받을금액","총액","총 금액","판매금액","승인금액"];function Vs(e,t={}){let n=t.now||new Date,s=Fe(e),o=0;for(let c of oi){let p=new RegExp(`${c}\\s*[:：]?\\s*([0-9][0-9,]*)`),d=s.match(p);if(d){let u=parseInt(d[1].replace(/,/g,""),10);if(u>0){o=u;break}}}if(!o){let c=[],p=/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{3,})\s*원?/g,d;for(;(d=p.exec(s))!==null;){if(Lt(s,d.index)||/(부가세|면세|과세|할인|거스름|받은금액)/.test(s.slice(Math.max(0,d.index-10),d.index)))continue;let u=parseInt(d[1].replace(/,/g,""),10);u>0&&c.push(u)}o=c.length?Math.max(...c):0}let a=s.split(/\n/).map(c=>c.trim()).filter(Boolean),i="";for(let c of a.slice(0,4))if(/[\p{L}]/u.test(c)&&Fs(c).length>=2&&!/\d{3,}/.test(c)){i=c.slice(0,30);break}let r=/(현금|현금영수증)/.test(e)&&!/카드/.test(e),l=ve(i||e,"expense",t.rules);return{type:"expense",isRefund:!1,category:l,amount:o,memo:i||"영수증",date:Ht(e,n)||de(),normKey:X(i),paymentMethod:r?"cash":"card",source:"receipt",confidence:i?He(i,l):.4,rawText:e}}function zs(e,t={}){let n=Ot(e),s=Os.some(i=>e.includes(i))?"income":"expense",o=0;/(그저께|그제)/.test(e)?o=-2:e.includes("어제")&&(o=-1);let a=ve(e,s,t.rules);return{type:s,isRefund:!1,category:a,amount:n,memo:e.trim(),date:de(o),normKey:X(e.replace(/[0-9,]+\s*원?/g,"")),paymentMethod:"unknown",source:"manual",confidence:He(e,a),rawText:e}}function jt(e,t={}){let n=Ft(e,t.settings),s=n==="card"?Us(e,t):n==="bank"?Ws(e,t):n==="receipt"?Vs(e,t):zs(e,t);return Ys(s,t)}var ii=/(이용상세내역|청구서|청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)/,ri=/(청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)\D{0,8}([0-9][0-9,]*)/;function Ys(e,t={}){if(!e||e.type==="income")return e;let n=String(e.rawText||e.memo||"");if(ii.test(n)){let o=n.match(ri),a=o?parseInt(o[2].replace(/,/g,""),10):null;e={...e,memo:"",normKey:"",amount:a&&a>0?a:e.amount}}if(!Hs(e.memo))return e;let s=js(e.amount,t.rules);return s&&s.name?{...e,memo:s.name,normKey:X(s.name),counterpartyRaw:s.name,category:s.category||e.category,confidence:Math.max(e.confidence??.5,.8)}:{...e,memo:"상호 확인 필요",normKey:"",needsCheck:!0,confidence:Math.min(e.confidence??.5,.4)}}var Gs=/(20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}|\d{1,2}[.\-/]\d{1,2}(?![.\-/]?\d{3})|\d{1,2}월\s*\d{1,2}일)/;function Js(e,t={}){let n=t.now||new Date,o=Fe(e).split(/\n/).map(d=>d.trim()).filter(Boolean),a=[],i=null;for(let d of o)Gs.test(d)?(i&&a.push(i),i={lines:[d]}):i&&i.lines.push(d);if(i&&a.push(i),a.length<2)return[];let r=a.map(d=>{let u=d.lines.join(" "),v=Ht(u,n)||de(),$=[],g=/(-?[0-9][0-9,]*)\s*원/g,b;for(;(b=g.exec(u))!==null;)$.push({v:parseInt(b[1].replace(/,/g,""),10),i:b.index});if($.length===0){let y=/(-?[0-9]{1,3}(?:,[0-9]{3})+|-?[0-9]{4,})/g;for(;(b=y.exec(u))!==null;)$.push({v:parseInt(b[1].replace(/,/g,""),10),i:b.index})}let h=0,m=null,w=null;if($.length>=3){m=$[$.length-1].v;let y=$[$.length-3].v,C=$[$.length-2].v;y>0&&C===0?(h=y,w="out"):C>0&&y===0?(h=C,w="in"):h=Math.abs(C||y)}else $.length===2?(m=$[1].v,h=Math.abs($[0].v)):$.length===1&&(h=Math.abs($[0].v));w||(/출금|지급|인출/.test(u)?w="out":/입금|수취|예입/.test(u)&&(w="in"));let M=Pt(u);return{date:v,amount:h,balance:m,direction:w,merchant:M,body:u}}),l=[...r].reverse();for(let d=1;d<l.length;d++){let u=l[d-1],v=l[d];if(u.balance==null||v.balance==null)continue;let $=v.balance-u.balance;Math.abs(Math.abs($)-v.amount)<=1&&(v.direction=$<0?"out":"in")}let c=[];for(let d=1;d<l.length;d++){let u=l[d-1],v=l[d];if(u.balance==null||v.balance==null||!v.amount)continue;let $=v.balance-(u.balance-v.amount),g=v.balance-(u.balance+v.amount),b=v.direction==="out"?$:v.direction==="in"?g:Math.abs($)<=Math.abs(g)?$:g;Math.abs(b)>1&&c.push({afterDate:u.date,beforeDate:v.date,missing:Math.abs(b)})}return{entries:r.filter(d=>d.amount>0).map(d=>{let u=d.direction==="in"?"transfer":"expense",v=null,$=!1,g=!1;if(d.direction==="in"){let w=je({counterpartyRaw:d.merchant,memo:d.merchant,rawText:d.body,amount:d.amount},t.settings);w?(u=w.type,v=w.transferKind,$=!!w.needsCheck,g=!!w.isRefund):/(급여|월급|상여)/.test(d.body)&&(u="income")}let b=u==="income"?"income":ve(d.merchant||d.body,"expense",t.rules),h=Be({counterpartyRaw:d.merchant,memo:d.merchant,rawText:d.body,category:b,amount:d.amount},t.settings),m=!1;return h&&(h.type&&(u=h.type),h.category&&(b=h.category),v=h.transferKind,m=!!h.isExtra,$=!1),{type:u,transferKind:v,needsCheck:$,isExtra:m,direction:d.direction,isRefund:g,category:b,amount:d.amount,memo:d.merchant||"내역",date:d.date,normKey:X(d.merchant),paymentMethod:"account",balanceAfter:d.balance,counterpartyRaw:d.merchant,source:"statement",confidence:He(d.merchant||d.body,b),rawText:d.body}}),gaps:c}}function li(e,t={}){let n=Fe(e),s=(n.match(new RegExp(Gs.source,"g"))||[]).length,o=(n.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})/g)||[]).length;if(s>=2&&o>=3){let a=Js(e,t);if(a.entries&&a.entries.length>=2)return{mode:"multi",...a}}return{mode:"single",entries:[jt(e,t)],gaps:[]}}var Ls={statement:4,sms:3,shortcut:3,receipt:2,capture:2,manual:1,favorite:1,auto:1};function Xs(e,t){if(e.amount!==t.amount||e.type!==t.type)return 0;let n=new Date(e.date+"T00:00:00"),s=new Date(t.date+"T00:00:00"),o=Math.abs((n-s)/864e5);if(o>3)return 0;let a=0,i=[];o===0?(a+=40,i.push("같은 날")):o===1?(a+=30,i.push("하루 차이")):(a+=15,i.push(`${o}일 차이`));let r=e.normKey||"",l=t.normKey||"";return r&&l&&(r===l?(a+=40,i.push("같은 가맹점")):r.includes(l)||l.includes(r)?(a+=25,i.push("비슷한 가맹점")):Xe(r,l)>=.6&&(a+=15,i.push("가맹점 유사"))),e.accountId&&t.accountId&&e.accountId===t.accountId&&(a+=15,i.push("같은 계좌")),e.paymentMethod&&e.paymentMethod===t.paymentMethod&&(a+=5),{score:a,reasons:i}}function ci(e,t){return(Ls[e.source]||0)>=(Ls[t.source]||0)?e:t}function Cn(e,t){let n=[],s=[],o=[],a=[...t];for(let i of e){if(i.transferKind==="fxTopup"||i.category==="family"){n.push(i),a.push(i);continue}let r=null;for(let l of a){if(l.deleted||i.sourceHash&&l.sourceHash&&i.sourceHash!==l.sourceHash&&String(i.sourceHash).split("|")[0]===String(l.sourceHash).split("|")[0])continue;let c=Xs(i,l);!c||!c.score||(!r||c.score>r.score)&&(r={...c,target:l})}r&&r.score>=80?s.push({incoming:i,target:r.target,...r}):r&&r.score>=50?(o.push({incoming:i,target:r.target,...r}),a.push(i)):(n.push(i),a.push(i))}return{added:n,merged:s,review:o}}var di=["id","date","type","category","amount","memo","isRefund","paymentMethod","accountId","normKey","source","confidence","tripId","carId","currency","foreignAmount","balanceAfter","transferKind","direction","fixedId","rawText","createdAt","updatedAt","deleted","status"];function ui(e){let t={};for(let n of di)e[n]!==void 0&&(t[n]=e[n]);return t}async function qs(e,t){let n=await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(t),redirect:"follow"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let s=await n.text(),o;try{o=JSON.parse(s)}catch{throw new Error("응답을 읽지 못했어요")}if(!o.ok)throw new Error(o.error||"서버가 거부했어요");return o}async function An(e,t){let n=new URLSearchParams(t).toString(),s=await fetch(`${e}${e.includes("?")?"&":"?"}${n}`,{redirect:"follow"});if(!s.ok)throw new Error(`HTTP ${s.status}`);let o=JSON.parse(await s.text());if(!o.ok)throw new Error(o.error||"서버가 거부했어요");return o}function pi(e){if(!e)return e;let t=String(e),n=t.match(/^(\d{4})-(\d{2})-(\d{2})/);if(n)return`${n[1]}-${n[2]}-${n[3]}`;let s=new Date(t);if(!isNaN(s)){let o=a=>String(a).padStart(2,"0");return`${s.getFullYear()}-${o(s.getMonth()+1)}-${o(s.getDate())}`}return t}function fi(e,t){let n=new Map(e.map(i=>[i.id,i])),s=0,o=0;for(let i of t){let r={...i,date:pi(i.date)};if(!/^\d{4}-\d{2}-\d{2}$/.test(r.date||""))continue;let l=n.get(r.id);l?(r.updatedAt||0)>(l.updatedAt||0)&&(n.set(r.id,{...l,...r,dirty:!1}),o++):(n.set(r.id,{...r,dirty:!1}),s++)}return{list:Array.from(n.values()).sort((i,r)=>i.date<r.date?1:i.date>r.date?-1:(r.createdAt||0)-(i.createdAt||0)),added:s,updated:o}}async function Zs(e){let{sheetUrl:t,sheetToken:n}=e.settings||{};if(!t)throw new Error("시트 주소가 없어요");let s=e.entries.filter(p=>p.dirty);s.length&&await qs(t,{token:n,op:"upsert",entries:s.map(ui)});let o=await An(t,{token:n,since:e.settings.lastSyncAt||""}),a=o.entries||[],{list:i,added:r,updated:l}=fi(e.entries,a);return{db:{...e,entries:i.map(p=>p.dirty&&s.some(d=>d.id===p.id)?{...p,dirty:!1}:p),settings:{...e.settings,lastSyncAt:o.serverTime||new Date().toISOString()}},pushed:s.length,pulled:r+l}}async function Qs(e,t){let n=await qs(e,{token:t,op:"cleanup"});if(!n||n.ok!==!0)throw new Error(n&&n.error||"시트를 정리하지 못했어요");return n}async function ea(e,t,n,s){let o=await An(e,{token:t,op:"calendar",from:n,to:s});if(!Array.isArray(o.events))throw new Error("Code.gs를 새 버전으로 바꿔야 캘린더를 읽을 수 있어요");return o.events}async function ta(e,t){return await An(e,{token:t,op:"ping"})}var Ut=null;function mi(){return Ut||(Ut=(async()=>{let e=[new URL("./ocr/",document.baseURI).href,new URL("./",document.baseURI).href],t=["tesseract.min.js","worker.min.js","kor.traineddata.gz","eng.traineddata.gz"],n=!1,s={};for(let i of e){let r=[];for(let l of t)try{(await fetch(i+l,{method:"GET",cache:"no-store"})).ok||r.push(l)}catch{n=!0,r.push(l)}if(!r.length)return i;s[i]=r}if(n)throw new Error("인터넷에 연결되어 있는지 확인해주세요. 글자 인식 도구는 처음 한 번만 받으면 됩니다");let o=e.slice().sort((i,r)=>s[i].length-s[r].length)[0],a=s[o];throw new Error(`${a.slice(0,2).join(", ")}${a.length>2?` 외 ${a.length-2}개`:""} 파일이 서버에 없어요. 인식 파일 8개를 모두 올렸는지 확인해주세요`)})().catch(e=>{throw Ut=null,e})),Ut}var Wt=null,ft=null;function gi(e){return new Promise((t,n)=>{let s=document.createElement("script");s.src=e,s.onload=t,s.onerror=()=>n(new Error("tesseract.min.js는 받았는데 실행되지 않았어요. 새로고침 후 다시 해보세요")),document.head.appendChild(s)})}async function hi(){let e=await mi();return window.Tesseract||await gi(e+"tesseract.min.js"),Wt||(Wt=(async()=>window.Tesseract.createWorker(["kor","eng"],1,{workerPath:e+"worker.min.js",corePath:e,langPath:e,gzip:!0,logger:t=>ft&&ft(t)}))().catch(t=>{throw Wt=null,t})),Wt}async function na(e,t){let n=Array.from(e||[]);if(typeof window<"u"&&typeof window.__ledgerOcrForTest=="function")return window.__ledgerOcrForTest(n);ft=a=>t&&t({...a,page:0,pages:n.length});let s=await hi(),o=[];for(let a=0;a<n.length;a++){let i=n[a];ft=c=>t&&t({...c,page:a+1,pages:n.length});let{data:r}=await s.recognize(i,{},{blocks:!0,text:!1}),l=[];for(let c of r.blocks||[])for(let p of c.paragraphs||[])for(let d of p.lines||[])l.push({text:d.text,x0:d.bbox.x0,y0:d.bbox.y0,x1:d.bbox.x1,y1:d.bbox.y1});o.push({words:l,fileDate:new Date(i.lastModified||Date.now()),name:i.name})}return ft=null,o}function $i(e){let t=(e||[]).filter(i=>i&&String(i.text||"").trim()&&isFinite(i.y0)&&isFinite(i.y1));if(!t.length)return[];let n=t.map(i=>Math.max(1,i.y1-i.y0)).sort((i,r)=>i-r),s=n[Math.floor(n.length/2)],o=[...t].sort((i,r)=>i.y0+i.y1-(r.y0+r.y1)),a=[];for(let i of o){let r=(i.y0+i.y1)/2,l=a[a.length-1];l&&Math.abs(r-l.yc)<=s*.6?(l.words.push(i),l.yc=(l.yc*(l.words.length-1)+r)/l.words.length):a.push({yc:r,words:[i]})}return a.map(i=>i.words.sort((r,l)=>r.x0-l.x0).map(r=>String(r.text).trim()).join(" "))}var yi={"¥":"JPY","￥":"JPY",$:"USD","€":"EUR","£":"GBP","฿":"THB","₫":"VND"},vi={JPY:"JPY",USD:"USD",EUR:"EUR",GBP:"GBP",THB:"THB",VND:"VND",TWD:"TWD",HKD:"HKD",CNY:"CNY",엔:"JPY",달러:"USD",유로:"EUR",바트:"THB",동:"VND"},bi=/^(일시불|할부|\d{1,2}개월|승인|승인취소|취소|매입|결제|결제취소|충전|환전|이체|입금|출금|자동이체|체크카드|체크|신용|신용카드|해외|국내|본인|가족|완료|예정|확정|잔액|잔고|잔여|사용|이용|내역|거래|오픈뱅킹|스마트폰|인터넷|모바일|ATM|CD|펌뱅킹|타행|당행|대체)$/i,ki=/(거래\s*내역|이용\s*내역|결제\s*내역|사용\s*내역|입출금|조회|필터|검색|전체|이번\s*달|지난\s*달|월별|기간\s*설정)/,In=/\(\s*(월|화|수|목|금|토|일)\s*\)|(월|화|수|목|금|토|일)요일/g;function _i(e,t){let n=e.replace(/\s+/g," "),s,o=null,a="",i=null;if(s=n.match(/(오늘|어제|그저께|그제)/)){let l=s[1]==="오늘"?0:s[1]==="어제"?1:2,c=new Date(t.getFullYear(),t.getMonth(),t.getDate()-l);o=pe(c),a=s[0]}else if(s=n.match(/(20\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?!\d)/))o=pe(new Date(+s[1],+s[2]-1,+s[3])),a=s[0];else if((s=n.match(/(20\d{2})\s*[.\-/년]?\s*([0-9OolI?]{1,2})\s*[.\-/월]?\s*([0-9OolI?]{1,2})\s*일/))||(s=n.match(/(20\d{2})\s*[.\-/년]\s*([0-9OolI?]{1,2})\s*[.\-/월]\s*([0-9OolI?]{1,2})/))){let l=+s[1],c=sa(s[2]),p=sa(s[3]);a=s[0],c!==null&&p!==null&&c>=1&&c<=12&&p>=1&&p<=31?o=pe(new Date(l,c-1,p)):p!==null&&p>=1&&p<=31?i={year:l,day:p}:c!==null&&c>=1&&c<=12&&(i={year:l,month:c})}else(s=n.match(/(?:^|\s)(\d{1,2})월\s*(\d{1,2})일/))?(+s[1]>=1&&+s[1]<=12&&+s[2]>=1&&+s[2]<=31&&(o=at(+s[1],+s[2],t)),a=s[0]):(s=n.match(/(?:^|\s)(\d{1,2})[./](\d{1,2})(?![\d,.])/))&&(+s[1]>=1&&+s[1]<=12&&+s[2]>=1&&+s[2]<=31&&(o=at(+s[1],+s[2],t)),a=s[0]);if(!o&&i){let l=n.replace(a," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(In," ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g,"");return{iso:null,partial:i,headerOnly:l.length===0}}if(!o)return{iso:null,headerOnly:!1};let r=n.replace(a," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(In," ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g,"");return{iso:o,headerOnly:r.length===0}}function wi(e){let t=[],n=e,s=(o,a)=>{n=n.replace(o,(...i)=>{let r=a(i);return r?(t.push(r)," "):i[0]})};return s(/([+\-−–])?\s*([¥￥$€£฿₫])\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g,o=>({kind:"fx",currency:yi[o[2]],value:parseFloat(o[4].replace(/,/g,"")),sign:ot(o[1]||o[3])})),s(/([+\-−–])?\s*\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY)\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/gi,o=>({kind:"fx",currency:o[2].toUpperCase(),value:parseFloat(o[3].replace(/,/g,"")),sign:ot(o[1])})),s(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)\s*(엔|달러|유로|바트)(?![가-힣])/g,o=>({kind:"fx",currency:vi[o[3]],value:parseFloat(o[2].replace(/,/g,"")),sign:ot(o[1])})),s(/(잔액|잔고|잔여|남은\s*금액)\s*[:：]?\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+|\d+)\s*원?/g,o=>({kind:"balance",value:parseInt(o[3].replace(/,/g,""),10)*(ot(o[2])<0?-1:1)})),s(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+)(?:\s*원)?/g,o=>({kind:"krw",value:parseInt(o[2].replace(/,/g,""),10),sign:ot(o[1])})),n=n.replace(/(^|[^\d,])([+\-−–])?\s*(\d{1,9})\s*원/g,(o,a,i,r)=>(t.push({kind:"krw",value:parseInt(r,10),sign:ot(i)}),a+" ")),{amounts:t,rest:n}}function ot(e){return e?e==="+"?1:-1:0}function sa(e){let t=String(e||"").replace(/[Oo]/g,"0").replace(/[lI]/g,"1");return/^\d{1,2}$/.test(t)?+t:null}function xi(e){return e.replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(/(20\d{2})\s*[.\-/년]\s*\d{1,2}\s*[.\-/월]\s*\d{1,2}\s*일?/g," ").replace(/\d{1,2}월\s*\d{1,2}일/g," ").replace(In," ").replace(/[·ㆍ•*∙‧|>›»:;,]/g," ").split(/\s+/).filter(Boolean).filter(s=>{let o=s.replace(/^[\-+=~*_.()[\]]+|[\-+=~*_.()[\]]+$/g,"");return!(!o||bi.test(o)||/^[\d./]+$/.test(o)||!/[가-힣]/.test(o)&&o.length<=1)}).map(s=>s.replace(/^[\-+=~*_.()[\]]+|[\-+=~_.([]+$/g,"")).filter(Boolean).join(" ").trim()}var Di=/(취소|환불|정정|반품)/,Ci=/(입금|급여|월급|상여|이자|환급|받은|받음)/,Si=/(잔액|잔고|이체|입금|출금|자동이체|ATM|타행|당행)/;function Ai(e,t={}){let n=t.fileDate instanceof Date&&!isNaN(t.fileDate)?t.fileDate:t.now||new Date,s=n,o=[],a=null,i=null,r=null,l=0,c=[],p=()=>{r&&o.push(r),r=null},d=(e||[]).map($=>{let g=String($||"").replace(/\s+/g," ").trim();if(!g)return null;let{amounts:b,rest:h}=wi(g);return{line:g,amounts:b,rest:h,d:_i(h,s)}}).filter(Boolean);for(let $=0;$<d.length;$++){let g=d[$].d;if(g.iso||!g.partial)continue;let b=null;for(let C=1;C<d.length&&!b;C++)for(let D of[$-C,$+C]){let I=d[D]&&d[D].d;if(I&&I.iso){b=I.iso;break}}if(!b)continue;let[h,m]=b.split("-"),w=g.partial.year||+h,M=g.partial.month||+m,y=g.partial.day;!y||M<1||M>12||(d[$].d={iso:pe(new Date(w,M-1,y)),headerOnly:g.headerOnly,borrowed:!0})}for(let $ of d){let{line:g,amounts:b,rest:h,d:m}=$;if(m.iso&&m.headerOnly&&!b.length){p(),a=m.iso,i=null;continue}let w=xi(h),M=b.filter(O=>O.kind==="krw"||O.kind==="fx"),y=b.find(O=>O.kind==="balance");if(!M.length){if(!r&&!o.length&&c.push(g),r&&!w){r.detail.push(g),y&&r.balance==null&&(r.balance=y.value);continue}if(r&&y&&r.balance==null){r.balance=y.value,r.detail.push(g);continue}w&&!ki.test(w)?(p(),i=w):r&&r.detail.push(g);continue}let C=M.find(O=>O.kind==="krw"),D=M.find(O=>O.kind==="fx");if(!w&&r&&!i&&(C&&!D&&r.krw==null&&r.fx||D&&!C&&!r.fx&&r.krw!=null)){C?r.krw=C:r.fx=D,y&&r.balance==null&&(r.balance=y.value),r.detail.push(g);continue}p();let I=w||i||"";i=null,r={date:m.iso||a,dateGuessed:!(m.iso||a),merchant:I,krw:C||null,fx:D||null,balance:y?y.value:null,detail:[g]}}p();let u=new Set,v=[];for(let $ of o){if(!$.merchant)continue;let g=[$.merchant,...$.detail].join(" ");if(!$.krw){l++;continue}let b=$.krw.value;if(!(b>0))continue;let h=$.date||pe(n),m=$.krw.sign||($.fx?$.fx.sign:0),w=Di.test(g),M=$.balance!=null||Si.test(g),y=w?"out":m>0||m===0&&Ci.test(g)?"in":"out",C=`${h}|${b}|${X($.merchant)}|${$.fx?$.fx.value:""}`;if(u.has(C))continue;u.add(C);let D=y==="in"?"transfer":"expense",I=null,O=!!$.dateGuessed,P=!1;if(y==="in"){let E=je({counterpartyRaw:$.merchant,memo:$.merchant,rawText:g,amount:b},t.settings);E?(D=E.type,I=E.transferKind,O=O||!!E.needsCheck):/(급여|월급|상여)/.test(g)&&(D="income")}let H=D==="income"?"income":ve($.merchant,"expense",t.rules),R=Be({counterpartyRaw:$.merchant,memo:$.merchant,rawText:`${g} ${c.join(" ")}`,category:H,amount:b},t.settings);R&&(R.type&&(D=R.type),R.category&&(H=R.category),I=R.transferKind,P=!!R.isExtra),v.push({type:D,transferKind:I,needsCheck:O,isExtra:P,direction:y,isRefund:w&&D==="expense",category:H,amount:b,date:h,memo:$.merchant,normKey:X($.merchant),paymentMethod:M?"account":"card",balanceAfter:$.balance,counterpartyRaw:$.merchant,currency:$.fx?$.fx.currency:"",foreignAmount:$.fx?$.fx.value:null,isOverseas:!!$.fx,dateGuessed:!!$.dateGuessed,source:"capture",confidence:He($.merchant,H),rawText:g})}return{entries:v,gaps:[],skippedNoKrw:l}}function aa(e,t={}){let n=[],s=0,o=new Set;for(let a of e||[]){let i=a.lines||$i(a.words),r=Ai(i,{...t,fileDate:a.fileDate||t.fileDate});s+=r.skippedNoKrw;for(let l of r.entries){let c=`${l.date}|${l.amount}|${l.normKey}|${l.foreignAmount??""}`;o.has(c)||(o.add(c),n.push(l))}}return{entries:n,gaps:[],skippedNoKrw:s}}var Kn=864e5,Se=(e,t)=>Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/Kn);function zt(e){let t=new Map;for(let o of e)t.set(o,(t.get(o)||0)+1);let n=e[0],s=0;for(let[o,a]of t)a>s&&(n=o,s=a);return n}var Ii=e=>{let t=[...e].sort((n,s)=>n-s);return t.length%2?t[(t.length-1)/2]:Math.round((t[t.length/2-1]+t[t.length/2])/2)};function ia(e,t={}){let n=t.minCount||3,s=new Map;for(let a of e){if(a.deleted||a.type==="income"||!a.amount||a.transferKind&&["external","welfare"].includes(a.transferKind)===!1||a.isExtra)continue;let i=a.normKey||X(a.memo);!i||i.length<2||(s.has(i)||s.set(i,[]),s.get(i).push(a))}let o=[];for(let[a,i]of s){if(i.length<n)continue;let r=new Map;for(let g of[...i].sort((b,h)=>b.date<h.date?-1:1)){let b=g.date.slice(0,7);r.has(b)||r.set(b,g)}let l=Array.from(r.values());if(l.length<n)continue;let c=[];for(let g=1;g<l.length;g++)c.push(Se(l[g-1].date,l[g].date));let p=c.filter(g=>g>=25&&g<=36).length;if(c.length===0||p/c.length<.6)continue;let d=l.map(g=>g.amount),u=Ii(d),v=d.some(g=>g!==d[0]),$=l[l.length-1];o.push({normKey:a,name:$.memo||a,amount:u,amountVariable:v,dayOfMonth:zt(l.map(g=>parseInt(g.date.slice(8,10),10))),category:zt(l.map(g=>g.category)),accountId:$.accountId||null,paymentMethod:$.paymentMethod||"account",count:l.length,lastSeen:$.date,sampleIds:l.map(g=>g.id)})}return o.sort((a,i)=>i.amount-a.amount)}function Gt(e,t){if(!e||!t||e.deleted)return!1;let n=e.normKey||X(e.memo),s=t.normKey;if(!n||!s||!(n===s||n.includes(s)||s.includes(n)||Xe(n,s)>=.6))return!1;let a=Math.abs(parseInt(e.date.slice(8,10),10)-t.dayOfMonth);return!(!(a<=3||a>=26)||!t.amountVariable&&Math.abs(e.amount-t.amount)/t.amount>.2)}function ra(e,t,n={}){let s=n.now||new Date,o=pe(s),a=[];for(let i of e){if(i.status&&i.status!=="active")continue;let r=o.slice(0,7),[l,c]=r.split("-").map(Number),p=new Date(l,c,0).getDate(),d=Math.min(i.dayOfMonth||1,p),u=`${r}-${String(d).padStart(2,"0")}`;u>o||t.some($=>$.date&&$.date.slice(0,7)===r&&($.fixedId===i.id||!$.deleted&&Gt($,i)))||a.push({date:u,type:"expense",category:i.category,amount:i.amount,memo:i.name,normKey:i.normKey,accountId:i.accountId,paymentMethod:i.paymentMethod||"account",fixedId:i.id,source:"auto",confidence:1,status:"scheduled",amountEstimated:!!i.amountVariable})}return a}function la(e,t){let n=[],s=[],o=e.filter(a=>a.status==="scheduled"&&!a.deleted);for(let a of o){let i=t.find(l=>l.id===a.fixedId),r=e.find(l=>!l.deleted&&l.id!==a.id&&l.status!=="scheduled"&&l.date.slice(0,7)===a.date.slice(0,7)&&(i?Gt(l,i):!1));if(r){n.push({scheduledId:a.id,realId:r.id,amount:r.amount});continue}Se(a.date,de())>7&&s.push(a.id)}return{settled:n,unconfirmed:s}}var Ri=["신한카드","국민카드","삼성카드","현대카드","롯데카드","하나카드","우리카드","농협카드","비씨카드","카드대금","일시불대금","청구대금"],Mi=["트래블","travel","충전","머니","환전","월렛","wallet"],Ki=["적금","예금","청약","irp","연금","저축"],Ti=["키움증권","키움","미래에셋","삼성증권","NH투자","한국투자","KB증권","신한투자","하나증권","대신증권","토스증권","유안타","메리츠증권","이베스트","카카오페이증권","증권","선물","CMA","펀드"],Ei=["atm","cd출금","현금인출","현금출금","자동화기기"];function ca(e,t={}){let n=t.accounts||[],s=t.settings||{};if(e.category==="family"||e.category==="travel")return null;let o=`${e.counterpartyRaw??""} ${e.memo??""} ${e.rawText??""}`;if((s.familyTransferKeywords||[]).some($=>$&&o.includes($))||(s.travelKeywords||[]).some($=>$&&o.includes($)))return null;let a=String(t.userName??"").trim(),i=`${e.counterpartyRaw??""} ${e.memo??""} ${e.rawText??""}`,r=i.toLowerCase(),l=e.normKey||X(e.memo),c=$=>n.find(g=>$&&!$.includes(g.kind)?!1:g.last4&&i.includes(g.last4)?!0:[g.name,...g.aliases||[]].filter(Boolean).some(h=>{let m=X(h);return m&&(l===m||l.includes(m)||r.includes(h.toLowerCase()))})),p=c(["bank"]);if(p&&p.id!==e.accountId)return{transferKind:"internal",toAccountId:p.id};if(Mi.some($=>r.includes($))){let $=c(["fx"]);return{transferKind:"fxTopup",toAccountId:$?$.id:null}}let d=c(["card"]);if(d||Ri.some($=>i.includes($)))return{transferKind:"cardPayment",toAccountId:d?d.id:null};if(Ei.some($=>r.includes($))){let $=n.find(g=>g.kind==="cash");return{transferKind:"cashOut",toAccountId:$?$.id:null}}let u=c(["invest"]);if(u||Ti.some($=>i.includes($)||r.includes($.toLowerCase())))return{transferKind:"invest",toAccountId:u?u.id:null};let v=c(["savings"]);return v||Ki.some($=>r.includes($))?{transferKind:"savings",toAccountId:v?v.id:null}:a&&i.includes(a)?{transferKind:"internal",toAccountId:null,unknownAccount:!0}:{transferKind:"external",toAccountId:null}}function Ni(e,t,n={}){if(!e||!t||e.accountId&&t.accountId&&e.accountId===t.accountId)return 0;let s=e.amount-t.amount;if(s!==0&&!(s>0&&s<=1e3))return 0;let o=Math.abs(Se(e.date,t.date));if(o>2)return 0;let a=0,i=[];o===0?(a+=35,i.push("같은 날")):o===1?(a+=20,i.push("하루 차이")):a+=8;let r=String(n.userName??"").trim(),l=`${e.counterpartyRaw||""} ${e.memo||""}`,c=`${t.counterpartyRaw||""} ${t.memo||""}`;return r&&l.includes(r)&&c.includes(r)?(a+=30,i.push("양쪽 다 본인 명의")):X(l)&&X(l)===X(c)?(a+=20,i.push("같은 적요")):Xe(X(l),X(c))>=.5&&(a+=10),s===0?(a+=15,i.push("금액 일치")):(a+=10,i.push(`수수료 ${s}원`)),(n.history||0)>=3&&(a+=15,i.push("자주 오가는 조합")),{score:a,reasons:i,fee:s}}function da(e,t={}){let n=e.filter(c=>!c.deleted&&(c.type==="transfer"||c.transferKind==="internal")&&c.amount>0),s=n.filter(c=>c.direction==="out"||c.direction==null&&c.type==="transfer"),o=n.filter(c=>c.direction==="in"),a=new Set,i=[],r=[];for(let c of s){if(a.has(c.id))continue;let p=null;for(let d of o){if(a.has(d.id)||d.id===c.id)continue;let u=Ni(c,d,t);!u||!u.score||(!p||u.score>p.score)&&(p={...u,inn:d})}p&&(p.score>=75?(i.push({out:c,inn:p.inn,...p}),a.add(c.id),a.add(p.inn.id)):p.score>=50&&r.push({out:c,inn:p.inn,...p}))}let l=n.filter(c=>!a.has(c.id)&&!r.some(p=>p.out.id===c.id||p.inn.id===c.id));return{pairs:i,review:r,halves:l}}function Tn(e,t){let n=e.filter(o=>!o.deleted&&o.accountId===t&&o.balanceAfter!=null).sort((o,a)=>o.date<a.date?-1:o.date>a.date?1:(o.createdAt||0)-(a.createdAt||0));if(n.length<2)return{gaps:[],latest:n[0]||null};let s=[];for(let o=1;o<n.length;o++){let a=n[o-1],i=n[o],r=i.type==="income"||i.direction==="in"?i.amount:-i.amount,l=a.balanceAfter+r,c=i.balanceAfter-l;Math.abs(c)>1&&s.push({afterDate:a.date,beforeDate:i.date,missing:Math.abs(c),sign:c<0?"out":"in"})}return{gaps:s,latest:n[n.length-1]}}function ua(e,t={}){let n=new Map;for(let o of e){if(o.deleted||o.type!=="expense"||t.onlyPending&&o.status!=="pending")continue;let a=o.normKey||X(o.memo)||"__none";n.has(a)||n.set(a,[]),n.get(a).push(o)}let s=[];for(let[o,a]of n){let i=new Set(a.map(l=>l.category)),r=ma(a[0].memo);s.push({normKey:o,name:zt(a.map(l=>l.memo))||o,count:a.length,total:a.reduce((l,c)=>l+(c.isRefund?-c.amount:c.amount),0),category:zt(a.map(l=>l.category)),mixed:i.size>1,payLike:r,needsReview:!r&&a.some(l=>l.status==="pending"||l.category==="etc"),suggest:Gi(a,t)?"social":null,ids:a.map(l=>l.id)})}return s.sort((o,a)=>a.total-o.total)}function pa(e){let t=[],n=[],s="",o=!1,a=e.replace(/^\uFEFF/,"");for(let i=0;i<a.length;i++){let r=a[i];o?r==='"'?a[i+1]==='"'?(s+='"',i++):o=!1:s+=r:r==='"'?o=!0:r===","?(n.push(s.trim()),s=""):r===`
`?(n.push(s.trim()),t.push(n),n=[],s=""):r==="\r"||(s+=r)}return(s||n.length)&&(n.push(s.trim()),t.push(n)),t.filter(i=>i.some(r=>r!==""))}var be={date:["거래일시","거래일자","이용일자","거래일","이용일","승인일","매출일","날짜","일자"],amount:["이용금액","승인금액","거래금액","결제금액","금액"],merchant:["가맹점명","기재내용","가맹점","거래처","적요","내용","상호","내역","비고","받는분","보낸분"],balance:["거래후잔액","거래후 잔액","잔액","잔고"],outCol:["출금금액","출금액","출금 (원)","출금(원)","찾으신금액","찾으신 금액","지급금액","출금","지급"],inCol:["입금금액","입금액","입금 (원)","입금(원)","맡기신금액","맡기신 금액","예입금액","입금","예입"],installment:["이용구분","할부구분","할부개월"],cancel:["취소상태","매입구분","승인상태"],cardName:["이용카드","카드명","카드구분"],kind:["거래구분","거래종류","거래유형","적요","구분"]},Bi=/(총\s*\d+\s*건|출금건수|입금건수|합\s*계|소\s*계|^\d+\/\d+$)/,qe=e=>String(e||"").replace(/\s+/g,"");function fa(e){let t=-1,n=null;for(let r=0;r<Math.min(e.length,25);r++){let l=(e[r]||[]).map(qe),c=l.some(d=>d&&be.date.some(u=>d.includes(qe(u)))),p=l.some(d=>d&&(be.amount.some(u=>d.includes(qe(u)))||be.outCol.some(u=>d.includes(qe(u)))||be.inCol.some(u=>d.includes(qe(u)))));if(c&&p){t=r,n=l;break}}if(t===-1)return null;let s=(r,l)=>{for(let c of r){let p=qe(c);for(let d=0;d<n.length;d++)if(!(l&&l.includes(d))&&n[d]===p)return d}for(let c of r){let p=qe(c);for(let d=0;d<n.length;d++)if(!(l&&l.includes(d))&&n[d]&&n[d].includes(p)&&!n[d].startsWith("해외"))return d}return-1},o=s(be.outCol),a=s(be.inCol,o>=0?[o]:[]),i=o>=0&&a>=0&&o!==a;return{headerRow:t,header:n,colDate:s(be.date),colAmount:i?-1:s(be.amount),colOut:i?o:-1,colIn:i?a:-1,colMerchant:s(be.merchant),colBalance:s(be.balance),colInstallment:s(be.installment),colCancel:s(be.cancel),colKind:s(be.kind)}}var Vt=e=>{let t=parseInt(String(e||"").replace(/[^\d-]/g,""),10);return isNaN(t)?0:t};function Qe(e){let t=String(e||"").replace(/[\n\r]+/g," ").trim(),n=t.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);return n?pe(new Date(+n[1],+n[2]-1,+n[3])):(n=t.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/),n?pe(new Date(2e3+ +n[1],+n[2]-1,+n[3])):null)}var Li=["네이버페이","카카오페이","비바리퍼블리카","토스페이","페이코","쿠페이","스마일페이","삼성페이","애플페이","제로페이","페이머니","머니충전"];function ma(e){let t=String(e||"").replace(/\s+/g,"").toLowerCase();return Li.some(n=>t.includes(n.toLowerCase()))}function ga(e,t,n={}){let s=new Map,o=r=>{let l=(s.get(r)||0)+1;return s.set(r,l),l},a=[],i=[];for(let r=t.headerRow+1;r<e.length;r++){let l=e[r]||[],c=l.join(" ");if(Bi.test(c.replace(/\s+/g," ").trim())){i.push(r);continue}let p=Qe(l[t.colDate]);if(!p){i.push(r);continue}let d=0,u=null,v=!1;if(t.colOut>=0&&t.colIn>=0){let F=Vt(l[t.colOut]),G=Vt(l[t.colIn]);F>0?(d=F,u="out"):G>0&&(d=G,u="in")}else{let F=Vt(l[t.colAmount]);v=F<0,d=Math.abs(F),u=n.defaultDirection||"out"}if(!d){i.push(r);continue}let $=(t.colMerchant>=0?String(l[t.colMerchant]||""):"").trim();if(/^[\d-]+$/.test($.replace(/\s/g,""))&&t.colKind>=0){let F=String(l[t.colKind]||"").trim();F&&($=F)}let g=(t.colKind>=0?String(l[t.colKind]||""):"").trim(),b=g&&g!==$?`${g} ${$}`:$,h=t.colBalance>=0?Vt(l[t.colBalance]):null,m=t.colCancel>=0?String(l[t.colCancel]||""):"",w=t.colInstallment>=0?String(l[t.colInstallment]||""):"",M=v||/(취소|환불)/.test(m)||/(취소|환불)/.test($),y=w.match(/할부\s*\((\d{1,2})\s*개월\)/)||w.match(/(\d{1,2})\s*개월/),C=/해외/.test(w),D=u==="in"?"transfer":"expense",I=null,O=!1,P=null,H=!1;if(u==="in"){let F=je({counterpartyRaw:$,memo:$,rawText:$,amount:d},n.settings);F?(D=F.type,I=F.transferKind,O=!!F.needsCheck,F.isRefund&&(H=!0),F.confidence!=null&&(P=F.confidence)):/(급여|월급|상여|환급)/.test($)&&(D="income")}let R=D==="income"?"income":ma($)&&!Ne(X(b),n.rules)&&!Ne(X($),n.rules)&&!(n.settings&&(n.settings.familyTransferKeywords||[]).some(F=>F&&$.includes(F)))?"etc":ve(b,"expense",n.rules),E=Be({counterpartyRaw:$,memo:$,rawText:c,category:R,amount:d},n.settings);E&&E.transferKind&&E.transferKind!=="welfare"&&!E.category&&(D="transfer");let A=!1;E&&(E.type&&(D=E.type),E.category&&(R=E.category),I=E.transferKind,A=!!E.isExtra,O=!1,E.confidence!=null&&(P=E.confidence)),I&&["internal","invest","savings","cashOut","cardPayment","fxTopup","verify"].includes(I)&&(O=!1,P==null&&(P=1)),a.push({type:D,direction:u,date:p,amount:d,transferKind:I,needsCheck:O,isExtra:A,category:R,memo:$||"내역",normKey:X($),counterpartyRaw:$,balanceAfter:h||null,accountId:n.accountId||null,paymentMethod:n.paymentMethod||"account",source:"statement",isRefund:M||H,installmentMonths:y?parseInt(y[1],10):null,isOverseas:C,confidence:P??(R==="etc"?.4:.8),needsCheck:M||H?!1:O,sourceHash:`${n.accountId||""}|${p}|${d}|${$}|${m}|${u}|${h||""}|${o(`${p}|${d}|${$}|${u}|${h||""}`)}`,rawText:c.trim()})}return{entries:a,skipped:i}}function ha(e){let t=new TextDecoder("utf-8",{fatal:!1}).decode(e);if((t.match(/\uFFFD/g)||[]).length>3)try{return new TextDecoder("euc-kr").decode(e)}catch{}return t}var Rn=(e,t)=>pe(new Date(new Date(e+"T00:00:00").getTime()+t*Kn));function En(e,t){let n=e.filter(v=>!v.deleted&&v.tripId===t.id),s=0,o=0,a=0,i=0,r={},l=[];for(let v of n){if(v.date&&l.push(v.date),v.type==="income"){o+=v.amount;continue}if(v.type!=="expense")continue;let $=v.isRefund?-v.amount:v.amount;if(v.transferKind==="welfare"){a+=$;continue}v.transferKind&&v.transferKind!=="external"||(v.reimbFrom&&(i+=v.amount),s+=$,r[v.category]=(r[v.category]||0)+$)}l.sort();let c=Object.entries(r).sort((v,$)=>$[1]-v[1]),p={};for(let v of n)v.currency&&v.foreignAmount&&(p[v.currency]=(p[v.currency]||0)+v.foreignAmount);let d=t.startDate||l[0]||null,u=t.endDate||l[l.length-1]||null;return{count:n.length,total:s,income:o,welfare:a,reimbursed:i,cats:c,fx:p,from:d,to:u,days:d&&u?Math.round((new Date(u)-new Date(d))/Kn)+1:null}}var Oi=["anthropic","openai","oracle","google","apple.com","netflix","spotify","aws","amazon web","microsoft","github","adobe","cloudflare","steam","paypal","patreon","figma","notion","dropbox"];function $a(e){if(!e||e.deleted||e.type!=="expense")return!1;let t=String(e.memo||"").toLowerCase();return Oi.some(n=>t.includes(n))?!1:!!(e.currency&&e.currency!=="KRW"||e.isOverseas)}function ya(e,t={}){let n=t.gapDays||3,s=e.filter($a).sort((l,c)=>l.date<c.date?-1:1);if(!s.length)return{trips:[],singles:[]};let o=[],a=[s[0]];for(let l=1;l<s.length;l++)Se(a[a.length-1].date,s[l].date)<=n?a.push(s[l]):(o.push(a),a=[s[l]]);o.push(a);let i=[],r=[];for(let l of o){let c=l[0].date,p=l[l.length-1].date,d=Se(c,p)+1,u=l.reduce((g,b)=>g+(b.isRefund?-b.amount:b.amount),0),v=[...new Set(l.map(g=>g.currency).filter(Boolean))],$={startDate:c,endDate:p,days:d,count:l.length,localSpent:u,currencies:v,ids:l.map(g=>g.id),name:Fi(l,c)};l.length>=3||d>=2?i.push($):r.push($)}return{trips:i.reverse(),singles:r.reverse()}}var Pi=[["삿포로",["sapporo","satsuporo","hakodate","chitose","moiwa","seicomart","yufutsu"]],["오키나와",["okinawa","naha","miyako","kokusai","coral port"]],["도쿄",["tokyo","shinjuku","shibuya","haneda","narita","asakusa"]],["오사카",["osaka","namba","umeda","kansai","dotonbori"]],["후쿠오카",["fukuoka","hakata","tenjin"]],["베트남",["vietnam","hanoi","saigon","danang","marou"]],["태국",["thailand","bangkok","phuket"]]];function Fi(e,t){let n=e.map(a=>String(a.memo||"")).join(" ").toLowerCase();for(let[a,i]of Pi)if(i.some(r=>n.includes(r)))return`${a} ${t.slice(2,7).replace("-",".")}`;let s=e.find(a=>a.currency)?.currency;return`${{JPY:"일본",VND:"베트남",THB:"태국",USD:"미국",EUR:"유럽",TWD:"대만"}[s]||"여행"} ${t.slice(2,7).replace("-",".")}`}function Hi(e,t){if(e.direction!=="in"||e.type!=="transfer"||!(e.amount>0)||e.transferKind&&e.transferKind!=="excluded")return!1;let n=t.settings||{},s=`${e.memo||""} ${e.counterpartyRaw||""}`;return!(n.userName&&s.includes(n.userName)||(n.excludedCounterparties||[]).some(o=>o&&s.includes(o)))}function Jt(e,t,n={}){if(!t||!t.startDate||!t.endDate)return{...t||{},inside:[],booked:[],reimb:[],onsite:0,prepaid:0,total:0,welfare:0};let s=n.preDays??120,o=n.postDays??0,a=(n.allTrips||[]).filter(g=>g.startDate&&g.startDate!==t.startDate&&g.id!==t.id),i=Rn(t.startDate,-s),r=Rn(t.endDate,o),l=Rn(t.endDate,Math.max(o,60)),c=[],p=[],d=[];for(let g of e){if(g.deleted||g.tripId&&t.id&&g.tripId!==t.id)continue;if(Hi(g,n)){g.date>=i&&g.date<=l&&d.push(g);continue}if(g.type!=="expense"||g.fixedId||g.category==="family")continue;let b=g.transferKind==="welfare";if(g.transferKind&&g.transferKind!=="external"&&!b)continue;let h=b?{...g,welfare:!0}:g;if(g.date>=t.startDate&&g.date<=t.endDate){c.push(h);continue}let m=g.date>=i&&g.date<t.startDate,w=o>0&&g.date>t.endDate&&g.date<=r;if(!m&&!w||m&&a.some(y=>y.startDate>g.date&&y.startDate<t.startDate)||w&&a.some(y=>y.startDate>t.endDate&&y.startDate<=g.date))continue;let M=m?"pre":"post";g.category==="travel"||t.id&&g.tripId===t.id?p.push({...h,sure:!0,when:M}):g.isOverseas||g.currency&&g.currency!=="KRW"?p.push({...h,sure:!1,when:M}):n.wide&&p.push({...h,sure:!1,when:M})}let u=g=>g.filter(b=>!b.welfare).reduce((b,h)=>b+(h.isRefund?-h.amount:h.amount),0),v=(g,b)=>g.date<b.date?-1:1,$=p.filter(g=>g.sure);return{...t,inside:c.sort(v),booked:p.sort(v),reimb:d.sort(v),onsite:u(c),prepaid:u($),total:u(c)+u($),welfare:[...c,...$].filter(g=>g.welfare).reduce((g,b)=>g+(b.isRefund?-b.amount:b.amount),0)}}function va(e,t={}){let n=t.days||10,s=c=>c.transferKind&&c.transferKind!=="excluded",o=c=>!c.deleted&&c.amount>0&&!s(c)&&c.category!=="family"&&c.type!=="income",a=e.filter(c=>o(c)&&c.direction==="out"&&!c.transferKind),i=e.filter(c=>o(c)&&c.direction==="in"&&!c.isRefund),r=new Set,l=[];for(let c of i){let p=c.normKey||X(c.memo),d=null;for(let u of a){if(r.has(u.id)||u.amount!==c.amount)continue;let v=Se(u.date,c.date);if(v<0||v>n)continue;let $=u.normKey||X(u.memo);p&&$&&(p===$||p.includes($)||$.includes(p)||Xe(p,$)>=.55)&&(!d||Se(u.date,c.date)<Se(d.date,c.date))&&(d=u)}d&&(r.add(d.id),l.push({refund:c,original:d}))}return l}var ji=[["엔진오일",["엔진오일","엔진 오일","engine oil","모빌","킥스","지크"]],["오일필터",["오일필터","오일 필터","오일휠타","오일 휠타","oil filter"]],["에어필터",["에어필터","에어 필터","에어클리너","흡기필터","air filter"]],["에어컨필터",["에어컨필터","에어컨 필터","캐빈필터","실내필터","향균필터"]],["미션오일",["미션오일","미션 오일","변속기오일","atf","cvt오일","오토미션"]],["점화플러그",["점화플러그","점화 플러그","스파크플러그","플러그","spark plug"]],["브레이크패드",["브레이크패드","브레이크 패드","패드","제동패드","brake pad"]],["브레이크액",["브레이크액","브레이크 오일","브레이크오일","제동액","brake fluid"]],["냉각수",["냉각수","부동액","쿨란트","coolant"]],["타이어",["타이어","tire","tyre","휠얼라인먼트","얼라인먼트"]],["배터리",["배터리","밧데리","축전지","battery"]],["와이퍼",["와이퍼","wiper","블레이드"]],["연료필터",["연료필터","연료 필터","퓨얼필터","fuel filter"]],["LPG 필터",["lpg필터","lpg 필터","가스필터"]],["DPF 점검",["dpf","디피에프","매연포집"]],["감속기 오일",["감속기","리덕션","reduction"]]],Ui=/(합계|총액|부가세|공급가|할인|소계|청구|결제|카드|현금|영수증|견적|사업자|대표|전화|주소|고객|차량번호|담당)/;function ba(e,t={}){let n=String(e||"").split(/\n/).map(r=>r.trim()).filter(Boolean),s=[],o=null,a=null,i=0;for(let r of n){if(!o){let u=r.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);u&&(o=pe(new Date(+u[1],+u[2]-1,+u[3])))}if(a==null){let u=r.match(/([0-9][0-9,]{2,})\s*(km|KM|키로|주행)/);if(u)a=parseInt(u[1].replace(/,/g,""),10);else if(/주행|계기|누적/.test(r)){let v=r.match(/([0-9][0-9,]{3,})/);v&&(a=parseInt(v[1].replace(/,/g,""),10))}}let l=r.toLowerCase(),c=r.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})\s*원?/),p=c?parseInt(c[1].replace(/,/g,""),10):0;if(Ui.test(r)){/(합계|총액|청구)/.test(r)&&p>i&&(i=p);continue}let d=ji.find(([,u])=>u.some(v=>l.includes(v)));d&&(s.some(u=>u.label===d[0])||s.push({label:d[0],amount:p,raw:r}))}return i||(i=s.reduce((r,l)=>r+l.amount,0)),{items:s,date:o||de(),mileage:a,total:i}}function Nn(e){return!e||e.deleted||e.type!=="expense"||e.category==="family"?!1:!e.transferKind||["external","welfare","verify"].includes(e.transferKind)}function Xt(e,t){if(!Nn(e)||e.catBy==="user")return e;let n=Ne(e.normKey||X(e.memo),t);if(!n)return e;let s={...e,category:n.category||e.category,confidence:1};return n.kind==="exclude"&&e.transferKind!=="welfare"&&(s.transferKind="verify"),s.status==="pending"&&!e.needsCheck&&(s.status="confirmed"),s}function Wi(e,t){if(e=String(e||""),t=String(t||""),!e||!t||e===t)return!1;let[n,s]=e.length<=t.length?[e,t]:[t,e];if(n.length>=2&&s.startsWith(n)||n.length>=3&&s.includes(n))return!0;let o=0;for(;o<n.length&&n[o]===s[o];)o++;return o>=4&&o/n.length>=.6?!0:n.length>=4&&Xe(e,t)>=.6}function ka(e,t,n){let s=t&&(t.normKey||X(t.memo))||"",o=[],a=[];if(s.length<2)return{same:o,similar:a};for(let i of e){if(!Nn(i)||i.id===t.id||i.category===n||i.catBy==="user")continue;let r=i.normKey||X(i.memo);!r||r.length<2||(r===s?o.push(i):Wi(r,s)&&(i.category==="etc"||i.category===t.category)&&a.push(i))}return{same:o,similar:a}}var Vi=[["food",["식비","식사","음식","식당","장보기"]],["cafe",["카페","간식","커피"]],["transport",["교통"]],["car",["차량","차","주유","정비","유지비","자동차"]],["shopping",["쇼핑"]],["living",["주거","생활"]],["health",["의료","건강","병원"]],["culture",["문화","여가"]],["comm",["통신","인터넷"]],["insurance",["보험"]],["loan",["대출","이자"]],["family",["가족"]],["social",["경조","축의","부의","회비","모임"]],["travel",["여행"]],["etc",["기타"]]];function _a(e){let t=[];for(let n of String(e||"").split(/\n/)){let s=n.replace(/#.*/,"").trim();if(!s)continue;let o=s.match(/^(.+?)\s*(?:=|→|->|:)\s*(.+)$/);if(!o){t.push({line:s,error:"'이름 = 분류' 형태로 적어주세요"});continue}let a=o[1].trim(),i=o[2].replace(/\s+/g,""),r=X(a);if(r.length<2){t.push({line:s,error:"이름이 너무 짧아요"});continue}if(/제외|확인용|빼기/.test(i)){t.push({line:s,name:a,normKey:r,category:"etc",kind:"exclude"});continue}let l=Vi.find(([,c])=>c.some(p=>i.includes(p)))||Re.filter(c=>c.key!=="income").map(c=>[c.key,[c.label.replace(/\s/g,"")]]).find(([,c])=>c.some(p=>i.includes(p)));if(!l){t.push({line:s,error:`'${o[2].trim()}'는 없는 분류예요`});continue}t.push({line:s,name:a,normKey:r,category:l[0],kind:null})}return t}function qt(e,t){let n=new Map,s=new Map(t.map(o=>[o.normKey,0]));for(let o of e){if(!Nn(o))continue;let a=Ne(o.normKey||X(o.memo),t);if(!a)continue;let i={category:a.category};a.kind==="exclude"&&o.transferKind!=="welfare"&&(i.transferKind="verify"),(o.category!==i.category||i.transferKind&&o.transferKind!==i.transferKind)&&(n.set(o.id,i),s.set(a.normKey,(s.get(a.normKey)||0)+1))}return{changes:n,perRule:s}}var zi=/^(우리|신한|국민|농협|하나|기업|전북|광주|부산|대구|경남|제주|산업|카카오|토스|케이|새마을|신협|우체국|SC|IBK|KB|NH)\s*/;function Yi(e,t){let n=String(e||"").trim().replace(zi,"").replace(/\s+/g,"");return!(!/^[가-힣]{2,4}$/.test(n)||t&&n===String(t).replace(/\s+/g,"")||/(마트|식당|상회|약국|의원|카페|슈퍼|문구|치킨|분식|정육|세탁|학원|병원|철물|주유|전자|상사|농협|은행|카드|페이|머니|충전)$/.test(n))}function Gi(e,t={}){return!e.length||!e.every(n=>n.category==="etc"&&n.paymentMethod!=="card")||!Yi(e[0].memo,t.userName)?!1:e.every(n=>n.amount>=3e4&&n.amount<=1e6&&n.amount%1e4===0)}function wa(e,t={}){if(!e||e.deleted||e.source!=="shortcut"||e.localized||Number(e.updatedAt||0)!==Number(e.createdAt||0))return null;let n=String(e.rawText||"");if(!n.trim())return null;let s=new Date(Number(e.createdAt)||Date.now()),o=jt(n,{rules:t.rules,settings:t.settings,now:s});if(!o||!o.amount)return null;let a={type:o.type,category:o.category,transferKind:o.transferKind||null,isRefund:!!o.isRefund,isExtra:!!o.isExtra,welfareBalance:o.welfareBalance??null,confidence:o.confidence,localized:!0};return o.direction&&(a.direction=o.direction),o.balanceAfter!=null&&(a.balanceAfter=o.balanceAfter),Ft(n,t.settings)!=="free"&&(a.memo=o.memo,a.date=o.date,a.normKey=o.normKey,o.counterpartyRaw&&(a.counterpartyRaw=o.counterpartyRaw)),a.needsCheck=!!o.needsCheck,a.status=o.needsCheck||(o.confidence??1)<.6?"pending":"confirmed",a}function Bn(e,t){if(!e||e.tripId||!$a(e))return null;let n=(t||[]).find(s=>s.startDate&&s.endDate&&e.date>=s.startDate&&e.date<=s.endDate);return n?n.id:null}function xa(e,t={}){let n=t.settings&&t.settings.travelKeywords||[];if(!n.length)return[];let s=t.gapDays||4,o=e.filter(r=>!r.deleted&&r.type==="expense"&&!r.tripId&&!r.isRefund&&n.some(l=>l&&`${r.memo||""} ${r.counterpartyRaw||""}`.includes(l))).sort((r,l)=>r.date<l.date?-1:1),a=[],i=[];for(let r of o)i.length&&Se(i[i.length-1].date,r.date)>s&&(a.push(i),i=[]),i.push(r);return i.length&&a.push(i),a.filter(r=>r.length>=2).map(r=>({startDate:r[0].date,endDate:r[r.length-1].date,approx:!0,days:Se(r[0].date,r[r.length-1].date)+1,count:r.length,localSpent:r.reduce((l,c)=>l+c.amount,0),currencies:[],ids:r.map(l=>l.id),name:`여행 ${r[0].date.slice(2,7).replace("-",".")}`})).reverse()}function Da(e,t=[]){let n=a=>typeof a=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(a),s=new Set,o=[];for(let a of e||[]){if(!a||!n(a.start))continue;let i=a.start,r=n(a.end)&&a.end>=a.start?a.end:a.start,l=`${i}|${r}`;if(s.has(l)||(s.add(l),(t||[]).some(d=>d.startDate&&d.endDate&&d.startDate<=r&&d.endDate>=i)))continue;let p=String(a.title||"").replace(/\s+/g," ").trim().slice(0,20)||`여행 ${i.slice(2,7).replace("-",".")}`;o.push({name:p,startDate:i,endDate:r,days:Se(i,r)+1,fromCalendar:!0,currencies:[]})}return o.sort((a,i)=>a.startDate<i.startDate?1:-1)}var Yt={date:/날짜|date/i,time:/시간|time/i,kind:/종류|payment\s*type/i,currency:/통화|currency/i,amount:/^금액|amount(?!.*krw)/i,balance:/잔액|balance/i,merchant:/가맹점|merchant/i,approval:/승인번호|approval/i,rate:/환율|exchange/i,krw:/원화금액|krw/i};function Zt(e){if(!Array.isArray(e))return!1;for(let t=0;t<Math.min(e.length,20);t++){let n=(e[t]||[]).map(o=>String(o||""));if(n.some(o=>Yt.krw.test(o))&&n.some(o=>Yt.kind.test(o)))return!0;let s=n.join("").replace(/\s+/g,"");if(/종류|paymenttype/i.test(s)&&/(원화금액|krwamount|가맹점)/i.test(s)&&/(날짜|date)/i.test(s))return!0}return!1}function Ji(e){if(!Array.isArray(e))return null;for(let t=0;t<Math.min(e.length,20);t++){let n=(e[t]||[]).map(o=>String(o||"").replace(/\s+/g,""));if(!n.some(o=>Yt.krw.test(o))){if(/종류|paymenttype/i.test(n.join(""))&&/(날짜|date)/i.test(n.join(""))){let a=Zi(e,t+1);if(a)return a}continue}let s={headerRow:t};for(let[o,a]of Object.entries(Yt))s[o]=n.findIndex(i=>a.test(i));return s.amount===s.krw&&(s.amount=n.findIndex((o,a)=>a!==s.krw&&/금액|amount/i.test(o))),s}return null}function oa(e,t={}){let{date:n,kind:s,krw:o,fxRaw:a,currency:i,balance:r,approval:l,time:c,joined:p,index:d}=e,u=String(e.merchant||"").replace(/\s+/g," ").trim(),v=s==="cancel"||s==="topup",$="expense",g="travel",b=null,h=!1;return s==="topup"?($="transfer",b="fxTopup",g="etc",u=`트래블월렛 충전${i?` (${i})`:""}`):s==="cancel"?h=!0:s==="atm"&&(u=u?`현지 인출 ${u}`:"현지 인출"),u||(u=s==="adjust"?"정산":"내역"),$==="expense"&&(g=Ne(X(u),t.rules)?ve(u,"expense",t.rules):"travel"),{type:$,direction:v?"in":"out",date:n,amount:o,transferKind:b,needsCheck:!1,isExtra:!1,category:g,memo:u,normKey:X(u),counterpartyRaw:u,balanceAfter:null,foreignBalance:r??null,accountId:t.accountId||null,paymentMethod:"travelwallet",source:"statement",isRefund:h,installmentMonths:null,isOverseas:!!i&&i!=="KRW",currency:i&&i!=="KRW"?i:"",foreignAmount:a!=null?Math.abs(a):null,twKind:s,confidence:.9,sourceHash:`tw|${n}|${c||""}|${o}|${u}|${l||""}|${s}|${d}`,rawText:p||""}}function Xi(e){let t=e.map(u=>String(u??"").trim()),n=t.join(" ").replace(/\s+/g," ").trim(),s=Qe(t.find(u=>Qe(u))),o=Ze(t.find(u=>Ze(u)));if(!s||!o)return null;let a=n.match(/\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY|SGD|AUD|CAD|PHP|MYR|IDR)\b/),i=a?a[1]:"",r=null;for(let u=t.length-1;u>=0;u--){let v=t[u].replace(/[^\d,]/g,"");if(/^\d{1,3}(,\d{3})*$|^\d+$/.test(v)&&v.replace(/,/g,"").length>=1&&!/=/.test(t[u])&&!/[¥￦$€]/.test(t[u])){r=parseInt(v.replace(/,/g,""),10);break}}let c=n.replace(/\d{3,}-\d{2}\*{2}-\*{4}-\d{3}\*/g," ").replace(/\d{4}-\d{2}[\d*]{2}/g," ").match(/(^|[\s(])([-+−–])\s*([\d,]+(?:\.\d+)?)/),p=c?parseFloat(c[3].replace(/,/g,"")):null,d=n.replace(qi(t)," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(/(결제\s*취소|기타\s*정산|ATM\s*출금|결제|충전)\s*\([a-z ]+\)/gi," ").replace(/[가-힣]+\([A-Z ]+\)/g," ").replace(/[A-Z]{2,}\s+[A-Z]+\)/g," ").replace(/\d{4}-\d{2}\*{2}-\*{4}-\d{3}\*/g," ").replace(/[¥￦$€£][\s\d,.]+/g," ").replace(/[\d,]+\s*=/g," ").replace(/\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY|SGD|AUD|CAD|PHP|MYR|IDR)\b/g," ").replace(/[-+−–]\s*[\d,]+(\.\d+)?/g," ").replace(/(^|\s)[\d,]+(\.\d+)?(?=\s|$)/g," ").replace(/\s+/g," ").trim();return o==="topup"&&(d=""),{date:s,kind:o,currency:i,krw:r,fx:p,merchant:d,joined:n}}function qi(e){for(let t of e)if(Qe(t))return t;return"\0없음"}function Zi(e,t){let n=[];for(let a=t;a<e.length&&n.length<12;a++){let i=e[a]||[];i.length>=6&&Ze(i.find(r=>Ze(r)))&&n.push(i)}if(n.length<2)return null;let s=n[0],o={headerRow:t-1,date:-1,time:-1,kind:-1,currency:-1,amount:-1,balance:-1,merchant:-1,approval:-1,rate:-1,krw:-1};for(let a=0;a<s.length;a++){let i=String(s[a]||"").trim();if(o.date<0&&Qe(i)){o.date=a;continue}if(o.time<0&&/^\d{1,2}:\d{2}(:\d{2})?$/.test(i)){o.time=a;continue}if(o.kind<0&&Ze(i)){o.kind=a;continue}if(o.currency<0&&/^[A-Z]{3}$/.test(i)){o.currency=a;continue}if(o.amount<0&&o.currency>=0&&/[-+−–]?\s*[\d,]+/.test(i)&&/\d/.test(i)){o.amount=a;continue}if(o.balance<0&&o.amount>=0&&/^[\d,]+$/.test(i)){o.balance=a;continue}if(o.merchant<0&&o.balance>=0&&i){o.merchant=a;continue}}return o.date<0||o.kind<0||o.amount<0?null:o}function Mn(e){let t=String(e??"").replace(/\s+/g,"");if(!t)return null;let n=/^[-−–]/.test(t)||/^\(.*\)$/.test(t),s=t.replace(/[^\d]/g,"");if(!s)return null;let o=parseInt(s,10);return isNaN(o)?null:n?-o:o}var Qi=[{re:/충전|charge/i,kind:"topup"},{re:/결제\s*취소|payment\s*cancel|취소|cancel|refund/i,kind:"cancel"},{re:/ATM|출금|withdraw/i,kind:"atm"},{re:/기타\s*정산|adjust/i,kind:"adjust"},{re:/결제|payment/i,kind:"payment"}];function Ze(e){let t=String(e||"");for(let n of Qi)if(n.re.test(t))return n.kind;return null}function Qt(e,t={}){let n=Ji(e);if(!n)return{entries:[],skipped:[]};let s=h=>{let m=0;for(let w=n.headerRow+1;w<Math.min(e.length,n.headerRow+12);w++){let M=e[w]||[];Qe(M[n.date+h])&&Ze(M[n.kind+h])&&m++}return m},o=0,a=-1;for(let h of[0,1,-1,2]){let m=s(h);m>a&&(a=m,o=h)}let i={};for(let[h,m]of Object.entries(n))i[h]=h==="headerRow"?m:m>=0?m+o:-1;let r=[],l=[],c=(h,m)=>m>=0?h[m]:void 0,p=e.slice(i.headerRow+1).filter(h=>(h||[]).some(m=>String(m||"").trim())),d=new Set(p.map(h=>h.length)),u=e[i.headerRow]||[],v=[/날짜|date/i,/시간|time/i,/종류|payment\s*type/i,/통화|currency/i,/^금액|amount/i,/잔액|balance/i,/가맹점|merchant/i,/승인번호|approval/i,/환율|exchange/i,/원화금액|krw/i],$=u.some(h=>v.filter(m=>m.test(String(h||""))).length>=2),g=p.some(h=>h.length>u.length);if(d.size>2||i.krw<0||$||g){for(let h=i.headerRow+1;h<e.length;h++){let m=Xi(e[h]||[]);if(!m||!m.krw){(e[h]||[]).join("").trim()&&l.push(h);continue}let w=oa({date:m.date,kind:m.kind,krw:m.krw,fxRaw:m.fx,currency:m.currency,merchant:m.merchant,balance:null,approval:"",time:"",joined:m.joined,index:h},t);w&&r.push(w)}return{entries:r,skipped:l}}for(let h=i.headerRow+1;h<e.length;h++){let m=e[h]||[],w=m.join(" ").trim(),M=Qe(c(m,i.date)),y=Ze(c(m,i.kind));if(!M||!y){w&&l.push(h);continue}let C=Math.abs(Mn(c(m,i.krw))||0),D=Mn(c(m,i.amount));if(!C){l.push(h);continue}let I=String(c(m,i.currency)||"").replace(/[^A-Z]/gi,"").toUpperCase(),O=String(c(m,i.merchant)||"").replace(/\s+/g," ").trim(),P=Mn(c(m,i.balance)),H=y==="cancel"||y==="topup",R="expense",E="travel",A=null,F=!1;y==="topup"?(R="transfer",A="fxTopup",E="etc",O=`트래블월렛 충전${I?` (${I})`:""}`):y==="cancel"?F=!0:y==="atm"&&(O=O?`현지 인출 ${O}`:"현지 인출"),O||(O=y==="adjust"?"정산":"내역"),R==="expense"&&(E=Ne(X(O),t.rules)?ve(O,"expense",t.rules):"travel"),r.push(oa({date:M,kind:y,krw:C,fxRaw:D,currency:I,merchant:O,balance:P,approval:String(c(m,i.approval)||"").trim(),time:String(c(m,i.time)||"").trim(),joined:w,index:h},t))}return{entries:r,skipped:l}}var er=/(거래일시|거래일자|이용일자|날짜|일자)/;function tr(e,t){let n=new Map;for(let a of e)n.set(Math.round(a[0].y),a);let s=0,o=0;for(let a of t){let i=n.get(Math.round(a[0].y));if(!i)continue;o++;let r=i.map(l=>l.s).join("");/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/.test(r)&&/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/.test(a.map(l=>l.s).join(""))&&s++}return o>0&&s/o>.5}function nr(e){let t=(e||[]).filter(a=>a&&String(a.str||"").trim()).map(a=>({s:String(a.str),x:+a.x||0,y:Math.round(+a.y||0),w:+a.w||0})).sort((a,i)=>i.y-a.y||a.x-i.x),n=[],s=[],o=null;for(let a of t)o!==null&&Math.abs(a.y-o)>3&&(s.length&&n.push(s),s=[]),s.push(a),o=a.y;return s.length&&n.push(s),n}function sr(e){if(!e.length)return[];let t=0,n=0;for(let l of e)t+=l.w,n+=Math.max(1,String(l.s).length);let s=n>0&&t>0?t/n:5,o=Math.max(s*.9,3),a=[],i=e[0].s,r=e[0].x;for(let l=1;l<e.length;l++)e[l].x-(e[l-1].x+e[l-1].w)>o?(a.push({text:i,x:r}),i=e[l].s,r=e[l].x):i+=e[l].s;return a.push({text:i,x:r}),a}function Ca(e){let t=(e||[]).map(p=>nr(p)),n=p=>p.some(d=>er.test(d.map(u=>u.s).join(""))),s=[];for(let p=0;p<t.length;p++){let d=t[p];if(d.length){if(s.length&&!n(d)&&!tr(s[s.length-1],d)){let u=s[s.length-1],v=0;for(let h of u)for(let m of h)v=Math.max(v,m.x+m.w);let $=1/0;for(let h of d)for(let m of h)$=Math.min($,m.x);let g=v+40-(isFinite($)?$:0),b=new Map;for(let h of u)b.set(Math.round(h[0].y),h);for(let h of d){let m=h.map(y=>({...y,x:y.x+g})),w=Math.round(h[0].y),M=b.get(w);M?M.push(...m):u.push(m)}continue}s.push(d.slice())}}let o=[];for(let p of s)for(let d of p)o.push(d);if(!o.length)return[];let a=o.map(p=>sr(p).map(d=>d.text.trim()).filter(d=>d!==""));if(!a.length)return[];let i=new Map;for(let p of a)i.set(p.length,(i.get(p.length)||0)+1);let r=0,l=-1;for(let[p,d]of i)(d>l||d===l&&p>r)&&(l=d,r=p);if(r<3)return a;let c=p=>{let d=String(p).replace(/\s/g,"");return/^-?[\d,]+$/.test(d)&&/\d/.test(d)||/^\d{2,4}[.\-/]\d{1,2}[.\-/]\d{1,2}$/.test(d)||/^\d+$/.test(d)};return a.map(p=>{if(p.length<=r)return p;let d=p.slice();for(;d.length>r;){let u=-1;for(let v=d.length-2;v>=0;v--)if(!c(d[v])&&!c(d[v+1])){u=v;break}if(u<0)break;d.splice(u,2,`${d[u]} ${d[u+1]}`)}return d})}function Sa(e){return!e||e.deleted||e.catBy==="user"||e.memoBy==="user"||e.mergedInto||e.pairedFrom||e.transferKind==="external"||e.source==="manual"?!1:!!String(e.rawText||"").trim()}function ar(e,t={}){if(!Sa(e))return null;let n=t.settings||{},s=String(e.rawText||""),o={counterpartyRaw:e.counterpartyRaw||e.memo,memo:e.memo,rawText:s,amount:e.amount,direction:e.direction||(e.type==="income"?"in":"out"),paymentMethod:e.paymentMethod,category:e.category},a=e.type,i=e.category,r=e.transferKind||null,l=!!e.isExtra,c=e.familyBy||null;if(o.direction==="in"){let u=je(o,n);u?(a=u.type,r=u.transferKind||null,i=u.category||(a==="income"?"income":i)):(a="transfer",r=null)}else{a="expense",r=null,i=ve(o.counterpartyRaw||o.memo,"expense",t.rules);let u=Be(o,n);u&&(u.type&&(a=u.type),u.category&&(i=u.category),r=u.transferKind||null,l=!!u.isExtra,c=u.familyBy||null);let v=Xt({...e,type:a,category:i,transferKind:r},t.rules||[]);v&&(i=v.category,v.transferKind!==void 0&&(r=v.transferKind))}let p={};return a!==e.type&&(p.type=a),i!==e.category&&(p.category=i),(r||null)!==(e.transferKind||null)&&(p.transferKind=r),!!l!=!!e.isExtra&&(p.isExtra=l),["type","category","transferKind","isExtra"].some(u=>u in p)?(c&&c!==e.familyBy&&(p.familyBy=c),p):null}function Aa(e,t={}){let n=[],s=0;for(let o of e||[]){if(!Sa(o)){o&&!o.deleted&&s++;continue}let a=ar(o,t);a&&n.push({id:o.id,memo:o.memo,amount:o.amount,date:o.date,before:{type:o.type,category:o.category,transferKind:o.transferKind||null},after:{type:a.type??o.type,category:a.category??o.category,transferKind:a.transferKind!==void 0?a.transferKind:o.transferKind||null},patch:a})}return{total:(e||[]).filter(o=>o&&!o.deleted).length,skipped:s,changes:n}}var or=/(\d{4}-\d{2}\*{2,4}-\*{4}-\d{3,4}\*?|\d{4}-\*{4}-\*{4}-\d{4}|\*{4}-?\d{4})/,ir=["우리","국민","신한","하나","농협","기업","산업","전북","광주","부산","대구","경남","제주","새마을","우체국","카카오뱅크","케이뱅크","토스뱅크","씨티","SC제일","수협","신협"],rr=["신한","삼성","현대","국민","롯데","하나","우리","비씨","BC","농협","씨티","카카오","케이","토스"];function Ia(e){let n=(e||[]).slice(0,12).map(r=>(r||[]).join(" ")).join(`
`).replace(/\s+/g," "),s={kind:null,accountNo:"",cardNo:"",bank:"",brand:"",holder:""},o=n.match(or);o&&(s.cardNo=o[1],s.kind="card");let a=n.match(/(계좌\s*번호|계좌|출금계좌|입금계좌)\D{0,6}(\d{2,4}-\d{2,4}-\d{2,6}(?:-\d{1,6})?)/);a&&!/\*/.test(a[2])&&(s.accountNo=a[2],s.kind||(s.kind="account"));let i=(e||[]).slice(0,4).map(r=>(r||[]).join(" ")).join(" ").replace(/\s+/g," ");return s.bank=ir.find(r=>i.includes(r+"은행")||i.includes(r+"뱅크"))||"",s.brand=rr.find(r=>i.includes(r+"카드"))||"",s.brand&&!s.cardNo&&(s.kind=s.kind||"card"),s.bank&&!s.accountNo&&!s.cardNo&&(s.kind=s.kind||"account"),/가맹점|이용금액|승인금액|할부/.test(n)&&(s.kind="card"),/찾으신금액|맡기신금액|입금액|출금액|거래후\s*잔액/.test(n)&&(s.kind="account"),s}function Ra(e,t){if(!e||!Array.isArray(t))return null;let n=a=>String(a||"").replace(/[^\d]/g,"").slice(-4),s=n(e.accountNo||e.cardNo);if(s.length===4){let a=t.find(i=>n(i.number)===s);if(a)return a}let o=e.bank||e.brand;if(o){let a=t.find(i=>String(i.name||"").includes(o));if(a)return a}return null}function Ma(e){if(!e||!e.length)return"";let t=e[0],n=e.length>1?` 외 ${e.length-1}곳`:"";return`${t.afterDate} ~ ${t.beforeDate} 사이에 빠진 내역이 있어 보여요${n}`}function lr(e){let t=String(e||"");return t=t.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," "),t=t.replace(/<\/(tr|div|p|h1|h2|h3|li|table|thead|tbody)>/gi,`
`).replace(/<br\s*\/?>/gi,`
`).replace(/<\/td>/gi,"	"),t=t.replace(/<[^>]+>/g," "),t=t.replace(/&nbsp;/g," ").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'"),t.split(`
`).map(n=>n.replace(/[ \t]+/g," ").trim()).filter(Boolean)}var cr=/(\d{1,2})\s*일\s*차|Day\s*(\d{1,2})/i,dr=/(\d{1,2})\s*월\s*(\d{1,2})\s*일/,ur=/^(\d{1,2}:\d{2})(?:\s*~\s*(\d{1,2}:\d{2}))?/,Ta=/(?:약\s*)?([\d,]+)\s*(?:~|-|부터)?\s*([\d,]+)?\s*엔/,Ea=/(?:약\s*)?([\d,]{2,})\s*(?:~|-|부터)?\s*([\d,]+)?\s*원(?![가-힣])/,en=e=>parseInt(String(e||"").replace(/[^\d]/g,""),10)||0;function Na(e,t=9.2){let n=String(e||"");if(/무료|free/i.test(n)&&!Ta.test(n)&&!Ea.test(n))return 0;let s=n.match(Ta);if(s){let a=en(s[1]),i=s[2]?en(s[2]):a;return Math.round((a+i)/2*t)}let o=n.match(Ea);if(o){let a=en(o[1]),i=o[2]?en(o[2]):a;return Math.round((a+i)/2)}return null}var pr=[["transport",["버스","전철","지하철","메트로","JR","신칸센","택시","이동","교통","패스","편도","왕복","모노레일","라인"]],["stay",["호텔","숙박","료칸","게스트하우스","1박","숙소비"]],["food",["점심","저녁","아침","식사","라멘","규동","카페","맥주","이자카야","돈카츠","스시","먹","맛집"]],["sight",["입장","전망대","티켓","관람","박물관","미술관","체험","투어","뮤지엄","공원","신사","절"]],["shop",["쇼핑","기념품","면세","굿즈","상점"]]];function Ba(e){let t=String(e||"").slice(0,120),n="etc",s=1/0;for(let[o,a]of pr)for(let i of a){let r=t.indexOf(i);r>=0&&r<s&&(s=r,n=o)}return n}var Ln={transport:"교통",stay:"숙박",food:"식비",sight:"관광",shop:"쇼핑",etc:"기타"};function La(e,t={}){let s=/<\/?[a-z][\s\S]*>/i.test(String(e||""))?lr(e):String(e||"").split(`
`).map(r=>r.trim()).filter(Boolean),o=t.yenRate||9.2,a=[],i=null;for(let r of s){let l=r.match(cr);if(l){let p=parseInt(l[1]||l[2],10),d=r.match(dr);i={dayNo:p,date:"",month:d?+d[1]:null,day:d?+d[2]:null,title:r.replace(/\s+/g," ").trim(),items:[]},a.push(i);continue}if(!i)continue;let c=r.match(ur);if(c){let p=r.slice(c[0].length).replace(/^[\s\t·-]+/,"").trim();i.items.push({time:c[1],endTime:c[2]||"",text:p,cost:Na(r,o),kind:Ba(r)})}else if(i.items.length){let p=i.items[i.items.length-1];p.text=`${p.text} ${r}`.replace(/\s+/g," ").trim().slice(0,300),p.cost==null&&(p.cost=Na(r,o)),p.kind==="etc"&&(p.kind=Ba(r))}}if(t.startDate&&a.length){let r=new Date(`${t.startDate}T00:00:00`);for(let l of a){let c=new Date(r);c.setDate(c.getDate()+(l.dayNo-1)),l.date=`${c.getFullYear()}-${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`}}return{days:a,parsed:a.length>0,raw:String(e||"")}}function Oa(e){let t=[];for(let o of e||[]){let a={},i=0;for(let r of o.items||[])r.cost&&(a[r.kind]=(a[r.kind]||0)+r.cost,i+=r.cost);t.push({dayNo:o.dayNo,date:o.date,total:i,kinds:a})}let n={},s=0;for(let o of t){s+=o.total;for(let[a,i]of Object.entries(o.kinds))n[a]=(n[a]||0)+i}return{byDay:t,total:s,kinds:n}}var B=Pe.bind(Te);function Pa({db:e,patch:t,entries:n,flash:s,onAdopt:o}){let[a,i]=L(!1),[r,l]=L(null),c=J(()=>{let g=new Set(e.fixedExpenses.map(b=>b.normKey));return ia(n).filter(b=>!g.has(b.normKey))},[n,e.fixedExpenses]),p=de().slice(0,7),d=e.fixedExpenses.filter(g=>g.status!=="ended").map(g=>{let b=n.find(M=>!M.deleted&&M.date.slice(0,7)===p&&(M.fixedId===g.id||Gt(M,g))),h=String(g.dayOfMonth).padStart(2,"0"),m=`${p}-${h}`,w=!b&&m<de();return{...g,hit:b,due:m,late:w}}).sort((g,b)=>g.dayOfMonth-b.dayOfMonth),u=d.filter(g=>g.hit&&g.hit.status!=="scheduled").reduce((g,b)=>g+b.hit.amount,0),v=d.reduce((g,b)=>g+(b.hit&&b.hit.status!=="scheduled"?b.hit.amount:b.amount),0),$=g=>t(b=>{b.fixedExpenses=b.fixedExpenses.filter(h=>h.id!==g)});return B`
    <div class="fixedWrap">
      ${c.length>0&&B`
        <div class="suggest">
          <div class="suggestHead">매달 반복되는 것 ${c.length}건을 찾았어요</div>
          ${c.slice(0,6).map(g=>B`
            <div class="suggestRow" key=${g.normKey}>
              <span class="sName">${g.name}</span>
              <span class="sAmt">${g.amountVariable?"약 ":""}₩${z(g.amount)}</span>
              <span class="sDay">매월 ${g.dayOfMonth}일</span>
            </div>`)}
          <div class="acts">
            <button class="btn primary sm" onClick=${()=>{o(c),s(`고정비 ${c.length}건 등록`)}}>
              전부 고정비로 등록
            </button>
          </div>
        </div>`}

      <div class="fixedHead">
        <span>이번 달 고정비</span>
        <span class="fixedSum">나감 ₩${z(u)} · 예정 포함 ₩${z(v)}</span>
      </div>

      ${d.length===0&&c.length===0&&B`
        <div class="empty">아직 고정비가 없어요.<br />세 달치 기록이 쌓이면 알아서 찾아냅니다.</div>`}

      ${d.map(g=>B`
        <div class=${"fixedRow"+(g.late?" late":"")} key=${g.id}>
          <span class=${"fixedMark "+(g.hit&&g.hit.status!=="scheduled"?"done":g.late?"late":"wait")}>
            ${g.hit&&g.hit.status!=="scheduled"?"✓":g.late?"!":"○"}
          </span>
          <span class="fixedDay">${g.dayOfMonth}일</span>
          <span class="fixedName">${g.name}</span>
          <span class="fixedAmt">
            ${g.amountVariable&&!(g.hit&&g.hit.status!=="scheduled")?"약 ":""}
            ₩${z(g.hit?g.hit.amount:g.amount)}
          </span>
          <button class="del" onClick=${()=>$(g.id)} aria-label="삭제">×</button>
        </div>
        ${g.late&&B`<div class="fixedLate">예정일이 지났는데 확인이 안 돼요. 통장 내역을 붙여넣으면 맞춰집니다.</div>`}`)}

      ${a?B`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="이름" value=${r.name} onInput=${g=>l({...r,name:g.target.value})} />
              <input class="inp" type="number" placeholder="금액" value=${r.amount||""} onInput=${g=>l({...r,amount:parseInt(g.target.value||"0",10)})} />
              <input class="inp" type="number" min="1" max="31" placeholder="며칠" value=${r.dayOfMonth||""} onInput=${g=>l({...r,dayOfMonth:parseInt(g.target.value||"1",10)})} />
            </div>
            <div class="chips">
              ${Re.filter(g=>g.key!=="income").map(g=>B`
                <button key=${g.key} class=${"chip sm"+(r.category===g.key?" on":"")}
                  style=${r.category===g.key?`background:${g.color};border-color:${g.color}`:`border-color:${g.color}55;color:${g.color}`}
                  onClick=${()=>l({...r,category:g.key})}>${g.label}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>i(!1)}>취소</button>
              <button class="btn primary sm" disabled=${!r.name||!r.amount}
                onClick=${()=>{t(g=>{g.fixedExpenses=[...g.fixedExpenses,{...r,id:Ge(),normKey:X(r.name),status:"active",source:"manual"}]}),i(!1),s("고정비를 등록했어요")}}>등록</button>
            </div>
          </div>`:B`<button class="tag dash addFixed" onClick=${()=>{l({name:"",amount:0,dayOfMonth:1,category:"living",amountVariable:!1}),i(!0)}}>+ 직접 추가</button>`}
    </div>`}function Fa({entries:e,onApply:t,onApplyRules:n,userName:s,ruleCount:o,onClose:a}){let[i,r]=L(!1),[l,c]=L(!1),p=J(()=>{let D=ua(e,{userName:s});return i?D:D.filter(I=>I.needsReview||I.mixed)},[e,i,s]),[d,u]=L({}),[v,$]=L(!1),[g,b]=L(""),[h,m]=L(null),w=J(()=>_a(g),[g]),M=J(()=>qt(e,w.filter(D=>!D.error)),[e,w]),y=w.filter(D=>!D.error),C=l?p:p.slice(0,40);return B`
    <div class="card">
      <div class="cardLabel">가맹점별로 한 번에 분류하기 · ${p.length}곳</div>
      <div class="hint sm">한 번 정하면 같은 곳의 지난 기록까지 바뀌고, 앞으로도 자동으로 분류됩니다.</div>
      <div class="row wrap" style="margin-top:8px">
        <button class=${"tag"+(i?"":" on")} onClick=${()=>r(!1)}>정리할 것만</button>
        <button class=${"tag"+(i?" on":"")} onClick=${()=>r(!0)}>전체 보기</button>
        <button class=${"tag dash"+(v?" on":"")} onClick=${()=>$(!v)}>규칙 한꺼번에 넣기</button>
      </div>

      ${h&&!v&&B`
        <div class="tidyResult">규칙 <b>${h.rules}개</b>를 넣고 지난 기록 <b>${h.changed}건</b>을 바꿨어요. 앞으로 들어오는 것도 자동으로 분류됩니다.</div>`}
      ${v&&B`
        <div class="ruleBox">
          <div class="hint sm">
            한 줄에 하나씩 <b>이름 = 분류</b>로 적으세요. 오른쪽에 <b>제외</b>를 쓰면 합계에서 뺍니다(해외 서비스 확인용 결제 등).
            이 규칙은 이 기기에만 저장되고 코드나 외부로 나가지 않습니다. 지금 규칙 ${o||0}개.
          </div>
          <textarea class="pasteArea ruleArea" value=${g} onInput=${D=>b(D.target.value)}
            placeholder=${`예)
홍길동 = 경조사
동네식당 = 식비
oracle = 제외`}></textarea>
          ${w.length>0&&B`
            <div class="ruleList">
              ${w.map((D,I)=>B`
                <div class=${"ruleRow"+(D.error?" bad":"")} key=${I}>
                  <span class="ruleName">${D.name||D.line}</span>
                  <span class="ruleTo">${D.error?D.error:D.kind==="exclude"?"합계 제외":Re.find(O=>O.key===D.category)?.label}</span>
                  ${!D.error&&B`<span class="ruleCnt">${M.perRule.get(D.normKey)||0}건</span>`}
                </div>`)}
            </div>`}
          <div class="acts">
            <button class="btn primary sm" disabled=${!y.length}
              onClick=${()=>{let D=n(w);m({rules:y.length,changed:D}),b(""),$(!1)}}>
              규칙 ${y.length}개 적용 · 기록 ${M.changes.size}건 바뀜
            </button>
          </div>
        </div>`}

      <div class="groupList">
        ${p.length===0&&B`<div class="empty">정리할 게 없어요.<br />전체 보기로 이미 분류된 곳도 볼 수 있어요.</div>`}
        ${C.map(D=>B`
          <div class=${"groupRow"+(d[D.normKey]?" settled":"")} key=${D.normKey}>
            <div class="groupTop">
              <span class="gName">${D.name}</span>
              <span class="gMeta">${D.count}건 · ₩${z(D.total)}</span>
            </div>
            ${D.suggest&&!d[D.normKey]&&B`
              <button class="suggestPill" onClick=${()=>{u(I=>({...I,[D.normKey]:D.suggest})),t(D,D.suggest)}}>
                사람 이름 · 딱 떨어지는 금액 — ${Re.find(I=>I.key===D.suggest)?.label}일까요? 탭하면 정해져요
              </button>`}
            <div class="chips">
              ${Re.filter(I=>I.key!=="income").map(I=>B`
                <button key=${I.key}
                  class=${"chip sm"+((d[D.normKey]||D.category)===I.key?" on":"")}
                  style=${(d[D.normKey]||D.category)===I.key?`background:${I.color};border-color:${I.color}`:`border-color:${I.color}55;color:${I.color}`}
                  onClick=${()=>{u(O=>({...O,[D.normKey]:I.key})),t(D,I.key)}}>${I.label}</button>`)}
            </div>
          </div>`)}
        ${!l&&p.length>40&&B`<button class="pickToggle" onClick=${()=>c(!0)}>나머지 ${p.length-40}곳 더 보기</button>`}
      </div>
      <div class="acts"><button class="btn ghost sm" onClick=${a}>닫기</button></div>
    </div>`}function Ha({db:e,entries:t,patch:n,rowProps:s}){let[o,a]=L(!1),[i,r]=L(""),[l,c]=L("bank"),p=e.accounts,d=J(()=>{let b={};for(let h of p){let m=Tn(t,h.id);b[h.id]={balance:m.latest?m.latest.balanceAfter:h.balance||0,at:m.latest?m.latest.date:h.balanceAt,gaps:m.gaps}}return b},[p,t]),u=p.reduce((b,h)=>b+(d[h.id]?.balance||0),0),v=J(()=>{let b=de().slice(0,7);return t.filter(h=>!h.deleted&&h.type==="transfer"&&h.date.slice(0,7)===b).sort((h,m)=>h.date<m.date?1:-1)},[t]),$=b=>p.find(h=>h.id===b)?.name||"?",g={bank:"통장",card:"카드",cash:"현금",fx:"외화",savings:"저축",invest:"투자"};return B`
    <div class="assetWrap">
      <div class="assetTotal">
        <span class="assetTotalLabel">총 자산</span>
        <span class="assetTotalVal">₩${z(u)}</span>
      </div>

      ${p.length===0&&B`<div class="empty">등록된 계좌가 없어요.<br />문자나 내역을 넣으면 알아서 찾아내고,<br />아래에서 직접 추가할 수도 있어요.</div>`}

      ${p.map(b=>{let h=d[b.id]||{},m=h.at&&(new Date-new Date(h.at+"T00:00:00"))/864e5>7;return B`
          <div class="acctRow" key=${b.id}>
            <span class="acctKind">${g[b.kind]||b.kind}</span>
            <span class="acctName">${b.name}${b.last4?B`<span class="acctLast4"> ${b.last4}</span>`:""}</span>
            <span class="acctBal">₩${z(h.balance||0)}</span>
            <button class="del" onClick=${()=>n(w=>{w.accounts=w.accounts.filter(M=>M.id!==b.id)})} aria-label="삭제">×</button>
          </div>
          ${h.gaps&&h.gaps.length>0&&B`
            <div class="acctWarn">${h.beforeDate||h.gaps[0].beforeDate} 부근에 기록 안 된 거래 ₩${z(h.gaps[0].missing)}이 있어요</div>`}
          ${m&&B`<div class="acctStale">잔액이 ${h.at} 기준이에요</div>`}`})}

      ${o?B`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="계좌 이름 (예: 하나 주계좌)" value=${i} onInput=${b=>r(b.target.value)} />
            </div>
            <div class="chips">
              ${Object.entries(g).map(([b,h])=>B`
                <button key=${b} class=${"tag"+(l===b?" on":"")} onClick=${()=>c(b)}>${h}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>a(!1)}>취소</button>
              <button class="btn primary sm" disabled=${!i.trim()} onClick=${()=>{n(b=>{b.accounts=[...b.accounts,{id:Ge(),name:i.trim(),kind:l,aliases:[],balance:0}]}),r(""),a(!1)}}>추가</button>
            </div>
          </div>`:B`<button class="tag dash addFixed" onClick=${()=>a(!0)}>+ 계좌 추가</button>`}

      ${v.length>0&&B`
        <div class="transferBox">
          <div class="groupHead">이번 달 계좌 간 이동 ${v.length}건</div>
          ${v.slice(0,10).map(b=>B`
            <div class="tRow" key=${b.id}>
              <span class="tDate">${b.date.slice(5)}</span>
              <span class="tPath">
                ${b.fromAccountId?$(b.fromAccountId):b.accountId?$(b.accountId):"?"}
                → ${b.toAccountId?$(b.toAccountId):b.memo||"?"}
              </span>
              <span class="tAmt">₩${z(b.amount)}</span>
              ${!b.pairedFrom&&b.transferKind==="internal"&&B`<span class="tHalf">⟳</span>`}
            </div>`)}
        </div>`}
    </div>`}function ja({db:e,entries:t,patch:n,flash:s,onClose:o}){let[a,i]=L(null),[r,l]=L(null),[c,p]=L(null),d=()=>{let $={accounts:e.accounts,userName:e.settings.userName,settings:e.settings},g={};for(let M of t)M.deleted||M.transferKind||M.category==="family"||M.category==="travel"||!(M.type==="transfer"||M.type==="expense"&&M.paymentMethod==="account"&&M.direction==="out")||(g[M.id]=ca(M,$));let{pairs:b,review:h,halves:m}=da(t,$),w=va(t);l({kinds:g,pairs:b,review:h,halves:m,refundPairs:w,classified:Object.keys(g).length,pairedCount:b.length})},u=()=>{if(!c||!c.length)return;let $=new Map(c.map(b=>[b.id,b]));n(b=>{b.entries=b.entries.map(h=>{let m=$.get(h.id);return m?{...h,type:m.type,transferKind:m.transferKind,isRefund:m.isRefund,deleted:m.deleted,mergedInto:m.mergedInto,pairedFrom:m.pairedFrom,fromAccountId:m.fromAccountId,toAccountId:m.toAccountId,fee:m.fee,updatedAt:Date.now(),dirty:!0}:h})});let g=c.length;p(null),i(null),s(`${g}건을 정리 전으로 되돌렸어요`)},v=()=>{if(!r)return;let{kinds:$,pairs:g,review:b,halves:h,refundPairs:m,classified:w,pairedCount:M}=r,y=new Set(m.map(I=>I.refund.id)),C=new Set([...Object.keys($),...y,...g.map(I=>I.inn.id),...g.map(I=>I.out.id)]),D=t.filter(I=>C.has(I.id)||I.transferKind&&(I.category==="family"||I.category==="travel")).map(I=>({id:I.id,type:I.type,transferKind:I.transferKind||null,isRefund:!!I.isRefund,deleted:!!I.deleted,mergedInto:I.mergedInto||null,pairedFrom:I.pairedFrom||null,fromAccountId:I.fromAccountId||null,toAccountId:I.toAccountId||null,fee:I.fee||0}));n(I=>{I.entries=I.entries.map(O=>{let P=$[O.id],H=O;(O.category==="family"||O.category==="travel")&&O.transferKind&&(H={...H,type:"expense",transferKind:null,updatedAt:Date.now(),dirty:!0}),P&&(H={...H,transferKind:P.transferKind,toAccountId:P.toAccountId||H.toAccountId||null,status:"confirmed",updatedAt:Date.now(),dirty:!0},P.transferKind==="external"?H={...H,type:"expense"}:H.type==="expense"&&(H={...H,type:"transfer"})),y.has(O.id)&&(H={...H,type:"expense",isRefund:!0,transferKind:null,status:"confirmed",confidence:1,updatedAt:Date.now(),dirty:!0});let R=g.find(A=>A.inn.id===O.id);R&&(H={...H,deleted:!0,mergedInto:R.out.id,updatedAt:Date.now(),dirty:!0});let E=g.find(A=>A.out.id===O.id);return E&&(H={...H,type:"transfer",transferKind:H.transferKind||"internal",fromAccountId:E.out.accountId||null,toAccountId:E.inn.accountId||null,pairedFrom:[E.out.id,E.inn.id],fee:E.fee||0,updatedAt:Date.now(),dirty:!0}),H})}),p(D),l(null),i({classified:w,pairedCount:M,review:b.length,halves:h.length,refunds:m.length}),s(`정리했어요 · ${D.length}건 바뀜`)};return B`
    <div class="card">
      <div class="cardLabel">자동 정리</div>
      <div class="hint sm">
        계좌 간 이체를 한 건으로 합치고, 카드 대금과 저축을 지출에서 빼고,
        지인 송금은 지출로 되돌립니다. <b>바꾸기 전에 무엇이 바뀌는지 먼저 보여주고, 실행 뒤에도 되돌릴 수 있습니다.</b>
      </div>
      ${r&&B`
        <div class="tidyResult">
          <div>이체 성격 판정 <b>${r.classified}건</b></div>
          <div>반쪽 이체 짝짓기 <b>${r.pairedCount}쌍</b></div>
          ${r.refundPairs.length>0&&B`<div>나갔다 돌아온 돈 <b>${r.refundPairs.length}건</b> 환불 처리</div>`}
          ${r.review.length>0&&B`<div>확인 필요 <b>${r.review.length}건</b></div>`}
          ${r.halves.length>0&&B`
            <div class="gapWarn">짝 못 찾음 ${r.halves.length}건 — 나머지 통장 내역을 먼저 넣는 게 좋습니다</div>`}
        </div>`}
      ${a?B`<div class="tidyResult">
            <div>이체 성격 판정 <b>${a.classified}건</b></div>
            <div>반쪽 이체 짝짓기 <b>${a.pairedCount}쌍</b></div>
            ${a.refunds>0&&B`<div>나갔다 돌아온 돈 <b>${a.refunds}건</b> 환불 처리</div>`}
            ${a.review>0&&B`<div>확인 필요 <b>${a.review}건</b></div>`}
            ${a.halves>0&&B`<div>짝 못 찾음 <b>${a.halves}건</b> — 나머지 통장 내역을 넣으면 맞춰집니다</div>`}
          </div>`:""}
      <div class="acts">
        <button class="btn ghost sm" onClick=${o}>닫기</button>
        ${c&&c.length>0&&B`<button class="btn ghost sm" onClick=${u}>정리 전으로 되돌리기</button>`}
        ${r?B`<button class="btn primary sm" onClick=${v}>이대로 정리</button>`:B`<button class="btn primary sm" onClick=${d}>무엇이 바뀌는지 보기</button>`}
      </div>
    </div>`}function Ua({db:e,entries:t,onImport:n,onClose:s,flash:o}){let a=Ce(null),[i,r]=L(null),[l,c]=L(""),[p,d]=L(e.accounts[0]?.id||""),[u,v]=L(!1),[$,g]=L(!1),b=()=>new Promise((w,M)=>{if(window.XLSX)return w(window.XLSX);let y=document.createElement("script");y.src="./xlsx.js",y.onload=()=>w(window.XLSX),y.onerror=()=>M(new Error("엑셀 읽기 모듈을 불러오지 못했어요")),document.head.appendChild(y)}),h=async()=>{if(window.pdfjsLib)return window.pdfjsLib;let w;try{w=await import(new URL("./pdf.min.mjs",document.baseURI).href)}catch{throw new Error("PDF 읽기 모듈을 불러오지 못했어요. pdf.min.mjs 파일을 올렸는지 확인해주세요")}return w.GlobalWorkerOptions&&(w.GlobalWorkerOptions.workerSrc=new URL("./pdf.worker.min.mjs",document.baseURI).href),window.pdfjsLib=w,w},m=w=>{let M=w.target.files&&w.target.files[0];if(!M)return;c(M.name||"가져오기");let y=/\.(xlsx?|xlsm)$/i.test(M.name),C=/\.pdf$/i.test(M.name)||M.type==="application/pdf",D=new FileReader;D.onload=async()=>{try{let I;if(C){v(!0);let te=await(await h()).getDocument({data:new Uint8Array(D.result)}).promise,U=[];for(let Y=1;Y<=te.numPages;Y++){let oe=await(await te.getPage(Y)).getTextContent();U.push(oe.items.map(Z=>({str:Z.str,x:Z.transform[4],y:Z.transform[5],w:Z.width})))}if(I=Ca(U),v(!1),!I.length){o("PDF에서 거래내역을 찾지 못했어요");return}}else if(y){v(!0);let W=await b(),te=W.read(new Uint8Array(D.result),{type:"array"}),U=/거래|날짜|일자|입금|출금|찾으신|맡기신|가맹점|기재내용|적요|잔액|금액|원화금액|종류/,Y=null,oe=-1;for(let le of te.SheetNames){let it=te.Sheets[le];if(!it)continue;let ge=W.utils.sheet_to_json(it,{header:1,raw:!1,defval:""}),ie=ge.slice(0,30).map(se=>(se||[]).join(" ")).join(" "),ne=ge.length+(U.test(ie)?1e4:0);ne>oe&&(oe=ne,Y=le)}let Z=te.Sheets[Y||te.SheetNames[0]];I=W.utils.sheet_to_json(Z,{header:1,raw:!1,defval:""}),v(!1)}else{let W=ha(new Uint8Array(D.result));I=pa(W)}let O=Ia(I),P=Ra(O,e.accounts||[]),H=O.kind==="card",R=O.kind?H:$,E=P?P.id:R?null:p,A,F=null;if(Zt(I)){if(A=Qt(I,{rules:e.categoryRules,settings:e.settings}),!A.entries.length){o("트래블월렛 내역을 읽지 못했어요");return}}else{if(F=fa(I),!F){o("어느 칸이 날짜·금액인지 못 찾았어요");return}A=ga(I,F,{accountId:E,paymentMethod:R?"card":"account",rules:e.categoryRules,settings:e.settings})}let G=(t||[]).filter(W=>!W.deleted),ue=new Set(G.map(W=>W.sourceHash).filter(Boolean)),we=A.entries.filter(W=>!ue.has(W.sourceHash)),K=Cn(we,G),j="";if(!R){let W=[...G,...we].filter(U=>U.accountId===E),te=Tn(W,E);j=Ma(te.gaps)}r({map:F,rows:I.length,total:A.entries.length,dupFile:A.entries.length-we.length,info:O,matched:P,useCard:R,gapMsg:j,...K})}catch(I){v(!1),o(`파일을 읽지 못했어요: ${I.message}`)}},D.readAsArrayBuffer(M)};return B`
    <div class="card">
      <div class="cardLabel">명세서 파일 가져오기 (CSV)</div>
      <div class="hint sm">은행·카드사에서 받은 파일을 그대로 넣으세요. 엑셀(.xls, .xlsx), CSV, PDF 모두 됩니다.</div>

      <div class="row wrap">
        <button class=${"tag"+($?"":" on")} onClick=${()=>g(!1)}>통장</button>
        <button class=${"tag"+($?" on":"")} onClick=${()=>g(!0)}>카드</button>
        ${!$&&e.accounts.filter(w=>w.kind==="bank").map(w=>B`
          <button key=${w.id} class=${"tag"+(p===w.id?" on":"")} onClick=${()=>d(w.id)}>${w.name}</button>`)}
      </div>

      ${u&&B`<div class="hint sm">파일을 읽는 중이에요… (큰 파일은 조금 걸려요)</div>`}
      ${i&&B`
        <div class="tidyResult">
          ${i.info&&i.info.kind&&B`
            <div class="srcLine">
              ${i.useCard?"카드 명세서":"통장 거래내역"}으로 읽었어요
              ${i.info.accountNo?` · ${i.info.accountNo}`:""}
              ${i.matched?` · ${i.matched.name}`:""}
            </div>`}
          <div>파일에서 읽은 것 <b>${i.total}건</b></div>
          ${i.dupFile>0&&B`<div>전에 넣은 것 <b>${i.dupFile}건</b> 제외</div>`}
          <div>새로 넣을 것 <b>${i.added.length}건</b></div>
          ${i.merged.length>0&&B`<div>이미 있는 것 <b>${i.merged.length}건</b> 제외</div>`}
          ${i.review.length>0&&B`<div>확인 필요 <b>${i.review.length}건</b></div>`}
          ${i.gapMsg&&B`<div class="gapWarn">${i.gapMsg}</div>`}
        </div>`}

      <input ref=${a} type="file" accept=".csv,.xls,.xlsx,.xlsm,.pdf,text/csv,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style="display:none" onChange=${m} />
      <div class="acts">
        <button class="btn ghost sm" onClick=${s}>닫기</button>
        <button class="btn ghost sm" onClick=${()=>a.current&&a.current.click()}>파일 고르기</button>
        ${i&&B`<button class="btn primary sm" onClick=${()=>{n(i.added,l),r(null)}}>${i.added.length}건 넣기</button>`}
      </div>
    </div>`}function mr({trip:e,picked:t,toggle:n}){let s=(o,a)=>B`
    <label class=${"pickRow"+(t[o.id]?" on":"")} key=${o.id}>
      <input type="checkbox" checked=${!!t[o.id]} onChange=${()=>n(o.id)} />
      <span class="pickDate">${o.date.slice(5)}</span>
      <span class="pickMemo">${o.memo}${a?B`<span class="pickTag"> ${a}</span>`:""}${o.welfare?B`<span class="pickTag welfare"> 복지카드</span>`:""}</span>
      <span class="pickAmt">₩${z(o.amount)}</span>
    </label>`;return B`
    <div class="pickList">
      ${e.booked.length>0&&B`
        <div class="pickHead">미리 결제한 것 (항공·숙박·교통카드·체험)</div>
        ${e.booked.map(o=>s(o,o.sure?"":"여행인지 확인"))}`}
      <div class="pickHead">여행 기간 중 결제 ${e.startDate.slice(5)} ~ ${e.endDate.slice(5)}</div>
      ${e.inside.map(o=>s(o,o.currency&&o.currency!=="KRW"?o.currency:""))}
    </div>`}var Wa=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,On=(e,t,n=0)=>{let s=(o,a)=>{let i=new Date(o+"T00:00:00");return i.setDate(i.getDate()+a),Wa(i)};return e.startDate<=s(t.endDate,n)&&t.startDate<=s(e.endDate,n)};function Va({db:e,entries:t,patch:n,flash:s,onClose:o}){let[a,i]=L({}),[r,l]=L({}),[c,p]=L({status:"idle",events:[],msg:""}),d=e.settings&&e.settings.sheetUrl;Ee(()=>{if(!d)return;let y=!0;p({status:"loading",events:[],msg:""});let C=D=>{let I=new Date;return I.setDate(I.getDate()+D),Wa(I)};return ea(d,e.settings.sheetToken,C(-400),C(400)).then(D=>{y&&p({status:"done",events:D,msg:""})}).catch(D=>{y&&p({status:"error",events:[],msg:String(D&&D.message||D)})}),()=>{y=!1}},[d]);let u=J(()=>{let y=ya(t),C=e.trips.filter(A=>A.startDate&&A.endDate),D=C.map(A=>A.startDate),I=A=>Jt(t,A,{allTrips:[...y.trips,...C],settings:e.settings}),O=de(),P=Da(c.events,C),H=A=>Jt(t,A,{allTrips:C,settings:e.settings,preDays:A.startDate>O?365:120}),R=A=>!P.some(F=>On(F,A,0)),E=xa(t,{settings:e.settings}).filter(A=>!C.some(F=>On(F,A,7))&&!y.trips.some(F=>On(F,A,7)));return{calendar:P.map(H),trips:y.trips.filter(A=>!D.includes(A.startDate)&&R(A)).map(I),singles:y.singles.filter(A=>!D.includes(A.startDate)&&R(A)).map(I),topups:E.filter(R).map(I)}},[t,e.trips,e.settings,c.events]),v=y=>{let C={};for(let D of y.inside)C[D.id]=!0;for(let D of y.booked)C[D.id]=!!D.sure;return C},$=y=>r[y.startDate]||v(y),g=(y,C)=>l(D=>{let I=D[y.startDate]||v(y);return{...D,[y.startDate]:{...I,[C]:!I[C]}}}),b=y=>{let C=$(y);return[...y.inside,...y.booked].filter(D=>C[D.id]&&!D.welfare).reduce((D,I)=>D+(I.isRefund?-I.amount:I.amount),0)},h=y=>[...y.inside,...y.booked].filter(C=>$(y)[C.id]).length,m=y=>{let C=$(y),D=new Set([...y.inside,...y.booked].filter(O=>C[O.id]).map(O=>O.id));if(!D.size&&!y.fromCalendar){s("고른 항목이 없어요");return}let I=Ge();n(O=>{O.trips=[...O.trips,{id:I,name:y.name,startDate:y.startDate,endDate:y.endDate,createdAt:Date.now()}],O.entries=O.entries.map(P=>D.has(P.id)?{...P,tripId:I,updatedAt:Date.now(),dirty:!0}:P)}),s(y.approx?`${y.name} · ${D.size}건을 묶었어요. 여행 탭에서 기간을 실제 일정으로 고치세요`:D.size?`${y.name} · ${D.size}건을 묶었어요`:`${y.name} 여행을 만들었어요. 기간 안의 해외 결제는 들어오는 대로 묶입니다`)},w=(y,C)=>B`
    <div class=${"foundTrip"+(C?" dim":"")} key=${y.startDate}>
      <div class="foundTop">
        <span class="foundName">${y.name}</span>
        <span class="foundTotal">₩${z(b(y))}</span>
      </div>
      <div class="foundSub">
        ${y.startDate.slice(5)} ~ ${y.endDate.slice(5)} · ${y.days}일 · ${h(y)}건
        ${y.currencies.length?` · ${y.currencies.join(", ")}`:""}
      </div>
      <div class="foundBreak">
        ${y.fromCalendar?`캘린더 일정 · 기간 안 ${y.inside.length}건`:y.approx?`여행 자금 충전 ${y.count}건으로 추정한 기간`:`현지 ${y.inside.length}건`}
        ${y.booked.length>0?` · 사전결제 후보 ${y.booked.length}건`:""}
        ${y.welfare?` · 복지카드 ₩${z(y.welfare)} 별도`:""}
      </div>
      <button class="pickToggle" onClick=${()=>i(D=>({...D,[y.startDate]:!D[y.startDate]}))}>
        ${a[y.startDate]?"항목 접기":"항목 확인하고 고치기"}
      </button>
      ${a[y.startDate]&&B`<${mr} trip=${y} picked=${$(y)} toggle=${D=>g(y,D)} />`}
      <div class="acts"><button class="btn primary sm" onClick=${()=>m(y)}>${y.fromCalendar&&!h(y)?"여행 만들기":`${h(y)}건으로 묶기`}</button></div>
    </div>`,M=!u.calendar.length&&!u.trips.length&&!u.singles.length&&!u.topups.length;return B`
    <div class="card">
      <div class="cardLabel">여행 자동 찾기</div>
      <div class="hint sm">
        현지 결제가 이어진 구간을 일정으로 봅니다. 미리 결제한 항공권·숙박·체험도 앞쪽에서 찾아 함께 올립니다.
        <b>항목 확인하고 고치기</b>를 눌러 빼거나 넣을 수 있습니다.
      </div>
      ${M&&B`
        <div class="empty">새로 찾은 여행이 없어요.<br />해외 결제 표시가 있는 명세서(카드 해외이용)가 들어오면 여기 나타납니다.<br />
          아직 안 떠난 여행은 구글 캘린더에 "여행"이 들어간 일정으로 넣어두거나, 여행 탭의 <b>+ 여행 추가</b>로 만드세요.</div>`}
      ${c.status==="loading"&&B`<div class="hint sm">구글 캘린더에서 여행 일정을 찾는 중…</div>`}
      ${c.status==="error"&&B`<div class="hint sm">캘린더를 못 읽었어요 · ${c.msg}</div>`}
      ${u.calendar.length>0&&B`
        <div class="foundDivider">구글 캘린더 일정</div>
        ${u.calendar.map(y=>w(y,!1))}`}
      ${u.trips.length>0&&u.calendar.length>0&&B`<div class="foundDivider">결제 기록으로 찾은 여행</div>`}
      ${u.trips.map(y=>w(y,!1))}
      ${u.topups.length>0&&B`
        <div class="foundDivider">충전 기록으로 추정한 여행 (기간은 만든 뒤 고치세요)</div>
        ${u.topups.map(y=>w(y,!0))}`}
      ${u.singles.length>0&&B`
        <div class="foundDivider">이것도 여행인가요? (하루짜리 결제)</div>
        ${u.singles.map(y=>w(y,!0))}`}
      <div class="acts"><button class="btn ghost sm" onClick=${o}>닫기</button></div>
    </div>`}var Pn=[{key:"trip",label:"여행 기간만",pre:0,post:0},{key:"m4",label:"앞뒤 4개월",pre:120,post:120},{key:"y1",label:"앞뒤 1년",pre:365,post:365},{key:"y2",label:"앞뒤 2년",pre:730,post:730}];function za({db:e,entries:t,trip:n,patch:s,flash:o,onClose:a}){let i=!!(n&&n.startDate&&n.startDate>de()),[r,l]=L(i?"y1":"m4"),[c,p]=L(!1),d=Pn.find(A=>A.key===r)||Pn[1],u=!n||!n.startDate||!n.endDate,v=J(()=>Jt(t,n,{allTrips:e.trips,preDays:d.pre,postDays:d.post,wide:c,settings:e.settings}),[t,n,e.trips,d,c,e.settings]),$=J(()=>t.filter(A=>n&&A.tripId===n.id),[t,n]),g=J(()=>new Set(v.reimb.map(A=>A.id)),[v]),b=J(()=>{let A=new Map;for(let F of[...$,...v.inside,...v.booked,...v.reimb])A.set(F.id,F);return Array.from(A.values()).sort((F,G)=>F.date<G.date?-1:1)},[$,v]),h=A=>!!A.reimbFrom||g.has(A.id),m=A=>A.transferKind==="welfare",w=b.filter(A=>!h(A)),M=b.filter(h),[y,C]=L(()=>{let A={};for(let F of b)A[F.id]=!!n&&F.tripId===n.id;return A}),D=A=>C(F=>{let G={...F};for(let ue of w)G[ue.id]=A==="all"?!0:A==="none"?!1:ue.date>=n.startDate&&ue.date<=n.endDate;return G}),I=b.filter(A=>y[A.id]),O=I.filter(A=>!m(A)).reduce((A,F)=>A+(h(F)||F.isRefund?-F.amount:F.amount),0),P=I.filter(m).reduce((A,F)=>A+(F.isRefund?-F.amount:F.amount),0),H=I.length,R=()=>{let A=Date.now();s(F=>{F.entries=F.entries.map(G=>{if(!(G.id in y))return G;if(!!y[G.id])return g.has(G.id)&&!G.reimbFrom?{...G,tripId:n.id,type:"expense",isRefund:!0,category:"travel",transferKind:null,status:"confirmed",needsCheck:!1,reimbFrom:{type:G.type,transferKind:G.transferKind??null,category:G.category,status:G.status,isRefund:!!G.isRefund},updatedAt:A,dirty:!0}:G.tripId===n.id?G:{...G,tripId:n.id,updatedAt:A,dirty:!0};if(G.tripId!==n.id)return G;if(G.reimbFrom){let{reimbFrom:we,...K}=G;return{...K,...we,tripId:null,updatedAt:A,dirty:!0}}return{...G,tripId:null,updatedAt:A,dirty:!0}})}),o(`${H}건으로 정리했어요`),a()},E=A=>B`
    <label class=${"pickRow"+(y[A.id]?" on":"")} key=${A.id}>
      <input type="checkbox" checked=${!!y[A.id]} onChange=${()=>C(F=>({...F,[A.id]:!F[A.id]}))} />
      ${A.date.slice(0,4)===n.startDate.slice(0,4)?B`<span class="pickDate">${A.date.slice(5)}</span>`:B`<span class="pickDate long">${A.date.slice(2).replace(/-/g,".")}</span>`}
      <span class="pickMemo">${A.memo}
        ${!h(A)&&A.date<n.startDate?B`<span class="pickTag"> 사전결제</span>`:""}
        ${!h(A)&&A.date>n.endDate?B`<span class="pickTag"> 여행 후</span>`:""}
        ${m(A)?B`<span class="pickTag welfare"> 복지카드 · 합계 별도</span>`:""}
        ${A.currency&&A.currency!=="KRW"?B`<span class="pickTag"> ${A.currency}</span>`:""}
      </span>
      <span class=${"pickAmt"+(h(A)?" reimb":"")}>${h(A)?"−":""}₩${z(A.amount)}</span>
    </label>`;return u?B`
      <div class="card">
        <div class="cardLabel">${n?n.name:"여행"} · 항목 조정</div>
        <div class="empty">이 여행은 기간이 없어서 찾을 수 없어요.<br />아래 여행 정보에서 <b>기간</b>을 넣어주세요.</div>
        <div class="acts"><button class="btn ghost sm" onClick=${a}>닫기</button></div>
      </div>`:B`
    <div class="card">
      <div class="cardLabel">${n.name} · 항목 조정</div>
      <div class="hint sm">여행 기간 안팎의 결제를 모아 보여줍니다. 체크로 넣고 빼세요.${i?" 아직 안 떠난 여행이라 1년 앞까지 찾습니다.":""}</div>
      <div class="row wrap" style="margin-top:8px">
        ${Pn.map(A=>B`
          <button key=${A.key} class=${"tag"+(r===A.key?" on":"")} onClick=${()=>l(A.key)}>${A.label}</button>`)}
      </div>
      <div class="row wrap" style="margin-top:6px">
        <button class=${"tag"+(c?" on":"")} onClick=${()=>p(!c)}>
          ${c?"모든 지출 보기":"여행 관련만 보기"}
        </button>
        <span class="hint sm">항공·숙박 말고 다른 항목도 찾으려면 켜세요</span>
      </div>
      <div class="foundTop">
        <span class="foundName">${H}건</span>
        <span class="foundTotal">₩${z(O)}</span>
      </div>
      ${P!==0&&B`<div class="foundSub">복지카드 ₩${z(P)}는 따로 셉니다 (위 금액에 안 들어감)</div>`}
      <div class="row wrap" style="margin:8px 0">
        <button class="tag" onClick=${()=>D("all")}>전부 선택</button>
        <button class="tag" onClick=${()=>D("inside")}>기간 안만</button>
        <button class="tag" onClick=${()=>D("none")}>전부 해제</button>
      </div>
      <div class="pickList">
        ${w.length===0&&B`<div class="empty">조정할 항목이 없어요.<br />기간을 넓히거나 '여행 관련만 보기'를 눌러 모든 지출을 보세요.</div>`}
        ${w.map(E)}
        ${M.length>0&&B`
          <div class="pickHead">받은 돈 — 같이 가는 사람이 보내준 정산금이면 체크 (여행 경비에서 빠져요)</div>
          ${M.map(E)}`}
      </div>
      <div class="acts">
        <button class="btn ghost sm" onClick=${a}>취소</button>
        <button class="btn primary sm" onClick=${R}>저장</button>
      </div>
    </div>`}function Ya({db:e,carId:t,patch:n,flash:s,onClose:o,onAddEntry:a}){let[i,r]=L(""),[l,c]=L(null),[p,d]=L({}),[u,v]=L(!0),$=e.maintenance.filter(h=>h.carId===t),g=h=>{let m=ba(h);if(!m.items.length){s("정비 항목을 찾지 못했어요");return}c(m);let w={};for(let M of m.items)w[M.label]=!0;d(w)},b=()=>{let h=l.items.filter(m=>p[m.label]);if(!h.length){s("고른 항목이 없어요");return}n(m=>{m.maintenance=m.maintenance.map(w=>w.carId!==t||!h.find(y=>y.label===w.label)?w:{...w,lastDate:l.date,lastMileage:l.mileage??w.lastMileage});for(let w of h)m.maintenance.some(M=>M.carId===t&&M.label===w.label)||(m.maintenance=[...m.maintenance,{id:Ge(),carId:t,label:w.label,intervalKm:null,intervalMonths:null,lastDate:l.date,lastMileage:l.mileage??null}]);l.mileage&&(m.mileageLogs=[{id:Ge(),carId:t,date:l.date,mileage:l.mileage},...m.mileageLogs])}),u&&l.total>0&&a({date:l.date,type:"expense",category:"transport",amount:l.total,memo:`정비 · ${h.map(m=>m.label).join(", ")}`.slice(0,40),normKey:X("정비"),carId:t,paymentMethod:"card",source:"receipt",confidence:1}),s(`정비 ${h.length}건을 기록했어요`),r(""),c(null),o()};return B`
    <div class="card">
      <div class="cardLabel">정비 견적서 넣기</div>
      <div class="hint sm">
        견적서나 영수증 사진을 아이폰에서 열어 글자를 길게 눌러 복사한 뒤 붙여넣으세요.
        항목·날짜·주행거리를 찾아 교환 이력에 반영합니다.
      </div>
      <textarea class="pasteArea" style="min-height:80px" value=${i}
        placeholder=${`○○카센터
2026.03.15  주행거리 87,450km
엔진오일 교환 45,000
오일필터 8,000
합계 53,000`}
        onInput=${h=>r(h.target.value)}
        onPaste=${h=>{let m=h.clipboardData?h.clipboardData.getData("text"):"";m&&(r(m),setTimeout(()=>g(m),0))}} />

      ${l&&B`
        <div class="quoteHead">
          ${l.date}
          ${l.mileage?` · ${l.mileage.toLocaleString()}km`:" · 주행거리 못 찾음"}
          ${l.total?` · 합계 ₩${z(l.total)}`:""}
        </div>
        <div class="pickList">
          ${l.items.map(h=>{let m=$.some(w=>w.label===h.label);return B`
              <label class=${"pickRow"+(p[h.label]?" on":"")} key=${h.label}>
                <input type="checkbox" checked=${!!p[h.label]}
                  onChange=${()=>d(w=>({...w,[h.label]:!w[h.label]}))} />
                <span class="pickMemo">${h.label}${m?"":B`<span class="pickTag"> 새 항목</span>`}</span>
                <span class="pickAmt">${h.amount?`₩${z(h.amount)}`:""}</span>
              </label>`})}
        </div>
        <div class="row wrap" style="margin-top:8px">
          <button class=${"tag"+(u?" on":"")} onClick=${()=>v(!u)}>
            ${u?"지출로도 기록":"이력만 남기기"}
          </button>
          ${u&&l.total>0&&B`<span class="hint sm">₩${z(l.total)}이 이 차량 지출로 들어갑니다</span>`}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${o}>닫기</button>
        ${!l&&B`<button class="btn primary sm" disabled=${!i.trim()} onClick=${()=>g(i)}>읽기</button>`}
        ${l&&B`<button class="btn primary sm" onClick=${b}>이력에 반영</button>`}
      </div>
    </div>`}var ke=Pe.bind(Te),gr=[{key:"variable",label:"변동비",color:"#8A6D3B"},{key:"fixed",label:"고정비",color:"#6B5A7A"},{key:"family",label:"가족 송금",color:"#5A7A8A"},{key:"familyExtra",label:"별도 송금",color:"#8A5A3B"},{key:"travel",label:"여행",color:"#3E7A6B"},{key:"cash",label:"현금",color:"#8A8A8A"}],Ga=e=>{let t=Math.abs(e);return t>=1e8?`${(e/1e8).toFixed(1)}억`:t>=1e4?`${Math.round(e/1e4).toLocaleString()}만`:z(e)};function hr(e){return e.category==="family"?e.isExtra?"familyExtra":"family":e.category==="travel"?"travel":e.fixedId?"fixed":e.paymentMethod==="cash"?"cash":"variable"}function Fn(e){return!(e.deleted||e.type!=="expense"||e.transferKind&&e.transferKind!=="external")}var Hn=e=>e.isRefund?-e.amount:e.amount;function $r({entries:e,range:t}){let n=J(()=>{let a={};for(let l of e){if(!Fn(l))continue;let c=hr(l);a[c]=(a[c]||0)+Hn(l)}let i=gr.map(l=>({...l,value:a[l.key]||0})).filter(l=>l.value>0),r=i.reduce((l,c)=>l+c.value,0);return{rows:i.sort((l,c)=>c.value-l.value),total:r}},[e]);if(!n.total)return ke`<div class="empty">이 기간 지출이 없어요.</div>`;let s=0,o=n.rows.map(a=>{let i=s;return s+=a.value/n.total,{...a,from:i,to:s}});return ke`
    <div class="chartWrap">
      <div class="donutRow">
        <svg viewBox="0 0 42 42" class="donut" role="img" aria-label="항목별 지출 비중">
          ${o.map(a=>{let i=(a.to-a.from)*100;return ke`<circle key=${a.key} cx="21" cy="21" r="15.9" fill="none"
              stroke=${a.color} stroke-width="7"
              stroke-dasharray=${`${i} ${100-i}`}
              stroke-dashoffset=${`${25-a.from*100}`} />`})}
          <text x="21" y="20" class="donutTop">지출</text>
          <text x="21" y="25.5" class="donutNum">${Ga(n.total)}</text>
        </svg>
        <div class="legend">
          ${o.map(a=>ke`
            <div class="legendRow" key=${a.key}>
              <span class="legendDot" style=${`background:${a.color}`}></span>
              <span class="legendName">${a.label}</span>
              <span class="legendPct">${Math.round(a.value/n.total*100)}%</span>
              <span class="legendVal">₩${z(a.value)}</span>
            </div>`)}
        </div>
      </div>
    </div>`}function yr({all:e,months:t=6}){let n=J(()=>{let o=de().slice(0,7),a=[],[i,r]=o.split("-").map(Number);for(let d=t-1;d>=0;d--){let u=new Date(i,r-1-d,1);a.push(`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}`)}let l=Object.fromEntries(a.map(d=>[d,{income:0,expense:0}]));for(let d of e){let u=d.date.slice(0,7);l[u]&&(d.type==="income"&&!d.deleted?l[u].income+=d.amount:Fn(d)&&(l[u].expense+=Hn(d)))}let c=a.map(d=>({key:d,label:d.slice(5)+"월",...l[d]})),p=Math.max(1,...c.map(d=>Math.max(d.income,d.expense)));return{rows:c,peak:p}},[e,t]),s=96;return ke`
    <div class="chartWrap">
      <div class="barChart">
        ${n.rows.map(o=>{let a=Math.round(o.income/n.peak*s),i=Math.round(o.expense/n.peak*s),r=o.income-o.expense;return ke`
            <div class="barCol" key=${o.key}>
              <div class="barPair" style=${`height:${s}px`}>
                <div class="bar income" style=${`height:${a}px`} title=${`수입 ${z(o.income)}`}></div>
                <div class="bar expense" style=${`height:${i}px`} title=${`지출 ${z(o.expense)}`}></div>
              </div>
              <div class="barLabel">${o.label}</div>
              <div class=${"barDiff"+(r<0?" minus":"")}>
                ${o.income||o.expense?`${r<0?"−":"+"}${Ga(Math.abs(r))}`:""}
              </div>
            </div>`})}
      </div>
      <div class="legendInline">
        <span><span class="legendDot" style="background:#3D6B4F"></span>수입</span>
        <span><span class="legendDot" style="background:#B23A24"></span>지출</span>
      </div>
    </div>`}function vr({entries:e}){let t=J(()=>{let n={};for(let i of e)Fn(i)&&(n[i.category]=(n[i.category]||0)+Hn(i));let s=Object.entries(n).map(([i,r])=>({key:i,label:Je[i]?.label||i,color:Je[i]?.color||"#999",value:r})).filter(i=>i.value>0).sort((i,r)=>r.value-i.value),o=s.length?s[0].value:1,a=s.reduce((i,r)=>i+r.value,0);return{rows:s,peak:o,total:a}},[e]);return t.rows.length?ke`
    <div class="chartWrap">
      ${t.rows.map(n=>ke`
        <div class="catBarRow" key=${n.key}>
          <span class="catBarName">${n.label}</span>
          <div class="catBarTrack">
            <div class="catBarFill" style=${`width:${Math.max(2,n.value/t.peak*100)}%;background:${n.color}`}></div>
          </div>
          <span class="catBarVal">₩${z(n.value)}</span>
        </div>`)}
      <div class="catBarFoot">합계 ₩${z(t.total)}</div>
    </div>`:ke`<div class="empty">이 기간 지출이 없어요.</div>`}function Ja({entries:e,all:t}){let[n,s]=L("axis");return ke`
    <div class="stats">
      <div class="statTabs">
        <button class=${"statTab"+(n==="axis"?" on":"")} onClick=${()=>s("axis")}>항목별</button>
        <button class=${"statTab"+(n==="month"?" on":"")} onClick=${()=>s("month")}>월별 추이</button>
        <button class=${"statTab"+(n==="cat"?" on":"")} onClick=${()=>s("cat")}>카테고리</button>
      </div>
      ${n==="axis"&&ke`<${$r} entries=${e} />`}
      ${n==="month"&&ke`<${yr} all=${t} />`}
      ${n==="cat"&&ke`<${vr} entries=${e} />`}
    </div>`}var _e=Pe.bind(Te),qa=[{key:"variable",label:"변동비",color:"#8A6D3B"},{key:"fixed",label:"고정비",color:"#6B5A7A"},{key:"family",label:"가족 송금",color:"#5A7A8A"},{key:"familyExtra",label:"별도 송금",color:"#8A5A3B"},{key:"travel",label:"여행",color:"#3E7A6B"},{key:"cash",label:"현금",color:"#8A8A8A"}],br=e=>!e.deleted&&e.type==="expense"&&(!e.transferKind||e.transferKind==="external"),Xa=e=>e.isRefund?-e.amount:e.amount;function kr(e){return e.category==="family"?e.isExtra?"familyExtra":"family":e.category==="travel"?"travel":e.fixedId?"fixed":e.paymentMethod==="cash"?"cash":"variable"}function jn(e,t,n){let s=e.filter(p=>p.date>=t&&p.date<=n),o={},a={},i={},r=0,l=0,c=0;for(let p of s){if(p.type==="income"&&!p.deleted){r+=p.amount;continue}if(p.deleted)continue;if(p.transferKind==="welfare"){c+=Xa(p);continue}if(!br(p))continue;let d=Xa(p);l+=d;let u=kr(p);o[u]=(o[u]||0)+d,a[p.category]=(a[p.category]||0)+d;let v=p.normKey||p.memo||"";v&&(i[v]||(i[v]={name:p.memo,total:0,count:0}),i[v].total+=d,i[v].count+=1)}return{from:t,to:n,income:r,expense:l,welfare:c,axes:o,cats:a,merchants:i,count:s.length}}var Za=(e,t)=>t?Math.round((e-t)/t*100):e?null:0,Un=({now:e,before:t,invert:n})=>{if(t==null)return null;let s=e-t;if(!s)return _e`<span class="dl same">변화 없음</span>`;let o=s>0,a=n?!o:o,i=Za(e,t);return _e`
    <span class=${"dl "+(a?"bad":"good")}>
      ${o?"▲":"▼"} ${z(Math.abs(s))}${i!==null?` (${Math.abs(i)}%)`:""}
    </span>`},Wn=(e,t)=>new Date(e,t,0).getDate(),Ue=e=>String(e).padStart(2,"0");function _r(e,t){let[n,s]=t.split("-").map(Number);if(e==="month"){let i={from:`${t}-01`,to:`${t}-${Ue(Wn(n,s))}`,label:`${n}년 ${s}월`},r=new Date(n,s-2,1),l=r.getFullYear(),c=r.getMonth()+1,p={from:`${l}-${Ue(c)}-01`,to:`${l}-${Ue(c)}-${Ue(Wn(l,c))}`,label:`${c}월`},d={from:`${n-1}-${Ue(s)}-01`,to:`${n-1}-${Ue(s)}-${Ue(Wn(n-1,s))}`,label:`작년 ${s}월`};return{cur:i,prev:p,lastYear:d}}let o={from:`${n}-01-01`,to:`${n}-12-31`,label:`${n}년`},a={from:`${n-1}-01-01`,to:`${n-1}-12-31`,label:`${n-1}년`};return{cur:o,prev:a,lastYear:null}}function wr(e,t,n){let s=[];if(!t||!t.count)return s;for(let r of qa){let l=e.axes[r.key]||0,c=t.axes[r.key]||0,p=l-c;if(Math.abs(p)<1e5)continue;let d=Za(l,c);c===0&&l>0?s.push({kind:"new",text:`${r.label}가 새로 ${z(l)}원 발생했습니다`}):l===0&&c>0?s.push({kind:"gone",text:`${r.label} ${z(c)}원이 이번에는 없습니다`}):d!==null&&Math.abs(d)>=20&&s.push({kind:p>0?"up":"down",text:`${r.label}가 ${n}보다 ${z(Math.abs(p))}원 ${p>0?"늘었습니다":"줄었습니다"} (${Math.abs(d)}%)`})}let o=[],a=new Set([...Object.keys(e.cats),...Object.keys(t.cats)]);for(let r of a){let l=(e.cats[r]||0)-(t.cats[r]||0);Math.abs(l)>=15e4&&o.push({k:r,d:l})}o.sort((r,l)=>Math.abs(l.d)-Math.abs(r.d));for(let r of o.slice(0,3)){let l=Je[r.k]?.label||r.k;s.push({kind:r.d>0?"up":"down",text:`${l}가 ${z(Math.abs(r.d))}원 ${r.d>0?"늘었습니다":"줄었습니다"}`})}for(let[r,l]of Object.entries(e.merchants))t.merchants[r]||l.total<3e5||s.push({kind:"new",text:`${l.name}에 ${z(l.total)}원을 썼습니다. ${n}에는 없던 지출입니다`});let i=e.income-e.expense;return e.income>0&&s.push({kind:i<0?"warn":"ok",text:i<0?`수입보다 ${z(-i)}원을 더 썼습니다`:`${z(i)}원이 남았습니다`}),s.slice(0,8)}function Qa({all:e,monthStartDay:t}){let[n,s]=L("month"),[o,a]=L(()=>de().slice(0,7)),i=J(()=>_r(n,o),[n,o]),r=J(()=>jn(e,i.cur.from,i.cur.to),[e,i]),l=J(()=>jn(e,i.prev.from,i.prev.to),[e,i]),c=J(()=>i.lastYear?jn(e,i.lastYear.from,i.lastYear.to):null,[e,i]),p=l.count?l:c&&c.count?c:null,d=l.count?i.prev.label:c&&c.count?i.lastYear.label:"",u=J(()=>wr(r,p,d),[r,p,d]),v=m=>{if(n==="year"){a(`${Number(o.slice(0,4))+m}-01`);return}let[w,M]=o.split("-").map(Number),y=new Date(w,M-1+m,1);a(`${y.getFullYear()}-${Ue(y.getMonth()+1)}`)},$=qa.map(m=>({...m,now:r.axes[m.key]||0,before:p?p.axes[m.key]||0:null})).filter(m=>m.now>0||(m.before||0)>0),g=Math.max(1,...$.map(m=>Math.max(m.now,m.before||0))),b=()=>{let m=[];m.push(`${i.cur.label} 결산`),m.push(""),m.push(`수입   ${z(r.income)}원`),m.push(`지출   ${z(r.expense)}원`),m.push(`남은돈 ${z(r.income-r.expense)}원`),m.push("");for(let M of $)m.push(`${M.label.padEnd(8)} ${z(M.now)}원`);if(u.length){m.push(""),m.push(`[${d} 대비]`);for(let M of u)m.push(`· ${M.text}`)}let w=m.join(`
`);try{navigator.clipboard.writeText(w)}catch{window.prompt("복사하세요",w)}},h=r.income-r.expense;return _e`
    <div class="report">
      <div class="repTabs">
        <button class=${"statTab"+(n==="month"?" on":"")} onClick=${()=>s("month")}>월 결산</button>
        <button class=${"statTab"+(n==="year"?" on":"")} onClick=${()=>s("year")}>연 결산</button>
      </div>

      <div class="repHead">
        <button class="nav" onClick=${()=>v(-1)} aria-label="이전">‹</button>
        <span class="repTitle">${i.cur.label} 결산</span>
        <button class="nav" onClick=${()=>v(1)} aria-label="다음">›</button>
      </div>

      ${r.count===0?_e`<div class="empty">이 기간 기록이 없어요.</div>`:_e`
        <div class="repTop">
          <div class="repTopRow">
            <span>수입</span>
            <b class="inc">₩${z(r.income)}</b>
            <${Un} now=${r.income} before=${p?p.income:null} invert=${!0} />
          </div>
          <div class="repTopRow">
            <span>지출</span>
            <b class="exp">₩${z(r.expense)}</b>
            <${Un} now=${r.expense} before=${p?p.expense:null} />
          </div>
          <div class=${"repTopRow total"+(h<0?" minus":"")}>
            <span>${h<0?"모자란 돈":"남은 돈"}</span>
            <b>₩${z(Math.abs(h))}</b>
          </div>
        </div>

        <div class="repSection">항목별${p?_e`<span class="repBase">${d} 대비</span>`:""}</div>
        ${$.map(m=>_e`
          <div class="repRow" key=${m.key}>
            <div class="repRowTop">
              <span class="repName">${m.label}</span>
              <span class="repVal">₩${z(m.now)}</span>
            </div>
            <div class="repBars">
              <div class="repBarTrack">
                <div class="repBarNow" style=${`width:${m.now/g*100}%;background:${m.color}`}></div>
              </div>
              ${p&&_e`
                <div class="repBarTrack ghost">
                  <div class="repBarBefore" style=${`width:${(m.before||0)/g*100}%`}></div>
                </div>`}
            </div>
            ${p&&_e`<div class="repDelta"><${Un} now=${m.now} before=${m.before} /></div>`}
          </div>`)}

        ${r.welfare>0&&_e`
          <div class="repNoteLine">복지카드 ₩${z(r.welfare)}원은 합계에 넣지 않았습니다</div>`}

        ${u.length>0&&_e`
          <div class="repSection">특이사항</div>
          <ul class="repNotes">
            ${u.map((m,w)=>_e`
              <li class=${"repNote "+m.kind} key=${w}>${m.text}</li>`)}
          </ul>`}

        <div class="repSection">많이 쓴 곳</div>
        <ol class="repTopList">
          ${Object.values(r.merchants).sort((m,w)=>w.total-m.total).slice(0,5).map((m,w)=>_e`
            <li key=${w}>
              <span class="repName">${m.name}</span>
              <span class="repCnt">${m.count}건</span>
              <span class="repVal">₩${z(m.total)}</span>
            </li>`)}
        </ol>

        <div class="acts">
          <button class="btn ghost sm" onClick=${b}>글자로 복사</button>
        </div>`}
    </div>`}var k=Pe.bind(Te),{CATEGORIES:an,CAT_MAP:xe,todayISO:Ie,toLocalISO:ht,formatDateLabel:$t,formatWon:Q,uid:Ae,parsePaste:xr,reconcile:Vn,normKey:et}=Sn,tt="ledger:db",Dr=6,Le={version:Dr,entries:[],trips:[],vehicles:[],maintenance:[],mileageLogs:[],accounts:[],fixedExpenses:[],categoryRules:[],favorites:[],imports:[],settings:{userName:"",monthStartDay:1,sheetUrl:"",sheetToken:"",lastSyncAt:"",incomeSources:["급여","처우개선비","상여"],excludedCounterparties:[],incomeOnlyFromSources:!0,welfareCards:["현대복지","현대카드"],investKeywords:["키움","증권","선물","미래에셋","한국투자","NH투자"],welfareLimit:0,welfarePeriodStart:"",familyTransferKeywords:["하나머니충전","하나머니 충전"],familyRegularAmount:115e4,familyAmountMin:0,familyAmountMax:0,familyExtraExcluded:!0,travelKeywords:["트래블월렛","트래블 월렛"]}};function Cr(){try{let e=localStorage.getItem(tt);if(!e)return{...Le};let t=JSON.parse(e);return{...Le,...t,settings:{...Le.settings,...t.settings||{}}}}catch(e){return console.warn("저장된 데이터를 읽지 못했습니다",e),{...Le}}}function Sr(e){try{let t=JSON.stringify(e);return localStorage.setItem(tt,t),{ok:!0,size:t.length}}catch(t){return{ok:!1,error:t}}}var mt=[{label:"타이어",intervalKm:5e4,intervalMonths:36},{label:"브레이크패드",intervalKm:4e4,intervalMonths:24},{label:"브레이크액",intervalKm:4e4,intervalMonths:24},{label:"냉각수",intervalKm:4e4,intervalMonths:24},{label:"에어컨필터",intervalKm:15e3,intervalMonths:12},{label:"배터리",intervalKm:null,intervalMonths:36},{label:"와이퍼",intervalKm:null,intervalMonths:12},{label:"자동차보험",intervalKm:null,intervalMonths:12},{label:"정기검사",intervalKm:null,intervalMonths:24}],tn=[{label:"엔진오일",intervalKm:1e4,intervalMonths:6},{label:"오일필터",intervalKm:1e4,intervalMonths:6},{label:"에어필터",intervalKm:4e4,intervalMonths:24},{label:"미션오일",intervalKm:1e5,intervalMonths:null}],on=[{key:"gasoline",label:"가솔린",presets:[...tn,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},...mt]},{key:"diesel",label:"디젤",presets:[...tn,{label:"연료필터",intervalKm:4e4,intervalMonths:24},{label:"DPF 점검",intervalKm:1e5,intervalMonths:null},...mt]},{key:"lpg",label:"LPG",presets:[...tn,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},{label:"LPG 필터",intervalKm:4e4,intervalMonths:24},...mt]},{key:"hybrid",label:"하이브리드",presets:[...tn,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},{label:"구동용 배터리 점검",intervalKm:null,intervalMonths:24},...mt]},{key:"ev",label:"전기",presets:[{label:"감속기 오일",intervalKm:1e5,intervalMonths:null},{label:"고전압 배터리 점검",intervalKm:null,intervalMonths:12},...mt]}],ao=e=>(on.find(t=>t.key===e)||on[0]).presets,Ar={ok:"양호",warning:"곧 교체",overdue:"교체 필요",unknown:"기록 필요"};function Ir(e,t){if(!e.lastDate&&e.lastMileage==null)return{status:"unknown",remKm:null,remMonths:null};let n=null,s=null;if(e.intervalKm&&e.lastMileage!=null&&t!=null&&(n=e.intervalKm-(t-e.lastMileage)),e.intervalMonths&&e.lastDate){let a=new Date(e.lastDate+"T00:00:00"),i=new Date,r=(i.getFullYear()-a.getFullYear())*12+(i.getMonth()-a.getMonth());i.getDate()<a.getDate()&&(r-=1),s=e.intervalMonths-r}let o="ok";return n!=null&&n<=0||s!=null&&s<=0?o="overdue":(n!=null&&n<=1e3||s!=null&&s<=1)&&(o="warning"),{status:o,remKm:n,remMonths:s}}function Rr(e,t=1){let[n,s]=e.split("-").map(Number);if(t<=1){let i=new Date(n,s,0);return{start:`${e}-01`,end:ht(i)}}let o=new Date(n,s-2,t),a=new Date(n,s-1,t-1);return{start:ht(o),end:ht(a)}}function Yn(e){return e==="income"?"+":e==="transfer"?"":"−"}function nn(e){let t=Date.now();return{id:Ae(),date:Ie(),type:"expense",category:"etc",amount:0,memo:"",tripId:null,carId:null,currency:"",foreignAmount:null,isRefund:!1,paymentMethod:"unknown",accountId:null,fixedId:null,normKey:"",source:"manual",confidence:1,rawText:"",balanceAfter:null,transferKind:null,direction:null,createdAt:t,updatedAt:t,deleted:!1,dirty:!0,status:"confirmed",...e}}var he=(e,t)=>n=>k`
  <svg viewBox="0 0 24 24" width=${n.size||16} height=${n.size||16} fill="none"
       stroke="currentColor" stroke-width=${n.sw||2} stroke-linecap="round" stroke-linejoin="round"
       class=${n.class||""} aria-hidden="true">${e}${t||""}</svg>`,Mr=he(k`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`),Kr=he(k`<polyline points="15 18 9 12 15 6"/>`),Tr=he(k`<polyline points="9 18 15 12 9 6"/>`),sn=he(k`<polyline points="20 6 9 17 4 12"/>`),oo=he(k`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),Gn=he(k`<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.2 3.9-2 2-2-.5a.5.5 0 0 0-.5.8L5 15l1.8 2 1.3-1.5 2 .5 2-2 3.9 3.2a.5.5 0 0 0 .8-.5Z"/>`),Jn=he(k`<path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm18 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M3 17V9l2-4h14l2 4v8"/><path d="M3 11h18"/>`),Er=he(k`<path d="M14.7 6.3a4 4 0 0 0 5 5L21 18a2 2 0 0 1-3 3l-6.7-1.3a4 4 0 0 0-5-5L3 8a2 2 0 0 1 3-3Z"/>`),Nr=he(k`<path d="M12 14 8 10"/><circle cx="12" cy="14" r="8"/><path d="M12 6V4"/>`),Br=he(k`<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.7" y2="16.7"/>`),Lr=he(k`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`),Or=he(k`<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.5Z"/>`),zn=he(k`<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`),Pr=he(k`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>`),Fr=he(k`<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>`);function eo({value:e,onChange:t,onSave:n,onCancel:s,saveLabel:o,trips:a,vehicles:i,onCreateTrip:r,onCreateVehicle:l}){let[c,p]=L(!1),[d,u]=L(""),[v,$]=L(!1),[g,b]=L(""),h=m=>t({...e,...m});return k`
    <div class="form">
      <div class="row">
        <div class="seg">
          <button class=${"segBtn"+(e.type==="expense"?" on expense":"")}
            onClick=${()=>h({type:"expense",category:e.category==="income"?"etc":e.category})}>지출</button>
          <button class=${"segBtn"+(e.type==="income"?" on income":"")}
            onClick=${()=>h({type:"income",category:"income"})}>수입</button>
          <button class=${"segBtn"+(e.type==="transfer"?" on transfer":"")}
            onClick=${()=>h({type:"transfer",category:"etc"})}>이체</button>
        </div>
        <input type="date" class="inp date" value=${e.date} onInput=${m=>h({date:m.target.value})} />
      </div>

      ${e.type==="transfer"&&k`<div class="hint sm">본인 계좌 간 이체는 수입·지출 합계에서 빠지고 기록만 남아요.</div>`}

      <div class="row">
        <span class="won">₩</span>
        <input type="number" inputmode="numeric" class="amt" placeholder="0"
          value=${e.amount||""} onInput=${m=>h({amount:parseInt(m.target.value||"0",10)})} />
      </div>

      ${e.type==="expense"&&k`
        <div class="chips">
          ${an.filter(m=>m.key!=="income").map(m=>k`
            <button key=${m.key} class=${"chip"+(e.category===m.key?" on":"")}
              style=${e.category===m.key?`background:${m.color};border-color:${m.color}`:`border-color:${m.color}55;color:${m.color}`}
              onClick=${()=>h({category:m.key})}>${m.label}</button>`)}
        </div>`}

      ${e.type==="expense"&&k`
        <div class="row wrap">
          <label class="miniLabel">결제수단</label>
          ${[["card","카드"],["account","계좌"],["cash","현금"],["unknown","미상"]].map(([m,w])=>k`
            <button key=${m} class=${"tag"+(e.paymentMethod===m?" on":"")}
              onClick=${()=>h({paymentMethod:m})}>${w}</button>`)}
          <button class=${"tag"+(e.isRefund?" on":"")} onClick=${()=>h({isRefund:!e.isRefund})}>취소·환불</button>
        </div>`}

      <div class="miniLabel">여행</div>
      <div class="chips">
        <button class=${"tag"+(e.tripId?"":" on")} onClick=${()=>h({tripId:null,currency:"",foreignAmount:null})}>일반</button>
        ${a.map(m=>k`<button key=${m.id} class=${"tag"+(e.tripId===m.id?" on":"")} onClick=${()=>h({tripId:m.id})}><${Gn} size=${11} /> ${m.name}</button>`)}
        ${c?k`<span class="inline">
              <input class="inp mini" autofocus placeholder="여행 이름" value=${d}
                onInput=${m=>u(m.target.value)}
                onKeyDown=${m=>{m.key==="Enter"&&d.trim()&&(h({tripId:r(d.trim(),e.date).id}),u(""),p(!1))}} />
              <button class="round" onClick=${()=>{d.trim()&&(h({tripId:r(d.trim(),e.date).id}),u(""),p(!1))}}><${sn} size=${13} /></button>
            </span>`:k`<button class="tag dash" onClick=${()=>p(!0)}>+ 새 여행</button>`}
      </div>

      <div class="miniLabel">차량</div>
      <div class="chips">
        <button class=${"tag"+(e.carId?"":" on")} onClick=${()=>h({carId:null})}>해당 없음</button>
        ${i.map(m=>k`<button key=${m.id} class=${"tag"+(e.carId===m.id?" on":"")} onClick=${()=>h({carId:m.id})}><${Jn} size=${11} /> ${m.name}</button>`)}
        ${v?k`<span class="inline">
              <input class="inp mini" autofocus placeholder="차량 이름" value=${g}
                onInput=${m=>b(m.target.value)}
                onKeyDown=${m=>{m.key==="Enter"&&g.trim()&&(h({carId:l(g.trim()).id}),b(""),$(!1))}} />
              <button class="round" onClick=${()=>{g.trim()&&(h({carId:l(g.trim()).id}),b(""),$(!1))}}><${sn} size=${13} /></button>
            </span>`:k`<button class="tag dash" onClick=${()=>$(!0)}>+ 새 차량</button>`}
      </div>

      ${e.tripId&&k`
        <div class="row">
          <input class="inp" placeholder="통화 (예: JPY)" value=${e.currency||""} onInput=${m=>h({currency:m.target.value})} />
          <input class="inp" type="number" placeholder="외화 금액" value=${e.foreignAmount||""}
            onInput=${m=>h({foreignAmount:m.target.value?parseFloat(m.target.value):null})} />
        </div>`}

      <input class="inp" placeholder="상호 / 메모 (예: 조이텔)" value=${e.memo} onInput=${m=>h({memo:m.target.value})} />
      ${e.id&&k`
        <label class="learnRow">
          <input type="checkbox" class="entryCheck" checked=${!!e._learnMerchant}
            onChange=${m=>h({_learnMerchant:m.target.checked})} />
          <span>이 상호를 기억해서 같은 곳·같은 금액 문자에 쓰기</span>
        </label>`}

      <div class="acts">
        <button class="btn ghost" onClick=${s}><${oo} size=${15} /> 취소</button>
        <button class="btn primary" onClick=${n} disabled=${!e.amount}><${sn} size=${15} /> ${o||"저장"}</button>
      </div>
    </div>`}function Hr({entry:e,trips:t,vehicles:n,onQuickCat:s,onEdit:o,onDelete:a,selecting:i,checked:r,onToggle:l}){let[c,p]=L(!1),d=Ce(null),u=Ce(!1),v=()=>{u.current=!1,d.current=setTimeout(()=>{d.current=null,o(e)},550)},$=()=>{d.current&&(clearTimeout(d.current),d.current=null,u.current||p(w=>!w))},g=()=>{u.current=!0,d.current&&(clearTimeout(d.current),d.current=null)},b=xe[e.category],h=e.tripId&&t.find(w=>w.id===e.tripId),m=e.carId&&n.find(w=>w.id===e.carId);return i?k`
      <div class="rowWrap">
        <div class=${"entry pick"+(r?" on":"")} onClick=${()=>l(e.id)}>
          <input type="checkbox" class="entryCheck" checked=${!!r} onClick=${w=>w.stopPropagation()} onChange=${()=>l(e.id)} />
          <div class="entryMain">
            <div class="entryCat">
              ${b?b.label:"기타"}
              ${e.isRefund?k`<span class="refund"> · 취소</span>`:""}
              ${h?k`<span class="seal"> · ${h.name}</span>`:""}
              ${m?k`<span class="seal"> · ${m.name}</span>`:""}
            </div>
            <div class="entryMemo">${e.memo||"-"}</div>
          </div>
          <div class="entryAmt">
            <div class=${"amtNum "+e.type+(e.isRefund?" refunded":"")}>
              ${Yn(e.type)}₩${Q(e.amount)}
            </div>
          </div>
        </div>
      </div>`:k`
    <div class="rowWrap">
      <div class=${"entry"+(e.status==="pending"?" pending":"")}
        onPointerDown=${v} onPointerUp=${$} onPointerLeave=${g} onPointerCancel=${g}>
        <span class="dot" style=${`background:${b?b.color:"#999"}`}></span>
        <div class="entryMain">
          <div class="entryCat">
            ${b?b.label:"기타"}
            ${e.isRefund?k`<span class="refund"> · 취소</span>`:""}
            ${h?k`<span class="seal"> · ${h.name}</span>`:""}
            ${m?k`<span class="seal"> · ${m.name}</span>`:""}
          </div>
          <div class="entryMemo">${e.memo||"-"}</div>
        </div>
        <div class="entryAmt">
          <div class=${"amtNum "+e.type+(e.isRefund?" refunded":"")}>
            ${Yn(e.type)}₩${Q(e.amount)}
          </div>
          ${e.foreignAmount?k`<div class="fx">${e.currency} ${e.foreignAmount}</div>`:""}
        </div>
        <button class="del" onClick=${w=>{w.stopPropagation(),a(e.id)}} aria-label="삭제"><${Mr} size=${15} /></button>
      </div>
      ${c&&e.type==="expense"&&k`
        <div class="quickCat">
          ${an.filter(w=>w.key!=="income").map(w=>k`
            <button key=${w.key} class=${"chip sm"+(e.category===w.key?" on":"")}
              style=${e.category===w.key?`background:${w.color};border-color:${w.color}`:`border-color:${w.color}55;color:${w.color}`}
              onClick=${()=>{s(e,w.key),p(!1)}}>${w.label}</button>`)}
          <button class="chip sm dash" onClick=${()=>{p(!1),o(e)}}>자세히</button>
        </div>`}
    </div>`}function rn({list:e,...t}){let n=J(()=>{let s=new Map;for(let o of e)s.has(o.date)||s.set(o.date,[]),s.get(o.date).push(o);return Array.from(s.entries())},[e]);return k`${n.map(([s,o])=>k`
    <div class="group" key=${s}>
      <div class="groupHead">${$t(s)}</div>
      ${o.map(a=>k`<${Hr} key=${a.id} entry=${a} ...${t} checked=${t.selectedIds?t.selectedIds.includes(a.id):!1} />`)}
    </div>`)}`}function jr(){let[e,t]=L(Cr),[n,s]=L(""),[o,a]=L(null),[i,r]=L(null),[l,c]=L(null),[p,d]=L(!1),u=Ce(null),[v,$]=L(null),[g,b]=L("month"),[h,m]=L(""),[w,M]=L(!1),[y,C]=L(null),[D,I]=L(!1),[O,P]=L(null),[H,R]=L(null),[E,A]=L(null),[F,G]=L(""),[ue,we]=L(Ie),[K,j]=L(null),[W,te]=L(()=>{let f=new Date;return`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}`}),[U,Y]=L({state:"idle",fails:0,msg:""}),oe=Ce(e),Z=Ce(!1);Ee(()=>{oe.current=e},[e]),Ee(()=>{Sr(e).ok||P("저장 공간이 가득 찼어요. 설정에서 내보내기 후 정리해주세요.")},[e]);let le=xn(async f=>{let _=oe.current;if(!(!_.settings.sheetUrl||Z.current)){Z.current=!0,Y(x=>({...x,state:"syncing"}));try{let x=await Zs(_);t(x.db),Y({state:"ok",fails:0,msg:""}),f&&P(`동기화 완료 · 보냄 ${x.pushed}건 · 받음 ${x.pulled}건`)}catch(x){Y(S=>({state:"error",fails:S.fails+1,msg:x.message||"연결 실패"})),f&&P(`동기화 실패: ${x.message}`)}finally{Z.current=!1,setTimeout(()=>P(null),2600)}}},[]);Ee(()=>{le(!1);let f=()=>{document.hidden||le(!1)};document.addEventListener("visibilitychange",f),window.addEventListener("online",f);let _=setInterval(()=>{document.hidden||le(!1)},300*1e3);return()=>{document.removeEventListener("visibilitychange",f),window.removeEventListener("online",f),clearInterval(_)}},[le]);let it=Ce(null),ge=xn(()=>{clearTimeout(it.current),it.current=setTimeout(()=>le(!1),2500)},[le]),ie=f=>{P(f),setTimeout(()=>P(null),2600)},ne=f=>t(_=>{let x={..._};return f(x),x}),se=J(()=>e.entries.filter(f=>!f.deleted),[e.entries]);Ee(()=>{if(!e.fixedExpenses.length)return;let f=ra(e.fixedExpenses,e.entries,{}),{settled:_}=la(e.entries,e.fixedExpenses);!f.length&&!_.length||t(x=>{let S=x.entries;if(_.length){let T=new Set(_.map(q=>q.scheduledId)),V=new Map(_.map(q=>[q.scheduledId,q.realId]));S=S.map(q=>T.has(q.id)?{...q,deleted:!0,mergedInto:V.get(q.id),updatedAt:Date.now(),dirty:!0}:q)}let N=f.map(T=>nn(T));return{...x,entries:[...N,...S]}})},[e.fixedExpenses,e.entries]),Ee(()=>{let f={rules:e.categoryRules||[],settings:e.settings},_=new Map;for(let x of e.entries){if(x.source!=="shortcut"||x.localized)continue;let S=wa(x,f);S&&_.set(x.id,S)}_.size&&(t(x=>({...x,entries:x.entries.map(S=>{let N=_.get(S.id);if(!N||S.localized)return S;let T=Xt({...S,...N},x.categoryRules||[]),V=Bn(T,x.trips||[]);return V&&(T={...T,tripId:V}),{...T,updatedAt:Date.now(),dirty:!0}})})),ge())},[e.entries]);let yt=(f,_)=>{let x=oe.current,S=f.map(N=>{let T=Xt(N,x.categoryRules||[]),V=T.source==="statement",q=T.needsCheck||!V&&(T.confidence??1)<.6,ee=Bn(T,x.trips||[]);return nn({...T,...ee?{tripId:ee}:{},..._?{importId:_.id}:{},status:q?"pending":"confirmed"})});return ne(N=>{if(N.entries=[...S,...N.entries],_&&S.length){let T={id:_.id,at:Date.now(),name:_.name||"가져오기",count:S.length,undone:!1};N.imports=[T,...N.imports||[]].slice(0,20)}}),ge(),S},nt=(f,_)=>(ge(),ne(x=>{x.entries=x.entries.map(S=>S.id===f?{...S,..._,updatedAt:Date.now(),dirty:!0}:S)})),io=f=>(ge(),ne(_=>{_.entries=_.entries.map(x=>x.id===f?{...x,deleted:!0,updatedAt:Date.now(),dirty:!0}:x)})),[ye,rt]=L(null),ln=Ce(null),cn=(f,_,x,S)=>{let N=f.findIndex(T=>T.normKey===_);return N>=0?f.map((T,V)=>V===N?{...T,category:x,kind:null,hitCount:(T.hitCount||1)+S}:T):[...f,{id:Ae(),normKey:_,category:x,hitCount:S,learnedAt:Date.now()}]},Xn=f=>({id:f.id,category:f.category,status:f.status,confidence:f.confidence,catBy:f.catBy,transferKind:f.transferKind}),vt=(f,_,x)=>({...f,category:_,confidence:1,status:f.needsCheck?f.status:"confirmed",transferKind:f.transferKind==="verify"&&f.type==="expense"?null:f.transferKind,updatedAt:Date.now(),dirty:!0,...x}),dn=f=>{if(clearTimeout(ln.current),!f.applied&&!f.similar.length){rt(null);return}rt(f),f.similar.length||(ln.current=setTimeout(()=>rt(null),9e3))},un=(f,_)=>{let x=oe.current,S=f.normKey||et(f.memo),{same:N,similar:T}=ka(x.entries,f,_),V=new Set(N.map(ee=>ee.id)),q=S.length>=2?[{key:S,prev:(x.categoryRules||[]).find(ee=>ee.normKey===S)||null}]:[];ne(ee=>{ee.entries=ee.entries.map(me=>me.id===f.id?vt(me,_,{status:"confirmed",catBy:"user"}):V.has(me.id)?vt(me,_):me),S.length>=2&&(ee.categoryRules=cn(ee.categoryRules||[],S,_,1))}),ge(),dn({category:_,applied:N.length,undo:[f,...N].map(Xn),rules:q,similar:T})},ro=()=>{let f=ye;if(!f)return;let _=new Set(f.similar.map(T=>T.id)),x=[...new Set(f.similar.map(T=>T.normKey||et(T.memo)).filter(T=>T.length>=2))],S=oe.current,N=x.filter(T=>!f.rules.some(V=>V.key===T)).map(T=>({key:T,prev:(S.categoryRules||[]).find(V=>V.normKey===T)||null}));ne(T=>{T.entries=T.entries.map(q=>_.has(q.id)?vt(q,f.category):q);let V=T.categoryRules||[];for(let q of x)V=cn(V,q,f.category,1);T.categoryRules=V}),ge(),dn({...f,applied:f.applied+f.similar.length,undo:[...f.undo,...f.similar.map(Xn)],rules:[...f.rules,...N],similar:[]})},lo=()=>{let f=ye;if(!f)return;let _=new Map(f.undo.map(x=>[x.id,x]));ne(x=>{x.entries=x.entries.map(N=>_.has(N.id)?{...N,..._.get(N.id),updatedAt:Date.now(),dirty:!0}:N);let S=x.categoryRules||[];for(let N of f.rules)S=S.filter(T=>T.normKey!==N.key),N.prev&&(S=[...S,N.prev]);x.categoryRules=S}),ge(),clearTimeout(ln.current),rt(null),ie("되돌렸어요")},co=f=>{let _=f.filter(N=>!N.error);if(!_.length)return 0;let{changes:x}=qt(oe.current.entries,_),S=new Set(_.map(N=>N.normKey));return ne(N=>{N.categoryRules=[...(N.categoryRules||[]).filter(T=>!S.has(T.normKey)),..._.map(T=>({id:Ae(),normKey:T.normKey,name:T.name,category:T.category,kind:T.kind||null,hitCount:1,learnedAt:Date.now(),source:"paste"}))],N.entries=N.entries.map(T=>x.has(T.id)?{...T,...x.get(T.id),confidence:1,status:T.needsCheck?T.status:"confirmed",updatedAt:Date.now(),dirty:!0}:T)}),ge(),x.size},uo=f=>ne(_=>{_.fixedExpenses=[..._.fixedExpenses,...f.map(x=>({id:Ae(),name:x.name,normKey:x.normKey,amount:x.amount,amountVariable:x.amountVariable,dayOfMonth:x.dayOfMonth,category:x.category,accountId:x.accountId,paymentMethod:x.paymentMethod,status:"active",source:"learned",learnedAt:Date.now()}))]}),po=(f,_)=>{let x=new Set(f.ids);ne(S=>{S.entries=S.entries.map(N=>x.has(N.id)?vt(N,_,{status:"confirmed"}):N),f.normKey&&f.normKey!=="__none"&&(S.categoryRules=cn(S.categoryRules||[],f.normKey,_,f.count))}),ge()},qn=J(()=>e.entries.filter(f=>!f.deleted&&!/^\d{4}-\d{2}-\d{2}$/.test(String(f.date||""))),[e.entries]),fo=()=>{let f=0,_=0;ne(x=>{x.entries=x.entries.map(S=>{if(/^\d{4}-\d{2}-\d{2}$/.test(String(S.date||"")))return S;let N=String(S.date||""),T=N.match(/^(\d{4})-(\d{2})-(\d{2})/),V=T?`${T[1]}-${T[2]}-${T[3]}`:null;if(!V){let q=new Date(N);isNaN(q)||(V=ht(q))}return V?(f++,{...S,date:V,updatedAt:Date.now(),dirty:!0}):(_++,{...S,deleted:!0,updatedAt:Date.now(),dirty:!0})})}),ie(`날짜 ${f}건을 고쳤어요${_?` · ${_}건은 못 살려서 지웠어요`:""}`)},mo=f=>{let _=String(f??"").trim();_&&ne(x=>{let S=x.settings.excludedCounterparties||[];S.includes(_)||(x.settings={...x.settings,excludedCounterparties:[...S,_]})})},Zn=(f,_)=>{let x=/^\d{4}-\d{2}-\d{2}$/.test(String(_||""))?_:Ie(),S={id:Ae(),name:f,startDate:x,endDate:x,createdAt:Date.now()};return ne(N=>{N.trips=[...N.trips,S]}),S},pn=(f,_="gasoline")=>{let x={id:Ae(),name:f,fuel:_,createdAt:Date.now()};return ne(S=>{S.vehicles=[...S.vehicles,x],S.maintenance=[...S.maintenance,...ao(_).map(N=>({id:Ae(),carId:x.id,label:N.label,intervalKm:N.intervalKm,intervalMonths:N.intervalMonths,lastDate:null,lastMileage:null}))]}),x},[$e,We]=L({on:!1,ids:[]}),go=f=>We(_=>({..._,ids:_.ids.includes(f)?_.ids.filter(x=>x!==f):[..._.ids,f]})),lt=(f,_)=>{let x=new Set($e.ids);x.size&&(ne(S=>{S.entries=S.entries.map(N=>x.has(N.id)?{...N,...f(N),updatedAt:Date.now(),dirty:!0}:N)}),ie(`${x.size}건 ${_}`),We({on:!1,ids:[]}))},ho=f=>lt(()=>({tripId:f==="__none"?null:f}),f==="__none"?"여행에서 뺐어요":`${(e.trips.find(_=>_.id===f)||{}).name||"여행"}에 넣었어요`),$o=f=>lt(()=>({carId:f==="__none"?null:f}),f==="__none"?"차량을 뺐어요":`${(e.vehicles.find(_=>_.id===f)||{}).name||"차량"}으로 지정했어요`),yo=f=>lt(()=>({category:f,type:"expense",status:"confirmed",catBy:"user",confidence:1}),`${(xe[f]||{}).label||""}(으)로 바꿨어요`),vo=()=>lt(()=>({type:"transfer",transferKind:"excluded",status:"confirmed",confidence:1}),"합계에서 뺐어요"),bo=()=>lt(()=>({deleted:!0}),"지웠어요"),[ct,fn]=L(null),[bt,Qn]=L(null),ko=()=>{let f=Aa(se,{rules:e.categoryRules,settings:e.settings});fn(f),f.changes.length||ie("바꿀 게 없어요. 이미 지금 규칙대로입니다")},_o=()=>{if(!ct||!ct.changes.length)return;let f=new Map(ct.changes.map(x=>[x.id,x])),_=ct.changes.map(x=>({id:x.id,before:x.before}));ne(x=>{x.entries=x.entries.map(S=>{let N=f.get(S.id);return N?{...S,...N.patch,updatedAt:Date.now(),dirty:!0}:S})}),Qn(_),fn(null),ge(),ie(`${_.length}건을 다시 분류했어요`)},wo=()=>{if(!bt)return;let f=new Map(bt.map(x=>[x.id,x.before]));ne(x=>{x.entries=x.entries.map(S=>{let N=f.get(S.id);return N?{...S,type:N.type,category:N.category,transferKind:N.transferKind,updatedAt:Date.now(),dirty:!0}:S})});let _=bt.length;Qn(null),ge(),ie(`${_}건을 되돌렸어요`)},xo=f=>{let _=0;ne(x=>{x.entries=x.entries.map(S=>S.importId!==f.id||S.deleted?S:(_++,{...S,deleted:!0,updatedAt:Date.now(),dirty:!0})),x.imports=(x.imports||[]).map(S=>S.id===f.id?{...S,undone:!0}:S)}),ge(),ie(`${f.name} · ${_}건을 되돌렸어요`)},Do=(f,_)=>{let x=f.normKey||et(f.memo),S=0;ne(T=>{T.entries=T.entries.map(V=>{if(V.deleted||V.carId)return V;let q=V.normKey||et(V.memo);return V.id!==f.id&&!(x&&q&&x===q)?V:(S++,{...V,carId:_,carBy:"user",updatedAt:Date.now(),dirty:!0})})});let N=(e.vehicles.find(T=>T.id===_)||{}).name||"차량";ie(S>1?`${N}으로 ${S}건 지정했어요 (같은 곳 기록 포함)`:`${N}으로 지정했어요`)},es=f=>{if(!f.trim())return;let _=f.split(/\r?\n/).filter(S=>S.trim()).map(S=>S.split("	"));if(_.length>1&&_.some(S=>S.length>=6)&&Zt(_)){let S=Qt(_,{rules:e.categoryRules,settings:e.settings});if(S.entries.length){let N=new Set(se.map(q=>q.sourceHash).filter(Boolean)),T=S.entries.filter(q=>!N.has(q.sourceHash)),V=Vn(T,se);r({entries:T,gaps:[],...V,picked:V.added.map(()=>!0),fromTravelWallet:S.entries.length}),a(null);return}}let x=xr(f,{rules:e.categoryRules,settings:e.settings});if(x.mode==="multi"){let S=Vn(x.entries,se);r({...x,...S,picked:S.added.map(()=>!0)}),a(null)}else a(nn(x.entries[0])),r(null)},Co=async f=>{let _=Array.from(f.target&&f.target.files||[]).filter(x=>!x.type||x.type.startsWith("image/"));if(f.target&&(f.target.value=""),!!_.length){c({text:"글자 인식 준비 중… (처음 한 번은 도구를 받느라 조금 걸려요)"});try{let x=await na(_,T=>{T.status==="recognizing text"&&c({text:`캡처 읽는 중 ${T.page}/${T.pages} · ${Math.round((T.progress||0)*100)}%`})}),S=aa(x,{rules:e.categoryRules,settings:e.settings});if(c(null),!S.entries.length){ie(S.skippedNoKrw?"원화 금액이 보이는 부분까지 함께 캡처해주세요":"캡처에서 내역을 찾지 못했어요. 가맹점과 금액이 보이게 잘라주세요");return}let N=Vn(S.entries,se);r({...S,...N,picked:N.added.map(()=>!0),fromCapture:_.length}),a(null)}catch(x){c(null),ie(String(x&&x.message||x))}}},So=f=>{let _=f.clipboardData?f.clipboardData.getData("text"):"";_&&_.trim()&&(s(_),setTimeout(()=>es(_),0))},kt=J(()=>!o||!o.amount?null:se.find(f=>f.date===o.date&&f.amount===o.amount&&f.type===o.type)||null,[o,se]),Ao=()=>{!o||!o.amount||(yt([o]),a(null),s(""),ie("기록했어요"))},Io=()=>{let f=i.added.filter((x,S)=>i.picked[S]);f.length&&yt(f);let _=i.merged.length;r(null),s(""),ie(`${f.length}건 기록${_?` · 중복 ${_}건 제외`:""}`)},mn=J(()=>Rr(W,e.settings.monthStartDay),[W,e.settings.monthStartDay]),Me=J(()=>se.filter(f=>f.date>=mn.start&&f.date<=mn.end).sort((f,_)=>f.date<_.date?1:f.date>_.date?-1:_.createdAt-f.createdAt),[se,mn]),De=J(()=>{let f=0,_=0,x=0,S=0,N=0,T=0,V=0,q=0;for(let ee of Me){if(ee.type==="income"){V+=ee.amount;continue}if(ee.type!=="expense")continue;let me=ee.isRefund?-ee.amount:ee.amount;if(ee.transferKind==="welfare"){q+=me;continue}ee.transferKind&&ee.transferKind!=="external"||(ee.category==="family"?ee.isExtra?S+=me:x+=me:ee.category==="travel"?N+=me:ee.fixedId?_+=me:ee.paymentMethod==="cash"?T+=me:f+=me)}return{variable:f,fixed:_,family:x,familyExtra:S,travel:N,cash:T,welfare:q,income:V,expense:f+_+x+S+N+T}},[Me]),Ve=J(()=>se.filter(f=>f.status==="pending"),[se]);Ee(()=>{g==="trip"&&!H&&e.trips.length&&R(e.trips[0].id),g==="car"&&!E&&e.vehicles.length&&A(e.vehicles[0].id)},[g,H,E,e.trips,e.vehicles]);let fe=J(()=>{let f=e.settings.welfarePeriodStart||`${new Date().getFullYear()}-01`,_=se.filter(T=>T.transferKind==="welfare"&&T.date>=`${f}-01`).sort((T,V)=>T.date<V.date?1:-1),x=_.reduce((T,V)=>T+(V.isRefund?-V.amount:V.amount),0),S=_.find(T=>T.welfareBalance!=null),N=e.settings.welfareLimit||0;return{used:x,count:_.length,start:f,limit:N,left:S?S.welfareBalance:N?N-x:null,fromSms:!!S,at:S?S.date:null}},[se,e.settings.welfareLimit,e.settings.welfarePeriodStart]),ze=J(()=>{let f=h.trim().toLowerCase();return f?se.filter(_=>{let x=xe[_.category]?.label||"",S=_.tripId&&e.trips.find(T=>T.id===_.tripId)?.name||"",N=_.carId&&e.vehicles.find(T=>T.id===_.carId)?.name||"";return String(_.memo??"").toLowerCase().includes(f)||x.toLowerCase().includes(f)||String(_.amount).includes(f)||S.toLowerCase().includes(f)||N.toLowerCase().includes(f)||String(_.rawText??"").toLowerCase().includes(f)||String(_.counterpartyRaw??"").toLowerCase().includes(f)||String(_.date??"").includes(f)}).sort((_,x)=>_.date<x.date?1:_.date>x.date?-1:x.createdAt-_.createdAt):[]},[se,h,e.trips,e.vehicles]),ts=f=>{let[_,x]=W.split("-").map(Number),S=new Date(_,x-1+f,1);te(`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}`)},ns=f=>{let _=e.mileageLogs.filter(x=>x.carId===f).sort((x,S)=>x.date<S.date?1:-1);return _.length?_[0].mileage:null},Ro=e.vehicles.find(f=>f.id===E),Mo=E?ns(E):null,dt={trips:e.trips,vehicles:e.vehicles,onQuickCat:un,onEdit:f=>$({...f}),onDelete:io,selecting:$e.on,selectedIds:$e.ids,onToggle:go},[Ko,To]=W.split("-"),ss=k`
    <div class="pasteBox">
      <div class="pasteHint"><${Fr} size=${13} /> 카드 문자, 자동이체 문자, 통장 거래내역을 붙여넣거나 앱 화면 캡처를 올리세요</div>
      <textarea class="pasteArea" value=${n} onInput=${f=>s(f.target.value)} onPaste=${So}
        placeholder=${`예) 신한카드(1234) 승인 5,000원 09/09 스타벅스강남점

또는 통장 거래내역 여러 줄을 통째로`}></textarea>
      <div class="pasteActs">
        <button class="btn ghost sm" onClick=${()=>a(nn({}))}><${Lr} size=${14} /> 직접 입력</button>
        <button class="btn ghost sm capBtn" onClick=${()=>u.current&&u.current.click()} disabled=${!!l}>캡처 올리기</button>
        <input ref=${u} type="file" accept="image/*" multiple style="display:none" onChange=${Co} />
        <button class="btn primary sm" onClick=${()=>es(n)} disabled=${!n.trim()}>내역 확인</button>
      </div>
      ${l&&k`<div class="ocrState">${l.text}</div>`}
    </div>`,Gr=J(()=>se.filter(f=>$e.ids.includes(f.id)),[se,$e.ids]),Eo=$e.on&&k`
    <div class="bulkBar">
      <div class="bulkTop">
        <b>${$e.ids.length}건</b> 골랐어요
        <button class="btn ghost sm" onClick=${()=>We({on:!1,ids:[]})}>그만두기</button>
      </div>
      ${$e.ids.length>0&&k`
        <div class="bulkActs">
          ${e.trips.length>0&&k`
            <select class="bulkSel" value="" onChange=${f=>{f.target.value&&(ho(f.target.value),f.target.value="")}}>
              <option value="">여행에 넣기…</option>
              ${e.trips.map(f=>k`<option key=${f.id} value=${f.id}>${f.name}</option>`)}
              <option value="__none">여행에서 빼기</option>
            </select>`}
          ${e.vehicles.length>0&&k`
            <select class="bulkSel" value="" onChange=${f=>{f.target.value&&($o(f.target.value),f.target.value="")}}>
              <option value="">차량 지정…</option>
              ${e.vehicles.map(f=>k`<option key=${f.id} value=${f.id}>${f.name}</option>`)}
              <option value="__none">차량 해제</option>
            </select>`}
          <select class="bulkSel" value="" onChange=${f=>{f.target.value&&(yo(f.target.value),f.target.value="")}}>
            <option value="">분류 바꾸기…</option>
            ${an.filter(f=>f.key!=="income").map(f=>k`<option key=${f.key} value=${f.key}>${f.label}</option>`)}
          </select>
          <button class="btn ghost sm" onClick=${vo}>합계에서 빼기</button>
          <button class="btn danger sm" onClick=${bo}>삭제</button>
        </div>`}
    </div>`;return k`
    <div class="app">
      <header class="head">
        <button class="gear" onClick=${()=>M(f=>!f)} aria-label="설정"><${Pr} size=${17} /></button>
        ${e.settings.sheetUrl&&k`
          <button class=${"syncDot "+U.state+(U.fails>=3?" bad":"")} onClick=${()=>le(!0)}
            title=${U.state==="error"?U.msg:"구글시트와 맞추기"} aria-label="동기화">
            ${U.state==="syncing"?"⋯":U.fails>=3?"!":"●"}
          </button>`}
        <h1 class="title">가계부</h1>
        <div class="rule"></div>
        <div class="sub">붙여넣으면 알아서 적히는 장부</div>
      </header>

      ${w&&k`<${zr} db=${e} setDb=${t} onClose=${()=>M(!1)} flash=${ie} onSync=${()=>le(!0)} onUndoImport=${xo} onOpenAccounts=${()=>b("asset")}
        reclass=${ct} reclassUndo=${bt} onPlanReclass=${ko} onRunReclass=${_o} onUndoReclass=${wo} onCancelReclass=${()=>fn(null)} />`}

      ${qn.length>0&&k`
        <div class="inbox">
          <div class="inboxHead"><${zn} size=${14} /> 날짜가 깨진 기록 ${qn.length}건</div>
          <div class="inboxBulk">
            구글시트가 날짜 칸을 바꿔버려 생긴 문제입니다. 눌러서 되돌릴 수 있어요.
            <button class="btn primary sm" onClick=${fo}>날짜 고치기</button>
          </div>
        </div>`}

      ${Ve.length>0&&k`
        <div class="inbox">
          <div class="inboxHead">
            <${Or} size=${14} /> 확인할 항목 ${Ve.length}건
            ${Ve.length>8?k`<span class="inboxHint">아래 4건씩 처리돼요</span>`:""}
          </div>
          ${Ve.length>20&&k`
            <div class="inboxBulk">
              한 번에 처리하는 게 빠릅니다 — 아래 <b>분류 정리</b>에서 가맹점별로 묶어서 정할 수 있어요.
              <button class="btn ghost sm" onClick=${()=>{C("review")}}>분류 정리 열기</button>
            </div>`}
          <div class="inboxBody">
            ${Ve.slice(0,4).map(f=>f.direction==="in"||f.transferKind==="excluded"?k`
              <div class="inboxItem" key=${f.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${f.memo||"메모 없음"}</span>
                  <span class="inboxAmt">+₩${Q(f.amount)}</span>
                </div>
                <div class="inboxSub">${$t(f.date)} · 이 입금은 수입인가요?</div>
                <div class="chips">
                  <button class="chip sm" style="border-color:#3D6B4F55;color:#3D6B4F"
                    onClick=${()=>nt(f.id,{type:"income",category:"income",transferKind:null,status:"confirmed",confidence:1})}>수입이에요</button>
                  <button class="chip sm" style="border-color:#B23A2455;color:#B23A24"
                    onClick=${()=>nt(f.id,{type:"expense",isRefund:!0,transferKind:null,status:"confirmed",confidence:1})}>환불이에요</button>
                  <button class="chip sm dash" onClick=${()=>nt(f.id,{status:"confirmed"})}>수입 아님</button>
                  <button class="chip sm dash" onClick=${()=>{mo(f.memo),nt(f.id,{status:"confirmed"})}}>
                    ${f.memo?`${f.memo} 항상 제외`:"항상 제외"}
                  </button>
                </div>
              </div>`:k`
              <div class="inboxItem" key=${f.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${f.memo||"메모 없음"}</span>
                  <span class="inboxAmt">₩${Q(f.amount)}</span>
                </div>
                <div class="inboxSub">${$t(f.date)} · 분류가 애매해요</div>
                <div class="chips">
                  ${an.filter(_=>_.key!=="income").slice(0,6).map(_=>k`
                    <button key=${_.key} class="chip sm" style=${`border-color:${_.color}55;color:${_.color}`}
                      onClick=${()=>un(f,_.key)}>${_.label}</button>`)}
                  <button class="chip sm dash" onClick=${()=>nt(f.id,{status:"confirmed"})}>이대로 두기</button>
                </div>
              </div>`)}
            ${Ve.length>4&&k`<div class="inboxMore">외 ${Ve.length-4}건</div>`}
          </div>
        </div>`}

      ${o&&k`
        <div class="card">
          <div class="cardLabel">아래 내용으로 기록할게요</div>
          ${kt&&k`<div class="warn"><${zn} size=${13} /> ${$t(kt.date)}에 같은 금액(₩${Q(kt.amount)}) 내역이 이미 있어요 — ${kt.memo||"메모 없음"}</div>`}
          <${eo} value=${o} onChange=${a} onSave=${Ao} onCancel=${()=>a(null)}
            saveLabel="기록하기" trips=${e.trips} vehicles=${e.vehicles} onCreateTrip=${Zn} onCreateVehicle=${pn} />
        </div>`}

      ${i&&k`
        <div class="card">
          <div class="cardLabel">${i.fromCapture?`캡처 ${i.fromCapture}장에서 읽은 내역`:i.fromTravelWallet?"트래블월렛 이용내역":"붙여넣은 내역"} ${i.added.length+i.merged.length+i.review.length}건</div>
          ${i.fromTravelWallet&&k`<div class="hint sm">결제·정산·현지 인출은 여행 지출로, 취소는 환불로 넣습니다.
            충전은 통장에서 이미 빠져나간 돈이라 <b>합계에서 뺍니다</b>(이중 계산 방지).</div>`}
          ${i.fromCapture&&k`<div class="hint sm">글자 인식은 틀릴 수 있어요. 가맹점·금액을 한 번 훑어보고 이상한 줄은 체크를 빼주세요.
            ${i.added.some(f=>f.dateGuessed)?" 날짜를 못 읽은 줄은 빨간 날짜 칸을 눌러 여기서 바로 고칠 수 있어요.":""}
            ${i.skippedNoKrw?` 원화 금액이 안 보인 ${i.skippedNoKrw}건은 뺐어요.`:""}</div>`}
          ${i.gaps.length>0&&k`
            <div class="warn"><${zn} size=${13} /> 잔액이 이어지지 않아요. ${i.gaps[0].beforeDate} 부근에 안 보이는 거래 ₩${Q(i.gaps[0].missing)}이 있어요. 조금 더 위로 스크롤해서 다시 붙여넣어 주세요.</div>`}
          <div class="multiList">
            ${i.added.map((f,_)=>k`
              <label class="multiRow" key=${_}>
                <input type="checkbox" checked=${i.picked[_]}
                  onChange=${()=>r(x=>({...x,picked:x.picked.map((S,N)=>N===_?!S:S)}))} />
                ${f.dateGuessed||f.dateFixed?k`<input type="date" class=${"multiDateFix"+(f.dateGuessed?"":" done")} value=${f.date} onClick=${x=>x.stopPropagation()}
                      onInput=${x=>{let S=x.target.value;S&&r(N=>({...N,added:N.added.map((T,V)=>V===_?{...T,date:S,dateGuessed:!1,dateFixed:!0,needsCheck:!1}:T)}))}} />`:k`<span class="multiDate">${f.date.slice(5)}</span>`}
                <span class="multiMemo">${f.memo}${f.currency?k` <span class="multiFx">${f.currency} ${f.foreignAmount}</span>`:""}</span>
                ${i.fromCapture&&k`<span class="multiCat">${f.isRefund?"취소":f.type==="income"?"수입":f.type!=="expense"?"이체":(xe[f.category]||{}).label||"기타"}</span>`}
                <span class="multiAmt">${f.isRefund?"+":Yn(f.type)}₩${Q(f.amount)}</span>
              </label>`)}
            ${i.merged.map((f,_)=>k`
              <div class="multiRow skip" key=${"m"+_}>
                <span class="multiDate">${f.incoming.date.slice(5)}</span>
                <span class="multiMemo">${f.incoming.memo}</span>
                <span class="multiAmt">중복</span>
              </div>`)}
            ${i.review.map((f,_)=>k`
              <div class="multiRow review" key=${"r"+_}>
                <span class="multiDate">${f.incoming.date.slice(5)}</span>
                <span class="multiMemo">${f.incoming.memo} · ${f.reasons.join(", ")}</span>
                <span class="multiAmt">확인</span>
              </div>`)}
          </div>
          <div class="acts">
            <button class="btn ghost" onClick=${()=>r(null)}>취소</button>
            <button class="btn primary" onClick=${Io}>${i.picked.filter(Boolean).length}건 기록</button>
          </div>
        </div>`}

      ${v&&k`
        <div class="card">
          <div class="cardLabel">내역 수정</div>
          <${eo} value=${v} onChange=${$}
            onSave=${()=>{let f=e.entries.find(ee=>ee.id===v.id),_=f&&v.type==="expense"&&f.type==="expense"&&f.category!==v.category,x=String(v.memo||"").trim(),S=!!v._learnMerchant,{category:N,_learnMerchant:T,...V}=v,q={...V,memo:x,normKey:et(x),counterpartyRaw:x};if(nt(v.id,{..._?q:{...q,category:N},status:"confirmed"}),_&&un(f,N),S&&et(x).length>=2){let ee=et(x);ne(me=>{let _t=me.categoryRules||[],wt=_t.findIndex(xt=>xt.normKey===ee),as={id:wt>=0?_t[wt].id:Ae(),normKey:ee,name:x,category:N||"etc",amountHint:v.amount||null};me.categoryRules=wt>=0?_t.map((xt,No)=>No===wt?{...xt,...as}:xt):[..._t,as]}),ie(`${x}을(를) 기억했어요 · 같은 금액 문자에 씁니다`)}$(null)}}
            onCancel=${()=>$(null)} saveLabel="수정 완료"
            trips=${e.trips} vehicles=${e.vehicles} onCreateTrip=${Zn} onCreateVehicle=${pn} />
        </div>`}

      <div class="search">
        <${Br} size=${14} class="searchIco" />
        <input class="searchInp" value=${h} onInput=${f=>m(f.target.value)} placeholder="검색 (메모, 문자 원문, 금액, 날짜, 여행·차량)" />
        ${h&&k`<button class="clear" onClick=${()=>m("")}><${oo} size=${14} /></button>`}
      </div>

      <div class="toolRow">
        <button class="toolBtn" onClick=${()=>C(y==="review"?null:"review")}>분류 정리</button>
        <button class="toolBtn" onClick=${()=>C(y==="tidy"?null:"tidy")}>자동 정리</button>
        <button class="toolBtn" onClick=${()=>C(y==="import"?null:"import")}>명세서 파일</button>
      </div>

      ${y==="review"&&k`<${Fa} entries=${se} onApply=${po} onApplyRules=${co}
        userName=${e.settings.userName} ruleCount=${(e.categoryRules||[]).length} onClose=${()=>C(null)} />`}
      ${y==="tidy"&&k`<${ja} db=${e} entries=${se} patch=${ne} flash=${ie} onClose=${()=>C(null)} />`}
      ${y==="import"&&k`<${Ua} db=${e} entries=${e.entries} flash=${ie}
        onImport=${(f,_)=>{let x=yt(f,{id:Ae(),name:_});ie(`${x.length}건 넣었어요 · 잘못됐으면 설정에서 되돌릴 수 있어요`),C(null)}}
        onClose=${()=>C(null)} />`}

      <div class="tabs">
        <button class=${"tab"+(g==="month"?" on":"")} onClick=${()=>b("month")}>월별</button>
        <button class=${"tab"+(g==="trip"?" on":"")} onClick=${()=>{b("trip"),!H&&e.trips.length&&R(e.trips[0].id)}}><${Gn} size=${12} /> 여행</button>
        <button class=${"tab"+(g==="car"?" on":"")} onClick=${()=>{b("car"),!E&&e.vehicles.length&&A(e.vehicles[0].id)}}><${Jn} size=${12} /> 차량</button>
      </div>

      ${h.trim()?k`<div class="results">
            <div class="resultHead">"${h.trim()}" 검색 결과 ${ze.length}건</div>
            ${ze.length===0?k`<div class="empty">일치하는 내역이 없어요.</div>`:k`
              <div class="listHead">
                <span class="listCount">${ze.length}건</span>
                ${$e.on?k`<button class="linkBtn" onClick=${()=>We({on:!0,ids:$e.ids.length===ze.length?[]:ze.map(f=>f.id)})}>
                      ${$e.ids.length===ze.length?"전체 해제":"전체 고르기"}</button>`:k`<button class="linkBtn" onClick=${()=>We({on:!0,ids:[]})}>고르기</button>`}
              </div>
              <${rn} list=${ze} ...${dt} />`}
          </div>`:g==="month"?k`
          <div class="monthBar">
            <button class="nav" onClick=${()=>ts(-1)} aria-label="이전 달"><${Kr} size=${18} /></button>
            <span class="monthLabel">${Ko}년 ${parseInt(To,10)}월</span>
            <button class="nav" onClick=${()=>ts(1)} aria-label="다음 달"><${Tr} size=${18} /></button>
          </div>

          <div class="summaryToggle">
            <button class=${"sumTab"+(D?"":" on")} onClick=${()=>I(!1)}>숫자</button>
            <button class=${"sumTab"+(D==="chart"?" on":"")} onClick=${()=>I("chart")}>그래프</button>
            <button class=${"sumTab"+(D==="report"?" on":"")} onClick=${()=>I("report")}>결산</button>
          </div>

          ${D==="report"?k`<${Qa} all=${se} monthStartDay=${e.settings.monthStartDay} />`:D==="chart"?k`<${Ja} entries=${Me} all=${se} />`:k`
          <div class="axes">
            ${[["변동비",De.variable],["고정비",De.fixed],["가족 송금",De.family],["별도 송금",De.familyExtra],["여행",De.travel],["현금",De.cash]].filter(([,f],_)=>f!==0||_===0).map(([f,_])=>k`
                <div class="axis" key=${f}>
                  <span class="axisLabel">${f}</span>
                  <span class="axisVal">₩${Q(_)}</span>
                </div>`)}
            <div class="axis total">
              <span class="axisLabel">지출 합계</span>
              <span class="axisVal">₩${Q(De.expense)}</span>
            </div>
            ${(De.welfare>0||fe.used>0)&&k`
              <div class="axis welfare">
                <span class="axisLabel">복지카드 <span class="axisNote">합계 제외</span></span>
                <span class="axisVal">₩${Q(De.welfare)}</span>
              </div>`}
            ${fe.left!=null&&k`
              <div class="welfareBar">
                <div class="welfareTop">
                  <span>복지카드 남은 금액</span>
                  <b class=${fe.left<0?"over":""}>₩${Q(fe.left)}</b>
                </div>
                ${fe.limit>0&&k`
                  <div class="welfareGauge">
                    <div class="welfareFill" style=${`width:${Math.min(100,Math.max(0,fe.used/fe.limit*100))}%`}></div>
                  </div>`}
                <div class="welfareSub">
                  ${fe.start.replace("-","년 ")}월부터 ${fe.count}건 · ₩${Q(fe.used)} 사용
                  ${fe.fromSms?k` · ${fe.at} 문자 기준`:(fe.limit,"")}
                </div>
              </div>`}
            ${fe.left==null&&fe.used>0&&k`
              <div class="welfareBar">
                <div class="welfareSub">복지카드 한도를 설정하면 남은 금액이 여기 보여요 · 지금까지 ₩${Q(fe.used)} 사용</div>
              </div>`}
            ${De.income>0&&k`
              <div class="axis income">
                <span class="axisLabel">수입</span>
                <span class="axisVal">₩${Q(De.income)}</span>
              </div>`}
          </div>`}

          <${Pa} db=${e} patch=${ne} entries=${se} flash=${ie} onAdopt=${uo} />

          ${Me.length===0?k`
              <div class="listHead">
                <button class=${"linkBtn addToggle"+(p?" on":"")} onClick=${()=>d(f=>!f)}>
                  ${p?"닫기":"+ 기록 추가"}
                </button>
                <span class="listCount">0건</span>
              </div>
              ${p&&ss}
              <div class="empty">이 기간 기록이 아직 없어요.<br /><b>+ 기록 추가</b>를 눌러 문자나 거래내역을 붙여넣어 보세요.</div>`:k`
              <div class="listHead">
                <button class=${"linkBtn addToggle"+(p?" on":"")} onClick=${()=>d(f=>!f)}>
                  ${p?"닫기":"+ 기록 추가"}
                </button>
                <span class="listCount">${Me.length}건</span>
                ${$e.on?k`<button class="linkBtn" onClick=${()=>We({on:!0,ids:$e.ids.length===Me.length?[]:Me.map(f=>f.id)})}>
                      ${$e.ids.length===Me.length?"전체 해제":"전체 고르기"}</button>`:k`<button class="linkBtn" onClick=${()=>We({on:!0,ids:[]})}>고르기</button>`}
              </div>
              ${p&&ss}
              <${rn} list=${Me} ...${dt} />`}`:g==="asset"?k`<${Ha} db=${e} entries=${se} patch=${ne} rowProps=${dt} />`:g==="trip"?k`
          <div class="toolRow">
            <button class="toolBtn" onClick=${()=>C(y==="tripFind"?null:"tripFind")}>여행 자동 찾기</button>
            ${H&&k`<button class="toolBtn" onClick=${()=>C(y==="tripAdj"?null:"tripAdj")}>항목 조정</button>`}
          </div>
          ${y==="tripFind"&&k`<${Va} db=${e} entries=${se} patch=${ne} flash=${ie} onClose=${()=>C(null)} />`}
          ${y==="tripAdj"&&H&&k`<${za} key=${H} db=${e} entries=${se}
            trip=${e.trips.find(f=>f.id===H)} patch=${ne} flash=${ie} onClose=${()=>C(null)} />`}
          <${Wr} db=${e} live=${se} tripId=${H} setTripId=${R} rowProps=${dt} patch=${ne} flash=${ie} />`:k`
          ${E&&k`
            <div class="toolRow">
              <button class="toolBtn" onClick=${()=>C(y==="quote"?null:"quote")}>정비 견적서 넣기</button>
            </div>`}
          ${y==="quote"&&E&&k`<${Ya} db=${e} carId=${E} patch=${ne} flash=${ie}
            onAddEntry=${f=>yt([f])} onClose=${()=>C(null)} />`}
          <${Vr} db=${e} live=${se} carId=${E} setCarId=${A} car=${Ro} carKm=${Mo} assignCar=${Do}
            mileage=${F} setMileage=${G} mileageDate=${ue} setMileageDate=${we}
            maintEdit=${K} setMaintEdit=${j} patch=${ne} addVehicle=${pn}
            latestMileage=${ns} rowProps=${dt} />`}

      ${ye&&k`
        <div class="bulkBar" role="status">
          ${ye.applied>0&&k`
            <div class="bulkLine">
              <span>같은 곳 <b>${ye.applied}건</b>도 ${xe[ye.category]?.label}${Ur(xe[ye.category]?.label)} 바꿨어요</span>
              <button class="bulkBtn" onClick=${lo}>되돌리기</button>
            </div>`}
          ${ye.similar.length>0&&k`
            <div class="bulkLine">
              <span>비슷한 곳 <b>${ye.similar.length}건</b>도 바꿀까요?
                <span class="bulkNames">${[...new Set(ye.similar.map(f=>f.memo))].slice(0,3).join(" · ")}</span></span>
              <span class="bulkActs">
                <button class="bulkBtn on" onClick=${ro}>바꾸기</button>
                <button class="bulkBtn" onClick=${()=>dn({...ye,similar:[]})}>그대로</button>
              </span>
            </div>`}
          ${ye.applied>0&&!ye.similar.length&&k`<button class="bulkX" onClick=${()=>rt(null)} aria-label="닫기">×</button>`}
        </div>`}
      ${Eo}
      ${O&&k`<div class="toast">${O}</div>`}
    </div>`}function Ur(e){let t=String(e||""),n=t.charCodeAt(t.length-1)-44032;if(n<0||n>11171)return"로";let s=n%28;return s===0||s===8?"로":"으로"}function Wr({db:e,live:t,tripId:n,setTripId:s,rowProps:o,patch:a,flash:i}){let[r,l]=L(!1),[c,p]=L(""),[d,u]=L(null),[v,$]=L(!1),[g,b]=L({name:"",startDate:Ie(),endDate:Ie()}),[h,m]=L(null),[w,M]=L(!1),y=()=>{let R=e.trips.find(A=>A.id===n);if(!R)return;let E=t.filter(A=>A.tripId===R.id).length;a(A=>{A.trips=A.trips.filter(F=>F.id!==R.id),A.entries=A.entries.map(F=>F.tripId===R.id?{...F,tripId:null,updatedAt:Date.now(),dirty:!0}:F)}),M(!1),m(null),s(null),i(E>0?`${R.name} 여행을 지웠어요 · ${E}건은 기록으로 남았어요`:`${R.name} 여행을 지웠어요`)},C=e.trips.map(R=>{let E=En(t,R);return{...R,expense:E.total,welfare:E.welfare}}),D=C.find(R=>R.id===n),I=t.filter(R=>R.tripId===n).sort((R,E)=>R.date<E.date?1:R.date>E.date?-1:E.createdAt-R.createdAt),O=D&&(!D.startDate||!D.endDate),P=h||(O?{id:D.id,startDate:"",endDate:"",name:D.name}:null),H=()=>{!P.startDate||!P.endDate||P.startDate>P.endDate||(a(R=>{R.trips=R.trips.map(E=>E.id===P.id?{...E,name:(P.name||E.name).trim(),startDate:P.startDate,endDate:P.endDate}:E)}),m(null),i("여행 기간을 고쳤어요. '항목 조정'에서 지출을 넣으세요"))};return k`
    <div class="cards">
      ${C.length===0&&k`<div class="empty">아직 만든 여행이 없어요.<br />아래 "+ 여행 추가"로 기간을 넣어 만들면 그 기간 지출을 찾아 묶어줍니다.</div>`}
      ${C.map(R=>k`
        <button key=${R.id} class=${"sumCard"+(n===R.id?" on":"")} onClick=${()=>{s(R.id),m(null)}}>
          <div class="sumName"><${Gn} size=${12} /> ${R.name}</div>
          <div class="sumAmt">₩${Q(R.expense)}</div>
        </button>`)}
      ${!v&&k`<button class="tag dash" onClick=${()=>$(!0)}>+ 여행 추가</button>`}
    </div>

    ${v&&k`
      <div class="card">
        <div class="cardLabel">여행 추가</div>
        <div class="hint sm">기간을 넣으면 그 기간의 결제와 미리 결제한 항공·숙박을 찾아 묶을 수 있어요. 아직 안 떠난 여행도 됩니다.</div>
        <input class="inp" placeholder="여행 이름 (예: 오키나와 26.03)" value=${g.name}
          onInput=${R=>b(E=>({...E,name:R.target.value}))} />
        <div class="row wrap">
          <input type="date" class="inp date" value=${g.startDate} onInput=${R=>b(E=>({...E,startDate:R.target.value}))} />
          <span class="hint sm">~</span>
          <input type="date" class="inp date" value=${g.endDate} onInput=${R=>b(E=>({...E,endDate:R.target.value}))} />
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>$(!1)}>취소</button>
          <button class="btn primary sm" disabled=${!g.name.trim()||g.startDate>g.endDate}
            onClick=${()=>{let R=Ae();a(E=>{E.trips=[...E.trips,{id:R,name:g.name.trim(),startDate:g.startDate,endDate:g.endDate,createdAt:Date.now()}]}),s(R),$(!1),b({name:"",startDate:Ie(),endDate:Ie()}),i("여행을 만들었어요. '항목 조정'으로 지출을 넣으세요")}}>만들기</button>
        </div>
      </div>`}
    ${D&&k`
      <div class="monthBar">
        <span class="monthLabel">${D.name}</span>
        <span class="totals"><span class="exp">₩${Q(D.expense)}</span></span>
      </div>
      ${P?k`
          <div class="card tripDates">
            <div class="cardLabel">${O&&!h?"이 여행은 기간이 없어요 — 기간을 넣어야 지출을 찾아 묶을 수 있어요":"여행 기간 고치기"}</div>
            <input class="inp" placeholder="여행 이름" value=${P.name} onInput=${R=>m({...P,name:R.target.value})} />
            <div class="row wrap">
              <input type="date" class="inp date" value=${P.startDate} onInput=${R=>m({...P,startDate:R.target.value})} />
              <span class="hint sm">~</span>
              <input type="date" class="inp date" value=${P.endDate} onInput=${R=>m({...P,endDate:R.target.value})} />
            </div>
            <div class="acts">
              ${h&&!O&&k`<button class="btn ghost sm" onClick=${()=>m(null)}>취소</button>`}
              <button class="btn primary sm" disabled=${!P.startDate||!P.endDate||P.startDate>P.endDate} onClick=${H}>기간 저장</button>
            </div>
          </div>`:""}
      ${(()=>{let R=En(t,D);return k`
          <div class="tripSum">
            <div class="tripSumTop">
              ${R.from?`${R.from.replace(/-/g,".").slice(2)} ~ ${R.to.slice(5).replace("-",".")}${R.days?` · ${R.days}일`:""} · `:""}${R.count}건
              ${!O&&!h&&k`<button class="pickToggle" onClick=${()=>m({id:D.id,name:D.name,startDate:D.startDate,endDate:D.endDate})}>기간 고치기</button>`}
              ${!h&&!w&&k`<button class="pickToggle warn" onClick=${()=>M(!0)}>여행 삭제</button>`}
            </div>
            ${w&&k`
              <div class="delAsk">
                <div class="hint sm">${R.count>0?`"${D.name}" 여행을 지울까요? 묶인 ${R.count}건은 여행에서만 빠지고 기록은 그대로 남습니다.`:`"${D.name}" 여행을 지울까요?`}</div>
                <div class="acts">
                  <button class="btn ghost sm" onClick=${()=>M(!1)}>그만두기</button>
                  <button class="btn danger sm" onClick=${y}>여행 삭제</button>
                </div>
              </div>`}
            ${R.days&&R.total>0&&k`<div class="tripSumTop">하루 평균 ₩${Q(Math.round(R.total/R.days))}</div>`}
            <div class="tripCats">
              ${R.cats.map(([E,A])=>k`
                <span class="tripCat" key=${E}>
                  <span class="dot" style=${`background:${xe[E]?.color||"#999"}`}></span>
                  ${xe[E]?.label||E} ₩${Q(A)}
                </span>`)}
            </div>
            ${(R.reimbursed>0||R.welfare!==0)&&k`
              <div class="tripFx">
                ${R.reimbursed>0?k`<span>같이 간 사람에게 받은 정산금 ₩${Q(R.reimbursed)} 차감</span>`:""}
                ${R.reimbursed>0&&R.welfare!==0?" · ":""}
                ${R.welfare!==0?k`<span>복지카드 ₩${Q(R.welfare)} <b>별도</b> (위 합계에 안 들어감)</span>`:""}
              </div>`}
            ${Object.keys(R.fx).length>0&&k`
              <div class="tripFx">${Object.entries(R.fx).map(([E,A])=>`${E} ${A.toLocaleString()}`).join(" · ")}</div>`}
          </div>`})()}
      ${(()=>{let R=e.trips.find(U=>U.id===n);if(!R)return"";let E=R.plan||null,A=Ie(),F=R.startDate&&R.endDate&&A>=R.startDate&&A<=R.endDate,G=E?La(E.raw||"",{startDate:R.startDate}):null,ue=G?G.days:[],we=E&&E.costs||{},K=Oa(ue);for(let U of K.byDay){let Y=we[U.dayNo];Y&&(U.total=Object.values(Y).reduce((oe,Z)=>oe+Z,0),U.kinds={...Y})}let j=K.byDay.reduce((U,Y)=>U+Y.total,0),W=ue.find(U=>U.date===A),te=U=>{a(Y=>{Y.trips=Y.trips.map(oe=>oe.id===R.id?{...oe,plan:{raw:U,savedAt:Date.now(),costs:oe.plan&&oe.plan.costs||{}}}:oe)}),l(!1),p(""),i("일정표를 저장했어요")};return k`
          <div class="card planCard">
            <div class="cardLabel">
              일정표
              <button class="pickToggle" onClick=${()=>{l(U=>!U),p(E?E.raw:"")}}>
                ${E?"일정 고치기":"일정 넣기"}
              </button>
            </div>

            ${r&&k`
              <div class="hint sm">여행 일정표를 붙여넣으세요. HTML이든 글이든 됩니다.
                <b>확정 전까지 언제든 바꿔도 됩니다.</b> 일정이 바뀌어도 지출 기록은 그대로입니다.</div>
              <textarea class="pasteArea planArea" value=${c} onInput=${U=>p(U.target.value)}
                placeholder=${`예)
1일 차 (3월 10일, 수)
10:35 나리타공항 도착
13:10 점심 1,200엔`}></textarea>
              <div class="acts">
                ${E&&k`<button class="btn ghost sm" onClick=${()=>{te("")}}>일정표 지우기</button>`}
                <button class="btn ghost sm" onClick=${()=>l(!1)}>그만두기</button>
                <button class="btn primary sm" onClick=${()=>te(c)} disabled=${!c.trim()}>저장</button>
              </div>`}

            ${!r&&!E&&k`<div class="hint sm">일정표를 넣어두면 여행 중에 여기서 바로 볼 수 있어요.</div>`}

            ${!r&&E&&!ue.length&&k`
              <div class="hint sm">날짜별로 가르지 못해 글 그대로 보여드려요.</div>
              <pre class="planRaw">${(E.raw||"").slice(0,4e3)}</pre>`}

            ${!r&&ue.length>0&&k`
              ${F&&W&&k`
                <div class="planToday">
                  <div class="planTodayHead">오늘 · ${W.dayNo}일차</div>
                  ${W.items.map((U,Y)=>k`
                    <div class="planItem" key=${Y}>
                      <span class="planTime">${U.time}</span>
                      <span class="planText">${U.text}</span>
                      ${U.cost?k`<span class="planCost">₩${Q(U.cost)}</span>`:""}
                    </div>`)}
                </div>`}

              <div class="planDays">
                ${ue.map(U=>{let Y=K.byDay.find(Z=>Z.dayNo===U.dayNo)||{total:0,kinds:{}},oe=U.date?t.filter(Z=>Z.tripId===R.id&&Z.date===U.date&&Z.type==="expense"&&!Z.isRefund&&!Z.transferKind).reduce((Z,le)=>Z+le.amount,0):0;return k`
                    <details class="planDay" key=${U.dayNo} open=${F&&U.date===A}>
                      <summary>
                        <b>${U.dayNo}일차</b> ${U.date?U.date.slice(5):""}
                        <span class="planSum">예상 ₩${Q(Y.total)}${oe>0?` · 실제 ₩${Q(oe)}`:""}</span>
                      </summary>
                      <div class="planKinds">
                        ${Object.entries(Y.kinds).map(([Z,le])=>k`
                          <button class="chip sm" key=${Z} onClick=${()=>u({dayNo:U.dayNo,kind:Z,value:le})}>
                            ${Ln[Z]} ₩${Q(le)}
                          </button>`)}
                        <button class="chip sm ghost" onClick=${()=>u({dayNo:U.dayNo,kind:"etc",value:0})}>+ 고치기</button>
                      </div>
                      ${U.items.map((Z,le)=>k`
                        <div class="planItem" key=${le}>
                          <span class="planTime">${Z.time}</span>
                          <span class="planText">${Z.text}</span>
                          ${Z.cost?k`<span class="planCost">₩${Q(Z.cost)}</span>`:""}
                        </div>`)}
                    </details>`})}
              </div>

              ${d&&k`
                <div class="box">
                  <div class="boxTop"><span class="maintName">${d.dayNo}일차 ${Ln[d.kind]} 예상 비용</span></div>
                  <input class="inp" type="number" inputmode="numeric" value=${d.value}
                    onInput=${U=>u({...d,value:parseInt(U.target.value||"0",10)})} />
                  <div class="acts">
                    <button class="btn ghost sm" onClick=${()=>u(null)}>그만두기</button>
                    <button class="btn primary sm" onClick=${()=>{a(U=>{U.trips=U.trips.map(Y=>{if(Y.id!==R.id)return Y;let oe=Y.plan&&Y.plan.costs||{},Z={...(K.byDay.find(le=>le.dayNo===d.dayNo)||{}).kinds,...oe[d.dayNo]||{}};return Z[d.kind]=d.value,{...Y,plan:{...Y.plan||{},costs:{...oe,[d.dayNo]:Z}}}})}),u(null),i("예상 비용을 고쳤어요")}}>저장</button>
                  </div>
                </div>`}

              <div class="planTotal">
                예상 합계 <b>₩${Q(j)}</b>
                ${to(t,R)>0?k` · 실제 <b>₩${Q(to(t,R))}</b>`:""}
              </div>`}
          </div>`})()}

      ${I.length===0?k`<div class="empty">이 여행에 묶인 내역이 아직 없어요.<br />위의 <b>항목 조정</b>에서 항공권·숙박·현지 결제를 넣으세요.</div>`:k`<${rn} list=${I} ...${o} />`}`}`}function to(e,t){return e.filter(n=>n.tripId===t.id&&n.type==="expense"&&!n.isRefund&&!n.transferKind).reduce((n,s)=>n+s.amount,0)}var no=[{key:"y1",label:"최근 1년",days:365},{key:"y2",label:"최근 2년",days:730},{key:"all",label:"전체",days:null}];function Vr({db:e,live:t,carId:n,setCarId:s,car:o,carKm:a,mileage:i,setMileage:r,mileageDate:l,setMileageDate:c,maintEdit:p,setMaintEdit:d,patch:u,addVehicle:v,latestMileage:$,rowProps:g,assignCar:b}){let[h,m]=L(!1),[w,M]=L(""),[y,C]=L("all"),[D,I]=L("gasoline"),O=J(()=>{let K=no.find(W=>W.key===y);if(!K||!K.days)return"0000-00-00";let j=new Date;return j.setDate(j.getDate()-K.days),ht(j)},[y]),P=K=>K.date>=O,H=e.vehicles.map(K=>{let j=0;for(let W of t)W.carId===K.id&&W.type==="expense"&&P(W)&&(j+=W.isRefund?-W.amount:W.amount);return{...K,expense:j}}),R=e.maintenance.filter(K=>K.carId===n),E=e.mileageLogs.filter(K=>K.carId===n).sort((K,j)=>K.date<j.date?1:-1).slice(0,5),A=t.filter(K=>K.carId===n&&P(K)).sort((K,j)=>K.date<j.date?1:K.date>j.date?-1:j.createdAt-K.createdAt),F=J(()=>{let K=new Map;for(let j of A){if(j.type!=="expense")continue;let W=j.category||"etc";K.set(W,(K.get(W)||0)+(j.isRefund?-j.amount:j.amount))}return Array.from(K.entries()).filter(([,j])=>j!==0).sort((j,W)=>W[1]-j[1])},[A]),G=F.reduce((K,[,j])=>K+j,0),ue=J(()=>t.filter(K=>!K.carId&&K.type==="expense"&&K.category==="car"&&P(K)),[t]),we=(K,j)=>u(W=>{W.maintenance=W.maintenance.map(te=>te.id===K?{...te,...j}:te)});return k`
    <div class="cards">
      ${H.length===0&&k`<div class="empty">아직 등록한 차량이 없어요.</div>`}
      ${H.map(K=>k`
        <button key=${K.id} class=${"sumCard"+(n===K.id?" on":"")} onClick=${()=>s(K.id)}>
          <div class="sumName"><${Jn} size=${12} /> ${K.name}</div>
          <div class="sumAmt">₩${Q(K.expense)}</div>
        </button>`)}
      ${!h&&k`<button class="tag dash" onClick=${()=>m(!0)}>+ 새 차량</button>`}
    </div>

    ${h&&k`
      <div class="card">
        <div class="cardLabel">차량 추가</div>
        <input class="inp" placeholder="차량 이름 (예: 아반떼)" value=${w} onInput=${K=>M(K.target.value)} />
        <div class="miniLabel">연료</div>
        <div class="chips">
          ${on.map(K=>k`
            <button key=${K.key} class=${"tag"+(D===K.key?" on":"")} onClick=${()=>I(K.key)}>${K.label}</button>`)}
        </div>
        <div class="hint sm">
          고른 연료에 맞는 정비 항목 ${ao(D).length}개가 자동으로 등록됩니다.
          주기는 일반적인 값이라 차종에 따라 다를 수 있고, 등록 뒤 각 항목에서 고칠 수 있어요.
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>m(!1)}>취소</button>
          <button class="btn primary sm" disabled=${!w.trim()}
            onClick=${()=>{s(v(w.trim(),D).id),M(""),m(!1)}}>만들기</button>
        </div>
      </div>`}

    <div class="row wrap" style="margin-top:10px">
      ${no.map(K=>k`
        <button key=${K.key} class=${"tag"+(y===K.key?" on":"")} onClick=${()=>C(K.key)}>${K.label}</button>`)}
    </div>

    ${o&&(()=>{let K=H.find(te=>te.id===n)?.expense||0,j=A.map(te=>te.date).sort(),W=j.length?Math.max(1,Math.round((new Date(j[j.length-1])-new Date(j[0]))/2592e6)+1):1;return k`
      <div class="monthBar">
        <span class="monthLabel">${o.name}${o.fuel?k`<span class="fuelTag">${(on.find(te=>te.key===o.fuel)||{}).label||""}</span>`:""}</span>
        <span class="totals"><span class="exp">유지비 ₩${Q(K)}</span></span>
      </div>
      ${K>0&&k`
        <div class="carSpan">
          ${j.length?`${j[0]} ~ ${j[j.length-1]} · ${A.length}건`:""}
          ${W>1?` · 월평균 ₩${Q(Math.round(K/W))}`:""}
          ${W>=6?` · 연환산 ₩${Q(Math.round(K/W*12))}`:""}
        </div>`}
      `})()}
    ${o&&k`

      <div class="box">
        <div class="boxTop"><${Nr} size=${15} />
          ${a!=null?k`<span>현재 ${a.toLocaleString("ko-KR")}km</span>`:k`<span class="muted">기록된 주행거리가 없어요</span>`}
        </div>
        <div class="row wrap">
          <input type="number" class="inp" placeholder="계기판 거리(km)" value=${i} onInput=${K=>r(K.target.value)} />
          <input type="date" class="inp date" value=${l} onInput=${K=>c(K.target.value)} />
          <button class="btn primary sm" disabled=${!i}
            onClick=${()=>{u(K=>{K.mileageLogs=[{id:Ae(),carId:n,date:l,mileage:parseInt(i,10)},...K.mileageLogs]}),r("")}}>
            <${sn} size=${14} /> 기록</button>
        </div>
        ${E.length>0&&k`<div class="logList">${E.map(K=>k`<span class="log" key=${K.id}>${$t(K.date)} · ${K.mileage.toLocaleString("ko-KR")}km</span>`)}</div>`}
      </div>

      <div class="maintList">
        ${R.map(K=>{let{status:j,remKm:W,remMonths:te}=Ir(K,a),U=p&&p.id===K.id;return k`
            <div class="box maint" key=${K.id}>
              <div class="boxTop">
                <span class="maintName"><${Er} size=${13} /> ${K.label}</span>
                <span class=${"badge "+j}>${Ar[j]}</span>
              </div>
              <div class="maintSub">
                ${j!=="unknown"?k`${W!=null?k`<span>${W>0?`${W.toLocaleString("ko-KR")}km 남음`:`${Math.abs(W).toLocaleString("ko-KR")}km 초과`}</span>`:""}
                    ${W!=null&&te!=null?k`<span> · </span>`:""}
                    ${te!=null?k`<span>${te>0?`${te}개월 남음`:`${Math.abs(te)}개월 초과`}</span>`:""}`:k`<span>마지막 처리 기록을 입력해주세요</span>`}
              </div>
              ${U?k`<div class="row wrap">
                    <input type="date" class="inp date" value=${p.lastDate||""} onInput=${Y=>d({...p,lastDate:Y.target.value})} />
                    <input type="number" class="inp" placeholder="교체 당시 km" value=${p.lastMileage??""} onInput=${Y=>d({...p,lastMileage:Y.target.value?parseInt(Y.target.value,10):null})} />
                    <input type="number" class="inp" placeholder="주기(km)" value=${p.intervalKm??""} onInput=${Y=>d({...p,intervalKm:Y.target.value?parseInt(Y.target.value,10):null})} />
                    <input type="number" class="inp" placeholder="주기(개월)" value=${p.intervalMonths??""} onInput=${Y=>d({...p,intervalMonths:Y.target.value?parseInt(Y.target.value,10):null})} />
                    <div class="acts">
                      <button class="btn ghost sm" onClick=${()=>d(null)}>취소</button>
                      <button class="btn primary sm" onClick=${()=>{we(K.id,p),d(null)}}>저장</button>
                    </div>
                  </div>`:k`<div class="acts">
                    <button class="btn ghost sm" onClick=${()=>d({...K})}>수정</button>
                    <button class="btn primary sm" onClick=${()=>we(K.id,{lastDate:Ie(),lastMileage:$(n)})}>오늘 처리함</button>
                  </div>`}
            </div>`})}
      </div>

      ${F.length>0&&k`
        <div class="box">
          <div class="boxTop"><span class="maintName">무엇에 들었나</span><span class="sumAmt">₩${Q(G)}</span></div>
          <div class="carBreak">
            ${F.map(([K,j])=>k`
              <div class="carBreakRow" key=${K}>
                <span class="dot" style=${`background:${(xe[K]||{}).color||"#999"}`}></span>
                <span class="carBreakName">${(xe[K]||{}).label||"기타"}</span>
                <span class="carBreakBar"><i style=${`width:${Math.max(2,Math.round(j/G*100))}%;background:${(xe[K]||{}).color||"#999"}`}></i></span>
                <span class="carBreakAmt">₩${Q(j)}</span>
              </div>`)}
          </div>
        </div>`}

      ${ue.length>0&&e.vehicles.length>0&&k`
        <div class="box">
          <div class="boxTop"><span class="maintName">어느 차인지 안 정한 지출 ${ue.length}건</span></div>
          <div class="hint sm">한 번 정해두면 같은 곳에서 쓴 다음 기록은 자동으로 이 차에 붙습니다.</div>
          <div class="unassignList">
            ${ue.slice(0,6).map(K=>k`
              <div class="unassignRow" key=${K.id}>
                <span class="unassignMemo">${K.memo}</span>
                <span class="unassignAmt">₩${Q(K.amount)}</span>
                <div class="chips">
                  ${e.vehicles.map(j=>k`
                    <button key=${j.id} class="chip sm" onClick=${()=>b(K,j.id)}>${j.name}</button>`)}
                </div>
              </div>`)}
          </div>
        </div>`}

      ${A.length>0&&k`<div class="carSpend"><div class="groupHead">이 차량으로 기록된 지출</div><${rn} list=${A} ...${g} /></div>`}`}`}function gt({label:e,items:t,placeholder:n,onChange:s}){let[o,a]=L(""),i=()=>{let r=o.trim();!r||t.includes(r)||(s([...t,r]),a(""))};return k`
    <div class="nameList">
      <div class="miniLabel">${e}</div>
      <div class="chips">
        ${t.map(r=>k`
          <span class="tag on" key=${r}>${r}
            <button class="tagX" onClick=${()=>s(t.filter(l=>l!==r))} aria-label="빼기">×</button>
          </span>`)}
      </div>
      <div class="row">
        <input class="inp" placeholder=${n} value=${o}
          onInput=${r=>a(r.target.value)} onKeyDown=${r=>r.key==="Enter"&&i()} />
        <button class="btn ghost sm" onClick=${i} disabled=${!o.trim()}>추가</button>
      </div>
    </div>`}function so(e){return e?e.transferKind?"합계 제외":e.type==="income"?"수입":e.type==="transfer"?"이체":(xe[e.category]||{}).label||"지출":"-"}function zr({db:e,setDb:t,onClose:n,flash:s,onSync:o,onUndoImport:a,onOpenAccounts:i,reclass:r,reclassUndo:l,onPlanReclass:c,onRunReclass:p,onUndoReclass:d,onCancelReclass:u}){let v=Ce(null),[$,g]=L(!1),[b,h]=L(!1),m=J(()=>JSON.stringify(e).length,[e]),w=()=>{let y=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),C=URL.createObjectURL(y),D=document.createElement("a");D.href=C,D.download=`가계부-백업-${Ie()}.json`,document.body.appendChild(D),D.click(),document.body.removeChild(D),setTimeout(()=>URL.revokeObjectURL(C),1e3)},M=y=>{let C=y.target.files&&y.target.files[0];if(!C)return;let D=new FileReader;D.onload=()=>{try{let I=JSON.parse(D.result);if(!I.entries)throw new Error("형식이 다릅니다");t({...Le,...I,settings:{...Le.settings,...I.settings||{}}}),s(`${I.entries.length}건을 불러왔어요`),n()}catch{s("파일을 읽지 못했어요")}},D.readAsText(C)};return k`
    <div class="card settings">
      <div class="cardLabel">설정</div>

      <label class="setRow">
        <span>본인 이름</span>
        <input class="inp" placeholder="이체 판정에 씁니다" value=${e.settings.userName}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,userName:y.target.value}}))} />
      </label>

      <label class="setRow">
        <span>월 시작일</span>
        <input class="inp" type="number" min="1" max="28" value=${e.settings.monthStartDay}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,monthStartDay:Math.min(28,Math.max(1,parseInt(y.target.value||"1",10)))}}))} />
      </label>
      <div class="hint sm">급여일 기준으로 보고 싶으면 급여일을 넣으세요. 1이면 달력 기준입니다.</div>

      <div class="setDivider">수입으로 볼 것</div>
      <div class="hint sm">여기 적힌 곳에서 온 입금만 수입으로 셉니다. 나머지 입금은 기록만 남고 합계에서 빠집니다.</div>
      <${gt} label="수입처" items=${e.settings.incomeSources||[]} placeholder="예: 근무하는 회사 이름"
        onChange=${y=>t(C=>({...C,settings:{...C.settings,incomeSources:y}}))} />
      <${gt} label="항상 제외" items=${e.settings.excludedCounterparties||[]} placeholder="예: 어머니 성함"
        onChange=${y=>t(C=>({...C,settings:{...C.settings,excludedCounterparties:y}}))} />

      <div class="setDivider">합계에서 뺄 것</div>
      <div class="hint sm">복지카드는 회사 돈이라 기록만 하고 지출에는 안 넣습니다. 가족 송금은 보낸 시점에 지출로 잡습니다.</div>
      <${gt} label="복지카드" items=${e.settings.welfareCards||[]} placeholder="예: 현대카드"
        onChange=${y=>t(C=>({...C,settings:{...C.settings,welfareCards:y}}))} />
      <label class="setRow">
        <span>복지 한도</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="연간 한도 (예: 1200000)"
          value=${e.settings.welfareLimit||""}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,welfareLimit:parseInt(y.target.value||"0",10)}}))} />
      </label>
      <label class="setRow">
        <span>시작 시점</span>
        <input class="inp" placeholder="예: 2026-01" value=${e.settings.welfarePeriodStart||""}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,welfarePeriodStart:y.target.value.trim()}}))} />
      </label>
      <div class="hint sm">현대복지카드는 승인 문자에 잔여 한도가 찍혀 와서 따로 넣을 게 없습니다. 문자가 안 오는 카드만 한도를 넣으세요.</div>

      <${gt} label="가족 송금" items=${e.settings.familyTransferKeywords||[]} placeholder="예: 하나머니충전"
        onChange=${y=>t(C=>({...C,settings:{...C.settings,familyTransferKeywords:y}}))} />
      <label class="setRow">
        <span>생활비 최소</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 800000"
          value=${e.settings.familyAmountMin||""}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,familyAmountMin:parseInt(y.target.value||"0",10)}}))} />
      </label>
      <label class="setRow">
        <span>생활비 최대</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 1400000"
          value=${e.settings.familyAmountMax||""}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,familyAmountMax:parseInt(y.target.value||"0",10)}}))} />
      </label>
      <div class="hint sm">이 범위 안의 송금만 <b>생활비(지출)</b>로 셉니다.
        범위를 벗어나면 <b>별도 송금</b>으로 보고 합계에서 뺍니다 — 받아서 그대로 넘기는 등록금 같은 돈에 씁니다.</div>
      <label class="setRow">
        <span>별도 송금 합계 제외</span>
        <input type="checkbox" checked=${e.settings.familyExtraExcluded!==!1}
          onChange=${y=>t(C=>({...C,settings:{...C.settings,familyExtraExcluded:y.target.checked}}))} />
      </label>
      <${gt} label="여행 자금" items=${e.settings.travelKeywords||[]} placeholder="예: 트래블월렛"
        onChange=${y=>t(C=>({...C,settings:{...C.settings,travelKeywords:y}}))} />

      <div class="setDivider">구글시트 연동</div>
      <label class="setRow">
        <span>시트 주소</span>
        <input class="inp" placeholder="https://script.google.com/.../exec" value=${e.settings.sheetUrl}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,sheetUrl:y.target.value.trim()}}))} />
      </label>
      <label class="setRow">
        <span>연결 암호</span>
        <input class="inp" placeholder="Apps Script에 적은 값과 같게" value=${e.settings.sheetToken}
          onInput=${y=>t(C=>({...C,settings:{...C.settings,sheetToken:y.target.value.trim()}}))} />
      </label>
      <div class="acts">
        <button class="btn ghost sm" onClick=${async()=>{try{await ta(e.settings.sheetUrl,e.settings.sheetToken),s("연결됐어요")}catch(y){s(`연결 실패: ${y.message}`)}}} disabled=${!e.settings.sheetUrl}>연결 확인</button>
        <button class="btn ghost sm" onClick=${o} disabled=${!e.settings.sheetUrl}>지금 맞추기</button>
      </div>
      ${e.settings.lastSyncAt&&k`<div class="hint sm">마지막 동기화 ${new Date(e.settings.lastSyncAt).toLocaleString("ko-KR")}</div>`}

      <div class="setDivider">데이터</div>
      <div class="setStat">버전 <b>v30</b> · 기록 ${e.entries.filter(y=>!y.deleted).length}건 · 분류 규칙 ${(e.categoryRules||[]).length}개 · 보낼 것 ${e.entries.filter(y=>y.dirty).length}건 · 저장 용량 ${(m/1024).toFixed(0)}KB</div>

      <div class="acts">
        <button class="btn ghost sm" onClick=${()=>v.current&&v.current.click()}>가져오기</button>
        <button class="btn primary sm" onClick=${w}>백업 내보내기</button>
      </div>
      <input ref=${v} type="file" accept="application/json" style="display:none" onChange=${M} />

      <div class="setDivider danger">기록 지우기</div>
      <div class="hint sm">
        설정(시트 주소·수입처 등)과 학습한 분류 규칙은 남고 기록만 지웁니다.
        <b>지우기 전에 위에서 백업을 먼저 받으세요.</b>
      </div>
      ${$?k`
          <div class="dangerBox">
            <div>기록 ${e.entries.filter(y=>!y.deleted).length}건, 여행 ${e.trips.length}건, 고정비 ${e.fixedExpenses.length}건이 사라집니다.</div>
            <div class="dangerNote">
              구글시트를 쓰신다면 <b>시트의 entries 탭도 함께 비우셔야</b> 합니다.
              안 그러면 다음 동기화 때 되살아납니다.
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>g(!1)}>그만두기</button>
              <button class="btn danger sm" onClick=${()=>{t(y=>({...Le,categoryRules:y.categoryRules||[],settings:{...y.settings,lastSyncAt:""}})),g(!1),s("기록을 지웠어요"),n()}}>정말 지우기</button>
            </div>
          </div>`:k`
          <div class="acts">
            <button class="btn ghost sm" onClick=${()=>g(!0)}>기록 전체 지우기</button>
          </div>`}

      ${e.settings.sheetUrl&&k`
        <div class="setDivider">시트 청소</div>
        <div class="hint sm">시트에 남은 빈 줄을 치웁니다. 기록은 그대로 두고 쓸모없는 줄만 지웁니다.</div>
        <div class="acts">
          <button class="btn ghost sm" disabled=${b} onClick=${async()=>{h(!0);try{let y=await Qs(e.settings.sheetUrl,e.settings.sheetToken);s(y.removed>0?`빈 줄 ${y.removed}개를 치웠어요 (남은 줄 ${y.kept}개)`:"치울 빈 줄이 없어요")}catch(y){s(String(y&&y.message||y))}h(!1)}}>${b?"치우는 중…":"시트 빈 줄 치우기"}</button>
        </div>`}

      <div class="setDivider">계좌</div>
      <div class="hint sm">명세서를 넣을 때 어느 통장인지 구분하는 데 씁니다.
        파일에 계좌번호가 찍혀 있으면 알아서 골라줍니다.</div>
      <div class="acts">
        <button class="btn ghost sm" onClick=${()=>{i&&i(),n()}}>계좌 관리</button>
      </div>

      <div class="setDivider">다시 분류하기</div>
      <div class="hint sm">기록은 그대로 두고 분류만 지금 규칙·설정으로 다시 계산합니다.
        파일을 다시 넣지 않아도 됩니다. <b>직접 고치신 건은 건드리지 않습니다.</b></div>
      ${r&&r.changes.length>0?k`
          <div class="box">
            <div class="boxTop"><span class="maintName">${r.changes.length}건이 바뀝니다</span></div>
            <div class="reclassList">
              ${r.changes.slice(0,8).map(y=>k`
                <div class="reclassRow" key=${y.id}>
                  <span class="reclassMemo">${y.memo}</span>
                  <span class="reclassChange">
                    ${so(y.before)} → <b>${so(y.after)}</b>
                  </span>
                </div>`)}
              ${r.changes.length>8&&k`<div class="hint sm">… 외 ${r.changes.length-8}건</div>`}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${u}>그만두기</button>
              <button class="btn primary sm" onClick=${p}>${r.changes.length}건 바꾸기</button>
            </div>
          </div>`:k`
          <div class="acts">
            ${l&&k`<button class="btn ghost sm" onClick=${d}>방금 바꾼 ${l.length}건 되돌리기</button>`}
            <button class="btn ghost sm" onClick=${c}>무엇이 바뀌는지 보기</button>
          </div>`}

      ${(e.imports||[]).length>0&&k`
        <div class="setDivider">가져온 파일 되돌리기</div>
        <div class="hint sm">파일 하나로 들어온 기록만 통째로 뺍니다. 다른 기록은 그대로 둡니다.</div>
        <div class="importList">
          ${(e.imports||[]).map(y=>k`
            <div class=${"importRow"+(y.undone?" undone":"")} key=${y.id}>
              <div class="importMain">
                <div class="importName">${y.name}</div>
                <div class="sub">${new Date(y.at).toLocaleDateString("ko-KR")} · ${y.count}건${y.undone?" · 되돌림":""}</div>
              </div>
              ${!y.undone&&k`<button class="btn ghost sm" onClick=${()=>a(y)}>되돌리기</button>`}
            </div>`)}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${n}>닫기</button>
      </div>
    </div>`}function Yr(){let[e,t]=Rs();return e?k`
    <div class="app">
      <header class="head">
        <h1 class="title">가계부</h1>
        <div class="rule"></div>
        <div class="sub">화면을 그리다 문제가 생겼어요</div>
      </header>
      <div class="card">
        <div class="cardLabel">무엇을 하면 되나요</div>
        <div class="hint sm">
          먼저 <b>백업 내보내기</b>로 기록을 꺼내세요.
          그다음 <b>다시 시도</b>를 눌러보고, 그래도 안 되면 <b>기록 지우기</b>로 초기화하면 됩니다.
          설정은 지워지지 않습니다.
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>{try{let o=localStorage.getItem(tt)||"{}",a=new Blob([o],{type:"application/json"}),i=URL.createObjectURL(a),r=document.createElement("a");r.href=i,r.download=`가계부-백업-${Ie()}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(i),1e3)}catch{alert(`파일로 저장하지 못했어요. 아래 내용을 복사해 두세요.

`+(localStorage.getItem(tt)||""))}}}>백업 내보내기</button>
          <button class="btn primary sm" onClick=${()=>t()}>다시 시도</button>
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>{if(window.confirm("기록을 모두 지웁니다. 백업을 먼저 받으셨나요?")){try{let o=JSON.parse(localStorage.getItem(tt)||"{}");localStorage.setItem(tt,JSON.stringify({...Le,categoryRules:o.categoryRules||[],settings:{...Le.settings,...o.settings||{},lastSyncAt:""}}))}catch{localStorage.removeItem(tt)}location.reload()}}}>기록 지우기</button>
        </div>
      </div>
      <div class="card">
        <div class="cardLabel">오류 내용</div>
        <div class="errText">${String(e&&(e.message||e))}</div>
      </div>
    </div>`:k`<${jr} />`}bs(k`<${Yr} />`,document.getElementById("root"));
