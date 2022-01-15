Application Flow
----------------------------------------------------------

Folder flow:
Root Folder > routes > controllers > views

File flow:
app.js > homeRoute.js > homeController.js > indexView.ejs


Heroku with mongoDB
----------------------------------------------------------
Every Heroku app has its own Heroku-hosted Git repo.
You deploy new versions of your app by pushing your code changes to this repo.
In order to do that, your local Git repo needs to know the URL of the Heroku-hosted repo.

Heroku's architecture requires the use of config vars.
Express calls .listen(PORT), which makes use of the Heroku config var.
Using || to initialize PORT's value to the first defined variable.
When app is run on Heroku, process.env.PORT is defined and passed to .listen().
Running locally, the config var is undefined and the localhost port is passed to .listen().

Basic Commands:
sudo npm install -g heroku
heroku plugins:install heroku-repo
heroku login
heroku git:remote -a cse341nodejsapp
git push heroku master:main
heroku ps:scale web=1

heroku logs --tail
heroku repo:reset --app appname

https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment
https://devcenter.heroku.com/articles/heroku-cli#download-and-install
https://devcenter.heroku.com/articles/git#tracking-your-app-in-git
https://devcenter.heroku.com/articles/deploying-nodejs

