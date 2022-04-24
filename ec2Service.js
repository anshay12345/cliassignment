const AWS = require('aws-sdk');
const { parse } = require("uuid");
let ec2=new AWS.EC2({
        region: 'us-east-1',
        accessKeyId: 'AKIAYGSSV4YHBHV2JD3C',
        secretAccessKey: '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'
      })
  
      
class Ec2Service{
    async instanceCreate(userObj){
       
        const params = {
            ImageId: userObj.ImageId,
            InstanceType: userObj.InstanceType,
            MinCount: userObj.MinCount,
            MaxCount: userObj.MaxCount 
          };

        const details = ec2.runInstances(params).promise()
        .then(function(err,data){
            return data
        });
        return await details
    }
    async instanceStop(objct){
        const params = {
            InstanceIds: [
                objct.instanceid
            ]
          };
          ec2.stopInstances(params, function(err, data) {
            if (err) {
              console.log(err, err.stack);
            } else {
              console.log(data);        
            }  
          });
    }

    async instanceTerminate(terminateRequest){
        const params = {
            InstanceIds: [
                terminateRequest.instanceid
            ]
          };
          
          ec2.terminateInstances(params, function(err, data) {
            if (err) {
              console.log(err, err.stack); 
            } else {
              console.log(data);           
            }  
          });
    }
}

module.exports = Ec2Service






