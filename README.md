# Advanced Queries Web Application

Live demo: [queries-web-application.vercel.app](https://queries-web-application.vercel.app)

A single page web application and a personal project I designed And Developed. My focus here was to implement the design while following clean code principles, in styling, writing components and developing the backend. The main feature I worked on here is the ability for users to search through posts and filter the results. I also enforced type safety in full-stack and did extensive testing in the frontend.

## Key Features

- Fuzzy search implementation
- Multi-criteria filtering
- Client-side state management with Redux Toolkit
- Custom interactive slider component with touch gesture support
- Unit and integration tests in the frontend using Jest and React Testing Library
- Type-safe API endpoints
- Custom slider in frontend
- Semantic HTML and SEO optimization
- RESTful APIs for full CRUD operations in the backend
- Custom React hooks
- Mobile-first implementation with Sass and BEM methodology
- Responsive mobile friendly design
- Input validation with Joi schema in the backend

## Tech Stack

**Frontend:**

- React + TypeScript
- Redux Toolkit (state management)
- Sass styling

**Backend:**

- Express.js + TypeScript
- MongoDB native driver
- Joi validation
- TypeScript compilation

**Database:**

- MongoDB

**DevOps:**

- GitHub Actions (CI/CD)

## Setup

1. Clone repository
2. Install dependencies: `npm run install-all`
3. Use `.env.example` to configure `.env` with MongoDB URI
4. Populate database: `npm run populate-database`
5. Start development: `npm run dev`

## Development

- `npm run dev`: Concurrent server/client (TypeScript watch mode)
- `npm run build`: Full production build (compiles both TS and React)
- `npm start`: Production server start

## Deployment

The CI/CD pipeline is configured through GitHub Actions (`.github/workflows/main.yml`), implementing:

- Automated testing on push
- Build verification

Access endpoints:

- API: http://localhost:5000
- Client: http://localhost:3000

## Screenshots

![Feature 1 Demo](public/screenshots/1.jpg)

![Feature 1 Demo](public/screenshots/2.jpg)

![Feature 1 Demo](public/screenshots/3.jpg)
