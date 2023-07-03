[![Playwright Tests](https://github.com/JOSEW383/movie-finder/actions/workflows/playwright.yml/badge.svg)](https://github.com/JOSEW383/movie-finder/actions/workflows/playwright.yml)
# 🎥 Movie Finder App

This React application allows users to search for movies through an external API and display a list of results.
<p><img src="https://github.com/JOSEW383/movie-finder/blob/master/public/MovieFinderDemo.gif" alt="Demo" width="50%" height="50%" /></p>

## 🎯 Features

- Search for movies by title.
- List of movies with basic information.
- Pagination of results.
- Responsive design.
- Automatic search on input change.
- Avoid duplicate searches on submit button.
- Debounce search input.

## 🔧 Installation & 🚀 Run

To run this project, you need to have Node.js and npm installed on your computer. Then follow these steps:

1. Clone the repository into your local machine.
2. Create .env file with ENV variables (see .env.example).
2. Install dependencies: `npm run build`
3. Run the application: `npm run dev`

## 🧪 Testing

This app was tested using [playwright](https://playwright.dev/), to run the test set follow these steps:

1. Run tests: `npx playwright test`
2. View results: `npx playwright show-report`

## 🔗 APIs used

- [The Open Movie Database](https://www.omdbapi.com)

## 🤖 Technologies used

- [React](https://reactjs.org/)
  - **Hooks**: [UseState](https://reactjs.org/docs/hooks-state.html), [UseEffect](https://reactjs.org/docs/hooks-effect.html), [CustomHooks](https://reactjs.org/docs/hooks-custom.html), [UseRef](https://reactjs.org/docs/hooks-reference.html#useref), [UseCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
- [Lodash](https://lodash.com/)
- [Water.css](https://watercss.kognise.dev/)
- [Vite](https://vitejs.dev/)
- [Playwright](https://playwright.dev/)
- [Github Actions](https://docs.github.com/en/actions)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
