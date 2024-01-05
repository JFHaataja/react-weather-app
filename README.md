# React Weather App ("Weather Wise")

React Weather App (in-app name: Weather Wise) is a React.js SPA Front End application which utilises the AccuWeather API. The app is running live on Vercel. Note: this project is still work in progress.

## Application overview

This is a one page demo application for a fictional weather company called Weather Wise. The users can use the app to search for current weather data.

## Live demo

Click the link below to try out the live version:

[Live demo of Weather Wise](https://weather-wise-app.vercel.app/)

## Get started

1. To set up the app execute the following commands.

```bash
git clone https://github.com/JFHaataja/react-crud-app
cd react-crud-app
npm install
```

2. After everything has finished installing, you need to then create an empty .env file at the root level of the project and add the necessary Rest API endpoint URL:s into it.

4. Here is a list of available commands you can run:

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

`npm run build`

Builds the app for production to the build folder.

`npm run lint`

Analyzes the code with ESlint.

`npm run prettier`

Formats the app with Prettier.

`npm run lint`

Analyses the app with Eslint.

`npm run eject`

Note: this is a one-way operation. Once you `eject`, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Project Structure

```bash
public
|
+-- icons             # Weather icons
|
src
|
+-- assets            # Images and CSS files
|
+-- components        # shared components and pages used across the entire application
```

## Tech Used in the Project

**Front End:** React.js, AccuWeather API, CSS, Prettier, Eslint, Axios, Vercel

**Layout Design:** Figma, Adobe Express
