"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[764],{5764:(K,p,a)=>{a.r(p),a.d(p,{SchemeLuubModule:()=>$});var l=a(8692),g=a(2288),m=a(9638),_=a(4507),f=a(6031),v=a(5573);const b=JSON.parse('{"widget":"SchemeLuubComponent","image":"","area":"right","areas":["left","right"],"label_area":"left","label_areas":["left","right","top","bottom"],"hide_on_start":{"desktop":true,"tablet":true,"mobile":true},"show_on_load":true,"styles":"","common_color":false,"background":{"type":"native","color":"rgba(0,0,0,.6)"},"active_color":{"type":"native","color":"rgb(103,58,183)"},"text_color":{"color":"rgb(255,255,255)"},"dot_background":{"type":"native","color":"rgb(92,107,117)"},"border_radius":{"topLeft":0,"topRight":0,"bottomLeft":0,"bottomRight":0},"multiple_map":false,"recursive_map":true,"margin":20,"border_size":0,"map_size":500,"dot_size":16,"special_dot_size":36,"active_dot_size":16,"active_dot_text":{"en":""},"toggle_text":{"en":""},"polyline_size":4,"polyline_bg_size":16,"polyline_color":{"color":"rgb(255,255,255)"},"polyline_bg_color":{"color":"rgba(0,75,136,.3)"},"dots":[],"uniq_dots":true,"icons_enable":true,"labels_fit":false,"dot_icon":{"prefix":"fas","iconName":"circle","icon":[512,512,[],"f111","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"]},"special_dot_icon":{"prefix":"fas","iconName":"map-marker","icon":[384,512,[],"f041","M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"]},"active_dot_icon":{"prefix":"","iconName":""},"toggle_text_font":{"family":"Exo","align":"left","size":14,"line_height":21,"italic":false,"bold":false,"underline":false,"color":""},"dots_font":{"family":"Exo","align":"left","size":16,"line_height":24,"italic":false,"bold":false,"underline":false,"color":""}}');var t=a(4537),u=a(354),x=a(5864),C=a(4827),M=a(2001),P=a(6101);const w=["viewport"],O=["content"],y=["image"];function k(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",16),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.close())}),t._UZ(1,"sh-icon",5),t.qZA()}if(2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.icons[0])}}function S(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"img",17,18),t.NdJ("load",function(o){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onImageLoad(o))}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("src",e.map.image,t.LSH)}}function L(i,s){if(1&i&&(t.O4$(),t.TgZ(0,"g",19),t._UZ(1,"line",20)(2,"line",21),t.qZA()),2&i){const e=s.$implicit,n=s.index,o=t.oxw(2);t.xp6(1),t.uIk("x1",e.x1)("y1",e.y1)("x2",e.x2)("y2",e.y2),t.xp6(1),t.ekj("active",o.activeList.includes(o.lines.length-n)),t.uIk("x1",e.x1)("y1",e.y1)("x2",e.x2)("y2",e.y2)}}function z(i,s){if(1&i&&(t.TgZ(0,"span",24),t._uU(1),t.qZA()),2&i){const e=t.oxw().$implicit,n=t.oxw(2);t.Udp("left",e.pos.x,"%")("top",e.pos.y,"%"),t.uIk("data-id",e.pano.id),t.xp6(1),t.Oqu(n.i18n.t(e.name)?n.i18n.t(e.name):n.i18n.t(n.scheme.active_dot_text))}}function T(i,s){if(1&i){const e=t.EpF();t.O4$(),t.kcU(),t.ynx(0),t.TgZ(1,"span",22),t.NdJ("cdkDragStarted",function(o){const r=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.onDragStart(o,r.pos))})("cdkDragMoved",function(o){const r=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.onDrag(o,r.pos))})("click",function(){const c=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.goToPano(c))}),t._UZ(2,"sh-icon",5),t.qZA(),t.YNc(3,z,2,6,"span",23),t.BQk()}if(2&i){const e=s.$implicit,n=t.oxw(2);t.xp6(1),t.Udp("left",e.pos.x,"%")("top",e.pos.y,"%"),t.ekj("active",n.activePano.id==e.pano.id)("special",e.special),t.Q6J("cdkDragDisabled",!n.editorMode),t.uIk("data-id",e.pano.id),t.xp6(1),t.Q6J("icon",n.activePano.id==e.pano.id&&n.scheme.active_dot_icon&&n.scheme.active_dot_icon.icon?n.scheme.active_dot_icon:e.icon?e.icon:e.special?n.scheme.special_dot_icon:n.scheme.dot_icon),t.xp6(1),t.Q6J("ngIf",n.i18n.t(e.name)||n.i18n.t(n.scheme.active_dot_text)&&n.activePano.id==e.pano.id)}}function Z(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",1,2)(2,"div",3)(3,"button",4),t.NdJ("click",function(){t.CHM(e);const o=t.MAs(1),c=t.oxw();return t.KtG(c.fullscreen(o))}),t._UZ(4,"sh-icon",5),t.qZA(),t.YNc(5,k,2,1,"button",6),t.qZA(),t.TgZ(6,"div",7)(7,"button",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.zoomIn())}),t._UZ(8,"sh-icon",5),t.qZA(),t.TgZ(9,"button",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.zoomOut())}),t._UZ(10,"sh-icon",5),t.qZA()(),t.TgZ(11,"div",10,11),t.YNc(13,S,2,1,"img",12),t.O4$(),t.TgZ(14,"svg",13),t.YNc(15,L,3,10,"g",14),t.qZA(),t.YNc(16,T,4,12,"ng-container",15),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("icon",e.fullscreenMode?e.icons[2]:e.icons[1]),t.xp6(1),t.Q6J("ngIf",!e.fullscreenMode),t.xp6(3),t.Q6J("icon",e.icons[3]),t.xp6(2),t.Q6J("icon",e.icons[4]),t.xp6(1),t.Udp("width",e.width,"px")("height",e.height,"px"),t.ekj("has-active-icon",e.scheme.active_dot_icon&&e.scheme.active_dot_icon.icon),t.xp6(2),t.Q6J("ngIf",e.map.image),t.xp6(2),t.Q6J("ngForOf",e.lines),t.xp6(1),t.Q6J("ngForOf",e.dots)}}let I=(()=>{class i{constructor(e,n,o,c){this.schemeService=e,this.viewerService=n,this.i18n=o,this.platformId=c,this.onPanoClick=new t.vpe,this.icons=[{prefix:"fal",iconName:"times",icon:[320,512,[],"f00d","M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"]},{prefix:"fal",iconName:"expand-alt",icon:[448,512,[],"f424","M198.829 275.515l5.656 5.656c4.686 4.686 4.686 12.284 0 16.971L54.627 448H116c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V364c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v61.373l149.858-149.858c4.687-4.687 12.285-4.687 16.971 0zM436 32H332c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h61.373L243.515 213.858c-4.686 4.686-4.686 12.284 0 16.971l5.656 5.656c4.686 4.686 12.284 4.686 16.971 0L416 86.627V148c0 6.627 5.373 12 12 12h8c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12z"]},{prefix:"fal",iconName:"compress-alt",icon:[448,512,[],"f422","M9.171 476.485l-5.656-5.656c-4.686-4.686-4.686-12.284 0-16.971L169.373 288H108c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h100c8.837 0 16 7.163 16 16v100c0 6.627-5.373 12-12 12h-8c-6.627 0-12-5.373-12-12v-61.373L26.142 476.485c-4.687 4.687-12.285 4.687-16.971 0zM240 256h100c6.627 0 12-5.373 12-12v-8c0-6.627-5.373-12-12-12h-61.373L444.485 58.142c4.686-4.686 4.686-12.284 0-16.971l-5.656-5.656c-4.686-4.686-12.284-4.686-16.971 0L256 201.373V140c0-6.627-5.373-12-12-12h-8c-6.627 0-12 5.373-12 12v100c0 8.837 7.163 16 16 16z"]},{prefix:"fal",iconName:"plus",icon:[384,512,[],"f067","M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"]},{prefix:"fal",iconName:"minus",icon:[384,512,[],"f068","M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"]}],this.lines=[],this.dots=[],this.drag=!1,this.dragPos={x:0,y:0,width:0,height:0},this.activeList=[],this.zoomVal=1,this.fullscreenMode=!1}get scheme(){return this.schemeService.scheme}get activePano(){return this.viewerService.active}get editorMode(){return this.viewerService.editor}init(){this.scrollbooster=new x.Z({viewport:this.viewport.nativeElement,content:this.content.nativeElement,scrollMode:"transform",emulateScroll:!0,shouldScroll:(e,n)=>!n.target.closest(".marker"),onPointerDown:()=>{this.viewport.nativeElement.style.cursor="grabbing"},onPointerUp:()=>{this.viewport.nativeElement.style.cursor="grab"}})}_recursivePushDots(e){!e||e.forEach(n=>{this.dots.push(n),n.children?.length&&this._recursivePushDots(n.children)})}_recursivePushLines(e,n,o){e.forEach((c,r)=>{if(c.children&&c.children.length){let d=c.children[0];this.lines.push({x1:Math.round(n*c.pos.x/100),y1:Math.round(o*c.pos.y/100),x2:Math.round(n*d.pos.x/100),y2:Math.round(o*d.pos.y/100)}),this._recursivePushLines(c.children,n,o)}if(!e[r+1])return;let h=e[r+1];this.lines.push({x1:Math.round(n*c.pos.x/100),y1:Math.round(o*c.pos.y/100),x2:Math.round(n*h.pos.x/100),y2:Math.round(o*h.pos.y/100)})})}updateDots(){this.dots=[],this._recursivePushDots(this.map.dots)}updateLines(){this.lines=[],this.image&&this.map&&this.map.dots&&(this._recursivePushLines(this.map.dots,this.width,this.height),this.lines=this.lines.reverse())}onDragStart(e,n){this.drag=!0;let o=e.source.element.nativeElement.closest(e.source.boundaryElement);this.dragPos.width=o.offsetWidth,this.dragPos.height=o.offsetHeight,this.dragPos.x=this.dragPos.width*n.x/100,this.dragPos.y=this.dragPos.height*n.y/100}onDrag(e,n){e.source.reset(),n.x=parseFloat((100*(this.dragPos.x+e.distance.x)/this.dragPos.width).toFixed(2)),n.y=parseFloat((100*(this.dragPos.y+e.distance.y)/this.dragPos.height).toFixed(2)),this.updateLines()}scrollToMarker(e){this.scrollbooster?.setPosition({x:Math.min(-1*this.scrollbooster.edgeX.from,Math.max(-1*this.scrollbooster.edgeX.to,this.scrollbooster.content.width*e.x/100-this.scrollbooster.viewport.width/2)),y:Math.min(-1*this.scrollbooster.edgeY.from,Math.max(-1*this.scrollbooster.edgeY.to,this.scrollbooster.content.height*e.y/100-this.scrollbooster.viewport.height/2))})}activeListUpdate(e,n){let o;if(!e)return o;for(let c=e.length-1;c>=0;c--)e[c].pano.id==n&&(o=e[c]),!o&&e[c].children?.length&&(o=this.activeListUpdate(e[c].children,n)),o&&this.activeList.push(this.dots.findIndex(r=>r.pano&&r.pano.id==e[c].pano.id));return o}goToPano(e){!this.drag&&e.pano?this.onPanoClick.emit(e):this.drag=!1}fitImage(){this.content.nativeElement.style.left=null,this.content.nativeElement.style.top=null,this.image.nativeElement.width<this.viewport.nativeElement.getBoundingClientRect().width&&(this.content.nativeElement.style.left=`calc(50% - ${this.image.nativeElement.width/2}px)`),this.image.nativeElement.height<this.viewport.nativeElement.getBoundingClientRect().height&&(this.content.nativeElement.style.top=`calc(50% - ${this.image.nativeElement.height/2}px)`)}zooming(e,n=.5,o=3){let c=this.zoomVal+e;this.zoomVal=c<n?c=n:c>=o?c=o:c,this.updateByZooming()}updateByZooming(){this.width=this.zoomVal*this.image.nativeElement.naturalWidth,this.height=this.zoomVal*this.image.nativeElement.naturalHeight;let e=this.width/this.scrollbooster.content.width;this.scrollbooster.content={width:this.width,height:this.height},this.scrollbooster.edgeX={from:Math.min(-this.scrollbooster.content.width+this.scrollbooster.viewport.width,0),to:0},this.scrollbooster.edgeY={from:Math.min(-this.scrollbooster.content.height+this.scrollbooster.viewport.height,0),to:0},console.log(),this.scrollbooster.setPosition({x:-this.scrollbooster.position.x*e-this.scrollbooster.viewport.width*(1-e)/2,y:-this.scrollbooster.position.y*e-this.scrollbooster.viewport.height*(1-e)/2}),this.updateLines()}zoomIn(){this.zooming(.2)}zoomOut(){this.zooming(-.2)}onFullScreenChange(){this.fullscreenMode=this.viewerService.checkFullscreen()}onImageLoad(e){this.updateDots(),this.updateByZooming(),this.onActivePanoChange()}onActivePanoChange(){this.activeList=[];let e=this.activeListUpdate(this.map.dots,this.viewerService.active.id);e&&this.scrollToMarker(e.pos)}onPanosChange(){this.updateDots(),this.updateLines(),this.onActivePanoChange()}fullscreen(e){this.viewerService.toggleFullScreenFor(e),setInterval(()=>this.fitImage())}close(){this.schemeService.show=!1}ngAfterViewInit(){(0,l.NF)(this.platformId)&&this.init()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.p),t.Y36(M.a),t.Y36(P.T),t.Y36(t.Lbi))},i.\u0275cmp=t.Xpm({type:i,selectors:[["wdg-scheme-luub-map"]],viewQuery:function(e,n){if(1&e&&(t.Gf(w,5,t.SBq),t.Gf(O,5,t.SBq),t.Gf(y,5,t.SBq)),2&e){let o;t.iGM(o=t.CRH())&&(n.viewport=o.first),t.iGM(o=t.CRH())&&(n.content=o.first),t.iGM(o=t.CRH())&&(n.image=o.first)}},hostBindings:function(e,n){1&e&&t.NdJ("fullscreenchange",function(){return n.onFullScreenChange()},!1,t.evT)},inputs:{map:"map"},outputs:{onPanoClick:"onPanoClick"},decls:1,vars:1,consts:[["class","map-wrapper",4,"ngIf"],[1,"map-wrapper"],["viewport",""],[1,"action-buttons"],["mat-button","","aria-label","fullscreen",3,"click"],[3,"icon"],["mat-button","","aria-label","close",3,"click",4,"ngIf"],[1,"action-buttons","zoom-buttons"],["mat-button","","aria-label","zoom-out",3,"click"],["mat-button","","aria-label","zoom-in",3,"click"],[1,"map"],["content",""],["alt","map",3,"src","load",4,"ngIf"],[1,"lines"],["class","line",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["mat-button","","aria-label","close",3,"click"],["alt","map",3,"src","load"],["image",""],[1,"line"],[1,"line__wrapper"],["stroke-linecap","round",1,"line__fill"],["cdkDrag","","cdkDragBoundary",".map",1,"marker",3,"cdkDragDisabled","cdkDragStarted","cdkDragMoved","click"],["class","title",3,"left","top",4,"ngIf"],[1,"title"]],template:function(e,n){1&e&&t.YNc(0,Z,17,13,"div",0),2&e&&t.Q6J("ngIf",n.map)},dependencies:[l.sg,l.O5,g.Zt,m.lW,u.o],styles:["[_nghost-%COMP%]{display:contents;--zoom: 1}.map-wrapper[_ngcontent-%COMP%]{flex:1;overflow:hidden;position:relative;cursor:grab}.map-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{position:absolute;top:0;right:0;display:flex;gap:10px;z-index:1;margin:var(--margin)}.map-wrapper[_ngcontent-%COMP%]   .action-buttons.zoom-buttons[_ngcontent-%COMP%]{left:0;right:initial;flex-direction:column}.map-wrapper[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:var(--background);width:50px;height:40px}.map[_ngcontent-%COMP%]{line-height:0;position:absolute}.map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.map[_ngcontent-%COMP%]   svg.lines[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.map[_ngcontent-%COMP%]   svg.lines[_ngcontent-%COMP%]   .line__wrapper[_ngcontent-%COMP%]{stroke:var(--polyline-bg-color);stroke-width:var(--polyline-bg-size)}.map[_ngcontent-%COMP%]   svg.lines[_ngcontent-%COMP%]   .line__fill[_ngcontent-%COMP%]{stroke:var(--polyline-color);stroke-width:var(--polyline-size)}.map[_ngcontent-%COMP%]   svg.lines[_ngcontent-%COMP%]   .line__fill.active[_ngcontent-%COMP%]{stroke:var(--active-color)}.map[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{position:absolute;top:-2px;left:50%;background:var(--background);color:var(--text-color);padding:2px 6px;border-radius:2px;transform:translate(-50%,calc(-100% - var(--dot-size) / 2 - 2px));white-space:nowrap;z-index:1}.map[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);line-height:0;background:transparent;width:var(--dot-size);height:var(--dot-size);color:var(--dot-background)}.map[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]  .mat-button-wrapper{padding:0;width:100%;height:100%;line-height:0;display:flex;align-items:center;justify-content:center;pointer-events:none}.map[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]   sh-icon[_ngcontent-%COMP%]{width:100%;height:100%;max-width:100%;max-height:100%}.map[_ngcontent-%COMP%]   .marker.special[_ngcontent-%COMP%]{width:var(--special-dot-size);min-width:var(--special-dot-size);height:var(--special-dot-size);min-height:var(--special-dot-size)}.map[_ngcontent-%COMP%]   .marker.special[_ngcontent-%COMP%] + .title[_ngcontent-%COMP%]{transform:translate(-50%,calc(-100% - var(--special-dot-size) / 2 - 2px))}.map[_ngcontent-%COMP%]   .marker.active[_ngcontent-%COMP%]{color:var(--active-color)}.map[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-width:100%;max-height:100%}.map[_ngcontent-%COMP%]   .marker.active[_ngcontent-%COMP%], .map[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]:hover{transition:transform .2s ease;transform:translate(-50%,-50%) scale(1.1)}.map[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]:hover{cursor:pointer}.map.has-active-icon[_ngcontent-%COMP%]   .marker.active[_ngcontent-%COMP%]{width:var(--active-dot-size);min-width:var(--active-dot-size);height:var(--active-dot-size);min-height:var(--active-dot-size)}.map.has-active-icon[_ngcontent-%COMP%]   .marker.active[_ngcontent-%COMP%] + .title[_ngcontent-%COMP%]{transform:translate(-50%,calc(-100% - var(--active-dot-size) / 2 - 2px))}"]}),i})();var J=a(7239);const N=["mapbox"];function H(i,s){if(1&i&&(t._UZ(0,"code",2),t.ALo(1,"safe")),2&i){const e=t.oxw();t.Q6J("innerHTML",t.xi3(1,1,e.styles,"html"),t.oJD)}}function F(i,s){if(1&i&&(t.TgZ(0,"span",11),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Oqu(e.i18n.t(e.scheme.toggle_text))}}function E(i,s){1&i&&t.GkF(0)}function A(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"wdg-scheme-luub-map",12,13),t.NdJ("onPanoClick",function(o){t.CHM(e);const c=t.oxw(2);return t.KtG(c.goToPano(o))}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("map",e.scheme)}}function Q(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){const c=t.CHM(e).index,r=t.oxw(3);return t.KtG(r.activate(c))}),t._uU(1),t.qZA()}if(2&i){const e=s.$implicit,n=s.index,o=t.oxw(3);t.ekj("active",o.schemeService.multipleMapIndex==n),t.xp6(1),t.hij(" ",o.i18n.t(e.title)," ")}}function D(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"wdg-scheme-luub-map",12,13),t.NdJ("onPanoClick",function(o){t.CHM(e);const c=t.oxw(4);return t.KtG(c.goToPano(o))}),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("map",e)}}function B(i,s){if(1&i&&(t.ynx(0),t.YNc(1,D,2,1,"wdg-scheme-luub-map",18),t.BQk()),2&i){const e=s.index,n=t.oxw(3);t.xp6(1),t.Q6J("ngIf",n.schemeService.multipleMapIndex==e)}}function G(i,s){if(1&i&&(t.TgZ(0,"div",14),t.YNc(1,Q,2,3,"button",15),t.qZA(),t.YNc(2,B,2,1,"ng-container",16)),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.scheme.multiple_map_data),t.xp6(1),t.Q6J("ngForOf",e.scheme.multiple_map_data)}}const Y=function(i,s){return[i,s]};function U(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",3)(1,"button",4),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.open())}),t._UZ(2,"sh-icon",5),t.YNc(3,F,2,1,"span",6),t.qZA(),t.TgZ(4,"div",7),t.YNc(5,E,1,0,"ng-container",8),t.YNc(6,A,2,1,"ng-template",null,9,t.W1O),t.YNc(8,G,3,2,"ng-template",null,10,t.W1O),t.qZA()()}if(2&i){const e=t.MAs(7),n=t.MAs(9),o=t.oxw();t.ekj("hide",!o.show)("editor-mode",o.editorMode),t.Q6J("ngClass",t.WLB(10,Y,o.scheme.area,"label_"+o.scheme.label_area)),t.xp6(2),t.Q6J("icon",o.icons[0]),t.xp6(1),t.Q6J("ngIf",o.i18n.t(o.scheme.toggle_text)),t.xp6(2),t.Q6J("ngIf",null==o.scheme.multiple_map_data)("ngIfThen",e)("ngIfElse",n)}}let V=(()=>{class i extends v.G{constructor(){super(...arguments),this.default_options=b,this.icons=[{prefix:"fas",iconName:"map",icon:[576,512,[],"f279","M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z"]}]}clickout(e){!this.elRef.nativeElement.contains(e.target)&&this.viewerService.viewerDataService.overlay.nativeElement.contains(e.target)&&"map"!=e.target?.getAttribute("aria-label")&&this.schemeService.show&&!this.mapbox?.scrollbooster.isRunning&&(this.schemeService.show=!1)}open(){this.schemeService.show=!0}onResize(){this.mapbox?.fitImage()}onMapSizeChange(e){super.onMapSizeChange(e),this.mapbox?.scrollbooster.updateMetrics(),this.mapbox?.fitImage()}onMarginChange(e){super.onMarginChange(e),this.mapbox?.scrollbooster.updateMetrics(),this.mapbox?.fitImage()}onBorderSizeChange(e){super.onBorderSizeChange(e),this.mapbox?.scrollbooster.updateMetrics(),this.mapbox?.fitImage()}onActivePanoChange(e){super.onActivePanoChange(e),this.mapbox?.onActivePanoChange()}onPanosChange(e){super.onPanosChange(e),this.mapbox?.onPanosChange()}activate(e){this.schemeService.multipleMapIndex=e}goToPano(e){if(!e.pano||this.activePano.id==e.pano.id)return;this.viewerService.goToPano(e.pano.id,{theta:e.theta,phi:e.phi}),this.mapbox.fullscreenMode?(this.viewerService.closeFullscreen(),setTimeout(()=>{this.schemeService.show=!1},100)):this.schemeService.show=!1;let n=this.statsService.getWidget(this.scheme.widget||"");this.statsService.send({plugin:n.name,type:n.key,details:e.pano.id})}}return i.\u0275fac=function(){let s;return function(n){return(s||(s=t.n5z(i)))(n||i)}}(),i.\u0275cmp=t.Xpm({type:i,selectors:[["wdg-scheme-luub"]],viewQuery:function(e,n){if(1&e&&t.Gf(N,5),2&e){let o;t.iGM(o=t.CRH())&&(n.mapbox=o.first)}},hostBindings:function(e,n){1&e&&t.NdJ("click",function(c){return n.clickout(c)},!1,t.evT)("resize",function(c){return n.onResize(c)},!1,t.Jf7)},features:[t.qOj],decls:2,vars:2,consts:[[3,"innerHTML",4,"ngIf"],["class","widget scheme scheme-luub",3,"ngClass","hide","editor-mode",4,"ngIf"],[3,"innerHTML"],[1,"widget","scheme","scheme-luub",3,"ngClass"],["mat-button","",1,"open",3,"click"],[3,"icon"],["class","text",4,"ngIf"],[1,"wrapper"],[4,"ngIf","ngIfThen","ngIfElse"],["singleMap",""],["multiMap",""],[1,"text"],[3,"map","onPanoClick"],["mapbox",""],[1,"labels"],["mat-button","",3,"active","click",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["mat-button","",3,"click"],[3,"map","onPanoClick",4,"ngIf"]],template:function(e,n){1&e&&(t.YNc(0,H,2,4,"code",0),t.YNc(1,U,10,13,"div",1)),2&e&&(t.Q6J("ngIf",n.styles),t.xp6(1),t.Q6J("ngIf",n.widgetInit&&n.scheme&&n.visible))},dependencies:[l.mk,l.sg,l.O5,m.lW,u.o,I,J.y],styles:["[_nghost-%COMP%]{--dots-style-font-size: 16px;--dots-style-line-height: 24px}.scheme-luub[_ngcontent-%COMP%]{position:absolute;z-index:10;display:inline-block;opacity:1;box-shadow:0 5px 10px #0003;-webkit-user-select:none;user-select:none;background:var(--background);color:var(--text-color);margin:var(--margin);padding:var(--padding);border-radius:var(--border-radius-top-left) var(--border-radius-top-right) var(--border-radius-bottom-right) var(--border-radius-bottom-left);box-sizing:border-box;height:100%;width:var(--size);max-height:calc(100% - var(--margin) * 2);max-width:calc(100% - var(--margin) * 2);transition:transform .2s ease-in}.scheme-luub[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;overflow:hidden;border-radius:inherit}.scheme-luub[_ngcontent-%COMP%]   button.open[_ngcontent-%COMP%]{position:absolute;top:0;background:var(--background);padding:2px 18px;border-radius:inherit;visibility:hidden;opacity:0}.scheme-luub[_ngcontent-%COMP%]   button.open[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-left:6px}.scheme-luub.hide[_ngcontent-%COMP%]{transition:transform .2s ease-out}.scheme-luub.hide[_ngcontent-%COMP%]   button.open[_ngcontent-%COMP%]{transition:opacity .3s ease;visibility:visible;opacity:1}.scheme-luub.left[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.scheme-luub.left[_ngcontent-%COMP%]   button.open[_ngcontent-%COMP%]{left:100%;border-top-left-radius:0;border-bottom-left-radius:0}.scheme-luub.left.hide[_ngcontent-%COMP%]{transform:translate(calc(-100% - var(--margin)))}.scheme-luub.right[_ngcontent-%COMP%]{position:absolute;top:0;right:0}.scheme-luub.right[_ngcontent-%COMP%]   button.open[_ngcontent-%COMP%]{right:100%;border-top-right-radius:0;border-bottom-right-radius:0}.scheme-luub.right.hide[_ngcontent-%COMP%]{transform:translate(calc(100% + var(--margin)))}.scheme-luub[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{display:flex}.scheme-luub[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:var(--labels-fit);border-radius:0;padding:0 20px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.scheme-luub[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#0000001a}.scheme-luub[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:var(--active-color)}.scheme-luub.label_left[_ngcontent-%COMP%]{flex-direction:row}.scheme-luub.label_left[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{flex-direction:column}.scheme-luub.label_right[_ngcontent-%COMP%]{flex-direction:row}.scheme-luub.label_right[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{flex-direction:column;height:100%;order:2}.scheme-luub.label_top[_ngcontent-%COMP%]{flex-direction:column}.scheme-luub.label_top[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{flex-direction:row}.scheme-luub.label_bottom[_ngcontent-%COMP%]{flex-direction:column}.scheme-luub.label_bottom[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]{flex-direction:row;order:2}.scheme-luub.editor-mode[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]{cursor:move}button.open[_ngcontent-%COMP%]   span.text[_ngcontent-%COMP%]{font-style:var(--toggle-text-style-font-style);font-weight:var(--toggle-text-style-font-weight);-webkit-text-decoration:var(--toggle-text-style-text-decoration);text-decoration:var(--toggle-text-style-text-decoration);font-size:var(--toggle-text-style-font-size);font-family:var(--toggle-text-style-font-family);color:var(--toggle-text-style-color);text-align:var(--toggle-text-style-text-align);line-height:var(--toggle-text-style-line-height)}wdg-scheme-luub-map[_ngcontent-%COMP%]     .map .title{font-style:var(--dots-style--font-style);font-weight:var(--dots-style-font-weight);-webkit-text-decoration:var(--dots-style-text-decoration);text-decoration:var(--dots-style-text-decoration);font-size:var(--dots-style-font-size);font-family:var(--dots-style-font-family);color:var(--dots-style-color);text-align:var(--dots-style-text-align);line-height:var(--dots-style-line-height)}code[_ngcontent-%COMP%]{display:none}"]}),i})(),$=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i,bootstrap:[V]}),i.\u0275inj=t.cJS({imports:[l.ez,g._t,m.ot,f.Q,_.D]}),i})()}}]);