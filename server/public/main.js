(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/dashboard/views/profile/profile.module": [
		"./src/app/pages/dashboard/views/profile/profile.module.ts",
		"pages-dashboard-views-profile-profile-module"
	],
	"./pages/login/login.module": [
		"./src/app/pages/login/login.module.ts",
		"pages-login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-digid',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/dashboard/navbar/navbar.component */ "./src/app/pages/dashboard/navbar/navbar.component.ts");
/* harmony import */ var _pages_dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dashboard/sidebar/sidebar.component */ "./src/app/pages/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/dashboard/footer/footer.component */ "./src/app/pages/dashboard/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// providers

// Routing pages down below




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRouting"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _pages_dashboard_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _pages_dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
                _pages_dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            exports: [],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', loadChildren: './pages/login/login.module#LoginModule' },
    {
        path: 'app', component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: 'dashboard', loadChildren: './pages/dashboard/views/profile/profile.module#ProfileModule' }
        ]
    },
    //    otherwise redirect to home
    { path: '**', redirectTo: '/' }
];
var AppRouting = /** @class */ (function () {
    //export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
        //export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.verifyLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.verifyLogin(url);
    };
    // Verify login
    AuthGuard.prototype.verifyLogin = function (url) {
        if (!this.isLoggedIn()) {
            // not logged in so return to login page
            this.router.navigate(['/login']);
            return false;
        }
        else if (this.isLoggedIn()) {
            // logged in so return true
            return true;
        }
    };
    AuthGuard.prototype.isLoggedIn = function () {
        var status = false;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/helpers/app.setting.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/app.setting.ts ***!
  \****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = '/API/V1/';
    AppSettings.BASE_URL = 'http://localhost:4200/';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/helpers/encrypt.ts":
/*!************************************!*\
  !*** ./src/app/helpers/encrypt.ts ***!
  \************************************/
/*! exports provided: Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return Base64; });
var Base64 = /** @class */ (function () {
    function Base64() {
    }
    Base64.encode = function (e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = this._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            }
            else if (isNaN(i)) {
                a = 64;
            }
            t = t + Base64._keyStr.charAt(s) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(u) + Base64._keyStr.charAt(a);
        }
        return t;
    };
    Base64.decode = function (e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = Base64._keyStr.indexOf(e.charAt(f++));
            o = Base64._keyStr.indexOf(e.charAt(f++));
            u = Base64._keyStr.indexOf(e.charAt(f++));
            a = Base64._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = this._utf8_decode(t);
        return t;
    };
    Base64._utf8_encode = function (e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            }
            else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            }
            else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    };
    Base64._utf8_decode = function (e) {
        var t = "";
        var n = 0;
        var r = 0;
        var c3 = 0;
        var c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            }
            else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            }
            else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    };
    Base64._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    return Base64;
}());



/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: JwtInterceptor, AppSettings, Base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _app_setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.setting */ "./src/app/helpers/app.setting.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return _app_setting__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]; });

/* harmony import */ var _encrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encrypt */ "./src/app/helpers/encrypt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base64", function() { return _encrypt__WEBPACK_IMPORTED_MODULE_2__["Base64"]; });






/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_compat_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs-compat/add/operator/do */ "./node_modules/rxjs-compat/add/operator/do.js");
/* harmony import */ var rxjs_compat_add_operator_do__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_do__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs-compat/add/operator/catch */ "./node_modules/rxjs-compat/add/operator/catch.js");
/* harmony import */ var rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_compat_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs-compat/add/observable/throw */ "./node_modules/rxjs-compat/add/observable/throw.js");
/* harmony import */ var rxjs_compat_add_observable_throw__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var started = Date.now();
        var isLoggedIn = localStorage.getItem('isLoggedIn');
        var token = localStorage.getItem('token');
        if (isLoggedIn && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request)
            .do(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var elapsed = Date.now() - started;
                console.log("Request for " + request.urlWithParams + " took " + elapsed + " ms.");
            }
        })
            .catch(function (err) {
            var elapsed = Date.now() - started;
            console.log("Request for " + request.urlWithParams + " failed after " + elapsed + " ms.");
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.error.message);
        });
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/language.ts":
/*!*************************************!*\
  !*** ./src/app/helpers/language.ts ***!
  \*************************************/
/*! exports provided: LangFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangFile", function() { return LangFile; });
// Client side config message file
var LangFile = /** @class */ (function () {
    function LangFile() {
    }
    LangFile.InactiveUser = 'Do you really want to inactive this User?';
    LangFile.DeleteGate = 'Do you really want to delete this Gate?';
    LangFile.InactiveGuard = 'Do you really want to inactive this Guard?';
    LangFile.LogoutSuccess = 'Successfully logged out';
    LangFile.GeneratePassword = 'Password Generated Successfully';
    LangFile.UserCreated = 'Admin User Created and Password has been sent successfully';
    LangFile.GuardCreated = 'Guard Created and Password has been sent successfully';
    LangFile.BuildingCreated = 'Building created successfully';
    return LangFile;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <app-navbar></app-navbar>\r\n  <div class=\"content-wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n<!--   <app-footer></app-footer> -->\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer text-center\">\r\n  <strong>Powered by <a href=\"http://bluecoppertech.com\">Blue Copper Technologies</a>.</strong>\r\n</footer>"

/***/ }),

