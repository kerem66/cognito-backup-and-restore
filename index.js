let AWS = require("aws-sdk")
let cognito = require('cognito-backup-restore') ;
//let fs = require('fs');

let file = './eu-central-1_bpffb0AZl.json';
AWS.config.update({region:'eu-central-1'});
const cognitoISP = new AWS.CognitoIdentityServiceProvider();

cognito.backupUsers(cognitoISP, "eu-central-1_bpffb0AZl", "./")
		.then(() => console.log(`Backup completed`))
		.catch(console.error)
// cognito.restoreUsers(cognitoISP, "eu-central-1_SyqqH7H4d", file, "recoverPassword987")
// 	.then(() => console.log(`Restore completed`))
// 	.catch(console.error)


