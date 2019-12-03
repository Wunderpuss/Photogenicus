/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/firstson/Documents/GitHub/Photogenicus/src/client/index.js: Unexpected token (9:4)\\n\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mRender\\u001b[39m \\u001b[33mMe\\u001b[39m\\u001b[33m!\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m  )\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:6975:17)\\n    at Parser.unexpected (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:8368:16)\\n    at Parser.parseExprAtom (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9627:20)\\n    at Parser.parseExprSubscripts (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9210:23)\\n    at Parser.parseMaybeUnary (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9190:21)\\n    at Parser.parseExprOps (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Parser.parseMaybeConditional (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9029:23)\\n    at Parser.parseMaybeAssign (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:8975:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9765:28)\\n    at Parser.parseExprAtom (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9548:21)\\n    at Parser.parseExprSubscripts (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9210:23)\\n    at Parser.parseMaybeUnary (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9190:21)\\n    at Parser.parseExprOps (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9056:23)\\n    at Parser.parseMaybeConditional (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:9029:23)\\n    at Parser.parseMaybeAssign (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:8975:21)\\n    at Parser.parseExpression (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:8925:23)\\n    at Parser.parseReturnStatement (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11025:28)\\n    at Parser.parseStatementContent (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10704:21)\\n    at Parser.parseStatement (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10656:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11232:25)\\n    at Parser.parseBlockBody (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11219:10)\\n    at Parser.parseBlock (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11203:10)\\n    at Parser.parseFunctionBody (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10222:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10192:10)\\n    at /Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11364:12\\n    at Parser.withTopicForbiddingContext (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10531:14)\\n    at Parser.parseFunction (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11363:10)\\n    at Parser.parseFunctionStatement (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:11004:17)\\n    at Parser.parseStatementContent (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10694:21)\\n    at Parser.parseStatement (/Users/firstson/Documents/GitHub/Photogenicus/node_modules/@babel/parser/lib/index.js:10656:17)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9jbGllbnQvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/index.js\n");

/***/ })

/******/ });