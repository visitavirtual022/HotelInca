(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[2],{4300:(z,s,t)=>{"use strict";t.r(s),t.d(s,{GoogleModule:()=>O});var p=t(8692),M=t(8239),l=t(4537),g=t(5775),S=t(6215),f=t(4395),d=t(9911),y=t(2001),_=t(4453),m=t(7343),P=t(4445),A=t(6883),C=t(7267),T=t(5732);let G=(()=>{class v{constructor(e,i,o,n,r,a,h,c){this.viewerService=e,this.content=i,this.location=o,this.panoService=n,this.hotspotService=r,this.controlService=a,this.otherService=h,this.http=c,this.viewerReady=!1,this.locationSubject=new g.xQ,this.yaw=0,this.pitch=0,this.activePanoObs=new S.X(this.viewerService.viewerDataService.active),this.markers=[],this.lookAtInterval={angle:null,zoom:null},this.imgRes={full:"4096x2048",preview:"1024x512",thumb:"150x75"}}fovToZoom(e){return-(Math.log(e/30.5)-2*Math.log(2))/Math.log(2)}getFirstLoad(e){let i={panoId:this.panoService.first.pano.id,position:{theta:this.panoService.first.theta,phi:this.panoService.first.phi,fov:this.panoService.fov},thetaDetected:!1},o=d.v.paramsStringToObj(e);return o.p&&(i.panoId=o.p),o.h&&(i.position.theta=o.h,i.thetaDetected=!0),o.t&&(i.position.phi=o.t-90),i}initViewer(e){var i=this;let o=this.getFirstLoad(this.panoService.moderationUrlOptions);this.loadPano(o.panoId).then(n=>{if(o.thetaDetected||(o.position.theta+=n.north_angle),(0,p.NF)(this.panoService.platformId)){let r=document.createElement("script");window.initMap=(0,M.Z)(function*(){i.viewer=new google.maps.StreetViewPanorama(e,{pano:n.pano_id,pov:{heading:o.position.theta,pitch:o.position.phi},addressControl:i.panoService.google_name,linksControl:i.panoService.google_arrows,clickToGo:i.panoService.google_pancake,panControl:!1,enableCloseButton:!1,fullscreenControl:i.panoService.google_fullscreen,motionTracking:!!i.panoService.google_motion,motionTrackingControl:!!i.panoService.google_motion,mode:"html5",zoom:i.fovToZoom(i.panoService.fov),scrollwheel:!i.panoService.fov_lock,mapFloor:!0}),i.PanoMarker=yield t(4966),i.viewerReady=!0,i.changeActivePano(n),i.locateControl(),i.angleControl(),i.panoControl()}),r.async=!0,r.src=(0,l.X6Q)()?"https://maps.googleapis.com/maps/api/js?key=AIzaSyBV-KDfQiy0kjFDtxseDEmXLThAHx96K1o&callback=initMap":"https://maps.googleapis.com/maps/api/js?key="+this.panoService.googleApiKey+"&callback=initMap",document.body.append(r)}})}locateControl(){this.locationSubject.pipe((0,f.b)(500)).subscribe(()=>{const[e,i,o]=[this.viewerService.viewerDataService.active.id,this._angleCorrector(parseFloat(this.viewerService.viewerDataService.angle.toFixed(2))),this._angleCorrector(parseFloat((-1*this.pitch+90).toFixed(2)))];let n=`${e}p&${i}h&${o}t`;this.panoService.moderationUrl&&(n=`${this.panoService.moderationUrl}/${n}`),this.location.replaceState(n)})}_angleCorrector(e){return-14210854715202004e-30==e&&(e=0),e>=360&&(e%=360),e<0&&(e+=360),e}_angleChange(){let e=this.viewer.getPov();this.yaw=e.heading,this.pitch=e.pitch,this.viewerService.viewerDataService.angle=this._angleCorrector(this.yaw),this.viewerService.viewerDataService.editor||this.locationSubject.next()}angleControl(){this._angleChange(),this.viewer.addListener("pov_changed",()=>{this._angleChange()})}_changePano(){let e=this.panoService.panoramas.find(i=>i.pano_id===this.viewer.getPano());e&&this.viewerService.viewerDataService.active.id!=e.id&&(this.viewerService.viewerDataService.active.id=e.id,this.viewerService.viewerDataService.active.t_id=e.moderation_id),this.activePanoObs.next(this.viewerService.viewerDataService.active),e&&(this.loadPano(e.next_pano),this.loadPano(e.prev_pano),e.links.forEach(i=>{this.loadPano(i.id)})),this.hotspotControl(),this.viewerService.viewerDataService.editor||this.locationSubject.next()}panoControl(){this._changePano(),this.viewer.addListener("pano_changed",()=>{this._changePano()})}hotspotControl(){if(this.hotspotService.close(),this.removeHotspots(),this.content.hotspotsContainer)this.content.hotspotsContainer.clear(),this.hotspotService.hotspots.filter(i=>i.pano.id==this.viewerService.viewerDataService.active.id).forEach(i=>{this.content.addHotspot(i.widget,i)});else{let e=setInterval(()=>{this.content.hotspotsContainer&&(this.content.hotspotsContainer.remove(),this.hotspotService.hotspots.filter(o=>o.pano.id==this.viewerService.viewerDataService.active.id).forEach(o=>{this.content.addHotspot(o.widget,o)}),clearInterval(e))})}}addHotspot(e){let i=this.hotspotService.getHotspotById(e),o=this.panoService.getPanoById(i.pano.id),n=new this.PanoMarker({pano:this.viewer,container:this.viewerService.viewerDataService.viewer.nativeElement,position:{heading:i.position.theta+o.north_angle,pitch:i.position.phi},anchor:new google.maps.Point(0,0),size:new google.maps.Size(0,0)}),r=setInterval(()=>{n.marker_&&(n.marker_.append(document.getElementById(e)),n.marker_.children[0].style.display="block",clearInterval(r))});this.markers.push(n)}removeHotspot(e){this.markers.forEach(i=>{i.setMap(null)}),this.markers=[]}removeHotspots(){this.markers.forEach(e=>{e.setMap(null)}),this.markers=[]}lookAtStop(){clearInterval(this.lookAtInterval.angle),clearInterval(this.lookAtInterval.zoom)}lookAt(e,i=(()=>{}),o=1e3){let r,a;if(null!=e.theta&&null!=e.phi)r=e.theta-this.viewerService.viewerDataService.angle,0==r&&(r=1.1),a=e.phi-this.viewer.getPov().pitch,r>180&&(r=(r-360)%360),r<-180&&(r=(r+360)%360);else{if(null==e.deltaX||null==e.deltaY)return void i();r=e.deltaX,a=e.deltaY}let h=60*(o/1e3+Math.abs(r)/10),c=2*(r-0*h)/(h*h-h),w=2*(a-0*h)/(h*h-h),D=0+h*c,u=0+h*w,L=this.viewer.getPov(),b=[];for(let k=0;k<h;k++)D-=c,u-=w,L.heading+=D,L.pitch+=u,b.push(Object.assign({},L));if(-1<=r&&r<=1)i();else{let k=0;this.lookAtInterval.angle=setInterval(()=>{this.viewerService.viewerDataService.windowActive&&(k++,b[k]?this.viewer.setPov({heading:b[k].heading,pitch:b[k].pitch}):(clearInterval(this.lookAtInterval.angle),i()))},1e3/60)}}panoWalk(){let e=this.panoService.getPanoById(this.viewerService.viewerDataService.active.id);if(!e)return;let i,o=this.viewerService.viewerDataService.angle,n=this.viewerService.viewerDataService.angle-360;if(e.links.length){let r=[];e.links.forEach(h=>{let c=Math.round((h.angle+e.north_angle)%360),w=Math.round((c-n)%360);w>180&&(w-=360),r.push(Math.abs(w))});let a=e.links[r.indexOf(Math.min(...r))];o=Math.round((a.angle+e.north_angle)%360),i=this.panoService.panoramas.filter(h=>h.id==a.id).pop()}else{let r=this.panoService.panoramas.indexOf(e);r+1>=this.panoService.panoramas.length?r=0:r+=1,i=this.panoService.panoramas[r]}this.lookAt({theta:o,phi:0,zoom:!0},()=>{this.goToPano(i.id),this.panoWalk()},5e3)}slidePano(){if(this.viewerService.viewerDataService.slideInterval.angle=!0,this.viewerService.interaction)return;let e={slide_speed:10,slide_toggle:5,slide_pano_change:!0};if(this.controlService.control.tools){var i=this.controlService.control.tools.filter(o=>"slider"===o.key).pop();i&&(e=i)}if(this.viewerService.viewerDataService.slideInterval.angle=setInterval(()=>{this.viewerService.interaction||this.viewer.setPov({heading:this.viewer.getPov().heading+e.slide_speed/200,pitch:this.viewer.getPov().pitch})},10),e.slide_pano_change){let o;this.viewerService.viewerDataService.slideInterval.pano=setInterval(()=>{if(e.slide_pano_on_chosed){if(e.slide_pano_arr.length>0){if(o){let n=e.slide_pano_arr.indexOf(o);o=e.slide_pano_arr[n+1]?e.slide_pano_arr[n+1]:e.slide_pano_arr[0]}else o=e.slide_pano_arr[0];o&&this.goToPano(o.pano.id)}}else this.nextPano()},1e3*e.slide_toggle)}}slideStop(){this.viewerService.viewerDataService.slideInterval.angle&&clearInterval(this.viewerService.viewerDataService.slideInterval.angle),this.viewerService.viewerDataService.slideInterval.pano&&clearInterval(this.viewerService.viewerDataService.slideInterval.pano),this.viewerService.viewerDataService.slideInterval.angle=null,this.viewerService.viewerDataService.slideInterval.pano=null,this.lookAtStop()}slidePause(){this.viewerService.viewerDataService.slideInterval.angle&&clearInterval(this.viewerService.viewerDataService.slideInterval.angle),this.viewerService.viewerDataService.slideInterval.pano&&clearInterval(this.viewerService.viewerDataService.slideInterval.pano),this.viewerService.viewerDataService.slideInterval.angle=null,this.viewerService.viewerDataService.slideInterval.pano=null,this.lookAtStop(),this.viewerService.viewerDataService.slideInterval.angle=!0}slideResume(){this.slidePano()}nextPano(){1==this.viewerService.viewerDataService.slideInterval.angle&&(this.viewer.setIdleMovement(1/0),this.viewer.stopMovement());let o,e=this.panoService.getPanoById(this.viewerService.viewerDataService.active.id).next_pano,i=this.panoService.panoramas.filter(r=>r.id==e).pop();if(this.controlService.control.tools){var n=this.controlService.control.tools.filter(r=>"slider"===r.key).pop();n&&(o=n)}if(o.slide_pano_on_chosed){if(o.slide_pano_arr.length>0){let r=o.slide_pano_arr.filter(a=>a.pano.id==this.viewerService.viewerDataService.active.id).pop();if(r){let a=o.slide_pano_arr.indexOf(r);r=o.slide_pano_arr[a+1]?o.slide_pano_arr[a+1]:o.slide_pano_arr[0]}else r=o.slide_pano_arr[0];return void(r&&this.goToPano(r.pano.id))}}else if(!i)return void this.panoService.panoLoading[e].then(()=>{i=this.panoService.panoramas.filter(r=>r.id==e).pop(),this.goToPano(i.id)});this.goToPano(i.id)}previousPano(){1==this.viewerService.viewerDataService.slideInterval.angle&&(this.viewer.setIdleMovement(1/0),this.viewer.stopMovement());let o,e=this.panoService.getPanoById(this.viewerService.viewerDataService.active.id).prev_pano,i=this.panoService.panoramas.filter(r=>r.id==e).pop();if(this.controlService.control.tools){var n=this.controlService.control.tools.filter(r=>"slider"===r.key).pop();n&&(o=n)}if(o.slide_pano_on_chosed){if(o.slide_pano_arr.length>0){let r=o.slide_pano_arr.filter(a=>a.pano.id==this.viewerService.viewerDataService.active.id).pop();if(r){let a=o.slide_pano_arr.indexOf(r);r=o.slide_pano_arr[a-1]?o.slide_pano_arr[a-1]:o.slide_pano_arr[o.slide_pano_arr.length-1]}else r=o.slide_pano_arr[o.slide_pano_arr.length-1];return void(r&&this.goToPano(r.pano.id))}}else if(!i)return void this.panoService.panoLoading[e].then(()=>{i=this.panoService.panoramas.filter(r=>r.id==e).pop(),this.goToPano(i.id)});this.goToPano(i.id)}loadPano(e){return this.panoService.panoLoading[e]||(this.panoService.panoLoading[e]=new Promise(i=>{let o=this.panoService.panoramas.filter(n=>n.id==e).pop();o?i(o):this.http.get(`/panorama/${this.panoService.user_id}/${this.panoService.folder_id}/${this.panoService.tour_id}/${e}`).toPromise().then(n=>{if(n){let r=this.panoService.addPano(n,this.imgRes);r.hotspots?.map(a=>{this.hotspotService.getHotspotById(a.id)||(this.hotspotService.addHotspot(a),a.pano_link&&a.pano_link.pano&&a.pano_link.pano.id&&!this.panoService.panoLoading[a.pano_link.pano.id]&&this.loadPano(a.pano_link.pano.id))}),i(r)}})})),this.panoService.panoLoading[e]}angleDecorrect_(e){return e>180&&(e-=360),e}arrayAnglesDecorrect_(e){return Object.keys(e).forEach(i=>{e[i]=this.angleDecorrect_(e[i])}),e}transitionMove(e){this.transitionMove_(this.viewer.pov.heading,this.viewer.pov.pitch,e.theta,e.phi)}transitionMove_(e,i,o,n){let r,h,c,a={x1:e,x2:o,y1:i,y2:n};if(Object.keys(a).forEach(u=>{a[u]=this._angleCorrector(a[u])}),h=this.getTransitionDots_(a.x1,a.x2),c=this.getTransitionDots_(a.y1,a.y2),h.length>c.length)r=h.length,c=this.getTransitionDots_(a.y1,a.y2,(n-i)/h.length);else if(c.length>h.length){let u;r=c.length,u=e<90&&o>270?360-o+e:o<90&&e>270?360-e+o:o-e,h=this.getTransitionDots_(a.x1,a.x2,u/c.length)}else r=h.length;h=this.arrayAnglesDecorrect_(h),c=this.arrayAnglesDecorrect_(c);let w=0,D=setInterval(()=>{w<r?(this.viewer.setPov({heading:h[w],pitch:c[w]}),w++):clearInterval(D)})}getTransitionDots_(e,i,o){let n;o?(o<0&&(o*=-1),n=o):n=1;let a=[];if(e<90&&i>270)for(;e<90;)for(o||(n+=1),e=this._angleCorrector(e-n),a.push(e);e>i;)o||(n+=1),(e-=n)>i&&a.push(this._angleCorrector(e));else if(i<90&&e>270)for(;e>270;)for(o||(n+=1),e=this._angleCorrector(e+n),a.push(e);e<i;)o||(n+=1),(e+=n)<i&&a.push(this._angleCorrector(e));else if(e>i)for(;e>i;)o||(n+=1),(e-=n)>i&&a.push(this._angleCorrector(e));else if(e<i)for(;e<i;)o||(n+=1),(e+=n)<i&&a.push(this._angleCorrector(e));return a.push(i),a}changeActivePano(e,i,o){if(this.viewer.setPano(e.pano_id),i){if(i.phi=parseFloat(i.phi||this.viewer.pov.pitch),i.theta=parseFloat(i.theta||this.viewer.pov.yaw),o)return void this.transitionMove({theta:i.theta+e.north_angle,phi:i.phi});this.viewer.setPov({heading:i.theta+e.north_angle,pitch:i.phi})}}goToPano(e,i,o){let n=this.panoService.getPanoById(e);n?this.changeActivePano(n,i,o):this.loadPano(e).then(r=>{this.changeActivePano(r,i,o)})}}return v.\u0275fac=function(e){return new(e||v)(l.LFG(y.a),l.LFG(_.x),l.LFG(p.Ye),l.LFG(m.X),l.LFG(P.N),l.LFG(A.B),l.LFG(C.m),l.LFG(T.eN))},v.\u0275prov=l.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})();const j=["viewer"];let B=(()=>{class v{constructor(e,i){this.googleService=e,this.viewerService=i}ngOnInit(){this.viewerService.viewerService=this.googleService,this.viewerService.viewerDataService.viewer=this.viewerElm}ngAfterViewInit(){this.viewerService.initViewer(this.viewerElm.nativeElement)}}return v.\u0275fac=function(e){return new(e||v)(l.Y36(G),l.Y36(y.a))},v.\u0275cmp=l.Xpm({type:v,selectors:[["vwr-google"]],viewQuery:function(e,i){if(1&e&&l.Gf(j,7,l.SBq),2&e){let o;l.iGM(o=l.CRH())&&(i.viewerElm=o.first)}},decls:2,vars:0,consts:[["id","viewer"],["viewer",""]],template:function(e,i){1&e&&l._UZ(0,"div",0,1)},styles:['#viewer[_ngcontent-%COMP%]{height:100%;background-color:#000}#viewer[_ngcontent-%COMP%]     canvas{outline:0}#viewer[_ngcontent-%COMP%]    >.gm-style>div[aria-label=Map], #viewer[_ngcontent-%COMP%]    >.gm-style>div[aria-label=Map]>div, #viewer[_ngcontent-%COMP%]    >.gm-style{z-index:initial!important}#viewer[_ngcontent-%COMP%]    >.gm-style>div[aria-label=Map]>div>.gmnoprint{z-index:4!important}#viewer[_ngcontent-%COMP%]     .gm-style div[style*="z-index: 106;"]{z-index:1!important}#viewer[_ngcontent-%COMP%]     .hotspot{display:none}#viewer[_ngcontent-%COMP%]     .gm-bundled-control>div:first-child{display:none}#viewer[_ngcontent-%COMP%]     .gm-iv-small-container{display:none}#viewer[_ngcontent-%COMP%]     .gm-style .gm-compass{display:none}']}),v})(),O=(()=>{class v{}return v.\u0275fac=function(e){return new(e||v)},v.\u0275mod=l.oAB({type:v,bootstrap:[B]}),v.\u0275inj=l.cJS({providers:[G],imports:[p.ez]}),v})()},4966:function(z){var s;typeof window<"u"&&window,"object"==typeof z.exports&&(z.exports=((s=function(t){if(!(t=t||{}).container)throw"A panorama container needs to be defined.";this.container_=t.container,this.povToPixel_=window.chrome?s.povToPixel3d:s.povToPixel2d,this.anchor_=t.anchor||new google.maps.Point(16,16),this.className_=t.className||null,this.clickable_=t.clickable||!0,this.icon_=t.icon||null,this.id_=t.id||null,this.marker_=null,this.pano_=null,this.pollId_=-1,this.position_=t.position||{heading:0,pitch:0},this.povListener_=null,this.zoomListener_=null,this.size_=t.size||new google.maps.Size(32,32),this.title_=t.title||"",this.visible_="boolean"!=typeof t.visible||t.visible,this.zIndex_=t.zIndex||1,this.setPano(t.pano||null,t.container)}).prototype=new google.maps.OverlayView,s.get3dFov=function(t){return t<=2?126.5-36.75*t:195.93/Math.pow(1.92,t)},s.povToPixel3d=function(t,p,M,l){var g=l.offsetWidth,f={left:g/2,top:l.offsetHeight/2},d=Math.PI/180,y=s.get3dFov(M)*d,_=p.heading*d,m=p.pitch*d,P=t.heading*d,A=t.pitch*d,C=g/2/Math.tan(y/2),T=Math.cos(A),G=Math.sin(A),j=Math.cos(P),O=C*T*Math.sin(P),v=C*T*j,I=C*G,e=Math.cos(m),i=Math.sin(m),o=Math.cos(_),n=Math.sin(_),r=C*e*n,a=C*e*o,h=C*i,c=r*O+a*v+h*I,w=r*r+a*a+h*h;if(Math.abs(c)<1e-6)return null;var D=w/c;if(D<0)return null;var u=D*O,L=D*v,b=D*I,k=-i*n,N=-i*o,X=e,F=o,E=-n,x=0,H=Math.sqrt(F*F+E*E+x*x),V=u*k+L*N+b*X;return f.left+=u*(F/=H)+L*(E/=H)+b*(x/=H),f.top-=V,f},s.wrapHeading=function(t){return(t=(t+180)%360)<0&&(t+=360),t-180},s.povToPixel2d=function(t,p,M,l){var g=l.offsetWidth,S=l.offsetHeight,f={left:g/2,top:S/2},d=180/Math.pow(2,M),y=d*(S/g),_=s.wrapHeading(t.heading-p.heading),m=t.pitch-p.pitch;return f.left+=_/d*g,f.top-=m/y*S,f},s.prototype.onAdd=function(){if(!this.marker_){var t=document.createElement("div");t.style.position="absolute",t.style.cursor="pointer",t.style.width=this.size_.width+"px",t.style.height=this.size_.height+"px",t.style.display=this.visible_?"block":"none",t.style.zIndex=this.zIndex_,this.id_&&(t.id=this.id_),this.className_&&(t.className=this.className_),this.title_&&(t.title=this.title_),this.icon_&&(t.style.backgroundImage="url("+this.icon_+")"),this.id_||this.className_||this.icon_||(t.style.backgroundImage="url(https://www.google.com/intl/en_us/mapfiles/ms/micons/red-dot.png)"),this.marker_=t,this.getPanes().overlayMouseTarget.appendChild(t),window.addEventListener("resize",this.draw.bind(this)),this.povListener_=google.maps.event.addListener(this.getMap(),"pov_changed",this.draw.bind(this)),this.zoomListener_=google.maps.event.addListener(this.getMap(),"zoom_changed",this.draw.bind(this));var p="click";window.PointerEvent?p="pointerdown":window.MSPointerEvent&&(p="MSPointerDown"),t.addEventListener(p,this.onClick.bind(this),!1),this.draw(),google.maps.event.trigger(this,"add",this.marker_)}},s.prototype.draw=function(){if(this.pano_){var t=this.povToPixel_(this.position_,this.pano_.getPov(),typeof this.pano_.getZoom()<"u"?this.pano_.getZoom():1,this.container_);this.marker_.style.transform=null!==t?`translate(${t.left-this.anchor_.x}px,${t.top-this.anchor_.y}px)`:`translate(${-(9999+this.size_.width)}px,0)`}},s.prototype.onClick=function(t){this.clickable_&&google.maps.event.trigger(this,"click"),t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()},s.prototype.onRemove=function(){!this.marker_||(google.maps.event.removeListener(this.povListener_),google.maps.event.removeListener(this.zoomListener_),this.marker_.parentNode.removeChild(this.marker_),this.marker_=null,google.maps.event.trigger(this,"remove"))},s.prototype.getAnchor=function(){return this.anchor_},s.prototype.getClassName=function(){return this.className_},s.prototype.getClickable=function(){return this.clickable_},s.prototype.getIcon=function(){return this.icon_},s.prototype.getId=function(){return this.id_},s.prototype.getPano=function(){return this.pano_},s.prototype.getPosition=function(){return this.position_},s.prototype.getSize=function(){return this.size_},s.prototype.getTitle=function(){return this.title_},s.prototype.getVisible=function(){return this.visible_},s.prototype.getZIndex=function(){return this.zIndex_},s.prototype.setAnchor=function(t){this.anchor_=t,this.draw()},s.prototype.setClassName=function(t){this.className_=t,this.marker_&&(this.marker_.className=t)},s.prototype.setClickable=function(t){this.clickable_=t},s.prototype.setIcon=function(t){this.icon_=t,this.marker_&&(this.marker_.style.backgroundImage=t?"url("+t+")":"")},s.prototype.setId=function(t){this.id_=t,this.marker_&&(this.marker_.id=t)},s.prototype.setPano=function(t,p){if(t&&!(t instanceof google.maps.StreetViewPanorama))throw"PanoMarker only works inside a StreetViewPanorama.";if(this.pano_&&this.onRemove(),this.setMap(t),this.pano_=t,this.container_=p,t){var M=function(l){this.pollId_=window.setInterval(function(){this.getPanes()&&(window.clearInterval(this.pollId_),this.onAdd(),l&&l(this))}.bind(this),10)};if(typeof Promise<"u")return new Promise(M.bind(this));M.call(this)}},s.prototype.setPosition=function(t){this.position_=t,this.draw()},s.prototype.setSize=function(t){this.size_=t,this.marker_&&(this.marker_.style.width=t.width+"px",this.marker_.style.height=t.height+"px",this.draw())},s.prototype.setTitle=function(t){this.title_=t,this.marker_&&(this.marker_.title=t)},s.prototype.setVisible=function(t){this.visible_=t,this.marker_&&(this.marker_.style.display=t?"block":"none")},s.prototype.setZIndex=function(t){this.zIndex_=t,this.marker_&&(this.marker_.style.zIndex=t)},s))},8239:(z,s,t)=>{"use strict";function p(l,g,S,f,d,y,_){try{var m=l[y](_),P=m.value}catch(A){return void S(A)}m.done?g(P):Promise.resolve(P).then(f,d)}function M(l){return function(){var g=this,S=arguments;return new Promise(function(f,d){var y=l.apply(g,S);function _(P){p(y,f,d,_,m,"next",P)}function m(P){p(y,f,d,_,m,"throw",P)}_(void 0)})}}t.d(s,{Z:()=>M})}}]);