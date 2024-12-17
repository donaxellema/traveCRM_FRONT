"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[798],{5024:(G,R,o)=>{o.d(R,{CB:()=>m,DQ:()=>B,qS:()=>A,sL:()=>L,xn:()=>D,y4:()=>S});var O=o(17),p=(o(4402),o(7673),o(1413)),T=o(4438);class A{}function S(y){return y&&"function"==typeof y.connect&&!(y instanceof O.G)}class D{applyChanges(a,n,r,g,h){a.forEachOperation((u,f,d)=>{let b,M;if(null==u.previousIndex){const k=r(u,f,d);b=n.createEmbeddedView(k.templateRef,k.context,k.index),M=1}else null==d?(n.remove(f),M=3):(b=n.get(f),n.move(b,d),M=2);h&&h({context:b?.context,operation:M,record:u})})}detach(){}}class B{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(a,n,r,g,h){a.forEachOperation((u,f,d)=>{let b,M;null==u.previousIndex?(b=this._insertView(()=>r(u,f,d),d,n,g(u)),M=b?1:0):null==d?(this._detachAndCacheView(f,n),M=3):(b=this._moveView(f,d,n,g(u)),M=2),h&&h({context:b?.context,operation:M,record:u})})}detach(){for(const a of this._viewCache)a.destroy();this._viewCache=[]}_insertView(a,n,r,g){const h=this._insertViewFromCache(n,r);if(h)return void(h.context.$implicit=g);const u=a();return r.createEmbeddedView(u.templateRef,u.context,u.index)}_detachAndCacheView(a,n){const r=n.detach(a);this._maybeCacheView(r,n)}_moveView(a,n,r,g){const h=r.get(a);return r.move(h,n),h.context.$implicit=g,h}_maybeCacheView(a,n){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(a);else{const r=n.indexOf(a);-1===r?a.destroy():n.remove(r)}}_insertViewFromCache(a,n){const r=this._viewCache.pop();return r&&n.insert(r,a),r||null}}class m{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(a=!1,n,r=!0,g){this._multiple=a,this._emitChanges=r,this.compareWith=g,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new p.B,n&&n.length&&(a?n.forEach(h=>this._markSelected(h)):this._markSelected(n[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(r=>this._markSelected(r));const n=this._hasQueuedChanges();return this._emitChangeEvent(),n}deselect(...a){this._verifyValueAssignment(a),a.forEach(r=>this._unmarkSelected(r));const n=this._hasQueuedChanges();return this._emitChangeEvent(),n}setSelection(...a){this._verifyValueAssignment(a);const n=this.selected,r=new Set(a);a.forEach(h=>this._markSelected(h)),n.filter(h=>!r.has(h)).forEach(h=>this._unmarkSelected(h));const g=this._hasQueuedChanges();return this._emitChangeEvent(),g}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();const n=this._hasQueuedChanges();return a&&this._emitChangeEvent(),n}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(a){if(this.compareWith){for(let n of this._selection)if(this.compareWith(a,n))return n;return a}return a}}const L=new T.nKC("_ViewRepeater")},2798:(G,R,o)=>{o.d(R,{VO:()=>ie,Ve:()=>se});var O=o(7987),x=o(177),t=o(4438),p=o(6600),T=o(2102),A=o(5542),S=o(8617),F=o(8203),D=o(4085),B=o(5024),m=o(7336),I=o(9417),P=o(1413),L=o(9030),y=o(7786),a=o(9172),n=o(5558),r=o(6697),g=o(5964),h=o(6354),u=o(3294),f=o(6977),d=o(9969);const b=["trigger"],M=["panel"];function k(c,E){if(1&c&&(t.j41(0,"span",9),t.EFF(1),t.k0s()),2&c){const e=t.XpG();t.R7$(1),t.JRh(e.placeholder)}}function j(c,E){1&c&&t.SdG(0)}function X(c,E){if(1&c&&(t.j41(0,"span",11),t.EFF(1),t.k0s()),2&c){const e=t.XpG(2);t.R7$(1),t.JRh(e.triggerValue)}}function Q(c,E){if(1&c&&(t.j41(0,"span",10),t.DNE(1,j,1,0)(2,X,2,1),t.k0s()),2&c){const e=t.XpG();t.R7$(1),t.vxM(1,e.customTrigger?1:2)}}function Y(c,E){if(1&c){const e=t.RV6();t.qSk(),t.joV(),t.j41(0,"div",12,13),t.bIt("@transformPanel.done",function(s){t.eBV(e);const l=t.XpG();return t.Njj(l._panelDoneAnimatingStream.next(s.toState))})("keydown",function(s){t.eBV(e);const l=t.XpG();return t.Njj(l._handleKeydown(s))}),t.SdG(2,1),t.k0s()}if(2&c){const e=t.XpG();t.ZvI("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",e._getPanelTheme(),""),t.Y8G("ngClass",e.panelClass)("@transformPanel","showing"),t.BMQ("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const z=[[["mat-select-trigger"]],"*"],$=["mat-select-trigger","*"],H={transformPanelWrap:(0,d.hZ)("transformPanelWrap",[(0,d.kY)("* => void",(0,d.P)("@transformPanel",[(0,d.MA)()],{optional:!0}))]),transformPanel:(0,d.hZ)("transformPanel",[(0,d.wk)("void",(0,d.iF)({opacity:0,transform:"scale(1, 0.8)"})),(0,d.kY)("void => showing",(0,d.i0)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,d.iF)({opacity:1,transform:"scale(1, 1)"}))),(0,d.kY)("* => void",(0,d.i0)("100ms linear",(0,d.iF)({opacity:0})))])};let K=0;const U=new t.nKC("mat-select-scroll-strategy"),Z=new t.nKC("MAT_SELECT_CONFIG"),J={provide:U,deps:[O.hJ],useFactory:function N(c){return()=>c.scrollStrategies.reposition()}},q=new t.nKC("MatSelectTrigger");class ee{constructor(E,e){this.source=E,this.value=e}}const te=(0,p.GG)((0,p.BF)((0,p.Ob)((0,p.J8)(class{constructor(c,E,e,i,s){this._elementRef=c,this._defaultErrorStateMatcher=E,this._parentForm=e,this._parentFormGroup=i,this.ngControl=s,this.stateChanges=new P.B}}))));let ie=(()=>{class c extends te{_scrollOptionIntoView(e){const i=this.options.toArray()[e];if(i){const s=this.panel.nativeElement,l=(0,p.jb)(e,this.options,this.optionGroups),_=i._getHostElement();s.scrollTop=0===e&&1===l?0:(0,p.TL)(_.offsetTop,_.offsetHeight,s.scrollTop,s.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ee(this,e)}get focused(){return this._focused||this._panelOpen}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=(0,D.he)(e),this._syncParentProperties()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(I.k0.required)??!1}set required(e){this._required=(0,D.he)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,D.he)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,D.he)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,D.OE)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}constructor(e,i,s,l,_,w,v,ae,ne,le,re,oe,ce,V){super(_,l,v,ae,le),this._viewportRuler=e,this._changeDetectorRef=i,this._ngZone=s,this._dir=w,this._parentFormField=ne,this._liveAnnouncer=ce,this._defaultOptions=V,this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._panelOpen=!1,this._compareWith=(C,W)=>C===W,this._uid="mat-select-"+K++,this._triggerAriaLabelledBy=null,this._destroy=new P.B,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+K++,this._panelDoneAnimatingStream=new P.B,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this.optionSelectionChanges=(0,L.v)(()=>{const C=this.options;return C?C.changes.pipe((0,a.Z)(C),(0,n.n)(()=>(0,y.h)(...C.map(W=>W.onSelectionChange)))):this._ngZone.onStable.pipe((0,r.s)(1),(0,n.n)(()=>this.optionSelectionChanges))}),this.openedChange=new t.bkB,this._openedStream=this.openedChange.pipe((0,g.p)(C=>C),(0,h.T)(()=>{})),this._closedStream=this.openedChange.pipe((0,g.p)(C=>!C),(0,h.T)(()=>{})),this.selectionChange=new t.bkB,this.valueChange=new t.bkB,this._trackedModal=null,this._skipPredicate=C=>!this.panelOpen&&C.disabled,this.ngControl&&(this.ngControl.valueAccessor=this),null!=V?.typeaheadDebounceInterval&&(this._typeaheadDebounceInterval=V.typeaheadDebounceInterval),this._scrollStrategyFactory=oe,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(re)||0,this.id=this.id}ngOnInit(){this._selectionModel=new B.CB(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,u.F)(),(0,f.Q)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen)),this._viewportRuler.change().pipe((0,f.Q)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,f.Q)(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe((0,a.Z)(null),(0,f.Q)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){const s=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?s.setAttribute("aria-labelledby",e):s.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(void 0!==this._previousControl&&null!==i.disabled&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._canOpen()&&(this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck()),this.stateChanges.next()}_applyModalPanelOwnership(){const e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;const i=`${this.id}-panel`;this._trackedModal&&(0,S.Ae)(this._trackedModal,"aria-owns",i),(0,S.px)(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){this._trackedModal&&((0,S.Ae)(this._trackedModal,"aria-owns",`${this.id}-panel`),this._trackedModal=null)}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched()),this.stateChanges.next()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const i=e.keyCode,s=i===m.n6||i===m.i7||i===m.UQ||i===m.LE,l=i===m.Fm||i===m.t6,_=this._keyManager;if(!_.isTyping()&&l&&!(0,m.rp)(e)||(this.multiple||e.altKey)&&s)e.preventDefault(),this.open();else if(!this.multiple){const w=this.selected;_.onKeydown(e);const v=this.selected;v&&w!==v&&this._liveAnnouncer.announce(v.viewValue,1e4)}}_handleOpenKeydown(e){const i=this._keyManager,s=e.keyCode,l=s===m.n6||s===m.i7,_=i.isTyping();if(l&&e.altKey)e.preventDefault(),this.close();else if(_||s!==m.Fm&&s!==m.t6||!i.activeItem||(0,m.rp)(e))if(!_&&this._multiple&&s===m.A&&e.ctrlKey){e.preventDefault();const w=this.options.some(v=>!v.disabled&&!v.selected);this.options.forEach(v=>{v.disabled||(w?v.select():v.deselect())})}else{const w=i.activeItemIndex;i.onKeydown(e),this._multiple&&l&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==w&&i.activeItem._selectViaInteraction()}else e.preventDefault(),i.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,r.s)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{const i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const i=this.options.find(s=>{if(this._selectionModel.isSelected(s))return!1;try{return null!=s.value&&this._compareWith(s.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_getOverlayWidth(e){return"auto"===this.panelWidth?(e instanceof O.$Q?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:null===this.panelWidth?"":this.panelWidth}_syncParentProperties(){if(this.options)for(const e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new S.Au(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,y.h)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,f.Q)(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,y.h)(...this.options.map(i=>i._stateChanges)).pipe((0,f.Q)(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){const s=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(s!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),s!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((i,s)=>this.sortComparator?this.sortComparator(i,s,e):e.indexOf(i)-e.indexOf(s)),this.stateChanges.next()}}_propagateChanges(e){let i;i=this.multiple?this.selected.map(s=>s.value):this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();return this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();let i=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(i+=" "+this.ariaLabelledby),i}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static#e=this.\u0275fac=function(i){return new(i||c)(t.rXU(A.Xj),t.rXU(t.gRc),t.rXU(t.SKi),t.rXU(p.es),t.rXU(t.aKT),t.rXU(F.dS,8),t.rXU(I.cV,8),t.rXU(I.j4,8),t.rXU(T.xb,8),t.rXU(I.vO,10),t.kS0("tabindex"),t.rXU(U),t.rXU(S.Ai),t.rXU(Z,8))};static#t=this.\u0275cmp=t.VBU({type:c,selectors:[["mat-select"]],contentQueries:function(i,s,l){if(1&i&&(t.wni(l,q,5),t.wni(l,p.wT,5),t.wni(l,p.QC,5)),2&i){let _;t.mGM(_=t.lsd())&&(s.customTrigger=_.first),t.mGM(_=t.lsd())&&(s.options=_),t.mGM(_=t.lsd())&&(s.optionGroups=_)}},viewQuery:function(i,s){if(1&i&&(t.GBs(b,5),t.GBs(M,5),t.GBs(O.WB,5)),2&i){let l;t.mGM(l=t.lsd())&&(s.trigger=l.first),t.mGM(l=t.lsd())&&(s.panel=l.first),t.mGM(l=t.lsd())&&(s._overlayDir=l.first)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox","ngSkipHydration","",1,"mat-mdc-select"],hostVars:19,hostBindings:function(i,s){1&i&&t.bIt("keydown",function(_){return s._handleKeydown(_)})("focus",function(){return s._onFocus()})("blur",function(){return s._onBlur()}),2&i&&(t.BMQ("id",s.id)("tabindex",s.tabIndex)("aria-controls",s.panelOpen?s.id+"-panel":null)("aria-expanded",s.panelOpen)("aria-label",s.ariaLabel||null)("aria-required",s.required.toString())("aria-disabled",s.disabled.toString())("aria-invalid",s.errorState)("aria-activedescendant",s._getAriaActiveDescendant()),t.AVh("mat-mdc-select-disabled",s.disabled)("mat-mdc-select-invalid",s.errorState)("mat-mdc-select-required",s.required)("mat-mdc-select-empty",s.empty)("mat-mdc-select-multiple",s.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",hideSingleSelectionIndicator:"hideSingleSelectionIndicator",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[t.Jv_([{provide:T.qT,useExisting:c},{provide:p.is,useExisting:c}]),t.Vt3,t.OA$],ngContentSelectors:$,decls:11,vars:8,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(i,s){if(1&i&&(t.NAR(z),t.j41(0,"div",0,1),t.bIt("click",function(){return s.toggle()}),t.j41(3,"div",2),t.DNE(4,k,2,1,"span",3)(5,Q,3,1),t.k0s(),t.j41(6,"div",4)(7,"div",5),t.qSk(),t.j41(8,"svg",6),t.nrm(9,"path",7),t.k0s()()()(),t.DNE(10,Y,3,9,"ng-template",8),t.bIt("backdropClick",function(){return s.close()})("attach",function(){return s._onAttached()})("detach",function(){return s.close()})),2&i){const l=t.sdS(1);t.R7$(3),t.BMQ("id",s._valueId),t.R7$(1),t.vxM(4,s.empty?4:5),t.R7$(6),t.Y8G("cdkConnectedOverlayPanelClass",s._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",s._scrollStrategy)("cdkConnectedOverlayOrigin",s._preferredOverlayOrigin||l)("cdkConnectedOverlayOpen",s.panelOpen)("cdkConnectedOverlayPositions",s._positions)("cdkConnectedOverlayWidth",s._overlayWidth)}},dependencies:[x.YU,O.WB,O.$Q],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100%/0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[H.transformPanel]},changeDetection:0})}return c})(),se=(()=>{class c{static#e=this.\u0275fac=function(i){return new(i||c)};static#t=this.\u0275mod=t.$C({type:c});static#i=this.\u0275inj=t.G2t({providers:[J],imports:[x.MD,O.z_,p.Sy,p.yE,A.Gj,T.RG,p.Sy,p.yE]})}return c})()}}]);