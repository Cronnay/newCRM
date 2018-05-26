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
const User = Sequelize.define('users', {
  displayName: {
    type: seq.STRING
  },
  googleId: {
    type: seq.STRING
  }
});
const Customer = Sequelize.define('customer', {
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
export function findOrCreate(profile) {
  User.findOrCreate(
    {where: {googleId: profile.id}, defaults: {displayName: profile.displayName}}
  ).spread((user, created) => {
    //if (created === true) så skapade användaren ett konto
  });
}

export function UserSync() {
  User.sync({force: true}).then(() => {
    console.log("Synced")
  });
}