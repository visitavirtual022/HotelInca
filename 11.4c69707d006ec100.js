"use strict";(self.webpackChunktourmkr_download=self.webpackChunktourmkr_download||[]).push([[11],{11:(Q,c,r)=>{r.r(c),r.d(c,{MenuKavftigModule:()=>Z});var l=r(8692),s=r(9638),u=r(6031),m=r(5735);const d=JSON.parse('{"widget":"MenuKavftigComponent","logo":"","logo_href":"","logo_href_self":false,"border_radius":{"topLeft":6,"topRight":6,"bottomLeft":6,"bottomRight":6},"margin":20,"panos":[],"list_dropdown_hover":false,"list_dropdown_accordion":true,"list_padding":{"top":0,"right":20,"bottom":0,"left":20},"recursive":true,"icons_enable":true,"hotspots_enable":true,"area":"left","opacity":0.75,"hide_on_start":{"desktop":false,"tablet":true,"mobile":true},"width":200,"address1":"","areas":["left","right"],"styles":"","hover_color":{"color":"rgba(0,0,0,.1)"},"common_color":false,"background":{"type":"native","color":"rgb(255,255,255)"},"active_color":{"type":"native","color":"rgb(103,58,183)"},"text_color":{"color":"rgb(92,107,117)"},"list_active_item_bg":{"type":"native","color":""},"panos_font":{"family":"Roboto","align":"left","size":14,"line_height":34,"italic":false,"bold":false,"underline":false,"color":""},"address1_font":{"family":"Roboto","align":"left","size":16,"line_height":24,"italic":false,"bold":false,"underline":false,"color":""}}');var n=r(4537),p=r(6101),f=r(354);function _(o,i){if(1&o&&n._UZ(0,"sh-icon",6),2&o){const t=n.oxw().$implicit;n.Q6J("icon",t.icon)}}function h(o,i){if(1&o&&n._UZ(0,"sh-icon",7),2&o){const t=n.oxw(2);n.Q6J("icon",t.icons[0])}}function v(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"wdg-menu-kavftig-menu",8),n.NdJ("onOpen",function(a){n.CHM(t);const g=n.oxw(2);return n.KtG(g.open(a.event,a.item))}),n.qZA()}if(2&o){const t=n.oxw().$implicit,e=n.oxw();n.Q6J("links",t.children)("pano",e.pano)("hotspot",e.hotspot)("icons",e.icons)}}function M(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"li")(1,"button",1),n.NdJ("click",function(a){const I=n.CHM(t).$implicit,J=n.oxw();return n.KtG(J.open(a,I))}),n.TgZ(2,"span"),n.YNc(3,_,1,1,"sh-icon",2),n.TgZ(4,"span",3),n._uU(5),n.qZA()(),n.YNc(6,h,1,1,"sh-icon",4),n.qZA(),n.YNc(7,v,1,4,"wdg-menu-kavftig-menu",5),n.qZA()}if(2&o){const t=i.$implicit,e=n.oxw();n.xp6(1),n.ekj("active","pano"==t.type&&t.pano.id==e.pano||"hotspot"==t.type&&t.hotspot==e.hotspot),n.uIk("aria-label",e.i18n.t(t.name)),n.xp6(2),n.Q6J("ngIf",t.icon&&t.icon.icon&&"fad"!=t.icon.prefix),n.xp6(2),n.Oqu(e.i18n.t(t.name)),n.xp6(1),n.Q6J("ngIf",t.children),n.xp6(1),n.Q6J("ngIf",t.children)}}let C=(()=>{class o{constructor(t){this.i18n=t,this.icons=[],this.onOpen=new n.vpe}open(t,e){this.onOpen.emit({event:t,item:e})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(p.T))},o.\u0275cmp=n.Xpm({type:o,selectors:[["wdg-menu-kavftig-menu"]],inputs:{links:"links",pano:"pano",hotspot:"hotspot",icons:"icons"},outputs:{onOpen:"onOpen"},decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"click"],["class","icon",3,"icon",4,"ngIf"],[1,"text"],["class","dropdown-icon",3,"icon",4,"ngIf"],[3,"links","pano","hotspot","icons","onOpen",4,"ngIf"],[1,"icon",3,"icon"],[1,"dropdown-icon",3,"icon"],[3,"links","pano","hotspot","icons","onOpen"]],template:function(t,e){1&t&&(n.TgZ(0,"ul"),n.YNc(1,M,8,7,"li",0),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngForOf",e.links))},dependencies:[l.sg,l.O5,f.o,o],styles:["ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-color:var(--hover-background);border-width:0;border-bottom-width:1px;border-style:solid}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;width:100%;background:transparent;display:flex;text-decoration:none;color:inherit;align-items:center;cursor:pointer;padding:var(--list-padding-top) var(--list-padding-right) var(--list-padding-bottom) var(--list-padding-left)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:var(--hover-background)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background:var(--active-background)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--active-color)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   sh-icon[_ngcontent-%COMP%]{width:var(--pano-style-font-size);height:var(--pano-style-font-size)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   sh-icon.dropdown-icon[_ngcontent-%COMP%]{width:22px;height:22px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   sh-icon.icon[_ngcontent-%COMP%]{margin-right:6px}ul[_ngcontent-%COMP%]   li.open[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]   sh-icon.dropdown-icon[_ngcontent-%COMP%]{transform:rotate(90deg)}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]  ul{display:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]  ul li{border:none}"]}),o})();var x=r(7239);function O(o,i){if(1&o&&(n._UZ(0,"code",2),n.ALo(1,"safe")),2&o){const t=n.oxw();n.Q6J("innerHTML",n.xi3(1,1,t.styles,"html"),n.oJD)}}function b(o,i){if(1&o&&(n.TgZ(0,"a",13),n._UZ(1,"img",14),n.qZA()),2&o){const t=n.oxw(3);n.Q6J("href",t.menu.logo_href,n.LSH),n.uIk("target",t.menu.logo_href_self?"_self":"_blank"),n.xp6(1),n.Q6J("src",t.menuLogoImgSrc,n.LSH),n.uIk("width",2*t.menu.width)}}function P(o,i){if(1&o&&n._UZ(0,"img",14),2&o){const t=n.oxw(3);n.Q6J("src",t.menuLogoImgSrc,n.LSH),n.uIk("width",2*t.menu.width)}}function w(o,i){if(1&o&&(n.TgZ(0,"div",10),n.YNc(1,b,2,4,"a",11),n.YNc(2,P,1,2,"img",12),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",t.menu.logo_href),n.xp6(1),n.Q6J("ngIf",!t.menu.logo_href)}}function y(o,i){if(1&o&&(n.TgZ(0,"div",15),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.hij(" ",t.i18n.t(t.menu.address1)," ")}}function k(o,i){if(1&o){const t=n.EpF();n.TgZ(0,"div",3)(1,"button",4),n.NdJ("click",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.toggle())}),n.TgZ(2,"div",5),n._UZ(3,"span")(4,"span")(5,"span"),n.qZA()(),n.YNc(6,w,3,2,"div",6),n.TgZ(7,"div",7)(8,"wdg-menu-kavftig-menu",8),n.NdJ("onOpen",function(a){n.CHM(t);const g=n.oxw();return n.KtG(g.open(a.event,a.item))}),n.qZA()(),n.YNc(9,y,2,1,"div",9),n.qZA()}if(2&o){const t=n.oxw();n.Udp("position",t.editorMode?null:"fixed"),n.ekj("text-right","right"==t.menu.panos_font.align)("show",t.show)("no-logo",!t.menu.logo)("menu-dropdown-hover",t.menu.list_dropdown_hover),n.Q6J("ngClass",t.menu.area),n.xp6(6),n.Q6J("ngIf",t.menu.logo),n.xp6(2),n.Q6J("links",t.menu.panos)("pano",t.activePano.id)("hotspot",t.activeHotspot)("icons",t.icons),n.xp6(1),n.Q6J("ngIf",t.menu.address1&&t.menu.address1[t.i18n.active])}}let K=(()=>{class o extends m.M{constructor(){super(...arguments),this.default_options=d,this.icons=[{prefix:"custom",iconName:"arrow",icon:[192,512,[],"f00d","M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"]}]}get menuLogoImgSrc(){return this.menu&&this.menu.logo?-1===this.menu.logo.indexOf("img.gothru.co")?this.menu.logo:`${this.menu.logo}&resize=${2*this.menu.width}x0`:""}open(t,e){super.open(t,e),"mobile"==this.viewerService.overlayDeviceClass&&("pano"==e.type||"hotspot"==e.type)&&this.menuService.toggle()}}return o.\u0275fac=function(){let i;return function(e){return(i||(i=n.n5z(o)))(e||o)}}(),o.\u0275cmp=n.Xpm({type:o,selectors:[["wdg-menu-kavftig"]],features:[n.qOj],decls:2,vars:2,consts:[[3,"innerHTML",4,"ngIf"],["class","widget menu",3,"ngClass","text-right","show","no-logo","menu-dropdown-hover","position",4,"ngIf"],[3,"innerHTML"],[1,"widget","menu",3,"ngClass"],["aria-label","toggle menu",1,"toggle",3,"click"],[1,"nav-icon"],["class","logo",4,"ngIf"],[1,"list","scrollbar"],[3,"links","pano","hotspot","icons","onOpen"],["class","contact",4,"ngIf"],[1,"logo"],[3,"href",4,"ngIf"],["alt","logo",3,"src",4,"ngIf"],[3,"href"],["alt","logo",3,"src"],[1,"contact"]],template:function(t,e){1&t&&(n.YNc(0,O,2,4,"code",0),n.YNc(1,k,10,17,"div",1)),2&t&&(n.Q6J("ngIf",e.styles),n.xp6(1),n.Q6J("ngIf",e.widgetInit&&e.menu))},dependencies:[l.mk,l.O5,C,x.y],styles:['code[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{--pano-style-line-height: 34px;--pano-style-font-family: "Roboto";--pano-style-font-size: 14px;--pano-style-text-align: left;z-index:6}.menu[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;z-index:6;transition:transform .3s ease-in-out;box-shadow:0 5px 10px #0003;max-height:calc(100% - var(--margin) * 2);background:var(--background);color:var(--text-color);opacity:var(--opacity);width:var(--width);margin:var(--margin);border-top-left-radius:var(--border-radius-top-left);border-top-right-radius:var(--border-radius-top-right);border-bottom-left-radius:var(--border-radius-bottom-left);border-bottom-right-radius:var(--border-radius-bottom-right)}.menu[_ngcontent-%COMP%]:focus-within, .menu[_ngcontent-%COMP%]:hover{opacity:1}.menu.left[_ngcontent-%COMP%]{transform:translate(calc(-100% - var(--margin)));left:0}.menu.left[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]{left:100%}.menu.right[_ngcontent-%COMP%]{transform:translate(calc(100% + var(--margin)));right:0}.menu.right[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]{right:100%}.menu.right.text-right[_ngcontent-%COMP%]     sh-icon.dropdown-icon{order:-1;transform:rotate(180deg)}.menu.right.text-right[_ngcontent-%COMP%]     ul li a>span sh-icon.icon{order:1;margin-left:6px;margin-right:0}.menu[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]{position:absolute;background:inherit;border:none;border-radius:inherit;width:44px;height:36px;display:flex;align-items:center;justify-content:center;outline:none;margin:0 var(--margin);cursor:pointer;z-index:1}.menu[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]{position:relative;width:20px;height:15px}.menu[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;left:0;display:block;width:100%;height:1px;transition:.25s ease-in-out;transform:rotate(0);transform-origin:left center;background:var(--text-color)}.menu[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0}.menu[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){top:6px}.menu[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){top:12px}.menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{position:relative;border-top-left-radius:inherit;border-top-right-radius:inherit;flex:0 0 auto;line-height:0;text-align:center}.menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-top-left-radius:inherit;border-top-right-radius:inherit;max-width:100%}.menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{line-height:0}.menu[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{flex:0 1 auto;overflow:h}.menu[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{flex:0 0 auto;padding:0 10px;white-space:pre-line}.menu.show[_ngcontent-%COMP%]{transform:translate(0)}.menu.show[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){top:0;left:3.3px;transform:rotate(45deg)}.menu.show[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){width:0;opacity:0}.menu.show[_ngcontent-%COMP%]   button.toggle[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){top:14px;left:3.3px;transform:rotate(-45deg)}.menu[_ngcontent-%COMP%]:not(.text-right)     wdg-menu-kavftig-menu ul ul li button>span{margin-left:10px}.menu[_ngcontent-%COMP%]:not(.text-right)     wdg-menu-kavftig-menu ul ul ul li button>span{margin-left:20px}.menu[_ngcontent-%COMP%]:not(.text-right)     wdg-menu-kavftig-menu ul ul ul ul li button>span{margin-left:30px}.menu[_ngcontent-%COMP%]:not(.text-right)     wdg-menu-kavftig-menu ul ul ul ul ul li button>span{margin-left:40px}.menu.text-right[_ngcontent-%COMP%]     wdg-menu-kavftig-menu ul ul li button>span{margin-right:10px}.menu.text-right[_ngcontent-%COMP%]     wdg-menu-kavftig-menu ul ul ul li button>span{margin-right:20px}.menu.text-right[_ngcontent-%COMP%]     wdg-menu-kavftig-menu ul ul ul ul li button>span{margin-right:30px}.menu.text-right[_ngcontent-%COMP%]     wdg-menu-kavftig-menu ul ul ul ul ul li button>span{margin-right:40px}.list[_ngcontent-%COMP%]  ul button span{font-style:var(--pano-style-font-style);font-weight:var(--pano-style-font-weight);-webkit-text-decoration:var(--pano-style-text-decoration);text-decoration:var(--pano-style-text-decoration);font-size:var(--pano-style-font-size);font-family:var(--pano-style-font-family);color:var(--pano-style-color);text-align:var(--pano-style-text-align);line-height:var(--pano-style-line-height);justify-content:var(--pano-style-justify-content)}.contact[_ngcontent-%COMP%]{font-style:var(--address-style--font-style);font-weight:var(--address-style-font-weight);-webkit-text-decoration:var(--address-style-text-decoration);text-decoration:var(--address-style-text-decoration);font-size:var(--address-style-font-size);font-family:var(--address-style-font-family);color:var(--address-style-color);text-align:var(--address-style-text-align);line-height:var(--address-style-line-height)}  #overlay:not(.mobile) wdg-menu-kavftig .menu.menu-dropdown-hover button:hover+wdg-menu-kavftig-menu>ul,   #overlay:not(.mobile) wdg-menu-kavftig .menu.menu-dropdown-hover wdg-menu-kavftig-menu>ul:hover{display:block!important}  #overlay.mobile wdg-menu-kavftig .menu{width:100%;height:100%;max-height:100%;margin:0;opacity:1;border-radius:0}  #overlay.mobile wdg-menu-kavftig .menu.left{transform:translate(-100%)}  #overlay.mobile wdg-menu-kavftig .menu.right{transform:translate(100%)}  #overlay.mobile wdg-menu-kavftig .menu button.toggle{margin:var(--margin);border-top-left-radius:var(--border-radius-top-left);border-top-right-radius:var(--border-radius-top-right);border-bottom-left-radius:var(--border-radius-bottom-left);border-bottom-right-radius:var(--border-radius-bottom-right)}  #overlay.mobile wdg-menu-kavftig .menu.show{transform:translate(0)}  #overlay.mobile wdg-menu-kavftig .menu.show.left button.toggle{left:initial;right:0}  #overlay.mobile wdg-menu-kavftig .menu.show.right button.toggle{right:initial;left:0}  #overlay.mobile wdg-menu-kavftig .menu .logo.no-logo{margin-bottom:60px}  #overlay.mobile wdg-menu-kavftig .menu ul li.open>wdg-menu-kavftig-menu>ul{display:block}']}),o})();var T=r(4507);let Z=(()=>{class o{constructor(t){this.componentFactoryResolver=t}resolveComponent(){return this.componentFactoryResolver.resolveComponentFactory(K)}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(n._Vd))},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[l.ez,s.ot,u.Q,T.D]}),o})()}}]);