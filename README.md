## 

Simple server side React on AWS Lambda with API Gateway example

I'll add Cloudformation for all this at a later date.

## Building

```
$ npm run build:client && npm run build:server && cat dist/server.js | pbcopy
```

## Deploying

1) Copy dist/bundle.js into s3 and make public
2) Copy dist/server.js into a lambda
3) Add the CDN_BUNDLE env variable into the lambda and set it to the public URL of the bundle in  S3
4) Wire up to API Gateway
5) Done.