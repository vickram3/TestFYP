module.exports.formatDatetimeString = (datetime) => {
    var datetime_str = new Date(datetime).toISOString();
    var datetime_split = datetime_str.split(".");

    return datetime_split[0];
}