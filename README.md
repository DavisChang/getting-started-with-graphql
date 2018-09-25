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

Database (MongoDB - http://localhost:37162)

``
docker-compose -f database.yml up
```