"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[866],{7072:(_,c,o)=>{o.d(c,{o:()=>e});var r=o(4537),p=o(4091),a=o(6101),l=o(7343),h=o(7493);class e{constructor(s){this.injector=s,this.elRef=this.injector.get(r.SBq),this.i18n=this.injector.get(a.T),this.fontsService=this.injector.get(p.C),this.panoService=this.injector.get(l.X),this.statsService=this.injector.get(h.G)}_updateFontStyle(s,f){!s||Object.keys(f).filter(n=>["family","align","size","line_height"].includes(n)).forEach(n=>{s[n]||(s[n]=f[n])})}}},4507:(_,c,o)=>{o.d(c,{D:()=>p});var r=o(4537);let p=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=r.oAB({type:a}),a.\u0275inj=r.cJS({}),a})()},7239:(_,c,o)=>{o.d(c,{y:()=>a});var r=o(4537),p=o(5998);let a=(()=>{class l{constructor(e){this.sanitizer=e}transform(e,u){switch(u){case"html":return this.sanitizer.bypassSecurityTrustHtml(e);case"style":return this.sanitizer.bypassSecurityTrustStyle(e);case"script":return this.sanitizer.bypassSecurityTrustScript(e);case"url":return this.sanitizer.bypassSecurityTrustUrl(e);case"resourceUrl":return this.sanitizer.bypassSecurityTrustResourceUrl(e);default:throw new Error(`Invalid safe type specified: ${u}`)}}}return l.\u0275fac=function(e){return new(e||l)(r.Y36(p.H7,16))},l.\u0275pipe=r.Yjl({name:"safe",type:l,pure:!0}),l})()},7493:(_,c,o)=>{o.d(c,{G:()=>u});var r=o(4537),p=o(8692),a=o(5732),l=o(8066),h=o(5056),e=o(7343);let u=(()=>{class s{constructor(n,d,m,y,C){this.http=n,this.windowRef=d,this.viewerDataService=m,this.panoService=y,this.platformId=C,this.session_id=""}send(n){if((0,p.PM)(this.platformId)||this.viewerDataService.editor||!this.panoService.moderationUrl)return;this.session_id||(this.session_id=(Math.random().toString(36).slice(2)+Date.now().toString(36)).substr(0,16));let d=this._getStats();0!=d.host.indexOf("localhost")&&(null!=n.type&&(d.type=n.type),null!=n.plugin&&(d.plugin=n.plugin),null!=n.details&&(d.details=n.details),this.http.post("https://apiw.gothru.co/tours/stats",d).subscribe())}getWidget(n){let m=[{name:"Berlin Menu",component:"MenuHopenkeComponent"},{name:"Side Menu",component:"MenuKavftigComponent"},{name:"Top Menu",component:"MenuLekprogComponent"},{name:"Real Estate Menu",component:"MenuLoppitteComponent"},{name:"Berlin Map",component:"SchemeHopenkeComponent"},{name:"Floor Map",component:"SchemeKavftigComponent"},{name:"Mapbox",component:"SchemeGvesjodComponent"},{name:"Berlin Hotspot",component:"HotspotHopenkeComponent"},{name:"Hotspot",component:"HotspotKavftigComponent"},{name:"Pano link",component:"HotspotHolmlackComponent"},{name:"Berlin Control",component:"ControlHopenkeComponent"},{name:"Control Bar",component:"ControlKavftigComponent"},{name:"Real Estate Control",component:"ControlLoppitteComponent"},{name:"Carousel",component:"OtherCarouselComponent"},{name:"Language",component:"OtherLanguageComponent"},{name:"Logo",component:"OtherLogoComponent"},{name:"Code",component:"OtherCodeComponent"},{name:"Password",component:"OtherPasswordComponent"},{name:"Pano Label",component:"OtherTitleComponent"}].filter(y=>y.component==n).pop();return m?{name:m.name,key:m.name.toLowerCase().replace(" ","_")}:{name:"",key:""}}_getStats(){let n={ip:null,action:null,returning:null,user_type:null,time:null,m_key:null,user_id:this.panoService.user_id,session_id:this.session_id,browser:this.windowRef.nativeWindow.navigator.userAgent,height:this.windowRef.nativeWindow.innerHeight,language:this.windowRef.nativeWindow.navigator.language,location:this.windowRef.nativeWindow.location.href,moderation_id:this.viewerDataService.active.t_id,pano_id:this.viewerDataService.active.id,referer:document.referrer,site:this.panoService.moderationUrl.substr(2),local_time:Math.floor(Date.now()/1e3),width:this.windowRef.nativeWindow.innerWidth,device:null,host:null,tour_type:null,plugin:null,type:null,details:null};return this.panoService.googleApiKey&&(n.m_key=this.panoService.googleApiKey),n.device=this.windowRef.nativeWindow.innerWidth<600?"mobile":this.windowRef.nativeWindow.innerWidth>=600&&this.windowRef.nativeWindow.innerWidth<1e3?"tablet":"desktop",n.host=n.location.split("/")[2],n.tour_type=0==this.panoService.moderationUrl.indexOf("G")?"google":"hosted",n}}return s.\u0275fac=function(n){return new(n||s)(r.LFG(a.eN),r.LFG(l.X),r.LFG(h.m),r.LFG(e.X),r.LFG(r.Lbi))},s.\u0275prov=r.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},2500:(_,c,o)=>{o.r(c),o.d(c,{OtherTitleModule:()=>C});var r=o(8692),p=o(4507),a=o(8041),l=o(9911);const h=JSON.parse('{"widget":"OtherTitleComponent","options":[{"key":"show","label":"Show","type":"toggle","category":"appearance","order":1,"value":true},{"key":"list","label":"Pano list","type":"liste","category":"content","recursive":false,"icons":false,"links":false,"uniq":true,"pano_url":true,"drone":true,"font":{"family":"Exo","align":"left","size":30,"line_height":45,"italic":false,"bold":false,"underline":false,"color":""},"value":[]},{"key":"width","label":"Width","type":"slider","category":"appearance","clear":true,"help":"%","value":""},{"key":"margin","label":"Margin","type":"slider","category":"appearance","help":"px","value":10},{"key":"border","label":"Border","type":"slider","category":"appearance","help":"px","value":15},{"key":"border-radius","label":"Border radius","type":"border-radius","category":"appearance","help":"px","value":{"topLeft":0,"topRight":0,"bottomLeft":0,"bottomRight":0}},{"key":"shadow","label":"Shadow","type":"shadow","category":"appearance","value":""},{"key":"area","label":"Area","type":"area","category":"appearance","order":3,"areas":["top","bottom","left","right","top-left","top-right","bottom-left","bottom-right"],"value":"top-left"},{"key":"colors","type":"color-bundle","category":"colors","value":{"common_color":false,"background":{"type":"native","color":"rgb(255,255,255)"},"text_color":{"color":"rgb(92,107,117)"}}},{"key":"tooltip_show","label":"Arrow text","type":"toggle","category":"appearance","order":2,"value":true},{"key":"tooltip_background","label":"Arrow text background","type":"color","category":"colors","value":{"color":"rgba(0,0,0,0.5)"}},{"key":"tooltip_color","label":"Arrow text color","type":"color","category":"colors","value":{"color":"rgb(255,255,255)"}},{"key":"styles","label":"Styles","type":"css","category":"styles","value":""}]}');var e=o(4537),u=o(2001),s=o(7239);function f(i,g){if(1&i&&(e._UZ(0,"code",2),e.ALo(1,"safe")),2&i){const t=e.oxw();e.Q6J("innerHTML",e.xi3(1,1,t.styles,"html"),e.oJD)}}function n(i,g){if(1&i&&(e.TgZ(0,"a",5),e._uU(1),e.qZA()),2&i){const t=e.oxw(2);e.Q6J("href",t.i18n.t(t.title.href),e.LSH),e.xp6(1),e.Oqu(t.i18n.t(t.title.name))}}const d=function(i,g){return[i,g]};function m(i,g){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,n,2,2,"a",4),e._uU(2),e.qZA()),2&i){const t=e.oxw();e.Q6J("ngClass",e.WLB(3,d,t.options.area.value,t.options.shadow.value)),e.xp6(1),e.Q6J("ngIf",t.title.href&&t.i18n.t(t.title.href)),e.xp6(1),e.hij(" ",t.title.href&&t.i18n.t(t.title.href)?"":t.i18n.t(t.title.name),"\n")}}let y=(()=>{class i extends a.P{constructor(t,v){super(t),this.viewerService=v,this.default_options=h}get title(){return this.options.list.value.filter(t=>t.pano.id===this.viewerService.active.id).pop()}addObservableFunc(){this.observableFunc.width=t=>{this.onWidthChange(t)},this.observableFunc.margin=t=>{this.onMarginChange(t)},this.observableFunc.border=t=>{this.onBorderChange(t)},this.observableFunc.border_radius=t=>{this.onBorderRadiusChange(t)},this.observableFunc.tooltip_background=t=>{this.onTooltipBackgroundChange(t)},this.observableFunc.tooltip_color=t=>{this.onTooltipColorChange(t)},this.observableFunc.list_font=t=>this.onListFontChange(t)}onWidthChange(t){this.elRef.nativeElement.style.setProperty("--width",t?t+"%":null)}onMarginChange(t){this.elRef.nativeElement.style.setProperty("--margin",t+"px")}onBorderChange(t){this.elRef.nativeElement.style.setProperty("--border",t+"px")}onBorderRadiusChange(t){this.elRef.nativeElement.style.setProperty("--border-radius-top-left",t?t.topLeft+"px":null),this.elRef.nativeElement.style.setProperty("--border-radius-top-right",t?t.topRight+"px":null),this.elRef.nativeElement.style.setProperty("--border-radius-bottom-left",t?t.bottomLeft+"px":null),this.elRef.nativeElement.style.setProperty("--border-radius-bottom-right",t?t.bottomRight+"px":null)}onTooltipBackgroundChange(t){this.elRef.nativeElement.style.setProperty("--tooltip-background",l.v.backgroundStyle(t))}onTooltipColorChange(t){this.elRef.nativeElement.style.setProperty("--tooltip-color",t.color)}onListFontChange(t){this.setFontStyle(t,"--list-style-")}initData(){this.addObservableFunc(),super.initData()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(u.a))},i.\u0275cmp=e.Xpm({type:i,selectors:[["wdg-other-title"]],features:[e.qOj],decls:2,vars:2,consts:[[3,"innerHTML",4,"ngIf"],["class","widget other",3,"ngClass",4,"ngIf"],[3,"innerHTML"],[1,"widget","other",3,"ngClass"],["target","_blank","rel","noopener",3,"href",4,"ngIf"],["target","_blank","rel","noopener",3,"href"]],template:function(t,v){1&t&&(e.YNc(0,f,2,4,"code",0),e.YNc(1,m,3,6,"div",1)),2&t&&(e.Q6J("ngIf",v.styles),e.xp6(1),e.Q6J("ngIf",v.widgetInit&&v.title&&v.options.show.value))},dependencies:[r.mk,r.O5,s.y],styles:["[_nghost-%COMP%]{--list-style-line-height: 1.5em;color:var(--text-color)}.widget[_ngcontent-%COMP%]{position:absolute;z-index:2;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;box-sizing:border-box;width:var(--width);padding:0 var(--border);margin:var(--margin);max-width:calc(100% - var(--margin) * 2);border-top-left-radius:var(--border-radius-top-left);border-top-right-radius:var(--border-radius-top-right);border-bottom-left-radius:var(--border-radius-bottom-left);border-bottom-right-radius:var(--border-radius-bottom-right);background:var(--background);font-style:var(--list-style-font-style);font-weight:var(--list-style-font-weight);-webkit-text-decoration:var(--list-style-text-decoration);text-decoration:var(--list-style-text-decoration);font-size:var(--list-style-font-size);font-family:var(--list-style-font-family);text-align:var(--list-style-text-align);line-height:var(--list-style-line-height);color:var(--list-style-color)}.widget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}.widget.bottom[_ngcontent-%COMP%], .widget.top[_ngcontent-%COMP%]{left:50%;transform:translate(-50%);margin-left:initial;margin-right:initial}.widget.left[_ngcontent-%COMP%], .widget.right[_ngcontent-%COMP%]{top:50%;transform:translateY(-50%);margin-top:initial;margin-bottom:initial}.widget.top[_ngcontent-%COMP%], .widget.top-left[_ngcontent-%COMP%], .widget.top-right[_ngcontent-%COMP%]{top:0}.widget.bottom[_ngcontent-%COMP%], .widget.bottom-left[_ngcontent-%COMP%], .widget.bottom-right[_ngcontent-%COMP%]{bottom:0}.widget.bottom-right[_ngcontent-%COMP%], .widget.right[_ngcontent-%COMP%], .widget.top-right[_ngcontent-%COMP%]{right:0}.widget.bottom-left[_ngcontent-%COMP%], .widget.left[_ngcontent-%COMP%], .widget.top-left[_ngcontent-%COMP%]{left:0}@media screen and (max-width: 600px){.title[_ngcontent-%COMP%]{width:100%!important}}  #overlay.mobile wdg-other-title .widget{width:100%!important}code[_ngcontent-%COMP%]{display:none}"]}),i})(),C=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i,bootstrap:[y]}),i.\u0275inj=e.cJS({imports:[r.ez,p.D]}),i})()}}]);