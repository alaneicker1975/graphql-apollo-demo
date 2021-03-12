# GraphQL and Apollo Client Demo

This demo project showcases how to create a GraphQL back-end and React/Apollo front-end.

### Stack

#### Server

```json
"apollo-datasource": "^0.7.3",
"apollo-datasource-rest": "^0.10.0",
"apollo-server": "^2.21.0",
"apollo-server-testing": "^2.21.0",
"graphql": "^15.5.0"
```

The back-end relies on a dummy REST API from [https://reqres.in/](https://reqres.in/). It handles a complete spectrum of CRUD operations, however POST, PUT, PATCH and DELETE methods do not actually update the data source, so data updates do not persist on page reload.

#### Client

```json
"@apollo/client": "^3.3.11",
"graphql": "^15.5.0",
"react": "^17.0.1",
"react-axe": "^3.5.4",
"react-dom": "^17.0.1",
```
