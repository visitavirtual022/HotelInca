"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[592],{8374:(k,x,r)=>{r.d(x,{E:()=>C});var n=r(4537),l=r(8692),v=r(92);const g=["audioElm"];function p(u,_){if(1&u){const e=n.EpF();n.O4$(),n.TgZ(0,"svg",12),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.play())}),n._UZ(1,"path",13),n.qZA()}}function b(u,_){if(1&u){const e=n.EpF();n.O4$(),n.TgZ(0,"svg",14),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.pause())}),n._UZ(1,"rect",15)(2,"rect",16),n.qZA()}}let C=(()=>{class u{constructor(){this.currentTime=0,this.duration=0}get notitle(){return this.src.split("/").pop().replace(".mp3","")}load(){!this.audioElm||(this.audio=this.audioElm.nativeElement,this.audio.addEventListener("loadeddata",()=>{this.duration=this.audio.duration,this.currentTime=this.audio.currentTime,this.autoplay&&this.play()}))}play(){this.audio&&this.audio.play()}pause(){this.audio&&this.audio.pause()}formatTime(e){var c,t=0,i=0;return(e=parseInt(e,10)||0)>3600&&(e-=60*(t=parseInt(e/3600+"",10))*60),e>60&&(e-=60*(i=parseInt(e/60+"",10))),c=e,e=t>0?t+":":"",(e+=i>0?(i<10&&t>0?"0":"")+i+":":"0:")+(c<10?"0":"")+c}setCurrentTime(e){this.currentTime=e.target.currentTime}changeCurrentTime(e){this.audio.currentTime=e}ngOnChanges(e){void 0!==e.src&&this.src&&this.load()}ngAfterViewInit(){this.src&&this.load()}ngOnDestroy(){this.pause(),this.audio.remove()}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["sh-audiobox"]],viewQuery:function(e,t){if(1&e&&n.Gf(g,5,n.SBq),2&e){let i;n.iGM(i=n.CRH())&&(t.audioElm=i.first)}},inputs:{src:"src",title:"title",light:"light",autoplay:"autoplay"},features:[n.TTD],decls:17,vars:10,consts:[[1,"player"],[1,"title-wrap"],[1,"button-wrap"],["class","button","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 150 150",3,"click",4,"ngIf"],["class","button","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 48 48",3,"click",4,"ngIf"],[1,"title"],[1,"seek-wrap"],["value","0","type","range","min","0","step",".1",1,"seek-bar",3,"ngModel","max","ngModelChange"],[1,"timing"],[3,"timeupdate"],["audioElm",""],["type","audio/mpeg",3,"src"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 150 150",1,"button",3,"click"],["d","M43.3,11.1C36.6,7.1 30.3,9.6 30.3,18.6C30.3,27.6 30.3,121.3 30.3,131.7C30.3,142.1 35.6,144 43.6,139.7C51.6,134.7 133.5,87.5 141.5,83C149.3,78.5 149,72.5 141.5,68.2C134,63.8 52.2,16.4 43.3,11.1Z"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 48 48",1,"button",3,"click"],["width","18%","height","90%","x","22.5%","y","5%","rx","5%","ry","5%"],["width","18%","height","90%","x","62.5%","y","5%","rx","5%","ry","5%"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n.YNc(3,p,2,0,"svg",3),n.YNc(4,b,3,0,"svg",4),n.qZA(),n.TgZ(5,"div",5),n._uU(6),n.qZA()(),n.TgZ(7,"div",6)(8,"input",7),n.NdJ("ngModelChange",function(c){return t.currentTime=c})("ngModelChange",function(c){return t.changeCurrentTime(c)}),n.qZA()(),n.TgZ(9,"div",8)(10,"span"),n._uU(11),n.qZA(),n.TgZ(12,"span"),n._uU(13),n.qZA()(),n.TgZ(14,"audio",9,10),n.NdJ("timeupdate",function(c){return t.setCurrentTime(c)}),n._UZ(16,"source",11),n.qZA()()),2&e&&(n.ekj("light",t.light),n.xp6(3),n.Q6J("ngIf",t.audio&&t.audio.paused),n.xp6(1),n.Q6J("ngIf",t.audio&&!t.audio.paused),n.xp6(2),n.Oqu(t.title||t.notitle),n.xp6(2),n.Q6J("ngModel",t.currentTime)("max",t.duration),n.xp6(3),n.Oqu(t.formatTime(t.currentTime)),n.xp6(2),n.Oqu(t.formatTime(t.duration)),n.xp6(3),n.Q6J("src",t.src,n.LSH))},dependencies:[l.O5,v.Fj,v.eT,v.JJ,v.On],styles:['[_nghost-%COMP%]{width:100%}.player[_ngcontent-%COMP%]{color:#434546}.title-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.button-wrap[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;position:relative;align-items:center;cursor:pointer}.button-wrap[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:30px;height:30px;cursor:pointer;fill:currentColor;z-index:1}.button-wrap[_ngcontent-%COMP%]:before{content:"";opacity:0;width:100%;height:100%;position:absolute;top:0;left:0;background-color:#46aaff1a;border-radius:50%;z-index:0}.button-wrap[_ngcontent-%COMP%]:hover{color:#46aaff}.button-wrap[_ngcontent-%COMP%]:hover:before{opacity:1}.seek-wrap[_ngcontent-%COMP%]{margin:4px 0;line-height:0}.seek-wrap[_ngcontent-%COMP%]   .seek-bar[type=range][_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;width:100%;height:100%;overflow:visible;outline:0 none;background-color:transparent;line-height:1em;vertical-align:top;font-size:1em;-webkit-appearance:none;cursor:pointer}.seek-wrap[_ngcontent-%COMP%]   .seek-bar[type=range][_ngcontent-%COMP%]:focus{outline:0 none}.seek-wrap[_ngcontent-%COMP%]   .seek-bar[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track{box-sizing:border-box;width:98%;height:.125em;background-color:#434546;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease}.seek-wrap[_ngcontent-%COMP%]   .seek-bar[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{box-sizing:border-box;width:.5em;height:.5em;margin-top:-.175em;border-radius:.5em;background-color:#434546;-webkit-appearance:none}.seek-wrap[_ngcontent-%COMP%]:hover   .seek-bar[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{margin-top:-.3em;margin-left:-.05em;width:.75em;height:.75em;background-color:#46aaff}.timing[_ngcontent-%COMP%]{color:#888;display:flex;justify-content:space-between;font-size:13px}.player.light[_ngcontent-%COMP%]{color:#fefefe}.player.light[_ngcontent-%COMP%]   .seek-wrap[_ngcontent-%COMP%]   .seek-bar[type=range][_ngcontent-%COMP%]::-webkit-slider-runnable-track{background-color:#fefefe}.player.light[_ngcontent-%COMP%]   .seek-wrap[_ngcontent-%COMP%]   .seek-bar[type=range][_ngcontent-%COMP%]::-webkit-slider-thumb{background-color:#fefefe}']}),u})()},6369:(k,x,r)=>{r.d(x,{H:()=>L});var n=r(8692),l=r(4537),v=r(6215),g=r(2759),p=r(6682),b=r(7393);function C(){return M=>M.lift(new u)}class u{call(w,o){return o.subscribe(new _(w))}}class _ extends b.L{constructor(w){super(w),this.hasPrev=!1}_next(w){let o;this.hasPrev?o=[this.prev,w]:this.hasPrev=!0,this.prev=w,o&&this.destination.next(o)}}var e=r(5435),t=r(3190),i=r(8002),c=r(6782),y=r(4395),R=r(7519),A=r(9911);const z=["container"],E=["content"],S=["image"],W=["*"];let L=(()=>{class M{constructor(o){this.platformId=o,this.afterInit=new l.vpe,this.onZoom=new l.vpe,this.params={containerWidth:0,containerHeight:0,originalWidth:0,originalHeight:0,width:0,height:0,minScale:0,maxScale:2,scale:1,x:0,y:0,lastX:0,lastY:0,opacity:0},this.disableDragging=!1,this.disableZooming=!1,this.__transitionTimeout=null,this.zoomObs=new v.X(this.params.scale)}_transitionStringToObj(o){const[a,s,d,f]=o.split(/\s+/);return{property:a,duration:parseFloat(s.match(/(\d+(\.\d+)?)/)[0])*(s.endsWith("ms")?1:1e3),timingFunction:d,delay:f}}_clearTransitionTimeout(){!this.__transitionTimeout||(clearTimeout(this.__transitionTimeout),this.__transitionTimeout=null)}_addTransition(o){const{content:a}=this;let s=this._transitionStringToObj(o);a.style.transition=o,this._clearTransitionTimeout(),this.__transitionTimeout=setTimeout(()=>{a.style.transition="",this._clearTransitionTimeout()},s.duration);const d=()=>{!this.__transitionTimeout||(this.params.width=a?.offsetWidth||0,this.params.height=a?.offsetHeight||0,requestAnimationFrame(d))};requestAnimationFrame(d)}_clearTransition(){this._clearTransitionTimeout(),this.content.style.transition=""}setPosition({x:o,y:a},s,d=!1){const{params:f}=this;f.x=(d?o:f.width*o/100)-f.containerWidth/2,f.y=(d?o:f.height*a/100)-f.containerHeight/2,this._relocate(s)}setZoom(o,a){const{params:s}=this,d=Math.min(s.maxScale,Math.max(s.minScale,o));s.x=(s.x+s.containerWidth/2)*s.originalWidth*d/s.width-s.containerWidth/2,s.y=(s.y+s.containerHeight/2)*s.originalHeight*d/s.height-s.containerHeight/2,s.scale=d,this._rescale(),this._relocate(a)}zoomIn(){this.setZoom(this.params.scale+.2,"all 0.3s ease")}zoomOut(){this.setZoom(this.params.scale-.2,"all 0.3s ease")}updateParams(o,a){const{params:s,container:d}=this;if(!s.width)return;let f=s.containerWidth,O=s.containerHeight;s.containerWidth=o?.width||d.offsetWidth,s.containerHeight=o?.height||d.offsetHeight,s.minScale=Math.max(s.containerWidth/s.originalWidth,s.containerHeight/s.originalHeight),s.scale<s.minScale&&(s.scale=s.minScale,this._rescale()),s.x+=(f-s.containerWidth)/2,s.y+=(O-s.containerHeight)/2,this._relocate(a)}initParams(){const{params:o,container:a,image:s}=this;o.width=o.originalWidth=s.naturalWidth,o.height=o.originalHeight=s.naturalHeight,o.containerWidth=a.offsetWidth,o.containerHeight=a.offsetHeight;const d=o.containerWidth/o.originalWidth,f=o.containerHeight/o.originalHeight;o.minScale=Math.max(d,f),this.zoom?(o.scale=this.zoom,this._rescale()):(o.scale=o.minScale,this._rescale(),d<f?o.x=(o.width-o.containerWidth)/2:o.y=(o.height-o.containerHeight)/2,this._relocate()),this.setPosition({x:50,y:50}),this.afterInit.emit()}_rescale(){const{params:o,content:a,zoomObs:s}=this;s.next(o.scale),o.width=o.originalWidth*o.scale,o.height=o.originalHeight*o.scale,a.style.width=`${o.width}px`,a.style.height=`${o.height}px`,this.onZoom.emit()}_relocateDragging(){const{params:o,content:a}=this;this.__checkBorders(),a.style.left=-o.x+"px",a.style.top=-o.y+"px"}_relocate(o){const{params:a}=this;o&&this._addTransition(o),this._relocateDragging(),a.lastX=a.x,a.lastY=a.y}__checkBorders(){const{params:o}=this;let O=o.height-o.containerHeight;o.x=Math.min(o.width-o.containerWidth,Math.max(0,o.x)),o.y=Math.min(O,Math.max(0,o.y))}load(){A.v.waitUntil(()=>0!=this.container.offsetWidth).then(()=>{this.initParams()})}ngAfterViewInit(){if(!(0,n.NF)(this.platformId))return;this.container=this.containerRef.nativeElement,this.content=this.contentRef.nativeElement,this.image=this.imageRef.nativeElement;const{params:o,container:a}=this,d=(0,g.R)(a,"mousedown"),f=(0,g.R)(document,"mousemove"),O=(0,g.R)(document,"mouseup"),D=(0,g.R)(a,"touchstart"),F=(0,g.R)(document,"touchmove"),X=(0,g.R)(document,"touchend"),H=(0,p.T)(d.pipe((0,e.h)(h=>0===h.button)),D),Y=(0,p.T)(f,F.pipe((0,e.h)(h=>1===h.touches.length))),U=(0,p.T)(O,X);this.dragSub=H.pipe((0,t.w)(()=>Y.pipe((0,i.U)(h=>h instanceof MouseEvent?{x:h.clientX,y:h.clientY}:{x:h.touches[0].clientX,y:h.touches[0].clientY}),C(),(0,i.U)(([h,m])=>({x:m.x-h.x,y:m.y-h.y})),(0,c.R)(U)))).subscribe(({x:h,y:m})=>{a.style.cursor="move",!this.disableDragging&&(o.lastX=o.x,o.lastY=o.y,o.x-=h,o.y-=m,this._relocateDragging())}),this.dragEndSub=U.pipe((0,i.U)(()=>({velocityX:o.x-o.lastX,velocityY:o.y-o.lastY}))).subscribe(({velocityX:h,velocityY:m})=>{if(a.style.cursor="default",this.disableDragging)return;const P=()=>{m*=.9,o.x+=h*=.9,o.y+=m,this._relocate(),(Math.abs(h)>.5||Math.abs(m)>.5)&&(this.animationFrameId=requestAnimationFrame(P))};this.animationFrameId=requestAnimationFrame(P)}),this.dragStartSub=H.subscribe(()=>{this._clearTransition(),cancelAnimationFrame(this.animationFrameId)});const Z=(h,m)=>{const P=h.clientX-m.clientX,T=h.clientY-m.clientY;return Math.sqrt(P*P+T*T)},$=D.pipe((0,t.w)(()=>F.pipe((0,e.h)(h=>2===h.touches.length),C(),(0,i.U)(([h,m])=>{const P=Z(h.touches[0],h.touches[1]);return{delta:Z(m.touches[0],m.touches[1])/P-1,event:h}}),(0,e.h)(h=>!isNaN(h.delta))))),N=(0,g.R)(a,"wheel").pipe((0,i.U)(h=>({delta:h.deltaY/-1500,event:h}))),J=(0,p.T)($,N);this.zoomSub=J.subscribe(({delta:h,event:m})=>{m.preventDefault(),this._clearTransition(),cancelAnimationFrame(this.animationFrameId);let P=o.width,T=o.height;o.scale=Math.min(o.maxScale,Math.max(o.minScale,o.scale+h)),this._rescale();let I=m instanceof MouseEvent?m.pageX:m.touches[0].clientX,B=m instanceof MouseEvent?m.pageY:m.touches[0].clientY,j=a.getBoundingClientRect();I-=j.left-o.x,o.x+=o.width*I/P-I,B-=j.top-o.y,o.y+=o.height*B/T-B,this._relocate()}),this.resizeSub=(0,g.R)(window,"resize").pipe((0,y.b)(200),(0,R.x)()).subscribe(()=>{cancelAnimationFrame(this.animationFrameId),this.updateParams()})}ngOnDestroy(){this.dragStartSub?.unsubscribe(),this.dragSub?.unsubscribe(),this.dragEndSub?.unsubscribe(),this.zoomSub?.unsubscribe(),this.resizeSub?.unsubscribe()}}return M.\u0275fac=function(o){return new(o||M)(l.Y36(l.Lbi))},M.\u0275cmp=l.Xpm({type:M,selectors:[["sh-drag-zoom"]],viewQuery:function(o,a){if(1&o&&(l.Gf(z,7),l.Gf(E,7),l.Gf(S,5)),2&o){let s;l.iGM(s=l.CRH())&&(a.containerRef=s.first),l.iGM(s=l.CRH())&&(a.contentRef=s.first),l.iGM(s=l.CRH())&&(a.imageRef=s.first)}},inputs:{imgSrc:"imgSrc",zoom:"zoom",zoomMax:"zoomMax"},outputs:{afterInit:"afterInit",onZoom:"onZoom"},ngContentSelectors:W,decls:7,vars:3,consts:[[1,"container"],["container",""],[1,"content"],["content",""],["alt","image",3,"src","load"],["image",""]],template:function(o,a){1&o&&(l.F$t(),l.TgZ(0,"div",0,1)(2,"div",2,3)(4,"img",4,5),l.NdJ("load",function(){return a.load()}),l.qZA(),l.Hsn(6),l.qZA()()),2&o&&(l.ekj("init",a.params.height),l.xp6(4),l.Q6J("src",a.imgSrc,l.LSH))},styles:[".container[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{line-height:0;opacity:0;position:relative;transition:opacity .2s ease-in}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;pointer-events:none}.container.init[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{opacity:1}"]}),M})()},384:(k,x,r)=>{r.d(x,{a:()=>g});var n=r(92),l=r(8692),v=r(4537);let g=(()=>{class p{}return p.\u0275fac=function(C){return new(C||p)},p.\u0275mod=v.oAB({type:p}),p.\u0275inj=v.cJS({imports:[l.ez,n.u5]}),p})()},5573:(k,x,r)=>{r.d(x,{G:()=>u});var n=r(4827),l=r(2001),v=r(8692),g=r(9911),p=r(5056),b=r(7072),C=r(4537);let u=(()=>{class _ extends b.o{constructor(t){super(t),this.injector=t,this.data=null,this.default_options=null,this.widgetInit=!1,this.scheme=null,this.editorMode=!1,this.icons=[],this.observableFunc={background:i=>this.onBackgroundChange(i),active_color:i=>this.onActiveColorChange(i),text_color:i=>this.onTextColorChange(i),common_color:i=>this.onCommonColorChange(i),common_background:i=>this.onCommonBackgroundChange(i),common_active_color:i=>this.onCommonActiveColorChange(i),common_text_color:i=>this.onCommonTextColorChange(i),margin:i=>this.onMarginChange(i),hide_on_start:i=>this.onHideOnStarChange(i),border_size:i=>this.onBorderSizeChange(i),border_radius:i=>this.onBorderRadiusChange(i),map_size:i=>this.onMapSizeChange(i),map_width:i=>this.onMapWidthChange(i),map_height:i=>this.onMapHeightChange(i),map_max_width:i=>this.onMapMaxWidthChange(i),map_max_height:i=>this.onMapMaxHeightChange(i),map_fullscreen_width:i=>this.onMapFullscreenWidthChange(i),map_fullscreen_height:i=>this.onMapFullscreenHeightChange(i),dot_background:i=>this.onDotBackgroundChange(i),dot_size:i=>this.onDotSizeChange(i),special_dot_size:i=>this.onSpecialDotSizeChange(i),active_dot_size:i=>this.onActiveDotSizeChange(i),polyline_size:i=>this.onPolylineSizeChange(i),polyline_bg_size:i=>this.onPolylineBgSizeChange(i),polyline_color:i=>this.onPolylineColorChange(i),polyline_bg_color:i=>this.onPolylineBgColorChange(i),labels_fit:i=>this.onLabelsFitChange(i),dots:i=>this.onPanosChange(i),dots_font:i=>this.onDotsFontChange(i),toggle_text_font:i=>this.onToggleTextFontChange(i),styles:i=>this.onStylesChange(i)},this.fontsLoading=[],this.schemeService=this.injector.get(n.p),this.viewerService=this.injector.get(l.a),this.viewerDataService=this.injector.get(p.m)}get show(){return this.schemeService.show}get visible(){return this.viewerDataService.widgetVisibility.all}get activePano(){return this.viewerService.active}get angle(){return this.viewerService.angle}get isDownload(){return!this.panoService.moderationUrl&&!this.editorMode}toggle(){this.schemeService.toggle()}onPanosChange(t){}onActivePanoChange(t){}onDotSizeChange(t){this.elRef.nativeElement.style.setProperty("--dot-size",t+"px")}onPolylineSizeChange(t){this.elRef.nativeElement.style.setProperty("--polyline-size",t+"px")}onPolylineBgSizeChange(t){this.elRef.nativeElement.style.setProperty("--polyline-bg-size",t+"px")}onSpecialDotSizeChange(t){this.elRef.nativeElement.style.setProperty("--special-dot-size",t+"px")}onActiveDotSizeChange(t){this.elRef.nativeElement.style.setProperty("--active-dot-size",t+"px")}onLabelsFitChange(t){this.elRef.nativeElement.style.setProperty("--labels-fit",t?1:null)}onCommonBackgroundChange(t){this.elRef.nativeElement.style.setProperty("--background",g.v.backgroundStyle(t))}onCommonActiveColorChange(t){this.elRef.nativeElement.style.setProperty("--active-color",g.v.backgroundStyle(t))}onCommonTextColorChange(t){this.elRef.nativeElement.style.setProperty("--text-color",t?t.color:null)}onPolylineColorChange(t){this.elRef.nativeElement.style.setProperty("--polyline-color",t?t.color:null)}onPolylineBgColorChange(t){this.elRef.nativeElement.style.setProperty("--polyline-bg-color",t?t.color:null)}onBackgroundChange(t){this.elRef.nativeElement.style.setProperty("--background",g.v.backgroundStyle(t))}onActiveColorChange(t){this.elRef.nativeElement.style.setProperty("--active-color",g.v.backgroundStyle(t))}onTextColorChange(t){this.elRef.nativeElement.style.setProperty("--text-color",t?t.color:null)}onCommonColorChange(t){null!=this.scheme.background&&this.elRef.nativeElement.style.setProperty("--background",g.v.backgroundStyle(t?this.panoService.commonColor.background:this.scheme.background)),null!=this.scheme.active_color&&this.elRef.nativeElement.style.setProperty("--active-color",g.v.backgroundStyle(t?this.panoService.commonColor.active_color:this.scheme.active_color)),null!=this.scheme.text_color&&this.elRef.nativeElement.style.setProperty("--text-color",t?this.panoService.commonColor.text_color.color:this.scheme.text_color.color)}onHideOnStarChange(t){}onMarginChange(t){this.elRef.nativeElement.style.setProperty("--margin",t+"px")}onBorderSizeChange(t){this.elRef.nativeElement.style.setProperty("--padding",t+"px")}onBorderRadiusChange(t){this.elRef.nativeElement.style.setProperty("--border-radius-top-left",t?t.topLeft+"px":null),this.elRef.nativeElement.style.setProperty("--border-radius-top-right",t?t.topRight+"px":null),this.elRef.nativeElement.style.setProperty("--border-radius-bottom-left",t?t.bottomLeft+"px":null),this.elRef.nativeElement.style.setProperty("--border-radius-bottom-right",t?t.bottomRight+"px":null)}onMapSizeChange(t){this.elRef.nativeElement.style.setProperty("--size",t+"px")}onMapWidthChange(t){this.elRef.nativeElement.style.setProperty("--width",t+"px")}onMapHeightChange(t){this.elRef.nativeElement.style.setProperty("--height",t+"px")}onMapMaxWidthChange(t){this.elRef.nativeElement.style.setProperty("--width-max",t+"px")}onMapMaxHeightChange(t){this.elRef.nativeElement.style.setProperty("--height-max",t+"px")}onMapFullscreenWidthChange(t){this.elRef.nativeElement.style.setProperty("--width-full",t+"%")}onMapFullscreenHeightChange(t){this.elRef.nativeElement.style.setProperty("--height-full",t+"%")}onDotBackgroundChange(t){this.elRef.nativeElement.style.setProperty("--dot-background",g.v.backgroundStyle(t))}onDotsFontChange(t){this.fontsService.setFontStyle(this.elRef,t,"--dots-style-")}onToggleTextFontChange(t){this.fontsService.setFontStyle(this.elRef,t,"--toggle-text-style-")}onStylesChange(t){this.styles=g.v.getStyleCode(this.elRef.nativeElement,t)}checkDefaultDataUpdate(){Object.keys(this.default_options).forEach(t=>{-1==["image","map_angle","dots"].indexOf(t)&&(null==this.data[t]?(this.panoService.newIdentification.scheme[t]=!0,this.data[t]=this.default_options[t]):t.includes("_font")&&this._updateFontStyle(this.data[t],this.default_options[t]))})}checkFontStyle(){Object.keys(this.schemeService.scheme).forEach(t=>{t.endsWith("_font")&&this.schemeService.scheme[t]&&this.schemeService.scheme[t].family&&this.fontsLoading.push(this.fontsService.loadFonts([this.schemeService.scheme[t].family]))})}initObs(){Object.keys(this.dataObs).forEach(t=>{this.dataObs[t].subscribe(i=>{this.observableFunc[t]&&this.observableFunc[t](i)})}),Object.keys(this.panoService.commonColorObs).forEach(t=>{this.panoService.commonColorObs[t].subscribe(i=>{this.observableFunc["common_"+t]&&this.scheme.common_color&&this.observableFunc["common_"+t](i)})})}initData(){this.data?(this.checkDefaultDataUpdate(),this.schemeService.init(this.data)):(this.schemeService.show=!0,this.schemeService.init(this.default_options)),this.checkFontStyle(),this.scheme=this.schemeService.scheme,null!=this.scheme.hide_on_start&&this.scheme.hide_on_start[this.viewerService.overlayDeviceClass]&&(this.schemeService.show=!1),this.dataObs=this.schemeService.dataObs,this.editorMode=this.viewerService.editor,(0,v.NF)(this.panoService.platformId)&&this.initObs(),this.viewerService.viewerWidthObs.subscribe(()=>{setTimeout(()=>this.schemeService.mapbox?.resize())}),(0,v.NF)(this.panoService.platformId)&&g.v.waitUntil(()=>void 0!==this.viewerService.activePanoObs).then(()=>{this.viewerService.activePanoObs.subscribe(t=>this.onActivePanoChange(t))}),this.widgetInit=!0}ngOnInit(){this.initData()}}return _.\u0275fac=function(t){return new(t||_)(C.Y36(C.zs3))},_.\u0275cmp=C.Xpm({type:_,selectors:[["scheme-component"]],inputs:{data:"data"},features:[C.qOj],decls:0,vars:0,template:function(t,i){},encapsulation:2}),_})()},8041:(k,x,r)=>{r.d(x,{P:()=>C});var n=r(7267),l=r(6215),v=r(8692),g=r(9911),p=r(7072),b=r(4537);let C=(()=>{class u extends p.o{constructor(e){super(e),this.injector=e,this.default_options=null,this.data=null,this.widgetName=null,this.widget=null,this.widgetInit=!1,this.options={},this.icons=[],this.observableFunc={background:t=>this.onBackgroundChange(t),active_color:t=>this.onActiveColorChange(t),text_color:t=>this.onTextColorChange(t),common_color:t=>this.onCommonColorChange(t),common_background:t=>this.onCommonBackgroundChange(t),common_active_color:t=>this.onCommonActiveColorChange(t),common_text_color:t=>this.onCommonTextColorChange(t),styles:t=>this.onStylesChange(t)},this.fontsLoading=[],this.otherService=this.injector.get(n.m)}toggle(){this.widget&&null!==this.widget.show&&(this.widget.show=!this.widget.show)}onCommonBackgroundChange(e){this.elRef.nativeElement.style.setProperty("--background",g.v.backgroundStyle(e))}onCommonActiveColorChange(e){this.elRef.nativeElement.style.setProperty("--active-color",g.v.backgroundStyle(e))}onCommonTextColorChange(e){this.elRef.nativeElement.style.setProperty("--text-color",e?e.color:null)}onBackgroundChange(e){this.elRef.nativeElement.style.setProperty("--background",g.v.backgroundStyle(e))}onActiveColorChange(e){this.elRef.nativeElement.style.setProperty("--active-color",g.v.backgroundStyle(e))}onTextColorChange(e){this.elRef.nativeElement.style.setProperty("--text-color",e?e.color:null)}onCommonColorChange(e){this.elRef.nativeElement.style.setProperty("--background",g.v.backgroundStyle(e?this.panoService.commonColor.background:this.options.colors.value.background)),this.elRef.nativeElement.style.setProperty("--active-color",g.v.backgroundStyle(e?this.panoService.commonColor.active_color:this.options.colors.value.active_color)),this.elRef.nativeElement.style.setProperty("--text-color",e?this.panoService.commonColor.text_color.color:this.options.colors.value.text_color.color)}onStylesChange(e){this.styles=g.v.getStyleCode(this.elRef.nativeElement,e)}setFontStyle(e,t){this.fontsService.setFontStyle(this.elRef,e,t)}checkDefaultDataUpdate(){Object.keys(this.widget).forEach(e=>{"options"!=e?null==this.default_options[e]&&delete this.widget[e]:this.widget.options.forEach(t=>{let i=this.default_options.options.filter(c=>c.key==t.key).pop();i?Object.keys(t).forEach(c=>{null==i[c]&&delete t[c]}):this.widget.options=this.widget.options.filter(c=>c.key!=t.key)})}),Object.keys(this.default_options).forEach(e=>{"options"!=e?null==this.widget[e]&&(this.widget[e]=this.default_options[e]):this.default_options.options.forEach((t,i)=>{let c=this.widget.options.filter(y=>y.key==t.key).pop();if(c){if(Object.keys(t).forEach(y=>{null==c[y]&&(c[y]=t[y])}),c.type=t.type,c.label=t.label,c.category=t.category,c.font&&this._updateFontStyle(c.font,t.font),-1!=["text","textarea"].indexOf(c.type)&&(c.value=this.i18n.checkTextObj(c.value)),"multi"==c.type&&1==t.value.length){let y=t.value[0];c.value.forEach((R,A,z)=>{z[A]=R.filter(E=>y.find(S=>S.key==E.key)),R.forEach(E=>{let S=y.find(W=>W.key==E.key);E.type=S?.type,E.label=S?.label})})}}else t.new=!0,this.widget.options.splice(i,0,t)})})}updateOrCorrectData(){this.widget?.options.forEach(e=>{"video"==e.type&&(null===e.value.video_url||e.value.video_url)&&(e.value={en:e.value.video_url},delete e.value.video_src,delete e.value.video_id,delete e.value.video_url)})}checkFontStyle(){this.widget.options.forEach(e=>{e.font&&e.font.family&&this.fontsLoading.push(this.fontsService.loadFonts([e.font.family]))})}initOptionsObject(){this.widget.options.forEach(e=>{let t=e.key.replace(/-/g,"_");this.options[t]=e})}initObs(){Object.keys(this.options).forEach(e=>{"colors"!=e?(this.options[e].obs=new l.X(this.options[e].value),this.options[e].font&&(this.options[e].obs_font=new l.X(this.options[e].font))):this.options[e].obs={common_color:new l.X(this.options[e].value.common_color),background:new l.X(this.options[e].value.background),active_color:new l.X(this.options[e].value.active_color),text_color:new l.X(this.options[e].value.text_color)}}),Object.keys(this.options).forEach(e=>{"colors"!=e?(this.options[e].obs.subscribe(t=>{this.observableFunc[e]&&this.observableFunc[e](t)}),this.options[e].obs_font&&this.options[e].obs_font.subscribe(t=>{this.observableFunc[e+"_font"]&&this.observableFunc[e+"_font"](t)})):Object.keys(this.options[e].obs).forEach(t=>{this.options[e].obs[t].subscribe(i=>{this.observableFunc[t]&&this.observableFunc[t](i)})})}),this.options.colors&&Object.keys(this.panoService.commonColorObs).forEach(e=>{this.panoService.commonColorObs[e].subscribe(t=>{this.observableFunc["common_"+e]&&this.options.colors.value.common_color&&this.observableFunc["common_"+e](t)})})}initData(){this.widgetName=this.default_options.widget,this.widget=this.otherService.getWidget(this.widgetName),this.checkDefaultDataUpdate(),this.updateOrCorrectData(),this.checkFontStyle(),this.initOptionsObject(),(0,v.NF)(this.panoService.platformId)&&this.initObs(),this.widgetInit=!0}ngOnInit(){this.data||this.otherService.addWidget(this.default_options),g.v.waitUntil(()=>this.otherService.getWidget(this.default_options.widget)).then(()=>this.initData())}}return u.\u0275fac=function(e){return new(e||u)(b.Y36(b.zs3))},u.\u0275cmp=b.Xpm({type:u,selectors:[["other-component"]],inputs:{data:"data"},features:[b.qOj],decls:0,vars:0,template:function(e,t){},encapsulation:2}),u})()}}]);