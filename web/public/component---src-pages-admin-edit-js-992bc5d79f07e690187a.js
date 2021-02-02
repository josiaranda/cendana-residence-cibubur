(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"54Z8":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));n("p532");var a=n("q1tI"),i=n.n(a),o=n("ADg1"),r=n("1AYd"),l=n("KmP9"),c=n("wb2y"),s=n("7SZd"),m=n("r9w1"),p=n("R/WZ"),d=n("iuhU"),u=n("Z3vd"),b=n("CC8b"),g=n("FXBi"),h=n("tRbT"),f=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"flex-start"},fc:{margin:"17px",minWidth:"300px"},submitBtn:{margin:"17px"}}}));function v(e){var t=f(),n=Object(a.useState)(!1),p=n[0],v=n[1],j=Object(a.useState)(Object.assign({},e.data)),O=j[0],E=j[1],y=Object(a.useState)(e.data.image),k=y[0],w=(y[1],Object(a.useState)({name:[!1,""],phone:[!1,""],nickname:[!1,""],blok:[!1,""],image:[!1,""]})),x=w[0],C=w[1],S=function(e){return function(t){if("image"===e){var n,a=t.target.files[0];if(void 0===a)return void E(Object.assign({},O,(n={},n[e]=k,n)));if("string"==typeof a.type&&!["image/png","image/jpeg","image/jpg"].includes(a.type))return void C(Object.assign({},x,{image:[!0,"Supported file: png, jpg, jpeg"]}));var i=URL.createObjectURL(a);(r=i,fetch(r).then((function(e){return e.blob()})).then((function(e){return new Promise((function(t,n){var a=new FileReader;a.onloadend=function(){return t(a.result)},a.onerror=n,a.readAsDataURL(e)}))}))).then((function(t){var n;E(Object.assign({},O,((n={})[e]=t,n)))})),C(Object.assign({},x,{image:[!1,""]}))}else{var o;E(Object.assign({},O,((o={})[e]=t.target.value,o)))}var r}},N=function(e){return""===e||"string"==typeof e&&""===e.trim()},A=function(e){return void 0===e&&(e=!1),!e||"string"==typeof O.name&&""!==O.name?N(O.name)?(C(Object.assign({},x,{name:[!0,"Cannot Empty"]})),!1):(E(Object.assign({},O,{name:(t=O.name,t.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})))})),C(Object.assign({},x,{name:[!1,""]})),!0):(C(Object.assign({},x,{name:[!0,"Cannot Empty"]})),!1);var t},I=function(e){return void 0===e&&(e=!1),!e||"string"==typeof O.phone&&""!==O.phone?N(O.phone)?(C(Object.assign({},x,{phone:[!0,"Cannot Empty"]})),!1):("string"==typeof O.phone&&(O.phone=O.phone.replace(" ",""),O.phone=O.phone.replace("+62",""),O.phone.startsWith("0")&&(O.phone=O.phone.substring(1))),/^\d+$/.test(O.phone)?(E(Object.assign({},O,{phone:O.phone})),C(Object.assign({},x,{phone:[!1,""]})),!0):(C(Object.assign({},x,{phone:[!0,"Only number allowed"]})),!1)):(C(Object.assign({},x,{phone:[!0,"Cannot Empty"]})),!1)},P=function(e){return void 0===e&&(e=!1),!e||"string"==typeof O.blok&&""!==O.blok?N(O.blok)?(C(Object.assign({},x,{blok:[!0,"Cannot Empty"]})),!1):("string"==typeof O.blok&&(O.blok=O.blok.toUpperCase()),/^[A-Z][0-9]+$/.test(O.blok)?(E(Object.assign({},O,{blok:O.blok})),C(Object.assign({},x,{blok:[!1,""]})),!0):(C(Object.assign({},x,{blok:[!0,"Example format: A1, B15, C215"]})),!1)):(C(Object.assign({},x,{blok:[!0,"Cannot Empty"]})),!1)};return i.a.createElement("div",{className:Object(d.a)(t.root)},i.a.createElement("h2",null,"Add new"),i.a.createElement(o.a,{className:Object(d.a)(t.fc),variant:"outlined"},i.a.createElement(m.a,{error:x.name[0],helperText:x.name[1],id:"name",label:"Name",type:"text",value:O.name,onChange:S("name"),onBlur:A,InputProps:{notched:O.name},placeholder:"John Doe",labelWidth:45,variant:"outlined",required:!0})),i.a.createElement(o.a,{className:Object(d.a)(t.fc),variant:"outlined"},i.a.createElement(m.a,{error:x.phone[0],helperText:x.phone[1],id:"phone",label:"Phone",type:"text",value:O.phone,onChange:S("phone"),onBlur:I,InputProps:{startAdornment:i.a.createElement(s.a,{position:"start"},"+62")},labelWidth:50,variant:"outlined",required:!0})),i.a.createElement(o.a,{className:Object(d.a)(t.fc),variant:"outlined"},i.a.createElement(r.a,{htmlFor:"nickname"},"Nickname"),i.a.createElement(l.a,{id:"nickname",type:"text",value:O.nickname,onChange:S("nickname"),placeholder:"Mas "+("string"==typeof O.name&&O.name.split(" ")[0]||"John")+", Pak "+("string"==typeof O.name&&O.name.split(" ")[0]||"John")+", "+("string"==typeof O.name&&O.name.split(" ")[0]||"John"),labelWidth:75})),i.a.createElement(o.a,{className:Object(d.a)(t.fc),variant:"outlined"},i.a.createElement(m.a,{error:x.blok[0],helperText:x.blok[1],id:"blok",label:"Blok",type:"text",value:O.blok,onChange:S("blok"),onBlur:P,labelWidth:32,placeholder:"A1",variant:"outlined",required:!0})),i.a.createElement(o.a,{className:Object(d.a)(t.fc),variant:"outlined"},i.a.createElement(m.a,{error:x.image[0],helperText:x.image[1],label:"Foto",id:"foto",type:"file",inputProps:{accept:"image/x-png,image/jpeg"},onChange:S("image"),InputProps:{startAdornment:i.a.createElement(s.a,{position:"start"})},labelWidth:35,variant:"outlined"})),i.a.createElement("div",{style:{margin:"9px"}},i.a.createElement(c.a,null)),i.a.createElement(h.a,{container:!0,spacing:2},i.a.createElement(h.a,{item:!0,xs:3},i.a.createElement(g.a,O))),i.a.createElement(u.a,{className:Object(d.a)(t.submitBtn),onClick:function(){v(!0),A(!0)&&I(!0)&&P(!0)?(""===O.image&&delete O.image,console.log("data",Object.assign({},O,{phone:"+62"+O.phone})),Object(b.d)(Object.assign({},O,{phone:"+62"+O.phone})).then((function(e){alert("Update success");"undefined"!=typeof window&&(window.location="/admin")})).catch((function(e){alert("Update failed: "+(e.msg||"Unknown")),v(!1)}))):v(!1)},variant:"contained",color:"default",disabled:p},"Submit"))}var j=n("e13s"),O=n("leyo"),E=n("Ji2X"),y=n("TZi5");function k(e){var t=Object(a.useState)((new j.a).get("_awa")),n=t[0],o=(t[1],Object(y.c)("id",y.a)),r=o[0],l=(o[1],Object(a.useState)(!0)),c=l[0],s=l[1],m=Object(a.useState)({name:null,phone:null,nickname:"",blok:null,image:""}),p=m[0],d=m[1];return Object(a.useEffect)((function(){s(!0),Object(b.c)(r).then((function(e){e.phone=e.phone.replace("+62",""),d(e)})).finally((function(){s(!1)}))}),[]),i.a.createElement(a.Fragment,null,i.a.createElement(O.a,null),i.a.createElement(E.a,{style:{marginTop:"18px"}},n?c?"Loading...":i.a.createElement(v,{id:r,data:p}):void("undefined"!=typeof window&&(window.location="/"))))}},"7SZd":function(e,t,n){"use strict";var a=n("wx14"),i=n("Ff2n"),o=n("q1tI"),r=n("iuhU"),l=n("ofer"),c=n("H2TA"),s=n("4hqb"),m=o.forwardRef((function(e,t){var n=e.children,c=e.classes,m=e.className,p=e.component,d=void 0===p?"div":p,u=e.disablePointerEvents,b=void 0!==u&&u,g=e.disableTypography,h=void 0!==g&&g,f=e.position,v=e.variant,j=Object(i.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),O=Object(s.b)()||{},E=v;return v&&O.variant,O&&!E&&(E=O.variant),o.createElement(s.a.Provider,{value:null},o.createElement(d,Object(a.a)({className:Object(r.a)(c.root,m,b&&c.disablePointerEvents,O.hiddenLabel&&c.hiddenLabel,"filled"===E&&c.filled,{start:c.positionStart,end:c.positionEnd}[f],"dense"===O.margin&&c.marginDense),ref:t},j),"string"!=typeof n||h?n:o.createElement(l.a,{color:"textSecondary"},n)))}));t.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(m)},wb2y:function(e,t,n){"use strict";var a=n("wx14"),i=n("Ff2n"),o=n("q1tI"),r=n("iuhU"),l=n("H2TA"),c=n("ye/S"),s=o.forwardRef((function(e,t){var n=e.absolute,l=void 0!==n&&n,c=e.classes,s=e.className,m=e.component,p=void 0===m?"hr":m,d=e.flexItem,u=void 0!==d&&d,b=e.light,g=void 0!==b&&b,h=e.orientation,f=void 0===h?"horizontal":h,v=e.role,j=void 0===v?"hr"!==p?"separator":void 0:v,O=e.variant,E=void 0===O?"fullWidth":O,y=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(p,Object(a.a)({className:Object(r.a)(c.root,s,"fullWidth"!==E&&c[E],l&&c.absolute,u&&c.flexItem,g&&c.light,"vertical"===f&&c.vertical),role:j,ref:t},y))}));t.a=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(s)}}]);
//# sourceMappingURL=component---src-pages-admin-edit-js-992bc5d79f07e690187a.js.map