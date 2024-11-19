(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(6),c=t.n(r);t(15),t(16);var o=function(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&e.alert.msg&&e.alert.type&&n.a.createElement("div",{className:`alert alert-${e.alert.type} alert-dismissible fade show`,role:"alert"},n.a.createElement("strong",null,e.alert.type.charAt(0).toUpperCase()+e.alert.type.slice(1),":")," ",e.alert.msg))};function s(e){let a={color:"dark"===e.mode?"white":"#211f1f",backgroundColor:"dark"===e.mode?"#211f1f":"white",border:"1px solid"+("dark"===e.mode?"white":"black")};return n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#211f1f"}},n.a.createElement("h1",{className:"my-3"},"About Us"),n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null,"Analyze Your text"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"))),n.a.createElement("div",{className:"accordion-item",style:a},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null,"Free to use"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body"},"TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header"},n.a.createElement("button",{className:"accordion-button collapsed",style:a,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null,"Browser Compatible"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body",style:a},"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.")))))}var m=t(3);function i(e){return n.a.createElement("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(m.b,{className:"navbar-brand",to:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/about"},e.aboutText))),n.a.createElement("div",{className:"d-flex"},n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>e.changeThemeColor("light")},"Light"),n.a.createElement("button",{className:"btn btn-secondary mx-1",onClick:()=>e.changeThemeColor("dark")},"Dark"),n.a.createElement("button",{className:"btn btn-info mx-1",onClick:()=>e.changeThemeColor("blue")},"Blue"),n.a.createElement("button",{className:"btn btn-success mx-1",onClick:()=>e.changeThemeColor("green")},"Green"),n.a.createElement("button",{className:"btn btn-danger mx-1",onClick:()=>e.changeThemeColor("red")},"Red")))))}function d(e){const[a,t]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h1",{className:"mb-4"},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:a,onChange:e=>{console.log("On change"),t(e.target.value)},style:{backgroundColor:e.textareaBackground,color:"light"===e.mode?"black":"white"},id:"mybox",rows:"8"})),n.a.createElement("button",{disabled:0==a.length,onClick:()=>{console.log("Uppercase was clicked"+a);let l=a.toUpperCase();t(l),e.showAlert("Converted to Uppercase!","success")},className:"btn btn-primary mx-1 my-1"},"Convert to Uppercase"),n.a.createElement("button",{disabled:0==a.length,onClick:()=>{console.log("Uppercase was clicked"+a);let l=a.toLowerCase();t(l),e.showAlert("Converted to Lowercase!","success")},className:"btn btn-primary mx-1 my-1"},"Convert to Lowercase"),n.a.createElement("button",{disabled:0==a.length,onClick:()=>{t(""),e.showAlert("Text Cleared!","success")},className:"btn btn-primary mx-1 my-1"},"Clear Text"),n.a.createElement("button",{disabled:0==a.length,onClick:()=>{navigator.clipboard.writeText(a),e.showAlert("Text copied to clipboard!","success")},className:"btn btn-primary mx-1 my-1"},"Copy Text"),n.a.createElement("button",{disabled:0==a.length,onClick:()=>{let l=a.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ");t(l),e.showAlert("Converted to Capitalized Words!","success")},className:"btn btn-primary mx-1 my-1"},"Capitalize Each Word"),n.a.createElement("button",{disabled:0==a.length,onClick:()=>{let l=a.split(/\s+/).join(" ").trim();t(l),e.showAlert("Extra spaces removed!","success")},className:"btn btn-primary mx-1 my-1"},"Remove Extra Spaces")),n.a.createElement("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"}},n.a.createElement("h2",null,"Your text summary"),n.a.createElement("p",null,a.split(/\s+/).filter(e=>e).length," words and ",a.length," characters"),n.a.createElement("p",null,.008*a.split(" ").filter(e=>e).length," Minutes read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,a.length>0?a:"Nothing to preview!")))}i.defaultProps={title:"Set title here",aboutText:"About"};var b=t(2);var u=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)("white"),[c,u]=Object(l.useState)(null),p=(e,a)=>{u({msg:e,type:a}),setTimeout(()=>u(null),2500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(i,{title:"TextUtils",mode:e,changeThemeColor:e=>{a(e);const t={light:"#fff",dark:"#333",blue:"#007bff",green:"#28a745",red:"#dc3545",yellow:"#ffc107"};document.body.style.backgroundColor=t[e]||"#fff",r(t[e]),p(e.charAt(0).toUpperCase()+e.slice(1)+" theme has been enabled","success")}}),n.a.createElement(o,{alert:c}),n.a.createElement("div",{className:"container my-3"},n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/",element:n.a.createElement(d,{showAlert:p,heading:"Try TextUtils - Word Counter, Character Counter, Remove extra Spaces",mode:e,textareaBackground:t})}),n.a.createElement(b.a,{path:"/about",element:n.a.createElement(s,{mode:e})})))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null))),p()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.f5bc9040.chunk.js.map