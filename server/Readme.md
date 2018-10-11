# 


### Installation and Getting Started
```sh
$ npm init
$ npm install
$ nodemon bin/www (server side)
$ live-server (client side)
```  

### List of API  

#### User - General (w/o authentication)
##### User register

Route | HTTP | Description | 
----- | ---- | ----------- | 
/users/register | POST | sign up for new user |  

#####  Input
###### name: e.g. Rudy (put in req.body)
###### email: e.g. rudy@gmail.com (put in req.body)
###### password: e.g. 1234 (put in req.body)



##### User login

Route | HTTP | Description | 
----- | ---- | ----------- | 
/users/login | POST | sign in for existing user |  

#####  Input
###### email: e.g. rudy@gmail.com (put in req.body)
###### password: e.g. 1234 (put in req.body)  

 


##### Event
Route | HTTP | Description | 
----- | ---- | ----------- | 
/event/ | POST | post event |  

#####  Input
###### name: e.g. rudy@gmail.com (put in req.body)
###### location: e.g. (put in req.body)  
###### address: e.g.  (put in req.body)  
###### user: e.g. (put in req.curent_user_id

Route | HTTP | Description | 
----- | ---- | ----------- | 
/event/ | Get | get all event |  



Route | HTTP | Description | 
----- | ---- | ----------- | 
/event/ | DELETE | delete event |  

#####  Input
###### id: e.g. (put in req.body)