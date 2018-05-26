# newCRM
Simple CRM with Express back end and React front end

## Install
cd server    
yarn install    
cd client    
yarn install       
touch /server/config/secretinfo.js

    export const Secret = {
      clientID: String,
      clientSecret: String,
      databaseName: String,
      databaseUser: String,
      databasePassword: String,
      cookieKey: String
    };
