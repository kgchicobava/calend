import moment from "moment";

export const weekdays = Array.apply(null, Array(7)).map(function (_, i) {
    return moment(i, 'e').startOf('week').isoWeekday(i + 1).format('ddd');
});