const configFile = require("../configFile.json");

const environmentList = ["local", "develop"];
const environment = environmentList[0];

const configuration = {
  local: {
    env: "local",
    port: 8080,
    url: "http://localhost:8080",
    mongoose: {
      url: "mongodb://localhost/my_office", // url to connect mongodb locally
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
    jwt: {
      secret: "local!@#",
      accessExpirationMinutes: 3000,
      refreshExpirationDays: 30,
      resetPasswordExpirationMinutes: 10,
    },
    email: {
      smtp: {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: configFile.email.Email,
          pass: configFile.email.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: configFile.email.Email,
    },
  },
  develop: {
    env: "heroku",
    port: process.env.PORT,
    url: "",
    mongoose: {
      url: "",
      options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
    },
    jwt: {
      secret: "heroku!@#",
      accessExpirationMinutes: 5,
      refreshExpirationDays: 10,
      resetPasswordExpirationMinutes: 10,
    },
    email: {
      smtp: {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: configFile.email.Email,
          pass: configFile.email.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: configFile.email.Email,
    },
  },
};

module.exports = configuration[environment];
