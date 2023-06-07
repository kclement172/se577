# Project Setup Helpers

### Prerequisites
1. Make sure you have a recent version of node installed
2. You might need axios installed to run the server. To do so, change directory to the root of the project and enter npm install axios --save
3. In the server directory, create a new file and call it ".env". Copy the following into the file: "GH_ACCESS_TOKEN={the-personal-access-token-submitted-on-blackboard}"
4. In the server directory, create a new file and call it ".env". 
5. Copy the following into the .env file: "GH_ACCESS_TOKEN={the-personal-access-token-submitted-on-blackboard-for-GitHub}"
6. On a separate line, copy the following into the .env file: "OPEN_WEATHER_API_ACCESS_TOKEN={the-personal-access-token-submitted-on-blackboard-for-OpenWeatherMap}"
7. In VS Code, go to "File" and select "Save All"


### Running The Client
In VS Code, right click on the Client Directory in the Explorer Window, and select "Copy Path"
Enter the following commands in order:

```
cd {paste-the-client-directory-path-here}
npm install
npm run dev
Note: I noticed when cloning the project that there was a security vulnerability found when installing the client. The open weather map API was also not working initially. However, running 'npm audit fix' addressed the issue, and got the app working again. 
```

### Running The Server
In VS Code, right click on the Server Directory in the Explorer Window, and select "Copy Path"
Enter the following commands in order:

```
cd {paste-the-server-directory-path-here}
npm install
npm run server
```

### Note
The actual feature add-on for this submission includes:
1. A weatherapp that displays the current weather, and weather descriptions, of my home town of "Cinnaminson, NJ"
2. A calculator that runs in the browser
3. A png file that contains the C4 diagram of the project software architecture

### Architecture Description
1. Please see "SE 577 Final Project Diagram" for the PDF of the model of my Final Project.
2. Architecture Decisions: For this project, a user will start by visitting a Single Page Web Application, where the server sends information to the browser as needed to load information for the application, as opposed to loading and reloading entire pages whenever any certain aspect needs to be updated. The front end uses Vue, a framework for building user interfaces and Single Page Applications via Javascript/Typescript. It was chosen for its simplicity and ease in getting an application up and running. The SPA itself contains 7 pages: Welcome, About, Repository, GitHub URL Info, GitHub User Data, Weather App, and Calculator. Depending on the page, it will have everything it needs to run once it is first loaded, or it will interact with an API server to request data dynamically and display it to the page for the user. Keeping the API server separate from the client application has benefits in terms of separating responsibility and coupling, but it also serves a key role in dispatching requests to APIs which require authorization. Through reverse proxying, it can send a request to an API with a sensitive user token while keeping it secure. The server also dispatches local requests to a JSON file with mock data.
3. Quality Attributes:  
