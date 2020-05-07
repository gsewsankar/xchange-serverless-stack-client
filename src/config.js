export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "xchange-app-api-dev-serverlessdeploymentbucket-670qczry8w94"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://jzkcx6pzz9.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_wxm4Jft6X",
      APP_CLIENT_ID: "6fk1bb8q7bmjqo3quu2c1oecgi",
      IDENTITY_POOL_ID: "us-east-2:aa523442-e976-42c9-b9be-028356069091"
    }
  };