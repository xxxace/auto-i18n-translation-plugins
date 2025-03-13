import{translate as n}from"@vitalets/google-translate-api";import t from"tunnel";import e from"axios";import r from"crypto-js";import*as o from"@babel/types";import a from"@babel/types";import i from"node:fs";import c from"node:path";var l=function(n,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},l(n,t)};function s(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}l(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}var u,f,g=function(){return g=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},g.apply(this,arguments)};function p(n,t,e,r){return new(e||(e=Promise))((function(o,a){function i(n){try{l(r.next(n))}catch(n){a(n)}}function c(n){try{l(r.throw(n))}catch(n){a(n)}}function l(n){var t;n.done?o(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(i,c)}l((r=r.apply(n,t||[])).next())}))}function h(n,t){var e,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(e=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=t.call(n,i)}catch(n){c=[6,n],r=0}finally{e=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}function d(n,t,e){if(e||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return n.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError,function(n){n.ZH="zh-cn",n.EN="en"}(u||(u={})),function(n){n.google="Google",n.youdao="Youdao"}(f||(f={}));var y,v=new Map([["有道翻译","请前往有道翻译官方申请翻译key，默认会有50的额度，并请检查额度是否充足。"]]),b=function(){function n(n,t,e){this.queue=[],this.isRunning=!1,this.fn=n,this.delay=t,this.timeout=e}return n.prototype.execute=function(){for(var n=this,t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new Promise((function(e,r){n.queue.push({args:t,resolve:e,reject:r}),n.run(),n.timeout&&setTimeout((function(){r(new Error("IntervalQueue timeout"))}),n.timeout)}))},n.prototype.wait=function(){return p(this,arguments,void 0,(function(n){return void 0===n&&(n=this.delay),h(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t){return setTimeout(t,n)}))];case 1:return t.sent(),[2]}}))}))},n.prototype.run=function(){return p(this,void 0,void 0,(function(){var n,t,e,r,o,a;return h(this,(function(i){switch(i.label){case 0:if(this.isRunning)return[2];i.label=1;case 1:if(!(n=this.queue.shift()))return[3,7];t=n.args,e=n.resolve,r=n.reject,this.isRunning=!0,i.label=2;case 2:return i.trys.push([2,4,,5]),o=e,[4,this.fn.apply(this,t)];case 3:return o.apply(void 0,[i.sent()]),[3,5];case 4:return a=i.sent(),r(a),[3,5];case 5:return[4,this.wait()];case 6:return i.sent(),[3,1];case 7:return this.isRunning=!1,[2]}}))}))},n}(),O=function(){function n(n){var t,e,r;this.option=n,this.option.interval&&(this.option.fetchMethod=(t=this.option.fetchMethod,e=this.option.interval,r=new b(t.bind(null),e),function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return r.execute.apply(r,n)}))}return n.prototype.getErrorMessage=function(n){return n instanceof Error?n.message:String(n)},n.prototype.translate=function(n,t,e){return p(this,void 0,void 0,(function(){var r,o,a;return h(this,(function(i){switch(i.label){case 0:r="",i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.option.fetchMethod(n,t,e)];case 2:return r=i.sent(),[3,4];case 3:return o=i.sent(),a=this.option.name,console.error("翻译api".concat(a?"【".concat(a,"】"):"","请求异常：").concat(this.getErrorMessage(o))+"\n"+v&&v.has(a)&&v.get(a)),[3,4];case 4:return[2,r]}}))}))},n}(),m=function(e){function r(r){var o=e.call(this,{name:"Google翻译",fetchMethod:function(e,a,i){return p(o,void 0,void 0,(function(){return h(this,(function(o){switch(o.label){case 0:return[4,n(e,{from:a,to:i,fetchOptions:{agent:t.httpsOverHttp({proxy:r.proxyOption})}})];case 1:return[2,o.sent().text||""]}}))}))}})||this;return o}return s(r,e),r}(O),w=function(n){function t(t){var o,a=n.call(this,{name:"有道翻译",fetchMethod:function(n,o,i){return p(a,void 0,void 0,(function(){var a,c,l,s,u,f,g;return h(this,(function(p){switch(p.label){case 0:return a=(new Date).getTime(),c=Math.round((new Date).getTime()/1e3),l=t.appId+this.truncate(n)+a+c+t.appKey,s=r.SHA256(l).toString(r.enc.Hex),u={q:n,appKey:t.appId,salt:a,from:this.getTranslateKey(o),to:this.getTranslateKey(i),sign:s,signType:"v3",curtime:c},[4,e.post("https://openapi.youdao.com/api",u,{headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"},proxy:t.proxy})];case 1:return f=p.sent(),[2,(null===(g=f.data.translation)||void 0===g?void 0:g[0])||""]}}))}))},interval:null!==(o=t.interval)&&void 0!==o?o:1e3})||this;return a.YOUDAO_TRANSLATE_KEY_CONVERT_MAP={"zh-cn":"zh-CHS","zh-tw":"zh-CHT"},a}return s(t,n),t.prototype.truncate=function(n){if(n.length<=20)return n;var t=n.length;return n.substring(0,10)+t+n.substring(t-10)},t.prototype.getTranslateKey=function(n){return this.YOUDAO_TRANSLATE_KEY_CONVERT_MAP[n]||n},t}(O),S=Object.freeze({__proto__:null,GoogleTranslator:m,Translator:O,YoudaoTranslator:w}),j=function(){function n(){}return n.originLang="",n}(),x=((y={})[u.ZH]=/[\u4e00-\u9fff]/,y[u.EN]=/[a-zA-Z]/,y);function E(n){var t=j.originLang;return x[t].test(n)}function L(n,t){for(var e=0;e<t.length;e++){if(("string"==typeof t[e]?new RegExp(t[e]):t[e]).test(n))return!0}return!1}function N(n){var t="";return a.isCallExpression(n)&&(t=a.isMemberExpression(n.callee)?function n(t,e){return e+="."+t.property.name,a.isMemberExpression(t.object)?n(t.object,e):e=t.object.name+e}(n.callee,""):n.callee.name||""),t}function T(n,t){var e=n.match(t);return e?e.filter((function(n,t){return e.indexOf(n)===t})):[]}function _(n,t,e){var r=C.namespace,o=n.trim(),i=o.replace(/'/g,'"').replace(/(\n)/g,"\\n"),c=e||k(i);if(t){var l=a.stringLiteral(o);return l.extra={raw:"'".concat(i,"'"),rawValue:o},a.callExpression(a.identifier(C.translateKey),[a.stringLiteral(c),l,a.stringLiteral(r)])}return"".concat(C.translateKey,"('").concat(c,"','").concat(i,"','").concat(r,"')")}function k(n){for(var t=0,e=0;e<n.length;e++){t=(t<<5)-t+n.charCodeAt(e),t|=0}return Math.abs(t).toString(36)+n.length.toString(36)}var P=function(n){return n.replace(/\\u[\dA-Fa-f]{4}/g,(function(n){return String.fromCharCode(parseInt(n.replace(/\\u/g,""),16))}))};function J(n,t){if(void 0===t&&(t=new WeakMap),"object"!=typeof n||null===n)return n;if(t.has(n))return t.get(n);if(n instanceof Date)return new Date(n);if(n instanceof RegExp)return new RegExp(n.source,n.flags);var e=Array.isArray(n)?[]:{};t.set(n,e);for(var r=0,o=d(d([],Object.keys(n),!0),Object.getOwnPropertySymbols(n).filter((function(t){return n.propertyIsEnumerable(t)})),!0);r<o.length;r++){var a=o[r];e[a]=J(n[a],t)}return e}var A=Object.freeze({__proto__:null,checkAgainstRegexArray:L,cloneDeep:J,createI18nTranslator:_,extractCnStrings:function(n){return T(n,/[^\x00-\xff]+/g)},extractFunctionName:N,extractStrings:T,generateId:k,hasOriginSymbols:E,removeComments:function(n){return n=(n=(n=n.replace(/\/\/.*?\n/g,"")).replace(/\/\*[\s\S]*?\*\//g,"")).replace(/<!--[\s\S]*?-->/g,"")},truncate:function(n){if(n.length<=20)return n;var t=n.length;return n.substring(0,10)+t+n.substring(t-10)},unicodeToChinese:P}),K={translateKey:"$t",excludedCall:["$i8n","console.log","$t","require","$$i8n"],excludedPattern:[/\.\w+$/],excludedPath:["node_modules"],includePath:[/src\//,/src\\/],globalPath:"./lang",distPath:"",distKey:"index",originLang:u.ZH,targetLangList:["en"],langKey:[],namespace:"lang",buildToDist:!1,translator:new m({proxyOption:{port:7890,host:"127.0.0.1",headers:{"User-Agent":"Node"}}}),translatorOption:void 0},C=g({},K);function z(n){C=g(g({},K),function(n){var t=J(n);return t.translator=null==n?void 0:n.translator,t.translator||(t.translator=t.translatorOption?new O(t.translatorOption):void 0),t.translator||delete t.translator,t}(n)),C.langKey=d([C.originLang],C.targetLangList,!0)}function F(){return C.translateKey?C.namespace?C.buildToDist&&!C.distKey?(console.log("❌请配置打包后生成文件的主文件名称"),!1):C.buildToDist&&!C.distPath?(console.log("❌请配置打包后生成文件的位置"),!1):C.originLang?!(!C.targetLangList||!C.targetLangList.length)||(console.error("❌请配置目标翻译语言数组"),!1):(console.error("❌请配置来源语言"),!1):(console.error("❌请配置命名空间"),!1):(console.error("❌请配置翻译调用函数"),!1)}var M={tab:{char:"\t",size:1},space:{char:" ",size:4}},R={type:"tab"},I=[],D=function(n){return"\\".concat(I.push(n),"\\")},$=function(n,t){return I[+t-1]},H=function(n,t){return new Array(n+1).join(t)};function U(n,t){void 0===t&&(t=R);var e="string"==typeof n?n:JSON.stringify(n),r=M[t.type];if(!r)throw new Error('Unrecognized indent type: "'.concat(t.type,'"'));return function(n,t){I=[];var e="",r=0;n=n.replace(/\\./g,D).replace(/(".*?"|'.*?')/g,D).replace(/\s+/g,"");for(var o=0;o<n.length;o++){var a=n.charAt(o);switch(a){case"{":case"[":e+=a+"\n"+H(++r,t);break;case"}":case"]":e+="\n"+H(--r,t)+a;break;case",":e+=",\n"+H(r,t);break;case":":e+=": ";break;default:e+=a}}return e.replace(/\[[\d,\s]+?\]/g,(function(n){return n.replace(/\s/g,"")})).replace(/\\(\d+)\\/g,$).replace(/\\(\d+)\\/g,$)}(e,H(t.size||r.size,r.char))}function W(){var n=C.translateKey,t=C.namespace,e=C.originLang,r=d(d([],C.targetLangList,!0),[e],!1).map((function(n){return n.replace("-","")})).map((function(n){return"'".concat(n,"': window?.").concat(t,"?.").concat(n," || window._getJSONKey('").concat(n,"', langJSON)")})).join(",\n"),o="\n    // 导入国际化JSON文件\n    import langJSON from './index.json'\n    (function () {\n    // 定义翻译函数\n    let ".concat(n," = function (key, val, nameSpace) {\n      // 获取指定命名空间下的语言包\n      const langPackage = ").concat(n,"[nameSpace];\n      // 返回翻译结果，如果不存在则返回默认值\n      return (langPackage || {})[key] || val;\n    };\n    // 定义简单翻译函数，直接返回传入的值\n    let $").concat(n," = function (val) {\n      return val;\n    };\n    // 定义设置语言包的方法\n    ").concat(n,".locale = function (locale, nameSpace) {\n      // 将指定命名空间下的语言包设置为传入的locale\n      ").concat(n,"[nameSpace] = locale || {};\n    };\n    // 将翻译函数挂载到window对象上，如果已经存在则使用已有的\n    window.").concat(n," = window.").concat(n," || ").concat(n,";\n    // 将简单翻译函数挂载到window对象上\n    window.$").concat(n," = $").concat(n,";\n    // 定义从JSON文件中获取指定键的语言对象的方法\n    window._getJSONKey = function (key, insertJSONObj = undefined) {\n        // 获取JSON对象\n        const JSONObj = insertJSONObj;\n        // 初始化语言对象\n        const langObj = {};\n        // 遍历JSON对象的所有键\n        Object.keys(JSONObj).forEach((value) => {\n            // 将每个语言的对应键值添加到语言对象中\n            langObj[value] = JSONObj[value][key];\n        });\n        // 返回语言对象\n        return langObj;\n    };\n    })();\n    // 定义语言映射对象\n    const langMap = {\n        ").concat(r,"\n    };\n    // 从本地存储中获取当前语言，如果不存在则使用源语言\n    const lang = window.localStorage.getItem('").concat(t,"') || '").concat(e.replace("-",""),"';\n    // 根据当前语言设置翻译函数的语言包\n    window.").concat(n,".locale(langMap[lang], '").concat(t,"');\n  "),a=c.join(C.globalPath,"index.js"),l=!0;i.existsSync(a)&&(l=k(o)!==k(i.readFileSync(a,"utf-8")));l&&i.writeFileSync(a,o)}function Y(){var n=c.join(C.globalPath,"index.json");i.existsSync(n)||i.writeFileSync(n,JSON.stringify({}))}function q(){var n=c.join(C.globalPath,"index.json");try{return i.readFileSync(n,"utf-8")}catch(n){return"ENOENT"===n.code?console.log("❌读取JSON配置文件异常，文件不存在"):console.log("❌读取JSON配置文件异常，无法读取文件"),JSON.stringify({})}}function G(n,t){void 0===t&&(t=void 0);var e=t||JSON.parse(q()),r={};return Object.keys(e).forEach((function(t){r[t]=e[t][n]})),r}function X(n){var t=c.join(C.globalPath,"index.json"),e=U(n);i.existsSync(t)?i.writeFileSync(t,e):console.log("❌JSON配置文件写入异常，文件不存在")}var Z=Object.freeze({__proto__:null,buildSetLangConfigToIndexFile:function(){if(C.buildToDist){var n={};C.langKey.forEach((function(t){n[t]=G(t)})),i.existsSync(C.distPath)&&i.readdir(C.distPath,(function(t,e){t?console.error("❌构建文件夹为空，翻译配置无法写入"):e.forEach((function(t){if(t.startsWith(C.distKey)&&t.endsWith(".js")){var e=c.join(C.distPath,t);i.readFile(e,"utf-8",(function(t,r){if(t)return console.log(e),void console.error("❌构建主文件不存在，翻译配置无法写入");var o="";Object.keys(n).forEach((function(t){o+="window['".concat(C.namespace,"']['").concat(t,"']=").concat(JSON.stringify(n[t]),";")}));try{i.writeFileSync(e,"window['".concat(C.namespace,"']={};").concat(o)+r),console.info("恭喜：翻译配置写入构建主文件成功🌟🌟🌟")}catch(t){console.error("翻译配置写入构建主文件失败:",t)}}))}}))}))}},getLangObjByJSONFileWithLangKey:G,getLangTranslateJSONFile:q,initLangFile:function(){i.existsSync(C.globalPath)||i.mkdirSync(C.globalPath),Y(),W()},initLangTranslateJSONFile:Y,initTranslateBasicFnFile:W,setLangTranslateJSONFile:X}),V="\n┇┇┇\n",B=/\n┇ *┇ *┇\n/,Q={};function nn(n,t){Q[n]||(Q[n]=t)}function tn(){return Q}function en(n,t,e){return p(this,void 0,void 0,(function(){var r,o,a,i,c,l;return h(this,(function(s){switch(s.label){case 0:return r={},Object.keys(n).forEach((function(e){t[e]||(r[e]=n[e])})),Object.values(r).length?(o=Object.values(r).join(V),console.info("进入新增语言补全翻译..."),[4,C.translator.translate(o,C.originLang,e)]):[2];case 1:if(a=s.sent(),(i=a.split(B).map((function(n){return n.trim()}))).length!==Object.values(n).length)return console.error("翻译异常，翻译结果缺失❌"),[2];c=i,console.info("翻译成功⭐️⭐️⭐️"),Object.keys(r).forEach((function(n,e){t[n]=c[e]})),console.log("开始写入JSON配置文件..."),l=JSON.parse(q()),Object.keys(r).forEach((function(n){l[n][e]=t[n]}));try{X(l),console.info("JSON配置文件写入成功⭐️⭐️⭐️")}catch(n){console.error("❌JSON配置文件写入失败"+n)}return console.info("新增语言翻译补全成功⭐️⭐️⭐️"),[2]}}))}))}var rn=Object.freeze({__proto__:null,SEPARATOR:V,SPLIT_SEPARATOR_REGEX:B,autoTranslate:function(){return p(this,void 0,void 0,(function(){var n,t,e,r,o,a,i,c,l,s,u,f;return h(this,(function(g){switch(g.label){case 0:if(n={},C.langKey.forEach((function(t){n[t]=G(t)})),t=JSON.parse(JSON.stringify(tn())),e={},Object.keys(t).forEach((function(r){n[C.originLang][r]||(e[r]=t[r])})),0===Object.keys(e).length)return console.info("✅ 当前没有需要翻译的新内容"),[2];r={},o=0,g.label=1;case 1:if(!(o<C.langKey.length))return[3,4];if(a=C.langKey[o],0===o)return r[C.originLang]=Object.values(e),[3,3];for(console.info("开始自动翻译..."),i=function(n,t){void 0===t&&(t=4500);for(var e=V.length,r=[],o=[],a=0,i=function(){if(o.length>0){var n=o.join(V).length;n>t&&console.warn("缓冲区提交异常：生成块长度 ".concat(n," 超过限制")),r.push(o.join(V)),o=[],a=0}},c=0,l=n;c<l.length;c++){var s=l[c],u=s.length+(o.length>0?e:0);s.length>t?(o.length>0&&i(),s.length>1.5*t&&console.warn("超长文本告警：检测到长度 ".concat(s.length," 字符的文本项，可能影响翻译质量")),r.push(s)):(a+u>t&&i(),a+=u,o.push(s))}return i(),r}(Object.values(e)),c=[],l=0;l<i.length;l++)c.push(C.translator.translate(i[l],C.originLang,C.langKey[o]));return[4,Promise.all(c)];case 2:if(s=g.sent(),(u=s.map((function(n){return n.split(B).map((function(n){return n.trim()}))})).flat()).length!==Object.keys(e).length)return console.error("❌ 使用付费翻译时，请检查翻译API额度是否充足，或是否已申请对应翻译API使用权限（如使用有道翻译）"),console.error("❌ 翻译结果不完整\n                预期数量: ".concat(Object.keys(e).length,"\n                实际数量: ").concat(u.length,"\n                样例数据: ").concat(JSON.stringify(u.slice(0,3)))),[2];r[a]=u,console.info("✅ ".concat(a," 翻译完成")),g.label=3;case 3:return o++,[3,1];case 4:Object.keys(e).forEach((function(t,e){C.langKey.forEach((function(o){n[o][t]=r[o][e]}))})),console.log("📄 构建配置文件数据结构..."),f={},Object.keys(n[C.originLang]).forEach((function(t){f[t]={},C.langKey.forEach((function(e){f[t][e]=n[e][t]}))}));try{X(f),console.info("🎉 多语言配置文件已成功更新")}catch(n){console.error("❌ 配置文件写入失败，原因:",n)}return[2]}}))}))},completionTranslateAndWriteConfigFile:en,getLangObj:tn,initLangObj:function(n){Object.keys(Q)||(Q=n)},get langObj(){return Q},languageConfigCompletion:function(n){var t=this;if(Object.keys(n)){var e=[],r=JSON.parse(q());C.targetLangList.forEach((function(n){var t=G(n,r);e.push({key:n,curLangObj:t})})),e.forEach((function(e){return p(t,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return[4,en(n,e.curLangObj,e.key)];case 1:return t.sent(),[2]}}))}))}))}},setLangObj:nn});function on(n){var t=n.node,e=n.parent,r=t.value;if(C.originLang.includes("zh-cn")||"zh-cn"===C.originLang)try{r=P(r)}catch(n){console.log("转换异常")}if(E(r)&&C.excludedPattern.length&&!L(r,d([],C.excludedPattern,!0))){var a=N(e);if(o.isImportDeclaration(e)||e.key===t||o.isCallExpression(e)&&a&&C.excludedCall.includes(a))return;var i=void 0;if(o.isJSXAttribute(e)){var c=_(r,!0);i=o.jSXExpressionContainer(c)}else i=_(r,!0);n.replaceWith(i)}}function an(n){var t,e,r=n.node;if(r.callee.name===C.translateKey){var o=r.arguments||[],i=(null===(t=o[0])||void 0===t?void 0:t.value)||"",c=(null===(e=o[1])||void 0===e?void 0:e.value)||"";i&&c&&a.isStringLiteral(o[1])&&nn(i,c)}}function cn(n){var t=n.node,e=n.parent;if(t.value){var r=t.value.raw||t.value.cooked;if(C.originLang.includes("zh-cn")||"zh-cn"===C.originLang)try{r=P(r)}catch(n){console.log("转换异常")}if(r&&E(r)&&C.excludedPattern.length&&!L(r,d([],C.excludedPattern,!0))){var o=N(e);if(a.isCallExpression(e)&&o&&C.excludedCall.includes(o))return;var i=_(r);t.value.raw=t.value.cooked="${".concat(i,"}");var c=k(r);c&&r&&nn(c,r)}}}function ln(n){console.log("jsx text");var t=n.node.value;if(C.originLang.includes("zh-cn")||"zh-cn"===C.originLang)try{t=P(t)}catch(n){console.log("转换异常")}if(E(t)&&C.excludedPattern.length&&!L(t,d([],C.excludedPattern,!0))){var e=_(t,!0),r=o.jSXExpressionContainer(e);n.replaceWith(r)}}var sn=Object.freeze({__proto__:null,default:function(){return{visitor:{StringLiteral:on,JSXText:ln,TemplateElement:cn,CallExpression:an}}}});export{j as FunctionFactoryOption,m as GoogleTranslator,O as Translator,w as YoudaoTranslator,A as baseUtils,F as checkOption,Z as fileUtils,sn as filter,z as initOption,C as option,rn as translateUtils,S as translator};
//# sourceMappingURL=index.mjs.map
