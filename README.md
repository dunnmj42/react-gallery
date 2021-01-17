# React Gallery

## Description

_Duration: React Gallery Project_

A simple gallery app with image descriptions that can be toggled by clicking the image and a "like" functionality that allows the user to like an image as many times as they would like. All likes, descriptions, and image paths are stored in a postgreSQL database for permanence.

## Installation

1. Create a SQL database named `react_gallery`
2. The queries in the `database.sql` file are set up to create all the necessary tables. The INSERT statement will populate the table with data. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run `npm install` in the terminal
4. Run `npm run server` 
5. Run `npm run client`

## Dependencies

1. "axios": "^0.21.1",
2. "express": "^4.17.1",
3. "pg": "^8.5.1",
4. "react": "^17.0.1",
5. "react-dom": "^17.0.1",
6. "react-scripts": "^4.0.1"

## Built With

 React, Node.js, and PostgreSQL.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped me with the skills to make this application a reality.
