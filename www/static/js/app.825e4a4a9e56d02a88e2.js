webpackJsonp([1],{"+q9t":function(t,e){},"0+Ba":function(t,e){},"55xJ":function(t,e,r){t.exports=r.p+"static/img/avatar-6.f850da0.jpg"},"7Otq":function(t,e,r){t.exports=r.p+"static/img/logo.026545e.png"},"9aud":function(t,e,r){t.exports=r.p+"static/img/avatar-2.a6ecdba.jpg"},GKKY:function(t,e,r){t.exports=r.p+"static/img/logo-phoenix.cb8f2ae.png"},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=r("VU/8")({name:"App"},o,!1,function(t){r("pbru")},null,null).exports,s=r("/ocq"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("img",{attrs:{src:r("7Otq"),width:"130px"}}),t._v(" "),a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),r("br"),t._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(t){r("NN94")},"data-v-043b68e6",null).exports,l=r("fZjL"),u=r.n(l),m="192.168.1.9:4001",d=function(t,e){var r=("https://"+m+"/api/login/:sessionParams").replace(":sessionParams",t+"/"+e);return fetch(r).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){return t})},v=function(t,e,r){var a=("https://"+m+"/api/signup/:userParams").replace(":userParams",t+"/"+e+"/"+r);return fetch(a).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){return t})},p=function(t){return fetch("https://"+m+"/api/buscarContacto/"+t).then(function(t){return t.json()}).then(function(t){return t}).catch(function(t){return t})},h={name:"Login",data:function(){return{titulo:"Inicio de Sesión",email:"",password:"",json:[],error:""}},methods:{Ingresar:function(){var t=this;console.log(t.email),console.log(t.password),this.validarCampos()?(t.error="",this.validarEmail()?(t.error="",d(t.email,t.password).then(function(e){console.log(e),console.log(u()(e)),"errors"!=u()(e)?(t.json=e.data,t.$router.push("/paginaPrincipal")):t.error=e.errors}).catch(function(e){t.error="Usted no esta registrador",t.error=e,console.log(e),console.log(u()(e))})):(t.error="Email invalido",t.json=[])):(t.error="Campos vacios",t.json=[])},validarCampos:function(){return""!=this.email&&""!=this.password},validarEmail:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:r("7Otq"),width:"130px"}}),t._v(" "),a("h1",[t._v(t._s(t.titulo))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"Correo Electronico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("button",{attrs:{type:"button",name:"btnIngresar"},on:{click:t.Ingresar}},[t._v("Ingresar")]),a("br"),a("br"),t._v(" "),a("small",[a("router-link",{attrs:{to:"/signup"}},[t._v("Registrarse")])],1),t._v(" "),a("div",{},[a("h1",[t._v(t._s(t.error))]),t._v(" "),t._l(t.json,function(e){return a("h1",[t._v(t._s(e))])})],2)])},staticRenderFns:[]};var f=r("VU/8")(h,_,!1,function(t){r("X1G4")},"data-v-83a88a60",null).exports,g={name:"paginaPrincipal",data:function(){return{titulo:"Bienvenido su ingreso fue realizado con EXITO",username:"Nombre Apellido",nombreContato:"",contacto:{id:"",email:"",nombre:"",mostrar:!1},json:[],error:""}},methods:{buscarContacto:function(){var t=this;p(t.nombreContato).then(function(e){"errors"!=u()(e)?(console.log(e),t.contacto.id=e.data.id,t.contacto.email=e.data.email,t.contacto.nombre=e.data.username,t.contacto.mostrar=!0):(t.contacto.mostrar=!1,t.error="Usuario no encontrado")}).catch(function(e){t.contacto.mostrar=!1,console.log(e),t.error="Usuario no encontrado"})}}},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"nav",attrs:{heigth:"100px"}},[r("table",{attrs:{width:"100%"}},[r("tr",[t._m(0),t._v(" "),r("td",{staticStyle:{"text-align":"right"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.nombreContato,expression:"nombreContato"}],attrs:{type:"text",name:"",placeholder:"Nombre de Contacto",width:"auto"},domProps:{value:t.nombreContato},on:{input:function(e){e.target.composing||(t.nombreContato=e.target.value)}}}),t._v(" "),r("a",{staticClass:"menu",staticStyle:{border:"solid 1px white"},on:{click:t.buscarContacto}},[t._v("Buscar")])])])])]),r("br"),t._v(" "),r("div",{staticClass:"conversacion"},[r("table",{staticStyle:{width:"100%","text-align":"left"}},[r("tr",{directives:[{name:"show",rawName:"v-show",value:t.contacto.mostrar,expression:"contacto.mostrar"}],staticStyle:{margin:"20px"}},[t._m(1),t._v(" "),r("a",{staticClass:"btnConversacion",attrs:{href:"#"}},[r("td",[r("i",[r("b",[t._v(t._s(t.contacto.nombre))])]),t._v(" "),r("br"),t._v(" "),r("small",[t._v(t._s(t.contacto.email))])]),t._v(" "),r("td",{staticStyle:{"vertical-align":"middle","margin-top":"5px",float:"right"}},[r("router-link",{staticStyle:{border:"solid 1px black","text-decoration":"none",padding:"7px",color:"black"},attrs:{to:"/chat"}},[t._v("Chatear")])],1)]),t._v(" "),r("hr")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])]),t._v(" "),r("small",[r("router-link",{attrs:{to:"/"}},[t._v("Cerrar Session")])],1),t._v(" "),r("div",{},[r("h1",[t._v(t._s(t.error))]),t._v(" "),t._l(t.json,function(e){return r("h1",[t._v(t._s(e))])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("td",{staticStyle:{"text-align":"left"}},[e("img",{attrs:{src:r("GKKY"),width:"130px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[e("img",{staticClass:"img",attrs:{src:r("NVJZ"),width:"50px"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",{staticStyle:{margin:"20px"}},[e("td",[e("img",{staticClass:"img",attrs:{src:r("NVJZ"),width:"50px"}})]),this._v(" "),e("a",{staticClass:"btnConversacion",attrs:{href:"#"}},[e("td",[e("i",[e("b",[this._v("Jairo Moncada")])]),this._v(" "),e("br"),this._v(" "),e("small",[this._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. •")])])]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("img",{staticClass:"img",attrs:{src:r("9aud"),width:"50px"}})]),this._v(" "),e("a",{staticClass:"btnConversacion",attrs:{href:"#"}},[e("td",[e("i",[e("b",[this._v("Fernando Agreda")])]),this._v(" "),e("br"),this._v(" "),e("small",[this._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. •")])])]),this._v(" "),e("hr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("img",{staticClass:"img",attrs:{src:r("55xJ"),width:"50px"}})]),this._v(" "),e("a",{staticClass:"btnConversacion",attrs:{href:"#"}},[e("td",[e("i",[e("b",[this._v("Jesus Velasquez")])]),this._v(" "),e("br"),this._v(" "),e("small",[this._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. •")])])]),this._v(" "),e("hr")])}]};var w=r("VU/8")(g,b,!1,function(t){r("+q9t")},"data-v-14a16ce2",null).exports,x={name:"Signup",data:function(){return{titulo:"Registro de Usuario",username:"",email:"",password:"",password_confirmation:"",json:[],error:""}},methods:{Registrarse:function(t){t.preventDefault();var e=this;this.validarCampos()?(e.error="",this.validarEmail()?(e.error="",this.validateMinLength()?(e.error="",this.validateConfirmationPassword()?(e.error="",v(e.username,e.email,e.password).then(function(t){"errors"!=u()(t)?(e.json=t,e.$router.push("/registroExitoso")):e.error="El email esta en uso, prueba con otro email"}).catch(function(t){console.log(t)})):(console.log("El password no coincide"),e.error="El password no coincide",e.json=[])):(console.log("El password debe tener min 8 characteres"),e.error="El password debe tener min 8 characteres",e.json=[])):(console.log("Email invalido"),e.error="Email invalido",e.json=[])):(console.log("Campos vacios"),e.error="Campos vacios",e.json=[])},validarCampos:function(){return""!=this.username&&""!=this.email&&""!=this.password&&""!=this.password_confirmation},validarEmail:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)},validateMinLength:function(){return this.password.trim().length>7},validateConfirmationPassword:function(){return this.password==this.password_confirmation}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:r("7Otq"),width:"130px"}}),t._v(" "),a("h1",[t._v(t._s(t.titulo))]),t._v(" "),a("form",{attrs:{id:"app",method:"get"},on:{submit:t.Registrarse}},[a("input",{directives:[{name:"model",rawName:"v-model.text",value:t.username,expression:"username",modifiers:{text:!0}}],attrs:{type:"text",name:"username",placeholder:"Nombre de Usuario"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.email",value:t.email,expression:"email",modifiers:{email:!0}}],attrs:{type:"email",name:"email",placeholder:"Correo Electronico"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.password",value:t.password,expression:"password",modifiers:{password:!0}}],attrs:{type:"password",name:"password",placeholder:"Password",maxlength:"32"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.password",value:t.password_confirmation,expression:"password_confirmation",modifiers:{password:!0}}],attrs:{type:"password",name:"password_confirmation",placeholder:"Confirmar Password",maxlength:"32"},domProps:{value:t.password_confirmation},on:{input:function(e){e.target.composing||(t.password_confirmation=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{attrs:{type:"submit",value:"Registrarse"}})]),a("br"),t._v(" "),a("small",[a("router-link",{attrs:{to:"/"}},[t._v("Login")])],1),t._v(" "),a("h1",[t._v(t._s(t.error))])])},staticRenderFns:[]};var E=r("VU/8")(x,C,!1,function(t){r("fIPM")},"data-v-5a196ca9",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:r("7Otq"),width:"130px"}}),this._v(" "),e("h1",[this._v(this._s(this.bienvenida))]),this._v(" "),e("br"),this._v(" "),e("small",[e("router-link",{attrs:{to:"/"}},[this._v("SALIR")])],1)])},staticRenderFns:[]};var y=r("VU/8")({name:"registroExitoso",data:function(){return{bienvenida:"Bienvenido su registro fue realizado con EXITO"}}},j,!1,function(t){r("f19t")},"data-v-6861e210",null).exports,P={name:"chat",data:function(){return{titulo:"Bienvenido su ingreso fue realizado con EXITO",username:"Nombre Apellido",nombreContato:"",contacto:{id:"",email:"",nombre:"",mostrar:!1},json:[],error:""}},methods:{buscarContacto:function(){var t=this;p(t.nombreContato).then(function(e){"errors"!=u()(e)?(console.log(e),t.contacto.id=e.data.id,t.contacto.email=e.data.email,t.contacto.nombre=e.data.username,t.contacto.mostrar=!0):(t.contacto.mostrar=!1,t.error="Usuario no encontrado")}).catch(function(e){t.contacto.mostrar=!1,console.log(e),t.error="Usuario no encontrado"})}}},k={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("br"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("small",[r("router-link",{attrs:{to:"/"}},[t._v("Cerrar Session")])],1),t._v(" "),r("div",{},[r("h1",[t._v(t._s(t.error))]),t._v(" "),t._l(t.json,function(e){return r("h1",[t._v(t._s(e))])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav",attrs:{height:"100px"}},[e("table",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("img",{staticClass:"img",staticStyle:{"margin-right":"10px"},attrs:{src:r("55xJ")}})]),this._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("i",[e("b",[this._v("Pepe Perez")])]),this._v(" "),e("br"),this._v(" "),e("small",[this._v("pepe@gmail.com")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"conversacion"},[a("table",{staticStyle:{width:"100%","text-align":"left"}},[a("tr",{staticStyle:{margin:"20px"}},[a("td",[a("img",{staticClass:"img",attrs:{src:r("NVJZ"),width:"50px"}})]),t._v(" "),a("td",[a("i",[a("b",[t._v("Pepe Perez")])]),t._v(" "),a("br"),t._v(" "),a("small",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")])]),t._v(" "),a("hr")]),t._v(" "),a("tr",{staticStyle:{margin:"20px"}},[a("td",[a("img",{staticClass:"img",attrs:{src:r("55xJ"),width:"50px"}})]),t._v(" "),a("td",[a("i",[a("b",[t._v("Jesus Velasquez")])]),t._v(" "),a("br"),t._v(" "),a("small",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua")])]),t._v(" "),a("hr")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{width:"100%"}},[e("input",{attrs:{type:"text",name:"",value:""}}),this._v(" "),e("button",{attrs:{type:"button",name:"button"}},[this._v("Enviar")])])}]};var N=r("VU/8")(P,k,!1,function(t){r("0+Ba")},"data-v-fc8dd45a",null).exports;a.a.use(s.a);var $=new s.a({routes:[{path:"/Helloworld",name:"HelloWorld",component:c},{path:"/",name:"Login",component:f},{path:"/signup",name:"Signup",component:E},{path:"/registroExitoso",name:"registroExitoso",component:y},{path:"/paginaPrincipal",name:"paginaPrincipal",component:w},{path:"/chat",name:"chat",component:N}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:$,components:{App:n},template:"<App/>"})},NN94:function(t,e){},NVJZ:function(t,e,r){t.exports=r.p+"static/img/avatar-1.ca42356.jpg"},X1G4:function(t,e){},f19t:function(t,e){},fIPM:function(t,e){},pbru:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.825e4a4a9e56d02a88e2.js.map