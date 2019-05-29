var besc_client = require("../src/index");

var dateConvert = require("../src/utils/dateConvert");

var keypair = new besc_client.keyPair("1", "abc123");

const ProjectData = besc_client.ProjectData;
const Device = besc_client.Device;

//var host_client = new besc_client.Host("http://localhost:3001");
var host_client = besc_client.Host.createDefault();

(async () =>{ 

    var projectData = new ProjectData(
        dateConvert.formatDatetimeString("2019-05-29T06:00:00"),
        "Testing", 
        [
            new Device("AABC1",40), 
            new Device("AABC2",70)
        ],
        110,
        80.5,
        "101.1212, 112.1133"
    );

    /*
    var projectData = ProjectData.creatWithCurrentTime(
        "Testing", 
        [
            new Device("AABC1",40), 
            new Device("AABC2",70)
        ],
        110,
        80.5,
        "101.1212, 112.1133"
    );
    */

    try{
        var response = await besc_client.API.sendProjectData(host_client, keypair, projectData);

        //console.log(response);
    }
    catch(apiError){
        // apiError.statusCode - request http status code
        // apiError.error - error message that send back from server
        //console.log(apiError);
    }

})();
