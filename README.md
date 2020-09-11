# WebdriverIO
Create folder
open folder in IDE
	npm inti
create the package by entering the details(answer to the question)
	npm install --save-dev @wdio/cli
set the config
	npx wdio config
	answer the question for config
	Add port in wdio.config
Install prettier :  npm install --save-dev prettier
create file named as .pretierrc
 add following details
	{
    "semi": false,
    "singleQuote":true,
    "useTabs":true,
    "tabWidth":2,
    "arrowparens":"avoid"
}


ON Terminal:
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register


create file babel.config.js - and add code (refer to project)
{
    "semi": false,
    "singleQuote": true,
    "useTabs": true,
    "tabWidth": 2,
    "arrowParens": "avoid"
}
go to Wdio.config:  under

@wdio/allure-reporter --save-dev

Add below code in conf.js file 
 reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],


================================
cache clean
Step 1: $ npm cache clean --force

Step 2: Delete node_modules by $ rm -rf node_modules package-lock.json folder or delete it manually by going into the directory and right-click > delete / move to trash. Also, delete package-lock.json file too.

Step 3: npm install

To start again, $ npm start


==============================
 './test/specs/**/*.js'
 
 to execute: just type $npm Start
