"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[638],{6638:(U,g,n)=>{n.r(g),n.d(g,{default:()=>N});var I=n(177),s=n(9417),u=n(8834),F=n(2765),l=n(2102),h=n(9213),p=n(9042),v=n(9183),d=n(9192),y=n(7122),x=n(7028),e=n(4438),w=n(7973),S=n(5524),j=n(1032);const k=["signInNgForm"];function b(t,m){if(1&t&&(e.j41(0,"fuse-alert",33),e.EFF(1),e.k0s()),2&t){const i=e.XpG();e.Y8G("appearance","outline")("showIcon",!1)("type",i.alert.type)("@shake","error"===i.alert.type),e.R7$(1),e.SpI(" ",i.alert.message," ")}}function C(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," La direccion de email es requerida "),e.k0s())}function E(t,m){1&t&&(e.j41(0,"mat-error"),e.EFF(1," Por favor ingrese un email valido "),e.k0s())}function A(t,m){1&t&&e.nrm(0,"mat-icon",34),2&t&&e.Y8G("svgIcon","heroicons_solid:eye")}function G(t,m){1&t&&e.nrm(0,"mat-icon",34),2&t&&e.Y8G("svgIcon","heroicons_solid:eye-slash")}function R(t,m){1&t&&(e.j41(0,"span"),e.EFF(1," Iniciar sesion "),e.k0s())}function Y(t,m){1&t&&e.nrm(0,"mat-progress-spinner",35),2&t&&e.Y8G("diameter",24)("mode","indeterminate")}const T=()=>["/forgot-password"],N=[{path:"",component:(()=>{class t{constructor(i,o,r,a,f,c){this._systemService=i,this._activatedRoute=o,this._authService=r,this._authServiceCRM=a,this._formBuilder=f,this._router=c,this.alert={type:"success",message:""},this.showAlert=!1,this.obj_JSON={}}ngOnInit(){this.signInForm=this._formBuilder.group({usu_email:new s.MJ("",[s.k0.required,s.k0.email]),usu_password1:new s.MJ("",[s.k0.required]),rememberMe:new s.MJ("")})}signIn(){this.signInForm.invalid||(this.signInForm.disable(),this.showAlert=!1,this.obj_JSON={data:this.signInForm.value,opcion:"L",_limite:0,_offset:0},this._authServiceCRM.login(this.obj_JSON).subscribe(i=>{if(200==i.code){const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)}else this._systemService.showAlertError(i.message),this.signInForm.enable(),localStorage.removeItem("accessToken"),localStorage.removeItem("authenticated"),localStorage.removeItem("user")},i=>{400==i.status&&(this._systemService.showAlertError(i.error.message),this.signInForm.enable()),500==i.status&&this._systemService.showAlertError("Error en el Servidor")}))}static#e=this.\u0275fac=function(o){return new(o||t)(e.rXU(w.W),e.rXU(d.nX),e.rXU(S.u),e.rXU(j.o),e.rXU(s.ze),e.rXU(d.Ix))};static#t=this.\u0275cmp=e.VBU({type:t,selectors:[["auth-sign-in"]],viewQuery:function(o,r){if(1&o&&e.GBs(k,5),2&o){let a;e.mGM(a=e.lsd())&&(r.signInNgForm=a.first)}},standalone:!0,features:[e.aNF],decls:51,vars:12,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/crm/logo.png"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],["class","mt-8",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],["signInNgForm","ngForm"],[1,"w-full"],["id","usu_email","matInput","","formControlName","usu_email"],[4,"ngIf"],["id","usu_password1","matInput","","type","password","formControlName","usu_password1"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-center","justify-between","w-full","mt-1.5"],[1,"text-md","font-medium","text-primary-500","hover:underline",3,"routerLink"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","pl-6","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"mt-8",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(o,r){if(1&o){const a=e.RV6();e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e.nrm(4,"img",4),e.k0s(),e.j41(5,"div",5),e.EFF(6,"Iniciar sesi\xf3n"),e.k0s(),e.DNE(7,b,2,5,"fuse-alert",6),e.j41(8,"form",7,8)(10,"mat-form-field",9)(11,"mat-label"),e.EFF(12,"Direcci\xf3n Email"),e.k0s(),e.nrm(13,"input",10),e.DNE(14,C,2,0,"mat-error",11)(15,E,2,0,"mat-error",11),e.k0s(),e.j41(16,"mat-form-field",9)(17,"mat-label"),e.EFF(18,"Contrase\xf1a"),e.k0s(),e.nrm(19,"input",12,13),e.j41(21,"button",14),e.bIt("click",function(){e.eBV(a);const c=e.sdS(20);return e.Njj(c.type="password"===c.type?"text":"password")}),e.DNE(22,A,1,1,"mat-icon",15)(23,G,1,1,"mat-icon",15),e.k0s(),e.j41(24,"mat-error"),e.EFF(25," Contrase\xf1a es requerida "),e.k0s()(),e.j41(26,"div",16)(27,"a",17),e.EFF(28,"\xbfOlvidaste tu contrase\xf1a? "),e.k0s()(),e.j41(29,"button",18),e.bIt("click",function(){return r.signIn()}),e.DNE(30,R,2,0,"span",11)(31,Y,1,2,"mat-progress-spinner",19),e.k0s()()()(),e.j41(32,"div",20),e.qSk(),e.j41(33,"svg",21)(34,"g",22),e.nrm(35,"circle",23)(36,"circle",24),e.k0s()(),e.j41(37,"svg",25)(38,"defs")(39,"pattern",26),e.nrm(40,"rect",27),e.k0s()(),e.nrm(41,"rect",28),e.k0s(),e.joV(),e.j41(42,"div",29)(43,"div",30),e.nrm(44,"br"),e.j41(45,"div"),e.EFF(46,"La Crianza"),e.k0s()(),e.j41(47,"div",31),e.EFF(48," Gesti\xf3n eficiente de tus ventas y conversaciones por WhatsApp. Controla tus pedidos, organiza tus clientes y mejora tu servicio. "),e.k0s(),e.j41(49,"div",32),e.EFF(50," seccion para los logos de las empresas que confian en TRAVE "),e.k0s()()()()}if(2&o){const a=e.sdS(20);e.R7$(7),e.Y8G("ngIf",r.showAlert),e.R7$(1),e.Y8G("formGroup",r.signInForm),e.R7$(6),e.Y8G("ngIf",r.signInForm.get("usu_email").hasError("required")),e.R7$(1),e.Y8G("ngIf",r.signInForm.get("usu_email").hasError("email")),e.R7$(7),e.Y8G("ngIf","password"===a.type),e.R7$(1),e.Y8G("ngIf","text"===a.type),e.R7$(4),e.Y8G("routerLink",e.lJ4(11,T)),e.R7$(2),e.Y8G("color","primary")("disabled",r.signInForm.disabled),e.R7$(1),e.Y8G("ngIf",!r.signInForm.disabled),e.R7$(1),e.Y8G("ngIf",r.signInForm.disabled)}},dependencies:[d.Wk,x.F,I.bT,s.YN,s.qT,s.me,s.BC,s.cb,s.X1,s.j4,s.JD,l.RG,l.rl,l.nJ,l.TL,l.yw,p.fS,p.fg,u.Hl,u.$z,u.iY,h.m_,h.An,F.g7,v.D6,v.LG],encapsulation:2,data:{animation:y.X}})}return t})()}]}}]);