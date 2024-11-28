"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[253],{1253:(N,f,n)=>{n.r(f),n.d(f,{default:()=>B});var g=n(177),b=n(9159),p=n(9042),c=n(2102),v=n(9213),m=n(8834),h=n(6695),_=n(4412),E=n(1413),x=n(152),F=n(3294),j=n(7575),l=n(9417),P=n(7403),d=n(5351),R=n(2798),e=n(4438),C=n(6375),w=n(3967),y=n(7973);let S=(()=>{class r{constructor(s,t,o,i,a,Y){this.dialogRef=s,this.data=t,this._personasServices=o,this._etiquetasServices=i,this._systemServices=a,this.cdr=Y,this.isLoading=!1,this.datos=[{id:1,nombre:"Nombre 1"},{id:2,nombre:"Nombre 2"},{id:3,nombre:"Nombre 3"},{id:4,nombre:"Nombre 4"}]}ngOnInit(){setTimeout(()=>{this.isLoading=!0,this.cdr.detectChanges(),this.tipoDialog=this.data.tipodialogo,this.getEtiquetas(),this.seleccionado=this.data.etiq_id,console.log(this.data)},50)}onChange(s){console.log(s.value)}onCancel(){this.dialogRef.close()}getEtiquetas(){this._etiquetasServices.getEtiquetas({etiq_id:"",opcion:"C",_limite:100,_offset:0}).subscribe(t=>{console.log(t.data),this.etiquetasData=t.data},t=>{console.log(t),this._systemServices.showAlertError(t.error.error)})}onSave(){this.data.etiq_id=this.seleccionado,"Editar"==this.tipoDialog?this._personasServices.putPersonas({data:this.data,opcion:"U",_limite:0,_offset:0}).subscribe(t=>{console.log(t),200==t.code&&this._systemServices.showAlertSuccessCenter(t.message),this.dialogRef.close()},t=>{console.log(t),this._systemServices.showAlertError(t.error.error),this.dialogRef.close()}):this._personasServices.postPersonas({data:{pers_nombres:this.data.pers_nombres,pers_apellidos:this.data.pers_apellidos,pers_email:this.data.pers_email,pers_telefono:this.data.pers_telefono,etiq_id:this.seleccionado,usuario:this.data.usuario},opcion:"I",_limite:0,_offset:0}).subscribe(t=>{console.log(t),200==t.code&&this._systemServices.showAlertSuccessCenter(t.message),this.dialogRef.close()},t=>{console.log(t),this._systemServices.showAlertError(t.error.error),this.dialogRef.close()})}static#e=this.\u0275fac=function(t){return new(t||r)(e.rXU(d.CP),e.rXU(d.Vh),e.rXU(C.X),e.rXU(w.v),e.rXU(y.W),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-personas"]],standalone:!0,features:[e.aNF],decls:31,vars:10,consts:[[1,"w-full","max-w-3xl"],[1,"w-full"],[1,"text-xl"],[1,"grid","sm:grid-cols-4","gap-6","w-full","mt-8"],[1,"sm:col-span-4"],[1,"fuse-mat-emphasized-affix","w-full",3,"subscriptSizing"],["matInput","","name","nombre",3,"ngModel","ngModelChange"],["matInput","",3,"ngModel","ngModelChange"],["mat-dialog-actions",""],["mat-stroked-button","","type","button",3,"click"],["mat-flat-button","","type","button",1,"ml-4",3,"color","click"]],template:function(t,o){1&t&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2),e.EFF(3),e.k0s()(),e.j41(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e.EFF(8,"Nombres"),e.k0s(),e.j41(9,"input",6),e.bIt("ngModelChange",function(a){return o.data.pers_nombres=a}),e.k0s()()(),e.j41(10,"div",4)(11,"mat-form-field",5)(12,"mat-label"),e.EFF(13,"Apellidos"),e.k0s(),e.j41(14,"input",7),e.bIt("ngModelChange",function(a){return o.data.pers_apellidos=a}),e.k0s()()(),e.j41(15,"div",4)(16,"mat-form-field",5)(17,"mat-label"),e.EFF(18,"Email"),e.k0s(),e.j41(19,"input",7),e.bIt("ngModelChange",function(a){return o.data.pers_email=a}),e.k0s()()(),e.j41(20,"div",4)(21,"mat-form-field",5)(22,"mat-label"),e.EFF(23,"Tel\xe9fono"),e.k0s(),e.j41(24,"input",7),e.bIt("ngModelChange",function(a){return o.data.pers_telefono=a}),e.k0s()()(),e.nrm(25,"div",4),e.k0s(),e.j41(26,"div",8)(27,"button",9),e.bIt("click",function(){return o.onCancel()}),e.EFF(28," Cancelar "),e.k0s(),e.j41(29,"button",10),e.bIt("click",function(){return o.onSave()}),e.EFF(30,"Guardar "),e.k0s()()()),2&t&&(e.R7$(3),e.SpI("",o.tipoDialog," persona"),e.R7$(3),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",o.data.pers_nombres),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",o.data.pers_apellidos),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",o.data.pers_email),e.R7$(2),e.Y8G("subscriptSizing","dynamic"),e.R7$(3),e.Y8G("ngModel",o.data.pers_telefono),e.R7$(5),e.Y8G("color","primary"))},dependencies:[g.MD,d.hM,d.E7,m.Hl,m.$z,p.fS,p.fg,c.rl,c.nJ,c.RG,l.YN,l.me,l.BC,l.vS,R.Ve]})}return r})();var k=n(8032),I=n.n(k);function T(r,u){1&r&&(e.j41(0,"td",27)(1,"span",32),e.qSk(),e.j41(2,"svg",33),e.nrm(3,"path",34),e.k0s(),e.EFF(4," Activo "),e.k0s()())}function D(r,u){1&r&&(e.j41(0,"td",27)(1,"span",35),e.qSk(),e.j41(2,"svg",33),e.nrm(3,"path",36),e.k0s(),e.EFF(4," Eliminado "),e.k0s()())}function M(r,u){if(1&r){const s=e.RV6();e.j41(0,"tr",25)(1,"th",26),e.EFF(2),e.k0s(),e.j41(3,"td",27),e.EFF(4),e.k0s(),e.j41(5,"td",27),e.EFF(6),e.k0s(),e.DNE(7,T,5,0,"td",28)(8,D,5,0,"td",28),e.j41(9,"td",29)(10,"button",30),e.bIt("click",function(){const i=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.dialogoEditarPersona(i))}),e.nrm(11,"mat-icon",31),e.k0s(),e.j41(12,"button",30),e.bIt("click",function(){const i=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.dialogoEliminarPersona(i.pers_id))}),e.nrm(13,"mat-icon",31),e.k0s()()()}if(2&r){const s=u.$implicit;e.R7$(2),e.Lme("",s.pers_nombres," - ",s.pers_apellidos," "),e.R7$(2),e.SpI("",s.pers_telefono," "),e.R7$(2),e.SpI("",s.pers_email," "),e.R7$(1),e.Y8G("ngIf",1==s.pers_estado),e.R7$(1),e.Y8G("ngIf",0==s.pers_estado),e.R7$(3),e.Y8G("svgIcon","heroicons_outline:pencil"),e.R7$(2),e.Y8G("svgIcon","heroicons_outline:trash")}}const $=()=>[5,10,20],G=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}],B=[{path:"",component:(()=>{class r{applyFilter(s){this.dataSource.filter=s.target.value.trim().toLowerCase()}constructor(s,t,o){this.dialog=s,this._personaService=t,this._systemServices=o,this.displayedColumns=["position","name","weight","symbol"],this.dataSource=new b.I6(G),this.personDataCambiante=new _.t([]),this.searchSubject=new E.B,this.searchTerm="",this.index=0,this.limit=5,this.offset=0,this.totalElementos=0,this.pageEvent=new h.KB,this.searchSubject.pipe((0,x.B)(300),(0,F.F)()).subscribe(i=>{i.length>=3?this.getEtiquetasSearch():this.getPersonas()})}onSearchChange(s){this.searchSubject.next(s)}ngOnInit(){this.getPersonas(),this.extraeUser()}getServerData(s){return this.index=s.pageIndex,this.limit=s.pageSize,this.offset=this.index*this.limit,this.getPersonas(),s}getPersonas(){console.log(this.limit),console.log(this.offset),this._personaService.getPersonas({etiq_id:"",opcion:"C",_limite:this.limit,_offset:this.offset}).subscribe(t=>{console.log(t),this.totalElementos=t.totalItems,this.personDataCambiante.next(t.data),console.log("this.personDataCambiante"),console.log(this.personDataCambiante.value)},t=>{console.log(t),this._systemServices.showAlertError(t.error.error)})}getEtiquetasSearch(){console.log(this.limit),console.log(this.offset),this._personaService.getPersonasSearch({buscar:this.searchTerm,opcion:"S",_limite:this.limit,_offset:this.offset}).subscribe(t=>{console.log(t),this.totalElementos=t.totalItems,this.personDataCambiante.next(t.data)},t=>{console.log(t),this._systemServices.showAlertError(t.error.error)})}dialogoPostPersonas(){this.data={tipodialogo:"Registrar",usuario:this.userLocal.pers_nombres},this.dialog.open(S,{width:"450px",data:this.data,disableClose:!0}).afterClosed().subscribe(t=>{this.getPersonas()})}dialogoEditarPersona(s){console.log("data"),console.log(s),s.tipodialogo="Editar",s.usuario=this.userLocal.pers_nombres,this.dialog.open(S,{width:"450px",data:s,disableClose:!0}).afterClosed().subscribe(o=>{this.getPersonas()})}extraeUser(){this.userLocal=JSON.parse(localStorage.getItem("user"))}dialogoEliminarPersona(s){console.log("id"),console.log(s),console.log(this.userLocal),I().fire({title:"\xbfEst\xe1s seguro?",text:"No podr\xe1s revertir esto!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"S\xed, eliminarlo!"}).then(t=>{t.isConfirmed&&this._personaService.deletePersonas({data:{usuario:this.userLocal.pers_nombres,pers_id:s},opcion:"D",_limite:0,_offset:0}).subscribe(i=>{console.log(i),200==i.code&&(this._systemServices.showAlertSuccessCenter(i.message),this.getPersonas())},i=>{console.log(i),this._systemServices.showAlertError(i.error.error),this.getPersonas()})})}static#e=this.\u0275fac=function(t){return new(t||r)(e.rXU(d.bZ),e.rXU(C.X),e.rXU(y.W))};static#t=this.\u0275cmp=e.VBU({type:r,selectors:[["app-personas"]],standalone:!0,features:[e.aNF],decls:42,vars:9,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"flex","flex-wrap","items-center","font-medium"],[1,"whitespace-nowrap","text-primary-500"],[1,"flex","items-center","ml-1","whitespace-nowrap"],[1,"icon-size-5","text-secondary",3,"svgIcon"],[1,"ml-1","text-primary-500"],[1,"mt-2"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],["mat-dialog-content","",1,"w-full","pl-11","pr-12","flex","py-8"],[1,"flex-auto"],["placeholder","Buscar por nombres o cedula","matInput","","placeholder","Buscar por nombres ",3,"ngModel","ngModelChange","input","keyup"],[1,"md-4","my-8","xs:col-4"],["mat-flat-button","","type","button",1,"ml-4",3,"color","click"],["matPrefix","",1,"icon-size-5",3,"svgIcon"],[1,"w-full","pl-11","pr-12"],[1,"overflow-x-auto"],[1,"w-full","border-collapse","bg-white","text-left","text-sm","text-gray-500"],[1,"bg-gray-50"],["scope","col",1,"px-6","py-4","font-medium","text-gray-900"],[1,"divide-y","divide-gray-100","border-t","border-gray-100"],["class","odd:bg-white even:bg-gray-50",4,"ngFor","ngForOf"],[3,"length","pageSize","pageSizeOptions","page"],["paginadorEtiquetas",""],[1,"odd:bg-white","even:bg-gray-50"],[1,"px-6","py-4","font-medium","text-gray-900"],[1,"px-6","py-4"],["class","px-6 py-4",4,"ngIf"],[1,"flex","justify-end","gap-4","px-6","py-4","font-medium"],["mat-icon-button","",3,"click"],[1,"text-hint",3,"svgIcon"],[1,"inline-flex","items-center","gap-1","rounded-full","bg-green-50","px-2","py-1","text-xs","font-semibold","text-green-600"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"h-3","w-3"],["fill-rule","evenodd","d","M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z","clip-rule","evenodd"],[1,"inline-flex","items-center","gap-1","rounded-full","bg-red-50","px-2","py-1","text-xs","font-semibold","text-red-600"],["d","M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"]],template:function(t,o){1&t&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"a",4),e.EFF(6,"Registros"),e.k0s()(),e.j41(7,"div",5),e.nrm(8,"mat-icon",6),e.j41(9,"a",7),e.EFF(10,"Personas"),e.k0s()()(),e.j41(11,"div",8)(12,"h2",9),e.EFF(13," Personas CRM "),e.k0s()()()(),e.j41(14,"div",10)(15,"mat-form-field",11)(16,"mat-label"),e.EFF(17,"Buscar persona"),e.k0s(),e.j41(18,"input",12),e.bIt("ngModelChange",function(a){return o.searchTerm=a})("input",function(){return o.onSearchChange(o.searchTerm)})("keyup",function(a){return o.applyFilter(a)}),e.k0s()(),e.j41(19,"div",13)(20,"button",14),e.bIt("click",function(){return o.dialogoPostPersonas()}),e.EFF(21," Agregar Persona "),e.nrm(22,"mat-icon",15),e.k0s()()(),e.j41(23,"div",16)(24,"div",17)(25,"table",18)(26,"thead",19)(27,"tr")(28,"th",20),e.EFF(29,"Nombres"),e.k0s(),e.j41(30,"th",20),e.EFF(31,"Celular"),e.k0s(),e.j41(32,"th",20),e.EFF(33,"Email"),e.k0s(),e.j41(34,"th",20),e.EFF(35,"Estado"),e.k0s(),e.j41(36,"th",20),e.EFF(37,"Acciones"),e.k0s()()(),e.j41(38,"tbody",21),e.DNE(39,M,14,8,"tr",22),e.k0s()()(),e.j41(40,"mat-paginator",23,24),e.bIt("page",function(a){return o.pageEvent=o.getServerData(a)}),e.k0s()()()),2&t&&(e.R7$(8),e.Y8G("svgIcon","heroicons_mini:chevron-right"),e.R7$(10),e.Y8G("ngModel",o.searchTerm),e.R7$(2),e.Y8G("color","primary"),e.R7$(2),e.Y8G("svgIcon","heroicons_solid:user"),e.R7$(17),e.Y8G("ngForOf",o.personDataCambiante.value),e.R7$(1),e.Y8G("length",o.totalElementos)("pageSize",o.limit)("pageSizeOptions",e.lJ4(8,$)))},dependencies:[j.PO,l.YN,l.me,l.BC,l.vS,P.EE,v.m_,v.An,g.MD,g.Sq,g.bT,m.Hl,m.$z,m.iY,c.RG,c.rl,c.nJ,c.JW,p.fS,p.fg,b.tP,h.Ou,h.iy]})}return r})()}]}}]);