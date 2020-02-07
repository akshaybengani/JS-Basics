# NodeJS-FirstApp

I am so excited for NodeJS, its always been my dream to learn this beautiful JavaScript Runtime, have no idea about it before totally fresh start.

## Package.json

This package.json file is created when we run ```npm init``` and added our configuration. package.json is something like python pip requirements file where we add the configuration of our project like where is the entry point what packages do I need to run, and kind of merging different types of actions in one package.

### How to run server with package.json

Previously we need to use ```node app.js``` to start we can still use that, but currently we can use ```npm start``` or ```npm run start```. This will run the file app.js that we already setuped in the config package.json

### Hot Reload server files

* Therefore we need to install an additional package and to install a package we need to run ```npm install packagename```
* Note before installing or running this above command we should define when we are going to use the package either in development or production or globally.
* Here we will use the flag ```--save-dev``` this will be used for Development.
* So the commnad for installing a package just inside the project and with development dependencies is ```npm install nodemon --save-dev```.
* The nodemon package will give us this feature of Hot Reload.

### How to update or install dependencies

* If there is symbol ```^``` added before the dependencies version when we run ```npm install``` it will check for updates of the package and if found it will install.
* When we dont want to update we can simply remove that ```^``` from the version number.
* The command ```npm install``` also helps other developers to install the required dependencies in the project.

## NodeMon

* Since we didn't installed the nodemon globally so if we run ```nodemon app.js``` it will give error because the terminal will search nodemon globally and this will be a problem.
* So we need to set our pakcage.json start file and add ```nodemon app.js``` by replacing ```node app.js``` and when we run ```npm start``` it will work.
* Since to use Vscode Debugging with nodemon we need to install nodemon globally with ```-g``` flag.
* So run ```npm install nodemon -g```

## VSCode Debugging

* In order to setup vscode autorun with debugging we need to add launch.json in .vscode folder and if not available in your directory create that manually.

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/app.js",
            "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"
        }
    ]
}
```
