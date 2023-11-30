# express-app
Requires node 16.15.0 LTS or greater

App is initiated without any db connection so the routes that doesn't requires db conn will run independentialy without waiting for connection. So when db conn is created? Any routes that requires db connection will initial the actual connection for first time then store it in app's global state. If another route receives a request that requires a db conn will use the connection already created so it will doesn't connect again.  

## Initialize app

1. clone the repository

        git clone https://github.com/yuvarajmurugan25/express-app.git

2. Install dependencies

        npm i

3. Config db in `.env` file
4. Start the server
   
        npm run server

### Routes

1. `/` does not requies db connection

              http://localhost:3000/
              
2. `/users/signin` requires db conn so it initiate for first time

              http://localhost:3000/users/signin

2. `/users/signup` also requires db conn so it doesn't initiate new connection uses the exiting conn pool created by any other routes 

              http://localhost:3000/users/signin
        
