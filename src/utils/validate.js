module.exports.number = (variable, variable_name) =>{

    if(typeof variable != "number"){
        throw "Invalid data. "+variable_name+ " must be a number";
    }
}

module.exports.string = (variable, variable_name) =>{

    if(typeof variable != "string"){
        throw "Invalid data. "+variable_name+ " must be a string";
    }
}

module.exports.datetimeString = (variable, variable_name) => {
    if(typeof variable != "string"){
        throw "Invalid data. "+variable_name+ " must be a datetime string";
    }

    if(new Date(variable) == "Invalid Date"){
        throw "Invalid data. "+variable_name+ " must be a valid datetime string";
    }
}