(window.webpackJsonp=window.webpackJsonp||[]).push([[30,5,10,11,20],{342:function(t,e,n){var map={"./audit.svg":215,"./basic-plan.svg":216,"./business-plan.svg":217,"./clock.svg":218,"./dropdown-down.svg":219,"./idea.svg":220,"./income.svg":221,"./kyc.svg":222,"./mark-stamp.svg":223,"./mark.svg":224,"./market-place.svg":225,"./onboarding.svg":226,"./pro-plan.svg":227,"./security.svg":228,"./time.svg":229,"./world.svg":230};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=342},343:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("786166af",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("cc0aee1c",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";n.r(e);var o={name:"TextCard",props:{icon:{type:String,default:""},iconStyle:{type:Object,default:function(){}},mainStyle:{type:Object,default:function(){}},headerStyle:{type:Object,default:function(){}},subStyle:{type:Object,default:function(){}},subheader:{type:String,default:""},header:{type:String,default:"",required:!0},footerClass:{type:String,default:""}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text_card flex flex-col"},[t.icon?o("div",{style:t.iconStyle},[o("img",{attrs:{src:n(342)("./"+t.icon)}})]):t._e(),t._v(" "),t.subheader?o("p",{staticClass:"textcard_subheader",style:t.subStyle},[t._v("\n    "+t._s(t.subheader)+"\n  ")]):t._e(),t._v(" "),t.header?o("h3",{staticClass:"textcard_header",class:[{"font-NeueHelvetica":!t.icon}],style:t.headerStyle},[t._v("\n    "+t._s(t.header)+"\n  ")]):t._e(),t._v(" "),o("div",{style:t.mainStyle},[t._t("default")],2),t._v(" "),o("footer",{class:t.footerClass},[t._t("footer")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(231).default})},347:function(t,e,n){"use strict";n.r(e);var o={name:"BannerAlert",props:{}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"banner_alert rounded-full bg-[#F3F3F3] flex justify-between items-center w-[259.2px] h-[24.05px] lg:w-[355.67px] lg:h-[33px]"},[t._m(0),t._v(" "),o("img",{staticClass:"mr-[8.6px] lg:mr-[11.08px]",attrs:{src:n(232),alt:""}})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center ml-[8.6px]"},[n("span",{staticClass:"w-[32.8px] h-[14.47px] lg:w-[45.01px] lg:h-[19.86px] bg-[#2FA36B] rounded-xl flex justify-center items-center text-[7.28767px] lg:text-[10px] text-white"},[t._v("New")]),t._v(" "),n("p",{staticClass:"text-[8.68195px] lg:text-[11.9132px] ml-[4.58px] lg:ml-[6.28px]"},[t._v("\n      You can now use ToNote for your business\n    ")])])}],!1,null,null,null);e.default=component.exports},348:function(t,e,n){var map={"./ToNoteSignatureAnimationEase.gif":349,"./signature.gif":350,"./stamp.gif":351,"./unlock.gif":352};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=348},349:function(t,e,n){t.exports=n.p+"img/ToNoteSignatureAnimationEase.992ddaa.gif"},350:function(t,e,n){t.exports=n.p+"img/signature.6b54f4a.gif"},351:function(t,e,n){t.exports=n.p+"img/stamp.1a5879c.gif"},352:function(t,e,n){t.exports=n.p+"img/unlock.ba749f5.gif"},353:function(t,e,n){"use strict";n(343)},354:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,'.hero_left>h2{font-family:"NeueHelvetica"}',""]),o.locals={},t.exports=o},355:function(t,e,n){"use strict";n(344)},356:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".list_count[data-v-ad30e466]{width:20px;height:20px;background-color:#003bb3;font-weight:400;font-size:12px;line-height:366.5%;text-align:center;color:#fff}",""]),o.locals={},t.exports=o},359:function(t,e,n){"use strict";n.r(e);var o={name:"HeroBanner",props:{heading:{type:String,required:!0},subHeading:{type:String,required:!0},headerClass:{type:String,default:""},bodyClass:{type:String,default:""},heroLeftClass:{type:String,default:""},illustration:{type:String,default:"signature.gif"},bannerAlert:{type:Boolean,default:!0}}},r=(n(353),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"hero flex flex-col items-center lg:items-start lg:flex-row lg:justify-center mt-10 px-4 lg:px-0"},[o("div",{staticClass:"hero_left flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 lg:translate-y-[80px] max-w-[582px]",class:t.heroLeftClass},[t.bannerAlert?o("div",[o("banner-alert")],1):t._e(),t._v(" "),o("h2",{staticClass:"heroTitle leading-[98%] tracking-[-0.015em] text-[#03060B] text-[34.9808px] lg:text-[52.3502px] font-bold mt-[14px] mb-[23px] w-full text-center lg:text-left lg:w-[406px] max-w-[582px]",class:t.headerClass},[t._v("\n      "+t._s(t.heading)+"\n    ")]),t._v(" "),o("p",{staticClass:"heroBody w-full md:w-[323px] lg:w-[499px] 2xl:w-[582px] px-5 lg:px-0 lg:pr-14 text-[11.6603px] lg:text-[18px] text-[#626262] mb-[28px] leading-[170.5%] lg:leading-[193.5%] max-w-[582px]",class:t.bodyClass},[t._v("\n      "+t._s(t.subHeading)+"\n    ")]),t._v(" "),o("div",{staticClass:"btn_fadein flex space-y-1.5 lg:space-x-1.5 lg:space-y-0 flex-col lg:flex-row"},[t._t("bannerbtn")],2)]),t._v(" "),o("div",{staticClass:"hero_right lg:ml-[0px] mt-[29px] lg:mt-0 w-full md:w-[350px] lg:h-[620.25px] lg:w-[800px] xl:w-[827px] 2xl:w-[827px] overflow-hidden"},[o("img",{staticClass:"w-full h-full object-cover",attrs:{src:n(348)("./"+t.illustration),alt:"signature anime"}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerAlert:n(347).default})},361:function(t,e,n){"use strict";n.r(e);n(234);var o={name:"ListItem",props:{icon:{type:String,default:""},iconStyle:{type:Object,default:function(){}},count:{type:Number,default:0},item:{type:String,default:"help"}}},r=(n(355),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex items-start mt-[10px] lg:mt-0 lg:space-y-2"},[o("div",{staticClass:"mr-[14px] flex-shrink-0"},[t.icon?o("p",{staticClass:"mt-2 lg:mt-4"},[o("img",{style:t.iconStyle,attrs:{src:n(342)("./"+t.icon),alt:"list icon"}})]):o("p",{staticClass:"list_count flex justify-center items-center rounded-full mt-1.5 lg:mt-[16.5px]"},[t._v("\n      "+t._s(t.count)+"\n    ")])]),t._v(" "),o("div",{staticClass:"pt-[5px] lg:pt-0"},[o("p",{staticClass:"text-content-color text-[14px] lg:leading-[231%]",domProps:{innerHTML:t._s(t.item)}})])])}),[],!1,null,"ad30e466",null);e.default=component.exports},413:function(t,e,n){t.exports=n.p+"img/header_img.e9a7545.png"},417:function(t,e,n){t.exports=n.p+"img/tonoteBasic.50eceea.png"},418:function(t,e,n){t.exports=n.p+"img/tonoteBusiness.1d33743.png"},419:function(t,e,n){t.exports=n.p+"img/tonoteNotaries.9e55f15.png"},420:function(t,e,n){t.exports=n.p+"img/tonoteTeams.6d5996a.png"},455:function(t,e,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("16c26c3e",content,!0,{sourceMap:!1})},498:function(t,e,n){"use strict";n(455)},499:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]),o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]),o.push([t.i,'.scroll-snap_y[data-v-dc555afc]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-dc555afc],.scroll-snap_y li[data-v-dc555afc]{scroll-snap-align:start}.banner_alert[data-v-dc555afc],.btn_fadein[data-v-dc555afc],.hero_right[data-v-dc555afc],.heroBody[data-v-dc555afc],.heroTitle[data-v-dc555afc],.logo_anime[data-v-dc555afc],.mobile_menu.active ul>li[data-v-dc555afc]:first-child,.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(2),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(3),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(4),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(5),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(6),.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(7),.nav__menu>li[data-v-dc555afc]:first-child,.nav__menu>li[data-v-dc555afc]:nth-child(2),.nav__menu>li[data-v-dc555afc]:nth-child(3),.nav__menu>li[data-v-dc555afc]:nth-child(4),.nav__menu>li[data-v-dc555afc]:nth-child(5),.nav__menu__buttons[data-v-dc555afc],.sectionAnime[data-v-dc555afc]{opacity:0;-webkit-animation-name:slide-right-data-v-dc555afc;animation-name:slide-right-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-dc555afc]{-webkit-animation-name:slide-right-data-v-dc555afc;animation-name:slide-right-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-dc555afc]:first-child{-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-dc555afc]:nth-child(7){-webkit-animation-name:slide-right-data-v-dc555afc;animation-name:slide-right-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-dc555afc]:first-child{-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-dc555afc]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-dc555afc]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-dc555afc]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-dc555afc]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-dc555afc]{-webkit-animation-name:fade-in-data-v-dc555afc;animation-name:fade-in-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-dc555afc]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-dc555afc],.heroTitle[data-v-dc555afc]{-webkit-animation-name:text-slide-up-data-v-dc555afc;animation-name:text-slide-up-data-v-dc555afc;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-dc555afc]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-dc555afc]{-webkit-animation-name:slide-left-data-v-dc555afc;animation-name:slide-left-data-v-dc555afc}.btn_fadein[data-v-dc555afc],.hero_right[data-v-dc555afc]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-dc555afc]{-webkit-animation-name:fade-in-data-v-dc555afc;animation-name:fade-in-data-v-dc555afc}.sectionAnime[data-v-dc555afc]{-webkit-animation-name:section-slide-up-data-v-dc555afc;animation-name:section-slide-up-data-v-dc555afc;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-dc555afc{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-dc555afc{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-dc555afc{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-dc555afc{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-dc555afc{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-dc555afc{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-dc555afc{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-dc555afc]{box-sizing:border-box;font-family:"Poppins",sans-serif}body[data-v-dc555afc]{position:relative}body[data-v-dc555afc],html[data-v-dc555afc]{overflow-x:hidden}html[data-v-dc555afc]{scroll-behavior:smooth}.wrapper[data-v-dc555afc]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-dc555afc]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-dc555afc]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-dc555afc]{padding-inline:1rem}}.textcard_header[data-v-dc555afc]{font-family:"NeueHelvetica";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-dc555afc]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-dc555afc]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-dc555afc]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-dc555afc]{font-size:52.3502px}.page-header[data-v-dc555afc],.textCard-header[data-v-dc555afc],.u-main-text[data-v-dc555afc]{font-weight:700;line-height:98%;letter-spacing:-.015em;color:#03060b}.textCard-header[data-v-dc555afc],.u-main-text[data-v-dc555afc]{font-family:"NeueHelvetica";font-style:normal;font-size:40px;text-align:center}.textCard-header span[data-v-dc555afc],.u-main-text span[data-v-dc555afc]{font-family:"NeueHelvetica"}.textCard-header[data-v-dc555afc]{font-size:23.5135px;text-align:center}@media(min-width:1024px){.textCard-header[data-v-dc555afc]{text-align:left}}.u-text-summary[data-v-dc555afc]{font-weight:400;font-size:16px;text-align:center;color:#626262}.basic-section[data-v-dc555afc]{margin-top:47px}.teams-group[data-v-dc555afc]{background:#f9f9f9;border-radius:20px}',""]),o.locals={},t.exports=o},517:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"u-main-text w-auto lg:w-[768px] px-[16px]"},[t._v("\n          Notarising documents online is\n          "),n("span",{staticClass:"text-[#FF9901]"},[t._v("26X")]),t._v(" faster and\n          "),n("span",{staticClass:"text-[#458FFF]"},[t._v("55%")]),t._v(" cheaper than traditional\n          means of notarisation.\n        ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-auto lg:w-[563.18px] mt-[38px] lg:mt-0"},[e("img",{staticClass:"w-full h-full max-w-none",attrs:{src:n(420),alt:"notaries image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-auto lg:w-[581.79px] mt-[38px] lg:mt-0"},[e("img",{staticClass:"w-full h-full max-w-none",attrs:{src:n(418),alt:"notaries image"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-auto lg:w-[544px]"},[e("img",{staticClass:"w-full h-full max-w-none",attrs:{src:n(419),alt:"notaries image"}})])}],r={name:"IndexPage",mixins:[n(146).a],data:function(){return{activeTab:"For Teams",component:"for-teams"}},mounted:function(){window.addEventListener("scroll",(function(){for(var t=document.querySelectorAll(".anime-section"),i=0;i<t.length;i++){var e=window.innerHeight;t[i].getBoundingClientRect().top<e-150?t[i].classList.add("sectionAnime"):t[i].classList.remove("sectionAnime")}}))}},l=(n(498),n(8)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"mb-[57px] lg:mb-[110.01px]"},[o("hero-banner",{attrs:{heading:"Sign and Notarise important documents online now","sub-heading":"Do you need a certified true copy of a document, a sworn affidavit or a credible witness for an agreement?","header-class":"lg:w-[506px] lg:text-[45px]",illustration:"signature.gif"},scopedSlots:t._u([{key:"bannerbtn",fn:function(){return[o("t-button",{attrs:{size:"md",width:"186px",padding:"0 20px 0 17px"},on:{click:function(e){return t.signIn()}}},[t._v("\n        Notarise a Document\n      ")]),t._v(" "),o("t-button",{attrs:{theme:"outline",size:"md",width:"186px"},on:{click:function(e){return t.signIn()}}},[t._v("\n        Get an Affidavit\n      ")])]},proxy:!0}])}),t._v(" "),o("section",{staticClass:"wrapper anime-section opacity-0"},[o("div",{staticClass:"flex flex-col items-center mt-[89.75px]"},[o("div",{staticClass:"flex flex-col items-center text-center"},[t._m(0),t._v(" "),o("p",{staticClass:"u-text-summary mt-[20px] mb-[8px] lg:mb-[18px] w-[342px] lg:w-[457px]"},[t._v("\n          Contact us to find out more about our notary solutions for your\n          personal or business needs.\n        ")]),t._v(" "),o("nuxt-link",{staticClass:"self-auto",attrs:{to:"/contact-sales"}},[o("t-button",{attrs:{theme:"primary",size:"md",icon:"right-arrow-white.svg","icon-style":{"margin-left":"34.9px",width:"7px"}}},[t._v("\n            Contact Sales\n          ")])],1)],1),t._v(" "),o("div",{staticClass:"w-auto lg:w-[1185px]"},[o("img",{attrs:{src:n(413),alt:""}})])])]),t._v(" "),o("section",{staticClass:"anime-section opacity-0basic-section m-0 px-[16px] lg:px-0 lg:m-0 lg:mt-[47px] flex flex-col lg:flex-row items-center lg:items-center lg:justify-center mt-5"},[o("div",{staticClass:"m-0 lg:m-0 lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 w-auto lg:w-[499px]"},[o("TextCard",{attrs:{header:"ToNote Basic","header-style":{"font-size":"23.5135px"},"main-style":{"font-size":"16px",margin:"31.49px 0 26px"},"footer-class":"mb-14"},scopedSlots:t._u([{key:"footer",fn:function(){return[o("div",{staticClass:"flex"},[o("t-button",{attrs:{size:"md",icon:"right-arrow-white.svg","icon-style":{"margin-left":"40px",width:"7px"}},on:{click:function(e){return t.signUp()}}},[t._v("\n              Start Free\n            ")]),t._v(" "),o("nuxt-link",{attrs:{to:"/solutions"}},[o("t-button",{attrs:{theme:"link",icon:"right-arrow-blue.svg",size:"md",padding:"0 0 0 17px","text-align":"left","icon-style":{"margin-left":"8.9px"}}},[o("span",{staticClass:"text-[14px]"},[t._v("Learn More")])])],1)],1)]},proxy:!0}])},[o("p",{staticClass:"textcard_body"},[t._v("\n          If you’ve ever had to notarise a document or get an affidavit for\n          personal or business use then our basic plan is for you. At no\n          recurring cost, you can have access to all nationally certified\n          notaries public on our platform.\n        ")])]),t._v(" "),o("ListItem",{attrs:{icon:"clock.svg","icon-style":{width:"36.8px",height:"34.5px"},item:"Our notaries public are available for virtual sessions between 9am and 6pm daily."}})],1),t._v(" "),o("div",{staticClass:"w-auto lg:w-[850px] 2xl:w-[905px] mt-[20px] lg:mt-0"},[o("img",{staticClass:"max-w-none w-full",attrs:{src:n(417),alt:"tonote basic mobile view"}})])]),t._v(" "),o("section",{staticClass:"wrapper notaries-section"},[o("div",{staticClass:"flex flex-col-reverse lg:flex-row items-center lg:justify-between mt-[42px] lg:mt-[94px]"},[t._m(1),t._v(" "),o("div",{staticClass:"w-full mt-[53px] lg:mt-0 max-w-[464px] 2xl:translate-x-[-5rem]"},[o("TextCard",{attrs:{header:"ToNote for Teams","header-style":{"font-size":"23.5135px","line-height":"98%","letter-spacing":"-0.015em"},"main-style":{"font-size":"16px","margin-bottom":"26px","line-height":"194.5%"}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("div",{staticClass:"flex"},[o("t-button",{attrs:{theme:"link",icon:"right-arrow-blue.svg","icon-style":{"margin-left":"38.9px"},padding:"0",width:"138.9px","text-align":"left"},on:{click:function(e){return t.signUp()}}},[o("span",{staticClass:"text-[14px]"},[t._v("Notarise Now")])])],1)]},proxy:!0}])},[o("div",[o("p",{staticClass:"mt-[27px] mb-[12px] text-[16px] lg:text-[20px] font-medium"},[t._v("\n              Set permissions and restrictions "),o("br"),t._v("\n              for teams\n            ")]),t._v(" "),o("p",{staticClass:"textcard_body"},[t._v("\n              Businesses sign and notarise documents every day. We understand\n              team dynamics and how roles and responsibilities are shared.\n              This is why you can set permissions and restrictions, selecting\n              which team members are able to prepare, review, sign, notarise\n              and share essential documentation.\n            ")])])])],1)]),t._v(" "),o("div",{staticClass:"flex flex-col lg:flex-row items-center lg:justify-between mt-[75px] lg:mt-[144px]"},[o("div",{staticClass:"w-full lg:w-[443px] 2xl:w-[622px] max-w-[443px]"},[o("TextCard",{attrs:{header:"ToNote for Business","header-style":{"font-size":"23.5135px","line-height":"98%","letter-spacing":"-0.015em","margin-bottom":"5px"},"main-style":{"font-size":"16px","margin-bottom":"26px","line-height":"194.5%"}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("div",{staticClass:"flex"},[o("t-button",{attrs:{theme:"link",icon:"right-arrow-blue.svg","icon-style":{"margin-left":"38.9px"},padding:"0",width:"138.9px","text-align":"left"},on:{click:function(e){return t.signUp()}}},[o("span",{staticClass:"text-[14px]"},[t._v("Notarise Now")])])],1)]},proxy:!0}])},[o("div",[o("p",{staticClass:"mt-[27px] mb-[12px] text-[16px] lg:text-[20px] font-medium"},[t._v("\n              We have automated the notary "),o("br"),t._v("\n              process\n            ")]),t._v(" "),o("p",{staticClass:"textcard_body"},[t._v("\n              Are you a business that has customers who need to notarise\n              documents from time to time? We have automated the notary\n              process so that your customers will now be able to validate\n              essential documents and swear affidavits in record time. Closing\n              transactions have never been this easy.\n            ")])])])],1),t._v(" "),t._m(2)])]),t._v(" "),o("section",{staticClass:"wrapper anime-section notaries-section opacity-0"},[o("div",{staticClass:"flex flex-col lg:flex-row items-center lg:justify-between mt-[42px] lg:mt-[195px]"},[t._m(3),t._v(" "),o("div",{staticClass:"w-full mt-[53px] lg:translate-x-[-6rem] lg:mt-0 lg:w-[443px] 2xl:w-[622px] max-w-[443px]"},[o("TextCard",{attrs:{header:"ToNote for Notaries","header-style":{"font-size":"23.5135px","line-height":"98%","letter-spacing":"-0.015em"},"main-style":{"font-size":"16px",margin:"31px 0 26px","line-height":"194.5%"}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("div",{staticClass:"flex"},[o("t-button",{attrs:{size:"md",icon:"right-arrow-white.svg",width:"130px","icon-style":{"margin-left":"32.9px",width:"7px"}},on:{click:function(e){return t.signUp()}}},[t._v("\n                Join Us\n              ")]),t._v(" "),o("nuxt-link",{attrs:{to:"/notaries-public"}},[o("t-button",{attrs:{theme:"link",icon:"right-arrow-blue.svg",size:"md",padding:"0 0 0 17px","text-align":"left","icon-style":{"margin-left":"8.9px"}}},[o("span",{staticClass:"text-[14px]"},[t._v("Learn More")])])],1)],1)]},proxy:!0}])},[o("p",{staticClass:"textcard_body"},[t._v("\n            We are building a community that recognises the notary public\n            service and encourages financial liberation through this service.\n            This means we appreciate the work that you do and the more you\n            notarise on our platform, the more you earn.\n          ")])])],1)])])],1)}),o,!1,null,"dc555afc",null);e.default=component.exports;installComponents(component,{TButton:n(81).default,HeroBanner:n(359).default,TextCard:n(345).default,ListItem:n(361).default})}}]);