# TOSHI - Pair programming exercise - React

## Introduction

TOSHI has Assistants that deliver orders from our Brands’ shops, to our customers’ houses. To allow us to accurately schedule deliveries for our Assistants, we would like to calculate and display the journey time between drop-offs, for a list of orders, and present this back to our staff on a simple web page.

We will use Google’s Distance Matrix API to perform the calculation, and store the results in the browser’s local storage.

We will provide a JSON object of orders. The JSON file contains an order reference, customer name, customer address, long/lat fields, and a delivery order column.

<br>

## Specification

As an ops manager, I should be able to view all orders as points on a map.

As an ops manager, I should be able to click a “Calculate” button, and view the total journey time, as well as the time between each drop-off, as a text component rendered on the page.

As an ops manager, I should be able to click “Reset”, and the journey time information is deleted and removed from the screen.

<br>

## Extra features

- As an ops manager, I should be able to view the route between drop-off points on a map

- The results and state are stored within the browser’s local storage, so that if I refresh the page once I’ve calculated, I’m shown the calculated journey times.

## Appendix

Public API key: ABC123
Private API key: ABC123

<br>
<br>

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
