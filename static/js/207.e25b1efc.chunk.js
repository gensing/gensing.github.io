(this["webpackJsonpgs-pages"]=this["webpackJsonpgs-pages"]||[]).push([[207],{289:function(e,t){!function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,r=t.inside.interpolation,a=r.inside["interpolation-punctuation"],i=r.pattern.source;function s(t,r){if(e.languages[t])return{pattern:RegExp("((?:"+r+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function o(t,n,r){var a={code:t,grammar:n,language:r};return e.hooks.run("before-tokenize",a),a.tokens=e.tokenize(a.code,a.grammar),e.hooks.run("after-tokenize",a),a.tokens}function p(t){var n={};n["interpolation-punctuation"]=a;var i=e.tokenize(t,n);if(3===i.length){var s=[1,1];s.push.apply(s,o(i[1],e.languages.javascript,"javascript")),i.splice.apply(i,s)}return new e.Token("interpolation",i,r.alias,t)}function l(t,n,r){var a=e.tokenize(t,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),s=0,l={},g=o(a.map((function(e){if("string"==typeof e)return e;for(var n,a=e.content;-1!==t.indexOf((i=s++,n="___"+r.toUpperCase()+"_"+i+"___")););return l[n]=a,n;var i})).join(""),n,r),u=Object.keys(l);return s=0,function e(t){for(var n=0;n<t.length;n++){if(s>=u.length)return;var r=t[n];if("string"==typeof r||"string"==typeof r.content){var a=u[s],i="string"==typeof r?r:r.content,o=i.indexOf(a);if(-1!==o){++s;var g=i.substring(0,o),c=p(l[a]),f=i.substring(o+a.length),y=[];if(g&&y.push(g),y.push(c),f){var v=[f];e(v),y.push.apply(y,v)}"string"==typeof r?(t.splice.apply(t,[n,1].concat(y)),n+=y.length-1):r.content=y}}else{var d=r.content;Array.isArray(d)?e(d):e([d])}}}(g),new e.Token(r,g,"language-"+r,t)}e.languages.javascript["template-string"]=[s("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),s("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),s("svg","\\bsvg"),s("markdown","\\b(?:md|markdown)"),s("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),t].filter(Boolean);var g={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function u(e){return"string"==typeof e?e:Array.isArray(e)?e.map(u).join(""):u(e.content)}e.hooks.add("after-tokenize",(function(t){t.language in g&&function t(n){for(var r=0,a=n.length;r<a;r++){var i=n[r];if("string"!=typeof i){var s=i.content;if(Array.isArray(s))if("template-string"===i.type){var o=s[1];if(3===s.length&&"string"!=typeof o&&"embedded-code"===o.type){var p=u(o),g=o.alias,c=Array.isArray(g)?g[0]:g,f=e.languages[c];if(!f)continue;s[1]=l(p,f,c)}}else t(s);else"string"!=typeof s&&t([s])}}}(t.tokens)}))}(Prism)}}]);
//# sourceMappingURL=207.e25b1efc.chunk.js.map