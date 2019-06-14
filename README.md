# My Application

I could not get the gradle app to bootstrap so I re-created the whole setup from scratch.

## Server

### Installation instructions

Navigate to server folder

```
npm install
```

```
node server.js
```

This should start the server on port 3000:
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer

Since I couldn't build your application, I created a server side app using LoopBack](http://loopback.io).

I created two data models that match the description of your request. However, since I could not connect to the actual data that exists in your SQL tables, the current API doesn't contain any DATA. Loopback itself has many connectors that can connect to SQL or NoSQL databases, but this takes more time to setup.

This is the exposed REST API.
![Client](img/backend-lb1.png)

The data is exposed through REST API and based on your assignment request the data has to be secured by authentication. I have made only WRITE DATA (POST) secured by authentication. See image below what happens we try to do POST. An authentication error is thrown.
![Client](img/backend-error.png)

## Client

### Installation instructions

Navigate to client folder

```
npm install
```

```
npm start
```

Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/

![Client](img/front-endKLM.png)
On the client side I am using Angular. Since the server doesn't contain any DATA, I connected it to a public flight API and I simply display it in the home angular component.

NOTE: I hope that what you were trying to test with this assignment is conceptual understanding of programming principles, protocols and concepts. I did this assignment during lunch break on a Friday :).
