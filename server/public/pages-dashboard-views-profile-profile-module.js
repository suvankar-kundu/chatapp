(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-views-profile-profile-module"],{

/***/ "./src/app/pages/dashboard/views/profile/confirm-equal-validator.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/views/profile/confirm-equal-validator.directive.ts ***!
  \************************************************************************************/
/*! exports provided: ConfirmEqualValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidatorDirective", function() { return ConfirmEqualValidatorDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ConfirmEqualValidatorDirective = /** @class */ (function () {
    function ConfirmEqualValidatorDirective() {
    }
    ConfirmEqualValidatorDirective_1 = ConfirmEqualValidatorDirective;
    ConfirmEqualValidatorDirective.prototype.validate = function (passwordGroup) {
        var passwordField = passwordGroup.get('newpassword');
        var confirmpasswordField = passwordGroup.get('confirmpassword');
        if (passwordField && confirmpasswordField && passwordField.value !== confirmpasswordField.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"],
                    useExisting: ConfirmEqualValidatorDirective_1,
                    multi: true
                }]
        })
    ], ConfirmEqualValidatorDirective);
    return ConfirmEqualValidatorDirective;
    var ConfirmEqualValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/views/profile/profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/views/profile/profile.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.chatbox-holder {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  height: 0;\r\n}\r\n\r\n.chatbox {\r\n  width: 400px;\r\n  height: 400px;\r\n  margin: 0 20px 0 0;\r\n  position: relative;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);\r\n  display: flex;\r\n  flex-flow: column;\r\n  border-radius: 10px 10px 0 0;\r\n  background: white;\r\n  bottom: 0;\r\n  transition: .1s ease-out;\r\n}\r\n\r\n.chatbox-top {\r\n  position: relative;\r\n  display: flex;\r\n  padding: 10px 0;\r\n  border-radius: 10px 10px 0 0;\r\n  background: rgba(0, 0, 0, .05);\r\n}\r\n\r\n.chatbox-icons {\r\n  padding: 0 10px 0 0;\r\n  display: flex;\r\n  position: relative;\r\n}\r\n\r\n.chatbox-icons .fa {\r\n  background: rgba(220, 0, 0, .6);\r\n  padding: 3px 5px;\r\n  margin: 0 0 0 3px;\r\n  color: white;\r\n  border-radius: 0 5px 0 5px;\r\n  transition: 0.3s;\r\n}\r\n\r\n.chatbox-icons .fa:hover {\r\n  border-radius: 5px 0 5px 0;\r\n  background: rgba(220, 0, 0, 1);\r\n}\r\n\r\n.chatbox-icons a, .chatbox-icons a:link, .chatbox-icons a:visited {\r\n  color: white;\r\n}\r\n\r\n.chat-partner-name, .chat-group-name {\r\n  flex: 1;\r\n  padding: 0 0 0 95px;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: #30649c;\r\n  text-shadow: 1px 1px 0 white;\r\n  transition: .1s ease-out;\r\n}\r\n\r\n.status {\r\n  width: 12px;\r\n  height: 12px;\r\n  border-radius: 50%;\r\n  display: inline-block;\r\n  box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.2);\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  background: #cacaca;\r\n  margin: 0 3px 0 0;\r\n}\r\n\r\n.online {\r\n  background: #b7fb00;\r\n}\r\n\r\n.away {\r\n  background: #ffae00;\r\n}\r\n\r\n.donot-disturb {\r\n  background: #ff4343;\r\n}\r\n\r\n.chatbox-avatar {\r\n  width: 80px;\r\n  height: 80px;\r\n  overflow: hidden;\r\n  border-radius: 50%;\r\n  background: white;\r\n  padding: 3px;\r\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, .2);\r\n  position: absolute;\r\n  transition: .1s ease-out;\r\n  bottom: 0;\r\n  left: 6px;\r\n}\r\n\r\n.chatbox-avatar img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n}\r\n\r\n.chat-messages {\r\n  border-top: 1px solid rgba(0, 0, 0, .05);\r\n  padding: 10px;\r\n  overflow: auto;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-content: flex-start;\r\n  flex: 1;\r\n}\r\n\r\n.message-box-holder {\r\n  width: 100%;\r\n  margin: 0 0 15px;\r\n  display: flex;\r\n  flex-flow: column;\r\n  align-items: flex-end;\r\n}\r\n\r\n.message-sender {\r\n  font-size: 12px;\r\n  margin: 0 0 15px;\r\n  color: #30649c;\r\n  align-self: flex-start;\r\n}\r\n\r\n.message-sender a, .message-sender a:link, .message-sender a:visited, .chat-partner-name a, .chat-partner-name a:link, .chat-partner-name a:visited {\r\n  color: #30649c;\r\n  text-decoration: none;\r\n}\r\n\r\n.message-box {\r\n  padding: 6px 10px;\r\n  border-radius: 6px 0 6px 0;\r\n  position: relative;\r\n  background: rgba(100, 170, 0, .1);\r\n  border: 2px solid rgba(100, 170, 0, .1);\r\n  color: #6c6c6c;\r\n  font-size: 12px;\r\n}\r\n\r\n.message-box:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border: 10px solid transparent;\r\n  border-top: 10px solid rgba(100, 170, 0, .2);\r\n  border-right: none;\r\n  bottom: -22px;\r\n  right: 10px;\r\n}\r\n\r\n.message-partner {\r\n  background: rgba(0, 114, 135, .1);\r\n  border: 2px solid rgba(0, 114, 135, .1);\r\n  align-self: flex-start;\r\n}\r\n\r\n.message-partner:after {\r\n  right: auto;\r\n  bottom: auto;\r\n  top: -22px;\r\n  left: 9px;\r\n  border: 10px solid transparent;\r\n  border-bottom: 10px solid rgba(0, 114, 135, .2);\r\n  border-left: none;\r\n}\r\n\r\n.chat-input-holder {\r\n  display: flex;\r\n  border-top: 1px solid rgba(0, 0, 0, .1);\r\n}\r\n\r\n.chat-input {\r\n  resize: none;\r\n  padding: 5px 10px;\r\n  height: 40px;\r\n  font-family: 'Lato', sans-serif;\r\n\tfont-size: 14px;\r\n  color: #999999;\r\n  flex: 1;\r\n  border: none;\r\n  background: rgba(0, 0, 0, .05);\r\n   border-bottom: 1px solid rgba(0, 0, 0, .05);\r\n}\r\n\r\n.chat-input:focus, .message-send:focus {\r\n  outline: none;\r\n}\r\n\r\n.message-send::-moz-focus-inner {\r\n\tborder:0;\r\n\tpadding:0;\r\n}\r\n\r\n.message-send {\r\n  -webkit-appearance: none;\r\n  background: #9cc900;\r\n  background: linear-gradient(180deg, #00d8ff, #00b5d6);\r\n  color: white;\r\n  font-size: 12px;\r\n  padding: 0 15px;\r\n  border: none;\r\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.attachment-panel {\r\n  padding: 3px 10px;\r\n  text-align: right;\r\n}\r\n\r\n.attachment-panel a, .attachment-panel a:link, .attachment-panel a:visited {\r\n  margin: 0 0 0 7px;\r\n  text-decoration: none;\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.chatbox-min {\r\n  margin-bottom: -362px;\r\n/*   height: 46px; */\r\n}\r\n\r\n.chatbox-min .chatbox-avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.chatbox-min .chat-partner-name, .chatbox-min .chat-group-name {\r\n  padding: 0 0 0 75px;\r\n}\r\n\r\n.settings-popup {\r\n  background: white;\r\n\tborder-radius: 20px/10px;\r\n\tbox-shadow: 0 3px 5px 0 rgba(0, 0, 0, .2);\r\n  font-size: 13px;\r\n\topacity: 0;\r\n\tpadding: 10px 0;\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttext-align: left;\r\n\ttop: 33px;\r\n\ttransition: .15s;\r\n\t-webkit-transform: scale(1, 0);\r\n\t        transform: scale(1, 0);\r\n\t-webkit-transform-origin: 50% 0;\r\n\t        transform-origin: 50% 0;\r\n\twidth: 120px;\r\n  z-index: 2;\r\n  border-top: 1px solid rgba(0, 0, 0, .2);\r\n  border-bottom: 2px solid rgba(0, 0, 0, .3);\r\n}\r\n\r\n.settings-popup:after, .settings-popup:before {\r\n  border: 7px solid transparent;\r\n\tborder-bottom: 7px solid white;\r\n\tborder-top: none;\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\tleft: 45px;\r\n\ttop: -10px;\r\n  border-top: 3px solid rgba(0, 0, 0, .2);\r\n}\r\n\r\n.settings-popup:before {\r\n  border-bottom: 7px solid rgba(0, 0, 0, .25);\r\n  top: -11px;\r\n}\r\n\r\n.settings-popup:after {\r\n  border-top-color: transparent;\r\n}\r\n\r\n#chkSettings {\r\n\tdisplay: none;\r\n}\r\n\r\n#chkSettings:checked + .settings-popup {\r\n\topacity: 1;\r\n\t-webkit-transform: scale(1, 1);\r\n\t        transform: scale(1, 1);\r\n}\r\n\r\n.settings-popup ul li a, .settings-popup ul li a:link, .settings-popup ul li a:visited {\r\n  color: #999;\r\n  text-decoration: none;\r\n  display: block;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.settings-popup ul li a:hover {\r\n  background: rgba(0, 0, 0, .05);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/views/profile/profile.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/views/profile/profile.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row mb-2 mt-2 text-center\">\r\n        <div class=\"col-sm-12\">\r\n          <h3 style=\"color:#C10303\">Chat Room</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div id=\"conversation\"></div>\r\n<section class=\"content chatbox-holder\">\r\n  <div class=\"chatbox\">\r\n    <div class=\"chatbox-top\">\r\n      <div class=\"chatbox-avatar\">\r\n        <a  href=\"javascript:void(0)\"><img src=\"https://static.thenounproject.com/png/547023-200.png\" /></a>\r\n      </div>\r\n      <div class=\"chat-partner-name\">\r\n        <span class=\"status online\"></span>\r\n        <a  href=\"javascript:void(0)\">Group Chat</a>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"chat-messages\" id=\"chatroom\">\r\n    </div>\r\n\r\n    <div class=\"chat-input-holder\">\r\n      <textarea class=\"chat-input\" [(ngModel)]=\"message\" name=\"message\"></textarea>\r\n      <input type=\"button\" value=\"Send\" (click)=\"sendMessage()\" class=\"message-send\" />\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n\r\n  <!-- <section >\r\n    <div id=\"change_username\">\r\n<input id=\"username\" type=\"text\" />\r\n<button id=\"send_username\" type=\"button\">Change username</button>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"chatroom\">\r\n\r\n  </section> -->\r\n\r\n\r\n<!--\r\n  <section id=\"input_zone\">\r\n    <input id=\"message\" class=\"vertical-align\" type=\"text\" />\r\n    <button id=\"send_message\" class=\"vertical-align\" type=\"button\">Send</button>\r\n  </section> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/views/profile/profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/views/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileService, toastr) {
        this.profileService = profileService;
        this.toastr = toastr;
        this.message = "";
        this.chatroom = $("#chatroom");
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.socket();
    };
    ProfileComponent.prototype.socket = function () {
        this.socketio = io.connect("http://localhost");
        this.socketio.on('connect', function () {
            // call the server-side function 'adduser' and send one parameter (value of prompt)
            this.emit('adduser', localStorage.getItem('username'));
        });
        this.socketio.on('updatechat', function (username, data) {
            $('#conversation').append('<b>' + username + ':</b> ' + data + '<br>');
        });
        this.socketio.on("new_message", function (data) {
            $('#chatroom').append("<div class=\"message-box-holder\">\n        <div class=\"message-sender\">\n        " + data.username + "\n        </div>\n        <div class=\"message-box message-partner\">\n        " + data.message + "\n        </div>\n        </div>");
        });
        this.socketio.on("disconnect", function () {
            console.log("disconnected server");
        });
    };
    ProfileComponent.prototype.sendMessage = function () {
        this.socketio.emit("new_message", { message: this.message, user: localStorage.getItem('username') });
        this.message = '';
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/pages/dashboard/views/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/dashboard/views/profile/profile.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/views/profile/profile.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard/views/profile/profile.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/pages/dashboard/views/profile/profile.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-equal-validator.directive */ "./src/app/pages/dashboard/views/profile/confirm-equal-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var profileRoutes = [
    {
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(profileRoutes)
            ],
            declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], _confirm_equal_validator_directive__WEBPACK_IMPORTED_MODULE_5__["ConfirmEqualValidatorDirective"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
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




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.projectInfo = function (data) {
        return this.http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'projectInfo', data)
            .map(function (response) {
            return response;
        });
    };
    ProfileService.prototype.accountInfo = function (data) {
        return this.http.post(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'accountInfo', data)
            .map(function (response) {
            return response;
        });
    };
    ProfileService.prototype.overview = function () {
        return this.http.get(_helpers__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + 'accounts')
            .map(function (response) {
            return response;
        });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-views-profile-profile-module.js.map