"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Top = /** @class */ (function () {
    /*frx: number
    fry: number
    constructor(frx : number, fry : number) {
        this.frx = frx
        this.fry = fry
    }*/
    function Top(frx, // deafult parameters
    fry) {
        if (frx === void 0) { frx = 98; }
        if (fry === void 0) { fry = 56; }
        this.frx = frx;
        this.fry = fry;
    }
    Top.prototype.center = function (pvt) {
        return (this.frx + this.fry) / 2;
    };
    return Top;
}());
exports.Top = Top;
var Dimensions = /** @class */ (function (_super) {
    __extends(Dimensions, _super);
    function Dimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dimensions;
}(Top));
exports.Dimensions = Dimensions;
