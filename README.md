# websocket_test

## 1. Server (Node, MySQL)
### 1.1. Node
#### 1.1.1. install node and npm (in ubuntu)
    $ sudo apt-get update 
    $ sudo apt-get install nodejs
    $ sudo apt-get install npm
    $ npm init --yes
    $ npm install express mysql --save --save-exact
> https://poiemaweb.com/nodejs-mysql
#### 1.1.2. Start node server with exit state(background)    
    $ nohup npm start &
    $ exit
#### 1.1.3. Start node server with auto_modifying state(Daemon process)
    $ nohup nodemon </dev/null &
    $ exit
