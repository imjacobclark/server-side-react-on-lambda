## 

Simple server side React on AWS Lambda with API Gateway example

I'll add Cloudformation for all this at a later date.

## Building

```
$ npm run build:client && npm run build:server && cat dist/server.js | pbcopy
```

## Deploying

1) Compile the project via `npm run build:client && npm run build:server && cat dist/server.js` 
1) Create an S3 bucket with public read permissions ([example here](https://www.devroom.io/2010/12/24/public-readable-amazon-s3-bucket-policy/)) and upload `dist/client.js` into the bucket
2) Create a new blank Lambda function and copy `dist/server.js` into the code editor
3) Add the CDN_BUNDLE env variable into the Lambda and set it to the public URL of the bundle you just uploaded to S3
4) Add an API gateway as a trigger for the Lambda
5) Copy the API Gateway endpoint into your browser, done! 
