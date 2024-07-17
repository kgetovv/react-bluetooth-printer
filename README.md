## Project Scripts Documentation

This document provides an overview of the scripts defined in the `package.json` file of the project. 
These scripts are designed to streamline the development, building, and deployment processes for both the web and Android platforms using React and Ionic.

## Running Project Scripts

To facilitate the development and testing process, several npm scripts are defined in `package.json`. 
You can run these scripts using `npm run <script-name>` or `yarn <script-name>` if you are using Yarn. 
Here's how to execute each script:

### Web Application Scripts

- **Start the development server**: `npm run start`

This command launches the web application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The app will automatically reload if you make changes to the code.

- **Build the application for production**: `npm run build`

This compiles the web application for production deployment. The output is optimized and placed in the `build` folder.

- **Run tests**: `npm run test`

Executes the test runner in interactive watch mode, allowing you to write and run tests for your application components.

- **Eject the application**: `npm run eject`

This removes the single build dependency from your project, copying all configuration files and transitive dependencies directly into your project. 
Note: this is a one-way operation and cannot be undone.

### Ionic and Capacitor Scripts for Android Development

- **Build the Ionic app for production**: `npm run ionic-build`

Prepares the Ionic app for deployment or further native packaging. The output is optimized and placed in the `build` folder.

- **Copy web assets to the Android project**: `npm run ionic-cap:copy`

Ensures the Android app is synchronized with the latest web code. This script copies the web assets to the Android project.

- **Open the Android project in Android Studio**: `npm run ionic-cap:open`

Allows for manual adjustments, native debugging, and running the app from the IDE. This script opens the Android project in Android Studio.

- **Build the Android app**: `npm run ionic-cap:build`

Compiles the Android app using Capacitor, producing an APK or AAB file. The output is placed in the `android/app/build/outputs` folder.

- **Run the app on a device or emulator**: `npm run ionic-cap:run`

Launches the app on a connected Android device or emulator for real-time testing and debugging.

### Combined Script for Streamlined Workflow

- **Build and run everything with one command**: `npm run ionic:all`

A convenience script that sequentially executes the steps to build the Ionic app, copy web assets to the Android project, build the Android app, and run it on a device or emulator.
