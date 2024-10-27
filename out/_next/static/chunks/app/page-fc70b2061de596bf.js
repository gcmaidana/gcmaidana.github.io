(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3217:function(e,t,r){Promise.resolve().then(r.bind(r,4367))},5424:function(e,t,r){"use strict";var n=r(7437),a=r(2265),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function o(e,t){var r,n;switch(t.type){case"TYPE":return i(i({},e),{speed:t.speed,text:null===(r=t.payload)||void 0===r?void 0:r.substring(0,e.text.length+1)});case"DELAY":return i(i({},e),{speed:t.payload});case"DELETE":return i(i({},e),{speed:t.speed,text:null===(n=t.payload)||void 0===n?void 0:n.substring(0,e.text.length-1)});case"COUNT":return i(i({},e),{count:e.count+1});default:return e}}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var s=a.memo(function(e){var t=e.cursorBlinking,r=e.cursorStyle,a=e.cursorColor;return n.jsx("span",i({style:{color:void 0===a?"inherit":a},className:"".concat("styles-module_blinkingCursor__yugAC"," ").concat(void 0===t||t?"styles-module_blinking__9VXRT":"")},{children:void 0===r?"|":r}))});t.CF=s,t.Ku=function(e){var t=e.words,r=void 0===t?["Hello World!","This is","a simple Typewriter"]:t,n=e.loop,i=void 0===n?1:n,s=e.typeSpeed,l=void 0===s?80:s,c=e.deleteSpeed,d=void 0===c?50:c,u=e.delaySpeed,m=void 0===u?1500:u,p=e.onLoopDone,h=e.onType,g=e.onDelete,f=e.onDelay,x=a.useReducer(o,{speed:l,text:"",count:0}),b=x[0],y=b.speed,v=b.text,j=b.count,w=x[1],N=a.useRef(0),k=a.useRef(!1),S=a.useRef(!1),T=a.useRef(!1),E=a.useRef(!1),O=a.useCallback(function(){var e=j%r.length,t=r[e];S.current?(w({type:"DELETE",payload:t,speed:d}),""===v&&(S.current=!1,w({type:"COUNT"}))):(w({type:"TYPE",payload:t,speed:l}),T.current=!0,v===t&&(w({type:"DELAY",payload:m}),T.current=!1,E.current=!0,setTimeout(function(){E.current=!1,S.current=!0},m),i>0&&(N.current+=1,N.current/r.length===i&&(E.current=!1,k.current=!0)))),T.current&&h&&h(N.current),S.current&&g&&g(),E.current&&f&&f()},[j,m,d,i,l,r,v,h,g,f]);return a.useEffect(function(){var e=setTimeout(O,y);return k.current&&clearTimeout(e),function(){return clearTimeout(e)}},[O,y]),a.useEffect(function(){p&&k.current&&p()},[p]),[v,{isType:T.current,isDelay:E.current,isDelete:S.current,isDone:k.current}]}},4367:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7437),a=r(2265),i=()=>{let[e,t]=(0,a.useState)("intro");return(0,a.useEffect)(()=>{let e=document.querySelectorAll("section"),r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(console.log("Currently visible section:",e.target.id),t(e.target.id))})},{threshold:.1,rootMargin:"0px 0px -25% 0px"});return e.forEach(e=>r.observe(e)),()=>{e.forEach(e=>r.unobserve(e))}},[]),(0,n.jsx)("nav",{className:"fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-lg",children:(0,n.jsxs)("ul",{className:"flex justify-center space-x-6",children:[(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"#intro",className:"".concat("intro"===e?"text-white":"text-gray-400"," relative px-3 py-1 transition-colors duration-300 hover:text-orange-500"),children:["Intro",(0,n.jsx)("span",{className:"absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ".concat("intro"===e?"scale-x-100":"scale-x-0")})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"#about",className:"".concat("about"===e?"text-white":"text-gray-400"," relative px-3 py-1 transition-colors duration-300 hover:text-orange-500"),children:["About",(0,n.jsx)("span",{className:"absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ".concat("about"===e?"scale-x-100":"scale-x-0")})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"#projects",className:"".concat("projects"===e?"text-white":"text-gray-400"," relative px-3 py-1 transition-colors duration-300 hover:text-orange-500"),children:["Projects",(0,n.jsx)("span",{className:"absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ".concat("projects"===e?"scale-x-100":"scale-x-0")})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"#contact",className:"".concat("contact"===e?"text-white":"text-gray-400"," relative px-3 py-1 transition-colors duration-300 hover:text-orange-500"),children:["Contact",(0,n.jsx)("span",{className:"absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 ".concat("contact"===e?"scale-x-100":"scale-x-0")})]})})]})})},o=r(5424),s=()=>{let[e,t]=(0,a.useState)(""),[r]=(0,o.Ku)({words:["Seeking Software Engineer position","Seeking Game Developer position"],loop:!0,delaySpeed:2e3});return(0,a.useEffect)(()=>{let e=["/images/blue.jpg","/images/lighthouse.jpg","/images/tree.jpg"];t(e[Math.floor(Math.random()*e.length)])},[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsxs)("section",{id:"intro",className:"h-screen flex flex-col justify-center items-center text-white relative",style:{backgroundImage:"url(".concat(e,")"),backgroundSize:"cover",backgroundPosition:"center"},children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h1",{style:{fontSize:"clamp(2.5rem, 8vw, 5.9375rem)"},className:"font-normal",children:"Hey, I'm Gean"}),(0,n.jsxs)("h2",{style:{fontSize:"clamp(1.5rem, 5vw, 3.125rem)"},className:"font-normal mb-4",children:[r,(0,n.jsx)(o.CF,{})]})]}),(0,n.jsx)("div",{className:"absolute bottom-10 flex justify-center",children:(0,n.jsx)("div",{className:"h-14 w-14 rounded-full border-2 border-white flex items-center justify-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity",onClick:()=>{let e=document.getElementById("about");e&&e.scrollIntoView({behavior:"smooth"})},children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})})})]})]})},l=r(9089),c=()=>(0,n.jsxs)("section",{id:"about",className:"h-screen flex flex-col justify-center items-center text-gray-100",style:{backgroundColor:"#000000"},children:[(0,n.jsx)("h2",{className:"text-4xl font-bold text-center mb-8",children:"About Me"}),(0,n.jsx)("p",{className:"text-lg text-center max-w-3xl leading-relaxed mb-8 px-4 md:px-0",children:"Hi, I'm Gean! I hold a Computer Science degree and as an aspiring Software Engineer and Game Developer, I love tackling creative challenges and finding innovative solutions. While I often work with Python and C++, I'm always excited to explore new technologies as you can tell from my projects! My projects tend to come from the gaming world as I find it easier to come up with fun and creative ideas in the gaming space, but I'm open to applying my skills in any industry where creativity and problem-solving are key."}),(0,n.jsxs)("div",{className:"flex items-center justify-center mb-8 space-x-8",children:[(0,n.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,n.jsx)("span",{className:"text-4xl text-purple-400 mb-2",children:(0,n.jsx)(l.tvD,{})}),(0,n.jsx)("p",{children:"Software Development"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center text-center",children:[(0,n.jsx)("span",{className:"text-4xl text-green-400 mb-2",children:(0,n.jsx)(l.iVx,{})}),(0,n.jsx)("p",{children:"Game Development"})]})]}),(0,n.jsx)("div",{className:"text-center mt-4",children:(0,n.jsx)("a",{href:"#contact",className:"inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition",children:"Get in Touch"})})]});let d=e=>{let{title:t,description:r,imageUrl:a,technologies:i,githubUrl:o}=e;return(0,n.jsxs)("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"group relative bg-white shadow-lg rounded-lg overflow-hidden p-6 w-full transform transition-transform duration-300 hover:scale-105 flex flex-col h-full",children:[(0,n.jsx)("div",{className:"w-full h-48 overflow-hidden",children:(0,n.jsx)("img",{src:a,alt:t,className:"w-full h-full object-contain transition-filter duration-300 group-hover:blur-md"})}),(0,n.jsx)("h3",{className:"text-2xl font-bold text-black mt-4 transition-filter duration-300 group-hover:blur-md",children:t}),(0,n.jsx)("p",{className:"text-gray-700 mt-2 flex-grow mb-6 transition-filter duration-300 group-hover:blur-md",children:r}),(0,n.jsx)("div",{className:"flex flex-wrap gap-2 mt-auto transition-filter duration-300 group-hover:blur-md",children:i.map((e,t)=>(0,n.jsx)("span",{className:"px-3 py-1 bg-black text-white border border-neon-purple rounded-full shadow-sm",style:{borderColor:"#9b00ff",color:"#fff"},children:e},t))}),(0,n.jsx)("div",{className:"absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:(0,n.jsx)("span",{className:"text-4xl text-black",children:(0,n.jsx)(l.hJX,{})})})]})};var u=()=>{let e=[{title:"Personal Portfolio Website",description:(0,n.jsxs)(n.Fragment,{children:["This is my re-created portfolio website. My previous site was built with HTML, CSS, and JavaScript. The old site had separate HTML files for each page, making updates cumbersome. I decided to build this single-page application using Next.js to enhance my web development skills and streamline my workflow. Thank you to Jasmine for allowing me to borrow aspects of her design for my previous page. Some of them are still used on this site! Her website can be found at",(0,n.jsxs)("span",{className:"font-bold text-blue-500",children:[" ","https://jasminehn.github.io/"]}),". The intro page images on this site are free images from"," ",(0,n.jsx)("span",{className:"font-bold text-blue-500",children:" pixabay.com"}),"."]}),imageUrl:"https://raw.githubusercontent.com/gcmaidana/gcmaidana.github.io/refs/heads/main/personal-website.jpg",technologies:["NextJS","Tailwind CSS","TypeScript"],githubUrl:"https://github.com/gcmaidana/gcmaidana.github.io/"},{title:"VisionWatch",description:"VisionWatch is an application that automatically detects wins and losses in a game of Overwatch using OpenCV for image pre-processing and Tesseract for Optical Character Recognition (OCR).",imageUrl:"https://raw.githubusercontent.com/gcmaidana/Visionwatch/refs/heads/master/images/ocr_defeat.gif",technologies:["Python","OpenCV","Tesseract"],githubUrl:"https://github.com/gcmaidana/Visionwatch"},{title:"image2PDF",description:"image2PDF is an Android app that converts up to 10 images that a user takes or uploads into a single PDF file.",imageUrl:"https://raw.githubusercontent.com/gcmaidana/image2PDF/refs/heads/master/screenshots/uploadedimages1.jpg",technologies:["Java","XML"],githubUrl:"https://github.com/gcmaidana/image2PDF"},{title:"TikTok Auto Scroller",description:"This project is a Chrome extension for TikTok that auto-scrolls to the next video after the current video ends.",imageUrl:"https://raw.githubusercontent.com/gcmaidana/TikTok-Auto-Scroller/refs/heads/main/tiktokSS.jpg",technologies:["JavaScript"],githubUrl:"https://github.com/gcmaidana/TikTok-Auto-Scroller"},{title:"Escape The Arena",description:"Escape The Arena is a simple horror game I created in Unreal Engine 5 to better understand the engine.",imageUrl:"https://raw.githubusercontent.com/gcmaidana/EscapeTheArena/refs/heads/main/img/enemy.png",technologies:["Unreal Engine 5"],githubUrl:"https://github.com/gcmaidana/EscapeTheArena"},{title:"BAMSS",description:"Basketball Assistant with Metric Statistics and Scoreboard (BAMSS) is a program built during my Intermediate Software Engineering course.",imageUrl:"https://raw.githubusercontent.com/gcmaidana/BAMSS/refs/heads/main/premium.png",technologies:["C++","MySQL",".NET Framework"],githubUrl:"https://github.com/gcmaidana/BAMSS"},{title:"Tetris",description:"Re-creation of the popular game Tetris, built in my Software Reengineering and Maintenance course.",imageUrl:"https://raw.githubusercontent.com/gcmaidana/Tetris/refs/heads/main/d480be9617a7c815e2cf51df0c04ee21.png",technologies:["Java","JavaFX"],githubUrl:"https://github.com/gcmaidana/tetris"},{title:"Twilight",description:"Twilight is a game created as a group project for my Intro to Software Engineering class.",imageUrl:"https://raw.githubusercontent.com/gcmaidana/twilight-game/refs/heads/master/2b1b185858d7cd6a89a3cb0b5c1cbcbd.png",technologies:["Java","LibGDX"],githubUrl:"https://github.com/gcmaidana/twilight-game"},{title:"Seminar Paper",description:"This paper was written for a seminar course during my undergraduate studies, where students explored specific topics in depth. I chose to focus on Natural Language Understanding and Translation. Although it’s not a programming project, this paper offers valuable insights into the workings of AI systems like Apple's Siri and Google Translate on a fundamental level. Given the increasing relevance of AI in today's world, I still appreciate this paper for its comprehensive look at how these systems operate, both in software and hardware contexts.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Translate_Icon.png",technologies:["Microsoft Word"],githubUrl:"https://github.com/gcmaidana/Seminar-Paper/blob/main/maidanadollanartegean_seminarpaper_finalversion.pdf"}];return(0,n.jsxs)("section",{id:"projects",className:"py-24 text-gray-100 scroll-mt-20",style:{backgroundColor:"#000000",minHeight:"100vh",paddingBottom:"2rem"},children:[(0,n.jsx)("h2",{className:"text-4xl font-bold text-center mb-12",children:"My Projects"}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 container mx-auto px-4",children:e.map((e,t)=>(0,n.jsx)(d,{title:e.title,description:e.description,imageUrl:e.imageUrl,technologies:e.technologies,githubUrl:e.githubUrl},t))})]})},m=()=>(0,n.jsx)("section",{id:"contact",className:"py-24 text-gray-100 flex justify-center items-center",style:{backgroundColor:"#000000",minHeight:"100vh"},children:(0,n.jsxs)("div",{className:"w-full max-w-lg bg-white p-8 rounded-lg shadow-md text-center",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold text-center mb-4 text-gray-900",children:"Get in Touch"}),(0,n.jsx)("p",{className:"text-lg text-gray-700 mb-6",children:"Feel free to reach out about job opportunities or to ask any questions!"}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)("a",{href:"mailto:geanmaidana@outlook.com",className:"inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300",children:[(0,n.jsx)("span",{className:"mr-2 text-xl",children:(0,n.jsx)(l.SRX,{})}),"E-mail Me"]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("a",{href:"https://linkedin.com/in/gean-maidana",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300",children:[(0,n.jsx)("span",{className:"mr-2 text-xl",children:(0,n.jsx)(l.ltd,{})}),"Connect on LinkedIn"]})})]})}),p=()=>(0,n.jsxs)("div",{className:"font-quicksand",children:[(0,n.jsx)(s,{})," ",(0,n.jsx)(c,{})," ",(0,n.jsx)(u,{})," ",(0,n.jsx)(m,{})," "]})},6231:function(e,t,r){"use strict";r.d(t,{w_:function(){return d}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){return t=>n.createElement(u,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:a,size:i,title:l}=e,d=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[699,971,117,744],function(){return e(e.s=3217)}),_N_E=e.O()}]);