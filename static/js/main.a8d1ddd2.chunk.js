(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=(n(13),n(4)),s=n(5),d=n(6),l=n(8),b=n(7),j=n(0),u=function(e){var t=e.good,n=e.bad,c=e.neutral,a=e.total,r=e.positivePercentage;return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["good: ",t]}),Object(j.jsxs)("li",{children:["neutral: ",c]}),Object(j.jsxs)("li",{children:["bad: ",n]}),Object(j.jsxs)("li",{children:["total: ",a," "]}),Object(j.jsxs)("li",{children:["percent: ",r,"%"]})]})})},h=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:n,children:e})},e)}))})})},O=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:t}),n]})},x=function(e){var t=e.message;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("p",{children:t})})},v=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.target.textContent;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(j.jsxs)("div",{children:[Object(j.jsx)(O,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(j.jsx)(O,{title:"Statistics",children:this.countTotalFeedback()?Object(j.jsx)(u,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(j.jsx)(x,{message:"No feedback given"})})]})}}]),n}(c.Component);i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8d1ddd2.chunk.js.map