webpackJsonp([0],{"7Otq":function(e,t,r){e.exports=r.p+"static/img/logo.026545e.png"},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("img",{attrs:{src:r("7Otq"),width:"130px"}}),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=r("VU/8")({name:"App"},n,!1,function(e){r("qKq8")},null,null).exports,s=r("/ocq"),i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(e){r("TXg2")},"data-v-d8ec41bc",null).exports,u="10.0.1.13:4000",m=function(e,t){var r=("http://"+u+"/api/users/:email/:password").replace(":email",e).replace(":password",t);return fetch(r).then(function(e){return e.json()}).then(function(e){return e})},p=function(e,t,r){var a=("http://"+u+"/api/signup/:params").replace(":params",e+"/"+t+"/"+r);return fetch(a).then(function(e){return e.json()}).then(function(e){return e})},c={name:"Login",data:function(){return{titulo:"Inicio de Sesión",email:"",password:"",json:[],error:""}},methods:{Ingresar:function(){var e=this;console.log(e.email),console.log(e.password),this.validarCampos(e.email,e.password)?this.validarEmail()?(e.error="",m(e.email,e.password).then(function(t){e.json=t}).catch(function(e){console.log(e)})):(e.error="Email invalido",e.json=[]):(e.error="Campos vacios",e.json=[])},validarCampos:function(){return""!=this.email&&""!=this.password},validarEmail:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.titulo))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"email",placeholder:"Correo Electronico"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("br"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("br"),e._v(" "),r("button",{attrs:{type:"button",name:"btnIngresar"},on:{click:e.Ingresar}},[e._v("Ingresar")]),r("br"),r("br"),e._v(" "),r("small",[r("router-link",{attrs:{to:"/signup"}},[e._v("Registrarse")])],1),e._v(" "),r("div",{},[r("h1",[e._v(e._s(e.error))]),e._v(" "),e._l(e.json,function(t){return r("h1",[e._v(e._s(t))])})],2)])},staticRenderFns:[]};var d=r("VU/8")(c,v,!1,function(e){r("WJTh")},"data-v-22c50444",null).exports,h={name:"Signup",data:function(){return{titulo:"Registro de Usuario",username:"",email:"",password:"",password_confirmation:"",json:[],error:""}},methods:{Registrarse:function(){var e=this;this.validarCampos()?this.validarEmail()?(e.error="",this.validateMinLength()?(e.error="",this.validateConfirmationPassword()?(e.error="",p(e.username,e.email,e.password).then(function(t){e.json=t,this.$router.push("/")}).catch(function(e){console.log(e)})):(console.log("El password no coincide"),e.error="El password no coincide",e.json=[])):(console.log("El password debe tener min 8 characteres"),e.error="El password debe tener min 8 characteres",e.json=[])):(console.log("Email invalido"),e.error="Email invalido",e.json=[]):(console.log("Campos vacios"),e.error="Campos vacios",e.json=[])},validarCampos:function(){return""!=this.username&&""!=this.email&&""!=this.password&&""!=this.password_confirmation},validarEmail:function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)},validateMinLength:function(){return this.password.trim().length>7},validateConfirmationPassword:function(){return this.password==this.password_confirmation}}},_={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.titulo))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.text",value:e.username,expression:"username",modifiers:{text:!0}}],attrs:{type:"text",name:"username",placeholder:"Nombre de Usuario"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("br"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.email",value:e.email,expression:"email",modifiers:{email:!0}}],attrs:{type:"email",name:"email",placeholder:"Correo Electronico"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("br"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.password",value:e.password,expression:"password",modifiers:{password:!0}}],attrs:{type:"password",name:"password",placeholder:"Password",maxlength:"32"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("br"),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.password",value:e.password_confirmation,expression:"password_confirmation",modifiers:{password:!0}}],attrs:{type:"password",name:"password_confirmation",placeholder:"Confirmar Password",maxlength:"32"},domProps:{value:e.password_confirmation},on:{input:function(t){t.target.composing||(e.password_confirmation=t.target.value)}}}),r("br"),r("br"),e._v(" "),r("button",{attrs:{type:"button"},on:{click:e.Registrarse}},[e._v("Registrarse")]),r("br"),r("br"),e._v(" "),r("small",[r("router-link",{attrs:{to:"/"}},[e._v("Login")])],1),e._v(" "),r("h1",[e._v(e._s(e.error))]),e._v(" "),e._l(e.json,function(t){return r("h1",[e._v(e._s(t))])})],2)},staticRenderFns:[]};var f=r("VU/8")(h,_,!1,function(e){r("z9Wz")},"data-v-43c099b6",null).exports;a.a.use(s.a);var g=new s.a({routes:[{path:"/Helloworld",name:"HelloWorld",component:l},{path:"/",name:"Login",component:d},{path:"/signup",name:"Signup",component:f}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},TXg2:function(e,t){},WJTh:function(e,t){},qKq8:function(e,t){},z9Wz:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.361b24d479f5f197bf12.js.map