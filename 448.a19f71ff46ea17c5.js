"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[448],{7072:(_,p,a)=>{a.d(p,{o:()=>u});var t=a(4537),r=a(4091),s=a(6101),m=a(7343),c=a(7493);class u{constructor(d){this.injector=d,this.elRef=this.injector.get(t.SBq),this.i18n=this.injector.get(s.T),this.fontsService=this.injector.get(r.C),this.panoService=this.injector.get(m.X),this.statsService=this.injector.get(c.G)}_updateFontStyle(d,g){!d||Object.keys(g).filter(o=>["family","align","size","line_height"].includes(o)).forEach(o=>{d[o]||(d[o]=g[o])})}}},4507:(_,p,a)=>{a.d(p,{D:()=>r});var t=a(4537);let r=(()=>{class s{}return s.\u0275fac=function(c){return new(c||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({}),s})()},7239:(_,p,a)=>{a.d(p,{y:()=>s});var t=a(4537),r=a(5998);let s=(()=>{class m{constructor(u){this.sanitizer=u}transform(u,f){switch(f){case"html":return this.sanitizer.bypassSecurityTrustHtml(u);case"style":return this.sanitizer.bypassSecurityTrustStyle(u);case"script":return this.sanitizer.bypassSecurityTrustScript(u);case"url":return this.sanitizer.bypassSecurityTrustUrl(u);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(u);default:throw new Error(`Invalid safe type specified: ${f}`)}}}return m.\u0275fac=function(u){return new(u||m)(t.Y36(r.H7,16))},m.\u0275pipe=t.Yjl({name:"safe",type:m,pure:!0}),m})()},7493:(_,p,a)=>{a.d(p,{G:()=>f});var t=a(4537),r=a(8692),s=a(5732),m=a(8066),c=a(5056),u=a(7343);let f=(()=>{class d{constructor(o,b,h,i,l){this.http=o,this.windowRef=b,this.viewerDataService=h,this.panoService=i,this.platformId=l,this.session_id=""}send(o){if((0,r.PM)(this.platformId)||this.viewerDataService.editor||!this.panoService.moderationUrl)return;this.session_id||(this.session_id=(Math.random().toString(36).slice(2)+Date.now().toString(36)).substr(0,16));let b=this._getStats();0!=b.host.indexOf("localhost")&&(null!=o.type&&(b.type=o.type),null!=o.plugin&&(b.plugin=o.plugin),null!=o.details&&(b.details=o.details),this.http.post("https://apiw.gothru.co/tours/stats",b).subscribe())}getWidget(o){let h=[{name:"Berlin Menu",component:"MenuHopenkeComponent"},{name:"Side Menu",component:"MenuKavftigComponent"},{name:"Top Menu",component:"MenuLekprogComponent"},{name:"Real Estate Menu",component:"MenuLoppitteComponent"},{name:"Berlin Map",component:"SchemeHopenkeComponent"},{name:"Floor Map",component:"SchemeKavftigComponent"},{name:"Mapbox",component:"SchemeGvesjodComponent"},{name:"Berlin Hotspot",component:"HotspotHopenkeComponent"},{name:"Hotspot",component:"HotspotKavftigComponent"},{name:"Pano link",component:"HotspotHolmlackComponent"},{name:"Berlin Control",component:"ControlHopenkeComponent"},{name:"Control Bar",component:"ControlKavftigComponent"},{name:"Real Estate Control",component:"ControlLoppitteComponent"},{name:"Carousel",component:"OtherCarouselComponent"},{name:"Language",component:"OtherLanguageComponent"},{name:"Logo",component:"OtherLogoComponent"},{name:"Code",component:"OtherCodeComponent"},{name:"Password",component:"OtherPasswordComponent"},{name:"Pano Label",component:"OtherTitleComponent"}].filter(i=>i.component==o).pop();return h?{name:h.name,key:h.name.toLowerCase().replace(" ","_")}:{name:"",key:""}}_getStats(){let o={ip:null,action:null,returning:null,user_type:null,time:null,m_key:null,user_id:this.panoService.user_id,session_id:this.session_id,browser:this.windowRef.nativeWindow.navigator.userAgent,height:this.windowRef.nativeWindow.innerHeight,language:this.windowRef.nativeWindow.navigator.language,location:this.windowRef.nativeWindow.location.href,moderation_id:this.viewerDataService.active.t_id,pano_id:this.viewerDataService.active.id,referer:document.referrer,site:this.panoService.moderationUrl.substr(2),local_time:Math.floor(Date.now()/1e3),width:this.windowRef.nativeWindow.innerWidth,device:null,host:null,tour_type:null,plugin:null,type:null,details:null};return this.panoService.googleApiKey&&(o.m_key=this.panoService.googleApiKey),o.device=this.windowRef.nativeWindow.innerWidth<600?"mobile":this.windowRef.nativeWindow.innerWidth>=600&&this.windowRef.nativeWindow.innerWidth<1e3?"tablet":"desktop",o.host=o.location.split("/")[2],o.tour_type=0==this.panoService.moderationUrl.indexOf("G")?"google":"hosted",o}}return d.\u0275fac=function(o){return new(o||d)(t.LFG(s.eN),t.LFG(m.X),t.LFG(c.m),t.LFG(u.X),t.LFG(t.Lbi))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},9638:(_,p,a)=>{a.d(p,{lW:()=>o,ot:()=>h,zs:()=>b});var t=a(4537),r=a(1379),s=a(1703);const m=["mat-button",""],c=["*"],d=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],g=(0,r.pj)((0,r.Id)((0,r.Kr)(class{constructor(i){this._elementRef=i}})));let o=(()=>{class i extends g{constructor(n,e,v){super(n),this._focusMonitor=e,this._animationMode=v,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const y of d)this._hasHostAttributes(y)&&this._getHostElement().classList.add(y);n.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(n,e){n?this._focusMonitor.focusVia(this._getHostElement(),n,e):this._getHostElement().focus(e)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...n){return n.some(e=>this._getHostElement().hasAttribute(e))}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(t.SBq),t.Y36(s.tE),t.Y36(t.QbO,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(n,e){if(1&n&&t.Gf(r.wG,5),2&n){let v;t.iGM(v=t.CRH())&&(e.ripple=v.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(n,e){2&n&&(t.uIk("disabled",e.disabled||null),t.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[t.qOj],attrs:m,ngContentSelectors:c,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(n,e){1&n&&(t.F$t(),t.TgZ(0,"span",0),t.Hsn(1),t.qZA(),t._UZ(2,"span",1)(3,"span",2)),2&n&&(t.xp6(2),t.ekj("mat-button-ripple-round",e.isRoundButton||e.isIconButton),t.Q6J("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},dependencies:[r.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),i})(),b=(()=>{class i extends o{constructor(n,e,v,y){super(e,n,v),this._ngZone=y,this._haltDisabledEvents=k=>{this.disabled&&(k.preventDefault(),k.stopImmediatePropagation())}}ngAfterViewInit(){super.ngAfterViewInit(),this._ngZone?this._ngZone.runOutsideAngular(()=>{this._elementRef.nativeElement.addEventListener("click",this._haltDisabledEvents)}):this._elementRef.nativeElement.addEventListener("click",this._haltDisabledEvents)}ngOnDestroy(){super.ngOnDestroy(),this._elementRef.nativeElement.removeEventListener("click",this._haltDisabledEvents)}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(s.tE),t.Y36(t.SBq),t.Y36(t.QbO,8),t.Y36(t.R0b,8))},i.\u0275cmp=t.Xpm({type:i,selectors:[["a","mat-button",""],["a","mat-raised-button",""],["a","mat-icon-button",""],["a","mat-fab",""],["a","mat-mini-fab",""],["a","mat-stroked-button",""],["a","mat-flat-button",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:7,hostBindings:function(n,e){2&n&&(t.uIk("tabindex",e.disabled?-1:e.tabIndex||0)("disabled",e.disabled||null)("aria-disabled",e.disabled.toString()),t.ekj("_mat-animation-noopable","NoopAnimations"===e._animationMode)("mat-button-disabled",e.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matButton","matAnchor"],features:[t.qOj],attrs:m,ngContentSelectors:c,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(n,e){1&n&&(t.F$t(),t.TgZ(0,"span",0),t.Hsn(1),t.qZA(),t._UZ(2,"span",1)(3,"span",2)),2&n&&(t.xp6(2),t.ekj("mat-button-ripple-round",e.isRoundButton||e.isIconButton),t.Q6J("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},dependencies:[r.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),i})(),h=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[r.si,r.BQ],r.BQ]}),i})()}}]);