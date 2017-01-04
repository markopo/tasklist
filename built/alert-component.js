System.register(["@angular/core", "@angular/platform-browser-dynamic"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, AlertComponent, AlertComponent_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            }
        ],
        execute: function () {
            AlertComponent = AlertComponent_1 = (function () {
                function AlertComponent() {
                    this.message = 'Warning!';
                    this.height = 75;
                    this.width = 500;
                    this.isBold = true;
                    this.fontSize = 20;
                }
                AlertComponent.prototype.setWidth = function () {
                    return this.width;
                };
                AlertComponent.prototype.setBoldness = function () {
                    return this.isBold ? '700' : '400';
                };
                AlertComponent.prototype.setFontSize = function () {
                    return this.fontSize;
                };
                AlertComponent.prototype.showMessage = function () {
                    var _this = this;
                    setTimeout(function () { return alert('Hello ' + _this.message); }, 100);
                    setTimeout(function () { return alert('Hello ' + AlertComponent_1.danger); }, 5000);
                };
                return AlertComponent;
            }());
            AlertComponent.danger = "DANGER!";
            AlertComponent = AlertComponent_1 = __decorate([
                core_1.Component({
                    selector: 'alert-component',
                    template: '<div ' +
                        '[style.height.px]="height" ' +
                        '[style.width.px]="setWidth()"  ' +
                        '[style.fontWeight]="setBoldness()"' +
                        '[style.font-size.px]="setFontSize()" ' +
                        '(click)="showMessage()" ' +
                        'class="alert alert-warning" role="alert">' +
                        '{{message}}!!!!</div>',
                    styles: ['.alert { margin: 0 auto;color:#000;text-align:center;padding-top:25px; }']
                }),
                __metadata("design:paramtypes", [])
            ], AlertComponent);
            platform_browser_dynamic_1.bootstrap(AlertComponent); // Component is bootstrapped!
        }
    };
});
