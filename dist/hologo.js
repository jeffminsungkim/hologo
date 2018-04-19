"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var epochs = [
    ["year", 31536000],
    ["month", 2592000],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1]
];
function getDuration(timeAgoInSeconds) {
    for (var _i = 0, epochs_1 = epochs; _i < epochs_1.length; _i++) {
        var _a = epochs_1[_i], unit = _a[0], seconds = _a[1];
        var interval = Math.floor(timeAgoInSeconds / seconds);
        var remains = timeAgoInSeconds - seconds;
        var remainMonth = Math.round(remains / 2592000);
        if (interval >= 1) {
            if (unit === "year" && remainMonth < 12) {
                return {
                    interval: interval,
                    epoch: unit,
                    extraMonth: remainMonth === 0 ? "" : remainMonth,
                    extraEpoch: "month"
                };
            }
            else if (unit === "year" && remainMonth > 12) {
                var months = remainMonth - (interval - 1) * 12;
                if (months === 12) {
                    interval += 1;
                    months = 0;
                }
                return {
                    interval: interval,
                    epoch: unit,
                    extraMonth: months === 0 ? "" : months,
                    extraEpoch: "month"
                };
            }
            else {
                if (interval === 12) {
                    interval = 1;
                    unit = "year";
                }
                return {
                    interval: interval,
                    epoch: unit,
                    extraMonth: "",
                    extraEpoch: ""
                };
            }
        }
    }
    return {
        interval: 0,
        epoch: "seconds",
        extraMonth: "",
        extraEpoch: ""
    };
}
function hologo(dateStamp, startDate) {
    var currentDate = Date.now();
    var startDateStamp = new Date(startDate).getTime() || currentDate;
    var timeAgoInSeconds = Math.floor((startDateStamp - new Date(dateStamp).getTime()) / 1000);
    var _a = getDuration(timeAgoInSeconds), interval = _a.interval, epoch = _a.epoch, extraMonth = _a.extraMonth, extraEpoch = _a.extraEpoch;
    var suffixYear = interval === 1 ? "" : "s";
    var suffixMonth = interval < 2 ? "" : "s";
    var suffixExtraMonth = extraMonth < 2 ? "" : "s";
    if (extraMonth === "")
        return interval + " " + epoch + suffixMonth;
    else
        return interval + " " + epoch + suffixYear + ", " + extraMonth + " " + extraEpoch + suffixExtraMonth;
}
exports.hologo = hologo;
