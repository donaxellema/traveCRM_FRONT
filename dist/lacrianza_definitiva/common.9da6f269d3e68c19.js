"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[76],{3967:(O,d,r)=>{r.d(d,{v:()=>P});var T=r(4438),o=r(9181),g=r(8410),_=r(7673),f=r(4190),k=r(8891),E=r.n(k),m=r(3306),y=r.n(m);let P=(()=>{class p{get accessToken(){return localStorage.getItem("accessToken")??""}set authenticated(t){localStorage.setItem("authenticated",t)}get authenticated(){return localStorage.getItem("authenticated")??""}constructor(t){this.http=t,this._authenticated=!1,this._httpClient=(0,T.WQX)(o.Qq),this.apiUrl=f.S.url}postEtiquetas(t){let e=(new o.Lr).set("Content-Type","application/json").set("Authorization",null!=this.accessToken?this.accessToken:""),s=new o.Nl;return this.http.post(`${this.apiUrl}etiquetas/`,t,{headers:e,params:s})}getEtiquetas(t,e=""){let s=new o.Nl;const l=(n,i="")=>{for(const a in n)if(n.hasOwnProperty(a)){const c=n[a],u=i?`${i}.${a}`:a;"object"==typeof c&&null!==c?l(c,u):s=s.set(u,c)}};l(t),console.log("mi parametro seteado "+s),console.log("this.accessToken"),console.log(this.accessToken);let h=(new o.Lr).set("Content-Type","application/json").set("Authorization",this.accessToken?`${this.accessToken}`:"");return this.http.get(`${this.apiUrl}etiquetas/`,{headers:h,params:s})}getEtiquetasSearch(t,e=""){let s=new o.Nl;console.log("data services"),console.log(t);const l=(n,i="")=>{for(const a in n)if(n.hasOwnProperty(a)){const c=n[a],u=i?`${i}.${a}`:a;"object"==typeof c&&null!==c?l(c,u):s=s.set(u,c)}};l(t),console.log("mi parametro seteado "+s),console.log("this.accessToken"),console.log(this.accessToken);let h=(new o.Lr).set("Content-Type","application/json").set("Authorization",this.accessToken?`${this.accessToken}`:"");return this.http.get(`${this.apiUrl}etiquetasSearch/`,{headers:h,params:s})}putEtiquetas(t){console.log(t);let e=(new o.Lr).set("Content-Type","application/json").set("Authorization",null!=this.accessToken?this.accessToken:""),s=new o.Nl;return this.http.put(`${this.apiUrl}etiquetas/`,t,{headers:e,params:s})}deleteEtiquetas(t){let e=new o.Nl;const s=(h,n="")=>{for(const i in h)if(h.hasOwnProperty(i)){const a=h[i],c=n?`${n}.${i}`:i;"object"==typeof a&&null!==a?s(a,c):e=e.set(c,a)}};s(t),console.log("mi parametro seteado "+e),console.log("this.accessToken"),console.log(this.accessToken);let l=(new o.Lr).set("Content-Type","application/json").set("Authorization",this.accessToken?`${this.accessToken}`:"");return this.http.delete(`${this.apiUrl}etiquetas/`,{headers:l,params:e})}signInUsingToken(){if(this.authToken=this.accessToken,this._verifyJWTToken(this.accessToken))return(0,_.of)([200,{accessToken:this.accessToken,tokenType:"bearer"}])}check(){return"true"==localStorage.getItem("authenticated")?(0,_.of)(!0):!localStorage.getItem("accessToken")||g.S.isTokenExpired(this.accessToken)?(0,_.of)(!1):this.signInUsingToken()}_verifyJWTToken(t){const e=t.split("."),s=e[0],l=e[1];return e[2]===this._base64url(y()(s+"."+l,this.accessToken))}_base64url(t){let e=E().stringify(t);return e=e.replace(/=+$/,""),e=e.replace(/\+/g,"-"),e=e.replace(/\//g,"_"),e}static#e=this.\u0275fac=function(e){return new(e||p)(T.KVO(o.Qq))};static#t=this.\u0275prov=T.jDH({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()}}]);