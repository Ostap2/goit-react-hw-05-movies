"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(e,a,t){t.r(a);var c=t(439),s=t(791),r=t(243),n=t(689),o=t(184);a.default=function(){var e=(0,n.UO)().movieId,a=(0,s.useState)([]),t=(0,c.Z)(a,2),i=t[0],l=t[1];return(0,s.useEffect)((function(){r.Z.get("".concat("https://api.themoviedb.org/3/movie","/").concat(e,"/credits"),{params:{api_key:"0faef55576804b8824855a6bbe4c2da0"}}).then((function(e){l(e.data.cast)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u0457 \u043f\u0440\u043e \u0430\u043a\u0442\u043e\u0440\u0456\u0432:",e)}))}),[e]),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"container-center"}),(0,o.jsx)("h2",{className:"cast",children:"Cast"}),(0,o.jsx)("ul",{className:"ul-actor",children:i.map((function(e){return(0,o.jsxs)("li",{className:"li-actor",children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name,className:"actor-photo"}),(0,o.jsx)("p",{className:"p-actor",children:e.name}),(0,o.jsx)("p",{children:e.character})]},e.id)}))})]})}}}]);
//# sourceMappingURL=247.9704fb03.chunk.js.map