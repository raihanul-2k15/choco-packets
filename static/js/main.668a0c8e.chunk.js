(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,n,t){e.exports=t(71)},56:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(17),c=t.n(r),l=(t(56),t(25)),i=t(33),u=t(18),s=t(45),m=t(34),h=t(46);function d(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}var f=[],p=1,v=null,k=3,E=7,b=1,g=12;function w(){return 0===f.reduce(function(e,n){return e+n},0)}function C(){var e=f.map(function(e,n){return{v:e,i:n}}).filter(function(e){var n=e.v;e.i;return 0!==n}),n=d(0,e.length-1);return{packetNo:e[n].i,noOfChocos:d(1,e[n].v)}}function x(e){var n=e.packetNo,t=e.noOfChocos;if(!w()){if(n<0||n>=f.length)return TypeError("Packet number must be between 0 and ".concat(f.length,"."));if(t<1||t>f[n])return TypeError("There are only ".concat(f[n]," chocolates in packet ").concat(n,"."));f[n]-=t,w()&&(v=p),p=3-p}}function y(){f=[],p=1,v=null;for(var e=d(k,E),n=0;n<e;n++)f.push(d(b,g))}function I(){var e=f.reduce(function(e,n){return e^n},0);if(0!==e){for(var n=0;n<f.length;n++){var t=f[n];if((t^e)<t)return void x({packetNo:n,noOfChocos:t-(t^e)})}x(C())}else x(C())}var O=t(73),G=t(105),S=t(99),j=t(74),M=t(101),N=t(42),A=t.n(N),B=t(100),P=t(104),T=t(98),W=Object(O.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}});function H(e){var n=W(),t=e.newGameClick,a=e.aiEnabledChange,r=e.aiEnabledChecked;return o.a.createElement("div",{className:n.root},o.a.createElement(T.a,null),o.a.createElement(G.a,{position:"static"},o.a.createElement(S.a,null,o.a.createElement(j.a,{variant:"h6",className:n.title},"Choco Packets"),o.a.createElement(j.a,{variant:"subtitle1"},"Opponent:",o.a.createElement(B.a,{control:o.a.createElement(P.a,{checked:r,onChange:a,color:"secondary"}),label:r?"AI":"Human"})),o.a.createElement(M.a,{color:"inherit",onClick:t},o.a.createElement(A.a,null),"New Game"))))}var J=t(102),z=t(103),D=t(44),F=t.n(D),L=t(43),R=t.n(L),Y=function(e){function n(){var e,t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(m.a)(n)).call.apply(e,[this].concat(o)))).state={packets:[],turn:1,winner:null,aiEnabled:!0,selected:!1,selection:{packetIndex:-1,chocoIndex:-1}},t.newGameBtnClick=function(e){y(),t.updateGameState()},t.aiEnabledOnChange=function(e){t.setState({aiEnabled:e.target.checked})},t.hoverChoco=function(e,n){null!==e&&null!==n?t.setState({selected:!0,selection:{packetIndex:e,chocoIndex:n}}):t.setState({selected:!1,selection:{packetIndex:-1,chocoIndex:-1}})},t.clickChoco=function(){var e=t.state,n=e.selected,a=e.aiEnabled,o=e.turn;if(n&&(a&&1===o||!a)){var r=t.state.selection,c=t.state.packets[r.packetIndex]-r.chocoIndex;x({packetNo:r.packetIndex,noOfChocos:c}),t.updateGameState(),a&&setTimeout(function(){I(),t.updateGameState()},1e3)}},t}return Object(h.a)(n,e),Object(u.a)(n,[{key:"updateGameState",value:function(){this.setState({packets:f,turn:p,winner:v})}},{key:"componentDidMount",value:function(){y(),this.updateGameState()}},{key:"render",value:function(){var e=this,n=this.state,t=n.packets,a=n.turn,r=n.winner,c=n.aiEnabled,i=n.selected,u=n.selection;return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{newGameClick:this.newGameBtnClick,aiEnabledChange:this.aiEnabledOnChange,aiEnabledChecked:this.state.aiEnabled}),o.a.createElement(J.a,null,o.a.createElement(z.a,{container:!0,alignItems:"center"},o.a.createElement(z.a,{item:!0,xs:12,lg:6,component:j.a,variant:"h3"},null!==r?"Game over":c?1===a?"Your turn":"AI's turn...":1===a?"Player 1's turn":"Player 2's turn"),o.a.createElement(z.a,{item:!0,xs:12,lg:6,component:j.a,variant:"h3"},"Winner: ",r&&(c?1===r?"Human":"AI":"Player "+r)))),o.a.createElement(J.a,null,t.map(function(n,t){return o.a.createElement(z.a,{container:!0,key:t},o.a.createElement(z.a,{item:!0,xs:1,component:j.a,variant:"h2"},n,":"),o.a.createElement(z.a,{container:!0,item:!0,xs:11,alignItems:"center",style:{border:"1px solid black"}},Object(l.a)(new Array(n)).map(function(n,r){var l=c&&1===a||!c,s=i&&u.packetIndex===t&&r>=u.chocoIndex,m=l&&s;return o.a.createElement(z.a,{item:!0,xs:3,md:2,lg:1,component:m?R.a:F.a,key:r,onMouseEnter:function(){return e.hoverChoco(t,r)},onMouseLeave:function(){return e.hoverChoco(null,null)},onClick:function(){return e.clickChoco()},fontSize:"large",color:m?"secondary":"primary"})})))})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.668a0c8e.chunk.js.map