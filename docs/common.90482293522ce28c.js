"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[592],{53:(T,v,n)=>{n.d(v,{W:()=>o});var e=n(5e3),t=n(2626),y=n(6832),h=n(4419),C=n(3455),M=n(6335),P=n(6101),_=n(9033),g=n(9352),c=n(9808),p=n(5405),f=n(6762),E=n(5499);function O(a,d){if(1&a&&e._UZ(0,"app-req-list-item",18),2&a){const s=e.oxw().$implicit,l=e.oxw();e.Q6J("req",l.getRequestList(s))}}function r(a,d){if(1&a&&e._UZ(0,"app-task-list-item",19),2&a){const s=e.oxw().$implicit,l=e.oxw();e.Q6J("flTask",l.getTaskList(s))}}function u(a,d){if(1&a&&e._UZ(0,"app-milestone-card",20),2&a){const s=e.oxw().$implicit,l=e.oxw();e.Q6J("flMilestone",l.getMilestoneList(s))}}function i(a,d){if(1&a){const s=e.EpF();e.TgZ(0,"div")(1,"div",11)(2,"div",12)(3,"input",13),e.NdJ("click",function(m){const A=e.CHM(s).$implicit;return e.oxw().selecting(A.id,m)}),e.qZA()(),e.TgZ(4,"div",14),e.YNc(5,O,1,1,"app-req-list-item",15),e.YNc(6,r,1,1,"app-task-list-item",16),e.YNc(7,u,1,1,"app-milestone-card",17),e.qZA()()()}if(2&a){const s=d.$implicit,l=e.oxw();e.xp6(3),e.Q6J("checked",l.selected.includes(s.id?s.id:-1)),e.xp6(2),e.Q6J("ngIf","request"==l.type),e.xp6(1),e.Q6J("ngIf","task"==l.type),e.xp6(1),e.Q6J("ngIf","milestone"==l.type)}}let o=(()=>{class a{constructor(s,l,m,x,A,S,w){this.route=s,this.requestQuery=l,this.taskQuery=m,this.milestoneQuery=x,this.requestService=A,this.taskService=S,this.milestoneService=w,this.selected=[],this.closed=new e.vpe,this.selectedList=new e.vpe}ngOnInit(){}ngAfterContentInit(){"request"===this.type?(this.requestService.getall(),this.list=this.requestQuery.$requests):"task"===this.type?(this.taskService.getall(),this.list=this.taskQuery.$tasks):"milestone"===this.type&&(this.milestoneService.getall(),this.list=this.milestoneQuery.$milestones),this.preSelected&&(this.selected=this.preSelected)}selecting(s,l){if(s)if(l.target.checked)this.multiSelect?this.selected.push(s):this.selected=[s];else{let m=this.selected.indexOf(s);this.selected.splice(m,1)}}pickSelectedRequest(){if(this.selected.length>0)this.selectedList.emit(this.multiSelect?this.selected:this.selected[0]);else{let s;this.multiSelect&&(s=this.selected),this.selectedList.emit(s)}this.close()}close(){this.closed.emit(!1)}getRequestList(s){return s}getTaskList(s){return s}getMilestoneList(s){return s}creatingNew(){this.sourceId&&this.route.navigate([`/${this.type}/new`],{queryParams:{id:this.sourceId}})}}return a.\u0275fac=function(s){return new(s||a)(e.Y36(t.F0),e.Y36(y.Z),e.Y36(h.R),e.Y36(C.l),e.Y36(M.P),e.Y36(P.Y),e.Y36(_.l))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-associate"]],inputs:{preSelected:["preselect","preSelected"],multiSelect:"multiSelect",sourceId:"sourceId",type:"type"},outputs:{closed:"closed",selectedList:"selectedList"},decls:18,vars:9,consts:[[1,"body"],[1,"header"],[1,"search-container"],[1,"icon-div",3,"click"],[1,"material-symbols-rounded"],[1,"am-demo-bd"],[2,"border-bottom","1px solid #ddd"],[3,"placeholder","maxLength"],["Button","",1,"button",3,"type","size","inline","click"],[1,"main"],[4,"ngFor","ngForOf"],[1,"option-card"],[1,"checkbox-container"],["type","checkbox",3,"checked","click"],[1,"element-container"],[3,"req",4,"ngIf"],[3,"flTask",4,"ngIf"],[3,"flMilestone",4,"ngIf"],[3,"req"],[3,"flTask"],[3,"flMilestone"]],template:function(s,l){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.NdJ("click",function(){return l.close()}),e.TgZ(4,"span",4),e._uU(5," close "),e.qZA()(),e.TgZ(6,"div",5)(7,"div",6),e._UZ(8,"SearchBar",7),e.qZA()(),e.TgZ(9,"div",3),e.NdJ("click",function(){return l.pickSelectedRequest()}),e.TgZ(10,"span",4),e._uU(11," done "),e.qZA()()(),e.TgZ(12,"div",8),e.NdJ("click",function(){return l.creatingNew()}),e._uU(13),e.qZA()(),e.TgZ(14,"div",9)(15,"List"),e.YNc(16,i,8,4,"div",10),e.ALo(17,"async"),e.qZA()()()),2&s&&(e.xp6(8),e.Q6J("placeholder","Search")("maxLength",20),e.xp6(4),e.Q6J("type","primary")("size","small")("inline",!0),e.xp6(1),e.hij("new ",l.type,""),e.xp6(3),e.Q6J("ngForOf",e.lcZ(17,7,l.list)))},directives:[g.NB,g.r0,g.ns,c.sg,c.O5,p.U,f.T,E.T],pipes:[c.Ov],styles:[".body[_ngcontent-%COMP%]{display:grid;grid-template-rows:auto 1fr;grid-template-columns:1fr;height:100%;position:relative}.search-container[_ngcontent-%COMP%]{height:50px;width:100%;display:grid;grid-template-columns:50px auto 50px;align-items:center;background-color:#fff}.header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start}.main[_ngcontent-%COMP%]{overflow-y:auto;height:100%}.icon-div[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.option-card[_ngcontent-%COMP%]{display:flex;text-align:start;padding:0 10px}.checkbox-container[_ngcontent-%COMP%]{padding:13px 12px 0 5px}.checkbox-container[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{width:20px;height:20px}.element-container[_ngcontent-%COMP%]{flex:1}.button[_ngcontent-%COMP%]{margin-left:17px;cursor:pointer}"]}),a})()},622:(T,v,n)=>{n.d(v,{e:()=>P});var e=n(8505),t=n(2340),y=n(8025),h=n(5e3),C=n(4277),M=n(520);let P=(()=>{class _{constructor(c,p){this.authStore=c,this.http=p;let f=window.sessionStorage.getItem("AkitaStores");f&&this.get(JSON.parse(f).auth).subscribe()}get(c){return this.http.get(`${t.N.strapi_server}/api/auth/${t.N.strapi_auth_provider}/callback`,{params:{access_token:c}}).pipe((0,e.b)(p=>{p.accessToken=c,this.authStore.update(p)}))}add(c){this.authStore.add(c)}update(c,p){this.authStore.update(c,p)}remove(c){this.authStore.remove(c)}reset(){this.authStore.update((0,y.l)({})),window.sessionStorage.clear()}}return _.\u0275fac=function(c){return new(c||_)(h.LFG(C.C),h.LFG(M.eN))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},4465:(T,v,n)=>{n.d(v,{e:()=>O});var e=n(9808),t=n(5e3),y=n(7465),h=n(2626);let C=(()=>{class r{constructor(){this.entities=["Request","Task","Milestone"],this.categories=["Issue","Feature","Feedback"],this.severities=["ShowStopper","Critical","Major","Minor"],this.modules=["Grid","Canvas","Explorer","Data Panel","IDE Client","IDE Server","Style Panel","Route","Offline"],this.taskPriorites=["Urgent","High","Medium","Low"],this.taskStatus=["Yet To Start","In Discussion","In Progress","Completed","Testing","Released"],this.milestoneStatus=["Yet To Start","In Discussion","In Progress","Completed","Testing","Released"]}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var M=n(6335),P=n(9565),_=n(4817),g=n(7797),c=n(6718),p=n(2382);let f=(()=>{class r{constructor(){this.name="",this.options=[],this.defaultValue="",this.size="small"}ngOnInit(){this.selectOptions=this.options.map(i=>({label:i,value:i}))}}return r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-field-select"]],inputs:{name:"name",options:"options",defaultValue:"defaultValue",size:"size"},decls:1,vars:5,consts:[["nzAllowClear","",3,"nzSize","nzOptions","ngModel","nzPlaceHolder","nzShowArrow"]],template:function(i,o){1&i&&t._UZ(0,"nz-select",0),2&i&&t.Q6J("nzSize",o.size)("nzOptions",o.selectOptions)("ngModel",o.defaultValue)("nzPlaceHolder","No "+o.name)("nzShowArrow",!1)},directives:[c.Vq,p.JJ,p.On],styles:["nz-select[_ngcontent-%COMP%]{min-width:80px}nz-option-item[_ngcontent-%COMP%]{width:-moz-fit-content!important;width:fit-content!important}"]}),r})();const E=function(r){return{opacity:r}};let O=(()=>{class r{constructor(i,o,a,d,s){this.global=i,this.activatedRoute=o,this.fields=a,this.requestService=d,this.navigationService=s,this.entity="",this.entityPlaceholder="Title",this.showModel=!1,this.request={}}ngOnInit(){this.activatedRoute.params.subscribe(i=>{i.entity&&(this.entity=(new e.rS).transform(i.entity)),this.entityPlaceholder=this.entity+" title"}),this.entityPlaceholder=this.entity+" title"}ngAfterViewInit(){}postEntity(){this.canPostEntity()&&this.requestService.addRequest(this.request)}canPostEntity(){return!!this.request.rawContent}getEntityList(){let i=[];return this.fields.entities.forEach(o=>i.push({label:o,value:o})),i}getTag(i){"Category"==i.type?this.request.category=i.tag:"Severity"==i.type?this.request.severity=i.tag:"Module"==i.type?this.request.module=i.tag:console.log("Unknown tag type: ",i.type)}getMention(i){console.log(i)}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(y.U),t.Y36(h.gz),t.Y36(C),t.Y36(M.P),t.Y36(P.f))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-create-new-entity"]],inputs:{entity:"entity"},decls:26,vars:15,consts:[[1,"new-entity-container"],[1,"nec-modal"],["model",""],[1,"nec-modal-header"],[1,"nec-modal-header-left","nec-modal-div"],[1,"button-feel","button-feel-accent","soft-span-text"],[1,"arrow-span"],[1,"soft-span-text"],[1,"nec-modal-header-right","nec-modal-div"],["appBackButton","",1,"material-symbols-rounded","button-icon","nec-close-btn"],[1,"nec-modal-body"],[1,"nec-editor"],["placeholder","Say Something",1,"nec-markdown-editor",3,"tagArray","mentionArray","enableMenu","jsonContent","selectedMention","jsonContentChange","content","selectedTag"],[1,"nec-entity-fields"],["name","Category",3,"options","defaultValue"],["name","Severity",3,"options","defaultValue"],["name","Module",3,"options","defaultValue"],[1,"nec-modal-footer"],[1,"nec-modal-footer-left","nec-modal-div"],[1,"nec-modal-footer-right","nec-modal-div"],[1,"button-feel","button-feel-accent","button-icon","nec-post-btn",3,"ngStyle","click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1,2)(3,"div",3)(4,"div",4)(5,"div",5),t._uU(6," New "),t.qZA(),t.TgZ(7,"span",6),t._uU(8,"\u203a"),t.qZA(),t.TgZ(9,"span",7),t._uU(10),t.qZA()(),t.TgZ(11,"div",8)(12,"span",9),t._uU(13," close "),t.qZA()()(),t.TgZ(14,"div",10)(15,"div",11)(16,"markdown-editor",12),t.NdJ("selectedMention",function(d){return o.getMention(d)})("jsonContentChange",function(d){return o.request.content=d})("content",function(d){return o.request.rawContent=d.raw})("selectedTag",function(d){return o.getTag(d)}),t.qZA()(),t.TgZ(17,"div",13),t._UZ(18,"app-field-select",14)(19,"app-field-select",15)(20,"app-field-select",16),t.qZA()(),t.TgZ(21,"div",17),t._UZ(22,"div",18),t.TgZ(23,"div",19)(24,"div",20),t.NdJ("click",function(){return o.postEntity()}),t._uU(25),t.qZA()()()()()),2&i&&(t.xp6(10),t.Oqu(o.entity),t.xp6(6),t.Q6J("tagArray",o.global.tagArray)("mentionArray",o.global.mentionArray)("enableMenu",!1)("jsonContent",o.request.content),t.xp6(2),t.Q6J("options",o.fields.categories)("defaultValue",o.request.category),t.xp6(1),t.Q6J("options",o.fields.severities)("defaultValue",o.request.severity),t.xp6(1),t.Q6J("options",o.fields.modules)("defaultValue",o.request.module),t.xp6(4),t.Q6J("ngStyle",t.VKq(13,E,o.canPostEntity()?1:.5)),t.xp6(1),t.hij("Post ",o.entity,""))},directives:[_.z,g.k1,f,e.PC],styles:[".new-entity-container[_ngcontent-%COMP%]{width:100%;height:100%;padding:12px 0;background-color:transparent}.nec-loader[_ngcontent-%COMP%]{height:30%}.nec-modal[_ngcontent-%COMP%]{width:94vw;overflow:scroll;margin:auto;border-radius:16px;background-color:#fff;box-shadow:#0000001f 0 1px 3px,#0000003d 0 1px 2px}.nec-modal-header[_ngcontent-%COMP%], .nec-modal-footer[_ngcontent-%COMP%]{padding:12px;display:flex;min-height:45px;max-height:50px;justify-content:space-between}.nec-modal-footer[_ngcontent-%COMP%]{border-top:1px solid var(--dim-bg-color)}.nec-modal-div[_ngcontent-%COMP%]{display:flex;align-items:center}.arrow-span[_ngcontent-%COMP%]{margin:0 12px;color:gray}.nec-close-btn[_ngcontent-%COMP%]{color:gray}.nec-post-btn[_ngcontent-%COMP%]{font-size:1rem;padding:8px 12px;border-radius:16px}.nec-entity-fields[_ngcontent-%COMP%]{display:flex;padding:12px;margin-top:12px}.nec-entity-fields[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{margin-right:12px}"]}),r})()}}]);