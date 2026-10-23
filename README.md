# Profile App

A simple and interactive profile exercice built with **React**, **Vite**, and **Tailwind CSS**.

The exercice fetches user profiles from an external API and displays each profile with an independent counter.

## Features

- **Dynamic profiles:** Fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
- **Profile display:** Shows each user's profile image and username.
- **Independent counters:** Each profile has its own counter, managed with React's `useState` hook.
- **Increment and decrement:** Use the `+` and `−` buttons to update the counter.
- **Counter limits:** Each counter stays between `0` and `20`.
- **Dynamic colors:** The counter's color changes according to its value:
  - Red: `0–10`
  - Orange: `11–15`
  - Green: `16–20`
- **Console logging:** Displays each counter's value in the browser console whenever it changes.
- **Loading and error handling:** Displays a loading message while fetching profiles and an error message if the request fails.
- **Responsive styling:** Uses Tailwind CSS utility classes to style the interface.

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- JSONPlaceholder REST API
- React Hooks: `useState`, `useEffect`, and `use` for context access

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Installation

Clone the repository or open the project directory, then install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## How to Use

1. Open the application in your browser.
2. View the profiles loaded from the API.
3. Click `+` to increase a counter.
4. Click `−` to decrease a counter.
5. Each counter remains between `0` and `20`.
6. Observe the counter's color as its value changes.
7. Open the browser developer tools (`F12`) and select the **Console** tab to see counter updates.

## Project Structure

```text
profile-app/
├── public/
│   └── profile.jpg
├── src/
│   ├── App.jsx
│   ├── ProfilesContext.jsx
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint, if configured |

## Future Improvements

- Add individual profile images.
- Improve the responsive layout.
- Add unit tests for the counter logic.
- Enhance accessibility and user experience.

## License

This project is intended for learning and educational purposes.
