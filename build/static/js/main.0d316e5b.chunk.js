(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports='.'+a.p+"static/media/burger-logo.b8503d26.png"},,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(15),a(1)),i=a(2),o=a(4),u=a(3),d=function(e){return e.children},m=(a(16),a(17),a(18),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children))}),p=function(){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(m,{link:"/",active:!0},"Burger Builder"),r.a.createElement(m,{link:"/"},"Checkout"))},h=(a(19),a(8)),E=a.n(h),f=function(e){return r.a.createElement("div",{className:"logo",style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"burger"}))},v=(a(20),function(e){return r.a.createElement("div",{onClick:e.clicked,style:{cursor:"pointer"},className:"DrawerToggle"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),b=function(e){return r.a.createElement("header",{className:"toolbar"},r.a.createElement(v,{clicked:e.drawerClicked}),r.a.createElement(f,{height:"80%"}),r.a.createElement("nav",{className:"desctop"},r.a.createElement(p,null)))},g=(a(21),a(22),function(e){return e.show?r.a.createElement("div",{className:"backdrop",onClick:e.clicked}):null}),k=function(e){var t=["SideDrawer","Close"];return e.open&&(t=["SideDrawer","Open"]),r.a.createElement(d,null,r.a.createElement(g,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("span",{className:"closed",onClick:e.closed},"\xd7"),r.a.createElement(f,{height:"11%"}),r.a.createElement("nav",null,r.a.createElement(p,null))))},w=(a(23),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showDrawer:!1},e.showDrawerHandler=function(){e.setState({showDrawer:!1})},e.drawerClicked=function(){e.setState((function(e){return{showDrawer:!e.showDrawer}}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(b,{drawerClicked:this.drawerClicked}),r.a.createElement(k,{open:this.state.showDrawer,closed:this.showDrawerHandler}),r.a.createElement("main",{className:"layout"},this.props.children))}}]),a}(n.Component)),y=a(5),N=a(9),C=(a(24),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"BreadBottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"BreadTop":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"Meat":e=r.a.createElement("div",{className:"Meat"});break;case"Cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"Salad":e=r.a.createElement("div",{className:"Salad"});break;case"Bacon":e=r.a.createElement("div",{className:"Bacon"});break;default:e=null}return e}}]),a}(n.Component)),O=(a(25),function(e){var t=Object.keys(e.ingredinents).map((function(t){return Object(N.a)(Array(e.ingredinents[t])).map((function(e,a){return r.a.createElement(C,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",{className:"add"},"Please add an ingredient")),r.a.createElement("div",{className:"burger"},r.a.createElement(C,{type:"BreadTop"}),t,r.a.createElement(C,{type:"BreadBottom"}))}),j=(a(26),function(e){return r.a.createElement("div",{className:"BurgerControl"},r.a.createElement("div",{className:"Label"}," ",e.label," "),r.a.createElement("button",{disabled:e.disabled,className:"Less",onClick:e.removed},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))}),B=(a(27),[{label:"Salad",type:"Salad"},{label:"Meat",type:"Meat"},{label:"Bacon",type:"Bacon"},{label:"Cheese",type:"Cheese"}]),S=function(e){return r.a.createElement("div",{className:"BurgerControls"},r.a.createElement("p",null,"Current price: ",r.a.createElement("strong",null,e.price>=0?0===e.price?e.price.toFixed():e.price.toFixed(2):-e.price.toFixed(2),"  $")),B.map((function(t){return r.a.createElement(j,{key:t.label,label:t.label,added:function(){return e.ingredinentAdded(t.type)},removed:function(){return e.ingredinentRemoved(t.type)},disabled:e.disabled[t.type]})})),r.a.createElement("button",{className:"OrderButton",disabled:!e.purchasable,onClick:e.purchasing},"Order now"))},M=(a(28),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"shouldComponentUpdate",value:function(e){return e.show!==this.props.show}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(g,{show:this.props.show,clicked:this.props.closedModal}),r.a.createElement("div",{className:"Modal",style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},r.a.createElement("span",{className:"close",onClick:this.props.closedModal},"\xd7"),this.props.children,r.a.createElement("div",{className:"btns"},r.a.createElement("button",{className:"btn cancel",onClick:this.props.closedModal},"Cancel"),r.a.createElement("button",{className:"btn continue",onClick:function(){return alert("You continued")}},"Continue"))))}}]),a}(n.Component)),D=(a(29),function(e){var t=Object.keys(e.ingredinents).map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.ingredinents[t])}));return r.a.createElement("div",{className:"overlay"},r.a.createElement("h3",null,"Your order"),r.a.createElement("p",null,"Burger with folowing ingredinents"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2)," $")),r.a.createElement("p",null,"Continue to checkout?"))}),H={Salad:.5,Meat:.6,Bacon:.3,Cheese:.2},x=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredinents:{Salad:0,Meat:0,Cheese:0,Bacon:0},total:0,purchasable:!1,purchasing:!1},e.removeIngredinentsHandler=function(t){var a=e.state.ingredinents[t]-1,n=Object(y.a)({},e.state.ingredinents);n[t]=a;var r=e.state.total-H[t];e.setState({total:r,ingredinents:n}),e.purchaseUpdate(n)},e.addIngredinentsHandler=function(t){var a=e.state.ingredinents[t]+1,n=Object(y.a)({},e.state.ingredinents);n[t]=a;var r=e.state.total+H[t];e.setState({total:r,ingredinents:n}),e.purchaseUpdate(n)},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCloseHandler=function(){e.setState({purchasing:!1})},e}return Object(i.a)(a,[{key:"purchaseUpdate",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(y.a)({},this.state.ingredinents);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(d,null,r.a.createElement(M,{show:this.state.purchasing,closedModal:this.purchaseCloseHandler},r.a.createElement(D,{ingredinents:this.state.ingredinents,price:this.state.total})),r.a.createElement(O,{ingredinents:this.state.ingredinents}),r.a.createElement(S,{ingredinentAdded:this.addIngredinentsHandler,ingredinentRemoved:this.removeIngredinentsHandler,disabled:e,price:this.state.total,purchasing:this.purchaseHandler,purchasable:this.state.purchasable}))}}]),a}(n.Component);var I=function(){return r.a.createElement(w,null,r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0d316e5b.chunk.js.map
