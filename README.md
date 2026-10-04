# Event Management System

## Project Brief
Project Brief 06 - Event Management System

## Sprint 9
Interactive React interface using Props, State, and event handling

## Technology Stack
- React.js
- Node.js
- Express.js
- MongoDB

## Frontend
The frontend is developed using React.js with Vite.

## Frontend Structure
- Assets
- Components
- Layouts
- Pages
- Routes
- Services
- Hooks
- Utils

## How to Run Frontend

cd client
npm install
npm run dev

## Main Pages
- Home
- Login
- Dashboard
- Profile
- Not Found

## Reusable Components
- Navbar
- Footer
- Sidebar
- Button
- Card
- PageTitle
- Loader

The frontend uses React Router for client-side navigation and shared layouts. Reusable interface components are organized in `client/src/components/ui`, with the Navbar and Footer shared through the main layout.

Application styles are organized in `client/src/styles`: `global.css` provides shared resets and imports the style layers, `layout.css` defines the page shell and shared layout, `components.css` styles reusable UI, and `responsive.css` adapts the interface for tablet and mobile screens.

### Sprint 9: Props and State

`WelcomeMessage` receives the participant's name and project name through props. The Dashboard stores the name and planning-tip visibility with `useState`; a controlled input updates the welcome message as the user types, and a button toggles the planning tip. `PageTitle`, `Card`, and `Button` are also reused with page-specific props and click handlers.

In this project, **props** carry read-only data from a parent to a reusable child component. The Dashboard passes the current name and project name to `WelcomeMessage`, which displays those values without owning or changing them. **State** stores information that changes while a component is being used: the Dashboard uses `useState` to keep the organizer's input and whether a planning tip is visible. The input's `onChange` handler updates the name, so React renders the new welcome message as the user types. A button click toggles the tip, demonstrating event handling and conditional rendering. `PageTitle`, `Card`, and `Button` continue to receive configurable props so pages can share consistent components while displaying their own content and responding to their own actions.