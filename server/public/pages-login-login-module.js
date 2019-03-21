(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <div class=\"card\">\r\n    <div class=\"login-logo\">\r\n      <a> Simple ChatApp</a>\r\n    </div>\r\n    <div class=\"card-body login-card-body\" *ngIf=\"!regclick\">\r\n      <form\r\n        #loginuser=\"ngForm\"\r\n        (ngSubmit)=\"loginUser()\"\r\n        class=\"form-horizontal\"\r\n        autocomplete=\"off\"\r\n      >\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"username\">Username*</label>\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"test\"\r\n              required\r\n              [(ngModel)]=\"login.username\"\r\n              #username=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"username\"\r\n              placeholder=\"Enter username\"\r\n              name=\"username\"\r\n            />\r\n            <span\r\n              class=\"help-block\"\r\n              *ngIf=\"username.invalid && username.touched\"\r\n              >Username is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"password\">Password*</label>\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"password\"\r\n              required\r\n              [(ngModel)]=\"login.password\"\r\n              #password=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"password\"\r\n              placeholder=\"Enter password\"\r\n              name=\"password\"\r\n            />\r\n            <span\r\n              class=\"help-block\"\r\n              *ngIf=\"password.errors?.required && password.touched\"\r\n              >Password is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-12\">\r\n            <button\r\n              [disabled]=\"loading || loginuser.invalid\"\r\n              type=\"submit\"\r\n              class=\"btn btn-primary btn-block text-center\"\r\n            >\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>&nbsp; Login\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-12 text-center\">\r\n            <a\r\n              href=\"javascript:void(0)\"\r\n              class=\"btn btn-link\"\r\n              (click)=\"openReg()\"\r\n              >Create Account</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"card-body login-card-body\" *ngIf=\"regclick\">\r\n      <form\r\n        #reguser=\"ngForm\"\r\n        (ngSubmit)=\"regUser()\"\r\n        class=\"form-horizontal\"\r\n        autocomplete=\"off\"\r\n      >\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"first_name\"\r\n            >First name*</label\r\n          >\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"text\"\r\n              required\r\n              [(ngModel)]=\"reg.first_name\"\r\n              #first_name=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"first_name\"\r\n              placeholder=\"Enter first name\"\r\n              name=\"first_name\"\r\n            />\r\n            <span class=\"help-block\" *ngIf=\"first_name.invalid && first_name.touched\"\r\n              >First name is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"last_name\"\r\n            >Last name*</label\r\n          >\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"text\"\r\n              required\r\n              [(ngModel)]=\"reg.last_name\"\r\n              #last_name=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"last_name\"\r\n              placeholder=\"Enter last name\"\r\n              name=\"last_name\"\r\n            />\r\n            <span class=\"help-block\" *ngIf=\"last_name.invalid && last_name.touched\"\r\n              >Last name is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"email\">Email*</label>\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"email\"\r\n              required\r\n              [(ngModel)]=\"reg.email\"\r\n              #email=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"email\"\r\n              placeholder=\"Enter email\"\r\n              name=\"email\"\r\n            />\r\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.touched\"\r\n              >Email is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"username\">Username*</label>\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"test\"\r\n              required\r\n              [(ngModel)]=\"reg.username\"\r\n              #username=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"username\"\r\n              placeholder=\"Enter username\"\r\n              name=\"username\"\r\n            />\r\n            <span\r\n              class=\"help-block\"\r\n              *ngIf=\"username.invalid && username.touched\"\r\n              >Username is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\">\r\n            <label class=\"control-label col-md-4\" for=\"mobile_no\">Mobile*</label>\r\n            <div class=\"col-md-8\">\r\n              <input\r\n                type=\"test\"\r\n                required\r\n                [(ngModel)]=\"reg.mobile_no\"\r\n                #mobile_no=\"ngModel\"\r\n                class=\"form-control\"\r\n                id=\"mobile_no\"\r\n                placeholder=\"Enter mobile no.\"\r\n                name=\"mobile_no\"\r\n              />\r\n              <span\r\n                class=\"help-block\"\r\n                *ngIf=\"mobile_no.invalid && mobile_no.touched\"\r\n                >Mobile no is Required</span\r\n              >\r\n            </div>\r\n          </div>\r\n        <div class=\"form-group row\">\r\n          <label class=\"control-label col-md-4\" for=\"password\">Password*</label>\r\n          <div class=\"col-md-8\">\r\n            <input\r\n              type=\"password\"\r\n              required\r\n              [(ngModel)]=\"reg.password\"\r\n              #password=\"ngModel\"\r\n              class=\"form-control\"\r\n              id=\"password\"\r\n              placeholder=\"Enter password\"\r\n              name=\"password\"\r\n            />\r\n            <span\r\n              class=\"help-block\"\r\n              *ngIf=\"password.errors?.required && password.touched\"\r\n              >Password is Required</span\r\n            >\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <div class=\"col-md-12\">\r\n            <button\r\n              [disabled]=\"loading || reguser.invalid\"\r\n              type=\"submit\"\r\n              class=\"btn btn-primary btn-block text-center\"\r\n            >\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>&nbsp;\r\n              Registration\r\n            </button>\r\n          </div>\r\n          <div class=\"col-md-12 text-center\">\r\n            <a\r\n              href=\"javascript:void(0)\"\r\n              class=\"btn btn-link\"\r\n              (click)=\"openReg()\"\r\n              >Back to Login</a\r\n            >\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* import { ToastsManager } from 'ng2-toastr/ng2-toastr'; */

var LoginComponent = /** @class */ (function () {
    function LoginComponent(adminLoginService, router, toastr) {
        this.adminLoginService = adminLoginService;
        this.router = router;
        this.toastr = toastr;
        this.login = {};
        this.reg = {};
        this.loading = false;
        this.regclick = false;
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.loading = true;
        this.adminLoginService.adminLogin(this.login).subscribe(function (data) {
            _this.login = {};
            _this.loading = false;
            _this.router.navigate(["/app/dashboard"]);
        }, function (error) {
            _this.loading = false;
            _this.toastr.error(error);
        });
    };
    LoginComponent.prototype.openReg = function () {
        this.regclick = !this.regclick;
    };
    LoginComponent.prototype.regUser = function () {
        var _this = this;
        this.loading = true;
        this.adminLoginService.registration(this.reg).subscribe(function (data) {
            _this.reg = {};
            _this.loading = false;
            _this.router.navigate(["/"]);
            _this.openReg();
        }, function (error) {
            _this.loading = false;
            _this.toastr.error(error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["AdminLoginService"]]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["AdminLoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var loginRoutes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes)
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: AdminLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginService", function() { return AdminLoginService; });
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




var AdminLoginService = /** @class */ (function () {
    function AdminLoginService(http) {
        this.http = http;
    }
    AdminLoginService.prototype.adminLogin = function (login) {
        return this.http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'admin/login', login)
            .map(function (response) {
            localStorage.setItem('token', response.result.user.token);
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('username', response.result.user.username);
            return response;
        });
    };
    AdminLoginService.prototype.registration = function (reg) {
        return this.http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'registration', reg)
            .map(function (response) {
            return response;
        });
    };
    AdminLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminLoginService);
    return AdminLoginService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map