"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[727],{1727:(we,I,r)=>{r.r(I),r.d(I,{default:()=>_e});var m=r(177),Y=r(9192),S=r(4085),A=r(7122),e=r(4438);function z(i,c){1&i&&(e.qex(0),e.j41(1,"div",1),e.SdG(2),e.k0s(),e.j41(3,"div",2),e.SdG(4,1),e.k0s(),e.bVm())}function M(i,c){1&i&&(e.j41(0,"div",4),e.SdG(1,3),e.k0s()),2&i&&e.Y8G("@expandCollapse",void 0)}function N(i,c){if(1&i&&(e.qex(0),e.SdG(1,2),e.DNE(2,M,2,1,"div",3),e.bVm()),2&i){const s=e.XpG();e.R7$(2),e.Y8G("ngIf",s.expanded)}}const U=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]],B=["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"];let V=(()=>{class i{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(s){"expanded"in s&&(this.expanded=(0,S.he)(s.expanded.currentValue)),"flippable"in s&&(this.flippable=(0,S.he)(s.flippable.currentValue))}static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(a,t){2&a&&e.HbH(t.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],standalone:!0,features:[e.OA$,e.aNF],ngContentSelectors:B,decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(a,t){1&a&&(e.NAR(U),e.DNE(0,z,5,0,"ng-container",0)(1,N,3,1,"ng-container",0)),2&a&&(e.Y8G("ngIf",t.flippable),e.R7$(1),e.Y8G("ngIf",!t.flippable))},dependencies:[m.bT],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:A.X}})}return i})();var E=r(9213),f=r(8834),b=r(9115),u=r(2102),v=r(9042),P=r(7403),L=r(1997),X=r(4823),T=r(4190),R=r(4412),$=r(1413),_=r(6695),l=r(9417),g=r(5351),j=r(2798),w=r(7973),D=r(4139);function O(i,c){1&i&&(e.j41(0,"td",16)(1,"span",18),e.qSk(),e.j41(2,"svg",19),e.nrm(3,"path",20),e.k0s(),e.EFF(4," Vigente "),e.k0s()())}function J(i,c){1&i&&(e.j41(0,"td",16)(1,"span",21),e.EFF(2," Suspendido "),e.k0s()())}function H(i,c){1&i&&(e.j41(0,"td",16)(1,"span",22),e.qSk(),e.j41(2,"svg",19),e.nrm(3,"path",23),e.k0s(),e.EFF(4," Vencida "),e.k0s()())}function W(i,c){if(1&i&&(e.j41(0,"tr",14)(1,"th",15),e.EFF(2),e.k0s(),e.j41(3,"td",16),e.EFF(4),e.k0s(),e.j41(5,"td",16),e.EFF(6),e.k0s(),e.DNE(7,O,5,0,"td",17)(8,J,3,0,"td",17)(9,H,5,0,"td",17),e.k0s()),2&i){const s=c.$implicit;e.R7$(2),e.SpI("",s.camp_nombre," "),e.R7$(2),e.SpI("",s.camp_descripcion," "),e.R7$(2),e.Lme(" ",s.camp_fecha_inicio," - ",s.camp_fecha_fin,""),e.R7$(1),e.Y8G("ngIf","Vigente"==s.camp_estado),e.R7$(1),e.Y8G("ngIf","Suspendido"==s.camp_estado),e.R7$(1),e.Y8G("ngIf","Vencida"==s.camp_estado)}}const K=()=>[5,10,20];let Q=(()=>{class i{constructor(s,a,t){this._systemServices=s,this._campaniasServices=a,this.dialogRef=t,this.searchSubject=new $.B,this.searchTerm="",this.index=0,this.limit=5,this.offset=0,this.totalElementos=0,this.pageEvent=new _.KB,this.campaniasDataCambiante=new R.t([])}ngOnInit(){this.getCampanias()}onSearchChange(s){this.searchSubject.next(s)}getCampaniasSearch(){console.log(this.limit),console.log(this.offset),this._campaniasServices.getCampaniasSearch({buscar:this.searchTerm,opcion:"S",_limite:this.limit,_offset:this.offset}).subscribe(a=>{console.log(a),this.totalElementos=a.totalItems},a=>{console.log(a),this._systemServices.showAlertError(a.error.error)})}getCampanias(){console.log(this.limit),console.log(this.offset),this._campaniasServices.getCampanias({etiq_id:"",opcion:"C",_limite:this.limit,_offset:this.offset}).subscribe(a=>{console.log(a),this.totalElementos=a.totalItems,this.campaniasData=a.data,console.log("this.personDataCambiante")},a=>{console.log(a),this._systemServices.showAlertError(a.error.error)})}getServerData(s){return this.index=s.pageIndex,this.limit=s.pageSize,this.offset=this.index*this.limit,this.getCampanias(),s}onCancel(){this.dialogRef.close()}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(w.W),e.rXU(D.X),e.rXU(g.CP))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-campanias-all-dialog"]],standalone:!0,features:[e.aNF],decls:24,vars:5,consts:[[1,"w-full","max-w-3xl"],[1,"w-full"],[1,"text-xl"],[1,"w-full","pl-11","pr-12"],[1,""],[1,"w-full","border-collapse","bg-white","text-left","text-sm","text-gray-500"],[1,"bg-gray-50"],["scope","col",1,"px-6","py-4","font-medium","text-gray-900"],[1,"divide-y","divide-gray-100","border-t","border-gray-100"],["class","odd:bg-white even:bg-gray-50",4,"ngFor","ngForOf"],[3,"length","pageSize","pageSizeOptions","page"],["paginadorEtiquetas",""],["mat-dialog-actions",""],["mat-stroked-button","","type","button",3,"click"],[1,"odd:bg-white","even:bg-gray-50"],[1,"px-6","py-4","font-medium","text-gray-900"],[1,"px-6","py-4"],["class","px-6 py-4",4,"ngIf"],[1,"inline-flex","items-center","gap-1","rounded-full","bg-green-50","px-2","py-1","text-xs","font-semibold","text-green-600"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"h-3","w-3"],["fill-rule","evenodd","d","M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule","evenodd"],[1,"inline-flex","items-center","gap-1","rounded-full","bg-orange-50","px-2","py-1","text-xs","font-semibold","text-orange-600"],[1,"inline-flex","items-center","gap-1","rounded-full","bg-red-50","px-2","py-1","text-xs","font-semibold","text-red-600"],["d","M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"]],template:function(a,t){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2),e.EFF(3,"Campa\xf1as existentes "),e.k0s()(),e.j41(4,"div",3)(5,"div",4)(6,"table",5)(7,"thead",6)(8,"tr")(9,"th",7),e.EFF(10,"Etiqueta"),e.k0s(),e.j41(11,"th",7),e.EFF(12,"Campanias"),e.k0s(),e.j41(13,"th",7),e.EFF(14,"Fechas"),e.k0s(),e.j41(15,"th",7),e.EFF(16,"Estado"),e.k0s()()(),e.j41(17,"tbody",8),e.DNE(18,W,10,7,"tr",9),e.k0s()()(),e.j41(19,"mat-paginator",10,11),e.bIt("page",function(o){return t.pageEvent=t.getServerData(o)}),e.k0s()(),e.j41(21,"div",12)(22,"button",13),e.bIt("click",function(){return t.onCancel()}),e.EFF(23," Cerrar "),e.k0s()()()),2&a&&(e.R7$(18),e.Y8G("ngForOf",t.campaniasData),e.R7$(1),e.Y8G("length",t.totalElementos)("pageSize",t.limit)("pageSizeOptions",e.lJ4(4,K)))},dependencies:[m.MD,m.Sq,m.bT,_.Ou,_.iy,u.RG,l.YN,g.hM,g.E7,f.Hl,f.$z,v.fS,j.Ve]})}return i})();var p=r(1562),Z=r(8410),C=r(7673),q=r(8891),ee=r.n(q),te=r(3306),ae=r.n(te);let x=(()=>{class i{get accessToken(){return localStorage.getItem("accessToken")??""}set authenticated(s){localStorage.setItem("authenticated",s)}get authenticated(){return localStorage.getItem("authenticated")??""}constructor(s){this.http=s,this._authenticated=!1,this._httpClient=(0,e.WQX)(p.Qq),this.apiUrl=T.S.url}putPerfil(s){console.log(s);let a=(new p.Lr).set("Content-Type","application/json").set("Authorization",null!=this.accessToken?this.accessToken:""),t=new p.Nl;return this.http.put(`${this.apiUrl}perfil/`,s,{headers:a,params:t})}getPerfilBY_ID(s,a=""){let t=new p.Nl;const n=(d,h="")=>{for(const F in d)if(d.hasOwnProperty(F)){const k=d[F],G=h?`${h}.${F}`:F;"object"==typeof k&&null!==k?n(k,G):t=t.set(G,k)}};n(s);let o=(new p.Lr).set("Content-Type","application/json").set("Authorization",this.accessToken?`${this.accessToken}`:"");return this.http.get(`${this.apiUrl}perfil_by_id/`,{headers:o,params:t})}postPassword(s){let a=(new p.Lr).set("Content-Type","application/json").set("Authorization",null!=this.accessToken?this.accessToken:""),t=new p.Nl;return this.http.post(`${this.apiUrl}perfil_pass/`,s,{headers:a,params:t})}putImagen(s){let a=(new p.Lr).set("Content-Type","application/json").set("Authorization",null!=this.accessToken?this.accessToken:""),t=new p.Nl;return this.http.post(`${this.apiUrl}perfil_ima/`,s,{headers:a,params:t})}signInUsingToken(){if(this.authToken=this.accessToken,this._verifyJWTToken(this.accessToken))return(0,C.of)([200,{accessToken:this.accessToken,tokenType:"bearer"}])}check(){return"true"==localStorage.getItem("authenticated")?(0,C.of)(!0):!localStorage.getItem("accessToken")||Z.S.isTokenExpired(this.accessToken)?(0,C.of)(!1):this.signInUsingToken()}_verifyJWTToken(s){const a=s.split("."),t=a[0],n=a[1];return a[2]===this._base64url(ae()(t+"."+n,this.accessToken))}_base64url(s){let a=ee().stringify(s);return a=a.replace(/=+$/,""),a=a.replace(/\+/g,"-"),a=a.replace(/\//g,"_"),a}static#e=this.\u0275fac=function(a){return new(a||i)(e.KVO(p.Qq))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function se(i,c){1&i&&(e.j41(0,"mat-error"),e.EFF(1," Current password is required "),e.k0s())}function ie(i,c){1&i&&(e.j41(0,"mat-error"),e.EFF(1," New password is required "),e.k0s())}function ne(i,c){1&i&&(e.j41(0,"mat-error"),e.EFF(1," New password must be at least 6 characters long "),e.k0s())}function oe(i,c){1&i&&(e.j41(0,"mat-error"),e.EFF(1," Confirm password is required "),e.k0s())}function re(i,c){1&i&&(e.j41(0,"mat-error"),e.EFF(1," Passwords do not match "),e.k0s())}let le=(()=>{class i{constructor(s,a,t){this.fb=s,this._perfilService=a,this._systemService=t,this.changePasswordForm=this.fb.group({currentPassword:["",l.k0.required],newPassword:["",[l.k0.required,l.k0.minLength(6)]],confirmPassword:["",l.k0.required]},{validator:this.passwordsMatchValidator})}passwordsMatchValidator(s){const a=s.get("newPassword")?.value,t=s.get("confirmPassword")?.value;if(a===t)return null;s.get("confirmPassword")?.setErrors({passwordsMismatch:!0})}onSubmit(){if(this.changePasswordForm.valid){const s=this.changePasswordForm.value;this.userLocal=JSON.parse(localStorage.getItem("user"));const a={usu_password_new:s.confirmPassword,usu_password1:s.currentPassword,usu_id:this.userLocal.usu_id,usu_email:this.userLocal.usu_email};console.log(a),this._perfilService.postPassword(a).subscribe(t=>{console.log(t),this._systemService.showAlertSuccessTop(t.message)}),console.log("Password Change Request:",s)}}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(l.ok),e.rXU(x),e.rXU(w.W))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-actualiza-password-dialog"]],standalone:!0,features:[e.aNF],decls:27,vars:6,consts:[[1,"w-full","max-w-3xl"],[3,"formGroup","ngSubmit"],[1,"mx-auto","bg-white"],[1,"grid","gap-6","grid-cols-2","py-4"],["appearance","fill"],["matInput","","formControlName","currentPassword","type","password"],[4,"ngIf"],["matInput","","formControlName","newPassword","type","password"],["matInput","","formControlName","confirmPassword","type","password"],["mat-raised-button","","color","secondary","type","submit"]],template:function(a,t){if(1&a&&(e.j41(0,"div",0)(1,"form",1),e.bIt("ngSubmit",function(){return t.onSubmit()}),e.j41(2,"div",2)(3,"div",3)(4,"div")(5,"mat-form-field",4)(6,"mat-label"),e.EFF(7,"Current Password"),e.k0s(),e.nrm(8,"input",5),e.DNE(9,se,2,0,"mat-error",6),e.k0s()(),e.j41(10,"div")(11,"mat-form-field",4)(12,"mat-label"),e.EFF(13,"New Password"),e.k0s(),e.nrm(14,"input",7),e.DNE(15,ie,2,0,"mat-error",6)(16,ne,2,0,"mat-error",6),e.k0s()(),e.j41(17,"div")(18,"mat-form-field",4)(19,"mat-label"),e.EFF(20,"Confirm Password"),e.k0s(),e.nrm(21,"input",8),e.DNE(22,oe,2,0,"mat-error",6)(23,re,2,0,"mat-error",6),e.k0s()(),e.j41(24,"div")(25,"button",9),e.EFF(26,"Change Password"),e.k0s()()()()()()),2&a){let n,o,d,h;e.R7$(1),e.Y8G("formGroup",t.changePasswordForm),e.R7$(8),e.Y8G("ngIf",null==(n=t.changePasswordForm.get("currentPassword"))?null:n.hasError("required")),e.R7$(6),e.Y8G("ngIf",null==(o=t.changePasswordForm.get("newPassword"))?null:o.hasError("required")),e.R7$(1),e.Y8G("ngIf",null==(d=t.changePasswordForm.get("newPassword"))?null:d.hasError("minlength")),e.R7$(6),e.Y8G("ngIf",null==(h=t.changePasswordForm.get("confirmPassword"))?null:h.hasError("required")),e.R7$(1),e.Y8G("ngIf",null==t.changePasswordForm.errors?null:t.changePasswordForm.errors.mismatch)}},dependencies:[m.MD,m.bT,g.hM,f.Hl,f.$z,v.fS,v.fg,u.rl,u.nJ,u.TL,u.RG,l.YN,l.qT,l.me,l.BC,l.cb,j.Ve,l.X1,l.j4,l.JD]})}return i})();function ce(i,c){1&i&&e.nrm(0,"app-actualiza-password-dialog")}let de=(()=>{class i{constructor(s,a,t,n,o){this.dialogRef=s,this.data=a,this._perfilServices=t,this._systemServices=n,this.cdr=o,this.isLoading=!1,this.showChangePassword=!1}ngOnInit(){setTimeout(()=>{this.isLoading=!0,this.cdr.detectChanges(),this.tipoDialog=this.data.tipodialogo,console.log("this.data de mi dialog "),console.log(this.data)},50)}onCancel(){this.dialogRef.close()}onSave(){this._perfilServices.putPerfil({data:this.data,opcion:"UP",_limite:0,_offset:0}).subscribe(a=>{console.log(a),200==a.code&&this._systemServices.showAlertSuccessCenter(a.message),this.dialogRef.close()},a=>{console.log(a),this._systemServices.showAlertError(a.error.error),this.dialogRef.close()})}toggleChangePassword(){this.showChangePassword=!this.showChangePassword}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(g.CP),e.rXU(g.Vh),e.rXU(x),e.rXU(w.W),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-actualiza-datos-dialog"]],standalone:!0,features:[e.aNF],decls:36,vars:12,consts:[[1,"w-full","max-w-3xl"],[1,"w-full"],[1,"text-xl"],[1,"grid","sm:grid-cols-4","gap-6","w-full","mt-8"],[1,"sm:col-span-4"],[1,"fuse-mat-emphasized-affix","w-full",3,"subscriptSizing"],["matInput","","name","nombre",3,"ngModel","ngModelChange"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","name","","id","",3,"ngModel","ngModelChange"],[4,"ngIf"],[3,"click"],["mat-dialog-actions",""],["mat-stroked-button","","type","button",3,"click"],["mat-flat-button","","type","button",1,"ml-4",3,"color","click"]],template:function(a,t){1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2),e.EFF(3),e.k0s()(),e.j41(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e.EFF(8,"Apodo"),e.k0s(),e.j41(9,"input",6),e.bIt("ngModelChange",function(o){return t.data.usu_nickname=o}),e.k0s()()(),e.j41(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),e.EFF(13,"Email"),e.k0s(),e.j41(14,"input",7),e.bIt("ngModelChange",function(o){return t.data.usu_email=o}),e.k0s()()(),e.j41(15,"div",4)(16,"mat-form-field",5)(17,"mat-label"),e.EFF(18,"descripcion"),e.k0s(),e.j41(19,"textarea",7),e.bIt("ngModelChange",function(o){return t.data.usu_descripcion=o}),e.EFF(20," "),e.k0s()()(),e.j41(21,"div",4)(22,"mat-form-field",5)(23,"mat-label"),e.EFF(24,"Mensaje de apertura"),e.k0s(),e.j41(25,"textarea",8),e.bIt("ngModelChange",function(o){return t.data.usu_mensajes=o}),e.k0s()()(),e.j41(26,"div",4),e.DNE(27,ce,1,0,"app-actualiza-password-dialog",9),e.k0s(),e.j41(28,"div",4)(29,"button",10),e.bIt("click",function(){return t.toggleChangePassword()}),e.EFF(30),e.k0s()()(),e.j41(31,"div",11)(32,"button",12),e.bIt("click",function(){return t.onCancel()}),e.EFF(33," Cancelar "),e.k0s(),e.j41(34,"button",13),e.bIt("click",function(){return t.onSave()}),e.EFF(35,"Guardar "),e.k0s()()()),2&a&&(e.R7$(3),e.SpI("",t.tipoDialog," perfil"),e.R7$(3),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",t.data.usu_nickname),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",t.data.usu_email),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",t.data.usu_descripcion),e.R7$(3),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",t.data.usu_mensajes),e.R7$(2),e.Y8G("ngIf",t.showChangePassword),e.R7$(3),e.SpI(" ",t.showChangePassword?"Cancel":"Change Password"," "),e.R7$(4),e.Y8G("color","primary"))},dependencies:[m.MD,m.bT,g.hM,g.E7,f.Hl,f.$z,v.fS,v.fg,u.rl,u.nJ,u.RG,l.YN,l.me,l.BC,l.vS,j.Ve,le]})}return i})();var me=r(2839);function ue(i,c){1&i&&e.nrm(0,"div",71)}function pe(i,c){if(1&i){const s=e.RV6();e.j41(0,"div",72)(1,"div")(2,"input",73),e.bIt("change",function(t){e.eBV(s);const n=e.XpG();return e.Njj(n.onFileChange(t))}),e.k0s(),e.j41(3,"label",74),e.nrm(4,"mat-icon",75),e.k0s()(),e.j41(5,"div")(6,"button",76),e.bIt("click",function(){e.eBV(s);const t=e.XpG();return e.Njj(t.removeBanner())}),e.nrm(7,"mat-icon",75),e.k0s()(),e.j41(8,"div")(9,"button",76),e.bIt("click",function(){e.eBV(s);const t=e.XpG();return e.Njj(t.habilitaChangePhoto(!0))}),e.nrm(10,"mat-icon",75),e.k0s()()()}2&i&&(e.R7$(2),e.Y8G("multiple",!1)("accept","image/jpeg, image/png"),e.R7$(2),e.Y8G("svgIcon","heroicons_outline:camera"),e.R7$(3),e.Y8G("svgIcon","heroicons_outline:trash"),e.R7$(3),e.Y8G("svgIcon","heroicons_outline:x-mark"))}function fe(i,c){1&i&&e.nrm(0,"div",71)}function ge(i,c){if(1&i){const s=e.RV6();e.j41(0,"div",72)(1,"div")(2,"input",77),e.bIt("change",function(t){e.eBV(s);const n=e.XpG();return e.Njj(n.onFileChangeAvatar(t))}),e.k0s(),e.j41(3,"label",78),e.nrm(4,"mat-icon",75),e.k0s()(),e.j41(5,"div")(6,"button",76),e.bIt("click",function(){e.eBV(s);const t=e.XpG();return e.Njj(t.removeAvatar())}),e.nrm(7,"mat-icon",75),e.k0s()(),e.j41(8,"div")(9,"button",76),e.bIt("click",function(){e.eBV(s);const t=e.XpG();return e.Njj(t.habilitaChangePhoto(!0))}),e.nrm(10,"mat-icon",75),e.k0s()()()}2&i&&(e.R7$(2),e.Y8G("multiple",!1)("accept","image/jpeg, image/png"),e.R7$(2),e.Y8G("svgIcon","heroicons_outline:camera"),e.R7$(3),e.Y8G("svgIcon","heroicons_outline:trash"),e.R7$(3),e.Y8G("svgIcon","heroicons_outline:x-mark"))}const he=i=>({border:i}),ve=i=>({color:i});function be(i,c){if(1&i&&(e.j41(0,"div")(1,"div",79)(2,"div",17)(3,"div",80),e.nrm(4,"mat-icon",81),e.k0s(),e.j41(5,"div",82)(6,"div",83),e.EFF(7),e.k0s(),e.j41(8,"div",84),e.EFF(9),e.k0s(),e.j41(10,"div",85),e.EFF(11),e.nI1(12,"date"),e.nI1(13,"date"),e.k0s()()()()()),2&i){const s=c.$implicit,a=e.XpG();e.R7$(3),e.Y8G("ngStyle",e.eq3(12,he,"2px solid "+a.darkenColor(s.etiq_color,20))),e.R7$(1),e.Y8G("ngStyle",e.eq3(14,ve,a.darkenColor(s.etiq_color,30))),e.R7$(3),e.SpI(" ",s.camp_nombre," "),e.R7$(2),e.JRh(s.camp_descripcion),e.R7$(2),e.Lme(" ",e.i5U(12,6,s.camp_fecha_ini,"yyyy-MM-dd")," - hasta - ",e.i5U(13,9,s.camp_fecha_fin,"yyyy-MM-dd"),"")}}const y=()=>["./"],_e=[{path:"",component:(()=>{class i{constructor(s,a,t,n,o){this.dialog=s,this._imageUploadService=a,this._campaniasServices=t,this._perfilServices=n,this._systemServices=o,this.campaniasDataCambiante=new R.t([]),this.searchSubject=new $.B,this.searchTerm="",this.index=0,this.limit=5,this.offset=0,this.totalElementos=0,this.pageEvent=new _.KB,this.habilitaChangeFoto=!1,this.urlImagen=T.S.urlImagen,this.selectedFile=null,this.selectedFileAvatar=null}ngOnInit(){this.user=JSON.parse(localStorage.getItem("user")),setTimeout(()=>{this.getCampanias()},50),this.getDataPerfil()}habilitaChangePhoto(s){console.log(s),this.habilitaChangeFoto=!s}getServerData(s){return this.index=s.pageIndex,this.limit=s.pageSize,this.offset=this.index*this.limit,this.getCampanias(),s}getCampanias(){this._campaniasServices.getCampanias({camp_id:"",opcion:"C",_limite:this.limit,_offset:this.offset}).subscribe(a=>{console.log(a),this.campaniasData=a.data,this.totalElementos=a.totalItems,console.log("this.personDataCambiante"),console.log(this.campaniasData)},a=>{console.log(a),this._systemServices.showAlertError(a.error.error)})}getDataPerfil(){this._perfilServices.getPerfilBY_ID({usu_id:this.user.usu_id,opcion:"CP",_limite:this.limit,_offset:this.offset}).subscribe(t=>{(t.code=200)&&(console.log("response"),console.log(t),this.dataPerf=t.data[0])},t=>{this._systemServices.showAlertError(t.error.error)})}dialogoEditarPerfil(s){console.log("data"),console.log(s),s.tipodialogo="Editar",this.dialog.open(de,{width:"450px",data:s,disableClose:!0}).afterClosed().subscribe(t=>{this.getDataPerfil(),this.user.usu_descripcion=this.dataPerf.usu_descripcion})}changueFotoPerfil_Banner(){}getDataClientesAsignados(){}dialogoCampanias(){this.data={tipodialogo:"Ver Campanias"},this.dialog.open(Q,{width:"700px",data:this.data,disableClose:!0}).afterClosed().subscribe(a=>{})}removeAvatar(){this.user.usu_imagen="sinImagen.jpg"}removeBanner(){this.user.usu_banner="sinImagen.jpg"}onFileChange(s){const a=s.target.files[0];a&&(this.selectedFile=a,(new FileReader).readAsDataURL(a)),a?this._imageUploadService.uploadImage(this.selectedFile).subscribe(t=>{console.log("Imagen subida exitosamente:",t),this.user.usu_banner=t.filename,this._perfilServices.putImagen({data:{usu_imagen:this.user.usu_imagen,usu_banner:this.user.usu_banner,usu_id:this.user.usu_id},opcion:"UI",_limite:0,_offset:0}).subscribe(o=>{this._systemServices.showAlertSuccessCenter(o.message)},o=>{console.error("Error subiendo la imagen:",o)})},t=>{console.error("Error subiendo la imagen:",t)}):(console.error("No se ha seleccionado ninguna imagen"),this._systemServices.showAlertErrorTop("No se ha seleccionado ninguna imagen"))}onFileChangeAvatar(s){const a=s.target.files[0];if(a){this.selectedFileAvatar=a;const t=new FileReader;console.log("this.user.usu_imagen"),console.log(this.user.usu_imagen),t.readAsDataURL(a)}a?(console.log(this.selectedFileAvatar),this._imageUploadService.uploadImage(this.selectedFileAvatar).subscribe(t=>{this.user.usu_imagen=t.filename,console.log("this.user.usu_imagen"),console.log(this.user.usu_imagen),console.log("Imagen subida exitosamente:",t),this._perfilServices.putImagen({data:{usu_imagen:this.user.usu_imagen,usu_banner:this.user.usu_banner,usu_id:this.user.usu_id},opcion:"UI",_limite:0,_offset:0}).subscribe(o=>{console.log(o)},o=>{console.error("Error subiendo la imagen:",o)})},t=>{console.error("Error subiendo la imagen:",t)})):(console.error("No se ha seleccionado ninguna imagen"),this._systemServices.showAlertErrorTop("No se ha seleccionado ninguna imagen"))}darkenColor(s,a){let t=!1;"#"===s[0]&&(s=s.slice(1),t=!0);let n=parseInt(s,16),o=(n>>16)*(1-a/100),d=(n>>8&255)*(1-a/100),h=(255&n)*(1-a/100);return o=Math.round(o),d=Math.round(d),h=Math.round(h),(t?"#":"")+o.toString(16).padStart(2,"0")+d.toString(16).padStart(2,"0")+h.toString(16).padStart(2,"0")}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(g.bZ),e.rXU(me.a),e.rXU(D.X),e.rXU(x),e.rXU(w.W))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-perfil"]],standalone:!0,features:[e.aNF],decls:114,vars:41,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","shadow","bg-card"],[1,"relative","flex","items-center","justify-center","overflow-hidden"],["class","absolute inset-0 bg-black bg-opacity-50 z-10",4,"ngIf"],["class","absolute inset-0 flex items-center justify-center z-20",4,"ngIf"],["alt","Cover image",1,"h-40","lg:h-80","object-cover",3,"src"],[1,"flex","flex-col","flex-0","lg:flex-row","items-center","max-w-5xl","w-full","mx-auto","px-8","lg:h-18","bg-card"],[1,"-mt-26","lg:-mt-22","rounded-full"],[1,"relative","flex","items-center","justify-center","w-32","h-32","rounded-full","overflow-hidden","ring-4","ring-bg-card"],["alt","User avatar",1,"w-32","h-32","rounded-full","ring-4","ring-bg-card",3,"src"],[1,"flex","flex-col","items-center","lg:items-start","mt-4","lg:mt-0","lg:ml-8"],[1,"text-lg","font-bold","leading-none"],[1,"text-secondary"],[1,"flex","items-center","mt-8","mb-4","lg:m-0","lg:ml-auto","space-x-6"],[1,"font-medium",3,"matMenuTriggerFor","routerLink"],["configuracionesPerfil","matMenu"],["mat-menu-item","",3,"click"],[1,"flex","items-center"],[1,"icon-size-5","mr-3",3,"svgIcon"],[1,"flex","flex-auto","justify-center","w-full","max-w-5xl","mx-auto","p-6","sm:p-8"],[1,"hidden","lg:flex","flex-col","items-start","mr-8"],[1,"flex","flex-col","max-w-100","w-full","p-8"],[1,"text-2xl","font-semibold","leading-tight"],[1,"mt-4"],[1,"w-full","border-t","my-6"],[1,"flex","flex-col"],[1,"leading-none"],[1,"flex","items-center","mt-4"],[1,"flex","flex-col","max-w-100","w-full","mt-8","px-8","pt-6","pb-4"],[1,"flex","items-center","justify-between"],[1,"-mr-3"],["mat-icon-button","",3,"matMenuTriggerFor"],[1,"icon-size-5",3,"svgIcon"],["listCard08Menu","matMenu"],["mat-menu-item",""],[1,"flex","justify-between","mt-6"],["src","assets/images/avatars/female-01.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-01.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-02.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/female-02.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],[1,"flex","justify-between","mt-3"],["src","assets/images/avatars/female-03.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/female-04.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-03.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-04.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/female-05.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/female-06.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-05.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-06.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/female-07.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-07.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/male-08.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],["src","assets/images/avatars/female-08.jpg","alt","Card cover image",1,"w-14","h-14","rounded-full"],[1,"flex","items-center","mt-6","-mx-3"],["mat-flat-button","",1,"px-6","mt-8",3,"color","routerLink"],[1,"flex","flex-col","w-200","items-start"],[1,"flex","flex-col","w-170","w-full","p-6","sm:p-8","pb-6"],[1,"text-xl","font-semibold"],[1,"flex","flex-col","sm:flex-row","items-start","mt-8"],[1,"flex","items-center","mb-6","sm:mb-0"],["alt","Card cover image",1,"w-12","min-w-12","h-12","rounded-full","mr-4",3,"src"],[1,"sm:hidden"],[1,"w-full",3,"subscriptSizing"],["matInput","","cdkTextareaAutosize","",3,"ngModel","placeholder","rows","ngModelChange"],[1,"flex","items-center","mt-6","sm:mt-8","-mx-3"],[1,"flex","flex-col","w-170","w-full","mt-8"],["expandableCard02","fuseCard"],[1,"flex","flex-col","w-160","w-full","p-6","sm:p-8","pb-6"],["listCard02Menu","matMenu"],[4,"ngFor","ngForOf"],["mat-flat-button","",1,"px-6","mt-8",3,"color","routerLink","click"],[1,"absolute","inset-0","bg-black","bg-opacity-50","z-10"],[1,"absolute","inset-0","flex","items-center","justify-center","z-20"],["id","banner-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","banner-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"text-white",3,"svgIcon"],["mat-icon-button","",3,"click"],["id","avatar-file-input","type","file",1,"absolute","h-0","w-0","opacity-0","invisible","pointer-events-none",3,"multiple","accept","change"],["for","avatar-file-input","matRipple","",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","cursor-pointer","hover:bg-hover"],[1,"flex","flex-col","mt-5"],[1,"mr-3","w-14","h-14","rounded-full","flex","items-center","justify-center",3,"ngStyle"],["svgIcon","heroicons_outline:bookmark",1,"justify-center",3,"ngStyle"],[1,"flex","flex-col","min-w-0"],[1,"font-medium","leading-none"],[1,"text-md","truncate","leading-none","mt-1"],[1,"text-md","leading-none","text-secondary","mt-2"]],template:function(a,t){if(1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),e.DNE(4,ue,1,0,"div",3)(5,pe,11,5,"div",4),e.nrm(6,"img",5),e.k0s()(),e.j41(7,"div",6)(8,"div",7)(9,"div",8),e.DNE(10,fe,1,0,"div",3)(11,ge,11,5,"div",4),e.nrm(12,"img",9),e.k0s()(),e.j41(13,"div",10)(14,"div",11),e.EFF(15),e.k0s(),e.j41(16,"div",12),e.EFF(17),e.k0s()(),e.j41(18,"div",13)(19,"a",14),e.EFF(20," Configuracion "),e.k0s(),e.j41(21,"mat-menu",null,15)(23,"button",16),e.bIt("click",function(){return t.habilitaChangePhoto(t.habilitaChangeFoto)}),e.j41(24,"span",17),e.nrm(25,"mat-icon",18),e.j41(26,"span"),e.EFF(27,"Cambiar foto perfil"),e.k0s()()(),e.j41(28,"button",16),e.bIt("click",function(){return t.dialogoEditarPerfil(t.dataPerf)}),e.j41(29,"span",17),e.nrm(30,"mat-icon",18),e.j41(31,"span"),e.EFF(32,"actualizar mis datos"),e.k0s()()()()()()(),e.j41(33,"div",19)(34,"div",20)(35,"fuse-card",21)(36,"div",22),e.EFF(37,"Acerca de mi"),e.k0s(),e.j41(38,"div",23),e.EFF(39),e.k0s(),e.nrm(40,"hr",24),e.j41(41,"div",25)(42,"div",17),e.nrm(43,"mat-icon",18),e.j41(44,"span",26),e.EFF(45),e.k0s()(),e.j41(46,"div",27),e.nrm(47,"mat-icon",18),e.j41(48,"span",26),e.EFF(49),e.k0s()()()(),e.j41(50,"fuse-card",28)(51,"div",29)(52,"div",22),e.EFF(53,"Clientes"),e.k0s(),e.j41(54,"div",30)(55,"button",31),e.nrm(56,"mat-icon",32),e.k0s(),e.j41(57,"mat-menu",null,33)(59,"button",34),e.EFF(60,"Find friends"),e.k0s()()()(),e.j41(61,"div",25)(62,"div",35),e.nrm(63,"img",36)(64,"img",37)(65,"img",38)(66,"img",39),e.k0s(),e.j41(67,"div",40),e.nrm(68,"img",41)(69,"img",42)(70,"img",43)(71,"img",44),e.k0s(),e.j41(72,"div",40),e.nrm(73,"img",45)(74,"img",46)(75,"img",47)(76,"img",48),e.k0s(),e.j41(77,"div",40),e.nrm(78,"img",49)(79,"img",50)(80,"img",51)(81,"img",52),e.k0s()(),e.j41(82,"div",53)(83,"a",54),e.EFF(84," Ver mis clientes "),e.k0s()()()(),e.j41(85,"div",55)(86,"fuse-card",56)(87,"div",57),e.EFF(88,"Mensaje de apertura"),e.k0s(),e.j41(89,"div",58)(90,"div",59),e.nrm(91,"img",60),e.j41(92,"div",61),e.EFF(93),e.k0s()(),e.j41(94,"mat-form-field",62)(95,"textarea",63),e.bIt("ngModelChange",function(o){return t.dataPerf.usu_mensajes=o}),e.k0s()()(),e.nrm(96,"div",64),e.k0s(),e.j41(97,"fuse-card",65,66)(99,"div",67)(100,"div",29)(101,"div",57),e.EFF(102,"Campa\xf1as Vigentes"),e.k0s(),e.j41(103,"div",30)(104,"button",31),e.nrm(105,"mat-icon",32),e.k0s(),e.j41(106,"mat-menu",null,68)(108,"button",16),e.bIt("click",function(){return t.getCampanias()}),e.EFF(109,"Actualizar lista"),e.k0s()()()(),e.DNE(110,be,14,16,"div",69),e.j41(111,"div",53)(112,"a",70),e.bIt("click",function(){return t.dialogoCampanias()}),e.EFF(113," Ver campa\xf1as "),e.k0s()()()()()()()),2&a){const n=e.sdS(22),o=e.sdS(58),d=e.sdS(107);e.R7$(4),e.Y8G("ngIf",1==t.habilitaChangeFoto),e.R7$(1),e.Y8G("ngIf",1==t.habilitaChangeFoto),e.R7$(1),e.FCK("src","",t.urlImagen,"",null==t.user?null:t.user.usu_banner,"",e.B4B),e.R7$(4),e.Y8G("ngIf",1==t.habilitaChangeFoto),e.R7$(1),e.Y8G("ngIf",1==t.habilitaChangeFoto),e.R7$(1),e.FCK("src","",t.urlImagen,"",null==t.user?null:t.user.usu_imagen,"",e.B4B),e.R7$(3),e.SpI(" ",null==t.user?null:t.user.pers_nombres," "),e.R7$(2),e.Lme("",null==t.user?null:t.user.pers_ciudad,", ",null==t.user?null:t.user.pers_pais,""),e.R7$(2),e.Y8G("matMenuTriggerFor",n)("routerLink",e.lJ4(38,y)),e.R7$(6),e.Y8G("svgIcon","heroicons_solid:camera"),e.R7$(5),e.Y8G("svgIcon","heroicons_solid:identification"),e.R7$(9),e.SpI(" ",null==t.user?null:t.user.usu_descripcion," "),e.R7$(4),e.Y8G("svgIcon","heroicons_solid:map-pin"),e.R7$(2),e.Lme("",t.user.pers_ciudad,", ",t.user.pers_pais,""),e.R7$(2),e.Y8G("svgIcon","heroicons_solid:briefcase"),e.R7$(2),e.Lme(" ",t.user.emp_nombre,". ",t.user.emp_camp1," "),e.R7$(6),e.Y8G("matMenuTriggerFor",o),e.R7$(1),e.Y8G("svgIcon","heroicons_solid:ellipsis-vertical"),e.R7$(27),e.Y8G("color","primary")("routerLink",e.lJ4(39,y)),e.R7$(8),e.FCK("src","",t.urlImagen,"",t.user.usu_imagen,"",e.B4B),e.R7$(2),e.SpI("",t.user.pers_nombres," "),e.R7$(1),e.Y8G("subscriptSizing","dynamic"),e.R7$(1),e.Y8G("ngModel",t.dataPerf.usu_mensajes)("placeholder","Escribe un mensaje de apertura para iniciar una charla con tu LEAD")("rows",3),e.R7$(9),e.Y8G("matMenuTriggerFor",d),e.R7$(1),e.Y8G("svgIcon","heroicons_solid:ellipsis-vertical"),e.R7$(5),e.Y8G("ngForOf",t.campaniasData),e.R7$(2),e.Y8G("color","primary")("routerLink",e.lJ4(40,y))}},dependencies:[Y.Wk,V,E.m_,E.An,f.Hl,f.It,f.iY,b.Cn,b.kk,b.fb,b.Cp,u.RG,u.rl,v.fS,v.fg,P.xb,P.EE,L.w,X.uc,m.MD,m.Sq,m.bT,m.B3,m.vh,l.YN,l.me,l.BC,l.vS]})}return i})()}]}}]);