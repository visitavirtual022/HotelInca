"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[510],{7072:(_,c,n)=>{n.d(c,{o:()=>r});var l=n(4537),d=n(4091),s=n(6101),e=n(7343),m=n(7493);class r{constructor(a){this.injector=a,this.elRef=this.injector.get(l.SBq),this.i18n=this.injector.get(s.T),this.fontsService=this.injector.get(d.C),this.panoService=this.injector.get(e.X),this.statsService=this.injector.get(m.G)}_updateFontStyle(a,u){!a||Object.keys(u).filter(o=>["family","align","size","line_height"].includes(o)).forEach(o=>{a[o]||(a[o]=u[o])})}}},4507:(_,c,n)=>{n.d(c,{D:()=>d});var l=n(4537);let d=(()=>{class s{}return s.\u0275fac=function(m){return new(m||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({}),s})()},7239:(_,c,n)=>{n.d(c,{y:()=>s});var l=n(4537),d=n(5998);let s=(()=>{class e{constructor(r){this.sanitizer=r}transform(r,h){switch(h){case"html":return this.sanitizer.bypassSecurityTrustHtml(r);case"style":return this.sanitizer.bypassSecurityTrustStyle(r);case"script":return this.sanitizer.bypassSecurityTrustScript(r);case"url":return this.sanitizer.bypassSecurityTrustUrl(r);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(r);default:throw new Error(`Invalid safe type specified: ${h}`)}}}return e.\u0275fac=function(r){return new(r||e)(l.Y36(d.H7,16))},e.\u0275pipe=l.Yjl({name:"safe",type:e,pure:!0}),e})()},7493:(_,c,n)=>{n.d(c,{G:()=>h});var l=n(4537),d=n(8692),s=n(5732),e=n(8066),m=n(5056),r=n(7343);let h=(()=>{class a{constructor(o,g,i,p,t){this.http=o,this.windowRef=g,this.viewerDataService=i,this.panoService=p,this.platformId=t,this.session_id=""}send(o){if((0,d.PM)(this.platformId)||this.viewerDataService.editor||!this.panoService.moderationUrl)return;this.session_id||(this.session_id=(Math.random().toString(36).slice(2)+Date.now().toString(36)).substr(0,16));let g=this._getStats();0!=g.host.indexOf("localhost")&&(null!=o.type&&(g.type=o.type),null!=o.plugin&&(g.plugin=o.plugin),null!=o.details&&(g.details=o.details),this.http.post("https://apiw.gothru.co/tours/stats",g).subscribe())}getWidget(o){let i=[{name:"Berlin Menu",component:"MenuHopenkeComponent"},{name:"Side Menu",component:"MenuKavftigComponent"},{name:"Top Menu",component:"MenuLekprogComponent"},{name:"Real Estate Menu",component:"MenuLoppitteComponent"},{name:"Berlin Map",component:"SchemeHopenkeComponent"},{name:"Floor Map",component:"SchemeKavftigComponent"},{name:"Mapbox",component:"SchemeGvesjodComponent"},{name:"Berlin Hotspot",component:"HotspotHopenkeComponent"},{name:"Hotspot",component:"HotspotKavftigComponent"},{name:"Pano link",component:"HotspotHolmlackComponent"},{name:"Berlin Control",component:"ControlHopenkeComponent"},{name:"Control Bar",component:"ControlKavftigComponent"},{name:"Real Estate Control",component:"ControlLoppitteComponent"},{name:"Carousel",component:"OtherCarouselComponent"},{name:"Language",component:"OtherLanguageComponent"},{name:"Logo",component:"OtherLogoComponent"},{name:"Code",component:"OtherCodeComponent"},{name:"Password",component:"OtherPasswordComponent"},{name:"Pano Label",component:"OtherTitleComponent"}].filter(p=>p.component==o).pop();return i?{name:i.name,key:i.name.toLowerCase().replace(" ","_")}:{name:"",key:""}}_getStats(){let o={ip:null,action:null,returning:null,user_type:null,time:null,m_key:null,user_id:this.panoService.user_id,session_id:this.session_id,browser:this.windowRef.nativeWindow.navigator.userAgent,height:this.windowRef.nativeWindow.innerHeight,language:this.windowRef.nativeWindow.navigator.language,location:this.windowRef.nativeWindow.location.href,moderation_id:this.viewerDataService.active.t_id,pano_id:this.viewerDataService.active.id,referer:document.referrer,site:this.panoService.moderationUrl.substr(2),local_time:Math.floor(Date.now()/1e3),width:this.windowRef.nativeWindow.innerWidth,device:null,host:null,tour_type:null,plugin:null,type:null,details:null};return this.panoService.googleApiKey&&(o.m_key=this.panoService.googleApiKey),o.device=this.windowRef.nativeWindow.innerWidth<600?"mobile":this.windowRef.nativeWindow.innerWidth>=600&&this.windowRef.nativeWindow.innerWidth<1e3?"tablet":"desktop",o.host=o.location.split("/")[2],o.tour_type=0==this.panoService.moderationUrl.indexOf("G")?"google":"hosted",o}}return a.\u0275fac=function(o){return new(o||a)(l.LFG(s.eN),l.LFG(e.X),l.LFG(m.m),l.LFG(r.X),l.LFG(l.Lbi))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7998:(_,c,n)=>{n.r(c),n.d(c,{OtherCompassModule:()=>g});var l=n(8692),d=n(8041);const s=JSON.parse('{"widget":"OtherCompassComponent","options":[{"key":"width","label":"Size","type":"slider","category":"appearance","help":"px","min":0,"max":800,"value":70},{"key":"margin","label":"Margin","type":"slider","category":"appearance","help":"px","value":10},{"key":"area","label":"Area","areas":["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],"type":"area","category":"appearance","value":"bottom-right"},{"key":"needle-rotation","label":"Rotate only needle","type":"toggle","category":"content","value":false},{"key":"fill-color","label":"Fill color","type":"color","category":"colors","value":{"color":"rgb(255,255,255)"}},{"key":"needle-color","label":"Needle color","type":"color","category":"colors","value":{"color":"rgb(0,0,0)"}},{"key":"styles","label":"Styles","type":"css","category":"styles","value":""}]}');var e=n(4537),m=n(2001),r=n(7239);function h(i,p){if(1&i&&(e._UZ(0,"code",2),e.ALo(1,"safe")),2&i){const t=e.oxw();e.Q6J("innerHTML",e.xi3(1,1,t.styles,"html"),e.oJD)}}function a(i,p){if(1&i&&(e.TgZ(0,"div",3),e.O4$(),e.TgZ(1,"svg",4)(2,"g",5)(3,"text",6),e._uU(4,"N"),e.qZA(),e.TgZ(5,"text",7),e._uU(6,"E"),e.qZA(),e.TgZ(7,"text",8),e._uU(8,"S"),e.qZA(),e.TgZ(9,"text",9),e._uU(10,"W"),e.qZA(),e._UZ(11,"path",10),e.qZA(),e.TgZ(12,"g"),e._UZ(13,"path",11)(14,"circle",12),e.qZA()()()),2&i){const t=e.oxw();e.Q6J("ngClass",t.options.area.value),e.xp6(2),e.Udp("transform",t.options.needle_rotation.value?"":"rotate("+t.angle+"deg)"),e.xp6(9),e.uIk("d",t.icons[0].icon[4]),e.xp6(2),e.Udp("transform",t.options.needle_rotation.value?"rotate("+t.needleAngle+"deg)":""),e.uIk("d",t.icons[1].icon[4])}}let u=(()=>{class i extends d.P{constructor(t,C){super(t),this.viewerService=C,this.default_options=s,this.icons=[{prefix:"",iconName:"wrap",icon:[100,100,[],"","M50,0C22.386,0,0,22.385,0,50c0,27.613,22.386,50,50,50s50-22.387,50-50   C100,22.385,77.614,0,50,0z M83.375,82.065l-1.948-1.947l-1.309,1.309l1.947,1.948c-2.463,2.367-5.179,4.473-8.118,6.253   l-1.387-2.402l-1.604,0.926l1.385,2.399c-2.971,1.641-6.144,2.957-9.467,3.917l-0.717-2.673l-1.789,0.479l0.718,2.677   c-2.56,0.628-5.201,1.04-7.907,1.224L50,89.814l-3.18,6.36c-2.706-0.184-5.348-0.596-7.907-1.224l0.717-2.677l-1.789-0.479   l-0.716,2.673c-3.324-0.96-6.497-2.276-9.468-3.917l1.385-2.399l-1.604-0.926l-1.386,2.402c-2.938-1.78-5.655-3.886-8.118-6.253   l1.948-1.948l-1.31-1.309l-1.948,1.947c-2.367-2.463-4.473-5.18-6.252-8.118l2.402-1.387l-0.926-1.604l-2.4,1.386   c-1.64-2.972-2.957-6.144-3.917-9.469l2.672-0.716l-0.479-1.789l-2.675,0.717c-0.628-2.559-1.041-5.199-1.225-7.905l6.36-3.18   l-6.361-3.18c0.184-2.706,0.597-5.348,1.226-7.907l2.675,0.717l0.479-1.789l-2.672-0.716c0.96-3.325,2.277-6.498,3.918-9.469   l2.399,1.385l0.926-1.604l-2.402-1.387c1.779-2.938,3.884-5.654,6.251-8.117l1.949,1.949l1.31-1.31l-1.949-1.949   c2.463-2.367,5.18-4.472,8.119-6.251l1.386,2.402l1.604-0.926l-1.385-2.4c2.971-1.64,6.144-2.957,9.468-3.918l0.716,2.672   l1.789-0.479l-0.716-2.675c2.558-0.628,5.2-1.041,7.906-1.225l3.18,6.36l3.18-6.36c2.706,0.184,5.348,0.596,7.906,1.225   l-0.717,2.675l1.789,0.479l0.717-2.672c3.323,0.961,6.496,2.278,9.467,3.918l-1.385,2.4l1.604,0.926l1.387-2.402   c2.939,1.779,5.656,3.884,8.119,6.251l-1.948,1.949l1.309,1.31l1.949-1.949c2.366,2.463,4.472,5.179,6.251,8.118l-2.401,1.386   l0.926,1.604l2.398-1.385c1.642,2.971,2.958,6.144,3.919,9.469l-2.673,0.716l0.479,1.789l2.676-0.717   c0.628,2.559,1.04,5.201,1.224,7.907L89.814,50l6.36,3.18c-0.184,2.706-0.596,5.347-1.224,7.905l-2.676-0.717l-0.479,1.789   l2.673,0.716c-0.961,3.325-2.277,6.497-3.918,9.469l-2.399-1.386l-0.926,1.604l2.402,1.387   C87.848,76.886,85.743,79.603,83.375,82.065z"]},{prefix:"",iconName:"needle",icon:[100,100,[],"","M57.092,38.082c-1.154-0.688-2.412-1.218-3.752-1.549L50,22.222l-3.339,14.311   c-2.102,0.52-4.019,1.508-5.622,2.864l-4.928-3.286l3.286,4.928c-1.356,1.603-2.345,3.519-2.865,5.622L22.222,50l14.31,3.339   c0.331,1.34,0.862,2.599,1.55,3.752l-15.86,20.687l20.687-15.859c1.154,0.688,2.412,1.219,3.751,1.55L50,77.777l3.34-14.31   c2.102-0.521,4.018-1.509,5.62-2.865l4.929,3.286l-3.285-4.929c1.355-1.603,2.344-3.519,2.863-5.621L77.777,50l-14.311-3.339   c-0.33-1.34-0.861-2.599-1.549-3.752l15.859-20.686L57.092,38.082z M39.301,55.5c-0.85-1.649-1.338-3.516-1.338-5.5   c0-6.648,5.389-12.037,12.037-12.037c1.984,0,3.85,0.488,5.5,1.338L50,43.519c-3.58,0-6.481,2.901-6.481,6.481L39.301,55.5z    M54.629,50c0,2.557-2.072,4.63-4.629,4.63c-2.557,0-4.629-2.073-4.629-4.63c0-2.557,2.072-4.629,4.629-4.629   C52.557,45.371,54.629,47.443,54.629,50z M62.037,50c0,6.647-5.389,12.037-12.037,12.037c-1.984,0-3.85-0.488-5.5-1.338l5.5-4.218   c3.579,0,6.481-2.902,6.481-6.481l4.218-5.5C61.549,46.15,62.037,48.016,62.037,50z"]}]}get angle(){return-1*this.viewerService.angle}get needleAngle(){return-1*this.angle-45}addObservableFunc(){this.observableFunc.width=t=>{this.onWidthChange(t)},this.observableFunc.margin=t=>this.onMarginChange(t),this.observableFunc.fill_color=t=>this.onFillColorChange(t),this.observableFunc.needle_color=t=>this.onNeedleColorChange(t)}onWidthChange(t){this.elRef.nativeElement.style.setProperty("--size",t+"px")}onMarginChange(t){this.elRef.nativeElement.style.setProperty("--margin",t+"px")}onFillColorChange(t){this.elRef.nativeElement.style.setProperty("--fill-color",t.color)}onNeedleColorChange(t){this.elRef.nativeElement.style.setProperty("--needle-color",t.color)}initData(){this.addObservableFunc(),super.initData()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(m.a))},i.\u0275cmp=e.Xpm({type:i,selectors:[["wdg-other-compass"]],features:[e.qOj],decls:2,vars:2,consts:[[3,"innerHTML",4,"ngIf"],["class","widget other compass",3,"ngClass",4,"ngIf"],[3,"innerHTML"],[1,"widget","other","compass",3,"ngClass"],["id","icon-compass","xmlns","http://www.w3.org/2000/svg","version","1.1","x","0px","y","0px","viewBox","0 0 100 100","enable-background","new 0 0 100 100",0,"xml","space","preserve"],[1,"wrap"],["x","45","y","19",1,"small"],["x","83","y","55",1,"small"],["x","47","y","89",1,"small"],["x","10","y","55",1,"small"],["fill-rule","evenodd","clip-rule","evenodd"],["fill-rule","evenodd","clip-rule","evenodd",1,"needle"],["fill-rule","evenodd","clip-rule","evenodd","cx","50","cy","50","r","2.778"]],template:function(t,C){1&t&&(e.YNc(0,h,2,4,"code",0),e.YNc(1,a,15,7,"div",1)),2&t&&(e.Q6J("ngIf",C.styles),e.xp6(1),e.Q6J("ngIf",C.widgetInit))},dependencies:[l.mk,l.O5,r.y],styles:[".widget[_ngcontent-%COMP%]{position:absolute;width:var(--size);height:var(--size);margin:var(--margin);z-index:2}.widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%}.widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{fill:var(--fill-color)}.widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   path.needle[_ngcontent-%COMP%]{transform-origin:center;transform:rotate(-45deg);fill:var(--needle-color)}.widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g[_ngcontent-%COMP%]   text[_ngcontent-%COMP%]{font-size:12px}.widget[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   g.wrap[_ngcontent-%COMP%]{transform-origin:center}.widget.bottom[_ngcontent-%COMP%], .widget.top[_ngcontent-%COMP%]{left:50%;transform:translate(-50%);margin-left:initial;margin-right:initial}.widget.left[_ngcontent-%COMP%], .widget.right[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);margin-top:initial;margin-bottom:initial}.widget.top[_ngcontent-%COMP%], .widget.top-left[_ngcontent-%COMP%], .widget.top-right[_ngcontent-%COMP%]{top:0}.widget.bottom[_ngcontent-%COMP%], .widget.bottom-left[_ngcontent-%COMP%], .widget.bottom-right[_ngcontent-%COMP%]{bottom:0}.widget.bottom-right[_ngcontent-%COMP%], .widget.right[_ngcontent-%COMP%], .widget.top-right[_ngcontent-%COMP%]{right:0}.widget.bottom-left[_ngcontent-%COMP%], .widget.left[_ngcontent-%COMP%], .widget.top-left[_ngcontent-%COMP%]{left:0}code[_ngcontent-%COMP%]{display:none}"]}),i})();var o=n(4507);let g=(()=>{class i{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(u)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e._Vd))},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,o.D]}),i})()}}]);