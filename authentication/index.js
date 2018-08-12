import { Secret } from './../config/secretinfo';
const seq = require('sequelize');
const Sequelize = new seq(Secret.databaseName, Secret.databaseUser, Secret.databasePassword, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
export const User = Sequelize.define('users', {
  displayName: {
    type: seq.STRING
  },
  googleId: {
    type: seq.STRING
  },
  email: {
    type: seq.STRING
  }
});
export const Customer = Sequelize.define('customer', {
  userid: {
    type: seq.INTEGER
  },
  clientName: {
    type: seq.STRING
  },
  phoneNumber: {
    type: seq.STRING
  }
});

export function UserSync() {
  User.sync({force: true}).then(() => {
    console.log("Synced")
  });
}