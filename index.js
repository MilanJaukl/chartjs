var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Chart = /** @class */ (function () {
    function Chart() {
    }
    return Chart;
}());
var ParetoChart = /** @class */ (function (_super) {
    __extends(ParetoChart, _super);
    function ParetoChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParetoChart.prototype.getConfig = function () {
        return ["1"];
    };
    return ParetoChart;
}(Chart));
