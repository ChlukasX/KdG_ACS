let date = new Date("2012-02-20T03:12");
console.log(date);

function getWeekday(date2) {
    const dayOfWeek = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return dayOfWeek[date2.getDay()];
}
let date2 = new Date(2014, 0, 3);
console.log(getWeekday(date2));

function getLocalDay(date3) {
    let day = date3.getDay();
    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }
    return day;
}
let date3 = new Date(2012, 0, 3);
console.log(getLocalDay(date3));


function getDateAgo(date4, days){
    let dateCopy = new Date(date4);

    dateCopy.setDate(date4.getDate() - days);
    return dateCopy.getDate();
}
let date4 = new Date(2015, 0, 2);
console.log(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365)); // 2, (2 Jan 2014)