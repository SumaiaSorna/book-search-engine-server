# Book-search-engine-server ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)

## Deployed URL

Click [here](https://secure-coast-73388.herokuapp.com/) to view deployed application on Heroku.

## Repository Link

Click [here](https://github.com/SumaiaSorna/book-search-engine-server/tree/dev) to view Code on Github.

## Table Of Contents

- [Deployed URL](#deployed-url)
- [Repository Link](#repository-link)
- [Description](#description)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [Launch The App](#launch-the-app)
  - [Database Configuration](#database-configuration)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Description

The app is built with a React front end, MongoDB database, and an Apollo server with GraphQL queries and mutations.

## Getting Started

### Installation

```
git clone git@github.com:SumaiaSorna/book-search-engine-server.git
cd book-search-engine-server
code .
npm i
```

To run the app, you will also need to install the book-search-engine-client repo:

```
git clone git@github.com:SumaiaSorna/book-search-engine-client.git
cd book-search-engine-client
code .
npm i
```

### Technologies Used

- React.js
- Apollo Client
- Apollo Server
- MongoDB
- Mongoose
- GraphQL

### Launch The App

```
npm run start
```

### Database Configuration

To run the app you have to set up a .env file , using the .env_EXAMPLE provided. You have to include the database name and secret key

```
DB_NAME=
SECRET=
```

## Screenshots

![Google-Book-Search-books](./public/assets/screenshots/Google-Book-Search-books.png)

![Google-Book-Search-saved-books](./public/assets/screenshots/Google-Book-Search-saved-books.png)

### Questions

If you have any questions about this application, please feel free to contact me in my <a href="mailto:sorna.sumaia@gmail.com">email.</a>
