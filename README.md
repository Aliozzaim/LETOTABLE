# LETOTABLE

LETOTABLE is a user interface project that allows users to manage and track expenses. The project provides a clean and user-friendly interface for viewing and filtering expenses.

## Live Demo

Check out the live demo here: [LETOTABLE live](https://letotable-aliozzaim.vercel.app/)

## Features

- View a list of expenses in a data table.
- Filter expenses by period, category, and item name.
- Pagination for better navigation through the expense list.
- Summary table displaying total expenses per category and period.

## Installation and Setup

1. Clone the repository: `git clone <[(https://github.com/Aliozzaim/LETOTABLE.git)](>`
2. Open the `index.html` file in your web browser.

## Usage

The project provides an interface with a navigation menu, a search form for filtering expenses, and a data table for displaying expenses.

### Navigation

The navigation menu allows users to access different sections of the application.

On smaller screens, the navigation menu is hidden behind a hamburger menu that can be toggled by clicking the menu icon.

### Search Form

The search form allows users to filter expenses based on period, category, and item name.

Users can enter a start and end date to filter expenses within a specific period.

Users can select a category from the dropdown to filter expenses by category.

Users can enter an item name to search for expenses containing that item name.

Clicking the "Clear Filters" button will reset all search filters.

### Data Table

The data table displays expenses that match the applied search filters.

Expenses are paginated, and each page displays a maximum of 5 entries (configurable in the dropdown).

Users can navigate through the pages using the pagination buttons at the bottom of the table.

### Summary Table

The summary table displays the total expenses per category and period.

The "Total" row shows the total amount of all displayed expenses.

## Data

The project uses a sample dataset for demonstration purposes. The data is stored in the `app.js` file.

## Technologies Used

- HTML
- CSS (SCSS)
- JavaScript (jQuery)
- Material Components for Web (MDC) framework

## Folder Structure

- `index.html`: The main HTML file for the application.
- `css/style.css`: The CSS file containing styles for the application.
- `app.js`: The JavaScript file containing the application logic.
- `imgs/`: Folder containing images used in the application.

## Data


The application uses a predefined dataset in the `app.js` file. You can modify the data or replace it with dynamic data from an API.

## Dependencies

- Material Components Web: The project uses Material Components Web for styling and layout.
- jQuery: jQuery is used for DOM manipulation and event handling.

## Author

Ali Ozzaim
Email: Aliozzaim@gmail.com
