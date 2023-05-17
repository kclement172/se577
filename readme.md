# Project Setup Helpers

### Prerequisites
1. Make sure you have a recent version of node installed
2. You might need axios installed to run the server. To do so, change directory to the root of the project and enter npm install axios --save
3. In the server directory, create a new file and call it ".env". Copy the following into the file: "GH_ACCESS_TOKEN={the-personal-access-token-submitted-on-blackboard}"
4. In VS Code, go to "File" and select "Save All"


### Running The Client
In VS Code, right click on the Client Directory in the Explorer Window, and select "Copy Path"
Enter the following commands in order:

```
cd {paste-the-client-directory-path-here}
npm install
npm run dev
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
The actual feature add-on for this submission is pulling some of the data from the ghsecure APIs, and displaying the data in the new "GithubURLPage" and "GithubUserDataPage" pages.
