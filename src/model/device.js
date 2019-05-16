var validate = require('../utils/validate');

class Device{

    constructor(deviceID, energyUsage){
        this.deviceID = deviceID;
        this.energyUsage = energyUsage

        this.validate();
    }

    toDTO(){
        return {
            DeviceId: this.deviceID,
            EnergyUsage: this.energyUsage
        };
    }

    validate(){
        validate.string(this.deviceID, "DeviceId");
        validate.number(this.energyUsage, "EnergyUsage");
    }
}

module.exports.default = Device;