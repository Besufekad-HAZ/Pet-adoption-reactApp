# Pet-adoption-reactApp

The Pet Adoption React App is a web application designed to connect potential pet adopters with available pets for adoption.

## Features

- Browse available pets by location, animal type, and breed.
- View detailed information about each pet, including images and descriptions.
- Adopt a pet by clicking the "Adopt" button.

## Technologies Used

- React: For building the user interface.
- React Router: For handling navigation.
- React Query: For data fetching and caching.
- Fetch API: For making HTTP requests to the backend.
- CSS: For styling the application.

## Setup and Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/Pet-adoption-reactApp.git
   cd Pet-adoption-reactApp

   ```

2. Install dependencies:

```sh
 npm install
```

3. Start the development server:

```sh
 npm run dev
```

4. Open your browser and navigate to http://localhost:3000 to see the application in action.

Project Structure
src/: Contains the source code for the application.
components/: Contains React components like Pet, Results, Carousel, and SearchParams.
fetchQueries/: Contains functions for fetching data from the backend, such as fetchPet, fetchBreedList, and fetchSearch.
useBreedList.js: Custom hook for fetching breed lists based on the selected animal.
App.jsx: Main entry point for the React application.
public/: Contains the main HTML file and other static assets.

Contributing

1. Contributions are welcome! Please follow these steps to contribute:
2. Fork the repository.
3. Create a new branch for your feature or bugfix.
4. Commit your changes and push the branch to your fork.
5. Create a pull request with a detailed description of your changes.
