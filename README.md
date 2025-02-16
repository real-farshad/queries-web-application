# Full-Stack Query Web Application

Live demo: [full-stack-query-application.herokuapp.com](https://full-stack-query-application.herokuapp.com/)<br>
Tech stack for front-end: typescript, react, redux, sass<br>
Tech stack for back-end: typescript, node.js, express, joi, mongodb nodejs driver

Front-end is a responsive mobile first react and redux application. Utilizing redux toolkit and including custom animations and a nav menu for smaller screens.

This is a single page application with different sections. The header is a slider for showcasing favorite posts. Posts section includes popular posts as cards. This section has controls for showing new or popular posts, next and prev buttons for pagination and a search field that searches through post titles.

Back-end is an express app divided in different essential parts like controllers, middlewares, services and schemas.

Controllers process the incoming requests. Schemas are responsible for validating request's body. Services makes an api with responsibility of performing different operations on the database. The CROD operations are implemented for both favorite and post documents.

The application was deployed on heroku from a github repo.

## Screenshots

![Feature 1 Demo](public/screenshots/1.jpg)

![Feature 1 Demo](public/screenshots/2.jpg)

![Feature 1 Demo](public/screenshots/3.jpg)
