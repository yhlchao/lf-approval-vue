(function(e){function t(t){for(var n,i,c=t[0],l=t[1],d=t[2],p=0,u=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(u.length)u.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var l=a[c];0!==o[l]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},2088:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".home[data-v-1118c426]{width:100vw;height:100vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;position:relative}.home .title[data-v-1118c426]{width:100%;height:60px;line-height:60px}.home .container[data-v-1118c426]{width:100%;height:100%;margin:0 auto;display:flex;border-top:1px solid #ddd;border-radius:8px;overflow:hidden}.home .container #graph[data-v-1118c426]{width:100%}",""]),e.exports=t},2152:function(e,t,a){var n=a("c099");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("638f1203",n,!0,{sourceMap:!1,shadowMode:!1})},"30d7":function(e,t,a){"use strict";a("2152")},"3ff1":function(e,t,a){var n=a("dfc0");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("60e536e7",n,!0,{sourceMap:!1,shadowMode:!1})},"7f1a":function(e,t,a){var n=a("2088");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("1eebe618",n,!0,{sourceMap:!1,shadowMode:!1})},"8feb":function(e,t,a){"use strict";a("dcde")},9023:function(e,t,a){var n=a("cff8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("54a40a91",n,!0,{sourceMap:!1,shadowMode:!1})},c099:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".hover-card{position:absolute;top:0;left:0;visibility:hidden;width:260px;height:200px;background-color:#fff;border-radius:8px;box-shadow:0 0 8px 2px #ddd;display:flex;flex-direction:column;align-items:center;transition:all .3s cubic-bezier(.03,.75,.38,.98)}.hover-card .title{height:40px;width:100%;line-height:40px;border-bottom:1px solid #ddd}.hover-card .main{width:100%;height:100%;overflow-y:auto;text-align:left;padding:15px}.hover-card .main .item{margin-bottom:6px}.hover-card .main .item .content,.hover-card .main .item .label{display:inline-block}.hover-card .main .item .count{font-weight:700}.hover-card .main .item:last-child{margin-bottom:0}.show-hover-card{visibility:visible}",""]),e.exports=t},cd49:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"initLogicFlow",(function(){return k})),a.d(n,"updateHoverNodeData",(function(){return D})),a.d(n,"updateWorkbenchNodeData",(function(){return N}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23");function r(e,t){var a=Object(o["M"])("router-view");return Object(o["D"])(),Object(o["i"])(a)}a("d061");const i={};i.render=r;var c=i,l=a("5502"),d=a("5e90"),s=a.n(d),p=a("5530"),u=a("45eb"),b=a("7e84"),h=a("262e"),v=a("2caf"),f=a("d4ec"),m=a("bee2"),j=function(){function e(t){Object(f["a"])(this,e),this.lf=t}return Object(m["a"])(e,[{key:"registerAll",value:function(){this.registerApply(),this.registerEnd(),this.registerApproval(),this.registerJudgement()}},{key:"registerApply",value:function(){this.lf.register("apply",(function(e){var t=e.CircleNode,a=e.CircleNodeModel,n=(e.h,function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getAttributes",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getAttributes",this).call(this),t=e.properties;return t.configured&&(e.stroke="#434c56"),e}}]),a}(t)),o=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getConnectedTargetRules",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getConnectedTargetRules",this).call(this),t={message:"申请节点只能作为初始节点",validate:function(){return!1}};return e.push(t),e}}]),a}(a);return{view:n,model:o}}))}},{key:"registerEnd",value:function(){this.lf.register("end",(function(e){var t=e.CircleNode,a=e.CircleNodeModel,n=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getAttributes",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getAttributes",this).call(this),t=e.properties;return t.configured&&(e.stroke="#434c56"),e}}]),a}(t),o=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getConnectedSourceRules",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getConnectedSourceRules",this).call(this),t={message:"结束节点不能连接至其他节点",validate:function(){return!1}};return e.push(t),e}}]),a}(a);return{view:n,model:o}}))}},{key:"registerApproval",value:function(){this.lf.register("approval",(function(e){var t=e.RectNode,a=e.RectNodeModel,n=e.h,o=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getAttributes",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getAttributes",this).call(this),t=e.properties;return t.configured&&(e.stroke="#434c56"),e}},{key:"getShape",value:function(){var e=this.getAttributes(),t={x:e.x-e.width/2,y:e.y-e.height/2,rx:e.radius,ry:e.radius},a=Object.assign({},e,t);return n("rect",Object(p["a"])({},a))}}]),a}(t),r=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(a);return{view:o,model:r}}))}},{key:"registerJudgement",value:function(){this.lf.register("judgement",(function(e){var t=e.DiamondNode,a=e.DiamondNodeModel,n=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getAttributes",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getAttributes",this).call(this),t=e.properties;return t.configured&&(e.stroke="#434c56"),e}}]),a}(t),o=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(a);return{view:n,model:o}}))}}]),e}(),O=j,y={PASS:0,REJECT:1,TRUE:2,FALSE:3},g={APPLY:"申请",APPROVAL:"审批",JUDGEMENT:"判断",END:"结束"},x=function(){function e(t){Object(f["a"])(this,e),this.lf=t}return Object(m["a"])(e,[{key:"registerAll",value:function(){this.registerAction()}},{key:"registerAction",value:function(){this.lf.register("action",(function(e){var t=e.PolylineEdge,a=e.PolylineEdgeModel,n=e.h,o=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return Object(m["a"])(a,[{key:"getAttributes",value:function(){var e=Object(u["a"])(Object(b["a"])(a.prototype),"getAttributes",this).call(this),t=e.properties;if("undefined"===typeof t.actionType)return e;switch(t.actionType){case y.REJECT:e.strokeDashArray="7,5";break;default:break}return e}},{key:"getShape",value:function(){var e=this.getAttributes();return n("polyline",Object(p["a"])(Object(p["a"])({},e),{},{fill:"none"}))}}]),a}(t),r=function(e){Object(h["a"])(a,e);var t=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),t.apply(this,arguments)}return a}(a);return{view:o,model:r}}))}}]),e}(),w=x,k=function(e,t){var a="#9cafb9",n=new s.a({container:t,grid:{size:10,type:"mesh"},background:{color:"#fff"},style:{rect:{radius:8,stroke:a},circle:{r:30,stroke:a},polyline:{stroke:a},edgeText:{background:{fill:"#fff"}}}}),o=new O(n),r=new w(n);o.registerAll(),r.registerAll(),e.lf=n},D=function(e,t){e.hoverNodeData=t},N=function(e,t){e.workbenchNodeData=t},A=Object(l["a"])({state:function(){return{lf:null,hoverNodeData:null,workbenchNodeData:null}},mutations:n}),I=A,C=a("6c02"),M=Object(o["eb"])("data-v-1118c426");Object(o["G"])("data-v-1118c426");var P={class:"home"},T=Object(o["m"])("h2",{class:"title"},"审批示例",-1),E={class:"container"},H=Object(o["m"])("div",{id:"graph"},null,-1);Object(o["E"])();var R=M((function(e,t,a,n,r,i){var c=Object(o["M"])("Panel"),l=Object(o["M"])("HoverCard"),d=Object(o["M"])("Workbench");return Object(o["D"])(),Object(o["i"])("div",P,[T,Object(o["m"])("div",E,[Object(o["m"])(c,{startDrag:i.startDrag},null,8,["startDrag"]),H]),Object(o["m"])(l,{show:r.showHoverCard,x:r.hoverCardPosition.x,y:r.hoverCardPosition.y},null,8,["show","x","y"]),Object(o["m"])(d,{show:r.showWorkbench},null,8,["show"])])})),L=a("eb21"),W=(a("7692"),a("417c"),Object(o["eb"])("data-v-6fabb9c2"));Object(o["G"])("data-v-6fabb9c2");var S={class:"panel"},_={class:"text"},B={class:"color-tip"},J={class:"content"};Object(o["E"])();var V=W((function(e,t,a,n,r,i){return Object(o["D"])(),Object(o["i"])("div",S,[(Object(o["D"])(!0),Object(o["i"])(o["b"],null,Object(o["K"])(r.items,(function(e){return Object(o["D"])(),Object(o["i"])("div",{key:e.text,class:"panel-item"},[Object(o["m"])("div",{class:["shape",e.type],onMousedown:function(t){return a.startDrag(e)}},null,42,["onMousedown"]),Object(o["m"])("div",_,Object(o["Q"])(e.text),1)])})),128)),Object(o["m"])("div",B,[(Object(o["D"])(!0),Object(o["i"])(o["b"],null,Object(o["K"])(r.colorTips,(function(e){return Object(o["D"])(),Object(o["i"])("div",{class:"item",key:e},[Object(o["m"])("div",{class:"board",style:{backgroundColor:e.color}},null,4),Object(o["m"])("div",J,Object(o["Q"])(e.text),1)])})),128))])])})),Q=[{type:"apply",text:"申请",properties:{nodeType:g.APPLY}},{type:"approval",text:"审批",properties:{nodeType:g.APPROVAL}},{type:"judgement",text:"判断",properties:{nodeType:g.JUDGEMENT}},{type:"end",text:"结束",properties:{nodeType:g.END}}],z=[{color:"#9cafb9",text:"未配置"},{color:"#434c56",text:"已配置"}],U={name:"Panel",props:{startDrag:Function},data:function(){return{items:Q,colorTips:z}}};a("de12");U.render=V,U.__scopeId="data-v-6fabb9c2";var F=U,G=(a("99af"),Object(o["m"])("div",{class:"title"},"配置详情",-1)),$={class:"main"};function K(e,t,a,n,r,i){var c,l,d=Object(o["M"])("HoverCardApply"),s=Object(o["M"])("HoverCardApproval");return Object(o["D"])(),Object(o["i"])("div",{class:["hover-card",{"show-hover-card":i.showCard}],style:{transform:"translate(".concat(a.x-130,"px, ").concat(a.y+60,"px)")},onMouseenter:t[1]||(t[1]=function(e){return r.hover=!0}),onMouseleave:t[2]||(t[2]=function(e){return r.hover=!1})},[G,Object(o["m"])("div",$,["apply"===(null===(c=e.hoverNodeData)||void 0===c?void 0:c.type)?(Object(o["D"])(),Object(o["i"])(d,{key:0,nodeData:e.hoverNodeData},null,8,["nodeData"])):Object(o["j"])("",!0),"approval"===(null===(l=e.hoverNodeData)||void 0===l?void 0:l.type)?(Object(o["D"])(),Object(o["i"])(s,{key:1,nodeData:e.hoverNodeData},null,8,["nodeData"])):Object(o["j"])("",!0)])],38)}a("a9e3"),a("b0c0");var X={class:"item"},Y=Object(o["m"])("div",{class:"label"},"申请人：",-1),q={class:"content"},Z={class:"item"},ee=Object(o["m"])("div",{class:"label"},"工号：",-1),te={class:"content"},ae={class:"item"},ne=Object(o["m"])("div",{class:"label"},"报销类型：",-1),oe={class:"content"},re={class:"item"},ie=Object(o["m"])("div",{class:"label"},"金额：",-1),ce={class:"content count"},le={class:"item"},de=Object(o["m"])("div",{class:"label"},"申请时间：",-1),se={class:"content"};function pe(e,t,a,n,r,i){var c,l,d,s,p;return Object(o["D"])(),Object(o["i"])(o["b"],null,[Object(o["m"])("div",X,[Y,Object(o["m"])("div",q,Object(o["Q"])(null===(c=a.nodeData.properties)||void 0===c?void 0:c.name),1)]),Object(o["m"])("div",Z,[ee,Object(o["m"])("div",te,Object(o["Q"])(null===(l=a.nodeData.properties)||void 0===l?void 0:l.id),1)]),Object(o["m"])("div",ae,[ne,Object(o["m"])("div",oe,Object(o["Q"])(null===(d=a.nodeData.properties)||void 0===d?void 0:d.type),1)]),Object(o["m"])("div",re,[ie,Object(o["m"])("div",ce,Object(o["Q"])(null===(s=a.nodeData.properties)||void 0===s?void 0:s.count),1)]),Object(o["m"])("div",le,[de,Object(o["m"])("div",se,Object(o["Q"])(null===(p=a.nodeData.properties)||void 0===p?void 0:p.time),1)])],64)}var ue={name:"HoverCardApply",props:{nodeData:Object}};ue.render=pe;var be=ue,he={class:"item"},ve=Object(o["m"])("div",{class:"label"},"审批人：",-1),fe={class:"content"},me={class:"item"},je=Object(o["m"])("div",{class:"label"},"工号：",-1),Oe={class:"content"};function ye(e,t,a,n,r,i){var c,l;return Object(o["D"])(),Object(o["i"])(o["b"],null,[Object(o["m"])("div",he,[ve,Object(o["m"])("div",fe,Object(o["Q"])(null===(c=a.nodeData.properties)||void 0===c?void 0:c.name),1)]),Object(o["m"])("div",me,[je,Object(o["m"])("div",Oe,Object(o["Q"])(null===(l=a.nodeData.properties)||void 0===l?void 0:l.id),1)])],64)}var ge={name:"HoverCardApply",props:{nodeData:{type:Object,default:function(){return{properties:{name:"",id:""}}}}}};ge.render=ye;var xe=ge,we={components:{HoverCardApply:be,HoverCardApproval:xe},name:"HoverCard",props:{show:{type:Boolean,default:!1},x:{type:Number,default:0},y:{type:Number,default:0}},data:function(){return{hover:!1}},computed:Object(p["a"])(Object(p["a"])({},Object(l["c"])(["hoverNodeData"])),{},{showCard:function(){return!!this.show||!!this.hover}})};a("30d7");we.render=K;var ke=we,De=Object(o["m"])("h3",{class:"title"},"配置工作台",-1),Ne={class:"main"},Ae={class:"item"},Ie=Object(o["m"])("div",{class:"label"},"节点类型：",-1),Ce={class:"content"},Me=Object(o["l"])("完成");function Pe(e,t,a,n,r,i){var c,l,d,s,p,u,b,h,v,f,m,j=Object(o["M"])("WorkbenchApply"),O=Object(o["M"])("WorkbenchApproval"),y=Object(o["M"])("el-button");return Object(o["D"])(),Object(o["i"])("div",{class:["workbench",{"show-workbench":a.show&&!1!==(null===(c=e.workbenchNodeData)||void 0===c||null===(l=c.properties)||void 0===l?void 0:l.needConfig)}]},[De,Object(o["m"])("div",Ne,[Object(o["m"])("div",Ae,[Ie,Object(o["m"])("div",Ce,Object(o["Q"])((null===(d=e.workbenchNodeData)||void 0===d||null===(s=d.properties)||void 0===s?void 0:s.nodeType)+"（".concat(null===(p=e.workbenchNodeData)||void 0===p?void 0:p.type,"）")),1)]),"apply"===(null===(u=e.workbenchNodeData)||void 0===u?void 0:u.type)?(Object(o["D"])(),Object(o["i"])(j,{key:0,selectBlur:a.show,applicantIndex:null===(b=e.workbenchNodeData)||void 0===b||null===(h=b.properties)||void 0===h?void 0:h.applicantIndex,onChange:i.handleChange},null,8,["selectBlur","applicantIndex","onChange"])):Object(o["j"])("",!0),"approval"===(null===(v=e.workbenchNodeData)||void 0===v?void 0:v.type)?(Object(o["D"])(),Object(o["i"])(O,{key:1,selectBlur:a.show,managerIndex:null===(f=e.workbenchNodeData)||void 0===f||null===(m=f.properties)||void 0===m?void 0:m.managerIndex,onChange:i.handleChange},null,8,["selectBlur","managerIndex","onChange"])):Object(o["j"])("",!0),Object(o["m"])(y,{type:"primary",onClick:i.handleSubmit},{default:Object(o["ab"])((function(){return[Me]})),_:1},8,["onClick"])])],2)}var Te=a("3fd4"),Ee={class:"item"},He=Object(o["m"])("div",{class:"label"},"申请组别：",-1),Re={class:"content"};function Le(e,t,a,n,r,i){var c=Object(o["M"])("el-option"),l=Object(o["M"])("el-select");return Object(o["D"])(),Object(o["i"])("div",Ee,[He,Object(o["m"])("div",Re,[Object(o["m"])(l,{modelValue:r.itemIndex,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.itemIndex=e}),placeholder:"请选择",ref:"select"},{default:Object(o["ab"])((function(){return[(Object(o["D"])(!0),Object(o["i"])(o["b"],null,Object(o["K"])(r.items,(function(e,t){return Object(o["D"])(),Object(o["i"])(c,{key:e,label:"".concat(e.type,"-").concat(e.name,"-").concat(e.count),value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])])}var We={applicants:[{name:"张三",id:"D1001",type:"餐补",time:"2021-01-01",count:500},{name:"张三",id:"D1001",type:"房补",time:"2021-02-01",count:1200},{name:"张三",id:"D1001",type:"打车费",time:"2021-02-12",count:800}],managers:[{name:"李四",id:"D2001",level:"D2"},{name:"王五",id:"D3001",level:"D3"},{name:"赵六",id:"D4001",level:"D4"}]},Se={name:"WorkbenchApply",props:{selectBlur:Boolean,applicantIndex:Number},data:function(){return{items:We.applicants,itemIndex:this.applicantIndex}},watch:{selectBlur:function(e){e||this.$refs.select.blur()},itemIndex:function(e){this.$emit("change",e)}}};Se.render=Le;var _e=Se,Be={class:"item"},Je=Object(o["m"])("div",{class:"label"},"审批人：",-1),Ve={class:"content"};function Qe(e,t,a,n,r,i){var c=Object(o["M"])("el-option"),l=Object(o["M"])("el-select");return Object(o["D"])(),Object(o["i"])("div",Be,[Je,Object(o["m"])("div",Ve,[Object(o["m"])(l,{modelValue:r.itemIndex,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.itemIndex=e}),placeholder:"请选择",ref:"select"},{default:Object(o["ab"])((function(){return[(Object(o["D"])(!0),Object(o["i"])(o["b"],null,Object(o["K"])(r.items,(function(e,t){return Object(o["D"])(),Object(o["i"])(c,{key:e,label:"".concat(e.name,"-").concat(e.level,"-").concat(e.id),value:t},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])])])}var ze={name:"WorkbenchApproval",props:{selectBlur:Boolean,managerIndex:Number},data:function(){return{items:We.managers,itemIndex:this.managerIndex}},watch:{selectBlur:function(e){e||this.$refs.select.blur()},itemIndex:function(e){this.$emit("change",e)}},methods:{}};ze.render=Qe;var Ue=ze,Fe={components:{WorkbenchApply:_e,WorkbenchApproval:Ue},name:"Workbench",props:{show:{type:Boolean,default:!1}},data:function(){return{applicantIndex:-1,managerIndex:-1}},computed:Object(l["c"])(["lf","workbenchNodeData"]),methods:{handleChange:function(e){switch(this.workbenchNodeData.type){case"apply":this.applicantIndex=e;break;case"approval":this.managerIndex=e;break;default:break}this.applicantIndex=e},handleSubmit:function(){var e;if("apply"===this.workbenchNodeData.type&&this.applicantIndex>=0)e=Object(p["a"])({},We.applicants[this.applicantIndex]);else{if(!("approval"===this.workbenchNodeData.type&&this.managerIndex>=0))return void Te["a"].warning("请选择一组申请示例！");e=Object(p["a"])({},We.managers[this.managerIndex])}this.lf.setProperties(this.workbenchNodeData.id,Object(p["a"])(Object(p["a"])({configured:!0},this.workbenchNodeData.properties),e)),Te["a"].success("配置成功！")}}};a("8feb");Fe.render=Pe;var Ge=Fe,$e={nodes:[{type:"apply",id:1,x:200,y:120,text:"申请",properties:Object(p["a"])(Object(p["a"])({configured:!0,applicantIndex:0},We.applicants[0]),{},{nodeType:g.APPLY})},{type:"approval",id:2,x:360,y:120,text:"审批",properties:Object(p["a"])(Object(p["a"])({configured:!0,managerIndex:0},We.managers[0]),{},{nodeType:g.APPROVAL})},{type:"judgement",id:3,x:540,y:120,text:"报销金额\n是否大于1000元",properties:{configured:!0,nodeType:g.JUDGEMENT}},{type:"approval",id:4,x:700,y:120,text:"审批",properties:Object(p["a"])(Object(p["a"])({configured:!0,managerIndex:1},We.managers[1]),{},{nodeType:g.APPROVAL})},{type:"approval",id:5,x:860,y:120,text:"审批",properties:Object(p["a"])(Object(p["a"])({configured:!0,managerIndex:2},We.managers[2]),{},{nodeType:g.APPROVAL})},{type:"end",id:6,x:1020,y:120,text:"结束",properties:{needConfig:!1,nodeType:g.END}}],edges:[{type:"action",sourceNodeId:1,targetNodeId:2},{type:"action",sourceNodeId:2,targetNodeId:3,text:"通过"},{type:"action",sourceNodeId:3,targetNodeId:4,text:"是"},{type:"action",sourceNodeId:4,targetNodeId:5,text:"通过"},{type:"action",sourceNodeId:5,targetNodeId:6,text:"通过"},{type:"action",text:"否",sourceNodeId:3,targetNodeId:5,startPoint:{x:540,y:80},endPoint:{x:860,y:80}},{type:"action",text:"驳回",sourceNodeId:2,targetNodeId:1,startPoint:{x:360,y:160},endPoint:{x:200,y:150},properties:{actionType:y.REJECT}},{type:"action",text:"驳回",sourceNodeId:4,targetNodeId:1,pointsList:[{x:700,y:160},{x:700,y:220},{x:200,y:220},{x:200,y:150}],properties:{actionType:y.REJECT}},{type:"action",text:"驳回",sourceNodeId:5,targetNodeId:1,pointsList:[{x:860,y:160},{x:860,y:250},{x:200,y:250},{x:200,y:150}],properties:{actionType:y.REJECT}}]};s.a.use(L["a"]),s.a.use(L["b"]);var Ke={name:"Home",components:{Panel:F,HoverCard:ke,Workbench:Ge},data:function(){return{showHoverCard:!1,showWorkbench:!1,hoverCardPosition:{x:0,y:0}}},computed:Object(l["c"])(["lf"]),mounted:function(){var e=document.querySelector("#graph");this.initLogicFlow(e),this.addHoverListener(),this.lf.render($e)},methods:Object(p["a"])(Object(p["a"])({},Object(l["b"])(["initLogicFlow","updateHoverNodeData","updateWorkbenchNodeData"])),{},{startDrag:function(e){var t=this.$store.state.lf;t.dnd.startDrag(e)},addHoverListener:function(){var e=this;this.lf.on("node:mouseenter",(function(t){var a=t.data,n=t.e,o=a.properties;o.configured&&(e.updateHoverNodeData(a),e.showHoverCard=!0,e.hoverCardPosition={x:n.x,y:n.y})})),this.lf.on("node:mouseleave",(function(){e.showHoverCard=!1})),this.lf.on("node:mousedown",(function(){e.showHoverCard=!1})),this.lf.on("node:click",(function(t){var a=t.data;e.updateWorkbenchNodeData(a),e.showWorkbench=!0})),this.lf.on("blank:click",(function(){e.showWorkbench=!1}))}})};a("e2d5");Ke.render=R,Ke.__scopeId="data-v-1118c426";var Xe=Ke,Ye=[{path:"/",name:"Home",component:Xe}],qe=Object(C["a"])({history:Object(C["b"])(),routes:Ye}),Ze=qe;a("7dd6");Object(o["h"])(c).use(I).use(Ze).use(Te["b"]).mount("#app")},cff8:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".panel[data-v-6fabb9c2]{width:70px;display:flex;flex-direction:column;align-items:center;padding:10px 0;border-right:1px solid #ddd;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;position:relative}.panel-item[data-v-6fabb9c2]{margin-bottom:16px}.panel-item[data-v-6fabb9c2]:last-child{margin-bottom:0}.panel .shape[data-v-6fabb9c2]{border:1px solid #55616d;cursor:-webkit-grab;cursor:grab}.panel .text[data-v-6fabb9c2]{margin-top:6px;font-size:14px}.panel .apply[data-v-6fabb9c2],.panel .end[data-v-6fabb9c2]{width:40px;height:40px;border-radius:22px}.panel .approval[data-v-6fabb9c2]{width:42px;height:36px;border-radius:8px}.panel .judgement[data-v-6fabb9c2]{width:30px;height:30px;transform:rotate(45deg)}.panel .color-tip[data-v-6fabb9c2]{position:absolute;top:5px;right:-10px;transform:translateX(100%);width:170px;height:40px;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.3);border-radius:5px;z-index:1;display:flex;align-items:center;justify-content:space-evenly}.panel .color-tip .item .board[data-v-6fabb9c2],.panel .color-tip .item .content[data-v-6fabb9c2]{display:inline-block}.panel .color-tip .item .board[data-v-6fabb9c2]{width:10px;height:10px}.panel .color-tip .item .content[data-v-6fabb9c2]{font-size:14px;padding-left:5px}",""]),e.exports=t},d061:function(e,t,a){"use strict";a("3ff1")},dcde:function(e,t,a){var n=a("e49d");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=a("499e").default;o("5bcc9bb4",n,!0,{sourceMap:!1,shadowMode:!1})},de12:function(e,t,a){"use strict";a("9023")},dfc0:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"*{margin:0;padding:0;box-sizing:border-box}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}",""]),e.exports=t},e2d5:function(e,t,a){"use strict";a("7f1a")},e49d:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".workbench{position:absolute;top:0;right:0;width:400px;height:100%;background-color:#fff;box-shadow:0 0 8px 2px #c8c8c8;border-top-left-radius:12px;border-bottom-left-radius:12px;transform:translateX(100%);transition:all .3s cubic-bezier(.03,.75,.38,.98);text-align:left}.workbench .title{height:60px;line-height:60px;padding-left:20px;border-bottom:1px solid #ddd}.workbench .main{padding:20px}.workbench .main .item{margin-bottom:10px}.workbench .main .item .content,.workbench .main .item .label{display:inline-block;padding:2px 0 2px 6px}.show-workbench{transform:translateX(0)}",""]),e.exports=t}});
//# sourceMappingURL=app.a16b751c.js.map