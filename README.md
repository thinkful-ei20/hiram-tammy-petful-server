# Petful
This is the serverside to the Petful app, where cats and dogs queue for homes.

We are live at [Petful](https://hiram-tammy-petful-client.github.io).


## Using the Queue Class
Using the a Queue as our data structure ensures that the pet that has been waiting to be adopted longest will be the one to be adopted.

```
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
    }
  }
```

The ```Queue``` class creates a queue data structure by linking together nodes:

```
  class _Node {
    constructor(value){
      this.value=value;
      this.next=null;
      this.prev=null;
    }
  }
```

The ```Queue``` class also holds three methods, ``` peak()``` ```Dequeue()``` and ```Enqueue()```. ```Peak()``` is used for the GET request. ```Dequeue()``` is used for the DELETE request. ```Enqueue()``` is **currently** being used to seed the database. It will be used to add additional pets into a database paired with MongoDB.


## Endpoints


### GET:
```router.get```
```hiram-tammy-petful-server.herokuapp.com/api/cats```

The ```GET``` request calls the ```peak()``` method on the ```Queue``` class, returning the value of the first node. The data returned will look like this:

```
  {
      imageURL: first.imageURL,
    imageDescription: first.imageDescription,
    name: first.name,
    sex: first.sex,
    age: first.age,
    breed: first.breed,
    story: first.story
  } 

```

### DELETE:
```router.delete``` 
```hiram-tammy-petful-server.herokuapp.com/api/cats```

The ```DELETE``` request calls the ```dequeue()``` method on the ```Queue``` class. 


## The server is created with:
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/) 
*Database will be added*
- [Heroku](https://heroku.com)

## Question and comments?

Reach out to @forgiv or @tammyztian.

## Thank you

A special thank you for the Thinkful Team! :+1: