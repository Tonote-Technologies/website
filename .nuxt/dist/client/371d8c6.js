(window.webpackJsonp=window.webpackJsonp||[]).push([[10,5],{343:function(t,e,l){var content=l(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(22).default)("786166af",content,!0,{sourceMap:!1})},347:function(t,e,l){"use strict";l.r(e);var n={name:"BannerAlert",props:{}},r=l(8),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner_alert rounded-full bg-[#F3F3F3] flex justify-between items-center w-[259.2px] h-[24.05px] lg:w-[355.67px] lg:h-[33px]"},[t._m(0),t._v(" "),n("img",{staticClass:"mr-[8.6px] lg:mr-[11.08px]",attrs:{src:l(232),alt:""}})])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex items-center ml-[8.6px]"},[l("span",{staticClass:"w-[32.8px] h-[14.47px] lg:w-[45.01px] lg:h-[19.86px] bg-[#2FA36B] rounded-xl flex justify-center items-center text-[7.28767px] lg:text-[10px] text-white"},[t._v("New")]),t._v(" "),l("p",{staticClass:"text-[8.68195px] lg:text-[11.9132px] ml-[4.58px] lg:ml-[6.28px]"},[t._v("\n      You can now use ToNote for your business\n    ")])])}],!1,null,null,null);e.default=component.exports},348:function(t,e,l){var map={"./ToNoteSignatureAnimationEase.gif":349,"./signature.gif":350,"./stamp.gif":351,"./unlock.gif":352};function n(t){var e=r(t);return l(e)}function r(t){if(!l.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=348},349:function(t,e,l){t.exports=l.p+"img/ToNoteSignatureAnimationEase.992ddaa.gif"},350:function(t,e,l){t.exports=l.p+"img/signature.6b54f4a.gif"},351:function(t,e,l){t.exports=l.p+"img/stamp.1a5879c.gif"},352:function(t,e,l){t.exports=l.p+"img/unlock.ba749f5.gif"},353:function(t,e,l){"use strict";l(343)},354:function(t,e,l){var n=l(21)((function(i){return i[1]}));n.push([t.i,'.hero_left>h2{font-family:"NeueHelvetica"}',""]),n.locals={},t.exports=n},359:function(t,e,l){"use strict";l.r(e);var n={name:"HeroBanner",props:{heading:{type:String,required:!0},subHeading:{type:String,required:!0},headerClass:{type:String,default:""},bodyClass:{type:String,default:""},heroLeftClass:{type:String,default:""},illustration:{type:String,default:"signature.gif"},bannerAlert:{type:Boolean,default:!0}}},r=(l(353),l(8)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero flex flex-col items-center lg:items-start lg:flex-row lg:justify-center mt-10 px-4 lg:px-0"},[n("div",{staticClass:"hero_left flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[80px] xl:ml-[133px] 2xl:ml-0 lg:translate-y-[80px] max-w-[582px]",class:t.heroLeftClass},[t.bannerAlert?n("div",[n("banner-alert")],1):t._e(),t._v(" "),n("h2",{staticClass:"heroTitle leading-[98%] tracking-[-0.015em] text-[#03060B] text-[34.9808px] lg:text-[52.3502px] font-bold mt-[14px] mb-[23px] w-full text-center lg:text-left lg:w-[406px] max-w-[582px]",class:t.headerClass},[t._v("\n      "+t._s(t.heading)+"\n    ")]),t._v(" "),n("p",{staticClass:"heroBody w-full md:w-[323px] lg:w-[499px] 2xl:w-[582px] px-5 lg:px-0 lg:pr-14 text-[11.6603px] lg:text-[18px] text-[#626262] mb-[28px] leading-[170.5%] lg:leading-[193.5%] max-w-[582px]",class:t.bodyClass},[t._v("\n      "+t._s(t.subHeading)+"\n    ")]),t._v(" "),n("div",{staticClass:"btn_fadein flex space-y-1.5 lg:space-x-1.5 lg:space-y-0 flex-col lg:flex-row"},[t._t("bannerbtn")],2)]),t._v(" "),n("div",{staticClass:"hero_right lg:ml-[0px] mt-[29px] lg:mt-0 w-full md:w-[350px] lg:h-[620.25px] lg:w-[800px] xl:w-[827px] 2xl:w-[827px] overflow-hidden"},[n("img",{staticClass:"w-full h-full object-cover",attrs:{src:l(348)("./"+t.illustration),alt:"signature anime"}})])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerAlert:l(347).default})}}]);