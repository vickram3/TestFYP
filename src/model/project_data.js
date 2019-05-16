var validate = require('../utils/validate');
var dateUtil = require('../utils/dateConvert'); 
const Device = require("./device").default;

class ProjectData{

    /**
    * @param {string} project - Project Name
    * @param {string} datetime - DateTime in string
    * @param {[Device]} devices - Device object
    * @param {number} totalEnergyUsage - TotalEnergyUsage
    * @param {number} averageRT - AverageRT
    * @param {string} geolocation - Geolocation
    */
    constructor(dateTime, project_name, devices, totalEnergyUsage, averageRT, geolocation) {
        this.project = project_name;
        this.datetime = dateTime;
        this.devices = devices;
        this.totalEnergyUsage = totalEnergyUsage;
        this.averageRT = averageRT;
        this.geolocation = geolocation;

        this.validate();

        this.datetime = dateUtil.formatDatetimeString(this.datetime);
    }

    /**
    * @param {string} project - Project Name
    * @param {string} datetime - DateTime in string
    * @param {[Device]} devices - Device object
    * @param {number} totalEnergyUsage - TotalEnergyUsage
    * @param {number} averageRT - AverageRT
    * @param {string} geolocation - Geolocation
    * @returns {ProjectData}
    */
    static creatWithCurrentTime(project_name, devices, totalEnergyUsage, averageRT, geolocation){

        var dateNow = Date.now();
        var formattedDateTime = dateUtil.formatDatetimeString(dateNow);

        return new ProjectData(formattedDateTime, project_name, devices, totalEnergyUsage, averageRT, geolocation);
    }

    validate(){
        if(!(this.devices instanceof Array)){
            throw "devices ID is not array";
        }
        else if(this.devices.length == 0){
            throw "devices cannot be empty";
        }
        else{
            this.devices.forEach(function(item, index){
                if(!(item instanceof Device)){
                    throw "Item of Devices must be instance of Device "
                }
            });
        }

        validate.number(this.averageRT, "AverageRT");
        validate.number(this.totalEnergyUsage, "TotalEnergyUsage");
        validate.string(this.geolocation, "Geolocation");
        validate.string(this.project, "Project");
        validate.datetimeString(this.datetime, "DateTime");
    }

    serializeDevices(){

        var serialized_Devices = [];

        for(var i = 0; i < this.devices.length; i++){
            serialized_Devices.push(this.devices[i].serialize());
        }

        return serialized_Devices;
    }

    serialize(){
        return {
            Project: this.project,
            DateTime: this.datetime,
            Devices: this.serializeDevices(),
            TotalEnergyUsage: this.totalEnergyUsage,
            AverageRT: this.averageRT,
            Geolocation: this.geolocation
        };
    }
}

const options = {
    limit: 5,
    offset : 0, 
    start_date: undefined,
    end_date: undefined
};

module.exports.default = ProjectData;
module.exports.options = options;
