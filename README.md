# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*


### Screenshot

![Desktop preview](https://github.com/Rgit915/rest-api-countries/blob/master/screenshots/rest-countries-api-filter-by-region-solution-preview)

![Tablet preview](https://github.com/Rgit915/rest-api-countries/blob/master/screenshots/rest-countries-api-tablet-single-country-detail-solution-preview.png)

![Mobile preview](https://github.com/Rgit915/rest-api-countries/blob/master/screenshots/rest-countries-api-mobile-filter-solution-preview.png)


### Links

- Solution URL: [GitHub repo](https://github.com/Rgit915/rest-countries-api)
- Live Site URL: [Live Demo](https://rest-countries-api-rora.netlify.app/)


## My process

1. **Setup** the project using Vite and Tailwind CSS.
2. Created reusable UI components like `Header`, `SearchInput`, and `CountryDetail`.
3. Managed theme toggling using `useState`, `useEffect`, and `localStorage`.
4. Added search and filter functionality using controlled inputs.
5. Configured routes with `react-router-dom` to support dynamic pages.
6. Implemented the single country detail page and border country navigation.
7. Styled all components responsively with Tailwind’s utility classes.



## ✅ What I Learned

- How to structure a React app with nested and dynamic routes
- Lifting state and using prop drilling effectively
- Storing and retrieving user preferences from `localStorage`
- How to use Tailwind CSS for dark mode and responsive design
- Creating shared layout components using `<Outlet />` from React Router
- Mapping over and filtering complex data structures
- Writing clean and descriptive Git commit messages


### Built with
- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## 🔗 Useful Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs) – For utility-first styling
- [React Docs](https://reactjs.org/docs/getting-started.html) – To structure the component logic
- [Vite Guide](https://vitejs.dev/guide/) – For setting up fast development

## Author

- GitHub - [Rgit915](https://github.com/Rgit915)
- Frontend Mentor - [@Rgit915](https://www.frontendmentor.io/profile/Rgit915)