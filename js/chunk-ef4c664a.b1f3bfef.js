(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef4c664a"],{"22f1":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"login"}},[t("h4",[e._v("用户名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),t("h4",[e._v("密码")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.onLogin(n)},input:function(n){n.target.composing||(e.password=n.target.value)}}}),e._v(" "),t("el-button",{on:{click:e.onLogin}},[e._v("立即登录")]),t("p",{staticClass:"notice"},[e._v("没有帐号？"),t("router-link",{attrs:{to:"/register"}},[e._v("注册新用户")])],1)],1)},o=[],s=t("5530"),a=t("2f62"),i={data:function(){return{username:"",password:""}},methods:Object(s["a"])({},Object(a["b"])(["login"]),{onLogin:function(){var e=this;this.login({username:this.username,password:this.password}).then((function(){e.$router.push({path:e.$route.query.redirect||"/"})}))}})},u=i,c=(t("cc88"),t("2877")),l=Object(c["a"])(u,r,o,!1,null,null,null);n["default"]=l.exports},cc88:function(e,n,t){"use strict";var r=t("d11a"),o=t.n(r);o.a},d11a:function(e,n,t){}}]);
//# sourceMappingURL=chunk-ef4c664a.b1f3bfef.js.map