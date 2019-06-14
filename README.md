### Client

First you will need to `cd client` and then `npm install`
## Available Scripts

In the project directory, you can run:

### `cd client; npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `cd client; npm test`

Launches the test runner in the interactive watch mode.<br>

### Server
The server was built with Spring and Gradle. When you import the project please import it with Gradle.

### `./gradlew clean build` OR using the gradle task bar `Execute Gradle Task` clean build
Cleans the project and creates a new build - this will also run the tests.

### `./gradlew bootRun` OR using the gradle task bar `Execute Gradle Task` bootRun
This will start the server on http://localhost:8080