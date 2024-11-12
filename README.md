# WatchWiz

WatchWiz is a movie browsing application that lets users search, view, and discover movies. With Firebase Authentication for user login/signup, users can explore personalized content and view detailed information about each movie. The app is built using React, Vite, Firebase, Redux Toolkit, and Tailwind CSS.

## Demo

Explore the live demo here: [WatchWiz](https://watchwiz-93975.web.app)

## Features

- **User Authentication**: Sign up and login functionalities powered by Firebase Auth.
- **Movie Browsing**: Users can browse popular movies, view details, and explore movie backgrounds and overviews.
- **Responsive Design**: Optimized for different screen sizes using Tailwind CSS.
- **Search Functionality**: Real-time movie search with debounce to minimize API calls and a manual search option.
- **User State Management**: Managed using Redux Toolkit for efficient global state control.

## Tech Stack

- **React**: Frontend framework for UI components.
- **Vite**: Fast development server and build tool.
- **Redux Toolkit**: State management for managing user data and search functionality.
- **Firebase Authentication**: Secure login and signup.
- **Tailwind CSS**: Styling framework for a responsive and visually appealing UI.
- **React Router**: Navigation and routing in the app.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/watchwiz.git
   cd watchwiz
2. Install dependencies:
    ```bash
    npm install
3. Set up Firebase:
    Create a Firebase project at Firebase Console.
    Enable Email/Password Authentication.
    Add your Firebase configuration to a .env file:
    ```env
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
4. Start the development server:
    ```bash
    npm vite dev

## Usage

1. **Sign Up / Login**: 
   - Navigate to the login/signup page to register a new account or sign in with an existing one using your email and password. 
   - Firebase Authentication securely handles login and signup processes, giving you access to personalized features upon signing in.

2. **Top Movie Background Display**:
   - The main movie section dynamically features a selected top movie, displaying a high-resolution background image and detailed information.
   - This immersive background changes based on the featured movie, creating a visually engaging experience.

3. **Browse Popular Movies**:
   - The main screen provides a curated list of trending and popular movies, making it easy to explore without needing to search.
   - Scroll through the **horizontal movie lists** to browse different genres or categories.

4. **Dynamic Movie Search**:
   - Use the search bar to find movies by title. The search includes **debounce functionality** to limit API calls as you type, optimizing performance.
   - You can perform a **manual search** by pressing "Enter" or clicking the search button.
   - Movies that match your search are dynamically displayed, with options to view additional details by clicking on any movie card.


### Key Components

- **Login**: Handles user authentication with Firebase, allowing toggling between login and signup forms.
- **MainContainer**: Displays the main movie information and highlights the top movie.
- **MovieList**: Renders a horizontal scrolling list of movie cards.
- **MovieCard**: A single movie card that displays a movie's poster and title.

## License

This project is licensed under [The Unlicense](http://unlicense.org/), allowing you to use and modify the code freely.
