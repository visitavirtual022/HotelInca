"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[434],{354:(x,g,i)=>{i.d(g,{o:()=>v});var l=i(8692),n=i(4537);const p=function(a,d,e,h,f,u,_,b,y){return{"--animation-name":a,"--animation-delay":d,"--animation-direction":e,"--animation-duration":h,"--animation-timing":f,"--animation-beat_scale":u,"--animation-fade_opacity":_,"--animation-flip_x":b,"--animation-flip_y":y}};function s(a,d){if(1&a&&(n.O4$(),n.TgZ(0,"svg",1),n._UZ(1,"path",2),n.qZA()),2&a){const e=n.oxw();n.Akn(e.icon.animation?n.rFY(6,p,["icon-"+e.icon.animation.name,e.icon.animation.delay+"s",e.icon.animation.direction,e.icon.animation.duration+"s",e.icon.animation.timing,e.icon.animation.beat_scale,e.icon.animation.fade_opacity,e.icon.animation.flip_x,e.icon.animation.flip_y]):null),n.uIk("data-prefix",e.icon.prefix)("data-icon",e.icon.iconName)("viewBox","0 0 "+e.icon.icon[0]+" "+e.icon.icon[1]),n.xp6(1),n.uIk("d",e.icon.icon[4])}}let v=(()=>{class a{constructor(e,h){this.elRef=e,this.platformId=h}iconTransform(){!(0,l.NF)(this.platformId)||this.elRef.nativeElement.style.setProperty("--transform",this.icon&&this.icon.icon&&this.icon.icon[0]!=this.icon.icon[1]&&this.icon.icon[0]/this.icon.icon[1]>.8?"scale("+this.icon.icon[0]/this.icon.icon[1]+")":null)}ngOnInit(){this.iconTransform()}ngOnChanges(e){void 0!==e.icon&&this.iconTransform()}}return a.\u0275fac=function(e){return new(e||a)(n.Y36(n.SBq),n.Y36(n.Lbi))},a.\u0275cmp=n.Xpm({type:a,selectors:[["sh-icon"]],inputs:{icon:"icon"},features:[n.TTD],decls:1,vars:1,consts:[["role","img","aria-hidden","true","focusable","false","xmlns","http://www.w3.org/2000/svg",3,"style",4,"ngIf"],["role","img","aria-hidden","true","focusable","false","xmlns","http://www.w3.org/2000/svg"],["fill","currentColor"]],template:function(e,h){1&e&&n.YNc(0,s,2,16,"svg",0),2&e&&n.Q6J("ngIf",h.icon&&h.icon.icon)},dependencies:[l.O5],styles:["[_nghost-%COMP%]{width:14px;height:14px;display:inline-block;line-height:0;transform:var(--transform)}svg[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:100%;height:100%;animation-name:var(--animation-name);animation-delay:var(--animation-delay);animation-direction:var(--animation-direction);animation-duration:var(--animation-duration);animation-iteration-count:var(--animation-iteration-count, infinite);animation-timing-function:var(--animation-timing)}"]}),a})()},6031:(x,g,i)=>{i.d(g,{Q:()=>p});var l=i(8692),n=i(4537);let p=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[l.ez]}),s})()},3434:(x,g,i)=>{i.r(g),i.d(g,{SchemeGvesjodModule:()=>C});var l=i(8692),n=i(9638),p=i(3577),s=i(6031),v=i(4507),a=i(5573);const d=JSON.parse('{"widget":"SchemeGvesjodComponent","area":"top-right","areas":["top-left","top-right","bottom-left","bottom-right"],"show_on_load":true,"hide_on_start":{"desktop":false,"tablet":false,"mobile":true},"styles":"","common_color":false,"background":{"type":"native","color":"rgba(255,255,255,0.6)"},"map_width":240,"map_height":240,"map_zoom":20,"border_size":2,"border_radius":{"topLeft":0,"topRight":0,"bottomLeft":0,"bottomRight":0},"margin":20,"marker_style":{"color":{"color":"rgb(0,153,255)"},"color_active":{"color":"rgb(255,77,0)"},"weight":12},"link_style":{"show":true,"color":{"color":"rgb(92,107,117)"},"weight":2}}');var e=i(4537),h=i(9743),f=i(354),u=i(7239);const _=["mapbox"];function b(t,r){if(1&t&&(e._UZ(0,"code",2),e.ALo(1,"safe")),2&t){const o=e.oxw();e.Q6J("innerHTML",e.xi3(1,1,o.styles,"html"),e.oJD)}}function y(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"sh-mapbox",7,8),e.NdJ("onMarkerClick",function(m){e.CHM(o);const M=e.oxw(2);return e.KtG(M.onMarkerClick(m))}),e.qZA()}if(2&t){const o=e.oxw(2);e.Q6J("panoramas",o.scheme.panoramas)("width",o.scheme.map_width)("height",o.scheme.map_height)("border",o.scheme.border_size)("margin",o.scheme.margin)("markers-count",null==o.scheme.panoramas?null:o.scheme.panoramas.length)("active",o.activePano.id)("angle",o.angle)("marker-weight",o.scheme.marker_style?o.scheme.marker_style.weight:"")("marker-color",o.scheme.marker_style?o.scheme.marker_style.color.color:"")("marker-active-color",o.scheme.marker_style?o.scheme.marker_style.color_active.color:"")("link-active",null!=o.scheme.link_style?o.scheme.link_style.show:"")("link-weight",null!=o.scheme.link_style?o.scheme.link_style.weight:"")("link-color",null!=o.scheme.link_style&&o.scheme.link_style.color?o.scheme.link_style.color.color:"")("zoom",o.scheme.map_zoom)("fly",!0)}}function k(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"div",3),e.YNc(1,y,2,16,"sh-mapbox",4),e.TgZ(2,"button",5),e.NdJ("click",function(){e.CHM(o);const m=e.oxw();return e.KtG(m.toggle())}),e._UZ(3,"sh-icon",6),e.qZA()()}if(2&t){const o=e.oxw();e.ekj("show",o.schemeService.show),e.Q6J("ngClass",o.scheme.area),e.xp6(1),e.Q6J("ngIf",(null==o.scheme.panoramas?null:o.scheme.panoramas.length)&&o.activePano.id),e.xp6(2),e.Q6J("icon",o.icons[0])}}let w=(()=>{class t extends a.G{constructor(){super(...arguments),this.default_options=d,this.icons=[{prefix:"fal",iconName:"times",icon:[320,512,[],"f00d","M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"]}]}onMarkerClick(o){let c=document.getElementById("overlay");c&&c.offsetWidth<600&&this.schemeService.show&&(this.schemeService.show=!1);let m=this.statsService.getWidget(this.schemeService.scheme.widget);this.statsService.send({plugin:m.name,type:m.key,details:o.id})}initData(){super.initData(),this.scheme&&!this.scheme.panoramas&&(this.scheme.panoramas=this.panoService.panoramas.map(o=>({id:o.id,latlong:o.latlong,links:o.links.map(c=>c.id)})))}ngAfterViewInit(){this.schemeService.mapbox=this.mapbox}}return t.\u0275fac=function(){let r;return function(c){return(r||(r=e.n5z(t)))(c||t)}}(),t.\u0275cmp=e.Xpm({type:t,selectors:[["wdg-scheme-gvesjod"]],viewQuery:function(o,c){if(1&o&&e.Gf(_,5),2&o){let m;e.iGM(m=e.CRH())&&(c.mapbox=m.first)}},features:[e.qOj],decls:2,vars:2,consts:[[3,"innerHTML",4,"ngIf"],["class","widget scheme scheme-gvesjod",3,"ngClass","show",4,"ngIf"],[3,"innerHTML"],[1,"widget","scheme","scheme-gvesjod",3,"ngClass"],[3,"panoramas","width","height","border","margin","markers-count","active","angle","marker-weight","marker-color","marker-active-color","link-active","link-weight","link-color","zoom","fly","onMarkerClick",4,"ngIf"],["mat-raised-button","","aria-label","toggle map",1,"toggle",3,"click"],[3,"icon"],[3,"panoramas","width","height","border","margin","markers-count","active","angle","marker-weight","marker-color","marker-active-color","link-active","link-weight","link-color","zoom","fly","onMarkerClick"],["mapbox",""]],template:function(o,c){1&o&&(e.YNc(0,b,2,4,"code",0),e.YNc(1,k,4,5,"div",1)),2&o&&(e.Q6J("ngIf",c.styles),e.xp6(1),e.Q6J("ngIf",c.widgetInit&&c.scheme))},dependencies:[l.mk,l.O5,h.t,n.lW,f.o,u.y],styles:[".scheme-gvesjod[_ngcontent-%COMP%]{z-index:10;display:inline-block;box-sizing:border-box;visibility:hidden;position:absolute;width:var(--width);height:var(--height);margin:var(--margin);padding:var(--padding);border-radius:var(--border-radius-top-left) var(--border-radius-top-right) var(--border-radius-bottom-right) var(--border-radius-bottom-left);background:var(--background);box-shadow:0 5px 10px #0003}.scheme-gvesjod.show[_ngcontent-%COMP%]{visibility:visible;opacity:1}.scheme-gvesjod[_ngcontent-%COMP%]   sh-mapbox[_ngcontent-%COMP%]{display:block;height:100%;overflow:hidden;border-radius:inherit}.scheme-gvesjod[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{position:absolute;top:calc(var(--padding) + 10px);right:calc(var(--padding) + 10px);box-shadow:0 0 0 2px #0000001a;width:30px;min-width:initial;height:30px;padding:0;color:inherit;display:flex;justify-content:center;align-items:center;background-color:#fff}.scheme-gvesjod[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]   sh-icon[_ngcontent-%COMP%]{width:20px;height:20px}.scheme-gvesjod[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]     span.mat-button-wrapper{line-height:0}.scheme-gvesjod.hide[_ngcontent-%COMP%]{visibility:hidden;opacity:0}.scheme-gvesjod.top-right[_ngcontent-%COMP%]{top:0;right:0}.scheme-gvesjod.top-left[_ngcontent-%COMP%]{top:0;left:0}.scheme-gvesjod.bottom-right[_ngcontent-%COMP%]{right:0;bottom:0}.scheme-gvesjod.bottom-left[_ngcontent-%COMP%]{bottom:0;left:0}  #overlay.mobile wdg-scheme-gvesjod .scheme-gvesjod{box-sizing:border-box;top:0!important;right:initial!important;bottom:initial!important;left:0!important;width:100%!important;height:calc(100% - 76px)!important;margin:0!important}code[_ngcontent-%COMP%]{display:none}"]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t,bootstrap:[w]}),t.\u0275inj=e.cJS({imports:[l.ez,p.b,n.ot,s.Q,v.D]}),t})()}}]);