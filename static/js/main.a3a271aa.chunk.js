(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),c=n(6),s=n.n(c),o=n(7),l=n(8),r=n(11),d=n(10),u=n(9),b=n.n(u),j=n(0),k=function(t){var e=t.children;return Object(j.jsx)("div",{className:b.a.Section,children:e})},h=n(2),m=n.n(h),f=function(t){var e=t.onBtnLike,n=t.onBtnNeutral,i=t.onBtnBad;return Object(j.jsxs)("ul",{className:m.a.List,children:[Object(j.jsx)("li",{className:m.a.ElemList,children:Object(j.jsx)("button",{className:m.a.BtnList,onClick:e,children:"Good"})}),Object(j.jsx)("li",{className:m.a.ElemList,children:Object(j.jsx)("button",{className:m.a.BtnList,onClick:n,children:"Neutral"})}),Object(j.jsx)("li",{className:m.a.ElemList,children:Object(j.jsx)("button",{className:m.a.BtnList,onClick:i,children:"Bad"})})]})},x=n(5),L=n.n(x),O=function(t){var e=t.onClickLike,n=t.onClickNeutral,i=t.onClickBad;return Object(j.jsxs)("div",{className:L.a.Container,children:[Object(j.jsx)("h2",{className:L.a.Title,children:"Please leave feedback"}),Object(j.jsx)(f,{onBtnLike:e,onBtnNeutral:n,onBtnBad:i})]})},_=n(3),N=n.n(_),v=function(t){var e=t.good,n=t.neutral,i=t.bad,a=t.total,c=t.positive;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:N.a.Title,children:"Statistics"}),0===e&&0===n&&0===i?Object(j.jsx)("p",{children:"No feedback given"}):Object(j.jsxs)("ul",{className:N.a.List,children:[Object(j.jsxs)("li",{className:N.a.ElemList,children:["Good: ",e]}),Object(j.jsxs)("li",{className:N.a.ElemList,children:["Neutral: ",n]}),Object(j.jsxs)("li",{className:N.a.ElemList,children:["Bad: ",i]}),Object(j.jsxs)("li",{className:N.a.ElemList,children:["Total: ",a]}),Object(j.jsxs)("li",{className:N.a.ElemList,children:["Positive feedback: ",c,"%"]})]})]})},B=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0,total:0,positive:0},t.onClickLike=function(){t.setState((function(t){return{good:t.good+1}})),t.countTotalFeedback(),t.countPositiveFeedbackPercentage()},t.onClickNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}})),t.countTotalFeedback(),t.state.good>=1&&t.countPositiveFeedbackPercentage()},t.onClickBad=function(){t.setState((function(t){return{bad:t.bad+1}})),t.countTotalFeedback(),t.state.good>=1&&t.countPositiveFeedbackPercentage()},t.countTotalFeedback=function(){t.setState((function(t){return{total:t.total+1}}))},t.countPositiveFeedbackPercentage=function(){t.setState((function(t){return{positive:t.good/t.total*100}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(k,{children:[Object(j.jsx)(O,{onClickLike:this.onClickLike,onClickNeutral:this.onClickNeutral,onClickBad:this.onClickBad}),Object(j.jsx)(v,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positive:this.state.positive})]})}}]),n}(a.a.Component);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={List:"Feedback-btn-list_List__2xif2",ElemList:"Feedback-btn-list_ElemList__3fbZ5",BtnList:"Feedback-btn-list_BtnList__2rqe4"}},3:function(t,e,n){t.exports={Title:"Statistics_Title__3e_nr",List:"Statistics_List__3eR4u",ElemList:"Statistics_ElemList__2oSai"}},5:function(t,e,n){t.exports={Container:"Feedback_Container__1UEML",Title:"Feedback_Title__1vpkf"}},9:function(t,e,n){t.exports={Section:"Section_Section__3PdkP"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a3a271aa.chunk.js.map