!function(e){"use strict";function n(e,n){var t;for(t in n)n.hasOwnProperty(t)&&(e[t]=n[t])}function t(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var o="UNKNOWN",r={},i={},s={},a={},f={},l={},u={},c={},p={specifics:{beforeBrill:function(){},afterBrill:function(){},getComposedWordTag:null,DEFAULT_TAG:o,EMOT_TAG:o,SYM_TAG:o,NUM_TAG:o,PUNC_TAG:o}},h=Array.isArray,d={profile:{negative_threshold:-.3,positive_threshold:.3,amplitude_threshold:.3,polite_threshold:.2,dirty_threshold:.3},parser:["v1","v2"]},g="foreign",m="interrogative",v="exclamatory",y="headline",x="imperative",w="approval",b="refusal";e.detect=f,e.dependencies=l,e.inflector=c,e.compendium=r,e.lexer=i,e.parser=u,e.factory=s,e.pos=p,e.config=d,!function(){n(r,{verbs:"".split(" "),irregular:"".split("	").map(function(e){return e.split(" ")}),infinitives:[],ing_excpt:[],emphasis:[],abbrs:[],synonyms:"",abbrs_rplt:[],exclamations:["yahoo","joomla","jeopardy"],rules:"",suffixes:"",emots:[],floatChar:",",thousandChar:".",multipliers:["cent","mille","million","milliard","billion"],numbers:{zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,ninteen:19,twenty:20,thirty:30,forty:40,fourty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90,hundred:100,thousand:1e3,million:1e6,billion:1e9,trillion:1e12},demonyms:"",neg:{},neg_neg:{},refusal:{},approval:{},approval_verbs:[],breakpoints:{},citations:{'"':'"',"'":'"',"`":'"'},p:{},months:{},days:{},indicators:{},dirty:"".split(" "),polite:"".split(" ")})}(),function(){n(l,{parse:function(e){}}),n(u,{parse:function(e){}})}(),function(){n(c,{isSingular:function(e){return""},isPlural:function(e){return""},isUncountable:function(e){return""},singularize:function(e){return""},pluralize:function(e){return""},conjugate:function(e,n){return""},toPast:function(e){return""},toGerund:function(e){return""},toPresents:function(e){return""},infinitive:function(e){return""}}),e.inflector=c}(),!function(){var t=["'","’","ʼ"];n(e.lexer,{postprocess:function(e){var n,o,r=e.length,i=[];for(n=0;r>n;n+=1)o=e[n],t.indexOf(o)>-1?i[i.length-1]+="'":i.push(o);return i}})}(),function(){e.stemmer=function(e){return e}}(),!function(){function n(e){throw new RangeError(P[e])}function t(e,n){for(var t=e.length,o=[];t--;)o[t]=n(e[t]);return o}function o(e,n){var o=e.split("@"),r="";o.length>1&&(r=o[0]+"@",e=o[1]),e=e.replace(N,".");var i=e.split("."),s=t(i,n).join(".");return r+s}function r(e){for(var n,t,o=[],r=0,i=e.length;i>r;)n=e.charCodeAt(r++),n>=55296&&56319>=n&&i>r?(t=e.charCodeAt(r++),56320==(64512&t)?o.push(((1023&n)<<10)+(1023&t)+65536):(o.push(n),r--)):o.push(n);return o}function i(e){return t(e,function(e){var n="";return e>65535&&(e-=65536,n+=B(e>>>10&1023|55296),e=56320|1023&e),n+=B(e)}).join("")}function s(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:g}function a(e,n){return e+22+75*(26>e)-((0!=n)<<5)}function f(e,n,t){var o=0;for(e=t?A(e/x):e>>1,e+=A(e/n);e>C*v>>1;o+=g)e=A(e/C);return A(o+(C+1)*e/(e+y))}function l(e){var t,o,r,a,l,u,c,p,h,y,x=[],k=e.length,_=0,N=b,P=w;for(o=e.lastIndexOf(O),0>o&&(o=0),r=0;o>r;++r)e.charCodeAt(r)>=128&&n("not-basic"),x.push(e.charCodeAt(r));for(a=o>0?o+1:0;k>a;){for(l=_,u=1,c=g;a>=k&&n("invalid-input"),p=s(e.charCodeAt(a++)),(p>=g||p>A((d-_)/u))&&n("overflow"),_+=p*u,h=P>=c?m:c>=P+v?v:c-P,!(h>p);c+=g)y=g-h,u>A(d/y)&&n("overflow"),u*=y;t=x.length+1,P=f(_-l,t,0==l),A(_/t)>d-N&&n("overflow"),N+=A(_/t),_%=t,x.splice(_++,0,N)}return i(x)}function u(e){var t,o,i,s,l,u,c,p,h,y,x,k,_,N,P,C=[];for(e=r(e),k=e.length,t=b,o=0,l=w,u=0;k>u;++u)x=e[u],128>x&&C.push(B(x));for(i=s=C.length,s&&C.push(O);k>i;){for(c=d,u=0;k>u;++u)x=e[u],x>=t&&c>x&&(c=x);for(_=i+1,c-t>A((d-o)/_)&&n("overflow"),o+=(c-t)*_,t=c,u=0;k>u;++u)if(x=e[u],t>x&&++o>d&&n("overflow"),x==t){for(p=o,h=g;y=l>=h?m:h>=l+v?v:h-l,!(y>p);h+=g)P=p-y,N=g-y,C.push(B(a(y+P%N,0))),p=A(P/N);C.push(B(a(p,0))),l=f(o,_,i==s),o=0,++i}++o,++t}return C.join("")}function c(e){return o(e,function(e){return k.test(e)?l(e.slice(4).toLowerCase()):e})}function p(e){return o(e,function(e){return _.test(e)?"xn--"+u(e):e})}var h,d=2147483647,g=36,m=1,v=26,y=38,x=700,w=72,b=128,O="-",k=/^xn--/,_=/[^\x20-\x7E]/,N=/[\x2E\u3002\uFF0E\uFF61]/g,P={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=g-m,A=Math.floor,B=String.fromCharCode;h={version:"1.3.2",ucs2:{decode:r,encode:i},decode:l,encode:u,toASCII:p,toUnicode:c},e.punycode=h}(),function(){var e=function(e,n){this.k=e||null,this.v=n||null,this.c=null};e.prototype.put=function(e,n){return null===this.c&&(this.c={}),null},e.prototype.isset=function(e){return null!==this.get(e)},e.prototype.get=function(e){return null};var n=function(){this.root=new e("")};n.prototype.put=function(){}}(),!function(){var n=["en","fr"];a.toObject=function(e,n){},a.applyPOS=function(n,t,o){var r,i,a;for(a=e.tag(t,o),n.tags=a.tags,n.stats.confidence=a.confidence,r=0,i=t.length;i>r;r++)n.tokens.push(s.token(t[r],a.norms[r],a.tags[r]));return n.length=i,n},a.analyse=function(n,t){var o,r,c,p,h,g,m,v,y,x=[];for(r=i.advanced(e.decode(n),t),c=r.sentences,o=0,p=c.length;p>o;o++){for(h=Date.now(),g=s.sentence(r.raws[o],t),a.applyPOS(g,c[o],t),e.stat(g),v=f.context(),m=0,y=g.tokens.length;y>m;m++)f.apply("t",!0,g.tokens[m],m,g,v);for(f.apply("s",!0,g,o,x,v),d.parser.indexOf("v1")>-1&&l.parse(g),d.parser.indexOf("v1")>-1&&u.parse(g),m=0,y=g.tokens.length;y>m;m++)f.apply("t",!1,g.tokens[m],m,g,v);x.push(g),f.apply("s",!1,g,o,x,v),g.time=Date.now()-h}return x},e.analyse=function(e,t){var o=null;if(t=t||"en",-1===n.indexOf(t))throw new Error("Compendium supports only the following languages: "+n.join(", "));return o=a.analyse(e,t),f.apply("p",!1,o),o}}(),!function(){var n=e.inflector,t=function(t){var o,i,s,a,f,l,u,c,p,d,g,m=(Date.now(),t.split("	")),v={},y=[];for(o=0,s=m.length;s>o;o++)g=m[o].split(" "),f=!1,d=g.length-1,u=d>0?g[1].trim():"",a=u.length-1,a>0&&"-"===u[a]&&(f=!0,u=u.slice(0,a)),c=0,p=null,g[d].match(/^[A-Z]{2,}\/[0-9\-]+$/g)?(p=g[d].split("/")[0],c=g[d].split("/")[1]):(g[d].match(/^[0-9\-]+$/g)||g[d].match(/^\-{0,1}[0-4]\.[0-9]$/g))&&(c=g[d].indexOf(".")>0?parseFloat(g[d]):parseInt(g[d],10)),"EM"===u&&e.punycode.ucs2.decode(g[0]).length>1&&y.push(g[0]),v[g[0]]={pos:"-"===u?"NN":u,sentiment:c,condition:p,blocked:f};for(o in r)if(r.hasOwnProperty(o)&&"object"==typeof r[o]&&!h(r[o])){g=r[o];for(s in g)g.hasOwnProperty(s)&&(c=0,"string"==typeof g[s]?(v.hasOwnProperty(s)&&(c=v[s].sentiment),v[s]={pos:g[s],sentiment:c,condition:null}):"number"==typeof g[s]&&(v[s]={pos:"CD",sentiment:c,value:g[s],condition:null}))}for(o=0,s=r.verbs.length;s>o;o++,c=0)g=r.verbs[o],g&&(r.infinitives.push(g),l=n.conjugate(g,"VBZ"),l&&(v.hasOwnProperty(g)&&("NN"===v[g].pos&&(v[g].pos="VB"),f=v[g].blocked,c=v[g].sentiment),v[l]={pos:"VBZ",sentiment:c,condition:null,infinitive:g,blocked:f},l=n.conjugate(g,"VBN"),v.hasOwnProperty(l)?v[l].infinitive=g:v[l]={pos:"VBN",sentiment:c,condition:null,infinitive:g},l=n.conjugate(g,"VBG"),v.hasOwnProperty(l)?v[l].infinitive=g:v[l]={pos:"VBG",sentiment:c,condition:null,infinitive:g}));for(o=0,s=r.irregular.length;s>o;o++,c=0)if(g=r.irregular[o],d=g[0])for(v.hasOwnProperty(d)&&(c=v[d].sentiment,"VB"!==v[d].pos&&(v[d].pos="VB")),r.infinitives.push(d),i=0;5>i;i++)g[i].split("/").map(function(e){v.hasOwnProperty(e)?v[e].infinitive||(v[e].infinitive=d,v[e].sentiment=c):v[e]={pos:0===i?"VB":1===i?"VBD":2===i?"VBN":3===i?"VBZ":"VBG",sentiment:c,condition:null,infinitive:d}});return r.emots=y,v},o=function(e){e=e.split("	");var n,t,o,i=[],s=e.length;for(o=0;s>o;o++)n=e[o].split(" "),"+"===n[n.length-1]?(n.splice(n.length-1,1),t=!0):t=!1,i.push({from:n[0],to:n[1],type:parseInt(n[2],10),c1:n[3],c2:n[4],c3:n[5],secondRun:t});r.rules=i},i=function(e){e=e.split("	");var n,t,o=e.length,i=[];for(n=0;o>n;n++)t=e[n].split(" "),i.push({regexp:new RegExp("^.{1,}"+t[0].trim()+"$","gi"),pos:t[1]});r.suffixes=i},s=function(e){var t,o=e.length;for(t=0;o>t;t++)e.push(n.pluralize(e[t]))},a=function(e){var n,t=e.length,o=[],i=[];for(n=0;t>n;n++)n%2===0?o.push(e[n]):i.push(e[n]);r.abbrs=o,r.abbrs_rplt=i},f=function(e){var n,t,o={};for(e=e.split(" "),n=0,t=e.length;t>n;n++)o[e[n]]="JJ";r.demonyms=o},l=function(e){e=e.split("	");var n,t=e.length,o=[];for(n=0;t>n;n++)o.push(e[n].split(" "));r.synonyms=o};o(r.rules),i(r.suffixes),a(r.abbrs),s(r.dirty),l(r.synonyms),f(r.demonyms),e.lexicon=t("")}(),!function(){var n={'"':/(&quot;|\u201C|\u201D)/gi,"&":/&amp;/gi,"'":/(&#x27;|\u2018|\u2019)/gi,"<":/&lt;/gi,">":/&gt;/gi,"`":/&#x60/gi,shit:/(s\&\^t|sh\*t)/gi,fuck:/(f\*ck)/gi,"just kidding":"j/k",without:/w\/[to]/g,"with":"w/"," out of ":/\soutta\s/gi};e.decode=function(e){var t;for(t in n)n.hasOwnProperty(t)&&(e=e.replace(n[t],t));return e}}(),!function(){var e={t:[],s:[]},n={t:[],s:[],p:[]},t=[];f.init=function(e){t.push(e)},f.context=function(){var e,n={},o=t.length;for(e=0;o>e;e+=1)t[e](n);return n},f.before=function(n,t){e.hasOwnProperty(n)?e[n].push(t):console.warn("No detector with type "+n)},f.add=function(e,n){return console.warn("compendium.detectors.add is a deprecated function - please use compendium.detectors.after"),f.after(e,n)},f.after=function(e,t){n.hasOwnProperty(e)?n[e].push(t):console.warn("No detector with type "+e)},f.apply=function(t,o){var r,i,s=Array.prototype.slice.call(arguments).slice(2),a=o?e:n;if(a.hasOwnProperty(t))for(r=0,i=a[t].length;i>r;r++)a[t][r].apply(null,s)}}(),!function(){var e=function(e,n){if(n>=e.length)return!1;var t=e.tags[n+1];return"NNP"===t||"NNPS"==t},n=function(e,n){return"&"===e||"TO"===e||"CC"===e&&"or"!==n};f.before("s",function(t,o,r){var i,a,f,l,u,c,p=t.length,h=t.stats;if(!(h.p_upper>75||h.p_cap>85))for(i=0;p>i;i++)a=t.tags[i],f=t.tokens[i],l=f.norm,f.attr.entity>-1?c=null:"NN"===a?c=null:"NNP"===a||"NNPS"===a||c&&n(a,l)&&e(t,i)?c?(c.raw+=" "+f.raw,c.norm+=" "+f.norm,c.toIndex=i,f.attr.entity=u):(c=s.entity(f,i),u=f.attr.entity=t.entities.push(c)-1):c=null})}(),!function(){var e=Object.keys(r.neg).concat(Object.keys(r.refusal)),n=Object.keys(r.neg_neg),t=[["but","to"]];f.after("s",function(o,r,i){var s,a,f,l,u,c=o.length,p=t.length,h=!1,d=0,g=0;for(s=0;c>s;s++){if(u=o.tokens[s],l=o.tokens[s+1],u.profile.breakpoint||u.attr.is_punc)d=0,h=!1;else if(e.indexOf(u.norm)>-1)h?h=!1:(f=o.tokens[s-1],"RB"===u.pos&&f&&(f.attr.is_verb||"MD"===f.pos)&&(f.profile.negated=!0),g++,h=!0);else if(h&&n.indexOf(u.norm)>-1&&0===d)o.tokens[s-1].profile.negated=!1,g--,h=!1;else if(h){for(a=0;p>a&&c-1>s;a+=1)if(u.norm===t[a][0]&&l.norm===t[a][1]){h=!1;break}h&&(g++,d++)}u.profile.negated=h}o.profile.negated=g>0})}(),!function(){var e=["WP","WP$","WRB"];f.after("s",function(n,t){var o,r,i,s,a=n.length,f=n.stats,l=n.governor,u=n.profile.types,c=n.tokens[0],p=n.tokens[a-1];if(a>2&&(f.p_foreign>=10&&f.confidence<.5||f.confidence<=.35)&&u.push(g),f.p_cap>75&&f.p_upper<50&&a>10&&u.push(y),"!"===p.norm)u.push(v);else if("?"===p.norm||e.indexOf(c.pos)>-1&&0===f.breakpoints)u.push(m);else if(l>-1)if(o=n.tags[l],e.indexOf(o)>-1)u.push(m);else if("."!==p.pos&&0===o.indexOf("VB"))if("PRP"===n.tags[l+1]&&0===(n.tags[l+2]||"").indexOf("VB")&&u.push(m),l>1&&"PRP"===n.tags[l-1]&&0===n.tags[l-2].indexOf("VB"))u.push(m);else if("PRP"===n.tags[l-1]&&"MD"===n.tags[l-2])u.push(m);else for(r=n.tokens[l].deps.dependencies,i=0,s=r.length;s>i;i++)e.indexOf(n.tags[r[i]])>-1&&(n.tags[r[i]-1]||"").indexOf("VB")<0&&u.push(m);l>-1&&-1===u.indexOf(m)&&"VB"===n.tags[l]&&u.push(x)})}(),!function(){var e=r.dirty,n=r.polite,t=r.emphasis,o=["wo","'ll","will"],i=function(e,n){var t,o,r=n.deps.dependencies,s=r.length,a=0;if(0!==s){for(t=0;s>t;t+=1)o=e.tokens[r[t]],i(e,o),a+=o.profile.sentiment;n.profile.sentiment+=parseInt(a/s*100)/100}};f.after("s",function(r,s,a){var f,l,u,c,p,h,g,v=r.length,y=0,x=1,w=0,b=0,O=0,k=0,_=0,N=0,P=0,C=r.governor,A=r.profile;for(f=0;v>f;f++)l=r.tokens[f].profile,c=r.tokens[f].pos,p=r.tokens[f].norm,g=e.indexOf(p)>-1,h=n.indexOf(p)>-1,g?_++:h&&k++,l.negated&&"."!==c&&"EM"!==c&&(g?l.sentiment=l.sentiment/2:l.sentiment=-l.sentiment/2);for(C>-1&&(u=r.tokens[C],i(r,u),c=u.pos,u.attr.is_verb?A.main_tense="VBD"===c?"past":"present":"MD"===c&&o.indexOf(u.norm)>-1&&(A.main_tense="future")),r.stats.p_upper>70&&(x=1.2),f=0;v>f;f++)l=r.tokens[f].profile,c=r.tokens[f].pos,p=r.tokens[f].norm,x*=l.emphasis,("JJS"===c||"RB"===c&&t.indexOf(p)>-1)&&(O+=l.negated?2:5),w=l.sentiment*(1+O/10),y+=w,w>P?P=w:N>w&&(N=w),l.emphasis*=1+O/10,O>0&&-1===["DT","POS","IN"].indexOf(c)&&O--;5>v?v*=2:v>10&&(v/=2),b=(P+-N)/v,y*=x,y/=v,A.types.indexOf(m)>-1&&(y/=2),A.sentiment=y,A.emphasis=x,A.amplitude=b,A.dirtiness=_/v,A.politeness=k/v,Math.abs(b)>.5&&Math.abs(y)<.5&&Math.abs(b)>Math.abs(y)?A.label="mixed":y<=d.profile.negative_threshold?A.label="negative":y>=d.profile.positive_threshold?A.label="positive":b>=d.profile.amplitude_threshold&&(A.label="mixed")})}(),!function(){var e=Object.keys(r.approval),n=Object.keys(r.refusal);f.after("s",function(t,o){var i,s,a,f=t.tokens[0],l=t.profile,u=t.governor>-1?t.tokens[t.governor]:null,c=u?u.deps.dependencies:null,p=t.stats.words,h=l.types;if(!(h.indexOf(m)>-1)){if(n.indexOf(f.norm)>-1)h.push(b);else if(1===p&&"JJ"===f.pos&&l.sentiment<0)h.push(b);else if(u)if(n.indexOf(u.norm)>-1)h.push(b);else if(h.indexOf(x)>-1&&r.approval_verbs.indexOf(u.norm)>-1&&u.profile.negated)h.push(b);else if("UH"===u.pos)for(s=0,a=c.length;a>s;s+=1)i=t.tokens[c[s]],("UH"===i.pos||"RB"===i.pos)&&n.indexOf(i.norm)>-1&&h.push(b);if(!(h.indexOf(b)>-1))if(e.indexOf(f.norm)>-1)h.push(w);else if(1===p&&"JJ"===f.pos&&l.sentiment>0)h.push(w);else if(u&&3>=p)if(e.indexOf(u.norm)>-1)h.push(w);else if(h.indexOf(x)>-1&&r.approval_verbs.indexOf(u.norm)>-1)h.push(w);else if("UH"===u.pos)for(s=0;a>s;s+=1)i=t.tokens[c[s]],"UH"===i.pos&&e.indexOf(i.norm)>-1&&h.push(w)}})}(),!function(){var e=r.floatChar,n=r.thousandChar,t=/[0-9]/,o=/^-?[0-9]+$/,i=new RegExp("^-?[0-9]*\\"+e+"[0-9]+$"),s=new RegExp("^-?[0-9]+([\\"+n+"][0-9]+){1,}$"),a=new RegExp("^-?[0-9]+([\\"+n+"][0-9]+){1,}(\\"+e+"[0-9]+)$"),l=new RegExp("\\"+n,"g"),u=r.numbers,c=r.multipliers,p=function(e){var n=e.norm;if(n.match(t)){if(n.match(o))return parseInt(n,10);if(n.match(i))return parseFloat(n);if(n.match(a))return parseFloat(n.replace(l,""));if(n.match(s))return parseInt(n.replace(l,""),10)}return n=e.attr.singular,u.hasOwnProperty(n)?u[n]:null},h=function(e,n){var t,o,r,i=n[2],s=n[1],a=0;if(1===n[1])return t=i[0],p(t);for(o=0;s>o;o+=1){if(t=i[o],r=p(t),null===r)return null;c.indexOf(t.attr.singular)>-1?a*=r:a+=r}return a},d=function(e,n){var t,o=e[2],r=o.length;for(t=0;r>t;t+=1)o[t].attr.value=n};f.before("s",function(e,n,t,o){for(var r,i,s=o.numericSections,a=s.length,r=0;a>r;r+=1)i=h(e,s[r]),null!==i&&d(s[r],i)})}(),!function(){var n=e.lexicon;f.before("t",function(t,o,i){var s,a,f,l,u=t.raw,p=t.norm,h=t.stem,d=t.pos,g=0,m=1;a=u.toLowerCase(),f=a.length,f>1&&u.indexOf(".")===f-1&&(l=r.abbrs.indexOf(a.slice(0,f-1)))>-1?(t.attr.abbr=!0,p=r.abbrs_rplt[l]):u.match(/^([a-z]{1}\.)+/gi)?t.attr.acronym=!0:p=e.synonym(p),"."===d?(l=u[0],"!"===l||"?"===l?(m=u.length>1?2:"?"===l?1:1.5,u.length>1&&(p=u[0])):"."===l&&"."===u[1]&&(m=1.2,p="...")):"EM"===d?m=1.2:"UH"===d?m=1.1:0===d.indexOf("VB")?t.attr.infinitive=c.infinitive(p):"NNS"===d||"CD"===d?(s=c.singularize(p),t.attr.singular=s):"NN"===d&&(t.attr.singular=p),"NNP"!==d&&"NNPS"!==d&&"IN"!==d&&(n.hasOwnProperty(p)?(l=n[p],l.condition&&t.pos!==l.condition||(g=l.sentiment)):"NNS"===d&&n.hasOwnProperty(s)?(l=n[s],l.condition&&d!==l.condition||(g=l.sentiment/2)):n.hasOwnProperty(h)?(l=n[h],l.condition&&d!==l.condition||(g=l.sentiment/2)):r.dirty.indexOf(p)>-1?g=-2:r.polite.indexOf(p)>-1&&(g=1)),t.profile.sentiment=g,t.profile.emphasis=m,t.norm=p})}(),!function(){var e=[",",":",";","("],n=["-","—","/"];f.before("t",function(t,o,r){var i=t.raw,s=t.pos;(e.indexOf(s)>-1||n.indexOf(i)>-1)&&(t.profile.breakpoint=!0,r.stats.breakpoints++)})}(),!function(){f.before("t",function(n,t,o){var i,a,f,l,u,c=e.lexer.regexps,p=" "+n.norm+" ";for(i in c)c.hasOwnProperty(i)&&p.match(c[i])&&(a=s.entity(n,t,i),n.attr.entity=o.entities.push(a)-1,("username"===a.type||"composite"===i)&&(n.pos="NNP",o.tags[t]="NNP"),o.stats.confidence+=1/o.length,"pl"===i&&(a.type="political_affiliation",f=n.norm.split("-"),u=f[1].length,"d"===f[0]?a.meta.party="democrat":a.meta.party="republican",l="."===f[1][u-1]?r.abbrs.indexOf(f[1].slice(0,u-1)):r.abbrs.indexOf(f[1]),l>-1&&(f[1]=r.abbrs_rplt[l]),n.norm=a.meta.party+", "+f[1]))})}(),!function(){var e=r.numbers;f.init(function(e){e.numericSections=[],e.inNumericSection=!1}),f.before("t",function(n,t,o,r){var i=n.pos,s=r.numericSections;"CD"===i||"NNS"===i&&e.hasOwnProperty(n.attr.singular)?r.inNumericSection?(s[s.length-1][1]+=1,s[s.length-1][2].push(n)):(r.numericSections.push([t,1,[n]]),r.inNumericSection=!0):r.inNumericSection&&(r.inNumericSection=!1)})}(),!function(){var t=[",",".",":",'"',"(",")"];n(s,{entity:function(e,n,t){return{raw:e.raw,norm:e.norm,fromIndex:n,toIndex:n,type:t||null,meta:{}}},sentence:function(e,n){return{language:n,time:0,length:0,governor:-1,raw:e,stats:{words:0,confidence:0,p_foreign:0,p_upper:0,p_cap:0,avg_length:0,breakpoints:0},profile:{label:"neutral",sentiment:0,emphasis:1,amplitude:0,politeness:0,dirtiness:0,types:[],main_tense:"present"},has_negation:!1,entities:[],deps:{subjects:[],objects:[]},root:null,tokens:[],tags:[]}},token:function(n,o,r){var i=null,s=0===r.indexOf("VB");return o=o.toLowerCase(),i="VBD"===r||"VBN"===r?"past":"VBG"===r?"gerund":"present",{raw:n,norm:o,stem:e.stemmer(o),pos:r||"",profile:{sentiment:0,emphasis:1,negated:!1,breakpoint:!1},attr:{value:null,acronym:!1,abbr:!1,is_verb:s,tense:i,infinitive:null,is_noun:0===r.indexOf("NN"),plural:null,singular:null,entity:-1,is_punc:t.indexOf(r)>-1},deps:{master:null,governor:!1,type:"unknown",dependencies:[]}}},tag:function(e,n,t){return{tag:e||p.specifics.DEFAULT_TAG,norm:t,confidence:n||0,blocked:!1,reason:"unknown"}}})}(),!function(){var o,s,a=r.abbrs,f=/(\S.+?[….\?!\n])(?=\s+|$|")/g,l=new RegExp("(^| |\\(|\\[|{)("+a.join("|")+")[.!?] ?$","i"),u=" !?()[]{}\"'`%•.…:;,$€£¥\\/+=*_–",c=e.punycode.ucs2,p=r.floatChar,h=r.thousandChar,d=/^-?[0-9]+$/,g=/^[0-9]+$/,m=new RegExp("^-?[0-9]+[.,]$"),v={complexFloat:"\\s(-?[0-9]+([\\"+h+"][0-9]+){1,}(\\"+p+"[0-9]+))"},y={},x=r.emots.length,w=function(e){var n=0,t=e.length;for(n=0;t>n;n+=1)if(null===e[n]||"emoticon"!==e[n].group)return!1;return!0},b=function(e,n,t,o){var r,i,s,a;for(r in t)if(t.hasOwnProperty(r))for(s=new RegExp(t[r],"g");null!==(a=s.exec(e));)i=a[0].length,n[a.index]={content:a[1],type:r,group:o,length:i-(i-a[1].length)}};for(o=0;2*x>o;o+=2)s=r.emots[o/2],y["em_"+o]="\\s("+t(s)+"+)[^a-z]",s.match(/^[a-zA-Z]/)||(y["em_"+(o+1)]="[a-zA-Z]("+t(s)+"+)[^a-z]");n(e.lexer,{regexps:{email:"\\s([^\\s]+@[^\\s]+(\\.[^\\s\\)\\]]+){1,})",composite:"\\s([a-zA-Z]&[a-zA-Z])",username:"\\s(@[a-zA-Z0-9_]+)",html_char:"\\s(&[a-zA-Z0-9]{2,4};)",hashtag:"\\s(#[a-zA-Z0-9_]+)",url:"\\s((https?|ftp):\\/\\/[\\-a-z0-9+&@#\\/%\\?=~_|!:,\\.;]*[\\-a-z0-9+&@#\\/%=~_|])",ip:"\\s(([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5])\\.([01]?\\d\\d?|2[0-4]\\d|25[0-5]))\\s",pl:"\\s([rd]-([a-z]+\\.{0,1})+)"},consolidate:function(e,n,t){for(var o=1,r=e.length;r>o;o+=1)w(n[o])&&(e[o-1]=e[o-1].concat(e[o]),t[o-1]+=" "+t[o],e.splice(o,1),n.splice(o,1),t.splice(o,1),o-=1,r-=1);return e},sentences:function(e){var n,t,o=e.split(f),r=o.length,i=[];for(n=0;r>n;n++)t=o[n].trim(),t.match(l)||t.match(/[ |\.][A-Za-z]\.?$/)?r-1>n&&!o[n+1].match(/^[A-Za-z]\s/)?o[n+1]=t+" "+o[n+1].trim():i.push(t):t&&i.push(t);return i},splitTokens:function(e){var n,t,o,r=e.length,s=[],a=[],f=null,l=" "+e+" ",p={},h=function(e){if(e){"object"==typeof e&&(f=e,e=e.content),o=c.decode(e);var n,t=o.length,r="";for(n=0;t>n;n++)o[n]>=128511?(r&&(a.push(f),s.push(r)),a.push({group:"emoticon"}),s.push(c.encode([o[n]])),r=""):r+=c.encode([o[n]]);r&&(a.push(f),s.push(r))}},d=function(e,n){h(e),h(n),t=""};for(b(l,p,i.regexps,"entity"),b(l,p,y,"emoticon"),b(l,p,v,"number"),t="",n=0;r>n;n++)p.hasOwnProperty(n)?(d(t,p[n]),n+=p[n].length-1):u.indexOf(e[n])>-1?d(t,e[n]):t+=e[n];return d(t),{tokens:s,meta:a}},tokens:function(e,n){var t,o,r=i.splitTokens(e),s=r.tokens,f=r.meta,l=s.length,u=!1,c=[],p=[],h="",v="",y=0;for(t=0;l>t;t++)if(o=s[t].trim())if(h=y>0?c[y-1]:"",v=l-1>t?s[t+1]:"",("."===o||","===o)&&h.match(d)&&v.match(g)||o.match(d)&&h.match(m))u=!1,c[y-1]+=o;else if("."===o&&l-1>t&&y>0&&a.indexOf(h.toLowerCase())>-1)u=!1,c[y-1]+=o;else if(u&&l-1>t&&1===o.length)c[y-1]+=o;else{if(o.match(/^\W+$/gi)){if(u=!1,o===h[h.length-1]){c[y-1]+=o;continue}}else o.match(/^[A-Za-z]{1}$/g)&&l-1>t&&"."===v&&(u=!0);o&&(c.push(o),p.push(f[t]),y++)}else u=!1;return{result:i.postprocess(c,p),meta:p}},advanced:function(e,n,t){var o,r,s=i.sentences(e),a=s.length,f=[],l=[];if(t)return{sentences:s,raws:null,meta:null};for(o=0;a>o;o++)l.push(s[o]),r=i.tokens(s[o],n),f[o]=r.meta,s[o]=r.result;return i.consolidate(s,f,l),{raws:l,sentences:s,meta:f}},lex:function(e,n,t){return i.advanced(e,n,t).sentences}}),e.lex=i.lex}(),!function(){var n=["#","SYM","CR","EM"];e.stat=function(e){var t,o,r,i,s=e.length,a=s,f=e.stats,l=0,u=0,c=0,p=0,h=0;for(t=0;s>t;t++)o=e.tokens[t],r=o.raw,l+=r.length,i=e.tags[t],o.attr.is_punc||n.indexOf(i)>-1?a--:(p+=1,r.match(/^[A-Z][a-zA-Z]+$/g)&&h++,r.match(/[A-Z]+/)&&!r.match(/[a-z]/)&&c++,"FW"===i&&u++);0===a&&(a=1),f.words=p,f.p_foreign=100*u/a,f.p_upper=100*c/a,f.p_cap=100*h/a,f.avg_length=l/a}}(),!function(){var n=r.synonyms,t=n.length;e.synonym=function(e){var o;for(o=0;t>o;o++)if(n[o].indexOf(e)>0)return n[o][0];return e}}(),!function(){var t=p.specifics,o=0,i=1,a=2,f=3,l=4,u=41,c=5,h=51,d=6,g=8,m=81,v=9,y=11,x=12,w=121,b=13,O=14,k=141,_=15,N=16,P=17,C=171,A=172,B=18,$=19,S=21,z=(e.lexicon,r.emots),T=r.rules,V=T.length,j=r.suffixes,R=j.length,E=new RegExp("^-?[0-9]+([\\"+r.thousandChar+"][0-9]+){1,}(\\"+r.floatChar+"[0-9]+)$"),Z=function(n){var t,o=n.replace(/(.)\1{2,}/g,"$1$1");return e.lexicon.hasOwnProperty(o)?o:(t=e.synonym(o),t!==o?t:(o=n.replace(/(.)\1{1,}/g,"$1"),e.lexicon.hasOwnProperty(o)?o:(t=e.synonym(o),t!==o?t:null)))};n(p,{matchPotentialProperNoun:function(e){return e.match(/^[A-Z][a-z\.]+$/g)||e.match(/^[A-Z]+[0-9]+$/g)||e.match(/^[A-Z][a-z]+[A-Z][a-z]+$/g)},applyRule:function(e,n,t,r,s,p,z){if(!(e.from!==t||e.secondRun&&0===z)){var T,V,j=e.type;if(j!==o){if(n=n.toLowerCase(),j===a){if(r>0&&p[r-1]===e.c1)return void(p[r]=e.to)}else if(j===h){if(T=s[r-1]||"",p[r-1]===e.c2&&T.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===f){if(p[r+1]===e.c1)return void(p[r]=e.to)}else if(j===l){if(p[r+2]===e.c1)return void(p[r]=e.to)}else if(j===u){if(p[r-2]===e.c1)return void(p[r]=e.to)}else if(j===i){if(p[r-1]===e.c1||p[r-2]===e.c1)return void(p[r]=e.to)}else if(j===c){if(T=s[r-1]||"",T.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===d){if(n===e.c1)return void(p[r]=e.to)}else if(j===g){if(n===e.c2&&p[r-1]===e.c1)return void(p[r]=e.to)}else if(j===m){if(T=s[r-1]||"",n===e.c2&&T.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===v){if(p[r+1]===e.c1||p[r+2]===e.c1||p[r+3]===e.c1)return void(p[r]=e.to)}else if(j===y){if(T=s[r+2]||"",T.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===w){if(T=s[r+1]||"",n===e.c1&&T.toLowerCase()===e.c2)return void(p[r]=e.to)}else if(j===x){if(n===e.c1&&p[r+1]===e.c2)return void(p[r]=e.to)}else if(j===b){if(p[r-1]===e.c1||p[r-2]===e.c1||p[r-3]===e.c1)return void(p[r]=e.to)}else if(j===O){if(p[r-1]===e.c1&&p[r+1]===e.c2)return void(p[r]=e.to)}else if(j===k){if(n===e.c1&&p[r-1]===e.c2&&p[r+1]===e.c3)return void(p[r]=e.to)}else if(j===_){if(T=s[r+1]||"",T.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===N){if(p[r+1]===e.c1||p[r+2]===e.c1)return void(p[r]=e.to)}else if(j===P){if(p[r-2]===e.c1&&p[r-1]===e.c2)return void(p[r]=e.to)}else if(j===A){if(p[r-2]===e.c1&&p[r-1]===e.c2&&p[r+1]===e.c3)return void(p[r]=e.to)}else if(j===C){if(p[r+1]===e.c1&&p[r+2]===e.c2)return void(p[r]=e.to)}else if(j===B){if(T=s[r+1]||"",V=s[r+2]||"",T.toLowerCase()===e.c1||V.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===$){if(V=s[r-2]||"",V.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===S){if(T=s[r-1]||"",V=s[r-2]||"",T.toLowerCase()===e.c1||V.toLowerCase()===e.c1)return void(p[r]=e.to)}else if(j===i&&(T=p[r-1]||"",V=p[r-2]||"",T===e.c1||V===e.c1))return void(p[r]=e.to)}else if(0===r&&n===e.c1)return void(p[r]=e.to)}},applyRules:function(e,n,t,o,r){var i;for(i=0;V>i;i++)p.applyRule(T[i],e,o[n],n,t,o,r)},apply:function(e,n,t){for(var o,r=e.length,i=0;2>i;){for(o=0;r>o;o++)t[o]!==!0&&this.applyRules(e[o],o,e,n,i);i++}return n},testSuffixes:function(e){var n;for(n=0;R>n;n++)if(e.match(j[n].regexp))return j[n].pos;return null},getTag:function(n){var o,r,i,a,f,l=s.tag();if(l.norm=n,n.length>1)for(o=null,r=0,i=z.length;i>r;r++)if(0===n.indexOf(z[r]))return l.tag=t.EMOT_TAG,l.blocked=!0,l.confidence=1,l.reason="emoticon",l;return o=e.lexicon[n],o&&"-"!==o?(l.tag=o,l.blocked=o.blocked,l.confidence=1,l.reason="lexicon",l):(a=n.toLowerCase(),f=e.synonym(a),f!==a&&(o=e.lexicon[f])?(l.tag=o,l.confidence=1,l.reason="synonym of lexicon term",l):a.match(/(\w)\1+/g)&&(f=Z(a))?(l.norm=f,o=e.lexicon[f],l.tag=o,l.confidence=.8,l.reason="char streak",l):"string"==typeof n&&n.match(/[A-Z]/g)&&(o=e.lexicon[a],o&&"-"!==o)?(l.tag=o,l.confidence=.75,l.reason="lexicon lowercased",l):(o=p.testSuffixes(n),o?(l.tag=o,l.confidence=.25,l.reason="suffix",l):n.indexOf("-")>-1&&"function"==typeof t.getComposedWordTag?t.getComposedWordTag(n,l):l))},tag:function(e){var n,o,r,i=[],s=[],a=[],f=[],l=e.length,u=0,c=function(e,n,o,r){e="object"==typeof e?e.pos:e,f.push(e+"/"+r),i.push("-"===e?t.DEFAULT_TAG:e),s.push("boolean"==typeof o?o:!1),u+=n};for(o=0;l>o;o++)n=e[o],a[o]=n,n.match(/^[%\+\-\/@]$/g)?c(t.SYM_TAG,1,!0):n.match(/^(\?|\!|\.){1,}$/g)?c(t.PUNC_TAG,1,!0):n.match(/^-?[0-9]+([\.,][0-9]+)?$/g)||n.match(E)||n.match(/^([0-9]{2}|[0-9]{4})s$/g)||n.match(/^[0-9]{2,4}-[0-9]{2,4}$/g)?c(t.NUM_TAG,1,!0):(r=p.getTag(e[o]),c(r.tag,r.confidence,r.blocked,r.reason),a[o]=r.norm);return t.beforeBrill(e,i),p.apply(e,i,s),t.afterBrill(e,i),{tags:i,norms:a,confidence:u/l}}}),e.tag=p.tag}()}("undefined"==typeof exports?this.compendium={}:exports);