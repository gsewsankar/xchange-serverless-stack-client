const dev = {
  STRIPE_KEY: "pk_test_wuCspdEm0g5jRark4XCXmdeI00GRCvDXgj",
  s3: {
    REGION: "us-east-2",
    BUCKET: "xchange-app-2-api-dev-attachmentsbucket-qvc6w0s9lzb"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ai9lz6bbt5.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_9to36kKYo",
    APP_CLIENT_ID: "4oi0buak2siitgjuettuutp7dk",
    IDENTITY_POOL_ID: "us-east-2:c5995d96-785c-4f7f-ac49-3d837d7ffb38"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_wuCspdEm0g5jRark4XCXmdeI00GRCvDXgj",
  s3: {
    REGION: "us-east-2",
    BUCKET: "xchange-app-2-api-prod-attachmentsbucket-1dydi96wyg2as"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://0xt7970mi0.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_uJtsG7Q4M",
    APP_CLIENT_ID: "6o9kkcjl8dthadv2fqltt85v0g",
    IDENTITY_POOL_ID: "us-east-2:efb3bc6b-a079-4286-970b-0810af9e0e14"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};