"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[731],{5499:(C,m,e)=>{e.d(m,{T:()=>i});var t=e(5e3),r=e(2626),c=e(9352),s=e(9808),n=e(4342);function a(g,v){if(1&g){const d=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){return t.CHM(d),t.oxw().openmilestone()}),t.TgZ(1,"div",4),t._UZ(2,"nz-progress",5),t.TgZ(3,"div",6)(4,"div",7)(5,"span"),t._uU(6),t.qZA()(),t.TgZ(7,"div",8)(8,"span")(9,"span",9),t._uU(10),t.qZA(),t._uU(11),t.ALo(12,"date"),t.qZA()()(),t.TgZ(13,"div",10)(14,"div",11),t._uU(15),t.qZA(),t.TgZ(16,"span",12),t._uU(17,"more_vert"),t.qZA()()()()}if(2&g){const d=t.oxw();t.xp6(2),t.Q6J("nzStrokeColor","var(--accent-text-color)")("nzPercent",null==d.milestone?null:d.milestone.percentage)("nzWidth",50),t.xp6(4),t.Oqu(null==d.milestone?null:d.milestone.title),t.xp6(4),t.Oqu(null==d.milestone?null:d.milestone.status),t.xp6(1),t.hij(" . ",t.lcZ(12,7,null==d.milestone?null:d.milestone.createdAt),""),t.xp6(4),t.Oqu(null==d.milestone?null:d.milestone.taskCount)}}function o(g,v){if(1&g&&(t.TgZ(0,"div",13)(1,"div",14),t._UZ(2,"nz-progress",5),t.TgZ(3,"div")(4,"span",15),t._uU(5),t.qZA(),t.TgZ(6,"span",16),t._uU(7),t.ALo(8,"date"),t.qZA()()()()),2&g){const d=t.oxw();t.xp6(2),t.Q6J("nzStrokeColor","var(--accent-text-color)")("nzPercent",null==d.milestone?null:d.milestone.percentage)("nzWidth",50),t.xp6(3),t.Oqu(null==d.milestone?null:d.milestone.title),t.xp6(2),t.Oqu(t.lcZ(8,5,null==d.milestone?null:d.milestone.createdAt))}}let i=(()=>{class g{constructor(d){this.route=d}ngOnInit(){this.milestone=this.flMilestone}openmilestone(){this.milestone&&this.route.navigate([`/milestone/view/${this.milestone.id}`])}}return g.\u0275fac=function(d){return new(d||g)(t.Y36(r.F0))},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-milestone-card"]],inputs:{milestone:"milestone",flMilestone:"flMilestone",size:"size"},decls:3,vars:3,consts:[[3,"size"],["class","card-body",3,"click",4,"ngIf"],["class","rlth-minsize",4,"ngIf"],[1,"card-body",3,"click"],[1,"header"],["nzType","circle",1,"rlth-time-icon","progress-icon",3,"nzStrokeColor","nzPercent","nzWidth"],[1,"title-container"],[1,"title-div"],[1,"status-time-div"],[1,"status"],[1,"task-div"],[1,"task"],[1,"material-symbols-rounded"],[1,"rlth-minsize"],[1,"milestone-content"],[1,"rlth-title"],[1,"rlth-date"]],template:function(d,f){1&d&&(t._UZ(0,"WhiteSpace",0),t.YNc(1,a,18,9,"div",1),t.YNc(2,o,9,7,"div",2)),2&d&&(t.Q6J("size","md"),t.xp6(1),t.Q6J("ngIf",!f.size),t.xp6(1),t.Q6J("ngIf",f.size))},directives:[c.yG,s.O5,n.M],pipes:[s.uU],styles:[".card-body[_ngcontent-%COMP%]{width:100%;font-size:1rem}.header[_ngcontent-%COMP%]{width:100%;display:flex;align-items:flex-start}.title-container[_ngcontent-%COMP%]{flex:1;overflow:hidden}.title-div[_ngcontent-%COMP%], .status[_ngcontent-%COMP%]{font-weight:500;text-transform:capitalize;overflow:hidden;text-overflow:ellipsis}.status-time-div[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dim-text-color)}.task-div[_ngcontent-%COMP%]{display:flex;align-items:flex-start}.task[_ngcontent-%COMP%]{background-color:var(--dim-bg-color);padding:2px 10px;border-radius:25px}.progress-icon[_ngcontent-%COMP%]{background-color:#f5f5f5;border-radius:50%;margin-right:8px;text-align:center}"]}),g})()},5405:(C,m,e)=>{e.d(m,{U:()=>E});var t=e(5e3),r=e(7465),c=e(2626),s=e(6819),n=e(5319),a=e(9808),o=e(4112),i=e(1312);const g=["content"];function v(p,M){if(1&p&&(t._UZ(0,"img",14),t.ALo(1,"categoryImgPath")),2&p){const l=t.oxw(3);t.Q6J("src",t.lcZ(1,1,l.request.category),t.LSH)}}function d(p,M){if(1&p&&(t.TgZ(0,"header",8)(1,"div",9)(2,"span",10),t.YNc(3,v,2,3,"img",7),t.qZA(),t.TgZ(4,"div",11)(5,"span",12),t._uU(6),t.TgZ(7,"span",13),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"span",6)(11,"span"),t._uU(12),t.qZA()()()()()),2&p){const l=t.oxw(2);t.xp6(3),t.Q6J("ngIf",l.request.category),t.xp6(3),t.hij(" ",l.request.category," . "),t.xp6(2),t.Oqu(t.lcZ(9,5,l.request.createdAt)),t.xp6(4),t.AsE("",l.req.userEmail," . ",l.request.status,"")}}function f(p,M){if(1&p&&t._UZ(0,"img",16),2&p){const l=t.oxw(3);t.Q6J("src",l.user.picture,t.LSH)}}function O(p,M){if(1&p&&(t.TgZ(0,"header",8)(1,"div",9)(2,"span",10),t.YNc(3,f,1,1,"img",15),t.qZA(),t.TgZ(4,"div",11)(5,"span",12),t._uU(6),t.qZA(),t.TgZ(7,"span",6),t._uU(8),t.qZA()()()()),2&p){const l=t.oxw(2);t.xp6(3),t.Q6J("ngIf",l.request.category),t.xp6(3),t.hij(" ",l.user.name," "),t.xp6(2),t.hij(" ",l.user.email," ")}}function u(p,M){if(1&p&&(t._UZ(0,"img",14),t.ALo(1,"categoryImgPath")),2&p){const l=t.oxw(2);t.Q6J("src",t.lcZ(1,1,l.request.category),t.LSH)}}function h(p,M){if(1&p){const l=t.EpF();t.TgZ(0,"div",2),t.NdJ("click",function(){return t.CHM(l),t.oxw().openRequest()}),t.YNc(1,d,13,7,"header",3),t.YNc(2,O,9,3,"header",3),t._UZ(3,"div",4),t.TgZ(4,"footer",5)(5,"div",6),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"div",6),t._uU(9),t.YNc(10,u,2,3,"img",7),t.qZA()()()}if(2&p){const l=t.oxw();t.xp6(1),t.Q6J("ngIf",!l.style),t.xp6(1),t.Q6J("ngIf","new"===l.style&&l.user),t.xp6(1),t.Q6J("MarkdownContentParser",l.request.content),t.xp6(3),t.AsE(" ",t.xi3(7,7,l.request.createdAt,"h:mm a . MMM d, y")," . ",l.request.status," "),t.xp6(3),t.hij(" ",l.request.category," "),t.xp6(1),t.Q6J("ngIf",l.request.category)}}function _(p,M){if(1&p&&(t._UZ(0,"img",14),t.ALo(1,"categoryImgPath")),2&p){const l=t.oxw(2);t.Q6J("src",t.lcZ(1,1,l.request.category),t.LSH)}}function x(p,M){if(1&p&&(t.TgZ(0,"div",17)(1,"div",18)(2,"span",19),t.YNc(3,_,2,3,"img",7),t.qZA(),t.TgZ(4,"div"),t._UZ(5,"span",20),t.TgZ(6,"span",21),t._uU(7),t.ALo(8,"date"),t.qZA()()()()),2&p){const l=t.oxw();t.xp6(3),t.Q6J("ngIf",l.request.category),t.xp6(2),t.Q6J("MarkdownContentParser",l.request.content),t.xp6(2),t.Oqu(t.lcZ(8,3,l.request.createdAt))}}let E=(()=>{class p{constructor(l,P,y,T){this.global=l,this.router=P,this.userQuery=y,this.userService=T,this.req={},this.disabled=!0}ngOnInit(){this.request=this.req,this.userService.get(this.req.createdByUser).subscribe(),this.userSubscription=this.userQuery.selectEntity(this.req.createdByUser).subscribe(l=>{l&&(this.user=l)})}ngAfterViewInit(){}openRequest(){this.request&&!this.disabled&&this.router.navigate([`/request/view/${this.request.id}`])}ngOnDestroy(){this.userSubscription&&this.userSubscription.unsubscribe()}}return p.\u0275fac=function(l){return new(l||p)(t.Y36(r.U),t.Y36(c.F0),t.Y36(s.o),t.Y36(n.T))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-req-list-item"]],viewQuery:function(l,P){if(1&l&&t.Gf(g,5),2&l){let y;t.iGM(y=t.CRH())&&(P.content=y.first)}},inputs:{request:"request",req:"req",disabled:"disabled",size:"size",style:"style"},decls:2,vars:2,consts:[["class","req-list-item-body",3,"click",4,"ngIf"],["class","rlth-minsize",4,"ngIf"],[1,"req-list-item-body",3,"click"],["class","req-list-item-header",4,"ngIf"],[1,"req-list-item-container",3,"MarkdownContentParser"],[1,"req-list-item-footer"],[1,"rlth-time-user"],["alt","",3,"src",4,"ngIf"],[1,"req-list-item-header"],[1,"rlth-time"],[1,"material-symbols-rounded","rlth-time-icon"],[1,"rlth-time-div"],[1,"rlth-time-text"],[1,"rlth-time-value"],["alt","",3,"src"],["class","rlth-time-icon","alt","",3,"src",4,"ngIf"],["alt","",1,"rlth-time-icon",3,"src"],[1,"rlth-minsize"],[1,"milestone-content"],[1,"material-symbols-rounded","rlth-time-iconlist"],[1,"rlth-title",3,"MarkdownContentParser"],[1,"rlth-date"]],template:function(l,P){1&l&&(t.YNc(0,h,11,10,"div",0),t.YNc(1,x,9,5,"div",1)),2&l&&(t.Q6J("ngIf",!P.size),t.xp6(1),t.Q6J("ngIf",P.size))},directives:[a.O5,o.J],pipes:[i.I,a.uU],styles:[".req-list-item-body[_ngcontent-%COMP%]{width:100%;height:-moz-fit-content;height:fit-content;display:flex;flex-direction:column;padding-bottom:6px}.req-list-item-header[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:space-between;align-items:center}.req-list-item-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;white-space:break-spaces;font-size:1rem;padding-top:3px}.req-list-item-footer[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:space-between;align-items:center}.rlth-time[_ngcontent-%COMP%]{display:flex;flex:3;align-items:flex-start;height:100%}.rlth-time-icon[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;margin-right:6px;text-align:center;display:flex;justify-content:center;align-items:center}.rlth-time-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px;margin:auto}.rlth-time-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;max-width:100%;font-size:1rem}.rlth-time-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1}.rlth-time-text[_ngcontent-%COMP%]{font-weight:450;font-size:1rem;text-transform:capitalize}.rlth-time-user[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dim-text-color);text-align:center}.rlth-time-value[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dim-text-color)}.rlth-status[_ngcontent-%COMP%]{flex:1;font-size:.9rem;display:flex;justify-content:flex-end;align-items:flex-start;max-width:50%}.rlth-status-span[_ngcontent-%COMP%]{font-size:1rem;background-color:#efd0dd;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;border-radius:25px;color:#ad1457}.rlth-options-span[_ngcontent-%COMP%]{cursor:pointer}.rli-start[_ngcontent-%COMP%], .rli-end[_ngcontent-%COMP%]{display:flex;flex:1}.rli-start[_ngcontent-%COMP%]{justify-content:flex-start}.rli-end[_ngcontent-%COMP%]{justify-content:flex-end}.rli-end[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{justify-content:flex-end}.rlth-time-iconlist[_ngcontent-%COMP%]{width:40px;height:40px;background-color:#f5f5f5;border-radius:50%;text-align:center;display:flex;justify-content:center;align-items:center}.rlth-time-iconlist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;height:18px;margin:auto}.rlth-details-gap[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.rlth-title[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;font-size:.9rem}.rlth-date[_ngcontent-%COMP%]{font-size:.8rem}"]}),p})()},6762:(C,m,e)=>{e.d(m,{T:()=>O});var t=e(5e3),r=e(2626),c=e(6819),s=e(9352),n=e(9808),a=e(4342);let o=(()=>{class u{constructor(){this.status=""}ngOnInit(){}}return u.\u0275fac=function(_){return new(_||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-status-tag"]],inputs:{status:"status"},decls:2,vars:1,consts:[[1,"rlth-status-span"]],template:function(_,x){1&_&&(t.TgZ(0,"span",0),t._uU(1),t.qZA()),2&_&&(t.xp6(1),t.Oqu(x.status))},styles:["span[_ngcontent-%COMP%]{font-size:1rem;background-color:var(--dim-bg-color);width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;padding:2px 10px;border-radius:25px}"]}),u})();var i=e(4112);function g(u,h){if(1&u&&t._UZ(0,"div",14),2&u){const _=t.oxw(2);t.Q6J("MarkdownContentParser",_.task.content)}}function v(u,h){if(1&u){const _=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){return t.CHM(_),t.oxw().openTask()}),t.TgZ(1,"header",4)(2,"div",5),t._UZ(3,"nz-progress",6),t.TgZ(4,"div",7)(5,"span",8),t._uU(6),t.TgZ(7,"span",9),t._uU(8),t.ALo(9,"date"),t.qZA()(),t.TgZ(10,"span",9),t._uU(11),t.qZA()()(),t.TgZ(12,"div",10),t._UZ(13,"app-status-tag",11),t.TgZ(14,"span",12),t._uU(15," more_vert "),t.qZA()()(),t.YNc(16,g,1,1,"div",13),t.qZA()}if(2&u){const _=t.oxw();t.xp6(3),t.Q6J("nzStrokeColor","var(--accent-text-color)")("nzPercent",_.task.percentage)("nzWidth",50),t.xp6(3),t.hij(" ",_.task.status,""),t.xp6(2),t.hij(" . ",t.lcZ(9,8,_.task.createdAt),""),t.xp6(3),t.hij(" ",_.flTask.userEmail," "),t.xp6(2),t.Q6J("status",_.task.requestCount?_.task.requestCount.toString():"0"),t.xp6(3),t.Q6J("ngIf",_.task.content)}}function d(u,h){if(1&u&&t._UZ(0,"span",19),2&u){const _=t.oxw(2);t.Q6J("MarkdownContentParser",_.task.content)}}function f(u,h){if(1&u&&(t.TgZ(0,"div",15)(1,"div",16),t._UZ(2,"nz-progress",6),t.TgZ(3,"div"),t.YNc(4,d,1,1,"span",17),t.TgZ(5,"span",18),t._uU(6),t.ALo(7,"date"),t.qZA()()()()),2&u){const _=t.oxw();t.xp6(2),t.Q6J("nzStrokeColor","var(--accent-text-color)")("nzPercent",_.task.percentage)("nzWidth",50),t.xp6(2),t.Q6J("ngIf",_.task.content),t.xp6(2),t.Oqu(t.lcZ(7,5,_.task.createdAt))}}let O=(()=>{class u{constructor(_,x){this.router=_,this.userQuery=x,this.flTask={},this.disabled=!0}ngOnInit(){this.task=this.flTask}openTask(){this.task&&!this.disabled&&this.router.navigate([`/task/view/${this.task.id}`])}}return u.\u0275fac=function(_){return new(_||u)(t.Y36(r.F0),t.Y36(c.o))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-task-list-item"]],inputs:{task:"task",flTask:"flTask",disabled:"disabled",size:"size"},decls:3,vars:3,consts:[[3,"size"],["class","req-list-item-body",3,"click",4,"ngIf"],["class","rlth-minsize",4,"ngIf"],[1,"req-list-item-body",3,"click"],[1,"req-list-item-header"],[1,"rlth-time"],["nzType","circle",1,"rlth-time-icon",3,"nzStrokeColor","nzPercent","nzWidth"],[1,"rlth-time-div"],[1,"rlth-time-text"],[1,"rlth-time-user"],[1,"rlth-status"],[3,"status"],[1,"material-symbols-rounded","rlth-options-span"],["class","req-list-item-container",3,"MarkdownContentParser",4,"ngIf"],[1,"req-list-item-container",3,"MarkdownContentParser"],[1,"rlth-minsize"],[1,"milestone-content"],["class","rlth-title",3,"MarkdownContentParser",4,"ngIf"],[1,"rlth-date"],[1,"rlth-title",3,"MarkdownContentParser"]],template:function(_,x){1&_&&(t._UZ(0,"WhiteSpace",0),t.YNc(1,v,17,10,"div",1),t.YNc(2,f,8,7,"div",2)),2&_&&(t.Q6J("size","md"),t.xp6(1),t.Q6J("ngIf",!x.size),t.xp6(1),t.Q6J("ngIf",x.size))},directives:[s.yG,n.O5,a.M,o,i.J],pipes:[n.uU],styles:[".req-list-item-body[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;font-size:1rem}.req-list-item-header[_ngcontent-%COMP%]{flex:1;display:flex}.req-list-item-container[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;white-space:break-spaces;font-size:1rem;padding:12px 0 6px}.req-list-item-footer[_ngcontent-%COMP%]{max-height:60px;flex:1;background-color:#f5f5f5;display:flex}.rlth-time[_ngcontent-%COMP%]{display:flex;flex:3;align-items:flex-start;height:100%}.rlth-time-icon[_ngcontent-%COMP%]{max-width:40px;max-height:40px;background-color:#f5f5f5;border-radius:50%;margin-right:8px;text-align:center;display:flex;justify-content:center;align-items:center}.rlth-time-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:28px;height:28px;margin:auto}.rlth-time-div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-self:center;max-width:100%;font-size:1rem}.rlth-time-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex:1;align-self:flex-start}.rlth-time-text[_ngcontent-%COMP%]{font-weight:500;font-size:1rem;text-transform:capitalize}.rlth-time-user[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dim-text-color);overflow:hidden;text-overflow:ellipsis;max-width:calc(90vw - 120px)}.rlth-time-value[_ngcontent-%COMP%]{font-size:.8rem;color:var(--dim-text-color)}.rlth-status[_ngcontent-%COMP%]{flex:1;font-size:.9rem;display:flex;justify-content:flex-end;max-width:50%;column-gap:4px}.rlth-status-span[_ngcontent-%COMP%]{font-size:1rem;background-color:#efd0dd;width:-moz-fit-content;width:fit-content;height:-moz-fit-content;height:fit-content;border-radius:25px;color:#ad1457}.rli-start[_ngcontent-%COMP%], .rli-end[_ngcontent-%COMP%]{display:flex;flex:1}.rli-start[_ngcontent-%COMP%]{justify-content:flex-start}.rli-end[_ngcontent-%COMP%]{justify-content:flex-end}.rli-end[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{justify-content:flex-end}footer[_ngcontent-%COMP%]{margin-top:6px;display:flex;border-top:1px solid var(--dim-bg-color);font-size:.9rem;justify-content:flex-end;align-content:center;color:var(--dim-text-color)}button[_ngcontent-%COMP%]{border-radius:15px;padding:1px 8px;border:1px solid transparent;align-self:flex-start;position:relative;background-color:var(--dim-bg-color)}button[_ngcontent-%COMP%] > .dot[_ngcontent-%COMP%]{position:absolute;right:-4px;top:-9px;min-width:13px;max-width:25px;height:14px;border-radius:20px;background-color:#108ee9;padding:0 4%;color:#fff;font-size:10px}"]}),u})()},3455:(C,m,e)=>{e.d(m,{l:()=>n});var t=e(655),r=e(1469),c=e(5e3),s=e(7564);let n=class extends r.Gv{constructor(o){super(o),this.store=o,this.$milestones=this.selectAll(),this.$milestoneCount=this.selectCount()}getMilestonesByStatus(o){return"All"===o?this.selectAll():this.selectAll({filterBy:i=>i.status===o})}getMilestonesByStatusCount(o){return"All"===o?this.selectCount():this.selectCount(i=>i.status===o)}};n.\u0275fac=function(o){return new(o||n)(c.LFG(s.w))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n=(0,t.gn)([(0,r.xR)({sortBy:"updatedAt",sortByOrder:r.KM.DESC})],n)},9033:(C,m,e)=>{e.d(m,{l:()=>n});var t=e(914),r=e(5e3),c=e(7564),s=e(3616);let n=(()=>{class a extends t.Hb{constructor(i,g){super(i),this.store=i,this.authQuery=g,this.appConfig={headers:{Authorization:`Bearer ${this.authQuery.jwtToken}`}},this.authQuery.$jwtToken.subscribe(v=>this.appConfig={headers:{Authorization:`Bearer ${v}`}})}getall(){return this.get({params:{populate:"*"},headers:this.appConfig.headers}).subscribe()}getOne(i){return this.get(i,{params:{populate:"*"},headers:this.appConfig.headers}).subscribe()}addMilestone(i){return this.add(Object.assign(Object.assign({},i),{data:i}),this.appConfig).subscribe()}updateMilestone(i,g){return this.update(i,{data:g},this.appConfig).subscribe()}}return a.\u0275fac=function(i){return new(i||a)(r.LFG(c.w),r.LFG(s.i))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7564:(C,m,e)=>{e.d(m,{w:()=>s});var t=e(655),r=e(1469),c=e(5e3);let s=class extends r.cf{constructor(){super()}};s.\u0275fac=function(a){return new(a||s)},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s=(0,t.gn)([(0,r.yC)({name:"milestones"})],s)},6832:(C,m,e)=>{e.d(m,{Z:()=>n});var t=e(655),r=e(1469),c=e(5e3),s=e(6580);let n=class extends r.Gv{constructor(o){super(o),this.store=o,this.$requests=this.selectAll(),this.$openRequests=this.selectAll({filterBy:i=>"Open"===i.status}),this.$closeRequests=this.selectAll({filterBy:i=>"Close"===i.status}),this.$requestCount=this.selectCount(),this.$openRequestsCount=this.selectCount(i=>"Open"===i.status),this.$closeRequestsCount=this.selectCount(i=>"Close"===i.status)}getRequestsByStatus(o){return"Open"===o?this.$openRequests:"Close"===o?this.$closeRequests:this.$requests}getRequestsByStatusCount(o){return"Open"===o?this.$openRequestsCount:"Close"===o?this.$closeRequestsCount:this.$requestCount}};n.\u0275fac=function(o){return new(o||n)(c.LFG(s.y))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n=(0,t.gn)([(0,r.xR)({sortBy:"updatedAt",sortByOrder:r.KM.DESC})],n)},4419:(C,m,e)=>{e.d(m,{R:()=>n});var t=e(655),r=e(1469),c=e(5e3),s=e(1790);let n=class extends r.Gv{constructor(o){super(o),this.store=o,this.$tasks=this.selectAll(),this.$taskCount=this.selectCount()}getTasksByStatus(o){return"All"===o?this.selectAll():this.selectAll({filterBy:i=>i.status===o})}getTasksByStatusCount(o){return"All"===o?this.selectCount():this.selectCount(i=>i.status===o)}};n.\u0275fac=function(o){return new(o||n)(c.LFG(s.N))},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n=(0,t.gn)([(0,r.xR)({sortBy:"updatedAt",sortByOrder:r.KM.DESC})],n)},6101:(C,m,e)=>{e.d(m,{Y:()=>n});var t=e(914),r=e(5e3),c=e(1790),s=e(3616);let n=(()=>{class a extends t.Hb{constructor(i,g){super(i),this.store=i,this.authQuery=g,this.appConfig={headers:{Authorization:`Bearer ${this.authQuery.jwtToken}`}},this.authQuery.$jwtToken.subscribe(v=>this.appConfig={headers:{Authorization:`Bearer ${v}`}})}getall(){return console.log("Called get in FlTaskService"),this.get({params:{populate:"*"},headers:this.appConfig.headers}).subscribe()}getOne(i){return console.log("Called get in FlTaskService"),this.get(i,{params:{populate:"*"},headers:this.appConfig.headers}).subscribe()}addTask(i){return this.add(Object.assign(Object.assign({},i),{data:i}),this.appConfig).subscribe()}updateTask(i,g){return this.update(i,{data:g},this.appConfig).subscribe()}}return a.\u0275fac=function(i){return new(i||a)(r.LFG(c.N),r.LFG(s.i))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},1790:(C,m,e)=>{e.d(m,{N:()=>s});var t=e(655),r=e(1469),c=e(5e3);let s=class extends r.cf{constructor(){super()}};s.\u0275fac=function(a){return new(a||s)},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s=(0,t.gn)([(0,r.yC)({name:"tasks"})],s)},6819:(C,m,e)=>{e.d(m,{o:()=>s});var t=e(1469),r=e(5e3),c=e(3557);let s=(()=>{class n extends t.Gv{constructor(o){super(o),this.store=o}}return n.\u0275fac=function(o){return new(o||n)(r.LFG(c.X))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},5319:(C,m,e)=>{e.d(m,{T:()=>s});var t=e(914),r=e(5e3),c=e(3557);let s=(()=>{class n extends t.Hb{constructor(o){super(o),this.store=o,console.log("User service")}}return n.\u0275fac=function(o){return new(o||n)(r.LFG(c.X))},n.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},3557:(C,m,e)=>{e.d(m,{X:()=>s});var t=e(655),r=e(1469),c=e(5e3);let s=class extends r.cf{constructor(){super()}};s.\u0275fac=function(a){return new(a||s)},s.\u0275prov=c.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s=(0,t.gn)([(0,r.yC)({name:"users"})],s)},4112:(C,m,e)=>{e.d(m,{J:()=>d});var t=e(6956),r=e(412),c=e(8197),s=e(3981),n=e(5e3),a=e(7465);e(8769);const g={group:"inline",inline:!0,atom:!0,attrs:{tag:{},type:{}},selectable:!1,draggable:!1,toDOM:f=>["a",{class:"tag",tag:f.attrs.tag},"#"+f.attrs.tag]},v={group:"inline",inline:!0,atom:!0,attrs:{name:{},email:{},id:{}},selectable:!1,draggable:!1,toDOM:f=>["a",{class:"mention",mention:f.attrs.name},"@"+f.attrs.name]};let d=(()=>{class f{constructor(u,h){this.element=u,this.global=h,this.customSchema=new c.V_({nodes:s.fK.spec.nodes.append({mention:v,tag:g}),marks:s.fK.spec.marks})}ngAfterViewChecked(){this.editorView.updateState(t.yy.fromJSON({schema:this.customSchema},this.content))}ngAfterViewInit(){if(this.content&&(this.editorView=new r.tk(this.element.nativeElement,{state:t.yy.fromJSON({schema:this.customSchema},this.content),editable:()=>!1})),!this.editorView)return;let u=this.editorView.dom.querySelectorAll(".tag"),h=this.editorView.dom.querySelectorAll(".mention");(u.length>0||h.length>0)&&(u.forEach(_=>{_.addEventListener("click",x=>{let E=_.getAttribute("tag");x.stopPropagation(),this.global.navigatToSearch(E)})}),h.forEach(_=>{_.addEventListener("click",x=>{let E=_.getAttribute("mention");x.stopPropagation(),this.global.navigatToSearch(E)})}))}}return f.\u0275fac=function(u){return new(u||f)(n.Y36(n.SBq),n.Y36(a.U))},f.\u0275dir=n.lG2({type:f,selectors:[["","MarkdownContentParser",""]],inputs:{content:["MarkdownContentParser","content"]}}),f})()},9830:(C,m,e)=>{e.d(m,{Fz:()=>t,Ly:()=>r,MM:()=>s,gE:()=>c});var t=(()=>{return(n=t||(t={})).Grid="Grid",n.IDEClient="IDEClient",n.IDEServer="IDEServer",n.Explorer="Explorer",n.DataPanel="DataPanel",n.StylePanel="StylePanel",t;var n})(),r=(()=>{return(n=r||(r={})).ShowStopper="ShowStopper",n.Critical="Critical",n.Major="Major",n.Minor="Minor",r;var n})(),c=(()=>{return(n=c||(c={})).Open="Open",n.Close="Close",c;var n})(),s=(()=>{return(n=s||(s={})).Issue="Issue",n.FeatureRequest="Feature",n.Feedback="Feedback",s;var n})()},1312:(C,m,e)=>{e.d(m,{I:()=>c});var t=e(9830),r=e(5e3);let c=(()=>{class s{transform(a){return a==t.MM.Feedback?"assets/fl-feedback.png":a==t.MM.FeatureRequest?"assets/fl-feature.png":a==t.MM.Issue?"assets/fl-issue.png":"assets/"+a}}return s.\u0275fac=function(a){return new(a||s)},s.\u0275pipe=r.Yjl({name:"categoryImgPath",type:s,pure:!0}),s})()}}]);