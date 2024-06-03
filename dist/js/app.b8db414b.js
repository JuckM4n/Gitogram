(function(){"use strict";var e={6607:function(e,t,n){var r={};n.r(r),n.d(r,{exit:function(){return K},home:function(){return O},logo:function(){return Z},star:function(){return ee},triangle:function(){return ie}});var s=n(3751),a=n(641);function o(e,t,n,r,s,o){const i=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(i)}var i={name:"App"},l=n(6262);const c=(0,l.A)(i,[["render",o]]);var d=c,u=n(6278),p=(n(4603),n(7566),n(8721),n(4335));const v="https://api.github.com",g=({url:e,method:t="get",data:n={},headers:r={}})=>(0,p.A)({url:e,method:t,data:n,baseURL:v,headers:r}),C=e=>e<10?`0${e}`:e,m=(e="javascript")=>{const t=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),s=[r.getFullYear(),C(r.getMonth()+1),C(r.getDate())].join("-");return t.append("order","desc"),t.append("sort","stars"),t.append("per_page",10),t.append("q",`language:${e} created:>${s}`),g({url:`/search/repositories?${t}`})},h=({owner:e,repo:t})=>{const n="application/vnd.github.v3.html+json";return g({url:`/repos/${e}/${t}/readme`,headers:{accept:n}})};var f={namespased:!0,state:{data:[]},mutations:{SET_TRENDINGS:(e,t)=>{e.data=t},SET_README:(e,t)=>{e.data=e.data.map((e=>(t.id===e.id&&(e.readme=t.content),e)))}},getters:{getRepoById:e=>t=>e.data.find((e=>e.id===t))},actions:{async fetchTrendings({state:e,commit:t,rootState:n}){try{const{data:e}=await m();t("SET_TRENDINGS",e.items)}catch(r){throw console.log(r),r}},async fetchReadme({commit:e,getters:t},{id:n,owner:r,repo:s}){const a=t.getRepoById(n);if(void 0===a.readme)try{const{data:t}=await h({owner:r,repo:s});console.log(t),e("SET_README",{id:n,content:t})}catch(o){throw console.log(o),o}}}},_=(0,u.y$)({modules:{trendings:f}}),L=n(5220);n(4114);const b={class:"c-stories"},k={class:"header"},w={class:"x-container"},y={class:"content"};function S(e,t,n,r,s,o){const i=(0,a.g2)("icon"),l=(0,a.g2)("slider");return(0,a.uX)(),(0,a.CE)("div",b,[(0,a.Lk)("header",k,[(0,a.Lk)("div",w,[(0,a.Lk)("button",{class:"logo",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},[(0,a.bF)(i,{name:"logo"})]),(0,a.Lk)("button",{class:"close-btn",onClick:t[1]||(t[1]=t=>e.$router.push("/"))},[(0,a.bF)(i,{name:"exit"})])])]),(0,a.Lk)("div",y,[(0,a.bF)(l,{initialSlide:Number(e.$route.params.id)},null,8,["initialSlide"])])])}function x(e,t,n,r,s,o){return(0,a.uX)(),(0,a.Wv)((0,a.$y)(n.name))}const F={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E=(0,a.Lk)("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),A=[E];function V(e,t){return(0,a.uX)(),(0,a.CE)("svg",F,A)}const X={},H=(0,l.A)(X,[["render",V]]);var O=H;const T={preserveAspectRatio:"none",viewBox:"0 0 175 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"},I=(0,a.Fv)('<path d="M18.6664 14.4756H24.3009C23.5838 9.28933 19.0122 5.63971 13.0832 5.63971C6.15528 5.63971 0.815308 10.6339 0.815308 19.1369C0.815308 27.435 5.80953 32.5829 13.1984 32.5829C19.819 32.5829 24.5443 28.3954 24.5443 21.4931V18.1893H13.5698V22.3639H19.2043C19.1274 25.6166 16.9121 27.6783 13.224 27.6783C9.06217 27.6783 6.43701 24.5665 6.43701 19.0857C6.43701 13.6305 9.16462 10.5443 13.1728 10.5443C16.0285 10.5443 17.9621 12.0169 18.6664 14.4756Z" fill="currentColor"></path><path d="M28.5773 32.2243H34.0325V12.5548H28.5773V32.2243ZM31.3177 10.0193C32.944 10.0193 34.2758 8.7771 34.2758 7.25322C34.2758 5.74215 32.944 4.5 31.3177 4.5C29.7042 4.5 28.3724 5.74215 28.3724 7.25322C28.3724 8.7771 29.7042 10.0193 31.3177 10.0193Z" fill="currentColor"></path><path d="M47.6026 12.5548H43.9017V7.84229H38.4465V12.5548H35.7573V16.6526H38.4465V26.8972C38.4209 30.7517 41.046 32.6597 45.003 32.4932C46.4116 32.442 47.4105 32.1603 47.9611 31.981L47.1031 27.9216C46.8342 27.9728 46.258 28.1009 45.7457 28.1009C44.6572 28.1009 43.9017 27.6911 43.9017 26.18V16.6526H47.6026V12.5548Z" fill="currentColor"></path><path d="M58.5699 32.6085C64.5373 32.6085 68.251 28.5235 68.251 22.4664C68.251 16.3709 64.5373 12.2987 58.5699 12.2987C52.6024 12.2987 48.8888 16.3709 48.8888 22.4664C48.8888 28.5235 52.6024 32.6085 58.5699 32.6085ZM58.5955 28.3826C55.8422 28.3826 54.4336 25.8599 54.4336 22.428C54.4336 18.996 55.8422 16.4605 58.5955 16.4605C61.2975 16.4605 62.7061 18.996 62.7061 22.428C62.7061 25.8599 61.2975 28.3826 58.5955 28.3826Z" fill="currentColor"></path><path d="M79.3975 40.0102C85.0192 40.0102 89.0146 37.449 89.0146 32.4164V12.5548H83.5978V15.8586H83.3929C82.663 14.2579 81.0623 12.2987 77.7712 12.2987C73.4557 12.2987 69.8061 15.6538 69.8061 22.3511C69.8061 28.8948 73.3533 31.9426 77.784 31.9426C80.9214 31.9426 82.6758 30.3675 83.3929 28.7412H83.6234V32.3396C83.6234 35.0416 81.8947 36.0916 79.5256 36.0916C77.1181 36.0916 75.9016 35.0416 75.4534 33.8506L70.4079 34.5293C71.061 37.6283 74.096 40.0102 79.3975 40.0102ZM79.5128 27.8448C76.8364 27.8448 75.3766 25.719 75.3766 22.3255C75.3766 18.9832 76.8108 16.6398 79.5128 16.6398C82.1636 16.6398 83.649 18.8808 83.649 22.3255C83.649 25.7959 82.138 27.8448 79.5128 27.8448Z" fill="currentColor"></path><path d="M92.0936 32.2243H97.5488V21.0962C97.5488 18.6759 99.316 17.0112 101.723 17.0112C102.479 17.0112 103.516 17.1392 104.029 17.3057V12.4651C103.542 12.3499 102.863 12.2731 102.313 12.2731C100.11 12.2731 98.3044 13.5536 97.5873 15.9867H97.3824V12.5548H92.0936V32.2243Z" fill="currentColor"></path><path d="M110.632 32.5957C113.539 32.5957 115.422 31.3279 116.382 29.4967H116.536V32.2243H121.709V18.9576C121.709 14.2707 117.739 12.2987 113.36 12.2987C108.647 12.2987 105.548 14.5525 104.793 18.1381L109.838 18.5478C110.21 17.2417 111.375 16.2812 113.334 16.2812C115.191 16.2812 116.254 17.2161 116.254 18.8296V18.9064C116.254 20.1742 114.909 20.3406 111.49 20.6736C107.597 21.0321 104.101 22.3383 104.101 26.7307C104.101 30.6236 106.88 32.5957 110.632 32.5957ZM112.195 28.8308C110.517 28.8308 109.313 28.0497 109.313 26.5514C109.313 25.0147 110.581 24.2592 112.502 23.9903C113.693 23.8238 115.639 23.5421 116.292 23.1067V25.194C116.292 27.2557 114.589 28.8308 112.195 28.8308Z" fill="currentColor"></path><path d="M124.679 32.2243H130.135V20.4175C130.135 18.2405 131.518 16.7935 133.336 16.7935C135.129 16.7935 136.333 18.0228 136.333 19.9565V32.2243H141.621V20.2126C141.621 18.1765 142.787 16.7935 144.771 16.7935C146.513 16.7935 147.819 17.8819 147.819 20.0717V32.2243H153.262V18.996C153.262 14.7317 150.726 12.2987 147.064 12.2987C144.182 12.2987 141.941 13.7713 141.135 16.0251H140.93C140.302 13.7457 138.292 12.2987 135.59 12.2987C132.939 12.2987 130.929 13.7073 130.109 16.0251H129.878V12.5548H124.679V32.2243Z" fill="currentColor"></path><path d="M174.815 4.76892H170.116L161.664 36.1685H166.364L174.815 4.76892Z" fill="currentColor"></path>',9),M=[I];function $(e,t){return(0,a.uX)(),(0,a.CE)("svg",T,M)}const R={},N=(0,l.A)(R,[["render",$]]);var Z=N;const j={preserveAspectRatio:"none",viewBox:"0 0 32 33",fill:"none",xmlns:"http://www.w3.org/2000/svg"},D=(0,a.Lk)("path",{d:"M16 6.94273V14.625L16.0007 15.2562L25.3025 15.255L23.1495 13.1003C22.8167 12.7674 22.7865 12.2466 23.0589 11.8796L23.1497 11.7745C23.4826 11.4417 24.0034 11.4116 24.3704 11.6839L24.4755 11.7747L28.2213 15.5218C28.5538 15.8544 28.5842 16.3746 28.3125 16.7416L28.2219 16.8467L24.4762 20.601C24.1105 20.9676 23.5169 20.9683 23.1503 20.6026C22.8171 20.2701 22.7863 19.7493 23.0582 19.382L23.1488 19.2767L25.29 17.13L16.0007 17.1312L16 25.5625C16 26.1455 15.4735 26.5871 14.8994 26.4857L4.27444 24.6091C3.82651 24.53 3.5 24.1408 3.5 23.6859V8.68752C3.5 8.22839 3.83252 7.83681 4.28558 7.76241L14.9106 6.01762C15.4813 5.92389 16 6.36432 16 6.94273ZM11.6277 15.875C10.9358 15.875 10.375 16.4359 10.375 17.1277C10.375 17.8196 10.9358 18.3804 11.6277 18.3804C12.3195 18.3804 12.8804 17.8196 12.8804 17.1277C12.8804 16.4359 12.3195 15.875 11.6277 15.875ZM17.25 24.6266L18.2064 24.6268L18.3338 24.6183C18.7919 24.556 19.1447 24.163 19.1439 23.6878L19.135 18.375H17.25V24.6266ZM17.2525 14L17.25 12.4067V7.75002L18.1816 7.75002C18.6556 7.75002 19.0476 8.10192 19.1103 8.55891L19.1191 8.68597L19.1275 14H17.2525Z",fill:"currentColor"},null,-1),q=[D];function B(e,t){return(0,a.uX)(),(0,a.CE)("svg",j,q)}const P={},U=(0,l.A)(P,[["render",B]]);var K=U;const Q={preserveAspectRatio:"none",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},G=(0,a.Lk)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 1.25C8.14006 1.24991 8.2773 1.28901 8.39624 1.36289C8.51518 1.43676 8.61106 1.54245 8.67304 1.668L10.555 5.483L14.765 6.095C14.9035 6.11511 15.0336 6.17355 15.1405 6.26372C15.2475 6.35388 15.3272 6.47218 15.3704 6.60523C15.4137 6.73829 15.4189 6.8808 15.3854 7.01665C15.352 7.1525 15.2812 7.27628 15.181 7.374L12.135 10.344L12.854 14.536C12.8777 14.6739 12.8624 14.8157 12.8097 14.9454C12.757 15.0751 12.6691 15.1874 12.5559 15.2697C12.4427 15.352 12.3087 15.401 12.1691 15.4111C12.0295 15.4212 11.8899 15.3921 11.766 15.327L8.00004 13.347L4.23404 15.327C4.11023 15.392 3.97071 15.4211 3.83123 15.411C3.69176 15.4009 3.55788 15.352 3.44472 15.2699C3.33157 15.1877 3.24363 15.0755 3.19086 14.946C3.13808 14.8165 3.12255 14.6749 3.14604 14.537L3.86604 10.343L0.818042 7.374C0.717608 7.27632 0.646541 7.15247 0.612894 7.01647C0.579246 6.88047 0.584364 6.73777 0.627666 6.60453C0.670969 6.47129 0.750725 6.35284 0.857898 6.26261C0.96507 6.17238 1.09537 6.11397 1.23404 6.094L5.44404 5.483L7.32704 1.668C7.38902 1.54245 7.48491 1.43676 7.60385 1.36289C7.72279 1.28901 7.86003 1.24991 8.00004 1.25ZM8.00004 3.695L6.61504 6.5C6.56126 6.6089 6.48183 6.70311 6.38359 6.77453C6.28534 6.84595 6.17122 6.89244 6.05104 6.91L2.95404 7.36L5.19404 9.544C5.28119 9.62886 5.3464 9.73365 5.38403 9.84933C5.42166 9.96501 5.43059 10.0881 5.41004 10.208L4.88204 13.292L7.65104 11.836C7.75867 11.7794 7.87845 11.7499 8.00004 11.7499C8.12164 11.7499 8.24141 11.7794 8.34904 11.836L11.119 13.292L10.589 10.208C10.5685 10.0881 10.5774 9.96501 10.615 9.84933C10.6527 9.73365 10.7179 9.62886 10.805 9.544L13.045 7.361L9.94904 6.911C9.82886 6.89344 9.71474 6.84695 9.6165 6.77553C9.51825 6.70411 9.43883 6.6099 9.38504 6.501L8.00004 3.694V3.695Z",fill:"currentColor"},null,-1),W=[G];function J(e,t){return(0,a.uX)(),(0,a.CE)("svg",Q,W)}const Y={},z=(0,l.A)(Y,[["render",J]]);var ee=z;const te={preserveAspectRatio:"none",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ne=(0,a.Lk)("path",{d:"M12.7996 10.2603C12.5177 10.5639 12.0432 10.5814 11.7397 10.2996L8 6.77348L4.26033 10.2996C3.9568 10.5814 3.48225 10.5639 3.2004 10.2603C2.91855 9.9568 2.93612 9.48225 3.23966 9.2004L7.48966 5.2004C7.77742 4.9332 8.22257 4.9332 8.51033 5.2004L12.7603 9.2004C13.0639 9.48225 13.0814 9.9568 12.7996 10.2603Z",fill:"currentColor"},null,-1),re=[ne];function se(e,t){return(0,a.uX)(),(0,a.CE)("svg",te,re)}const ae={},oe=(0,l.A)(ae,[["render",se]]);var ie=oe,le={name:"Icon",components:{...r},props:{name:{type:String,required:!0,validator(e){return Object.keys(r).includes(e)}}}};const ce=(0,l.A)(le,[["render",x]]);var de=ce;const ue={class:"c-slider"},pe={class:"c-slider__container"},ve={class:"slider__items",ref:"slider"};function ge(e,t,n,r,s,o){const i=(0,a.g2)("slide");return(0,a.uX)(),(0,a.CE)("div",ue,[(0,a.Lk)("div",pe,[(0,a.Lk)("ul",ve,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.trendings,((e,t)=>((0,a.uX)(),(0,a.CE)("li",{class:"slider__item slide",key:e.id,ref_for:!0,ref:"item"},[(0,a.bF)(i,{data:o.getStoryData(e),active:s.slideNdx===t,loading:s.slideNdx===t&&s.loading,btnsShown:o.activeBtns,onNext:e=>o.handleSlide(t+1),onPrev:e=>o.handleSlide(t-1),onOnFinish:e=>o.handleSlide(t+1)},null,8,["data","active","loading","btnsShown","onNext","onPrev","onOnFinish"])])))),128))],512)])])}var Ce=n(33);const me={class:"slide__head"},he={class:"slide__progress"},fe={class:"slide__user"},_e={class:"slide__body"},Le={key:0,class:"loader"},be={key:1,class:"content"},ke=["innerHTML"],we={key:1,class:"slide__content"},ye={class:"slide__footer"},Se={class:"icon"},xe={class:"icon"};function Fe(e,t,n,r,s,o){const i=(0,a.g2)("progressBar"),l=(0,a.g2)("users"),c=(0,a.g2)("spinner"),d=(0,a.g2)("slideContent"),u=(0,a.g2)("xbutton"),p=(0,a.g2)("icon");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",{class:(0,Ce.C4)(["c-slide",{active:n.active}])},[(0,a.Lk)("div",me,[(0,a.Lk)("div",he,[(0,a.bF)(i,{active:n.active,onOnFinish:t[0]||(t[0]=t=>e.$emit("onFinish"))},null,8,["active"])]),(0,a.Lk)("div",fe,[(0,a.bF)(l,{login:n.data.userLogin,src:n.data.userAvatar},null,8,["login","src"])])]),(0,a.Lk)("div",_e,[n.loading?((0,a.uX)(),(0,a.CE)("div",Le,[(0,a.bF)(c)])):((0,a.uX)(),(0,a.CE)("div",be,[n.data.content?.length?((0,a.uX)(),(0,a.CE)("div",{key:0,class:"slide__text",innerHTML:n.data.content},null,8,ke)):((0,a.uX)(),(0,a.CE)("div",we,[(0,a.bF)(d)]))]))]),(0,a.Lk)("div",ye,[(0,a.bF)(u)])],2),(0,a.Lk)("template",null,[n.btnsShown.includes("next")?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"btn btn-next",onClick:t[1]||(t[1]=t=>e.$emit("next"))},[(0,a.Lk)("span",Se,[(0,a.bF)(p,{name:"arrow"})])])):(0,a.Q3)("",!0),n.btnsShown.includes("prev")?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"btn btn-prev",onClick:t[2]||(t[2]=t=>e.$emit("prev"))},[(0,a.Lk)("span",xe,[(0,a.bF)(p,{name:"arrow"})])])):(0,a.Q3)("",!0)])],64)}const Ee={class:"c-users"},Ae={class:"users__avatar"},Ve=["src"],Xe={class:"users__login"};function He(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("div",Ee,[(0,a.Lk)("div",Ae,[(0,a.Lk)("img",{src:n.avatarUrl,alt:"user avatar",class:"users__img"},null,8,Ve)]),(0,a.Lk)("div",Xe,(0,Ce.v_)(n.login),1)])}var Oe={name:"users",props:{avatarUrl:{type:String,required:!0,default:"https://p-hold.com/people/300/300"},login:{type:String,required:!0,default:"user_login"}}};const Te=(0,l.A)(Oe,[["render",He],["__scopeId","data-v-e5b3ac34"]]);var Ie=Te;function Me(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("button",{class:(0,Ce.C4)(["button",{follow:!s.isFollow}]),onClick:t[0]||(t[0]=(...e)=>o.follow&&o.follow(...e))},(0,Ce.v_)(s.isFollow?"Unfollow":"Follow"),3)}var $e={data(){return{isFollow:!1}},methods:{follow(){this.isFollow=!this.isFollow}}};const Re=(0,l.A)($e,[["render",Me],["__scopeId","data-v-6e9fcadf"]]);var Ne=Re;const Ze={ref:"indicator",class:"indicator"};function je(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("div",{class:(0,Ce.C4)([{active:s.active},"c-progress"])},[(0,a.Lk)("div",Ze,null,512)],2)}var De={name:"progress",data(){return{active:!1}},emits:["onFinish"],methods:{emitOnFinish(){this.$emit("onFinish")}},mounted(){this.$nextTick((()=>{this.active=!0})),this.$refs.indicator.addEventListener("transitionend",this.emitOnFinish)},beforeUnmount(){this.$refs.indicator.removeEventListener("transitionend",this.emitOnFinish)}};const qe=(0,l.A)(De,[["render",je],["__scopeId","data-v-6767ad3d"]]);var Be=qe;const Pe={class:"slide__content"},Ue={class:"slide__img"},Ke=["src"],Qe={class:"slide__text"};function Ge(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("div",Pe,[(0,a.Lk)("div",Ue,[(0,a.Lk)("img",{src:n.slideImg,alt:"slide image"},null,8,Ke)]),(0,a.Lk)("div",Qe,(0,Ce.v_)(n.slideText),1)])}var We={props:{slideImg:{type:String,default:"https://p-hold.com/people/400/400"},slideText:{type:String,default:"The easiest way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions. For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year."}}};const Je=(0,l.A)(We,[["render",Ge],["__scopeId","data-v-2e21f35a"]]);var Ye=Je,ze={components:{users:Ie,xbutton:Ne,progressBar:Be,slideContent:Ye,icon:de},data(){return{}},props:{active:Boolean,loading:Boolean,data:{type:Object,required:!0,default:()=>({})},btnsShown:{type:Array,default:()=>["next","prev"],validator(e){return e.every((e=>"next"===e||"prev"===e))}}},created(){console.log(this.data)}};const et=(0,l.A)(ze,[["render",Fe],["__scopeId","data-v-68c7a34a"]]);var tt=et,nt={name:"slider",components:{slide:tt},props:{initialSlide:{type:Number}},data(){return{slideNdx:0,sliderPosition:0,loading:!1,btnsShown:!0}},computed:{...(0,u.aH)({trendings:e=>e.trendings.data}),activeBtns(){return!1===this.btnsShown?[]:0===this.slideNdx?["next"]:this.slideNdx===this.trendings.length-1?["prev"]:["next","prev"]}},methods:{...(0,u.i0)({fetchReadme:"fetchReadme"}),getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,userLogin:e.owner?.login,content:e.readme,loading:e.loading}},async fetchReadmeForActiveSlide(){const{id:e,owner:t,name:n}=this.trendings[this.slideNdx];await this.fetchReadme({id:e,owner:t.login,repo:n})},moveSlider(e){const{slider:t,item:n}=this.$refs;console.log(t),console.log(n)},async loadReadme(){this.loading=!0,this.btnsShown=!1;try{await this.fetchReadmeForActiveSlide()}catch(e){throw console.log(e),e}finally{this.loading=!1,this.btnsShown=!0}},async handleSlide(e){this.moveSlider(e),await this.loadReadme()}},async mounted(){if(this.initialSlide){const e=this.trendings.findIndex((e=>e.id===this.initialSlide));await this.handleSlide(e)}}};const rt=(0,l.A)(nt,[["render",ge]]);var st=rt,at={name:"stories",components:{icon:de,slider:st},methods:{goToFeeds(){this.$router.push("/")}}};const ot=(0,l.A)(at,[["render",S],["__scopeId","data-v-44ec945e"]]);var it=ot;const lt={class:"topline"},ct={class:"logo"},dt={class:"navigation"},ut={class:"stories"},pt=["id"],vt={class:"container"},gt={class:"post-list"};function Ct(e,t,n,r,s,o){const i=(0,a.g2)("logo"),l=(0,a.g2)("headerNav"),c=(0,a.g2)("user-stories"),d=(0,a.g2)("topline"),u=(0,a.g2)("post");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",lt,[(0,a.bF)(d,null,{headline:(0,a.k6)((()=>[(0,a.Lk)("div",ct,[(0,a.bF)(i)]),(0,a.Lk)("div",dt,[(0,a.bF)(l)])])),content:(0,a.k6)((()=>[(0,a.Lk)("ul",ut,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.trendings,(t=>((0,a.uX)(),(0,a.CE)("li",{id:t.id,key:t.id,class:"stories__item"},[(0,a.bF)(c,{data:o.getStoryData(t),onOnPress:n=>e.$router.push({name:"stories",params:{id:t.id}})},null,8,["data","onOnPress"])],8,pt)))),128))])])),_:1})]),(0,a.Lk)("div",vt,[(0,a.Lk)("ul",gt,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(3,(e=>(0,a.Lk)("li",{key:e,class:"post__item"},[(0,a.bF)(u)]))),64))])])],64)}const mt={class:"c-topline"},ht={class:"x-container"},ft={class:"headline"},_t={key:0,class:"content"};function Lt(e,t){return(0,a.uX)(),(0,a.CE)("div",mt,[(0,a.Lk)("div",ht,[(0,a.Lk)("div",ft,[(0,a.RG)(e.$slots,"headline",{},void 0,!0)]),e.$slots.content?((0,a.uX)(),(0,a.CE)("div",_t,[(0,a.RG)(e.$slots,"content",{},void 0,!0)])):(0,a.Q3)("",!0)])])}const bt={},kt=(0,l.A)(bt,[["render",Lt],["__scopeId","data-v-531e4c16"]]);var wt=kt;const yt={class:"avatar"},St=["src"],xt={class:"username"};function Ft(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("button",{class:"c-user-stories",onClick:t[0]||(t[0]=(...e)=>o.goToStories&&o.goToStories(...e))},[(0,a.Lk)("div",yt,[(0,a.Lk)("img",{src:n.data.userAvatar,class:"img",alt:"username avatar"},null,8,St)]),(0,a.Lk)("div",xt,(0,Ce.v_)(n.data.userLogin),1)])}var Et={name:"userStories",props:{data:{type:Object,required:!0,default:()=>({})}},methods:{goToStories(){this.$router.push(`/stories/${this.data.id}`)}}};const At=(0,l.A)(Et,[["render",Ft],["__scopeId","data-v-424d5d4d"]]);var Vt=At;const Xt=e=>((0,a.Qi)("data-v-00eb4624"),e=e(),(0,a.jt)(),e),Ht={class:"c-post"},Ot={class:"post__user"},Tt={class:"post__card"},It={class:"comments"},Mt=Xt((()=>(0,a.Lk)("div",{class:"date"},"15 MAY",-1)));function $t(e,t,n,r,s,o){const i=(0,a.g2)("users"),l=(0,a.g2)("card"),c=(0,a.g2)("feed");return(0,a.uX)(),(0,a.CE)("div",Ht,[(0,a.Lk)("div",Ot,[(0,a.bF)(i)]),(0,a.Lk)("div",Tt,[(0,a.bF)(l)]),(0,a.Lk)("div",It,[(0,a.bF)(c)]),Mt])}const Rt={class:"c-feed"},Nt={key:0,class:"comments"},Zt={class:"comments-list"};function jt(e,t,n,r,s,o){const i=(0,a.g2)("toggler"),l=(0,a.g2)("comment");return(0,a.uX)(),(0,a.CE)("div",Rt,[(0,a.bF)(i,{onOnToggle:o.toggle},null,8,["onOnToggle"]),s.shown?((0,a.uX)(),(0,a.CE)("div",Nt,[(0,a.Lk)("ul",Zt,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.commentsData,(e=>((0,a.uX)(),(0,a.CE)("li",{class:"comments__item",key:e.id},[(0,a.bF)(l,{username:e.username,text:e.text},null,8,["username","text"])])))),128))])])):(0,a.Q3)("",!0)])}const Dt={class:"text"},qt={class:"icon"};function Bt(e,t,n,r,s,o){const i=(0,a.g2)("icon");return(0,a.uX)(),(0,a.CE)("button",{class:(0,Ce.C4)(["button",{active:s.isOpened}]),onClick:t[0]||(t[0]=(...e)=>o.toggle&&o.toggle(...e))},[(0,a.Lk)("span",Dt,(0,Ce.v_)(s.isOpened?"Hide issues":"View issues"),1),(0,a.Lk)("span",qt,[(0,a.bF)(i,{name:"triangle"})])],2)}var Pt={components:{icon:de},data(){return{isOpened:!1}},methods:{toggle(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};const Ut=(0,l.A)(Pt,[["render",Bt],["__scopeId","data-v-b3ba2e8c"]]);var Kt=Ut;const Qt={class:"c-comment"},Gt={class:"username"},Wt={class:"text"};function Jt(e,t,n,r,s,o){return(0,a.uX)(),(0,a.CE)("div",Qt,[(0,a.Lk)("p",null,[(0,a.Lk)("span",Gt,(0,Ce.v_)(n.username),1),(0,a.Lk)("span",Wt,(0,Ce.v_)(n.text),1)])])}var Yt={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};const zt=(0,l.A)(Yt,[["render",Jt],["__scopeId","data-v-557d8476"]]);var en=zt,tn=JSON.parse('[{"id":0,"username":"joshua_l","text":"Enable performance measuring in production, at the user\'s request"},{"id":1,"username":"Camille","text":"It\'s Impossible to Rename an Inherited Slot"},{"id":2,"username":"Marselle","text":"transition-group with flex parent causes removed items to fly"}]'),nn={name:"feed-item",components:{toggler:Kt,comment:en},data(){return{commentsData:tn,shown:!1}},methods:{toggle(e){this.shown=e}}};const rn=(0,l.A)(nn,[["render",jt],["__scopeId","data-v-6d7ba670"]]);var sn=rn;const an={class:"c-card"},on={class:"card__title"},ln={class:"card__desc"},cn={class:"card__desc--title"},dn={class:"card__rating"};function un(e,t,n,r,s,o){const i=(0,a.g2)("rating");return(0,a.uX)(),(0,a.CE)("div",an,[(0,a.Lk)("div",on,(0,Ce.v_)(n.cardTitle),1),(0,a.Lk)("div",ln,[(0,a.Lk)("span",cn,(0,Ce.v_)(n.cardDescTitle),1),(0,a.eW)((0,Ce.v_)(n.cardDesc),1)]),(0,a.Lk)("div",dn,[(0,a.bF)(i)])])}const pn=e=>((0,a.Qi)("data-v-9b9671da"),e=e(),(0,a.jt)(),e),vn={class:"c-rating"},gn={class:"rating__border rating__border--left rating__border--gray"},Cn={class:"rating__icon"},mn=pn((()=>(0,a.Lk)("span",{class:"rating__title"},"Star",-1))),hn={class:"rating__border rating__border--center rating__border--white"},fn={class:"rating__value"},_n={class:"rating__border rating__border--center rating__border--gray"},Ln={class:"rating__icon"},bn=pn((()=>(0,a.Lk)("span",{class:"rating__title"},"Fork",-1))),kn={class:"rating__border rating__border--right"},wn={class:"rating__value"};function yn(e,t,n,r,s,o){const i=(0,a.g2)("icon");return(0,a.uX)(),(0,a.CE)("div",vn,[(0,a.Lk)("div",gn,[(0,a.Lk)("div",Cn,[(0,a.bF)(i,{name:"star"})]),mn]),(0,a.Lk)("div",hn,[(0,a.Lk)("span",fn,(0,Ce.v_)(n.star),1)]),(0,a.Lk)("div",_n,[(0,a.Lk)("div",Ln,[(0,a.bF)(i,{name:"fork"})]),bn]),(0,a.Lk)("div",kn,[(0,a.Lk)("span",wn,(0,Ce.v_)(n.fork),1)])])}var Sn={name:"rating",props:{star:{type:String,required:!0,default:"156k"},fork:{type:Number,required:!0,default:4}},components:{icon:de}};const xn=(0,l.A)(Sn,[["render",yn],["__scopeId","data-v-9b9671da"]]);var Fn=xn,En={name:"card",props:{cardTitle:{type:String,required:!0,default:"Vue.js"},cardDescTitle:{type:String,required:!0,default:"JavaScript "},cardDesc:{type:String,required:!0,default:"framework for building interactive web applications ⚡"}},components:{rating:Fn}};const An=(0,l.A)(En,[["render",un],["__scopeId","data-v-778f3b4e"]]);var Vn=An,Xn={name:"post",components:{users:Ie,feed:sn,card:Vn}};const Hn=(0,l.A)(Xn,[["render",$t],["__scopeId","data-v-00eb4624"]]);var On=Hn;const Tn={class:"c-header-nav"},In={class:"icon-button"},Mn={class:"icon-button icon-button--avatar"},$n=["src"],Rn={class:"icon-button"};function Nn(e,t,n,r,s,o){const i=(0,a.g2)("icon");return(0,a.uX)(),(0,a.CE)("div",Tn,[(0,a.Lk)("button",In,[(0,a.bF)(i,{name:"home"})]),(0,a.Lk)("button",Mn,[(0,a.Lk)("img",{class:"avatar",src:n.avatarUrl},null,8,$n)]),(0,a.Lk)("button",Rn,[(0,a.bF)(i,{name:"exit"})])])}var Zn={name:"headerNav",components:{icon:de},props:{avatarUrl:{type:String,required:!0,default:"https://p-hold.com/people/300/300"}}};const jn=(0,l.A)(Zn,[["render",Nn],["__scopeId","data-v-7ce36cf0"]]);var Dn=jn,qn={name:"feeds",components:{topline:wt,logo:Z,userStories:Vt,post:On,headerNav:Dn},computed:{...(0,u.aH)({trendings:e=>e.trendings.data})},data(){return{items:[]}},methods:{...(0,u.i0)({fetchTrendings:"fetchTrendings"}),getStoryData(e){return{id:e.id,userAvatar:e.owner?.avatar_url,userLogin:e.owner?.login,content:e.readme}}},async created(){try{await this.fetchTrendings()}catch(e){console.log(e)}}};const Bn=(0,l.A)(qn,[["render",Ct],["__scopeId","data-v-3fb0f7c9"]]);var Pn=Bn,Un=[{path:"/",component:Pn,name:Pn},{path:"/stories/:id",component:it,name:it}],Kn=(0,L.aE)({routes:Un,history:(0,L.Bt)()});(0,s.Ef)(d).use(Kn).use(_).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,a){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],a=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,s,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var d=l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkgitogram"]=self["webpackChunkgitogram"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6607)}));r=n.O(r)})();
//# sourceMappingURL=app.b8db414b.js.map