"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[368],{6368:(Y,d,a)=>{a.r(d),a.d(d,{OtherBerlinMapModule:()=>A});var s=a(8692),u=a(4507),c=a(9638),_=a(6031),h=a(2288),f=a(384),b=a(8041);const v=JSON.parse('{"widget":"OtherBerlinMapComponent","show_on_load":true,"options":[{"order":1,"key":"to_control","label":"Toggle button to control bar","type":"toggle","category":"appearance","help":"only for \\"Berlin\\" and \\"Control bar\\" plugins","value":false},{"key":"maps","label":"Maps","type":"multi","category":"content","value":[[{"key":"title","label":"Title","type":"text","value":{"en":""},"font":{"family":"Exo","align":"left","size":14,"line_height":21,"italic":false,"bold":false,"underline":false,"color":""}},{"key":"image","label":"Image","type":"image","value":""},{"key":"dots","label":"Dots","type":"liste","dot":true,"icons":true,"images":true,"links":true,"font":{"family":"Exo","align":"left","size":14,"line_height":21,"italic":false,"bold":false,"underline":false,"color":""},"value":[]},{"key":"map_angle","label":"Map angle","type":"slider","max":359,"value":0}]]},{"key":"area","label":"Area","areas":["top-left","top-right","bottom-left","bottom-right"],"type":"area","category":"appearance","value":"top-right"},{"key":"margin","label":"Margin","type":"slider","category":"appearance","value":20},{"key":"border_size","label":"Border size","type":"slider","category":"appearance","value":5},{"key":"border_radius","label":"Border radius","type":"border-radius","category":"appearance","help":"px","value":{"topLeft":0,"topRight":0,"bottomLeft":0,"bottomRight":0}},{"key":"map_width","label":"Map width","type":"slider","category":"appearance","max":1000,"value":240},{"key":"map_height","label":"Map height","type":"slider","category":"appearance","max":1000,"value":240},{"key":"map_max_width","label":"Map max width","type":"slider","category":"appearance","max":1000,"value":400},{"key":"map_max_height","label":"Map max height","type":"slider","category":"appearance","max":1000,"value":400},{"key":"map_fullscreen_width","label":"Map fullscreen width","type":"slider","category":"appearance","help":"%","value":80},{"key":"map_fullscreen_height","label":"Map fullscreen height","type":"slider","category":"appearance","help":"%","value":60},{"key":"zoom","label":"Zoom","type":"slider","min":0,"max":5,"step":0.1,"category":"appearance","value":1},{"key":"zoom_max","label":"Zoom max","type":"slider","min":1,"max":5,"step":0.1,"category":"appearance","value":2},{"key":"dot_size","label":"Dot size","type":"slider","category":"appearance","value":18},{"key":"dot_background","label":"Dot color","type":"color","category":"colors","value":{"type":"native","color":"rgb(234,189,0)"}},{"key":"colors","type":"color-bundle","category":"colors","value":{"common_color":false,"background":{"type":"native","color":"rgb(22,160,133)"},"active_color":{"type":"native","color":"rgb(103,58,183)"},"text_color":{"color":"rgb(255,255,255)"}}},{"key":"styles","label":"Styles","type":"css","category":"styles","value":""}]}');var m=a(9911),e=a(4537),g=a(2001),x=a(6883),M=a(354),C=a(6101),y=a(7343),O=a(7493),w=a(6369);const k=["dragZoom"];function P(r,i){if(1&r&&(e.TgZ(0,"span",6),e._uU(1),e.qZA()),2&r){const t=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Oqu(o.i18n.t(t.name))}}function z(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"span",3),e.NdJ("cdkDragStarted",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onDragStart(n))})("cdkDragEnded",function(n){const p=e.CHM(t).$implicit,G=e.oxw();return e.KtG(G.onDragEnd(n,p.pos))}),e.YNc(1,P,2,1,"span",4),e.TgZ(2,"button",5),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.goToPano(l))}),e.qZA()()}if(2&r){const t=i.$implicit,o=e.oxw();e.Udp("left",null==t.pos?null:t.pos.x,"%")("top",null==t.pos?null:t.pos.y,"%"),e.Q6J("cdkDragDisabled",!o.editorMode),e.xp6(1),e.Q6J("ngIf",o.i18n.t(t.name)),e.xp6(1),e.Udp("transform","translate(-50%,-50%) rotate("+(o.angle+o.map.map_angle-90)+"deg)"),e.ekj("active",t.pano.id==o.active)}}let T=(()=>{class r{constructor(t,o,n,l){this.i18n=t,this.viewerService=o,this.panoService=n,this.statsService=l,this.zoom=1,this.onInit=new e.vpe}changeOffset(t,o){this.dragZoom.updateParams({width:Math.min(t,this.viewerService.overlayWidth-2*(this.options.margin.value+this.options.border_size.value)),height:Math.min(o,this.viewerService.overlayHeight-2*(this.options.margin.value+this.options.border_size.value))},"all 0.5s ease")}goToPano(t){if(!t.pano||this.active==t.pano.id)return;this.viewerService.goToPano(t.pano.id,{theta:t.theta,phi:t.phi}),"mobile"==this.viewerService.overlayDeviceClass&&this.widget.toggle();let o=this.statsService.getWidget(this.widget.component);this.statsService.send({plugin:o.name,type:o.key,details:t.pano.id})}get angle(){return this.viewerService.angle}get editorMode(){return this.viewerService.editor}onDragStart(t){!this.dragZoom||(this.dragZoom.disableDragging=!0)}onDragEnd(t,o){!this.dragZoom||(setTimeout(()=>{this.dragZoom.disableDragging=!1}),t.source.reset(),o.x=parseFloat((o.x+100*t.distance.x/this.dragZoom.params.width).toFixed(2)),o.y=parseFloat((o.y+100*t.distance.y/this.dragZoom.params.height).toFixed(2)))}_makeCenter(){let t;if(this.map?.dots){for(let o=this.map.dots.length-1;o>=0;o--){const n=this.map.dots[o];if(n.pano.id===this.active){t=n;break}}!t||this.dragZoom.setPosition(t.pos,"all 0.3s ease")}}makeCenter(){this.dragZoom?.params.width?this._makeCenter():m.v.waitUntil(()=>0!==this.dragZoom.params.width).then(()=>this._makeCenter())}initData(){this.onInit.emit()}ngOnChanges(t){void 0!==t.map&&this.initData(),(void 0!==t.active||void 0!==t.dots)&&this.makeCenter(),void 0!==t.zoom&&this.dragZoom?.setZoom(this.zoom)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(C.T),e.Y36(g.a),e.Y36(y.X),e.Y36(O.G))},r.\u0275cmp=e.Xpm({type:r,selectors:[["wdg-other-berlin-map-item"]],viewQuery:function(t,o){if(1&t&&e.Gf(k,5),2&t){let n;e.iGM(n=e.CRH())&&(o.dragZoom=n.first)}},inputs:{map:"map",wrapper:"wrapper",active:"active",zoom:"zoom",dots:"dots",zoomMax:"zoomMax",widget:"widget",options:"options"},outputs:{onInit:"onInit"},features:[e.TTD],decls:3,vars:3,consts:[[3,"imgSrc","zoom"],["dragZoom",""],["class","marker-wrapper","cdkDrag","","cdkDragBoundary",".content",3,"left","top","cdkDragDisabled","cdkDragStarted","cdkDragEnded",4,"ngFor","ngForOf"],["cdkDrag","","cdkDragBoundary",".content",1,"marker-wrapper",3,"cdkDragDisabled","cdkDragStarted","cdkDragEnded"],["class","name",4,"ngIf"],["mat-mini-fab","","aria-label","marker",1,"marker",3,"click"],[1,"name"]],template:function(t,o){1&t&&(e.TgZ(0,"sh-drag-zoom",0,1),e.YNc(2,z,3,10,"span",2),e.qZA()),2&t&&(e.Q6J("imgSrc",o.map.image)("zoom",o.zoom),e.xp6(2),e.Q6J("ngForOf",o.map.dots))},dependencies:[s.sg,s.O5,c.lW,h.Zt,w.H],styles:['sh-drag-zoom[_ngcontent-%COMP%]{width:100%;height:100%}.marker-wrapper[_ngcontent-%COMP%]{position:absolute;width:0;height:0}.marker-wrapper[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]{position:absolute;transform:translate(-50%,-50%);border-radius:50%;border:2px solid #fff;padding:0;width:var(--dot-size);height:var(--dot-size);background:var(--dot-background)}.marker-wrapper[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]     .mat-ripple{background-color:inherit}.marker-wrapper[_ngcontent-%COMP%]   .marker.active[_ngcontent-%COMP%]{background:var(--active-color)}.marker-wrapper[_ngcontent-%COMP%]   .marker.active[_ngcontent-%COMP%]:before{position:absolute;z-index:-1;top:0;left:50%;display:block;width:150%;height:100%;content:"";-webkit-transform:perspective(15px) rotateY(-45deg);background:#fff;background:linear-gradient(to right,rgba(255,255,255,.7) 0%,rgba(255,255,255,0) 100%)}.marker-wrapper[_ngcontent-%COMP%]   .marker[_ngcontent-%COMP%]:hover{transform:translate(-50%,-50%) scale(1.2);cursor:pointer}.marker-wrapper[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{position:absolute;font-size:12px;padding:2px 10px;border-radius:2px;transform:translate(-50%);bottom:calc(var(--dot-size) / 2 + 2px);display:none;background:var(--background);white-space:nowrap;z-index:1}.marker-wrapper[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%]{display:block}']}),r})();var Z=a(7239);const S=["map"];function D(r,i){if(1&r&&(e._UZ(0,"code",2),e.ALo(1,"safe")),2&r){const t=e.oxw();e.Q6J("innerHTML",e.xi3(1,1,t.styles,"html"),e.oJD)}}const B=function(r,i,t){return{image:r,dots:i,map_angle:t}};function I(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"wdg-other-berlin-map-item",18,19),e.NdJ("onInit",function(){e.CHM(t);const n=e.oxw().index,l=e.oxw(3);return e.KtG(l.updateDots(n))}),e.qZA()}if(2&r){const t=e.oxw().$implicit;e.oxw(2);const o=e.MAs(2),n=e.oxw();e.Q6J("map",e.kEZ(8,B,n.getMapValue(t,"image"),n.getMapValue(t,"dots"),n.getMapValue(t,"map_angle")))("wrapper",o)("active",n.activePano.id)("zoom",n.options.zoom.value)("zoomMax",n.options.zoom_max.value)("widget",n.widget)("options",n.options)("dots",n.getMapValue(t,"dots").length)}}function F(r,i){if(1&r&&(e.ynx(0),e.YNc(1,I,2,12,"wdg-other-berlin-map-item",17),e.BQk()),2&r){const t=i.index,o=e.oxw(3);e.xp6(1),e.Q6J("ngIf",o.activeMap==t)}}function J(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){const l=e.CHM(t).index,p=e.oxw(3);return e.KtG(p.activeMap=l)}),e._uU(1),e.qZA()}if(2&r){const t=i.$implicit,o=i.index,n=e.oxw(3);e.ekj("active",n.activeMap==o),e.xp6(1),e.hij(" ",n.i18n.t(n.getMapValue(t,"title"))," ")}}function H(r,i){if(1&r&&(e.ynx(0),e.YNc(1,F,2,1,"ng-container",14),e.TgZ(2,"div",15),e.YNc(3,J,2,3,"button",16),e.qZA(),e.BQk()),2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.options.maps.value),e.xp6(2),e.Q6J("ngForOf",t.options.maps.value)}}function N(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("mouseenter",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.maximize())})("mouseleave",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.minimize())}),e.TgZ(1,"div",4,5)(3,"button",6),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.fullscreenOpen())}),e.qZA(),e.TgZ(4,"button",7),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.fullscreenClose(n))}),e._UZ(5,"sh-icon",8),e.qZA(),e.TgZ(6,"button",9),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.toggle())}),e._UZ(7,"sh-icon",8),e.qZA(),e.TgZ(8,"div",10)(9,"button",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.zoomIn())}),e._uU(10,"+"),e.qZA(),e.TgZ(11,"button",12),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.zoomOut())}),e._uU(12,"-"),e.qZA()(),e.YNc(13,H,4,2,"ng-container",13),e.qZA()()}if(2&r){const t=e.MAs(2),o=e.oxw();e.ekj("hide",!o.widget.show)("fullscreen",o.fullscreened),e.Q6J("ngClass",o.options.area.value),e.xp6(5),e.Q6J("icon",o.icons[1]),e.xp6(2),e.Q6J("icon",o.icons[0]),e.xp6(6),e.Q6J("ngIf",t&&t.offsetWidth)}}let Q=(()=>{class r extends b.P{constructor(t,o,n){super(t),this.viewerService=o,this.controlService=n,this.default_options=v,this.icons=[{prefix:"fal",iconName:"times",icon:[320,512,[],"f00d","M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"]},{prefix:"fal",iconName:"window-minimize",icon:[512,512,[128469],"f2d1","M0 464C0 455.2 7.164 448 16 448H496C504.8 448 512 455.2 512 464C512 472.8 504.8 480 496 480H16C7.164 480 0 472.8 0 464z"]}],this.activeMap=0,this.fullscreened=!1,this.updatedDots=[]}getMapValue(t,o){return t.find(n=>n.key==o)?.value}get activePano(){return this.viewerService.active}maximize(){this.fullscreened||this.mapComponent?.changeOffset(this.options.map_max_width.value,this.options.map_max_height.value)}minimize(){this.fullscreened||this.mapComponent?.changeOffset(this.options.map_width.value,this.options.map_height.value)}fullscreenOpen(){this.fullscreened=!0,this.mapComponent?.changeOffset(this.viewerService.overlayWidth*this.options.map_fullscreen_width.value/100,this.viewerService.overlayHeight*this.options.map_fullscreen_height.value/100)}fullscreenClose(t){this.fullscreened=!1,this.maximize(),"mobile"==this.viewerService.overlayDeviceClass&&(this.widget.show=!1)}zoomIn(){this.mapComponent?.dragZoom.zoomIn()}zoomOut(){this.mapComponent?.dragZoom.zoomOut()}_changeDotsPositionFromPixelToPercentage(){m.v.waitUntil(()=>0!==this.mapComponent.dragZoom.params.width).then(()=>{this.mapComponent.map.dots.forEach(t=>{!t.pos||(t.pos.x=parseFloat((t.pos.x/this.mapComponent.dragZoom.params.originalWidth*100).toFixed(2)),t.pos.y=parseFloat((t.pos.y/this.mapComponent.dragZoom.params.originalHeight*100).toFixed(2)))}),this.mapComponent.makeCenter()})}updateDots(t){if(parseFloat(this.panoService.data_version)>=2.09){if(!this.getMapValue(this.options.maps.value[this.activeMap],"dots").filter(n=>(n.pos?.x||0)>100||(n.pos?.y||0)>100)?.length)return;this._changeDotsPositionFromPixelToPercentage()}else{if(-1!=this.updatedDots.indexOf(t))return;this.updatedDots.push(t),this._changeDotsPositionFromPixelToPercentage()}}_onToControlChange(t){const o="berlin_map";!this.controlService.control?.tools||(t?this.controlService.control.tools.filter(n=>n.key==o).pop()||this.controlService.control.tools.push({key:o,name:"Map",icon:{prefix:"fas",iconName:"map-marker-alt",icon:[384,512,[],"f3c5","M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"]},visible:!0,tooltip:{en:"Map"},responsive:{desktop:!0,tablet:!0,mobile:!0}}):this.controlService.control.tools=this.controlService.control.tools.filter(n=>n.key!=o))}initData(){this.observableFunc={...this.observableFunc,margin:t=>{this.setStyleProperties({"--margin":t+"px"})},border_size:t=>{this.setStyleProperties({"--padding":t+"px"})},border_radius:t=>{this.setStyleProperties({"--border-radius-top-left":t?t.topLeft+"px":null,"--border-radius-top-right":t?t.topRight+"px":null,"--border-radius-bottom-left":t?t.bottomLeft+"px":null,"--border-radius-bottom-right":t?t.bottomRight+"px":null})},map_width:t=>{this.setStyleProperties({"--width":t+"px"})},map_height:t=>{this.setStyleProperties({"--height":t+"px"})},map_max_width:t=>{this.setStyleProperties({"--width-max":t+"px"})},map_max_height:t=>{this.setStyleProperties({"--height-max":t+"px"})},map_fullscreen_width:t=>{this.setStyleProperties({"--width-full":t+"%"})},map_fullscreen_height:t=>{this.setStyleProperties({"--height-full":t+"%"})},dot_size:t=>{this.setStyleProperties({"--dot-size":t+"px"})},dot_background:t=>{this.setStyleProperties({"--dot-background":m.v.backgroundStyle(t)})},to_control:t=>this._onToControlChange(t)},super.initData(),this.widget.show=!0,"mobile"==this.viewerService.overlayDeviceClass&&(this.fullscreened=!0)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(e.zs3),e.Y36(g.a),e.Y36(x.B))},r.\u0275cmp=e.Xpm({type:r,selectors:[["wdg-other-berlin-map"]],viewQuery:function(t,o){if(1&t&&e.Gf(S,5),2&t){let n;e.iGM(n=e.CRH())&&(o.mapComponent=n.first)}},features:[e.qOj],decls:2,vars:2,consts:[[3,"innerHTML",4,"ngIf"],["class","widget other other-berlin-map",3,"ngClass","hide","fullscreen","mouseenter","mouseleave",4,"ngIf"],[3,"innerHTML"],[1,"widget","other","other-berlin-map",3,"ngClass","mouseenter","mouseleave"],[1,"content"],["wrapper",""],["aria-label","open fullscreen",1,"open-tool","tool-btn",3,"click"],["mat-button","","aria-label","minimize",1,"minimize-tool","tool-btn",3,"click"],[3,"icon"],["mat-button","","aria-label","close",1,"close-tool","tool-btn",3,"click"],[1,"zoom-tool"],["mat-button","","aria-label","zoom in",1,"tool-btn",3,"click"],["mat-button","","aria-label","zoom out",1,"tool-btn",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"map-labels"],["mat-button","","class","map-label",3,"active","click",4,"ngFor","ngForOf"],[3,"map","wrapper","active","zoom","zoomMax","widget","options","dots","onInit",4,"ngIf"],[3,"map","wrapper","active","zoom","zoomMax","widget","options","dots","onInit"],["map",""],["mat-button","",1,"map-label",3,"click"]],template:function(t,o){1&t&&(e.YNc(0,D,2,4,"code",0),e.YNc(1,N,14,8,"div",1)),2&t&&(e.Q6J("ngIf",o.styles),e.xp6(1),e.Q6J("ngIf",o.widgetInit))},dependencies:[s.mk,s.sg,s.O5,c.lW,M.o,T,Z.y],styles:['.other-berlin-map[_ngcontent-%COMP%]{position:absolute;z-index:5;display:inline-block;overflow:hidden;-webkit-user-select:none;user-select:none;transition:width .5s ease,height .5s ease,transform .5s ease,top .5s ease,left .5s ease,right .5s ease,bottom .5s ease;transform:translate(0);opacity:1;box-shadow:0 5px 10px #0003;background:var(--background);width:var(--width);height:var(--height);margin:var(--margin);max-width:calc(100% - var(--margin) * 2 - var(--padding) * 2);max-height:calc(100% - var(--margin) * 2 - var(--padding) * 2);padding:var(--padding);color:var(--text-color);border-radius:var(--border-radius-top-left) var(--border-radius-top-right) var(--border-radius-bottom-right) var(--border-radius-bottom-left)}.other-berlin-map.hide[_ngcontent-%COMP%]{visibility:hidden;opacity:0}.other-berlin-map.top-right[_ngcontent-%COMP%]{top:0;right:0}.other-berlin-map.top-left[_ngcontent-%COMP%]{top:0;left:0}.other-berlin-map.bottom-right[_ngcontent-%COMP%]{right:0;bottom:0}.other-berlin-map.bottom-left[_ngcontent-%COMP%]{bottom:0;left:0}.other-berlin-map[_ngcontent-%COMP%]:not(.fullscreen):hover{width:var(--width-max);height:var(--height-max)}.other-berlin-map[_ngcontent-%COMP%]:not(.fullscreen):hover   .close-tool[_ngcontent-%COMP%], .other-berlin-map[_ngcontent-%COMP%]:not(.fullscreen):hover   .open-tool[_ngcontent-%COMP%], .other-berlin-map[_ngcontent-%COMP%]:not(.fullscreen):hover   .zoom-tool[_ngcontent-%COMP%]{opacity:1}.other-berlin-map[_ngcontent-%COMP%]:not(.fullscreen):hover   .map-labels[_ngcontent-%COMP%]{display:flex}.other-berlin-map.fullscreen[_ngcontent-%COMP%]{margin:0!important;width:var(--width-full);height:var(--height-full)}.other-berlin-map.fullscreen.top-right[_ngcontent-%COMP%]{top:50%;right:50%;transform:translate(50%,-50%)}.other-berlin-map.fullscreen.top-left[_ngcontent-%COMP%]{top:50%;left:50%;transform:translate(-50%,-50%)}.other-berlin-map.fullscreen.bottom-right[_ngcontent-%COMP%]{right:50%;bottom:50%;transform:translate(50%,50%)}.other-berlin-map.fullscreen.bottom-left[_ngcontent-%COMP%]{bottom:50%;left:50%;transform:translate(-50%,50%)}.other-berlin-map.fullscreen[_ngcontent-%COMP%]   .minimize-tool[_ngcontent-%COMP%]{display:block!important}.other-berlin-map.fullscreen[_ngcontent-%COMP%]   .open-tool[_ngcontent-%COMP%]{display:none}.other-berlin-map.fullscreen[_ngcontent-%COMP%]   .close-tool[_ngcontent-%COMP%], .other-berlin-map.fullscreen[_ngcontent-%COMP%]   .minimize-tool[_ngcontent-%COMP%], .other-berlin-map.fullscreen[_ngcontent-%COMP%]   .zoom-tool[_ngcontent-%COMP%]{opacity:1}.other-berlin-map.fullscreen[_ngcontent-%COMP%]   .map-labels[_ngcontent-%COMP%]{display:flex}.other-berlin-map[_ngcontent-%COMP%]   .tool-btn[_ngcontent-%COMP%]{position:absolute;z-index:1;width:28px;height:28px;padding:0;cursor:pointer;outline:none;font-size:22px;line-height:0;min-width:initial}.other-berlin-map[_ngcontent-%COMP%]   .tool-btn[_ngcontent-%COMP%]   sh-icon[_ngcontent-%COMP%]{width:18px;height:18px}.other-berlin-map[_ngcontent-%COMP%]   .tool-btn[_ngcontent-%COMP%]     span.mat-button-wrapper{line-height:0}.other-berlin-map[_ngcontent-%COMP%]   .tool-btn.minimize-tool[_ngcontent-%COMP%]{top:5px;right:38px;display:none;border-radius:2px;background:var(--background);color:var(--text-color)}.other-berlin-map[_ngcontent-%COMP%]   .open-tool[_ngcontent-%COMP%]{top:5px;left:5px;opacity:0;border-width:0;background:transparent;border-color:var(--background)}.other-berlin-map[_ngcontent-%COMP%]   .open-tool[_ngcontent-%COMP%]:after{display:block;width:0;height:0;content:"";border-width:24px 24px 0 0;border-style:solid;border-color:transparent;border-top-color:inherit}.other-berlin-map[_ngcontent-%COMP%]   .close-tool[_ngcontent-%COMP%]{top:5px;right:5px;opacity:0;border-radius:2px;background:var(--background);color:var(--text-color)}.other-berlin-map[_ngcontent-%COMP%]   .zoom-tool[_ngcontent-%COMP%]{position:absolute;z-index:1;top:38px;right:5px;display:flex;flex-direction:column;transition:top .3s ease;opacity:0;border-radius:2px;background:var(--background)}.other-berlin-map[_ngcontent-%COMP%]   .zoom-tool[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{position:relative;background-color:transparent;color:inherit}.other-berlin-map[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:100%;border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.other-berlin-map[_ngcontent-%COMP%]   .map-labels[_ngcontent-%COMP%]{width:100%;position:absolute;bottom:0;left:0;background:var(--background);display:none}.other-berlin-map[_ngcontent-%COMP%]   .map-labels[_ngcontent-%COMP%]   .map-label[_ngcontent-%COMP%]{border-radius:0;min-width:0;flex-grow:1}.other-berlin-map[_ngcontent-%COMP%]   .map-labels[_ngcontent-%COMP%]   .map-label.active[_ngcontent-%COMP%]{color:var(--active-color)}  #overlay.mobile wdg-scheme-kavftig .scheme-hopenke{width:100%!important;height:100%!important}  #overlay.mobile wdg-scheme-kavftig .scheme-hopenke .zoom-tool{opacity:1}code[_ngcontent-%COMP%]{display:none}']}),r})(),A=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r,bootstrap:[Q]}),r.\u0275inj=e.cJS({imports:[s.ez,u.D,c.ot,_.Q,h._t,f.a]}),r})()}}]);