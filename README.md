# getting-started-with-graphql
First try to use GraphQL 

```
    React Apollo Client
           |                   ^ 
           |                   | 
        Express                | 
           |                   | 
           |                   | 
 (hands request to GraphGL)    | 
        GraphQL                | 
           |                   | 
           |          (GraphGL retuen data)
    (Performs request)         |
           |                   |
           |                   |
        Database               |
           |                   |
           |                   |
           |__ __ __ __ __ __ _|

```


Database 

1. MongoDB - http://localhost:27017
2. Mongo Express - http://localhost:8081

```
docker-compose -f database.yml up
```

# Query

1. authors: [Author]
2. author(id: String): Author


# Mutation

1. addAuthor(name: String!, age: Int!, books: [String]!)
2. deleteAuthor(id: String!)
3. updateAuthor(id: String!, name: String!)

