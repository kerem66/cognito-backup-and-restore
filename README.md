# cognito-backup-and-restore
Backup and Restore cognito users.

## Explanation
We do need the "aws-sdk" and "cognito-backup-restore" packages. To be able to create backup and restore we need the UserPoolId. Backup function will create a .json file and
we will use that file while restoring.If you wish to recover in different region you must change the region on index.js, where I configured as "eu-central-1".

## Installation

Use the below command to install the required package from package.json

```bash
npm install
```
