webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_panel_user_panel_component__ = __webpack_require__("./src/app/user-panel/user-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_1__callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'user-panel', component: __WEBPACK_IMPORTED_MODULE_0__user_panel_user_panel_component__["a" /* UserPanelComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuardService */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_messanger_messanger_component__ = __webpack_require__("./src/app/users/messanger/messanger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_users_component__ = __webpack_require__("./src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__callback_callback_component__ = __webpack_require__("./src/app/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_disableEnter_directive__ = __webpack_require__("./src/app/directives/disableEnter.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_remove_messenger_service__ = __webpack_require__("./src/app/services/remove-messenger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_panel_user_panel_component__ = __webpack_require__("./src/app/user-panel/user-panel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__callback_callback_component__["a" /* CallbackComponent */],
                __WEBPACK_IMPORTED_MODULE_7__users_messanger_messanger_component__["a" /* MessangerComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_disableEnter_directive__["a" /* DisableEnterDirective */],
                __WEBPACK_IMPORTED_MODULE_14__user_panel_user_panel_component__["a" /* UserPanelComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__services_remove_messenger_service__["a" /* RemoveMessengerService */], __WEBPACK_IMPORTED_MODULE_0__services_users_service__["a" /* UsersService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/callback/callback.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid d-flex justify-content-center' style=\"position: absolute;left:0;top:0;width:100%; height:100%\">\r\n  <img src=\"/assets/images/eclipse.gif\" style='margin-top:15%;max-width: 200px; max-height: 200px'>\r\n</div>"

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        this.authService.handleAuthentication();
    };
    CallbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-callback',
            template: __webpack_require__("./src/app/callback/callback.component.html"),
            styles: [__webpack_require__("./src/app/callback/callback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/directives/disableEnter.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisableEnterDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_messages_service__ = __webpack_require__("./src/app/services/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisableEnterDirective = /** @class */ (function () {
    function DisableEnterDirective(el, messageService) {
        this.el = el;
        this.messageService = messageService;
    }
    DisableEnterDirective.prototype.onKeydownHandler = function (event) {
        if (event.key === 'Enter') {
            this.messageService.AddMessages(this.el.nativeElement.value);
            this.el.nativeElement.value = '';
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], DisableEnterDirective.prototype, "onKeydownHandler", null);
    DisableEnterDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["s" /* Directive */])({
            selector: '[appDisableEnter]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__services_messages_service__["a" /* MessageService */]])
    ], DisableEnterDirective);
    return DisableEnterDirective;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.authService.login();
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/message.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(content, user) {
        this.content = content;
        this.user = user;
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, image) {
        this.email = email;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        if (!this.authService.isAuthenticated) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js__ = __webpack_require__("./node_modules/auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_2_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].auth.clientID,
            domain: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].auth.domain,
            responseType: 'token id_token',
            redirectUri: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].auth.redirect,
            audience: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].auth.audience,
            scope: __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].auth.scope
        });
        this.userProfileSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.checkAuthentication();
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.checkAuthentication = function () {
        this.userProfileEmail = localStorage.getItem('email');
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.auth0.client.userInfo(authResult.accessToken, function (error, profile) {
                    _this.userProfileEmail = profile.email;
                    _this.setSession(authResult, profile);
                });
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
            }
        });
    };
    AuthService.prototype.setSession = function (authResult, profile) {
        // Set the time that the Access Token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('email', profile.email);
        localStorage.setItem('expires_at', expiresAt);
        this.router.navigate(['/users']);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.router.navigate(['/']);
        // Go back to the home route
    };
    Object.defineProperty(AuthService.prototype, "isAuthenticated", {
        get: function () {
            // Check whether the current time is past the
            // Access Token's expiry time
            var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
            return new Date().getTime() < expiresAt;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getUserName = function () {
        this.userProfileSubject.next(this.userProfileEmail);
    };
    AuthService.prototype.getUser = function () {
        return this.userProfileEmail;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_message_model__ = __webpack_require__("./src/app/models/message.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageService = /** @class */ (function () {
    function MessageService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.linkGet = 'http://localhost:3001/api/users/getdirs';
        this.linkPost = 'http://localhost:3001/api/users/create';
        this.messages = [];
        this.messagesFinal = [];
        this.additionalUser = 'test@test.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.userName = '';
        this.onMessageChange = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.onMessageAdded = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.userName = this.authService.getUser();
    }
    MessageService.prototype.setSecondUser = function (user) {
        this.additionalUser = user;
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        this.http.post(this.linkGet, { 'fileName': this.userName + '&' + this.additionalUser }).subscribe(function (response) {
            _this.messages = response.json();
            _this.onMessageChange.next(_this.messages);
        });
    };
    MessageService.prototype.AddMessages = function (messageContent) {
        var _this = this;
        var message = new __WEBPACK_IMPORTED_MODULE_1__models_message_model__["a" /* Message */](messageContent, this.userName);
        this.messages.push(message);
        this.onMessageChange.next(this.messages);
        this.http.post(this.linkGet, { 'fileName': this.userName + '&' + this.additionalUser }).subscribe(function (response) {
            console.log(response);
            _this.messages = response.json();
            _this.messages.push(message);
            _this.onMessageChange.next(_this.messages);
            _this.http.post(_this.linkPost, { 'fileName': _this.userName + '&' + _this.additionalUser, 'messages': _this.messages })
                .subscribe(function (resp) {
            });
        });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/remove-messenger.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveMessengerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");

var RemoveMessengerService = /** @class */ (function () {
    function RemoveMessengerService() {
        this.onRemoveMessage = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["a" /* Subject */]();
    }
    return RemoveMessengerService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.linkGet = 'http://localhost:3001/api/users/show';
        this.linkPost = 'http://localhost:3001/api/users/add';
        this.users = [];
        this.getUsersSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.getCurrentUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
    }
    UsersService.prototype.addUsers = function (user) {
        var _this = this;
        var users;
        var addUserStatus = true;
        console.log(user);
        this.http.get(this.linkGet).subscribe(function (response) {
            users = response.json();
            for (var i = 0; i < users.length; i += 1) {
                if (users[i].email === user.email) {
                    addUserStatus = false;
                }
            }
            if (addUserStatus) {
                users.push(user);
                _this.postUsers(users);
            }
        });
    };
    UsersService.prototype.getUsers = function () {
        var _this = this;
        var users;
        this.http.get(this.linkGet).subscribe(function (response) {
            users = response.json();
            _this.users = users;
            _this.getUsersSubject.next(_this.users);
        });
    };
    UsersService.prototype.postUsers = function (users) {
        this.http.post(this.linkPost, users).subscribe();
    };
    UsersService.prototype.changeImage = function (userName, image) {
        var _this = this;
        this.http.get(this.linkGet).subscribe(function (response) {
            var users = response.json();
            console.log(users);
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                console.log(user.email, userName);
                if (user.email === userName) {
                    user.image = image;
                }
            }
            _this.http.post(_this.linkPost, users).subscribe();
        });
    };
    UsersService.prototype.getCurrentUser = function (userName) {
        var _this = this;
        var users;
        console.log(userName);
        this.http.get(this.linkGet).subscribe(function (response) {
            users = response.json();
            for (var _i = 0, users_2 = users; _i < users_2.length; _i++) {
                var user = users_2[_i];
                if (user.email === userName) {
                    _this.getCurrentUserSubject.next(user);
                }
            }
        });
    };
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/user-panel/user-panel.component.css":
/***/ (function(module, exports) {

module.exports = ".background {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-overflow: clip;\r\n    background: rgba(56,87,224,1);\r\nbackground: -webkit-gradient(left top, right top, color-stop(0%, rgba(56,87,224,1)), color-stop(100%, rgba(98,45,173,1)));\r\nbackground: -webkit-gradient(linear, left top, right top, from(rgba(56,87,224,1)), to(rgba(98,45,173,1)));\r\nbackground: linear-gradient(to right, rgba(56,87,224,1) 0%, rgba(98,45,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3857e0', endColorstr='#622dad', GradientType=1 );\r\n}\r\n\r\n\r\n.user-panel-list {\r\n    width: 100%;\r\n    height: 90%;\r\n    margin-top: 3%;\r\n    background: rgba(255, 255, 255, 0.548);\r\n}\r\n\r\n\r\n.user-over:hover {\r\n    color: rgb(66, 66, 66)!important \r\n}\r\n\r\n\r\n.user-over {\r\n    font-size: 1.3em;\r\n    color: rgb(255, 255, 255) !important\r\n}\r\n\r\n\r\n.height {\r\n    height: 100%\r\n}\r\n\r\n\r\n.width {\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div class=\"container-fluid height width\">\r\n        <div class=\"row width height m-0\">\r\n            <div class=\"col-md-12 over-flow\">\r\n                <div class=\"user-panel-list\">\r\n                  <div class=\"container d-flex justify-content-center\">\r\n                      <img src='{{ image }}' style='max-width: 200px' class=\"rounded-circle img-fluid align-self-center mt-4\">\r\n                  </div>\r\n                  <div class=\"container d-flex justify-content-center\">\r\n                      <a class=\"user-over mb-3\">{{ userName }}</a>\r\n                  </div>\r\n                  <div class=\"container mt-3\">\r\n                    <div class=\"col-md-12 mt-4\">\r\n                        <p><input class=\"form-control\" [(ngModel)]=\"image\"></p>  \r\n                    </div>\r\n                    <div class=\"col-md-12 d-flex justify-content-end\">\r\n                        <a class=\"user-over\" (click)='changeAvatar()'>change avatar</a>\r\n                    </div>\r\n                  </div>                  \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/user-panel/user-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPanelComponent = /** @class */ (function () {
    function UserPanelComponent(route, usersService) {
        this.route = route;
        this.usersService = usersService;
        this.image = '';
        this.userName = '';
    }
    UserPanelComponent.prototype.ngOnInit = function () {
        this.snapshot = this.route.snapshot;
        this.image = this.snapshot.queryParams['image'];
        this.userName = this.snapshot.queryParams['userName'];
    };
    UserPanelComponent.prototype.changeAvatar = function () {
        this.usersService.changeImage(this.userName, this.image);
    };
    UserPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-user-panel',
            template: __webpack_require__("./src/app/user-panel/user-panel.component.html"),
            styles: [__webpack_require__("./src/app/user-panel/user-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]])
    ], UserPanelComponent);
    return UserPanelComponent;
}());



/***/ }),

/***/ "./src/app/users/messanger/messanger.component.css":
/***/ (function(module, exports) {

module.exports = ".messenger{\r\n    width:251px ;\r\n    height: 250px;\r\n    background-color: rgba(255, 255, 255, 0.678);\r\n    border: 0.5px solid rgb(194, 194, 194);\r\n    border-top-left-radius: 7px;\r\n    border-top-right-radius: 7px;\r\n}\r\n.border-shadow{\r\n    -webkit-box-shadow: 0px 0px 17px -4px rgba(0,0,0,1);\r\n    box-shadow: 0px 0px 17px -4px rgba(0,0,0,1);\r\n}\r\n.collapse {\r\n    visibility: hidden;\r\n}\r\n.visible {\r\n    visibility: visible;\r\n}\r\n.messenger-collapse{\r\n    width:251px ;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    height: 27px;\r\n    font-size: 0.8em;\r\n    background-color: rgb(190, 84, 252);\r\n}\r\n.messenger-head{\r\n    width:100%;\r\n    height: 27px ;\r\n    font-size: 0.8em;\r\n    border-top-left-radius: 7px;\r\n    border-top-right-radius: 7px;\r\n    border-top:0.5px solid rgb(194, 194, 194);\r\n    border-bottom:0.5px solid rgb(194, 194, 194);\r\n    background-color: rgba(143, 84, 177, 0.623);\r\n}\r\n.messenger-body{\r\n    width:100%; \r\n    height:170px;\r\n    background-color: rgba(255, 255, 255, 0.445);\r\n    overflow-y: scroll;\r\n}\r\n.messenger-footer{\r\n    width:100%; \r\n    height: 45px;\r\n}\r\n.textarea {\r\n    resize: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    border:none;\r\n    border-top: 0.5px solid rgb(194, 194, 194);\r\n    overflow: hidden;\r\n    margin: 0;\r\n    padding: 0;\r\n    outline: none;\r\n}\r\n.message-right {\r\n    margin-top: 1%;\r\n    font-size: 13px;\r\n    width:80%;\r\n    background-color: rgb(124, 180, 218);\r\n    border-radius: 10px;\r\n    float: right;\r\n}\r\n.message-left {\r\n    margin-top: 1%;\r\n    font-size: 13px;\r\n    width:80%;\r\n    background-color: rgb(115, 194, 163);\r\n    border-radius: 10px;\r\n    float: left;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 4px;\r\n}\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1; \r\n}\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: #888; \r\n}\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #555; \r\n}"

/***/ }),

/***/ "./src/app/users/messanger/messanger.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"messenger border-shadow ml-1\" [ngClass]='{\"visible\": !collapse, \"collapse\" : collapse}' >\r\n    <div class=\"messenger-head text-white d-flex justify-content-between\" (click)='collapse = true'>\r\n        <a class='m-1'>{{ secondUser }}</a> <a class='m-1'(click)='removeMessenger()'>x</a>\r\n    </div>\r\n    <div class=\"messenger-body\" #scroll>\r\n            <div class=\"p-2\" *ngFor='let message of messages' [ngClass]= \"{ 'message-right' : checkRightOrLeft(message.user), 'message-left' : !checkRightOrLeft(message.user) }\" role=\"alert\">\r\n                    {{ message.content }}\r\n            </div>\r\n    </div>\r\n    <div class=\"messenger-footer\">\r\n        <textarea class=\"textarea\" appDisableEnter #textArea></textarea>\r\n    </div>\r\n</div>\r\n<div class=\"messenger-collapse text-white\" [ngClass]='{\"visible\": collapse, \"collapse\": !collapse}'  (click)='collapse = false'>\r\n        <a class='m-2'>{{ secondUser }}</a>\r\n</div>"

/***/ }),

/***/ "./src/app/users/messanger/messanger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessangerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_messages_service__ = __webpack_require__("./src/app/services/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_remove_messenger_service__ = __webpack_require__("./src/app/services/remove-messenger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessangerComponent = /** @class */ (function () {
    function MessangerComponent(authService, messageService, removeMessengerS) {
        this.authService = authService;
        this.messageService = messageService;
        this.removeMessengerS = removeMessengerS;
        this.messages = [];
        this.collapse = false;
        this.state = false;
        this.onMessageSub = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */]();
    }
    MessangerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainUser = this.authService.getUser();
        this.messageService.getMessages();
        this.onMessageSub = this.messageService.onMessageChange.subscribe(function (messages) {
            var beforeChange = _this.messages.length;
            _this.messages = messages.slice();
            _this.messages.splice(0, 1);
            if (_this.state) {
                _this.scroll.nativeElement.scrollTop = _this.scroll.nativeElement.scrollHeight;
                _this.state = false;
            }
            if (beforeChange < _this.messages.length) {
                _this.state = true;
            }
        });
        this.interval = setInterval(function () { return _this.messageService.getMessages(); }, 1000);
        this.messageService.setSecondUser(this.secondUser);
    };
    MessangerComponent.prototype.checkRightOrLeft = function (userName) {
        if (this.mainUser === userName) {
            return true;
        }
        else {
            return false;
        }
    };
    MessangerComponent.prototype.removeMessenger = function () {
        this.removeMessengerS.onRemoveMessage.next(this.secondUser);
    };
    MessangerComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        this.onMessageSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MessangerComponent.prototype, "secondUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_9" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], MessangerComponent.prototype, "scroll", void 0);
    MessangerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-messanger',
            template: __webpack_require__("./src/app/users/messanger/messanger.component.html"),
            styles: [__webpack_require__("./src/app/users/messanger/messanger.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__services_messages_service__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__services_messages_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__services_remove_messenger_service__["a" /* RemoveMessengerService */]])
    ], MessangerComponent);
    return MessangerComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/***/ (function(module, exports) {

module.exports = ".background {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-overflow: clip;\r\n    background: rgba(56,87,224,1);\r\nbackground: -webkit-gradient(left top, right top, color-stop(0%, rgba(56,87,224,1)), color-stop(100%, rgba(98,45,173,1)));\r\nbackground: -webkit-gradient(linear, left top, right top, from(rgba(56,87,224,1)), to(rgba(98,45,173,1)));\r\nbackground: linear-gradient(to right, rgba(56,87,224,1) 0%, rgba(98,45,173,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3857e0', endColorstr='#622dad', GradientType=1 );\r\n}\r\n\r\n.user-panel-top {\r\n    width: 100%;\r\n    height: 80%;\r\n    background: rgba(255, 255, 255, 0.548);\r\n}\r\n\r\n.user-panel-bottom {\r\n    width: 100%;\r\n    height: 16%;\r\n    margin-bottom: 2%;\r\n    margin-top: 2%;\r\n    background: rgba(255, 255, 255, 0.548);\r\n}\r\n\r\n.user-panel-list {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(255, 255, 255, 0.548);\r\n}\r\n\r\n.user-over:hover {\r\n    color: rgb(66, 66, 66)!important \r\n}\r\n\r\n.user-over {\r\n    color: rgb(255, 255, 255) !important\r\n}\r\n\r\n.user-item {\r\n    background: rgba(56, 87, 224, 0.479);\r\nbackground: -webkit-gradient(left top, right top, color-stop(0%, rgba(56,87,224,0.479)), color-stop(100%, rgba(98,45,173,0.479)));\r\nbackground: -webkit-gradient(linear, left top, right top, from(rgba(56,87,224,0.479)), to(rgba(98,45,173,0.479)));\r\nbackground: linear-gradient(to right, rgba(56,87,224,0.479) 0%, rgba(98,45,173,0.479) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3857e0', endColorstr='#622dad', GradientType=1 );\r\n}\r\n\r\n.over-flow {\r\n    height:50%;\r\n}\r\n\r\n@media (min-width: 576px) {  \r\n}\r\n\r\n@media (min-width: 768px) { \r\n    .over-flow {\r\n        height:100%;\r\n    }\r\n    .user-panel-bottom {\r\n        width: 100%;\r\n        height: 38%;\r\n        margin-top: 6%;\r\n        background: rgba(255, 255, 255, 0.548);\r\n    }\r\n    .user-panel-top {\r\n        width: 100%;\r\n        height: 38%;\r\n        margin-top: 6%;\r\n        background: rgba(255, 255, 255, 0.548);\r\n    }\r\n    .user-panel-list {\r\n        width: 100%;\r\n        height: 80%;\r\n        margin-top: 3%;\r\n        background: rgba(255, 255, 255, 0.548);\r\n    }\r\n }\r\n\r\n@media (min-width: 992px) { }\r\n\r\n@media (min-width: 1200px) { }\r\n\r\n.width {\r\n    width: 100%;\r\n}\r\n\r\n.height {\r\n    height: 100%;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n    width: 4px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1ab; \r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888; \r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #555; \r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n    <div class=\"container-fluid height width\">\r\n        <div class=\"row width height m-0\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"user-panel-top text-white text-center\">\r\n                        <img src='{{ image }}' style='max-width: 150px' class=\"rounded-circle img-fluid align-self-center\">\r\n                        <p routerLink = '/user-panel' [queryParams]=\"{userName: userName, image: image}\" class=\"user-over\">{{ userName }}</p>\r\n                </div>\r\n\r\n                <div class=\"user-panel-bottom d-flex justify-content-center\">\r\n                    <button class=\"btn btn-primary w-100\" (click)='logOut()'>Log Out</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-8 over-flow\">\r\n                <div class=\"user-panel-list\">\r\n                    <div style='overflow-y: scroll; height:100%'>\r\n                        <div *ngFor='let user of users' class=\"pb-2\">\r\n                            <div class=\"user-item p-3 d-flex justify-content-between\">\r\n                                <a class=\"user-over\" (click)='openChat(user.email)'>Open Chat</a> <a class=\"user-over\" routerLink = '/user-panel' [queryParams]=\"{userName: user.email, image: user.image}\">See Profile</a><a class=\"user-over\" (click)='openChat(user.email)'>{{ user.email }}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"d-flex\" style=\"position: absolute; bottom:0px; width:100%; left:0px; pointer-events: none;\">\r\n        <app-messanger class=\"d-flex flex-row-reverse\" style=\"width:251px;height:100%; float:right; pointer-events: auto;\" *ngFor='let secondUser of usersMessangers' [secondUser]='secondUser.email'></app-messanger>\r\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model__ = __webpack_require__("./src/app/models/user.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_remove_messenger_service__ = __webpack_require__("./src/app/services/remove-messenger.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, authService, removeMessengerS) {
        this.usersService = usersService;
        this.authService = authService;
        this.removeMessengerS = removeMessengerS;
        this.users = [];
        this.usersMessangers = [];
        this.userName = '';
        this.image = 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png';
        this.onRemoveSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["a" /* Subscription */];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.addUsers(new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](this.authService.getUser(), 'https://www.1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png'));
        this.usersService.getUsers();
        this.removeMessenger();
        this.usersService.getUsersSubject.subscribe(function (users) { return _this.users = users; });
        this.authService.getUserName();
        this.userName = this.authService.getUser();
        this.authService.userProfileSubject.subscribe(function (userName) {
            _this.userName = userName;
        });
        this.getCurrentUser(this.userName);
    };
    UsersComponent.prototype.removeMessenger = function () {
        var _this = this;
        this.onRemoveSub = this.removeMessengerS.onRemoveMessage.subscribe(function (name) {
            for (var i = 0; i < _this.usersMessangers.length; i += 1) {
                if (_this.usersMessangers[i].email === name) {
                    _this.usersMessangers.splice(i, 1);
                }
            }
        });
    };
    UsersComponent.prototype.openChat = function (userName) {
        var state = true;
        for (var _i = 0, _a = this.usersMessangers; _i < _a.length; _i++) {
            var userNamePicked = _a[_i];
            if (userNamePicked.email === userName) {
                state = false;
            }
        }
        if (state) {
            this.usersMessangers.push(new __WEBPACK_IMPORTED_MODULE_3__models_user_model__["a" /* User */](userName, ''));
        }
    };
    UsersComponent.prototype.checkIfEvenOrOdd = function (index) {
        if (index % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    UsersComponent.prototype.getCurrentUser = function (email) {
        var _this = this;
        this.usersService.getCurrentUser(email);
        this.usersService.getCurrentUserSubject.subscribe(function (user) { return _this.image = user.image; });
    };
    UsersComponent.prototype.logOut = function () {
        this.authService.logout();
    };
    UsersComponent.prototype.ngOnDestroy = function () {
        this.onRemoveSub.unsubscribe();
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/users/users.component.html"),
            styles: [__webpack_require__("./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_users_service__["a" /* UsersService */], __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__services_remove_messenger_service__["a" /* RemoveMessengerService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    auth: {
        clientID: '3XCJ4DRNhSmveJXKqpYlidQOVYIm3MwC',
        domain: 'urbanik.eu.auth0.com',
        audience: 'http://localhost:3001',
        redirect: 'http://localhost:3001/callback',
        scope: 'openid profile email'
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map