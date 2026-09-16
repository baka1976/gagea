var io=Object.defineProperty;var ro=(e,t)=>{for(var n in t)io(e,n,{get:t[n],enumerable:!0})};var Ct,Q,Zn,lo,Ee,Yn,Qn,es,an,yt,ot,ts,ln,on,rn,co,kt={},wt=[],uo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Dt=Array.isArray;function Re(e,t){for(var n in t)e[n]=t[n];return e}function cn(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Me(e,t,n){var s,i,a,o={};for(a in t)a=="key"?s=t[a]:a=="ref"?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Ct.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return bt(e,o,s,i,null)}function bt(e,t,n,s,i){var a={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Zn,__i:-1,__u:0};return i==null&&Q.vnode!=null&&Q.vnode(a),a}function St(e){return e.children}function _t(e,t){this.props=e,this.context=t}function We(e,t){if(t==null)return e.__?We(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?We(e):null}function po(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,s=[],i=[],a=Re({},t);a.__v=t.__v+1,Q.vnode&&Q.vnode(a),dn(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,s,n??We(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,is(s,a,i),t.__e=t.__=null,a.__e!=n&&ns(a)}}function ns(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ns(e)}function Jn(e){(!e.__d&&(e.__d=!0)&&Ee.push(e)&&!xt.__r++||Yn!=Q.debounceRendering)&&((Yn=Q.debounceRendering)||Qn)(xt)}function xt(){try{for(var e,t=1;Ee.length;)Ee.length>t&&Ee.sort(es),e=Ee.shift(),t=Ee.length,po(e)}finally{Ee.length=xt.__r=0}}function ss(e,t,n,s,i,a,o,r,l,c,f){var u,d,g,h,m,y,v=s&&s.__k||wt,$=t.length;for(l=fo(n,t,v,l,$),u=0;u<$;u++)(g=n.__k[u])!=null&&(d=g.__i!=-1&&v[g.__i]||kt,g.__i=u,y=dn(e,g,d,i,a,o,r,l,c,f),h=g.__e,g.ref&&d.ref!=g.ref&&(d.ref&&un(d.ref,null,g),f.push(g.ref,g.__c||h,g)),m==null&&h!=null&&(m=h),4&g.__u?(l=as(g,l,e),d.__e&&(d.__e=null)):typeof g.type=="function"&&y!==void 0?l=y:h&&(l=h.nextSibling),g.__u&=-7);return n.__e=m,l}function fo(e,t,n,s,i){var a,o,r,l,c,f=n.length,u=f,d=0;for(e.__k=new Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[a]=bt(null,o,null,null,null):Dt(o)?o=e.__k[a]=bt(St,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=bt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,l=a+d,o.__=e,o.__b=e.__b+1,r=null,(c=o.__i=mo(o,n,l,u))!=-1&&(u--,(r=n[c])&&(r.__u|=2)),r==null||r.__v==null?(c==-1&&(i>f?d--:i<f&&d++),typeof o.type!="function"&&(o.__u|=4)):c!=l&&(c==l-1?d--:c==l+1?d++:(c>l?d--:d++,o.__u|=4))):e.__k[a]=null;if(u)for(a=0;a<f;a++)(r=n[a])!=null&&(2&r.__u)==0&&(r.__e==s&&(s=We(r)),ls(r,r));return s}function as(e,t,n){var s,i;if(typeof e.type=="function"){for(s=e.__k,i=0;s&&i<s.length;i++)s[i]&&(s[i].__=e,t=as(s[i],t,n));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=We(e)),t=n.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function mo(e,t,n,s){var i,a,o,r=e.key,l=e.type,c=t[n],f=c!=null&&(2&c.__u)==0;if(c===null&&r==null||f&&r==c.key&&l==c.type)return n;if(s>(f?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((c=t[o=i>=0?i--:a++])!=null&&(2&c.__u)==0&&r==c.key&&l==c.type)return o}return-1}function Xn(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||uo.test(t)?n:n+"px"}function vt(e,t,n,s,i){var a,o;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||Xn(e.style,t,"");if(n)for(t in n)s&&n[t]==s[t]||Xn(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")a=t!=(t=t.replace(ts,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=n,n?s?n[ot]=s[ot]:(n[ot]=ln,e.addEventListener(t,a?rn:on,a)):e.removeEventListener(t,a?rn:on,a);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function qn(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[yt]==null)t[yt]=ln++;else if(t[yt]<n[ot])return;return n(Q.event?Q.event(t):t)}}}function dn(e,t,n,s,i,a,o,r,l,c){var f,u,d,g,h,m,y,v,$,_,A,w,D,x,R,B,H=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(l=!!(32&n.__u),a=[r=t.__e=n.__e]),(f=Q.__b)&&f(t);e:if(typeof H=="function"){u=o.length;try{if($=t.props,_=H.prototype&&H.prototype.render,A=(f=H.contextType)&&s[f.__c],w=f?A?A.props.value:f.__:s,n.__c?v=(d=t.__c=n.__c).__=d.__E:(_?t.__c=d=new H($,w):(t.__c=d=new _t($,w),d.constructor=H,d.render=go),A&&A.sub(d),d.state||(d.state={}),d.__n=s,g=d.__d=!0,d.__h=[],d._sb=[]),_&&d.__s==null&&(d.__s=d.state),_&&H.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Re({},d.__s)),Re(d.__s,H.getDerivedStateFromProps($,d.__s))),h=d.props,m=d.state,d.__v=t,g)_&&H.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),_&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(_&&H.getDerivedStateFromProps==null&&$!==h&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps($,w),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate($,d.__s,w)===!1){t.__v!=n.__v&&(d.props=$,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(j){j&&(j.__=t)}),wt.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d),r=We(n);break e}d.componentWillUpdate!=null&&d.componentWillUpdate($,d.__s,w),_&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(h,m,y)})}if(d.context=w,d.props=$,d.__P=e,d.__e=!1,D=Q.__r,x=0,_)d.state=d.__s,d.__d=!1,D&&D(t),f=d.render(d.props,d.state,d.context),wt.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,D&&D(t),f=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++x<25);d.state=d.__s,d.getChildContext!=null&&(s=Re(Re({},s),d.getChildContext())),_&&!g&&d.getSnapshotBeforeUpdate!=null&&(y=d.getSnapshotBeforeUpdate(h,m)),R=f!=null&&f.type===St&&f.key==null?rs(f.props.children):f,r=ss(e,Dt(R)?R:[R],t,n,s,i,a,o,r,l,c),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),v&&(d.__E=d.__=null)}catch(j){if(o.length=u,t.__v=null,l||a!=null){if(j.then){for(t.__u|=l?160:128;r&&r.nodeType==8&&r.nextSibling;)r=r.nextSibling;a!=null&&(a[a.indexOf(r)]=null),t.__e=r}else if(a!=null)for(B=a.length;B--;)cn(a[B])}else t.__e=n.__e;t.__k==null&&(t.__k=n.__k||[]),j.then||os(t),Q.__e(j,t,n)}}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):r=t.__e=ho(n.__e,t,n,s,i,a,o,l,c);return(f=Q.diffed)&&f(t),128&t.__u?void 0:r}function os(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(os))}function is(e,t,n){for(var s=0;s<n.length;s++)un(n[s],n[++s],n[++s]);Q.__c&&Q.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(a){a.call(i)})}catch(a){Q.__e(a,i.__v)}})}function rs(e){return typeof e!="object"||e==null||e.__b>0?e:Dt(e)?e.map(rs):e.constructor!==void 0?null:Re({},e)}function ho(e,t,n,s,i,a,o,r,l){var c,f,u,d,g,h,m,y=n.props||kt,v=t.props,$=t.type;if($=="svg"?i="http://www.w3.org/2000/svg":$=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),a!=null){for(c=0;c<a.length;c++)if((g=a[c])&&"setAttribute"in g==!!$&&($?g.localName==$:g.nodeType==3)){e=g,a[c]=null;break}}if(e==null){if($==null)return document.createTextNode(v);e=document.createElementNS(i,$,v.is&&v),r&&(Q.__m&&Q.__m(t,a),r=!1),a=null}if($==null)y===v||r&&e.data==v||(e.data=v);else{if(a=$=="textarea"&&v.defaultValue!=null?null:a&&Ct.call(e.childNodes),!r&&a!=null)for(y={},c=0;c<e.attributes.length;c++)y[(g=e.attributes[c]).name]=g.value;for(c in y)g=y[c],c=="dangerouslySetInnerHTML"?u=g:c=="children"||c in v||c=="value"&&"defaultValue"in v||c=="checked"&&"defaultChecked"in v||vt(e,c,null,g,i);for(c in v)g=v[c],c=="children"?d=g:c=="dangerouslySetInnerHTML"?f=g:c=="value"?h=g:c=="checked"?m=g:r&&typeof g!="function"||y[c]===g||vt(e,c,g,y[c],i);if(f)r||u&&(f.__html==u.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(u&&(e.innerHTML=""),ss(t.type=="template"?e.content:e,Dt(d)?d:[d],t,n,s,$=="foreignObject"?"http://www.w3.org/1999/xhtml":i,a,o,a?a[0]:n.__k&&We(n,0),r,l),a!=null)for(c=a.length;c--;)cn(a[c]);r&&$!="textarea"||(c="value",$=="progress"&&h==null?e.removeAttribute("value"):h!=null&&(h!==e[c]||$=="progress"&&!h||$=="option"&&h!=y[c])&&vt(e,c,h,y[c],i),c="checked",m!=null&&m!=e[c]&&vt(e,c,m,y[c],i))}return e}function un(e,t,n){try{if(typeof e=="function"){var s=typeof e.__u=="function";s&&e.__u(),s&&t==null||(e.__u=e(t))}else e.current=t}catch(i){Q.__e(i,n)}}function ls(e,t,n){var s,i;if(Q.unmount&&Q.unmount(e),(s=e.ref)&&(s.current&&s.current!=e.__e||un(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(a){Q.__e(a,t)}s.base=s.__P=s.__n=null}if(s=e.__k)for(i=0;i<s.length;i++)s[i]&&ls(s[i],t,n||typeof e.type!="function");n||cn(e.__e),e.__c=e.__=e.__e=void 0}function go(e,t,n){return this.constructor(e,n)}function cs(e,t,n){var s,i,a,o;t==document&&(t=document.documentElement),Q.__&&Q.__(e,t),i=(s=typeof n=="function")?null:n&&n.__k||t.__k,a=[],o=[],dn(t,e=(!s&&n||t).__k=Me(St,null,[e]),i||kt,kt,t.namespaceURI,!s&&n?[n]:i?null:t.firstChild?Ct.call(t.childNodes):null,a,!s&&n?n:i?i.__e:t.firstChild,s,o),is(a,e,o),e.props.children=null}Ct=wt.slice,Q={__e:function(e,t,n,s){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,s||{}),o=i.__d),o)return i.__E=i}catch(r){e=r}throw e}},Zn=0,lo=function(e){return e!=null&&e.constructor===void 0},_t.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Re({},this.state),typeof e=="function"&&(e=e(Re({},n),this.props)),e&&Re(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Jn(this))},_t.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Jn(this))},_t.prototype.render=St,Ee=[],Qn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,es=function(e,t){return e.__v.__b-t.__v.__b},xt.__r=0,an=Math.random().toString(8),yt="__d"+an,ot="__a"+an,ts=/(PointerCapture)$|Capture$/i,ln=0,on=qn(!1),rn=qn(!0),co=0;var Qe,te,pn,ds,it=0,vs=[],se=Q,us=se.__b,ps=se.__r,fs=se.diffed,ms=se.__c,hs=se.unmount,gs=se.__;function It(e,t){se.__h&&se.__h(te,e,it||t),it=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function L(e){return it=1,$o(_s,e)}function $o(e,t,n){var s=It(Qe++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):_s(void 0,t),function(r){var l=s.__N?s.__N[0]:s.__[0],c=s.t(l,r);l!==c&&(s.__N=[c,s.__[1]],s.__c.setState({}))}],s.__c=te,!te.__f)){var i=function(r,l,c){if(!s.__c.__H)return!0;var f=!1,u=s.__c.props!==r;if(s.__c.__H.__.some(function(g){if(g.__N){f=!0;var h=g.__[0];g.__=g.__N,g.__N=void 0,h!==g.__[0]&&(u=!0)}}),a){var d=a.call(this,r,l,c);return f?d||u:d}return!f||u};te.__f=!0;var a=te.shouldComponentUpdate,o=te.componentWillUpdate;te.componentWillUpdate=function(r,l,c){if(this.__e){var f=a;a=void 0,i(r,l,c),a=f}o&&o.call(this,r,l,c)},te.shouldComponentUpdate=i}return s.__N||s.__}function Ke(e,t){var n=It(Qe++,3);!se.__s&&bs(n.__H,t)&&(n.__=e,n.u=t,te.__H.__h.push(n))}function ye(e){return it=5,U(function(){return{current:e}},[])}function U(e,t){var n=It(Qe++,7);return bs(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function mn(e,t){return it=8,U(function(){return e},t)}function ys(e){var t=It(Qe++,10),n=L();return t.__=e,te.componentDidCatch||(te.componentDidCatch=function(s,i){t.__&&t.__(s,i),n[1](s)}),[n[0],function(){n[1](void 0)}]}function vo(){for(var e;e=vs.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(At),t.__h.some(fn),t.__h=[]}catch(n){t.__h=[],se.__e(n,e.__v)}}}se.__b=function(e){te=null,us&&us(e)},se.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),gs&&gs(e,t)},se.__r=function(e){ps&&ps(e),Qe=0;var t=(te=e.__c).__H;t&&(pn===te?(t.__h=[],te.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(At),t.__h.some(fn),t.__h=[],Qe=0)),pn=te},se.diffed=function(e){fs&&fs(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(vs.push(t)!==1&&ds===se.requestAnimationFrame||((ds=se.requestAnimationFrame)||yo)(vo)),t.__H.__.some(function(n){n.u&&(n.__H=n.u,n.u=void 0)})),pn=te=null},se.__c=function(e,t){t.some(function(n){try{n.__h.some(At),n.__h=n.__h.filter(function(s){return!s.__||fn(s)})}catch(s){t.some(function(i){i.__h&&(i.__h=[])}),t=[],se.__e(s,n.__v)}}),ms&&ms(e,t)},se.unmount=function(e){hs&&hs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(s){try{At(s)}catch(i){t=i}}),n.__H=void 0,t&&se.__e(t,n.__v))};var $s=typeof requestAnimationFrame=="function";function yo(e){var t,n=function(){clearTimeout(s),$s&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,35);$s&&(t=requestAnimationFrame(n))}function At(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t}function fn(e){var t=te;e.__c=e.__(),te=t}function bs(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function _s(e,t){return typeof t=="function"?t(e):t}var ws=function(e,t,n,s){var i;t[0]=0;for(var a=1;a<t.length;a++){var o=t[a++],r=t[a]?(t[0]|=o?1:2,n[t[a++]]):t[++a];o===3?s[0]=r:o===4?s[1]=Object.assign(s[1]||{},r):o===5?(s[1]=s[1]||{})[t[++a]]=r:o===6?s[1][t[++a]]+=r+"":o?(i=e.apply(r,ws(e,r,n,["",null])),s.push(i),r[0]?t[0]|=2:(t[a-2]=0,t[a]=i)):s.push(r)}return s},ks=new Map;function Le(e){var t=ks.get(this);return t||(t=new Map,ks.set(this,t)),(t=ws(this,t.get(e)||(t.set(e,t=(function(n){for(var s,i,a=1,o="",r="",l=[0],c=function(d){a===1&&(d||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,d,o):a===3&&(d||o)?(l.push(3,d,o),a=2):a===2&&o==="..."&&d?l.push(4,d,0):a===2&&o&&!d?l.push(5,0,!0,o):a>=5&&((o||!d&&a===5)&&(l.push(a,0,o,i),a=6),d&&(l.push(a,d,0,i),a=6)),o=""},f=0;f<n.length;f++){f&&(a===1&&c(),c(f));for(var u=0;u<n[f].length;u++)s=n[f][u],a===1?s==="<"?(c(),l=[l],a=3):o+=s:a===4?o==="--"&&s===">"?(a=1,o=""):o=s+o[0]:r?s===r?r="":o+=s:s==='"'||s==="'"?r=s:s===">"?(c(),a=1):a&&(s==="="?(a=5,i=o,o=""):s==="/"&&(a<5||n[f][u+1]===">")?(c(),a===3&&(l=l[0]),a=l,(l=l[0]).push(2,0,a),a=0):s===" "||s==="	"||s===`
`||s==="\r"?(c(),a=2):o+=s),a===3&&o==="!--"&&(a=4,l=l[0])}return c(),l})(e)),t),arguments,[])).length>1?t:t[0]}var $n={};ro($n,{CATEGORIES:()=>Se,CAT_MAP:()=>ze,applyAccountRules:()=>Pe,classifyIncome:()=>Ye,detectCategory:()=>be,detectSmsKind:()=>Tt,extractAmount:()=>Mt,extractBalance:()=>hn,extractMerchant:()=>Kt,finishMemo:()=>Ls,formatDateLabel:()=>bo,formatWon:()=>F,isWeakMemo:()=>Is,matchByAmount:()=>Rs,matchRule:()=>Ne,matchScore:()=>Os,normKey:()=>z,parseBankSms:()=>Ks,parseCardSms:()=>Ms,parseFree:()=>Es,parseOne:()=>Lt,parsePaste:()=>Ko,parseReceipt:()=>Ts,parseStatement:()=>Ns,preferred:()=>To,reconcile:()=>gn,resolveYear:()=>et,scoreConfidence:()=>Oe,similarity:()=>Ge,stripNoise:()=>Be,toLocalISO:()=>le,todayISO:()=>oe,uid:()=>Ve});var xs=e=>String(e).padStart(2,"0");function le(e){return`${e.getFullYear()}-${xs(e.getMonth()+1)}-${xs(e.getDate())}`}function oe(e=0){let t=new Date;return t.setDate(t.getDate()+e),le(t)}function et(e,t,n=new Date){let s=n.getFullYear(),i=n.getMonth()+1;return e-i>2?s-=1:i-e>9&&(s+=1),le(new Date(s,e-1,t))}function bo(e){let t=new Date(e+"T00:00:00"),n=["일","월","화","수","목","금","토"];return`${t.getMonth()+1}월 ${t.getDate()}일 (${n[t.getDay()]})`}function F(e){return(e||0).toLocaleString("ko-KR")}function Ve(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}var Se=[{key:"food",label:"식비",color:"#8A6D3B",words:["밥","점심","저녁","식당","국밥","편의점","마트","장보기","아침","치킨","배달","음식","분식","김밥","GS25","CU","세븐일레븐","이마트","홈플러스","지에스리테일","GS리테일","비지에프리테일","BGF리테일","롯데마트","롯데쇼핑","이마트에브리데이","노브랜드","홈푸드","유통","식자재마트","농협하나로","남도장터","정육","축산","수산","familymart","lawson","7-eleven","ministop","코리아세븐","롯데씨브이에스","씨스페이시스","이마트24","하나로마트","파머스마켓","로컬푸드","우아한형제들","배달의민족","쿠팡이츠","요기요","위대한상상"]},{key:"cafe",label:"카페·간식",color:"#A9762F",words:["커피","카페","스타벅스","투썸","빵","디저트","간식","아이스크림","베이커리","이디야","메가커피"]},{key:"transport",label:"교통",color:"#3E6B8A",words:["택시","버스","지하철","교통카드","케이티엑스","KTX","기차","SRT","카카오T","한국철도공사","코레일","에스알","교통공사","도시철도","광역버스","monorail","yui rail","metro","subway","티머니","캐시비"]},{key:"car",label:"차량 유지비",color:"#6B5B3E",words:["기름","주유","주유소","휘발유","경유","엘피지","LPG","충전소","SK에너지","GS칼텍스","에쓰오일","S-OIL","현대오일뱅크","알뜰주유소","오일뱅크","오일","석유","에너지플러스","정비","카센터","자동차공업사","공업사","블루핸즈","오토큐","스피드메이트","현대서비스","기아서비스","타이어","타이어뱅크","엔진오일","미션오일","세차","자동차세","검사소","자동차검사","주차","주차장","톨게이트","하이패스","한국도로공사","자동차보험","다이렉트자동차"]},{key:"shopping",label:"쇼핑",color:"#7A4A8A",words:["옷","쇼핑","신발","가방","쿠팡","당근","인터넷쇼핑","네이버페이","무신사","올리브영","11번가","지마켓","G마켓","옥션","위메프","티몬","알리익스프레스","테무"]},{key:"living",label:"주거·생활",color:"#4A6B4A",words:["월세","관리비","전기","가스","수도","생활용품","세제","다이소","한국전력","아파트","어울림","관리사무소","상하수도","도시가스","난방비","버킷플레이스","오늘의집"]},{key:"health",label:"의료·건강",color:"#8A4A4A",words:["병원","약국","약값","헬스","운동","필라테스","의원","치과","한의원","내과","외과","이비인후과","피부과","안과","소아과","산부인과","정신건강의학과","의료원","보건소","의료재단"]},{key:"culture",label:"문화·여가",color:"#4A5F8A",words:["영화","넷플릭스","책","게임","공연","콘서트","유튜브","스포티파이","왓챠","CGV","메가박스","씨제이이엔엠","티빙","웨이브","쿠팡플레이","디즈니","멜론","지니뮤직","플러스 멤버십","멤버십"]},{key:"comm",label:"통신",color:"#5A5A5A",words:["통신","휴대폰","핸드폰","인터넷비","SK텔레콤","SKT","KT","LG유플러스","LGU","알뜰폰","브로드밴드","텔레콤","조이텔","헬로모바일","케이티엠모바일","KT엠모바일","에스케이텔링크","세븐모바일","프리텔레콤","세종텔레콤","리브엠","U+유모바일","이야기모바일"]},{key:"insurance",label:"보험",color:"#6B5A7A",words:["보험","실손","상해","화재보험"]},{key:"loan",label:"대출·이자",color:"#8A5A3B",words:["대출이자","이자상환","원리금","할부이자","대출상환","마이너스통장이자"]},{key:"family",label:"가족 송금",color:"#5A7A8A",words:["생활비","용돈"]},{key:"social",label:"경조사·회비",color:"#9A5B6E",words:["축의","부의","조의","근조","경조","결혼축하","화환","돌잔치","사우회","동창회","친목회","모임회비","계모임","향우회"]},{key:"travel",label:"여행",color:"#3E7A6B",words:["항공","에어로케이","에어부산","에어서울","티웨이","제주항공","진에어","이스타","eastar","아시아나","대한항공","airline","airways","nippon airw","japan airlines","peach avia","숙박","호텔","hotel","게스트하우스","리조트","resort","펜션","료칸","에어비앤비","airbnb","야놀자","여기어때","아고다","agoda","booking.com","부킹닷컴","익스피디아","expedia","호텔스컴바인","트리바고","tripla","클룩","klook","kkday","마이리얼트립","하나투어","모두투어","노랑풍선","인터파크투어","his ","트리플","스카이스캐너","getyourguide","viator","트립닷컴","trip.com","씨트립","렌터카","rent a car","면세점","duty free","여행","트래블월렛","공항","airport","공항철도","리무진","railway","jr동일본","jr이스트","jr east","jreast","신칸센","스이카","suica","파스모","pasmo","이코카","icoca","esim","여행자보험","도시락"]},{key:"income",label:"수입",color:"#3D6B4F",words:[]},{key:"etc",label:"기타",color:"#8A8A8A",words:[]}],ze=Object.fromEntries(Se.map(e=>[e.key,e])),Ss=["받았","월급","급여","용돈받","수입","보너스","환급","들어왔","벌었","정산받","상여"];function Cs(e){let t={영:0,일:1,이:2,삼:3,사:4,오:5,육:6,륙:6,칠:7,팔:8,구:9},n={십:10,백:100,천:1e3},s=0,i=0;for(let a of e)t[a]!==void 0?i=t[a]:n[a]!==void 0&&(s+=(i||1)*n[a],i=0);return s+i}function _o(e){let t=e,n=0;for(let[s,i]of[["억",1e8],["만",1e4]]){let a=t.indexOf(s);if(a!==-1){let o=t.slice(0,a);n+=(o===""?1:Cs(o))*i,t=t.slice(a+1)}}return n+Cs(t)}function Be(e){return String(e??"").replace(/\[?\s*(web발신|국외발신|국제발신|광고)\s*\]?/gi," ").replace(/(카드|체크|신용|카드번호)\s*[(\[]?\s*\d{4}\s*[)\]]?/gi,"$1 ").replace(/\d{4}\s*[*·]{2,}\s*\d{0,4}/g," ").replace(/[*·]{3,}\s*\d{3,4}/g," ").replace(/(^|[\s\]])[가-힣]\*{1,2}[가-힣]{1,2}님?(?=[\s\[]|$)/gm,"$1 ").replace(/\b\d{1,2}:\d{2}(:\d{2})?\b/g," ").replace(/[ \t]+/g," ")}var ko=["누적","잔액","한도","사용가능","가용","잔여","적립","포인트","마일리지"];function Rt(e,t){let n=e.slice(Math.max(0,t-14),t);return ko.some(s=>n.includes(s))}function Mt(e){let t=Be(e),n={억:1e8,만:1e4,천:1e3},s=[],i,a=/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)?\s*원/g;for(;(i=a.exec(t))!==null;){if(Rt(t,i.index))continue;let u=parseFloat(i[1].replace(/,/g,""));i[2]&&(u*=n[i[2]]),u>0&&s.push(Math.round(u))}if(s.length)return s[0];let o=[],r=/(?:^|[^0-9.])(\d{1,3}(?:,\d{3})+)(?![0-9])/g;for(;(i=r.exec(t))!==null;){if(Rt(t,i.index))continue;let u=parseInt(i[1].replace(/,/g,""),10);u>0&&o.push(u)}if(o.length)return o[0];let l=t.match(/([일이삼사오육륙칠팔구십백천만억영]+)\s*원/);if(l){let u=_o(l[1]);if(u>0)return u}let c=t.match(/([0-9][0-9,]*(?:\.[0-9]+)?)\s*(억|만|천)/);if(c&&!Rt(t,c.index)){let u=Math.round(parseFloat(c[1].replace(/,/g,""))*n[c[2]]);if(u>0)return u}let f=t.match(/(?:^|\s)(\d{3,})(?:\s|$)/);if(f){let u=parseInt(f[1],10);if(u>0)return u}return 0}function hn(e){let n=Be(e).match(/(잔여한도|잔여포인트|잔여금액|사용가능금액|잔액|잔고|남은금액|사용가능|잔여)[^\d-]{0,6}(-?\s?[0-9][0-9,]*)/);if(n){let s=parseInt(n[2].replace(/[,\s]/g,""),10);if(!isNaN(s))return s}return null}function z(e){return String(e??"").replace(/\d+\s*월\s*분?/g,"").replace(/\d+\s*(회차|회|차)/g,"").replace(/㈜|\(주\)|주식회사|주\)/g,"").replace(/\d+/g,"").replace(/[^\p{L}]/gu,"").replace(/점$/,"").toLowerCase()}function Ge(e,t){if(e=String(e??""),t=String(t??""),!e||!t)return 0;if(e===t)return 1;let n=o=>{let r=new Set,l=`  ${o}  `;for(let c=0;c<l.length-2;c++)r.add(l.slice(c,c+3));return r},s=n(e),i=n(t),a=0;for(let o of s)i.has(o)&&a++;return a/(s.size+i.size-a)}var wo=["자동이체","일시불","웹발신","승인취소","승인","취소","환불","할부","누적","포인트","잔여한도","잔여포인트","사용가능","잔여","잔액","한도","결제","출금","입금","이체","납부","청구","계좌","매입","정정","개월","체크카드","신용카드","기본료","요금할인","통신요금","부가가치세","이용상세내역","청구서","청구금액","납부할금액","총납부하실금액","사용기간","고객번호","납기일","할인액","미납액","모바일","체크우리","타행이체","타행건별","오픈뱅킹","오픈인증","대출결산","예금결산","인터넷","스마트폰뱅킹","창구","자동화기기"],xo=["국민","KB국민","KB","신한","삼성","현대","롯데","하나","우리","농협","NH","IBK","기업","카카오뱅크","카카오","토스","케이뱅크","SC제일","새마을금고","신협","우체국","부산","대구","광주","전북","경남","제주","씨티","산업"];function As(e){let t=e.replace(/\d+\s*월\s*분/g," ").replace(/\d+\s*(회차|회|차)/g," ").replace(/20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}/g," ").replace(/\d{1,2}[.\-/]\d{1,2}/g," ").replace(/\d{1,2}월\s*\d{1,2}일/g," ").replace(/-?[0-9][0-9,]*(?:\.[0-9]+)?\s*(억|만|천)?\s*원?/g," ").replace(/[()（）\[\]]/g," ");for(let n of xo)t=t.replace(new RegExp(`${n}\\s*(카드|은행|뱅크)`,"g")," ");for(let n of wo)t=t.split(n).join(" ");return t.replace(/\s+/g," ").trim()}function Kt(e){let n=Be(e).split(/\n/).map(i=>i.trim()).filter(Boolean),s=[];for(let i of n){let a=As(i);!a||!/[\p{L}]/u.test(a)||a.replace(/[^\p{L}]/gu,"").length<2||s.push(a)}return s.length?s[s.length-1].slice(0,30):""}function Ne(e,t){let n=String(e??"");if(n.length<2)return null;let s=null,i=0;for(let a of t||[]){let o=a&&typeof a.normKey=="string"?a.normKey:"";if(o.length<2)continue;let r=0;o===n?r=1e3:n.includes(o)?r=100+o.length:o.includes(n)&&n.length>=3&&n.length/o.length>=.5&&(r=50+n.length),r>i&&(s=a,i=r)}return s}function Co(e,t,n){if(/^[A-Za-z0-9+]{1,3}$/.test(n)){let s=n.replace(/[+]/g,"\\+");return new RegExp(`(^|[^A-Za-z])${s}([^A-Za-z]|$)`,"i").test(e)}return e.includes(n)||t.includes(n.toLowerCase())}var Do=/^(기본료|요금할인|통신요금|부가가치세|이용상세내역|청구서|청구금액|납부할금액|총납부하실금액|내역|합계|금액|할인|사용료|이용료|상호확인필요)$/;function Is(e){let t=String(e||"").replace(/\s+/g,"");return!t||t.length<2||Do.test(t)}function Rs(e,t=[]){if(!e)return null;let n=(t||[]).filter(s=>s&&s.amountHint&&Math.abs(s.amountHint-e)<=1);return n.length===1?n[0]:null}function be(e,t,n=[]){if(t==="income")return"income";let s=String(e??""),i=Ne(z(s),n);if(i&&i.category)return i.category;let a=s.toLowerCase();for(let o of Se)if(o.words.some(r=>Co(s,a,r)))return o.key;return"etc"}function Oe(e,t,n){let s=String(e??"");if(n)return 1;if(t==="etc")return .4;let i=ze[t];if(!i)return .4;let a=i.words.filter(o=>s.includes(o)).length;return a>=2?.9:a===1?.7:.5}function Ye(e,t){let n=t||{},s=`${e.counterpartyRaw||""} ${e.memo||""} ${e.rawText||""}`;if(e.amount===1)return{type:"transfer",transferKind:"verify",confidence:1};if(/(환불|취소|반품|정정)/.test(s))return{type:"expense",isRefund:!0,transferKind:null,confidence:1};if(/이자/.test(s)&&!/대출/.test(s))return{type:"income",category:"income",confidence:1};if(n.userName&&s.includes(n.userName))return{type:"transfer",transferKind:"internal",confidence:1};let i=n.incomeSources||[],a=i.find(l=>l&&s.includes(l));if(a)return{type:"income",category:"income",transferKind:null,confidence:1,incomeSource:a};let r=(n.excludedCounterparties||[]).find(l=>l&&s.includes(l));return r?{type:"transfer",transferKind:"excluded",confidence:1,excludedBy:r}:i.length===0?null:n.incomeOnlyFromSources!==!1?{type:"transfer",transferKind:"excluded",confidence:.4,needsCheck:!0}:null}var So=/^(신한|삼성|현대|국민|롯데|하나|우리|비씨|BC|농협|씨티|카카오|케이|토스)?카드(대금|결제대금|값)?$|^카드대금$/,Ao=/(공제회|적금|정기예금|청약|저축보험|연금저축|퇴직연금|펀드납입)/;function Pe(e,t){let n=t||{},s=`${e.counterpartyRaw||""} ${e.memo||""} ${e.rawText||""}`,i=(n.investKeywords||[]).find(c=>c&&s.includes(c));if(i)return{type:"transfer",transferKind:"invest",investBy:i,confidence:1};let a=String(e.counterpartyRaw||e.memo||"").replace(/\s+/g,"");if(e.direction!=="in"&&So.test(a))return{type:"transfer",transferKind:"cardPayment",confidence:1};if(e.direction!=="in"&&Ao.test(a))return{type:"transfer",transferKind:"savings",confidence:1};if(e.direction!=="in"&&/대출원금상환|원금상환/.test(a))return{type:"transfer",transferKind:"loanPrincipal",confidence:1};let o=(n.welfareCards||[]).find(c=>c&&s.includes(c));if(o)return{transferKind:"welfare",welfareBy:o,category:e.category};let r=(n.travelKeywords||[]).find(c=>c&&s.includes(c));if(r)return{type:"expense",transferKind:null,category:"travel",travelBy:r,confidence:1};let l=(n.familyTransferKeywords||[]).find(c=>c&&s.includes(c));if(l){let c=n.familyRegularAmount||0,f=c>0&&e.amount>c*1.4;return{type:"expense",transferKind:null,category:"family",familyBy:l,isExtra:f,confidence:1}}return null}function Tt(e,t){let n=String(e??"").replace(/\s/g,""),s=/\[(?!web발신|국외발신|국제발신|광고)[^\[\]]{2,12}\](승인|취소|승인취소)/i.test(n),i=(t&&t.welfareCards||[]).some(a=>a&&n.includes(String(a).replace(/\s/g,"")));return/(승인|취소|매입|일시불|할부)/.test(n)&&(/(카드|체크|신용)/.test(n)||s||i)?"card":/(출금|입금|이체|자동이체|납부)/.test(n)?"bank":/(합계|결제금액|받을금액|총액|부가세|사업자)/.test(n)?"receipt":"free"}function Et(e,t=new Date){let n=Be(e),s=n.match(/(20\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/);if(s)return le(new Date(+s[1],+s[2]-1,+s[3]));if(s=n.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/),s&&+s[1]>20)return le(new Date(2e3+ +s[1],+s[2]-1,+s[3]));if(s=n.match(/(\d{1,2})[.\-/](\d{1,2})/),s){let i=+s[1],a=+s[2];if(i>=1&&i<=12&&a>=1&&a<=31)return et(i,a,t)}return s=n.match(/(\d{1,2})월\s*(\d{1,2})일/),s?et(+s[1],+s[2],t):null}function Ms(e,t={}){let n=t.now||new Date,s=Mt(e),i=/(취소|환불|정정)/.test(e),a=Kt(e),o=be(a||e,"expense",t.rules),r=/(\d{1,2})\s*개월\s*할부/.exec(e),l=Pe({memo:a,rawText:e,category:o,amount:s},t.settings),c=l&&l.transferKind==="welfare"?hn(e):null;return{type:l&&l.type||"expense",welfareBalance:c,isExtra:!!(l&&l.isExtra),isRefund:i,category:l&&l.category||o,transferKind:l&&l.transferKind||null,amount:s,memo:a||e.replace(/\s+/g," ").trim().slice(0,24),date:Et(e,n)||oe(),normKey:z(a),paymentMethod:"card",installmentMonths:r?+r[1]:null,source:"sms",confidence:Oe(a||e,o),rawText:e}}function Ks(e,t={}){let n=t.now||new Date,s=Mt(e),i=hn(e),a=/(출금|이체출금|납부|송금)/.test(e)&&!/입금/.test(e),o=/입금/.test(e)&&!/출금/.test(e),r=a?"out":o?"in":null,l=Kt(e),c=/(ATM|CD출금|현금인출|현금출금)/i.test(e),f="expense",u=c?"cashOut":null,d=!1,g=null,h=!1;if(r==="in"){let v=Ye({counterpartyRaw:l,memo:l,rawText:e,amount:s},t.settings);v?(f=v.type,u=v.transferKind,d=!!v.needsCheck,g=v.confidence,v.isRefund&&(h=!0)):f=Ss.some($=>e.includes($))||/(급여|월급|상여)/.test(e)?"income":"transfer"}else c&&(f="transfer");let m=f==="income"?"income":be(l||e,"expense",t.rules),y=Pe({counterpartyRaw:l,memo:l,rawText:e,category:m,amount:s},t.settings);return y&&(y.type&&(f=y.type),y.category&&(m=y.category),u=y.transferKind,y.confidence!=null&&(g=y.confidence),d=!1),u&&["internal","invest","savings","cashOut","cardPayment","fxTopup","verify"].includes(u)&&(d=!1,g==null&&(g=1)),{type:f,direction:r,isRefund:h,isExtra:!!(y&&y.isExtra),needsCheck:d,category:m,amount:s,memo:l||e.replace(/\s+/g," ").trim().slice(0,24),date:Et(e,n)||oe(),normKey:z(l),paymentMethod:"account",transferKind:u,balanceAfter:i,counterpartyRaw:l,source:"sms",confidence:g??Oe(l||e,m),rawText:e}}var Io=["합계","결제금액","받을금액","총액","총 금액","판매금액","승인금액"];function Ts(e,t={}){let n=t.now||new Date,s=Be(e),i=0;for(let c of Io){let f=new RegExp(`${c}\\s*[:：]?\\s*([0-9][0-9,]*)`),u=s.match(f);if(u){let d=parseInt(u[1].replace(/,/g,""),10);if(d>0){i=d;break}}}if(!i){let c=[],f=/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{3,})\s*원?/g,u;for(;(u=f.exec(s))!==null;){if(Rt(s,u.index)||/(부가세|면세|과세|할인|거스름|받은금액)/.test(s.slice(Math.max(0,u.index-10),u.index)))continue;let d=parseInt(u[1].replace(/,/g,""),10);d>0&&c.push(d)}i=c.length?Math.max(...c):0}let a=s.split(/\n/).map(c=>c.trim()).filter(Boolean),o="";for(let c of a.slice(0,4))if(/[\p{L}]/u.test(c)&&As(c).length>=2&&!/\d{3,}/.test(c)){o=c.slice(0,30);break}let r=/(현금|현금영수증)/.test(e)&&!/카드/.test(e),l=be(o||e,"expense",t.rules);return{type:"expense",isRefund:!1,category:l,amount:i,memo:o||"영수증",date:Et(e,n)||oe(),normKey:z(o),paymentMethod:r?"cash":"card",source:"receipt",confidence:o?Oe(o,l):.4,rawText:e}}function Es(e,t={}){let n=Mt(e),s=Ss.some(o=>e.includes(o))?"income":"expense",i=0;/(그저께|그제)/.test(e)?i=-2:e.includes("어제")&&(i=-1);let a=be(e,s,t.rules);return{type:s,isRefund:!1,category:a,amount:n,memo:e.trim(),date:oe(i),normKey:z(e.replace(/[0-9,]+\s*원?/g,"")),paymentMethod:"unknown",source:"manual",confidence:Oe(e,a),rawText:e}}function Lt(e,t={}){let n=Tt(e,t.settings),s=n==="card"?Ms(e,t):n==="bank"?Ks(e,t):n==="receipt"?Ts(e,t):Es(e,t);return Ls(s,t)}var Ro=/(이용상세내역|청구서|청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)/,Mo=/(청구금액|납부할\s*금액|총\s*납부하실\s*금액|납부금액)\D{0,8}([0-9][0-9,]*)/;function Ls(e,t={}){if(!e||e.type==="income")return e;let n=String(e.rawText||e.memo||"");if(Ro.test(n)){let i=n.match(Mo),a=i?parseInt(i[2].replace(/,/g,""),10):null;e={...e,memo:"",normKey:"",amount:a&&a>0?a:e.amount}}if(!Is(e.memo))return e;let s=Rs(e.amount,t.rules);return s&&s.name?{...e,memo:s.name,normKey:z(s.name),counterpartyRaw:s.name,category:s.category||e.category,confidence:Math.max(e.confidence??.5,.8)}:{...e,memo:"상호 확인 필요",normKey:"",needsCheck:!0,confidence:Math.min(e.confidence??.5,.4)}}var Bs=/(20\d{2}[.\-/]\d{1,2}[.\-/]\d{1,2}|\d{1,2}[.\-/]\d{1,2}(?![.\-/]?\d{3})|\d{1,2}월\s*\d{1,2}일)/;function Ns(e,t={}){let n=t.now||new Date,i=Be(e).split(/\n/).map(u=>u.trim()).filter(Boolean),a=[],o=null;for(let u of i)Bs.test(u)?(o&&a.push(o),o={lines:[u]}):o&&o.lines.push(u);if(o&&a.push(o),a.length<2)return[];let r=a.map(u=>{let d=u.lines.join(" "),g=Et(d,n)||oe(),h=[],m=/(-?[0-9][0-9,]*)\s*원/g,y;for(;(y=m.exec(d))!==null;)h.push({v:parseInt(y[1].replace(/,/g,""),10),i:y.index});if(h.length===0){let w=/(-?[0-9]{1,3}(?:,[0-9]{3})+|-?[0-9]{4,})/g;for(;(y=w.exec(d))!==null;)h.push({v:parseInt(y[1].replace(/,/g,""),10),i:y.index})}let v=0,$=null,_=null;if(h.length>=3){$=h[h.length-1].v;let w=h[h.length-3].v,D=h[h.length-2].v;w>0&&D===0?(v=w,_="out"):D>0&&w===0?(v=D,_="in"):v=Math.abs(D||w)}else h.length===2?($=h[1].v,v=Math.abs(h[0].v)):h.length===1&&(v=Math.abs(h[0].v));_||(/출금|지급|인출/.test(d)?_="out":/입금|수취|예입/.test(d)&&(_="in"));let A=Kt(d);return{date:g,amount:v,balance:$,direction:_,merchant:A,body:d}}),l=[...r].reverse();for(let u=1;u<l.length;u++){let d=l[u-1],g=l[u];if(d.balance==null||g.balance==null)continue;let h=g.balance-d.balance;Math.abs(Math.abs(h)-g.amount)<=1&&(g.direction=h<0?"out":"in")}let c=[];for(let u=1;u<l.length;u++){let d=l[u-1],g=l[u];if(d.balance==null||g.balance==null||!g.amount)continue;let h=g.balance-(d.balance-g.amount),m=g.balance-(d.balance+g.amount),y=g.direction==="out"?h:g.direction==="in"?m:Math.abs(h)<=Math.abs(m)?h:m;Math.abs(y)>1&&c.push({afterDate:d.date,beforeDate:g.date,missing:Math.abs(y)})}return{entries:r.filter(u=>u.amount>0).map(u=>{let d=u.direction==="in"?"transfer":"expense",g=null,h=!1,m=!1;if(u.direction==="in"){let _=Ye({counterpartyRaw:u.merchant,memo:u.merchant,rawText:u.body,amount:u.amount},t.settings);_?(d=_.type,g=_.transferKind,h=!!_.needsCheck,m=!!_.isRefund):/(급여|월급|상여)/.test(u.body)&&(d="income")}let y=d==="income"?"income":be(u.merchant||u.body,"expense",t.rules),v=Pe({counterpartyRaw:u.merchant,memo:u.merchant,rawText:u.body,category:y,amount:u.amount},t.settings),$=!1;return v&&(v.type&&(d=v.type),v.category&&(y=v.category),g=v.transferKind,$=!!v.isExtra,h=!1),{type:d,transferKind:g,needsCheck:h,isExtra:$,direction:u.direction,isRefund:m,category:y,amount:u.amount,memo:u.merchant||"내역",date:u.date,normKey:z(u.merchant),paymentMethod:"account",balanceAfter:u.balance,counterpartyRaw:u.merchant,source:"statement",confidence:Oe(u.merchant||u.body,y),rawText:u.body}}),gaps:c}}function Ko(e,t={}){let n=Be(e),s=(n.match(new RegExp(Bs.source,"g"))||[]).length,i=(n.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})/g)||[]).length;if(s>=2&&i>=3){let a=Ns(e,t);if(a.entries&&a.entries.length>=2)return{mode:"multi",...a}}return{mode:"single",entries:[Lt(e,t)],gaps:[]}}var Ds={statement:4,sms:3,shortcut:3,receipt:2,capture:2,manual:1,favorite:1,auto:1};function Os(e,t){if(e.amount!==t.amount||e.type!==t.type)return 0;let n=new Date(e.date+"T00:00:00"),s=new Date(t.date+"T00:00:00"),i=Math.abs((n-s)/864e5);if(i>3)return 0;let a=0,o=[];i===0?(a+=40,o.push("같은 날")):i===1?(a+=30,o.push("하루 차이")):(a+=15,o.push(`${i}일 차이`));let r=e.normKey||"",l=t.normKey||"";return r&&l&&(r===l?(a+=40,o.push("같은 가맹점")):r.includes(l)||l.includes(r)?(a+=25,o.push("비슷한 가맹점")):Ge(r,l)>=.6&&(a+=15,o.push("가맹점 유사"))),e.accountId&&t.accountId&&e.accountId===t.accountId&&(a+=15,o.push("같은 계좌")),e.paymentMethod&&e.paymentMethod===t.paymentMethod&&(a+=5),{score:a,reasons:o}}function To(e,t){return(Ds[e.source]||0)>=(Ds[t.source]||0)?e:t}function gn(e,t){let n=[],s=[],i=[],a=[...t];for(let o of e){if(o.transferKind==="fxTopup"||o.category==="family"){n.push(o),a.push(o);continue}let r=null;for(let l of a){if(l.deleted||o.sourceHash&&l.sourceHash&&o.sourceHash!==l.sourceHash&&String(o.sourceHash).split("|")[0]===String(l.sourceHash).split("|")[0])continue;let c=Os(o,l);!c||!c.score||(!r||c.score>r.score)&&(r={...c,target:l})}r&&r.score>=80?s.push({incoming:o,target:r.target,...r}):r&&r.score>=50?(i.push({incoming:o,target:r.target,...r}),a.push(o)):(n.push(o),a.push(o))}return{added:n,merged:s,review:i}}var Eo=["id","date","type","category","amount","memo","isRefund","paymentMethod","accountId","normKey","source","confidence","tripId","carId","currency","foreignAmount","balanceAfter","transferKind","direction","fixedId","rawText","createdAt","updatedAt","deleted","status"];function Lo(e){let t={};for(let n of Eo)e[n]!==void 0&&(t[n]=e[n]);return t}async function Bo(e,t){let n=await fetch(e,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(t),redirect:"follow"});if(!n.ok)throw new Error(`HTTP ${n.status}`);let s=await n.text(),i;try{i=JSON.parse(s)}catch{throw new Error("응답을 읽지 못했어요")}if(!i.ok)throw new Error(i.error||"서버가 거부했어요");return i}async function vn(e,t){let n=new URLSearchParams(t).toString(),s=await fetch(`${e}${e.includes("?")?"&":"?"}${n}`,{redirect:"follow"});if(!s.ok)throw new Error(`HTTP ${s.status}`);let i=JSON.parse(await s.text());if(!i.ok)throw new Error(i.error||"서버가 거부했어요");return i}function No(e){if(!e)return e;let t=String(e),n=t.match(/^(\d{4})-(\d{2})-(\d{2})/);if(n)return`${n[1]}-${n[2]}-${n[3]}`;let s=new Date(t);if(!isNaN(s)){let i=a=>String(a).padStart(2,"0");return`${s.getFullYear()}-${i(s.getMonth()+1)}-${i(s.getDate())}`}return t}function Oo(e,t){let n=new Map(e.map(o=>[o.id,o])),s=0,i=0;for(let o of t){let r={...o,date:No(o.date)};if(!/^\d{4}-\d{2}-\d{2}$/.test(r.date||""))continue;let l=n.get(r.id);l?(r.updatedAt||0)>(l.updatedAt||0)&&(n.set(r.id,{...l,...r,dirty:!1}),i++):(n.set(r.id,{...r,dirty:!1}),s++)}return{list:Array.from(n.values()).sort((o,r)=>o.date<r.date?1:o.date>r.date?-1:(r.createdAt||0)-(o.createdAt||0)),added:s,updated:i}}async function Ps(e){let{sheetUrl:t,sheetToken:n}=e.settings||{};if(!t)throw new Error("시트 주소가 없어요");let s=e.entries.filter(f=>f.dirty);s.length&&await Bo(t,{token:n,op:"upsert",entries:s.map(Lo)});let i=await vn(t,{token:n,since:e.settings.lastSyncAt||""}),a=i.entries||[],{list:o,added:r,updated:l}=Oo(e.entries,a);return{db:{...e,entries:o.map(f=>f.dirty&&s.some(u=>u.id===f.id)?{...f,dirty:!1}:f),settings:{...e.settings,lastSyncAt:i.serverTime||new Date().toISOString()}},pushed:s.length,pulled:r+l}}async function Fs(e,t,n,s){let i=await vn(e,{token:t,op:"calendar",from:n,to:s});if(!Array.isArray(i.events))throw new Error("Code.gs를 새 버전으로 바꿔야 캘린더를 읽을 수 있어요");return i.events}async function Hs(e,t){return await vn(e,{token:t,op:"ping"})}var Bt=null;function Po(){return Bt||(Bt=(async()=>{let e=[new URL("./ocr/",document.baseURI).href,new URL("./",document.baseURI).href],t=["tesseract.min.js","worker.min.js","kor.traineddata.gz","eng.traineddata.gz"],n=!1,s={};for(let o of e){let r=[];for(let l of t)try{(await fetch(o+l,{method:"GET",cache:"no-store"})).ok||r.push(l)}catch{n=!0,r.push(l)}if(!r.length)return o;s[o]=r}if(n)throw new Error("인터넷에 연결되어 있는지 확인해주세요. 글자 인식 도구는 처음 한 번만 받으면 됩니다");let i=e.slice().sort((o,r)=>s[o].length-s[r].length)[0],a=s[i];throw new Error(`${a.slice(0,2).join(", ")}${a.length>2?` 외 ${a.length-2}개`:""} 파일이 서버에 없어요. 인식 파일 8개를 모두 올렸는지 확인해주세요`)})().catch(e=>{throw Bt=null,e})),Bt}var Nt=null,rt=null;function Fo(e){return new Promise((t,n)=>{let s=document.createElement("script");s.src=e,s.onload=t,s.onerror=()=>n(new Error("tesseract.min.js는 받았는데 실행되지 않았어요. 새로고침 후 다시 해보세요")),document.head.appendChild(s)})}async function Ho(){let e=await Po();return window.Tesseract||await Fo(e+"tesseract.min.js"),Nt||(Nt=(async()=>window.Tesseract.createWorker(["kor","eng"],1,{workerPath:e+"worker.min.js",corePath:e,langPath:e,gzip:!0,logger:t=>rt&&rt(t)}))().catch(t=>{throw Nt=null,t})),Nt}async function Us(e,t){let n=Array.from(e||[]);if(typeof window<"u"&&typeof window.__ledgerOcrForTest=="function")return window.__ledgerOcrForTest(n);rt=a=>t&&t({...a,page:0,pages:n.length});let s=await Ho(),i=[];for(let a=0;a<n.length;a++){let o=n[a];rt=c=>t&&t({...c,page:a+1,pages:n.length});let{data:r}=await s.recognize(o,{},{blocks:!0,text:!1}),l=[];for(let c of r.blocks||[])for(let f of c.paragraphs||[])for(let u of f.lines||[])l.push({text:u.text,x0:u.bbox.x0,y0:u.bbox.y0,x1:u.bbox.x1,y1:u.bbox.y1});i.push({words:l,fileDate:new Date(o.lastModified||Date.now()),name:o.name})}return rt=null,i}function Uo(e){let t=(e||[]).filter(o=>o&&String(o.text||"").trim()&&isFinite(o.y0)&&isFinite(o.y1));if(!t.length)return[];let n=t.map(o=>Math.max(1,o.y1-o.y0)).sort((o,r)=>o-r),s=n[Math.floor(n.length/2)],i=[...t].sort((o,r)=>o.y0+o.y1-(r.y0+r.y1)),a=[];for(let o of i){let r=(o.y0+o.y1)/2,l=a[a.length-1];l&&Math.abs(r-l.yc)<=s*.6?(l.words.push(o),l.yc=(l.yc*(l.words.length-1)+r)/l.words.length):a.push({yc:r,words:[o]})}return a.map(o=>o.words.sort((r,l)=>r.x0-l.x0).map(r=>String(r.text).trim()).join(" "))}var jo={"¥":"JPY","￥":"JPY",$:"USD","€":"EUR","£":"GBP","฿":"THB","₫":"VND"},Wo={JPY:"JPY",USD:"USD",EUR:"EUR",GBP:"GBP",THB:"THB",VND:"VND",TWD:"TWD",HKD:"HKD",CNY:"CNY",엔:"JPY",달러:"USD",유로:"EUR",바트:"THB",동:"VND"},Vo=/^(일시불|할부|\d{1,2}개월|승인|승인취소|취소|매입|결제|결제취소|충전|환전|이체|입금|출금|자동이체|체크카드|체크|신용|신용카드|해외|국내|본인|가족|완료|예정|확정|잔액|잔고|잔여|사용|이용|내역|거래|오픈뱅킹|스마트폰|인터넷|모바일|ATM|CD|펌뱅킹|타행|당행|대체)$/i,zo=/(거래\s*내역|이용\s*내역|결제\s*내역|사용\s*내역|입출금|조회|필터|검색|전체|이번\s*달|지난\s*달|월별|기간\s*설정)/,yn=/\(\s*(월|화|수|목|금|토|일)\s*\)|(월|화|수|목|금|토|일)요일/g;function Go(e,t){let n=e.replace(/\s+/g," "),s,i=null,a="",o=null;if(s=n.match(/(오늘|어제|그저께|그제)/)){let l=s[1]==="오늘"?0:s[1]==="어제"?1:2,c=new Date(t.getFullYear(),t.getMonth(),t.getDate()-l);i=le(c),a=s[0]}else if(s=n.match(/(20\d{2})(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])(?!\d)/))i=le(new Date(+s[1],+s[2]-1,+s[3])),a=s[0];else if((s=n.match(/(20\d{2})\s*[.\-/년]?\s*([0-9OolI?]{1,2})\s*[.\-/월]?\s*([0-9OolI?]{1,2})\s*일/))||(s=n.match(/(20\d{2})\s*[.\-/년]\s*([0-9OolI?]{1,2})\s*[.\-/월]\s*([0-9OolI?]{1,2})/))){let l=+s[1],c=js(s[2]),f=js(s[3]);a=s[0],c!==null&&f!==null&&c>=1&&c<=12&&f>=1&&f<=31?i=le(new Date(l,c-1,f)):f!==null&&f>=1&&f<=31?o={year:l,day:f}:c!==null&&c>=1&&c<=12&&(o={year:l,month:c})}else(s=n.match(/(?:^|\s)(\d{1,2})월\s*(\d{1,2})일/))?(+s[1]>=1&&+s[1]<=12&&+s[2]>=1&&+s[2]<=31&&(i=et(+s[1],+s[2],t)),a=s[0]):(s=n.match(/(?:^|\s)(\d{1,2})[./](\d{1,2})(?![\d,.])/))&&(+s[1]>=1&&+s[1]<=12&&+s[2]>=1&&+s[2]<=31&&(i=et(+s[1],+s[2],t)),a=s[0]);if(!i&&o){let l=n.replace(a," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(yn," ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g,"");return{iso:null,partial:o,headerOnly:l.length===0}}if(!i)return{iso:null,headerOnly:!1};let r=n.replace(a," ").replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(yn," ").replace(/오전|오후|[()\s·ㆍ•*∙‧\-|~]/g,"");return{iso:i,headerOnly:r.length===0}}function Yo(e){let t=[],n=e,s=(i,a)=>{n=n.replace(i,(...o)=>{let r=a(o);return r?(t.push(r)," "):o[0]})};return s(/([+\-−–])?\s*([¥￥$€£฿₫])\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/g,i=>({kind:"fx",currency:jo[i[2]],value:parseFloat(i[4].replace(/,/g,"")),sign:tt(i[1]||i[3])})),s(/([+\-−–])?\s*\b(JPY|USD|EUR|GBP|THB|VND|TWD|HKD|CNY)\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)/gi,i=>({kind:"fx",currency:i[2].toUpperCase(),value:parseFloat(i[3].replace(/,/g,"")),sign:tt(i[1])})),s(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+(?:\.\d{1,2})?|\d+(?:\.\d{1,2})?)\s*(엔|달러|유로|바트)(?![가-힣])/g,i=>({kind:"fx",currency:Wo[i[3]],value:parseFloat(i[2].replace(/,/g,"")),sign:tt(i[1])})),s(/(잔액|잔고|잔여|남은\s*금액)\s*[:：]?\s*([+\-−–])?\s*(\d{1,3}(?:,\d{3})+|\d+)\s*원?/g,i=>({kind:"balance",value:parseInt(i[3].replace(/,/g,""),10)*(tt(i[2])<0?-1:1)})),s(/([+\-−–])?\s*(\d{1,3}(?:,\d{3})+)(?:\s*원)?/g,i=>({kind:"krw",value:parseInt(i[2].replace(/,/g,""),10),sign:tt(i[1])})),n=n.replace(/(^|[^\d,])([+\-−–])?\s*(\d{1,9})\s*원/g,(i,a,o,r)=>(t.push({kind:"krw",value:parseInt(r,10),sign:tt(o)}),a+" ")),{amounts:t,rest:n}}function tt(e){return e?e==="+"?1:-1:0}function js(e){let t=String(e||"").replace(/[Oo]/g,"0").replace(/[lI]/g,"1");return/^\d{1,2}$/.test(t)?+t:null}function Jo(e){return e.replace(/\d{1,2}:\d{2}(:\d{2})?/g," ").replace(/(20\d{2})\s*[.\-/년]\s*\d{1,2}\s*[.\-/월]\s*\d{1,2}\s*일?/g," ").replace(/\d{1,2}월\s*\d{1,2}일/g," ").replace(yn," ").replace(/[·ㆍ•*∙‧|>›»:;,]/g," ").split(/\s+/).filter(Boolean).filter(s=>{let i=s.replace(/^[\-+=~*_.()[\]]+|[\-+=~*_.()[\]]+$/g,"");return!(!i||Vo.test(i)||/^[\d./]+$/.test(i)||!/[가-힣]/.test(i)&&i.length<=1)}).map(s=>s.replace(/^[\-+=~*_.()[\]]+|[\-+=~_.([]+$/g,"")).filter(Boolean).join(" ").trim()}var Xo=/(취소|환불|정정|반품)/,qo=/(입금|급여|월급|상여|이자|환급|받은|받음)/,Zo=/(잔액|잔고|이체|입금|출금|자동이체|ATM|타행|당행)/;function Qo(e,t={}){let n=t.fileDate instanceof Date&&!isNaN(t.fileDate)?t.fileDate:t.now||new Date,s=n,i=[],a=null,o=null,r=null,l=0,c=[],f=()=>{r&&i.push(r),r=null},u=(e||[]).map(h=>{let m=String(h||"").replace(/\s+/g," ").trim();if(!m)return null;let{amounts:y,rest:v}=Yo(m);return{line:m,amounts:y,rest:v,d:Go(v,s)}}).filter(Boolean);for(let h=0;h<u.length;h++){let m=u[h].d;if(m.iso||!m.partial)continue;let y=null;for(let D=1;D<u.length&&!y;D++)for(let x of[h-D,h+D]){let R=u[x]&&u[x].d;if(R&&R.iso){y=R.iso;break}}if(!y)continue;let[v,$]=y.split("-"),_=m.partial.year||+v,A=m.partial.month||+$,w=m.partial.day;!w||A<1||A>12||(u[h].d={iso:le(new Date(_,A-1,w)),headerOnly:m.headerOnly,borrowed:!0})}for(let h of u){let{line:m,amounts:y,rest:v,d:$}=h;if($.iso&&$.headerOnly&&!y.length){f(),a=$.iso,o=null;continue}let _=Jo(v),A=y.filter(B=>B.kind==="krw"||B.kind==="fx"),w=y.find(B=>B.kind==="balance");if(!A.length){if(!r&&!i.length&&c.push(m),r&&!_){r.detail.push(m),w&&r.balance==null&&(r.balance=w.value);continue}if(r&&w&&r.balance==null){r.balance=w.value,r.detail.push(m);continue}_&&!zo.test(_)?(f(),o=_):r&&r.detail.push(m);continue}let D=A.find(B=>B.kind==="krw"),x=A.find(B=>B.kind==="fx");if(!_&&r&&!o&&(D&&!x&&r.krw==null&&r.fx||x&&!D&&!r.fx&&r.krw!=null)){D?r.krw=D:r.fx=x,w&&r.balance==null&&(r.balance=w.value),r.detail.push(m);continue}f();let R=_||o||"";o=null,r={date:$.iso||a,dateGuessed:!($.iso||a),merchant:R,krw:D||null,fx:x||null,balance:w?w.value:null,detail:[m]}}f();let d=new Set,g=[];for(let h of i){if(!h.merchant)continue;let m=[h.merchant,...h.detail].join(" ");if(!h.krw){l++;continue}let y=h.krw.value;if(!(y>0))continue;let v=h.date||le(n),$=h.krw.sign||(h.fx?h.fx.sign:0),_=Xo.test(m),A=h.balance!=null||Zo.test(m),w=_?"out":$>0||$===0&&qo.test(m)?"in":"out",D=`${v}|${y}|${z(h.merchant)}|${h.fx?h.fx.value:""}`;if(d.has(D))continue;d.add(D);let x=w==="in"?"transfer":"expense",R=null,B=!!h.dateGuessed,H=!1;if(w==="in"){let J=Ye({counterpartyRaw:h.merchant,memo:h.merchant,rawText:m,amount:y},t.settings);J?(x=J.type,R=J.transferKind,B=B||!!J.needsCheck):/(급여|월급|상여)/.test(m)&&(x="income")}let j=x==="income"?"income":be(h.merchant,"expense",t.rules),X=Pe({counterpartyRaw:h.merchant,memo:h.merchant,rawText:`${m} ${c.join(" ")}`,category:j,amount:y},t.settings);X&&(X.type&&(x=X.type),X.category&&(j=X.category),R=X.transferKind,H=!!X.isExtra),g.push({type:x,transferKind:R,needsCheck:B,isExtra:H,direction:w,isRefund:_&&x==="expense",category:j,amount:y,date:v,memo:h.merchant,normKey:z(h.merchant),paymentMethod:A?"account":"card",balanceAfter:h.balance,counterpartyRaw:h.merchant,currency:h.fx?h.fx.currency:"",foreignAmount:h.fx?h.fx.value:null,isOverseas:!!h.fx,dateGuessed:!!h.dateGuessed,source:"capture",confidence:Oe(h.merchant,j),rawText:m})}return{entries:g,gaps:[],skippedNoKrw:l}}function Ws(e,t={}){let n=[],s=0,i=new Set;for(let a of e||[]){let o=a.lines||Uo(a.words),r=Qo(o,{...t,fileDate:a.fileDate||t.fileDate});s+=r.skippedNoKrw;for(let l of r.entries){let c=`${l.date}|${l.amount}|${l.normKey}|${l.foreignAmount??""}`;i.has(c)||(i.add(c),n.push(l))}}return{entries:n,gaps:[],skippedNoKrw:s}}var wn=864e5,_e=(e,t)=>Math.round((new Date(t+"T00:00:00")-new Date(e+"T00:00:00"))/wn);function Pt(e){let t=new Map;for(let i of e)t.set(i,(t.get(i)||0)+1);let n=e[0],s=0;for(let[i,a]of t)a>s&&(n=i,s=a);return n}var ei=e=>{let t=[...e].sort((n,s)=>n-s);return t.length%2?t[(t.length-1)/2]:Math.round((t[t.length/2-1]+t[t.length/2])/2)};function zs(e,t={}){let n=t.minCount||3,s=new Map;for(let a of e){if(a.deleted||a.type==="income"||!a.amount||a.transferKind&&["external","welfare"].includes(a.transferKind)===!1||a.isExtra)continue;let o=a.normKey||z(a.memo);!o||o.length<2||(s.has(o)||s.set(o,[]),s.get(o).push(a))}let i=[];for(let[a,o]of s){if(o.length<n)continue;let r=new Map;for(let m of[...o].sort((y,v)=>y.date<v.date?-1:1)){let y=m.date.slice(0,7);r.has(y)||r.set(y,m)}let l=Array.from(r.values());if(l.length<n)continue;let c=[];for(let m=1;m<l.length;m++)c.push(_e(l[m-1].date,l[m].date));let f=c.filter(m=>m>=25&&m<=36).length;if(c.length===0||f/c.length<.6)continue;let u=l.map(m=>m.amount),d=ei(u),g=u.some(m=>m!==u[0]),h=l[l.length-1];i.push({normKey:a,name:h.memo||a,amount:d,amountVariable:g,dayOfMonth:Pt(l.map(m=>parseInt(m.date.slice(8,10),10))),category:Pt(l.map(m=>m.category)),accountId:h.accountId||null,paymentMethod:h.paymentMethod||"account",count:l.length,lastSeen:h.date,sampleIds:l.map(m=>m.id)})}return i.sort((a,o)=>o.amount-a.amount)}function Ht(e,t){if(!e||!t||e.deleted)return!1;let n=e.normKey||z(e.memo),s=t.normKey;if(!n||!s||!(n===s||n.includes(s)||s.includes(n)||Ge(n,s)>=.6))return!1;let a=Math.abs(parseInt(e.date.slice(8,10),10)-t.dayOfMonth);return!(!(a<=3||a>=26)||!t.amountVariable&&Math.abs(e.amount-t.amount)/t.amount>.2)}function Gs(e,t,n={}){let s=n.now||new Date,i=le(s),a=[];for(let o of e){if(o.status&&o.status!=="active")continue;let r=i.slice(0,7),[l,c]=r.split("-").map(Number),f=new Date(l,c,0).getDate(),u=Math.min(o.dayOfMonth||1,f),d=`${r}-${String(u).padStart(2,"0")}`;d>i||t.some(h=>h.date&&h.date.slice(0,7)===r&&(h.fixedId===o.id||!h.deleted&&Ht(h,o)))||a.push({date:d,type:"expense",category:o.category,amount:o.amount,memo:o.name,normKey:o.normKey,accountId:o.accountId,paymentMethod:o.paymentMethod||"account",fixedId:o.id,source:"auto",confidence:1,status:"scheduled",amountEstimated:!!o.amountVariable})}return a}function Ys(e,t){let n=[],s=[],i=e.filter(a=>a.status==="scheduled"&&!a.deleted);for(let a of i){let o=t.find(l=>l.id===a.fixedId),r=e.find(l=>!l.deleted&&l.id!==a.id&&l.status!=="scheduled"&&l.date.slice(0,7)===a.date.slice(0,7)&&(o?Ht(l,o):!1));if(r){n.push({scheduledId:a.id,realId:r.id,amount:r.amount});continue}_e(a.date,oe())>7&&s.push(a.id)}return{settled:n,unconfirmed:s}}var ti=["신한카드","국민카드","삼성카드","현대카드","롯데카드","하나카드","우리카드","농협카드","비씨카드","카드대금","일시불대금","청구대금"],ni=["트래블","travel","충전","머니","환전","월렛","wallet"],si=["적금","예금","청약","irp","연금","저축"],ai=["키움증권","키움","미래에셋","삼성증권","NH투자","한국투자","KB증권","신한투자","하나증권","대신증권","토스증권","유안타","메리츠증권","이베스트","카카오페이증권","증권","선물","CMA","펀드"],oi=["atm","cd출금","현금인출","현금출금","자동화기기"];function Js(e,t={}){let n=t.accounts||[],s=t.settings||{};if(e.category==="family"||e.category==="travel")return null;let i=`${e.counterpartyRaw??""} ${e.memo??""} ${e.rawText??""}`;if((s.familyTransferKeywords||[]).some(h=>h&&i.includes(h))||(s.travelKeywords||[]).some(h=>h&&i.includes(h)))return null;let a=String(t.userName??"").trim(),o=`${e.counterpartyRaw??""} ${e.memo??""} ${e.rawText??""}`,r=o.toLowerCase(),l=e.normKey||z(e.memo),c=h=>n.find(m=>h&&!h.includes(m.kind)?!1:m.last4&&o.includes(m.last4)?!0:[m.name,...m.aliases||[]].filter(Boolean).some(v=>{let $=z(v);return $&&(l===$||l.includes($)||r.includes(v.toLowerCase()))})),f=c(["bank"]);if(f&&f.id!==e.accountId)return{transferKind:"internal",toAccountId:f.id};if(ni.some(h=>r.includes(h))){let h=c(["fx"]);return{transferKind:"fxTopup",toAccountId:h?h.id:null}}let u=c(["card"]);if(u||ti.some(h=>o.includes(h)))return{transferKind:"cardPayment",toAccountId:u?u.id:null};if(oi.some(h=>r.includes(h))){let h=n.find(m=>m.kind==="cash");return{transferKind:"cashOut",toAccountId:h?h.id:null}}let d=c(["invest"]);if(d||ai.some(h=>o.includes(h)||r.includes(h.toLowerCase())))return{transferKind:"invest",toAccountId:d?d.id:null};let g=c(["savings"]);return g||si.some(h=>r.includes(h))?{transferKind:"savings",toAccountId:g?g.id:null}:a&&o.includes(a)?{transferKind:"internal",toAccountId:null,unknownAccount:!0}:{transferKind:"external",toAccountId:null}}function ii(e,t,n={}){if(!e||!t||e.accountId&&t.accountId&&e.accountId===t.accountId)return 0;let s=e.amount-t.amount;if(s!==0&&!(s>0&&s<=1e3))return 0;let i=Math.abs(_e(e.date,t.date));if(i>2)return 0;let a=0,o=[];i===0?(a+=35,o.push("같은 날")):i===1?(a+=20,o.push("하루 차이")):a+=8;let r=String(n.userName??"").trim(),l=`${e.counterpartyRaw||""} ${e.memo||""}`,c=`${t.counterpartyRaw||""} ${t.memo||""}`;return r&&l.includes(r)&&c.includes(r)?(a+=30,o.push("양쪽 다 본인 명의")):z(l)&&z(l)===z(c)?(a+=20,o.push("같은 적요")):Ge(z(l),z(c))>=.5&&(a+=10),s===0?(a+=15,o.push("금액 일치")):(a+=10,o.push(`수수료 ${s}원`)),(n.history||0)>=3&&(a+=15,o.push("자주 오가는 조합")),{score:a,reasons:o,fee:s}}function Xs(e,t={}){let n=e.filter(c=>!c.deleted&&(c.type==="transfer"||c.transferKind==="internal")&&c.amount>0),s=n.filter(c=>c.direction==="out"||c.direction==null&&c.type==="transfer"),i=n.filter(c=>c.direction==="in"),a=new Set,o=[],r=[];for(let c of s){if(a.has(c.id))continue;let f=null;for(let u of i){if(a.has(u.id)||u.id===c.id)continue;let d=ii(c,u,t);!d||!d.score||(!f||d.score>f.score)&&(f={...d,inn:u})}f&&(f.score>=75?(o.push({out:c,inn:f.inn,...f}),a.add(c.id),a.add(f.inn.id)):f.score>=50&&r.push({out:c,inn:f.inn,...f}))}let l=n.filter(c=>!a.has(c.id)&&!r.some(f=>f.out.id===c.id||f.inn.id===c.id));return{pairs:o,review:r,halves:l}}function qs(e,t){let n=e.filter(i=>!i.deleted&&i.accountId===t&&i.balanceAfter!=null).sort((i,a)=>i.date<a.date?-1:i.date>a.date?1:(i.createdAt||0)-(a.createdAt||0));if(n.length<2)return{gaps:[],latest:n[0]||null};let s=[];for(let i=1;i<n.length;i++){let a=n[i-1],o=n[i],r=o.type==="income"||o.direction==="in"?o.amount:-o.amount,l=a.balanceAfter+r,c=o.balanceAfter-l;Math.abs(c)>1&&s.push({afterDate:a.date,beforeDate:o.date,missing:Math.abs(c),sign:c<0?"out":"in"})}return{gaps:s,latest:n[n.length-1]}}function Zs(e,t={}){let n=new Map;for(let i of e){if(i.deleted||i.type!=="expense"||t.onlyPending&&i.status!=="pending")continue;let a=i.normKey||z(i.memo)||"__none";n.has(a)||n.set(a,[]),n.get(a).push(i)}let s=[];for(let[i,a]of n){let o=new Set(a.map(l=>l.category)),r=ta(a[0].memo);s.push({normKey:i,name:Pt(a.map(l=>l.memo))||i,count:a.length,total:a.reduce((l,c)=>l+(c.isRefund?-c.amount:c.amount),0),category:Pt(a.map(l=>l.category)),mixed:o.size>1,payLike:r,needsReview:!r&&a.some(l=>l.status==="pending"||l.category==="etc"),suggest:yi(a,t)?"social":null,ids:a.map(l=>l.id)})}return s.sort((i,a)=>a.total-i.total)}function Qs(e){let t=[],n=[],s="",i=!1,a=e.replace(/^\uFEFF/,"");for(let o=0;o<a.length;o++){let r=a[o];i?r==='"'?a[o+1]==='"'?(s+='"',o++):i=!1:s+=r:r==='"'?i=!0:r===","?(n.push(s.trim()),s=""):r===`
`?(n.push(s.trim()),t.push(n),n=[],s=""):r==="\r"||(s+=r)}return(s||n.length)&&(n.push(s.trim()),t.push(n)),t.filter(o=>o.some(r=>r!==""))}var me={date:["거래일시","거래일자","이용일자","거래일","이용일","승인일","매출일","날짜","일자"],amount:["이용금액","승인금액","거래금액","결제금액","금액"],merchant:["가맹점명","기재내용","가맹점","거래처","적요","내용","상호","내역","비고","받는분","보낸분"],balance:["거래후잔액","거래후 잔액","잔액","잔고"],outCol:["출금금액","출금액","출금 (원)","출금(원)","찾으신금액","찾으신 금액","지급금액","출금","지급"],inCol:["입금금액","입금액","입금 (원)","입금(원)","맡기신금액","맡기신 금액","예입금액","입금","예입"],installment:["이용구분","할부구분","할부개월"],cancel:["취소상태","매입구분","승인상태"],cardName:["이용카드","카드명","카드구분"],kind:["거래구분","거래종류","거래유형","적요","구분"]},ri=/(총\s*\d+\s*건|출금건수|입금건수|합\s*계|소\s*계|^\d+\/\d+$)/,Je=e=>String(e||"").replace(/\s+/g,"");function ea(e){let t=-1,n=null;for(let r=0;r<Math.min(e.length,25);r++){let l=(e[r]||[]).map(Je),c=l.some(u=>u&&me.date.some(d=>u.includes(Je(d)))),f=l.some(u=>u&&(me.amount.some(d=>u.includes(Je(d)))||me.outCol.some(d=>u.includes(Je(d)))||me.inCol.some(d=>u.includes(Je(d)))));if(c&&f){t=r,n=l;break}}if(t===-1)return null;let s=(r,l)=>{for(let c of r){let f=Je(c);for(let u=0;u<n.length;u++)if(!(l&&l.includes(u))&&n[u]===f)return u}for(let c of r){let f=Je(c);for(let u=0;u<n.length;u++)if(!(l&&l.includes(u))&&n[u]&&n[u].includes(f)&&!n[u].startsWith("해외"))return u}return-1},i=s(me.outCol),a=s(me.inCol,i>=0?[i]:[]),o=i>=0&&a>=0&&i!==a;return{headerRow:t,header:n,colDate:s(me.date),colAmount:o?-1:s(me.amount),colOut:o?i:-1,colIn:o?a:-1,colMerchant:s(me.merchant),colBalance:s(me.balance),colInstallment:s(me.installment),colCancel:s(me.cancel),colKind:s(me.kind)}}var Ot=e=>{let t=parseInt(String(e||"").replace(/[^\d-]/g,""),10);return isNaN(t)?0:t};function kn(e){let t=String(e||"").replace(/[\n\r]+/g," ").trim(),n=t.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);return n?le(new Date(+n[1],+n[2]-1,+n[3])):(n=t.match(/(\d{2})[.\-/](\d{1,2})[.\-/](\d{1,2})/),n?le(new Date(2e3+ +n[1],+n[2]-1,+n[3])):null)}var li=["네이버페이","카카오페이","비바리퍼블리카","토스페이","페이코","쿠페이","스마일페이","삼성페이","애플페이","제로페이","페이머니","머니충전"];function ta(e){let t=String(e||"").replace(/\s+/g,"").toLowerCase();return li.some(n=>t.includes(n.toLowerCase()))}function na(e,t,n={}){let s=new Map,i=r=>{let l=(s.get(r)||0)+1;return s.set(r,l),l},a=[],o=[];for(let r=t.headerRow+1;r<e.length;r++){let l=e[r]||[],c=l.join(" ");if(ri.test(c.replace(/\s+/g," ").trim())){o.push(r);continue}let f=kn(l[t.colDate]);if(!f){o.push(r);continue}let u=0,d=null,g=!1;if(t.colOut>=0&&t.colIn>=0){let N=Ot(l[t.colOut]),W=Ot(l[t.colIn]);N>0?(u=N,d="out"):W>0&&(u=W,d="in")}else{let N=Ot(l[t.colAmount]);g=N<0,u=Math.abs(N),d=n.defaultDirection||"out"}if(!u){o.push(r);continue}let h=(t.colMerchant>=0?String(l[t.colMerchant]||""):"").trim();if(/^[\d-]+$/.test(h.replace(/\s/g,""))&&t.colKind>=0){let N=String(l[t.colKind]||"").trim();N&&(h=N)}let m=(t.colKind>=0?String(l[t.colKind]||""):"").trim(),y=m&&m!==h?`${m} ${h}`:h,v=t.colBalance>=0?Ot(l[t.colBalance]):null,$=t.colCancel>=0?String(l[t.colCancel]||""):"",_=t.colInstallment>=0?String(l[t.colInstallment]||""):"",A=g||/(취소|환불)/.test($)||/(취소|환불)/.test(h),w=_.match(/할부\s*\((\d{1,2})\s*개월\)/)||_.match(/(\d{1,2})\s*개월/),D=/해외/.test(_),x=d==="in"?"transfer":"expense",R=null,B=!1,H=null,j=!1;if(d==="in"){let N=Ye({counterpartyRaw:h,memo:h,rawText:h,amount:u},n.settings);N?(x=N.type,R=N.transferKind,B=!!N.needsCheck,N.isRefund&&(j=!0),N.confidence!=null&&(H=N.confidence)):/(급여|월급|상여|환급)/.test(h)&&(x="income")}let X=x==="income"?"income":ta(h)&&!Ne(z(y),n.rules)&&!Ne(z(h),n.rules)&&!(n.settings&&(n.settings.familyTransferKeywords||[]).some(N=>N&&h.includes(N)))?"etc":be(y,"expense",n.rules),J=Pe({counterpartyRaw:h,memo:h,rawText:c,category:X,amount:u},n.settings);J&&J.transferKind&&J.transferKind!=="welfare"&&!J.category&&(x="transfer");let I=!1;J&&(J.type&&(x=J.type),J.category&&(X=J.category),R=J.transferKind,I=!!J.isExtra,B=!1,J.confidence!=null&&(H=J.confidence)),R&&["internal","invest","savings","cashOut","cardPayment","fxTopup","verify"].includes(R)&&(B=!1,H==null&&(H=1)),a.push({type:x,direction:d,date:f,amount:u,transferKind:R,needsCheck:B,isExtra:I,category:X,memo:h||"내역",normKey:z(h),counterpartyRaw:h,balanceAfter:v||null,accountId:n.accountId||null,paymentMethod:n.paymentMethod||"account",source:"statement",isRefund:A||j,installmentMonths:w?parseInt(w[1],10):null,isOverseas:D,confidence:H??(X==="etc"?.4:.8),needsCheck:A||j?!1:B,sourceHash:`${n.accountId||""}|${f}|${u}|${h}|${$}|${d}|${v||""}|${i(`${f}|${u}|${h}|${d}|${v||""}`)}`,rawText:c.trim()})}return{entries:a,skipped:o}}function sa(e){let t=new TextDecoder("utf-8",{fatal:!1}).decode(e);if((t.match(/\uFFFD/g)||[]).length>3)try{return new TextDecoder("euc-kr").decode(e)}catch{}return t}var bn=(e,t)=>le(new Date(new Date(e+"T00:00:00").getTime()+t*wn));function xn(e,t){let n=e.filter(g=>!g.deleted&&g.tripId===t.id),s=0,i=0,a=0,o=0,r={},l=[];for(let g of n){if(g.date&&l.push(g.date),g.type==="income"){i+=g.amount;continue}if(g.type!=="expense")continue;let h=g.isRefund?-g.amount:g.amount;if(g.transferKind==="welfare"){a+=h;continue}g.transferKind&&g.transferKind!=="external"||(g.reimbFrom&&(o+=g.amount),s+=h,r[g.category]=(r[g.category]||0)+h)}l.sort();let c=Object.entries(r).sort((g,h)=>h[1]-g[1]),f={};for(let g of n)g.currency&&g.foreignAmount&&(f[g.currency]=(f[g.currency]||0)+g.foreignAmount);let u=t.startDate||l[0]||null,d=t.endDate||l[l.length-1]||null;return{count:n.length,total:s,income:i,welfare:a,reimbursed:o,cats:c,fx:f,from:u,to:d,days:u&&d?Math.round((new Date(d)-new Date(u))/wn)+1:null}}var ci=["anthropic","openai","oracle","google","apple.com","netflix","spotify","aws","amazon web","microsoft","github","adobe","cloudflare","steam","paypal","patreon","figma","notion","dropbox"];function aa(e){if(!e||e.deleted||e.type!=="expense")return!1;let t=String(e.memo||"").toLowerCase();return ci.some(n=>t.includes(n))?!1:!!(e.currency&&e.currency!=="KRW"||e.isOverseas)}function oa(e,t={}){let n=t.gapDays||3,s=e.filter(aa).sort((l,c)=>l.date<c.date?-1:1);if(!s.length)return{trips:[],singles:[]};let i=[],a=[s[0]];for(let l=1;l<s.length;l++)_e(a[a.length-1].date,s[l].date)<=n?a.push(s[l]):(i.push(a),a=[s[l]]);i.push(a);let o=[],r=[];for(let l of i){let c=l[0].date,f=l[l.length-1].date,u=_e(c,f)+1,d=l.reduce((m,y)=>m+(y.isRefund?-y.amount:y.amount),0),g=[...new Set(l.map(m=>m.currency).filter(Boolean))],h={startDate:c,endDate:f,days:u,count:l.length,localSpent:d,currencies:g,ids:l.map(m=>m.id),name:ui(l,c)};l.length>=3||u>=2?o.push(h):r.push(h)}return{trips:o.reverse(),singles:r.reverse()}}var di=[["삿포로",["sapporo","satsuporo","hakodate","chitose","moiwa","seicomart","yufutsu"]],["오키나와",["okinawa","naha","miyako","kokusai","coral port"]],["도쿄",["tokyo","shinjuku","shibuya","haneda","narita","asakusa"]],["오사카",["osaka","namba","umeda","kansai","dotonbori"]],["후쿠오카",["fukuoka","hakata","tenjin"]],["베트남",["vietnam","hanoi","saigon","danang","marou"]],["태국",["thailand","bangkok","phuket"]]];function ui(e,t){let n=e.map(a=>String(a.memo||"")).join(" ").toLowerCase();for(let[a,o]of di)if(o.some(r=>n.includes(r)))return`${a} ${t.slice(2,7).replace("-",".")}`;let s=e.find(a=>a.currency)?.currency;return`${{JPY:"일본",VND:"베트남",THB:"태국",USD:"미국",EUR:"유럽",TWD:"대만"}[s]||"여행"} ${t.slice(2,7).replace("-",".")}`}function pi(e,t){if(e.direction!=="in"||e.type!=="transfer"||!(e.amount>0)||e.transferKind&&e.transferKind!=="excluded")return!1;let n=t.settings||{},s=`${e.memo||""} ${e.counterpartyRaw||""}`;return!(n.userName&&s.includes(n.userName)||(n.excludedCounterparties||[]).some(i=>i&&s.includes(i)))}function Ut(e,t,n={}){if(!t||!t.startDate||!t.endDate)return{...t||{},inside:[],booked:[],reimb:[],onsite:0,prepaid:0,total:0,welfare:0};let s=n.preDays??120,i=n.postDays??0,a=(n.allTrips||[]).filter(m=>m.startDate&&m.startDate!==t.startDate&&m.id!==t.id),o=bn(t.startDate,-s),r=bn(t.endDate,i),l=bn(t.endDate,Math.max(i,60)),c=[],f=[],u=[];for(let m of e){if(m.deleted||m.tripId&&t.id&&m.tripId!==t.id)continue;if(pi(m,n)){m.date>=o&&m.date<=l&&u.push(m);continue}if(m.type!=="expense"||m.fixedId||m.category==="family")continue;let y=m.transferKind==="welfare";if(m.transferKind&&m.transferKind!=="external"&&!y)continue;let v=y?{...m,welfare:!0}:m;if(m.date>=t.startDate&&m.date<=t.endDate){c.push(v);continue}let $=m.date>=o&&m.date<t.startDate,_=i>0&&m.date>t.endDate&&m.date<=r;if(!$&&!_||$&&a.some(w=>w.startDate>m.date&&w.startDate<t.startDate)||_&&a.some(w=>w.startDate>t.endDate&&w.startDate<=m.date))continue;let A=$?"pre":"post";m.category==="travel"||t.id&&m.tripId===t.id?f.push({...v,sure:!0,when:A}):m.isOverseas||m.currency&&m.currency!=="KRW"?f.push({...v,sure:!1,when:A}):n.wide&&f.push({...v,sure:!1,when:A})}let d=m=>m.filter(y=>!y.welfare).reduce((y,v)=>y+(v.isRefund?-v.amount:v.amount),0),g=(m,y)=>m.date<y.date?-1:1,h=f.filter(m=>m.sure);return{...t,inside:c.sort(g),booked:f.sort(g),reimb:u.sort(g),onsite:d(c),prepaid:d(h),total:d(c)+d(h),welfare:[...c,...h].filter(m=>m.welfare).reduce((m,y)=>m+(y.isRefund?-y.amount:y.amount),0)}}function ia(e,t={}){let n=t.days||10,s=c=>c.transferKind&&c.transferKind!=="excluded",i=c=>!c.deleted&&c.amount>0&&!s(c)&&c.category!=="family"&&c.type!=="income",a=e.filter(c=>i(c)&&c.direction==="out"&&!c.transferKind),o=e.filter(c=>i(c)&&c.direction==="in"&&!c.isRefund),r=new Set,l=[];for(let c of o){let f=c.normKey||z(c.memo),u=null;for(let d of a){if(r.has(d.id)||d.amount!==c.amount)continue;let g=_e(d.date,c.date);if(g<0||g>n)continue;let h=d.normKey||z(d.memo);f&&h&&(f===h||f.includes(h)||h.includes(f)||Ge(f,h)>=.55)&&(!u||_e(d.date,c.date)<_e(u.date,c.date))&&(u=d)}u&&(r.add(u.id),l.push({refund:c,original:u}))}return l}var fi=[["엔진오일",["엔진오일","엔진 오일","engine oil","모빌","킥스","지크"]],["오일필터",["오일필터","오일 필터","오일휠타","오일 휠타","oil filter"]],["에어필터",["에어필터","에어 필터","에어클리너","흡기필터","air filter"]],["에어컨필터",["에어컨필터","에어컨 필터","캐빈필터","실내필터","향균필터"]],["미션오일",["미션오일","미션 오일","변속기오일","atf","cvt오일","오토미션"]],["점화플러그",["점화플러그","점화 플러그","스파크플러그","플러그","spark plug"]],["브레이크패드",["브레이크패드","브레이크 패드","패드","제동패드","brake pad"]],["브레이크액",["브레이크액","브레이크 오일","브레이크오일","제동액","brake fluid"]],["냉각수",["냉각수","부동액","쿨란트","coolant"]],["타이어",["타이어","tire","tyre","휠얼라인먼트","얼라인먼트"]],["배터리",["배터리","밧데리","축전지","battery"]],["와이퍼",["와이퍼","wiper","블레이드"]],["연료필터",["연료필터","연료 필터","퓨얼필터","fuel filter"]],["LPG 필터",["lpg필터","lpg 필터","가스필터"]],["DPF 점검",["dpf","디피에프","매연포집"]],["감속기 오일",["감속기","리덕션","reduction"]]],mi=/(합계|총액|부가세|공급가|할인|소계|청구|결제|카드|현금|영수증|견적|사업자|대표|전화|주소|고객|차량번호|담당)/;function ra(e,t={}){let n=String(e||"").split(/\n/).map(r=>r.trim()).filter(Boolean),s=[],i=null,a=null,o=0;for(let r of n){if(!i){let d=r.match(/(20\d{2})[.\-/년\s]+(\d{1,2})[.\-/월\s]+(\d{1,2})/);d&&(i=le(new Date(+d[1],+d[2]-1,+d[3])))}if(a==null){let d=r.match(/([0-9][0-9,]{2,})\s*(km|KM|키로|주행)/);if(d)a=parseInt(d[1].replace(/,/g,""),10);else if(/주행|계기|누적/.test(r)){let g=r.match(/([0-9][0-9,]{3,})/);g&&(a=parseInt(g[1].replace(/,/g,""),10))}}let l=r.toLowerCase(),c=r.match(/([0-9]{1,3}(?:,[0-9]{3})+|[0-9]{4,})\s*원?/),f=c?parseInt(c[1].replace(/,/g,""),10):0;if(mi.test(r)){/(합계|총액|청구)/.test(r)&&f>o&&(o=f);continue}let u=fi.find(([,d])=>d.some(g=>l.includes(g)));u&&(s.some(d=>d.label===u[0])||s.push({label:u[0],amount:f,raw:r}))}return o||(o=s.reduce((r,l)=>r+l.amount,0)),{items:s,date:i||oe(),mileage:a,total:o}}function Cn(e){return!e||e.deleted||e.type!=="expense"||e.category==="family"?!1:!e.transferKind||["external","welfare","verify"].includes(e.transferKind)}function Dn(e,t){if(!Cn(e)||e.catBy==="user")return e;let n=Ne(e.normKey||z(e.memo),t);if(!n)return e;let s={...e,category:n.category||e.category,confidence:1};return n.kind==="exclude"&&e.transferKind!=="welfare"&&(s.transferKind="verify"),s.status==="pending"&&!e.needsCheck&&(s.status="confirmed"),s}function hi(e,t){if(e=String(e||""),t=String(t||""),!e||!t||e===t)return!1;let[n,s]=e.length<=t.length?[e,t]:[t,e];if(n.length>=2&&s.startsWith(n)||n.length>=3&&s.includes(n))return!0;let i=0;for(;i<n.length&&n[i]===s[i];)i++;return i>=4&&i/n.length>=.6?!0:n.length>=4&&Ge(e,t)>=.6}function la(e,t,n){let s=t&&(t.normKey||z(t.memo))||"",i=[],a=[];if(s.length<2)return{same:i,similar:a};for(let o of e){if(!Cn(o)||o.id===t.id||o.category===n||o.catBy==="user")continue;let r=o.normKey||z(o.memo);!r||r.length<2||(r===s?i.push(o):hi(r,s)&&(o.category==="etc"||o.category===t.category)&&a.push(o))}return{same:i,similar:a}}var gi=[["food",["식비","식사","음식","식당","장보기"]],["cafe",["카페","간식","커피"]],["transport",["교통"]],["car",["차량","차","주유","정비","유지비","자동차"]],["shopping",["쇼핑"]],["living",["주거","생활"]],["health",["의료","건강","병원"]],["culture",["문화","여가"]],["comm",["통신","인터넷"]],["insurance",["보험"]],["loan",["대출","이자"]],["family",["가족"]],["social",["경조","축의","부의","회비","모임"]],["travel",["여행"]],["etc",["기타"]]];function ca(e){let t=[];for(let n of String(e||"").split(/\n/)){let s=n.replace(/#.*/,"").trim();if(!s)continue;let i=s.match(/^(.+?)\s*(?:=|→|->|:)\s*(.+)$/);if(!i){t.push({line:s,error:"'이름 = 분류' 형태로 적어주세요"});continue}let a=i[1].trim(),o=i[2].replace(/\s+/g,""),r=z(a);if(r.length<2){t.push({line:s,error:"이름이 너무 짧아요"});continue}if(/제외|확인용|빼기/.test(o)){t.push({line:s,name:a,normKey:r,category:"etc",kind:"exclude"});continue}let l=gi.find(([,c])=>c.some(f=>o.includes(f)))||Se.filter(c=>c.key!=="income").map(c=>[c.key,[c.label.replace(/\s/g,"")]]).find(([,c])=>c.some(f=>o.includes(f)));if(!l){t.push({line:s,error:`'${i[2].trim()}'는 없는 분류예요`});continue}t.push({line:s,name:a,normKey:r,category:l[0],kind:null})}return t}function jt(e,t){let n=new Map,s=new Map(t.map(i=>[i.normKey,0]));for(let i of e){if(!Cn(i))continue;let a=Ne(i.normKey||z(i.memo),t);if(!a)continue;let o={category:a.category};a.kind==="exclude"&&i.transferKind!=="welfare"&&(o.transferKind="verify"),(i.category!==o.category||o.transferKind&&i.transferKind!==o.transferKind)&&(n.set(i.id,o),s.set(a.normKey,(s.get(a.normKey)||0)+1))}return{changes:n,perRule:s}}var $i=/^(우리|신한|국민|농협|하나|기업|전북|광주|부산|대구|경남|제주|산업|카카오|토스|케이|새마을|신협|우체국|SC|IBK|KB|NH)\s*/;function vi(e,t){let n=String(e||"").trim().replace($i,"").replace(/\s+/g,"");return!(!/^[가-힣]{2,4}$/.test(n)||t&&n===String(t).replace(/\s+/g,"")||/(마트|식당|상회|약국|의원|카페|슈퍼|문구|치킨|분식|정육|세탁|학원|병원|철물|주유|전자|상사|농협|은행|카드|페이|머니|충전)$/.test(n))}function yi(e,t={}){return!e.length||!e.every(n=>n.category==="etc"&&n.paymentMethod!=="card")||!vi(e[0].memo,t.userName)?!1:e.every(n=>n.amount>=3e4&&n.amount<=1e6&&n.amount%1e4===0)}function da(e,t={}){if(!e||e.deleted||e.source!=="shortcut"||e.localized||Number(e.updatedAt||0)!==Number(e.createdAt||0))return null;let n=String(e.rawText||"");if(!n.trim())return null;let s=new Date(Number(e.createdAt)||Date.now()),i=Lt(n,{rules:t.rules,settings:t.settings,now:s});if(!i||!i.amount)return null;let a={type:i.type,category:i.category,transferKind:i.transferKind||null,isRefund:!!i.isRefund,isExtra:!!i.isExtra,welfareBalance:i.welfareBalance??null,confidence:i.confidence,localized:!0};return i.direction&&(a.direction=i.direction),i.balanceAfter!=null&&(a.balanceAfter=i.balanceAfter),Tt(n,t.settings)!=="free"&&(a.memo=i.memo,a.date=i.date,a.normKey=i.normKey,i.counterpartyRaw&&(a.counterpartyRaw=i.counterpartyRaw)),a.needsCheck=!!i.needsCheck,a.status=i.needsCheck||(i.confidence??1)<.6?"pending":"confirmed",a}function Sn(e,t){if(!e||e.tripId||!aa(e))return null;let n=(t||[]).find(s=>s.startDate&&s.endDate&&e.date>=s.startDate&&e.date<=s.endDate);return n?n.id:null}function ua(e,t={}){let n=t.settings&&t.settings.travelKeywords||[];if(!n.length)return[];let s=t.gapDays||4,i=e.filter(r=>!r.deleted&&r.type==="expense"&&!r.tripId&&!r.isRefund&&n.some(l=>l&&`${r.memo||""} ${r.counterpartyRaw||""}`.includes(l))).sort((r,l)=>r.date<l.date?-1:1),a=[],o=[];for(let r of i)o.length&&_e(o[o.length-1].date,r.date)>s&&(a.push(o),o=[]),o.push(r);return o.length&&a.push(o),a.filter(r=>r.length>=2).map(r=>({startDate:r[0].date,endDate:r[r.length-1].date,approx:!0,days:_e(r[0].date,r[r.length-1].date)+1,count:r.length,localSpent:r.reduce((l,c)=>l+c.amount,0),currencies:[],ids:r.map(l=>l.id),name:`여행 ${r[0].date.slice(2,7).replace("-",".")}`})).reverse()}function pa(e,t=[]){let n=a=>typeof a=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(a),s=new Set,i=[];for(let a of e||[]){if(!a||!n(a.start))continue;let o=a.start,r=n(a.end)&&a.end>=a.start?a.end:a.start,l=`${o}|${r}`;if(s.has(l)||(s.add(l),(t||[]).some(u=>u.startDate&&u.endDate&&u.startDate<=r&&u.endDate>=o)))continue;let f=String(a.title||"").replace(/\s+/g," ").trim().slice(0,20)||`여행 ${o.slice(2,7).replace("-",".")}`;i.push({name:f,startDate:o,endDate:r,days:_e(o,r)+1,fromCalendar:!0,currencies:[]})}return i.sort((a,o)=>a.startDate<o.startDate?1:-1)}var Ft={date:/날짜|date/i,time:/시간|time/i,kind:/종류|payment\s*type/i,currency:/통화|currency/i,amount:/^금액|amount(?!.*krw)/i,balance:/잔액|balance/i,merchant:/가맹점|merchant/i,approval:/승인번호|approval/i,rate:/환율|exchange/i,krw:/원화금액|krw/i};function Wt(e){if(!Array.isArray(e))return!1;for(let t=0;t<Math.min(e.length,15);t++){let n=(e[t]||[]).map(s=>String(s||""));if(n.some(s=>Ft.krw.test(s))&&n.some(s=>Ft.kind.test(s)))return!0}return!1}function bi(e){if(!Array.isArray(e))return null;for(let t=0;t<Math.min(e.length,15);t++){let n=(e[t]||[]).map(i=>String(i||"").replace(/\s+/g,""));if(!n.some(i=>Ft.krw.test(i)))continue;let s={headerRow:t};for(let[i,a]of Object.entries(Ft))s[i]=n.findIndex(o=>a.test(o));return s.amount===s.krw&&(s.amount=n.findIndex((i,a)=>a!==s.krw&&/금액|amount/i.test(i))),s}return null}function _n(e){let t=String(e??"").replace(/\s+/g,"");if(!t)return null;let n=/^[-−–]/.test(t)||/^\(.*\)$/.test(t),s=t.replace(/[^\d]/g,"");if(!s)return null;let i=parseInt(s,10);return isNaN(i)?null:n?-i:i}var _i=[{re:/충전|charge/i,kind:"topup"},{re:/결제\s*취소|payment\s*cancel|취소|cancel|refund/i,kind:"cancel"},{re:/ATM|출금|withdraw/i,kind:"atm"},{re:/기타\s*정산|adjust/i,kind:"adjust"},{re:/결제|payment/i,kind:"payment"}];function Vs(e){let t=String(e||"");for(let n of _i)if(n.re.test(t))return n.kind;return null}function Vt(e,t={}){let n=bi(e);if(!n)return{entries:[],skipped:[]};let s=f=>{let u=0;for(let d=n.headerRow+1;d<Math.min(e.length,n.headerRow+12);d++){let g=e[d]||[];kn(g[n.date+f])&&Vs(g[n.kind+f])&&u++}return u},i=0,a=-1;for(let f of[0,1,-1,2]){let u=s(f);u>a&&(a=u,i=f)}let o={};for(let[f,u]of Object.entries(n))o[f]=f==="headerRow"?u:u>=0?u+i:-1;let r=[],l=[],c=(f,u)=>u>=0?f[u]:void 0;for(let f=o.headerRow+1;f<e.length;f++){let u=e[f]||[],d=u.join(" ").trim(),g=kn(c(u,o.date)),h=Vs(c(u,o.kind));if(!g||!h){d&&l.push(f);continue}let m=Math.abs(_n(c(u,o.krw))||0),y=_n(c(u,o.amount));if(!m){l.push(f);continue}let v=String(c(u,o.currency)||"").replace(/[^A-Z]/gi,"").toUpperCase(),$=String(c(u,o.merchant)||"").replace(/\s+/g," ").trim(),_=_n(c(u,o.balance)),A=h==="cancel"||h==="topup",w="expense",D="travel",x=null,R=!1;h==="topup"?(w="transfer",x="fxTopup",D="etc",$=`트래블월렛 충전${v?` (${v})`:""}`):h==="cancel"?R=!0:h==="atm"&&($=$?`현지 인출 ${$}`:"현지 인출"),$||($=h==="adjust"?"정산":"내역"),w==="expense"&&(D=Ne(z($),t.rules)?be($,"expense",t.rules):"travel"),r.push({type:w,direction:A?"in":"out",date:g,amount:m,transferKind:x,needsCheck:!1,isExtra:!1,category:D,memo:$,normKey:z($),counterpartyRaw:$,balanceAfter:null,foreignBalance:_,accountId:t.accountId||null,paymentMethod:"travelwallet",source:"statement",isRefund:R,installmentMonths:null,isOverseas:!!v&&v!=="KRW",currency:v&&v!=="KRW"?v:"",foreignAmount:y!=null?Math.abs(y):null,twKind:h,confidence:.9,sourceHash:`tw|${g}|${String(c(u,o.time)||"").trim()}|${m}|${$}|${String(c(u,o.approval)||"").trim()}|${h}|${f}`,rawText:d})}return{entries:r,skipped:l}}function ki(e){let t=(e||[]).filter(a=>a&&String(a.str||"").trim()).map(a=>({s:String(a.str),x:+a.x||0,y:Math.round(+a.y||0),w:+a.w||0})).sort((a,o)=>o.y-a.y||a.x-o.x),n=[],s=[],i=null;for(let a of t)i!==null&&Math.abs(a.y-i)>3&&(s.length&&n.push(s),s=[]),s.push(a),i=a.y;return s.length&&n.push(s),n}function wi(e){if(!e.length)return[];let t=[];for(let l=1;l<e.length;l++)t.push(e[l].x-(e[l-1].x+e[l-1].w));let n=t.filter(l=>l>0).sort((l,c)=>l-c),s=n.length?n[Math.floor(n.length/2)]:1,i=Math.max(s*2.5,3),a=[],o=e[0].s,r=e[0].x;for(let l=1;l<e.length;l++)e[l].x-(e[l-1].x+e[l-1].w)>i?(a.push({text:o,x:r}),o=e[l].s,r=e[l].x):o+=e[l].s;return a.push({text:o,x:r}),a}function fa(e){let t=[];for(let r of e||[])for(let l of ki(r))t.push(l);if(!t.length)return[];let n=t.map(r=>wi(r).map(l=>l.text.trim()).filter(l=>l!==""));if(!n.length)return[];let s=new Map;for(let r of n)s.set(r.length,(s.get(r.length)||0)+1);let i=0,a=-1;for(let[r,l]of s)(l>a||l===a&&r>i)&&(a=l,i=r);if(i<3)return n;let o=r=>{let l=String(r).replace(/\s/g,"");return/^-?[\d,]+$/.test(l)&&/\d/.test(l)||/^\d{2,4}[.\-/]\d{1,2}[.\-/]\d{1,2}$/.test(l)||/^\d+$/.test(l)};return n.map(r=>{if(r.length<=i)return r;let l=r.slice();for(;l.length>i;){let c=-1;for(let f=l.length-2;f>=0;f--)if(!o(l[f])&&!o(l[f+1])){c=f;break}if(c<0)break;l.splice(c,2,`${l[c]} ${l[c+1]}`)}return l})}var E=Le.bind(Me);function ha({db:e,patch:t,entries:n,flash:s,onAdopt:i}){let[a,o]=L(!1),[r,l]=L(null),c=U(()=>{let m=new Set(e.fixedExpenses.map(y=>y.normKey));return zs(n).filter(y=>!m.has(y.normKey))},[n,e.fixedExpenses]),f=oe().slice(0,7),u=e.fixedExpenses.filter(m=>m.status!=="ended").map(m=>{let y=n.find(A=>!A.deleted&&A.date.slice(0,7)===f&&(A.fixedId===m.id||Ht(A,m))),v=String(m.dayOfMonth).padStart(2,"0"),$=`${f}-${v}`,_=!y&&$<oe();return{...m,hit:y,due:$,late:_}}).sort((m,y)=>m.dayOfMonth-y.dayOfMonth),d=u.filter(m=>m.hit&&m.hit.status!=="scheduled").reduce((m,y)=>m+y.hit.amount,0),g=u.reduce((m,y)=>m+(y.hit&&y.hit.status!=="scheduled"?y.hit.amount:y.amount),0),h=m=>t(y=>{y.fixedExpenses=y.fixedExpenses.filter(v=>v.id!==m)});return E`
    <div class="fixedWrap">
      ${c.length>0&&E`
        <div class="suggest">
          <div class="suggestHead">매달 반복되는 것 ${c.length}건을 찾았어요</div>
          ${c.slice(0,6).map(m=>E`
            <div class="suggestRow" key=${m.normKey}>
              <span class="sName">${m.name}</span>
              <span class="sAmt">${m.amountVariable?"약 ":""}₩${F(m.amount)}</span>
              <span class="sDay">매월 ${m.dayOfMonth}일</span>
            </div>`)}
          <div class="acts">
            <button class="btn primary sm" onClick=${()=>{i(c),s(`고정비 ${c.length}건 등록`)}}>
              전부 고정비로 등록
            </button>
          </div>
        </div>`}

      <div class="fixedHead">
        <span>이번 달 고정비</span>
        <span class="fixedSum">나감 ₩${F(d)} · 예정 포함 ₩${F(g)}</span>
      </div>

      ${u.length===0&&c.length===0&&E`
        <div class="empty">아직 고정비가 없어요.<br />세 달치 기록이 쌓이면 알아서 찾아냅니다.</div>`}

      ${u.map(m=>E`
        <div class=${"fixedRow"+(m.late?" late":"")} key=${m.id}>
          <span class=${"fixedMark "+(m.hit&&m.hit.status!=="scheduled"?"done":m.late?"late":"wait")}>
            ${m.hit&&m.hit.status!=="scheduled"?"✓":m.late?"!":"○"}
          </span>
          <span class="fixedDay">${m.dayOfMonth}일</span>
          <span class="fixedName">${m.name}</span>
          <span class="fixedAmt">
            ${m.amountVariable&&!(m.hit&&m.hit.status!=="scheduled")?"약 ":""}
            ₩${F(m.hit?m.hit.amount:m.amount)}
          </span>
          <button class="del" onClick=${()=>h(m.id)} aria-label="삭제">×</button>
        </div>
        ${m.late&&E`<div class="fixedLate">예정일이 지났는데 확인이 안 돼요. 통장 내역을 붙여넣으면 맞춰집니다.</div>`}`)}

      ${a?E`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="이름" value=${r.name} onInput=${m=>l({...r,name:m.target.value})} />
              <input class="inp" type="number" placeholder="금액" value=${r.amount||""} onInput=${m=>l({...r,amount:parseInt(m.target.value||"0",10)})} />
              <input class="inp" type="number" min="1" max="31" placeholder="며칠" value=${r.dayOfMonth||""} onInput=${m=>l({...r,dayOfMonth:parseInt(m.target.value||"1",10)})} />
            </div>
            <div class="chips">
              ${Se.filter(m=>m.key!=="income").map(m=>E`
                <button key=${m.key} class=${"chip sm"+(r.category===m.key?" on":"")}
                  style=${r.category===m.key?`background:${m.color};border-color:${m.color}`:`border-color:${m.color}55;color:${m.color}`}
                  onClick=${()=>l({...r,category:m.key})}>${m.label}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>o(!1)}>취소</button>
              <button class="btn primary sm" disabled=${!r.name||!r.amount}
                onClick=${()=>{t(m=>{m.fixedExpenses=[...m.fixedExpenses,{...r,id:Ve(),normKey:z(r.name),status:"active",source:"manual"}]}),o(!1),s("고정비를 등록했어요")}}>등록</button>
            </div>
          </div>`:E`<button class="tag dash addFixed" onClick=${()=>{l({name:"",amount:0,dayOfMonth:1,category:"living",amountVariable:!1}),o(!0)}}>+ 직접 추가</button>`}
    </div>`}function ga({entries:e,onApply:t,onApplyRules:n,userName:s,ruleCount:i,onClose:a}){let[o,r]=L(!1),[l,c]=L(!1),f=U(()=>{let x=Zs(e,{userName:s});return o?x:x.filter(R=>R.needsReview||R.mixed)},[e,o,s]),[u,d]=L({}),[g,h]=L(!1),[m,y]=L(""),[v,$]=L(null),_=U(()=>ca(m),[m]),A=U(()=>jt(e,_.filter(x=>!x.error)),[e,_]),w=_.filter(x=>!x.error),D=l?f:f.slice(0,40);return E`
    <div class="card">
      <div class="cardLabel">가맹점별로 한 번에 분류하기 · ${f.length}곳</div>
      <div class="hint sm">한 번 정하면 같은 곳의 지난 기록까지 바뀌고, 앞으로도 자동으로 분류됩니다.</div>
      <div class="row wrap" style="margin-top:8px">
        <button class=${"tag"+(o?"":" on")} onClick=${()=>r(!1)}>정리할 것만</button>
        <button class=${"tag"+(o?" on":"")} onClick=${()=>r(!0)}>전체 보기</button>
        <button class=${"tag dash"+(g?" on":"")} onClick=${()=>h(!g)}>규칙 한꺼번에 넣기</button>
      </div>

      ${v&&!g&&E`
        <div class="tidyResult">규칙 <b>${v.rules}개</b>를 넣고 지난 기록 <b>${v.changed}건</b>을 바꿨어요. 앞으로 들어오는 것도 자동으로 분류됩니다.</div>`}
      ${g&&E`
        <div class="ruleBox">
          <div class="hint sm">
            한 줄에 하나씩 <b>이름 = 분류</b>로 적으세요. 오른쪽에 <b>제외</b>를 쓰면 합계에서 뺍니다(해외 서비스 확인용 결제 등).
            이 규칙은 이 기기에만 저장되고 코드나 외부로 나가지 않습니다. 지금 규칙 ${i||0}개.
          </div>
          <textarea class="pasteArea ruleArea" value=${m} onInput=${x=>y(x.target.value)}
            placeholder=${`예)
홍길동 = 경조사
동네식당 = 식비
oracle = 제외`}></textarea>
          ${_.length>0&&E`
            <div class="ruleList">
              ${_.map((x,R)=>E`
                <div class=${"ruleRow"+(x.error?" bad":"")} key=${R}>
                  <span class="ruleName">${x.name||x.line}</span>
                  <span class="ruleTo">${x.error?x.error:x.kind==="exclude"?"합계 제외":Se.find(B=>B.key===x.category)?.label}</span>
                  ${!x.error&&E`<span class="ruleCnt">${A.perRule.get(x.normKey)||0}건</span>`}
                </div>`)}
            </div>`}
          <div class="acts">
            <button class="btn primary sm" disabled=${!w.length}
              onClick=${()=>{let x=n(_);$({rules:w.length,changed:x}),y(""),h(!1)}}>
              규칙 ${w.length}개 적용 · 기록 ${A.changes.size}건 바뀜
            </button>
          </div>
        </div>`}

      <div class="groupList">
        ${f.length===0&&E`<div class="empty">정리할 게 없어요.<br />전체 보기로 이미 분류된 곳도 볼 수 있어요.</div>`}
        ${D.map(x=>E`
          <div class=${"groupRow"+(u[x.normKey]?" settled":"")} key=${x.normKey}>
            <div class="groupTop">
              <span class="gName">${x.name}</span>
              <span class="gMeta">${x.count}건 · ₩${F(x.total)}</span>
            </div>
            ${x.suggest&&!u[x.normKey]&&E`
              <button class="suggestPill" onClick=${()=>{d(R=>({...R,[x.normKey]:x.suggest})),t(x,x.suggest)}}>
                사람 이름 · 딱 떨어지는 금액 — ${Se.find(R=>R.key===x.suggest)?.label}일까요? 탭하면 정해져요
              </button>`}
            <div class="chips">
              ${Se.filter(R=>R.key!=="income").map(R=>E`
                <button key=${R.key}
                  class=${"chip sm"+((u[x.normKey]||x.category)===R.key?" on":"")}
                  style=${(u[x.normKey]||x.category)===R.key?`background:${R.color};border-color:${R.color}`:`border-color:${R.color}55;color:${R.color}`}
                  onClick=${()=>{d(B=>({...B,[x.normKey]:R.key})),t(x,R.key)}}>${R.label}</button>`)}
            </div>
          </div>`)}
        ${!l&&f.length>40&&E`<button class="pickToggle" onClick=${()=>c(!0)}>나머지 ${f.length-40}곳 더 보기</button>`}
      </div>
      <div class="acts"><button class="btn ghost sm" onClick=${a}>닫기</button></div>
    </div>`}function $a({db:e,entries:t,patch:n,rowProps:s}){let[i,a]=L(!1),[o,r]=L(""),[l,c]=L("bank"),f=e.accounts,u=U(()=>{let y={};for(let v of f){let $=qs(t,v.id);y[v.id]={balance:$.latest?$.latest.balanceAfter:v.balance||0,at:$.latest?$.latest.date:v.balanceAt,gaps:$.gaps}}return y},[f,t]),d=f.reduce((y,v)=>y+(u[v.id]?.balance||0),0),g=U(()=>{let y=oe().slice(0,7);return t.filter(v=>!v.deleted&&v.type==="transfer"&&v.date.slice(0,7)===y).sort((v,$)=>v.date<$.date?1:-1)},[t]),h=y=>f.find(v=>v.id===y)?.name||"?",m={bank:"통장",card:"카드",cash:"현금",fx:"외화",savings:"저축",invest:"투자"};return E`
    <div class="assetWrap">
      <div class="assetTotal">
        <span class="assetTotalLabel">총 자산</span>
        <span class="assetTotalVal">₩${F(d)}</span>
      </div>

      ${f.length===0&&E`<div class="empty">등록된 계좌가 없어요.<br />문자나 내역을 넣으면 알아서 찾아내고,<br />아래에서 직접 추가할 수도 있어요.</div>`}

      ${f.map(y=>{let v=u[y.id]||{},$=v.at&&(new Date-new Date(v.at+"T00:00:00"))/864e5>7;return E`
          <div class="acctRow" key=${y.id}>
            <span class="acctKind">${m[y.kind]||y.kind}</span>
            <span class="acctName">${y.name}${y.last4?E`<span class="acctLast4"> ${y.last4}</span>`:""}</span>
            <span class="acctBal">₩${F(v.balance||0)}</span>
            <button class="del" onClick=${()=>n(_=>{_.accounts=_.accounts.filter(A=>A.id!==y.id)})} aria-label="삭제">×</button>
          </div>
          ${v.gaps&&v.gaps.length>0&&E`
            <div class="acctWarn">${v.beforeDate||v.gaps[0].beforeDate} 부근에 기록 안 된 거래 ₩${F(v.gaps[0].missing)}이 있어요</div>`}
          ${$&&E`<div class="acctStale">잔액이 ${v.at} 기준이에요</div>`}`})}

      ${i?E`<div class="card">
            <div class="row wrap">
              <input class="inp" placeholder="계좌 이름 (예: 하나 주계좌)" value=${o} onInput=${y=>r(y.target.value)} />
            </div>
            <div class="chips">
              ${Object.entries(m).map(([y,v])=>E`
                <button key=${y} class=${"tag"+(l===y?" on":"")} onClick=${()=>c(y)}>${v}</button>`)}
            </div>
            <div class="acts">
              <button class="btn ghost sm" onClick=${()=>a(!1)}>취소</button>
              <button class="btn primary sm" disabled=${!o.trim()} onClick=${()=>{n(y=>{y.accounts=[...y.accounts,{id:Ve(),name:o.trim(),kind:l,aliases:[],balance:0}]}),r(""),a(!1)}}>추가</button>
            </div>
          </div>`:E`<button class="tag dash addFixed" onClick=${()=>a(!0)}>+ 계좌 추가</button>`}

      ${g.length>0&&E`
        <div class="transferBox">
          <div class="groupHead">이번 달 계좌 간 이동 ${g.length}건</div>
          ${g.slice(0,10).map(y=>E`
            <div class="tRow" key=${y.id}>
              <span class="tDate">${y.date.slice(5)}</span>
              <span class="tPath">
                ${y.fromAccountId?h(y.fromAccountId):y.accountId?h(y.accountId):"?"}
                → ${y.toAccountId?h(y.toAccountId):y.memo||"?"}
              </span>
              <span class="tAmt">₩${F(y.amount)}</span>
              ${!y.pairedFrom&&y.transferKind==="internal"&&E`<span class="tHalf">⟳</span>`}
            </div>`)}
        </div>`}
    </div>`}function va({db:e,entries:t,patch:n,flash:s,onClose:i}){let[a,o]=L(null),r=()=>{let l={accounts:e.accounts,userName:e.settings.userName,settings:e.settings},c=0,f=0,u={};for(let v of t){if(v.deleted||v.transferKind||v.category==="family"||v.category==="travel"||!(v.type==="transfer"||v.type==="expense"&&v.paymentMethod==="account"&&v.direction==="out"))continue;let _=Js(v,l);u[v.id]=_,c++}let{pairs:d,review:g,halves:h}=Xs(t,l);f=d.length;let m=ia(t),y=new Set(m.map(v=>v.refund.id));n(v=>{v.entries=v.entries.map($=>{let _=u[$.id],A=$;($.category==="family"||$.category==="travel")&&$.transferKind&&(A={...A,type:"expense",transferKind:null,updatedAt:Date.now(),dirty:!0}),_&&(A={...A,transferKind:_.transferKind,toAccountId:_.toAccountId||A.toAccountId||null,status:"confirmed",updatedAt:Date.now(),dirty:!0},_.transferKind==="external"?A={...A,type:"expense"}:A.type==="expense"&&(A={...A,type:"transfer"})),y.has($.id)&&(A={...A,type:"expense",isRefund:!0,transferKind:null,status:"confirmed",confidence:1,updatedAt:Date.now(),dirty:!0});let w=d.find(x=>x.inn.id===$.id);w&&(A={...A,deleted:!0,mergedInto:w.out.id,updatedAt:Date.now(),dirty:!0});let D=d.find(x=>x.out.id===$.id);return D&&(A={...A,type:"transfer",transferKind:A.transferKind||"internal",fromAccountId:D.out.accountId||null,toAccountId:D.inn.accountId||null,pairedFrom:[D.out.id,D.inn.id],fee:D.fee||0,updatedAt:Date.now(),dirty:!0}),A})}),o({classified:c,pairedCount:f,review:g.length,halves:h.length,refunds:m.length}),s("정리했어요")};return E`
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
        <button class="btn ghost sm" onClick=${i}>닫기</button>
        <button class="btn primary sm" onClick=${r}>지금 정리</button>
      </div>
    </div>`}function ya({db:e,entries:t,onImport:n,onClose:s,flash:i}){let a=ye(null),[o,r]=L(null),[l,c]=L(""),[f,u]=L(e.accounts[0]?.id||""),[d,g]=L(!1),[h,m]=L(!1),y=()=>new Promise((_,A)=>{if(window.XLSX)return _(window.XLSX);let w=document.createElement("script");w.src="./xlsx.js",w.onload=()=>_(window.XLSX),w.onerror=()=>A(new Error("엑셀 읽기 모듈을 불러오지 못했어요")),document.head.appendChild(w)}),v=async()=>{if(window.pdfjsLib)return window.pdfjsLib;let _;try{_=await import(new URL("./pdf.min.mjs",document.baseURI).href)}catch{throw new Error("PDF 읽기 모듈을 불러오지 못했어요. pdf.min.mjs 파일을 올렸는지 확인해주세요")}return _.GlobalWorkerOptions&&(_.GlobalWorkerOptions.workerSrc=new URL("./pdf.worker.min.mjs",document.baseURI).href),window.pdfjsLib=_,_},$=_=>{let A=_.target.files&&_.target.files[0];if(!A)return;c(A.name||"가져오기");let w=/\.(xlsx?|xlsm)$/i.test(A.name),D=/\.pdf$/i.test(A.name)||A.type==="application/pdf",x=new FileReader;x.onload=async()=>{try{let R;if(D){g(!0);let N=await(await v()).getDocument({data:new Uint8Array(x.result)}).promise,W=[];for(let ie=1;ie<=N.numPages;ie++){let $e=await(await N.getPage(ie)).getTextContent();W.push($e.items.map(M=>({str:M.str,x:M.transform[4],y:M.transform[5],w:M.width})))}if(R=fa(W),g(!1),!R.length){i("PDF에서 거래내역을 찾지 못했어요");return}}else if(w){g(!0);let I=await y(),N=I.read(new Uint8Array(x.result),{type:"array"}),W=/거래|날짜|일자|입금|출금|찾으신|맡기신|가맹점|기재내용|적요|잔액|금액|원화금액|종류/,ie=null,$e=-1;for(let O of N.SheetNames){let V=N.Sheets[O];if(!V)continue;let ne=I.utils.sheet_to_json(V,{header:1,raw:!1,defval:""}),xe=ne.slice(0,30).map(Ce=>(Ce||[]).join(" ")).join(" "),re=ne.length+(W.test(xe)?1e4:0);re>$e&&($e=re,ie=O)}let M=N.Sheets[ie||N.SheetNames[0]];R=I.utils.sheet_to_json(M,{header:1,raw:!1,defval:""}),g(!1)}else{let I=sa(new Uint8Array(x.result));R=Qs(I)}let B,H=null;if(Wt(R)){if(B=Vt(R,{rules:e.categoryRules,settings:e.settings}),!B.entries.length){i("트래블월렛 내역을 읽지 못했어요");return}}else{if(H=ea(R),!H){i("어느 칸이 날짜·금액인지 못 찾았어요");return}B=na(R,H,{accountId:h?null:f,paymentMethod:h?"card":"account",rules:e.categoryRules,settings:e.settings})}let j=new Set(t.map(I=>I.sourceHash).filter(Boolean)),X=B.entries.filter(I=>!j.has(I.sourceHash)),J=gn(X,t);r({map:H,rows:R.length,total:B.entries.length,dupFile:B.entries.length-X.length,...J})}catch(R){g(!1),i(`파일을 읽지 못했어요: ${R.message}`)}},x.readAsArrayBuffer(A)};return E`
    <div class="card">
      <div class="cardLabel">명세서 파일 가져오기 (CSV)</div>
      <div class="hint sm">은행·카드사에서 받은 파일을 그대로 넣으세요. 엑셀(.xls, .xlsx), CSV, PDF 모두 됩니다.</div>

      <div class="row wrap">
        <button class=${"tag"+(h?"":" on")} onClick=${()=>m(!1)}>통장</button>
        <button class=${"tag"+(h?" on":"")} onClick=${()=>m(!0)}>카드</button>
        ${!h&&e.accounts.filter(_=>_.kind==="bank").map(_=>E`
          <button key=${_.id} class=${"tag"+(f===_.id?" on":"")} onClick=${()=>u(_.id)}>${_.name}</button>`)}
      </div>

      ${d&&E`<div class="hint sm">파일을 읽는 중이에요… (큰 파일은 조금 걸려요)</div>`}
      ${o&&E`
        <div class="tidyResult">
          <div>파일에서 읽은 것 <b>${o.total}건</b></div>
          ${o.dupFile>0&&E`<div>전에 넣은 것 <b>${o.dupFile}건</b> 제외</div>`}
          <div>새로 넣을 것 <b>${o.added.length}건</b></div>
          ${o.merged.length>0&&E`<div>이미 있는 것 <b>${o.merged.length}건</b> 제외</div>`}
          ${o.review.length>0&&E`<div>확인 필요 <b>${o.review.length}건</b></div>`}
        </div>`}

      <input ref=${a} type="file" accept=".csv,.xls,.xlsx,.xlsm,.pdf,text/csv,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style="display:none" onChange=${$} />
      <div class="acts">
        <button class="btn ghost sm" onClick=${s}>닫기</button>
        <button class="btn ghost sm" onClick=${()=>a.current&&a.current.click()}>파일 고르기</button>
        ${o&&E`<button class="btn primary sm" onClick=${()=>{n(o.added,l),r(null)}}>${o.added.length}건 넣기</button>`}
      </div>
    </div>`}function xi({trip:e,picked:t,toggle:n}){let s=(i,a)=>E`
    <label class=${"pickRow"+(t[i.id]?" on":"")} key=${i.id}>
      <input type="checkbox" checked=${!!t[i.id]} onChange=${()=>n(i.id)} />
      <span class="pickDate">${i.date.slice(5)}</span>
      <span class="pickMemo">${i.memo}${a?E`<span class="pickTag"> ${a}</span>`:""}${i.welfare?E`<span class="pickTag welfare"> 복지카드</span>`:""}</span>
      <span class="pickAmt">₩${F(i.amount)}</span>
    </label>`;return E`
    <div class="pickList">
      ${e.booked.length>0&&E`
        <div class="pickHead">미리 결제한 것 (항공·숙박·교통카드·체험)</div>
        ${e.booked.map(i=>s(i,i.sure?"":"여행인지 확인"))}`}
      <div class="pickHead">여행 기간 중 결제 ${e.startDate.slice(5)} ~ ${e.endDate.slice(5)}</div>
      ${e.inside.map(i=>s(i,i.currency&&i.currency!=="KRW"?i.currency:""))}
    </div>`}var ba=e=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`,An=(e,t,n=0)=>{let s=(i,a)=>{let o=new Date(i+"T00:00:00");return o.setDate(o.getDate()+a),ba(o)};return e.startDate<=s(t.endDate,n)&&t.startDate<=s(e.endDate,n)};function _a({db:e,entries:t,patch:n,flash:s,onClose:i}){let[a,o]=L({}),[r,l]=L({}),[c,f]=L({status:"idle",events:[],msg:""}),u=e.settings&&e.settings.sheetUrl;Ke(()=>{if(!u)return;let w=!0;f({status:"loading",events:[],msg:""});let D=x=>{let R=new Date;return R.setDate(R.getDate()+x),ba(R)};return Fs(u,e.settings.sheetToken,D(-400),D(400)).then(x=>{w&&f({status:"done",events:x,msg:""})}).catch(x=>{w&&f({status:"error",events:[],msg:String(x&&x.message||x)})}),()=>{w=!1}},[u]);let d=U(()=>{let w=oa(t),D=e.trips.filter(I=>I.startDate&&I.endDate),x=D.map(I=>I.startDate),R=I=>Ut(t,I,{allTrips:[...w.trips,...D],settings:e.settings}),B=oe(),H=pa(c.events,D),j=I=>Ut(t,I,{allTrips:D,settings:e.settings,preDays:I.startDate>B?365:120}),X=I=>!H.some(N=>An(N,I,0)),J=ua(t,{settings:e.settings}).filter(I=>!D.some(N=>An(N,I,7))&&!w.trips.some(N=>An(N,I,7)));return{calendar:H.map(j),trips:w.trips.filter(I=>!x.includes(I.startDate)&&X(I)).map(R),singles:w.singles.filter(I=>!x.includes(I.startDate)&&X(I)).map(R),topups:J.filter(X).map(R)}},[t,e.trips,e.settings,c.events]),g=w=>{let D={};for(let x of w.inside)D[x.id]=!0;for(let x of w.booked)D[x.id]=!!x.sure;return D},h=w=>r[w.startDate]||g(w),m=(w,D)=>l(x=>{let R=x[w.startDate]||g(w);return{...x,[w.startDate]:{...R,[D]:!R[D]}}}),y=w=>{let D=h(w);return[...w.inside,...w.booked].filter(x=>D[x.id]&&!x.welfare).reduce((x,R)=>x+(R.isRefund?-R.amount:R.amount),0)},v=w=>[...w.inside,...w.booked].filter(D=>h(w)[D.id]).length,$=w=>{let D=h(w),x=new Set([...w.inside,...w.booked].filter(B=>D[B.id]).map(B=>B.id));if(!x.size&&!w.fromCalendar){s("고른 항목이 없어요");return}let R=Ve();n(B=>{B.trips=[...B.trips,{id:R,name:w.name,startDate:w.startDate,endDate:w.endDate,createdAt:Date.now()}],B.entries=B.entries.map(H=>x.has(H.id)?{...H,tripId:R,updatedAt:Date.now(),dirty:!0}:H)}),s(w.approx?`${w.name} · ${x.size}건을 묶었어요. 여행 탭에서 기간을 실제 일정으로 고치세요`:x.size?`${w.name} · ${x.size}건을 묶었어요`:`${w.name} 여행을 만들었어요. 기간 안의 해외 결제는 들어오는 대로 묶입니다`)},_=(w,D)=>E`
    <div class=${"foundTrip"+(D?" dim":"")} key=${w.startDate}>
      <div class="foundTop">
        <span class="foundName">${w.name}</span>
        <span class="foundTotal">₩${F(y(w))}</span>
      </div>
      <div class="foundSub">
        ${w.startDate.slice(5)} ~ ${w.endDate.slice(5)} · ${w.days}일 · ${v(w)}건
        ${w.currencies.length?` · ${w.currencies.join(", ")}`:""}
      </div>
      <div class="foundBreak">
        ${w.fromCalendar?`캘린더 일정 · 기간 안 ${w.inside.length}건`:w.approx?`여행 자금 충전 ${w.count}건으로 추정한 기간`:`현지 ${w.inside.length}건`}
        ${w.booked.length>0?` · 사전결제 후보 ${w.booked.length}건`:""}
        ${w.welfare?` · 복지카드 ₩${F(w.welfare)} 별도`:""}
      </div>
      <button class="pickToggle" onClick=${()=>o(x=>({...x,[w.startDate]:!x[w.startDate]}))}>
        ${a[w.startDate]?"항목 접기":"항목 확인하고 고치기"}
      </button>
      ${a[w.startDate]&&E`<${xi} trip=${w} picked=${h(w)} toggle=${x=>m(w,x)} />`}
      <div class="acts"><button class="btn primary sm" onClick=${()=>$(w)}>${w.fromCalendar&&!v(w)?"여행 만들기":`${v(w)}건으로 묶기`}</button></div>
    </div>`,A=!d.calendar.length&&!d.trips.length&&!d.singles.length&&!d.topups.length;return E`
    <div class="card">
      <div class="cardLabel">여행 자동 찾기</div>
      <div class="hint sm">
        현지 결제가 이어진 구간을 일정으로 봅니다. 미리 결제한 항공권·숙박·체험도 앞쪽에서 찾아 함께 올립니다.
        <b>항목 확인하고 고치기</b>를 눌러 빼거나 넣을 수 있습니다.
      </div>
      ${A&&E`
        <div class="empty">새로 찾은 여행이 없어요.<br />해외 결제 표시가 있는 명세서(카드 해외이용)가 들어오면 여기 나타납니다.<br />
          아직 안 떠난 여행은 구글 캘린더에 "여행"이 들어간 일정으로 넣어두거나, 여행 탭의 <b>+ 여행 추가</b>로 만드세요.</div>`}
      ${c.status==="loading"&&E`<div class="hint sm">구글 캘린더에서 여행 일정을 찾는 중…</div>`}
      ${c.status==="error"&&E`<div class="hint sm">캘린더를 못 읽었어요 · ${c.msg}</div>`}
      ${d.calendar.length>0&&E`
        <div class="foundDivider">구글 캘린더 일정</div>
        ${d.calendar.map(w=>_(w,!1))}`}
      ${d.trips.length>0&&d.calendar.length>0&&E`<div class="foundDivider">결제 기록으로 찾은 여행</div>`}
      ${d.trips.map(w=>_(w,!1))}
      ${d.topups.length>0&&E`
        <div class="foundDivider">충전 기록으로 추정한 여행 (기간은 만든 뒤 고치세요)</div>
        ${d.topups.map(w=>_(w,!0))}`}
      ${d.singles.length>0&&E`
        <div class="foundDivider">이것도 여행인가요? (하루짜리 결제)</div>
        ${d.singles.map(w=>_(w,!0))}`}
      <div class="acts"><button class="btn ghost sm" onClick=${i}>닫기</button></div>
    </div>`}var In=[{key:"trip",label:"여행 기간만",pre:0,post:0},{key:"m4",label:"앞뒤 4개월",pre:120,post:120},{key:"y1",label:"앞뒤 1년",pre:365,post:365},{key:"y2",label:"앞뒤 2년",pre:730,post:730}];function ka({db:e,entries:t,trip:n,patch:s,flash:i,onClose:a}){let o=!!(n&&n.startDate&&n.startDate>oe()),[r,l]=L(o?"y1":"m4"),[c,f]=L(!1),u=In.find(I=>I.key===r)||In[1],d=!n||!n.startDate||!n.endDate,g=U(()=>Ut(t,n,{allTrips:e.trips,preDays:u.pre,postDays:u.post,wide:c,settings:e.settings}),[t,n,e.trips,u,c,e.settings]),h=U(()=>t.filter(I=>n&&I.tripId===n.id),[t,n]),m=U(()=>new Set(g.reimb.map(I=>I.id)),[g]),y=U(()=>{let I=new Map;for(let N of[...h,...g.inside,...g.booked,...g.reimb])I.set(N.id,N);return Array.from(I.values()).sort((N,W)=>N.date<W.date?-1:1)},[h,g]),v=I=>!!I.reimbFrom||m.has(I.id),$=I=>I.transferKind==="welfare",_=y.filter(I=>!v(I)),A=y.filter(v),[w,D]=L(()=>{let I={};for(let N of y)I[N.id]=!!n&&N.tripId===n.id;return I}),x=I=>D(N=>{let W={...N};for(let ie of _)W[ie.id]=I==="all"?!0:I==="none"?!1:ie.date>=n.startDate&&ie.date<=n.endDate;return W}),R=y.filter(I=>w[I.id]),B=R.filter(I=>!$(I)).reduce((I,N)=>I+(v(N)||N.isRefund?-N.amount:N.amount),0),H=R.filter($).reduce((I,N)=>I+(N.isRefund?-N.amount:N.amount),0),j=R.length,X=()=>{let I=Date.now();s(N=>{N.entries=N.entries.map(W=>{if(!(W.id in w))return W;if(!!w[W.id])return m.has(W.id)&&!W.reimbFrom?{...W,tripId:n.id,type:"expense",isRefund:!0,category:"travel",transferKind:null,status:"confirmed",needsCheck:!1,reimbFrom:{type:W.type,transferKind:W.transferKind??null,category:W.category,status:W.status,isRefund:!!W.isRefund},updatedAt:I,dirty:!0}:W.tripId===n.id?W:{...W,tripId:n.id,updatedAt:I,dirty:!0};if(W.tripId!==n.id)return W;if(W.reimbFrom){let{reimbFrom:$e,...M}=W;return{...M,...$e,tripId:null,updatedAt:I,dirty:!0}}return{...W,tripId:null,updatedAt:I,dirty:!0}})}),i(`${j}건으로 정리했어요`),a()},J=I=>E`
    <label class=${"pickRow"+(w[I.id]?" on":"")} key=${I.id}>
      <input type="checkbox" checked=${!!w[I.id]} onChange=${()=>D(N=>({...N,[I.id]:!N[I.id]}))} />
      ${I.date.slice(0,4)===n.startDate.slice(0,4)?E`<span class="pickDate">${I.date.slice(5)}</span>`:E`<span class="pickDate long">${I.date.slice(2).replace(/-/g,".")}</span>`}
      <span class="pickMemo">${I.memo}
        ${!v(I)&&I.date<n.startDate?E`<span class="pickTag"> 사전결제</span>`:""}
        ${!v(I)&&I.date>n.endDate?E`<span class="pickTag"> 여행 후</span>`:""}
        ${$(I)?E`<span class="pickTag welfare"> 복지카드 · 합계 별도</span>`:""}
        ${I.currency&&I.currency!=="KRW"?E`<span class="pickTag"> ${I.currency}</span>`:""}
      </span>
      <span class=${"pickAmt"+(v(I)?" reimb":"")}>${v(I)?"−":""}₩${F(I.amount)}</span>
    </label>`;return d?E`
      <div class="card">
        <div class="cardLabel">${n?n.name:"여행"} · 항목 조정</div>
        <div class="empty">이 여행은 기간이 없어서 찾을 수 없어요.<br />아래 여행 정보에서 <b>기간</b>을 넣어주세요.</div>
        <div class="acts"><button class="btn ghost sm" onClick=${a}>닫기</button></div>
      </div>`:E`
    <div class="card">
      <div class="cardLabel">${n.name} · 항목 조정</div>
      <div class="hint sm">여행 기간 안팎의 결제를 모아 보여줍니다. 체크로 넣고 빼세요.${o?" 아직 안 떠난 여행이라 1년 앞까지 찾습니다.":""}</div>
      <div class="row wrap" style="margin-top:8px">
        ${In.map(I=>E`
          <button key=${I.key} class=${"tag"+(r===I.key?" on":"")} onClick=${()=>l(I.key)}>${I.label}</button>`)}
      </div>
      <div class="row wrap" style="margin-top:6px">
        <button class=${"tag"+(c?" on":"")} onClick=${()=>f(!c)}>
          ${c?"모든 지출 보기":"여행 관련만 보기"}
        </button>
        <span class="hint sm">항공·숙박 말고 다른 항목도 찾으려면 켜세요</span>
      </div>
      <div class="foundTop">
        <span class="foundName">${j}건</span>
        <span class="foundTotal">₩${F(B)}</span>
      </div>
      ${H!==0&&E`<div class="foundSub">복지카드 ₩${F(H)}는 따로 셉니다 (위 금액에 안 들어감)</div>`}
      <div class="row wrap" style="margin:8px 0">
        <button class="tag" onClick=${()=>x("all")}>전부 선택</button>
        <button class="tag" onClick=${()=>x("inside")}>기간 안만</button>
        <button class="tag" onClick=${()=>x("none")}>전부 해제</button>
      </div>
      <div class="pickList">
        ${_.length===0&&E`<div class="empty">조정할 항목이 없어요.<br />기간을 넓히거나 '여행 관련만 보기'를 눌러 모든 지출을 보세요.</div>`}
        ${_.map(J)}
        ${A.length>0&&E`
          <div class="pickHead">받은 돈 — 같이 가는 사람이 보내준 정산금이면 체크 (여행 경비에서 빠져요)</div>
          ${A.map(J)}`}
      </div>
      <div class="acts">
        <button class="btn ghost sm" onClick=${a}>취소</button>
        <button class="btn primary sm" onClick=${X}>저장</button>
      </div>
    </div>`}function wa({db:e,carId:t,patch:n,flash:s,onClose:i,onAddEntry:a}){let[o,r]=L(""),[l,c]=L(null),[f,u]=L({}),[d,g]=L(!0),h=e.maintenance.filter(v=>v.carId===t),m=v=>{let $=ra(v);if(!$.items.length){s("정비 항목을 찾지 못했어요");return}c($);let _={};for(let A of $.items)_[A.label]=!0;u(_)},y=()=>{let v=l.items.filter($=>f[$.label]);if(!v.length){s("고른 항목이 없어요");return}n($=>{$.maintenance=$.maintenance.map(_=>_.carId!==t||!v.find(w=>w.label===_.label)?_:{..._,lastDate:l.date,lastMileage:l.mileage??_.lastMileage});for(let _ of v)$.maintenance.some(A=>A.carId===t&&A.label===_.label)||($.maintenance=[...$.maintenance,{id:Ve(),carId:t,label:_.label,intervalKm:null,intervalMonths:null,lastDate:l.date,lastMileage:l.mileage??null}]);l.mileage&&($.mileageLogs=[{id:Ve(),carId:t,date:l.date,mileage:l.mileage},...$.mileageLogs])}),d&&l.total>0&&a({date:l.date,type:"expense",category:"transport",amount:l.total,memo:`정비 · ${v.map($=>$.label).join(", ")}`.slice(0,40),normKey:z("정비"),carId:t,paymentMethod:"card",source:"receipt",confidence:1}),s(`정비 ${v.length}건을 기록했어요`),r(""),c(null),i()};return E`
    <div class="card">
      <div class="cardLabel">정비 견적서 넣기</div>
      <div class="hint sm">
        견적서나 영수증 사진을 아이폰에서 열어 글자를 길게 눌러 복사한 뒤 붙여넣으세요.
        항목·날짜·주행거리를 찾아 교환 이력에 반영합니다.
      </div>
      <textarea class="pasteArea" style="min-height:80px" value=${o}
        placeholder=${`○○카센터
2026.03.15  주행거리 87,450km
엔진오일 교환 45,000
오일필터 8,000
합계 53,000`}
        onInput=${v=>r(v.target.value)}
        onPaste=${v=>{let $=v.clipboardData?v.clipboardData.getData("text"):"";$&&(r($),setTimeout(()=>m($),0))}} />

      ${l&&E`
        <div class="quoteHead">
          ${l.date}
          ${l.mileage?` · ${l.mileage.toLocaleString()}km`:" · 주행거리 못 찾음"}
          ${l.total?` · 합계 ₩${F(l.total)}`:""}
        </div>
        <div class="pickList">
          ${l.items.map(v=>{let $=h.some(_=>_.label===v.label);return E`
              <label class=${"pickRow"+(f[v.label]?" on":"")} key=${v.label}>
                <input type="checkbox" checked=${!!f[v.label]}
                  onChange=${()=>u(_=>({..._,[v.label]:!_[v.label]}))} />
                <span class="pickMemo">${v.label}${$?"":E`<span class="pickTag"> 새 항목</span>`}</span>
                <span class="pickAmt">${v.amount?`₩${F(v.amount)}`:""}</span>
              </label>`})}
        </div>
        <div class="row wrap" style="margin-top:8px">
          <button class=${"tag"+(d?" on":"")} onClick=${()=>g(!d)}>
            ${d?"지출로도 기록":"이력만 남기기"}
          </button>
          ${d&&l.total>0&&E`<span class="hint sm">₩${F(l.total)}이 이 차량 지출로 들어갑니다</span>`}
        </div>`}

      <div class="acts">
        <button class="btn ghost sm" onClick=${i}>닫기</button>
        ${!l&&E`<button class="btn primary sm" disabled=${!o.trim()} onClick=${()=>m(o)}>읽기</button>`}
        ${l&&E`<button class="btn primary sm" onClick=${y}>이력에 반영</button>`}
      </div>
    </div>`}var he=Le.bind(Me),Ci=[{key:"variable",label:"변동비",color:"#8A6D3B"},{key:"fixed",label:"고정비",color:"#6B5A7A"},{key:"family",label:"가족 송금",color:"#5A7A8A"},{key:"familyExtra",label:"별도 송금",color:"#8A5A3B"},{key:"travel",label:"여행",color:"#3E7A6B"},{key:"cash",label:"현금",color:"#8A8A8A"}],xa=e=>{let t=Math.abs(e);return t>=1e8?`${(e/1e8).toFixed(1)}억`:t>=1e4?`${Math.round(e/1e4).toLocaleString()}만`:F(e)};function Di(e){return e.category==="family"?e.isExtra?"familyExtra":"family":e.category==="travel"?"travel":e.fixedId?"fixed":e.paymentMethod==="cash"?"cash":"variable"}function Rn(e){return!(e.deleted||e.type!=="expense"||e.transferKind&&e.transferKind!=="external")}var Mn=e=>e.isRefund?-e.amount:e.amount;function Si({entries:e,range:t}){let n=U(()=>{let a={};for(let l of e){if(!Rn(l))continue;let c=Di(l);a[c]=(a[c]||0)+Mn(l)}let o=Ci.map(l=>({...l,value:a[l.key]||0})).filter(l=>l.value>0),r=o.reduce((l,c)=>l+c.value,0);return{rows:o.sort((l,c)=>c.value-l.value),total:r}},[e]);if(!n.total)return he`<div class="empty">이 기간 지출이 없어요.</div>`;let s=0,i=n.rows.map(a=>{let o=s;return s+=a.value/n.total,{...a,from:o,to:s}});return he`
    <div class="chartWrap">
      <div class="donutRow">
        <svg viewBox="0 0 42 42" class="donut" role="img" aria-label="항목별 지출 비중">
          ${i.map(a=>{let o=(a.to-a.from)*100;return he`<circle key=${a.key} cx="21" cy="21" r="15.9" fill="none"
              stroke=${a.color} stroke-width="7"
              stroke-dasharray=${`${o} ${100-o}`}
              stroke-dashoffset=${`${25-a.from*100}`} />`})}
          <text x="21" y="20" class="donutTop">지출</text>
          <text x="21" y="25.5" class="donutNum">${xa(n.total)}</text>
        </svg>
        <div class="legend">
          ${i.map(a=>he`
            <div class="legendRow" key=${a.key}>
              <span class="legendDot" style=${`background:${a.color}`}></span>
              <span class="legendName">${a.label}</span>
              <span class="legendPct">${Math.round(a.value/n.total*100)}%</span>
              <span class="legendVal">₩${F(a.value)}</span>
            </div>`)}
        </div>
      </div>
    </div>`}function Ai({all:e,months:t=6}){let n=U(()=>{let i=oe().slice(0,7),a=[],[o,r]=i.split("-").map(Number);for(let u=t-1;u>=0;u--){let d=new Date(o,r-1-u,1);a.push(`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`)}let l=Object.fromEntries(a.map(u=>[u,{income:0,expense:0}]));for(let u of e){let d=u.date.slice(0,7);l[d]&&(u.type==="income"&&!u.deleted?l[d].income+=u.amount:Rn(u)&&(l[d].expense+=Mn(u)))}let c=a.map(u=>({key:u,label:u.slice(5)+"월",...l[u]})),f=Math.max(1,...c.map(u=>Math.max(u.income,u.expense)));return{rows:c,peak:f}},[e,t]),s=96;return he`
    <div class="chartWrap">
      <div class="barChart">
        ${n.rows.map(i=>{let a=Math.round(i.income/n.peak*s),o=Math.round(i.expense/n.peak*s),r=i.income-i.expense;return he`
            <div class="barCol" key=${i.key}>
              <div class="barPair" style=${`height:${s}px`}>
                <div class="bar income" style=${`height:${a}px`} title=${`수입 ${F(i.income)}`}></div>
                <div class="bar expense" style=${`height:${o}px`} title=${`지출 ${F(i.expense)}`}></div>
              </div>
              <div class="barLabel">${i.label}</div>
              <div class=${"barDiff"+(r<0?" minus":"")}>
                ${i.income||i.expense?`${r<0?"−":"+"}${xa(Math.abs(r))}`:""}
              </div>
            </div>`})}
      </div>
      <div class="legendInline">
        <span><span class="legendDot" style="background:#3D6B4F"></span>수입</span>
        <span><span class="legendDot" style="background:#B23A24"></span>지출</span>
      </div>
    </div>`}function Ii({entries:e}){let t=U(()=>{let n={};for(let o of e)Rn(o)&&(n[o.category]=(n[o.category]||0)+Mn(o));let s=Object.entries(n).map(([o,r])=>({key:o,label:ze[o]?.label||o,color:ze[o]?.color||"#999",value:r})).filter(o=>o.value>0).sort((o,r)=>r.value-o.value),i=s.length?s[0].value:1,a=s.reduce((o,r)=>o+r.value,0);return{rows:s,peak:i,total:a}},[e]);return t.rows.length?he`
    <div class="chartWrap">
      ${t.rows.map(n=>he`
        <div class="catBarRow" key=${n.key}>
          <span class="catBarName">${n.label}</span>
          <div class="catBarTrack">
            <div class="catBarFill" style=${`width:${Math.max(2,n.value/t.peak*100)}%;background:${n.color}`}></div>
          </div>
          <span class="catBarVal">₩${F(n.value)}</span>
        </div>`)}
      <div class="catBarFoot">합계 ₩${F(t.total)}</div>
    </div>`:he`<div class="empty">이 기간 지출이 없어요.</div>`}function Ca({entries:e,all:t}){let[n,s]=L("axis");return he`
    <div class="stats">
      <div class="statTabs">
        <button class=${"statTab"+(n==="axis"?" on":"")} onClick=${()=>s("axis")}>항목별</button>
        <button class=${"statTab"+(n==="month"?" on":"")} onClick=${()=>s("month")}>월별 추이</button>
        <button class=${"statTab"+(n==="cat"?" on":"")} onClick=${()=>s("cat")}>카테고리</button>
      </div>
      ${n==="axis"&&he`<${Si} entries=${e} />`}
      ${n==="month"&&he`<${Ai} all=${t} />`}
      ${n==="cat"&&he`<${Ii} entries=${e} />`}
    </div>`}var ge=Le.bind(Me),Sa=[{key:"variable",label:"변동비",color:"#8A6D3B"},{key:"fixed",label:"고정비",color:"#6B5A7A"},{key:"family",label:"가족 송금",color:"#5A7A8A"},{key:"familyExtra",label:"별도 송금",color:"#8A5A3B"},{key:"travel",label:"여행",color:"#3E7A6B"},{key:"cash",label:"현금",color:"#8A8A8A"}],Ri=e=>!e.deleted&&e.type==="expense"&&(!e.transferKind||e.transferKind==="external"),Da=e=>e.isRefund?-e.amount:e.amount;function Mi(e){return e.category==="family"?e.isExtra?"familyExtra":"family":e.category==="travel"?"travel":e.fixedId?"fixed":e.paymentMethod==="cash"?"cash":"variable"}function Kn(e,t,n){let s=e.filter(f=>f.date>=t&&f.date<=n),i={},a={},o={},r=0,l=0,c=0;for(let f of s){if(f.type==="income"&&!f.deleted){r+=f.amount;continue}if(f.deleted)continue;if(f.transferKind==="welfare"){c+=Da(f);continue}if(!Ri(f))continue;let u=Da(f);l+=u;let d=Mi(f);i[d]=(i[d]||0)+u,a[f.category]=(a[f.category]||0)+u;let g=f.normKey||f.memo||"";g&&(o[g]||(o[g]={name:f.memo,total:0,count:0}),o[g].total+=u,o[g].count+=1)}return{from:t,to:n,income:r,expense:l,welfare:c,axes:i,cats:a,merchants:o,count:s.length}}var Aa=(e,t)=>t?Math.round((e-t)/t*100):e?null:0,Tn=({now:e,before:t,invert:n})=>{if(t==null)return null;let s=e-t;if(!s)return ge`<span class="dl same">변화 없음</span>`;let i=s>0,a=n?!i:i,o=Aa(e,t);return ge`
    <span class=${"dl "+(a?"bad":"good")}>
      ${i?"▲":"▼"} ${F(Math.abs(s))}${o!==null?` (${Math.abs(o)}%)`:""}
    </span>`},En=(e,t)=>new Date(e,t,0).getDate(),Fe=e=>String(e).padStart(2,"0");function Ki(e,t){let[n,s]=t.split("-").map(Number);if(e==="month"){let o={from:`${t}-01`,to:`${t}-${Fe(En(n,s))}`,label:`${n}년 ${s}월`},r=new Date(n,s-2,1),l=r.getFullYear(),c=r.getMonth()+1,f={from:`${l}-${Fe(c)}-01`,to:`${l}-${Fe(c)}-${Fe(En(l,c))}`,label:`${c}월`},u={from:`${n-1}-${Fe(s)}-01`,to:`${n-1}-${Fe(s)}-${Fe(En(n-1,s))}`,label:`작년 ${s}월`};return{cur:o,prev:f,lastYear:u}}let i={from:`${n}-01-01`,to:`${n}-12-31`,label:`${n}년`},a={from:`${n-1}-01-01`,to:`${n-1}-12-31`,label:`${n-1}년`};return{cur:i,prev:a,lastYear:null}}function Ti(e,t,n){let s=[];if(!t||!t.count)return s;for(let r of Sa){let l=e.axes[r.key]||0,c=t.axes[r.key]||0,f=l-c;if(Math.abs(f)<1e5)continue;let u=Aa(l,c);c===0&&l>0?s.push({kind:"new",text:`${r.label}가 새로 ${F(l)}원 발생했습니다`}):l===0&&c>0?s.push({kind:"gone",text:`${r.label} ${F(c)}원이 이번에는 없습니다`}):u!==null&&Math.abs(u)>=20&&s.push({kind:f>0?"up":"down",text:`${r.label}가 ${n}보다 ${F(Math.abs(f))}원 ${f>0?"늘었습니다":"줄었습니다"} (${Math.abs(u)}%)`})}let i=[],a=new Set([...Object.keys(e.cats),...Object.keys(t.cats)]);for(let r of a){let l=(e.cats[r]||0)-(t.cats[r]||0);Math.abs(l)>=15e4&&i.push({k:r,d:l})}i.sort((r,l)=>Math.abs(l.d)-Math.abs(r.d));for(let r of i.slice(0,3)){let l=ze[r.k]?.label||r.k;s.push({kind:r.d>0?"up":"down",text:`${l}가 ${F(Math.abs(r.d))}원 ${r.d>0?"늘었습니다":"줄었습니다"}`})}for(let[r,l]of Object.entries(e.merchants))t.merchants[r]||l.total<3e5||s.push({kind:"new",text:`${l.name}에 ${F(l.total)}원을 썼습니다. ${n}에는 없던 지출입니다`});let o=e.income-e.expense;return e.income>0&&s.push({kind:o<0?"warn":"ok",text:o<0?`수입보다 ${F(-o)}원을 더 썼습니다`:`${F(o)}원이 남았습니다`}),s.slice(0,8)}function Ia({all:e,monthStartDay:t}){let[n,s]=L("month"),[i,a]=L(()=>oe().slice(0,7)),o=U(()=>Ki(n,i),[n,i]),r=U(()=>Kn(e,o.cur.from,o.cur.to),[e,o]),l=U(()=>Kn(e,o.prev.from,o.prev.to),[e,o]),c=U(()=>o.lastYear?Kn(e,o.lastYear.from,o.lastYear.to):null,[e,o]),f=l.count?l:c&&c.count?c:null,u=l.count?o.prev.label:c&&c.count?o.lastYear.label:"",d=U(()=>Ti(r,f,u),[r,f,u]),g=$=>{if(n==="year"){a(`${Number(i.slice(0,4))+$}-01`);return}let[_,A]=i.split("-").map(Number),w=new Date(_,A-1+$,1);a(`${w.getFullYear()}-${Fe(w.getMonth()+1)}`)},h=Sa.map($=>({...$,now:r.axes[$.key]||0,before:f?f.axes[$.key]||0:null})).filter($=>$.now>0||($.before||0)>0),m=Math.max(1,...h.map($=>Math.max($.now,$.before||0))),y=()=>{let $=[];$.push(`${o.cur.label} 결산`),$.push(""),$.push(`수입   ${F(r.income)}원`),$.push(`지출   ${F(r.expense)}원`),$.push(`남은돈 ${F(r.income-r.expense)}원`),$.push("");for(let A of h)$.push(`${A.label.padEnd(8)} ${F(A.now)}원`);if(d.length){$.push(""),$.push(`[${u} 대비]`);for(let A of d)$.push(`· ${A.text}`)}let _=$.join(`
`);try{navigator.clipboard.writeText(_)}catch{window.prompt("복사하세요",_)}},v=r.income-r.expense;return ge`
    <div class="report">
      <div class="repTabs">
        <button class=${"statTab"+(n==="month"?" on":"")} onClick=${()=>s("month")}>월 결산</button>
        <button class=${"statTab"+(n==="year"?" on":"")} onClick=${()=>s("year")}>연 결산</button>
      </div>

      <div class="repHead">
        <button class="nav" onClick=${()=>g(-1)} aria-label="이전">‹</button>
        <span class="repTitle">${o.cur.label} 결산</span>
        <button class="nav" onClick=${()=>g(1)} aria-label="다음">›</button>
      </div>

      ${r.count===0?ge`<div class="empty">이 기간 기록이 없어요.</div>`:ge`
        <div class="repTop">
          <div class="repTopRow">
            <span>수입</span>
            <b class="inc">₩${F(r.income)}</b>
            <${Tn} now=${r.income} before=${f?f.income:null} invert=${!0} />
          </div>
          <div class="repTopRow">
            <span>지출</span>
            <b class="exp">₩${F(r.expense)}</b>
            <${Tn} now=${r.expense} before=${f?f.expense:null} />
          </div>
          <div class=${"repTopRow total"+(v<0?" minus":"")}>
            <span>${v<0?"모자란 돈":"남은 돈"}</span>
            <b>₩${F(Math.abs(v))}</b>
          </div>
        </div>

        <div class="repSection">항목별${f?ge`<span class="repBase">${u} 대비</span>`:""}</div>
        ${h.map($=>ge`
          <div class="repRow" key=${$.key}>
            <div class="repRowTop">
              <span class="repName">${$.label}</span>
              <span class="repVal">₩${F($.now)}</span>
            </div>
            <div class="repBars">
              <div class="repBarTrack">
                <div class="repBarNow" style=${`width:${$.now/m*100}%;background:${$.color}`}></div>
              </div>
              ${f&&ge`
                <div class="repBarTrack ghost">
                  <div class="repBarBefore" style=${`width:${($.before||0)/m*100}%`}></div>
                </div>`}
            </div>
            ${f&&ge`<div class="repDelta"><${Tn} now=${$.now} before=${$.before} /></div>`}
          </div>`)}

        ${r.welfare>0&&ge`
          <div class="repNoteLine">복지카드 ₩${F(r.welfare)}원은 합계에 넣지 않았습니다</div>`}

        ${d.length>0&&ge`
          <div class="repSection">특이사항</div>
          <ul class="repNotes">
            ${d.map(($,_)=>ge`
              <li class=${"repNote "+$.kind} key=${_}>${$.text}</li>`)}
          </ul>`}

        <div class="repSection">많이 쓴 곳</div>
        <ol class="repTopList">
          ${Object.values(r.merchants).sort(($,_)=>_.total-$.total).slice(0,5).map(($,_)=>ge`
            <li key=${_}>
              <span class="repName">${$.name}</span>
              <span class="repCnt">${$.count}건</span>
              <span class="repVal">₩${F($.total)}</span>
            </li>`)}
        </ol>

        <div class="acts">
          <button class="btn ghost sm" onClick=${y}>글자로 복사</button>
        </div>`}
    </div>`}var b=Le.bind(Me),{CATEGORIES:Jt,CAT_MAP:we,todayISO:Ae,toLocalISO:dt,formatDateLabel:ut,formatWon:q,uid:ke,parsePaste:Ei,reconcile:Ln,normKey:Xe}=$n,qe="ledger:db",Li=6,Te={version:Li,entries:[],trips:[],vehicles:[],maintenance:[],mileageLogs:[],accounts:[],fixedExpenses:[],categoryRules:[],favorites:[],imports:[],settings:{userName:"",monthStartDay:1,sheetUrl:"",sheetToken:"",lastSyncAt:"",incomeSources:["급여","처우개선비","상여"],excludedCounterparties:[],incomeOnlyFromSources:!0,welfareCards:["현대복지","현대카드"],investKeywords:["키움","증권","선물","미래에셋","한국투자","NH투자"],welfareLimit:0,welfarePeriodStart:"",familyTransferKeywords:["하나머니충전","하나머니 충전"],familyRegularAmount:115e4,travelKeywords:["트래블월렛","트래블 월렛"]}};function Bi(){try{let e=localStorage.getItem(qe);if(!e)return{...Te};let t=JSON.parse(e);return{...Te,...t,settings:{...Te.settings,...t.settings||{}}}}catch(e){return console.warn("저장된 데이터를 읽지 못했습니다",e),{...Te}}}function Ni(e){try{let t=JSON.stringify(e);return localStorage.setItem(qe,t),{ok:!0,size:t.length}}catch(t){return{ok:!1,error:t}}}var lt=[{label:"타이어",intervalKm:5e4,intervalMonths:36},{label:"브레이크패드",intervalKm:4e4,intervalMonths:24},{label:"브레이크액",intervalKm:4e4,intervalMonths:24},{label:"냉각수",intervalKm:4e4,intervalMonths:24},{label:"에어컨필터",intervalKm:15e3,intervalMonths:12},{label:"배터리",intervalKm:null,intervalMonths:36},{label:"와이퍼",intervalKm:null,intervalMonths:12},{label:"자동차보험",intervalKm:null,intervalMonths:12},{label:"정기검사",intervalKm:null,intervalMonths:24}],zt=[{label:"엔진오일",intervalKm:1e4,intervalMonths:6},{label:"오일필터",intervalKm:1e4,intervalMonths:6},{label:"에어필터",intervalKm:4e4,intervalMonths:24},{label:"미션오일",intervalKm:1e5,intervalMonths:null}],Xt=[{key:"gasoline",label:"가솔린",presets:[...zt,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},...lt]},{key:"diesel",label:"디젤",presets:[...zt,{label:"연료필터",intervalKm:4e4,intervalMonths:24},{label:"DPF 점검",intervalKm:1e5,intervalMonths:null},...lt]},{key:"lpg",label:"LPG",presets:[...zt,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},{label:"LPG 필터",intervalKm:4e4,intervalMonths:24},...lt]},{key:"hybrid",label:"하이브리드",presets:[...zt,{label:"점화플러그",intervalKm:16e4,intervalMonths:null},{label:"구동용 배터리 점검",intervalKm:null,intervalMonths:24},...lt]},{key:"ev",label:"전기",presets:[{label:"감속기 오일",intervalKm:1e5,intervalMonths:null},{label:"고전압 배터리 점검",intervalKm:null,intervalMonths:12},...lt]}],Ka=e=>(Xt.find(t=>t.key===e)||Xt[0]).presets,Oi={ok:"양호",warning:"곧 교체",overdue:"교체 필요",unknown:"기록 필요"};function Pi(e,t){if(!e.lastDate&&e.lastMileage==null)return{status:"unknown",remKm:null,remMonths:null};let n=null,s=null;if(e.intervalKm&&e.lastMileage!=null&&t!=null&&(n=e.intervalKm-(t-e.lastMileage)),e.intervalMonths&&e.lastDate){let a=new Date(e.lastDate+"T00:00:00"),o=new Date,r=(o.getFullYear()-a.getFullYear())*12+(o.getMonth()-a.getMonth());o.getDate()<a.getDate()&&(r-=1),s=e.intervalMonths-r}let i="ok";return n!=null&&n<=0||s!=null&&s<=0?i="overdue":(n!=null&&n<=1e3||s!=null&&s<=1)&&(i="warning"),{status:i,remKm:n,remMonths:s}}function Fi(e,t=1){let[n,s]=e.split("-").map(Number);if(t<=1){let o=new Date(n,s,0);return{start:`${e}-01`,end:dt(o)}}let i=new Date(n,s-2,t),a=new Date(n,s-1,t-1);return{start:dt(i),end:dt(a)}}function Nn(e){return e==="income"?"+":e==="transfer"?"":"−"}function Gt(e){let t=Date.now();return{id:ke(),date:Ae(),type:"expense",category:"etc",amount:0,memo:"",tripId:null,carId:null,currency:"",foreignAmount:null,isRefund:!1,paymentMethod:"unknown",accountId:null,fixedId:null,normKey:"",source:"manual",confidence:1,rawText:"",balanceAfter:null,transferKind:null,direction:null,createdAt:t,updatedAt:t,deleted:!1,dirty:!0,status:"confirmed",...e}}var ue=(e,t)=>n=>b`
  <svg viewBox="0 0 24 24" width=${n.size||16} height=${n.size||16} fill="none"
       stroke="currentColor" stroke-width=${n.sw||2} stroke-linecap="round" stroke-linejoin="round"
       class=${n.class||""} aria-hidden="true">${e}${t||""}</svg>`,Hi=ue(b`<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>`),Ui=ue(b`<polyline points="15 18 9 12 15 6"/>`),ji=ue(b`<polyline points="9 18 15 12 9 6"/>`),Yt=ue(b`<polyline points="20 6 9 17 4 12"/>`),Ta=ue(b`<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`),On=ue(b`<path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.5.5 0 0 0-.5.8l3.2 3.9-2 2-2-.5a.5.5 0 0 0-.5.8L5 15l1.8 2 1.3-1.5 2 .5 2-2 3.9 3.2a.5.5 0 0 0 .8-.5Z"/>`),Pn=ue(b`<path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm18 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/><path d="M3 17V9l2-4h14l2 4v8"/><path d="M3 11h18"/>`),Wi=ue(b`<path d="M14.7 6.3a4 4 0 0 0 5 5L21 18a2 2 0 0 1-3 3l-6.7-1.3a4 4 0 0 0-5-5L3 8a2 2 0 0 1 3-3Z"/>`),Vi=ue(b`<path d="M12 14 8 10"/><circle cx="12" cy="14" r="8"/><path d="M12 6V4"/>`),zi=ue(b`<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.7" y2="16.7"/>`),Gi=ue(b`<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`),Yi=ue(b`<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.5 5.5 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.5A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.7 1.5Z"/>`),Bn=ue(b`<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>`),Ji=ue(b`<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>`),Xi=ue(b`<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>`);function Ra({value:e,onChange:t,onSave:n,onCancel:s,saveLabel:i,trips:a,vehicles:o,onCreateTrip:r,onCreateVehicle:l}){let[c,f]=L(!1),[u,d]=L(""),[g,h]=L(!1),[m,y]=L(""),v=$=>t({...e,...$});return b`
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
          ${Jt.filter($=>$.key!=="income").map($=>b`
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
        ${a.map($=>b`<button key=${$.id} class=${"tag"+(e.tripId===$.id?" on":"")} onClick=${()=>v({tripId:$.id})}><${On} size=${11} /> ${$.name}</button>`)}
        ${c?b`<span class="inline">
              <input class="inp mini" autofocus placeholder="여행 이름" value=${u}
                onInput=${$=>d($.target.value)}
                onKeyDown=${$=>{$.key==="Enter"&&u.trim()&&(v({tripId:r(u.trim(),e.date).id}),d(""),f(!1))}} />
              <button class="round" onClick=${()=>{u.trim()&&(v({tripId:r(u.trim(),e.date).id}),d(""),f(!1))}}><${Yt} size=${13} /></button>
            </span>`:b`<button class="tag dash" onClick=${()=>f(!0)}>+ 새 여행</button>`}
      </div>

      <div class="miniLabel">차량</div>
      <div class="chips">
        <button class=${"tag"+(e.carId?"":" on")} onClick=${()=>v({carId:null})}>해당 없음</button>
        ${o.map($=>b`<button key=${$.id} class=${"tag"+(e.carId===$.id?" on":"")} onClick=${()=>v({carId:$.id})}><${Pn} size=${11} /> ${$.name}</button>`)}
        ${g?b`<span class="inline">
              <input class="inp mini" autofocus placeholder="차량 이름" value=${m}
                onInput=${$=>y($.target.value)}
                onKeyDown=${$=>{$.key==="Enter"&&m.trim()&&(v({carId:l(m.trim()).id}),y(""),h(!1))}} />
              <button class="round" onClick=${()=>{m.trim()&&(v({carId:l(m.trim()).id}),y(""),h(!1))}}><${Yt} size=${13} /></button>
            </span>`:b`<button class="tag dash" onClick=${()=>h(!0)}>+ 새 차량</button>`}
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
        <button class="btn primary" onClick=${n} disabled=${!e.amount}><${Yt} size=${15} /> ${i||"저장"}</button>
      </div>
    </div>`}function qi({entry:e,trips:t,vehicles:n,onQuickCat:s,onEdit:i,onDelete:a,selecting:o,checked:r,onToggle:l}){let[c,f]=L(!1),u=ye(null),d=ye(!1),g=()=>{d.current=!1,u.current=setTimeout(()=>{u.current=null,i(e)},550)},h=()=>{u.current&&(clearTimeout(u.current),u.current=null,d.current||f(_=>!_))},m=()=>{d.current=!0,u.current&&(clearTimeout(u.current),u.current=null)},y=we[e.category],v=e.tripId&&t.find(_=>_.id===e.tripId),$=e.carId&&n.find(_=>_.id===e.carId);return o?b`
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
              ${Nn(e.type)}₩${q(e.amount)}
            </div>
          </div>
        </div>
      </div>`:b`
    <div class="rowWrap">
      <div class=${"entry"+(e.status==="pending"?" pending":"")}
        onPointerDown=${g} onPointerUp=${h} onPointerLeave=${m} onPointerCancel=${m}>
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
            ${Nn(e.type)}₩${q(e.amount)}
          </div>
          ${e.foreignAmount?b`<div class="fx">${e.currency} ${e.foreignAmount}</div>`:""}
        </div>
        <button class="del" onClick=${_=>{_.stopPropagation(),a(e.id)}} aria-label="삭제"><${Hi} size=${15} /></button>
      </div>
      ${c&&e.type==="expense"&&b`
        <div class="quickCat">
          ${Jt.filter(_=>_.key!=="income").map(_=>b`
            <button key=${_.key} class=${"chip sm"+(e.category===_.key?" on":"")}
              style=${e.category===_.key?`background:${_.color};border-color:${_.color}`:`border-color:${_.color}55;color:${_.color}`}
              onClick=${()=>{s(e,_.key),f(!1)}}>${_.label}</button>`)}
          <button class="chip sm dash" onClick=${()=>{f(!1),i(e)}}>자세히</button>
        </div>`}
    </div>`}function qt({list:e,...t}){let n=U(()=>{let s=new Map;for(let i of e)s.has(i.date)||s.set(i.date,[]),s.get(i.date).push(i);return Array.from(s.entries())},[e]);return b`${n.map(([s,i])=>b`
    <div class="group" key=${s}>
      <div class="groupHead">${ut(s)}</div>
      ${i.map(a=>b`<${qi} key=${a.id} entry=${a} ...${t} checked=${t.selectedIds?t.selectedIds.includes(a.id):!1} />`)}
    </div>`)}`}function Zi(){let[e,t]=L(Bi),[n,s]=L(""),[i,a]=L(null),[o,r]=L(null),[l,c]=L(null),f=ye(null),[u,d]=L(null),[g,h]=L("month"),[m,y]=L(""),[v,$]=L(!1),[_,A]=L(null),[w,D]=L(!1),[x,R]=L(null),[B,H]=L(null),[j,X]=L(null),[J,I]=L(""),[N,W]=L(Ae),[ie,$e]=L(null),[M,O]=L(()=>{let p=new Date;return`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}`}),[V,ne]=L({state:"idle",fails:0,msg:""}),xe=ye(e),re=ye(!1);Ke(()=>{xe.current=e},[e]),Ke(()=>{Ni(e).ok||R("저장 공간이 가득 찼어요. 설정에서 내보내기 후 정리해주세요.")},[e]);let Ce=mn(async p=>{let k=xe.current;if(!(!k.settings.sheetUrl||re.current)){re.current=!0,ne(C=>({...C,state:"syncing"}));try{let C=await Ps(k);t(C.db),ne({state:"ok",fails:0,msg:""}),p&&R(`동기화 완료 · 보냄 ${C.pushed}건 · 받음 ${C.pulled}건`)}catch(C){ne(S=>({state:"error",fails:S.fails+1,msg:C.message||"연결 실패"})),p&&R(`동기화 실패: ${C.message}`)}finally{re.current=!1,setTimeout(()=>R(null),2600)}}},[]);Ke(()=>{Ce(!1);let p=()=>{document.hidden||Ce(!1)};document.addEventListener("visibilitychange",p),window.addEventListener("online",p);let k=setInterval(()=>{document.hidden||Ce(!1)},300*1e3);return()=>{document.removeEventListener("visibilitychange",p),window.removeEventListener("online",p),clearInterval(k)}},[Ce]);let Fn=ye(null),De=mn(()=>{clearTimeout(Fn.current),Fn.current=setTimeout(()=>Ce(!1),2500)},[Ce]),ae=p=>{R(p),setTimeout(()=>R(null),2600)},ee=p=>t(k=>{let C={...k};return p(C),C}),Z=U(()=>e.entries.filter(p=>!p.deleted),[e.entries]);Ke(()=>{if(!e.fixedExpenses.length)return;let p=Gs(e.fixedExpenses,e.entries,{}),{settled:k}=Ys(e.entries,e.fixedExpenses);!p.length&&!k.length||t(C=>{let S=C.entries;if(k.length){let K=new Set(k.map(G=>G.scheduledId)),P=new Map(k.map(G=>[G.scheduledId,G.realId]));S=S.map(G=>K.has(G.id)?{...G,deleted:!0,mergedInto:P.get(G.id),updatedAt:Date.now(),dirty:!0}:G)}let T=p.map(K=>Gt(K));return{...C,entries:[...T,...S]}})},[e.fixedExpenses,e.entries]),Ke(()=>{let p={rules:e.categoryRules||[],settings:e.settings},k=new Map;for(let C of e.entries){if(C.source!=="shortcut"||C.localized)continue;let S=da(C,p);S&&k.set(C.id,S)}k.size&&(t(C=>({...C,entries:C.entries.map(S=>{let T=k.get(S.id);if(!T||S.localized)return S;let K=Dn({...S,...T},C.categoryRules||[]),P=Sn(K,C.trips||[]);return P&&(K={...K,tripId:P}),{...K,updatedAt:Date.now(),dirty:!0}})})),De())},[e.entries]);let pt=(p,k)=>{let C=xe.current,S=p.map(T=>{let K=Dn(T,C.categoryRules||[]),P=K.source==="statement",G=K.needsCheck||!P&&(K.confidence??1)<.6,Y=Sn(K,C.trips||[]);return Gt({...K,...Y?{tripId:Y}:{},...k?{importId:k.id}:{},status:G?"pending":"confirmed"})});return ee(T=>{if(T.entries=[...S,...T.entries],k&&S.length){let K={id:k.id,at:Date.now(),name:k.name||"가져오기",count:S.length,undone:!1};T.imports=[K,...T.imports||[]].slice(0,20)}}),De(),S},Ze=(p,k)=>(De(),ee(C=>{C.entries=C.entries.map(S=>S.id===p?{...S,...k,updatedAt:Date.now(),dirty:!0}:S)})),Ea=p=>(De(),ee(k=>{k.entries=k.entries.map(C=>C.id===p?{...C,deleted:!0,updatedAt:Date.now(),dirty:!0}:C)})),[fe,nt]=L(null),Zt=ye(null),Qt=(p,k,C,S)=>{let T=p.findIndex(K=>K.normKey===k);return T>=0?p.map((K,P)=>P===T?{...K,category:C,kind:null,hitCount:(K.hitCount||1)+S}:K):[...p,{id:ke(),normKey:k,category:C,hitCount:S,learnedAt:Date.now()}]},Hn=p=>({id:p.id,category:p.category,status:p.status,confidence:p.confidence,catBy:p.catBy,transferKind:p.transferKind}),ft=(p,k,C)=>({...p,category:k,confidence:1,status:p.needsCheck?p.status:"confirmed",transferKind:p.transferKind==="verify"&&p.type==="expense"?null:p.transferKind,updatedAt:Date.now(),dirty:!0,...C}),en=p=>{if(clearTimeout(Zt.current),!p.applied&&!p.similar.length){nt(null);return}nt(p),p.similar.length||(Zt.current=setTimeout(()=>nt(null),9e3))},tn=(p,k)=>{let C=xe.current,S=p.normKey||Xe(p.memo),{same:T,similar:K}=la(C.entries,p,k),P=new Set(T.map(Y=>Y.id)),G=S.length>=2?[{key:S,prev:(C.categoryRules||[]).find(Y=>Y.normKey===S)||null}]:[];ee(Y=>{Y.entries=Y.entries.map(de=>de.id===p.id?ft(de,k,{status:"confirmed",catBy:"user"}):P.has(de.id)?ft(de,k):de),S.length>=2&&(Y.categoryRules=Qt(Y.categoryRules||[],S,k,1))}),De(),en({category:k,applied:T.length,undo:[p,...T].map(Hn),rules:G,similar:K})},La=()=>{let p=fe;if(!p)return;let k=new Set(p.similar.map(K=>K.id)),C=[...new Set(p.similar.map(K=>K.normKey||Xe(K.memo)).filter(K=>K.length>=2))],S=xe.current,T=C.filter(K=>!p.rules.some(P=>P.key===K)).map(K=>({key:K,prev:(S.categoryRules||[]).find(P=>P.normKey===K)||null}));ee(K=>{K.entries=K.entries.map(G=>k.has(G.id)?ft(G,p.category):G);let P=K.categoryRules||[];for(let G of C)P=Qt(P,G,p.category,1);K.categoryRules=P}),De(),en({...p,applied:p.applied+p.similar.length,undo:[...p.undo,...p.similar.map(Hn)],rules:[...p.rules,...T],similar:[]})},Ba=()=>{let p=fe;if(!p)return;let k=new Map(p.undo.map(C=>[C.id,C]));ee(C=>{C.entries=C.entries.map(T=>k.has(T.id)?{...T,...k.get(T.id),updatedAt:Date.now(),dirty:!0}:T);let S=C.categoryRules||[];for(let T of p.rules)S=S.filter(K=>K.normKey!==T.key),T.prev&&(S=[...S,T.prev]);C.categoryRules=S}),De(),clearTimeout(Zt.current),nt(null),ae("되돌렸어요")},Na=p=>{let k=p.filter(T=>!T.error);if(!k.length)return 0;let{changes:C}=jt(xe.current.entries,k),S=new Set(k.map(T=>T.normKey));return ee(T=>{T.categoryRules=[...(T.categoryRules||[]).filter(K=>!S.has(K.normKey)),...k.map(K=>({id:ke(),normKey:K.normKey,name:K.name,category:K.category,kind:K.kind||null,hitCount:1,learnedAt:Date.now(),source:"paste"}))],T.entries=T.entries.map(K=>C.has(K.id)?{...K,...C.get(K.id),confidence:1,status:K.needsCheck?K.status:"confirmed",updatedAt:Date.now(),dirty:!0}:K)}),De(),C.size},Oa=p=>ee(k=>{k.fixedExpenses=[...k.fixedExpenses,...p.map(C=>({id:ke(),name:C.name,normKey:C.normKey,amount:C.amount,amountVariable:C.amountVariable,dayOfMonth:C.dayOfMonth,category:C.category,accountId:C.accountId,paymentMethod:C.paymentMethod,status:"active",source:"learned",learnedAt:Date.now()}))]}),Pa=(p,k)=>{let C=new Set(p.ids);ee(S=>{S.entries=S.entries.map(T=>C.has(T.id)?ft(T,k,{status:"confirmed"}):T),p.normKey&&p.normKey!=="__none"&&(S.categoryRules=Qt(S.categoryRules||[],p.normKey,k,p.count))}),De()},Un=U(()=>e.entries.filter(p=>!p.deleted&&!/^\d{4}-\d{2}-\d{2}$/.test(String(p.date||""))),[e.entries]),Fa=()=>{let p=0,k=0;ee(C=>{C.entries=C.entries.map(S=>{if(/^\d{4}-\d{2}-\d{2}$/.test(String(S.date||"")))return S;let T=String(S.date||""),K=T.match(/^(\d{4})-(\d{2})-(\d{2})/),P=K?`${K[1]}-${K[2]}-${K[3]}`:null;if(!P){let G=new Date(T);isNaN(G)||(P=dt(G))}return P?(p++,{...S,date:P,updatedAt:Date.now(),dirty:!0}):(k++,{...S,deleted:!0,updatedAt:Date.now(),dirty:!0})})}),ae(`날짜 ${p}건을 고쳤어요${k?` · ${k}건은 못 살려서 지웠어요`:""}`)},Ha=p=>{let k=String(p??"").trim();k&&ee(C=>{let S=C.settings.excludedCounterparties||[];S.includes(k)||(C.settings={...C.settings,excludedCounterparties:[...S,k]})})},jn=(p,k)=>{let C=/^\d{4}-\d{2}-\d{2}$/.test(String(k||""))?k:Ae(),S={id:ke(),name:p,startDate:C,endDate:C,createdAt:Date.now()};return ee(T=>{T.trips=[...T.trips,S]}),S},nn=(p,k="gasoline")=>{let C={id:ke(),name:p,fuel:k,createdAt:Date.now()};return ee(S=>{S.vehicles=[...S.vehicles,C],S.maintenance=[...S.maintenance,...Ka(k).map(T=>({id:ke(),carId:C.id,label:T.label,intervalKm:T.intervalKm,intervalMonths:T.intervalMonths,lastDate:null,lastMileage:null}))]}),C},[pe,He]=L({on:!1,ids:[]}),Ua=p=>He(k=>({...k,ids:k.ids.includes(p)?k.ids.filter(C=>C!==p):[...k.ids,p]})),st=(p,k)=>{let C=new Set(pe.ids);C.size&&(ee(S=>{S.entries=S.entries.map(T=>C.has(T.id)?{...T,...p(T),updatedAt:Date.now(),dirty:!0}:T)}),ae(`${C.size}건 ${k}`),He({on:!1,ids:[]}))},ja=p=>st(()=>({tripId:p==="__none"?null:p}),p==="__none"?"여행에서 뺐어요":`${(e.trips.find(k=>k.id===p)||{}).name||"여행"}에 넣었어요`),Wa=p=>st(()=>({carId:p==="__none"?null:p}),p==="__none"?"차량을 뺐어요":`${(e.vehicles.find(k=>k.id===p)||{}).name||"차량"}으로 지정했어요`),Va=p=>st(()=>({category:p,type:"expense",status:"confirmed",catBy:"user",confidence:1}),`${(we[p]||{}).label||""}(으)로 바꿨어요`),za=()=>st(()=>({type:"transfer",transferKind:"excluded",status:"confirmed",confidence:1}),"합계에서 뺐어요"),Ga=()=>st(()=>({deleted:!0}),"지웠어요"),Ya=p=>{let k=0;ee(C=>{C.entries=C.entries.map(S=>S.importId!==p.id||S.deleted?S:(k++,{...S,deleted:!0,updatedAt:Date.now(),dirty:!0})),C.imports=(C.imports||[]).map(S=>S.id===p.id?{...S,undone:!0}:S)}),De(),ae(`${p.name} · ${k}건을 되돌렸어요`)},Ja=(p,k)=>{let C=p.normKey||Xe(p.memo),S=0;ee(K=>{K.entries=K.entries.map(P=>{if(P.deleted||P.carId)return P;let G=P.normKey||Xe(P.memo);return P.id!==p.id&&!(C&&G&&C===G)?P:(S++,{...P,carId:k,carBy:"user",updatedAt:Date.now(),dirty:!0})})});let T=(e.vehicles.find(K=>K.id===k)||{}).name||"차량";ae(S>1?`${T}으로 ${S}건 지정했어요 (같은 곳 기록 포함)`:`${T}으로 지정했어요`)},Wn=p=>{if(!p.trim())return;let k=p.split(/\r?\n/).filter(S=>S.trim()).map(S=>S.split("	"));if(k.length>1&&k.some(S=>S.length>=6)&&Wt(k)){let S=Vt(k,{rules:e.categoryRules,settings:e.settings});if(S.entries.length){let T=new Set(Z.map(G=>G.sourceHash).filter(Boolean)),K=S.entries.filter(G=>!T.has(G.sourceHash)),P=Ln(K,Z);r({entries:K,gaps:[],...P,picked:P.added.map(()=>!0),fromTravelWallet:S.entries.length}),a(null);return}}let C=Ei(p,{rules:e.categoryRules,settings:e.settings});if(C.mode==="multi"){let S=Ln(C.entries,Z);r({...C,...S,picked:S.added.map(()=>!0)}),a(null)}else a(Gt(C.entries[0])),r(null)},Xa=async p=>{let k=Array.from(p.target&&p.target.files||[]).filter(C=>!C.type||C.type.startsWith("image/"));if(p.target&&(p.target.value=""),!!k.length){c({text:"글자 인식 준비 중… (처음 한 번은 도구를 받느라 조금 걸려요)"});try{let C=await Us(k,K=>{K.status==="recognizing text"&&c({text:`캡처 읽는 중 ${K.page}/${K.pages} · ${Math.round((K.progress||0)*100)}%`})}),S=Ws(C,{rules:e.categoryRules,settings:e.settings});if(c(null),!S.entries.length){ae(S.skippedNoKrw?"원화 금액이 보이는 부분까지 함께 캡처해주세요":"캡처에서 내역을 찾지 못했어요. 가맹점과 금액이 보이게 잘라주세요");return}let T=Ln(S.entries,Z);r({...S,...T,picked:T.added.map(()=>!0),fromCapture:k.length}),a(null)}catch(C){c(null),ae(String(C&&C.message||C))}}},qa=p=>{let k=p.clipboardData?p.clipboardData.getData("text"):"";k&&k.trim()&&(s(k),setTimeout(()=>Wn(k),0))},mt=U(()=>!i||!i.amount?null:Z.find(p=>p.date===i.date&&p.amount===i.amount&&p.type===i.type)||null,[i,Z]),Za=()=>{!i||!i.amount||(pt([i]),a(null),s(""),ae("기록했어요"))},Qa=()=>{let p=o.added.filter((C,S)=>o.picked[S]);p.length&&pt(p);let k=o.merged.length;r(null),s(""),ae(`${p.length}건 기록${k?` · 중복 ${k}건 제외`:""}`)},sn=U(()=>Fi(M,e.settings.monthStartDay),[M,e.settings.monthStartDay]),Ie=U(()=>Z.filter(p=>p.date>=sn.start&&p.date<=sn.end).sort((p,k)=>p.date<k.date?1:p.date>k.date?-1:k.createdAt-p.createdAt),[Z,sn]),ve=U(()=>{let p=0,k=0,C=0,S=0,T=0,K=0,P=0,G=0;for(let Y of Ie){if(Y.type==="income"){P+=Y.amount;continue}if(Y.type!=="expense")continue;let de=Y.isRefund?-Y.amount:Y.amount;if(Y.transferKind==="welfare"){G+=de;continue}Y.transferKind&&Y.transferKind!=="external"||(Y.category==="family"?Y.isExtra?S+=de:C+=de:Y.category==="travel"?T+=de:Y.fixedId?k+=de:Y.paymentMethod==="cash"?K+=de:p+=de)}return{variable:p,fixed:k,family:C,familyExtra:S,travel:T,cash:K,welfare:G,income:P,expense:p+k+C+S+T+K}},[Ie]),Ue=U(()=>Z.filter(p=>p.status==="pending"),[Z]);Ke(()=>{g==="trip"&&!B&&e.trips.length&&H(e.trips[0].id),g==="car"&&!j&&e.vehicles.length&&X(e.vehicles[0].id)},[g,B,j,e.trips,e.vehicles]);let ce=U(()=>{let p=e.settings.welfarePeriodStart||`${new Date().getFullYear()}-01`,k=Z.filter(K=>K.transferKind==="welfare"&&K.date>=`${p}-01`).sort((K,P)=>K.date<P.date?1:-1),C=k.reduce((K,P)=>K+(P.isRefund?-P.amount:P.amount),0),S=k.find(K=>K.welfareBalance!=null),T=e.settings.welfareLimit||0;return{used:C,count:k.length,start:p,limit:T,left:S?S.welfareBalance:T?T-C:null,fromSms:!!S,at:S?S.date:null}},[Z,e.settings.welfareLimit,e.settings.welfarePeriodStart]),je=U(()=>{let p=m.trim().toLowerCase();return p?Z.filter(k=>{let C=we[k.category]?.label||"",S=k.tripId&&e.trips.find(K=>K.id===k.tripId)?.name||"",T=k.carId&&e.vehicles.find(K=>K.id===k.carId)?.name||"";return String(k.memo??"").toLowerCase().includes(p)||C.toLowerCase().includes(p)||String(k.amount).includes(p)||S.toLowerCase().includes(p)||T.toLowerCase().includes(p)||String(k.rawText??"").toLowerCase().includes(p)||String(k.counterpartyRaw??"").toLowerCase().includes(p)||String(k.date??"").includes(p)}).sort((k,C)=>k.date<C.date?1:k.date>C.date?-1:C.createdAt-k.createdAt):[]},[Z,m,e.trips,e.vehicles]),Vn=p=>{let[k,C]=M.split("-").map(Number),S=new Date(k,C-1+p,1);O(`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}`)},zn=p=>{let k=e.mileageLogs.filter(C=>C.carId===p).sort((C,S)=>C.date<S.date?1:-1);return k.length?k[0].mileage:null},eo=e.vehicles.find(p=>p.id===j),to=j?zn(j):null,at={trips:e.trips,vehicles:e.vehicles,onQuickCat:tn,onEdit:p=>d({...p}),onDelete:Ea,selecting:pe.on,selectedIds:pe.ids,onToggle:Ua},[no,so]=M.split("-"),ar=U(()=>Z.filter(p=>pe.ids.includes(p.id)),[Z,pe.ids]),ao=pe.on&&b`
    <div class="bulkBar">
      <div class="bulkTop">
        <b>${pe.ids.length}건</b> 골랐어요
        <button class="btn ghost sm" onClick=${()=>He({on:!1,ids:[]})}>그만두기</button>
      </div>
      ${pe.ids.length>0&&b`
        <div class="bulkActs">
          ${e.trips.length>0&&b`
            <select class="bulkSel" value="" onChange=${p=>{p.target.value&&(ja(p.target.value),p.target.value="")}}>
              <option value="">여행에 넣기…</option>
              ${e.trips.map(p=>b`<option key=${p.id} value=${p.id}>${p.name}</option>`)}
              <option value="__none">여행에서 빼기</option>
            </select>`}
          ${e.vehicles.length>0&&b`
            <select class="bulkSel" value="" onChange=${p=>{p.target.value&&(Wa(p.target.value),p.target.value="")}}>
              <option value="">차량 지정…</option>
              ${e.vehicles.map(p=>b`<option key=${p.id} value=${p.id}>${p.name}</option>`)}
              <option value="__none">차량 해제</option>
            </select>`}
          <select class="bulkSel" value="" onChange=${p=>{p.target.value&&(Va(p.target.value),p.target.value="")}}>
            <option value="">분류 바꾸기…</option>
            ${Jt.filter(p=>p.key!=="income").map(p=>b`<option key=${p.key} value=${p.key}>${p.label}</option>`)}
          </select>
          <button class="btn ghost sm" onClick=${za}>합계에서 빼기</button>
          <button class="btn danger sm" onClick=${Ga}>삭제</button>
        </div>`}
    </div>`;return b`
    <div class="app">
      <header class="head">
        <button class="gear" onClick=${()=>$(p=>!p)} aria-label="설정"><${Ji} size=${17} /></button>
        ${e.settings.sheetUrl&&b`
          <button class=${"syncDot "+V.state+(V.fails>=3?" bad":"")} onClick=${()=>Ce(!0)}
            title=${V.state==="error"?V.msg:"구글시트와 맞추기"} aria-label="동기화">
            ${V.state==="syncing"?"⋯":V.fails>=3?"!":"●"}
          </button>`}
        <h1 class="title">가계부</h1>
        <div class="rule"></div>
        <div class="sub">붙여넣으면 알아서 적히는 장부</div>
      </header>

      ${v&&b`<${nr} db=${e} setDb=${t} onClose=${()=>$(!1)} flash=${ae} onSync=${()=>Ce(!0)} onUndoImport=${Ya} />`}

      ${Un.length>0&&b`
        <div class="inbox">
          <div class="inboxHead"><${Bn} size=${14} /> 날짜가 깨진 기록 ${Un.length}건</div>
          <div class="inboxBulk">
            구글시트가 날짜 칸을 바꿔버려 생긴 문제입니다. 눌러서 되돌릴 수 있어요.
            <button class="btn primary sm" onClick=${Fa}>날짜 고치기</button>
          </div>
        </div>`}

      ${Ue.length>0&&b`
        <div class="inbox">
          <div class="inboxHead">
            <${Yi} size=${14} /> 확인할 항목 ${Ue.length}건
            ${Ue.length>8?b`<span class="inboxHint">아래 4건씩 처리돼요</span>`:""}
          </div>
          ${Ue.length>20&&b`
            <div class="inboxBulk">
              한 번에 처리하는 게 빠릅니다 — 아래 <b>분류 정리</b>에서 가맹점별로 묶어서 정할 수 있어요.
              <button class="btn ghost sm" onClick=${()=>{A("review")}}>분류 정리 열기</button>
            </div>`}
          <div class="inboxBody">
            ${Ue.slice(0,4).map(p=>p.direction==="in"||p.transferKind==="excluded"?b`
              <div class="inboxItem" key=${p.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${p.memo||"메모 없음"}</span>
                  <span class="inboxAmt">+₩${q(p.amount)}</span>
                </div>
                <div class="inboxSub">${ut(p.date)} · 이 입금은 수입인가요?</div>
                <div class="chips">
                  <button class="chip sm" style="border-color:#3D6B4F55;color:#3D6B4F"
                    onClick=${()=>Ze(p.id,{type:"income",category:"income",transferKind:null,status:"confirmed",confidence:1})}>수입이에요</button>
                  <button class="chip sm" style="border-color:#B23A2455;color:#B23A24"
                    onClick=${()=>Ze(p.id,{type:"expense",isRefund:!0,transferKind:null,status:"confirmed",confidence:1})}>환불이에요</button>
                  <button class="chip sm dash" onClick=${()=>Ze(p.id,{status:"confirmed"})}>수입 아님</button>
                  <button class="chip sm dash" onClick=${()=>{Ha(p.memo),Ze(p.id,{status:"confirmed"})}}>
                    ${p.memo?`${p.memo} 항상 제외`:"항상 제외"}
                  </button>
                </div>
              </div>`:b`
              <div class="inboxItem" key=${p.id}>
                <div class="inboxTop">
                  <span class="inboxMemo">${p.memo||"메모 없음"}</span>
                  <span class="inboxAmt">₩${q(p.amount)}</span>
                </div>
                <div class="inboxSub">${ut(p.date)} · 분류가 애매해요</div>
                <div class="chips">
                  ${Jt.filter(k=>k.key!=="income").slice(0,6).map(k=>b`
                    <button key=${k.key} class="chip sm" style=${`border-color:${k.color}55;color:${k.color}`}
                      onClick=${()=>tn(p,k.key)}>${k.label}</button>`)}
                  <button class="chip sm dash" onClick=${()=>Ze(p.id,{status:"confirmed"})}>이대로 두기</button>
                </div>
              </div>`)}
            ${Ue.length>4&&b`<div class="inboxMore">외 ${Ue.length-4}건</div>`}
          </div>
        </div>`}

      <div class="pasteBox">
        <div class="pasteHint"><${Xi} size=${13} /> 카드 문자, 자동이체 문자, 통장 거래내역을 붙여넣거나 앱 화면 캡처를 올리세요</div>
        <textarea class="pasteArea" value=${n} onInput=${p=>s(p.target.value)} onPaste=${qa}
          placeholder=${`예) 신한카드(1234) 승인 5,000원 09/09 스타벅스강남점

또는 통장 거래내역 여러 줄을 통째로`}></textarea>
        <div class="pasteActs">
          <button class="btn ghost sm" onClick=${()=>a(Gt({}))}><${Gi} size=${14} /> 직접 입력</button>
          <button class="btn ghost sm capBtn" onClick=${()=>f.current&&f.current.click()} disabled=${!!l}>캡처 올리기</button>
          <input ref=${f} type="file" accept="image/*" multiple style="display:none" onChange=${Xa} />
          <button class="btn primary sm" onClick=${()=>Wn(n)} disabled=${!n.trim()}>내역 확인</button>
        </div>
        ${l&&b`<div class="ocrState">${l.text}</div>`}
      </div>

      ${i&&b`
        <div class="card">
          <div class="cardLabel">아래 내용으로 기록할게요</div>
          ${mt&&b`<div class="warn"><${Bn} size=${13} /> ${ut(mt.date)}에 같은 금액(₩${q(mt.amount)}) 내역이 이미 있어요 — ${mt.memo||"메모 없음"}</div>`}
          <${Ra} value=${i} onChange=${a} onSave=${Za} onCancel=${()=>a(null)}
            saveLabel="기록하기" trips=${e.trips} vehicles=${e.vehicles} onCreateTrip=${jn} onCreateVehicle=${nn} />
        </div>`}

      ${o&&b`
        <div class="card">
          <div class="cardLabel">${o.fromCapture?`캡처 ${o.fromCapture}장에서 읽은 내역`:o.fromTravelWallet?"트래블월렛 이용내역":"붙여넣은 내역"} ${o.added.length+o.merged.length+o.review.length}건</div>
          ${o.fromTravelWallet&&b`<div class="hint sm">결제·정산·현지 인출은 여행 지출로, 취소는 환불로 넣습니다.
            충전은 통장에서 이미 빠져나간 돈이라 <b>합계에서 뺍니다</b>(이중 계산 방지).</div>`}
          ${o.fromCapture&&b`<div class="hint sm">글자 인식은 틀릴 수 있어요. 가맹점·금액을 한 번 훑어보고 이상한 줄은 체크를 빼주세요.
            ${o.added.some(p=>p.dateGuessed)?" 날짜를 못 읽은 줄은 빨간 날짜 칸을 눌러 여기서 바로 고칠 수 있어요.":""}
            ${o.skippedNoKrw?` 원화 금액이 안 보인 ${o.skippedNoKrw}건은 뺐어요.`:""}</div>`}
          ${o.gaps.length>0&&b`
            <div class="warn"><${Bn} size=${13} /> 잔액이 이어지지 않아요. ${o.gaps[0].beforeDate} 부근에 안 보이는 거래 ₩${q(o.gaps[0].missing)}이 있어요. 조금 더 위로 스크롤해서 다시 붙여넣어 주세요.</div>`}
          <div class="multiList">
            ${o.added.map((p,k)=>b`
              <label class="multiRow" key=${k}>
                <input type="checkbox" checked=${o.picked[k]}
                  onChange=${()=>r(C=>({...C,picked:C.picked.map((S,T)=>T===k?!S:S)}))} />
                ${p.dateGuessed||p.dateFixed?b`<input type="date" class=${"multiDateFix"+(p.dateGuessed?"":" done")} value=${p.date} onClick=${C=>C.stopPropagation()}
                      onInput=${C=>{let S=C.target.value;S&&r(T=>({...T,added:T.added.map((K,P)=>P===k?{...K,date:S,dateGuessed:!1,dateFixed:!0,needsCheck:!1}:K)}))}} />`:b`<span class="multiDate">${p.date.slice(5)}</span>`}
                <span class="multiMemo">${p.memo}${p.currency?b` <span class="multiFx">${p.currency} ${p.foreignAmount}</span>`:""}</span>
                ${o.fromCapture&&b`<span class="multiCat">${p.isRefund?"취소":p.type==="income"?"수입":p.type!=="expense"?"이체":(we[p.category]||{}).label||"기타"}</span>`}
                <span class="multiAmt">${p.isRefund?"+":Nn(p.type)}₩${q(p.amount)}</span>
              </label>`)}
            ${o.merged.map((p,k)=>b`
              <div class="multiRow skip" key=${"m"+k}>
                <span class="multiDate">${p.incoming.date.slice(5)}</span>
                <span class="multiMemo">${p.incoming.memo}</span>
                <span class="multiAmt">중복</span>
              </div>`)}
            ${o.review.map((p,k)=>b`
              <div class="multiRow review" key=${"r"+k}>
                <span class="multiDate">${p.incoming.date.slice(5)}</span>
                <span class="multiMemo">${p.incoming.memo} · ${p.reasons.join(", ")}</span>
                <span class="multiAmt">확인</span>
              </div>`)}
          </div>
          <div class="acts">
            <button class="btn ghost" onClick=${()=>r(null)}>취소</button>
            <button class="btn primary" onClick=${Qa}>${o.picked.filter(Boolean).length}건 기록</button>
          </div>
        </div>`}

      ${u&&b`
        <div class="card">
          <div class="cardLabel">내역 수정</div>
          <${Ra} value=${u} onChange=${d}
            onSave=${()=>{let p=e.entries.find(Y=>Y.id===u.id),k=p&&u.type==="expense"&&p.type==="expense"&&p.category!==u.category,C=String(u.memo||"").trim(),S=!!u._learnMerchant,{category:T,_learnMerchant:K,...P}=u,G={...P,memo:C,normKey:Xe(C),counterpartyRaw:C};if(Ze(u.id,{...k?G:{...G,category:T},status:"confirmed"}),k&&tn(p,T),S&&Xe(C).length>=2){let Y=Xe(C);ee(de=>{let ht=de.categoryRules||[],gt=ht.findIndex($t=>$t.normKey===Y),Gn={id:gt>=0?ht[gt].id:ke(),normKey:Y,name:C,category:T||"etc",amountHint:u.amount||null};de.categoryRules=gt>=0?ht.map(($t,oo)=>oo===gt?{...$t,...Gn}:$t):[...ht,Gn]}),ae(`${C}을(를) 기억했어요 · 같은 금액 문자에 씁니다`)}d(null)}}
            onCancel=${()=>d(null)} saveLabel="수정 완료"
            trips=${e.trips} vehicles=${e.vehicles} onCreateTrip=${jn} onCreateVehicle=${nn} />
        </div>`}

      <div class="search">
        <${zi} size=${14} class="searchIco" />
        <input class="searchInp" value=${m} onInput=${p=>y(p.target.value)} placeholder="검색 (메모, 문자 원문, 금액, 날짜, 여행·차량)" />
        ${m&&b`<button class="clear" onClick=${()=>y("")}><${Ta} size=${14} /></button>`}
      </div>

      <div class="toolRow">
        <button class="toolBtn" onClick=${()=>A(_==="review"?null:"review")}>분류 정리</button>
        <button class="toolBtn" onClick=${()=>A(_==="tidy"?null:"tidy")}>자동 정리</button>
        <button class="toolBtn" onClick=${()=>A(_==="import"?null:"import")}>명세서 파일</button>
      </div>

      ${_==="review"&&b`<${ga} entries=${Z} onApply=${Pa} onApplyRules=${Na}
        userName=${e.settings.userName} ruleCount=${(e.categoryRules||[]).length} onClose=${()=>A(null)} />`}
      ${_==="tidy"&&b`<${va} db=${e} entries=${Z} patch=${ee} flash=${ae} onClose=${()=>A(null)} />`}
      ${_==="import"&&b`<${ya} db=${e} entries=${e.entries} flash=${ae}
        onImport=${(p,k)=>{let C=pt(p,{id:ke(),name:k});ae(`${C.length}건 넣었어요 · 잘못됐으면 설정에서 되돌릴 수 있어요`),A(null)}}
        onClose=${()=>A(null)} />`}

      <div class="tabs">
        <button class=${"tab"+(g==="month"?" on":"")} onClick=${()=>h("month")}>월별</button>
        <button class=${"tab"+(g==="asset"?" on":"")} onClick=${()=>h("asset")}>자산</button>
        <button class=${"tab"+(g==="trip"?" on":"")} onClick=${()=>{h("trip"),!B&&e.trips.length&&H(e.trips[0].id)}}><${On} size=${12} /> 여행</button>
        <button class=${"tab"+(g==="car"?" on":"")} onClick=${()=>{h("car"),!j&&e.vehicles.length&&X(e.vehicles[0].id)}}><${Pn} size=${12} /> 차량</button>
      </div>

      ${m.trim()?b`<div class="results">
            <div class="resultHead">"${m.trim()}" 검색 결과 ${je.length}건</div>
            ${je.length===0?b`<div class="empty">일치하는 내역이 없어요.</div>`:b`
              <div class="listHead">
                <span class="listCount">${je.length}건</span>
                ${pe.on?b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:pe.ids.length===je.length?[]:je.map(p=>p.id)})}>
                      ${pe.ids.length===je.length?"전체 해제":"전체 고르기"}</button>`:b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:[]})}>고르기</button>`}
              </div>
              <${qt} list=${je} ...${at} />`}
          </div>`:g==="month"?b`
          <div class="monthBar">
            <button class="nav" onClick=${()=>Vn(-1)} aria-label="이전 달"><${Ui} size=${18} /></button>
            <span class="monthLabel">${no}년 ${parseInt(so,10)}월</span>
            <button class="nav" onClick=${()=>Vn(1)} aria-label="다음 달"><${ji} size=${18} /></button>
          </div>

          <div class="summaryToggle">
            <button class=${"sumTab"+(w?"":" on")} onClick=${()=>D(!1)}>숫자</button>
            <button class=${"sumTab"+(w==="chart"?" on":"")} onClick=${()=>D("chart")}>그래프</button>
            <button class=${"sumTab"+(w==="report"?" on":"")} onClick=${()=>D("report")}>결산</button>
          </div>

          ${w==="report"?b`<${Ia} all=${Z} monthStartDay=${e.settings.monthStartDay} />`:w==="chart"?b`<${Ca} entries=${Ie} all=${Z} />`:b`
          <div class="axes">
            ${[["변동비",ve.variable],["고정비",ve.fixed],["가족 송금",ve.family],["별도 송금",ve.familyExtra],["여행",ve.travel],["현금",ve.cash]].filter(([,p],k)=>p!==0||k===0).map(([p,k])=>b`
                <div class="axis" key=${p}>
                  <span class="axisLabel">${p}</span>
                  <span class="axisVal">₩${q(k)}</span>
                </div>`)}
            <div class="axis total">
              <span class="axisLabel">지출 합계</span>
              <span class="axisVal">₩${q(ve.expense)}</span>
            </div>
            ${(ve.welfare>0||ce.used>0)&&b`
              <div class="axis welfare">
                <span class="axisLabel">복지카드 <span class="axisNote">합계 제외</span></span>
                <span class="axisVal">₩${q(ve.welfare)}</span>
              </div>`}
            ${ce.left!=null&&b`
              <div class="welfareBar">
                <div class="welfareTop">
                  <span>복지카드 남은 금액</span>
                  <b class=${ce.left<0?"over":""}>₩${q(ce.left)}</b>
                </div>
                ${ce.limit>0&&b`
                  <div class="welfareGauge">
                    <div class="welfareFill" style=${`width:${Math.min(100,Math.max(0,ce.used/ce.limit*100))}%`}></div>
                  </div>`}
                <div class="welfareSub">
                  ${ce.start.replace("-","년 ")}월부터 ${ce.count}건 · ₩${q(ce.used)} 사용
                  ${ce.fromSms?b` · ${ce.at} 문자 기준`:(ce.limit,"")}
                </div>
              </div>`}
            ${ce.left==null&&ce.used>0&&b`
              <div class="welfareBar">
                <div class="welfareSub">복지카드 한도를 설정하면 남은 금액이 여기 보여요 · 지금까지 ₩${q(ce.used)} 사용</div>
              </div>`}
            ${ve.income>0&&b`
              <div class="axis income">
                <span class="axisLabel">수입</span>
                <span class="axisVal">₩${q(ve.income)}</span>
              </div>`}
          </div>`}

          <${ha} db=${e} patch=${ee} entries=${Z} flash=${ae} onAdopt=${Oa} />

          ${Ie.length===0?b`<div class="empty">이 기간 기록이 아직 없어요.<br />위에 문자나 거래내역을 붙여넣어 보세요.</div>`:b`
              <div class="listHead">
                <span class="listCount">${Ie.length}건</span>
                ${pe.on?b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:pe.ids.length===Ie.length?[]:Ie.map(p=>p.id)})}>
                      ${pe.ids.length===Ie.length?"전체 해제":"전체 고르기"}</button>`:b`<button class="linkBtn" onClick=${()=>He({on:!0,ids:[]})}>고르기</button>`}
              </div>
              <${qt} list=${Ie} ...${at} />`}`:g==="asset"?b`<${$a} db=${e} entries=${Z} patch=${ee} rowProps=${at} />`:g==="trip"?b`
          <div class="toolRow">
            <button class="toolBtn" onClick=${()=>A(_==="tripFind"?null:"tripFind")}>여행 자동 찾기</button>
            ${B&&b`<button class="toolBtn" onClick=${()=>A(_==="tripAdj"?null:"tripAdj")}>항목 조정</button>`}
          </div>
          ${_==="tripFind"&&b`<${_a} db=${e} entries=${Z} patch=${ee} flash=${ae} onClose=${()=>A(null)} />`}
          ${_==="tripAdj"&&B&&b`<${ka} key=${B} db=${e} entries=${Z}
            trip=${e.trips.find(p=>p.id===B)} patch=${ee} flash=${ae} onClose=${()=>A(null)} />`}
          <${er} db=${e} live=${Z} tripId=${B} setTripId=${H} rowProps=${at} patch=${ee} flash=${ae} />`:b`
          ${j&&b`
            <div class="toolRow">
              <button class="toolBtn" onClick=${()=>A(_==="quote"?null:"quote")}>정비 견적서 넣기</button>
            </div>`}
          ${_==="quote"&&j&&b`<${wa} db=${e} carId=${j} patch=${ee} flash=${ae}
            onAddEntry=${p=>pt([p])} onClose=${()=>A(null)} />`}
          <${tr} db=${e} live=${Z} carId=${j} setCarId=${X} car=${eo} carKm=${to} assignCar=${Ja}
            mileage=${J} setMileage=${I} mileageDate=${N} setMileageDate=${W}
            maintEdit=${ie} setMaintEdit=${$e} patch=${ee} addVehicle=${nn}
            latestMileage=${zn} rowProps=${at} />`}

      ${fe&&b`
        <div class="bulkBar" role="status">
          ${fe.applied>0&&b`
            <div class="bulkLine">
              <span>같은 곳 <b>${fe.applied}건</b>도 ${we[fe.category]?.label}${Qi(we[fe.category]?.label)} 바꿨어요</span>
              <button class="bulkBtn" onClick=${Ba}>되돌리기</button>
            </div>`}
          ${fe.similar.length>0&&b`
            <div class="bulkLine">
              <span>비슷한 곳 <b>${fe.similar.length}건</b>도 바꿀까요?
                <span class="bulkNames">${[...new Set(fe.similar.map(p=>p.memo))].slice(0,3).join(" · ")}</span></span>
              <span class="bulkActs">
                <button class="bulkBtn on" onClick=${La}>바꾸기</button>
                <button class="bulkBtn" onClick=${()=>en({...fe,similar:[]})}>그대로</button>
              </span>
            </div>`}
          ${fe.applied>0&&!fe.similar.length&&b`<button class="bulkX" onClick=${()=>nt(null)} aria-label="닫기">×</button>`}
        </div>`}
      ${ao}
      ${x&&b`<div class="toast">${x}</div>`}
    </div>`}function Qi(e){let t=String(e||""),n=t.charCodeAt(t.length-1)-44032;if(n<0||n>11171)return"로";let s=n%28;return s===0||s===8?"로":"으로"}function er({db:e,live:t,tripId:n,setTripId:s,rowProps:i,patch:a,flash:o}){let[r,l]=L(!1),[c,f]=L({name:"",startDate:Ae(),endDate:Ae()}),[u,d]=L(null),[g,h]=L(!1),m=()=>{let D=e.trips.find(R=>R.id===n);if(!D)return;let x=t.filter(R=>R.tripId===D.id).length;a(R=>{R.trips=R.trips.filter(B=>B.id!==D.id),R.entries=R.entries.map(B=>B.tripId===D.id?{...B,tripId:null,updatedAt:Date.now(),dirty:!0}:B)}),h(!1),d(null),s(null),o(x>0?`${D.name} 여행을 지웠어요 · ${x}건은 기록으로 남았어요`:`${D.name} 여행을 지웠어요`)},y=e.trips.map(D=>{let x=xn(t,D);return{...D,expense:x.total,welfare:x.welfare}}),v=y.find(D=>D.id===n),$=t.filter(D=>D.tripId===n).sort((D,x)=>D.date<x.date?1:D.date>x.date?-1:x.createdAt-D.createdAt),_=v&&(!v.startDate||!v.endDate),A=u||(_?{id:v.id,startDate:"",endDate:"",name:v.name}:null),w=()=>{!A.startDate||!A.endDate||A.startDate>A.endDate||(a(D=>{D.trips=D.trips.map(x=>x.id===A.id?{...x,name:(A.name||x.name).trim(),startDate:A.startDate,endDate:A.endDate}:x)}),d(null),o("여행 기간을 고쳤어요. '항목 조정'에서 지출을 넣으세요"))};return b`
    <div class="cards">
      ${y.length===0&&b`<div class="empty">아직 만든 여행이 없어요.<br />아래 "+ 여행 추가"로 기간을 넣어 만들면 그 기간 지출을 찾아 묶어줍니다.</div>`}
      ${y.map(D=>b`
        <button key=${D.id} class=${"sumCard"+(n===D.id?" on":"")} onClick=${()=>{s(D.id),d(null)}}>
          <div class="sumName"><${On} size=${12} /> ${D.name}</div>
          <div class="sumAmt">₩${q(D.expense)}</div>
        </button>`)}
      ${!r&&b`<button class="tag dash" onClick=${()=>l(!0)}>+ 여행 추가</button>`}
    </div>

    ${r&&b`
      <div class="card">
        <div class="cardLabel">여행 추가</div>
        <div class="hint sm">기간을 넣으면 그 기간의 결제와 미리 결제한 항공·숙박을 찾아 묶을 수 있어요. 아직 안 떠난 여행도 됩니다.</div>
        <input class="inp" placeholder="여행 이름 (예: 오키나와 26.03)" value=${c.name}
          onInput=${D=>f(x=>({...x,name:D.target.value}))} />
        <div class="row wrap">
          <input type="date" class="inp date" value=${c.startDate} onInput=${D=>f(x=>({...x,startDate:D.target.value}))} />
          <span class="hint sm">~</span>
          <input type="date" class="inp date" value=${c.endDate} onInput=${D=>f(x=>({...x,endDate:D.target.value}))} />
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>l(!1)}>취소</button>
          <button class="btn primary sm" disabled=${!c.name.trim()||c.startDate>c.endDate}
            onClick=${()=>{let D=ke();a(x=>{x.trips=[...x.trips,{id:D,name:c.name.trim(),startDate:c.startDate,endDate:c.endDate,createdAt:Date.now()}]}),s(D),l(!1),f({name:"",startDate:Ae(),endDate:Ae()}),o("여행을 만들었어요. '항목 조정'으로 지출을 넣으세요")}}>만들기</button>
        </div>
      </div>`}
    ${v&&b`
      <div class="monthBar">
        <span class="monthLabel">${v.name}</span>
        <span class="totals"><span class="exp">₩${q(v.expense)}</span></span>
      </div>
      ${A?b`
          <div class="card tripDates">
            <div class="cardLabel">${_&&!u?"이 여행은 기간이 없어요 — 기간을 넣어야 지출을 찾아 묶을 수 있어요":"여행 기간 고치기"}</div>
            <input class="inp" placeholder="여행 이름" value=${A.name} onInput=${D=>d({...A,name:D.target.value})} />
            <div class="row wrap">
              <input type="date" class="inp date" value=${A.startDate} onInput=${D=>d({...A,startDate:D.target.value})} />
              <span class="hint sm">~</span>
              <input type="date" class="inp date" value=${A.endDate} onInput=${D=>d({...A,endDate:D.target.value})} />
            </div>
            <div class="acts">
              ${u&&!_&&b`<button class="btn ghost sm" onClick=${()=>d(null)}>취소</button>`}
              <button class="btn primary sm" disabled=${!A.startDate||!A.endDate||A.startDate>A.endDate} onClick=${w}>기간 저장</button>
            </div>
          </div>`:""}
      ${(()=>{let D=xn(t,v);return b`
          <div class="tripSum">
            <div class="tripSumTop">
              ${D.from?`${D.from.replace(/-/g,".").slice(2)} ~ ${D.to.slice(5).replace("-",".")}${D.days?` · ${D.days}일`:""} · `:""}${D.count}건
              ${!_&&!u&&b`<button class="pickToggle" onClick=${()=>d({id:v.id,name:v.name,startDate:v.startDate,endDate:v.endDate})}>기간 고치기</button>`}
              ${!u&&!g&&b`<button class="pickToggle warn" onClick=${()=>h(!0)}>여행 삭제</button>`}
            </div>
            ${g&&b`
              <div class="delAsk">
                <div class="hint sm">${D.count>0?`"${v.name}" 여행을 지울까요? 묶인 ${D.count}건은 여행에서만 빠지고 기록은 그대로 남습니다.`:`"${v.name}" 여행을 지울까요?`}</div>
                <div class="acts">
                  <button class="btn ghost sm" onClick=${()=>h(!1)}>그만두기</button>
                  <button class="btn danger sm" onClick=${m}>여행 삭제</button>
                </div>
              </div>`}
            ${D.days&&D.total>0&&b`<div class="tripSumTop">하루 평균 ₩${q(Math.round(D.total/D.days))}</div>`}
            <div class="tripCats">
              ${D.cats.map(([x,R])=>b`
                <span class="tripCat" key=${x}>
                  <span class="dot" style=${`background:${we[x]?.color||"#999"}`}></span>
                  ${we[x]?.label||x} ₩${q(R)}
                </span>`)}
            </div>
            ${(D.reimbursed>0||D.welfare!==0)&&b`
              <div class="tripFx">
                ${D.reimbursed>0?b`<span>같이 간 사람에게 받은 정산금 ₩${q(D.reimbursed)} 차감</span>`:""}
                ${D.reimbursed>0&&D.welfare!==0?" · ":""}
                ${D.welfare!==0?b`<span>복지카드 ₩${q(D.welfare)} <b>별도</b> (위 합계에 안 들어감)</span>`:""}
              </div>`}
            ${Object.keys(D.fx).length>0&&b`
              <div class="tripFx">${Object.entries(D.fx).map(([x,R])=>`${x} ${R.toLocaleString()}`).join(" · ")}</div>`}
          </div>`})()}
      ${$.length===0?b`<div class="empty">이 여행에 묶인 내역이 아직 없어요.<br />위의 <b>항목 조정</b>에서 항공권·숙박·현지 결제를 넣으세요.</div>`:b`<${qt} list=${$} ...${i} />`}`}`}var Ma=[{key:"y1",label:"최근 1년",days:365},{key:"y2",label:"최근 2년",days:730},{key:"all",label:"전체",days:null}];function tr({db:e,live:t,carId:n,setCarId:s,car:i,carKm:a,mileage:o,setMileage:r,mileageDate:l,setMileageDate:c,maintEdit:f,setMaintEdit:u,patch:d,addVehicle:g,latestMileage:h,rowProps:m,assignCar:y}){let[v,$]=L(!1),[_,A]=L(""),[w,D]=L("all"),[x,R]=L("gasoline"),B=U(()=>{let M=Ma.find(V=>V.key===w);if(!M||!M.days)return"0000-00-00";let O=new Date;return O.setDate(O.getDate()-M.days),dt(O)},[w]),H=M=>M.date>=B,j=e.vehicles.map(M=>{let O=0;for(let V of t)V.carId===M.id&&V.type==="expense"&&H(V)&&(O+=V.isRefund?-V.amount:V.amount);return{...M,expense:O}}),X=e.maintenance.filter(M=>M.carId===n),J=e.mileageLogs.filter(M=>M.carId===n).sort((M,O)=>M.date<O.date?1:-1).slice(0,5),I=t.filter(M=>M.carId===n&&H(M)).sort((M,O)=>M.date<O.date?1:M.date>O.date?-1:O.createdAt-M.createdAt),N=U(()=>{let M=new Map;for(let O of I){if(O.type!=="expense")continue;let V=O.category||"etc";M.set(V,(M.get(V)||0)+(O.isRefund?-O.amount:O.amount))}return Array.from(M.entries()).filter(([,O])=>O!==0).sort((O,V)=>V[1]-O[1])},[I]),W=N.reduce((M,[,O])=>M+O,0),ie=U(()=>t.filter(M=>!M.carId&&M.type==="expense"&&M.category==="car"&&H(M)),[t]),$e=(M,O)=>d(V=>{V.maintenance=V.maintenance.map(ne=>ne.id===M?{...ne,...O}:ne)});return b`
    <div class="cards">
      ${j.length===0&&b`<div class="empty">아직 등록한 차량이 없어요.</div>`}
      ${j.map(M=>b`
        <button key=${M.id} class=${"sumCard"+(n===M.id?" on":"")} onClick=${()=>s(M.id)}>
          <div class="sumName"><${Pn} size=${12} /> ${M.name}</div>
          <div class="sumAmt">₩${q(M.expense)}</div>
        </button>`)}
      ${!v&&b`<button class="tag dash" onClick=${()=>$(!0)}>+ 새 차량</button>`}
    </div>

    ${v&&b`
      <div class="card">
        <div class="cardLabel">차량 추가</div>
        <input class="inp" placeholder="차량 이름 (예: 아반떼)" value=${_} onInput=${M=>A(M.target.value)} />
        <div class="miniLabel">연료</div>
        <div class="chips">
          ${Xt.map(M=>b`
            <button key=${M.key} class=${"tag"+(x===M.key?" on":"")} onClick=${()=>R(M.key)}>${M.label}</button>`)}
        </div>
        <div class="hint sm">
          고른 연료에 맞는 정비 항목 ${Ka(x).length}개가 자동으로 등록됩니다.
          주기는 일반적인 값이라 차종에 따라 다를 수 있고, 등록 뒤 각 항목에서 고칠 수 있어요.
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>$(!1)}>취소</button>
          <button class="btn primary sm" disabled=${!_.trim()}
            onClick=${()=>{s(g(_.trim(),x).id),A(""),$(!1)}}>만들기</button>
        </div>
      </div>`}

    <div class="row wrap" style="margin-top:10px">
      ${Ma.map(M=>b`
        <button key=${M.key} class=${"tag"+(w===M.key?" on":"")} onClick=${()=>D(M.key)}>${M.label}</button>`)}
    </div>

    ${i&&(()=>{let M=j.find(ne=>ne.id===n)?.expense||0,O=I.map(ne=>ne.date).sort(),V=O.length?Math.max(1,Math.round((new Date(O[O.length-1])-new Date(O[0]))/2592e6)+1):1;return b`
      <div class="monthBar">
        <span class="monthLabel">${i.name}${i.fuel?b`<span class="fuelTag">${(Xt.find(ne=>ne.key===i.fuel)||{}).label||""}</span>`:""}</span>
        <span class="totals"><span class="exp">유지비 ₩${q(M)}</span></span>
      </div>
      ${M>0&&b`
        <div class="carSpan">
          ${O.length?`${O[0]} ~ ${O[O.length-1]} · ${I.length}건`:""}
          ${V>1?` · 월평균 ₩${q(Math.round(M/V))}`:""}
          ${V>=6?` · 연환산 ₩${q(Math.round(M/V*12))}`:""}
        </div>`}
      `})()}
    ${i&&b`

      <div class="box">
        <div class="boxTop"><${Vi} size=${15} />
          ${a!=null?b`<span>현재 ${a.toLocaleString("ko-KR")}km</span>`:b`<span class="muted">기록된 주행거리가 없어요</span>`}
        </div>
        <div class="row wrap">
          <input type="number" class="inp" placeholder="계기판 거리(km)" value=${o} onInput=${M=>r(M.target.value)} />
          <input type="date" class="inp date" value=${l} onInput=${M=>c(M.target.value)} />
          <button class="btn primary sm" disabled=${!o}
            onClick=${()=>{d(M=>{M.mileageLogs=[{id:ke(),carId:n,date:l,mileage:parseInt(o,10)},...M.mileageLogs]}),r("")}}>
            <${Yt} size=${14} /> 기록</button>
        </div>
        ${J.length>0&&b`<div class="logList">${J.map(M=>b`<span class="log" key=${M.id}>${ut(M.date)} · ${M.mileage.toLocaleString("ko-KR")}km</span>`)}</div>`}
      </div>

      <div class="maintList">
        ${X.map(M=>{let{status:O,remKm:V,remMonths:ne}=Pi(M,a),xe=f&&f.id===M.id;return b`
            <div class="box maint" key=${M.id}>
              <div class="boxTop">
                <span class="maintName"><${Wi} size=${13} /> ${M.label}</span>
                <span class=${"badge "+O}>${Oi[O]}</span>
              </div>
              <div class="maintSub">
                ${O!=="unknown"?b`${V!=null?b`<span>${V>0?`${V.toLocaleString("ko-KR")}km 남음`:`${Math.abs(V).toLocaleString("ko-KR")}km 초과`}</span>`:""}
                    ${V!=null&&ne!=null?b`<span> · </span>`:""}
                    ${ne!=null?b`<span>${ne>0?`${ne}개월 남음`:`${Math.abs(ne)}개월 초과`}</span>`:""}`:b`<span>마지막 처리 기록을 입력해주세요</span>`}
              </div>
              ${xe?b`<div class="row wrap">
                    <input type="date" class="inp date" value=${f.lastDate||""} onInput=${re=>u({...f,lastDate:re.target.value})} />
                    <input type="number" class="inp" placeholder="교체 당시 km" value=${f.lastMileage??""} onInput=${re=>u({...f,lastMileage:re.target.value?parseInt(re.target.value,10):null})} />
                    <input type="number" class="inp" placeholder="주기(km)" value=${f.intervalKm??""} onInput=${re=>u({...f,intervalKm:re.target.value?parseInt(re.target.value,10):null})} />
                    <input type="number" class="inp" placeholder="주기(개월)" value=${f.intervalMonths??""} onInput=${re=>u({...f,intervalMonths:re.target.value?parseInt(re.target.value,10):null})} />
                    <div class="acts">
                      <button class="btn ghost sm" onClick=${()=>u(null)}>취소</button>
                      <button class="btn primary sm" onClick=${()=>{$e(M.id,f),u(null)}}>저장</button>
                    </div>
                  </div>`:b`<div class="acts">
                    <button class="btn ghost sm" onClick=${()=>u({...M})}>수정</button>
                    <button class="btn primary sm" onClick=${()=>$e(M.id,{lastDate:Ae(),lastMileage:h(n)})}>오늘 처리함</button>
                  </div>`}
            </div>`})}
      </div>

      ${N.length>0&&b`
        <div class="box">
          <div class="boxTop"><span class="maintName">무엇에 들었나</span><span class="sumAmt">₩${q(W)}</span></div>
          <div class="carBreak">
            ${N.map(([M,O])=>b`
              <div class="carBreakRow" key=${M}>
                <span class="dot" style=${`background:${(we[M]||{}).color||"#999"}`}></span>
                <span class="carBreakName">${(we[M]||{}).label||"기타"}</span>
                <span class="carBreakBar"><i style=${`width:${Math.max(2,Math.round(O/W*100))}%;background:${(we[M]||{}).color||"#999"}`}></i></span>
                <span class="carBreakAmt">₩${q(O)}</span>
              </div>`)}
          </div>
        </div>`}

      ${ie.length>0&&e.vehicles.length>0&&b`
        <div class="box">
          <div class="boxTop"><span class="maintName">어느 차인지 안 정한 지출 ${ie.length}건</span></div>
          <div class="hint sm">한 번 정해두면 같은 곳에서 쓴 다음 기록은 자동으로 이 차에 붙습니다.</div>
          <div class="unassignList">
            ${ie.slice(0,6).map(M=>b`
              <div class="unassignRow" key=${M.id}>
                <span class="unassignMemo">${M.memo}</span>
                <span class="unassignAmt">₩${q(M.amount)}</span>
                <div class="chips">
                  ${e.vehicles.map(O=>b`
                    <button key=${O.id} class="chip sm" onClick=${()=>y(M,O.id)}>${O.name}</button>`)}
                </div>
              </div>`)}
          </div>
        </div>`}

      ${I.length>0&&b`<div class="carSpend"><div class="groupHead">이 차량으로 기록된 지출</div><${qt} list=${I} ...${m} /></div>`}`}`}function ct({label:e,items:t,placeholder:n,onChange:s}){let[i,a]=L(""),o=()=>{let r=i.trim();!r||t.includes(r)||(s([...t,r]),a(""))};return b`
    <div class="nameList">
      <div class="miniLabel">${e}</div>
      <div class="chips">
        ${t.map(r=>b`
          <span class="tag on" key=${r}>${r}
            <button class="tagX" onClick=${()=>s(t.filter(l=>l!==r))} aria-label="빼기">×</button>
          </span>`)}
      </div>
      <div class="row">
        <input class="inp" placeholder=${n} value=${i}
          onInput=${r=>a(r.target.value)} onKeyDown=${r=>r.key==="Enter"&&o()} />
        <button class="btn ghost sm" onClick=${o} disabled=${!i.trim()}>추가</button>
      </div>
    </div>`}function nr({db:e,setDb:t,onClose:n,flash:s,onSync:i,onUndoImport:a}){let o=ye(null),[r,l]=L(!1),c=U(()=>JSON.stringify(e).length,[e]),f=()=>{let d=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),g=URL.createObjectURL(d),h=document.createElement("a");h.href=g,h.download=`가계부-백업-${Ae()}.json`,document.body.appendChild(h),h.click(),document.body.removeChild(h),setTimeout(()=>URL.revokeObjectURL(g),1e3)},u=d=>{let g=d.target.files&&d.target.files[0];if(!g)return;let h=new FileReader;h.onload=()=>{try{let m=JSON.parse(h.result);if(!m.entries)throw new Error("형식이 다릅니다");t({...Te,...m,settings:{...Te.settings,...m.settings||{}}}),s(`${m.entries.length}건을 불러왔어요`),n()}catch{s("파일을 읽지 못했어요")}},h.readAsText(g)};return b`
    <div class="card settings">
      <div class="cardLabel">설정</div>

      <label class="setRow">
        <span>본인 이름</span>
        <input class="inp" placeholder="이체 판정에 씁니다" value=${e.settings.userName}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,userName:d.target.value}}))} />
      </label>

      <label class="setRow">
        <span>월 시작일</span>
        <input class="inp" type="number" min="1" max="28" value=${e.settings.monthStartDay}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,monthStartDay:Math.min(28,Math.max(1,parseInt(d.target.value||"1",10)))}}))} />
      </label>
      <div class="hint sm">급여일 기준으로 보고 싶으면 급여일을 넣으세요. 1이면 달력 기준입니다.</div>

      <div class="setDivider">수입으로 볼 것</div>
      <div class="hint sm">여기 적힌 곳에서 온 입금만 수입으로 셉니다. 나머지 입금은 기록만 남고 합계에서 빠집니다.</div>
      <${ct} label="수입처" items=${e.settings.incomeSources||[]} placeholder="예: 근무하는 회사 이름"
        onChange=${d=>t(g=>({...g,settings:{...g.settings,incomeSources:d}}))} />
      <${ct} label="항상 제외" items=${e.settings.excludedCounterparties||[]} placeholder="예: 어머니 성함"
        onChange=${d=>t(g=>({...g,settings:{...g.settings,excludedCounterparties:d}}))} />

      <div class="setDivider">합계에서 뺄 것</div>
      <div class="hint sm">복지카드는 회사 돈이라 기록만 하고 지출에는 안 넣습니다. 가족 송금은 보낸 시점에 지출로 잡습니다.</div>
      <${ct} label="복지카드" items=${e.settings.welfareCards||[]} placeholder="예: 현대카드"
        onChange=${d=>t(g=>({...g,settings:{...g.settings,welfareCards:d}}))} />
      <label class="setRow">
        <span>복지 한도</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="연간 한도 (예: 1200000)"
          value=${e.settings.welfareLimit||""}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,welfareLimit:parseInt(d.target.value||"0",10)}}))} />
      </label>
      <label class="setRow">
        <span>시작 시점</span>
        <input class="inp" placeholder="예: 2026-01" value=${e.settings.welfarePeriodStart||""}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,welfarePeriodStart:d.target.value.trim()}}))} />
      </label>
      <div class="hint sm">현대복지카드는 승인 문자에 잔여 한도가 찍혀 와서 따로 넣을 게 없습니다. 문자가 안 오는 카드만 한도를 넣으세요.</div>

      <${ct} label="가족 송금" items=${e.settings.familyTransferKeywords||[]} placeholder="예: 하나머니충전"
        onChange=${d=>t(g=>({...g,settings:{...g.settings,familyTransferKeywords:d}}))} />
      <label class="setRow">
        <span>정기 금액</span>
        <input class="inp" type="number" inputmode="numeric" placeholder="예: 1150000"
          value=${e.settings.familyRegularAmount||""}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,familyRegularAmount:parseInt(d.target.value||"0",10)}}))} />
      </label>
      <div class="hint sm">이 금액의 1.4배를 넘는 송금은 <b>별도 송금</b>으로 따로 셉니다. 대학자금처럼 성격이 다른 돈이 섞이지 않게 하기 위해서입니다.</div>
      <${ct} label="여행 자금" items=${e.settings.travelKeywords||[]} placeholder="예: 트래블월렛"
        onChange=${d=>t(g=>({...g,settings:{...g.settings,travelKeywords:d}}))} />

      <div class="setDivider">구글시트 연동</div>
      <label class="setRow">
        <span>시트 주소</span>
        <input class="inp" placeholder="https://script.google.com/.../exec" value=${e.settings.sheetUrl}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,sheetUrl:d.target.value.trim()}}))} />
      </label>
      <label class="setRow">
        <span>연결 암호</span>
        <input class="inp" placeholder="Apps Script에 적은 값과 같게" value=${e.settings.sheetToken}
          onInput=${d=>t(g=>({...g,settings:{...g.settings,sheetToken:d.target.value.trim()}}))} />
      </label>
      <div class="acts">
        <button class="btn ghost sm" onClick=${async()=>{try{await Hs(e.settings.sheetUrl,e.settings.sheetToken),s("연결됐어요")}catch(d){s(`연결 실패: ${d.message}`)}}} disabled=${!e.settings.sheetUrl}>연결 확인</button>
        <button class="btn ghost sm" onClick=${i} disabled=${!e.settings.sheetUrl}>지금 맞추기</button>
      </div>
      ${e.settings.lastSyncAt&&b`<div class="hint sm">마지막 동기화 ${new Date(e.settings.lastSyncAt).toLocaleString("ko-KR")}</div>`}

      <div class="setDivider">데이터</div>
      <div class="setStat">버전 <b>v29</b> · 기록 ${e.entries.filter(d=>!d.deleted).length}건 · 분류 규칙 ${(e.categoryRules||[]).length}개 · 보낼 것 ${e.entries.filter(d=>d.dirty).length}건 · 저장 용량 ${(c/1024).toFixed(0)}KB</div>

      <div class="acts">
        <button class="btn ghost sm" onClick=${()=>o.current&&o.current.click()}>가져오기</button>
        <button class="btn primary sm" onClick=${f}>백업 내보내기</button>
      </div>
      <input ref=${o} type="file" accept="application/json" style="display:none" onChange=${u} />

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
    </div>`}function sr(){let[e,t]=ys();return e?b`
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
          <button class="btn ghost sm" onClick=${()=>{try{let i=localStorage.getItem(qe)||"{}",a=new Blob([i],{type:"application/json"}),o=URL.createObjectURL(a),r=document.createElement("a");r.href=o,r.download=`가계부-백업-${Ae()}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),setTimeout(()=>URL.revokeObjectURL(o),1e3)}catch{alert(`파일로 저장하지 못했어요. 아래 내용을 복사해 두세요.

`+(localStorage.getItem(qe)||""))}}}>백업 내보내기</button>
          <button class="btn primary sm" onClick=${()=>t()}>다시 시도</button>
        </div>
        <div class="acts">
          <button class="btn ghost sm" onClick=${()=>{if(window.confirm("기록을 모두 지웁니다. 백업을 먼저 받으셨나요?")){try{let i=JSON.parse(localStorage.getItem(qe)||"{}");localStorage.setItem(qe,JSON.stringify({...Te,categoryRules:i.categoryRules||[],settings:{...Te.settings,...i.settings||{},lastSyncAt:""}}))}catch{localStorage.removeItem(qe)}location.reload()}}}>기록 지우기</button>
        </div>
      </div>
      <div class="card">
        <div class="cardLabel">오류 내용</div>
        <div class="errText">${String(e&&(e.message||e))}</div>
      </div>
    </div>`:b`<${Zi} />`}cs(b`<${sr} />`,document.getElementById("root"));
