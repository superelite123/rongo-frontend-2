export function convertCurrencyString(number) {
    
    let decPlaces = 2;
    let decSep = ".";
    let thouSep = ",";
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;
    
    return sign +
        (j ? i.substr(0, j) + thouSep : "") +
        i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
        (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
}

export function convertDateStringToMonth(dateString, seperator) {

    var res = dateString.split(seperator);
    return res[0] + "年" + res[1] + "月"
}

export function convertDateStringToDay(dateString, seperator) {

    var res = dateString.split(seperator);
    return res[1] + "月" + res[2] + "日"
}