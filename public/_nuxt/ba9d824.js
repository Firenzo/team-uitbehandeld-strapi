(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{285:function(t,e,n){var content=n(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(37).default)("4a446cba",content,!1,{sourceMap:!1})},305:function(t,e,n){"use strict";n(285)},306:function(t,e,n){var r=n(36)(!1);r.push([t.i,'*[data-v-26b64f16]{box-sizing:border-box;margin:0;padding:0}body[data-v-26b64f16]{font-family:sans-serif}body.noscroll[data-v-26b64f16]{overflow:hidden}div.container[data-v-26b64f16]{width:90%;max-width:1200px;margin:auto}a.button[data-v-26b64f16],button[data-v-26b64f16],input[type=submit][data-v-26b64f16]{display:block;background:#9cbe2f;padding:20px 0;width:200px;border-radius:5px;color:#fff;text-decoration:none;text-align:center;outline:none;border:none}a.button[data-v-26b64f16]:hover,button[data-v-26b64f16]:hover,input[type=submit][data-v-26b64f16]:hover{text-decoration:underline;cursor:pointer}input[type=email][data-v-26b64f16],input[type=tel][data-v-26b64f16],input[type=text][data-v-26b64f16],textarea[data-v-26b64f16]{padding:18px 10px;border-radius:5px;outline:none;border:1px solid #9cbe2f;box-shadow:none}h1[data-v-26b64f16]{font-size:36px;margin-bottom:20px}h1.lines[data-v-26b64f16]{font-size:28px;display:flex;justify-content:space-between;align-items:center;text-align:center}h1.lines[data-v-26b64f16]:after,h1.lines[data-v-26b64f16]:before{content:"";display:block;height:2px;background:#9cbe2f;flex-basis:calc(50% - 181px)}h2[data-v-26b64f16]{font-size:24px}h2.lines[data-v-26b64f16]{display:flex;justify-content:space-between;align-items:center;text-align:center}h2.lines[data-v-26b64f16]:after,h2.lines[data-v-26b64f16]:before{content:"";display:block;height:2px;background:#9cbe2f;flex-basis:calc(50% - 181px)}p[data-v-26b64f16]{font-size:15px;line-height:1.4em}main div.container[data-v-26b64f16]{max-width:400px}main div.container h1[data-v-26b64f16]{text-align:left;margin-bottom:50px}@media screen and (min-width:700px){main div.container[data-v-26b64f16]{max-width:1200px}}main div.container h2[data-v-26b64f16]{margin-bottom:0}@media screen and (min-width:700px){main div.container h2[data-v-26b64f16]{grid-column-start:1}}main div.container ul li.member[data-v-26b64f16]{list-style-type:none}main div.container ul li.member[data-v-26b64f16]:not(:first-of-type){margin-top:40px}@media screen and (min-width:700px){main div.container ul li.member[data-v-26b64f16]{display:grid;max-width:800px}main div.container ul li.member[data-v-26b64f16]:nth-of-type(2n){margin-left:auto}main div.container ul li.member[data-v-26b64f16]:not(:first-of-type){margin-top:85px}}@media screen and (min-width:700px){main div.container ul li.member[data-v-26b64f16]{grid-template-columns:fit-content(25%) fit-content(75%)}}main div.container ul li.member img[data-v-26b64f16]{width:100%;max-width:250px}main div.container ul li.member div.title-and-role[data-v-26b64f16]{grid-area:1/2;margin-left:15px}main div.container ul li.member div.title-and-role p.role[data-v-26b64f16]{font-weight:600;margin-bottom:5px}main div.container ul li.member div.title-and-role p.second-role[data-v-26b64f16]{margin-bottom:10px;color:#999}',""]),t.exports=r},325:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(40),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.params,n=t.$axios,e.next=3,n.$get("".concat("http://dev.teamuitbehandeld.nl","/team-members"));case 3:return r=e.sent,console.log(r),e.abrupt("return",{teamMembers:r});case 6:case"end":return e.stop()}}),e)})))()}}),d=(n(305),n(14)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"container"},[n("h1",[t._v("Wie zijn wij?")]),t._v(" "),n("ul",t._l(t.teamMembers,(function(e){return n("li",{key:e.id,staticClass:"member"},[n("div",{staticClass:"name-and-role"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.photo?""+t.$store.state.baseUrl+e.photo.url:""}})])]),t._v(" "),n("div",{staticClass:"title-and-role"},[n("h2",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticClass:"role"},[t._v(t._s(e.role))]),t._v(" "),n("p",{staticClass:"second-role"},[t._v(t._s(e.short_description))]),t._v(" "),n("p",{staticClass:"role-description"},[t._v("\n            "+t._s(e.long_description)+"\n          ")])])])})),0)])])}),[],!1,null,"26b64f16",null);e.default=component.exports}}]);