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


Database (MongoDB - http://localhost:27017)

```
docker-compose -f database.yml up
```