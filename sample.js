var AWS = require('aws-sdk');
var uuid = require('uuid');
let s3=new AWS.S3({
  region: 'us-east-1',
  accessKeyId: 'AKIAYTGAIOTOASWOQRBV',
  secretAccessKey: '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'
})

  
    var bucketName='anshay'+uuid.v4()
    var keyName='newfile.txt'
    var body="This is the body"
    var bucketPromise = s3.createBucket({
      Bucket: bucketName
    },(error,success)=>{
      if(error){
        console.log(error)
      }
      else{
        console.log(success)
      }
    }).promise();
    bucketPromise.then(
      function(data) {
        var objectParams = {Bucket: bucketName, Key: keyName, Body: body};
        var uploadPromise = s3.putObject(objectParams).promise();
        uploadPromise.then(
          function(data) {
            console.log(bucketName + " Bucket has been feaded with the data");       
          });
    }).catch(
      function(err) {
        console.error(err, err.stack);
    });
