(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[12],{333:function(e,a,t){"use strict";t.d(a,"h",(function(){return T})),t.d(a,"c",(function(){return x})),t.d(a,"i",(function(){return w})),t.d(a,"l",(function(){return C})),t.d(a,"d",(function(){return _})),t.d(a,"n",(function(){return q})),t.d(a,"g",(function(){return I})),t.d(a,"b",(function(){return N})),t.d(a,"k",(function(){return V})),t.d(a,"m",(function(){return Y})),t.d(a,"e",(function(){return L})),t.d(a,"j",(function(){return D})),t.d(a,"f",(function(){return A})),t.d(a,"a",(function(){return S})),t.d(a,"o",(function(){return M}));var n=t(0),r=t.n(n),l=t(693),i=t(689),c=t(454),s=t(684),o=t(683),u=t(450),d=t(685),m=t(51),p=t(312),h=t(611),v=t(54),b=t.n(v),f=(t(342),l.a.TextArea),g=(l.a.Group,i.a.RangePicker),y=c.a.Option,k=s.a.TreeNode,E=function(){},j="YYYY-MM-DD",O="YYYY-MM-DD h:mm",T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,i=e.onChange,c=e.placeholder,s=e.addonBefore,u=e.name,d=e.label,m=e.onBlurFun,p=e.extra,h=(e.addonAfter,e.suffix),v=e.onEnter,b=e.disabled,f=e.inpuType,g=e.others,y=void 0===g?{}:g,k=e.style,j=e.className,O=void 0===j?"":j,T=e.maxLength,x=void 0===T?10:T,w=c||"\u8bf7\u8f93\u5165".concat(d),C=i||E,_=v||E,q=n?[{validator:n}]:[{required:t,message:"\u8bf7\u8f93\u5165".concat(d)}];return r.a.createElement(o.a.Item,Object.assign({key:u,label:d,name:u,required:t,initialValue:a[u],extra:p,rules:q},y),r.a.createElement(l.a,{addonBefore:s,disabled:b,type:f,onBlur:m,allowClear:!0,onPressEnter:_,style:k,suffix:h,maxLength:x,className:O,onChange:C,placeholder:w}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.name,l=e.label;return r.a.createElement(o.a.Item,{key:n,label:l,required:t,initialValue:a[n]},a[n])},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,i=e.placeholder,c=e.name,s=e.label,u=e.onBlurFun,d=e.onEnter,m=e.others,p=void 0===m?{}:m,h=e.style,v=e.className,b=void 0===v?"":v,f=e.maxLength,g=void 0===f?10:f,y=i||"\u8bf7\u8f93\u5165".concat(s),k=d||E,j=n?[{validator:n}]:[{required:t,message:"\u8bf7\u8f93\u5165".concat(s)}];return r.a.createElement(o.a.Item,Object.assign({key:c,label:s,name:c,required:t,initialValue:a[c],rules:j},p),r.a.createElement(l.a.Password,{onBlur:u,style:h,maxLength:g,className:b,placeholder:y,onPressEnter:k}))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,i=e.placeholder,s=(e.mode,e.name),u=e.label,d=e.arr,m=e.extra,p=e.disabled,h=e.others,v=void 0===h?{}:h,b=i||"\u8bf7\u9009\u62e9".concat(u),f=l||E,g=n?[{validator:n}]:[{required:t,message:"\u8bf7\u9009\u62e9".concat(u)}];return r.a.createElement(o.a.Item,Object.assign({key:s,name:s,label:u,extra:m,initialValue:a[s],rules:g},v),r.a.createElement(c.a,{allowClear:!0,disabled:p,placeholder:b,onChange:f},d.map((function(e){return r.a.createElement(y,{key:e.value,value:e.value},e.lab||e.label)}))))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.name,l=e.label,i=e.arr,c=e.extra,s=i.filter((function(e){return e.value===a[n]}));return r.a.createElement(o.a.Item,{key:n,label:l,extra:c,initialValue:a[n],required:t},s&&s.length?s[0].lab||s[0].label:"")},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,c=e.name,s=e.showTime,u=void 0!==s&&s,d=e.label,m=e.extra,p=e.disabled,h=e.others,v=void 0===h?{}:h,f=n?[{validator:n}]:[{type:"object",required:t,message:"\u8bf7\u8f93\u5165".concat(d)}],g=l||E;return r.a.createElement(o.a.Item,Object.assign({key:c,name:c,label:d,extra:m,initialValue:a[c]?b()(a[c]):null,rules:f},v),r.a.createElement(i.a,{className:"date_picker_style",disabled:p,showTime:u,onChange:function(a,t){return g(a,t,e)},format:u?O:j}))},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,c=e.name,s=e.label,u=e.extra,d=e.disabled,m=e.others,p=void 0===m?{}:m,h=n?[{validator:n}]:[{type:"object",required:t,message:"\u8bf7\u8f93\u5165".concat(s)}],v=l||E;return r.a.createElement(o.a.Item,Object.assign({key:c,name:c,label:s,extra:u,initialValue:a[c]?b()(a[c]):null,rules:h},p),r.a.createElement(i.a,{className:"date_picker_style",disabled:d,showTime:!0,onChange:function(a,t){return v(a,t,e)},format:O}))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.name,l=e.label,i=e.extra;return r.a.createElement(o.a.Item,{key:n,label:l,extra:i,initialValue:a[n]?b()(a[n]):null,required:t},a[n])},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,i=e.name,c=e.label,s=e.extra,u=e.disabled,d=e.others,m=void 0===d?{}:d,p=n?[{validator:n}]:[{required:t,message:"\u8bf7\u8f93\u5165".concat(c)}];p=t?p:[];var h=l||E;return r.a.createElement(o.a.Item,Object.assign({key:i,name:i,label:c,extra:s,initialValue:a[i]?b()(a[i]):null,rules:p},m),r.a.createElement(g,{className:"date_picker_style",disabled:u,onChange:function(a,t){return h(a,t,e)},format:j}))},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,i=e.placeholder,c=e.name,s=e.label,u=e.onBlurFun,d=e.extra,m=e.disabled,p=e.others,h=void 0===p?{}:p,v=i||"\u8bf7\u8f93\u5165".concat(s),b=l||E,g=n?[{validator:n}]:[{required:t,message:"\u8bf7\u8f93\u5165".concat(s)}];return r.a.createElement(o.a.Item,Object.assign({key:c,label:s,name:c,required:t,initialValue:a[c],extra:d,rules:g},h),r.a.createElement(f,{disabled:m,onBlur:u,onChange:b,placeholder:v,autoSize:{minRows:2,maxRows:6},maxLength:200,showCount:!0,rows:4}))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.name,l=e.label,i=e.extra;return r.a.createElement(o.a.Item,{key:n,label:l,required:t,initialValue:a[n],extra:i},a[n])},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,i=e.name,c=e.label,s=e.extra,d=e.disabled,m=e.others,p=void 0===m?{}:m,h=e.arr,v=void 0===h?[]:h,b=l||E,f=n?[{validator:n}]:[{required:t,message:"\u8bf7\u8f93\u5165".concat(c)}];return r.a.createElement(o.a.Item,Object.assign({key:i,label:c,name:i,required:t,initialValue:a[i],extra:s,rules:f},p),r.a.createElement(u.a.Group,{disabled:d,onChange:b},v.map((function(e,a){return r.a.createElement(u.a,{key:"".concat(a,"_radio"),value:e.value},e.label)}))))},A=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.required,l=a.name,i=a.label,c=a.disabled,s=a.url,u=a.extra,p=a.validator,v=a.onChange,b=a.beforeUpload,f=a.normFile,g=a.others,y=void 0===g?{}:g,k=p?[{validator:p}]:[{required:n,message:"\u8bf7\u4e0a\u4f20".concat(i)}],j=v||E,O=f||E,T=b||E,x=localStorage.getItem("token"),w=x?null===(e=JSON.parse(x))||void 0===e?void 0:e.token:"";return r.a.createElement(o.a.Item,Object.assign({key:l,label:i,name:l,required:n,initialValue:t[l]||[],extra:u,rules:k,valuePropName:"fileList",getValueFromEvent:O},y),r.a.createElement(d.a,{name:"file",action:s,disabled:c,listType:"picture",beforeUpload:T,onChange:j,headers:{token:w}},r.a.createElement(m.a,{disabled:c,className:"add_file_btn"},r.a.createElement(h.a,null)," \u4e0a\u4f20")))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.name,l=e.label,i=e.extra,c=a[n]?a[n]:[];return r.a.createElement(o.a.Item,{key:n,label:l,required:t,initialValue:a[n]||[],extra:i},r.a.createElement(p.a.PreviewGroup,null,c.map((function(e,a){return r.a.createElement(p.a,{key:"".concat(a,"_img"),width:50,src:e})}))))},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.required,n=e.validator,l=e.onChange,i=e.placeholder,c=e.name,u=e.label,d=e.multiple,m=void 0!==d&&d,p=e.arr,h=void 0===p?[]:p,v=e.extra,b=e.others,f=void 0===b?{}:b,g=i||"\u8bf7\u9009\u62e9".concat(u),y=l||E,j=n?[{validator:n}]:[{required:t,message:"\u8bf7\u9009\u62e9".concat(u)}],O=function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a.map((function(a){return r.a.createElement(k,{key:a.id,value:a.id,title:a.name},a.children&&Array.isArray(a.children)&&e(a.children))}))};return r.a.createElement(o.a.Item,Object.assign({key:c,name:c,label:u,extra:v,initialValue:a[c],rules:j},f),r.a.createElement(s.a,{showSearch:!0,style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:g,allowClear:!0,treeDefaultExpandAll:!0,onChange:y,multiple:m},h.map((function(e){return r.a.createElement(k,{key:e.id,value:e.id,title:e.name},e.children&&Array.isArray(e.children)&&O(e.children))}))))}},335:function(e,a,t){},341:function(e,a,t){"use strict";var n=t(22),r=t(30),l=t(25),i=t(24),c=t(0),s=t.n(c),o=t(333),u=(t(335),function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"_renderItem",value:function(){var e=this.props,a=e.searchArr,t=e.defaultValue;return a.map((function(e){var a=e.type;if(e.isNotShow)return null;switch(a){case"input":return Object(o.h)(e,t);case"password":return Object(o.i)(e,t);case"select":return Object(o.l)(e,t);case"timer":return Object(o.n)(e,t);case"hsTimer":return Object(o.g)(e,t);case"textArea":return Object(o.m)(e,t);case"file":return Object(o.f)(e,t);case"radio":return Object(o.j)(e,t);case"treeSelect":return Object(o.o)(e,t);default:return null}}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"form_com"},this._renderItem())}}]),t}(c.Component));u.defaultProps={searchArr:[],defaultValue:{}},a.a=u},342:function(e,a,t){},379:function(e,a,t){},477:function(e,a,t){"use strict";var n=t(15),r=t(77),l=t(20),i=t.n(l),c=t(33),s=t(22),o=t(30),u=t(25),d=t(24),m=t(0),p=t.n(m),h=t(41),v=t(673),b=t(194),f=t(312),g=t(671),y=t(683),k=t(51),E=t(54),j=t.n(E),O=t(18),T=t(123),x=t(341),w=t(333),C=(t(335),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"_renderItem",value:function(){var e=this.props,a=e.searchArr,t=e.defaultValue;return a.map((function(e){var a=e.type;if(e.isNotShow)return null;switch(a){case"input":return Object(w.c)(e,t);case"password":return Object(w.i)(e,t);case"select":return Object(w.d)(e,t);case"timer":return Object(w.n)(e,t);case"hsTimer":return Object(w.b)(e,t);case"textArea":return Object(w.e)(e,t);case"file":return Object(w.a)(e,t);case"radio":return Object(w.j)(e,t);case"treeSelect":return Object(w.o)(e,t);default:return null}}))}},{key:"render",value:function(){return p.a.createElement("div",{className:"form_com"},this._renderItem())}}]),t}(m.Component));C.defaultProps={searchArr:[],defaultValue:{}};var _=C,q=t(152),I=t(95),N=(t(379),v.a.TabPane,function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).initData=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),l.onFinish=function(){var e=Object(c.a)(i.a.mark((function e(a){var t,n,r,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.props,n=t.setTaskList,r=t.history,c=Object(I.c)(),s={id:100+window.parseInt(100*Math.random()),applicationType:a.applicationType,applicationId:2,userName:c.name,userId:c.id,createTime:j()().format("YYYY-MM-DD hh:mm:ss"),taskEndTime:"",startTime:j()(a.startTime).format("YYYY-MM-DD hh:mm"),endTime:j()(a.endTime).format("YYYY-MM-DD hh:mm"),cause:a.cause,evidence:a.evidence||["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"],status:0,statusStep:1,process:[{dep:"",directorId:"",status:"",desc:"\u8fd9\u91cc\u662f\u88ab\u6284\u9001\u4eba",ccUserId:"1",userType:1},{dep:"2",directorId:2,status:"",desc:"\u53cd\u9988\u610f\u89c1\u4e00",ccUserId:"",userType:2},{dep:"1",directorId:1,status:"",desc:"\u53cd\u9988\u610f\u89c1\u4e8c",ccUserId:"",userType:2}]},b.b.success("\u63d0\u4ea4\u6210\u529f\uff01"),e.next=6,n(s);case 6:r.push("/project/task");case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),l.onAgree=Object(c.a)(i.a.mark((function e(){var a,t,c,s,o,u,d,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.props,t=a.defaultValue,c=a.updateTaskList,s=a.callback,o=Object(r.a)(t.process),u=o.length,d=t.statusStep,o[d].status=1,m={status:u>=d+1?0:3,statusStep:u>=d+1?d+1:-1,taskEndTime:u>=d+1?"":j()().format("YYYY-MM-DD hh:mm:ss"),process:o},e.next=8,c(Object(n.a)(Object(n.a)({},t),m));case 8:b.b.success("\u5ba1\u6279\u6210\u529f\uff01"),s();case 10:case"end":return e.stop()}}),e)}))),l.onTurnDown=Object(c.a)(i.a.mark((function e(){var a,t,c,s,o,u,d,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.props,t=a.defaultValue,c=a.updateTaskList,s=a.callback,o=Object(r.a)(t.process),u=o.length,d=t.statusStep,o[d].status=0,m={status:u>=d+1?0:2,statusStep:-1,taskEndTime:u>=d+1?"":j()().format("YYYY-MM-DD hh:mm:ss"),process:o},e.next=8,c(Object(n.a)(Object(n.a)({},t),m));case 8:b.b.success("\u9a73\u56de\u6210\u529f\uff01"),s();case 10:case"end":return e.stop()}}),e)}))),l.state={},l}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"_renderContent",value:function(){var e=this.props,a=e.defaultValue,t=e.applicationType,n=Object(I.c)(),r=!!Object.keys(a).length,l=-1!==a.statusStep&&a.process[a.statusStep].directorId===n.id,i=[{type:"select",name:"applicationType",label:"\u8bf7\u5047\u7c7b\u578b",required:!0,arr:t,disabled:r},{type:"hsTimer",name:"startTime",label:"\u5f00\u59cb\u65f6\u95f4",showTime:!0,required:!0,disabled:r},{type:"hsTimer",name:"endTime",label:"\u7ed3\u675f\u65f6\u95f4",showTime:!0,required:!0,disabled:r},{type:"input",name:"leaveTime",label:"\u8bf7\u5047\u65f6\u957f",required:!0,disabled:r},{type:"textArea",name:"cause",label:"\u8bf7\u5047\u4e8b\u7531",required:!0,disabled:r}],c=[{type:"file",name:"evidence",label:"\u8bc1\u660e\u6750\u6599",arr:t,url:"",extra:"\u6dfb\u52a0\u56fe\u7247\uff08\u6700\u591a\u9009\u62e99\u5f20\uff09",disabled:r}];return p.a.createElement("div",{className:"task_content"},p.a.createElement("h3",null,"\u8bf7\u5047\u7533\u8bf7"),p.a.createElement("div",{className:"task_content_gs"},p.a.createElement(f.a,{width:24,height:24,src:"error",className:"task_title_img",fallback:q.a}),p.a.createElement("span",{className:"task_title_text"},"\u8521\u7538\u57ce\u6295\u667a\u80fd\u4ea4\u901a\u516c\u53f8")),p.a.createElement(g.a,{dashed:!0}),p.a.createElement("div",null,p.a.createElement(g.a,{type:"vertical",className:"line"})," \u57fa\u672c\u4fe1\u606f"),p.a.createElement(y.a,Object.assign({ref:this.formRef,onFinish:this.onFinish},Object(T.a)(6,15)),r?p.a.createElement(_,{searchArr:i,defaultValue:a}):p.a.createElement(x.a,{searchArr:i,defaultValue:a}),p.a.createElement("div",null,p.a.createElement(g.a,{type:"vertical",className:"line"})," \u5907\u6ce8\u4fe1\u606f"),r?p.a.createElement(_,{searchArr:c,defaultValue:a}):p.a.createElement(x.a,{searchArr:c,defaultValue:a}),p.a.createElement(y.a.Item,{label:"\u5907\u6ce8"},p.a.createElement("div",{className:"remarks"},p.a.createElement("div",{className:"remarks_text"},"\u5fc5\u586b\u4fe1\u606f\u586b\u5199\u540e\uff0c\u6d41\u7a0b\u5c06\u81ea\u52a8\u663e\u793a"),l?p.a.createElement("div",{className:"form_btns"},p.a.createElement(k.a,{type:"primary",onClick:this.onAgree,className:"form_btns_save"},"\u540c\u610f"),p.a.createElement(k.a,{danger:!0,onClick:this.onTurnDown,className:"form_btns_save"},"\u9a73\u56de")):null,a.id?null:p.a.createElement("div",{className:"form_btns"},p.a.createElement(k.a,{type:"primary",className:"form_btns_save",htmlType:"submit"},"\u53d1\u8d77\u5ba1\u6279"),p.a.createElement(k.a,{htmlType:"reset",danger:!0,className:"form_btns_save"},"\u91cd\u7f6e"),p.a.createElement(k.a,null,"\u4fdd\u5b58\u8349\u7a3f"))))))}},{key:"render",value:function(){return p.a.createElement("div",{className:"option_page"},this._renderContent())}}]),t}(p.a.Component));N.defaultProps={personnelList:[],applicationList:[],defaultValue:{},applicationType:[],setTaskList:function(){},updateTaskList:function(){},callback:function(){},history:{}};a.a=Object(h.b)((function(e){return{personnelList:e.Common.personnelList,applicationList:e.Common.applicationList,applicationType:e.Common.applicationType}}),(function(e){return{setTaskList:e.Common.setTaskList,updateTaskList:e.Common.updateTaskList}}))(Object(O.g)(N))},681:function(e,a,t){"use strict";t.r(a);var n=t(20),r=t.n(n),l=t(33),i=t(22),c=t(30),s=t(25),o=t(24),u=t(0),d=t.n(u),m=t(41),p=t(673),h=t(51),v=t(477),b=(t(379),p.a.TabPane),f=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).initData=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),n.onTabsChange=function(){var e=Object(l.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({activeTab:a});case 2:n.initData();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={activeTab:"0"},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"_renderTabs",value:function(){var e=this.state.activeTab;return d.a.createElement(p.a,{onChange:this.onTabsChange,activeKey:e,tabBarExtraContent:d.a.createElement(h.a,null,"\u8349\u7a3f\u7bb1")},[{title:"\u53d1\u8d77\u5ba1\u6279",key:"0"},{title:"\u67e5\u770b\u62a5\u8868",key:"1"},{title:"\u67e5\u770b\u6570\u636e",key:"2"}].map((function(e){return d.a.createElement(b,{tab:e.title,key:"".concat(e.key)})})))}},{key:"_renderContent",value:function(){return"0"===this.state.activeTab?d.a.createElement(v.a,null):null}},{key:"render",value:function(){return d.a.createElement("div",{className:"task_detail_page"},this._renderTabs(),this._renderContent())}}]),t}(d.a.Component);f.defaultProps={personnelList:[],applicationList:[]};a.default=Object(m.b)((function(e){return{personnelList:e.Common.personnelList,applicationList:e.Common.applicationList}}),(function(e){return{}}))(f)}}]);
//# sourceMappingURL=12.3a835e22.chunk.js.map