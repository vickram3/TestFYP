class BESC_ESS_Host:

    def __init__(self, host):
        self.host = host

    '''
    def createDefault(self):
        return BESC_ESS_Host("http://carboapi.besc.online/besc-data");
    '''

    def setEndPoint(self, endpoint):
        self.endpoint = endpoint

    def setProjectId(self, project_id):
        self.project_id = project_id

    def buildUrl(self):
        endpoint = str(self.endpoint).replace(":project_id", self.project_id)
        return self.host + basePath + endpoint

endpoints = {
    "debug": "/debugs/:project_id",
    "project": "/project/:project_id"
}

basePath = "/energysaving"
