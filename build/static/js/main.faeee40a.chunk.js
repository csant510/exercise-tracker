(this.webpackJsonpmovieguy=this.webpackJsonpmovieguy||[]).push([[0],{25:function(e,a,t){e.exports=t(37)},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(22),o=t.n(s),l=t(6),c=t(7),i=t(9),m=t(8),u=t(10),p=t(4),h=t(11),d=function(e){var a=e.user?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/"},r.a.createElement("span",{className:"nav-link"},"Profile"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:""},r.a.createElement("span",{className:"nav-link",onClick:e.handleLogout},"Log Out")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/signup"},r.a.createElement("span",{className:"nav-link"},"Sign Up"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/login"},r.a.createElement("span",{className:"nav-link"},"Log In"))));return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(p.b,{to:"/"},r.a.createElement("span",{className:"navbar-brand"},"MovieGuy")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/"},r.a.createElement("span",{className:"nav-link"},"Most Popular"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/"},r.a.createElement("span",{className:"nav-link"},"Current Playing"))),a),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},g=t(13),v=t.n(g),f=t(15),E=t(16);function b(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var y={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:b,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=b();return e?JSON.parse(atob(e.split(".")[1])).user:null}},N="/api/users/";var w={signup:function(e){return fetch(N+"signup",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken!")})).then((function(e){var a=e.token;return y.setToken(a)}))},getUser:function(){return y.getUserFromToken()},logout:function(){y.removeToken()},login:function(e){return fetch(N+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Bad Credentials!")})).then((function(e){var a=e.token;return y.setToken(a)}))}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",passwordConf:""},t.handleChange=function(e){t.props.updateMessage(""),t.setState(Object(E.a)({},e.target.name,e.target.value))},t.handleSubmit=function(){var e=Object(f.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,w.signup(t.state);case 4:t.props.handleSignupOrLogin(),t.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.props.updateMessage(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"isFormInvalid",value:function(){return!(this.state.username&&this.state.email&&this.state.password===this.state.passwordConf)}},{key:"render",value:function(){return r.a.createElement("div",{className:"mt-5"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name",value:this.state.username,name:"username",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.password,name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Confirm Password",value:this.state.passwordConf,name:"passwordConf",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4 justify"},r.a.createElement("button",{className:"btn btn-outline-info",disabled:this.isFormInvalid()},"Sign Up"),"\xa0\xa0"))))}}]),a}(r.a.Component),O=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).updateMessage=function(e){t.setState({message:e})},t.state={message:""},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,Object.assign({},this.props,{updateMessage:this.updateMessage})),r.a.createElement("p",null,this.state.message))}}]),a}(n.Component),k=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",pw:""},t.handleChange=function(e){t.setState(Object(E.a)({},e.target.name,e.target.value))},t.handleSubmit=function(){var e=Object(f.a)(v.a.mark((function e(a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,w.login(t.state);case 4:t.props.handleSignupOrLogin(),t.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert("Invalid Credentials!");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-5"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email",value:this.state.email,name:"email",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Password",value:this.state.pw,name:"pw",onChange:this.handleChange}))),r.a.createElement("div",{className:"form-row mt-3 justify-content-md-center"},r.a.createElement("div",{className:"col-md-4 justify"},r.a.createElement("button",{className:"btn btn-outline-info"},"Login"),"\xa0\xa0"))))}}]),a}(r.a.Component),S=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).handleLogout=function(){w.logout(),console.log("user log out!"),e.setState({user:null})},e.handleSignupOrLogin=function(){console.log("handlesinguporlogin"),e.setState({user:w.getUser()})},e.state={user:w.getUser()},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{user:this.state.user,handleLogout:this.handleLogout}),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/signup",render:function(a){var t=a.history;return r.a.createElement(O,{history:t,handleSignupOrLogin:e.handleSignupOrLogin})}}),r.a.createElement(h.a,{exact:!0,path:"/login",render:function(a){var t=a.history;return r.a.createElement(k,{history:t,handleSignupOrLogin:e.handleSignupOrLogin})}}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(36);o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.faeee40a.chunk.js.map