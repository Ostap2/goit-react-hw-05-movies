"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,t,a){a.r(t);var s=a(439),c=a(791),o=a(243),n=a(689),i=a(87),r=a(184),l="https://api.themoviedb.org/3/movie",h="0faef55576804b8824855a6bbe4c2da0";t.default=function(){var e=(0,n.UO)().movieId,t=(0,c.useState)({}),a=(0,s.Z)(t,2),d=a[0],m=a[1],u=(0,c.useState)(""),p=(0,s.Z)(u,2),f=p[0],b=p[1];return(0,c.useEffect)((function(){o.Z.get("".concat(l,"/").concat(e),{params:{api_key:h}}).then((function(e){m(e.data)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0444\u0456\u043b\u044c\u043c\u0443:",e)})),o.Z.get("".concat(l,"/").concat(e,"/images"),{params:{api_key:h}}).then((function(e){e.data.posters&&e.data.posters.length>0&&b("https://image.tmdb.org/t/p/w500".concat(e.data.posters[0].file_path))})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0444\u0456\u043b\u044c\u043c\u0443:",e)}))}),[e]),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{className:"go-back",children:(0,r.jsx)("a",{href:"/",children:"go back"})}),(0,r.jsx)("h1",{children:d.title}),(0,r.jsx)("img",{src:f,alt:d.title,className:"img-det"}),(0,r.jsxs)("p",{className:"p-rating",children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",d.vote_average]}),(0,r.jsxs)("p",{className:"descri",children:["\u041e\u043f\u0438\u0441: ",d.overview]}),(0,r.jsxs)("ul",{className:"ul-button",children:[(0,r.jsx)("li",{className:"li-button",children:(0,r.jsx)(i.rU,{to:"/movies/".concat(e,"/cast"),className:"button-load-cast",children:"Cast"})}),(0,r.jsx)("li",{className:"li-button",children:(0,r.jsx)(i.rU,{to:"/movies/".concat(e,"/reviews"),className:"button-load-Reviews",children:"Reaviews"})})]})]})}}}]);
//# sourceMappingURL=947.e7db3338.chunk.js.map