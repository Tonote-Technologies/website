(window.webpackJsonp=window.webpackJsonp||[]).push([[38,5,10,11,15,20,37],{342:function(t,e,n){var map={"./audit.svg":215,"./basic-plan.svg":216,"./business-plan.svg":217,"./clock.svg":218,"./dropdown-down.svg":219,"./idea.svg":220,"./income.svg":221,"./kyc.svg":222,"./mark-stamp.svg":223,"./mark.svg":224,"./market-place.svg":225,"./onboarding.svg":226,"./pro-plan.svg":227,"./security.svg":228,"./time.svg":229,"./world.svg":230};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=342},343:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("786166af",content,!0,{sourceMap:!1})},344:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("cc0aee1c",content,!0,{sourceMap:!1})},345:function(t,e,n){"use strict";n.r(e);var r={name:"TextCard",props:{icon:{type:String,default:""},iconStyle:{type:Object,default:function(){}},mainStyle:{type:Object,default:function(){}},headerStyle:{type:Object,default:function(){}},subStyle:{type:Object,default:function(){}},subheader:{type:String,default:""},header:{type:String,default:"",required:!0},footerClass:{type:String,default:""}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text_card flex flex-col"},[t.icon?r("div",{style:t.iconStyle},[r("img",{attrs:{src:n(342)("./"+t.icon)}})]):t._e(),t._v(" "),t.subheader?r("p",{staticClass:"textcard_subheader",style:t.subStyle},[t._v("\n    "+t._s(t.subheader)+"\n  ")]):t._e(),t._v(" "),t.header?r("h3",{staticClass:"textcard_header",class:[{"font-NeueHelvetica":!t.icon}],style:t.headerStyle},[t._v("\n    "+t._s(t.header)+"\n  ")]):t._e(),t._v(" "),r("div",{style:t.mainStyle},[t._t("default")],2),t._v(" "),r("footer",{class:t.footerClass},[t._t("footer")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(231).default})},347:function(t,e,n){"use strict";n.r(e);var r={name:"BannerAlert",props:{}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner_alert rounded-full bg-[#F3F3F3] flex justify-between items-center w-[259.2px] h-[24.05px] lg:w-[355.67px] lg:h-[33px]"},[t._m(0),t._v(" "),r("img",{staticClass:"mr-[8.6px] lg:mr-[11.08px]",attrs:{src:n(232),alt:""}})])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex items-center ml-[8.6px]"},[n("span",{staticClass:"w-[32.8px] h-[14.47px] lg:w-[45.01px] lg:h-[19.86px] bg-[#2FA36B] rounded-xl flex justify-center items-center text-[7.28767px] lg:text-[10px] text-white"},[t._v("New")]),t._v(" "),n("p",{staticClass:"text-[8.68195px] lg:text-[11.9132px] ml-[4.58px] lg:ml-[6.28px]"},[t._v("\n      You can now use ToNote for your business\n    ")])])}],!1,null,null,null);e.default=component.exports},348:function(t,e,n){var map={"./ToNoteSignatureAnimationEase.gif":349,"./signature.gif":350,"./stamp.gif":351,"./unlock.gif":352};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=348},349:function(t,e,n){t.exports=n.p+"img/ToNoteSignatureAnimationEase.992ddaa.gif"},350:function(t,e,n){t.exports=n.p+"img/signature.6b54f4a.gif"},351:function(t,e,n){t.exports=n.p+"img/stamp.1a5879c.gif"},352:function(t,e,n){t.exports=n.p+"img/unlock.ba749f5.gif"},353:function(t,e,n){"use strict";n(343)},354:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'.hero_left>h2{font-family:"NeueHelvetica"}',""]),r.locals={},t.exports=r},355:function(t,e,n){"use strict";n(344)},356:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".list_count[data-v-ad30e466]{width:20px;height:20px;background-color:#003bb3;font-weight:400;font-size:12px;line-height:366.5%;text-align:center;color:#fff}",""]),r.locals={},t.exports=r},359:function(t,e,n){"use strict";n.r(e);var r={name:"HeroBanner",props:{heading:{type:String,required:!0},subHeading:{type:String,required:!0},headerClass:{type:String,default:""},bodyClass:{type:String,default:""},heroLeftClass:{type:String,default:""},illustration:{type:String,default:"signature.gif"},bannerAlert:{type:Boolean,default:!0}}},o=(n(353),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero flex flex-col items-center lg:items-start lg:flex-row lg:justify-center mt-10 px-4 lg:px-0"},[r("div",{staticClass:"hero_left flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 lg:translate-y-[80px] max-w-[582px]",class:t.heroLeftClass},[t.bannerAlert?r("div",[r("banner-alert")],1):t._e(),t._v(" "),r("h2",{staticClass:"heroTitle leading-[98%] tracking-[-0.015em] text-[#03060B] text-[34.9808px] lg:text-[52.3502px] font-bold mt-[14px] mb-[23px] w-full text-center lg:text-left lg:w-[406px] max-w-[582px]",class:t.headerClass},[t._v("\n      "+t._s(t.heading)+"\n    ")]),t._v(" "),r("p",{staticClass:"heroBody w-full md:w-[323px] lg:w-[499px] 2xl:w-[582px] px-5 lg:px-0 lg:pr-14 text-[11.6603px] lg:text-[18px] text-[#626262] mb-[28px] leading-[170.5%] lg:leading-[193.5%] max-w-[582px]",class:t.bodyClass},[t._v("\n      "+t._s(t.subHeading)+"\n    ")]),t._v(" "),r("div",{staticClass:"btn_fadein flex space-y-1.5 lg:space-x-1.5 lg:space-y-0 flex-col lg:flex-row"},[t._t("bannerbtn")],2)]),t._v(" "),r("div",{staticClass:"hero_right lg:ml-[0px] mt-[29px] lg:mt-0 w-full md:w-[350px] lg:h-[620.25px] lg:w-[800px] xl:w-[827px] 2xl:w-[827px] overflow-hidden"},[r("img",{staticClass:"w-full h-full object-cover",attrs:{src:n(348)("./"+t.illustration),alt:"signature anime"}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerAlert:n(347).default})},361:function(t,e,n){"use strict";n.r(e);n(234);var r={name:"ListItem",props:{icon:{type:String,default:""},iconStyle:{type:Object,default:function(){}},count:{type:Number,default:0},item:{type:String,default:"help"}}},o=(n(355),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-start mt-[10px] lg:mt-0 lg:space-y-2"},[r("div",{staticClass:"mr-[14px] flex-shrink-0"},[t.icon?r("p",{staticClass:"mt-2 lg:mt-4"},[r("img",{style:t.iconStyle,attrs:{src:n(342)("./"+t.icon),alt:"list icon"}})]):r("p",{staticClass:"list_count flex justify-center items-center rounded-full mt-1.5 lg:mt-[16.5px]"},[t._v("\n      "+t._s(t.count)+"\n    ")])]),t._v(" "),r("div",{staticClass:"pt-[5px] lg:pt-0"},[r("p",{staticClass:"text-content-color text-[14px] lg:leading-[231%]",domProps:{innerHTML:t._s(t.item)}})])])}),[],!1,null,"ad30e466",null);e.default=component.exports},378:function(t,e,n){var content=n(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("aaec9146",content,!0,{sourceMap:!1})},412:function(t,e,n){t.exports=n.p+"img/business-form.e9e3b0e.png"},414:function(t,e,n){t.exports=n.p+"img/passport-bg.11f3194.png"},415:function(t,e,n){t.exports=n.p+"img/passport-illustration.f6980a9.png"},416:function(t,e,n){t.exports=n.p+"img/teams.0135db2.png"},423:function(t,e,n){"use strict";n(378)},424:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap);"]),r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;600;700;800&display=swap);"]),r.push([t.i,'.scroll-snap_y[data-v-93d292d4]{overscroll-behavior-y:contain;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory}.scroll-snap_y>div[data-v-93d292d4],.scroll-snap_y li[data-v-93d292d4]{scroll-snap-align:start}.banner_alert[data-v-93d292d4],.btn_fadein[data-v-93d292d4],.hero_right[data-v-93d292d4],.heroBody[data-v-93d292d4],.heroTitle[data-v-93d292d4],.logo_anime[data-v-93d292d4],.mobile_menu.active ul>li[data-v-93d292d4]:first-child,.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(2),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(3),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(4),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(5),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(6),.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(7),.nav__menu>li[data-v-93d292d4]:first-child,.nav__menu>li[data-v-93d292d4]:nth-child(2),.nav__menu>li[data-v-93d292d4]:nth-child(3),.nav__menu>li[data-v-93d292d4]:nth-child(4),.nav__menu>li[data-v-93d292d4]:nth-child(5),.nav__menu__buttons[data-v-93d292d4],.sectionAnime[data-v-93d292d4]{opacity:0;-webkit-animation-name:slide-right-data-v-93d292d4;animation-name:slide-right-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.logo_anime[data-v-93d292d4]{-webkit-animation-name:slide-right-data-v-93d292d4;animation-name:slide-right-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.2s;animation-delay:.2s}.mobile_menu.active ul>li[data-v-93d292d4]:first-child{-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(6){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.4s;animation-delay:1.4s}.mobile_menu.active ul>li[data-v-93d292d4]:nth-child(7){-webkit-animation-name:slide-right-data-v-93d292d4;animation-name:slide-right-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.6s;animation-delay:1.6s}.nav__menu>li[data-v-93d292d4]:first-child{-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.4s;animation-delay:.4s}.nav__menu>li[data-v-93d292d4]:nth-child(2){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.6s;animation-delay:.6s}.nav__menu>li[data-v-93d292d4]:nth-child(3){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.8s;animation-delay:.8s}.nav__menu>li[data-v-93d292d4]:nth-child(4){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1s;animation-delay:1s}.nav__menu>li[data-v-93d292d4]:nth-child(5){-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.nav__menu__buttons[data-v-93d292d4]{-webkit-animation-name:fade-in-data-v-93d292d4;animation-name:fade-in-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:1.2s;animation-delay:1.2s}.heroTitle[data-v-93d292d4]{-webkit-animation-delay:.5s;animation-delay:.5s}.heroBody[data-v-93d292d4],.heroTitle[data-v-93d292d4]{-webkit-animation-name:text-slide-up-data-v-93d292d4;animation-name:text-slide-up-data-v-93d292d4;-webkit-animation-duration:1s;animation-duration:1s}.heroBody[data-v-93d292d4]{-webkit-animation-delay:.7s;animation-delay:.7s}.hero_right[data-v-93d292d4]{-webkit-animation-name:slide-left-data-v-93d292d4;animation-name:slide-left-data-v-93d292d4}.btn_fadein[data-v-93d292d4],.hero_right[data-v-93d292d4]{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-delay:.8s;animation-delay:.8s}.btn_fadein[data-v-93d292d4]{-webkit-animation-name:fade-in-data-v-93d292d4;animation-name:fade-in-data-v-93d292d4}.sectionAnime[data-v-93d292d4]{-webkit-animation-name:section-slide-up-data-v-93d292d4;animation-name:section-slide-up-data-v-93d292d4;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes slide-right-data-v-93d292d4{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-right-data-v-93d292d4{0%{opacity:0;transform:translateX(-10px);-webkit-transform:translateX(-10px);-moz-transform:translateX(-10px);-ms-transform:translateX(-10px);-o-transform:translateX(-10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes slide-left-data-v-93d292d4{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@keyframes slide-left-data-v-93d292d4{0%{opacity:0;transform:translateX(10px);-webkit-transform:translateX(10px);-moz-transform:translateX(10px);-ms-transform:translateX(10px);-o-transform:translateX(10px)}to{opacity:1;transform:translateX(0);-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);-o-transform:translateX(0)}}@-webkit-keyframes section-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes section-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(40px);-webkit-transform:translateY(40px);-moz-transform:translateY(40px);-ms-transform:translateY(40px);-o-transform:translateY(40px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes text-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@keyframes text-slide-up-data-v-93d292d4{0%{opacity:0;transform:translateY(10px);-webkit-transform:translateY(10px);-moz-transform:translateY(10px);-ms-transform:translateY(10px);-o-transform:translateY(10px)}to{opacity:1;transform:translateY(0);-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0)}}@-webkit-keyframes fade-in-data-v-93d292d4{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}@keyframes fade-in-data-v-93d292d4{0%{opacity:0;transform:scale(.9);-webkit-transform:scale(.9);-moz-transform:scale(.9);-ms-transform:scale(.9);-o-transform:scale(.9)}to{opacity:1;transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1)}}*[data-v-93d292d4]{box-sizing:border-box;font-family:"Poppins",sans-serif}body[data-v-93d292d4]{position:relative}body[data-v-93d292d4],html[data-v-93d292d4]{overflow-x:hidden}html[data-v-93d292d4]{scroll-behavior:smooth}.wrapper[data-v-93d292d4]{padding-inline:1rem;max-width:1440px;margin-inline:auto}@media(min-width:1024px){.wrapper[data-v-93d292d4]{padding-inline:80px}}@media(min-width:1380px){.wrapper[data-v-93d292d4]{padding-inline:133px}}@media(min-width:1600px){.wrapper[data-v-93d292d4]{padding-inline:1rem}}.textcard_header[data-v-93d292d4]{font-family:"NeueHelvetica";font-weight:700;line-height:98%;color:#03060b}.textcard_body[data-v-93d292d4]{font-weight:400;line-height:170.5%;color:#626262}.textcard_subheader[data-v-93d292d4]{font-weight:400;font-size:18px;line-height:162.5%;letter-spacing:.305em;color:#626262;margin-bottom:23px}.textcard_preamble[data-v-93d292d4]{margin-top:17px;font-weight:700;font-size:16px;line-height:231%;color:#626262}.page-header[data-v-93d292d4]{font-weight:700;font-size:52.3502px;line-height:98%;letter-spacing:-.015em;color:#03060b}.c-signupCard[data-v-93d292d4]{background:#003bb3;border-radius:14px;padding:19px 24px;width:374px}@media(max-width:768px){.c-signupCard[data-v-93d292d4]{width:auto}}.c-signupCard__price[data-v-93d292d4]{font-weight:700;font-size:43.4691px;line-height:121.5%;letter-spacing:-.015em;color:#fff}.c-signupCard__service[data-v-93d292d4]{font-size:16px;line-height:193.5%;color:#fff;margin-bottom:14px}',""]),r.locals={},t.exports=r},450:function(t,e,n){"use strict";n.r(e),n.d(e,"basicFeatures",(function(){return r})),n.d(e,"benefitsGroupA",(function(){return o})),n.d(e,"benefitsGroupB",(function(){return l})),n.d(e,"benefitsGroupC",(function(){return d})),n.d(e,"benefitsGroupD",(function(){return m})),n.d(e,"benefitsGroupE",(function(){return c}));var r=["e-sign and share documents","Get certified true copies of essential documents such as your passport, birth certificate or educational certificate, virtually","Notarise transaction closing documents that require a notary public as a witness","Get an affidavit for change of name, address or approval for a minor to travel"],o=["Sign up for free or choose a plan tailored to your needs","Create custom e-signatures","Get affidavits and notarise documents online in <br/> minutes! No templates required","Bank Grade Security","24/7 web access"],l=["E-notarisation is 5* faster than traditional notarisation at 55% of the overall cost","Access to online tutorials on how to use the platform","Transaction history and audit trails","Access to customer support via email and chat"],d=["Personalised platform branding","E-sign and share up to 50 documents with your customers monthly","Set permission levels for signers"],m=["Enable seamless documentation management processes","Access to dedicated customer success manager","API coming soon’"],c=["Custom plans tailored to your business notary needs","E-sign and share unlimited number of documents with your customers monthly’"]},451:function(t,e,n){var content=n(493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("d985ca02",content,!0,{sourceMap:!1})},470:function(t,e,n){"use strict";n.r(e);var r={name:"SignupCard",mixins:[n(146).a]},o=(n(423),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-signupCard"},[t._m(0),t._v(" "),n("t-button",{attrs:{theme:"secondary","text-color":"#003BB3",size:"full"},on:{click:function(e){return t.signUp()}}},[t._v("\n    Sign Up\n  ")])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col lg:flex-row justify-between"},[n("div",{staticClass:"flex flex-col items-center"},[n("h3",{staticClass:"c-signupCard__price"},[t._v("N8000")]),t._v(" "),n("p",{staticClass:"c-signupCard__service"},[t._v("Per Notary Session")])]),t._v(" "),n("div",{staticClass:"flex flex-col items-center"},[n("h3",{staticClass:"c-signupCard__price"},[t._v("N3500")]),t._v(" "),n("p",{staticClass:"c-signupCard__service"},[t._v("Per Affidavit")])])])}],!1,null,"93d292d4",null);e.default=component.exports;installComponents(component,{TButton:n(81).default})},492:function(t,e,n){"use strict";n(451)},493:function(t,e,n){var r=n(21),o=n(150),l=n(414),d=r((function(i){return i[1]})),m=o(l);d.push([t.i,".passport-bg{background:url("+m+");background-repeat:no-repeat;background-size:contain;background-position:50%;filter:drop-shadow(0 0 10px #ccc)}.passport-bg>img{transform:translate(0)}@media(min-width:1024px){.passport-bg>img{transform:translate(140px,70px)}}",""]),d.locals={},t.exports=d},515:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-auto mt-[40px] lg:mt-0 h-[350px] lg:w-full lg:h-[498.85px] passport-bg"},[e("img",{staticClass:"w-[325px] h-[240px] lg:w-[460px] lg:h-[319.08px] object-contain",attrs:{src:n(415),alt:"signed document"}})])}],o=n(450),l={name:"SolutionsPage",mixins:[n(146).a],data:function(){return{basicFeatures:o.basicFeatures,benefitsGroupA:o.benefitsGroupA,benefitsGroupB:o.benefitsGroupB,benefitsGroupC:o.benefitsGroupC,benefitsGroupD:o.benefitsGroupD,benefitsGroupE:o.benefitsGroupE}}},d=(n(492),n(8)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("main",{staticClass:"mb-[84px] lg:mb-[66px]"},[r("hero-banner",{attrs:{heading:"Our Solutions","sub-heading":"Our goal is to create a world where every document shared is secure and can be trusted. The first step towards this is to help people and teams sign, notarise and collaborate on documents virtually",illustration:"unlock.gif"},scopedSlots:t._u([{key:"bannerbtn",fn:function(){return[r("t-button",{attrs:{size:"md",width:"186px",padding:"0 20px 0 17px"},on:{click:function(e){return t.signIn()}}},[t._v("\n          Notarise a Document\n        ")]),t._v(" "),r("t-button",{attrs:{theme:"outline",size:"md",width:"186px"},on:{click:function(e){return t.signIn()}}},[t._v("\n          Get an Affidavit\n        ")])]},proxy:!0}])}),t._v(" "),r("section",{staticClass:"wrapper"},[r("div",{staticClass:"flex flex-col lg:flex-row items-center lg:justify-between mt-[31px] lg:items-start",attrs:{id:"individual"}},[r("div",{staticClass:"w-full lg:w-[484px] 2xl:w-[582px]"},[r("text-card",{attrs:{header:"Get certified true copies of essential documents",subheader:"ToNote Basic","sub-style":{"font-size":"16px","letter-spacing":"0"},"main-style":{"font-size":"16px",margin:"24px 0 30px","line-height":"170.5%"},"header-style":{"font-size":"23.5135px","letter-spacing":"-0.015em","line-height":"121%",width:"100%","max-width":"296px"}},scopedSlots:t._u([{key:"footer",fn:function(){return[r("div",{staticClass:"mb-[11px]"},t._l(t.basicFeatures,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1),t._v(" "),r("t-button",{attrs:{size:"md",width:"186px",padding:"0 20px 0 17px"},on:{click:function(e){return t.signUp()}}},[t._v("\n                Notarise a Document\n              ")])]},proxy:!0}])},[r("p",{staticClass:"textcard_body"},[t._v("\n              If you have ever had to notarise a document or get an affidavit\n              for personal or business use then our basic plan is for you. At\n              no recurring cost, you can have access to all nationally\n              certified notaries public on our platform.\n            ")])])],1),t._v(" "),r("div",{staticClass:"w-auto lg:w-[693.22px] relative lg:mt-4"},[t._m(0),t._v(" "),r("div",{staticClass:"relative lg:absolute mt-[-50px] lg:mt-0 lg:bottom-[-130px] lg:left-[130px]"},[r("signup-card")],1)])]),t._v(" "),r("div",{staticClass:"mt-[60px] lg:mt-[117px]"},[r("h3",{staticClass:"textcard_subheader lg:!mb-0"},[t._v("BENEFITS")]),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row mt-[16px] lg:items-start lg:justify-between"},[r("div",{staticClass:"w-full lg:w-[466px] xl:w-[498px] 2xl:w-[622px] lg:mr-[140px]"},t._l(t.benefitsGroupA,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1),t._v(" "),r("div",{staticClass:"w-auto lg:w-[463px] xl:w-[498px] 2xl:w-[622px]"},t._l(t.benefitsGroupB,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1)])]),t._v(" "),r("div",{staticClass:"flex flex-col-reverse lg:flex-row items-start lg:justify-between mt-[66px] lg:mt-[95px]",attrs:{id:"teams"}},[r("div",{staticClass:"w-auto mt-[53pt] lg:mt-0 lg:w-[466px] relative lg:mt-[-21px]"},[r("img",{staticClass:"w-full h-full max-w-none",attrs:{src:n(416),alt:"signed document"}}),t._v(" "),r("div",{staticClass:"relative lg:absolute mt-[35px] lg:mt-0 lg:top-[326px] lg:left-0"},[r("signup-card")],1)]),t._v(" "),r("div",{staticClass:"w-full lg:w-[433px] xl:w-[500px] 2xl:w-[582px]"},[r("text-card",{attrs:{header:"We understand team dynamics and how roles and responsibilities are shared.",subheader:"ToNote for Teams","sub-style":{"font-size":"16px","letter-spacing":"0"},"main-style":{"font-size":"16px",margin:"16px 0 13px","line-height":"170.5%"},"header-style":{"font-size":"23.5135px","letter-spacing":"-0.015em","line-height":"121%"}},scopedSlots:t._u([{key:"footer",fn:function(){return[r("t-button",{attrs:{size:"md",width:"186px"},on:{click:function(e){return t.signUp()}}},[t._v("\n                Get PRO Now\n              ")])]},proxy:!0}])},[r("p",{staticClass:"textcard_body"},[t._v("\n              Businesses sign and notarise documents every day and need to\n              collaboratively manage agreements to close transactions.\n              "),r("br"),r("br"),t._v("\n              We understand team dynamics and how roles and responsibilities\n              are shared. "),r("br"),r("br"),t._v("\n              This is why you can set permissionsand restrictions, selecting\n              which team members are able to prepare, review, sign, notarise\n              and share essential documents.\n            ")])])],1)]),t._v(" "),r("div",{staticClass:"mt-[60px] lg:mt-[100px]"},[r("h3",{staticClass:"textcard_subheader lg:!mb-0 mt-[42px] lg:mt-[51px]"},[t._v("\n          BENEFITS\n        ")]),t._v(" "),r("p",{staticClass:"textcard_preamble"},[t._v("All ToNote Basic features and:")]),t._v(" "),r("div",{staticClass:"flex flex-col lg:flex-row lg:items-start lg:justify-between"},[r("div",{staticClass:"w-full lg:w-[466px] xl:w-[498px] 2xl:w-[622px] lg:mr-[140px]"},t._l(t.benefitsGroupC,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1),t._v(" "),r("div",{staticClass:"w-auto lg:w-[463px] xl:w-[498px] 2xl:w-[622px]"},t._l(t.benefitsGroupD,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1)])])]),t._v(" "),r("div",{staticClass:"mt-[50px] mb-[36px] lg:m-0 lg:mt-[115px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center px-4",attrs:{id:"business"}},[r("div",{staticClass:"mb-[36px] lg:m-0 lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 w-auto lg:w-[526px]"},[r("text-card",{attrs:{header:"Closing transactions has never been this easy.",subheader:"ToNote for Businesses","main-style":{"font-size":"16px",margin:"26px 0 26px","line-height":"170.5%"},"sub-style":{"font-size":"16px","letter-spacing":"0"},"header-style":{"font-size":"23.5135px","letter-spacing":"-0.015em","line-height":"121%",width:"auto","max-width":"377px"}},scopedSlots:t._u([{key:"footer",fn:function(){return[r("nuxt-link",{attrs:{to:"/contact-sales"}},[r("t-button",{attrs:{size:"md",width:"186px"}},[t._v(" Talk to Sales ")])],1)]},proxy:!0}])},[r("p",{staticClass:"textcard_body"},[t._v("\n            Are you a business that frequently signs and notarises documents\n            or has customers who need to notarise documents from time to time?\n            We have automated the notary process so that your customers will\n            now be able to certify essential documents and swear affidavits in\n            record time. Closing transactions has never been this easy.\n          ")])]),t._v(" "),r("div",{staticClass:"hidden lg:block lg:mt-[40px]"},[r("h3",{staticClass:"textcard_subheader lg:!mb-0"},[t._v("BENEFITS")]),t._v(" "),r("p",{staticClass:"textcard_preamble"},[t._v("All ToNote for Teams features and:")]),t._v(" "),r("div",{staticClass:"w-full lg:w-[439px] 2xl:w-[622px] lg:mr-[140px] max-w-[466px]"},t._l(t.benefitsGroupE,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1)])],1),t._v(" "),r("div",{staticClass:"w-screen lg:w-[54%] 2xl:w-[870px] relative mt-[-54px]"},[r("img",{staticClass:"w-full h-full max-w-none mt-[20pt] lg:mt-0",attrs:{src:n(412),alt:"backgroung image "}}),t._v(" "),r("div",{staticClass:"hidden lg:block absolute lg:top-[405px] 2xl:top-[450px] lg:right-[75px] 2xl:right-[85px]"},[r("signup-card")],1)])]),t._v(" "),r("div",{staticClass:"block lg:hidden wrapper"},[r("div",{},[r("h3",{staticClass:"textcard_subheader lg:!mb-0"},[t._v("BENEFITS")]),t._v(" "),r("p",{staticClass:"textcard_preamble"},[t._v("All ToNote for Teams features and:")]),t._v(" "),r("div",{staticClass:"w-full lg:w-[439px] 2xl:w-[622px] lg:mr-[140px]"},t._l(t.benefitsGroupE,(function(t,e){return r("list-item",{key:e,attrs:{item:t,icon:"mark.svg","icon-style":{width:"13.9px","max-width":"unset"}}})})),1)]),t._v(" "),r("div",{staticClass:"mt-[20px]"},[r("signup-card")],1)])],1)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{TButton:n(81).default,HeroBanner:n(359).default,ListItem:n(361).default,TextCard:n(345).default,SignupCard:n(470).default})}}]);