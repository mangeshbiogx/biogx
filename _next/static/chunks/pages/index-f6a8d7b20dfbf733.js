(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(4369)}])},7645:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(dynamicOptions,options){let loadableFn=_loadable.default,loadableOptions=(null==options?void 0:options.suspense)?{}:{loading(param){let{error,isLoading,pastDelay}=param;return null}};if(dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions=_extends({},loadableOptions,dynamicOptions)),(loadableOptions=_extends({},loadableOptions,options)).suspense&&(delete loadableOptions.ssr,delete loadableOptions.loading),loadableOptions.loadableGenerated&&delete(loadableOptions=_extends({},loadableOptions,loadableOptions.loadableGenerated)).loadableGenerated,"boolean"==typeof loadableOptions.ssr&&!loadableOptions.suspense){if(!loadableOptions.ssr)return delete loadableOptions.ssr,noSSR(loadableFn,loadableOptions);delete loadableOptions.ssr}return loadableFn(loadableOptions)},exports.noSSR=noSSR;var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_loadable=(_interop_require_default(__webpack_require__(7294)),_interop_require_default(__webpack_require__(4588)));function noSSR(LoadableInitializer,loadableOptions){return delete loadableOptions.webpack,delete loadableOptions.modules,LoadableInitializer(loadableOptions)}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},3644:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LoadableContext=void 0;var _react=(0,__webpack_require__(2648).Z)(__webpack_require__(7294));let LoadableContext=_react.default.createContext(null);exports.LoadableContext=LoadableContext},4588:function(__unused_webpack_module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _extends=__webpack_require__(6495).Z,_react=(0,__webpack_require__(1598).Z)(__webpack_require__(7294)),_loadableContext=__webpack_require__(3644);let ALL_INITIALIZERS=[],READY_INITIALIZERS=[],initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then(loaded=>(state.loading=!1,state.loaded=loaded,loaded)).catch(err=>{throw state.loading=!1,state.error=err,err}),state}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},opts.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(_err=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(partial){this._state=_extends({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},partial),this._callbacks.forEach(callback=>callback())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return function(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},options);opts.suspense&&(opts.lazy=_react.default.lazy(opts.loader));let subscription=null;function init(){if(!subscription){let sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if(!initialized){let moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push(ids=>{for(let moduleId of moduleIds)if(-1!==ids.indexOf(moduleId))return init()})}function useLoadableModule(){init();let context=_react.default.useContext(_loadableContext.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach(moduleName=>{context(moduleName)})}let LoadableComponent=opts.suspense?function(props,ref){return useLoadableModule(),_react.default.createElement(opts.lazy,_extends({},props,{ref}))}:function(props,ref){useLoadableModule();let state=_react.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,()=>({retry:subscription.retry}),[]),_react.default.useMemo(()=>{var obj;return state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement((obj=state.loaded)&&obj.__esModule?obj.default:obj,props):null},[props,state])};return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then(()=>{if(initializers.length)return flushInitializers(initializers,ids)})}Loadable.preloadAll=()=>new Promise((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)}),Loadable.preloadReady=function(){let ids=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(resolvePreload=>{let res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)})},window.__NEXT_PRELOADREADY=Loadable.preloadReady,exports.default=Loadable},4369:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7160),_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__),next_dynamic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5152),next_dynamic__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7294);function Home(){(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{});let OwlCarousel=next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(568).then(__webpack_require__.t.bind(__webpack_require__,2568,23)),{loadableGenerated:{webpack:()=>[2568]},ssr:!1}),size=function(){let[windowSize,setWindowSize]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({width:void 0,height:void 0});return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{function handleResize(){setWindowSize({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",handleResize),handleResize(),()=>window.removeEventListener("resize",handleResize)},[]),windowSize}();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"banner p-0 pos-r fullscreen-banner ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().homeBanner),style:{height:size.height},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OwlCarousel,{className:"owl-theme",loop:!0,margin:10,dots:!1,items:"1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item hero-overlay",style:{backgroundImage:'url("images/bg/biogx_bg1.jpg")'},"data-bg-img":"images/bg/biogx_bg1.jpg","data-overlay":"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"align-center pt-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-lg-6 col-md-10 col-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading1+" lead font-w-5 text-white",children:"Direct Sample, Simple Yet Superior."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1",{className:"mb-4 text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{className:"text-theme",children:["Xfree",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup",{children:"™"})," Monkeypox*"]}),"  Direct RT-PCR"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading2+" lead font-w-5 text-white",children:"Sample-to-Result Solution."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"btn-box mt-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:"btn btn-theme",href:"#",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Learn More"})]})})]})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item hero-overlay",style:{backgroundImage:'url("images/bg/biogx_bg2.jpg")'},"data-bg-img":"images/bg/biogx_bg2.jpg","data-overlay":"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"align-center pt-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-lg-6 col-md-10 col-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"lead font-w-5 text-white ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading1," "),children:["FDA Emergency Use Authorized ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"  Direct Sample, Extraction-Free. Simple Yet Superior."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1",{className:"mb-4 text-white",children:[" Xfree",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup",{children:"™"})," COVID-19 Direct RT-PCR"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading3,"  lead font-w-5 text-white"),children:["No extraction reagents required  ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"96 and 384-well plate PCR platforms ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"New strains coverage"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"btn-box mt-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:"btn btn-theme",href:"#",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Learn More"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:"btn btn-dark",href:"#",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Calculate Xfree Savings"})]})]})]})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item hero-overlay",style:{backgroundImage:'url("images/bg/biogx_bg3.jpg")'},"data-bg-img":"images/bg/biogx_bg3.jpg","data-overlay":"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"align-center pt-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-lg-6 col-md-10 col-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1",{className:"mb-4 text-white",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-theme",children:"COVID-19/Flu Combo"})," for BD MAX",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup",{children:"™"}),"  for Testing"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"lead font-w-5 text-white ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading2," "),children:["All the components for a complete",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"RT-PCR test in one tube."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"lead font-w-5 text-white ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading3," "),children:["Simultaneously detect SARS-CoV-2, Flu A, Flu B, RSV",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"Fully Automated",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"CE-IVD Marked"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"btn-box mt-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:"btn btn-theme",href:"about-us.html",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Learn More"})]})})]})})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item hero-overlay",style:{backgroundImage:'url("images/bg/biogx_bg4.jpg")'},"data-bg-img":"images/bg/biogx_bg4.jpg","data-overlay":"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"align-center pt-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-lg-6 col-md-10 col-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{className:"mb-4 text-white",children:"Customize your  molecular diagnostics portfolio "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{className:"lead font-w-5 text-white ".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().bannerSubheading2," "),children:["Your Assay. One Tube. Any Platform. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"Just Add Water ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("sup",{children:"™"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"btn-box mt-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{className:"btn btn-theme",href:"about-us.html",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:"Learn More "})]})})]})})})})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"page-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"p-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container-fluid p-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row g-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-md-4","data-bg-img":"images/about/05.jpg"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-md-8 theme-bg py-5 px-lg-8 px-5",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(OwlCarousel,{className:"owl-theme",autoPlay:!1,margin:10,dots:!1,items:"1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"testimonial text-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"testimonial-img mb-2",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img-fluid rounded-circle shadow-sm d-inline-block",src:"images/testimonial/01.jpg",alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"testimonial-content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"testimonial-caption mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:"text-white",children:"Eduardo Almeida"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label",{className:"fst-italic d-block text-light",children:"-WETLAB-2 Scientist Eduardo Almeida, NASA"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"fst-italic text-light",children:"“This is really a marvel of biochemistry because we’re able to put in a mixture of around a dozen components—the salts, enzymes, primers, and probes—that are usually assembled at the last minute and freeze-dry it. So everything you need to run RT-qPCR is there, and it can be stored for months until needed.”"})]})]})})})})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section",{class:"position-relative light-bg",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{class:"container z-index-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"row justify-content-center text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"col-lg-7 col-12",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"section-title mb-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{class:"title mb-5",children:"YOUR ASSAY. ONE TUBE. ANY PLATFORM."})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"images/tube_animation.gif",className:"img-fluid"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"shape-1 overflow-hidden bottom",style:{bottom:"-152px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{fill:"#ffffff","fill-opacity":"1",d:"M0,96L21.8,112C43.6,128,87,160,131,154.7C174.5,149,218,107,262,90.7C305.5,75,349,85,393,122.7C436.4,160,480,224,524,234.7C567.3,245,611,203,655,165.3C698.2,128,742,96,785,85.3C829.1,75,873,85,916,117.3C960,149,1004,203,1047,229.3C1090.9,256,1135,256,1178,234.7C1221.8,213,1265,171,1309,154.7C1352.7,139,1396,149,1418,154.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"p-0 text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"position-relative",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row",style:{justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"col-lg-7 col-12",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{class:"section-title mb-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{class:"title mb-5",children:"YOUR ASSAY. ONE TUBE. ANY PLATFORM."})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-item style-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-icon",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"flaticon-flask"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{children:"ONE-TUBE REAGENTS"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-desc",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Enables any lab to quickly expand their molecular diagnostics menu."})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-3 col-sm-6 mt-5 mt-sm-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-item style-1 active",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-icon",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"flaticon-laboratory"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{children:"FINELY TUNED FORMULAS"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-desc",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Optimizes testing performance and sensitivity"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-3 col-sm-6 mt-5 mt-lg-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-item style-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-icon",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"flaticon-biology-1"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{children:"EASY TO USE"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-desc",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Makes molecular easy for any lab"})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-3 col-sm-6 mt-5 mt-lg-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-item style-1",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"featured-icon",children:[" ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"flaticon-help-call"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{children:"NO REFRIGERATION"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"featured-desc",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"Allows transport and storage at room temperature"})})]})})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{className:"position-relative bg-light",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row align-items-center justify-content-between",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-6 col-12 order-lg-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img-fluid",src:"images/location/biogx_location1.webp",alt:""})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-6 col-12 mt-6 mt-lg-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-md-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2",{className:"title",children:["U.S. ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"images/location/biogx_us.png",className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_titleimage1)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-black font-w-5 mb-3",children:"Expand your molecular diagnostics menu with BioGX Sample-Ready™, custom-designed reagents, mixed and lyophilized in one tube to run on a platform of your choice.  Our Open Source Reagents (OSRs) manufacturing service offers laboratories an excellent option to outsource manufacturing of their Laboratory Developed Tests (LDTs).  The OSRs are fine-tuned to ensure the highest performance in any lab setting, from a sophisticated lab, to a remote lab with limited infrastructure and resources."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"list-unstyled list-icon mt-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-check"})," FDA/EUA COVID-19 Tests"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-check"}),"Custom-designed reagents for LDTs"]})]})]})})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row align-items-center justify-content-between mt-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-6 col-12 mt-6 mt-lg-0 order-lg-1",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row align-items-end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"col-md-12",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2",{className:"title",children:["International ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{src:"images/location/biogx_international.png",className:"".concat(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_titleimage2)})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-black font-w-5 mb-3",children:"Our Sample-Ready™ Reagents are CE-IVD Marked and lyophilized in a single tube enabling labs to select a high-performance mix of all the necessary primers and probes to run fast, accurate and efficient RT-PCR tests.  The BioGX Reagents offer laboratories a wide variety of syndromic groups from respiratory to sexual health, enteric pathogens, drug resistance, meningitis, transplant and tropical disease."})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"list-unstyled list-icon mt-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-check"})," COVID-19/Flu Combo Test for BD MAX™"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{className:"mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-check"})," High volume, multi-platform COVID-19 tests"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-check"})," Extensive portfolio of CE-IVD marked products"]})]})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-6 col-12 order-lg-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"img-fluid",src:"images/location/biogx_location2.webp",alt:""})})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"row justify-content-center text-center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-lg-8 col-12",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"section-title",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"title",children:"From our blog list Latest News"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"lead",children:"Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring a diversity of skills."})]})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"row",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-md-6 col-lg-4 mb-5 mb-lg-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card post-card border-0 rounded-0 shadow-sm bg-transparent",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"card-img-top",src:"images/blog/biogxblog_1.webp",alt:"Image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card-body px-4 pb-4 pt-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-n3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-inline-block white-bg px-2 py-1 text-black box-shadow",children:"10 November 22"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"h4 my-3",children:"BioGX Expands FDA EUA with pixl™ Portable qPCR System for its Direct-Sample COVID-19 Assay"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"px-3 py-2 btn btn-theme",href:"#",children:"Read More  "})})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"link-btn",href:"blog-single.html",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-long-arrow-alt-right"})})]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-md-6 col-lg-4 mb-5 mb-lg-0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card post-card border-0 rounded-0 shadow-sm bg-transparent",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"card-img-top",src:"images/blog/biogxblog_2.jpg",alt:"Image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card-body px-4 pb-4 pt-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-n3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-inline-block white-bg px-2 py-1 text-black box-shadow",children:"20 Octomber 22"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"h4 my-3",children:"BioGX Announces Availability of Xfree PCR Reagents for Monkeypox"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"px-3 py-2 btn btn-theme",href:"#",children:"Read More  "})})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"link-btn",href:"blog-single.html",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-long-arrow-alt-right"})})]})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"col-md-6 col-lg-4",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card post-card border-0 rounded-0 shadow-sm bg-transparent",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img",{className:"card-img-top",src:"images/blog/biogxblog_3.jpg",alt:"Image"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"card-body px-4 pb-4 pt-0",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"mt-n3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"d-inline-block white-bg px-2 py-1 text-black box-shadow",children:"20 July 22"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2",{className:"h4 my-3",children:"BioGX Launches CE-IVD Marked Multi-gene COVID-19 Point-of-Care Test at AACC"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"px-3 py-2 btn btn-theme",href:"#",children:"Read More  "})})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{className:"link-btn",href:"blog-single.html",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("i",{className:"las la-long-arrow-alt-right"})})]})]})]})})]})]})})]})]})}__webpack_require__(9755),__webpack_require__(9755),window.$=__webpack_require__(9755)},7160:function(module){module.exports={bannerSubheading1:"Home_bannerSubheading1__3PBV6",bannerSubheading2:"Home_bannerSubheading2__RbxdQ",bannerSubheading3:"Home_bannerSubheading3___RDHX",homeBanner:"Home_homeBanner__8GPam","owl-stage-outer":"Home_owl-stage-outer__wTWFt",location_titleimage1:"Home_location_titleimage1__KYdU6",location_titleimage2:"Home_location_titleimage2__LZWVF"}},5152:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(7645)}},function(__webpack_require__){__webpack_require__.O(0,[571,774,888,179],function(){return __webpack_require__(__webpack_require__.s=5557)}),_N_E=__webpack_require__.O()}]);