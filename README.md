# besc-ESS-nodejs-client

Please install all dependency first :
```
npm install
```

All working examples is inside the example folder

**v1.0.1**

** Added checksum feature**

For those who are not using this client, Data send to ESS API need to be in json format as below and in orders :
```js
{
    "Project" : "",
    "DateTime" : "2019-05-23T06:00:00",
    "Devices": [ 
    { 
 	"DeviceId": "AC11", 
	"EnergyUsage": 130.0 
    },
    {
	"DeviceId": "AC22", 
	"EnergyUsage": 180.0 
    }
    ], 
    "TotalEnergyUsage": 310.0, 
    "AverageRT": 188.0, 
    "Geolocation": "Selangor",
    "checksum" : "sha1_string of the whole json data"
}
```
Checksum
- sha1 string of the whole json data, excluding the checksum itself
- JSON.stringify(object)

As example,
```js
var object = {
    Project : "",
    DateTime : "2019-05-23T06:00:00",
    Devices: [ 
    { 
	DeviceId: "AC11", 
	EnergyUsage: 130.0 
    },
    {
	DeviceId: "AC22", 
	EnergyUsage: 180.0 
    }
    ], 
    TotalEnergyUsage: 310.0, 
    AverageRT: 188.0, 
    Geolocation: "Selangor"
};

var checksum = sha1( JSON.stringify(object) );

object.checksum = checksum;
```
Then send the object as JSON to the ESS API.


