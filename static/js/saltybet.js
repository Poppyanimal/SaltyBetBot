let n;const e=new Array(32);function t(n){return e[n]}e.fill(void 0),e.push(void 0,null,!0,!1);let _=e.length;function r(n){const r=t(n);return function(n){n<36||(e[n]=_,_=n)}(n),r}let c=0,o=null;function i(){return null!==o&&o.buffer===n.memory.buffer||(o=new Uint8Array(n.memory.buffer)),o}let a=new TextEncoder("utf-8");const u="function"==typeof a.encodeInto?function(n,e){return a.encodeInto(n,e)}:function(n,e){const t=a.encode(n);return e.set(t),{read:n.length,written:t.length}};function l(n,e,t){if(void 0===t){const t=a.encode(n),_=e(t.length);return i().subarray(_,_+t.length).set(t),c=t.length,_}let _=n.length,r=e(_);const o=i();let l=0;for(;l<_;l++){const e=n.charCodeAt(l);if(e>127)break;o[r+l]=e}if(l!==_){0!==l&&(n=n.slice(l)),r=t(r,_,_=l+3*n.length);const e=i().subarray(r+l,r+_);l+=u(n,e).written}return c=l,r}function b(n){return null==n}let w=null;function g(){return null!==w&&w.buffer===n.memory.buffer||(w=new Int32Array(n.memory.buffer)),w}let f=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function d(n,e){return f.decode(i().subarray(n,n+e))}function s(n){_===e.length&&e.push(e.length+1);const t=_;return _=e[t],e[t]=n,t}f.decode();let m=32;function y(t,_,r){try{n.wasm_bindgen__convert__closures__invoke1_mut_ref__ha7a7a766347b8811(t,_,function(n){if(1==m)throw new Error("out of js stack");return e[--m]=n,m}(r))}finally{e[m++]=void 0}}function h(n,e){return 0===n?t(e):d(n,e)}function v(e){n.__wbindgen_exn_store(s(e))}function p(n,e){return i().subarray(n/1,n/1+e)}(function e(_){let o;void 0===_&&(_=import.meta.url.replace(/\.js$/,"_bg.wasm"));const i={wbg:{}};if(i.wbg.__wbindgen_object_drop_ref=function(n){r(n)},i.wbg.__wbg_sendmessageraw_06db037e50adb455=function(n,e){var t,_=h(n,e);return s((t=_,new Promise((function(n,e){chrome.runtime.sendMessage(null,t,null,(function(t){null!=chrome.runtime.lastError?e(new Error(chrome.runtime.lastError.message)):n(t)}))}))))},i.wbg.__wbindgen_string_get=function(e,_){const r=t(_);var o="string"==typeof r?r:void 0,i=b(o)?0:l(o,n.__wbindgen_malloc,n.__wbindgen_realloc),a=c;g()[e/4+1]=a,g()[e/4+0]=i},i.wbg.__wbg_new_b43fc449db38d3bd=function(n,e){var t=h(n,e);return s(new Error(t))},i.wbg.__wbg_new0_926efe275b9bd771=function(){return s(new Date)},i.wbg.__wbg_toUTCString_c6c53dddfae1eb43=function(n){return s(t(n).toUTCString())},i.wbg.__wbindgen_string_new=function(n,e){return s(d(n,e))},i.wbg.__widl_f_log_1_=function(n){console.log(t(n))},i.wbg.__widl_f_set_timeout_with_callback_and_timeout_and_arguments_0_Window=function(n,e,_){try{return t(n).setTimeout(t(e),_)}catch(n){v(n)}},i.wbg.__wbg_chromeportconnect_5dc6204b52808a38=function(n,e){var t,_=h(n,e);return s((t=_,chrome.runtime.connect(null,{name:t})))},i.wbg.__wbg_onDisconnect_1678887fe804d850=function(n){return s(t(n).onDisconnect)},i.wbg.__wbg_addListener_2ac5cbd510ccd7c6=function(n,e){t(n).addListener(t(e))},i.wbg.__widl_f_set_interval_with_callback_and_timeout_and_arguments_0_Window=function(n,e,_){try{return t(n).setInterval(t(e),_)}catch(n){v(n)}},i.wbg.__wbg_onMessage_39105b92abbad6eb=function(n){return s(t(n).onMessage)},i.wbg.__wbg_new_59cb74e423758ede=function(){return s(new Error)},i.wbg.__wbg_stack_558ba5917b466edd=function(e,_){var r=l(t(_).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),o=c;g()[e/4+1]=o,g()[e/4+0]=r},i.wbg.__wbg_error_4bb6c2a97407129a=function(e,t){var _=h(e,t);0!==e&&n.__wbindgen_free(e,t),console.error(_)},i.wbg.__widl_f_document_Window=function(n){var e=t(n).document;return b(e)?0:s(e)},i.wbg.__widl_f_create_element_Document=function(n,e,_){try{var r=h(e,_);return s(t(n).createElement(r))}catch(n){v(n)}},i.wbg.__widl_f_css_rules_CSSStyleSheet=function(n){try{return s(t(n).cssRules)}catch(n){v(n)}},i.wbg.__widl_f_length_CSSRuleList=function(n){return t(n).length},i.wbg.__widl_f_insert_rule_with_index_CSSStyleSheet=function(n,e,_,r){try{var c=h(e,_);return t(n).insertRule(c,r>>>0)}catch(n){v(n)}},i.wbg.__widl_f_get_CSSRuleList=function(n,e){var _=t(n)[e>>>0];return b(_)?0:s(_)},i.wbg.__widl_f_style_CSSStyleRule=function(n){return s(t(n).style)},i.wbg.__widl_f_set_type_HTMLStyleElement=function(n,e,_){var r=h(e,_);t(n).type=r},i.wbg.__widl_f_head_Document=function(n){var e=t(n).head;return b(e)?0:s(e)},i.wbg.__widl_f_append_child_Node=function(n,e){try{return s(t(n).appendChild(t(e)))}catch(n){v(n)}},i.wbg.__widl_f_sheet_HTMLStyleElement=function(n){var e=t(n).sheet;return b(e)?0:s(e)},i.wbg.__wbindgen_cb_forget=function(n){r(n)},i.wbg.__wbg_new_3a746f2619705add=function(n,e){var t=h(n,e);return s(new Function(t))},i.wbg.__wbg_call_f54d3a6dadb199ca=function(n,e){return s(t(n).call(t(e)))},i.wbg.__wbindgen_jsval_eq=function(n,e){return t(n)===t(e)},i.wbg.__wbg_self_ac379e780a0d8b94=function(n){return s(t(n).self)},i.wbg.__wbg_crypto_1e4302b85d4f64a2=function(n){return s(t(n).crypto)},i.wbg.__wbindgen_is_undefined=function(n){return void 0===t(n)},i.wbg.__wbg_getRandomValues_1b4ba144162a5c9e=function(n){return s(t(n).getRandomValues)},i.wbg.__wbg_require_6461b1e9a0d7c34a=function(n,e){var t=h(n,e);return s(require(t))},i.wbg.__wbg_randomFillSync_1b52c8482374c55b=function(n,e,_){t(n).randomFillSync(p(e,_))},i.wbg.__wbg_getRandomValues_1ef11e888e5228e9=function(n,e,_){t(n).getRandomValues(p(e,_))},i.wbg.__wbg_new_9e4e8c6fadc05c7a=function(n,e,t,_){var r=h(n,e),c=h(t,_);return s(new RegExp(r,c))},i.wbg.__widl_f_text_content_Node=function(e,_){var r=t(_).textContent,o=b(r)?0:l(r,n.__wbindgen_malloc,n.__wbindgen_realloc),i=c;g()[e/4+1]=i,g()[e/4+0]=o},i.wbg.__widl_f_query_selector_Document=function(n,e,_){try{var r=h(e,_),c=t(n).querySelector(r);return b(c)?0:s(c)}catch(n){v(n)}},i.wbg.__widl_f_query_selector_all_Document=function(n,e,_){try{var r=h(e,_);return s(t(n).querySelectorAll(r))}catch(n){v(n)}},i.wbg.__widl_f_location_Window=function(n){return s(t(n).location)},i.wbg.__widl_f_reload_Location=function(n){try{t(n).reload()}catch(n){v(n)}},i.wbg.__wbg_removeListener_f1deaca333139c3d=function(n,e){t(n).removeListener(t(e))},i.wbg.__wbindgen_cb_drop=function(n){const e=r(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},i.wbg.__widl_f_get_NodeList=function(n,e){var _=t(n)[e>>>0];return b(_)?0:s(_)},i.wbg.__wbg_decimal_38874f68d559be18=function(e,t){var _=l(t.toLocaleString("en-US",{style:"decimal",maximumFractionDigits:2}),n.__wbindgen_malloc,n.__wbindgen_realloc),r=c;g()[e/4+1]=r,g()[e/4+0]=_},i.wbg.__wbg_replace_8f316f864d6bf31e=function(n,e,_,r){var c=h(_,r);return s(t(n).replace(t(e),c))},i.wbg.__wbg_exec_641c92568d076518=function(n,e,_){var r=h(e,_),c=t(n).exec(r);return b(c)?0:s(c)},i.wbg.__wbg_length_1881309ca6f2ebd6=function(n){return t(n).length},i.wbg.__wbg_get_bf32bf170c3d4d9a=function(n,e){return s(t(n)[e>>>0])},i.wbg.__wbg_setlastindex_636403a6b8935149=function(n,e){t(n).lastIndex=e>>>0},i.wbg.__widl_instanceof_HTMLInputElement=function(n){return t(n)instanceof HTMLInputElement},i.wbg.__widl_f_value_HTMLInputElement=function(e,_){var r=l(t(_).value,n.__wbindgen_malloc,n.__wbindgen_realloc),o=c;g()[e/4+1]=o,g()[e/4+0]=r},i.wbg.__widl_f_set_value_HTMLInputElement=function(n,e,_){var r=h(e,_);t(n).value=r},i.wbg.__widl_f_click_HTMLElement=function(n){t(n).click()},i.wbg.__widl_f_length_NodeList=function(n){return t(n).length},i.wbg.__widl_f_class_list_Element=function(n){return s(t(n).classList)},i.wbg.__widl_f_add_1_DOMTokenList=function(n,e,_){try{var r=h(e,_);t(n).add(r)}catch(n){v(n)}},i.wbg.__widl_instanceof_HTMLElement=function(n){return t(n)instanceof HTMLElement},i.wbg.__widl_f_style_HTMLElement=function(n){return s(t(n).style)},i.wbg.__wbindgen_object_clone_ref=function(n){return s(t(n))},i.wbg.__widl_f_remove_child_Node=function(n,e){try{return s(t(n).removeChild(t(e)))}catch(n){v(n)}},i.wbg.__wbg_removeevent_73b2322cc4310f4b=function(n,e,_,r){var c,o,i,a=h(e,_);c=t(n),o=a,i=t(r),c.removeEventListener(o,i,!1)},i.wbg.__widl_f_remove_property_CSSStyleDeclaration=function(e,_,r,o){try{var i=h(r,o),a=l(t(_).removeProperty(i),n.__wbindgen_malloc,n.__wbindgen_realloc),u=c;g()[e/4+1]=u,g()[e/4+0]=a}catch(n){v(n)}},i.wbg.__widl_f_set_property_with_priority_CSSStyleDeclaration=function(n,e,_,r,c,o,i){try{var a=h(e,_),u=h(r,c),l=h(o,i);t(n).setProperty(a,u,l)}catch(n){v(n)}},i.wbg.__widl_f_get_property_value_CSSStyleDeclaration=function(e,_,r,o){try{var i=h(r,o),a=l(t(_).getPropertyValue(i),n.__wbindgen_malloc,n.__wbindgen_realloc),u=c;g()[e/4+1]=u,g()[e/4+0]=a}catch(n){v(n)}},i.wbg.__wbg_formatfloat_805fb4692319aae4=function(e,t){var _=l(t.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}),n.__wbindgen_malloc,n.__wbindgen_realloc),r=c;g()[e/4+1]=r,g()[e/4+0]=_},i.wbg.__widl_f_set_text_content_Node=function(n,e,_){var r=h(e,_);t(n).textContent=r},i.wbg.__wbg_getextensionurl_d188f8a1261b87c0=function(e,t,_){var r,o=h(t,_),i=l((r=o,chrome.runtime.getURL(r)),n.__wbindgen_malloc,n.__wbindgen_realloc),a=c;g()[e/4+1]=a,g()[e/4+0]=i},i.wbg.__widl_f_set_attribute_Element=function(n,e,_,r,c){try{var o=h(e,_),i=h(r,c);t(n).setAttribute(o,i)}catch(n){v(n)}},i.wbg.__widl_f_parent_node_Node=function(n){var e=t(n).parentNode;return b(e)?0:s(e)},i.wbg.__wbg_addevent_5d5369f0d7dd3732=function(n,e,_,r){var c,o,i,a=h(e,_);c=t(n),o=a,i=t(r),c.addEventListener(o,i,{capture:!1,once:!1,passive:!0})},i.wbg.__wbindgen_throw=function(n,e){throw new Error(d(n,e))},i.wbg.__wbindgen_rethrow=function(n){throw r(n)},i.wbg.__wbg_then_79de0b6809569306=function(n,e){return s(t(n).then(t(e)))},i.wbg.__wbg_resolve_4e9c46f7e8321315=function(n){return s(Promise.resolve(t(n)))},i.wbg.__wbg_then_5a9068d7b674caf9=function(n,e,_){return s(t(n).then(t(e),t(_)))},i.wbg.__wbg_globalThis_1c2aa6db3ecb073e=function(){try{return s(globalThis.globalThis)}catch(n){v(n)}},i.wbg.__wbg_self_e5cdcdef79894248=function(){try{return s(self.self)}catch(n){v(n)}},i.wbg.__wbg_window_44ec8ac43884a4cf=function(){try{return s(window.window)}catch(n){v(n)}},i.wbg.__wbg_global_c9abcb94a14733fe=function(){try{return s(global.global)}catch(n){v(n)}},i.wbg.__wbg_newnoargs_a9cd98b36c38f53e=function(n,e){var t=h(n,e);return s(new Function(t))},i.wbg.__wbg_call_222be890f6f564bb=function(n,e){try{return s(t(n).call(t(e)))}catch(n){v(n)}},i.wbg.__widl_instanceof_Window=function(n){return t(n)instanceof Window},i.wbg.__wbindgen_closure_wrapper718=function(e,t,_){const r={a:e,b:t,cnt:1},c=e=>{r.cnt++;const t=r.a;r.a=0;try{return y(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(43)(t,r.b):r.a=t}};return c.original=r,s(c)},i.wbg.__wbindgen_closure_wrapper206=function(e,t,_){const r={a:e,b:t,cnt:1},o=(e,t)=>{r.cnt++;const _=r.a;r.a=0;try{return function(e,t,_,r){var o=l(_,n.__wbindgen_malloc,n.__wbindgen_realloc),i=c;n.wasm_bindgen__convert__closures__invoke2_mut__h95182eb8c5f90b31(e,t,o,i,s(r))}(_,r.b,e,t)}finally{0==--r.cnt?n.__wbindgen_export_2.get(43)(_,r.b):r.a=_}};return o.original=r,s(o)},i.wbg.__wbindgen_closure_wrapper788=function(e,t,_){const r={a:e,b:t,cnt:1},c=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__h19967a6884e2c850(e,t,s(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(43)(t,r.b):r.a=t}};return c.original=r,s(c)},i.wbg.__wbindgen_closure_wrapper189=function(e,t,_){const r={a:e,b:t,cnt:1},c=()=>{r.cnt++;const e=r.a;r.a=0;try{return function(e,t){n.wasm_bindgen__convert__closures__invoke0_mut__h11f1efe84665832c(e,t)}(e,r.b)}finally{0==--r.cnt?n.__wbindgen_export_2.get(43)(e,r.b):r.a=e}};return c.original=r,s(c)},i.wbg.__wbindgen_closure_wrapper198=function(e,t,_){const r={a:e,b:t,cnt:1},c=()=>{r.cnt++;const e=r.a;r.a=0;try{return function(e,t){n.wasm_bindgen__convert__closures__invoke0_mut__h11f1efe84665832c(e,t)}(e,r.b)}finally{0==--r.cnt?n.__wbindgen_export_2.get(43)(e,r.b):r.a=e}};return c.original=r,s(c)},i.wbg.__wbindgen_closure_wrapper802=function(e,t,_){const r={a:e,b:t,cnt:1},c=e=>{r.cnt++;const t=r.a;r.a=0;try{return function(e,t,_){n.wasm_bindgen__convert__closures__invoke1_mut__h19967a6884e2c850(e,t,s(_))}(t,r.b,e)}finally{0==--r.cnt?n.__wbindgen_export_2.get(43)(t,r.b):r.a=t}};return c.original=r,s(c)},"function"==typeof URL&&_ instanceof URL||"string"==typeof _||"function"==typeof Request&&_ instanceof Request){const n=fetch(_);o="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(n,i).catch(e=>n.then(n=>{if("application/wasm"!=n.headers.get("Content-Type"))return console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e),n.arrayBuffer();throw e}).then(n=>WebAssembly.instantiate(n,i))):n.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,i))}else o=WebAssembly.instantiate(_,i).then(n=>n instanceof WebAssembly.Instance?{instance:n,module:_}:n);return o.then(({instance:t,module:_})=>(n=t.exports,e.__wbindgen_wasm_module=_,n.__wbindgen_start(),n))})(chrome.runtime.getURL("js/saltybet.wasm")).catch(console.error);
//# sourceMappingURL=saltybet.js.map
