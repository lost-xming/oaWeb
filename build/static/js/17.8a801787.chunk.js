(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[17],{415:function(e,t,n){},416:function(e,t,n){},428:function(e,t,n){},439:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n.n(a),l=n(28),c=n(22),o=n(31),i=n(25),s=n(24),u=n(0),d=n.n(u),p=n(46),m=n(58),v=n(418),f=n(95),b=n(189),h=(n(415),["\u53d1\u8d77\u4eba","\u5ba1\u6838\u4eba","\u6284\u9001\u4eba"]),y=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initData=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initData()}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"render",value:function(){var e=this.props,t=e.defaultValue,n=e.onCardClick,a=e.acitve,r=e.onRemoveClick,l=t.directorValue||0===t.directorValue?b.b[t.directorValue].label:t.personnelTargets.map((function(e){return e.name})).join(","),c=a&&0!==t.type?"card_remove":"display_card_remove card_remove";return d.a.createElement("div",{className:a?"card_box card_active_box":"card_box"},d.a.createElement("div",{onClick:n},d.a.createElement("div",{className:"card_title card_title_option".concat(t.type)},h[t.type]),d.a.createElement("div",{className:"card_content"},l)),0===t.type?null:d.a.createElement("div",{className:c,onClick:r},d.a.createElement(f.a,null)))}}]),n}(d.a.Component);y.defaultProps={defaultValue:{},onCardClick:function(){},onRemoveClick:function(){},acitve:!1};var _=Object(p.b)((function(e){return{}}),(function(e){return{setPersonnelList:e.Common.setPersonnelList}}))(y),k=n(388),C=n(447),E=n(341),g=n(359),O=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initData=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initData()}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"render",value:function(){var e=this.props.onCardLineClick,t=d.a.createElement("div",null,"\u6dfb\u52a0\u6284\u9001/\u5ba1\u6838\u8282\u70b9\uff1f");return d.a.createElement("div",{className:"card_line_box"},d.a.createElement("div",{className:"card_line_disp"},d.a.createElement(k.a,{type:"vertical",className:"card_line"})),d.a.createElement("div",{className:"card_line_add common_color"},d.a.createElement(C.a,{placement:"right",id:"card_pop",title:t,onConfirm:e,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},d.a.createElement(E.a,{className:"card_line_add_icon"}))),d.a.createElement("div",{className:"card_icon_box"},d.a.createElement(g.a,null)))}}]),n}(d.a.Component);O.defaultProps={onCardLineClick:function(){}};var V=Object(p.b)((function(e){return{}}),(function(e){return{setPersonnelList:e.Common.setPersonnelList}}))(O),j=n(355),D=n(360),N=n(430),T=n(76),P=(n(416),j.a.Option),w=[{value:1,label:"\u5ba1\u6838\u4eba"},{value:2,label:"\u6284\u9001\u4eba"}],x=[{value:0,label:"\u6307\u5b9a\u4eba\u5458"},{value:1,label:"\u4e3b\u7ba1"},{value:2,label:"\u89d2\u8272",disabled:!0},{value:3,label:"\u8fde\u7eed\u591a\u7ea7\u4e3b\u7ba1",disabled:!0},{value:4,label:"\u53d1\u8d77\u4eba\u81ea\u5df1",disabled:!0}],L=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initData=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props.defaultValue,a.setState({typeValue:t.type,personnelValue:t.personnelValue,personnelTargetId:t.targetDep,directorValue:t.directorValue,expandedKeys:a.setDefaultKeys(t.targetDep)});case 2:case"end":return e.stop()}}),e)}))),a.setDefaultKeys=function(e){var t=[];return e.map((function(e){var n=e.split("-");n.splice(n.length-1,1);var a=n.map((function(e){return"dep-".concat(e)}));return t.push.apply(t,Object(m.a)(a)),null})),Object(m.a)(new Set(t))},a.onCancel=function(){},a.onOk=function(){a.formRef.current.submit()},a.onSave=function(){var e=a.props.onOkCallback,t=a.state,n=t.typeValue,r=t.personnelValue,l=t.personnelTargetId,c=t.directorValue;e({type:n,personnelValue:1===n?r:null,directorValue:1===n&&1===r?c:null,personnelTargets:1===n&&0===r||2===n?a.getPersonnel(l):[],targetDep:1===n&&0===r||2===n?l:[]})},a.onReset=function(){a.setState({typeValue:1,personnelValue:0,personnelTargetId:[],directorValue:0,expandedKeys:[]})},a.getPersonnel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=a.props.personnelList,n=e.map((function(e){var t=e.split("-");return t[t.length-1]})),r=t.filter((function(e){return n.indexOf("".concat(e.id))>-1}));return r},a.onTypeChange=function(e){a.setState({typeValue:e.target.value})},a.onPersonnelChange=function(e){a.setState({personnelValue:e.target.value})},a.onPersonnelCheck=function(e){a.setState({personnelTargetId:e})},a.onDirectorValueChange=function(e){a.setState({directorValue:e})},a.onExpand=function(e){a.setState({expandedKeys:e})},a.resetData=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=[];return t.map((function(t){var l={title:"".concat(t.name," dep-").concat(t.id),key:"dep-".concat(t.id),disabled:!0,children:[]};if(e.filter((function(e){return e.departments.indexOf(t.id)>-1})).map((function(e){return l.children.push({title:"".concat(e.name," - ").concat(n?"".concat(n,"-"):"").concat(t.id,"-").concat(e.id),key:"".concat(n?"".concat(n,"-"):"").concat(t.id,"-").concat(e.id)}),null})),t.children&&Array.isArray(t.children)){var c,o=a.resetData(e,t.children,"".concat(n?"".concat(n,"-"):"").concat(t.id));(c=l.children).push.apply(c,Object(m.a)(o))}return r.push(l),null})),r},a._renderTypeUp=function(){switch(a.state.typeValue){case 1:return a._renderPersonnel();case 2:return a._renderCcItem();default:return null}},a._renderOption2=function(){switch(a.state.personnelValue){case 0:return a._renderTargetPer();case 1:return a._renderMan();default:return null}},a._renderCcItem=function(){return d.a.createElement("div",{className:"type_option"},d.a.createElement("div",{className:"type_option_label"},"\u9009\u62e9\u6284\u9001\u4eba\u5458\uff1a"),a._renderTargetPersonnel())},a.state={typeValue:1,personnelValue:0,personnelTargetId:[],directorValue:0,expandedKeys:[]},a.formRef=d.a.createRef(),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initData()}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"_renderPersonnel",value:function(){var e=this.state.personnelValue;return d.a.createElement("div",{className:"type_option"},d.a.createElement("div",{className:"type_option_label"},"\u5ba1\u6838\u4eba\u8bbe\u7f6e\uff1a"),d.a.createElement(D.a.Group,{onChange:this.onPersonnelChange,value:e},x.map((function(e,t){return d.a.createElement(D.a,{key:"".concat(t,"_radio"),disabled:e.disabled,value:e.value},e.label)}))))}},{key:"_renderTargetPersonnel",value:function(){var e=this.props,t=e.personnelList,n=e.departmentList,a=this.state,r=a.personnelTargetId,l=a.expandedKeys,c=Object(b.f)(n),o=this.resetData(t,c);return d.a.createElement("div",null,d.a.createElement("div",{className:"tips"},"\u4e0d\u80fd\u8d85\u8fc720\u4eba"),d.a.createElement(N.a,{checkable:!0,checkedKeys:r,expandedKeys:l,onCheck:this.onPersonnelCheck,treeData:o,onExpand:this.onExpand}))}},{key:"_renderMan",value:function(){var e=this.state,t=e.directorValue;return 1!==e.typeValue?null:d.a.createElement("div",{className:"type_option"},d.a.createElement("div",{className:"type_option_label"},"\u53d1\u8d77\u4eba\u7684\uff1a"),d.a.createElement(j.a,{allowClear:!0,value:t,placeholder:"\u8bf7\u9009\u62e9...",onChange:this.onDirectorValueChange,style:{width:150}},b.b.map((function(e){return d.a.createElement(P,{key:e.value,value:e.value},e.label)}))))}},{key:"_renderTargetPer",value:function(){return 1!==this.state.typeValue?null:d.a.createElement("div",{className:"type_option"},d.a.createElement("div",{className:"type_option_label"},"\u9009\u62e9\u4eba\u5458\uff1a"),this._renderTargetPersonnel())}},{key:"render",value:function(){var e=this.state.typeValue;return d.a.createElement("div",{className:"card_info"},d.a.createElement("div",{className:"type_option"},d.a.createElement("div",{className:"type_option_label"},"\u8282\u70b9\u7c7b\u578b\uff1a"),d.a.createElement(D.a.Group,{onChange:this.onTypeChange,value:e},w.map((function(e,t){return d.a.createElement(D.a,{key:"".concat(t,"_radio"),value:e.value},e.label)})))),this._renderTypeUp(),this._renderOption2(),d.a.createElement("div",{className:"card_form_btns"},d.a.createElement(T.a,{type:"primary",className:"btn_margin",onClick:this.onSave},"\u63d0\u4ea4"),d.a.createElement(T.a,{danger:!0,onClick:this.onReset},"\u91cd\u7f6e")))}}]),n}(d.a.Component);L.defaultProps={departmentList:[],setPersonnelList:function(){},defaultValue:{},personnelList:[],onOkCallback:function(){}};var S=Object(p.b)((function(e){return{departmentList:e.Common.departmentList,personnelList:e.Common.personnelList}}),(function(e){return{setPersonnelList:e.Common.setPersonnelList}}))(L),R=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initData=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.onConfirm=function(e){var t=a.state.list,n=Object(m.a)(t);n.splice(e+1,0,{type:1,personnelTargets:[{name:"\u7f16\u8f91\u4eba\u5458"}],targetDep:[],personnelValue:null,directorValue:null}),a.setState({list:n})},a.onCardClick=function(e){a.setState({cardActive:e,visible:0!==e})},a.onRemoveClick=function(e){var t=a.state.list,n=Object(m.a)(t);n.splice(e,1),a.setState({list:n,cardActive:0,visible:!1})},a.onDrawerClose=function(){a.setState({visible:!1})},a.onOkCallback=function(e){var t=a.state,n=t.list,r=t.cardActive,l=Object(m.a)(n);l[r]=e,a.setState({list:l}),a.onDrawerClose()},a.state={cardActive:0,list:[{type:0,personnelTargets:[{name:"\u6240\u6709\u4eba"}],targetDep:[],personnelValue:null,directorValue:null},{type:2,personnelTargets:[{id:9,name:"\u738b\u5148\u751f9",departments:"1,5,7",status:1,mobile:"15122223333",createTime:"2021-10-07 12:00:01"}],targetDep:["1-9"],personnelValue:null,directorValue:null},{type:1,personnelTargets:[{id:7,name:"\u674e\u5973\u58eb7",departments:"3,6,9",status:1,mobile:"15122223333",createTime:"2021-10-07 12:00:01"}],targetDep:["1-2-3-7"],personnelValue:0,directorValue:null},{type:1,personnelTargets:[{id:8,name:"\u674e\u5973\u58eb8",departments:"6,10,12",status:1,mobile:"15122223333",createTime:"2021-10-07 12:00:01"}],targetDep:["11-12-8"],personnelValue:0,directorValue:null}]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"_renderDrawer",value:function(){var e=this.state,t=e.visible,n=e.list[e.cardActive];return d.a.createElement(v.a,{width:700,title:"\u8282\u70b9\u8be6\u60c5",placement:"right",onClose:this.onDrawerClose,visible:t},d.a.createElement(S,{defaultValue:n,onOkCallback:this.onOkCallback}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.cardActive,a=t.list,r=t.visible;return d.a.createElement(u.Fragment,null,d.a.createElement("div",{className:"card_page"},a.map((function(t,a){return d.a.createElement("div",{key:"".concat(a,"_card")},d.a.createElement(_,{onCardClick:function(){return e.onCardClick(a)},acitve:a===n,defaultValue:t,onRemoveClick:function(){return e.onRemoveClick(a)}}),d.a.createElement(V,{acitve:a===n,onCardLineClick:function(){return e.onConfirm(a)}}))})),d.a.createElement("div",{className:"card_end"},"\u6d41\u7a0b\u7ed3\u675f")),r?this._renderDrawer():null)}}]),n}(d.a.Component);R.defaultProps={personnelList:[]};var K=Object(p.b)((function(e){return{personnelList:e.Common.personnelList}}),(function(e){return{}}))(R),A=(n(428),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initData=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),a.state={},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"render",value:function(){return d.a.createElement("div",{className:"process_page"},d.a.createElement(K,null))}}]),n}(d.a.Component));A.defaultProps={};t.default=Object(p.b)((function(e){return{}}),(function(e){return{}}))(A)}}]);
//# sourceMappingURL=17.8a801787.chunk.js.map