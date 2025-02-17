# Advanced Query Web Application

A full-stack data query web application demonstrating complex search implementations. Features flexible filtering and fuzzy search capabilities.

## Key Features

- Advanced query builder interface
- Fuzzy search implementation
- Multi-criteria filtering
- Type-safe API endpoints
- Client-side state management with Redux
- Input validation with Joi schema
- MongoDB aggregation pipelines

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

Access endpoints:

- API: http://localhost:5000
- Client: http://localhost:3000

## Technical Highlights

- Type-safe full-stack implementation
- Redux-powered state management
- MongoDB query optimization
- Schema validation middleware
- Responsive query builder UI

## Screenshots

![Feature 1 Demo](public/screenshots/1.jpg)

![Feature 1 Demo](public/screenshots/2.jpg)

![Feature 1 Demo](public/screenshots/3.jpg)
