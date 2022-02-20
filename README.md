# TestNodeJsBackend
Learning Node JS backends!

# Setup instructions

1. Install Node v17.3.0, you can use NVM to manage your node versions
2. Run npm install to install dependencies. 
3. Install postgres (v 14)  & a postgres client 
  - https://www.postgresql.org/
  - https://eggerapps.at/postico/
  - Ensure that the postgres server is running
    - on a mac you will see a cute lil elephant in the top bar
4. modify the .env
  - Swap out "mariomerendino" for you user name on your computer. 
5. run `npm run migrate`
  - In postico, you should see the `test-node-js` database with a User table
  
# Running instructions

`node index.js` will spin up the server
`localhost:3000` will display the number of rows in the users table (if setup correctly)
