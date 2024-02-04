 # React Movie Booking App

This project is a simple React application that allows users to browse a list of shows, view details of a selected show, and book movie tickets.

## Features

- **Show List Page:**
  - Displays a list of shows fetched from the TVMaze API.
  - Clicking on a show navigates to the Show Summary Page.

- **Show Summary Page:**
  - Displays detailed information about a selected show.
  - Movie booking form with basic validation for name and mobile number.
  - Upon successful booking, navigates to the Confirmation Page.

- **Confirmation Page:**
  - Confirms the successful booking of the movie ticket.
  - Displays a thank you message.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **React Router:** For handling navigation in a single-page application.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **API:** TVMaze API for fetching show details.

## Folder Structure

- **src/components:**
  - `ShowList.js`: Component for displaying the list of shows.
  - `ShowSummary.js`: Component for displaying detailed information about a selected show and handling movie bookings.
  - `ConfirmationPage.js`: Component for displaying the confirmation of a booked ticket.

- **src/App.js:** Main component for setting up routes using React Router.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`

## Usage

1. Open the application in your web browser.
2. Explore the list of shows on the Show List Page.
3. Click on a show to view its details on the Show Summary Page.
4. Fill out the movie booking form with your name and mobile number.
5. Click the "Book Now" button to confirm the booking.
6. You will be redirected to the Confirmation Page with a thank you message.

Feel free to customize and extend the functionality based on your requirements!

https://movieboooking.netlify.app/
