"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{947:function(e,t,a){a.r(t);var r=a(439),c=a(791),i=a(243),n=a(184);t.default=function(e){var t=e.match,a=(0,c.useState)({}),o=(0,r.Z)(a,2),s=o[0],h=o[1],u=t.params.movieId;return(0,c.useEffect)((function(){i.Z.get("https://api.themoviedb.org/3/movie/{movie_id}",{params:{api_key:"0faef55576804b8824855a6bbe4c2da0"}}).then((function(e){h(e.data)})).catch((function(e){console.error("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u044f \u0434\u0435\u0442\u0430\u043b\u0435\u0439 \u0444\u0456\u043b\u044c\u043c\u0443:",e)}))}),[u]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:s.title}),(0,n.jsxs)("p",{children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",s.vote_average]}),(0,n.jsxs)("p",{children:["\u041e\u043f\u0438\u0441: ",s.overview]})]})}}}]);
//# sourceMappingURL=947.954e8e87.chunk.js.map