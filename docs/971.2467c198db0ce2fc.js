"use strict";(self.webpackChunkfeedback_loop_client=self.webpackChunkfeedback_loop_client||[]).push([[971],{971:(C,u,n)=>{n.r(u),n.d(u,{AuthModule:()=>A});var h=n(9808),s=n(2626),g=n(5861),l=n(2340),e=n(5e3),p=n(622);let d=(()=>{class t{constructor(o,i,a){this.activatedRoute=o,this.authService=i,this.router=a,this.strapi_auth_provider=l.N.strapi_auth_provider,this.redirectText="",this.activatedRoute.queryParams.subscribe(c=>{console.log(c),this.getJWT(c),c.access_token?(console.log("CALLBACK"),this.redirectText="App",this.getJWT(c)):c.login&&(console.log("LOGIN"),this.redirectText=this.strapi_auth_provider,this.googleLoginCall())})}ngOnInit(){}googleLoginCall(){window.location.href=`${l.N.strapi_server}/api/connect/${l.N.strapi_auth_provider}`}getJWT(o){var i=this;return(0,g.Z)(function*(){yield i.authService.get(o.access_token,o).subscribe(a=>{i.authService.add(a),i.router.navigate(["/"])})})()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.gz),e.Y36(p.e),e.Y36(s.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:4,vars:3,consts:[[1,"login-page-container"],[1,"login-button"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"span",1),e._uU(2),e.ALo(3,"titlecase"),e.qZA()()),2&o&&(e.xp6(2),e.hij(" Redirecting to ",e.lcZ(3,1,i.redirectText)," "))},pipes:[h.rS],styles:[".login-page-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:var(--dim-bg-color)}.login-button[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content;padding:0 6px;margin:auto}"]}),t})();const v=[{path:"",component:d},{path:"callback",component:d}];let f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(v)],s.Bz]}),t})();var m=n(5268);let A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.ez,f,m.m]]}),t})()}}]);