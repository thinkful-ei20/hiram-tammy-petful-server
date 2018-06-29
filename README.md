# Petful
This is the serverside to the Petful app, where the cat

We are live at [Petful](https://hiram-tammy-petful-client.github.io).

## Endpoints



###GET:
```router.get(hiram-tammy-petful-server.herokuapp.com/api/cats, (req, res)```
The ```GET``` request calls the ```peak``` method on the queue class, returning the value of the first node. The data returned will look like this:

```{
    imageURL: first.imageURL,
    imageDescription: first.imageDescription,
    name: first.name,
    sex: first.sex,
    age: first.age,
    breed: first.breed,
    story: first.story
  } 
```

###DELETE:
```router.delete(hiram-tammy-petful-server.herokuapp.com/api/cats, (req, res)```

## The server is created with:
- [Node.js](https://nodejs.org/en/)
- [Express](http://expressjs.com/)
- [MongoDB](https://docs.mongodb.com/) *Database will be added*

## Question and comments?

Reach out to @forgiv or @tammyztian.

## Thank you

A special thank you for the Thinkful Team! :+1: