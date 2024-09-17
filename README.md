**SpaceX Info**
This project is a responsive web application built with React and TypeScript, providing users with detailed information about SpaceX rockets, launches, and it's histories.

**Tech Stack**
**1.** **React** With **TypeScript**
React is a modern frontend framework used by many of the top companies for its robust nature. It is one of the Javascript library.
  -> **React Router** is used for client-side routing to enable the navigation between pages without full-page reloads.
  
**2. Tailwind Css**
Tailwind css makes the app design responsive across mobile, tablet, and desktop devices without writing extensive custom CSS.

**3. API**
The SpaceX API is used to fetch real-time data about rockets, launches, and history. 

**Architecture and Structure**
src/
  |-components
  |  |-FilterBar.tsx   // used to filter the data's based on the search
  |  |-Footer.tsx      // Footer for the app
  |  |-Header.tsx      // Header for the app which includes the navigation items to navigate through different pages
  |  |-RocketCard.tsx  // This component is used to display rockets
  |
  |-pages
  |  |-History.tsx     // Used to display the history of spaceX Rockets
  |  |-Home.tsx        // Its the home page where the user lands when open the url
  |  |-Launches.tsx    // Used to display the history of spacex launches
  |  |-RocketInfo.tsx  // This page displays individual rocket details
  |  |-Rockets.tsx     // Displays details of all the rockets and have link to Rocketinfo for more Details
  |
  |-services
  |  |-ApiServices.tsx // This component is used to fetch the data's from the provided api based on the get request
  |
  |-App.tsx
  |-index.tsx
  |-...
  
  

  **Improvements & Future Enhancements**
  **1. User Authentication**
  Implement user authentication to create user accounts and view personalized data.

  **2. Offline Support**
  Provide user with offline support by caching the information in the browser whenever the server goes offline, which make the user to interact with the app eventhough if server goes offline.
