(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),r=n.n(i),u=(n(13),n(1)),c=n(2),l=n(3),o=n(4),m=(n(14),n(15),function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("main",null,this.props.children))}}]),n}(s.a.Component)),d=n(5),w=(n(16),n(17),n(18),n(19),function(e){var t=["AnswerItem"];return e.answerState&&t.push(e.answerState),s.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClickHandler(e.answer.id)}},e.answer.text)}),h=function(e){return s.a.createElement("ul",{className:"AnswerList"},e.answers.map((function(t,n){return s.a.createElement(w,{answer:t,key:n,onAnswerClickHandler:e.onAnswerClickHandler,answerState:e.answerState?e.answerState[t.id]:null})})))},f=function(e){return s.a.createElement("div",{className:"ActiveQuiz"},s.a.createElement("p",{className:"Question"},s.a.createElement("span",null,s.a.createElement("strong",null,"2.\xa0"),e.question),s.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),s.a.createElement("ul",null,s.a.createElement(h,{answers:e.answers,onAnswerClickHandler:e.onAnswerClickHandler,answerState:e.answerState})))},v=(n(20),function(e){var t=Object.keys(e.result).reduce((function(t,n){return"succsess"==e.result[n]&&t++,t}),0);return s.a.createElement("div",{className:"FinishedQuiz"},s.a.createElement("ul",null,e.quiz.map((function(t,n){return s.a.createElement("li",{key:n},s.a.createElement("strong",null,n+1,".\xa0"),t.question,"succsess"===e.result[t.id]?s.a.createElement("div",{className:"icon-succsess"},"\u2714"):s.a.createElement("div",{className:"icon-error"},"\u2718"))})),s.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),s.a.createElement("div",{className:"btn"},s.a.createElement("button",{onClick:e.onReturn},"\u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"))))}),E=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={result:{},activeQuistion:0,answerState:null,isFinished:!1,quiz:[{question:"\u041a\u0430\u043a\u043e\u0433\u043e \u0446\u0432\u0435\u0442\u0430 \u043d\u0435\u0431\u043e",rightAnwserId:2,id:1,answers:[{text:"\u0442\u0435\u043c\u043d\u043e\u0435",id:1},{text:"\u0441\u0438\u043d\u0438\u0435",id:2},{text:"\u0437\u0435\u043b\u0435\u043d\u044b\u0435",id:3},{text:"\u0434\u0440\u0443\u0433\u043e\u0435",id:4}]},{question:"2+2*2?",rightAnwserId:2,id:2,answers:[{text:"44",id:1},{text:"6",id:2},{text:"8",id:3},{text:"\u0434\u0430",id:4}]},{question:"\u0422\u0435\u0431\u0435 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u0438\u0441\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b?",rightAnwserId:2,id:3,answers:[{text:"\u0434\u0430",id:1},{text:"\u043d\u0435\u0442",id:2}]}]},e.onAnswerClickHandler=function(t){e.state.answerState;var n=e.state.quiz[e.state.activeQuistion],a=e.state.result;if(n.rightAnwserId===t)if(a[n.id]||(a[n.id]="succsess"),e.isQuizFinished())console.log("finished"),e.setState({answerState:Object(d.a)({},t,"succsess"),isFinished:!0});else{e.setState({answerState:Object(d.a)({},t,"succsess"),result:a});var s=window.setTimeout((function(){e.setState({activeQuistion:e.state.activeQuistion+1,answerState:null}),window.clearTimeout(s)}),500)}else a[n.id]="error",e.setState({answerState:Object(d.a)({},t,"error"),result:a})},e.onReturn=function(){e.setState({result:{},activeQuistion:0,answerState:null,isFinished:!1})},e}return Object(c.a)(n,[{key:"isQuizFinished",value:function(){return this.state.activeQuistion+1===this.state.quiz.length}},{key:"render",value:function(){return s.a.createElement("div",{className:"Quiz"},s.a.createElement("div",{className:"QuizWrapper"},s.a.createElement("h1",null,"\u041f\u0440\u043e\u0439\u0434\u0438\u0442\u0435 \u043e\u043f\u0440\u043e\u0441 "),this.state.isFinished?s.a.createElement(v,{result:this.state.result,quiz:this.state.quiz,onReturn:this.onReturn}):s.a.createElement(f,{answers:this.state.quiz[this.state.activeQuistion].answers,question:this.state.quiz[this.state.activeQuistion].question,onAnswerClickHandler:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuistion+1,answerState:this.state.answerState})))}}]),n}(s.a.Component),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={},e}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(m,null,s.a.createElement(E,null)))}}]),n}(s.a.Component);r.a.render(s.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.511a5a61.chunk.js.map