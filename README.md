# MERN Stack - Tales of Arslan Game Application

A modern, effective, and fun gaming application built with MongoDB, ExpressJS, ReactJS, and NodeJS (MERN Stack).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You'll need to have the following installed on your computer:

- Node.js
- MongoDB
- npm

### Installing

Clone the repo:
$ git clone [https://github.com/your_github_username/tales-of-arslan.git](https://github.com/NecomaV/TalesOfArsWeb) $ cd tales-of-arslan

After cloning the repository:

To install server dependencies:

$ cd server $ npm install


### Running locally

To start the server:
$ cd server $ npm start


To start the client at the same time:
$ cd client $ npm start



The application should now be running on [localhost:3000](http://localhost:3000).

## Project Structure

This MERN stack project is structured into two main folders:

- `toa-spa` - Contains all the client side ReactJS code 
- `Server` - Contains backend NodeJS code and Express server configuration

  


### Client

The 'Client' directory contains all the frontend code written in ReactJS. Inside this directory, we have several components, layouts, and pages that are used throughout the application, as well as any relevant styles and assets. There is also a 'src' folder where the core code for the front-end resides.

### Server

The 'Server' directory encompasses all the backend code sending and receiving requests to the MongoDB database. Inside this directory, we have following files:

- `controllers`: This directory houses all the logic for handling and responding to requests that come from the client.
- `middleware`: Contains all the middleware functions which validate, check or handle the data before it reaches the controllers.
- `models`: Defines the schema for our database collections.
- `routes`: Routes defines the endpoints of our API.
- `.env`: It's the place for environment variables. 
- `index.js`: This file serves as the entry point for our server.

Before running the server, ensure to define the required environment variables in the `.env` file (e.g. DATABASE_URL, SECRET_KEY, etc.)

Remember to replace placeholder lines like 'Details about client-side code.' with the actual details of your project setup and file structure.

Did you know that UserWay's AI-Powered Accessibility Widget can make these fixes on your site automatically? Get it from here now: [UserWay.org/get](https://userway.org/get).

## Accessibility

This project follows WCAG guidelines for accessibility. Our aim was to make this gaming application as inclusive as possible.

## Authors

Casablanca team



