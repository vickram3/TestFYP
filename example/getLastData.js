var besc_client = require("../src/index");

var keypair = new besc_client.keyPair("1", "abc123");

var host_client = besc_client.Host.createDefault();

(async () =>{ 

    try{
        var response = await besc_client.API.getLastData(host_client, keypair);

        //console.log(response);
    }
    catch(apiError){
        // apiError.statusCode - request http status code
        // apiError.error - error message that send back from server
        //console.log(apiError);
    }

})();



