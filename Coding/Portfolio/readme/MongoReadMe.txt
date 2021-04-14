Tutorial

https://closebrace.com/tutorials/2017-03-02/creating-a-simple-restful-web-app-with-nodejs-express-and-mongodb

I've amended thr tutorial to use MongoDB on Atlas (cloud hosted DB) so it can be hosted in Heroku and run 
publicly from my Portfolio.

To do this I set up my Atlas account and simply set the database connection (using Monk) to be the Atlas hosted
database, RATHER than the localy hosted Mongo Database at localhost:27017/database (Mongo default port is 27017?).

_________________________________________________________________________________
To use local database version:
When To run:
start mongodb
cd C:\Program Files\MongoDB\Server\4.4> 
./bin/mongo
leave running
_________________________________________________________________________________


In terminal cd to appliction root directory and start server:
cd mongo-tutorial
npm start
OR
node ./bin/www
OR
heroku local (uses localhost:5000)

LOCALLY In browser (must run npm start or run bin/www as this sets up localhost:5000):

localhost:5000 (this is /) and runs the home page (rendered into pug templater tool)
localhost:5000/users/userlist (this is where the data is posted from mongo by express/jquery)

The MongoDB is hosted on MongoDB Atlas.
User - mongo-tutorial / Password - PYxXdqsplcG4tDX9
Database - user-details

Connection string (given when set up database - need to edit with password and database name)
mongodb+srv://mongo-tutorial:PYxXdqsplcG4tDX9@cluster0.yrq3k.mongodb.net/user-details?retryWrites=true&w=majority

PUBLIC:
Edit app.js so that the database environment variable is from Heroku (not hard coded),
upload to git and heroku

