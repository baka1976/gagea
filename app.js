var io=Object.defineProperty;var ro=(e,t)=>{for(var n in t)io(e,n,{get:t[n],enumerable:!0})};var St,Q,Qn,lo,Ee,Jn,es,ts,ln,_t,ot,ns,un,cn,dn,co,xt={},Ct=[],uo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,At=Array.isArray;function Me(e,t){for(var n in t)e[n]=t[n];return e}function pn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Re(e,t,n){var s,o,a,i={};for(a in t)a=="key"?s=t[a]:a=="ref"?o=t[a]:i[a]=t[a];if(arguments.length>2&&(i.children=arguments.length>3?St.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)i[a]===void 0&&(i[a]=e.defaultProps[a]);return kt(e,i,s,o,null)}function kt(e,t,n,s,o){var a={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Qn,__i:-1,__u:0};return o==null&&Q.vnode!=null&&Q.vnode(a),a}function It(e){return e.children}function wt(e,t){this.props=e,this.context=t}function We(e,t){if(t==null)return e.__?We(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?We(e):null}function po(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,s=[],o=[],a=Me({},t);a.__v=t.__v+1,Q.vnode&&Q.vnode(a),fn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,s,n??We(t),!!(32&t.__u),o),a.__v=t.__v,a.__.__k[a.__i]=a,rs(s,a,o),t.__e=t.__=null,a.__e!=n&&ss(a)}}function ss(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ss(e)}function Xn(e){(!e.__d&&(e.__d=!0)&&Ee.push(e)&&!Dt.__r++||Jn!=Q.debounceRendering)&&((Jn=Q.debounceRendering)||es)(Dt)}function Dt(){try{for(var e,t=1;Ee.length;)Ee.length>t&&Ee.sort(ts),e=Ee.shift(),t=Ee.length,po(e)}finally{Ee.length=Dt.__r=0}}function as(e,t,n,s,o,a,i,r,l,u,p){var c,d,m,g,h,y,v=s&&s.__k||Ct,$=t.length;for(l=fo(n,t,v,l,$),c=0;c<$;c++)(m=n.__k[c])!=null&&(d=m.__i!=-1&&v[m.__i]||xt,m.__i=c,y=fn(e,m,d,o,a,i,r,l,u,p),g=m.__e,m.ref&&d.ref!=m.ref&&(d.ref&&mn(d.ref,null,m),p.push(m.ref,m.__c||g,m)),h==null&&g!=null&&(h=g),4&m.__u?(l=os(m,l,e),d.__e&&(d.__e=null)):typeof m.type=="function"&&y!==void 0?l=y:g&&(l=g.nextSibling),m.__u&=-7);return n.__e=h,l}function fo(e,t,n,s,o){var a,i,r,l,u,p=n.length,c=p,d=0;for(e.__k=new Array(o),a=0;a<o;a++)(i=t[a])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[a]=kt(null,i,null,null,null):At(i)?i=e.__k[a]=kt(It,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[a]=kt(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[a]=i,l=a+d,i.__=e,i.__b=e.__b+1,r=null,(u=i.__i=mo(i,n,l,c))!=-1&&(c--,(r=n[u])&&(r.__u|=2)),r==null||r.__v==null?(u==-1&&(o>p?d--:o<p&&d++),typeof i.type!="function"&&(i.__u|=4)):u!=l&&(u==l-1?d--:u==l+1?d++:(u>l?d--:d++,i.__u|=4))):e.__k[a]=null;if(c)for(a=0;a<p;a++)(r=n[a])!=null&&(2&r.__u)==0&&(r.__e==s&&(s=We(r)),cs(r,r));return s}function os(e,t,n){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=os(s[o],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=We(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function mo(e,t,n,s){var o,a,i,r=e.key,l=e.type,u=t[n],p=u!=null&&(2&u.__u)==0;if(u===null&&r==null||p&&r==u.key&&l==u.type)return n;if(s>(p?1:0)){for(o=n-1,a=n+1;o>=0||a<t.length;)if((u=t[i=o>=0?o--:a++])!=null&&(2&u.__u)==0&&r==u.key&&l==u.type)return i}return-1}function qn(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||uo.test(t)?n:n+"px"}function bt(e,t,n,s,o){var a,i;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||qn(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||qn(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(ns,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?s?n[ot]=s[ot]:(n[ot]=un,e.addEventListener(t,a?dn:cn,a)):e.removeEventListener(t,a?dn:cn,a);else{if(o=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function Zn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[_t]==null)t[_t]=un++;else if(t[_t]<n[ot])return;return n(Q.event?Q.event(t):t)}}}function fn(e,t,n,s,o,a,i,r,l,u){var p,c,d,m,g,h,y,v,$,_,S,k,D,x,I,N,H=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[r=t.__e=n.__e]),(p=Q.__b)&&p(t);e:if(typeof H=="function"){c=i.length;try{if($=t.props,_=H.prototype&&H.prototype.render,S=(p=H.contextType)&&s[p.__c],k=p?S?S.props.value:p.__:s,n.__c?v=(d=t.__c=n.__c).__=d.__E:(_?t.__c=d=new H($,k):(t.__c=d=new wt($,k),d.constructor=H,d.render=go),S&&S.sub(d),d.state||(d.state={}),d.__n=s,m=d.__d=!0,d.__h=[],d._sb=[]),_&&d.__s==null&&(d.__s=d.state),_&&H.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Me({},d.__s)),Me(d.__s,H.getDerivedStateFromProps($,d.__s))),g=d.props,h=d.state,d.__v=t,m)_&&H.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),_&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(_&&H.getDerivedStateFromProps==null&&$!==g&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps($,k),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate($,d.__s,k)===!1){t.__v!=n.__v&&(d.props=$,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(W){W&&(W.__=t)}),Ct.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&i.push(d),r=We(n);break e}d.componentWillUpdate!=null&&d.componentWillUpdate($,d.__s,k),_&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(g,h,y)})}if(d.context=k,d.props=$,d.__P=e,d.__e=!1,D=Q.__r,x=0,_)d.state=d.__s,d.__d=!1,D&&D(t),p=d.render(d.props,d.state,d.context),Ct.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,D&&D(t),p=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++x<25);d.state=d.__s,d.getChildContext!=null&&(s=Me(Me({},s),d.getChildContext())),_&&!m&&d.getSnapshotBeforeUpdate!=null&&(y=d.getSnapshotBeforeUpdate(g,h)),I=p!=null&&p.type===It&&p.key==null?ls(p.props.children):p,r=as(e,At(I)?I:[I],t,n,s,o,a,i,r,l,u),d.base=t.__e,t.__u&=-161,d.__h.length&&i.push(d),v&&(d.__E=d.__=null)}catch(W){if(i.length=c,t.__v=null,l||a!=null){if(W.then){for(t.__u|=l?160:128;r&&r.nodeType==8&&r.nextSibling;)r=r.nextSibling;a!=null&&(a[a.indexOf(r)]=null),t.__e=r}else if(a!=null)for(N=a.length;N--;)pn(a[N])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),W.then||is(t),Q.__e(W,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):r=t.__e=ho(n.__e,t,n,s,o,a,i,l,u);return(p=Q.diffed)&&p(t),128&t.__u?void 0:r}function is(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(is))}function rs(e,t,n){for(var s=0;s<n.length;s++)mn(n[s],n[++s],n[++s]);Q.__c&&Q.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(a){a.call(o)})}catch(a){Q.__e(a,o.__v)}})}function ls(e){return typeof e!="object"||e==null||e.__b>0?e:At(e)?e.map(ls):e.constructor!==void 0?null:Me({},e)}function ho(e,t,n,s,o,a,i,r,l){var u,p,c,d,m,g,h,y=n.props||xt,v=t.props,$=t.type;if($=="svg"?o="http://www.w3.org/2000/svg":$=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&"setAttribute"in m==!!$&&($?m.localName==$:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if($==null)return document.createTextNode(v);e=document.createElementNS(o,$,v.is&&v),r&&(Q.__m&&Q.__m(t,a),r=!1),a=null}if($==null)y===v||r&&e.data==v||(e.data=v);else{if(a=$=="textarea"&&v.defaultValue!=null?null:a&&St.call(e.childNodes),!r&&a!=null)for(y={},u=0;u<e.attributes.length;u++)y[(m=e.attributes[u]).name]=m.value;for(u in y)m=y[u],u=="dangerouslySetInnerHTML"?c=m:u=="children"||u in v||u=="value"&&"defaultValue"in v||u=="checked"&&"defaultChecked"in v||bt(e,u,null,m,o);for(u in v)m=v[u],u=="children"?d=m:u=="dangerouslySetInnerHTML"?p=m:u=="value"?g=m:u=="checked"?h=m:r&&typeof m!="function"||y[u]===m||bt(e,u,m,y[u],o);if(p)r||c&&(p.__html==c.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),as(t.type=="template"?e.content:e,At(d)?d:[d],t,n,s,$=="foreignObject"?"http://www.w3.org/1999/xhtml":o,a,i,a?a[0]:n.__k&&We(n,0),r,l),a!=null)for(u=a.length;u--;)pn(a[u]);r&&$!="textarea"||(u="value",$=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[u]||$=="progress"&&!g||$=="option"&&g!=y[u])&&bt(e,u,g,y[u],o),u="checked",h!=null&&h!=e[u]&&bt(e,u,h,y[u],o))}return e}function mn(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(o){Q.__e(o,n)}}function cs(e,t,n){var s,o;if(Q.unmount&&Q.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||mn(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(a){Q.__e(a,t)}s.base=s.__P=s.__n=null}if(s=e.__k)for(o=0;o<s.length;o++)s[o]&&cs(s[o],t,n||typeof e.type!="function");n||pn(e.__e),e.__c=e.__=e.__e=void 0}function go(e,t,n){return this.constructor(e,n)}function ds(e,t,n){var s,o,a,i;t==document&&(t=document.documentElement),Q.__&&Q.__(e,t),o=(s=typeof n=="function")?null:n&&n.__k||t.__k,a=[],i=[],fn(t,e=(!s&&n||t).__k=Re(It,null,[e]),o||xt,xt,t.namespaceURI,!s&&n?[n]:o?null:t.firstChild?St.call(t.childNodes):null,a,!s&&n?n:o?o.__e:t.firstChild,s,i),rs(a,e,i),e.props.children=null}St=Ct.slice,Q={__e:function(e,t,n,s){for(var o,a,i;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),i=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,s||{}),i=o.__d),i)return o.__E=o}catch(r){e=r}throw e}},Qn=0,lo=function(e){return e!=null&&e.constructor===void 0},wt.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Me({},this.state),typeof e=="function"&&(e=e(Me({},n),this.props)),e&&Me(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Xn(this))},wt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Xn(this))},wt.prototype.render=It,Ee=[],es=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ts=function(e,t){return e.__v.__b-t.__v.__b},Dt.__r=0,ln=Math.random().toString(8),_t="__d"+ln,ot="__a"+ln,ns=/(PointerCapture)$|Capture$/i,un=0,cn=Zn(!1),dn=Zn(!0),co=0;var Qe,te,hn,us,it=0,ys=[],se=Q,ps=se.__b,fs=se.__r,ms=se.diffed,hs=se.__c,gs=se.unmount,$s=se.__;function Rt(e,t){se.__h&&se.__h(te,e,it||t),it=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function L(e){return it=1,$o(ks,e)}function $o(e,t,n){var s=Rt(Qe++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):ks(void 0,t),function(r){var l=s.__N?s.__N[0]:s.__[0],u=s.t(l,r);l!==u&&(s.__N=[u,s.__[1]],s.__c.setState({}))}],s.__c=te,!te.__f)){var o=function(r,l,u){if(!s.__c.__H)return!0;var p=!1,c=s.__c.props!==r;if(s.__c.__H.__.some(function(m){if(m.__N){p=!0;var g=m.__[0];m.__=m.__N,m.__N=void 0,g!==m.__[0]&&(c=!0)}}),a){var d=a.call(this,r,l,u);return p?d||c:d}return!p||c};te.__f=!0;var a=te.shouldComponentUpdate,i=te.componentWillUpdate;te.componentWillUpdate=function(r,l,u){if(this.__e){var p=a;a=void 0,o(r,l,u),a=p}i&&i.call(this,r,l,u)},te.shouldComponentUpdate=o}return s.__N||s.__}function Ke(e,t){var n=Rt(Qe++,3);!se.__s&&_s(n.__H,t)&&(n.__=e,n.u=t,te.__H.__h.push(n))}function _e(e){return it=5,U(function(){return{current:e}},[])}function U(e,t){var n=Rt(Qe++,7);return _s(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function $n(e,t){return it=8,U(function(){return e},t)}function bs(e){var t=Rt(Qe++,10),n=L();return t.__=e,te.componentDidCatch||(te.componentDidCatch=function(s,o){t.__&&t.__(s,o),n[1](s)}),[n[0],function(){n[1](void 0)}]}function vo(){for(var e;e=ys.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Mt),t.__h.some(gn),t.__h=[]}catch(n){t.__h=[],se.__e(n,e.__v)}}}se.__b=function(e){te=null,ps&&ps(e)},se.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),$s&&$s(e,t)},se.__r=function(e){fs&&fs(e),Qe=0;var t=(te=e.__c).__H;t&&(hn===te?(t.__h=[],te.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Mt),t.__h.some(gn),t.__h=[],Qe=0)),hn=te},se.diffed=function(e){ms&&ms(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ys.push(t)!==1&&us===se.requestAnimationFrame||((us=se.requestAnimationFrame)||yo)(vo)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),hn=te=null},se.__c=function(e,t){t.some(function(n){try{n.__h.some(Mt),n.__h=n.__h.filter(function(s){return!s.__||gn(s)})}catch(s){t.some(function(o){o.__h&&(o.__h=[])}),t=[],se.__e(s,n.__v)}}),hs&&hs(e,t)},se.unmount=function(e){gs&&gs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(s){try{Mt(s)}catch(o){t=o}}),n.__H=void 0,t&&se.__e(t,n.__v))};var vs=typeof requestAnimationFrame=="function";function yo(e){var t,n=function(){clearTimeout(s),vs&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);vs&&(t=requestAnimationFrame(n))}function Mt(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t}function gn(e){var t=te;e.__c=e.__(),te=t}function _s(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function ks(e,t){return typeof t=="function"?t(e):t}var xs=function(e,t,n,s){var o;t[0]=0;for(var a=1;a<t.length;a++){var i=t[a++],r=t[a]?(t[0]|=i?1:2,n[t[a++]]):t[++a];i===3?s[0]=r:i===4?s[1]=Object.assign(s[1]||{},r):i===5?(s[1]=s[1]||{})[t[++a]]=r:i===6?s[1][t[++a]]+=r+"":i?(o=e.apply(r,xs(e,r,n,["",null])),s.push(o),r[0]?t[0]|=2:(t[a-2]=0,t[a]=o)):s.push(r)}return s},ws=new Map;function Le(e){var t=ws.get(this);return t||(t=new Map,ws.set(this,t)),(t=xs(this,t.get(e)||(t.set(e,t=(function(n){for(var s,o,a=1,i="",r="",l=[0],u=function(d){a===1&&(d||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,d,i):a===3&&(d||i)?(l.push(3,d,i),a=2):a===2&&i==="..."&&d?l.push(4,d,0):a===2&&i&&!d?l.push(5,0,!0,i):a>=5&&((i||!d&&a===5)&&(l.push(a,0,i,o),a=6),d&&(l.push(a,d,0,o),a=6)),i=""},p=0;p<n.length;p++){p&&(a===1&&u(),u(p));for(var c=0;c<n[p].length;c++)s=n[p][c],a===1?s==="<"?(u(),l=[l],a=3):i+=s:a===4?i==="--"&&s===">"?(a=1,i=""):i=s+i[0]:r?s===r?r="":i+=s:s==='"'||s==="'"?r=s:s===">"?(u(),a=1):a&&(s==="="?(a=5,o=i,i=""):s==="/"&&(a<5||n[p][c+1]===">")?(u(),a===3&&(l=l[0]),a=l,(l=l[0]).push(2,0,a),a=0):s===" "||s==="	"||s===`
`||s==="\r"?(u(),a=2):i+=s),a===3&&i==="!--"&&(a=4,l=l[0])}return u(),l})(e)),t),arguments,[])).length>1?t:t[0]}var bn={};ro(bn,{CATEGORIES:()=>Se,CAT_MAP:()=>ze,applyAccountRules:()=>Pe,classifyIncome:()=>Ye,detectCategory:()=>ke,detectSmsKind:()=>Lt,extractAmount:()=>Tt,extractBalance:()=>vn,extractMerchant:()=>Et,finishMemo:()=>Bs,formatDateLabel:()=>bo,formatWon:()=>F,isWeakMemo:()=>Ms,matchByAmount:()=>Rs,matchRule:()=>Ne,matchScore:()=>Ps,normKey:()=>z,parseBankSms:()=>Ts,parseCardSms:()=>Ks,parseFree:()=>Ls,parseOne:()=>Nt,parsePaste:()=>Ko,parseReceipt:()=>Es,parseStatement:()=>Os,preferred:()=>To,reconcile:()=>yn,resolveYear:()=>et,scoreConfidence:()=>Oe,similarity:()=>Ge,stripNoise:()=>Be,toLocalISO:()=>ie,todayISO:()=>oe,uid:()=>Ve});var Cs=e=>String(e).padStart(2,"0");function ie(e){return`${e.getFullYear()}-${Cs(e.getMonth()+1)}-${Cs(e.getDate())}`}function oe(e=0){let t=new Date;return t.setDate(t.getDate()+e),ie(t)}function et(e,t,n=new Date){let s=n.getFullYear(),o=n.getMonth()+1;return e-o>2?s-=1:o-e>9&&(s+=1),ie(new Date(s,e-1,t))}function bo(e){let t=new Date(e+"T00:00:00"),n=["일","월","화","수","목","금","토"];return`${t.getMonth()+1}월 ${t.getDate()}일 (${n[t.getDay()]})`}function F(e){return(e||0).toLocaleString("ko-KR")}function Ve(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}var Se=[{key:"food",label:"식비",color:"#8A6D3B",words:["밥","점심","저녁","식당","국밥","편의점","마트","장보기","아침","치킨","배달","음식","분식","김밥","GS25","CU","세븐일레븐","이마트","홈플러스","지에스리테일","GS리테일","비지에프리테일","BGF리테일","롯데마트","롯데쇼핑","이마트에브리데이","노브랜드","홈푸드","유통","식자재마트","농협하나로","남도장터","정육","축산","수산","familymart","lawson","7-eleven","ministop","코리아세븐","롯데씨브이에스","씨스페이시스","이마트24","하나로마트","파머스마켓","로컬푸드","우아한형제들","배달의민족","쿠팡이츠","요기요","위대한상상"]},{key:"cafe",label:"카페·간식",color:"#A9762F",words:["커피","카페","스타벅스","투썸","빵","디저트","간식","아이스크림","베이커리","이디야","메가커피"]},{key:"transport",label:"교통",color:"#3E6B8A",words:["택시","버스","지하철","교통카드","케이티엑스","KTX","기차","SRT","카카오T","한국철도공사","코레일","에스알","교통공사","도시철도","광역버스","monorail","yui rail","metro","subway","티머니","캐시비"]},{key:"car",label:"차량 유지비",color:"#6B5B3E",words:["기름","주유","주유소","휘발유","경유","엘피지","LPG","충전소","SK에너지","GS칼텍스","에쓰오일","S-OIL","현대오일뱅크","알뜰주유소","오일뱅크","오일","석유","에너지플러스","정비","카센터","자동차공업사","공업사","블루핸즈","오토큐","스피드메이트","현대서비스","기아서비스","타이어","타이어뱅크","엔진오일","미션오일","세차","자동차세","검사소","자동차검사","주차","주차장","톨게이트","하이패스","한국도로공사","자동차보험","다이렉트자동차"]},{key:"shopping",label:"쇼핑",color:"#7A4A8A",words:["옷","쇼핑","신발","가방","쿠팡","당근","인터넷쇼핑","네이버페이","무신사","올리브영","11번가","지마켓","G마켓","옥션","위메프","티몬","알리익스프레스","테무"]},{key:"living",label:"주거·생활",color:"#4A6B4A",words:["월세","관리비","전기","가스","수도","생활용품","세제","다이소","한국전력","아파트","어울림","관리사무소","상하수도","도시가스","난방비","버킷플레이스","오늘의집"]},{key:"health",label:"의료·건강",color:"#8A4A4A",words:["병원","약국","약값","헬스","운동","필라테스","의원","치과","한의원","내과","외과","이비인후과","피부과","안과","소아과","산부인과","정신건강의학과","의료원","보건소","의료재단"]},{key:"culture",label:"문화·여가",color:"#4A5F8A",words:["영화","넷플릭스","책","게임","공연","콘서트","유튜브","스포티파이","왓챠","CGV","메가박스","씨제이이엔엠","티빙","웨이브","쿠팡플레이","디즈니","멜론","지니뮤직","플러스 멤버십","멤버십"]},{key:"comm",label:"통신",color:"#5A5A5A",words:["통신","휴대폰","핸드폰","인터넷비","SK텔레콤","SKT","KT","LG유플러스","LGU","알뜰폰","브로드밴드","텔레콤","조이텔","헬로모바일","케이티엠모바일","KT엠모바일","에스케이텔링크","세븐모바일","프리텔레콤","세종텔레콤","리브엠","U+유모바일","이야기모바일"]},{key:"insurance",label:"보험",color:"#6B5A7A",words:["보험","실손","상해","화재보험"]},{key:"loan",label:"대출·이자",color:"#8A5A3B",words:["대출이자","이자상환","원리금","할부이자","대출상환","마이너스통장이자"]},{key:"family",label:"가족 송금",color:"#5A7A8A",words:["생활비","용돈"]},{key:"social",label:"경조사·회비",color:"#9A5B6E",words:["축의","부의","조의","근조","경조","결혼축하","화환","돌잔치","사우회","동창회","친목회","모임회비","계모임","향우회"]},{key:"travel",label:"여행",color:"#3E7A6B",words:["항공","에어로케이","에어부산","에어서울","티웨이","제주항공","진에어","이스타","eastar","아시아나","대한항공","airline","airways","nippon airw","japan airlines","peach avia","숙박","호텔","hotel","게스트하우스","리조트","resort","펜션","료칸","에어비앤비","airbnb","야놀자","여기어때","아고다","agoda","booking.com","부킹닷컴","익스피디아","expedia","호텔스컴바인","트리바고","tripla","클룩","klook","kkday","마이리얼트립","하나투어","모두투어","노랑풍선","인터파크투어","his ","트리플","스카이스캐너","getyourguide","viator","트립닷컴","trip.com","씨트립","렌터카","rent a car","면세점","duty free","여행","트래블월렛","공항","airport","공항철도","리무진","railway","jr동일본","jr이스트","jr east","jreast","신칸센","스이카","suica","파스모","pasmo","이코카","icoca","esim","여행자보험","도시락"]},{key:"income",label:"수입",color:"#3D6B4F",words:[]},{key:"etc",label:"기타",color:"#8A8A8A",words:[]}],ze=Object.fromEntries(Se.map(e=>[e.key,e])),As=["받았","월급","급여","용돈받","수입","보너스","환급","들어왔","벌었","정산받","상여"];function Ds(e){let t={영:0,일:1,이:2,삼:3,사:4,오:5,육:6,륙:6,칠:7,팔:8,구:9},n={십:10,백:100,천:1e3},s=0,o=0;for(let a of e)t[a]!==void 0?o=t[a]:n[a]!==void 0&&(s+=(o||1)*n[a],o=0);return s+o}function _o(e){let t=e,n=0;for(let[s,o]of[["억",1e8],["만",1e4]]){let a=t.indexOf(s);if(a!==-1){let i=t.slice(0,a);n+=(i===""?1:Ds(i))*o,t=t.slice(a+1)}}return n+Ds(t)}function Be(e){return String(e??"").replace(/\[?\s*(web발신|국외발신|국제발신|광고)\s*\]?/gi," ").replace(/(카드|체크|신용|카드번호)\s*[(\[]?\s*\d{4}\s*[)\]]?/gi,"$1 ").replace(/\d{4}\s*[*·]{2,}\s*\d{0,4}/g," ").replace(/[*·]{3,}\s*\d{3,4}/g," ").replace(/(^|[\s\]])[가-힣]\*{1,2}[가-힣]{1,2}님?(?=[\s\[]|$)/gm,"$1 ").replace(/\b\d{1,2}:\d{2}(:\d{2})?\b/g," ").replace(/[ \t]+/g," ")}var ko=["누적","잔액","한도","사용가능","가용","잔여","적립","포인트","마일리지"];function Kt(e,t){let n=e.slice(Math.max(0,t-14),t);return ko.some(s=>n.includes(s))}function Tt(e){let t=Be(e),n={억:1e8,만:1e4,천:1e3},s=[],o,a=/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)?\s*원/g;for(;(o=a.exec(t))!==null;){if(Kt(t,o.index))continue;let c=parseFloat(o[1].replace(/,/g,""));o[2]&&(c*=n[o[2]]),c>0&&s.push(Math.round(c))}if(s.length)return s[0];let i=[],r=/(?:^|[^0-9.])(\d{1,3}(?:,\d{3})+)(?![0-9])/g;for(;(o=r.exec(t))!==null;){if(Kt(t,o.index))continue;let c=parseInt(o[1].replace(/,/g,""),10);c>0&&i.push(c)}if(i.length)return i[0];let l=t.match(/([일이삼사오육륙칠팔구십백천만억영]+)\s*원/);if(l){let c=_o(l[1]);if(c>0)return c}let u=t.match(/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)/);if(u&&!Kt(t,u.index)){let c=Math.round(parseFloat(u[1].replace(/,/g,""))*n[u[2]]);if(c>0)return c}let p=t.match(/(?:^|\s)(\d{3,})(?:\s|$)/);if(p){let c=parseInt(p[1],10);if(c>0)return c}return 0}function vn(e){let n=Be(e).match(/(잔여한도|잔여포인트|잔여금액|사용가능금액|잔액|잔고|남은금액|사용가능|잔여)[^\d-]{0,6}(-?\s?[0-9][0-9,]*)/);if(n){let s=parseInt(n[2].replace(/[,\s]/g,""),10);if(!isNaN(s))return s}return null}function z(e){return String(e??"").replace(/\d+\s*월\s*분?/g,"").replace(/\d+\s*(회차|회|차)/g,"").replace(/㈜|\(주\)|주식회사|주\)/g,"").replace(/\d+/g,"").replace(/[^\p{L}]/gu,"").replace(/점$/,"").toLowerCase()}function Ge(e,t){if(e=String(e??""),t=String(t??""),!e||!t)return 0;if(e===t)return 1;let n=i=>{let r=new Set,l=`  ${i}  `;for(let u=0;u<l.length-2;u++)r.add(l.slice(u,u+3));return r},s=n(e),o=n(t),a=0;for(let i of s)o.has(i)&&a++;return a/(s.size+o.size-a)}var wo=["자동이체","일시불","웹발신","승인취소","승인","취소","환불","할부","누적","포인트","잔여한도","잔여포인트","사용가능","잔여","잔액","한도","결제","출금","입금","이체","납부","청구","계좌","매입","정정","개월","체크카드","신용카드","기본료","요금할인","통신요금","부가가치세","이용상세내역","청구서","청구금액","납부할금액","총납부하실금액","사용기간","고객번호","납기일","할인액","미납액","모바일","체크우리","타행이체","타행건별","오픈뱅킹","오픈인증","대출결산","예금결산","인터넷","스마트폰뱅킹","창구","자동화기기"],xo=["국민","KB국민","KB","신한","삼성","현대","롯데","하나","우리","농협","NH","IBK","기업","카카오뱅크","카카오","토스","케이뱅크","SC제일","새마을금고","신협","우체국","부산","대구","광주","전북","경남","제주","씨티","산업"];function Is(e){let t=e.replace(/\d+\s*월\s*분/g," ").replace(/\d+\s*(회차|회|차)/g," ").replace(/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/g," ").replace(/\d{1,2}[.\-/]\d{1,2}/g," ").replace(/\d{1,2}월\s*\d{1,2}일/g," ").replace(/-?[0-9][0-9,]*(?:\.[0-9]+)?\s*(억|만|천)?\s*원?/g," ").replace(/[()（）\[\]]/g," ");for(let n of xo)t=t.replace(new RegExp(`${n}\\s*(카드|은행|뱅크)`,"g")," ");for(let n of wo)t=t.split(n).join(" ");return t.replace(/\s+/g," ").trim()}function Et(e){let n=Be(e).split(/\n/).map(o=>o.trim()).filter(Boolean),s=[];for(let o of n){let a=Is(o);!a||!/[\p{L}]/u.test(a)||a.replace(/[^\p{L}]/gu,"").length<2||s.push(a)}return s.length?s[s.length-1].slice(0,30):""}function Ne(e,t){let n=String(e??"");if(n.length<2)return null;let s=null,o=0;for(let a of t||[]){let i=a&&typeof a.normKey=="string"?a.normKey:"";if(i.length<2)continue;let r=0;i===n?r=1e3:n.includes(i)?r=100+i.length:i.includes(n)&&n.length>=3&&n.length/i.length>=.5&&(r=50+n.length),r>o&&(s=a,o=r)}return s}function Co(e,t,n){if(/^[A-Za-z0-9+]{1,3}$/.test(n)){let s=n.replace(/[+]/g,"\\+");return new RegExp(`(^|[^A-Za-z])${s}([^A-Za-z]|$)`,"i").test(e)}return e.includes(n)||t.includes(n.toLowerCase())}var Do=/^(기본료|요금할인|통신요금|부가가치세|이용상세내역|청구서|청구금액|납부할금액|총납부하실금액|내역|합계|금액|할인|사용료|이용료|상호확인필요)$/;function Ms(e){let t=String(e||"").replace(/\s+/g,"");return!t||t.length<2||Do.test(t)}function Rs(e,t=[]){if(!e)return null;let n=(t||[]).filter(s=>s&&s.amountHint&&Math.abs(s.amountHint-e)<=1);return n.length===1?n[0]:null}function ke(e,t,n=[]){if(t==="income")return"income";let s=String(e??""),o=Ne(z(s),n);if(o&&o.category)return o.category;let a=s.toLowerCase();for(let i of Se)if(i.words.some(r=>Co(s,a,r)))return i.key;return"etc"}function Oe(e,t,n){let s=String(e??"");if(n)return 1;if(t==="etc")return .4;let o=ze[t];if(!o)return .4;let a=o.words.filter(i=>s.includes(i)).length;return a>=2?.9:a===1?.7:.5}function Ye(e,t){let n=t||{},s=`${e.counterpartyRaw||""} ${e.memo||""} ${e.rawText||""}`;if(e.amount===1)return{type:"transfer",transferKind:"verify",confidence:1};if(/(환불|취소|반품|정정)/.test(s))return{type:"expense",isRefund:!0,transferKind:null,confidence:1};if(/이자/.test(s)&&!/대출/.test(s))return{type:"income",category:"income",confidence:1};if(n.userName&&s.includes(n.userName))return{type:"transfer",transferKind:"internal",confidence:1};let o=n.incomeSources||[],a=o.find(l=>l&&s.includes(l));if(a)return{type:"income",category:"income",transferKind:null,confidence:1,incomeSource:a};let r=(n.excludedCounterparties||[]).find(l=>l&&s.includes(l));return r?{type:"transfer",transferKind:"excluded",confidence:1,excludedBy:r}:o.length===0?null:n.incomeOnlyFromSources!==!1?{type:"transfer",transferKind:"excluded",confidence:.4,needsCheck:!0}:null}var So=/^(신한|삼성|현대|국민|롯데|하나|우리|비씨|BC|농협|씨티|카카오|케이|토스)?카드(대금|결제대금|값)?$|^카드대금$/,Ao=/(공제회|적금|정기예금|청약|저축보험|연금저축|퇴직연금|펀드납입)/;function Pe(e,t){let n=t||{},s=`${e.counterpartyRaw||""} ${e.memo||""} ${e.rawText||""}`,o=(n.investKeywords||[]).find(c=>c&&s.includes(c));if(o)return{type:"transfer",transferKind:"invest",investBy:o,confidence:1};let a=String(e.counterpartyRaw||e.memo||"").replace(/\s+/g,""),i=(n.excludedCounterparties||[]).find(c=>c&&a.includes(String(c).replace(/\s+/g,"")));if(e.direction!=="in"&&i)return{type:"transfer",transferKind:"excluded",excludedBy:i,confidence:1};let r=String(n.userName||"").replace(/\s+/g,"");if(e.direction!=="in"&&r.length>=2&&a.endsWith(r))return{type:"transfer",transferKind:"internal",confidence:1};if(e.direction!=="in"&&So.test(a))return{type:"transfer",transferKind:"cardPayment",confidence:1};if(e.direction!=="in"&&Ao.test(a))return{type:"transfer",transferKind:"savings",confidence:1};if(e.direction!=="in"&&/대출원금상환|원금상환/.test(a))return{type:"transfer",transferKind:"loanPrincipal",confidence:1};let l=(n.welfareCards||[]).find(c=>c&&s.includes(c));if(l)return{transferKind:"welfare",welfareBy:l,category:e.category};let u=(n.travelKeywords||[]).find(c=>c&&s.includes(c));if(u)return{type:"expense",transferKind:null,category:"travel",travelBy:u,confidence:1};let p=(n.familyTransferKeywords||[]).find(c=>c&&s.includes(c));if(p){let c=n.familyRegularAmount||0,d=n.familyAmountMin||0,m=n.familyAmountMax||0,g=!1;return d>0||m>0?g=d>0&&e.amount<d||m>0&&e.amount>m:c>0&&(g=e.amount>c*1.4),g&&n.familyExtraExcluded!==!1?{type:"transfer",transferKind:"excluded",category:"family",familyBy:p,isExtra:!0,excludedBy:"별도 송금",confidence:1}:{type:"expense",transferKind:null,category:"family",familyBy:p,isExtra:g,confidence:1}}return null}function Lt(e,t){let n=String(e??"").replace(/\s/g,""),s=/\[(?!web발신|국외발신|국제발신|광고)[^\[\]]{2,12}\](승인|취소|승인취소)/i.test(n),o=(t&&t.welfareCards||[]).some(a=>a&&n.includes(String(a).replace(/\s/g,"")));return/(승인|취소|매입|일시불|할부)/.test(n)&&(/(카드|체크|신용)/.test(n)||s||o)?"card":/(출금|입금|이체|자동이체|납부)/.test(n)?"bank":/(합계|결제금액|받을금액|총액|부가세|사업자)/.test(n)?"receipt":"free"}function Bt(e,t=new Date){let n=Be(e),s=n.match(/(20\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/);if(s)return ie(new Date(+s[1],+s[2]-1,+s[3]));if(s=n.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/),s&&+s[1]>20)return ie(new Date(2e3+ +s[1],+s[2]-1,+s[3]));if(s=n.match(/(\d{1,2})[.\-/](\d{1,2})/),s){let o=+s[1],a=+s[2];if(o>=1&&o<=12&&a>=1&&a<=31)return et(o,a,t)}return s=n.match(/(\d{1,2})월\s*(\d{1,2})일/),s?et(+s[1],+s[2],t):null}function Ks(e,t={}){let n=t.now||new Date,s=Tt(e),o=/(취소|환불|정정)/.test(e),a=Et(e),i=ke(a||e,"expense",t.rules),r=/(\d{1,2})\s*개월\s*할부/.exec(e),l=Pe({memo:a,rawText:e,category:i,amount:s},t.settings),u=l&&l.transferKind==="welfare"?vn(e):null;return{type:l&&l.type||"expense",welfareBalance:u,isExtra:!!(l&&l.isExtra),isRefund:o,category:l&&l.category||i,transferKind:l&&l.transferKind||null,amount:s,memo:a||e.replace(/\s+/g," ").trim().slice(0,24),date:Bt(e,n)||oe(),normKey:z(a),paymentMethod:"card",installmentMonths:r?+r[1]:null,source:"sms",confidence:Oe(a||e,i),rawText:e}}function Ts(e,t={}){let n=t.now||new Date,s=Tt(e),o=vn(e),a=/(출금|이체출금|납부|송금)/.test(e)&&!/입금/.test(e),i=/입금/.test(e)&&!/출금/.test(e),r=a?"out":i?"in":null,l=Et(e),u=/(ATM|CD출금|현금인출|현금출금)/i.test(e),p="expense",c=u?"cashOut":null,d=!1,m=null,g=!1;if(r==="in"){let v=Ye({counterpartyRaw:l,memo:l,rawText:e,amount:s},t.settings);v?(p=v.type,c=v.transferKind,d=!!v.needsCheck,m=v.confidence,v.isRefund&&(g=!0)):p=As.some($=>e.includes($))||/(급여|월급|상여)/.test(e)?"income":"transfer"}else u&&(p="transfer");let h=p==="income"?"income":ke(l||e,"expense",t.rules),y=Pe({counterpartyRaw:l,memo:l,rawText:e,category:h,amount:s},t.settings);return y&&(y.type&&(p=y.type),y.category&&(h=y.category),c=y.transferKind,y.confidence!=null&&(m=y.confidence),d=!1),c&&["internal","invest","savings","cashOut","cardPayment","fxTopup","verify"].includes(c)&&(d=!1,m==null&&(m=1)),{type:p,direction:r,isRefund:g,isExtra:!!(y&&y.isExtra),needsCheck:d,category:h,amount:s,memo:l||e.replace(/\s+/g," ").trim().slice(0,24),date:Bt(e,n)||oe(),normKey:z(l),paymentMethod:"account",transferKind:c,balanceAfter:o,counterpartyRaw:l,source:"sms",confidence:m??Oe(l||e,h),rawText:e}}var Io=["합계","결제금액","받을금액","총액","총 금액","판매금액","승인금액"];function Es(e,t={}){let n=t.now||new Date,s=Be(e),o=0;for(let u of Io){let p=new RegExp(`${u}\\s*[:：]?\\s*([0-9][0-9,]*)`),c=s.match(p);if(c){let d=parseInt(c[1].replace(/,/g,""),10);if(d>0){o=d;break}}}if(!o){let u=[],p=/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{3,})\s*원?/g,c;for(;(c=p.exec(s))!==null;){if(Kt(s,c.index)||/(부가세|면세|과세|할인|거스름|받은금액)/.test(s.slice(Math.max(0,c.index-10),c.index)))continue;let d=parseInt(c[1].replace(/,/g,""),10);d>0&&u.push(d)}o=u.length?Math.max(...u):0}let a=s.split(/\n/).map(u=>u.trim()).filter(Boolean),i="";for(let u of a.slice(0,4))if(/[\p{L}]/u.test(u)&&Is(u).length>=2&&!/\d{3,}/.test(u)){i=u.slice(0,30);break}let r=/(현금|현금영수증)/.test(e)&&!/카드/.test(e),l=ke(i||e,"expense",t.rules);return{type:"expense",isRefund:!1,category:l,amount:o,memo:i||"영수증",date:Bt(e,n)||oe(),normKey:z(i),paymentMethod:r?"cash":"card",source:"receipt",confidence:i?Oe(i,l):.4,rawText:e}}function Ls(e,t={}){let n=Tt(e),s=As.some(i=>e.includes(i))?"income":"expense",o=0;/(그저께|그제)/.test(e)?o=-2:e.includes("어제")&&(o=-1);let a=ke(e,s,t.rules);return{type:s,isRefund:!1,category:a,amount:n,memo:e.trim(),date:oe(o),normKey:z(e.replace(/[0-9,]+\s*원?/g,"")),paymentMethod:"unknown",source:"manual",confidence:Oe(e,a),rawText:e}}function Nt(e,t={}){let n=Lt(e,t.settings),s=n==="card"?Ks(e,t):n==="bank"?Ts(e,t):n==="receipt"?Es(e,t):Ls(e,t);return Bs(s,t)}var Mo=/(이용상세내역|청구서|청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)/,Ro=/(청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)\D{0,8}([0-9][0-9,]*)/;function Bs(e,t={}){if(!e||e.type==="income")return e;let n=String(e.rawText||e.memo||"");if(Mo.test(n)){let o=n.match(Ro),a=o?parseInt(o[2].replace(/,/g,""),10):null;e={...e,memo:"",normKey:"",amount:a&&a>0?a:e.amount}}if(!Ms(e.memo))return e;let s=Rs(e.amount,t.rules);return s&&s.name?{...e,memo:s.name,normKey:z(s.name),counterpartyRaw:s.name,category:s.category||e.category,confidence:Math.max(e.confidence??.5,.8)}:{...e,memo:"상호 확인 필요",normKey:"",needsCheck:!0,confidence:Math.min(e.confidence??.5,.4)}}var Ns=/(20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}|\d{1,2}[.\-/]\d{1,2}(?![.\-/]?\d{3})|\d{1,2}월\s*\d{1,2}일)/;function Os(e,t={}){let n=t.now||new Date,o=Be(e).split(/\n/).map(c=>c.trim()).filter(Boolean),a=[],i=null;for(let c of o)Ns.test(c)?(i&&a.push(i),i={lines:[c]}):i&&i.lines.push(c);if(i&&a.push(i),a.length<2)return[];let r=a.map(c=>{let d=c.lines.join(" "),m=Bt(d,n)||oe(),g=[],h=/(-?[0-9][0-9,]*)\s*원/g,y;for(;(y=h.exec(d))!==null;)g.push({v:parseInt(y[1].replace(/,/g,""),10),i:y.index});if(g.length===0){let k=/(-?[0-9]{1,3}(?:,[0-9]{3})+|-?[0-9]{4,})/g;for(;(y=k.exec(d))!==null;)g.push({v:parseInt(y[1].replace(/,/g,""),10),i:y.index})}let v=0,$=null,_=null;if(g.length>=3){$=g[g.length-1].v;let k=g[g.length-3].v,D=g[g.length-2].v;k>0&&D===0?(v=k,_="out"):D>0&&k===0?(v=D,_="in"):v=Math.abs(D||k)}else g.length===2?($=g[1].v,v=Math.abs(g[0].v)):g.length===1&&(v=Math.abs(g[0].v));_||(/출금|지급|인출/.test(d)?_="out":/입금|수취|예입/.test(d)&&(_="in"));let S=Et(d);return{date:m,amount:v,balance:$,direction:_,merchant:S,body:d}}),l=[...r].reverse();for(let c=1;c<l.length;c++){let d=l[c-1],m=l[c];if(d.balance==null||m.balance==null)continue;let g=m.balance-d.balance;Math.abs(Math.abs(g)-m.amount)<=1&&(m.direction=g<0?"out":"in")}let u=[];for(let c=1;c<l.length;c++){let d=l[c-1],m=l[c];if(d.balance==null||m.balance==null||!m.amount)continue;let g=m.balance-(d.balance-m.amount),h=m.balance-(d.balance+m.amount),y=m.direction==="out"?g:m.direction==="in"?h:Math.abs(g)<=Math.abs(h)?g:h;Math.abs(y)>1&&u.push({afterDate:d.date,beforeDate:m.date,missing:Math.abs(y)})}return{entries:r.filter(c=>c.amount>0).map(c=>{let d=c.direction==="in"?"transfer":"expense",m=null,g=!1,h=!1;if(c.direction==="in"){let _=Ye({counterpartyRaw:c.merchant,memo:c.merchant,rawText:c.body,amount:c.amount},t.settings);_?(d=_.type,m=_.transferKind,g=!!_.needsCheck,h=!!_.isRefund):/(급여|월급|상여)/.test(c.body)&&(d="income")}let y=d==="income"?"income":ke(c.merchant||c.body,"expense",t.rules),v=Pe({counterpartyRaw:c.merchant,memo:c.merchant,rawText:c.body,category:y,amount:c.amount},t.settings),$=!1;return v&&(v.type&&(d=v.type),v.category&&(y=v.category),m=v.transferKind,$=!!v.isExtra,g=!1),{type:d,transferKind:m,needsCheck:g,isExtra:$,direction:c.direction,isRefund:h,category:y,amount:c.amount,memo:c.merchant||"내역",date:c.date,normKey:z(c.merchant),paymentMethod:"account",balanceAfter:c.balance,counterpartyRaw:c.merchant,source:"statement",confidence:Oe(c.merchant||c.body,y),rawText:c.body}}),gaps:u}}function Ko(e,t={}){let n=Be(e),s=(n.match(new RegExp(Ns.source,"g"))||[]).length,o=(n.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})/g)||[]).length;if(s>=2&&o>=3){let a=Os(e,t);if(a.entries&&a.entries.length>=2)return{mode:"multi",...a}}return{mode:"single",entries:[Nt(e,t)],gaps:[]}}var Ss={statement:4,sms:3,shortcut:3,receipt:2,capture:2,manual:1,favorite:1,auto:1};function Ps(e,t){if(e.amount!==t.amount||e.type!==t.type)return 0;let n=new Date(e.date+"T00:00:00"),s=new Date(t.date+"T00:00:00"),o=Math.abs((n-s)/864e5);if(o>3)return 0;let a=0,i=[];o===0?(a+=40,i.push("같은 날")):o===1?(a+=30,i.push("하루 차이")):(a+=15,i.push(`${o}일 차이`));let r=e.normKey||"",l=t.normKey||"";return r&&l&&(r===l?(a+=40,i.push("같은 가맹점")):r.includes(l)||l.includes(r)?(a+=25,i.push("비슷한 가맹점")):Ge(r,l)>=.6&&(a+=15,i.push("가맹점 유사"))),e.accountId&&t.accountId&&e.accountId===t.accountId&&(a+=15,i.push("같은 계좌")),e.paymentMethod&&e.paymentMethod===t.paymentMethod&&(a+=5),{score:a,reasons:i}}function To(e,t){return(Ss[e.source]||0)>=(Ss[t.source]||0)?e:t}function yn(e,t){let n=[],s=[],o=[],a=[...t];for(let i of e){if(i.transferKind==="fxTopup"||i.category==="family"){n.push(i),a.push(i);continue}let r=null;for(let l of a){if(l.deleted||i.sourceHash&&l.sourceHash&&i.sourceHash!==l.sourceHash&&String(i.sourceHash).split("|")[0]===String(l.sourceHash).split("|")[0])continue;let u=Ps(i,l);!u||!u.score||(!r||u.score>r.score)&&(r={...u,target:l})}r&&r.score>=80?s.push({incoming:i,target:r.target,...r}):r&&r.score>=50?(o.push({incoming:i,target:r.target,...r}),a.push(i)):(n.push(i),a.push(i))}return{added:n,merged:s,review:o}}var Eo=["id","date","type","category","amount","memo","isRefund","paymentMethod","accountId","normKey","source","confidence","tripId","carId","currency","foreignAmount","balanceAfter","transferKind","direction","fixedId","rawText","createdAt","updatedAt","deleted","status"];function Lo(e){let t={};for(let n of Eo)e[n]!==void 0&&(t[n]=e[n]);return t}async function Bo(e,t){let n=await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(t),redirect:"follow"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let s=await n.text(),o;try{o=JSON.parse(s)}catch{throw new Error("응답을 읽지 못했어요")}if(!o.ok)throw new Error(o.error||"서버가 거부했어요");return o}async function _n(e,t){let n=new URLSearchParams(t).toString(),s=await fetch(`${e}${e.includes("?")?"&":"?"}${n}`,{redirect:"follow"});if(!s.ok)throw new Error(`HTTP ${s.status}`);let o=JSON.parse(await s.text());if(!o.ok)throw new Error(o.error||"서버가 거부했어요");return o}function No(e){if(!e)return e;let t=String(e),n=t.match(/^(\d{4})-(\d{2})-(\d{2})/);if(n)return`${n[1]}-${n[2]}-${n[3]}`;let s=new Date(t);if(!isNaN(s)){let o=a=>String(a).padStart(2,"0");return`${s.getFullYear()}-${o(s.getMonth()+1)}-${o(s.getDate())}`}return t}function Oo(e,t){let n=new Map(e.map(i=>[i.id,i])),s=0,o=0;for(let i of t){let r={...i,date:No(i.date)};if(!/^\d{4}-\d{2}-\d{2}$/.test(r.date||""))continue;let l=n.get(r.id);l?(r.updatedAt||0)>(l.updatedAt||0)&&(n.set(r.id,{...l,...r,dirty:!1}),o++):(n.set(r.id,{...r,dirty:!1}),s++)}return{list:Array.from(n.values()).sort((i,r)=>i.date<r.date?1:i.date>r.date?-1:(r.createdAt||0)-(i.createdAt||0)),added:s,updated:o}}async function Fs(e){let{sheetUrl:t,sheetToken:n}=e.settings||{};if(!t)throw new Error("시트 주소가 없어요");let s=e.entries.filter(p=>p.dirty);s.length&&await Bo(t,{token:n,op:"upsert",entries:s.map(Lo)});let o=await _n(t,{token:n,since:e.settings.lastSyncAt||""}),a=o.entries||[],{list:i,added:r,updated:l}=Oo(e.entries,a);return{db:{...e,entries:i.map(p=>p.dirty&&s.some(c=>c.id===p.id)?{...p,dirty:!1}:p),settings:{...e.settings,lastSyncAt:o.serverTime||new Date().toISOString()}},pushed:s.length,pulled:r+l}}async function Hs(e,t,n,s){let o=await _n(e,{token:t,op:"calendar",from:n,to:s});if(!Array.isArray(o.events))throw new Error("Code.gs를 새 버전으로 바꿔야 캘린더를 읽을 수 있어요");return o.events}async function js(e,t){return await _n(e,{token:t,op:"ping"})}var Ot=null;function Po(){return Ot||(Ot=(async()=>{let e=[new URL("./ocr/",document.baseURI).href,new URL("./",document.baseURI).href],t=["tesseract.min.js","worker.min.js","kor.traineddata.gz","eng.traineddata.gz"],n=!1,s={};for(let i of e){let r=[];for(let l of t)try{(await fetch(i+l,{method:"GET",cache:"no-store"})).ok||r.push(l)}catch{n=!0,r.push(l)}if(!r.length)return i;s[i]=r}if(n)throw new Error("인터넷에 연결되어 있는지 확인해주세요. 글자 인식 도구는 처음 한 번만 받으면 됩니다");let o=e.slice().sort((i,r)=>s[i].length-s[r].length)[0],a=s[o];throw new Error(`${a.slice(0,2).join(", ")}${a.length>2?` 외 ${a.length-2}개`:""} 파일이 서버에 없어요. 인식 파일 8개를 모두 올렸는지 확인해주세요`)})().catch(e=>{throw Ot=null,e})),Ot}var Pt=null,rt=null;function Fo(e){return new Promise((t,n)=>{let s=document.createElement("script");s.src=e,s.onload=t,s.onerror=()=>n(new Error("tesseract.min.js는 받았는데 실행되지 않았어요. 새로고침 후 다시 해보세요")),document.head.appendChild(s)})}async function Ho(){let e=await Po();return window.Tesseract||await Fo(e+"tesseract.min.js"),Pt||(Pt=(async()=>window.Tesseract.createWorker(["kor","eng"],1,{workerPath:e+"worker.min.js",corePath:e,langPath:e,gzip:!0,logger:t=>rt&&rt(t)}))().catch(t=>{throw Pt=null,t})),Pt}async function Us(e,t){let n=Array.from(e||[]);if(typeof window<"u"&&typeof window.__ledgerOcrForTest=="function")return window.__ledgerOcrForTest(n);rt=a=>t&&t({...a,page:0,pages:n.length});let s=await Ho(),o=[];for(let a=0;a<n.length;a++){let i=n[a];rt=u=>t&&t({...u,page:a+1,pages:n.length});let{data:r}=await s.recognize(i,{},{blocks:!0,text:!1}),l=[];for(let u of r.blocks||[])for(let p of u.paragraphs||[])for(let c of p.lines||[])l.push({text:c.text,x0:c.bbox.x0,y0:c.bbox.y0,x1:c.bbox.x1,y1:c.bbox.y1});o.push({words:l,fileDate:new Date(i.lastModified||Date.now()),name:i.name})}return rt=null,o}function jo(e){let t=(e||[]).filter(i=>i&&String(i.text||"").trim()&&isFinite(i.y0)&&isFinite(i.y1));if(!t.length)return[];let n=t.map(i=>Math.max(1,i.y1-i.y0)).sort((i,r)=>i-r),s=n[Math.floor(n.length/2)],o=[...t].sort((i,r)=>i.y0+i.y1-(r.y0+r.y1)),a=[];for(let i of o){let r=(i.y0+i.y1)/2,l=a[a.length-1];l&&Math.abs(r-l.yc)<=s*.6?(l.words.push(i),l.yc=(l.yc*(l.words.length-1)+r)/l.words.length):a.push({yc:r,words:[i]})}return a.map(i=>i.words.sort((r,l)=>r.x0-l.x0).map(r=>String(r.text).trim()).join(" "))}var Uo={"¥":"JPY","￥":"JPY",$:"USD","€":"EUR","£":"GBP","฿":"THB","₫":"VND"},Wo={JPY:"JPY",USD:"USD",EUR:"EUR",GBP:"GBP",THB:"THB",VND:"VND",TWD:"TWD",HKD:"HKD",CNY:"CNY",엔:"JPY",달러:"USD",유로:"EUR",바트:"THB",동:"VND"},Vo=/^(일시불|할부|\d{1,2}개월|승인|승인취소|취소|매입|결제|결제취소|충전|환전|이체|입금|출금|자동이체|체크카드|체크|신용|신용카드|해외|국내|본인|가족|완료|예정|확정|잔액|잔고|잔여|사용|이용|내역|거래|오픈뱅킹|스마트폰|인터넷|모바일|ATM|CD|펌뱅킹|타행|당행|대체)$/i,zo=/(거래\s*내역|이용\s*내역|결제\s*내역|사용\s*내역|입출금|조회|필터|검색|전체|이번\s*달|지난\s*달|월별|기간\s*설정)/,kn=/\(\s*(월|화|수|목|금|토|일)\s*\)|(월|화|수|목|금|토|일)요일/g;function Go(e,t){let n=e.replace(/\s+/g," "),s,o=null,a="",i=null;if(s=n.match(/(오늘|어제|그저께|그제)/)){let l=s[1]==="오늘"?0:s[1]==="어제"?1:2,u=new Date(t.getFullYear(),t.getMonth(),t.getDate()-l);o=ie(u),a=s[0]}else if(s=n.match(/(20\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?!\d)/))o=ie(new Date(+s[1],+s[2]-1,+s[3])),a=s[0];else if((s=n.match(/(20\d{2})\s*[.\-/년]?\s*([0-9OolI?]{1,2})\s*[.\-/월]?\s*([0-9OolI?]{1,2})\s*일/))||(s=n.match(/(20\d{2})\s*[.\-/년]\s*([0-9OolI?]{1,2})\s*[.\-/월]\s*([0-9OolI?]{1,2})/))){let l=+s[1],u=Ws(s[2]),p=Ws(s[3]);a=s[0],u!==null&&p!==null&&u>=1&&u<=12&&p>=1&&p<=31?o=ie(new Date(l,u-1,p)):p!==null&&p>=1&&p<=31?i={year:l,day:p}:u!==null&&u>=1&&u<=12&&(i={year:l,month:u})}else(s=n.match(/(?:^|\s)(\d{1,2})월\s*(\d{1,2})일/))?(+s[1]>=1&&+s[1]<=12&&+s[2]>=1&&+s[2]<=31&&(o=et(+s[1],+s[2],t)),a=s[0]):(s=n.match(/(?:^|\s)(\d{1,2})[./](\d{1,2})(?![\d,.])/))&&(+s[1]>=1&&+s[1]<=12&&+s[2]>=1&&+s[2]<=31&&(o=et(+s[1],+s[2],t)),a=s[0]);if(!o&&i){let l=n.replace(a," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(kn," ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g,"");return{iso:null,partial:i,headerOnly:l.length===0}}if(!o)return{iso:null,headerOnly:!1};let r=n.replace(a," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(kn," ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g,"");return{iso:o,headerOnly:r.length===0}}function Yo(e){let t=[],n=e,s=(o,a)=>{n=n.replace(o,(...i)=>{let r=a(i);return r?(t.push(r)," "):i[0]})};return s(/([+\-−–])?\s*([¥￥$€£฿₫])\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g,o=>({kind:"fx",currency:Uo[o[2]],value:parseFloat(o[4].replace(/,/g,"")),sign:tt(o[1]||o[3])})),s(/([+\-−–])?\s*\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY)\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/gi,o=>({kind:"fx",currency:o[2].toUpperCase(),value:parseFloat(o[3].replace(/,/g,"")),sign:tt(o[1])})),s(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)\s*(엔|달러|유로|바트)(?![가-힣])/g,o=>({kind:"fx",currency:Wo[o[3]],value:parseFloat(o[2].replace(/,/g,"")),sign:tt(o[1])})),s(/(잔액|잔고|잔여|남은\s*금액)\s*[:：]?\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+|\d+)\s*원?/g,o=>({kind:"balance",value:parseInt(o[3].replace(/,/g,""),10)*(tt(o[2])<0?-1:1)})),s(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+)(?:\s*원)?/g,o=>({kind:"krw",value:parseInt(o[2].replace(/,/g,""),10),sign:tt(o[1])})),n=n.replace(/(^|[^\d,])([+\-−–])?\s*(\d{1,9})\s*원/g,(o,a,i,r)=>(t.push({kind:"krw",value:parseInt(r,10),sign:tt(i)}),a+" ")),{amounts:t,rest:n}}function tt(e){return e?e==="+"?1:-1:0}function Ws(e){let t=String(e||"").replace(/[Oo]/g,"0").replace(/[lI]/g,"1");return/^\d{1,2}$/.test(t)?+t:null}function Jo(e){return e.replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(/(20\d{2})\s*[.\-/년]\s*\d{1,2}\s*[.\-/월]\s*\d{1,2}\s*일?/g," ").replace(/\d{1,2}월\s*\d{1,2}일/g," ").replace(kn," ").replace(/[·ㆍ•*∙‧|>›»:;,]/g," ").split(/\s+/).filter(Boolean).filter(s=>{let o=s.replace(/^[\-+=~*_.()[\]]+|[\-+=~*_.()[\]]+$/g,"");return!(!o||Vo.test(o)||/^[\d./]+$/.test(o)||!/[가-힣]/.test(o)&&o.length<=1)}).map(s=>s.replace(/^[\-+=~*_.()[\]]+|[\-+=~_.([]+$/g,"")).filter(Boolean).join(" ").trim()}var Xo=/(취소|환불|정정|반품)/,qo=/(입금|급여|월급|상여|이자|환급|받은|받음)/,Zo=/(잔액|잔고|이체|입금|출금|자동이체|ATM|타행|당행)/;function Qo(e,t={}){let n=t.fileDate instanceof Date&&!isNaN(t.fileDate)?t.fileDate:t.now||new Date,s=n,o=[],a=null,i=null,r=null,l=0,u=[],p=()=>{r&&o.push(r),r=null},c=(e||[]).map(g=>{let h=String(g||"").replace(/\s+/g," ").trim();if(!h)return null;let{amounts:y,rest:v}=Yo(h);return{line:h,amounts:y,rest:v,d:Go(v,s)}}).filter(Boolean);for(let g=0;g<c.length;g++){let h=c[g].d;if(h.iso||!h.partial)continue;let y=null;for(let D=1;D<c.length&&!y;D++)for(let x of[g-D,g+D]){let I=c[x]&&c[x].d;if(I&&I.iso){y=I.iso;break}}if(!y)continue;let[v,$]=y.split("-"),_=h.partial.year||+v,S=h.partial.month||+$,k=h.partial.day;!k||S<1||S>12||(c[g].d={iso:ie(new Date(_,S-1,k)),headerOnly:h.headerOnly,borrowed:!0})}for(let g of c){let{line:h,amounts:y,rest:v,d:$}=g;if($.iso&&$.headerOnly&&!y.length){p(),a=$.iso,i=null;continue}let _=Jo(v),S=y.filter(N=>N.kind==="krw"||N.kind==="fx"),k=y.find(N=>N.kind==="balance");if(!S.length){if(!r&&!o.length&&u.push(h),r&&!_){r.detail.push(h),k&&r.balance==null&&(r.balance=k.value);continue}if(r&&k&&r.balance==null){r.balance=k.value,r.detail.push(h);continue}_&&!zo.test(_)?(p(),i=_):r&&r.detail.push(h);continue}let D=S.find(N=>N.kind==="krw"),x=S.find(N=>N.kind==="fx");if(!_&&r&&!i&&(D&&!x&&r.krw==null&&r.fx||x&&!D&&!r.fx&&r.krw!=null)){D?r.krw=D:r.fx=x,k&&r.balance==null&&(r.balance=k.value),r.detail.push(h);continue}p();let I=_||i||"";i=null,r={date:$.iso||a,dateGuessed:!($.iso||a),merchant:I,krw:D||null,fx:x||null,balance:k?k.value:null,detail:[h]}}p();let d=new Set,m=[];for(let g of o){if(!g.merchant)continue;let h=[g.merchant,...g.detail].join(" ");if(!g.krw){l++;continue}let y=g.krw.value;if(!(y>0))continue;let v=g.date||ie(n),$=g.krw.sign||(g.fx?g.fx.sign:0),_=Xo.test(h),S=g.balance!=null||Zo.test(h),k=_?"out":$>0||$===0&&qo.test(h)?"in":"out",D=`${v}|${y}|${z(g.merchant)}|${g.fx?g.fx.value:""}`;if(d.has(D))continue;d.add(D);let x=k==="in"?"transfer":"expense",I=null,N=!!g.dateGuessed,H=!1;if(k==="in"){let Y=Ye({counterpartyRaw:g.merchant,memo:g.merchant,rawText:h,amount:y},t.settings);Y?(x=Y.type,I=Y.transferKind,N=N||!!Y.needsCheck):/(급여|월급|상여)/.test(h)&&(x="income")}let W=x==="income"?"income":ke(g.merchant,"expense",t.rules),q=Pe({counterpartyRaw:g.merchant,memo:g.merchant,rawText:`${h} ${u.join(" ")}`,category:W,amount:y},t.settings);q&&(q.type&&(x=q.type),q.category&&(W=q.category),I=q.transferKind,H=!!q.isExtra),m.push({type:x,transferKind:I,needsCheck:N,isExtra:H,direction:k,isRefund:_&&x==="expense",category:W,amount:y,date:v,memo:g.merchant,normKey:z(g.merchant),paymentMethod:S?"account":"card",balanceAfter:g.balance,counterpartyRaw:g.merchant,currency:g.fx?g.fx.currency:"",foreignAmount:g.fx?g.fx.value:null,isOverseas:!!g.fx,dateGuessed:!!g.dateGuessed,source:"capture",confidence:Oe(g.merchant,W),rawText:h})}return{entries:m,gaps:[],skippedNoKrw:l}}function Vs(e,t={}){let n=[],s=0,o=new Set;for(let a of e||[]){let i=a.lines||jo(a.words),r=Qo(i,{...t,fileDate:a.fileDate||t.fileDate});s+=r.skippedNoKrw;for(let l of r.entries){let u=`${l.date}|${l.amount}|${l.normKey}|${l.foreignAmount??""}`;o.has(u)||(o.add(u),n.push(l))}}return{entries:n,gaps:[],skippedNoKrw:s}}var Cn=864e5,we=(e,t)=>Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/Cn);function Ht(e){let t=new Map;for(let o of e)t.set(o,(t.get(o)||0)+1);let n=e[0],s=0;for(let[o,a]of t)a>s&&(n=o,s=a);return n}var ei=e=>{let t=[...e].sort((n,s)=>n-s);return t.length%2?t[(t.length-1)/2]:Math.round((t[t.length/2-1]+t[t.length/2])/2)};function zs(e,t={}){let n=t.minCount||3,s=new Map;for(let a of e){if(a.deleted||a.type==="income"||!a.amount||a.transferKind&&["external","welfare"].includes(a.transferKind)===!1||a.isExtra)continue;let i=a.normKey||z(a.memo);!i||i.length<2||(s.has(i)||s.set(i,[]),s.get(i).push(a))}let o=[];for(let[a,i]of s){if(i.length<n)continue;let r=new Map;for(let h of[...i].sort((y,v)=>y.date<v.date?-1:1)){let y=h.date.slice(0,7);r.has(y)||r.set(y,h)}let l=Array.from(r.values());if(l.length<n)continue;let u=[];for(let h=1;h<l.length;h++)u.push(we(l[h-1].date,l[h].date));let p=u.filter(h=>h>=25&&h<=36).length;if(u.length===0||p/u.length<.6)continue;let c=l.map(h=>h.amount),d=ei(c),m=c.some(h=>h!==c[0]),g=l[l.length-1];o.push({normKey:a,name:g.memo||a,amount:d,amountVariable:m,dayOfMonth:Ht(l.map(h=>parseInt(h.date.slice(8,10),10))),category:Ht(l.map(h=>h.category)),accountId:g.accountId||null,paymentMethod:g.paymentMethod||"account",count:l.length,lastSeen:g.date,sampleIds:l.map(h=>h.id)})}return o.sort((a,i)=>i.amount-a.amount)}function Wt(e,t){if(!e||!t||e.deleted)return!1;let n=e.normKey||z(e.memo),s=t.normKey;if(!n||!s||!(n===s||n.includes(s)||s.includes(n)||Ge(n,s)>=.6))return!1;let a=Math.abs(parseInt(e.date.slice(8,10),10)-t.dayOfMonth);return!(!(a<=3||a>=26)||!t.amountVariable&&Math.abs(e.amount-t.amount)/t.amount>.2)}function Gs(e,t,n={}){let s=n.now||new Date,o=ie(s),a=[];for(let i of e){if(i.status&&i.status!=="active")continue;let r=o.slice(0,7),[l,u]=r.split("-").map(Number),p=new Date(l,u,0).getDate(),c=Math.min(i.dayOfMonth||1,p),d=`${r}-${String(c).padStart(2,"0")}`;d>o||t.some(g=>g.date&&g.date.slice(0,7)===r&&(g.fixedId===i.id||!g.deleted&&Wt(g,i)))||a.push({date:d,type:"expense",category:i.category,amount:i.amount,memo:i.name,normKey:i.normKey,accountId:i.accountId,paymentMethod:i.paymentMethod||"account",fixedId:i.id,source:"auto",confidence:1,status:"scheduled",amountEstimated:!!i.amountVariable})}return a}function Ys(e,t){let n=[],s=[],o=e.filter(a=>a.status==="scheduled"&&!a.deleted);for(let a of o){let i=t.find(l=>l.id===a.fixedId),r=e.find(l=>!l.deleted&&l.id!==a.id&&l.status!=="scheduled"&&l.date.slice(0,7)===a.date.slice(0,7)&&(i?Wt(l,i):!1));if(r){n.push({scheduledId:a.id,realId:r.id,amount:r.amount});continue}we(a.date,oe())>7&&s.push(a.id)}return{settled:n,unconfirmed:s}}var ti=["신한카드","국민카드","삼성카드","현대카드","롯데카드","하나카드","우리카드","농협카드","비씨카드","카드대금","일시불대금","청구대금"],ni=["트래블","travel","충전","머니","환전","월렛","wallet"],si=["적금","예금","청약","irp","연금","저축"],ai=["키움증권","키움","미래에셋","삼성증권","NH투자","한국투자","KB증권","신한투자","하나증권","대신증권","토스증권","유안타","메리츠증권","이베스트","카카오페이증권","증권","선물","CMA","펀드"],oi=["atm","cd출금","현금인출","현금출금","자동화기기"];function Js(e,t={}){let n=t.accounts||[],s=t.settings||{};if(e.category==="family"||e.category==="travel")return null;let o=`${e.counterpartyRaw??""} ${e.memo??""} ${e.rawText??""}`;if((s.familyTransferKeywords||[]).some(g=>g&&o.includes(g))||(s.travelKeywords||[]).some(g=>g&&o.includes(g)))return null;let a=String(t.userName??"").trim(),i=`${e.counterpartyRaw??""} ${e.memo??""} ${e.rawText??""}`,r=i.toLowerCase(),l=e.normKey||z(e.memo),u=g=>n.find(h=>g&&!g.includes(h.kind)?!1:h.last4&&i.includes(h.last4)?!0:[h.name,...h.aliases||[]].filter(Boolean).some(v=>{let $=z(v);return $&&(l===$||l.includes($)||r.includes(v.toLowerCase()))})),p=u(["bank"]);if(p&&p.id!==e.accountId)return{transferKind:"internal",toAccountId:p.id};if(ni.some(g=>r.includes(g))){let g=u(["fx"]);return{transferKind:"fxTopup",toAccountId:g?g.id:null}}let c=u(["card"]);if(c||ti.some(g=>i.includes(g)))return{transferKind:"cardPayment",toAccountId:c?c.id:null};if(oi.some(g=>r.includes(g))){let g=n.find(h=>h.kind==="cash");return{transferKind:"cashOut",toAccountId:g?g.id:null}}let d=u(["invest"]);if(d||ai.some(g=>i.includes(g)||r.includes(g.toLowerCase())))return{transferKind:"invest",toAccountId:d?d.id:null};let m=u(["savings"]);return m||si.some(g=>r.includes(g))?{transferKind:"savings",toAccountId:m?m.id:null}:a&&i.includes(a)?{transferKind:"internal",toAccountId:null,unknownAccount:!0}:{transferKind:"external",toAccountId:null}}function ii(e,t,n={}){if(!e||!t||e.accountId&&t.accountId&&e.accountId===t.accountId)return 0;let s=e.amount-t.amount;if(s!==0&&!(s>0&&s<=1e3))return 0;let o=Math.abs(we(e.date,t.date));if(o>2)return 0;let a=0,i=[];o===0?(a+=35,i.push("같은 날")):o===1?(a+=20,i.push("하루 차이")):a+=8;let r=String(n.userName??"").trim(),l=`${e.counterpartyRaw||""} ${e.memo||""}`,u=`${t.counterpartyRaw||""} ${t.memo||""}`;return r&&l.includes(r)&&u.includes(r)?(a+=30,i.push("양쪽 다 본인 명의")):z(l)&&z(l)===z(u)?(a+=20,i.push("같은 적요")):Ge(z(l),z(u))>=.5&&(a+=10),s===0?(a+=15,i.push("금액 일치")):(a+=10,i.push(`수수료 ${s}원`)),(n.history||0)>=3&&(a+=15,i.push("자주 오가는 조합")),{score:a,reasons:i,fee:s}}function Xs(e,t={}){let n=e.filter(u=>!u.deleted&&(u.type==="transfer"||u.transferKind==="internal")&&u.amount>0),s=n.filter(u=>u.direction==="out"||u.direction==null&&u.type==="transfer"),o=n.filter(u=>u.direction==="in"),a=new Set,i=[],r=[];for(let u of s){if(a.has(u.id))continue;let p=null;for(let c of o){if(a.has(c.id)||c.id===u.id)continue;let d=ii(u,c,t);!d||!d.score||(!p||d.score>p.score)&&(p={...d,inn:c})}p&&(p.score>=75?(i.push({out:u,inn:p.inn,...p}),a.add(u.id),a.add(p.inn.id)):p.score>=50&&r.push({out:u,inn:p.inn,...p}))}let l=n.filter(u=>!a.has(u.id)&&!r.some(p=>p.out.id===u.id||p.inn.id===u.id));return{pairs:i,review:r,halves:l}}function qs(e,t){let n=e.filter(o=>!o.deleted&&o.accountId===t&&o.balanceAfter!=null).sort((o,a)=>o.date<a.date?-1:o.date>a.date?1:(o.createdAt||0)-(a.createdAt||0));if(n.length<2)return{gaps:[],latest:n[0]||null};let s=[];for(let o=1;o<n.length;o++){let a=n[o-1],i=n[o],r=i.type==="income"||i.direction==="in"?i.amount:-i.amount,l=a.balanceAfter+r,u=i.balanceAfter-l;Math.abs(u)>1&&s.push({afterDate:a.date,beforeDate:i.date,missing:Math.abs(u),sign:u<0?"out":"in"})}return{gaps:s,latest:n[n.length-1]}}function Zs(e,t={}){let n=new Map;for(let o of e){if(o.deleted||o.type!=="expense"||t.onlyPending&&o.status!=="pending")continue;let a=o.normKey||z(o.memo)||"__none";n.has(a)||n.set(a,[]),n.get(a).push(o)}let s=[];for(let[o,a]of n){let i=new Set(a.map(l=>l.category)),r=ta(a[0].memo);s.push({normKey:o,name:Ht(a.map(l=>l.memo))||o,count:a.length,total:a.reduce((l,u)=>l+(u.isRefund?-u.amount:u.amount),0),category:Ht(a.map(l=>l.category)),mixed:i.size>1,payLike:r,needsReview:!r&&a.some(l=>l.status==="pending"||l.category==="etc"),suggest:yi(a,t)?"social":null,ids:a.map(l=>l.id)})}return s.sort((o,a)=>a.total-o.total)}function Qs(e){let t=[],n=[],s="",o=!1,a=e.replace(/^\uFEFF/,"");for(let i=0;i<a.length;i++){let r=a[i];o?r==='"'?a[i+1]==='"'?(s+='"',i++):o=!1:s+=r:r==='"'?o=!0:r===","?(n.push(s.trim()),s=""):r===`
`?(n.push(s.trim()),t.push(n),n=[],s=""):r==="\r"||(s+=r)}return(s||n.length)&&(n.push(s.trim()),t.push(n)),t.filter(i=>i.some(r=>r!==""))}var he={date:["거래일시","거래일자","이용일자","거래일","이용일","승인일","매출일","날짜","일자"],amount:["이용금액","승인금액","거래금액","결제금액","금액"],merchant:["가맹점명","기재내용","가맹점","거래처","적요","내용","상호","내역","비고","받는분","보낸분"],balance:["거래후잔액","거래후 잔액","잔액","잔고"],outCol:["출금금액","출금액","출금 (원)","출금(원)","찾으신금액","찾으신 금액","지급금액","출금","지급"],inCol:["입금금액","입금액","입금 (원)","입금(원)","맡기신금액","맡기신 금액","예입금액","입금","예입"],installment:["이용구분","할부구분","할부개월"],cancel:["취소상태","매입구분","승인상태"],cardName:["이용카드","카드명","카드구분"],kind:["거래구분","거래종류","거래유형","적요","구분"]},ri=/(총\s*\d+\s*건|출금건수|입금건수|합\s*계|소\s*계|^\d+\/\d+$)/,Je=e=>String(e||"").replace(/\s+/g,"");function ea(e){let t=-1,n=null;for(let r=0;r<Math.min(e.length,25);r++){let l=(e[r]||[]).map(Je),u=l.some(c=>c&&he.date.some(d=>c.includes(Je(d)))),p=l.some(c=>c&&(he.amount.some(d=>c.includes(Je(d)))||he.outCol.some(d=>c.includes(Je(d)))||he.inCol.some(d=>c.includes(Je(d)))));if(u&&p){t=r,n=l;break}}if(t===-1)return null;let s=(r,l)=>{for(let u of r){let p=Je(u);for(let c=0;c<n.length;c++)if(!(l&&l.includes(c))&&n[c]===p)return c}for(let u of r){let p=Je(u);for(let c=0;c<n.length;c++)if(!(l&&l.includes(c))&&n[c]&&n[c].includes(p)&&!n[c].startsWith("해외"))return c}return-1},o=s(he.outCol),a=s(he.inCol,o>=0?[o]:[]),i=o>=0&&a>=0&&o!==a;return{headerRow:t,header:n,colDate:s(he.date),colAmount:i?-1:s(he.amount),colOut:i?o:-1,colIn:i?a:-1,colMerchant:s(he.merchant),colBalance:s(he.balance),colInstallment:s(he.installment),colCancel:s(he.cancel),colKind:s(he.kind)}}var Ft=e=>{let t=parseInt(String(e||"").replace(/[^\d-]/g,""),10);return isNaN(t)?0:t};function jt(e){let t=String(e||"").replace(/[\n\r]+/g," ").trim(),n=t.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);return n?ie(new Date(+n[1],+n[2]-1,+n[3])):(n=t.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/),n?ie(new Date(2e3+ +n[1],+n[2]-1,+n[3])):null)}var li=["네이버페이","카카오페이","비바리퍼블리카","토스페이","페이코","쿠페이","스마일페이","삼성페이","애플페이","제로페이","페이머니","머니충전"];function ta(e){let t=String(e||"").replace(/\s+/g,"").toLowerCase();return li.some(n=>t.includes(n.toLowerCase()))}function na(e,t,n={}){let s=new Map,o=r=>{let l=(s.get(r)||0)+1;return s.set(r,l),l},a=[],i=[];for(let r=t.headerRow+1;r<e.length;r++){let l=e[r]||[],u=l.join(" ");if(ri.test(u.replace(/\s+/g," ").trim())){i.push(r);continue}let p=jt(l[t.colDate]);if(!p){i.push(r);continue}let c=0,d=null,m=!1;if(t.colOut>=0&&t.colIn>=0){let B=Ft(l[t.colOut]),j=Ft(l[t.colIn]);B>0?(c=B,d="out"):j>0&&(c=j,d="in")}else{let B=Ft(l[t.colAmount]);m=B<0,c=Math.abs(B),d=n.defaultDirection||"out"}if(!c){i.push(r);continue}let g=(t.colMerchant>=0?String(l[t.colMerchant]||""):"").trim();if(/^[\d-]+$/.test(g.replace(/\s/g,""))&&t.colKind>=0){let B=String(l[t.colKind]||"").trim();B&&(g=B)}let h=(t.colKind>=0?String(l[t.colKind]||""):"").trim(),y=h&&h!==g?`${h} ${g}`:g,v=t.colBalance>=0?Ft(l[t.colBalance]):null,$=t.colCancel>=0?String(l[t.colCancel]||""):"",_=t.colInstallment>=0?String(l[t.colInstallment]||""):"",S=m||/(취소|환불)/.test($)||/(취소|환불)/.test(g),k=_.match(/할부\s*\((\d{1,2})\s*개월\)/)||_.match(/(\d{1,2})\s*개월/),D=/해외/.test(_),x=d==="in"?"transfer":"expense",I=null,N=!1,H=null,W=!1;if(d==="in"){let B=Ye({counterpartyRaw:g,memo:g,rawText:g,amount:c},n.settings);B?(x=B.type,I=B.transferKind,N=!!B.needsCheck,B.isRefund&&(W=!0),B.confidence!=null&&(H=B.confidence)):/(급여|월급|상여|환급)/.test(g)&&(x="income")}let q=x==="income"?"income":ta(g)&&!Ne(z(y),n.rules)&&!Ne(z(g),n.rules)&&!(n.settings&&(n.settings.familyTransferKeywords||[]).some(B=>B&&g.includes(B)))?"etc":ke(y,"expense",n.rules),Y=Pe({counterpartyRaw:g,memo:g,rawText:u,category:q,amount:c},n.settings);Y&&Y.transferKind&&Y.transferKind!=="welfare"&&!Y.category&&(x="transfer");let K=!1;Y&&(Y.type&&(x=Y.type),Y.category&&(q=Y.category),I=Y.transferKind,K=!!Y.isExtra,N=!1,Y.confidence!=null&&(H=Y.confidence)),I&&["internal","invest","savings","cashOut","cardPayment","fxTopup","verify"].includes(I)&&(N=!1,H==null&&(H=1)),a.push({type:x,direction:d,date:p,amount:c,transferKind:I,needsCheck:N,isExtra:K,category:q,memo:g||"내역",normKey:z(g),counterpartyRaw:g,balanceAfter:v||null,accountId:n.accountId||null,paymentMethod:n.paymentMethod||"account",source:"statement",isRefund:S||W,installmentMonths:k?parseInt(k[1],10):null,isOverseas:D,confidence:H??(q==="etc"?.4:.8),needsCheck:S||W?!1:N,sourceHash:`${n.accountId||""}|${p}|${c}|${g}|${$}|${d}|${v||""}|${o(`${p}|${c}|${g}|${d}|${v||""}`)}`,rawText:u.trim()})}return{entries:a,skipped:i}}function sa(e){let t=new TextDecoder("utf-8",{fatal:!1}).decode(e);if((t.match(/\uFFFD/g)||[]).length>3)try{return new TextDecoder("euc-kr").decode(e)}catch{}return t}var wn=(e,t)=>ie(new Date(new Date(e+"T00:00:00").getTime()+t*Cn));function Dn(e,t){let n=e.filter(m=>!m.deleted&&m.tripId===t.id),s=0,o=0,a=0,i=0,r={},l=[];for(let m of n){if(m.date&&l.push(m.date),m.type==="income"){o+=m.amount;continue}if(m.type!=="expense")continue;let g=m.isRefund?-m.amount:m.amount;if(m.transferKind==="welfare"){a+=g;continue}m.transferKind&&m.transferKind!=="external"||(m.reimbFrom&&(i+=m.amount),s+=g,r[m.category]=(r[m.category]||0)+g)}l.sort();let u=Object.entries(r).sort((m,g)=>g[1]-m[1]),p={};for(let m of n)m.currency&&m.foreignAmount&&(p[m.currency]=(p[m.currency]||0)+m.foreignAmount);let c=t.startDate||l[0]||null,d=t.endDate||l[l.length-1]||null;return{count:n.length,total:s,income:o,welfare:a,reimbursed:i,cats:u,fx:p,from:c,to:d,days:c&&d?Math.round((new Date(d)-new Date(c))/Cn)+1:null}}var ci=["anthropic","openai","oracle","google","apple.com","netflix","spotify","aws","amazon web","microsoft","github","adobe","cloudflare","steam","paypal","patreon","figma","notion","dropbox"];function aa(e){if(!e||e.deleted||e.type!=="expense")return!1;let t=String(e.memo||"").toLowerCase();return ci.some(n=>t.includes(n))?!1:!!(e.currency&&e.currency!=="KRW"||e.isOverseas)}function oa(e,t={}){let n=t.gapDays||3,s=e.filter(aa).sort((l,u)=>l.date<u.date?-1:1);if(!s.length)return{trips:[],singles:[]};let o=[],a=[s[0]];for(let l=1;l<s.length;l++)we(a[a.length-1].date,s[l].date)<=n?a.push(s[l]):(o.push(a),a=[s[l]]);o.push(a);let i=[],r=[];for(let l of o){let u=l[0].date,p=l[l.length-1].date,c=we(u,p)+1,d=l.reduce((h,y)=>h+(y.isRefund?-y.amount:y.amount),0),m=[...new Set(l.map(h=>h.currency).filter(Boolean))],g={startDate:u,endDate:p,days:c,count:l.length,localSpent:d,currencies:m,ids:l.map(h=>h.id),name:ui(l,u)};l.length>=3||c>=2?i.push(g):r.push(g)}return{trips:i.reverse(),singles:r.reverse()}}var di=[["삿포로",["sapporo","satsuporo","hakodate","chitose","moiwa","seicomart","yufutsu"]],["오키나와",["okinawa","naha","miyako","kokusai","coral port"]],["도쿄",["tokyo","shinjuku","shibuya","haneda","narita","asakusa"]],["오사카",["osaka","namba","umeda","kansai","dotonbori"]],["후쿠오카",["fukuoka","hakata","tenjin"]],["베트남",["vietnam","hanoi","saigon","danang","marou"]],["태국",["thailand","bangkok","phuket"]]];function ui(e,t){let n=e.map(a=>String(a.memo||"")).join(" ").toLowerCase();for(let[a,i]of di)if(i.some(r=>n.includes(r)))return`${a} ${t.slice(2,7).replace("-",".")}`;let s=e.find(a=>a.currency)?.currency;return`${{JPY:"일본",VND:"베트남",THB:"태국",USD:"미국",EUR:"유럽",TWD:"대만"}[s]||"여행"} ${t.slice(2,7).replace("-",".")}`}function pi(e,t){if(e.direction!=="in"||e.type!=="transfer"||!(e.amount>0)||e.transferKind&&e.transferKind!=="excluded")return!1;let n=t.settings||{},s=`${e.memo||""} ${e.counterpartyRaw||""}`;return!(n.userName&&s.includes(n.userName)||(n.excludedCounterparties||[]).some(o=>o&&s.includes(o)))}function Vt(e,t,n={}){if(!t||!t.startDate||!t.endDate)return{...t||{},inside:[],booked:[],reimb:[],onsite:0,prepaid:0,total:0,welfare:0};let s=n.preDays??120,o=n.postDays??0,a=(n.allTrips||[]).filter(h=>h.startDate&&h.startDate!==t.startDate&&h.id!==t.id),i=wn(t.startDate,-s),r=wn(t.endDate,o),l=wn(t.endDate,Math.max(o,60)),u=[],p=[],c=[];for(let h of e){if(h.deleted||h.tripId&&t.id&&h.tripId!==t.id)continue;if(pi(h,n)){h.date>=i&&h.date<=l&&c.push(h);continue}if(h.type!=="expense"||h.fixedId||h.category==="family")continue;let y=h.transferKind==="welfare";if(h.transferKind&&h.transferKind!=="external"&&!y)continue;let v=y?{...h,welfare:!0}:h;if(h.date>=t.startDate&&h.date<=t.endDate){u.push(v);continue}let $=h.date>=i&&h.date<t.startDate,_=o>0&&h.date>t.endDate&&h.date<=r;if(!$&&!_||$&&a.some(k=>k.startDate>h.date&&k.startDate<t.startDate)||_&&a.some(k=>k.startDate>t.endDate&&k.startDate<=h.date))continue;let S=$?"pre":"post";h.category==="travel"||t.id&&h.tripId===t.id?p.push({...v,sure:!0,when:S}):h.isOverseas||h.currency&&h.currency!=="KRW"?p.push({...v,sure:!1,when:S}):n.wide&&p.push({...v,sure:!1,when:S})}let d=h=>h.filter(y=>!y.welfare).reduce((y,v)=>y+(v.isRefund?-v.amount:v.amount),0),m=(h,y)=>h.date<y.date?-1:1,g=p.filter(h=>h.sure);return{...t,inside:u.sort(m),booked:p.sort(m),reimb:c.sort(m),onsite:d(u),prepaid:d(g),total:d(u)+d(g),welfare:[...u,...g].filter(h=>h.welfare).reduce((h,y)=>h+(y.isRefund?-y.amount:y.amount),0)}}function ia(e,t={}){let n=t.days||10,s=u=>u.transferKind&&u.transferKind!=="excluded",o=u=>!u.deleted&&u.amount>0&&!s(u)&&u.category!=="family"&&u.type!=="income",a=e.filter(u=>o(u)&&u.direction==="out"&&!u.transferKind),i=e.filter(u=>o(u)&&u.direction==="in"&&!u.isRefund),r=new Set,l=[];for(let u of i){let p=u.normKey||z(u.memo),c=null;for(let d of a){if(r.has(d.id)||d.amount!==u.amount)continue;let m=we(d.date,u.date);if(m<0||m>n)continue;let g=d.normKey||z(d.memo);p&&g&&(p===g||p.includes(g)||g.includes(p)||Ge(p,g)>=.55)&&(!c||we(d.date,u.date)<we(c.date,u.date))&&(c=d)}c&&(r.add(c.id),l.push({refund:u,original:c}))}return l}var fi=[["엔진오일",["엔진오일","엔진 오일","engine oil","모빌","킥스","지크"]],["오일필터",["오일필터","오일 필터","오일휠타","오일 휠타","oil filter"]],["에어필터",["에어필터","에어 필터","에어클리너","흡기필터","air filter"]],["에어컨필터",["에어컨필터","에어컨 필터","캐빈필터","실내필터","향균필터"]],["미션오일",["미션오일","미션 오일","변속기오일","atf","cvt오일","오토미션"]],["점화플러그",["점화플러그","점화 플러그","스파크플러그","플러그","spark plug"]],["브레이크패드",["브레이크패드","브레이크 패드","패드","제동패드","brake pad"]],["브레이크액",["브레이크액","브레이크 오일","브레이크오일","제동액","brake fluid"]],["냉각수",["냉각수","부동액","쿨란트","coolant"]],["타이어",["타이어","tire","tyre","휠얼라인먼트","얼라인먼트"]],["배터리",["배터리","밧데리","축전지","battery"]],["와이퍼",["와이퍼","wiper","블레이드"]],["연료필터",["연료필터","연료 필터","퓨얼필터","fuel filter"]],["LPG 필터",["lpg필터","lpg 필터","가스필터"]],["DPF 점검",["dpf","디피에프","매연포집"]],["감속기 오일",["감속기","리덕션","reduction"]]],mi=/(합계|총액|부가세|공급가|할인|소계|청구|결제|카드|현금|영수증|견적|사업자|대표|전화|주소|고객|차량번호|담당)/;function ra(e,t={}){let n=String(e||"").split(/\n/).map(r=>r.trim()).filter(Boolean),s=[],o=null,a=null,i=0;for(let r of n){if(!o){let d=r.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);d&&(o=ie(new Date(+d[1],+d[2]-1,+d[3])))}if(a==null){let d=r.match(/([0-9][0-9,]{2,})\s*(km|KM|키로|주행)/);if(d)a=parseInt(d[1].replace(/,/g,""),10);else if(/주행|계기|누적/.test(r)){let m=r.match(/([0-9][0-9,]{3,})/);m&&(a=parseInt(m[1].replace(/,/g,""),10))}}let l=r.toLowerCase(),u=r.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})\s*원?/),p=u?parseInt(u[1].replace(/,/g,""),10):0;if(mi.test(r)){/(합계|총액|청구)/.test(r)&&p>i&&(i=p);continue}let c=fi.find(([,d])=>d.some(m=>l.includes(m)));c&&(s.some(d=>d.label===c[0])||s.push({label:c[0],amount:p,raw:r}))}return i||(i=s.reduce((r,l)=>r+l.amount,0)),{items:s,date:o||oe(),mileage:a,total:i}}function Sn(e){return!e||e.deleted||e.type!=="expense"||e.category==="family"?!1:!e.transferKind||["external","welfare","verify"].includes(e.transferKind)}function An(e,t){if(!Sn(e)||e.catBy==="user")return e;let n=Ne(e.normKey||z(e.memo),t);if(!n)return e;let s={...e,category:n.category||e.category,confidence:1};return n.kind==="exclude"&&e.transferKind!=="welfare"&&(s.transferKind="verify"),s.status==="pending"&&!e.needsCheck&&(s.status="confirmed"),s}function hi(e,t){if(e=String(e||""),t=String(t||""),!e||!t||e===t)return!1;let[n,s]=e.length<=t.length?[e,t]:[t,e];if(n.length>=2&&s.startsWith(n)||n.length>=3&&s.includes(n))return!0;let o=0;for(;o<n.length&&n[o]===s[o];)o++;return o>=4&&o/n.length>=.6?!0:n.length>=4&&Ge(e,t)>=.6}function la(e,t,n){let s=t&&(t.normKey||z(t.memo))||"",o=[],a=[];if(s.length<2)return{same:o,similar:a};for(let i of e){if(!Sn(i)||i.id===t.id||i.category===n||i.catBy==="user")continue;let r=i.normKey||z(i.memo);!r||r.length<2||(r===s?o.push(i):hi(r,s)&&(i.category==="etc"||i.category===t.category)&&a.push(i))}return{same:o,similar:a}}var gi=[["food",["식비","식사","음식","식당","장보기"]],["cafe",["카페","간식","커피"]],["transport",["교통"]],["car",["차량","차","주유","정비","유지비","자동차"]],["shopping",["쇼핑"]],["living",["주거","생활"]],["health",["의료","건강","병원"]],["culture",["문화","여가"]],["comm",["통신","인터넷"]],["insurance",["보험"]],["loan",["대출","이자"]],["family",["가족"]],["social",["경조","축의","부의","회비","모임"]],["travel",["여행"]],["etc",["기타"]]];function ca(e){let t=[];for(let n of String(e||"").split(/\n/)){let s=n.replace(/#.*/,"").trim();if(!s)continue;let o=s.match(/^(.+?)\s*(?:=|→|->|:)\s*(.+)$/);if(!o){t.push({line:s,error:"'이름 = 분류' 형태로 적어주세요"});continue}let a=o[1].trim(),i=o[2].replace(/\s+/g,""),r=z(a);if(r.length<2){t.push({line:s,error:"이름이 너무 짧아요"});continue}if(/제외|확인용|빼기/.test(i)){t.push({line:s,name:a,normKey:r,category:"etc",kind:"exclude"});continue}let l=gi.find(([,u])=>u.some(p=>i.includes(p)))||Se.filter(u=>u.key!=="income").map(u=>[u.key,[u.label.replace(/\s/g,"")]]).find(([,u])=>u.some(p=>i.includes(p)));if(!l){t.push({line:s,error:`'${o[2].trim()}'는 없는 분류예요`});continue}t.push({line:s,name:a,normKey:r,category:l[0],kind:null})}return t}function zt(e,t){let n=new Map,s=new Map(t.map(o=>[o.normKey,0]));for(let o of e){if(!Sn(o))continue;let a=Ne(o.normKey||z(o.memo),t);if(!a)continue;let i={category:a.category};a.kind==="exclude"&&o.transferKind!=="welfare"&&(i.transferKind="verify"),(o.category!==i.category||i.transferKind&&o.transferKind!==i.transferKind)&&(n.set(o.id,i),s.set(a.normKey,(s.get(a.normKey)||0)+1))}return{changes:n,perRule:s}}var $i=/^(우리|신한|국민|농협|하나|기업|전북|광주|부산|대구|경남|제주|산업|카카오|토스|케이|새마을|신협|우체국|SC|IBK|KB|NH)\s*/;function vi(e,t){let n=String(e||"").trim().replace($i,"").replace(/\s+/g,"");return!(!/^[가-힣]{2,4}$/.test(n)||t&&n===String(t).replace(/\s+/g,"")||/(마트|식당|상회|약국|의원|카페|슈퍼|문구|치킨|분식|정육|세탁|학원|병원|철물|주유|전자|상사|농협|은행|카드|페이|머니|충전)$/.test(n))}function yi(e,t={}){return!e.length||!e.every(n=>n.category==="etc"&&n.paymentMethod!=="card")||!vi(e[0].memo,t.userName)?!1:e.every(n=>n.amount>=3e4&&n.amount<=1e6&&n.amount%1e4===0)}function da(e,t={}){if(!e||e.deleted||e.source!=="shortcut"||e.localized||Number(e.updatedAt||0)!==Number(e.createdAt||0))return null;let n=String(e.rawText||"");if(!n.trim())return null;let s=new Date(Number(e.createdAt)||Date.now()),o=Nt(n,{rules:t.rules,settings:t.settings,now:s});if(!o||!o.amount)return null;let a={type:o.type,category:o.category,transferKind:o.transferKind||null,isRefund:!!o.isRefund,isExtra:!!o.isExtra,welfareBalance:o.welfareBalance??null,confidence:o.confidence,localized:!0};return o.direction&&(a.direction=o.direction),o.balanceAfter!=null&&(a.balanceAfter=o.balanceAfter),Lt(n,t.settings)!=="free"&&(a.memo=o.memo,a.date=o.date,a.normKey=o.normKey,o.counterpartyRaw&&(a.counterpartyRaw=o.counterpartyRaw)),a.needsCheck=!!o.needsCheck,a.status=o.needsCheck||(o.confidence??1)<.6?"pending":"confirmed",a}function In(e,t){if(!e||e.tripId||!aa(e))return null;let n=(t||[]).find(s=>s.startDate&&s.endDate&&e.date>=s.startDate&&e.date<=s.endDate);return n?n.id:null}function ua(e,t={}){let n=t.settings&&t.settings.travelKeywords||[];if(!n.length)return[];let s=t.gapDays||4,o=e.filter(r=>!r.deleted&&r.type==="expense"&&!r.tripId&&!r.isRefund&&n.some(l=>l&&`${r.memo||""} ${r.counterpartyRaw||""}`.includes(l))).sort((r,l)=>r.date<l.date?-1:1),a=[],i=[];for(let r of o)i.length&&we(i[i.length-1].date,r.date)>s&&(a.push(i),i=[]),i.push(r);return i.length&&a.push(i),a.filter(r=>r.length>=2).map(r=>({startDate:r[0].date,endDate:r[r.length-1].date,approx:!0,days:we(r[0].date,r[r.length-1].date)+1,count:r.length,localSpent:r.reduce((l,u)=>l+u.amount,0),currencies:[],ids:r.map(l=>l.id),name:`여행 ${r[0].date.slice(2,7).replace("-",".")}`})).reverse()}function pa(e,t=[]){let n=a=>typeof a=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(a),s=new Set,o=[];for(let a of e||[]){if(!a||!n(a.start))continue;let i=a.start,r=n(a.end)&&a.end>=a.start?a.end:a.start,l=`${i}|${r}`;if(s.has(l)||(s.add(l),(t||[]).some(c=>c.startDate&&c.endDate&&c.startDate<=r&&c.endDate>=i)))continue;let p=String(a.title||"").replace(/\s+/g," ").trim().slice(0,20)||`여행 ${i.slice(2,7).replace("-",".")}`;o.push({name:p,startDate:i,endDate:r,days:we(i,r)+1,fromCalendar:!0,currencies:[]})}return o.sort((a,i)=>a.startDate<i.startDate?1:-1)}var Ut={date:/날짜|date/i,time:/시간|time/i,kind:/종류|payment\s*type/i,currency:/통화|currency/i,amount:/^금액|amount(?!.*krw)/i,balance:/잔액|balance/i,merchant:/가맹점|merchant/i,approval:/승인번호|approval/i,rate:/환율|exchange/i,krw:/원화금액|krw/i};function Gt(e){if(!Array.isArray(e))return!1;for(let t=0;t<Math.min(e.length,20);t++){let n=(e[t]||[]).map(o=>String(o||""));if(n.some(o=>Ut.krw.test(o))&&n.some(o=>Ut.kind.test(o)))return!0;let s=n.join("").replace(/\s+/g,"");if(/종류|paymenttype/i.test(s)&&/(원화금액|krwamount|가맹점)/i.test(s)&&/(날짜|date)/i.test(s))return!0}return!1}function bi(e){if(!Array.isArray(e))return null;for(let t=0;t<Math.min(e.length,20);t++){let n=(e[t]||[]).map(o=>String(o||"").replace(/\s+/g,""));if(!n.some(o=>Ut.krw.test(o))){if(/종류|paymenttype/i.test(n.join(""))&&/(날짜|date)/i.test(n.join(""))){let a=_i(e,t+1);if(a)return a}continue}let s={headerRow:t};for(let[o,a]of Object.entries(Ut))s[o]=n.findIndex(i=>a.test(i));return s.amount===s.krw&&(s.amount=n.findIndex((o,a)=>a!==s.krw&&/금액|amount/i.test(o))),s}return null}function _i(e,t){let n=[];for(let a=t;a<e.length&&n.length<12;a++){let i=e[a]||[];i.length>=6&&lt(i.find(r=>lt(r)))&&n.push(i)}if(n.length<2)return null;let s=n[0],o={headerRow:t-1,date:-1,time:-1,kind:-1,currency:-1,amount:-1,balance:-1,merchant:-1,approval:-1,rate:-1,krw:-1};for(let a=0;a<s.length;a++){let i=String(s[a]||"").trim();if(o.date<0&&jt(i)){o.date=a;continue}if(o.time<0&&/^\d{1,2}:\d{2}(:\d{2})?$/.test(i)){o.time=a;continue}if(o.kind<0&&lt(i)){o.kind=a;continue}if(o.currency<0&&/^[A-Z]{3}$/.test(i)){o.currency=a;continue}if(o.amount<0&&o.currency>=0&&/[-+−–]?\s*[\d,]+/.test(i)&&/\d/.test(i)){o.amount=a;continue}if(o.balance<0&&o.amount>=0&&/^[\d,]+$/.test(i)){o.balance=a;continue}if(o.merchant<0&&o.balance>=0&&i){o.merchant=a;continue}}return o.date<0||o.kind<0||o.amount<0?null:o}function xn(e){let t=String(e??"").replace(/\s+/g,"");if(!t)return null;let n=/^[-−–]/.test(t)||/^\(.*\)$/.test(t),s=t.replace(/[^\d]/g,"");if(!s)return null;let o=parseInt(s,10);return isNaN(o)?null:n?-o:o}var ki=[{re:/충전|charge/i,kind:"topup"},{re:/결제\s*취소|payment\s*cancel|취소|cancel|refund/i,kind:"cancel"},{re:/ATM|출금|withdraw/i,kind:"atm"},{re:/기타\s*정산|adjust/i,kind:"adjust"},{re:/결제|payment/i,kind:"payment"}];function lt(e){let t=String(e||"");for(let n of ki)if(n.re.test(t))return n.kind;return null}function Yt(e,t={}){let n=bi(e);if(!n)return{entries:[],skipped:[]};let s=p=>{let c=0;for(let d=n.headerRow+1;d<Math.min(e.length,n.headerRow+12);d++){let m=e[d]||[];jt(m[n.date+p])&&lt(m[n.kind+p])&&c++}return c},o=0,a=-1;for(let p of[0,1,-1,2]){let c=s(p);c>a&&(a=c,o=p)}let i={};for(let[p,c]of Object.entries(n))i[p]=p==="headerRow"?c:c>=0?c+o:-1;let r=[],l=[],u=(p,c)=>c>=0?p[c]:void 0;for(let p=i.headerRow+1;p<e.length;p++){let c=e[p]||[],d=c.join(" ").trim(),m=jt(u(c,i.date)),g=lt(u(c,i.kind));if(!m||!g){d&&l.push(p);continue}let h=Math.abs(xn(u(c,i.krw))||0),y=xn(u(c,i.amount));if(!h){l.push(p);continue}let v=String(u(c,i.currency)||"").replace(/[^A-Z]/gi,"").toUpperCase(),$=String(u(c,i.merchant)||"").replace(/\s+/g," ").trim(),_=xn(u(c,i.balance)),S=g==="cancel"||g==="topup",k="expense",D="travel",x=null,I=!1;g==="topup"?(k="transfer",x="fxTopup",D="etc",$=`트래블월렛 충전${v?` (${v})`:""}`):g==="cancel"?I=!0:g==="atm"&&($=$?`현지 인출 ${$}`:"현지 인출"),$||($=g==="adjust"?"정산":"내역"),k==="expense"&&(D=Ne(z($),t.rules)?ke($,"expense",t.rules):"travel"),r.push({type:k,direction:S?"in":"out",date:m,amount:h,transferKind:x,needsCheck:!1,isExtra:!1,category:D,memo:$,normKey:z($),counterpartyRaw:$,balanceAfter:null,foreignBalance:_,accountId:t.accountId||null,paymentMethod:"travelwallet",source:"statement",isRefund:I,installmentMonths:null,isOverseas:!!v&&v!=="KRW",currency:v&&v!=="KRW"?v:"",foreignAmount:y!=null?Math.abs(y):null,twKind:g,confidence:.9,sourceHash:`tw|${m}|${String(u(c,i.time)||"").trim()}|${h}|${$}|${String(u(c,i.approval)||"").trim()}|${g}|${p}`,rawText:d})}return{entries:r,skipped:l}}var wi=/(거래일시|거래일자|이용일자|날짜|일자)/;function xi(e){let t=(e||[]).filter(a=>a&&String(a.str||"").trim()).map(a=>({s:String(a.str),x:+a.x||0,y:Math.round(+a.y||0),w:+a.w||0})).sort((a,i)=>i.y-a.y||a.x-i.x),n=[],s=[],o=null;for(let a of t)o!==null&&Math.abs(a.y-o)>3&&(s.length&&n.push(s),s=[]),s.push(a),o=a.y;return s.length&&n.push(s),n}function Ci(e){if(!e.length)return[];let t=0,n=0;for(let l of e)t+=l.w,n+=Math.max(1,String(l.s).length);let s=n>0&&t>0?t/n:5,o=Math.max(s*.9,3),a=[],i=e[0].s,r=e[0].x;for(let l=1;l<e.length;l++)e[l].x-(e[l-1].x+e[l-1].w)>o?(a.push({text:i,x:r}),i=e[l].s,r=e[l].x):i+=e[l].s;return a.push({text:i,x:r}),a}function fa(e){let t=(e||[]).map(p=>xi(p)),n=p=>p.some(c=>wi.test(c.map(d=>d.s).join(""))),s=[];for(let p=0;p<t.length;p++){let c=t[p];if(c.length){if(s.length&&!n(c)){let d=s[s.length-1],m=0;for(let v of d)for(let $ of v)m=Math.max(m,$.x+$.w);let g=1/0;for(let v of c)for(let $ of v)g=Math.min(g,$.x);let h=m+40-(isFinite(g)?g:0),y=new Map;for(let v of d)y.set(Math.round(v[0].y),v);for(let v of c){let $=v.map(k=>({...k,x:k.x+h})),_=Math.round(v[0].y),S=y.get(_);S?S.push(...$):d.push($)}continue}s.push(c.slice())}}let o=[];for(let p of s)for(let c of p)o.push(c);if(!o.length)return[];let a=o.map(p=>Ci(p).map(c=>c.text.trim()).filter(c=>c!==""));if(!a.length)return[];let i=new Map;for(let p of a)i.set(p.length,(i.get(p.length)||0)+1);let r=0,l=-1;for(let[p,c]of i)(c>l||c===l&&p>r)&&(l=c,r=p);if(r<3)return a;let u=p=>{let c=String(p).replace(/\s/g,"");return/^-?[\d,]+$/.test(c)&&/\d/.test(c)||/^\d{2,4}[.\-/]\d{1,2}[.\-/]\d{1,2}$/.test(c)||/^\d+$/.test(c)};return a.map(p=>{if(p.length<=r)return p;let c=p.slice();for(;c.length>r;){let d=-1;for(let m=c.length-2;m>=0;m--)if(!u(c[m])&&!u(c[m+1])){d=m;break}if(d<0)break;c.splice(d,2,`${c[d]} ${c[d+1]}`)}return c})}var E=Le.bind(Re);function ha({db:e,patch:t,entries:n,flash:s,onAdopt:o}){let[a,i]=L(!1),[r,l]=L(null),u=U(()=>{let h=new Set(e.fixedExpenses.map(y=>y.normKey));return zs(n).filter(y=>!h.has(y.normKey))},[n,e.fixedExpenses]),p=oe().slice(0,7),c=e.fixedExpenses.filter(h=>h.status!=="ended").map(h=>{let y=n.find(S=>!S.deleted&&S.date.slice(0,7)===p&&(S.fixedId===h.id||Wt(S,h))),v=String(h.dayOfMonth).padStart(2,"0"),$=`${p}-${v}`,_=!y&&$<oe();return{...h,hit:y,due:$,late:_}}).sort((h,y)=>h.dayOfMonth-y.dayOfMonth),d=c.filter(h=>h.hit&&h.hit.status!=="scheduled").reduce((h,y)=>h+y.hit.amount,0),m=c.reduce((h,y)=>h+(y.hit&&y.hit.status!=="scheduled"?y.hit.amount:y.amount),0),g=h=>t(y=>{y.fixedExpenses=y.fixedExpenses.filter(v=>v.id!==h)});return E`
    <div class="fixedWrap">
      ${u.length>0&&E`
        <div class="suggest">
          <div class="suggestHead">매달 반복되는 것 ${u.length}건을 찾았어요</div>
          ${u.slice(0,6).map(h=>E`
            <div class="suggestRow" key=${h.normKey}>
              <span class="sName">${h.name}</span>
              <span class="sAmt">${h.amountVariable?"약 ":""}₩${F(h.amount)}</span>
              <span class="sDay">매월 ${h.dayOfMonth}일</span>
            </div>`)}
          <div class="acts">
            <button class="btn primary sm" onClick=${()=>{o(u),s(`고정비 ${u.length}건 등록`)}}>
              전부 고정비로 등록
            </button>
          </div>
        </div>`}

      <div class="fixedHead">
        <span>이번 달 고정비</span>
        <span class="fixedSum">나감 ₩${F(d)} · 예정 포함 ₩${F(m)}</span>
      </div>

      ${c.length===0&&u.length===0&&E`
        <div class="empty">아직 고정비가 없어요.<br />세 달치 기록이 쌓이면 알아서 찾아냅니다.</div>`}

      ${c.map(h=>E`
        <div class=${"fixedRow"+(h.late?" late":"")} key=${h.id}>
          <span class=${"fixedMark "+(h.hit&&h.hit.status!=="scheduled"?"done":h.late?"late":"wait")}>
            ${h.hit&&h.hit.status!=="scheduled"?"✓":h.late?"!":"○"}
          </span>
          <span class="fixedDay">${h.dayOfMonth}일</span>
          <span class="fixedName">${h.name}</span>
          <span class="fixedAmt">
            ${h.amountVariable&&!(h.hit&&h.hit.status!=="scheduled")?"약 ":""}
            ₩${F(h.hit?h.hit.amount:h.amount)}
          </span>
          <button class="del" onClick=${()=>g(h.id)} aria-label="삭제">×</button>
        </div>
        ${h.late&&E`<div class="fixedLate">예정일이 지났는데 확인이 안 돼요. 통장 내역을 붙여넣으면 맞춰집니다.</div>`}`)}

      ${a?E`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="이름" value=${r.name} onInput=${h=>l({...r,name:h.target.value})} />
              <input class="inp" type="number" placeholder="금액" value=${r.amount||""} onInput=${h=>l({...r,amount:parseInt(h.target.value||"0",10)})} />
              <input class="inp" type="number" min="1" max="31" placeholder="며칠" value=${r.dayOfMonth||""} onInput=${h=>l({...r,dayOfMonth:parseInt(h.target.value||"1",10)})} />
            </div>
            <div class="chips">
              ${Se.filter(h=>h.key!=="income").map(h=>E`
                <button key=${h.key} class=${"chip sm"+(r.category===h.key?" on":"")}
                  style=${r.category===h.key?`background:${h.color};border-color:${h.color}`:`border-color:${h.color}55;color:${h.color}`}
                  onClick=${()=>l({...r,category:h.key})}>${h.label}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>i(!1)}>취소</button>
              <button class="btn primary sm" disabled=${!r.name||!r.amount}
                onClick=${()=>{t(h=>{h.fixedExpenses=[...h.fixedExpenses,{...r,id:Ve(),normKey:z(r.name),status:"active",source:"manual"}]}),i(!1),s("고정비를 등록했어요")}}>등록</button>
            </div>
          </div>`:E`<button class="tag dash addFixed" onClick=${()=>{l({name:"",amount:0,dayOfMonth:1,category:"living",amountVariable:!1}),i(!0)}}>+ 직접 추가</button>`}
    </div>`}function ga({entries:e,onApply:t,onApplyRules:n,userName:s,ruleCount:o,onClose:a}){let[i,r]=L(!1),[l,u]=L(!1),p=U(()=>{let x=Zs(e,{userName:s});return i?x:x.filter(I=>I.needsReview||I.mixed)},[e,i,s]),[c,d]=L({}),[m,g]=L(!1),[h,y]=L(""),[v,$]=L(null),_=U(()=>ca(h),[h]),S=U(()=>zt(e,_.filter(x=>!x.error)),[e,_]),k=_.filter(x=>!x.error),D=l?p:p.slice(0,40);return E`
    <div class="card">
      <div class="cardLabel">가맹점별로 한 번에 분류하기 · ${p.length}곳</div>
      <div class="hint sm">한 번 정하면 같은 곳의 지난 기록까지 바뀌고, 앞으로도 자동으로 분류됩니다.</div>
      <div class="row wrap" style="margin-top:8px">
        <button class=${"tag"+(i?"":" on")} onClick=${()=>r(!1)}>정리할 것만</button>
        <button class=${"tag"+(i?" on":"")} onClick=${()=>r(!0)}>전체 보기</button>
        <button class=${"tag dash"+(m?" on":"")} onClick=${()=>g(!m)}>규칙 한꺼번에 넣기</button>
      </div>

      ${v&&!m&&E`
        <div class="tidyResult">규칙 <b>${v.rules}개</b>를 넣고 지난 기록 <b>${v.changed}건</b>을 바꿨어요. 앞으로 들어오는 것도 자동으로 분류됩니다.</div>`}
      ${m&&E`
        <div class="ruleBox">
          <div class="hint sm">
            한 줄에 하나씩 <b>이름 = 분류</b>로 적으세요. 오른쪽에 <b>제외</b>를 쓰면 합계에서 뺍니다(해외 서비스 확인용 결제 등).
            이 규칙은 이 기기에만 저장되고 코드나 외부로 나가지 않습니다. 지금 규칙 ${o||0}개.
          </div>
          <textarea class="pasteArea ruleArea" value=${h} onInput=${x=>y(x.target.value)}
            placeholder=${`예)
홍길동 = 경조사
동네식당 = 식비
oracle = 제외`}></textarea>
          ${_.length>0&&E`
            <div class="ruleList">
              ${_.map((x,I)=>E`
                <div class=${"ruleRow"+(x.error?" bad":"")} key=${I}>
                  <span class="ruleName">${x.name||x.line}</span>
                  <span class="ruleTo">${x.error?x.error:x.kind==="exclude"?"합계 제외":Se.find(N=>N.key===x.category)?.label}</span>
                  ${!x.error&&E`<span class="ruleCnt">${S.perRule.get(x.normKey)||0}건</span>`}
                </div>`)}
            </div>`}
          <div class="acts">
            <button class="btn primary sm" disabled=${!k.length}
              onClick=${()=>{let x=n(_);$({rules:k.length,changed:x}),y(""),g(!1)}}>
              규칙 ${k.length}개 적용 · 기록 ${S.changes.size}건 바뀜
            </button>
          </div>
        </div>`}

      <div class="groupList">
        ${p.length===0&&E`<div class="empty">정리할 게 없어요.<br />전체 보기로 이미 분류된 곳도 볼 수 있어요.</div>`}
        ${D.map(x=>E`
          <div class=${"groupRow"+(c[x.normKey]?" settled":"")} key=${x.normKey}>
            <div class="groupTop">
              <span class="gName">${x.name}</span>
              <span class="gMeta">${x.count}건 · ₩${F(x.total)}</span>
            </div>
            ${x.suggest&&!c[x.normKey]&&E`
              <button class="suggestPill" onClick=${()=>{d(I=>({...I,[x.normKey]:x.suggest})),t(x,x.suggest)}}>
                사람 이름 · 딱 떨어지는 금액 — ${Se.find(I=>I.key===x.suggest)?.label}일까요? 탭하면 정해져요
              </button>`}
            <div class="chips">
              ${Se.filter(I=>I.key!=="income").map(I=>E`
                <button key=${I.key}
                  class=${"chip sm"+((c[x.normKey]||x.category)===I.key?" on":"")}
                  style=${(c[x.normKey]||x.category)===I.key?`background:${I.color};border-color:${I.color}`:`border-color:${I.color}55;color:${I.color}`}
                  onClick=${()=>{d(N=>({...N,[x.normKey]:I.key})),t(x,I.key)}}>${I.label}</button>`)}
            </div>
          </div>`)}
        ${!l&&p.length>40&&E`<button class="pickToggle" onClick=${()=>u(!0)}>나머지 ${p.length-40}곳 더 보기</button>`}
      </div>
      <div class="acts"><button class="btn ghost sm" onClick=${a}>닫기</button></div>
    </div>`}function $a({db:e,entries:t,patch:n,rowProps:s}){let[o,a]=L(!1),[i,r]=L(""),[l,u]=L("bank"),p=e.accounts,c=U(()=>{let y={};for(let v of p){let $=qs(t,v.id);y[v.id]={balance:$.latest?$.latest.balanceAfter:v.balance||0,at:$.latest?$.latest.date:v.balanceAt,gaps:$.gaps}}return y},[p,t]),d=p.reduce((y,v)=>y+(c[v.id]?.balance||0),0),m=U(()=>{let y=oe().slice(0,7);return t.filter(v=>!v.deleted&&v.type==="transfer"&&v.date.slice(0,7)===y).sort((v,$)=>v.date<$.date?1:-1)},[t]),g=y=>p.find(v=>v.id===y)?.name||"?",h={bank:"통장",card:"카드",cash:"현금",fx:"외화",savings:"저축",invest:"투자"};return E`
    <div class="assetWrap">
      <div class="assetTotal">
        <span class="assetTotalLabel">총 자산</span>
        <span class="assetTotalVal">₩${F(d)}</span>
      </div>

      ${p.length===0&&E`<div class="empty">등록된 계좌가 없어요.<br />문자나 내역을 넣으면 알아서 찾아내고,<br />아래에서 직접 추가할 수도 있어요.</div>`}

      ${p.map(y=>{let v=c[y.id]||{},$=v.at&&(new Date-new Date(v.at+"T00:00:00"))/864e5>7;return E`
          <div class="acctRow" key=${y.id}>
            <span class="acctKind">${h[y.kind]||y.kind}</span>
            <span class="acctName">${y.name}${y.last4?E`<span class="acctLast4"> ${y.last4}</span>`:""}</span>
            <span class="acctBal">₩${F(v.balance||0)}</span>
            <button class="del" onClick=${()=>n(_=>{_.accounts=_.accounts.filter(S=>S.id!==y.id)})} aria-label="삭제">×</button>
          </div>
          ${v.gaps&&v.gaps.length>0&&E`
            <div class="acctWarn">${v.beforeDate||v.gaps[0].beforeDate} 부근에 기록 안 된 거래 ₩${F(v.gaps[0].missing)}이 있어요</div>`}
          ${$&&E`<div class="acctStale">잔액이 ${v.at} 기준이에요</div>`}`})}

      ${o?E`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="계좌 이름 (예: 하나 주계좌)" value=${i} onInput=${y=>r(y.target.value)} />
            </div>
            <div class="chips">
              ${Object.entries(h).map(([y,v])=>E`
                <button key=${y} class=${"tag"+(l===y?" on":"")} onClick=${()=>u(y)}>${v}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>a(!1)}>취소</button>
              <button class="btn primary sm" disabled=${!i.trim()} onClick=${()=>{n(y=>{y.accounts=[...y.accounts,{id:Ve(),name:i.trim(),kind:l,aliases:[],balance:0}]}),r(""),a(!1)}}>추가</button>
            </div>
          </div>`:E`<button class="tag dash addFixed" onClick=${()=>a(!0)}>+ 계좌 추가</button>`}

      ${m.length>0&&E`
        <div class="transferBox">
          <div class="groupHead">이번 달 계좌 간 이동 ${m.length}건</div>
          ${m.slice(0,10).map(y=>E`
            <div class="tRow" key=${y.id}>
              <span class="tDate">${y.date.slice(5)}</span>
              <span class="tPath">
                ${y.fromAccountId?g(y.fromAccountId):y.accountId?g(y.accountId):"?"}
                → ${y.toAccountId?g(y.toAccountId):y.memo||"?"}
              </span>
              <span class="tAmt">₩${F(y.amount)}</span>
              ${!y.pairedFrom&&y.transferKind==="internal"&&E`<span class="tHalf">⟳</span>`}
            </div>`)}
        </div>`}
    </div>`}function va({db:e,entries:t,patch:n,flash:s,onClose:o}){let[a,i]=L(null),r=()=>{let l={accounts:e.accounts,userName:e.settings.userName,settings:e.settings},u=0,p=0,c={};for(let v of t){if(v.deleted||v.transferKind||v.category==="family"||v.category==="travel"||!(v.type==="transfer"||v.type==="expense"&&v.paymentMethod==="account"&&v.direction==="out"))continue;let _=Js(v,l);c[v.id]=_,u++}let{pairs:d,review:m,halves:g}=Xs(t,l);p=d.length;let h=ia(t),y=new Set(h.map(v=>v.refund.id));n(v=>{v.entries=v.entries.map($=>{let _=c[$.id],S=$;($.category==="family"||$.category==="travel")&&$.transferKind&&(S={...S,type:"expense",transferKind:null,updatedAt:Date.now(),dirty:!0}),_&&(S={...S,transferKind:_.transferKind,toAccountId:_.toAccountId||S.toAccountId||null,status:"confirmed",updatedAt:Date.now(),dirty:!0},_.transferKind==="external"?S={...S,type:"expense"}:S.type==="expense"&&(S={...S,type:"transfer"})),y.has($.id)&&(S={...S,type:"expense",isRefund:!0,transferKind:null,status:"confirmed",confidence:1,updatedAt:Date.now(),dirty:!0});let k=d.find(x=>x.inn.id===$.id);k&&(S={...S,deleted:!0,mergedInto:k.out.id,updatedAt:Date.now(),dirty:!0});let D=d.find(x=>x.out.id===$.id);return D&&(S={...S,type:"transfer",transferKind:S.transferKind||"internal",fromAccountId:D.out.accountId||null,toAccountId:D.inn.accountId||null,pairedFrom:[D.out.id,D.inn.id],fee:D.fee||0,updatedAt:Date.now(),dirty:!0}),S})}),i({classified:u,pairedCount:p,review:m.length,halves:g.length,refunds:h.length}),s("정리했어요")};return E`
    <div class="card">
      <div class="cardLabel">자동 정리</div>
      <div class="hint sm">
        계좌 간 이체를 한 건으로 합치고, 카드 대금과 저축을 지출에서 빼고,
        지인 송금은 지출로 되돌립니다. 되돌리기가 필요하면 백업에서 복원하세요.
      </div>
      ${a?E`<div class="tidyResult">
            <div>이체 성격 판정 <b>${a.classified}건</b></div>
            <div>반쪽 이체 짝짓기 <b>${a.pairedCount}쌍</b></div>
            ${a.refunds>0&&E`<div>나갔다 돌아온 돈 <b>${a.refunds}건</b> 환불 처리</div>`}
            ${a.review>0&&E`<div>확인 필요 <b>${a.review}건</b></div>`}
            ${a.halves>0&&E`<div>짝 못 찾음 <b>${a.halves}건</b> — 나머지 통장 내역을 넣으면 맞춰집니다</div>`}
          </div>`:""}
      <div class="acts">
        <button class="btn ghost sm" onClick=${o}>닫기</button>
        <button class="btn primary sm" onClick=${r}>지금 정리</button>
      </div>
    </div>`}function ya({db:e,entries:t,onImport:n,onClose:s,flash:o}){let a=_e(null),[i,r]=L(null),[l,u]=L(""),[p,c]=L(e.accounts[0]?.id||""),[d,m]=L(!1),[g,h]=L(!1),y=()=>new Promise((_,S)=>{if(window.XLSX)return _(window.XLSX);let k=document.createElement("script");k.src="./xlsx.js",k.onload=()=>_(window.XLSX),k.onerror=()=>S(new Error("엑셀 읽기 모듈을 불러오지 못했어요")),document.head.appendChild(k)}),v=async()=>{if(window.pdfjsLib)return window.pdfjsLib;let _;try{_=await import(new URL("./pdf.min.mjs",document.baseURI).href)}catch{throw new Error("PDF 읽기 모듈을 불러오지 못했어요. pdf.min.mjs 파일을 올렸는지 확인해주세요")}return _.GlobalWorkerOptions&&(_.GlobalWorkerOptions.workerSrc=new URL("./pdf.worker.min.mjs",document.baseURI).href),window.pdfjsLib=_,_},$=_=>{let S=_.target.files&&_.target.files[0];if(!S)return;u(S.name||"가져오기");let k=/\.(xlsx?|xlsm)$/i.test(S.name),D=/\.pdf$/i.test(S.name)||S.type==="application/pdf",x=new FileReader;x.onload=async()=>{try{let I;if(D){m(!0);let j=await(await v()).getDocument({data:new Uint8Array(x.result)}).promise,de=[];for(let fe=1;fe<=j.numPages;fe++){let M=await(await j.getPage(fe)).getTextContent();de.push(M.items.map(O=>({str:O.str,x:O.transform[4],y:O.transform[5],w:O.width})))}if(I=fa(de),m(!1),!I.length){o("PDF에서 거래내역을 찾지 못했어요");return}}else if(k){m(!0);let B=await y(),j=B.read(new Uint8Array(x.result),{type:"array"}),de=/거래|날짜|일자|입금|출금|찾으신|맡기신|가맹점|기재내용|적요|잔액|금액|원화금액|종류/,fe=null,M=-1;for(let V of j.SheetNames){let ne=j.Sheets[V];if(!ne)continue;let ve=B.utils.sheet_to_json(ne,{header:1,raw:!1,defval:""}),re=ve.slice(0,30).map(ft=>(ft||[]).join(" ")).join(" "),ye=ve.length+(de.test(re)?1e4:0);ye>M&&(M=ye,fe=V)}let O=j.Sheets[fe||j.SheetNames[0]];I=B.utils.sheet_to_json(O,{header:1,raw:!1,defval:""}),m(!1)}else{let B=sa(new Uint8Array(x.result));I=Qs(B)}let N,H=null;if(Gt(I)){if(N=Yt(I,{rules:e.categoryRules,settings:e.settings}),!N.entries.length){o("트래블월렛 내역을 읽지 못했어요");return}}else{if(H=ea(I),!H){o("어느 칸이 날짜·금액인지 못 찾았어요");return}N=na(I,H,{accountId:g?null:p,paymentMethod:g?"card":"account",rules:e.categoryRules,settings:e.settings})}let W=(t||[]).filter(B=>!B.deleted),q=new Set(W.map(B=>B.sourceHash).filter(Boolean)),Y=N.entries.filter(B=>!q.has(B.sourceHash)),K=yn(Y,W);r({map:H,rows:I.length,total:N.entries.length,dupFile:N.entries.length-Y.length,...K})}catch(I){m(!1),o(`파일을 읽지 못했어요: ${I.message}`)}},x.readAsArrayBuffer(S)};return E`
    <div class="card">
      <div class="cardLabel">명세서 파일 가져오기 (CSV)</div>
      <div class="hint sm">은행·카드사에서 받은 파일을 그대로 넣으세요. 엑셀(.xls, .xlsx), CSV, PDF 모두 됩니다.</div>

      <div class="row wrap">
        <button class=${"tag"+(g?"":" on")} onClick=${()=>h(!1)}>통장</button>
        <button class=${"tag"+(g?" on":"")} onClick=${()=>h(!0)}>카드</button>
        ${!g&&e.accounts.filter(_=>_.kind==="bank").map(_=>E`
          <button key=${_.id} class=${"tag"+(p===_.id?" on":"")} onClick=${()=>c(_.id)}>${_.name}</button>`)}
      </div>

      ${d&&E`<div class="hint sm">파일을 읽는 중이에요… (큰 파일은 조금 걸려요)</div>`}
      ${i&&E`
        <div class="tidyResult">
          <div>파일에서 읽은 것 <b>${i.total}건</b></div>
          ${i.dupFile>0&&E`<div>전에 넣은 것 <b>${i.dupFile}건</b> 제외</div>`}
          <div>새로 넣을 것 <b>${i.added.length}건</b></div>
          ${i.merged.length>0&&E`<div>이미 있는 것 <b>${i.merged.length}건</b> 제외</div>`}
          ${i.review.length>0&&E`<div>확인 필요 <b>${i.review.length}건</b></div>`}
        </div>`}

      <input ref=${a} type="file" accept=".csv,.xls,.xlsx,.xlsm,.pdf,text/csv,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style="display:none" onChange=${$} />
      <div class="acts">
        <button class="btn ghost sm" onClick=${s}>닫기</button>
        <button class="btn ghost sm" onClick=${()=>a.current&&a.current.click()}>파일 고르기</button>
        ${i&&E`<button class="btn primary sm" onClick=${()=>{n(i.added,l),r(null)}}>${i.added.length}건 넣기</button>`}
      </div>
    </div>`}function Di({trip:e,picked:t,toggle:n}){let s=(o,a)=>E`
    <label class=${"pickRow"+(t[o.id]?" on":"")} key=${o.id}>
      <input type="checkbox" checked=${!!t[o.id]} onChange=${()=>n(o.id)} />
      <span class="pickDate">${o.date.slice(5)}</span>
      <span class="pickMemo">${o.memo}${a?E`<span class="pickTag"> ${a}</span>`:""}${o.welfare?E`<span class="pickTag welfare"> 복지카드</span>`:""}</span>
      <span class="pickAmt">₩${F(o.amount)}</span>
    </label>`;return E`
    <div class="pickList">
      ${e.booked.length>0&&E`
        <div class="pickHead">미리 결제한 것 (항공·숙박·교통카드·체험)</div>
        ${e.booked.map(o=>s(o,o.sure?"":"여행인지 확인"))}`}
      <div class="pickHead">여행 기간 중 결제 ${e.startDate.slice(5)} ~ ${e.endDate.slice(5)}</div>
      ${e.inside.map(o=>s(o,o.currency&&o.currency!=="KRW"?o.currency:""))}
    </div>`}var ba=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,Mn=(e,t,n=0)=>{let s=(o,a)=>{let i=new Date(o+"T00:00:00");return i.setDate(i.getDate()+a),ba(i)};return e.startDate<=s(t.endDate,n)&&t.startDate<=s(e.endDate,n)};function _a({db:e,entries:t,patch:n,flash:s,onClose:o}){let[a,i]=L({}),[r,l]=L({}),[u,p]=L({status:"idle",events:[],msg:""}),c=e.settings&&e.settings.sheetUrl;Ke(()=>{if(!c)return;let k=!0;p({status:"loading",events:[],msg:""});let D=x=>{let I=new Date;return I.setDate(I.getDate()+x),ba(I)};return Hs(c,e.settings.sheetToken,D(-400),D(400)).then(x=>{k&&p({status:"done",events:x,msg:""})}).catch(x=>{k&&p({status:"error",events:[],msg:String(x&&x.message||x)})}),()=>{k=!1}},[c]);let d=U(()=>{let k=oa(t),D=e.trips.filter(K=>K.startDate&&K.endDate),x=D.map(K=>K.startDate),I=K=>Vt(t,K,{allTrips:[...k.trips,...D],settings:e.settings}),N=oe(),H=pa(u.events,D),W=K=>Vt(t,K,{allTrips:D,settings:e.settings,preDays:K.startDate>N?365:120}),q=K=>!H.some(B=>Mn(B,K,0)),Y=ua(t,{settings:e.settings}).filter(K=>!D.some(B=>Mn(B,K,7))&&!k.trips.some(B=>Mn(B,K,7)));return{calendar:H.map(W),trips:k.trips.filter(K=>!x.includes(K.startDate)&&q(K)).map(I),singles:k.singles.filter(K=>!x.includes(K.startDate)&&q(K)).map(I),topups:Y.filter(q).map(I)}},[t,e.trips,e.settings,u.events]),m=k=>{let D={};for(let x of k.inside)D[x.id]=!0;for(let x of k.booked)D[x.id]=!!x.sure;return D},g=k=>r[k.startDate]||m(k),h=(k,D)=>l(x=>{let I=x[k.startDate]||m(k);return{...x,[k.startDate]:{...I,[D]:!I[D]}}}),y=k=>{let D=g(k);return[...k.inside,...k.booked].filter(x=>D[x.id]&&!x.welfare).reduce((x,I)=>x+(I.isRefund?-I.amount:I.amount),0)},v=k=>[...k.inside,...k.booked].filter(D=>g(k)[D.id]).length,$=k=>{let D=g(k),x=new Set([...k.inside,...k.booked].filter(N=>D[N.id]).map(N=>N.id));if(!x.size&&!k.fromCalendar){s("고른 항목이 없어요");return}let I=Ve();n(N=>{N.trips=[...N.trips,{id:I,name:k.name,startDate:k.startDate,endDate:k.endDate,createdAt:Date.now()}],N.entries=N.entries.map(H=>x.has(H.id)?{...H,tripId:I,updatedAt:Date.now(),dirty:!0}:H)}),s(k.approx?`${k.name} · ${x.size}건을 묶었어요. 여행 탭에서 기간을 실제 일정으로 고치세요`:x.size?`${k.name} · ${x.size}건을 묶었어요`:`${k.name} 여행을 만들었어요. 기간 안의 해외 결제는 들어오는 대로 묶입니다`)},_=(k,D)=>E`
    <div class=${"foundTrip"+(D?" dim":"")} key=${k.startDate}>
      <div class="foundTop">
        <span class="foundName">${k.name}</span>
        <span class="foundTotal">₩${F(y(k))}</span>
      </div>
      <div class="foundSub">
        ${k.startDate.slice(5)} ~ ${k.endDate.slice(5)} · ${k.days}일 · ${v(k)}건
        ${k.currencies.length?` · ${k.currencies.join(", ")}`:""}
      </div>
      <div class="foundBreak">
        ${k.fromCalendar?`캘린더 일정 · 기간 안 ${k.inside.length}건`:k.approx?`여행 자금 충전 ${k.count}건으로 추정한 기간`:`현지 ${k.inside.length}건`}
        ${k.booked.length>0?` · 사전결제 후보 ${k.booked.length}건`:""}
        ${k.welfare?` · 복지카드 ₩${F(k.welfare)} 별도`:""}
      </div>
      <button class="pickToggle" onClick=${()=>i(x=>({...x,[k.startDate]:!x[k.startDate]}))}>
        ${a[k.startDate]?"항목 접기":"항목 확인하고 고치기"}
      </button>
      ${a[k.startDate]&&E`<${Di} trip=${k} picked=${g(k)} toggle=${x=>h(k,x)} />`}
      <div class="acts"><button class="btn primary sm" onClick=${()=>$(k)}>${k.fromCalendar&&!v(k)?"여행 만들기":`${v(k)}건으로 묶기`}</button></div>
    </div>`,S=!d.calendar.length&&!d.trips.length&&!d.singles.length&&!d.topups.length;return E`
    <div class="card">
      <div class="cardLabel">여행 자동 찾기</div>
      <div class="hint sm">
        현지 결제가 이어진 구간을 일정으로 봅니다. 미리 결제한 항공권·숙박·체험도 앞쪽에서 찾아 함께 올립니다.
        <b>항목 확인하고 고치기</b>를 눌러 빼거나 넣을 수 있습니다.
      </div>
      ${S&&E`
        <div class="empty">새로 찾은 여행이 없어요.<br />해외 결제 표시가 있는 명세서(카드 해외이용)가 들어오면 여기 나타납니다.<br />
          아직 안 떠난 여행은 구글 캘린더에 "여행"이 들어간 일정으로 넣어두거나, 여행 탭의 <b>+ 여행 추가</b>로 만드세요.</div>`}
      ${u.status==="loading"&&E`<div class="hint sm">구글 캘린더에서 여행 일정을 찾는 중…</div>`}
      ${u.status==="error"&&E`<div class="hint sm">캘린더를 못 읽었어요 · ${u.msg}</div>`}
      ${d.calendar.length>0&&E`
        <div class="foundDivider">구글 캘린더 일정</div>
        ${d.calendar.map(k=>_(k,!1))}`}
      ${d.trips.length>0&&d.calendar.length>0&&E`<div class="foundDivider">결제 기록으로 찾은 여행</div>`}
      ${d.trips.map(k=>_(k,!1))}
      ${d.topups.length>0&&E`
        <div class="foundDivider">충전 기록으로 추정한 여행 (기간은 만든 뒤 고치세요)</div>
        ${d.topups.map(k=>_(k,!0))}`}
      ${d.singles.length>0&&E`
        <div class="foundDivider">이것도 여행인가요? (하루짜리 결제)</div>
        ${d.singles.map(k=>_(k,!0))}`}
      <div class="acts"><button class="btn ghost sm" onClick=${o}>닫기</button></div>
    </div>`}var Rn=[{key:"trip",label:"여행 기간만",pre:0,post:0},{key:"m4",label:"앞뒤 4개월",pre:120,post:120},{key:"y1",label:"앞뒤 1년",pre:365,post:365},{key:"y2",label:"앞뒤 2년",pre:730,post:730}];function ka({db:e,entries:t,trip:n,patch:s,flash:o,onClose:a}){let i=!!(n&&n.startDate&&n.startDate>oe()),[r,l]=L(i?"y1":"m4"),[u,p]=L(!1),c=Rn.find(K=>K.key===r)||Rn[1],d=!n||!n.startDate||!n.endDate,m=U(()=>Vt(t,n,{allTrips:e.trips,preDays:c.pre,postDays:c.post,wide:u,settings:e.settings}),[t,n,e.trips,c,u,e.settings]),g=U(()=>t.filter(K=>n&&K.tripId===n.id),[t,n]),h=U(()=>new Set(m.reimb.map(K=>K.id)),[m]),y=U(()=>{let K=new Map;for(let B of[...g,...m.inside,...m.booked,...m.reimb])K.set(B.id,B);return Array.from(K.values()).sort((B,j)=>B.date<j.date?-1:1)},[g,m]),v=K=>!!K.reimbFrom||h.has(K.id),$=K=>K.transferKind==="welfare",_=y.filter(K=>!v(K)),S=y.filter(v),[k,D]=L(()=>{let K={};for(let B of y)K[B.id]=!!n&&B.tripId===n.id;return K}),x=K=>D(B=>{let j={...B};for(let de of _)j[de.id]=K==="all"?!0:K==="none"?!1:de.date>=n.startDate&&de.date<=n.endDate;return j}),I=y.filter(K=>k[K.id]),N=I.filter(K=>!$(K)).reduce((K,B)=>K+(v(B)||B.isRefund?-B.amount:B.amount),0),H=I.filter($).reduce((K,B)=>K+(B.isRefund?-B.amount:B.amount),0),W=I.length,q=()=>{let K=Date.now();s(B=>{B.entries=B.entries.map(j=>{if(!(j.id in k))return j;if(!!k[j.id])return h.has(j.id)&&!j.reimbFrom?{...j,tripId:n.id,type:"expense",isRefund:!0,category:"travel",transferKind:null,status:"confirmed",needsCheck:!1,reimbFrom:{type:j.type,transferKind:j.transferKind??null,category:j.category,status:j.status,isRefund:!!j.isRefund},updatedAt:K,dirty:!0}:j.tripId===n.id?j:{...j,tripId:n.id,updatedAt:K,dirty:!0};if(j.tripId!==n.id)return j;if(j.reimbFrom){let{reimbFrom:fe,...M}=j;return{...M,...fe,tripId:null,updatedAt:K,dirty:!0}}return{...j,tripId:null,updatedAt:K,dirty:!0}})}),o(`${W}건으로 정리했어요`),a()},Y=K=>E`
    <label class=${"pickRow"+(k[K.id]?" on":"")} key=${K.id}>
      <input type="checkbox" checked=${!!k[K.id]} onChange=${()=>D(B=>({...B,[K.id]:!B[K.id]}))} />
      ${K.date.slice(0,4)===n.startDate.slice(0,4)?E`<span class="pickDate">${K.date.slice(5)}</span>`:E`<span class="pickDate long">${K.date.slice(2).replace(/-/g,".")}</span>`}
      <span class="pickMemo">${K.memo}
        ${!v(K)&&K.date<n.startDate?E`<span class="pickTag"> 사전결제</span>`:""}
        ${!v(K)&&K.date>n.endDate?E`<span class="pickTag"> 여행 후</span>`:""}
        ${$(K)?E`<span class="pickTag welfare"> 복지카드 · 합계 별도</span>`:""}
        ${K.currency&&K.currency!=="KRW"?E`<span class="pickTag"> ${K.currency}</span>`:""}
      </span>
      <span class=${"pickAmt"+(v(K)?" reimb":"")}>${v(K)?"−":""}₩${F(K.amount)}</span>
    </label>`;return d?E`
      <div class="card">
        <div class="cardLabel">${n?n.name:"여행"} · 항목 조정</div>
        <div class="empty">이 여행은 기간이 없어서 찾을 수 없어요.<br />아래 여행 정보에서 <b>기간</b>을 넣어주세요.</div>
        <div class="acts"><button class="btn ghost sm" onClick=${a}>닫기</button></div>
      </div>`:E`
    <div class="card">
      <div class="cardLabel">${n.name} · 항목 조정</div>
      <div class="hint sm">여행 기간 안팎의 결제를 모아 보여줍니다. 체크로 넣고 빼세요.${i?" 아직 안 떠난 여행이라 1년 앞까지 찾습니다.":""}</div>
      <div class="row wrap" style="margin-top:8px">
        ${Rn.map(K=>E`
          <button key=${K.key} class=${"tag"+(r===K.key?" on":"")} onClick=${()=>l(K.key)}>${K.label}</button>`)}
      </div>
      <div class="row wrap" style="margin-top:6px">
        <button class=${"tag"+(u?" on":"")} onClick=${()=>p(!u)}>
          ${u?"모든 지출 보기":"여행 관련만 보기"}
        </button>
        <span class="hint sm">항공·숙박 말고 다른 항목도 찾으려면 켜세요</span>
      </div>
      <div class="foundTop">
        <span class="foundName">${W}건</span>
        <span class="foundTotal">₩${F(N)}</span>
      </div>
      ${H!==0&&E`<div class="foundSub">복지카드 ₩${F(H)}는 따로 셉니다 (위 금액에 안 들어감)</div>`}
      <div class="row wrap" style="margin:8px 0">
        <button class="tag" onClick=${()=>x("all")}>전부 선택</button>
        <button class="tag" onClick=${()=>x("inside")}>기간 안만</button>
        <button class="tag" onClick=${()=>x("none")}>전부 해제</button>
      </div>
      <div class="pickList">
        ${_.length===0&&E`<div class="empty">조정할 항목이 없어요.<br />기간을 넓히거나 '여행 관련만 보기'를 눌러 모든 지출을 보세요.</div>`}
        ${_.map(Y)}
        ${S.length>0&&E`
          <div class="pickHead">받은 돈 — 같이 가는 사람이 보내준 정산금이면 체크 (여행 경비에서 빠져요)</div>
          ${S.map(Y)}`}
      </div>
      <div class="acts">
        <button class="btn ghost sm" onClick=${a}>취소</button>
        <button class="btn primary sm" onClick=${q}>저장</button>
      </div>
    </div>`}function wa({db:e,carId:t,patch:n,flash:s,onClose:o,onAddEntry:a}){let[i,r]=L(""),[l,u]=L(null),[p,c]=L({}),[d,m]=L(!0),g=e.maintenance.filter(v=>v.carId===t),h=v=>{let $=ra(v);if(!$.items.length){s("정비 항목을 찾지 못했어요");return}u($);let _={};for(let S of $.items)_[S.label]=!0;c(_)},y=()=>{let v=l.items.filter($=>p[$.label]);if(!v.length){s("고른 항목이 없어요");return}n($=>{$.maintenance=$.maintenance.map(_=>_.carId!==t||!v.find(k=>k.label===_.label)?_:{..._,lastDate:l.date,lastMileage:l.mileage??_.lastMileage});for(let _ of v)$.maintenance.some(S=>S.carId===t&&S.label===_.label)||($.maintenance=[...$.maintenance,{id:Ve(),carId:t,label:_.label,intervalKm:null,intervalMonths:null,lastDate:l.date,lastMileage:l.mileage??null}]);l.mileage&&($.mileageLogs=[{id:Ve(),carId:t,date:l.date,mileage:l.mileage},...$.mileageLogs])}),d&&l.total>0&&a({date:l.date,type:"expense",category:"transport",amount:l.total,memo:`정비 · ${v.map($=>$.label).join(", ")}`.slice(0,40),normKey:z("정비"),carId:t,paymentMethod:"card",source:"receipt",confidence:1}),s(`정비 ${v.length}건을 기록했어요`),r(""),u(null),o()};return E`
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
        onInput=${v=>r(v.target.value)}
        onPaste=${v=>{let $=v.clipboardData?v.clipboardData.getData("text"):"";$&&(r($),setTimeout(()=>h($),0))}} />

      ${l&&E`
        <div class="quoteHead">
          ${l.date}
          ${l.mileage?` · ${l.mileage.toLocaleString()}km`:" · 주행거리 못 찾음"}
          ${l.total?` · 합계 ₩${F(l.total)}`:""}
        </div>
        <div class="pickList">
          ${l.items.map(v=>{let $=g.some(_=>_.label===v.label);return E`
              <label class=${"pickRow"+(p[v.label]?" on":"")} key=${v.label}>
                <input type="checkbox" checked=${!!p[v.label]}
                  onChange=${()=>c(_=>({..._,[v.label]:!_[v.label]}))} />
                <span class="pickMemo">${v.label}${$?"":E`<span class="pickTag"> 새 항목</span>`}</span>
                <span class="pickAmt">${v.amount?`₩${F(v.amount)}`:""}</span>
              </label>`})}
        </div>
        <div class="row wrap" style="margin-top:8px">
          <button class=${"tag"+(d?" on":"")} onClick=${()=>m(!d)}>
            ${d?"지출로도 기록":"이력만 남기기"}
          </button>
          ${d&&l.total>0&&E`<span class="hint sm">₩${F(l.total)}이 이 차량 지출로 들어갑니다</span>`}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${o}>닫기</button>
        ${!l&&E`<button class="btn primary sm" disabled=${!i.trim()} onClick=${()=>h(i)}>읽기</button>`}
        ${l&&E`<button class="btn primary sm" onClick=${y}>이력에 반영</button>`}
      </div>
    </div>`}var ge=Le.bind(Re),Si=[{key:"variable",label:"변동비",color:"#8A6D3B"},{key:"fixed",label:"고정비",color:"#6B5A7A"},{key:"family",label:"가족 송금",color:"#5A7A8A"},{key:"familyExtra",label:"별도 송금",color:"#8A5A3B"},{key:"travel",label:"여행",color:"#3E7A6B"},{key:"cash",label:"현금",color:"#8A8A8A"}],xa=e=>{let t=Math.abs(e);return t>=1e8?`${(e/1e8).toFixed(1)}억`:t>=1e4?`${Math.round(e/1e4).toLocaleString()}만`:F(e)};function Ai(e){return e.category==="family"?e.isExtra?"familyExtra":"family":e.category==="travel"?"travel":e.fixedId?"fixed":e.paymentMethod==="cash"?"cash":"variable"}function Kn(e){return!(e.deleted||e.type!=="expense"||e.transferKind&&e.transferKind!=="external")}var Tn=e=>e.isRefund?-e.amount:e.amount;function Ii({entries:e,range:t}){let n=U(()=>{let a={};for(let l of e){if(!Kn(l))continue;let u=Ai(l);a[u]=(a[u]||0)+Tn(l)}let i=Si.map(l=>({...l,value:a[l.key]||0})).filter(l=>l.value>0),r=i.reduce((l,u)=>l+u.value,0);return{rows:i.sort((l,u)=>u.value-l.value),total:r}},[e]);if(!n.total)return ge`<div class="empty">이 기간 지출이 없어요.</div>`;let s=0,o=n.rows.map(a=>{let i=s;return s+=a.value/n.total,{...a,from:i,to:s}});return ge`
    <div class="chartWrap">
      <div class="donutRow">
        <svg viewBox="0 0 42 42" class="donut" role="img" aria-label="항목별 지출 비중">
          ${o.map(a=>{let i=(a.to-a.from)*100;return ge`<circle key=${a.key} cx="21" cy="21" r="15.9" fill="none"
              stroke=${a.color} stroke-width="7"
              stroke-dasharray=${`${i} ${100-i}`}
              stroke-dashoffset=${`${25-a.from*100}`} />`})}
          <text x="21" y="20" class="donutTop">지출</text>
          <text x="21" y="25.5" class="donutNum">${xa(n.total)}</text>
        </svg>
        <div class="legend">
          ${o.map(a=>ge`
            <div class="legendRow" key=${a.key}>
              <span class="legendDot" style=${`background:${a.color}`}></span>
              <span class="legendName">${a.label}</span>
              <span class="legendPct">${Math.round(a.value/n.total*100)}%</span>
              <span class="legendVal">₩${F(a.value)}</span>
            </div>`)}
        </div>
      </div>
    </div>`}function Mi({all:e,months:t=6}){let n=U(()=>{let o=oe().slice(0,7),a=[],[i,r]=o.split("-").map(Number);for(let c=t-1;c>=0;c--){let d=new Date(i,r-1-c,1);a.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`)}let l=Object.fromEntries(a.map(c=>[c,{income:0,expense:0}]));for(let c of e){let d=c.date.slice(0,7);l[d]&&(c.type==="income"&&!c.deleted?l[d].income+=c.amount:Kn(c)&&(l[d].expense+=Tn(c)))}let u=a.map(c=>({key:c,label:c.slice(5)+"월",...l[c]})),p=Math.max(1,...u.map(c=>Math.max(c.income,c.expense)));return{rows:u,peak:p}},[e,t]),s=96;return ge`
    <div class="chartWrap">
      <div class="barChart">
        ${n.rows.map(o=>{let a=Math.round(o.income/n.peak*s),i=Math.round(o.expense/n.peak*s),r=o.income-o.expense;return ge`
            <div class="barCol" key=${o.key}>
              <div class="barPair" style=${`height:${s}px`}>
                <div class="bar income" style=${`height:${a}px`} title=${`수입 ${F(o.income)}`}></div>
                <div class="bar expense" style=${`height:${i}px`} title=${`지출 ${F(o.expense)}`}></div>
              </div>
              <div class="barLabel">${o.label}</div>
              <div class=${"barDiff"+(r<0?" minus":"")}>
                ${o.income||o.expense?`${r<0?"−":"+"}${xa(Math.abs(r))}`:""}
              </div>
            </div>`})}
      </div>
      <div class="legendInline">
        <span><span class="legendDot" style="background:#3D6B4F"></span>수입</span>
        <span><span class="legendDot" style="background:#B23A24"></span>지출</span>
      </div>
    </div>`}function Ri({entries:e}){let t=U(()=>{let n={};for(let i of e)Kn(i)&&(n[i.category]=(n[i.category]||0)+Tn(i));let s=Object.entries(n).map(([i,r])=>({key:i,label:ze[i]?.label||i,color:ze[i]?.color||"#999",value:r})).filter(i=>i.value>0).sort((i,r)=>r.value-i.value),o=s.length?s[0].value:1,a=s.reduce((i,r)=>i+r.value,0);return{rows:s,peak:o,total:a}},[e]);return t.rows.length?ge`
    <div class="chartWrap">
      ${t.rows.map(n=>ge`
        <div class="catBarRow" key=${n.key}>
          <span class="catBarName">${n.label}</span>
          <div class="catBarTrack">
            <div class="catBarFill" style=${`width:${Math.max(2,n.value/t.peak*100)}%;background:${n.color}`}></div>
          </div>
          <span class="catBarVal">₩${F(n.value)}</span>
        </div>`)}
      <div class="catBarFoot">합계 ₩${F(t.total)}</div>
    </div>`:ge`<div class="empty">이 기간 지출이 없어요.</div>`}function Ca({entries:e,all:t}){let[n,s]=L("axis");return ge`
    <div class="stats">
      <div class="statTabs">
        <button class=${"statTab"+(n==="axis"?" on":"")} onClick=${()=>s("axis")}>항목별</button>
        <button class=${"statTab"+(n==="month"?" on":"")} onClick=${()=>s("month")}>월별 추이</button>
        <button class=${"statTab"+(n==="cat"?" on":"")} onClick=${()=>s("cat")}>카테고리</button>
      </div>
      ${n==="axis"&&ge`<${Ii} entries=${e} />`}
      ${n==="month"&&ge`<${Mi} all=${t} />`}
      ${n==="cat"&&ge`<${Ri} entries=${e} />`}
    </div>`}var $e=Le.bind(Re),Sa=[{key:"variable",label:"변동비",color:"#8A6D3B"},{key:"fixed",label:"고정비",color:"#6B5A7A"},{key:"family",label:"가족 송금",color:"#5A7A8A"},{key:"familyExtra",label:"별도 송금",color:"#8A5A3B"},{key:"travel",label:"여행",color:"#3E7A6B"},{key:"cash",label:"현금",color:"#8A8A8A"}],Ki=e=>!e.deleted&&e.type==="expense"&&(!e.transferKind||e.transferKind==="external"),Da=e=>e.isRefund?-e.amount:e.amount;function Ti(e){return e.category==="family"?e.isExtra?"familyExtra":"family":e.category==="travel"?"travel":e.fixedId?"fixed":e.paymentMethod==="cash"?"cash":"variable"}function En(e,t,n){let s=e.filter(p=>p.date>=t&&p.date<=n),o={},a={},i={},r=0,l=0,u=0;for(let p of s){if(p.type==="income"&&!p.deleted){r+=p.amount;continue}if(p.deleted)continue;if(p.transferKind==="welfare"){u+=Da(p);continue}if(!Ki(p))continue;let c=Da(p);l+=c;let d=Ti(p);o[d]=(o[d]||0)+c,a[p.category]=(a[p.category]||0)+c;let m=p.normKey||p.memo||"";m&&(i[m]||(i[m]={name:p.memo,total:0,count:0}),i[m].total+=c,i[m].count+=1)}return{from:t,to:n,income:r,expense:l,welfare:u,axes:o,cats:a,merchants:i,count:s.length}}var Aa=(e,t)=>t?Math.round((e-t)/t*100):e?null:0,Ln=({now:e,before:t,invert:n})=>{if(t==null)return null;let s=e-t;if(!s)return $e`<span class="dl same">변화 없음</span>`;let o=s>0,a=n?!o:o,i=Aa(e,t);return $e`
    <span class=${"dl "+(a?"bad":"good")}>
      ${o?"▲":"▼"} ${F(Math.abs(s))}${i!==null?` (${Math.abs(i)}%)`:""}
    </span>`},Bn=(e,t)=>new Date(e,t,0).getDate(),Fe=e=>String(e).padStart(2,"0");function Ei(e,t){let[n,s]=t.split("-").map(Number);if(e==="month"){let i={from:`${t}-01`,to:`${t}-${Fe(Bn(n,s))}`,label:`${n}년 ${s}월`},r=new Date(n,s-2,1),l=r.getFullYear(),u=r.getMonth()+1,p={from:`${l}-${Fe(u)}-01`,to:`${l}-${Fe(u)}-${Fe(Bn(l,u))}`,label:`${u}월`},c={from:`${n-1}-${Fe(s)}-01`,to:`${n-1}-${Fe(s)}-${Fe(Bn(n-1,s))}`,label:`작년 ${s}월`};return{cur:i,prev:p,lastYear:c}}let o={from:`${n}-01-01`,to:`${n}-12-31`,label:`${n}년`},a={from:`${n-1}-01-01`,to:`${n-1}-12-31`,label:`${n-1}년`};return{cur:o,prev:a,lastYear:null}}function Li(e,t,n){let s=[];if(!t||!t.count)return s;for(let r of Sa){let l=e.axes[r.key]||0,u=t.axes[r.key]||0,p=l-u;if(Math.abs(p)<1e5)continue;let c=Aa(l,u);u===0&&l>0?s.push({kind:"new",text:`${r.label}가 새로 ${F(l)}원 발생했습니다`}):l===0&&u>0?s.push({kind:"gone",text:`${r.label} ${F(u)}원이 이번에는 없습니다`}):c!==null&&Math.abs(c)>=20&&s.push({kind:p>0?"up":"down",text:`${r.label}가 ${n}보다 ${F(Math.abs(p))}원 ${p>0?"늘었습니다":"줄었습니다"} (${Math.abs(c)}%)`})}let o=[],a=new Set([...Object.keys(e.cats),...Object.keys(t.cats)]);for(let r of a){let l=(e.cats[r]||0)-(t.cats[r]||0);Math.abs(l)>=15e4&&o.push({k:r,d:l})}o.sort((r,l)=>Math.abs(l.d)-Math.abs(r.d));for(let r of o.slice(0,3)){let l=ze[r.k]?.label||r.k;s.push({kind:r.d>0?"up":"down",text:`${l}가 ${F(Math.abs(r.d))}원 ${r.d>0?"늘었습니다":"줄었습니다"}`})}for(let[r,l]of Object.entries(e.merchants))t.merchants[r]||l.total<3e5||s.push({kind:"new",text:`${l.name}에 ${F(l.total)}원을 썼습니다. ${n}에는 없던 지출입니다`});let i=e.income-e.expense;return e.income>0&&s.push({kind:i<0?"warn":"ok",text:i<0?`수입보다 ${F(-i)}원을 더 썼습니다`:`${F(i)}원이 남았습니다`}),s.slice(0,8)}function Ia({all:e,monthStartDay:t}){let[n,s]=L("month"),[o,a]=L(()=>oe().slice(0,7)),i=U(()=>Ei(n,o),[n,o]),r=U(()=>En(e,i.cur.from,i.cur.to),[e,i]),l=U(()=>En(e,i.prev.from,i.prev.to),[e,i]),u=U(()=>i.lastYear?En(e,i.lastYear.from,i.lastYear.to):null,[e,i]),p=l.count?l:u&&u.count?u:null,c=l.count?i.prev.label:u&&u.count?i.lastYear.label:"",d=U(()=>Li(r,p,c),[r,p,c]),m=$=>{if(n==="year"){a(`${Number(o.slice(0,4))+$}-01`);return}let[_,S]=o.split("-").map(Number),k=new Date(_,S-1+$,1);a(`${k.getFullYear()}-${Fe(k.getMonth()+1)}`)},g=Sa.map($=>({...$,now:r.axes[$.key]||0,before:p?p.axes[$.key]||0:null})).filter($=>$.now>0||($.before||0)>0),h=Math.max(1,...g.map($=>Math.max($.now,$.before||0))),y=()=>{let $=[];$.push(`${i.cur.label} 결산`),$.push(""),$.push(`수입   ${F(r.income)}원`),$.push(`지출   ${F(r.expense)}원`),$.push(`남은돈 ${F(r.income-r.expense)}원`),$.push("");for(let S of g)$.push(`${S.label.padEnd(8)} ${F(S.now)}원`);if(d.length){$.push(""),$.push(`[${c} 대비]`);for(let S of d)$.push(`· ${S.text}`)}let _=$.join(`
`);try{navigator.clipboard.writeText(_)}catch{window.prompt("복사하세요",_)}},v=r.income-r.expense;return $e`
    <div class="report">
      <div class="repTabs">
        <button class=${"statTab"+(n==="month"?" on":"")} onClick=${()=>s("month")}>월 결산</button>
        <button class=${"statTab"+(n==="year"?" on":"")} onClick=${()=>s("year")}>연 결산</button>
      </div>

      <div class="repHead">
        <button class="nav" onClick=${()=>m(-1)} aria-label="이전">‹</button>
        <span class="repTitle">${i.cur.label} 결산</span>
        <button class="nav" onClick=${()=>m(1)} aria-label="다음">›</button>
      </div>

      ${r.count===0?$e`<div class="empty">이 기간 기록이 없어요.</div>`:$e`
        <div class="repTop">
          <div class="repTopRow">
            <span>수입</span>
            <b class="inc">₩${F(r.income)}</b>
            <${Ln} now=${r.income} before=${p?p.income:null} invert=${!0} />
          </div>
          <div class="repTopRow">
            <span>지출</span>
            <b class="exp">₩${F(r.expense)}</b>
            <${Ln} now=${r.expense} before=${p?p.expense:null} />
          </div>
          <div class=${"repTopRow total"+(v<0?" minus":"")}>
            <span>${v<0?"모자란 돈":"남은 돈"}</span>
            <b>₩${F(Math.abs(v))}</b>
          </div>
        </div>

        <div class="repSection">항목별${p?$e`<span class="repBase">${c} 대비</span>`:""}</div>
        ${g.map($=>$e`
          <div class="repRow" key=${$.key}>
            <div class="repRowTop">
              <span class="repName">${$.label}</span>
              <span class="repVal">₩${F($.now)}</span>
            </div>
            <div class="repBars">
              <div class="repBarTrack">
                <div class="repBarNow" style=${`width:${$.now/h*100}%;background:${$.color}`}></div>
              </div>
              ${p&&$e`
                <div class="repBarTrack ghost">
                  <div class="repBarBefore" style=${`width:${($.before||0)/h*100}%`}></div>
                </div>`}
            </div>
            ${p&&$e`<div class="repDelta"><${Ln} now=${$.now} before=${$.before} /></div>`}
          </div>`)}

        ${r.welfare>0&&$e`
          <div class="repNoteLine">복지카드 ₩${F(r.welfare)}원은 합계에 넣지 않았습니다</div>`}

        ${d.length>0&&$e`
          <div class="repSection">특이사항</div>
          <ul class="repNotes">
            ${d.map(($,_)=>$e`
              <li class=${"repNote "+$.kind} key=${_}>${$.text}</li>`)}
          </ul>`}

        <div class="repSection">많이 쓴 곳</div>
        <ol class="repTopList">
          ${Object.values(r.merchants).sort(($,_)=>_.total-$.total).slice(0,5).map(($,_)=>$e`
            <li key=${_}>
              <span class="repName">${$.name}</span>
              <span class="repCnt">${$.count}건</span>
              <span class="repVal">₩${F($.total)}</span>
            </li>`)}
        </ol>

        <div class="acts">
          <button class="btn ghost sm" onClick=${y}>글자로 복사</button>
        </div>`}
    </div>`}var b=Le.bind(Re),{CATEGORIES:Zt,CAT_MAP:Ce,todayISO:Ae,toLocalISO:ut,formatDateLabel:pt,formatWon:X,uid:xe,parsePaste:Bi,reconcile:Nn,normKey:Xe}=bn,qe="ledger:db",Ni=6,Te={version:Ni,entries:[],trips:[],vehicles:[],maintenance:[],mileageLogs:[],accounts:[],fixedExpenses:[],categoryRules:[],favorites:[],imports:[],settings:{userName:"",monthStartDay:1,sheetUrl:"",sheetToken:"",lastSyncAt:"",incomeSources:["급여","처우개선비","상여"],excludedCounterparties:[],incomeOnlyFromSources:!0,welfareCards:["현대복지","현대카드"],investKeywords:["키움","증권","선물","미래에셋","한국투자","NH투자"],welfareLimit:0,welfarePeriodStart:"",familyTransferKeywords:["하나머니충전","하나머니 충전"],familyRegularAmount:115e4,familyAmountMin:0,familyAmountMax:0,familyExtraExcluded:!0,travelKeywords:["트래블월렛","트래블 월렛"]}};function Oi(){try{let e=localStorage.getItem(qe);if(!e)return{...Te};let t=JSON.parse(e);return{...Te,...t,settings:{...Te.settings,...t.settings||{}}}}catch(e){return console.warn("저장된 데이터를 읽지 못했습니다",e),{...Te}}}function Pi(e){try{let t=JSON.stringify(e);return localStorage.setItem(qe,t),{ok:!0,size:t.length}}catch(t){return{ok:!1,error:t}}}var ct=[{label:"타이어",intervalKm:5e4,intervalMonths:36},{label:"브레이크패드",intervalKm:4e4,intervalMonths:24},{label:"브레이크액",intervalKm:4e4,intervalMonths:24},{label:"냉각수",intervalKm:4e4,intervalMonths:24},{label:"에어컨필터",intervalKm:15e3,intervalMonths:12},{label:"배터리",intervalKm:null,intervalMonths:36},{label:"와이퍼",intervalKm:null,intervalMonths:12},{label:"자동차보험",intervalKm:null,intervalMonths:12},{label:"정기검사",intervalKm:null,intervalMonths:24}],Jt=[{label:"엔진오일",intervalKm:1e4,intervalMonths:6},{label:"오일필터",intervalKm:1e4,intervalMonths:6},{label:"에어필터",intervalKm:4e4,intervalMonths:24},{label:"미션오일",intervalKm:1e5,intervalMonths:null}],Qt=[{key:"gasoline",label:"가솔린",presets:[...Jt,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},...ct]},{key:"diesel",label:"디젤",presets:[...Jt,{label:"연료필터",intervalKm:4e4,intervalMonths:24},{label:"DPF 점검",intervalKm:1e5,intervalMonths:null},...ct]},{key:"lpg",label:"LPG",presets:[...Jt,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},{label:"LPG 필터",intervalKm:4e4,intervalMonths:24},...ct]},{key:"hybrid",label:"하이브리드",presets:[...Jt,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},{label:"구동용 배터리 점검",intervalKm:null,intervalMonths:24},...ct]},{key:"ev",label:"전기",presets:[{label:"감속기 오일",intervalKm:1e5,intervalMonths:null},{label:"고전압 배터리 점검",intervalKm:null,intervalMonths:12},...ct]}],Ka=e=>(Qt.find(t=>t.key===e)||Qt[0]).presets,Fi={ok:"양호",warning:"곧 교체",overdue:"교체 필요",unknown:"기록 필요"};function Hi(e,t){if(!e.lastDate&&e.lastMileage==null)return{status:"unknown",remKm:null,remMonths:null};let n=null,s=null;if(e.intervalKm&&e.lastMileage!=null&&t!=null&&(n=e.intervalKm-(t-e.lastMileage)),e.intervalMonths&&e.lastDate){let a=new Date(e.lastDate+"T00:00:00"),i=new Date,r=(i.getFullYear()-a.getFullYear())*12+(i.getMonth()-a.getMonth());i.getDate()<a.getDate()&&(r-=1),s=e.intervalMonths-r}let o="ok";return n!=null&&n<=0||s!=null&&s<=0?o="overdue":(n!=null&&n<=1e3||s!=null&&s<=1)&&(o="warning"),{status:o,remKm:n,remMonths:s}}function ji(e,t=1){let[n,s]=e.split("-").map(Number);if(t<=1){let i=new Date(n,s,0);return{start:`${e}-01`,end:ut(i)}}let o=new Date(n,s-2,t),a=new Date(n,s-1,t-1);return{start:ut(o),end:ut(a)}}function Pn(e){return e==="income"?"+":e==="transfer"?"":"−"}function Xt(e){let t=Date.now();return{id:xe(),date:Ae(),type:"expense",category:"etc",amount:0,memo:"",tripId:null,carId:null,currency:"",foreignAmount:null,isRefund:!1,paymentMethod:"unknown",accountId:null,fixedId:null,normKey:"",source:"manual",confidence:1,rawText:"",balanceAfter:null,transferKind:null,direction:null,createdAt:t,updatedAt:t,deleted:!1,dirty:!0,status:"confirmed",...e}}var ue=(e,t)=>n=>b`
  <svg viewBox="0 0 24 24" width=${n.size||16} height=${n.size||16} fill="none"
       stroke="currentColor" stroke-width=${n.sw||2} stroke-linecap="round" stroke-linejoin="round"
       class=${n.class||""} aria-hidden="true">${e}${t||""}</svg>`,Ui=ue(b`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`),Wi=ue(b`<polyline points="15 18 9 12 15 6"/>`),Vi=ue(b`<polyline points="9 18 15 12 9 6"/>`),qt=ue(b`<polyline points="20 6 9 17 4 12"/>`),Ta=ue(b`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),Fn=ue(b`<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.2 3.9-2 2-2-.5a.5.5 0 0 0-.5.8L5 15l1.8 2 1.3-1.5 2 .5 2-2 3.9 3.2a.5.5 0 0 0 .8-.5Z"/>`),Hn=ue(b`<path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm18 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M3 17V9l2-4h14l2 4v8"/><path d="M3 11h18"/>`),zi=ue(b`<path d="M14.7 6.3a4 4 0 0 0 5 5L21 18a2 2 0 0 1-3 3l-6.7-1.3a4 4 0 0 0-5-5L3 8a2 2 0 0 1 3-3Z"/>`),Gi=ue(b`<path d="M12 14 8 10"/><circle cx="12" cy="14" r="8"/><path d="M12 6V4"/>`),Yi=ue(b`<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.7" y2="16.7"/>`),Ji=ue(b`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`),Xi=ue(b`<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.5Z"/>`),On=ue(b`<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`),qi=ue(b`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>`),Zi=ue(b`<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>`);function Ma({value:e,onChange:t,onSave:n,onCancel:s,saveLabel:o,trips:a,vehicles:i,onCreateTrip:r,onCreateVehicle:l}){let[u,p]=L(!1),[c,d]=L(""),[m,g]=L(!1),[h,y]=L(""),v=$=>t({...e,...$});return b`
    <div class="form">
      <div class="row">
        <div class="seg">
          <button class=${"segBtn"+(e.type==="expense"?" on expense":"")}
            onClick=${()=>v({type:"expense",category:e.category==="income"?"etc":e.category})}>지출</button>
          <button class=${"segBtn"+(e.type==="income"?" on income":"")}
            onClick=${()=>v({type:"income",category:"income"})}>수입</button>
          <button class=${"segBtn"+(e.type==="transfer"?" on transfer":"")}
            onClick=${()=>v({type:"transfer",category:"etc"})}>이체</button>
        </div>
        <input type="date" class="inp date" value=${e.date} onInput=${$=>v({date:$.target.value})} />
      </div>

      ${e.type==="transfer"&&b`<div class="hint sm">본인 계좌 간 이체는 수입·지출 합계에서 빠지고 기록만 남아요.</div>`}

      <div class="row">
        <span class="won">₩</span>
        <input type="number" inputmode="numeric" class="amt" placeholder="0"
          value=${e.amount||""} onInput=${$=>v({amount:parseInt($.target.value||"0",10)})} />
      </div>

      ${e.type==="expense"&&b`
        <div class="chips">
          ${Zt.filter($=>$.key!=="income").map($=>b`
            <button key=${$.key} class=${"chip"+(e.category===$.key?" on":"")}
              style=${e.category===$.key?`background:${$.color};border-color:${$.color}`:`border-color:${$.color}55;color:${$.color}`}
              onClick=${()=>v({category:$.key})}>${$.label}</button>`)}
        </div>`}

      ${e.type==="expense"&&b`
        <div class="row wrap">
          <label class="miniLabel">결제수단</label>
          ${[["card","카드"],["account","계좌"],["cash","현금"],["unknown","미상"]].map(([$,_])=>b`
            <button key=${$} class=${"tag"+(e.paymentMethod===$?" on":"")}
              onClick=${()=>v({paymentMethod:$})}>${_}</button>`)}
          <button class=${"tag"+(e.isRefund?" on":"")} onClick=${()=>v({isRefund:!e.isRefund})}>취소·환불</button>
        </div>`}

      <div class="miniLabel">여행</div>
      <div class="chips">
        <button class=${"tag"+(e.tripId?"":" on")} onClick=${()=>v({tripId:null,currency:"",foreignAmount:null})}>일반</button>
        ${a.map($=>b`<button key=${$.id} class=${"tag"+(e.tripId===$.id?" on":"")} onClick=${()=>v({tripId:$.id})}><${Fn} size=${11} /> ${$.name}</button>`)}
        ${u?b`<span class="inline">
              <input class="inp mini" autofocus placeholder="여행 이름" value=${c}
                onInput=${$=>d($.target.value)}
                onKeyDown=${$=>{$.key==="Enter"&&c.trim()&&(v({tripId:r(c.trim(),e.date).id}),d(""),p(!1))}} />
              <button class="round" onClick=${()=>{c.trim()&&(v({tripId:r(c.trim(),e.date).id}),d(""),p(!1))}}><${qt} size=${13} /></button>
            </span>`:b`<button class="tag dash" onClick=${()=>p(!0)}>+ 새 여행</button>`}
      </div>

      <div class="miniLabel">차량</div>
      <div class="chips">
        <button class=${"tag"+(e.carId?"":" on")} onClick=${()=>v({carId:null})}>해당 없음</button>
        ${i.map($=>b`<button key=${$.id} class=${"tag"+(e.carId===$.id?" on":"")} onClick=${()=>v({carId:$.id})}><${Hn} size=${11} /> ${$.name}</button>`)}
        ${m?b`<span class="inline">
              <input class="inp mini" autofocus placeholder="차량 이름" value=${h}
                onInput=${$=>y($.target.value)}
                onKeyDown=${$=>{$.key==="Enter"&&h.trim()&&(v({carId:l(h.trim()).id}),y(""),g(!1))}} />
              <button class="round" onClick=${()=>{h.trim()&&(v({carId:l(h.trim()).id}),y(""),g(!1))}}><${qt} size=${13} /></button>
            </span>`:b`<button class="tag dash" onClick=${()=>g(!0)}>+ 새 차량</button>`}
      </div>

      ${e.tripId&&b`
        <div class="row">
          <input class="inp" placeholder="통화 (예: JPY)" value=${e.currency||""} onInput=${$=>v({currency:$.target.value})} />
          <input class="inp" type="number" placeholder="외화 금액" value=${e.foreignAmount||""}
            onInput=${$=>v({foreignAmount:$.target.value?parseFloat($.target.value):null})} />
        </div>`}

      <input class="inp" placeholder="상호 / 메모 (예: 조이텔)" value=${e.memo} onInput=${$=>v({memo:$.target.value})} />
      ${e.id&&b`
        <label class="learnRow">
          <input type="checkbox" class="entryCheck" checked=${!!e._learnMerchant}
            onChange=${$=>v({_learnMerchant:$.target.checked})} />
          <span>이 상호를 기억해서 같은 곳·같은 금액 문자에 쓰기</span>
        </label>`}

      <div class="acts">
        <button class="btn ghost" onClick=${s}><${Ta} size=${15} /> 취소</button>
        <button class="btn primary" onClick=${n} disabled=${!e.amount}><${qt} size=${15} /> ${o||"저장"}</button>
      </div>
    </div>`}function Qi({entry:e,trips:t,vehicles:n,onQuickCat:s,onEdit:o,onDelete:a,selecting:i,checked:r,onToggle:l}){let[u,p]=L(!1),c=_e(null),d=_e(!1),m=()=>{d.current=!1,c.current=setTimeout(()=>{c.current=null,o(e)},550)},g=()=>{c.current&&(clearTimeout(c.current),c.current=null,d.current||p(_=>!_))},h=()=>{d.current=!0,c.current&&(clearTimeout(c.current),c.current=null)},y=Ce[e.category],v=e.tripId&&t.find(_=>_.id===e.tripId),$=e.carId&&n.find(_=>_.id===e.carId);return i?b`
      <div class="rowWrap">
        <div class=${"entry pick"+(r?" on":"")} onClick=${()=>l(e.id)}>
          <input type="checkbox" class="entryCheck" checked=${!!r} onClick=${_=>_.stopPropagation()} onChange=${()=>l(e.id)} />
          <div class="entryMain">
            <div class="entryCat">
              ${y?y.label:"기타"}
              ${e.isRefund?b`<span class="refund"> · 취소</span>`:""}
              ${v?b`<span class="seal"> · ${v.name}</span>`:""}
              ${$?b`<span class="seal"> · ${$.name}</span>`:""}
            </div>
            <div class="entryMemo">${e.memo||"-"}</div>
          </div>
          <div class="entryAmt">
            <div class=${"amtNum "+e.type+(e.isRefund?" refunded":"")}>
              ${Pn(e.type)}₩${X(e.amount)}
            </div>
          </div>
        </div>
      </div>`:b`
    <div class="rowWrap">
      <div class=${"entry"+(e.status==="pending"?" pending":"")}
        onPointerDown=${m} onPointerUp=${g} onPointerLeave=${h} onPointerCancel=${h}>
        <span class="dot" style=${`background:${y?y.color:"#999"}`}></span>
        <div class="entryMain">
          <div class="entryCat">
            ${y?y.label:"기타"}
            ${e.isRefund?b`<span class="refund"> · 취소</span>`:""}
            ${v?b`<span class="seal"> · ${v.name}</span>`:""}
            ${$?b`<span class="seal"> · ${$.name}</span>`:""}
          </div>
          <div class="entryMemo">${e.memo||"-"}</div>
        </div>
        <div class="entryAmt">
          <div class=${"amtNum "+e.type+(e.isRefund?" refunded":"")}>
            ${Pn(e.type)}₩${X(e.amount)}
          </div>
          ${e.foreignAmount?b`<div class="fx">${e.currency} ${e.foreignAmount}</div>`:""}
        </div>
        <button class="del" onClick=${_=>{_.stopPropagation(),a(e.id)}} aria-label="삭제"><${Ui} size=${15} /></button>
      </div>
      ${u&&e.type==="expense"&&b`
        <div class="quickCat">
          ${Zt.filter(_=>_.key!=="income").map(_=>b`
            <button key=${_.key} class=${"chip sm"+(e.category===_.key?" on":"")}
              style=${e.category===_.key?`background:${_.color};border-color:${_.color}`:`border-color:${_.color}55;color:${_.color}`}
              onClick=${()=>{s(e,_.key),p(!1)}}>${_.label}</button>`)}
          <button class="chip sm dash" onClick=${()=>{p(!1),o(e)}}>자세히</button>
        </div>`}
    </div>`}function en({list:e,...t}){let n=U(()=>{let s=new Map;for(let o of e)s.has(o.date)||s.set(o.date,[]),s.get(o.date).push(o);return Array.from(s.entries())},[e]);return b`${n.map(([s,o])=>b`
    <div class="group" key=${s}>
      <div class="groupHead">${pt(s)}</div>
      ${o.map(a=>b`<${Qi} key=${a.id} entry=${a} ...${t} checked=${t.selectedIds?t.selectedIds.includes(a.id):!1} />`)}
    </div>`)}`}function er(){let[e,t]=L(Oi),[n,s]=L(""),[o,a]=L(null),[i,r]=L(null),[l,u]=L(null),p=_e(null),[c,d]=L(null),[m,g]=L("month"),[h,y]=L(""),[v,$]=L(!1),[_,S]=L(null),[k,D]=L(!1),[x,I]=L(null),[N,H]=L(null),[W,q]=L(null),[Y,K]=L(""),[B,j]=L(Ae),[de,fe]=L(null),[M,O]=L(()=>{let f=new Date;return`${f.getFullYear()}-${String(f.getMonth()+1).padStart(2,"0")}`}),[V,ne]=L({state:"idle",fails:0,msg:""}),ve=_e(e),re=_e(!1);Ke(()=>{ve.current=e},[e]),Ke(()=>{Pi(e).ok||I("저장 공간이 가득 찼어요. 설정에서 내보내기 후 정리해주세요.")},[e]);let ye=$n(async f=>{let w=ve.current;if(!(!w.settings.sheetUrl||re.current)){re.current=!0,ne(C=>({...C,state:"syncing"}));try{let C=await Fs(w);t(C.db),ne({state:"ok",fails:0,msg:""}),f&&I(`동기화 완료 · 보냄 ${C.pushed}건 · 받음 ${C.pulled}건`)}catch(C){ne(A=>({state:"error",fails:A.fails+1,msg:C.message||"연결 실패"})),f&&I(`동기화 실패: ${C.message}`)}finally{re.current=!1,setTimeout(()=>I(null),2600)}}},[]);Ke(()=>{ye(!1);let f=()=>{document.hidden||ye(!1)};document.addEventListener("visibilitychange",f),window.addEventListener("online",f);let w=setInterval(()=>{document.hidden||ye(!1)},300*1e3);return()=>{document.removeEventListener("visibilitychange",f),window.removeEventListener("online",f),clearInterval(w)}},[ye]);let ft=_e(null),De=$n(()=>{clearTimeout(ft.current),ft.current=setTimeout(()=>ye(!1),2500)},[ye]),ae=f=>{I(f),setTimeout(()=>I(null),2600)},ee=f=>t(w=>{let C={...w};return f(C),C}),Z=U(()=>e.entries.filter(f=>!f.deleted),[e.entries]);Ke(()=>{if(!e.fixedExpenses.length)return;let f=Gs(e.fixedExpenses,e.entries,{}),{settled:w}=Ys(e.entries,e.fixedExpenses);!f.length&&!w.length||t(C=>{let A=C.entries;if(w.length){let R=new Set(w.map(G=>G.scheduledId)),P=new Map(w.map(G=>[G.scheduledId,G.realId]));A=A.map(G=>R.has(G.id)?{...G,deleted:!0,mergedInto:P.get(G.id),updatedAt:Date.now(),dirty:!0}:G)}let T=f.map(R=>Xt(R));return{...C,entries:[...T,...A]}})},[e.fixedExpenses,e.entries]),Ke(()=>{let f={rules:e.categoryRules||[],settings:e.settings},w=new Map;for(let C of e.entries){if(C.source!=="shortcut"||C.localized)continue;let A=da(C,f);A&&w.set(C.id,A)}w.size&&(t(C=>({...C,entries:C.entries.map(A=>{let T=w.get(A.id);if(!T||A.localized)return A;let R=An({...A,...T},C.categoryRules||[]),P=In(R,C.trips||[]);return P&&(R={...R,tripId:P}),{...R,updatedAt:Date.now(),dirty:!0}})})),De())},[e.entries]);let mt=(f,w)=>{let C=ve.current,A=f.map(T=>{let R=An(T,C.categoryRules||[]),P=R.source==="statement",G=R.needsCheck||!P&&(R.confidence??1)<.6,J=In(R,C.trips||[]);return Xt({...R,...J?{tripId:J}:{},...w?{importId:w.id}:{},status:G?"pending":"confirmed"})});return ee(T=>{if(T.entries=[...A,...T.entries],w&&A.length){let R={id:w.id,at:Date.now(),name:w.name||"가져오기",count:A.length,undone:!1};T.imports=[R,...T.imports||[]].slice(0,20)}}),De(),A},Ze=(f,w)=>(De(),ee(C=>{C.entries=C.entries.map(A=>A.id===f?{...A,...w,updatedAt:Date.now(),dirty:!0}:A)})),Ea=f=>(De(),ee(w=>{w.entries=w.entries.map(C=>C.id===f?{...C,deleted:!0,updatedAt:Date.now(),dirty:!0}:C)})),[me,nt]=L(null),tn=_e(null),nn=(f,w,C,A)=>{let T=f.findIndex(R=>R.normKey===w);return T>=0?f.map((R,P)=>P===T?{...R,category:C,kind:null,hitCount:(R.hitCount||1)+A}:R):[...f,{id:xe(),normKey:w,category:C,hitCount:A,learnedAt:Date.now()}]},jn=f=>({id:f.id,category:f.category,status:f.status,confidence:f.confidence,catBy:f.catBy,transferKind:f.transferKind}),ht=(f,w,C)=>({...f,category:w,confidence:1,status:f.needsCheck?f.status:"confirmed",transferKind:f.transferKind==="verify"&&f.type==="expense"?null:f.transferKind,updatedAt:Date.now(),dirty:!0,...C}),sn=f=>{if(clearTimeout(tn.current),!f.applied&&!f.similar.length){nt(null);return}nt(f),f.similar.length||(tn.current=setTimeout(()=>nt(null),9e3))},an=(f,w)=>{let C=ve.current,A=f.normKey||Xe(f.memo),{same:T,similar:R}=la(C.entries,f,w),P=new Set(T.map(J=>J.id)),G=A.length>=2?[{key:A,prev:(C.categoryRules||[]).find(J=>J.normKey===A)||null}]:[];ee(J=>{J.entries=J.entries.map(ce=>ce.id===f.id?ht(ce,w,{status:"confirmed",catBy:"user"}):P.has(ce.id)?ht(ce,w):ce),A.length>=2&&(J.categoryRules=nn(J.categoryRules||[],A,w,1))}),De(),sn({category:w,applied:T.length,undo:[f,...T].map(jn),rules:G,similar:R})},La=()=>{let f=me;if(!f)return;let w=new Set(f.similar.map(R=>R.id)),C=[...new Set(f.similar.map(R=>R.normKey||Xe(R.memo)).filter(R=>R.length>=2))],A=ve.current,T=C.filter(R=>!f.rules.some(P=>P.key===R)).map(R=>({key:R,prev:(A.categoryRules||[]).find(P=>P.normKey===R)||null}));ee(R=>{R.entries=R.entries.map(G=>w.has(G.id)?ht(G,f.category):G);let P=R.categoryRules||[];for(let G of C)P=nn(P,G,f.category,1);R.categoryRules=P}),De(),sn({...f,applied:f.applied+f.similar.length,undo:[...f.undo,...f.similar.map(jn)],rules:[...f.rules,...T],similar:[]})},Ba=()=>{let f=me;if(!f)return;let w=new Map(f.undo.map(C=>[C.id,C]));ee(C=>{C.entries=C.entries.map(T=>w.has(T.id)?{...T,...w.get(T.id),updatedAt:Date.now(),dirty:!0}:T);let A=C.categoryRules||[];for(let T of f.rules)A=A.filter(R=>R.normKey!==T.key),T.prev&&(A=[...A,T.prev]);C.categoryRules=A}),De(),clearTimeout(tn.current),nt(null),ae("되돌렸어요")},Na=f=>{let w=f.filter(T=>!T.error);if(!w.length)return 0;let{changes:C}=zt(ve.current.entries,w),A=new Set(w.map(T=>T.normKey));return ee(T=>{T.categoryRules=[...(T.categoryRules||[]).filter(R=>!A.has(R.normKey)),...w.map(R=>({id:xe(),normKey:R.normKey,name:R.name,category:R.category,kind:R.kind||null,hitCount:1,learnedAt:Date.now(),source:"paste"}))],T.entries=T.entries.map(R=>C.has(R.id)?{...R,...C.get(R.id),confidence:1,status:R.needsCheck?R.status:"confirmed",updatedAt:Date.now(),dirty:!0}:R)}),De(),C.size},Oa=f=>ee(w=>{w.fixedExpenses=[...w.fixedExpenses,...f.map(C=>({id:xe(),name:C.name,normKey:C.normKey,amount:C.amount,amountVariable:C.amountVariable,dayOfMonth:C.dayOfMonth,category:C.category,accountId:C.accountId,paymentMethod:C.paymentMethod,status:"active",source:"learned",learnedAt:Date.now()}))]}),Pa=(f,w)=>{let C=new Set(f.ids);ee(A=>{A.entries=A.entries.map(T=>C.has(T.id)?ht(T,w,{status:"confirmed"}):T),f.normKey&&f.normKey!=="__none"&&(A.categoryRules=nn(A.categoryRules||[],f.normKey,w,f.count))}),De()},Un=U(()=>e.entries.filter(f=>!f.deleted&&!/^\d{4}-\d{2}-\d{2}$/.test(String(f.date||""))),[e.entries]),Fa=()=>{let f=0,w=0;ee(C=>{C.entries=C.entries.map(A=>{if(/^\d{4}-\d{2}-\d{2}$/.test(String(A.date||"")))return A;let T=String(A.date||""),R=T.match(/^(\d{4})-(\d{2})-(\d{2})/),P=R?`${R[1]}-${R[2]}-${R[3]}`:null;if(!P){let G=new Date(T);isNaN(G)||(P=ut(G))}return P?(f++,{...A,date:P,updatedAt:Date.now(),dirty:!0}):(w++,{...A,deleted:!0,updatedAt:Date.now(),dirty:!0})})}),ae(`날짜 ${f}건을 고쳤어요${w?` · ${w}건은 못 살려서 지웠어요`:""}`)},Ha=f=>{let w=String(f??"").trim();w&&ee(C=>{let A=C.settings.excludedCounterparties||[];A.includes(w)||(C.settings={...C.settings,excludedCounterparties:[...A,w]})})},Wn=(f,w)=>{let C=/^\d{4}-\d{2}-\d{2}$/.test(String(w||""))?w:Ae(),A={id:xe(),name:f,startDate:C,endDate:C,createdAt:Date.now()};return ee(T=>{T.trips=[...T.trips,A]}),A},on=(f,w="gasoline")=>{let C={id:xe(),name:f,fuel:w,createdAt:Date.now()};return ee(A=>{A.vehicles=[...A.vehicles,C],A.maintenance=[...A.maintenance,...Ka(w).map(T=>({id:xe(),carId:C.id,label:T.label,intervalKm:T.intervalKm,intervalMonths:T.intervalMonths,lastDate:null,lastMileage:null}))]}),C},[pe,He]=L({on:!1,ids:[]}),ja=f=>He(w=>({...w,ids:w.ids.includes(f)?w.ids.filter(C=>C!==f):[...w.ids,f]})),st=(f,w)=>{let C=new Set(pe.ids);C.size&&(ee(A=>{A.entries=A.entries.map(T=>C.has(T.id)?{...T,...f(T),updatedAt:Date.now(),dirty:!0}:T)}),ae(`${C.size}건 ${w}`),He({on:!1,ids:[]}))},Ua=f=>st(()=>({tripId:f==="__none"?null:f}),f==="__none"?"여행에서 뺐어요":`${(e.trips.find(w=>w.id===f)||{}).name||"여행"}에 넣었어요`),Wa=f=>st(()=>({carId:f==="__none"?null:f}),f==="__none"?"차량을 뺐어요":`${(e.vehicles.find(w=>w.id===f)||{}).name||"차량"}으로 지정했어요`),Va=f=>st(()=>({category:f,type:"expense",status:"confirmed",catBy:"user",confidence:1}),`${(Ce[f]||{}).label||""}(으)로 바꿨어요`),za=()=>st(()=>({type:"transfer",transferKind:"excluded",status:"confirmed",confidence:1}),"합계에서 뺐어요"),Ga=()=>st(()=>({deleted:!0}),"지웠어요"),Ya=f=>{let w=0;ee(C=>{C.entries=C.entries.map(A=>A.importId!==f.id||A.deleted?A:(w++,{...A,deleted:!0,updatedAt:Date.now(),dirty:!0})),C.imports=(C.imports||[]).map(A=>A.id===f.id?{...A,undone:!0}:A)}),De(),ae(`${f.name} · ${w}건을 되돌렸어요`)},Ja=(f,w)=>{let C=f.normKey||Xe(f.memo),A=0;ee(R=>{R.entries=R.entries.map(P=>{if(P.deleted||P.carId)return P;let G=P.normKey||Xe(P.memo);return P.id!==f.id&&!(C&&G&&C===G)?P:(A++,{...P,carId:w,carBy:"user",updatedAt:Date.now(),dirty:!0})})});let T=(e.vehicles.find(R=>R.id===w)||{}).name||"차량";ae(A>1?`${T}으로 ${A}건 지정했어요 (같은 곳 기록 포함)`:`${T}으로 지정했어요`)},Vn=f=>{if(!f.trim())return;let w=f.split(/\r?\n/).filter(A=>A.trim()).map(A=>A.split("	"));if(w.length>1&&w.some(A=>A.length>=6)&&Gt(w)){let A=Yt(w,{rules:e.categoryRules,settings:e.settings});if(A.entries.length){let T=new Set(Z.map(G=>G.sourceHash).filter(Boolean)),R=A.entries.filter(G=>!T.has(G.sourceHash)),P=Nn(R,Z);r({entries:R,gaps:[],...P,picked:P.added.map(()=>!0),fromTravelWallet:A.entries.length}),a(null);return}}let C=Bi(f,{rules:e.categoryRules,settings:e.settings});if(C.mode==="multi"){let A=Nn(C.entries,Z);r({...C,...A,picked:A.added.map(()=>!0)}),a(null)}else a(Xt(C.entries[0])),r(null)},Xa=async f=>{let w=Array.from(f.target&&f.target.files||[]).filter(C=>!C.type||C.type.startsWith("image/"));if(f.target&&(f.target.value=""),!!w.length){u({text:"글자 인식 준비 중… (처음 한 번은 도구를 받느라 조금 걸려요)"});try{let C=await Us(w,R=>{R.status==="recognizing text"&&u({text:`캡처 읽는 중 ${R.page}/${R.pages} · ${Math.round((R.progress||0)*100)}%`})}),A=Vs(C,{rules:e.categoryRules,settings:e.settings});if(u(null),!A.entries.length){ae(A.skippedNoKrw?"원화 금액이 보이는 부분까지 함께 캡처해주세요":"캡처에서 내역을 찾지 못했어요. 가맹점과 금액이 보이게 잘라주세요");return}let T=Nn(A.entries,Z);r({...A,...T,picked:T.added.map(()=>!0),fromCapture:w.length}),a(null)}catch(C){u(null),ae(String(C&&C.message||C))}}},qa=f=>{let w=f.clipboardData?f.clipboardData.getData("text"):"";w&&w.trim()&&(s(w),setTimeout(()=>Vn(w),0))},gt=U(()=>!o||!o.amount?null:Z.find(f=>f.date===o.date&&f.amount===o.amount&&f.type===o.type)||null,[o,Z]),Za=()=>{!o||!o.amount||(mt([o]),a(null),s(""),ae("기록했어요"))},Qa=()=>{let f=i.added.filter((C,A)=>i.picked[A]);f.length&&mt(f);let w=i.merged.length;r(null),s(""),ae(`${f.length}건 기록${w?` · 중복 ${w}건 제외`:""}`)},rn=U(()=>ji(M,e.settings.monthStartDay),[M,e.settings.monthStartDay]),Ie=U(()=>Z.filter(f=>f.date>=rn.start&&f.date<=rn.end).sort((f,w)=>f.date<w.date?1:f.date>w.date?-1:w.createdAt-f.createdAt),[Z,rn]),be=U(()=>{let f=0,w=0,C=0,A=0,T=0,R=0,P=0,G=0;for(let J of Ie){if(J.type==="income"){P+=J.amount;continue}if(J.type!=="expense")continue;let ce=J.isRefund?-J.amount:J.amount;if(J.transferKind==="welfare"){G+=ce;continue}J.transferKind&&J.transferKind!=="external"||(J.category==="family"?J.isExtra?A+=ce:C+=ce:J.category==="travel"?T+=ce:J.fixedId?w+=ce:J.paymentMethod==="cash"?R+=ce:f+=ce)}return{variable:f,fixed:w,family:C,familyExtra:A,travel:T,cash:R,welfare:G,income:P,expense:f+w+C+A+T+R}},[Ie]),je=U(()=>Z.filter(f=>f.status==="pending"),[Z]);Ke(()=>{m==="trip"&&!N&&e.trips.length&&H(e.trips[0].id),m==="car"&&!W&&e.vehicles.length&&q(e.vehicles[0].id)},[m,N,W,e.trips,e.vehicles]);let le=U(()=>{let f=e.settings.welfarePeriodStart||`${new Date().getFullYear()}-01`,w=Z.filter(R=>R.transferKind==="welfare"&&R.date>=`${f}-01`).sort((R,P)=>R.date<P.date?1:-1),C=w.reduce((R,P)=>R+(P.isRefund?-P.amount:P.amount),0),A=w.find(R=>R.welfareBalance!=null),T=e.settings.welfareLimit||0;return{used:C,count:w.length,start:f,limit:T,left:A?A.welfareBalance:T?T-C:null,fromSms:!!A,at:A?A.date:null}},[Z,e.settings.welfareLimit,e.settings.welfarePeriodStart]),Ue=U(()=>{let f=h.trim().toLowerCase();return f?Z.filter(w=>{let C=Ce[w.category]?.label||"",A=w.tripId&&e.trips.find(R=>R.id===w.tripId)?.name||"",T=w.carId&&e.vehicles.find(R=>R.id===w.carId)?.name||"";return String(w.memo??"").toLowerCase().includes(f)||C.toLowerCase().includes(f)||String(w.amount).includes(f)||A.toLowerCase().includes(f)||T.toLowerCase().includes(f)||String(w.rawText??"").toLowerCase().includes(f)||String(w.counterpartyRaw??"").toLowerCase().includes(f)||String(w.date??"").includes(f)}).sort((w,C)=>w.date<C.date?1:w.date>C.date?-1:C.createdAt-w.createdAt):[]},[Z,h,e.trips,e.vehicles]),zn=f=>{let[w,C]=M.split("-").map(Number),A=new Date(w,C-1+f,1);O(`${A.getFullYear()}-${String(A.getMonth()+1).padStart(2,"0")}`)},Gn=f=>{let w=e.mileageLogs.filter(C=>C.carId===f).sort((C,A)=>C.date<A.date?1:-1);return w.length?w[0].mileage:null},eo=e.vehicles.find(f=>f.id===W),to=W?Gn(W):null,at={trips:e.trips,vehicles:e.vehicles,onQuickCat:an,onEdit:f=>d({...f}),onDelete:Ea,selecting:pe.on,selectedIds:pe.ids,onToggle:ja},[no,so]=M.split("-"),ir=U(()=>Z.filter(f=>pe.ids.includes(f.id)),[Z,pe.ids]),ao=pe.on&&b`
    <div class="bulkBar">
      <div class="bulkTop">
        <b>${pe.ids.length}건</b> 골랐어요
        <button class="btn ghost sm" onClick=${()=>He({on:!1,ids:[]})}>그만두기</button>
      </div>
      ${pe.ids.length>0&&b`
        <div class="bulkActs">
          ${e.trips.length>0&&b`
            <select class="bulkSel" value="" onChange=${f=>{f.target.value&&(Ua(f.target.value),f.target.value="")}}>
              <option value="">여행에 넣기…</option>
              ${e.trips.map(f=>b`<option key=${f.id} value=${f.id}>${f.name}</option>`)}
              <option value="__none">여행에서 빼기</option>
            </select>`}
          ${e.vehicles.length>0&&b`
            <select class="bulkSel" value="" onChange=${f=>{f.target.value&&(Wa(f.target.value),f.target.value="")}}>
              <option value="">차량 지정…</option>
              ${e.vehicles.map(f=>b`<option key=${f.id} value=${f.id}>${f.name}</option>`)}
              <option value="__none">차량 해제</option>
            </select>`}
          <select class="bulkSel" value="" onChange=${f=>{f.target.value&&(Va(f.target.value),f.target.value="")}}>
            <option value="">분류 바꾸기…</option>
            ${Zt.filter(f=>f.key!=="income").map(f=>b`<option key=${f.key} value=${f.key}>${f.label}</option>`)}
          </select>
          <button class="btn ghost sm" onClick=${za}>합계에서 빼기</button>
          <button class="btn danger sm" onClick=${Ga}>삭제</button>
        </div>`}
    </div>`;return b`
    <div class="app">
      <header class="head">
        <button class="gear" onClick=${()=>$(f=>!f)} aria-label="설정"><${qi} size=${17} /></button>
        ${e.settings.sheetUrl&&b`
          <button class=${"syncDot "+V.state+(V.fails>=3?" bad":"")} onClick=${()=>ye(!0)}
            title=${V.state==="error"?V.msg:"구글시트와 맞추기"} aria-label="동기화">
            ${V.state==="syncing"?"⋯":V.fails>=3?"!":"●"}
          </button>`}
        <h1 class="title">가계부</h1>
        <div class="rule"></div>
        <div class="sub">붙여넣으면 알아서 적히는 장부</div>
      </header>

      ${v&&b`<${ar} db=${e} setDb=${t} onClose=${()=>$(!1)} flash=${ae} onSync=${()=>ye(!0)} onUndoImport=${Ya} />`}

      ${Un.length>0&&b`
        <div class="inbox">
          <div class="inboxHead"><${On} size=${14} /> 날짜가 깨진 기록 ${Un.length}건</div>
          <div class="inboxBulk">
            구글시트가 날짜 칸을 바꿔버려 생긴 문제입니다. 눌러서 되돌릴 수 있어요.
            <button class="btn primary sm" onClick=${Fa}>날짜 고치기</button>
          </div>
        </div>`}

      ${je.length>0&&b`
        <div class="inbox">
          <div class="inboxHead">
            <${Xi} size=${14} /> 확인할 항목 ${je.length}건
            ${je.length>8?b`<span class="inboxHint">아래 4건씩 처리돼요</span>`:""}
          </div>
          ${je.length>20&&b`
            <div class="inboxBulk">
              한 번에 처리하는 게 빠릅니다 — 아래 <b>분류 정리</b>에서 가맹점별로 묶어서 정할 수 있어요.
              <button class="btn ghost sm" onClick=${()=>{S("review")}}>분류 정리 열기</button>
            </div>`}
          <div class="inboxBody">
            ${je.slice(0,4).map(f=>f.direction==="in"||f.transferKind==="excluded"?b`
              <div class="inboxItem" key=${f.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${f.memo||"메모 없음"}</span>
                  <span class="inboxAmt">+₩${X(f.amount)}</span>
                </div>
                <div class="inboxSub">${pt(f.date)} · 이 입금은 수입인가요?</div>
                <div class="chips">
                  <button class="chip sm" style="border-color:#3D6B4F55;color:#3D6B4F"
                    onClick=${()=>Ze(f.id,{type:"income",category:"income",transferKind:null,status:"confirmed",confidence:1})}>수입이에요</button>
                  <button class="chip sm" style="border-color:#B23A2455;color:#B23A24"
                    onClick=${()=>Ze(f.id,{type:"expense",isRefund:!0,transferKind:null,status:"confirmed",confidence:1})}>환불이에요</button>
                  <button class="chip sm dash" onClick=${()=>Ze(f.id,{status:"confirmed"})}>수입 아님</button>
                  <button class="chip sm dash" onClick=${()=>{Ha(f.memo),Ze(f.id,{status:"confirmed"})}}>
                    ${f.memo?`${f.memo} 항상 제외`:"항상 제외"}
                  </button>
                </div>
              </div>`:b`
              <div class="inboxItem" key=${f.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${f.memo||"메모 없음"}</span>
                  <span class="inboxAmt">₩${X(f.amount)}</span>
                </div>
                <div class="inboxSub">${pt(f.date)} · 분류가 애매해요</div>
                <div class="chips">
                  ${Zt.filter(w=>w.key!=="income").slice(0,6).map(w=>b`
                    <button key=${w.key} class="chip sm" style=${`border-color:${w.color}55;color:${w.color}`}
                      onClick=${()=>an(f,w.key)}>${w.label}</button>`)}
                  <button class="chip sm dash" onClick=${()=>Ze(f.id,{status:"confirmed"})}>이대로 두기</button>
                </div>
              </div>`)}
            ${je.length>4&&b`<div class="inboxMore">외 ${je.length-4}건</div>`}
          </div>
        </div>`}

      <div class="pasteBox">
        <div class="pasteHint"><${Zi} size=${13} /> 카드 문자, 자동이체 문자, 통장 거래내역을 붙여넣거나 앱 화면 캡처를 올리세요</div>
        <textarea class="pasteArea" value=${n} onInput=${f=>s(f.target.value)} onPaste=${qa}
          placeholder=${`예) 신한카드(1234) 승인 5,000원 09/09 스타벅스강남점

또는 통장 거래내역 여러 줄을 통째로`}></textarea>
        <div class="pasteActs">
          <button class="btn ghost sm" onClick=${()=>a(Xt({}))}><${Ji} size=${14} /> 직접 입력</button>
          <button class="btn ghost sm capBtn" onClick=${()=>p.current&&p.current.click()} disabled=${!!l}>캡처 올리기</button>
          <input ref=${p} type="file" accept="image/*" multiple style="display:none" onChange=${Xa} />
          <button class="btn primary sm" onClick=${()=>Vn(n)} disabled=${!n.trim()}>내역 확인</button>
        </div>
        ${l&&b`<div class="ocrState">${l.text}</div>`}
      </div>

      ${o&&b`
        <div class="card">
          <div class="cardLabel">아래 내용으로 기록할게요</div>
          ${gt&&b`<div class="warn"><${On} size=${13} /> ${pt(gt.date)}에 같은 금액(₩${X(gt.amount)}) 내역이 이미 있어요 — ${gt.memo||"메모 없음"}</div>`}
          <${Ma} value=${o} onChange=${a} onSave=${Za} onCancel=${()=>a(null)}
            saveLabel="기록하기" trips=${e.trips} vehicles=${e.vehicles} onCreateTrip=${Wn} onCreateVehicle=${on} />
        </div>`}

      ${i&&b`
        <div class="card">
          <div class="cardLabel">${i.fromCapture?`캡처 ${i.fromCapture}장에서 읽은 내역`:i.fromTravelWallet?"트래블월렛 이용내역":"붙여넣은 내역"} ${i.added.length+i.merged.length+i.review.length}건</div>
          ${i.fromTravelWallet&&b`<div class="hint sm">결제·정산·현지 인출은 여행 지출로, 취소는 환불로 넣습니다.
            충전은 통장에서 이미 빠져나간 돈이라 <b>합계에서 뺍니다</b>(이중 계산 방지).</div>`}
          ${i.fromCapture&&b`<div class="hint sm">글자 인식은 틀릴 수 있어요. 가맹점·금액을 한 번 훑어보고 이상한 줄은 체크를 빼주세요.
            ${i.added.some(f=>f.dateGuessed)?" 날짜를 못 읽은 줄은 빨간 날짜 칸을 눌러 여기서 바로 고칠 수 있어요.":""}
            ${i.skippedNoKrw?` 원화 금액이 안 보인 ${i.skippedNoKrw}건은 뺐어요.`:""}</div>`}
          ${i.gaps.length>0&&b`
            <div class="warn"><${On} size=${13} /> 잔액이 이어지지 않아요. ${i.gaps[0].beforeDate} 부근에 안 보이는 거래 ₩${X(i.gaps[0].missing)}이 있어요. 조금 더 위로 스크롤해서 다시 붙여넣어 주세요.</div>`}
          <div class="multiList">
            ${i.added.map((f,w)=>b`
              <label class="multiRow" key=${w}>
                <input type="checkbox" checked=${i.picked[w]}
                  onChange=${()=>r(C=>({...C,picked:C.picked.map((A,T)=>T===w?!A:A)}))} />
                ${f.dateGuessed||f.dateFixed?b`<input type="date" class=${"multiDateFix"+(f.dateGuessed?"":" done")} value=${f.date} onClick=${C=>C.stopPropagation()}
                      onInput=${C=>{let A=C.target.value;A&&r(T=>({...T,added:T.added.map((R,P)=>P===w?{...R,date:A,dateGuessed:!1,dateFixed:!0,needsCheck:!1}:R)}))}} />`:b`<span class="multiDate">${f.date.slice(5)}</span>`}
                <span class="multiMemo">${f.memo}${f.currency?b` <span class="multiFx">${f.currency} ${f.foreignAmount}</span>`:""}</span>
                ${i.fromCapture&&b`<span class="multiCat">${f.isRefund?"취소":f.type==="income"?"수입":f.type!=="expense"?"이체":(Ce[f.category]||{}).label||"기타"}</span>`}
                <span class="multiAmt">${f.isRefund?"+":Pn(f.type)}₩${X(f.amount)}</span>
              </label>`)}
            ${i.merged.map((f,w)=>b`
              <div class="multiRow skip" key=${"m"+w}>
                <span class="multiDate">${f.incoming.date.slice(5)}</span>
                <span class="multiMemo">${f.incoming.memo}</span>
                <span class="multiAmt">중복</span>
              </div>`)}
            ${i.review.map((f,w)=>b`
              <div class="multiRow review" key=${"r"+w}>
                <span class="multiDate">${f.incoming.date.slice(5)}</span>
                <span class="multiMemo">${f.incoming.memo} · ${f.reasons.join(", ")}</span>
                <span class="multiAmt">확인</span>
              </div>`)}
          </div>
          <div class="acts">
            <button class="btn ghost" onClick=${()=>r(null)}>취소</button>
            <button class="btn primary" onClick=${Qa}>${i.picked.filter(Boolean).length}건 기록</button>
          </div>
        </div>`}

      ${c&&b`
        <div class="card">
          <div class="cardLabel">내역 수정</div>
          <${Ma} value=${c} onChange=${d}
            onSave=${()=>{let f=e.entries.find(J=>J.id===c.id),w=f&&c.type==="expense"&&f.type==="expense"&&f.category!==c.category,C=String(c.memo||"").trim(),A=!!c._learnMerchant,{category:T,_learnMerchant:R,...P}=c,G={...P,memo:C,normKey:Xe(C),counterpartyRaw:C};if(Ze(c.id,{...w?G:{...G,category:T},status:"confirmed"}),w&&an(f,T),A&&Xe(C).length>=2){let J=Xe(C);ee(ce=>{let $t=ce.categoryRules||[],vt=$t.findIndex(yt=>yt.normKey===J),Yn={id:vt>=0?$t[vt].id:xe(),normKey:J,name:C,category:T||"etc",amountHint:c.amount||null};ce.categoryRules=vt>=0?$t.map((yt,oo)=>oo===vt?{...yt,...Yn}:yt):[...$t,Yn]}),ae(`${C}을(를) 기억했어요 · 같은 금액 문자에 씁니다`)}d(null)}}
            onCancel=${()=>d(null)} saveLabel="수정 완료"
            trips=${e.trips} vehicles=${e.vehicles} onCreateTrip=${Wn} onCreateVehicle=${on} />
        </div>`}

      <div class="search">
        <${Yi} size=${14} class="searchIco" />
        <input class="searchInp" value=${h} onInput=${f=>y(f.target.value)} placeholder="검색 (메모, 문자 원문, 금액, 날짜, 여행·차량)" />
        ${h&&b`<button class="clear" onClick=${()=>y("")}><${Ta} size=${14} /></button>`}
      </div>

      <div class="toolRow">
        <button class="toolBtn" onClick=${()=>S(_==="review"?null:"review")}>분류 정리</button>
        <button class="toolBtn" onClick=${()=>S(_==="tidy"?null:"tidy")}>자동 정리</button>
        <button class="toolBtn" onClick=${()=>S(_==="import"?null:"import")}>명세서 파일</button>
      </div>

      ${_==="review"&&b`<${ga} entries=${Z} onApply=${Pa} onApplyRules=${Na}
        userName=${e.settings.userName} ruleCount=${(e.categoryRules||[]).length} onClose=${()=>S(null)} />`}
      ${_==="tidy"&&b`<${va} db=${e} entries=${Z} patch=${ee} flash=${ae} onClose=${()=>S(null)} />`}
      ${_==="import"&&b`<${ya} db=${e} entries=${e.entries} flash=${ae}
        onImport=${(f,w)=>{let C=mt(f,{id:xe(),name:w});ae(`${C.length}건 넣었어요 · 잘못됐으면 설정에서 되돌릴 수 있어요`),S(null)}}
        onClose=${()=>S(null)} />`}

      <div class="tabs">
        <button class=${"tab"+(m==="month"?" on":"")} onClick=${()=>g("month")}>월별</button>
        <button class=${"tab"+(m==="asset"?" on":"")} onClick=${()=>g("asset")}>자산</button>
        <button class=${"tab"+(m==="trip"?" on":"")} onClick=${()=>{g("trip"),!N&&e.trips.length&&H(e.trips[0].id)}}><${Fn} size=${12} /> 여행</button>
        <button class=${"tab"+(m==="car"?" on":"")} onClick=${()=>{g("car"),!W&&e.vehicles.length&&q(e.vehicles[0].id)}}><${Hn} size=${12} /> 차량</button>
      </div>

      ${h.trim()?b`<div class="results">
            <div class="resultHead">"${h.trim()}" 검색 결과 ${Ue.length}건</div>
            ${Ue.length===0?b`<div class="empty">일치하는 내역이 없어요.</div>`:b`
              <div class="listHead">
                <span class="listCount">${Ue.length}건</span>
                ${pe.on?b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:pe.ids.length===Ue.length?[]:Ue.map(f=>f.id)})}>
                      ${pe.ids.length===Ue.length?"전체 해제":"전체 고르기"}</button>`:b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:[]})}>고르기</button>`}
              </div>
              <${en} list=${Ue} ...${at} />`}
          </div>`:m==="month"?b`
          <div class="monthBar">
            <button class="nav" onClick=${()=>zn(-1)} aria-label="이전 달"><${Wi} size=${18} /></button>
            <span class="monthLabel">${no}년 ${parseInt(so,10)}월</span>
            <button class="nav" onClick=${()=>zn(1)} aria-label="다음 달"><${Vi} size=${18} /></button>
          </div>

          <div class="summaryToggle">
            <button class=${"sumTab"+(k?"":" on")} onClick=${()=>D(!1)}>숫자</button>
            <button class=${"sumTab"+(k==="chart"?" on":"")} onClick=${()=>D("chart")}>그래프</button>
            <button class=${"sumTab"+(k==="report"?" on":"")} onClick=${()=>D("report")}>결산</button>
          </div>

          ${k==="report"?b`<${Ia} all=${Z} monthStartDay=${e.settings.monthStartDay} />`:k==="chart"?b`<${Ca} entries=${Ie} all=${Z} />`:b`
          <div class="axes">
            ${[["변동비",be.variable],["고정비",be.fixed],["가족 송금",be.family],["별도 송금",be.familyExtra],["여행",be.travel],["현금",be.cash]].filter(([,f],w)=>f!==0||w===0).map(([f,w])=>b`
                <div class="axis" key=${f}>
                  <span class="axisLabel">${f}</span>
                  <span class="axisVal">₩${X(w)}</span>
                </div>`)}
            <div class="axis total">
              <span class="axisLabel">지출 합계</span>
              <span class="axisVal">₩${X(be.expense)}</span>
            </div>
            ${(be.welfare>0||le.used>0)&&b`
              <div class="axis welfare">
                <span class="axisLabel">복지카드 <span class="axisNote">합계 제외</span></span>
                <span class="axisVal">₩${X(be.welfare)}</span>
              </div>`}
            ${le.left!=null&&b`
              <div class="welfareBar">
                <div class="welfareTop">
                  <span>복지카드 남은 금액</span>
                  <b class=${le.left<0?"over":""}>₩${X(le.left)}</b>
                </div>
                ${le.limit>0&&b`
                  <div class="welfareGauge">
                    <div class="welfareFill" style=${`width:${Math.min(100,Math.max(0,le.used/le.limit*100))}%`}></div>
                  </div>`}
                <div class="welfareSub">
                  ${le.start.replace("-","년 ")}월부터 ${le.count}건 · ₩${X(le.used)} 사용
                  ${le.fromSms?b` · ${le.at} 문자 기준`:(le.limit,"")}
                </div>
              </div>`}
            ${le.left==null&&le.used>0&&b`
              <div class="welfareBar">
                <div class="welfareSub">복지카드 한도를 설정하면 남은 금액이 여기 보여요 · 지금까지 ₩${X(le.used)} 사용</div>
              </div>`}
            ${be.income>0&&b`
              <div class="axis income">
                <span class="axisLabel">수입</span>
                <span class="axisVal">₩${X(be.income)}</span>
              </div>`}
          </div>`}

          <${ha} db=${e} patch=${ee} entries=${Z} flash=${ae} onAdopt=${Oa} />

          ${Ie.length===0?b`<div class="empty">이 기간 기록이 아직 없어요.<br />위에 문자나 거래내역을 붙여넣어 보세요.</div>`:b`
              <div class="listHead">
                <span class="listCount">${Ie.length}건</span>
                ${pe.on?b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:pe.ids.length===Ie.length?[]:Ie.map(f=>f.id)})}>
                      ${pe.ids.length===Ie.length?"전체 해제":"전체 고르기"}</button>`:b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:[]})}>고르기</button>`}
              </div>
              <${en} list=${Ie} ...${at} />`}`:m==="asset"?b`<${$a} db=${e} entries=${Z} patch=${ee} rowProps=${at} />`:m==="trip"?b`
          <div class="toolRow">
            <button class="toolBtn" onClick=${()=>S(_==="tripFind"?null:"tripFind")}>여행 자동 찾기</button>
            ${N&&b`<button class="toolBtn" onClick=${()=>S(_==="tripAdj"?null:"tripAdj")}>항목 조정</button>`}
          </div>
          ${_==="tripFind"&&b`<${_a} db=${e} entries=${Z} patch=${ee} flash=${ae} onClose=${()=>S(null)} />`}
          ${_==="tripAdj"&&N&&b`<${ka} key=${N} db=${e} entries=${Z}
            trip=${e.trips.find(f=>f.id===N)} patch=${ee} flash=${ae} onClose=${()=>S(null)} />`}
          <${nr} db=${e} live=${Z} tripId=${N} setTripId=${H} rowProps=${at} patch=${ee} flash=${ae} />`:b`
          ${W&&b`
            <div class="toolRow">
              <button class="toolBtn" onClick=${()=>S(_==="quote"?null:"quote")}>정비 견적서 넣기</button>
            </div>`}
          ${_==="quote"&&W&&b`<${wa} db=${e} carId=${W} patch=${ee} flash=${ae}
            onAddEntry=${f=>mt([f])} onClose=${()=>S(null)} />`}
          <${sr} db=${e} live=${Z} carId=${W} setCarId=${q} car=${eo} carKm=${to} assignCar=${Ja}
            mileage=${Y} setMileage=${K} mileageDate=${B} setMileageDate=${j}
            maintEdit=${de} setMaintEdit=${fe} patch=${ee} addVehicle=${on}
            latestMileage=${Gn} rowProps=${at} />`}

      ${me&&b`
        <div class="bulkBar" role="status">
          ${me.applied>0&&b`
            <div class="bulkLine">
              <span>같은 곳 <b>${me.applied}건</b>도 ${Ce[me.category]?.label}${tr(Ce[me.category]?.label)} 바꿨어요</span>
              <button class="bulkBtn" onClick=${Ba}>되돌리기</button>
            </div>`}
          ${me.similar.length>0&&b`
            <div class="bulkLine">
              <span>비슷한 곳 <b>${me.similar.length}건</b>도 바꿀까요?
                <span class="bulkNames">${[...new Set(me.similar.map(f=>f.memo))].slice(0,3).join(" · ")}</span></span>
              <span class="bulkActs">
                <button class="bulkBtn on" onClick=${La}>바꾸기</button>
                <button class="bulkBtn" onClick=${()=>sn({...me,similar:[]})}>그대로</button>
              </span>
            </div>`}
          ${me.applied>0&&!me.similar.length&&b`<button class="bulkX" onClick=${()=>nt(null)} aria-label="닫기">×</button>`}
        </div>`}
      ${ao}
      ${x&&b`<div class="toast">${x}</div>`}
    </div>`}function tr(e){let t=String(e||""),n=t.charCodeAt(t.length-1)-44032;if(n<0||n>11171)return"로";let s=n%28;return s===0||s===8?"로":"으로"}function nr({db:e,live:t,tripId:n,setTripId:s,rowProps:o,patch:a,flash:i}){let[r,l]=L(!1),[u,p]=L({name:"",startDate:Ae(),endDate:Ae()}),[c,d]=L(null),[m,g]=L(!1),h=()=>{let D=e.trips.find(I=>I.id===n);if(!D)return;let x=t.filter(I=>I.tripId===D.id).length;a(I=>{I.trips=I.trips.filter(N=>N.id!==D.id),I.entries=I.entries.map(N=>N.tripId===D.id?{...N,tripId:null,updatedAt:Date.now(),dirty:!0}:N)}),g(!1),d(null),s(null),i(x>0?`${D.name} 여행을 지웠어요 · ${x}건은 기록으로 남았어요`:`${D.name} 여행을 지웠어요`)},y=e.trips.map(D=>{let x=Dn(t,D);return{...D,expense:x.total,welfare:x.welfare}}),v=y.find(D=>D.id===n),$=t.filter(D=>D.tripId===n).sort((D,x)=>D.date<x.date?1:D.date>x.date?-1:x.createdAt-D.createdAt),_=v&&(!v.startDate||!v.endDate),S=c||(_?{id:v.id,startDate:"",endDate:"",name:v.name}:null),k=()=>{!S.startDate||!S.endDate||S.startDate>S.endDate||(a(D=>{D.trips=D.trips.map(x=>x.id===S.id?{...x,name:(S.name||x.name).trim(),startDate:S.startDate,endDate:S.endDate}:x)}),d(null),i("여행 기간을 고쳤어요. '항목 조정'에서 지출을 넣으세요"))};return b`
    <div class="cards">
      ${y.length===0&&b`<div class="empty">아직 만든 여행이 없어요.<br />아래 "+ 여행 추가"로 기간을 넣어 만들면 그 기간 지출을 찾아 묶어줍니다.</div>`}
      ${y.map(D=>b`
        <button key=${D.id} class=${"sumCard"+(n===D.id?" on":"")} onClick=${()=>{s(D.id),d(null)}}>
          <div class="sumName"><${Fn} size=${12} /> ${D.name}</div>
          <div class="sumAmt">₩${X(D.expense)}</div>
        </button>`)}
      ${!r&&b`<button class="tag dash" onClick=${()=>l(!0)}>+ 여행 추가</button>`}
    </div>

    ${r&&b`
      <div class="card">
        <div class="cardLabel">여행 추가</div>
        <div class="hint sm">기간을 넣으면 그 기간의 결제와 미리 결제한 항공·숙박을 찾아 묶을 수 있어요. 아직 안 떠난 여행도 됩니다.</div>
        <input class="inp" placeholder="여행 이름 (예: 오키나와 26.03)" value=${u.name}
          onInput=${D=>p(x=>({...x,name:D.target.value}))} />
        <div class="row wrap">
          <input type="date" class="inp date" value=${u.startDate} onInput=${D=>p(x=>({...x,startDate:D.target.value}))} />
          <span class="hint sm">~</span>
          <input type="date" class="inp date" value=${u.endDate} onInput=${D=>p(x=>({...x,endDate:D.target.value}))} />
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>l(!1)}>취소</button>
          <button class="btn primary sm" disabled=${!u.name.trim()||u.startDate>u.endDate}
            onClick=${()=>{let D=xe();a(x=>{x.trips=[...x.trips,{id:D,name:u.name.trim(),startDate:u.startDate,endDate:u.endDate,createdAt:Date.now()}]}),s(D),l(!1),p({name:"",startDate:Ae(),endDate:Ae()}),i("여행을 만들었어요. '항목 조정'으로 지출을 넣으세요")}}>만들기</button>
        </div>
      </div>`}
    ${v&&b`
      <div class="monthBar">
        <span class="monthLabel">${v.name}</span>
        <span class="totals"><span class="exp">₩${X(v.expense)}</span></span>
      </div>
      ${S?b`
          <div class="card tripDates">
            <div class="cardLabel">${_&&!c?"이 여행은 기간이 없어요 — 기간을 넣어야 지출을 찾아 묶을 수 있어요":"여행 기간 고치기"}</div>
            <input class="inp" placeholder="여행 이름" value=${S.name} onInput=${D=>d({...S,name:D.target.value})} />
            <div class="row wrap">
              <input type="date" class="inp date" value=${S.startDate} onInput=${D=>d({...S,startDate:D.target.value})} />
              <span class="hint sm">~</span>
              <input type="date" class="inp date" value=${S.endDate} onInput=${D=>d({...S,endDate:D.target.value})} />
            </div>
            <div class="acts">
              ${c&&!_&&b`<button class="btn ghost sm" onClick=${()=>d(null)}>취소</button>`}
              <button class="btn primary sm" disabled=${!S.startDate||!S.endDate||S.startDate>S.endDate} onClick=${k}>기간 저장</button>
            </div>
          </div>`:""}
      ${(()=>{let D=Dn(t,v);return b`
          <div class="tripSum">
            <div class="tripSumTop">
              ${D.from?`${D.from.replace(/-/g,".").slice(2)} ~ ${D.to.slice(5).replace("-",".")}${D.days?` · ${D.days}일`:""} · `:""}${D.count}건
              ${!_&&!c&&b`<button class="pickToggle" onClick=${()=>d({id:v.id,name:v.name,startDate:v.startDate,endDate:v.endDate})}>기간 고치기</button>`}
              ${!c&&!m&&b`<button class="pickToggle warn" onClick=${()=>g(!0)}>여행 삭제</button>`}
            </div>
            ${m&&b`
              <div class="delAsk">
                <div class="hint sm">${D.count>0?`"${v.name}" 여행을 지울까요? 묶인 ${D.count}건은 여행에서만 빠지고 기록은 그대로 남습니다.`:`"${v.name}" 여행을 지울까요?`}</div>
                <div class="acts">
                  <button class="btn ghost sm" onClick=${()=>g(!1)}>그만두기</button>
                  <button class="btn danger sm" onClick=${h}>여행 삭제</button>
                </div>
              </div>`}
            ${D.days&&D.total>0&&b`<div class="tripSumTop">하루 평균 ₩${X(Math.round(D.total/D.days))}</div>`}
            <div class="tripCats">
              ${D.cats.map(([x,I])=>b`
                <span class="tripCat" key=${x}>
                  <span class="dot" style=${`background:${Ce[x]?.color||"#999"}`}></span>
                  ${Ce[x]?.label||x} ₩${X(I)}
                </span>`)}
            </div>
            ${(D.reimbursed>0||D.welfare!==0)&&b`
              <div class="tripFx">
                ${D.reimbursed>0?b`<span>같이 간 사람에게 받은 정산금 ₩${X(D.reimbursed)} 차감</span>`:""}
                ${D.reimbursed>0&&D.welfare!==0?" · ":""}
                ${D.welfare!==0?b`<span>복지카드 ₩${X(D.welfare)} <b>별도</b> (위 합계에 안 들어감)</span>`:""}
              </div>`}
            ${Object.keys(D.fx).length>0&&b`
              <div class="tripFx">${Object.entries(D.fx).map(([x,I])=>`${x} ${I.toLocaleString()}`).join(" · ")}</div>`}
          </div>`})()}
      ${$.length===0?b`<div class="empty">이 여행에 묶인 내역이 아직 없어요.<br />위의 <b>항목 조정</b>에서 항공권·숙박·현지 결제를 넣으세요.</div>`:b`<${en} list=${$} ...${o} />`}`}`}var Ra=[{key:"y1",label:"최근 1년",days:365},{key:"y2",label:"최근 2년",days:730},{key:"all",label:"전체",days:null}];function sr({db:e,live:t,carId:n,setCarId:s,car:o,carKm:a,mileage:i,setMileage:r,mileageDate:l,setMileageDate:u,maintEdit:p,setMaintEdit:c,patch:d,addVehicle:m,latestMileage:g,rowProps:h,assignCar:y}){let[v,$]=L(!1),[_,S]=L(""),[k,D]=L("all"),[x,I]=L("gasoline"),N=U(()=>{let M=Ra.find(V=>V.key===k);if(!M||!M.days)return"0000-00-00";let O=new Date;return O.setDate(O.getDate()-M.days),ut(O)},[k]),H=M=>M.date>=N,W=e.vehicles.map(M=>{let O=0;for(let V of t)V.carId===M.id&&V.type==="expense"&&H(V)&&(O+=V.isRefund?-V.amount:V.amount);return{...M,expense:O}}),q=e.maintenance.filter(M=>M.carId===n),Y=e.mileageLogs.filter(M=>M.carId===n).sort((M,O)=>M.date<O.date?1:-1).slice(0,5),K=t.filter(M=>M.carId===n&&H(M)).sort((M,O)=>M.date<O.date?1:M.date>O.date?-1:O.createdAt-M.createdAt),B=U(()=>{let M=new Map;for(let O of K){if(O.type!=="expense")continue;let V=O.category||"etc";M.set(V,(M.get(V)||0)+(O.isRefund?-O.amount:O.amount))}return Array.from(M.entries()).filter(([,O])=>O!==0).sort((O,V)=>V[1]-O[1])},[K]),j=B.reduce((M,[,O])=>M+O,0),de=U(()=>t.filter(M=>!M.carId&&M.type==="expense"&&M.category==="car"&&H(M)),[t]),fe=(M,O)=>d(V=>{V.maintenance=V.maintenance.map(ne=>ne.id===M?{...ne,...O}:ne)});return b`
    <div class="cards">
      ${W.length===0&&b`<div class="empty">아직 등록한 차량이 없어요.</div>`}
      ${W.map(M=>b`
        <button key=${M.id} class=${"sumCard"+(n===M.id?" on":"")} onClick=${()=>s(M.id)}>
          <div class="sumName"><${Hn} size=${12} /> ${M.name}</div>
          <div class="sumAmt">₩${X(M.expense)}</div>
        </button>`)}
      ${!v&&b`<button class="tag dash" onClick=${()=>$(!0)}>+ 새 차량</button>`}
    </div>

    ${v&&b`
      <div class="card">
        <div class="cardLabel">차량 추가</div>
        <input class="inp" placeholder="차량 이름 (예: 아반떼)" value=${_} onInput=${M=>S(M.target.value)} />
        <div class="miniLabel">연료</div>
        <div class="chips">
          ${Qt.map(M=>b`
            <button key=${M.key} class=${"tag"+(x===M.key?" on":"")} onClick=${()=>I(M.key)}>${M.label}</button>`)}
        </div>
        <div class="hint sm">
          고른 연료에 맞는 정비 항목 ${Ka(x).length}개가 자동으로 등록됩니다.
          주기는 일반적인 값이라 차종에 따라 다를 수 있고, 등록 뒤 각 항목에서 고칠 수 있어요.
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>$(!1)}>취소</button>
          <button class="btn primary sm" disabled=${!_.trim()}
            onClick=${()=>{s(m(_.trim(),x).id),S(""),$(!1)}}>만들기</button>
        </div>
      </div>`}

    <div class="row wrap" style="margin-top:10px">
      ${Ra.map(M=>b`
        <button key=${M.key} class=${"tag"+(k===M.key?" on":"")} onClick=${()=>D(M.key)}>${M.label}</button>`)}
    </div>

    ${o&&(()=>{let M=W.find(ne=>ne.id===n)?.expense||0,O=K.map(ne=>ne.date).sort(),V=O.length?Math.max(1,Math.round((new Date(O[O.length-1])-new Date(O[0]))/2592e6)+1):1;return b`
      <div class="monthBar">
        <span class="monthLabel">${o.name}${o.fuel?b`<span class="fuelTag">${(Qt.find(ne=>ne.key===o.fuel)||{}).label||""}</span>`:""}</span>
        <span class="totals"><span class="exp">유지비 ₩${X(M)}</span></span>
      </div>
      ${M>0&&b`
        <div class="carSpan">
          ${O.length?`${O[0]} ~ ${O[O.length-1]} · ${K.length}건`:""}
          ${V>1?` · 월평균 ₩${X(Math.round(M/V))}`:""}
          ${V>=6?` · 연환산 ₩${X(Math.round(M/V*12))}`:""}
        </div>`}
      `})()}
    ${o&&b`

      <div class="box">
        <div class="boxTop"><${Gi} size=${15} />
          ${a!=null?b`<span>현재 ${a.toLocaleString("ko-KR")}km</span>`:b`<span class="muted">기록된 주행거리가 없어요</span>`}
        </div>
        <div class="row wrap">
          <input type="number" class="inp" placeholder="계기판 거리(km)" value=${i} onInput=${M=>r(M.target.value)} />
          <input type="date" class="inp date" value=${l} onInput=${M=>u(M.target.value)} />
          <button class="btn primary sm" disabled=${!i}
            onClick=${()=>{d(M=>{M.mileageLogs=[{id:xe(),carId:n,date:l,mileage:parseInt(i,10)},...M.mileageLogs]}),r("")}}>
            <${qt} size=${14} /> 기록</button>
        </div>
        ${Y.length>0&&b`<div class="logList">${Y.map(M=>b`<span class="log" key=${M.id}>${pt(M.date)} · ${M.mileage.toLocaleString("ko-KR")}km</span>`)}</div>`}
      </div>

      <div class="maintList">
        ${q.map(M=>{let{status:O,remKm:V,remMonths:ne}=Hi(M,a),ve=p&&p.id===M.id;return b`
            <div class="box maint" key=${M.id}>
              <div class="boxTop">
                <span class="maintName"><${zi} size=${13} /> ${M.label}</span>
                <span class=${"badge "+O}>${Fi[O]}</span>
              </div>
              <div class="maintSub">
                ${O!=="unknown"?b`${V!=null?b`<span>${V>0?`${V.toLocaleString("ko-KR")}km 남음`:`${Math.abs(V).toLocaleString("ko-KR")}km 초과`}</span>`:""}
                    ${V!=null&&ne!=null?b`<span> · </span>`:""}
                    ${ne!=null?b`<span>${ne>0?`${ne}개월 남음`:`${Math.abs(ne)}개월 초과`}</span>`:""}`:b`<span>마지막 처리 기록을 입력해주세요</span>`}
              </div>
              ${ve?b`<div class="row wrap">
                    <input type="date" class="inp date" value=${p.lastDate||""} onInput=${re=>c({...p,lastDate:re.target.value})} />
                    <input type="number" class="inp" placeholder="교체 당시 km" value=${p.lastMileage??""} onInput=${re=>c({...p,lastMileage:re.target.value?parseInt(re.target.value,10):null})} />
                    <input type="number" class="inp" placeholder="주기(km)" value=${p.intervalKm??""} onInput=${re=>c({...p,intervalKm:re.target.value?parseInt(re.target.value,10):null})} />
                    <input type="number" class="inp" placeholder="주기(개월)" value=${p.intervalMonths??""} onInput=${re=>c({...p,intervalMonths:re.target.value?parseInt(re.target.value,10):null})} />
                    <div class="acts">
                      <button class="btn ghost sm" onClick=${()=>c(null)}>취소</button>
                      <button class="btn primary sm" onClick=${()=>{fe(M.id,p),c(null)}}>저장</button>
                    </div>
                  </div>`:b`<div class="acts">
                    <button class="btn ghost sm" onClick=${()=>c({...M})}>수정</button>
                    <button class="btn primary sm" onClick=${()=>fe(M.id,{lastDate:Ae(),lastMileage:g(n)})}>오늘 처리함</button>
                  </div>`}
            </div>`})}
      </div>

      ${B.length>0&&b`
        <div class="box">
          <div class="boxTop"><span class="maintName">무엇에 들었나</span><span class="sumAmt">₩${X(j)}</span></div>
          <div class="carBreak">
            ${B.map(([M,O])=>b`
              <div class="carBreakRow" key=${M}>
                <span class="dot" style=${`background:${(Ce[M]||{}).color||"#999"}`}></span>
                <span class="carBreakName">${(Ce[M]||{}).label||"기타"}</span>
                <span class="carBreakBar"><i style=${`width:${Math.max(2,Math.round(O/j*100))}%;background:${(Ce[M]||{}).color||"#999"}`}></i></span>
                <span class="carBreakAmt">₩${X(O)}</span>
              </div>`)}
          </div>
        </div>`}

      ${de.length>0&&e.vehicles.length>0&&b`
        <div class="box">
          <div class="boxTop"><span class="maintName">어느 차인지 안 정한 지출 ${de.length}건</span></div>
          <div class="hint sm">한 번 정해두면 같은 곳에서 쓴 다음 기록은 자동으로 이 차에 붙습니다.</div>
          <div class="unassignList">
            ${de.slice(0,6).map(M=>b`
              <div class="unassignRow" key=${M.id}>
                <span class="unassignMemo">${M.memo}</span>
                <span class="unassignAmt">₩${X(M.amount)}</span>
                <div class="chips">
                  ${e.vehicles.map(O=>b`
                    <button key=${O.id} class="chip sm" onClick=${()=>y(M,O.id)}>${O.name}</button>`)}
                </div>
              </div>`)}
          </div>
        </div>`}

      ${K.length>0&&b`<div class="carSpend"><div class="groupHead">이 차량으로 기록된 지출</div><${en} list=${K} ...${h} /></div>`}`}`}function dt({label:e,items:t,placeholder:n,onChange:s}){let[o,a]=L(""),i=()=>{let r=o.trim();!r||t.includes(r)||(s([...t,r]),a(""))};return b`
    <div class="nameList">
      <div class="miniLabel">${e}</div>
      <div class="chips">
        ${t.map(r=>b`
          <span class="tag on" key=${r}>${r}
            <button class="tagX" onClick=${()=>s(t.filter(l=>l!==r))} aria-label="빼기">×</button>
          </span>`)}
      </div>
      <div class="row">
        <input class="inp" placeholder=${n} value=${o}
          onInput=${r=>a(r.target.value)} onKeyDown=${r=>r.key==="Enter"&&i()} />
        <button class="btn ghost sm" onClick=${i} disabled=${!o.trim()}>추가</button>
      </div>
    </div>`}function ar({db:e,setDb:t,onClose:n,flash:s,onSync:o,onUndoImport:a}){let i=_e(null),[r,l]=L(!1),u=U(()=>JSON.stringify(e).length,[e]),p=()=>{let d=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),m=URL.createObjectURL(d),g=document.createElement("a");g.href=m,g.download=`가계부-백업-${Ae()}.json`,document.body.appendChild(g),g.click(),document.body.removeChild(g),setTimeout(()=>URL.revokeObjectURL(m),1e3)},c=d=>{let m=d.target.files&&d.target.files[0];if(!m)return;let g=new FileReader;g.onload=()=>{try{let h=JSON.parse(g.result);if(!h.entries)throw new Error("형식이 다릅니다");t({...Te,...h,settings:{...Te.settings,...h.settings||{}}}),s(`${h.entries.length}건을 불러왔어요`),n()}catch{s("파일을 읽지 못했어요")}},g.readAsText(m)};return b`
    <div class="card settings">
      <div class="cardLabel">설정</div>

      <label class="setRow">
        <span>본인 이름</span>
        <input class="inp" placeholder="이체 판정에 씁니다" value=${e.settings.userName}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,userName:d.target.value}}))} />
      </label>

      <label class="setRow">
        <span>월 시작일</span>
        <input class="inp" type="number" min="1" max="28" value=${e.settings.monthStartDay}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,monthStartDay:Math.min(28,Math.max(1,parseInt(d.target.value||"1",10)))}}))} />
      </label>
      <div class="hint sm">급여일 기준으로 보고 싶으면 급여일을 넣으세요. 1이면 달력 기준입니다.</div>

      <div class="setDivider">수입으로 볼 것</div>
      <div class="hint sm">여기 적힌 곳에서 온 입금만 수입으로 셉니다. 나머지 입금은 기록만 남고 합계에서 빠집니다.</div>
      <${dt} label="수입처" items=${e.settings.incomeSources||[]} placeholder="예: 근무하는 회사 이름"
        onChange=${d=>t(m=>({...m,settings:{...m.settings,incomeSources:d}}))} />
      <${dt} label="항상 제외" items=${e.settings.excludedCounterparties||[]} placeholder="예: 어머니 성함"
        onChange=${d=>t(m=>({...m,settings:{...m.settings,excludedCounterparties:d}}))} />

      <div class="setDivider">합계에서 뺄 것</div>
      <div class="hint sm">복지카드는 회사 돈이라 기록만 하고 지출에는 안 넣습니다. 가족 송금은 보낸 시점에 지출로 잡습니다.</div>
      <${dt} label="복지카드" items=${e.settings.welfareCards||[]} placeholder="예: 현대카드"
        onChange=${d=>t(m=>({...m,settings:{...m.settings,welfareCards:d}}))} />
      <label class="setRow">
        <span>복지 한도</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="연간 한도 (예: 1200000)"
          value=${e.settings.welfareLimit||""}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,welfareLimit:parseInt(d.target.value||"0",10)}}))} />
      </label>
      <label class="setRow">
        <span>시작 시점</span>
        <input class="inp" placeholder="예: 2026-01" value=${e.settings.welfarePeriodStart||""}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,welfarePeriodStart:d.target.value.trim()}}))} />
      </label>
      <div class="hint sm">현대복지카드는 승인 문자에 잔여 한도가 찍혀 와서 따로 넣을 게 없습니다. 문자가 안 오는 카드만 한도를 넣으세요.</div>

      <${dt} label="가족 송금" items=${e.settings.familyTransferKeywords||[]} placeholder="예: 하나머니충전"
        onChange=${d=>t(m=>({...m,settings:{...m.settings,familyTransferKeywords:d}}))} />
      <label class="setRow">
        <span>생활비 최소</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 800000"
          value=${e.settings.familyAmountMin||""}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,familyAmountMin:parseInt(d.target.value||"0",10)}}))} />
      </label>
      <label class="setRow">
        <span>생활비 최대</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 1400000"
          value=${e.settings.familyAmountMax||""}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,familyAmountMax:parseInt(d.target.value||"0",10)}}))} />
      </label>
      <div class="hint sm">이 범위 안의 송금만 <b>생활비(지출)</b>로 셉니다.
        범위를 벗어나면 <b>별도 송금</b>으로 보고 합계에서 뺍니다 — 받아서 그대로 넘기는 등록금 같은 돈에 씁니다.</div>
      <label class="setRow">
        <span>별도 송금 합계 제외</span>
        <input type="checkbox" checked=${e.settings.familyExtraExcluded!==!1}
          onChange=${d=>t(m=>({...m,settings:{...m.settings,familyExtraExcluded:d.target.checked}}))} />
      </label>
      <${dt} label="여행 자금" items=${e.settings.travelKeywords||[]} placeholder="예: 트래블월렛"
        onChange=${d=>t(m=>({...m,settings:{...m.settings,travelKeywords:d}}))} />

      <div class="setDivider">구글시트 연동</div>
      <label class="setRow">
        <span>시트 주소</span>
        <input class="inp" placeholder="https://script.google.com/.../exec" value=${e.settings.sheetUrl}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,sheetUrl:d.target.value.trim()}}))} />
      </label>
      <label class="setRow">
        <span>연결 암호</span>
        <input class="inp" placeholder="Apps Script에 적은 값과 같게" value=${e.settings.sheetToken}
          onInput=${d=>t(m=>({...m,settings:{...m.settings,sheetToken:d.target.value.trim()}}))} />
      </label>
      <div class="acts">
        <button class="btn ghost sm" onClick=${async()=>{try{await js(e.settings.sheetUrl,e.settings.sheetToken),s("연결됐어요")}catch(d){s(`연결 실패: ${d.message}`)}}} disabled=${!e.settings.sheetUrl}>연결 확인</button>
        <button class="btn ghost sm" onClick=${o} disabled=${!e.settings.sheetUrl}>지금 맞추기</button>
      </div>
      ${e.settings.lastSyncAt&&b`<div class="hint sm">마지막 동기화 ${new Date(e.settings.lastSyncAt).toLocaleString("ko-KR")}</div>`}

      <div class="setDivider">데이터</div>
      <div class="setStat">버전 <b>v29d</b> · 기록 ${e.entries.filter(d=>!d.deleted).length}건 · 분류 규칙 ${(e.categoryRules||[]).length}개 · 보낼 것 ${e.entries.filter(d=>d.dirty).length}건 · 저장 용량 ${(u/1024).toFixed(0)}KB</div>

      <div class="acts">
        <button class="btn ghost sm" onClick=${()=>i.current&&i.current.click()}>가져오기</button>
        <button class="btn primary sm" onClick=${p}>백업 내보내기</button>
      </div>
      <input ref=${i} type="file" accept="application/json" style="display:none" onChange=${c} />

      <div class="setDivider danger">기록 지우기</div>
      <div class="hint sm">
        설정(시트 주소·수입처 등)과 학습한 분류 규칙은 남고 기록만 지웁니다.
        <b>지우기 전에 위에서 백업을 먼저 받으세요.</b>
      </div>
      ${r?b`
          <div class="dangerBox">
            <div>기록 ${e.entries.filter(d=>!d.deleted).length}건, 여행 ${e.trips.length}건, 고정비 ${e.fixedExpenses.length}건이 사라집니다.</div>
            <div class="dangerNote">
              구글시트를 쓰신다면 <b>시트의 entries 탭도 함께 비우셔야</b> 합니다.
              안 그러면 다음 동기화 때 되살아납니다.
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>l(!1)}>그만두기</button>
              <button class="btn danger sm" onClick=${()=>{t(d=>({...Te,categoryRules:d.categoryRules||[],settings:{...d.settings,lastSyncAt:""}})),l(!1),s("기록을 지웠어요"),n()}}>정말 지우기</button>
            </div>
          </div>`:b`
          <div class="acts">
            <button class="btn ghost sm" onClick=${()=>l(!0)}>기록 전체 지우기</button>
          </div>`}

      ${(e.imports||[]).length>0&&b`
        <div class="setDivider">가져온 파일 되돌리기</div>
        <div class="hint sm">파일 하나로 들어온 기록만 통째로 뺍니다. 다른 기록은 그대로 둡니다.</div>
        <div class="importList">
          ${(e.imports||[]).map(d=>b`
            <div class=${"importRow"+(d.undone?" undone":"")} key=${d.id}>
              <div class="importMain">
                <div class="importName">${d.name}</div>
                <div class="sub">${new Date(d.at).toLocaleDateString("ko-KR")} · ${d.count}건${d.undone?" · 되돌림":""}</div>
              </div>
              ${!d.undone&&b`<button class="btn ghost sm" onClick=${()=>a(d)}>되돌리기</button>`}
            </div>`)}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${n}>닫기</button>
      </div>
    </div>`}function or(){let[e,t]=bs();return e?b`
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
          <button class="btn ghost sm" onClick=${()=>{try{let o=localStorage.getItem(qe)||"{}",a=new Blob([o],{type:"application/json"}),i=URL.createObjectURL(a),r=document.createElement("a");r.href=i,r.download=`가계부-백업-${Ae()}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(i),1e3)}catch{alert(`파일로 저장하지 못했어요. 아래 내용을 복사해 두세요.

`+(localStorage.getItem(qe)||""))}}}>백업 내보내기</button>
          <button class="btn primary sm" onClick=${()=>t()}>다시 시도</button>
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>{if(window.confirm("기록을 모두 지웁니다. 백업을 먼저 받으셨나요?")){try{let o=JSON.parse(localStorage.getItem(qe)||"{}");localStorage.setItem(qe,JSON.stringify({...Te,categoryRules:o.categoryRules||[],settings:{...Te.settings,...o.settings||{},lastSyncAt:""}}))}catch{localStorage.removeItem(qe)}location.reload()}}}>기록 지우기</button>
        </div>
      </div>
      <div class="card">
        <div class="cardLabel">오류 내용</div>
        <div class="errText">${String(e&&(e.message||e))}</div>
      </div>
    </div>`:b`<${er} />`}ds(b`<${or} />`,document.getElementById("root"));
