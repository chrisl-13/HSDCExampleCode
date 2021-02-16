(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3);

// CONCATENATED MODULE: ./src/fakeApi.js
function fetchUser(id){return fetch("https://swapi.dev/api/people/".concat(id,"/")).then(response=>response.json()).then(data=>{const name=data.name;return name;});}function fetchPosts(id){return fetch("https://swapi.dev/api/people/".concat(id,"/")).then(response=>response.json()).then(data=>{const starships=data.starships;return starships;});}
// CONCATENATED MODULE: ./src/index.js
function ProfilePage(){const _useState=Object(react["useState"])(null),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),user=_useState2[0],setUser=_useState2[1];const _useState3=Object(react["useState"])(1),_useState4=Object(slicedToArray["a" /* default */])(_useState3,2),character=_useState4[0],setCharacter=_useState4[1];Object(react["useEffect"])(()=>{fetchUser(character).then(u=>setUser(u));},[character]);if(user===null){return/*#__PURE__*/react_default.a.createElement("p",null,"Loading profile...");}return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement("h1",null,user),/*#__PURE__*/react_default.a.createElement(ProfileTimeline,{user:user,character:character}),/*#__PURE__*/react_default.a.createElement("button",{onClick:()=>setCharacter(character+1)},"Change Character"));}function ProfileTimeline(props){const _useState5=Object(react["useState"])(null),_useState6=Object(slicedToArray["a" /* default */])(_useState5,2),posts=_useState6[0],setPosts=_useState6[1];Object(react["useEffect"])(()=>{fetchPosts(props.character).then(p=>setPosts(p));},[props.character]);if(posts===null){return/*#__PURE__*/react_default.a.createElement("h2",null,"Loading posts...");}return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,posts.length===1?/*#__PURE__*/react_default.a.createElement("h5",null,props.user," has been seen on ",posts.length," starship"):/*#__PURE__*/react_default.a.createElement("h5",null,props.user," has been seen on ",posts.length," starships"),/*#__PURE__*/react_default.a.createElement("ul",null,posts.map((post,idx)=>/*#__PURE__*/react_default.a.createElement("li",{key:idx},post))));}const rootElement=document.getElementById("root");Object(react_dom["render"])(/*#__PURE__*/react_default.a.createElement(ProfilePage,null),rootElement);let fiberRoot=rootElement._reactRootContainer._internalRoot;console.log('fiberRoot',fiberRoot);let hostRootFiberNode=fiberRoot.current;console.log('initial hostRoot',hostRootFiberNode);//first child of hostRoot is ProfilePage 
let profilePageRoot=hostRootFiberNode.child;console.log('profilePageRoot',profilePageRoot);

/***/ })

},[[4,1,2]]]);
//# sourceMappingURL=main.944d0bdd.chunk.js.map