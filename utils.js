function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getTimeObject(hours, minutes) {
    let obj = new Date();
    obj.setHours(hours);
    obj.setMinutes(minutes);
    obj.setSeconds(0);
    return obj;
}