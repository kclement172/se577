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