/***/ "./src/app/pages/dashboard/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/pages/dashboard/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/pages/dashboard/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/navbar/navbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/navbar/navbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-header navbar navbar-expand bg-white navbar-light border-bottom\">\r\n  <div class=\"PAD-15R\" style=\"color: #fff\">\r\n    Simple Chat App\r\n  </div>\r\n\r\n  <ul class=\"navbar-nav\">\r\n    <li class=\"nav-item\">\r\n    </li>\r\n\r\n\r\n  </ul>\r\n  <ul class=\"navbar-nav ml-auto\">\r\n\r\n    <li class=\"nav-item d-none d-sm-inline-block\">\r\n      <a [routerLink]=\"['/app/dashboard']\" [routerLinkActive]=\"['active']\" class=\"nav-link\">\r\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i> Hi, Admin</a>\r\n    </li>\r\n    <li class=\"nav-item d-none d-sm-inline-block cursor-hand\">\r\n      <a (click)=\"logout()\" class=\"nav-link\">\r\n        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>&nbsp;Logout</a>\r\n    </li>\r\n  </ul>\r\n\r\n\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _helpers_language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/language */ "./src/app/helpers/language.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authService, toastr) {
        this.router = router;
        this.authService = authService;
        this.toastr = toastr;
        this.showUser = false;
        this.showRoleManagement = false;
        this.user = '';
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
        this.router.navigate(['/']);
        this.toastr.success(_helpers_language__WEBPACK_IMPORTED_MODULE_4__["LangFile"].LogoutSuccess);
        localStorage.removeItem('username');
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('username');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/pages/dashboard/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/pages/dashboard/navbar/navbar.component.css")],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/sidebar/sidebar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/sidebar/sidebar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/sidebar/sidebar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/sidebar/sidebar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar sidebar-dark-primary elevation-4\">\r\n  <a href=\"#\" class=\"brand-link\">\r\n    <img src=\"assets/img/AdminLTELogo.png\" alt=\"AdminLTE Logo\" class=\"brand-image img-circle elevation-3\" style=\"opacity: .8\">\r\n    <span class=\"brand-text font-weight-light\">Digi-Id</span>\r\n  </a>\r\n  <div class=\"sidebar\">\r\n    <nav class=\"mt-2\">\r\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\r\n        <li class=\"nav-item user\">\r\n          <a [routerLink]=\"['/user']\" class=\"nav-link\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"nav-icon fa fa-dashboard \"></i>\r\n            <p>\r\n              User\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item buildings\">\r\n          <a [routerLink]=\"['/building']\" class=\"nav-link\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"nav-icon fa fa-calendar \"></i>\r\n            <p>\r\n              Buildings\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item hosts\">\r\n          <a [routerLink]=\"['/host']\" class=\"nav-link\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"nav-icon fa fa-envelope-o\"></i>\r\n            <p>\r\n              Hosts\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item guards\">\r\n          <a [routerLink]=\"['/guard']\" class=\"nav-link\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"nav-icon fa fa-book\"></i>\r\n            <p>\r\n              Guards\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item poe\">\r\n          <a [routerLink]=\"['/poe']\" class=\"nav-link\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"nav-icon fa fa-plus-square-o\"></i>\r\n            <p>\r\n              PoE\r\n            </p>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item reports\">\r\n          <a [routerLink]=\"['/report']\" class=\"nav-link\" [routerLinkActive]=\"['active']\">\r\n            <i class=\"nav-icon fa fa-plus\"></i>\r\n            <p>\r\n              Reports\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</aside>"

/***/ }),

/***/ "./src/app/pages/dashboard/sidebar/sidebar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/sidebar/sidebar.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/pages/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/pages/dashboard/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/app/helpers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.logout = function () {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
    };
    AuthService.prototype.authLogin = function (logindata) {
        return this._http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'signin', logindata)
            .map(function (response) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('isLoggedIn', "true");
            return response;
        });
    };
    AuthService.prototype.registration = function (regdata) {
        return this._http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'signup', regdata)
            .map(function (response) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('isLoggedIn', "true");
            return response;
        });
    };
    AuthService.prototype.forgotPassword = function (data) {
        return this._http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'forgotPassword', data)
            .map(function (response) {
            return response;
        });
    };
    AuthService.prototype.resetPassword = function (data) {
        return this._http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'resetPassword/' + data.token, data)
            .map(function (response) {
            return response;
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\nodejs\simple_chatapp\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map